# REVIEW 2026-06-09 — Wave 4: Data Engineering + Observability Architecture (Tinnitus Dossier + NicheCore Platform)

**Dossier + platform under review:** `nichecore/research/tinnitus-support.md` (post-wave-3, ~173 kB), `nichecore/lib/data.ts` (bundle + journey + factory-job records), `nichecore/lib/research.ts` (markdown chunker + TopShelf parser), `nichecore/lib/types.ts` (Bundle / Product / EvidenceClaim / FactoryJob / Freshness / EvidenceGrade), `.claude/skills/ailment-360-research/SKILL.md` Rule 21 (PR-gate) + Rule 22 (freshness), `tools/critic-audit.mjs` (current PR-gate primitive), wave-2 backlog W2-67 (`pnpm validate`) + W2-L (pharmacovigilance pipeline), wave-3 backlog W3-J (lot traceability + recall pipeline).

**Reviewer persona.** Senior data engineer + observability architect; twelve years of platform work at consumer-health-data scale across Babylon Health UK, Doctolib EU, HealthTap, Practo India, Curogram US. Built AE-intake at three of those (one of them shipped into a real pharmacovigilance team; the other two stayed internal). Designed audit-log infrastructure for EU MDR + UK MHRA submissions. Wired lot-traceability for an OTC supplement marketplace under TGA AUST L. Stood up the change-data-capture for a clinical-knowledge-base claim-graph at Healthwise. I have built every layer the wave-2 and wave-3 reviewers ask for; I have also killed several of them in mid-build when the data architecture turned out to be hand-wavy. This review tells you which is which.

**Doctrine respected.** OTC + home + six traditions + no US-regulator authority — applies to dossier *content*. For *infrastructure* the doctrine reads slightly differently: don't *write to* US-regulator data feeds as a citizen pharmacovigilance contributor (Year 1-2, per wave-2 §5.3); never use FDA/FAERS as the *anchor* signal-detection reference; route ingestion through WHO + EMA + MHRA + TGA + Health Canada + AYUSH + PvPI authority. FDA/MAUDE may be *queried as cross-reference* on devices that hold De Novo / 510(k) (Lenire, Truvaga), because the regulatory-path context is already in the dossier and there is no doctrine-clean alternative for US-cleared device post-market data.

**Verdict (one line).** Five build-vs-buy decisions, three of which the wave-2 + wave-3 reviews framed at the wrong altitude. The AE intake pipeline is a 3-week SaaS-stitched v1 not a 12-16 week in-house React-Postgres engineer-burn; the audit pipeline is a 1-week RSS-cron-diff not a "weekly-sweep" greenfield build; the `pnpm validate` PR-gate is the single highest-leverage 4-day infrastructure ship and the wave-2 lawyer correctly named it; the lot-traceability + recall ingestion pipeline has a hidden affiliate-vs-direct-fulfilment fork that the wave-3 supplement-QC review skipped — under affiliate, half the proposed pipeline is structurally impossible because NicheCore never sees the lot number; under direct fulfilment, the contractual 24-hour notification commitment requires an on-call rota the founder cannot self-staff. The living-protocol claim infrastructure is the most expensive of the five (~$60-90k/year fully loaded) and is the one most worth building because it converts the editorial product into a defensible regulatory + insurance + content-trust asset that compounds.

The wave-2 backlog item W2-67 (`pnpm validate` PR-gate, 4 days, blocks 3-of-9 BLOCKER ad-substantiation findings structurally not editorially) is the single highest-leverage data-engineering item across all 5 dimensions. Ship that first. Then the audit pipeline (1 week). Then the minimum-viable AE intake (3 weeks SaaS-stitched). Then living-protocol claim infrastructure (10-12 weeks plus an ongoing human cost). Defer lot-traceability + recall until the fulfilment model is decided.

---

## Five build-vs-buy decisions, scored

| # | Dimension | Minimum-viable ship cost | Full-build ship cost | Ongoing cost/yr | Verdict |
|---|---|---|---|---|---|
| 1 | AE intake + signal detection | 3 wk + ~$2,400/yr SaaS | 12-16 wk + ~$8-15k/yr infra + MedDRA licence + named pharmacovigilance physician on retainer ~$30-60k/yr | $35-80k/yr at full | **SaaS v1 first; in-house only if year-2 reach > 25k MAU** |
| 2 | Audit pipeline / weekly-sweep | 1 wk + $0 cost | 6-8 wk + ~$3k/yr if LLM triage layer added | $3-15k/yr depending on human-triage hours | **Ship the 1-week version this sprint** |
| 3 | `pnpm validate` PR-gate | 4 days + $0 cost (it's a Node script + GH Action) | 2 wk if structured-fence parsing extended to all 78 dossiers | $0 (CI minutes covered by existing GH plan) | **Highest-leverage item across the entire backlog; ship this week** |
| 4 | Lot-traceability + recall | **DEPENDS on fulfilment model** — affiliate: 0 days (structurally impossible); direct: 3 wk Phase 1 + 4-8 wk Phase 2 + 12-24 wk Phase 3 | $50-80k Year-1 per wave-3 estimate | $30-60k/yr at full | **Defer until founder commits to direct fulfilment; affiliate-only storefront cannot honour the recall commitment** |
| 5 | Living-protocol claim infrastructure | 4 wk for changelog primitive + Sources.lock.json | 10-12 wk for full source-monitor → claim-change-candidate → LLM-critic → human-ratify → atlas-changelog | $60-90k/yr fully loaded (infra + LLM tokens + ~5-10 hr/wk human triage) | **The most defensible moat; ship the changelog primitive next sprint, the full pipeline over Q3-Q4** |

---

## Dimension 1 — AE intake pipeline: SaaS v1 vs in-house, and what regulators want you to build

The wave-1 medical reviewer + wave-2 pharmacovigilance specialist together proposed: AE intake form ≤2 clicks from product page; Day-3 / 14 / 30 / 60 / 90 prompted check-ins; 24-trigger-keyword auto-flag on free-text; Tier-1 count-based primary (≥3 ICSRs per HLT per quarter) at year-1; Tier-2 cross-reference against WHO VigiAccess + EudraVigilance + Yellow Card + DAEN + PvPI + Canada Vigilance; Tier-3 PRR + χ² at year-2+; Tier-4 BCPNN IC₀₂₅ at ~10k user-quarters; public surface at `/safety/reports`. The wave-2 reviewer gave a 2-4 week minimum-viable shape and a 3-6 month full shape.

As a data engineer, the actual cost curve is steeper at the *full* end than the wave-2 reviewer let on, and shallower at the *minimum-viable* end. Let me walk it.

### 1.1 The 3-week SaaS-stitched v1 nobody named in waves 1-3

Typeform + Airtable + Zapier + Postmark gets you to the wave-2 minimum-viable surface in 12-18 days of focused work, at a recurring cost of ~$200/month (Typeform Pro $50, Airtable Team $20/user × 3, Zapier Pro $50, Postmark $25 for transactional email at 10k volume). The architecture:

- **Typeform** hosts the AE intake form. Each question is a structured field; the free-text AE-description field is the load-bearing input. Multi-select for concomitant supplements (pulled from a Typeform variable that the storefront passes via URL parameter when the user opens the form from their account page — so the form pre-populates "you're reporting an AE about Schwabe Tebonin Ginkgo, lot TBN24-A-0317"). Typeform's webhook fires on every submission.
- **Zapier** receives the webhook and routes: (a) all submissions write to Airtable `ae_reports` base; (b) free-text passes through a Zapier OpenAI step (gpt-4o-mini at ~$0.0002/submission) that scans for the 24 trigger keywords + maps free-text to MedDRA LLT candidates (see §1.3 below on MedDRA licensing); (c) any priority-1 trigger fires a Postmark email + a Slack webhook to the named medical advisor; (d) a per-user check-in scheduler writes the next-check-in dates to Airtable.
- **Airtable** is the system of record. Views: priority-1 queue (anything trigger-flagged); 30-day-response queue (anything still un-acknowledged at Day-30); per-molecule rollup (filterable). Airtable's API powers a read-only Next.js public surface at `/safety/reports` that renders aggregated case counts per molecule per HLT per quarter — using Airtable as the data plane, not Postgres.
- **Postmark** sends the Day-3/14/30/60/90 prompted check-ins. Each check-in is a templated email with a one-click link back into Typeform pre-populated for follow-up reporting. Open + click rates flow back to Airtable via Postmark webhooks (so you can compute attrition curves cleanly).

Cost: 18 days of build (3-4 days each on Typeform form design, Zapier flow + OpenAI integration, Airtable schema + views, Next.js public surface, Postmark templates + scheduler logic, plus 1-2 days of QA + cross-browser test). Recurring: ~$200/month = $2,400/yr. The named medical advisor on the priority-1 queue is the hidden cost — wave-2 estimated a "named pharmacovigilance physician on retainer" without pricing; my read is **$30-60k/yr for a named retainer at 4-6 hours/week reviewing the priority-1 queue and signing off on the public `/safety/reports` per-quarter sweep**. The retainer is the load-bearing cost; the SaaS infrastructure is rounding error against it.

### 1.2 The 12-16 week in-house build — when it's worth it

The wave-2 reviewer's full Tier-1-through-Tier-4 architecture corresponds to React + Postgres + Inngest/Temporal + statistical-detection-engine. Capture plane (React Hook Form + Postgres with RLS + S3 for photos) ~3-4 weeks; triage plane (workflow per report routing through MedDRA LLT coding + keyword flag + advisor queue + check-in scheduler) ~3-4 weeks; signal-detection plane (weekly cron computing per-molecule per-HLT counts + Tier-1/2/4 thresholds; BCPNN IC₀₂₅ via R `pvm` or Python `pythonpharmacovigilance` reference impl) ~3-4 weeks; public surface ~2 weeks. **Total: 11-14 weeks for 1 senior engineer; 14-17 weeks fully loaded with compliance review.**

**The case for going in-house in year-2** is narrow: NicheCore crosses ~25k MAU and Airtable's per-base ceiling becomes a bottleneck; the advisor wants real disproportionality math embedded; a National Centre requests an aggregated cohort feed (per wave-2 §5.3 Year-2.5+) with audit-trail requirements SaaS can't meet; or GDPR/DPDP DSAR volume strains Airtable's permissions model. **Most NicheCore-scale pipelines never need the full in-house build.** The SaaS-stitched v1 + named advisor + transparent methodology carries year-1 and most of year-2.

### 1.3 The hidden engineering complexity the dossier + the reviews glossed over

**MedDRA licensing.** MedDRA is the controlled vocabulary for AE coding. MSSO (the maintainer) charges by organisation revenue band — for a startup at <$1M revenue, the licence is ~$3,500/year; at $1-10M revenue it's ~$15-25k/year; at $10M+ it's ~$50k+/year. There is no free-tier license. The wave-2 reviewer named MedDRA throughout but did not price it.

The MedDRA-lite alternatives I would seriously consider:

- **ICD-10 + SNOMED-CT US Free Edition.** ICD-10 is in the public domain. SNOMED CT International is licensed (free for member countries; UK + US have free national distributions; India does not, which matters because PvPI cross-reference is in the doctrine). SNOMED's clinical-finding hierarchy maps reasonably to MedDRA's LLT level at ~70-80% concordance. Using SNOMED CT International (UK + US free distributions) as the front-line coding vocabulary with periodic LLM-assisted MedDRA mapping for upstream reporting is a defensible engineering compromise. Net cost: zero in year-1, ~$3.5k/yr at year-2 if you license MedDRA proper for the upstream reporting layer.
- **MedDRA Lite (MSSO).** A reduced subset for academic/small-volume use; ~$1,000/year. Reasonable bridge.
- **Direct keyword → SOC mapping table maintained in Airtable.** For the 24-keyword trigger list the wave-2 reviewer named, this is sufficient at year-1 because the trigger keywords already map to System Organ Class buckets unambiguously ("jaundice" → Hepatobiliary; "wheeze" → Respiratory; "ataxia" → Nervous System). The keyword-to-SOC table is ~50 rows. Build it manually.

**Data classification under GDPR / UK-GDPR / India DPDP Act 2023.** This is the single biggest hidden complexity. Every AE report contains "special category health data" per GDPR Art. 9 (and UK-GDPR Art. 9, EU Data Act, India DPDP Act §2(zb)). The Art. 9(2)(a) "explicit consent" basis is the only realistic lawful basis at NicheCore's scale (you can't claim Art. 9(2)(h) "preventive medicine" without being a healthcare provider; you can't claim Art. 9(2)(i) "public health" without being a designated public-health body). The engineering implications:

- Explicit-consent flow at form open (not just a checkbox — a separate consent page with the full Art. 13 transparency notice).
- DSAR fulfilment infrastructure — Subject Access, Right to Erasure, Right to Portability. At 100 AE reports/month + 24 month retention you'll get ~1-3 DSARs/month at steady-state. Fulfilment SLA is 1 month per GDPR Art. 12. Build a simple DSAR-request route + an internal Airtable view that flags "this user has requested erasure" + a tombstone-record pattern (you can't fully delete because regulatory retention may apply, but you tombstone and exclude from public surfaces).
- **Data residency.** GDPR allows EU-data processing in the US under SCCs + DPF (post-Schrems II workarounds). Airtable + Typeform + Zapier are all US-hosted; that is workable today under DPF but the legal certainty is fragile. India DPDP Act §16 currently allows cross-border data flow to countries not on the blocklist; the blocklist is not yet published as of 2026-06. UK-GDPR is currently aligned with EU-GDPR. AU-Privacy Act requires APP 8 cross-border accountability. **The honest engineering read: a US-hosted SaaS stack is defensible today across all 5 anchor jurisdictions; the legal certainty erodes if Schrems III or India DPDP §16 blocklist arrives. Plan for an EU-hosted variant (Postmark has an EU instance; Airtable Enterprise has EU residency; Typeform is Spain-based) as a year-2 migration path.**
- **Retention periods.** Pharmacovigilance retention under EU GVP Module VI is 10 years from end of marketing authorisation; for OTC supplement AE under EU CPNP it's product-shelf-life + 10 years. For NicheCore at year-1 (not a marketing-authorisation holder, not selling under CPNP), the realistic retention is 5-7 years driven by Indian PvPI guidance + UK MHRA Yellow Card archive policy + AU TGA archive policy. Encode the retention period in the Airtable schema (`retention_until` column auto-computed from `submitted_at`).

**The named-medical-advisor regulatory exposure.** The wave-2 reviewer named "Dr Meera Iyer per existing ConversionStrip reviewer slot OR a real named pharmacovigilance physician" as the human-in-the-loop. The wave-3 advertising-substantiation lawyer was right to flag that Dr Meera Iyer as a hardcoded default is a UK ASA CAP 3.45 + TGAAC 16 violation. The data-engineering implication is that **the priority-1 reviewer must be a real named pharmacovigilance physician under explicit contract who has reviewed the methodology + who signs off on the per-quarter public sweep**. The retainer rate I named ($30-60k/yr) is the going market rate for a 4-6 hr/wk pharmacovigilance consultant in EU/UK/AU. Cheaper rates exist in India (₹3-5 lakh/yr ≈ $4-6k/yr for a similar commitment from a PvPI-experienced clinician) but the doctrine-clean choice is an EU-or-UK-based name because that anchors the consent-form's lawful-basis story under GDPR.

### 1.4 The "responsible disclosure" alternative — route every AE direct to the user's national regulator

The wave-2 reviewer floated this but did not commit. The data-engineering case for it is strong:

- **The user submits via NicheCore's form** (the capture surface is identical).
- **The form, on submit, generates a pre-populated PDF + opens a new tab to Yellow Card / DAEN / PvPI / Canada Vigilance / EudraVigilance Direct consumer-reporting form** in the user's anchor jurisdiction (determined by the user's profile country at registration). The user clicks through and submits to their national regulator.
- **NicheCore retains a copy** for internal tracking + cross-reference against future AEs by the same user.
- **NicheCore aggregates count-level signals only** at `/safety/reports` — never substituting for the national-centre detection.

The engineering cost is roughly half the SaaS-stitched v1 (no signal-detection layer; no MedDRA licence; no in-house priority-1 queue). The regulatory exposure is *much* lower because NicheCore is not the AE adjudicator. The downside is that the user friction is higher (two-tab submission) and the response cadence is at the national centre's pace, not NicheCore's.

**My read.** Build the SaaS-stitched v1 + the responsible-disclosure dual-path. Default to dual-submit on every form: NicheCore retains internally + opens the user's national regulator form pre-populated. This gives the user the choice + maintains NicheCore's internal cross-reference + offloads the heavy adjudication. The named medical advisor's role narrows to "this priority-1 trigger fired, do we want to do anything other than what the national centre will already do" — typically the answer is "yes, contact this specific user, ask whether they want a refund + replacement and confirm they've also submitted to Yellow Card."

This dual-path architecture maps cleanly to the wave-2 reviewer's "Year 1 do not contribute to WHO-UMC; route via national centres first" sequencing. It is also the architecture the EMA pharmacovigilance guidance Module VI explicitly endorses for non-marketing-authorisation-holder data sources.

### 1.5 Signal-detection methodology at NicheCore-scale

The wave-2 reviewer named four tiers (count-based → PRR+χ² → BCPNN IC₀₂₅ → EBGM). My calibration:

- **At 10k user-quarters cumulative** (year-1 founder estimate): the count-based threshold (≥3 ICSRs/HLT/quarter) is the only methodology that produces reliable signals. PRR/χ² needs a denominator of at least ~1,000 reports per molecule before the χ² approximation is stable; at 10k user-quarters and 30 molecules cumulative, no molecule will hit that floor. The Evans threshold (PRR ≥ 2 + χ² ≥ 4 + N ≥ 3) is the gold standard *operationally* but mathematically the χ² is unstable below N ≈ 5 — the threshold is set partly because the maths gets unreliable, not because that's the right epidemiological cutoff. At NicheCore-scale year-1, **count alone is the right detector.**
- **At 50k user-quarters cumulative** (year-2): BCPNN IC₀₂₅ is the right Bayesian instrument because its built-in shrinkage handles the low-N regime gracefully. The WHO-UMC use IC₀₂₅ as their primary detector for exactly this reason — at small per-cell counts, the frequentist PRR/χ² is misleading and IC₀₂₅ is honest. The reference implementation is in the R package `pvm` (Norén et al.) and the Python package `pythonpharmacovigilance`. Building this inside NicheCore is ~2 weeks of careful work + 1 week of methodologist signoff.
- **EBGM (DuMouchel) overkill below 100k user-quarters.** The wave-2 reviewer named this correctly. The DuMouchel empirical-Bayes geometric-mean approach is designed for FDA/MAUDE-scale data (millions of reports); at NicheCore scale it is computationally cheap but adds no detection-rate over BCPNN. Skip until year-3+ or until contributing to a National Centre's aggregated cohort feed.
- **At ≥100k user-quarters:** consider deploying the OpenVigil 2.0 open-source pharmacovigilance pipeline as the analytical backbone. OpenVigil already implements PRR + ROR + IC + EBGM with MedDRA hierarchy + cross-reference to FAERS-equivalent feeds. Wiring NicheCore's internal data into OpenVigil at year-3 is a 2-week integration. This is a sensible "buy" — don't reimplement the disproportionality math from scratch when the open-source community has spent 15 years on it.

### 1.6 Specific ship-list for Dim 1

| # | Item | Effort | Priority |
|---|---|---|---|
| 1.1 | SaaS-stitched v1 with dual-path (NicheCore retain + national-regulator opens) | 18 days build + ~$200/mo SaaS | **THIS SPRINT** |
| 1.2 | Named pharmacovigilance physician retainer (EU/UK-based for GDPR consent-flow anchoring) | ~$30-60k/yr; 2-4 wk to identify + onboard | **NEXT 4 weeks** |
| 1.3 | Explicit-consent flow per GDPR Art. 9(2)(a) + DSAR-fulfilment route + retention-period schema | ~5 days inside the SaaS-stitched build | Concurrent with 1.1 |
| 1.4 | SNOMED CT International as front-line coding vocabulary; MedDRA-lite licence only if upstream reporting to MHRA/EMA at year-2 | ~2 days mapping table; $0 year-1 | Concurrent with 1.1 |
| 1.5 | Public `/safety/reports` aggregated read-only count surface | ~3 days at end of build | Concurrent with 1.1 |
| 1.6 | Public `/safety/methodology` page declaring count rules + thresholds + reviewer + cross-reference workflow | ~2 days | Concurrent with 1.1 |
| 1.7 | Migrate to in-house React + Postgres at year-2 if MAU > 25k | 11-14 weeks | YEAR 2 DECISION POINT |
| 1.8 | Wire BCPNN IC₀₂₅ via `pvm` R-package or in-house implementation at year-2 | 2-3 weeks + methodologist signoff | YEAR 2 |
| 1.9 | OpenVigil 2.0 integration for atlas-wide signal detection at year-3 | 2 weeks | YEAR 3 |

The minimum-viable storefront-unblock per wave-2 § 5.4 is items 1.1 through 1.6. Total ship cost: 4-5 weeks elapsed (the medical-advisor onboarding is the long pole), ~$3-6k in build + $200/mo recurring + $30-60k/yr retainer.

---

## Dimension 2 — Audit pipeline / weekly-sweep: 1 week of RSS + cron + diff

The wave-1 NeurIPS reproducibility review said "hide the fabricated home stats until `audit/weekly-sweep-YYYY-Wnn.json` is real." That hide-the-stats move was correct. The next question is what makes the sweep real.

### 2.1 The right minimum-viable architecture

The wave-2 reviewer + wave-3 reviewers collectively named six feeds. As a data engineer, the realistic set of feeds I would actually subscribe to is:

| Feed | Type | URL pattern | Latency | Use |
|---|---|---|---|---|
| **Cochrane Library new + updated reviews** | RSS | `https://www.cochranelibrary.com/rss/cdsr/feed` | Daily | Per-condition keyword filter; detect re-issue of Hilton/Sereda/Fuller etc. |
| **PubMed E-utilities per-condition** | esearch + esummary API | `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/...` | Weekly | Per-dossier keyword query (tinnitus, vitiligo, etc.); flag new RCTs above n=100 with primary-endpoint achievement |
| **EMA HMPC monograph updates** | RSS + scrape | `https://www.ema.europa.eu/en/medicines/rss.xml` | Daily | Monograph updates per herb (Ginkgo, Hawthorn, Black Cohosh, etc.) |
| **MHRA Drug Safety Updates** | RSS | `https://www.gov.uk/drug-safety-update.atom` | Per-publication | Yellow Card aggregation + safety bulletins |
| **TGA Recall Actions + Safety Alerts** | RSS | `https://www.tga.gov.au/alerts-recalls.atom` | Per-publication | Device + supplement recalls |
| **Health Canada Recalls and Safety Alerts** | RSS + JSON API | `https://recalls-rappels.canada.ca/en/search/feed` | Per-publication | Supplement + device recalls |
| **AYUSH-CCRAS quarterly journal + PvPI bulletin** | PDF scrape (no API) | Manual monthly review | Quarterly | India-side traditional-medicine safety + efficacy bulletins |
| **NMPA China Pharmacopoeia annual update** | Manual annual | Manual | Annual | TCM pharmacopoeia updates |
| **ClinicalTrials.gov + EU CTR + ISRCTN** | API per dossier-keyword | Daily | Detect new trial registrations relevant to dossier claims |

That's seven RSS-or-API feeds + two manual-PDF feeds.

The architecture:

- **A weekly GitHub Action** running `tools/audit-sweep.mjs` (this is the *real* version of the fabricated `audit/weekly-sweep-YYYY-Wnn.json` we hid; ship the script). The script does:
  1. Fetches each RSS feed, parses into structured records.
  2. Queries PubMed E-utilities per-dossier keyword (78 queries; ~30s total at PubMed's 3 req/s default rate; ~120s if API-key registered).
  3. Diffs each feed against the previous week's snapshot (snapshots stored in `audit/snapshots/YYYY-Wnn/`).
  4. Writes `audit/weekly-sweep-YYYY-Wnn.json` with: `{ "week": "2026-W24", "feeds": [...], "new_items": [...], "changes": [...], "summary": {...} }`.
  5. Generates a human-readable `audit/weekly-sweep-YYYY-Wnn.md` for the public `/audit` route.
  6. Opens a PR with the week's sweep — auto-merges if no human-triage items; otherwise tags the founder for review.

- **A GitHub Action triggered by the sweep PR** runs an LLM-critic (gpt-4o or Claude 3.5 Sonnet) over each `new_item` to classify: `(a) high-confidence: relevant to dossier X, suggested edit Y, ratify automatically`; `(b) medium-confidence: relevant to dossier X, requires human review`; `(c) low-confidence: probably irrelevant, file under noise`. The LLM-critic cost at 10-30 items/week × ~2k tokens/item × $0.005/1k tokens = ~$1-3/week = ~$50-150/year. Trivial.

- **The `/audit` page** renders the latest sweep + the trailing 12-week sweep summary + per-dossier freshness chips driven by the sweep data.

Ship cost: 5-6 days of careful work (1 day per feed for the RSS parsing + diff logic; 1 day for the GitHub Action; 1 day for the LLM-critic step; 1-2 days for the `/audit` rendering). Recurring cost: ~$50-200/yr LLM tokens + 1-2 hours/week founder triage on medium-confidence items.

### 2.2 Per-claim freshness — back-filling the FRESHNESS_LABEL enum

The current state: `lib/evidence.ts` declares a `Freshness` enum with values `fresh | current | aging | stale | review_required`. The wave-1 NeurIPS reviewer noted (correctly) that this enum is *declared* but *uninhabited* — no per-claim freshness data exists. The 78 dossiers were authored without freshness tags.

The back-fill strategy:

1. **Parse every cited paper out of every dossier** via a markdown walk + reference-section parser. References are typically `*(Author Year)*` italic-parenthesis pattern or `[N]` numbered footnote pattern. Both can be regex-parsed with ~95% accuracy; remaining 5% needs manual review. Estimated ~150-400 citations per dossier × 78 dossiers ≈ 20-30k citations total. The parser would extract `(author, year, title-fragment, journal-fragment)` tuples.

2. **For each citation**, automate the freshness classification:
   - **`fresh`**: published within last 12 months
   - **`current`**: published within last 5 years for primary research; last 10 years for Cochrane reviews
   - **`aging`**: 5-10 years for primary research; 10-15 years for Cochrane reviews
   - **`stale`**: >10 years for primary research; >15 years for Cochrane reviews
   - **`review_required`**: cited as authoritative but newer Cochrane re-issue exists

3. **The dossier-level `lastUpdated` field** (already in YAML front-matter) becomes the bound — a dossier's lastUpdated cannot be older than its freshest cited paper's year. Add this as a `pnpm validate` check (Dim 3 below).

4. **Per-claim freshness chips** rendered next to each compound's evidence-grade badge in §3.3 + §13.7. The data model:
   ```typescript
   interface ClaimWithFreshness {
     compound: string;
     evidenceGrade: EvidenceGrade;
     freshness: Freshness;
     freshestCitation: { author: string; year: number; doi?: string };
     reviewRequiredReason?: string; // e.g., "Cochrane Hilton 2013 superseded by Sereda 2022"
   }
   ```

5. **The back-fill is partially LLM-driven.** Per-dossier, run an LLM-critic over the markdown + the parsed-citation list to extract structured `ClaimWithFreshness` records. Human review of ~5-10% sample for QA. Estimated effort: ~2 weeks for the parser + 1 week for the LLM-driven extraction + 1-2 weeks of QA on the 78-dossier output.

### 2.3 Version-pinning per Cochrane review

The Cochrane Library publishes a re-issue notification when a review is updated. Hilton 2013 (Ginkgo for tinnitus) was superseded by Sereda 2018 then by Sereda 2022. The audit pipeline can detect re-issue via the Cochrane RSS feed — each re-issue is a new entry with a `cochrane-review-id` parameter that matches across versions.

Build a `cochrane_review_versions` table:

```typescript
interface CochraneReviewVersion {
  cdsrId: string;           // e.g., "CD009157"
  version: string;          // e.g., "2022.4"
  publishedAt: string;
  cited_in_dossiers: string[];  // e.g., ["tinnitus-support", "vertigo-dizziness"]
  supersedes_version?: string;
}
```

When a new version lands in the Cochrane RSS feed, the sweep marks every dossier in `cited_in_dossiers` as `review_required` until human review confirms whether the new findings shift the evidence-grade. This is the *actionable* version of the freshness enum.

### 2.4 Human-in-the-loop triage cadence

The realistic founder-triage budget is 1-2 hours/week. The LLM-critic should pre-classify everything so the founder only sees medium-confidence items. At 10-30 new items/week × ~20% medium-confidence rate = 2-6 items/week needing human review. At ~5-10 min/item review time, that's 10-60 min/week founder triage. Manageable.

The on-call rota question — the wave-2 reviewer framed it sharply: "do you let an LLM agent triage and only escalate confidence < threshold?" The answer at NicheCore-scale year-1-2 is yes. The LLM-critic is your front-line; the founder is the appeal court. When NicheCore scales beyond founder-bandwidth (year-3+), this becomes a named medical-affairs role.

### 2.5 Ship-list for Dim 2

| # | Item | Effort | Priority |
|---|---|---|---|
| 2.1 | Build `tools/audit-sweep.mjs` (7 RSS + PubMed E-utilities) + GitHub Action + snapshot diff + `audit/weekly-sweep-YYYY-Wnn.json` output | 5-6 days | **THIS SPRINT** |
| 2.2 | Wire LLM-critic step (gpt-4o or Claude 3.5 Sonnet via API) for new-item classification | 1 day | Concurrent with 2.1 |
| 2.3 | Build the citation-parser + back-fill the `FRESHNESS_LABEL` enum across 78 dossiers | 3-4 weeks | NEXT SPRINT |
| 2.4 | Build `cochrane_review_versions` table + auto-detect re-issue + dossier-level review-required flag | 1 week | NEXT SPRINT |
| 2.5 | Render per-claim freshness chips in §3.3 + §13.7 dossier UI | 3 days | NEXT SPRINT |

Total: 1 sprint for the sweep itself; 1-2 more sprints for the per-claim freshness back-fill.

---

## Dimension 3 — The `pnpm validate` PR-gate: the single highest-leverage architectural fix

The wave-2 advertising-substantiation lawyer named this correctly: bundle product claims in `lib/data.ts` gated against dossier §3.3 + §13.7 grading at PR-open. Three of nine BLOCKER ad-substantiation findings close *structurally* not *editorially* once this gate ships. As a data engineer, this is the cheapest ship in the entire backlog and produces the largest compliance-surface improvement.

### 3.1 The architecture

The dossier markdown is the source of truth for evidence grades. The bundle product entries in `lib/data.ts` are the consumer-facing surface that must not contradict. The PR-gate is a Node script that:

1. Walks every `.md` file in `nichecore/research/`.
2. For each dossier, extracts the §3.3 + §13.7 evidence-grade table. The current dossier convention uses markdown tables; the §13.7 "honest evidence-tier comparison" is structured. Parsing strategy:
   - **Option A (remark/mdast-walk):** parse the markdown to AST, find `## 13.7` heading, descend into the next `table` node, extract `(approach, tier, plain-words-verdict, where-it-fits)` tuples. Robust to formatting drift.
   - **Option B (line-based regex):** find `## 13.7` heading, walk lines until next H2, regex-match table rows. Brittle but fast.
   - **Recommendation:** Option A with `remark` + `unist-util-visit`. ~2 days of implementation; battle-tested ecosystem.
3. For each dossier, extract the structured-fence YAML from the dossier opener (per Rule 16 in the skill) that declares per-compound `(name, grade, claimLevel)`. The fenced block looks like:
   ```yaml
   compounds:
     - name: "Ginkgo (Tebonin EGb 761)"
       grade: "C"
       claimLevel: "supportive — Cochrane null on primary outcome, modest subgroup signal"
   ```
   This structured fence is the *machine-readable* version of the prose evidence table. The skill should require it (Rule 16 extension); the validator reads it.
4. For each `Bundle` entry in `lib/data.ts`, for each `Product` in `bundle.products`:
   - Look up `product.name` in the dossier's structured-fence compound list.
   - Validate `product.evidenceGrade <= dossier_compound.grade` (using `GRADE_ORDER` from `evidence.ts`).
   - Validate `product.role` does not contain claims stronger than `dossier_compound.claimLevel`. This is the harder check — "stronger claim" is fuzzy. Practical implementation: a banned-phrase regex set (e.g., `/protect|prevent|cure|reverse|treat|restore/i`) applied to `product.role` when `dossier_compound.grade` is C/D/H/T. Plus a positive-allowlist of EFSA Article 13.1 authorised wording per nutrient (B12 "contributes to normal nervous-system function" is authorised; Magnesium "NMDA / glutamate excitotoxicity protection" is not).
5. Cross-validate every `Bundle.products[i].evidenceGrade` against the dossier — and cross-validate that the bundle product's `name` actually appears in the dossier (catches the wave-2 finding that "Tebonin Grade B + Cochlear circulation neuroplasticity" role contradicted the dossier's own Grade C).

### 3.2 The check that catches the EFSA Article 13.1 issue

The wave-2 BLOCKER #60 (Bundle Magnesium "NMDA / glutamate excitotoxicity protection" is not an EFSA Article 13.1 authorised health claim) requires a per-nutrient authorised-claim table:

```typescript
// lib/efsa-authorised-claims.ts
export const EFSA_ARTICLE_13_1: Record<string, string[]> = {
  "magnesium": [
    "contributes to a reduction of tiredness and fatigue",
    "contributes to electrolyte balance",
    "contributes to normal energy-yielding metabolism",
    "contributes to normal functioning of the nervous system",
    "contributes to normal muscle function",
    "contributes to normal protein synthesis",
    "contributes to normal psychological function",
    "contributes to the maintenance of normal bones",
    "contributes to the maintenance of normal teeth",
    "has a role in the process of cell division",
  ],
  "ginkgo biloba": [], // EMA HMPC traditional-use only; no EFSA Art. 13.1 wording
  // ...
};
```

The validator checks: when `product.supplier` is in EU/UK, `product.role` must be a paraphrase of one of the authorised claims for that nutrient. Implementation: tokenise the role-string, check overlap with authorised-claim corpus. The high-precision implementation requires an LLM-judge for paraphrase detection; the low-precision implementation flags-for-human-review any role-string that doesn't match the authorised list verbatim. **Ship the low-precision version first; upgrade to LLM-judge in year-2 if false-positive rate is high.**

### 3.3 Where it runs

- **Local pre-commit:** husky or lefthook hook runs `pnpm validate` on every commit. Fails commit if any bundle-vs-dossier mismatch.
- **GitHub Action:** runs on every PR. Fails PR check. Posts a comment with the specific mismatch + suggested fix.
- **CI pre-deploy:** runs in the Cloud Build step in `cloudbuild.yaml`. Fails build if any mismatch. This is the load-bearing gate — even if a developer bypasses pre-commit, the deploy fails.

The GitHub Action UX:

```
✗ pnpm validate failed:
  - bundle/tinnitus-quiet-90 → Tebonin Ginkgo EGb 761:
      bundle.evidenceGrade = "C"; dossier §13.7 = "C"; ✓
      bundle.role = "Cochlear circulation + neuroplasticity";
      dossier §13.7 verdict = "Cochrane Hilton 2013/Sereda 2022 null primary; modest post-hoc subgroup";
      ✗ Bundle role makes a structure-function claim stronger than dossier verdict.
      Suggested edit: "Standardised EGb 761 — modest post-hoc subgroup signal per Cochrane"
  - bundle/tinnitus-quiet-90 → Magnesium Glycinate:
      bundle.role = "NMDA / glutamate excitotoxicity protection";
      EFSA Article 13.1 authorised wording for magnesium does NOT include this claim.
      Suggested edit: "Magnesium contributes to normal functioning of the nervous system"
```

The fail-loud UX is the load-bearing UX move. The wave-2 reviewer was right that this is *structural* not *editorial* — once the gate exists, the next claim drift gets caught at PR-open time, not at year-2 ad-substantiation audit time.

### 3.4 Hidden complexity

**The structured-fence YAML doesn't exist yet in all 78 dossiers.** Rule 16 in the skill spec requires it for new dossiers; legacy dossiers were authored before that rule and may not have it. The validator needs to handle both: when the structured-fence is present, validate against it; when absent, fall back to a markdown table-parse of §13.7 (lower precision; flag dossier for skill-v7 back-fill).

**Cross-jurisdiction validation.** The bundle's products may have different authorised-claim sets per jurisdiction. The validator should know which jurisdictions the bundle is sold in (currently all bundles are global; the wave-2 finding W2-28 + W2-29 + W2-58 may force per-jurisdiction bundle variants). At year-1, validate against the strictest jurisdiction (EU EFSA + UK ASA + AU TGAAC + India DMR Act). At year-2, when per-jurisdiction bundle variants land, validate per variant.

**The role-string fuzzy match is the genuinely-hard problem.** "Contributes to normal functioning of the nervous system" is authorised; "NMDA / glutamate excitotoxicity protection" is not; "supports nervous-system function" is borderline. The cheap implementation is a substring-match against the authorised corpus + a deny-list of phrase fragments ("protection from", "prevents", "treats", "cures", "reverses", "neuroplasticity", "NMDA", "glutamate", "excitotoxicity", "anti-inflammatory", "anti-oxidative" used as the verb-claim not as the descriptive-mechanism). The high-fidelity implementation is an LLM-judge fine-tuned on EFSA / ASA / TGAAC adjudicated examples. **My recommendation: cheap implementation now, LLM-judge in year-2.**

### 3.5 Ship-list for Dim 3

| # | Item | Effort | Priority |
|---|---|---|---|
| 3.1 | Build `tools/validate-bundles.mjs` — markdown parse + bundle parse + cross-validate evidence grades | 2 days | **THIS WEEK** |
| 3.2 | Build authorised-claim corpus (`lib/efsa-authorised-claims.ts`) + deny-list of stronger-claim phrases | 1 day | **THIS WEEK** |
| 3.3 | Wire pre-commit hook (husky/lefthook) + GitHub Action + Cloud Build step | 1 day | **THIS WEEK** |
| 3.4 | Fail-loud UX in PR comment with suggested fix | 0.5 day | **THIS WEEK** |
| 3.5 | Back-fill structured-fence YAML in 78 dossiers (skill v7.1 task) | 2-3 weeks across multiple sprints | NEXT 4-6 weeks |
| 3.6 | Year-2: replace deny-list with LLM-judge for role-string paraphrase detection | 1-2 weeks | YEAR 2 |

Total minimum ship: 4 days. This is the highest-leverage 4 days in the entire backlog.

---

## Dimension 4 — Lot-traceability + recall ingestion: the affiliate-vs-direct fork the wave-3 review skipped

The wave-3 supplement-QC reviewer scored this 1/10 and proposed a 3-phase pipeline (Phase 1: 2-3 weeks recall ingestion; Phase 2: 4-8 weeks manufacturer API; Phase 3: 12-24 weeks quarterly ICP-MS sampling). The cost estimate was $50-80k Year-1.

As a data engineer, the wave-3 review skipped a load-bearing fork. **The fulfilment model determines whether half the proposed pipeline is even possible.**

### 4.1 The affiliate-vs-direct fork

NicheCore today is *probably* an affiliate-redirect storefront. The ConversionStrip's "30-day return on unopened items" + the lack of any lot-capture infrastructure suggests redirects to Amazon, iHerb, Walmart, Boots, Holland & Barrett, or direct-manufacturer storefronts. Under affiliate redirect:

- NicheCore **does not see the lot number**. The retailer (Amazon, iHerb) does. The user's order lives in the retailer's system, not NicheCore's.
- NicheCore **cannot recall-notify by lot**. NicheCore knows "user X clicked through to buy product Y on date Z" but does not know which lot the user received.
- NicheCore **cannot honour a 24-hour notification commitment** because the user-to-lot mapping does not exist in NicheCore's database.
- **Phase 1 + Phase 2 of the wave-3 pipeline are structurally impossible under affiliate.** Phase 3 (independent ICP-MS sampling) is still possible because it samples retail-purchased bottles, not user-specific shipments.

Under **direct fulfilment** (NicheCore as a real e-commerce + 3PL operation):

- NicheCore captures the lot at fulfilment.
- NicheCore stores the user-to-lot mapping.
- NicheCore can recall-notify by lot within 24 hours.
- Phase 1 + Phase 2 are buildable per wave-3's timeline.

The founder needs to decide which storefront NicheCore is. The wave-2 advertising-substantiation lawyer's BLOCKER #63 ("30-day return on unopened items" + UK CCR 2013 reg. 29 / EU CRD Art. 9 grants 14-day statutory cancellation right) is also a fork-driver: under affiliate, the cancellation right is the *retailer's* obligation not NicheCore's; under direct, it's NicheCore's.

### 4.2 If affiliate: what's actually buildable

The realistic build under affiliate:

- **Recall feed ingestion is still buildable.** The 7-feed RSS subscription in Dim 2 (Cochrane + EMA + MHRA + TGA + Health Canada + RAPEX + Yellow Card IDAP) can be extended to include recall-specific filters. The output is a public `/safety/recalls` page showing every active recall on every product NicheCore has linked to. This is *informational only* — NicheCore cannot recall-notify individual users by lot. ~1 week build on top of the Dim 2 sweep.
- **Lot-number capture is still possible at the user-affordance level.** Add a "save your lot number" affordance on the user's account page; user manually enters the lot from their bottle. ~0.5% adoption rate at year-1 (manual entry is friction). Combined with the recall-feed surface, the system can email users who *self-entered* a recalled lot. This is the most-defensible recall-notification posture under affiliate.
- **Independent ICP-MS sampling (Phase 3) is still possible.** NicheCore buys bottles at retail, sends to Eurofins/SGS/Intertek, publishes results on `/safety/lots/verification`. ~$30-50k/yr for top-20 SKU quarterly sampling. This is the *most credible* trust surface available under affiliate because it directly addresses the Saper 2008 + Erland 2017 + heavy-metal + adulteration findings the wave-3 review surfaced.

### 4.3 If direct fulfilment: the 24-hour notification SLA reality

Wave-3's "we will notify within 24 hours" sounds simple but it's a real on-call rota commitment. Let me cost it.

- **Recall lands in the EMA EUDAMED feed at 14:32 UTC on a Tuesday.** The sweep picks it up at the next cron run (worst-case 24 hours later under a daily cron; the recall-feed should be sub-hourly cron to honour the SLA).
- **The system identifies 1,247 subscribers who received the recalled lot.** Email send + SMS send + push send fan-out.
- **Customer support inbox lights up.** ~10-30% of notified users will reply with questions ("do I throw out my bottle?", "is my prior month's bottle also affected?", "I'm in the middle of titrating up, what now?"). At 1,247 notifications × 15% reply rate = ~190 support tickets in the next 48 hours. The named medical advisor's bandwidth is the constraint.
- **The recall may require a refund + replacement.** Under direct, NicheCore eats the refund cost (lot-already-shipped, sometimes already-consumed; manufacturer-recalled means manufacturer-reimburses, but NicheCore fronts the customer-facing refund and chases reimbursement after).

The minimum on-call rota for honouring 24-hour notification: one named ops person on-call 7 days a week, with a backup. At $80-150k/yr per ops FTE + named medical advisor at $30-60k/yr + customer-support escalation rota at $40-80k/yr, the direct-fulfilment recall-notification commitment is a **$200-400k/yr operational layer**. This is what the wave-3 reviewer's "we will notify within 24 hours" actually costs at consumer scale.

### 4.4 The build under direct (if founder commits)

Per wave-3's 3-phase pipeline, but with the operational layer explicit:

**Phase 1 (2-3 weeks build + $0-5k recurring infra):**
- Lot-number column on `orders` table (Postgres).
- Lot printed on packing slip (shipping integration via ShipStation/Shippo/etc.).
- User-account lot history surface (`/account/orders` shows lot per product per order).
- Sub-hourly recall-feed sweep extending Dim 2's audit pipeline.
- Recall-notification fan-out via Postmark + Twilio SMS (per-message cost ~$0.0075/email + $0.04/SMS US).
- **Operational layer: named ops on-call rota. Required from Day 1 of recall-feed activation.**

**Phase 2 (4-8 weeks build + ~$2-5k/yr infra):**
- Manufacturer-direct B2B API integration: Schwabe (via authorised EU distributor portal — Boots UK, Apotheke German, Holland & Barrett), Pure Encapsulations (Atrium practitioner portal), Thorne (B2B portal), Nordic Naturals (direct API), Plum Flower (Mayway direct), Padma AG (Swissmedic distributor). Per-lot COA pull on every shipment to NicheCore's fulfilment center.
- Public `/safety/lots/[sku]/[lot]` route surfacing the per-lot COA.
- AE → lot linkage in the Dim 1 AE-intake form (auto-pull user's last lot of the named product).

**Phase 3 (12-24 weeks build + $30-50k/yr sampling):**
- Quarterly ICP-MS + HPLC verification sampling via Eurofins NA / SGS / Intertek. ~$400-800 per sample × 20 SKUs/quarter × 4 quarters/yr = ~$32-64k/yr.
- Public verification surface at `/safety/lots/verification`.
- Manual AYUSH bulletin + PvPI + NMPA ingestion (no clean API; ~4-8 hours/month founder/medical-advisor review).

### 4.5 The recall-feed API reality

Wave-3 framed the feeds as if they all had APIs. They don't. Let me audit each:

| Feed | API? | Public data? | Notes |
|---|---|---|---|
| **EMA EUDAMED** | Web-only as of 2025-2026 | Yes | Devices only; manual scrape; EUDAMED has a public web search but no JSON API. Plans for API in 2026-2027 per EU MDR roadmap. |
| **EU RAPEX / Safety Gate** | Yes (CSV export + RSS) | Yes | Consumer products; cleanest of the EU feeds. Weekly publication. |
| **UK MHRA Drug Safety Updates** | RSS | Yes | Monthly publication; clean RSS. |
| **UK MHRA Medical Device Alerts** | RSS | Yes | Per-publication; clean RSS. |
| **TGA Recall Actions** | RSS + HTML scrape | Yes | RSS exists; some recall details only in linked HTML; scrape required. |
| **Health Canada Recalls and Safety Alerts** | JSON API | Yes | Cleanest of all — proper REST API at `recalls-rappels.canada.ca/api`. |
| **AYUSH Pharmacopoeia Committee India** | PDF-only | Yes | Quarterly bulletins; manual scrape; ~2 hours/quarter review. |
| **PvPI India bulletins** | PDF-only | Yes | Quarterly; manual scrape. |
| **NMPA China** | Web-only, Chinese-language | Yes | Annual pharmacopoeia + per-month recall page; requires Chinese-language review or LLM-translation step. |

The wave-3 review correctly named EUDAMED as web-only. The 24-hour SLA for EUDAMED-driven recalls thus has a manual-scrape dependency at the front — which means the on-call rota needs someone who can manually check EUDAMED daily during business hours. Until EMA ships the API (2026-2027 per roadmap), this is unavoidable.

### 4.6 Ship-list for Dim 4

**Under affiliate (current likely state):**

| # | Item | Effort | Priority |
|---|---|---|---|
| 4.1 | Public `/safety/recalls` page driven by Dim 2 recall-feed extension | 1 week | NEXT SPRINT |
| 4.2 | User-affordance "save your lot number" on account page | 2 days | NEXT SPRINT |
| 4.3 | Email-fan-out to self-entered-lot users on recall | 2 days | NEXT SPRINT |
| 4.4 | Independent ICP-MS quarterly sampling Phase 3 | 4 weeks setup + $30-50k/yr recurring | YEAR 2 |
| 4.5 | Public `/safety/lots/verification` registry | 1 week | YEAR 2 |

**Under direct fulfilment (decision required):**

| # | Item | Effort | Priority |
|---|---|---|---|
| 4.6 | Phase 1 — lot capture + sub-hourly recall sweep + fan-out + on-call rota | 3 weeks build + $200-400k/yr ops | DECISION REQUIRED |
| 4.7 | Phase 2 — manufacturer-direct B2B API + per-lot COA registry + AE-to-lot linkage | 4-8 weeks | YEAR 1 if direct |
| 4.8 | Phase 3 — ICP-MS sampling + verification surface | 4 weeks setup + $30-50k/yr | YEAR 1 if direct |

**My honest recommendation:** the founder should not pursue direct fulfilment until at minimum the AE intake (Dim 1) + audit pipeline (Dim 2) + pnpm validate gate (Dim 3) + living-protocol claim infrastructure (Dim 5) have shipped. Direct fulfilment with a 24-hour recall SLA is a 6-month operational standing-up; under affiliate, NicheCore can ship the recall *information* surface in 1-2 weeks and ship the verification surface (ICP-MS sampling) in year-2 without any of the 24-hour SLA burden. The Phase 3 verification surface is actually the *most credible* trust artefact for the doctrine the founder cares about — Saper 2008 + Erland 2017 are the public-data callouts the wave-3 review surfaced; Phase 3 sampling answers them directly without committing to the operational layer.

---

## Dimension 5 — Living-protocol claim infrastructure: the most defensible moat

The home page currently claims "Per-dossier lastUpdated on every page" (post-wave-2 softening). The wave-2 + wave-3 reviewers correctly identified that this is honest but un-actionable — the reader can't see *what* changed. The aspirational claim ("every regime refreshed weekly") cannot be true without infrastructure that NicheCore does not yet have. This dimension is what that infrastructure looks like.

### 5.1 The per-claim ClaimChange model

The data model:

```typescript
// lib/claim-change.ts
export interface ClaimChange {
  id: string;                          // ulid
  dossierId: string;                   // e.g., "tinnitus-support"
  sectionAnchor: string;               // e.g., "13.7" or "3.3"
  claimSubject: string;                // e.g., "Ginkgo (Tebonin EGb 761)"
  changeType:
    | "grade-up"
    | "grade-down"
    | "harm-axis-added"
    | "harm-axis-removed"
    | "primary-endpoint-correction"
    | "regulatory-status-change"
    | "supplier-tier-change"
    | "freshness-refresh"
    | "added"
    | "removed";
  before: { grade?: EvidenceGrade; verdict?: string; evidence?: string[] };
  after: { grade?: EvidenceGrade; verdict?: string; evidence?: string[] };
  rationale: string;                   // human-readable why
  triggerSource: {
    sourceType: "cochrane" | "ema" | "mhra" | "tga" | "health-canada" | "ayush" | "pvpi" | "pubmed" | "internal-review";
    sourceUrl?: string;
    sourceDate: string;
  };
  ratifiedBy: {
    automated: boolean;                // LLM-critic ratified without human?
    humanReviewer?: string;            // medical-advisor name + GitHub PR number
  };
  ratifiedAt: string;
  publishedAt: string;                 // when this change went live on the dossier
}
```

### 5.2 The Sources.lock.json equivalent

Wave-1 NeurIPS proposed `Sources.lock.json` — a per-dossier registry of every cited paper with version-pin (DOI + retrieval date + assertion-mapping). Building it:

```typescript
// dossier-source-lock.json (per-dossier file)
{
  "dossierId": "tinnitus-support",
  "schemaVersion": "v7.0.0",
  "generatedAt": "2026-06-09T14:00:00Z",
  "sources": [
    {
      "id": "hilton-2013",
      "type": "cochrane-review",
      "cdsrId": "CD003852",
      "version": "2013.3",
      "citation": "Hilton MP, Zimmermann EF, Hunt WT. Ginkgo biloba for tinnitus. Cochrane Database Syst Rev. 2013;3:CD003852.",
      "doi": "10.1002/14651858.CD003852.pub3",
      "retrievedAt": "2026-06-06",
      "supportsClaims": ["tinnitus-support#3.3-ginkgo-grade", "tinnitus-support#13.7-ginkgo-row"]
    },
    {
      "id": "sereda-2022",
      "type": "cochrane-review",
      "cdsrId": "CD013879",
      "version": "2022.11",
      "supersedes": ["hilton-2013"],
      "citation": "Sereda M, Smith H, et al. Ginkgo biloba for tinnitus. Cochrane Database Syst Rev. 2022;11:CD013879.",
      "doi": "10.1002/14651858.CD013879.pub2",
      "retrievedAt": "2026-06-06",
      "supportsClaims": ["tinnitus-support#3.3-ginkgo-grade", "tinnitus-support#13.7-ginkgo-row"]
    }
  ]
}
```

The `supersedes` relationship is the load-bearing edge — when the audit sweep (Dim 2) detects a re-issue of CD003852/CD013879, it knows which dossier+claim is affected.

### 5.3 The diff-renderer

Per-dossier `/[domain]/[slug]/changelog` route renders the per-dossier ClaimChange history. The atlas-wide `/atlas/changelog` aggregates across all 78 dossiers.

UI:

```
## Tinnitus changelog

### 2026-06-09 — Ginkgo grade lowered from B → C
Why: Cochrane Sereda 2022 (CD013879) supersedes Hilton 2013 (CD003852);
primary endpoint not achieved; modest post-hoc subgroup signal.
Trigger: Cochrane RSS feed 2026-06-08
Ratified by: Claude 3.5 Sonnet LLM-critic; human-reviewed by [medical advisor name] 2026-06-09

### 2026-06-07 — Lenire grade lowered from B → D
Why: GRADE methodology — single-arm + no sham + industry-sponsored = observational/low-certainty.
Trigger: wave-2 biostatistics audit
Ratified by: human-only

### 2026-06-06 — Ashwagandha harm-axis added
Why: 2020-2024 hepatotoxicity case-series cluster (Lia 2023; Halegoua-DeMarzio 2023;
TGA review 2023; AYUSH Pharmacopoeia Committee 2024); cross-dossier impact ~12 journeys.
Trigger: wave-2 pharmacovigilance audit
Ratified by: human-only
```

This is the trust artefact the founder cannot build any other way. *Other commerce properties say "evidence-backed"; NicheCore can say "here's exactly what changed on every claim, with the source paper that triggered the change, and the ratifier who approved the change."*

### 5.4 The full source-monitor → claim-change-candidate → LLM-critic → human-ratify pipeline

End-to-end:

1. **Source monitor (Dim 2 sweep):** RSS + API ingestion detects a new Cochrane re-issue, EMA monograph update, MHRA Drug Safety Update, etc.
2. **Claim-change candidate generator:** For each new sweep item, an LLM-critic (Claude 3.5 Sonnet or gpt-4o) cross-references against the Sources.lock.json + the dossier markdown and proposes structured `ClaimChange` records. Per-item LLM cost ~$0.02-0.05.
3. **Human-or-LLM ratification:** High-confidence claim-changes (e.g., "Cochrane re-issue, same direction, magnitude shift small") auto-ratify; medium-confidence go to founder/medical-advisor queue. Estimated 5-15% auto-ratify rate at NicheCore-scale.
4. **PR generation:** Each ratified claim-change generates a PR against the dossier markdown + the Sources.lock.json + the ClaimChange registry. The pnpm validate gate (Dim 3) runs against the PR.
5. **Atlas-wide changelog feed:** RSS + JSON + the public `/atlas/changelog` surface auto-update on PR merge.

### 5.5 The cost reality

Per wave-2 specialist + wave-3 estimates + my own calibration:

- **Infrastructure:** $5-15k/yr for LLM-tokens at NicheCore-scale (~30 claim-change-candidates/week × $0.05/candidate × 52 weeks ≈ $80/yr LLM tokens; the bulk of infra cost is the audit sweep + database hosting + Vercel/Cloud Run scaling).
- **Human triage:** ~5-10 hours/week at scale (78 dossiers × ~0.5-1 claim-change/dossier/month × ~10 min/triage) = $20-50k/yr for a named medical-affairs role; or absorbed by founder + named medical advisor at year-1.
- **Total fully loaded:** $60-90k/yr at year-2 with a named medical-affairs FTE; $30-50k/yr at year-1 with founder + medical advisor absorbing.

### 5.6 The build phasing

**Sprint 1 (4 weeks):** Ship the changelog primitive + Sources.lock.json for tinnitus exemplar.

| # | Item | Effort |
|---|---|---|
| 5.1 | Build `lib/claim-change.ts` types + ULID + storage (Postgres or even JSON-per-dossier at year-1) | 2 days |
| 5.2 | Manually back-fill `Sources.lock.json` for tinnitus-support.md (~80 cited papers) | 1 week |
| 5.3 | Build `/ears/tinnitus/changelog` route rendering ClaimChange history | 3 days |
| 5.4 | Build PR-generation tooling so claim-changes land via PR with the pnpm validate gate enforcing structure | 3 days |
| 5.5 | Hand-write 5-10 retrospective ClaimChange entries covering the wave-1/2/3 grade changes (Ginkgo, Lenire, CBT-T, Ashwagandha, etc.) | 2 days |

**Sprint 2-4 (8 weeks):** Scale to atlas-wide.

| # | Item | Effort |
|---|---|---|
| 5.6 | Back-fill Sources.lock.json across 78 dossiers (LLM-assisted citation extraction + manual QA) | 3-4 weeks |
| 5.7 | Wire the LLM-critic claim-change-candidate generator into the Dim 2 audit sweep | 2 weeks |
| 5.8 | Build `/atlas/changelog` + per-dossier changelog feeds (RSS + JSON) | 1 week |
| 5.9 | Build ratification workflow + medical-advisor review queue | 1 week |

**Sprint 5+ (ongoing):** Operate the pipeline.

| # | Item | Effort |
|---|---|---|
| 5.10 | Weekly sweep + claim-change triage + PR review cadence | 5-10 hr/wk |
| 5.11 | Quarterly atlas-wide claim-change report (open + public) | 4 hr/quarter |

### 5.7 Why this is the moat

The founder's commerce thesis is *honesty-as-product*. The §13.7 honest-evidence-tier comparison table is the single most distinctive editorial artefact in the atlas. The living-protocol claim infrastructure makes that table *self-maintaining*: every change to every claim has a source-trigger + a ratifier + a publish date + a diff. The competitor cannot copy this in <12 months because the citation-back-fill + the ratification process is real engineering + real human labour.

The infrastructure also unlocks downstream value the founder hasn't priced yet:

- **Quarterly published atlas changelog as PR/credibility asset** — academic mailing lists + medical-school informatics curricula will subscribe to this if it actually exists and is well-maintained.
- **EFSA / EMA / TGA / Health Canada engagement.** When a regulator queries "where did NicheCore get this claim?", the answer is a citation-graph with sourced ratification. This is the audit-defensibility surface that converts NicheCore from "content site" to "regulatable knowledge graph."
- **Insurance / reinsurance posture.** Once living-protocol claim infrastructure exists, the public-liability + product-liability insurance underwriter has something specific to underwrite. Pre-infrastructure, the underwriter sees a content site with unmaintained claims and prices accordingly.

### 5.8 Ship-list for Dim 5

Already summarised above. Total ship cost: 12 weeks for the tinnitus-exemplar + atlas-wide back-fill; $30-50k/yr at year-1; $60-90k/yr at year-2 with FTE; the most defensible moat in the entire backlog.

---

## Cross-dimension synthesis — the recommended 6-month roadmap

### Sprint 1 (Week 1-2): ship the highest-leverage 4-day item + the cheap 1-week audit pipeline

- Dim 3: `pnpm validate` PR-gate (4 days). Closes 3-of-9 W2 ad-substantiation BLOCKERs structurally.
- Dim 2: `tools/audit-sweep.mjs` + 7 RSS feeds + LLM-critic + `/audit` route (5-6 days).
- Dim 4 (affiliate-mode): `/safety/recalls` informational page driven by Dim 2 recall-feed extension (1 week).

Total: 2 weeks, ~$0 infra cost, no human-FTE commitment. Closes ~30% of wave-2/3 architectural backlog at minimal cost.

### Sprint 2 (Week 3-5): SaaS-stitched AE intake v1 + medical-advisor onboarding

- Dim 1: Typeform + Airtable + Zapier + Postmark + dual-path responsible-disclosure (18 days build).
- Dim 1: Named pharmacovigilance physician retainer onboarding (parallel; 2-4 weeks).
- Dim 1: GDPR consent flow + DSAR fulfilment route (concurrent).

Total: 3 weeks elapsed, ~$2-6k build + $200/mo + $30-60k/yr retainer. Unblocks storefront per wave-1/2 medical reviewer + lifts wave-3 disability-inclusion concern (crisis-line routing is now production-grade with a named reviewer behind it).

### Sprint 3-4 (Week 6-9): per-claim freshness back-fill + Cochrane version-pinning

- Dim 2: citation-parser + back-fill `FRESHNESS_LABEL` enum across 78 dossiers (3-4 weeks).
- Dim 2: `cochrane_review_versions` table + auto-detect re-issue (1 week).
- Dim 2: per-claim freshness chips in §3.3 + §13.7 dossier UI (3 days).

Total: 4 weeks, mostly LLM-assisted + 1 wk founder QA. Renders the freshness enum honest atlas-wide.

### Sprint 5-8 (Week 10-17): living-protocol claim infrastructure (tinnitus exemplar + atlas-wide back-fill)

- Dim 5: Sprint 5.1-5.5 build the changelog primitive + tinnitus exemplar (4 weeks).
- Dim 5: Sprint 5.6-5.9 back-fill atlas-wide + LLM-critic claim-change-candidate generator + ratification workflow (8 weeks).

Total: 12 weeks build + $30-50k/yr ongoing operational cost. The defensible moat lands.

### Sprint 9+ (Week 18-26): YEAR 1 close-out

- Dim 4: independent ICP-MS quarterly sampling (Phase 3) under affiliate model (4 weeks setup + $30-50k/yr).
- Dim 1: BCPNN IC₀₂₅ wired in once cumulative user-quarters > 50k (decision deferred until reach).
- Dim 4: founder commits to direct-fulfilment or affiliate-only (decision required by Q4).
- Skill v7.2: Rule 16 structured-fence YAML mandatory in every new dossier; Rule 21 PR-gate codified in skill; Rule 22 freshness enum codified.

### YEAR 2 decisions

- Migrate AE intake from SaaS-stitched to in-house React + Postgres if MAU > 25k. Cost: 11-14 weeks; $35-80k/yr ongoing.
- If founder commits to direct fulfilment: Phase 1 + Phase 2 lot-traceability + 24-hour recall SLA + named ops on-call rota. Cost: $200-400k/yr operational layer.
- If MAU > 50k: hire named medical-affairs FTE for claim-change triage + atlas-wide editorial cadence. Cost: $80-150k/yr.

---

## Cumulative cost projection

| Layer | Year-1 minimum | Year-1 maximum | Year-2 minimum | Year-2 maximum |
|---|---|---|---|---|
| Dim 1 AE intake (SaaS v1 + retainer) | $32k | $66k | $35k | $80k |
| Dim 2 audit pipeline | $1k | $5k | $5k | $15k |
| Dim 3 pnpm validate | $0 | $0 | $0 | $0 |
| Dim 4 recall (affiliate) | $30k | $50k | $30k | $50k |
| Dim 4 recall (direct) | — | — | $200k | $400k |
| Dim 5 living-protocol claims | $30k | $50k | $60k | $90k |
| **Total (affiliate path)** | **$93k** | **$171k** | **$130k** | **$235k** |
| **Total (direct path)** | — | — | **$330k** | **$635k** |

The affiliate path is the founder-survivable cost curve. The direct path is the institutional-scale cost curve. Don't pursue direct without explicit reach + revenue prerequisites.

---

## Specific concerns checklist — from the brief

### (1) AE intake — minimum-viable architecture

**Walked.** Dim 1 above. SaaS-stitched v1 (Typeform + Airtable + Zapier + Postmark) at 3 weeks + ~$2,400/yr + named medical-advisor retainer. Responsible-disclosure dual-path recommended over standalone NicheCore-only adjudication. MedDRA-lite alternative via SNOMED CT International for year-1. GDPR Art. 9(2)(a) explicit consent + DSAR fulfilment + 5-7 year retention. Signal detection at 10k user-quarters is count-based only; PRR/χ² at 50k; BCPNN IC₀₂₅ at 100k; OpenVigil 2.0 at 100k+. The wave-2 reviewer's tier methodology is correct in shape but the *transition thresholds* are higher than wave-2 implied.

### (2) Audit pipeline — /audit + weekly-sweep JSON

**Walked.** Dim 2 above. 7 RSS feeds + 2 manual-PDF feeds. ~1 week build + LLM-critic at $50-200/yr. Per-claim freshness back-fill via LLM-assisted citation extraction + 78-dossier QA in 3-4 weeks. Cochrane re-issue auto-detection via `cochrane_review_versions` table. LLM-critic + human-in-the-loop at ~1-2 hr/wk founder triage in year-1.

### (3) pnpm validate PR-gate

**Walked.** Dim 3 above. 4 days build using remark/mdast-walk + structured-fence YAML in dossiers + bundle parse from `lib/data.ts` + EFSA Article 13.1 authorised-claim corpus + deny-list of stronger-claim phrases. Pre-commit + GitHub Action + Cloud Build fail-loud. **Single highest-leverage item in the entire backlog.**

### (4) Lot-traceability + recall ingestion

**Walked.** Dim 4 above. Affiliate-vs-direct fork is the load-bearing decision. Under affiliate: informational recall surface + self-entered-lot affordance + ICP-MS sampling is the realistic path; the 24-hour SLA cannot be honoured. Under direct: 3-phase pipeline per wave-3, plus a $200-400k/yr operational layer the wave-3 review skipped. **Recommendation: stay affiliate at year-1; revisit direct fulfilment at year-2.**

### (5) Living-protocol claim infrastructure

**Walked.** Dim 5 above. Per-claim `ClaimChange` records + `Sources.lock.json` per dossier + diff-renderer per dossier + atlas-wide changelog + source-monitor → LLM-critic → human-ratify pipeline. 12-week build + $30-50k/yr year-1 / $60-90k/yr year-2. The most defensible moat in the backlog. Downstream unlocks regulatory engagement + insurance underwriting + academic credibility.

---

## What I would publish vs what I would gate

**Ship this sprint (no infrastructure dependencies):**
- pnpm validate PR-gate + EFSA authorised-claim corpus + deny-list (4 days).
- `tools/audit-sweep.mjs` + 7 RSS feeds + LLM-critic + `/audit` route (5-6 days).
- `/safety/recalls` informational page driven by recall-feed extension (1 week).

**Ship next sprint (3-4 weeks; medical-advisor onboarding in parallel):**
- SaaS-stitched AE intake v1 with dual-path responsible disclosure.
- Named pharmacovigilance physician retainer.
- GDPR consent flow + DSAR fulfilment.
- Public `/safety/reports` + `/safety/methodology` pages.

**Ship Sprint 3-4 (4 weeks):**
- Per-claim freshness back-fill across 78 dossiers.
- Cochrane re-issue auto-detection.
- Freshness chips in dossier UI.

**Ship Sprint 5-8 (12 weeks):**
- Living-protocol claim infrastructure tinnitus exemplar + atlas-wide back-fill.
- Open public `/atlas/changelog` RSS + JSON surfaces.

**Defer to year-2 decision point:**
- In-house React + Postgres AE pipeline migration (only if MAU > 25k).
- Direct-fulfilment lot-traceability + 24-hour recall SLA (only if founder commits + revenue supports the operational layer).
- BCPNN IC₀₂₅ implementation (only at 50k+ user-quarters).
- Named medical-affairs FTE (only at MAU > 50k or atlas growth > 100 dossiers).

**Defer until reach gates trigger:**
- WHO-UMC contribution as aggregated cohort feed (year-2.5+ per wave-2 §5.3).
- OpenVigil 2.0 integration (year-3 at 100k+ user-quarters).
- EBGM DuMouchel implementation (skip; replaced by OpenVigil if needed).

---

## Closing reviewer position

NicheCore has built a content product that is more rigorous than 90% of the OTC-natural-medicine commerce space — wave-3 supplement-QC verdict, wave-2 biostatistics verdict, wave-1 medical-safety verdict converge on this. The data-engineering question is whether the *infrastructure* surface can be built to the same standard the *content* surface already meets, and at what cost.

The answer is: yes, but the curve is non-linear. The highest-leverage 4-day item (pnpm validate PR-gate) closes a third of the wave-2 ad-substantiation BLOCKERs with structural finality, not editorial diligence. The next 2 weeks of work (audit pipeline + informational recall surface) bring the freshness + recall claims into honest territory at near-zero cost. The next 4 weeks (SaaS-stitched AE intake + medical-advisor retainer) unblock the storefront per wave-1/2 medical-safety verdict at a $35-80k/yr running cost. The next quarter (claim infrastructure) builds the moat at $30-50k/yr.

The directly-fulfilled lot-traceability + recall pipeline that wave-3 framed enthusiastically is the *least* recommended of the five — not because the engineering is hard, but because the 24-hour SLA operational layer is $200-400k/yr and the founder almost certainly cannot self-staff it at year-1 scale. Under affiliate, NicheCore can ship the informational + ICP-MS verification surface that honours the doctrine without the SLA exposure.

The single best multi-quarter bet the founder can make from a data-engineering chair is to fund the living-protocol claim infrastructure. Every other commerce property in this space says "evidence-backed" without an audit-trail. NicheCore can ship an audit-trail. The competitive moat compounds because the citation graph + ratification process accrues value with every weekly sweep; the more weeks of well-maintained changelog, the higher the cost-to-replicate for any competitor entering the space.

The reviewer recommendation:

- **Strong accept** of the pnpm validate PR-gate as the highest-leverage immediate ship.
- **Strong accept** of the SaaS-stitched AE intake v1 with dual-path responsible disclosure over the in-house React + Postgres build at year-1.
- **Accept** of the audit pipeline + freshness back-fill at near-zero cost.
- **Conditional accept** of the lot-traceability + recall pipeline, conditional on the founder's explicit affiliate-vs-direct decision; affiliate-mode informational surface ships this sprint, direct-mode 24-hour SLA does not.
- **Strong accept** of the living-protocol claim infrastructure at year-1 phasing — the moat is unique to NicheCore's editorial doctrine.

The founder is two sprints from "best-in-class compliance surface" via the pnpm validate gate + audit pipeline. Six weeks from "storefront-defensible AE pipeline" via the SaaS-stitched v1 + medical-advisor retainer. One quarter from "honest freshness atlas-wide." Two quarters from "living-protocol claim infrastructure that no competitor can copy in <12 months." The gap between content quality and infrastructure quality closes faster than the wave-1/2/3 reviewers framed, because three of the five layers are SaaS-stitched not in-house-engineered.

— Reviewer, 2026-06-09. *Doctrine preserved: ingestion routes through WHO + EMA + MHRA + TGA + Health Canada + AYUSH + PvPI authority. FDA / MAUDE queried only as cross-reference on Lenire + Truvaga (already-declared De Novo / 510(k) regulatory-path context). No US-regulator-authority anchoring at the infrastructure layer. GDPR + UK-GDPR + India DPDP Act + AU Privacy Act + EU Data Act compliance baked into the SaaS-stitched architecture from Day 1.*
