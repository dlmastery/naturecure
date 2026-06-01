# CLAUDE.md — NicheCore project checkpoint

**Purpose:** This file is loaded into every new Claude Code session for this repo. It captures everything a future session needs to pick up cleanly after a crash, context loss, or pause. Update it whenever a load-bearing state change happens.

**Last updated:** 2026-05-31 by Opus 4.7 — mid-session (Bell's palsy + SSHL dossiers in flight, DecisionHero redesign in progress).

---

## What this repo is

**NicheCore** — the evidence-OS for natural health. A graded, OTC-strict, home-administrable catalogue of 76-78 ailment dossiers (each 10-18k words) with progressive-disclosure UX, AI-research-factory backend, and a quality-screened supplement-bundle storefront.

- **GitHub:** `dlmastery/naturecure` (public)
- **Owner:** eranti@gmail.com (founder, dlmastery user)
- **Live site:** https://nichecore-tytn7sfqja-uc.a.run.app (Cloud Run, us-central1)
- **GCP project:** `nichecore-app` (billing: Firebase Payment `01231D-58045D-4B0893`)
- **Working directory:** `C:\Users\evija\naturecure` (Windows · PowerShell 5.1 + bash via Git Bash)

## Architecture at a glance

```
naturecure/
├── nichecore/                            # Next.js 16.2.6 app (App Router, Tailwind v4, React 19.2.4)
│   ├── app/                              # Server-component pages + dynamic routes
│   │   ├── page.tsx                      # Home — hero, journey-search, regime stages, evidence doctrine
│   │   ├── atlas/page.tsx                # 76-journey browse + grade-legend strip
│   │   ├── [domain]/[slug]/page.tsx      # Catch-all dossier renderer (50+25+2 journeys)
│   │   ├── skin/vitiligo/page.tsx        # Bespoke flagship (overrides catch-all)
│   │   ├── c/[category]/page.tsx         # Category hub
│   │   ├── c/[category]/package/page.tsx # Safety quiz + bundle wizard
│   │   ├── companion/ expert/ progress/ guru/ admin/
│   │   └── globals.css                   # @theme tokens + .dossier-prose + table polish
│   ├── components/
│   │   ├── app-shell.tsx                 # Top-level AppShell — short-circuits on dossier routes
│   │   ├── journey-search.tsx            # Home-hero search (51-journey fuzzy + Levenshtein-near + submit-for-future)
│   │   ├── layout/
│   │   │   ├── dossier-shell.tsx         # Sticky chrome for dossier pages
│   │   │   ├── section-anchor.tsx        # H2 section opener with eyebrow + ordinal + lede
│   │   │   ├── deep-dive.tsx             # Collapsible for `#### Open the science` blocks
│   │   │   └── decision-hero.tsx         # (BEING BUILT 2026-05-31) — above-fold decision card grid
│   │   ├── nav/
│   │   │   ├── left-rail-nav.tsx         # Expandable tree (H2 + H3 children) + GO TO site-nav block
│   │   │   ├── mind-map-strip.tsx        # Sticky horizontal flex-wrap chip-strip
│   │   │   ├── mobile-dock.tsx
│   │   │   └── mobile-tab-strip.tsx
│   │   ├── safety-quiz.tsx               # 4-step intake routing to expert if flagged
│   │   ├── bundle-card.tsx, category-card.tsx, confirm-card.tsx
│   │   └── ui.tsx                        # GradeBadge, FreshnessChip, RiskTag, Stat, etc.
│   ├── lib/
│   │   ├── data.ts                       # Journey list (76-78 entries), bundles, experts, sources, factory jobs
│   │   ├── research.ts                   # readDossier + splitDossierByH2 + splitChunkByH3 + DEEP_DIVE marker
│   │   ├── evidence.ts                   # EVIDENCE_GRADES (A/B/C/D/T/H/X), GRADE_ORDER, ACCENTS, FRESHNESS_LABEL, ALLOWED/FORBIDDEN wording
│   │   ├── categories.ts, types.ts, vitiligo.ts
│   │   ├── use-active-section.ts         # Scroll-spy (IntersectionObserver rootMargin -30% / -60%)
│   │   └── use-keyboard-nav.ts           # ←/→/J/K/PgUp/PgDn/1-9/Home/End
│   ├── research/                         # 78 markdown dossiers (50 baseline + 25 expansion + 2 new + tinnitus exemplar)
│   │   └── *.md                          # YAML front matter + v6.2.x schemaVersion + ralph 3/3
│   ├── tests/mock-fidelity.spec.ts       # 16 Playwright tests
│   ├── Dockerfile                        # multi-stage node:22-alpine, non-root, port 8080
│   ├── cloudbuild.yaml                   # 3 steps: docker build → AR push → Cloud Run deploy
│   ├── .dockerignore                     # excludes node_modules/.next/tests/git; KEEPS research/*.md
│   └── next.config.ts                    # output: "standalone" + Turbopack root pinned
├── .claude/skills/
│   └── ailment-360-research/SKILL.md     # The dossier-research skill (current: v6.2.4 — see Skill state below)
├── .github/workflows/deploy-cloudrun.yml # Push-to-main auto-deploy (NEEDS WIF or SA-key secret to fire)
├── docs/
│   ├── JOURNEY_REDESIGN_SPEC.md
│   ├── MOCK_UX_REPORT.md
│   └── DEPLOY_CLOUDRUN.md                # Founder runbook for GCP bootstrap
├── memory/                               # Auto-memory from previous sessions (~/.claude path)
├── STATUS.md                             # Per-session resume snapshot
└── CLAUDE.md                             # This file
```

## Atlas state (78 journeys after Bell's palsy + SSHL land)

**Skin (7):** vitiligo · acne · eczema · psoriasis · melasma · skin-aging · rosacea
**Hair (4):** thinning · stress-shedding · dandruff · premature-greying
**Metabolic (7):** weight-belly-fat · glp1-maintenance · cravings · blood-sugar · insulin-resistance · T2D · T1D
**Gut (6):** bloating · IBS · reflux · constipation · microbiome-reset · IBD
**StressSleep + Mental (9):** sleep-onset · night-waking · cortisol · burnout · anxiety · low-mood · emotional-eating · OCD · caregiver-burnout
**BrainEye (12 — was 10, now 12 after Bell's + SSHL):** tinnitus · brain-fog · memory-aging · screen-eye-strain · dry-eye · macular · migraine · peripheral-neuropathy · stroke-recovery · vertigo · **bells-palsy** [in flight] · **sshl-hearing-loss** [in flight]
**MobilityEnergy (8):** joint-stiffness · knee-mobility · tendon-recovery · sports-recovery · daily-energy-fatigue · OA · osteoporosis · fibromyalgia
**HormoneVitality (12):** PMS · PCOS · menopause · fertility · men's-T · libido · prostate · Hashimoto · UTI-recurrence · endometriosis · pregnancy-postpartum · kidney-stones
**ImmuneOral (5):** immune-allergy · respiratory-seasonal · oral-gum-breath · asthma · COPD
**CardioLiverLongevity (6):** heart-cholesterol-bp · liver-alcohol-recovery · longevity · NAFLD/MASH · AFib · CVI

Every dossier passes the v6.2.x contract — plain-English-first scaffold, 3-7 specific H3s per H2 (zero "Overview" placeholders), every table TL;DR-column, §13.7 honest evidence-tier comparison, §10.7 emerging+adjunctive H2, Cochrane honesty, STRICTLY OTC + home-only, zero US-regulator authority, six traditions ≥2 entries, schemaVersion v6.2.x, ralph 3/3.

## Domain → category mapping (used for /c/[category] routing + parent-context)

`lib/data.ts → DOMAIN_TO_CATEGORY` map. Skin→skin-pigmentation · Hair→hair-scalp · Metabolic→weight-metabolism · Gut→gut-bloating · StressSleep→sleep-stress · BrainEye→brain-focus · MobilityEnergy→joints-mobility · HormoneVitality→women-hormone · ImmuneOral→null · CardioLiverLongevity→null. Per-journey overrides in `PARENT_OVERRIDES` map.

## NON_APP_SHELL_TOP route prefixes (in components/app-shell.tsx)

These top-level paths render with DossierShell chrome (skipping AppShell): `c, skin, hair, weight, metabolic, gut, sleep, stress, mood, brain, eyes, joints, recovery, energy, women, fertility, men, ears, immune, respiratory, oral, heart, liver, longevity, thyroid, urinary`.

If a new journey route uses a NEW top-level prefix, add to this set OR the route falls through to AppShell (double-chrome bug).

## v6.2.x Skill state

**Path:** `.claude/skills/ailment-360-research/SKILL.md`
**Current version:** v6.2.4 (in-progress — folding overnight v7 callouts + founder's progressive-disclosure / decision-hero requirements)
**Banner:** `> **Version: v6.2.x** — ...` near the top of the skill file

**Cumulative load-bearing rules:**
1. **Progressive disclosure** — every section opens with `**For you, in plain words.**` → `**Quick start.**` → `#### Open the science` (verbatim labels — website parser keys on these)
2. **Tree-friendly H3s** — 3-7 specific H3 sub-sections per H2, ≤5 words, action-oriented. Forbidden H3 titles: Overview, Details, Background, Introduction, More information, Mechanism (banned because they break the website's left-rail tree)
3. **Honest §13.7 evidence-tier comparison table** — 25-40 rows, Approach | Tier | Plain-words verdict (≤25 words) | Where it fits. INCLUDES things we do NOT recommend
4. **Cochrane / systematic-review honesty discipline** — null findings honestly surfaced even for popular/marketed interventions. Canonical example: Ginkgo Cochrane null for primary tinnitus
5. **Emerging-therapies H2 (§10.7)** with 10.7.1 home-usable / 10.7.2 adjunctive behavioural / 10.7.3 clinic-route split. Clinic-only options NEVER in home regime
6. **Adjunctive therapy coverage (mandatory)** — CBT/CBT-i, MBCT/MBSR, condition-specific habituation (TRT/ERP/vestibular rehab), biofeedback, sound/light/vagal as relevant
7. **Word ceiling** — 18k absolute; 13k overnight-tight for new dossiers (proved safe vs socket timeout)
8. **v6.2.1**: every table carries TL;DR (plain English) column AS LAST text column; "Overview" forbidden as H3
9. **v6.2.2**: self-check has dedicated table-TL;DR item; forbidden H3 list mirrored to Forbidden Language section; 3-tier scaffold named as canonical; Source Policy forward-refs Rule 4
10. **v6.2.3**: Web-rendering contract — shell provides clickable brand → home, back-link → atlas, GO TO site-nav. Writers must not write "go back / use browser back button" prose
11. **v6.2.4** (in progress): DecisionHero parseable surface — dossier opener must contain canonical-parseable Quick-start bullets + red-flags + don't-recommend + 24-hour-plan summary so the website's decision-hero can extract without new YAML fields. Plus the 8 v7 callouts the overnight 25-expansion agents surfaced (tiered ceilings, §13.7 row caps, Quick-start label scope, compound TL;DR columns, regulatory-status-by-jurisdiction annotations, cross-dossier reference patterns)

**Mandatory section order** (16-section template, see skill for full prescriptive form):
1. Overview / patient-facing primer
2. Mechanism + sub-types + comorbidity screen
3. OTC phytochemicals + dosing + sourcing
4. Six traditional systems (each ≥2 entries OR explicit silence)
5. Biophysical interventions (home red-light/PBM/heat/cold/PEMF)
6. Diet protocol + 7-day plan + grams + trigger map + cofactor floor
7. Lifestyle anchors — yoga, pranayama, sleep, exercise (each row maps to §2 mechanism)
8. Three daily combos + master 24-hour day plan (§8.5)
9. Supplier ecosystem with monthly cost + brick-and-mortar addresses
10. Interaction matrix §10.1-10.6 + Emerging+adjunctive therapies §10.7.1/.2/.3
11. Clinical scoring instrument + comorbidity screening table (§11.5)
12. 12-month implementation timeline
13. Patient-facing primer (§13.5) + Honest evidence-tier comparison table (§13.7)
14. Closing paradigm / sovereignty re-affirmation
15. References (numbered bibliography, all sources)

## Web-rendering contract for dossiers (v6.2.3+ load-bearing)

Dossier pages MUST render inside a shell offering:
- Clickable brand mark + wordmark → `/` (home)
- Back link in top bar — defaults to `← Atlas`, override per-page if deep-linked from a hub
- "GO TO" site-nav block in left rail — Needs · Atlas · AI Guru · Companion · Experts · Progress · Evidence Factory
- Search shortcut (⌘K / Ctrl-K focuses the home journey-search)
- Mind-map sticky strip (horizontal flex-wrap chip strip)
- Expandable tree left-rail (H2 + H3 children, parent of active child auto-expanded)
- DeepDive collapsible wrapping `#### Open the science` blocks
- **NEW (in progress):** DecisionHero above §01 — 6 cards + 6-tradition strip — for non-researcher decision-fast surface
- Footer rendered everywhere (current bug: missing on /atlas /guru /package /checkout — see Outstanding work below)

## Cloud Run deployment

**Live URL:** https://nichecore-tytn7sfqja-uc.a.run.app
**Project:** `nichecore-app`
**Region:** us-central1
**Billing:** Firebase Payment (`01231D-58045D-4B0893`)
**APIs enabled:** Cloud Run, Cloud Build, Artifact Registry, IAM, IAM Credentials, STS
**Artifact Registry repo:** `nichecore-images` in us-central1
**Deployer SA:** `nichecore-deployer@nichecore-app.iam.gserviceaccount.com` with 6 roles (run.admin · cloudbuild.builds.editor · artifactregistry.writer · iam.serviceAccountUser · storage.admin · logging.logWriter)
**allUsers invoker:** granted on Cloud Run service (public access)

**To redeploy after any code change:**
```powershell
$g = "C:\Users\evija\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd"
& $g builds submit C:\Users\evija\naturecure\nichecore --config=C:\Users\evija\naturecure\nichecore\cloudbuild.yaml --project=nichecore-app
```

## gcloud path note

`gcloud` is installed at `C:\Users\evija\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd`. NOT on PowerShell PATH (until shell restart picks up installer's PATH update). Always use the full path in scripts:
```powershell
$g = "C:\Users\evija\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd"
```

## Corp-network TLS interception workarounds (auto-memory)

User's machine has corporate TLS interception (Zscaler/Netskope-style). All HTTPS clients fail SSL cert verification by default. Workarounds applied:

| Client | Setting |
|---|---|
| **npm** | `strict-ssl=false` in .npmrc + `NODE_TLS_REJECT_UNAUTHORIZED=0` env var |
| **gcloud** | `gcloud config set auth/disable_ssl_validation True` |
| **git** | `git -c http.sslVerify=false push origin main` (per-command) |
| **PowerShell Invoke-WebRequest** | TLS handshake fails — use a real browser instead |

These bypasses are **insecure** but unblock work on the corp network. Don't bake into prod artifacts.

## How to run dev locally

```bash
cd C:/Users/evija/naturecure/nichecore
NODE_TLS_REJECT_UNAUTHORIZED=0 npx next dev
# or: NODE_TLS_REJECT_UNAUTHORIZED=0 npx next build && npx next start
```

Default port 3000. Routes:
- `/` — home with journey-search
- `/atlas` — 76-78 journey browse
- `/[domain]/[slug]` — catch-all dossier (e.g. `/metabolic/type-2-diabetes`)
- `/c/[category]` — category hub
- `/c/[category]/package` — bundle wizard
- `/companion` `/expert` `/progress` `/guru` `/admin/research-factory`

## Production build verification

```bash
cd C:/Users/evija/naturecure/nichecore
NODE_TLS_REJECT_UNAUTHORIZED=0 npx next build 2>&1 | tail -10
```

Expected: `~80 routes generated, exit 0` (76 dossier-static-params + dynamic routes + special pages).

## Test suite

```bash
cd C:/Users/evija/naturecure/nichecore
npx playwright test tests/mock-fidelity.spec.ts
```

Expected: 16/16 passing in ~35s.

## Commit conventions

- One bucket / wave of work per commit
- Short title + detailed body (founder reads commits — they're explanatory, not just labels)
- Co-author: `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`
- Push: `git -c http.sslVerify=false push origin main` (corp-network workaround)

Recent commit pattern: `Wave N v6.2.3: <dossier-list> — <key-anchors>`.

## Outstanding work (next-session pickups)

1. **DecisionHero component + page-opener redesign** — IN PROGRESS — see `components/layout/decision-hero.tsx` + plan in this session's transcript
2. **Bell's palsy + SSHL dossiers** — IN FLIGHT — agent dispatch pending
3. **Skill v6.2.4** — IN PROGRESS — fold founder's progressive-disclosure / decision-hero requirements + 8 overnight v7 callouts
4. **Chrome standardization** — atlas/guru/c/[category]/package/checkout pages missing `<Footer />`; AppShell desktop search input is decorative (not wired to JourneySearch). ~30 min fix when greenlit
5. **Workload Identity Federation** for keyless GitHub Actions push-to-main auto-deploy — runbook §§4-5; until then every Cloud Run deploy is manual via `gcloud builds submit`
6. **Custom domain mapping** — `.run.app` URL works but production should map e.g. `nichecore.com` via Cloud Run domain mapping — runbook §10
7. **3 more proposed-but-not-yet-built ailments** that may bring the atlas from 78 → 81+: cancer-survivorship-wellness (high-stakes, defer), MS adjunctive (defer), Parkinson's adjunctive (defer) — surface honestly when founder is ready

## Auto-memory reference files (already loaded by session)

- `C:\Users\evija\.claude\projects\C--Users-evija-naturecure\memory\MEMORY.md` — index of prior-session memories
- `naturecure-project.md` — context: evidence-OS commerce app
- `env-npm-tls-workaround.md` — corp TLS bypass pattern
- `naturecure-quality-bar.md` — founder's rubric: exhaustive Playwright, no 404s, doctrine in UI, ISO-style certification

## Founder's standing preferences (from prior sessions)

- **Honest framing over marketing** — every dossier surfaces what doesn't work as honestly as what does (Cochrane nulls, etc.)
- **Strict OTC + home-only doctrine** — Rx in §10.7.3 referral only, never in home regime
- **Zero US-regulator authority citations** — FDA/AHA/ADA/AAFP/AAD/ACR/APA/etc all forbidden as authority. Narrow exception: regulatory-path context inline ("FDA De Novo 2023 — regulatory-path context, not evidence anchor")
- **Founder mandate** — six traditions ≥2 entries each (Ayurveda + TCM + Unani + Siddha + Tibetan Sowa Rigpa + Homeopathy T/H-graded only)
- **Tinnitus dossier is exemplar** — match its structural quality bar
- **Commits are explanatory** — body of commit message should explain WHY + what changed, not just label
- **Single agent at a time** for regen work after early parallel-fleet hit session limits + socket timeouts
- **Push to both GCP + GitHub after each meaningful change set** — keep both surfaces in sync

## "If you crash mid-session" hand-off

1. Check `STATUS.md` for the latest per-session resume snapshot
2. Check `git log --oneline -20` for recent commit landings
3. Run the dossier audit:
   ```bash
   cd /c/Users/evija/naturecure/nichecore/research
   for f in *.md; do v=$(grep '^schemaVersion' "$f" | head -1 | grep -oE 'v6\.2\.[0-9]+' || echo '-'); printf '%s %s\n' "$v" "$f"; done | sort
   ```
4. Check `git status --short` for uncommitted work
5. Read the most recent in-progress task in the task list
6. Continue from there
