# Deploy NicheCore to Google Cloud Run

This runbook bootstraps GCP from zero and wires the `dlmastery/naturecure`
GitHub repo so that every push to `main` redeploys `nichecore/` to Cloud Run.

The container itself is defined in `nichecore/Dockerfile` (multi-stage,
Next.js 16 standalone output, runs as non-root `node` on port 8080). The
build+deploy recipe is `nichecore/cloudbuild.yaml`. The CI trigger is
`.github/workflows/deploy-cloudrun.yml`.

---

## 0. Prerequisites

- `gcloud` CLI installed and logged in (`gcloud auth login`).
- A billing-enabled GCP account.
- Owner/Editor on the target GCP project (or permission to create one).

Pick values (replace throughout):

```bash
export PROJECT_ID=naturecure-prod
export REGION=us-central1
export REPO=nichecore
export SERVICE=nichecore
export DEPLOYER_SA=cloud-run-deployer
```

---

## 1. Create the project & enable APIs

```bash
gcloud projects create "$PROJECT_ID" --name="NicheCore"
gcloud config set project "$PROJECT_ID"

# Link billing (replace BILLING_ACCOUNT_ID with one from `gcloud billing accounts list`)
gcloud billing projects link "$PROJECT_ID" --billing-account=BILLING_ACCOUNT_ID

gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  iamcredentials.googleapis.com
```

---

## 2. Artifact Registry repo

```bash
gcloud artifacts repositories create "$REPO" \
  --repository-format=docker \
  --location="$REGION" \
  --description="NicheCore container images"
```

Resulting image path: `us-central1-docker.pkg.dev/$PROJECT_ID/nichecore/app:<sha>`.

---

## 3. Deployer service account

```bash
gcloud iam service-accounts create "$DEPLOYER_SA" \
  --display-name="Cloud Run deployer (GitHub Actions)"

DEPLOYER_EMAIL="$DEPLOYER_SA@$PROJECT_ID.iam.gserviceaccount.com"

for ROLE in \
  roles/run.admin \
  roles/iam.serviceAccountUser \
  roles/storage.admin \
  roles/artifactregistry.writer \
  roles/cloudbuild.builds.editor \
  roles/logging.logWriter ; do
  gcloud projects add-iam-policy-binding "$PROJECT_ID" \
    --member="serviceAccount:$DEPLOYER_EMAIL" \
    --role="$ROLE"
done
```

`run.admin` + `iam.serviceAccountUser` lets it deploy to Cloud Run; the
others let Cloud Build push images and stream logs.

---

## 4. Workload Identity Federation (preferred — keyless GitHub auth)

```bash
# 4a. Create a pool
gcloud iam workload-identity-pools create github \
  --location=global --display-name="GitHub Actions pool"

POOL_ID=$(gcloud iam workload-identity-pools describe github \
  --location=global --format='value(name)')

# 4b. Create a provider trusting GitHub OIDC, scoped to your repo
gcloud iam workload-identity-pools providers create-oidc github \
  --location=global --workload-identity-pool=github \
  --display-name="GitHub OIDC" \
  --attribute-mapping="google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.ref=assertion.ref" \
  --attribute-condition="assertion.repository=='dlmastery/naturecure'" \
  --issuer-uri="https://token.actions.githubusercontent.com"

# 4c. Let GitHub Actions impersonate the deployer SA
gcloud iam service-accounts add-iam-policy-binding "$DEPLOYER_EMAIL" \
  --role=roles/iam.workloadIdentityUser \
  --member="principalSet://iam.googleapis.com/$POOL_ID/attribute.repository/dlmastery/naturecure"

# 4d. Grab the provider resource path for the GitHub secret
gcloud iam workload-identity-pools providers describe github \
  --location=global --workload-identity-pool=github \
  --format='value(name)'
# → projects/123456789/locations/global/workloadIdentityPools/github/providers/github
```

### GitHub repo secrets (Settings → Secrets and variables → Actions)

| Secret | Value |
|---|---|
| `GCP_PROJECT_ID` | `naturecure-prod` |
| `GCP_WORKLOAD_IDENTITY_PROVIDER` | output of step 4d |
| `GCP_SERVICE_ACCOUNT` | `cloud-run-deployer@naturecure-prod.iam.gserviceaccount.com` |

### Fallback: JSON service-account key (only if WIF is blocked)

```bash
gcloud iam service-accounts keys create key.json \
  --iam-account="$DEPLOYER_EMAIL"
```

Paste the full JSON into a single secret named `GCP_SA_KEY` and delete the
local `key.json` immediately. Do **not** commit it.

---

## 5. First deploy (manual one-shot — bypasses GitHub Actions)

```bash
gcloud builds submit \
  --config nichecore/cloudbuild.yaml \
  --substitutions=_REGION=us-central1 \
  ./nichecore
```

That single command builds, pushes, and deploys. Cloud Build prints the
service URL at the end (also visible via `gcloud run services list`).

---

## 6. Custom domain mapping

```bash
# Verify the domain once in Webmaster Central, then:
gcloud run domain-mappings create \
  --service="$SERVICE" \
  --domain=naturecure.com \
  --region="$REGION"

# Or via the recommended Cloud Load Balancer path for apex + www:
# https://cloud.google.com/run/docs/mapping-custom-domains#run-services
```

Cloud Run prints the DNS records (A/AAAA + CNAME for `www`) you need to
add at your registrar.

---

## 7. Cost expectations

Cloud Run free tier (per month):

- 2 M requests
- 360 K vCPU-seconds, 180 K GiB-seconds
- 1 GB egress in North America

Beyond that, with our config (1 vCPU / 1 GiB / max-instances=3):

- **Requests**: $0.40 per million invocations
- **CPU**: ~$0.000024 / vCPU-second
- **Memory**: ~$0.0000025 / GiB-second
- **Egress**: $0.12/GiB (NA → NA) to $0.23/GiB (NA → APAC)

Realistic launch traffic (≤100k req/mo): comfortably $0/mo.

Artifact Registry storage: $0.10/GiB-month. The standalone image is ~180 MB;
keeping the last 5 builds → < $0.10/mo. Set a lifecycle policy:

```bash
gcloud artifacts repositories set-cleanup-policies "$REPO" \
  --location="$REGION" \
  --policy=- <<'EOF'
[{"name":"keep-last-5","action":{"type":"Keep"},
  "mostRecentVersions":{"keepCount":5,"packageNamePrefixes":["app"]}}]
EOF
```

---

## 8. Rollback

```bash
# List recent revisions
gcloud run revisions list --service="$SERVICE" --region="$REGION"

# Pin 100% traffic to a known-good revision
gcloud run services update-traffic "$SERVICE" \
  --region="$REGION" \
  --to-revisions=nichecore-00007-abc=100
```

To skip a deploy without reverting: include `[skip deploy]` in the commit
message — the GitHub workflow honours it.

---

## 9. Local sanity check (optional)

```bash
cd nichecore
docker build -t nichecore-local .
docker run --rm -p 8080:8080 nichecore-local
# → http://localhost:8080
```

---

## 10. Day-2 ops

| Need | Command |
|---|---|
| Tail logs | `gcloud run services logs tail $SERVICE --region=$REGION` |
| Bump memory to 2 GiB | `gcloud run services update $SERVICE --region=$REGION --memory=2Gi` |
| Add env var | `gcloud run services update $SERVICE --region=$REGION --update-env-vars=KEY=value` |
| Delete | `gcloud run services delete $SERVICE --region=$REGION` |

Region choice: `us-central1` because it has the broadest service coverage,
lowest egress, and the largest Cloud Run free-tier headroom. Switch to
`asia-south1` (Mumbai) or `europe-west1` if the founder's audience
concentrates there — change `_REGION` in `cloudbuild.yaml` and re-deploy.
