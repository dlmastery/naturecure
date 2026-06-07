# Wave 12 improvement backlog — 2026-06-07

Five wave-12 reviewers landed. Two patient-safety-critical fixes applied **within-session** (catch-and-fix, matching wave-8 discipline). Remaining structural additions queued here for the next batch.

## Reviewer roster

| # | Persona | File | Verdict |
|---|---|---|---|
| 1 | Chronic-pain + central-sensitisation | `docs/REVIEW_2026-06-16_wave12_chronic-pain.md` | Major revision |
| 2 | Risk communication | `docs/REVIEW_2026-06-16_wave12_risk-communication.md` | Major revision |
| 3 | ME/CFS + autonomic + Long COVID | `docs/REVIEW_2026-06-16_wave12_mecfs-autonomic.md` | **Major revision (safety-load-bearing)** |
| 4 | Otoneurology + skull-base surgeon | `docs/REVIEW_2026-06-16_wave12_otoneurology.md` | Major revision |
| 5 | Endocrinology (thyroid + adrenal + pituitary + diabetes) | `docs/REVIEW_2026-06-16_wave12_endocrinology.md` | Major revision |

## Applied within-session (this commit)

1. **§7.7 PEM-positive safety gate** — header warning + explicit "do NOT follow this if PEM-positive" + NICE NG206 + RACP 2022 + Action for ME 2024 citation chain.
2. **§7.7.bis PEM-positive substitution — pacing-with-heart-rate-ceiling** — full substitution protocol (~450 words). Replaces weekly periodization for the ~30-40% of severely-distressed-tinnitus readers with PEM-positive cluster (ME/CFS, Long COVID, post-viral). §7.6 PEM-adaptations folded in (cold-water → lukewarm-cool 15-20°C; 4-7-8 → coherent breath substitution; humming volume; PEM-load slider).
3. **§10.6 Ashwagandha-unmasking-subclinical-Graves' row** — separate from existing Ashwagandha+LT4 row. Standalone vulnerability for untreated subclinical Graves' (suppressed TSH, normal T3/T4, often unaware). Plus updated existing Ashwagandha+LT4 row with persistent-suppression-after-stop → screen TRAb.

## Deferred to next batch (structural, not patient-safety-critical timing)

### From ME/CFS + autonomic (Reviewer #3)
- **§0.9 DSQ-PEM-5 screen** + active-stand-10-NASA-Lean-Test + COMPASS-31 + Wolfe ACR 2016 FM inventory + CSI Mayer 2012 → cluster screen at intake (~700 words)
- **§0.9.bis Long-COVID-tinnitus differentiation** (~200 words; ICMR + NICE NG188 + WHO PCC)
- **§0.9.ter Four-quadrant cluster-screen interpretation** (~250 words)
- **§2.6 sub-type row 8 — post-COVID / Long-COVID tinnitus** with mechanistic distinguishing features
- **§11.3 row 17 — ME/CFS + Long COVID + POTS + FM + CS screen** (cluster phenotype with 5 sub-tests)
- **§11.6 PEM-bullet** in life-stage gate
- **§10.7.3 row — ME/CFS + POTS + Long COVID specialist referral** — clinic-only adjuncts (LDN, pyridostigmine, low-dose-aripiprazole)
- **§15 autonomic-specialist clinic-route addendum** — UK Newcastle / Royal Free / UCLH / St George's / Cambridge; AU Royal Melbourne / RPA Sydney; DE Charité-CFC / Würzburg; IN AIIMS-Delhi Long-COVID OPD / CMC Vellore / NIMHANS

### From otoneurology + skull-base (Reviewer #4)
- **§11.5 vestibular-schwannoma workflow** — CISS/FIESTA/DRIVE MRI-IAC protocol with booking-script; Koos I-IV staging; observe vs SRS vs microsurgery decision lattice; **~30/50/20 invariant tinnitus-outcome-by-arm** honest disclosure
- **§11.5h non-VS skull-base tumours** — CPA + petroclival + foramen-magnum meningioma + jugulotympanic + vagale + carotid-body paraganglioma (**otoscopy-first routing for visible red mass behind eardrum**) + endolymphatic-sac tumour + VHL + NF2 bilateral-VS screen
- **§0 pulsatile-tinnitus advanced workup** — **IIH self-screen (single largest reversible-aetiology miss)**: visual obscurations + headache + papilloedema. 9-12 lesion-class differential + Cognard I-V dural-AVF with cortical-venous-reflux emergency framing
- **§11.5 Jannetta micro-vascular decompression** — typewriter / Morse-code paroxysmal phenotype + Bárány 2016 vestibular paroxysmia criteria + carbamazepine / oxcarbazepine diagnostic-therapeutic trial + AICA / PICA vascular loop + **~75-85% MVD response**
- **§15.3a post-surgical + post-SRS tinnitus management** — ~30-60% persistent rate; post-translabyrinthine anatomic-deafness → CROS / BiCROS / BAHA / Ponto / ADHEAR contralateral routing; post-SRS 12-24-month delayed-tinnitus + delayed-hearing-loss + hydrocephalus + cyst windows; ABI + CI emerging options

### From endocrinology (Reviewer #5)
- **§0.9 thyroid + adrenal screen** — TSH + fT4 + fT3 + TRAb + anti-TPO + AM cortisol + 24-h UFC
- **§0 pulsatile-tinnitus paragraph** — hyperthyroidism + Graves' screen: pulsatile + palpitations + weight loss + heat intolerance + tremor + bulging eyes + new AFib → screen TSH/fT4/fT3/TRAb. New AFib + new pulsatile tinnitus in 30-50yr-old (esp female) = thyrotoxicosis until proven otherwise
- **§11.5 hyperthyroidism / Graves' / over-replaced LT4 row** — excluded: iodine (absolute in active Graves'), kelp/seaweed, high-dose B-complex (niacin), L-tyrosine
- **§2.6 sub-type rows 9-11** — Hashimoto-tinnitus + Graves'-tinnitus + diabetic-cochleopathy
- **§11.3 sub-clinical TSH 4.5-10 gray-zone decision-tree** — NICE NG145 (UK) / DGE (DE) / ESA (AU) / ESI (IN) per-jurisdiction split
- **§11.5 iatrogenic-adrenal-suppression row** — chronic inhaled (fluticasone, budesonide) + topical (clobetasol on > BSA 5%) + oral (prednisolone > 7.5mg/d > 3 weeks) + intra-tympanic-steroid pulses → HPA suppression; AM cortisol screen if symptoms compatible
- **§11.5 pituitary-adenoma row** — prolactinoma + acromegaly + Cushing + non-functioning macroadenoma + skull-base remodelling. IGF-1 + 24-h UFC + prolactin screening
- **§11.3 diabetic-cochleopathy row** — Bainbridge 2008 NHANES + Akinpelu 2014 + Hodgson 2024 UKBB; cochlear microangiopathy + auditory-nerve demyelination + insulin-receptor synapse dysregulation; HbA1c stratification; MTNR1B + melatonin cross-walk to wave-10 pharmacogenomics

### From chronic-pain + central-sensitisation (Reviewer #1)
- **§11.3 CSI Mayer 2012 screen** — see also #3 cluster
- **§7.7.ter FM-comorbid substitution** — aquatic exercise + tai chi + Pilates (Häuser/Bidonde Cochrane + Wang NEJM)
- **§10.6 central-sensitisation-aware supplement re-prioritisation** — Mg + alpha-lipoic-acid + palmitoylethanolamide (PEA) higher; high-dose-stimulant adaptogens lower in CSI-dominant

### From risk communication (Reviewer #2)
- **§13.7 ARR/NNT/NNH reframe** — convert all "X% improvement" to absolute-risk-reduction + number-needed-to-treat (positive) + number-needed-to-harm (negative). Pair with median + IQR + 95%-CI band on every effect-size statement
- **§0 + §13.6 + §13.7 frequency-format adoption** — Gigerenzer-Sedlmeier 1995 + Hoffrage 2000: replace "P = 0.X" with natural-frequency "X out of 1000 readers like you" framing throughout
- **Confounding-not-causation hedges** — flag every observational-vs-RCT distinction at the row level, not in a single §13 footnote

## Skill v6.2.7 candidate rules

- **Rule 23** (endocrinology + ME/CFS): Every dossier with an activity-prescription section MUST screen for PEM + post-viral fatigue + post-COVID cluster at intake AND gate any periodization with the explicit "do NOT follow this if PEM-positive" header. NICE NG206 / RACP 2022 / Action for ME 2024 as anchor citations.
- **Rule 24** (otoneurology): Every dossier with a pulsatile-tinnitus surface MUST include an IIH self-screen (visual obscurations + headache + papilloedema) — largest reversible-aetiology miss in current pulsatile workups.
- **Rule 25** (endocrinology): Every dossier with thyrotropic adaptogens (Ashwagandha, Bacopa, etc.) MUST disambiguate "drug-caused TSH drift" from "drug-unmasked subclinical Graves'" — distinct mechanisms, distinct workups.
- **Rule 26** (risk communication): Every effect-size claim MUST adopt natural-frequency framing alongside (not instead of) p-values + RRR. Pair every "X% better" with absolute-risk-reduction + NNT + NNH.

## Wave 13 candidate personas (5 new)

1. Paediatric audiology + adolescent tinnitus (Manchester / GOSH / Cincinnati / Melbourne CHRI / AIIMS-Delhi peds-ENT)
2. Public-health behaviour-change + protocol-adherence specialist (LSHTM / Erasmus / Karolinska / PHFI / Monash)
3. Health-economics + cost-effectiveness (NICE / CADTH / PBAC / IQWiG / HITAP — non-US-only)
4. Disability-justice + accessibility lens (CRPD / Convention on Disability + UK EHRC + AU AHRC + DE Antidiskriminierungsstelle + ICRPD-IN)
5. Migration + diaspora + non-translated-language reader (multilingual rendering for Hindi / Tamil / Bengali / Mandarin / Arabic / Spanish — affordability + cultural-translation accuracy)

Plus retaining the convergent finding from waves 6 + 9 + 11: **MVP-as-default + free-baseline + PPP-adjusted + Nagoya benefit-sharing** as the structural inverse-care-law remediation. Not a single-wave fix — a cross-wave architecture decision.
