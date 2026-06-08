# Wave 14 improvement backlog — 2026-06-08

Five wave-14 reviewers landed. **Three patient-safety + AI-safety + biodiversity catch-and-fixes applied within-session.** Founder-synthesis verdict: **critique-saturation reached at 13 waves; wave-14 added 5 important safety + operational + planetary-health surfaces but nothing structurally new.** Path forward = Option C architectural commit + 9-batch execution.

## Reviewer roster

| # | Persona | File | Verdict |
|---|---|---|---|
| 1 | Indigenous health + traditional-knowledge sovereignty | `docs/REVIEW_2026-06-18_wave14_indigenous-health.md` | Major revision (partial-pluralism critique — six-traditions floor upgrade) |
| 2 | Digital-health UX + conversational-AI safety + SaMD | `docs/REVIEW_2026-06-18_wave14_digital-health-ai-safety.md` | Major revision (EU MDR Class IIa + EU AI Act Articles 9-14 + AI Guru regex bug) |
| 3 | **Founder-synthesis cross-wave consolidation** | `docs/REVIEW_2026-06-18_wave14_founder-synthesis.md` | **Architectural commit — Option C recommended** |
| 4 | Lactation + perinatal pharmacology | `docs/REVIEW_2026-06-18_wave14_lactation-perinatal.md` | Major revision (peri-delivery sentinel-red-flag pathway = single most safety-critical wave-14 surface) |
| 5 | Climate + sustainability + supply-chain | `docs/REVIEW_2026-06-18_wave14_climate-sustainability.md` | Major revision (sextuple inverse-care-law axis completed: MVP 10-15× lower-carbon) |

## Applied within-session (this commit)

1. **§0/§11.6 PERI-DELIVERY + 0-6-WEEK POSTPARTUM SENTINEL RED-FLAG PATHWAY** — 5 patterns (pre-eclampsia/HELLP + PDPH + Sheehan/pituitary apoplexy + CVST 0-6-wk + postpartum cardiomyopathy). UKDILAS + bumps UKTIS + Embryotox + Lareb + Mater + RCOG + RANZCOG + DGGG + FOGSI anchors. **None of these are "tinnitus to be managed" — they are "tinnitus as sentinel sign to be triaged at the maternity unit."**

2. **`app/guru/page.tsx:26` UNSAFE_TRIGGER regex hardening** — expanded from 5 keywords to ~50+ patterns covering: SSHL 72-hour + unilateral/asymmetric hearing loss + pulsatile/whooshing + thunderclap headache + visual obscurations / papilloedema + suicide/self-harm/hopelessness + ototoxic-drug names (aminoglycoside + cisplatin + furosemide + vanco + quinine) + pregnancy/breastfeeding/postpartum/peri-delivery/pre-eclampsia/HELLP/Sheehan/CVST/epidural/PDPH + Bell's palsy + facial droop + stroke/TIA/seizure + hypertensive crisis + Ménière's crisis + Hashimoto/Graves'/levothyroxine + warfarin/Coumadin. Wave-14 #4 (digital-health-ai-safety) caught this as concrete code-level safety bug.

3. **§3.3 + §4.x CITES + IUCN extractive de-emphasis** — Saraswatarishta annotated with CITES Appendix I *Saussurea costus* (kuth) conservation flag; reformulated-without-kuth versions preferred. Jatamansi annotated with CITES Appendix II + IUCN Critically Endangered + verified-cultivated-only via UEBT / Fair-Wild / CCRAS-Sustainable-Cultivation programme. Wave-14 #5 (climate) flagged as biodiversity-critical.

## Deferred to Option C execution batches (per founder-synthesis 9-batch roadmap)

### Architectural opener + behavioural commit (Batch 2)
- §0 architectural-commit statement (Option C: MVP-as-default + progressive disclosure)
- §0 inverse-care-law commitment (cost + adherence + accessibility + cultural + safety + carbon — sextuple-axis remediation)

### Cost-per-QALY + PPP + UHC (Batch 3 — from wave-13 #4)
- 8-col PPP-adjusted price column: UK Boots + DE DM + AU Chemist Warehouse + IN 1mg + TH Mega We Care + ID Guardian + VN Pharmacity + PH Mercury Drug
- Per-component cost-per-QALY band column
- Per-jurisdiction UHC + insurance coverage table
- §3 + §5 re-sort by descending cost-per-QALY
- §9.7 BIA

### WCAG 2.2 AA + plain-language + Easy-Read (Batch 4 — from wave-13 #2)
- axe-core CI gate
- Plain-language F-K Grade 12 ceiling
- Easy-Read DIN 8581-1 variant
- Audio + signed-video summaries + pictograms + 3-min exec summary

### Paediatric §12.8 full (Batch 5 — from wave-9 + wave-13 #1)
- Mills & Cherry pre-verbal framework
- CTI/CTSQ/CHQ-CF87/PedsQL/KIDSCREEN screening battery
- LAeq8h adolescent dose calculus + EU PAS directive
- Across-section paeds-safety matrix
- PHQ-A + GAD-7 + PSQI-paeds + C-SSRS Junior
- Gillick + Marion's case + §1626 BGB + MCI/POCSO consent framework

### Disability-justice surface (Batch 6 — from wave-13 #2)
- §1.5 goal-choice frame + §15.4b Deaf Gain perspective
- §5.21 communal-living access + §16.2 movement-pointer
- §15.11 per-jurisdiction disability-benefit pathway + PDF export + reasonable-adjustments letter template

### Diaspora-multilingual glossary-layer (Batch 7 — from wave-13 #5)
- §0.13 + §1-end glossary + §2 SVG pictogram
- 7 diaspora-cuisine §6 adaptations + 5 fasting-protocol modifications + folk-medicine bridge
- 10 diaspora-cluster supplier lattices + 6-step counterfeit verification + halal/kosher/vegetarian/vegan certification
- 16-corridor cross-jurisdictional clinician-routing + AYUSH-OCI Bridge
- Tier-1 transcreation roadmap (Hindi + Mandarin + Spanish + Arabic + Bengali + Portuguese + Indonesian + French-Maghrebi)
- Next.js i18n + Cloud Run multi-region

### PREMs + PROGRESS-Plus + NPT (Batch 8 — from wave-13 #3)
- 5-item BECI PREMs (manageability + reading-grade comprehension + time-burden-vs-benefit + NPS + free-text)
- 11-axis PROGRESS-Plus equity-of-adherence stratification
- NPT cognitive-participation scaffold

### Indigenous health overlay (from wave-14 #1)
- Doctrine rename: "six classical literate-text traditions + one Indigenous oral-tradition framework"
- §4.8 Indigenous oral-tradition + community-knowledge-holder section
- §0.6 Nagoya Protocol compliance statement + Etuaptmumk Two-Eyed Seeing
- §9.x supplier audit column (ABS-status + Nagoya-compliant)
- §11.5b Te Whare Tapa Whā four-walls framework
- §12 Te Pae Māhutonga six-star outcomes
- §11.3 Indigenous-data-sovereignty (CARE + OCAP) at collective level

### Digital-health SaMD + EU AI Act (from wave-14 #2)
- §0.6 regulatory-status statement (Class IIa under EU MDR Rule 11)
- DiGA-pathway pursuit assessment (potential €350/quarter × GKV-insured revenue)
- §16.2 AI Guru safety contract (RAG-grounding + OOD-refusal + red-flag classifier + crisis routing + cross-tradition-compounding detection)
- §16.3 EU AI Act Articles 9-14 compliance (risk register + data governance + transparency + human oversight)
- §16.4 GDPR/BDSG/DPDPA/APP data-protection-by-design + AI Guru transcript policy
- §16.5 UX dark-pattern explicit-prohibition + B Corp / Fair Subscription standards

### Climate + sustainability (from wave-14 #5)
- §0 + §17 planetary-health-framing statement
- §17.x noise-pollution + air-pollution + ototoxic-contaminant prevention layer
- Scope 1+2+3 carbon-footprint per §3 + §5 component
- §7.x heatwave-modification rule + outdoor PM2.5 + AQI gate + disaster-resilience MVP-only fallback
- §9.x sustainability-certified-supplier-tier (UEBT + Fair for Life + Soil Association Organic + B Corp + WHO-GACP) + per-ingredient CITES/IUCN status column
- Per-SKU lifecycle-carbon-footprint label (CSRD 2024 + CBAM 2026 + UK SDR + AU ASIC + IN BRSR alignment)

## Skill v6.2.7 — adjudicated rules (final, per founder-synthesis)

| Rule | Scope |
|---|---|
| **Rule 23** | Cross-tier safety + paediatric + perinatal overlay + risk-communication (consolidates waves 9 + 12 + 14 #4) |
| **Rule 24** | Cost-per-QALY + per-jurisdiction PPP + BIA + descending-cost-per-QALY ordering (wave-13 #4) |
| **Rule 25** | Disability-justice quintet (WCAG 2.2 AA + EAA + plain-language + audism + Sins-Invalid + per-jurisdiction disability-benefit) (wave-13 #2) |
| **Rule 26** | Behaviour-change architecture (MVP-as-default + progressive-disclosure + PREMs + PROGRESS-Plus + NPT + reading-grade ≤9) (wave-13 #3) |
| **Rule 27** | Diaspora-multilingual glossary-layer + cross-jurisdictional clinician-routing + transcreation roadmap (wave-13 #5) |
| **Rule 28** | Indigenous-health overlay + six-traditions-floor upgrade + Nagoya Protocol compliance (wave-14 #1) |
| **Rule 29** | Digital-health SaMD + EU AI Act + conversational-AI safety + data-protection + UX dark-pattern prohibition (wave-14 #2) |
| **Rule 30** | Planetary-health overlay + Scope 1+2+3 carbon + CITES/IUCN/Nagoya supply-chain + climate-vulnerable-reader access (wave-14 #5) |

v6.2.6 → **v6.2.7**; dossier schemaVersion v7.0.0 → **v7.1.0** synchronously.

## Sextuple inverse-care-law axis (now complete)

| Axis | Finding | Source wave |
|---|---|---|
| 1. Cost | MVP $25,710/QALY reimbursable vs Full $92,750/QALY un-fundable | Wave 13 #4 |
| 2. Adherence | MVP @40% vs Full @9% | Wave 13 #3 |
| 3. Accessibility | MVP meets WCAG 2.2 AA + EAA + plain-language vs Full fails | Wave 13 #2 |
| 4. Cultural inclusion | MVP enables transcreation + diaspora corridors vs Full English-OECD-urban-biased | Waves 13 #5 + 14 #1 |
| 5. Vulnerable-population safety | MVP doesn't tip PEM/pregnancy/paeds into crash; Full does | Waves 12 + 13 #1 + 14 #4 |
| 6. Carbon + biodiversity | MVP 10-15× lower-carbon + no CITES-listed extractives | Wave 14 #5 |

Six independent expert lenses + same architectural finding + same recommended Option C.

## Wave 15 candidate personas (per founder-synthesis: only if architectural-commit deferred)

Founder-synthesis verdict: critique-saturation reached; wave 15 not required for the architectural-commit decision. If founder chooses to continue redteam regardless, candidate personas surfaced across waves 13-14:

1. Pregnancy/teratology (natural pair to wave-14 #4 lactation)
2. Postpartum pelvic-floor / diastasis-recti / pelvic-girdle-pain
3. Genetic counselling + syndromic-deafness (NF2 + Pendred + Stickler + Usher + Alport + mitochondrial)
4. Quality-Assurance + ISO-style certification auditor
5. Conformity-assessment Notified Body auditor (EU MDR / CE-mark / DiGA Fast-Track)
