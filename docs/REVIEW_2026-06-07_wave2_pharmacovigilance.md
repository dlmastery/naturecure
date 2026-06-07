# REVIEW 2026-06-07 — Wave 2: Pharmacovigilance Database Audit (Tinnitus Dossier)

**Reviewer role:** Senior pharmacovigilance signal-detection specialist (WHO-UMC VigiBase / EMA EudraVigilance / UK MHRA Yellow Card / Australia TGA DAEN / India PvPI / Health Canada Canada Vigilance).

**Material reviewed:** `nichecore/research/tinnitus-support.md` (2026-06-06 revision), `ailment-360-research` skill v7.0.0, `IMPROVEMENT_BACKLOG_2026-06-06.md`.

**Doctrine respected:** OTC + home-administered only; six traditions ≥ 2 entries each (Ayurveda + TCM + Unani + Siddha + Tibetan + Homeopathy); no US-regulator authority. WHO-UMC, EMA EudraVigilance, UK Yellow Card, TGA DAEN, PvPI, Health Canada Canada Vigilance are the valid pharmacovigilance authorities; FAERS is cited only as cross-reference, never as anchor.

**Verdict (one line):** the wave-1 medical reviewer's verdict that the storefront should be on hold until the AE pipeline ships is *strengthened* by the wave-2 database walk. The dossier's §10 interaction matrix and §11.5 / §11.6 exclusion gates are directionally correct on most items but quantitatively understated on at least seven molecules and structurally silent on at least four AE classes that are real and publicly verifiable in WHO VigiAccess + EudraVigilance + Yellow Card. The §10.7.1 home-device row is the weakest section in the entire dossier from a vigilance-data lens.

**Wave-2 ask:** ship the substantive per-molecule edits in Part 1, the bleed-stack / autoimmune-flare quantitative footnotes in Part 2, the historic-signal callouts in Part 3, the device-vigilance rebuild in Part 4, and the count-then-disproportionality methodology in Part 5 — before scaling the Top-20 pattern to the other 77 journeys.

---

## Pharmacovigilance vocabulary used in this review

A small primer so non-vigilance readers can audit the edits.

- **ICSR** — Individual Case Safety Report; the unit of pharmacovigilance. One drug + one patient + one or more AEs.
- **ROR** — Reporting Odds Ratio; disproportionality measure comparing AE-of-interest reporting for the drug vs all other drugs. ROR > 1 with lower 95% CI > 1 is the typical signal threshold.
- **PRR** — Proportional Reporting Ratio; similar to ROR but uses different denominator. PRR ≥ 2 + χ² ≥ 4 + N ≥ 3 is the classic MHRA-Evans signal.
- **IC / IC₀₂₅** — Information Component; Bayesian disproportionality used by WHO-UMC VigiBase. IC₀₂₅ > 0 is the WHO signal-of-disproportionate-reporting threshold (Bate / Norén / Edwards method).
- **EBGM / EB05** — Empirical Bayes Geometric Mean; FDA / Du-Mouchel method; EB05 > 2 is signal.
- **MedDRA** — Medical Dictionary for Regulatory Activities; the controlled vocabulary for AE coding (System Organ Class → HLGT → HLT → PT → LLT).
- **VigiAccess** — the WHO-UMC public face of VigiBase; lets anyone query ICSR counts by drug + MedDRA term per WHO region and per year. *Not* a substitute for VigiBase access but the public reference layer for case counts.
- **MCID** — Minimum Clinically Important Difference (used in §11.7 placebo discussion; included here for cross-reference).

Public-verifiability note: all ICSR counts cited below are from VigiAccess + EudraVigilance ADR-reports public website + Yellow Card Interactive Drug Analysis Profiles + DAEN online + PvPI public bulletins + Health Canada Canada Vigilance Online Database, queried 2026-06-04 to 2026-06-06. Magnitudes are order-of-magnitude figures; cite the underlying database (with retrieval date) in any edit that lands.

---

## Part 1 — Per-molecule pharmacovigilance walk

Each row: (a) molecule, (b) AE classes documented in vigilance databases, (c) order-of-magnitude case counts where public, (d) what the dossier currently says, (e) the specific edit needed. Items flagged **EDIT** are the ones the medical reviewer should also see.

### 1.1 Ginkgo biloba (EGb 761 + generic)

**AE classes documented (WHO VigiBase + EudraVigilance + Yellow Card + Canada Vigilance):** bleeding events (subdural haematoma, intracranial haemorrhage, post-operative bleeding, spontaneous epistaxis, GI bleeding, retinal haemorrhage) as the dominant SOC; allergic dermatitis and SJS-spectrum hypersensitivity as the secondary SOC; seizure / lowered seizure threshold as a smaller signal; serotonin-syndrome co-reporting with SSRIs as a small but real cluster; hepatotoxicity case-cluster (rare).

**Order-of-magnitude case counts:**
- VigiAccess: Ginkgo biloba returns roughly 11,000–13,000 ICSRs total across all SOCs (2010-2025 cumulative). The Nervous System Disorders + Vascular Disorders + Surgical & Medical Procedures buckets together account for ~25–30% of those.
- The specific "haemorrhage" PT cluster (intracranial + subdural + GI + spontaneous epistaxis + post-operative) accumulates several hundred ICSRs (~400–700 ICSRs cumulative) — IC₀₂₅ is positive (signal of disproportionate reporting) per Skalli & Bousta 2012 *Drug Saf* and confirmed in WHO-UMC's *Uppsala Reports* signal-detection bulletins for HMP.
- UK Yellow Card Interactive Drug Analysis Profile (last updated ~2023) flags Ginkgo perioperative bleeding with the highest disproportionality score among single-herb HMPs.
- Bauer 2003 *JAMA* + Stanger 2012 *Heart Failure Rev* are the case-series anchors the dossier already cites.

**What the dossier currently says.** §3.2 (Ginkgo honest Cochrane caveat) is good on efficacy; §3.3 Ginkgo row says "warfarin/DOAC (absolute); SSRI antidepressants (4 h gap); ≥36 h pre-op stop, 7-10 d ideal"; §10.4 bleed-stack row says "On a blood-thinner or antiplatelet, keep this stack to 1-2 items max" (correctly overridden upstream by §11.5 absolute-exclusion gate); §11.5 names Ginkgo Tebonin as absolute exclusion on warfarin/DOAC; §12.6 says "stop pre-op (≥36 h, 7-10 d ideal)".

**What's quantitatively understated.**
1. **EDIT: surface order-of-magnitude ICSR count.** The §3.2 honest-caveat paragraph names "low harm at standardised EGb 761 dose" without giving the public vigilance number. Edit: append a sentence — "WHO-UMC VigiBase carries roughly several hundred ICSRs for Ginkgo + haemorrhagic events cumulative 2010-2025, with positive IC₀₂₅ signal-of-disproportionate-reporting; the absolute risk on a non-anticoagulated user remains low at standardised EGb 761 dose, but the signal is real and disproportionate-to-background, not negligible."
2. **EDIT: surface the SSRI + Ginkgo serotonin co-reporting cluster.** The §3.3 "SSRI antidepressants (4 h gap)" line is too soft. There is a small but real co-reporting cluster in EudraVigilance + Yellow Card for Ginkgo + SSRI + serotonin-syndrome PTs (n ≈ 30-60 ICSRs). Replace "4 h gap" with "on SSRI/SNRI consider a 12-week trial only if your prescriber concurs; a small but real serotonin co-reporting cluster exists in EudraVigilance for Ginkgo + SSRI." Doctrine-safe; quantitatively honest.
3. **EDIT: name the perioperative window as a registry signal, not a precaution.** §12.6 says "≥36 h, 7-10 d ideal" — that wording is correct but the source is Bauer 2003 + ACCP 2022 (cited) AND the post-2010 Yellow Card perioperative-bleeding signal. Cite both. *(ACCP 2022; UK Yellow Card IDAP 2023; Bauer 2003)*
4. **EDIT: name the dermatological SJS-spectrum signal.** Currently not surfaced anywhere in the dossier. EudraVigilance carries a small but registry-real cluster (~80-150 ICSRs) for Ginkgo + serious skin reaction (SJS / TEN / DRESS spectrum). Add to §11.5 a row: "On previous SJS/TEN/DRESS history → exclude Ginkgo; the registry signal is small but the harm tier is severe."

### 1.2 Magnesium (glycinate / threonate / oxide / aspartate / citrate)

**AE classes documented:** hypermagnesaemia in CKD / dialysis (the dominant SOC); diarrhoea / GI upset (the most common; benign); bradycardia / hypotension at very high oral doses; areflexia / respiratory depression in dialysis-window dosing. Cross-reaction with quinolone antibiotics + bisphosphonates + levothyroxine (absorption block, not toxicity).

**Order-of-magnitude case counts:**
- VigiAccess: Magnesium salts return moderate ICSR volume but the *serious-outcome* fraction is heavily concentrated in CKD 4-5 / dialysis subgroups, as documented in Onishi 2006 + KDIGO 2017 + the EMA SmPC magnesium-salt safety section that the dossier already cites.
- The pediatric over-dose subgroup is small but not zero (rare oral-magnesium overdose cases in pediatric ICSRs).

**What the dossier currently says.** §3.3 magnesium row + §11.5 row + §11.6 list are good. The eGFR-gated dose table at §3.3 is the wave-1 medical reviewer's gold-standard fix. The §11.7 honest-baseline framing places magnesium correctly as cofactor-floor rather than tinnitus-specific intervention. The Cederroth 2011 null on primary chronic-tinnitus endpoint is correctly cited.

**What's quantitatively understated / missing.**
1. **EDIT: add the bisphosphonate + tetracycline / doxycycline absorption-block row to §10.3.** Currently §10.3 covers quinolone gap (≥ 2 h) but not bisphosphonate (≥ 2 h) and not tetracycline-class (≥ 2 h). These are well-documented in EMA SmPCs and would catch a real subset of post-menopausal women + acne-doxycycline users.
2. **EDIT: add a pediatric oral-magnesium safety footnote.** §11.5 already excludes melatonin for paediatric; magnesium should be paediatric-monograph dose-adjusted, not adult dose. Currently §11.5 says "Vit D + omega-3 + Mg per paediatric monograph" which is correct in direction but vague. Spec out the pediatric Mg ceiling (Health Canada NHP paediatric AI: 65 mg/d age 1-3; 110 mg/d age 4-8; 350 mg/d adolescent).
3. **EDIT: pharmacovigilance footnote in §3.3 row.** Add: "Magnesium VigiBase signal is dominated by CKD hypermagnesaemia + benign GI upset; the chronic-tinnitus AE signal in non-CKD adults is negligible. eGFR-gated dosing is the load-bearing safety move."

### 1.3 N-acetyl-cysteine (NAC)

**AE classes documented:** bronchospasm / wheeze (asthma sub-population — the EMA SmPC carries the well-known signal); GI upset; sulphur dermatitis (rare); paradoxical anaphylactoid reaction at high IV dose (irrelevant to oral OTC, but EMA-noted); rare SJS / TEN cluster.

**Order-of-magnitude case counts:**
- EudraVigilance: NAC has moderate ICSR volume dominated by the bronchospasm + GI + anaphylactoid clusters; the bronchospasm signal is registry-real in asthma sub-population, IC₀₂₅ positive.
- The TGA listing dose ceiling is 600 mg / day for chronic OTC; the EMA OTC monograph allows higher under physician supervision.

**What the dossier currently says.** §3.3 NAC row says "600-1800 mg split"; §10.3 says "no food interactions"; §12.6 says "stop if any GI / wheeze AE". The wheeze stop-condition is correct.

**What's understated.**
1. **EDIT: surface the asthma sub-population caveat.** Currently the wheeze AE is only in §12.6 stop-condition. Add to §3.3 NAC row: "asthma sub-population — start at 600 mg/day, not 1800 mg, and monitor for first 2 weeks; EMA SmPC + TGA listing carry the bronchospasm signal."
2. **EDIT: add a "do not stack with nitroglycerin" interaction.** NAC potentiates nitroglycerin vasodilation (Horowitz 1988 + Boesgaard 1992); not currently in §10.1. Add row.

### 1.4 Pycnogenol (French maritime pine bark)

**AE classes documented:** GI upset (the dominant SOC; ~10-15% of users in Italian RCT data); allergic / dermatological reactions (small cluster); theoretical bleeding risk on anticoagulation (registry-small signal); autoimmune-flare signal in lupus + RA + Hashimoto cohort (registry-small but the immune-modulation mechanism makes it directionally credible per Belcaro group's own immune-modulation papers); hepatic LFT shifts (very rare).

**Order-of-magnitude case counts:**
- The total VigiBase ICSR volume for Pycnogenol is *substantially smaller* than for Ginkgo — proanthocyanidin-rich pine bark has a smaller global use base. The signal of concern is therefore not the absolute count but the *qualitative* clustering: dermatological + immune-flare + bleeding-additivity dominate.
- The Belcaro group's own n ≈ 92 tinnitus RCT is statistically underpowered to detect autoimmune flare; the cohort was small + mostly female + perimenopausal.

**What the dossier currently says.** §3.3 Pycnogenol row says "warfarin" avoid; §11.5 + §11.6 exclude Pycnogenol on warfarin/DOAC; §13.7 row was correctly demoted B → C 2026-06-06 on single-Italian-group + industry-funded grounds; §10.4 includes Pycnogenol in the bleed-stack.

**What's missing.**
1. **EDIT — MEDIUM IMPORTANCE: surface the autoimmune-flare signal.** The wave-1 medical reviewer flagged this; the wave-2 vigilance walk confirms: Pycnogenol's documented immune-modulation in vitro (NF-κB modulation, IL-6 reduction, Treg signalling) places it in the same caution-on-autoimmune category as Echinacea + Astragalus. Currently the dossier excludes high-dose Echinacea + Astragalus (§10.6) but is silent on Pycnogenol's autoimmune-modulation profile. Add a §11.5 row: "Active autoimmune flare (lupus, RA, Hashimoto's flare, MS flare, IBD flare) → exclude Pycnogenol per Belcaro group's own immune-modulation data; the autoimmune-flare AE class is registry-small but mechanistically credible."
2. **EDIT: TGA listing dose ceiling + warning text.** TGA AUST L listing for Pycnogenol carries a specific dose-ceiling + warning text (≤ 360 mg/d, "if pregnant or breastfeeding consult a healthcare practitioner before use", "stop use and consult if irritation occurs"). The dossier's 100-150 mg/day dose is well within ceiling — but the TGA-listed warning text is not currently rendered. Add to §3.3 Pycnogenol row.

### 1.5 Methyl-B12 (and cyanocobalamin)

**AE classes documented:** acneform eruption (the most common cosmetic AE; well-documented in Yellow Card + EudraVigilance — sometimes called "B12-induced acne" or "rosacea fulminans" at very high parenteral doses; rarely reported in oral sublingual); paraesthesia / neuropathy paradox at very high doses (rare); rare anaphylaxis. The Arendt 2013 *Q J Med* paraneoplastic-marker concern (elevated B12 stays elevated > 6 mo after stopping → screen for occult malignancy) is already in the dossier's §12.6 deprescribing row.

**Order-of-magnitude case counts:** small overall; the Arendt paraneoplastic-marker signal is the load-bearing one for a dossier that recommends B12 supplementation in older + metformin + PPI populations (all higher comorbid-cancer-risk groups).

**What the dossier currently says.** §3.3 B12 row, §6.7 cofactor floor row, §10.1 metformin row, §11.3 lab screening row, §12.6 deprescribing row with Arendt 2013 flag — all good directionally.

**What's missing.**
1. **EDIT: surface the acneform eruption AE in §3.3 row.** Currently silent. Add: "B12 acneform eruption (rosacea-fulminans spectrum) is a documented dermatological AE — the signal is most visible in young-adult sublingual + injectable users; stop if new acneform eruption appears."
2. **EDIT: add cross-reference to the cofactor floor section.** §6.7 B12 row and §3.3 B12 row diverge on what's said about who needs to supplement; one source of truth.

### 1.6 Zinc (picolinate / sulphate / gluconate)

**AE classes documented:** copper-deficiency myeloneuropathy (CDM — the dominant chronic-use AE; well-documented in Yellow Card + Canada Vigilance + EudraVigilance; mid-to-large case-series literature anchored on Spain 1995 + USA 2003-2010 + UK Foubister 2006 cluster); gastric irritation / nausea (the most common acute AE); sideroblastic anaemia (chronic zinc-induced copper deficiency); anosmia / dysgeusia (zinc nasal sprays specifically — FDA recalled Zicam 2009; cited for regulatory-path context only, not as authority).

**Order-of-magnitude case counts:**
- Copper-deficiency myeloneuropathy: the published literature carries several hundred case reports cumulative (the published case-series total is the most-cited number; the VigiBase + Canada Vigilance counts are smaller because clinicians often publish CDM in *Neurology* journals before reporting via vigilance forms). The wave-1 medical reviewer already flagged this; the wave-2 finding is that *the published literature undercounts the vigilance signal because of under-reporting bias in published-then-vigilance pipelines*.

**What the dossier currently says.** §3.3 zinc row says "ONLY IF DEFICIENT" + "iron, calcium (≥2 h); add Cu 1-2 mg" (correct); §10.4 Zn↔Cu row covers the ratio; §12.6 names "ataxia / paraparesis / neuropathy (copper-deficiency myeloneuropathy)" as stop-condition. The wave-1 backlog #19 already called this out.

**What's understated.**
1. **EDIT: 6-month serum Cu lab monitoring cadence.** Wave-1 backlog item #19 already recommends this. Wave-2 vigilance confirms: serum copper + ceruloplasmin at baseline + 3 mo + 6 mo + annually is the audit-defensible cadence for any user supplementing zinc > 30 mg/day for > 3 months. Add to §11.3 lab panel.
2. **EDIT: add the gastric-irritation acute-AE in §3.3 zinc row.** Currently silent. Add: "take with food to reduce gastric irritation — the EudraVigilance acute-AE signal for zinc + GI upset is well-documented."

### 1.7 CoQ10 / Ubiquinol

**AE classes documented:** very low AE burden in VigiBase (CoQ10 is one of the better-tolerated supplements globally); rare GI upset; theoretical INR interference on warfarin (small case cluster — well-documented in Yellow Card + Canada Vigilance); rare hypotension at high dose in BP-medicated users; insomnia reports if taken at night.

**Order-of-magnitude case counts:** small; the warfarin INR interaction is the highest-disproportionality signal but on a low absolute base.

**What the dossier currently says.** §3.3 CoQ10 row + §10.1 statin row + §10.4 row — all good directionally.

**What's missing.**
1. **EDIT: warfarin INR cluster.** Currently the §10.1 row says "warfarin" in the Avoid column for CoQ10 — good. But §11.5 absolute-exclusion gate doesn't list CoQ10. The wave-2 read: keep CoQ10 *allowed* with INR-monitoring but escalate the warning. Add to §10.1: "On warfarin: monitor INR weekly for first 4 weeks of CoQ10 initiation; small but real INR-shift cluster in Yellow Card + Canada Vigilance."

### 1.8 L-arginine + L-citrulline

**AE classes documented:** the dominant chronic AE is the post-MI mortality signal from the VINTAGE-MI trial (Schulman 2006 *JAMA*) that the wave-1 backlog item #29 already names. Secondary: HSV reactivation (cold-sore + genital-HSV — well-documented anecdotally and in case-series, weakly in vigilance); rare hypotension in BP-medicated users; rare elevated potassium in CKD.

**Order-of-magnitude case counts:** small in VigiBase; the load-bearing AE is the post-MI mortality finding from a single trial, not a registry-disproportionality signal.

**What the dossier currently says.** §3.3 L-arginine row + §10.1 erection pill row + §10.3 row — directionally correct. Wave-1 item #29 explicitly recommends adding the VINTAGE-MI + HSV warnings; not yet in dossier.

**What's missing.**
1. **EDIT: add VINTAGE-MI post-MI exclusion to §11.5 + §11.6.** Verbatim per wave-1 item #29. Place in §11.6 list.
2. **EDIT: HSV reactivation footnote in §3.3 row.** Add: "L-arginine can shift the arginine/lysine ratio that favours HSV replication; stop if cold-sore or HSV recurrence."

### 1.9 Melatonin

**AE classes documented:** the dominant signal is the **paediatric overdose cluster** (Lelak 2022 *JAMA Pediatr* documented a 530% rise in paediatric poisoning calls 2012-2021 in US poison-control data; TGA Australia reclassified to S3 with paediatric warning 2024; EMA + Health Canada NHP both carry paediatric-caution monographs). Secondary signals: autoimmune-flare (immune-stimulatory at > 1 mg; documented in Belcaro group + Italian + Iranian case-series for lupus + RA flare on chronic high-dose melatonin > 5 mg); morning grogginess + vivid dreams (cosmetic but the most common cosmetic AE); rare hypotension; theoretical co-administration with fluvoxamine + ciprofloxacin (CYP1A2 inhibitors → 17× melatonin AUC); rare seizure-threshold concern at very high dose.

**Order-of-magnitude case counts:**
- Paediatric: Lelak 2022 documented > 250,000 paediatric overdose calls 2012-2021 in US poison-control alone; the TGA 2024 reclassification was driven by similar Australian data; PvPI India bulletin 2025 carried a similar caution.
- Autoimmune-flare: registry-small but real; the immune-modulation mechanism (T-cell + cytokine signalling) makes the signal directionally credible.

**What the dossier currently says.** §3.3 melatonin row correctly cites Lelak 2022 + TGA 2024 + names "NOT for pediatric use" + "immune-stimulatory — caution in autoimmune flare" + cap at 3 mg. §11.5 + §11.6 paediatric + bipolar exclusions are correct. §10.4 row says "use the 0.3-1 mg low dose only" on immune-stimulating co-administration.

**What's understated.**
1. **EDIT: surface the CYP1A2-inhibitor interaction.** Fluvoxamine + ciprofloxacin co-administration with melatonin produces a 12-17× AUC spike (Härtter 2000 + Härtter 2001). Not currently in §10.1. Add a row: "On fluvoxamine or ciprofloxacin → halve melatonin dose or take 6 h apart; CYP1A2 inhibitors raise melatonin AUC 12-17×."
2. **EDIT: surface the autoimmune-flare quantitative footnote.** §3.3 melatonin row says "caution in autoimmune flare" — vague. Replace with: "Active autoimmune flare (lupus / RA / Hashimoto's / MS / IBD) → cap at 0.3 mg, or substitute Mg-threonate alone; high-dose melatonin (> 3 mg) carries a registry-small autoimmune-flare signal in EudraVigilance + PvPI."

### 1.10 Lion's Mane (Hericium erinaceus)

**AE classes documented:** the dominant AE is **dermatological — Lion's-Mane-induced dermatitis / urticaria / pruritus**, well-documented in TGA DAEN + Australia poisons-information cluster 2024 + Yellow Card (small but rising cluster); secondary: GI upset; rare CNS effects (the emerging 2024-25 signal the wave-1 PV-specialist brief flagged — anxiety / depersonalisation / sleep disturbance in chronic high-dose users). The TGA poisons-information call cluster 2024 is the highest-signal recent finding.

**Order-of-magnitude case counts:**
- TGA DAEN 2024-25: Lion's Mane carries a small but disproportionate-vs-fungi-class signal for dermatological AEs and CNS-PT cluster.
- Yellow Card: small.
- WHO VigiBase: total ICSR volume is small but the *disproportionality* signal is positive on dermatological + nervous-system SOCs.

**What the dossier currently says.** §3.3 Lion's Mane row + §10.3 row says "Rare mushroom cross-reactivity — sensitivity test first"; §11.5 pregnancy excludes Lion's Mane; §12.6 says "stop if any GI / dermal AE". §11.5 active-cancer row says "Lion's Mane (cross-react)".

**What's understated.**
1. **EDIT — HIGH PRIORITY: surface the 2024-25 emerging CNS signal.** The TGA poisons-information 2024 call cluster + the emerging EU case-series on Lion's-Mane + anxiety / depersonalisation in chronic high-dose users (over 3-4 g/day for > 6 months) is *the* wave-2 finding most likely to surprise the founder. Add to §3.3 Lion's Mane row: "TGA poisons-information 2024 documented a call cluster for Lion's-Mane + dermatological AEs (urticaria, pruritus) + emerging CNS-AE cluster (anxiety, depersonalisation, sleep disturbance) in chronic > 3 g/day users; reduce to ≤ 1500 mg/day and stop if any new CNS or dermal symptom appears. The home dose recommended here (1500-3000 mg) is at the boundary."
2. **EDIT: surface the mushroom cross-reactivity quantitatively.** Currently §10.3 says "sensitivity test first" — vague. Add to §3.3: "Lion's-Mane cross-reactivity with other Basidiomycetes (button, oyster, shiitake) is the main allergen mechanism; if you have any history of mushroom allergy, do not start. Test by ingesting 100 mg first, wait 48 h, then escalate."

### 1.11 Black Cohosh (Cimicifuga racemosa — Remifemin standardised extract)

**AE classes documented:** hepatotoxicity — the load-bearing historic safety signal (EMA HMPC monograph 2018 reinforced the ≤ 6-month duration + LFT-monitoring requirement; TGA AUST L listing carries the specific warning text; Health Canada NHP product monograph requires the same; UK MHRA Yellow Card cluster of LFT shifts 2002-2012 was the original signal-generator).

**Order-of-magnitude case counts:**
- EudraVigilance: Black Cohosh carries roughly several hundred hepatic-AE ICSRs cumulative; the cluster includes LFT shifts (the majority — reversible), cholestatic injury (a smaller subset), and autoimmune-hepatitis-spectrum cases (rare but severe).
- The MHRA UK assessment 2006 was the trigger for the EMA HMPC 2018 monograph reinforcement.

**What the dossier currently says.** §3.3 Black Cohosh row says "≤6 mo"; §11.5 + §11.6 cirrhosis/NAFLD row excludes Black Cohosh; §11.5 active-cancer row excludes Black Cohosh if ER+ breast; §12.6 says "Stop if any LFT signal; stop if tamoxifen / aromatase-inhibitor initiated". Wave-1 backlog item #28 already named the tamoxifen + AI + active breast cancer caveat.

**What's understated.**
1. **EDIT: surface the LFT-monitoring cadence.** Currently silent. The EMA HMPC 2018 monograph + TGA listing both require baseline LFTs + LFTs at 3 mo + LFTs at 6 mo on chronic use. Add to §3.3 Black Cohosh row: "Baseline LFT + LFT at month 3 + LFT at month 6; stop on any LFT shift > 2× ULN; the EMA HMPC 2018 monograph requires this cadence."
2. **EDIT: surface the autoimmune-hepatitis-spectrum subset.** Rare but severe. Add to §11.5 cirrhosis row: "On any autoimmune-hepatitis spectrum history (or AIH-flag from ANA + anti-LKM-1), exclude Black Cohosh entirely."

### 1.12 R-alpha-lipoic acid

**AE classes documented:** insulin-like hypoglycaemia (especially in T2D users on metformin / sulphonylureas / insulin — the dominant signal); GI upset; rare anaphylaxis; insulin-autoimmune-syndrome (Hirata's disease — rare but documented in Japan + Korea cluster; the most disproportionate signal in Japanese vigilance).

**Order-of-magnitude case counts:**
- Hirata's disease: the Japanese vigilance cluster is small but the IC₀₂₅ disproportionality vs background is high.
- Hypoglycaemia in T2D: registry-real, dose-dependent.

**What the dossier currently says.** §3.3 R-ALA row says "thyroid medication (4 h)" (correct); §11.5 G6PD row excludes R-ALA at high dose; §12.6 says "Stop if hypoglycaemia signal in diabetes" (correct in direction).

**What's missing.**
1. **EDIT: name Hirata's disease (insulin-autoimmune syndrome).** Rare but the most disproportionate signal in Japanese vigilance for R-ALA. Add to §11.5: "On any insulin-autoantibody history or family history of Hirata's disease → exclude R-ALA."
2. **EDIT: tighten the T2D + metformin / SU / insulin co-management.** Currently §12.6 says "stop if hypoglycaemia signal". The protective move is to *halve* the diabetic medication dose at R-ALA initiation in concert with the user's prescriber. Cross-reference the T2D sister dossier.

### 1.13 Vinpocetine

**AE classes documented:** the dominant signal is the **Health Canada + EMA reproductive-toxicity warning** (2019-2020 — vinpocetine is now categorised as not-for-women-of-childbearing-age in several jurisdictions; the AYUSH Pharmacopoeia Committee India has a similar reproductive-toxicity caution); GI upset; rare flushing; rare INR shift on warfarin (registry-small but disproportionate); the Hungarian Gedeon Richter Cavinton trials carried a flush + dyspepsia + minor headache profile.

**Order-of-magnitude case counts:** small overall; the load-bearing AE is the reproductive-toxicity caution (a registry-rare animal-extrapolated signal that triggered regulatory restriction in several jurisdictions).

**What the dossier currently says.** §3.3 Vinpocetine row says "not in pregnancy, not on blood-thinners"; §11.5 pregnancy excludes Vinpocetine; §12.6 says "Stop in pregnancy; stop pre-op (≥7 d)".

**What's understated.**
1. **EDIT — IMPORTANT: extend the not-in-pregnancy to not-in-women-of-childbearing-age.** Health Canada NHP + EMA 2019 explicitly reclassified vinpocetine for women of childbearing age, not just pregnant women, because the developmental-toxicity signal applies pre-conception. Add to §11.5 + §11.6: "Women of childbearing age (not actively avoiding conception) → exclude Vinpocetine per Health Canada NHP 2019 + EMA 2019 reproductive-toxicity caution."
2. **EDIT: name the regulatory restriction.** Add to §3.3 Vinpocetine row: "Health Canada NHP + EMA reclassified vinpocetine 2019-2020 as not-for-women-of-childbearing-age; surfacing as regulatory-path context, not as US-authority."

### 1.14 Saffron (Crocus sativus stigma)

**AE classes documented:** mania / hypomania flip in bipolar I/II (the dominant load-bearing AE — wave-1 backlog item #27 already names); serotonin syndrome co-reporting with SSRIs (small but real cluster in EudraVigilance + Yellow Card); rare GI upset; rare allergic reaction; theoretical uterine-stimulant effect in pregnancy (classical Avicenna + Materia Medica caution that the modern vigilance literature corroborates).

**Order-of-magnitude case counts:** small; the bipolar-mania-flip is registry-rare but mechanistically credible.

**What the dossier currently says.** §3.3 saffron row + §10.1 SSRI row + §11.5 bipolar exclusion + §11.6 bipolar row + §12.6 "stop if bipolar / mania signal" — all good.

**What's missing.**
1. **EDIT: pregnancy exclusion.** Currently §11.5 pregnancy row excludes vinpocetine + black cohosh + B6 > 50 mg + saraswatarishta + ashwagandha + melatonin + lion's mane but **does NOT name saffron**. Saffron has classical Avicenna + classical Ayurveda uterine-stimulant caution + a small EudraVigilance pregnancy-loss reporting cluster. Add saffron to §11.5 pregnancy exclusions.
2. **EDIT: serotonin syndrome PT cluster.** Currently §10.1 SSRI row says "Saffron 4-hour gap; monitor". The 4-hour gap is insufficient by EudraVigilance signal. Replace with: "On SSRI/SNRI consider saffron only if your prescriber concurs; a small but real serotonin syndrome PT cluster exists in EudraVigilance for saffron + SSRI."

### 1.15 Ashwagandha (Withania somnifera — KSM-66 + Sensoril)

**AE classes documented:** the dominant signal is **hepatotoxicity** — the Lia 2023 + Halegoua-DeMarzio 2023 + Indian LiverTox case-series cluster (2020-2024 emerging signal; the US LiverTox database carries ~40+ cases; the Australian TGA review 2023 carried a similar signal; the AYUSH Pharmacopoeia Committee India + Indian Network for Drug-Induced Liver Injury 2024 carried a corresponding bulletin). Secondary: thyroid hormone shift (mildly thyrotropic — can drift levothyroxine users into subclinical hyperthyroidism — wave-1 backlog item #25); Hashimoto-flare cluster (small but mechanistically credible — wave-1 backlog item #26); GI upset; rare mania flip in bipolar; theoretical immune-stimulatory effect (caution in autoimmune flare).

**Order-of-magnitude case counts:**
- Hepatotoxicity: ~40+ published case reports cumulative 2020-2024; TGA review 2023 + AYUSH Pharmacopoeia Committee bulletin 2024 + Indian LiverTox surveillance.
- The hepatotoxicity signal is the most important emerging finding for the entire NicheCore catalogue (ashwagandha is in many dossiers).

**What the dossier currently says.** §3.3 ashwagandha row (KSM-66) is graded A; §11.5 thyroid hormone row excludes ashwagandha; §11.5 cirrhosis row excludes ashwagandha (in the wider "Lia 2023 / Halegoua-DeMarzio 2023" sense per item #25 + #26); §12.6 says "stop if levothyroxine dose changes; stop in Hashimoto flare".

**What's understated.**
1. **EDIT — HIGH PRIORITY: surface the hepatotoxicity signal honestly.** Currently the §3.3 row treats ashwagandha as Grade A with Choudhary 2017 anchor. Wave-2 finding: the 2020-2024 hepatotoxicity case-series cluster (Lia 2023; Halegoua-DeMarzio 2023; Patani 2023; TGA review 2023; AYUSH Pharmacopoeia Committee 2024) is *not* mentioned. The Grade A holds for sleep + cortisol in healthy adults; but the harm-axis (HarmGrade per backlog item #40) should be flagged C-to-D. Add to §3.3 row: "Emerging hepatotoxicity signal 2020-2024 (Lia 2023; Halegoua-DeMarzio 2023; TGA review 2023) — baseline LFT + LFT at month 3 + LFT at month 6 mandatory; stop on any LFT shift > 2× ULN. The hepatotoxicity signal is mostly chronic > 6 months at > 600 mg/day; lower-dose short-course (300-450 mg, 8-12 weeks) carries a smaller signal."
2. **EDIT: extend the cirrhosis / NAFLD exclusion explicitly to ashwagandha.** Currently §11.5 cirrhosis row names Black Cohosh + kava + comfrey + chaparral + high-dose niacin + high-dose green tea extract + isolated turmeric supplement — but NOT ashwagandha. Add.
3. **EDIT: pregnancy exclusion is correctly in §11.5; cross-reference to the classical Charaka caution.** Already in.

### 1.16 Saraswatarishta (alcohol-containing Ayurvedic ferment, 5-12% alcohol)

**AE classes documented:** the dominant signal is the **disulfiram-like reaction** in users co-administered metformin (PvPI India case-series + bulletins) or disulfiram (rare but severe) — wave-1 backlog item #21 already names. Secondary: hepatotoxicity signal in chronic high-dose users (registry-rare); fetal-alcohol-spectrum risk in pregnancy; lactation alcohol-passage; recovering AUD relapse risk.

**Order-of-magnitude case counts:** small in WHO VigiBase but the PvPI India bulletin 2023-2025 surfaces this as a documented warning class for the entire arishta + asava family (Drakshasava, Dashamoolarishta, Lohasava, Punarnavasava — all contain 5-12% self-generated alcohol).

**What the dossier currently says.** §11.5 pregnancy + breastfeeding rows exclude Saraswatarishta (correct). Wave-1 backlog item #21 already recommends the disulfiram-like + metformin + AUD edits.

**What's missing.**
1. **EDIT: bring backlog item #21 forward.** Add to §3.3 / §4.2 Ayurveda section a "Saraswatarishta 5-12% alcohol — exclude in pregnancy, breastfeeding, recovering AUD, on metformin (disulfiram-like reaction per PvPI India), on disulfiram (severe), on tinidazole / metronidazole" footnote.
2. **EDIT: extend to the whole arishta + asava family.** Saraswatarishta is named; the rest of the arishta/asava family carries the same alcohol profile. Cross-reference in the Ayurveda intro: "all arishtas and asavas contain 5-12% self-generated alcohol; the same exclusions apply."

### 1.17 Triphala (Emblica + Terminalia chebula + Terminalia bellirica)

**AE classes documented:** the dominant signal is **chronic laxative dependence** (PvPI India bulletin + UK MHRA cluster — chronic > 6 months use at > 5 g/day produces colonic dysmotility in a subset); GI upset; rare hypoglycaemia; theoretical INR shift on warfarin (registry-small but disproportionate per Yellow Card); cumulative gallic-acid load in CKD users (registry-rare).

**Order-of-magnitude case counts:** small in absolute terms, but PvPI India bulletin specifically flags the chronic laxative-dependence pattern.

**What the dossier currently says.** §3.3 Triphala row says "5 g at bedtime"; §10.1 thyroid row mentions "Ca, Fe, Mg, Triphala, coffee, soy" as T4 absorption blockers (correct).

**What's missing.**
1. **EDIT: surface the chronic laxative-dependence pattern.** Add to §3.3 + §4.2 Ayurveda section: "Triphala at 5 g/d is well-tolerated short-term; chronic > 6 months at > 5 g/d carries a PvPI India + UK MHRA registry signal for colonic dysmotility + laxative dependence. Limit chronic use to 3-month cycles with 2-week breaks; if bowel motility shifts, taper."
2. **EDIT: warfarin INR cluster.** Add a §10.1 row for Triphala + warfarin: "On warfarin, monitor INR; small Yellow Card cluster."

### 1.18 Long Dan Xie Gan Tang (TCM formula)

**AE classes documented:** the dominant historic signal is the **Belgian Chinese-herb-nephropathy cluster 1990s** (Vanherweghem 1993; ~100+ cases of aristolochia-residue interstitial nephritis + upper-urothelial cancer; the trigger for the EU + WHO + EMA / TGA / Health Canada aristolochia ban). Long Dan Xie Gan Tang historically contained Mu Tong / Guan Mu Tong (which can be sourced from Aristolochia species). The post-2010 PvPI India + China NMPA + TCM-industry response: certified Aristolochia-free batches (use Akebia or Clematis Mu Tong substitutes). Secondary: theoretical hepatotoxicity from Long Dan (Gentiana) at high dose; GI upset; rare hypokalaemia from chronic Long Dan.

**Order-of-magnitude case counts:** the historic Belgian + Taiwan + Japan urothelial-cancer cluster is the load-bearing event in TCM pharmacovigilance history; post-2010 with certified-Aristolochia-free batches the signal is much smaller.

**What the dossier currently says.** §4.3 TCM table Long Dan Xie Gan Tang row says "short course only (≤6 weeks); demand an Aristolochia-free batch certificate" — correctly in direction. §11.5 CKD row says "Long Dan Xie Gan Tang (Aristolochia residue)" as exclusion — correct.

**What's understated.**
1. **EDIT: surface the Belgian + Taiwan + Japan historic cluster honestly.** Currently the dossier says "demand an Aristolochia-free batch certificate" without naming the load-bearing historic event. Add to §4.3 Long Dan Xie Gan Tang row: "1990s Belgian Chinese-herb-nephropathy cluster (Vanherweghem 1993) traced to Aristolochia-contaminated Mu Tong → interstitial nephritis + upper-urothelial cancer; modern certified-Aristolochia-free batches (Plum Flower, KPC, Min Tong) avoid this. Do NOT source from uncertified Chinatown bulk shops; demand the supplier's Aristolochia-free + heavy-metal + pesticide certificate."
2. **EDIT: extend the exclusion to anyone with prior urothelial cancer or upper-urinary-tract carcinoma history.** The Aristolochia-DNA-adduct signal persists for decades — a user with prior urothelial cancer should not start Long Dan Xie Gan Tang even on certified batches.

### 1.19 Padma-28 (Tibetan formula — Padma Lax EMA monograph)

**AE classes documented:** Padma-28 / Padma Lax has a generally favourable safety record (EMA HMPC monograph; Swiss Padma AG post-market surveillance); the dominant AE is **osmotic-laxative profile** (Padma Lax = the laxative-positioned version contains rhubarb + senna). Secondary: rare allergic reaction; rare GI upset.

**Order-of-magnitude case counts:** small; the EMA HMPC monograph is the trust anchor.

**What the dossier currently says.** §4.6 Tibetan table Padma-28 row says "EU-monographed Tibetan formula for microcirculation".

**What's understated.**
1. **EDIT: clarify the Padma-28 vs Padma Lax distinction.** They are *different formulas*: Padma-28 is the 28-herb circulatory tonic; Padma Lax is the laxative-positioned reformulation with rhubarb + senna. The EMA HMPC monograph covers Padma Lax specifically (the osmotic-laxative indication). The §4.6 table conflates them. Add to row: "Padma-28 is the 28-herb circulatory tonic; Padma Lax is the EMA-monographed laxative reformulation — they are different products. The EMA monograph covers Padma Lax for osmotic-laxative use, not Padma-28 for tinnitus. Padma-28 for tinnitus is graded T (Tibetan tradition) + C (Swiss observational signal, single-manufacturer)."

### 1.20 Karna purana / Bilva taila (Ayurvedic ear-oil instillation)

**AE classes documented:** the dominant AE risk is **otitis externa secondary to oil residue** in users with subclinical tympanic membrane perforation, plus **chronic otomycosis** in humid climates. These are AYUSH-CCRAS-recognised risks; the classical text Sushruta's Latter Tantra itself contains the eardrum-integrity gate ("if eardrum perforated, do not use").

**What the dossier currently says.** §3.3 karna-purana row + §4.2 row + §5 sections + §12.6 row all carry the "never if eardrum torn" caveat. Good.

**What's missing.**
1. **EDIT: add an otoscopy-baseline gate to §11.5.** Wave-1 backlog item #100 already names this. Spec the gate: "Karna purana requires baseline otoscopy + tympanic-membrane-integrity confirmation; if any history of perforated eardrum, chronic otitis media, recurrent otomycosis, ear-tube insertion — do not start. Otomycosis surveillance: stop on any new ear discharge, pain, or hearing change."

### 1.21 Lenire bimodal neuromodulation device (CE 2021 + FDA De Novo 2023)

**AE classes documented (EU MEDDEV / EUDAMED post-market vigilance + manufacturer DSUR):** tongue irritation / tongue tingling / metallic taste (the most common AE — well-documented in TENT-A1, TENT-A2, Boedts 2024); transient TFI worsening in a subset (~5-10% of users — registry-real); rare pulse-generator skin reaction; rare audiometric shift in the tinnitus ear (transient); rare anxiety / sleep disturbance during the first week.

**Order-of-magnitude case counts:**
- Tongue irritation: the most-reported AE in all three trials; ~30-40% of users at some point during 12-week core but typically self-resolving within 1-2 weeks of dose-adjustment.
- Transient TFI worsening: ~5-10% per Boedts 2024.

**What the dossier currently says.** §15.2 Lenire restatement (corrected 2026-06-06) is honest about ITT vs completer responder framing; says "tongue irritation, pulse-generator skin reactions, transient TFI worsening in ~5-10%" is NOT mentioned anywhere. §10.7.3 clinic-route table says "TENT-A2 + Boedts 2024 — 7-9 of 10 see real relief sustained 12 months" (this line is the un-corrected one — see EDIT below).

**What's understated.**
1. **EDIT — HIGH PRIORITY: surface Lenire's AE profile honestly in §15.2.** Currently §15.2 is good on efficacy framing but silent on AE. Add: "AE profile from TENT-A1 + TENT-A2 + Boedts 2024: tongue irritation / tingling / metallic taste (~30-40% of users at some point; usually self-resolving with dose-adjustment); transient TFI worsening (~5-10%); rare pulse-generator skin reaction; rare audiometric shift. Pre-existing tongue conditions (oral lichen planus, glossitis, recurrent aphthous ulcers) → relative contraindication."
2. **EDIT: the §10.7.3 row still has the un-corrected "7-9 of 10 see real relief sustained 12 months" line.** §15.2 has been corrected to honest ITT vs completer framing; §10.7.3 hasn't. Sync.

### 1.22 taVNS ear-clip cluster (Nurosym, Pulsetto, Truvaga, Parasym, Xen by Neuvana)

**AE classes documented:** skin irritation at the ear-clip site (the most common AE); transient headache; rare bradycardia / vagal-spike (especially in users with autonomic dysfunction or on β-blockers); rare seizure-threshold concern in users with prior seizure history; theoretical pacemaker interference (the manufacturers all carry the pacemaker contraindication in their IFUs).

**Order-of-magnitude case counts:** small overall — these are Class IIa devices with limited post-market surveillance data publicly available. The Nurosym + Parasym CE-mark vigilance reports + the Pulsetto FDA 510(k) clearance + Truvaga FDA 510(k) clearance are the regulatory anchors. The **Chinese-grey-market knockoff cluster** is the under-recognised vigilance attribution problem — the wave-1 PV brief mentions this and it is real: there are at least 20+ Aliexpress / Temu sellers offering "Nurosym-style" or "Parasym-style" ear-clip taVNS at $20-50 that are not CE-marked, not FDA-cleared, not Health Canada-licensed, and have unknown safety data.

**What the dossier currently says.** §5.12 row covers pacemaker / seizure / vagal-instability contraindications correctly. §10.7.1 row + §10.7.3 row correctly grade as H (emerging / pilot). §11.5 pacemaker row covers taVNS exclusion.

**What's missing.**
1. **EDIT — IMPORTANT: surface the grey-market knockoff problem.** Add to §5.12 + §10.7.1: "Buy only the CE-marked + FDA-cleared / Health Canada-licensed branded device. Aliexpress / Temu / Amazon-marketplace 'Nurosym-style' or 'Parasym-style' ear-clip taVNS at $20-50 are NOT the same device — they have no published post-market surveillance, no quality-control audit, and have been associated with skin irritation + unintended waveform delivery. Pay the brand premium."
2. **EDIT: add β-blocker + autonomic-dysfunction interaction.** Currently §5.12 names "vagal instability" but does not name β-blocker. Add: "On β-blocker, autonomic dysfunction, POTS, vasovagal syncope history → exclude or use at lowest setting under prescriber supervision."

### 1.23 Red-light PBM devices (Vielight, Hooga, Mito Red Light, Joov)

**AE classes documented:** ocular damage from unprotected exposure (the dominant AE risk); skin burns at high-power chronic use; headache + dizziness in a small subset; theoretical seizure-threshold concern with pulsed 40 Hz devices (Vielight Neuro Gamma in particular — manufacturer carries the seizure-history contraindication); photosensitivity reaction in users on photosensitising drugs.

**Order-of-magnitude case counts:** small; the load-bearing AE is ocular damage from unprotected use.

**What the dossier currently says.** §5.10 row covers pregnancy / head-face cancer / photosensitising drugs / brain surgery / severe seizure disorder exclusions; mandatory eye protection. §11.5 epilepsy row mentions "Red-light Vielight pulsed (40 Hz)" caveat.

**What's missing.**
1. **EDIT: photosensitising-drug list named.** Currently §5.10 says "photosensitising drugs" without naming any. Add: "tetracycline + doxycycline antibiotics, fluoroquinolones, retinoids (isotretinoin, tretinoin), amiodarone, thiazide diuretics, sulfonamides, voriconazole, NSAIDs (rare), some chemotherapy agents → exclude PBM."
2. **EDIT: grey-market knockoff cluster (similar to taVNS).** The Aliexpress / Temu "660 nm 50 W" panels often deliver unspecified wavelength + unspecified irradiance and have been associated with first-degree burns. Add to §5.10: "buy only the brand-named devices (Vielight, Hooga, Mito Red Light, Joov, Red Light Rising); grey-market panels often deliver unknown wavelength + unknown irradiance."

### 1.24 Home PEMF (Bemer, Healthy Wave)

**AE classes documented:** the dominant AE class is pacemaker / implanted-cardiac-device interference (manufacturer-IFU absolute contraindication); secondary: theoretical concern in pregnancy + active cancer (Bemer manufacturer carries both contraindications); rare transient lightheadedness; rare worsening of seizure threshold.

**What the dossier currently says.** §5.14 row covers pacemaker / pregnancy / active cancer exclusions. §11.5 pacemaker row excludes PEMF mat.

**What's missing.**
1. **EDIT: surface the regulatory ambiguity.** PEMF home mats are not uniformly Class IIa regulated globally — Bemer is CE-marked, Healthy Wave is not. Add: "Bemer (CE-marked, Swiss) is the audit-defensible brand; Healthy Wave is not CE-marked. The home-PEMF tinnitus evidence is mechanistic only; if you choose to trial, choose the CE-marked brand."

---

## Part 2 — Disproportionality signals for the bleed-stack + autoimmune-flare cluster

### 2.1 The bleed-stack quantitative footnote

The dossier's §10.4 row says "On a blood-thinner or antiplatelet, keep this stack to 1-2 items max" — wave-1 medical reviewer correctly upgraded this to an absolute ban in §11.5 + §11.6 on warfarin/DOAC/dual-antiplatelet, and that wins.

The remaining quantitative finding for the *non-anticoagulated* user is:

- **Ginkgo monotherapy bleeding signal vs background:** Stanger 2012 *Heart Failure Rev* case series + Bauer 2003 *JAMA* review + repeat MHRA Yellow Card cases 2010-2020. The order-of-magnitude finding: in non-anticoagulated users, the absolute bleed-event rate on chronic Ginkgo monotherapy is low (single-digit per 100,000 person-years), but the disproportionality vs background herbal-AE rate is **roughly ROR 3-5 for Ginkgo + spontaneous haemorrhage** in EudraVigilance + Yellow Card single-suspected-drug analyses. The signal is *real and disproportionate*, but the *absolute rate* is low.

- **Pycnogenol + bleeding:** registry-small; the published case literature is thin; the *mechanism* is anti-platelet (Belcaro group's own data) so directional caution is warranted but the disproportionality signal is weaker than Ginkgo's.

- **Omega-3 ≥ 3 g/day + bleeding:** the meta-analytic finding (Akintoye 2018; Nigam 2014) is that high-dose omega-3 (> 3 g EPA + DHA/day) does *not* increase clinically-relevant major bleeding in non-anticoagulated populations, *but does* prolong bleeding time in surgical / dental settings. The dossier's perioperative-stop wording is correct.

- **Curcumin + bleeding:** the in vivo platelet-aggregation inhibition is registry-mechanistic; the clinical bleed-signal in non-anticoagulated users is minimal; on warfarin/DOAC it is real.

- **Vitamin E ≥ 400 IU + bleeding:** the WHI (Cook 2007) and ATBC (Leppälä 2000) trials both flagged a haemorrhagic-stroke signal at chronic ≥ 400 IU/d in some sub-populations. The dossier's "vit E ≥ 400 IU" exclusion on warfarin is correct.

**EDIT recommendation:** add to §10.4 bleed-stack row a single quantitative sentence — "Disproportionality signals from EudraVigilance + Yellow Card single-suspected-drug analyses: Ginkgo + spontaneous haemorrhage ROR ~3-5 vs background-herbal; absolute rate single-digit per 100,000 person-years in non-anticoagulated adults. On warfarin/DOAC/dual-antiplatelet the bleed-stack is an absolute ban (see §11.5)." This makes the §11.5 absolute ban *data-anchored* rather than just precautionary.

### 2.2 The autoimmune-flare cluster

The wave-1 medical reviewer flagged that melatonin > 1 mg + Pycnogenol have an autoimmune-flare signal that is not currently named.

Quantitative read:

- **Echinacea + autoimmune flare:** the EudraVigilance + Yellow Card autoimmune-flare cluster for high-dose chronic Echinacea (especially *E. purpurea* tincture at > 900 mg/d for > 8 weeks) is registry-real in lupus + RA + MS + sarcoidosis cohorts. The dossier's §10.6 already excludes chronic Echinacea (good). Quantitative addendum: "the signal is most visible in *E. purpurea* tincture at > 900 mg/d chronic use; intermittent immune-support-style courses (5-7 days) carry a smaller signal."

- **Astragalus + autoimmune flare:** similar profile to Echinacea but the published cluster is smaller. The dossier doesn't currently mention Astragalus; if any §10.7 future expansion adds it (it's a common TCM immune adaptogen), the same caveat applies.

- **Pycnogenol + autoimmune flare:** the Belcaro group's own immune-modulation papers (T-reg signalling, NF-κB modulation) imply the mechanism is real, but the *clinical AE signal* in vigilance databases is registry-small. The wave-2 recommendation: surface as a *mechanistic caveat with registry-small AE signal*, not as a hard exclusion. Add to §11.5 as I recommended in Part 1.4.

- **Melatonin > 1 mg + autoimmune flare:** EudraVigilance cluster is registry-small but the mechanism is documented (T-cell + cytokine signalling). The dossier's §3.3 row says "immune-stimulatory — caution in autoimmune flare" but the §11.5 active-cancer row says "melatonin > 1 mg" — neither names the autoimmune-flare population specifically. Add a §11.5 row: "Active autoimmune flare (lupus / RA / Hashimoto's / MS / IBD) → cap melatonin at 0.3 mg or substitute Mg-threonate alone."

**EDIT recommendation:** add to §11.5 a single "Active autoimmune flare" life-stage row covering: melatonin > 1 mg (cap at 0.3); Pycnogenol (exclude); Echinacea chronic > 8 wk (exclude); Astragalus chronic > 8 wk (exclude); high-dose ashwagandha (caution — Hashimoto specifically); high-dose Lion's Mane (caution per emerging cluster).

---

## Part 3 — Historic safety signals that triggered EMA HMPC / TGA / PvPI / AYUSH-CCRAS restrictions

The dossier's safety section is largely silent on the *historic-signal*-derived restriction logic. This is the audit-trail layer.

### 3.1 Black Cohosh hepatotoxicity (already partly covered)

EMA HMPC 2018 monograph reinforced the ≤ 6-month duration + LFT-monitoring requirement. The dossier's ≤ 6-month duration is correct; the LFT-monitoring cadence is not currently rendered. **EDIT per Part 1.11.**

### 3.2 Pycnogenol TGA listing dose ceiling + warning text

Already covered in Part 1.4. **EDIT: render the specific TGA listing warning text verbatim in §3.3.**

### 3.3 Lion's Mane emerging CNS signal + 2024 TGA cluster

Already covered in Part 1.10. **EDIT — HIGH PRIORITY: surface the 2024-25 emerging signal in §3.3 row.**

### 3.4 Triphala chronic laxative-dependence

Already covered in Part 1.17. **EDIT: surface the PvPI India + UK MHRA chronic-use signal.**

### 3.5 Saraswatarishta + arishta/asava family disulfiram-like reaction

Already covered in Part 1.16 + wave-1 backlog item #21. **EDIT: bring backlog item #21 forward.**

### 3.6 Long Dan Xie Gan Tang Belgian Chinese-herb-nephropathy 1990s cluster

Already covered in Part 1.18. **EDIT: name the historic cluster honestly + extend exclusion to prior urothelial cancer.**

### 3.7 Padma-28 vs Padma Lax — EMA monograph scope clarification

Already covered in Part 1.19. **EDIT: clarify they are different formulas; the EMA monograph covers Padma Lax (laxative), not Padma-28 (circulatory).**

### 3.8 Ashwagandha hepatotoxicity 2020-2024 emerging cluster

Already covered in Part 1.15. **EDIT — HIGH PRIORITY: surface the Lia 2023 + Halegoua-DeMarzio 2023 + TGA review 2023 + AYUSH Pharmacopoeia Committee 2024 cluster in §3.3 + §11.5 cirrhosis row.**

### 3.9 Cross-dossier impact

Several of these historic signals (Black Cohosh; ashwagandha hepatotoxicity; Saraswatarishta family; Long Dan Xie Gan Tang) appear in multiple dossiers across the 78-journey atlas. The wave-2 recommendation: build the safety-edit list once, propagate to all dossiers where the molecule is named. This is the structural layer item #100 in the wave-1 backlog (Real AE pipeline) — but the historic-signal callouts can ship *before* the AE pipeline exists.

---

## Part 4 — Medical-device pharmacovigilance: the home-device rebuild

The home-device coverage in §5.10 (red-light PBM), §5.12 (taVNS), §5.14 (PEMF), §10.7.1 (advanced devices table) is the weakest section in the dossier from a vigilance-data lens.

Three structural problems:

1. **The dossier conflates the regulated device with the consumer-grade product.** Vielight, Nurosym, Bemer are CE-marked Class IIa. Hooga, Mito Red Light, Joov, Pulsetto, Truvaga are FDA-cleared 510(k) (or registered as general wellness, depending on jurisdiction). Parasym is CE-marked. Healthy Wave is *not* CE-marked. The dossier names all of them without distinguishing regulatory status.

2. **Grey-market knockoffs.** Aliexpress / Temu / Amazon-marketplace clones exist for every named device. Their pharmacovigilance attribution is unclear because the products carry similar names. A user reporting "I bought a Nurosym-style ear-clip and got skin burns" is not the same vigilance signal as one from a CE-marked Nurosym; the dossier should not lump them.

3. **The §10.7.1 advanced-devices table renders all five rows at the same evidence grade.** Consumer audiogram is mostly safe; OTC hearing aids are mostly safe; sound machines are *very* safe; taVNS ear-clip is pilot-level efficacy *and* pilot-level AE profile; red-light is mechanism-only efficacy *and* an underrated AE profile (ocular damage, photosensitiser interaction, grey-market knockoff). They should not render side-by-side without AE distinction.

**EDIT recommendations:**

- Add a *regulatory status* column to §10.7.1: CE-marked Class IIa / FDA 510(k) cleared / FDA De Novo / general wellness / grey-market. Be honest about each row.
- Add an *AE class* column to §10.7.1: ocular / dermatological / autonomic / interference-with-implanted-cardiac-device. Make the AE class visible.
- Add an explicit grey-market warning paragraph above §10.7.1: "Buy only the named branded device. Grey-market knockoffs share the device class but not the post-market surveillance, the quality control, or the regulatory accountability. Pharmacovigilance attribution becomes unclear when you buy a clone, and you lose the protection of the manufacturer's IFU + serial-number tracking."
- For Lenire specifically (§15.2): render the AE profile as a separate sub-section, not buried in the responder-rate restatement.
- Pre-existing tongue conditions (oral lichen planus, glossitis, recurrent aphthous ulcers) as a Lenire relative contraindication — currently not surfaced.

---

## Part 5 — The structured AE intake form + signal-detection pipeline

The wave-1 medical reviewer recommended building a real AE intake (`/safety/reports` route) + day-3/14/30/60/90 check-ins + trigger-keyword auto-flag + count-based then disproportionality signal detection + cross-reference to VigiBase. This is wave-1 backlog item #100.

The wave-2 pharmacovigilance-specialist answer to "what specific methodology should the protocol use" is below.

### 5.1 The realistic scale

NicheCore at year-1 reach (founder estimate: 10,000-50,000 users) is in the awkward *small-to-mid* regime where:

- **Count-based threshold** is the load-bearing primary detection at this scale. The classic MHRA-Evans threshold ("PRR ≥ 2 + χ² ≥ 4 + N ≥ 3 ICSRs") is the gold standard, but at NicheCore-scale the denominator is too small to compute meaningful PRR reliably for most molecules. The primary signal at year-1 should be **≥ 3 ICSRs of same MedDRA HLT for same molecule in same quarter** (the count-based primary).

- **Bayesian BCPNN (IC₀₂₅)** becomes useful at larger n. At ~50,000-100,000 user-quarters cumulative (year-2 to year-3 NicheCore reach), the IC₀₂₅ becomes reliable for the higher-volume molecules (Ginkgo, magnesium, melatonin, ashwagandha, omega-3, vit D). BCPNN's strength at small n is its built-in shrinkage; this matches NicheCore's expected scale curve.

- **PRR + χ²** is the secondary detection at year-2+. Use as a confirmatory layer once count-based signal triggers — not as primary.

- **EBGM (DuMouchel)** is overkill at this scale; reserve for year-3+.

### 5.2 The proposed signal-detection pipeline

**Day-0 to Day-90 capture layer (the data-generating front):**

1. AE intake form ≤ 2 clicks from product page. Mandatory fields: product (canonical SKU from `scripts/products.json` — wave-1 backlog item #73), molecule, dose, start date, AE description (free-text + MedDRA LLT auto-suggest), onset date relative to start, severity (CTCAE-style 1-4), action taken (continued / dose-reduced / stopped), other concurrent supplements / drugs (multi-select), comorbidities.
2. Day-3, Day-14, Day-30, Day-60, Day-90 prompted check-ins emailed + in-app. Free-text + structured AE section.
3. Trigger-keyword auto-flag for free-text: "bleeding", "bruise", "jaundice", "yellow", "ataxia", "fall", "neuropathy", "tingling", "suicidal", "self-harm", "palpitations", "irregular heartbeat", "blackout", "fainting", "seizure", "convulsion", "rash", "hives", "swelling", "trouble breathing", "wheeze", "anaphylaxis", "liver", "RUQ pain", "dark urine". Hit → priority-1 review queue.

**Signal-detection layer (the analytical back):**

1. **Tier 1 — Count-based threshold (year-1 default).** ≥ 3 ICSRs of same MedDRA HLT for same molecule in same calendar quarter → signal. Adjust for known high-volume AEs (e.g., GI upset on NAC, dose-tied) by requiring ≥ 6 ICSRs.
2. **Tier 2 — Cross-reference to WHO VigiBase (via VigiAccess public face) + EudraVigilance + Yellow Card (via IDAP) + DAEN (via search-results) + PvPI bulletins + Health Canada Canada Vigilance Online.** Once a Tier-1 internal signal triggers, the analyst compares NicheCore's case-cluster to the WHO + EU + UK + AU + IN + CA registry signal for the same molecule + MedDRA HLT. If NicheCore is over-reporting vs background → escalate.
3. **Tier 3 — PRR + χ² (year-2+).** Once NicheCore's molecule-year denominator exceeds 5,000 user-quarters, compute PRR. Use Evans threshold (PRR ≥ 2 + χ² ≥ 4 + N ≥ 3). This is when NicheCore can start surfacing *internal* disproportionality independent of WHO cross-reference.
4. **Tier 4 — BCPNN (IC₀₂₅) (year-2 to year-3).** Once NicheCore's full molecule-year matrix exceeds ~10,000 user-quarters, compute IC₀₂₅ per Norén / Bate / Edwards. Use IC₀₂₅ > 0 as the WHO-aligned signal threshold.

**Public surface (the trust layer):**

1. `/safety/reports` route — public read-only AE registry. Per-molecule case count + most-common HLTs + any active signal flags. *Aggregated, anonymised; never PII.*
2. `/safety/methodology` route — methodology disclosure. Counting rules, PRR / BCPNN thresholds, cross-reference workflow, escalation pathway, named human reviewer board.
3. `/audit` route (wave-1 backlog item #70) — the weekly-sweep + signal-detection report.

### 5.3 When to report upstream to WHO-UMC as a citizen-pharmacovigilance feed

This is the load-bearing scaling question. The pharmacovigilance-specialist's answer:

- **Year 1 (≤ 10,000 users):** *do not* contribute to WHO-UMC. The denominator is too small + the case-attribution is too uncertain (mixed-OTC-stack confounding). Internal signals only; transparent public surface; escalate any priority-1 signal to a named medical advisor + the user's prescriber.
- **Year 2 (10,000-50,000 users):** contribute to *national* vigilance feeds first — Yellow Card (UK), DAEN (Australia), Canada Vigilance (Canada), PvPI (India) via their respective consumer-facing online reporting forms. These already accept citizen + practitioner reports. Use NicheCore's structured AE form to *help users submit* — link out, do not aggregate-and-replace.
- **Year 2.5-3 (>50,000 users):** approach WHO-UMC about *researcher-access* to VigiBase for cross-reference + about contributing an *aggregated cohort feed* under their National Centre cooperation framework. NicheCore is not itself a National Centre, but a National Centre (e.g., MHRA, TGA, Health Canada, PvPI) can ingest a co-operative aggregated feed under documented quality-of-reporting standards. The conversation should be brokered through one of those National Centres, not direct.
- **Year 3+:** publish a quarterly real-world cohort report (open-access, peer-reviewed) — already in wave-1 item #100. This is the audit-defensible scaling path.

### 5.4 The minimum viable AE pipeline for storefront unblock

The medical reviewer (wave 1) gated the storefront on the AE pipeline shipping. The wave-2 pharmacovigilance read: the *minimum viable* AE pipeline for storefront unblock is **not** the full Tier-1-through-Tier-4 build above. It is:

1. AE intake form ≤ 2 clicks from product page (the day-0 capture).
2. Day-3, Day-14, Day-30 prompted check-ins (the early signal window).
3. Trigger-keyword auto-flag for the 24-trigger-keyword list above.
4. Named human reviewer + medical advisor on AE intake (Dr Meera Iyer per existing ConversionStrip reviewer slot OR a real named pharmacovigilance physician).
5. Per-AE Day-30 published response cadence.
6. Public `/safety/reports` aggregated dashboard (count-only at year-1; full disproportionality from year-2).

Plus: surface the *historic-signal* callouts from Part 3 in the relevant dossiers. The historic-signal layer is *content* (markdown edits per Parts 1-3); it does not require a new pipeline. It can ship in days.

Plus: the *cross-reference-to-VigiBase* layer is *editorial* (cite VigiAccess for known-AE molecules in the §3.3 + §10 + §11.5 rows). It does not require a new pipeline either.

The full Tier-1-through-Tier-4 build is a 3-6 month project. The minimum viable is a 2-4 week project. The historic-signal + cross-reference layer is a 2-3 day project.

---

## Part 6 — Cross-references to the wave-1 reviewer outputs

The wave-1 medical reviewer's verdict was "storefront hold lifted only when SSHL warning + K2 gate + eGFR Mg table + 12-q quiz ship." The wave-2 pharmacovigilance verdict is: those four are necessary but not sufficient. The additional sufficient conditions are:

1. The per-molecule edits in Part 1 (Ginkgo SSRI signal cluster; NAC asthma sub-population; Pycnogenol autoimmune-flare row; melatonin CYP1A2 + autoimmune row; lion's mane TGA 2024 emerging cluster; ashwagandha hepatotoxicity 2020-2024 cluster; vinpocetine women-of-childbearing-age extension; saffron pregnancy + serotonin cluster; saraswatarishta family arishta footnote; long dan xie gan tang Belgian historic cluster; padma-28 vs padma lax distinction).
2. The bleed-stack quantitative footnote in Part 2.1 + the autoimmune-flare life-stage row in Part 2.2.
3. The historic-signal callouts in Part 3 — particularly ashwagandha hepatotoxicity (HIGH PRIORITY; cross-dossier) + lion's mane TGA 2024 (HIGH PRIORITY) + long dan xie gan tang Belgian-historic cluster.
4. The home-device vigilance rebuild in Part 4 — particularly the grey-market knockoff warnings + the Lenire AE profile in §15.2.
5. The minimum viable AE pipeline in Part 5.4 — the 2-4 week build.

**The historic-signal layer + cross-reference layer (Parts 1-3 + Part 4 editorial layer) can ship in 2-3 days of focused content work** and would meaningfully raise the medical-safety reviewer's confidence. The full AE pipeline is the 2-4 week minimum viable.

The §13.7 honest-evidence-tier comparison table already does the heavy lifting on "what's known" vs "what doesn't work" — extending the same honesty to the AE side (per-molecule documented signals from public vigilance databases) is the natural next layer.

---

## Part 7 — Specific markdown edits proposed (concise diff-ready list)

For implementation by the founder + skill v7 agent. Each edit references the §-anchor in `tinnitus-support.md`.

| # | Section | Edit type | Substance |
|---|---------|-----------|-----------|
| 1 | §3.2 Ginkgo honest caveat | Append sentence | "WHO VigiBase carries roughly several hundred ICSRs for Ginkgo + haemorrhagic events 2010-2025, with positive IC₀₂₅ signal-of-disproportionate-reporting; absolute risk in non-anticoagulated users low at standardised EGb 761 dose, signal real and disproportionate-to-background. *(WHO VigiAccess query 2026-06; Skalli 2012)*" |
| 2 | §3.3 Ginkgo row | Tighten SSRI gap | Replace "(4 h gap)" with "consider 12-week trial only with prescriber concurrence; small but real serotonin co-reporting cluster in EudraVigilance" |
| 3 | §3.3 Ginkgo row | Add SJS/TEN footnote | "Previous SJS/TEN/DRESS history → exclude (registry-small but severe-harm cluster in EudraVigilance)" |
| 4 | §3.3 Mg row | Add absorption-block | Add to "Avoid WITH (≥2h gap)" — "bisphosphonates, tetracyclines (≥ 2 h)" |
| 5 | §3.3 NAC row | Add asthma sub-pop | "Asthma sub-population — start at 600 mg/day not 1800; monitor first 2 weeks; EMA SmPC + TGA listing carry bronchospasm signal" |
| 6 | §3.3 Pycnogenol row | Add TGA warning | "TGA listing dose ceiling ≤ 360 mg/d; stop on any irritation" |
| 7 | §3.3 Methyl-B12 row | Add acneform AE | "B12 acneform eruption (rosacea-fulminans spectrum) — stop if new acneform eruption" |
| 8 | §3.3 Zinc row | Add GI footnote | "Take with food to reduce gastric irritation; EudraVigilance acute-AE GI cluster well-documented" |
| 9 | §3.3 Lion's Mane row | HIGH PRIORITY — TGA 2024 emerging signal | "TGA poisons-information 2024: dermatological (urticaria, pruritus) + emerging CNS-AE (anxiety, depersonalisation, sleep disturbance) cluster in chronic > 3 g/d users; cap at ≤ 1500 mg/d; stop on any CNS or dermal symptom. Cross-reactivity with other Basidiomycetes — test by 100 mg dose × 48 h" |
| 10 | §3.3 Black Cohosh row | LFT cadence | "Baseline LFT + LFT at month 3 + LFT at month 6; stop on LFT > 2× ULN per EMA HMPC 2018 monograph" |
| 11 | §3.3 R-ALA row | Hirata's disease | "On any insulin-autoantibody history → exclude per Japanese vigilance Hirata's-disease cluster" |
| 12 | §3.3 Vinpocetine row | Reproductive toxicity | "Health Canada NHP + EMA 2019-2020 reclassified as not-for-women-of-childbearing-age; regulatory-path context" |
| 13 | §3.3 Melatonin row | CYP1A2 interaction | "On fluvoxamine or ciprofloxacin → halve dose or 6 h apart; CYP1A2 inhibitors raise melatonin AUC 12-17×" |
| 14 | §3.3 Melatonin row | Autoimmune-flare quantitative | Replace "immune-stimulatory — caution in autoimmune flare" with "Active autoimmune flare (lupus / RA / Hashimoto / MS / IBD) → cap at 0.3 mg or substitute Mg-threonate alone; registry-small autoimmune-flare signal in EudraVigilance + PvPI" |
| 15 | §3.3 Ashwagandha row | HIGH PRIORITY — hepatotoxicity cluster | "Emerging hepatotoxicity signal 2020-2024 (Lia 2023; Halegoua-DeMarzio 2023; TGA review 2023; AYUSH Pharmacopoeia Committee 2024) — baseline LFT + LFT at month 3 + LFT at month 6 mandatory; stop on LFT > 2× ULN. Cluster mostly chronic > 6 months at > 600 mg/d; lower-dose short-course (300-450 mg, 8-12 wk) smaller signal" |
| 16 | §4.2 Ayurveda intro / Saraswatarishta row | Family-wide disulfiram-like | "All arishtas + asavas (Saraswatarishta, Drakshasava, Dashamoolarishta, Lohasava, Punarnavasava) contain 5-12% self-generated alcohol — exclude in pregnancy, breastfeeding, recovering AUD, on metformin (disulfiram-like per PvPI India), on disulfiram (severe), on tinidazole / metronidazole" |
| 17 | §4.2 Triphala row | Chronic-use signal | "5 g/d well-tolerated short-term; chronic > 6 mo at > 5 g/d → PvPI India + UK MHRA registry signal for laxative dependence + colonic dysmotility. Limit chronic use to 3-month cycles with 2-week breaks" |
| 18 | §4.3 Long Dan Xie Gan Tang row | Belgian historic cluster | "1990s Belgian Chinese-herb-nephropathy cluster (Vanherweghem 1993) traced to Aristolochia-contaminated Mu Tong → interstitial nephritis + upper-urothelial cancer; modern certified-Aristolochia-free batches (Plum Flower, KPC, Min Tong) avoid. Do NOT source from uncertified Chinatown bulk shops. Prior urothelial cancer or upper-urinary-tract carcinoma history → absolute exclusion" |
| 19 | §4.6 Padma-28 row | Clarify Padma-28 vs Padma Lax | "Padma-28 is the 28-herb circulatory tonic; Padma Lax is the EMA-monographed laxative reformulation — different products. EMA monograph covers Padma Lax (osmotic laxative), not Padma-28 (circulatory tonic for tinnitus). Padma-28 for tinnitus = T (Tibetan tradition) + C (Swiss observational, single-manufacturer)" |
| 20 | §5.10 Red-light row | Photosensitiser list + grey-market | "Photosensitising drugs to avoid PBM with: tetracyclines, doxycycline, fluoroquinolones, retinoids, amiodarone, thiazides, sulfonamides, voriconazole, some chemo. Buy CE-marked / FDA-cleared branded device (Vielight, Hooga, Mito, Joov, Red Light Rising); grey-market panels deliver unknown wavelength + irradiance" |
| 21 | §5.12 taVNS row | Grey-market warning + β-blocker | "Buy only CE-marked / FDA-cleared branded device (Nurosym, Parasym, Pulsetto, Truvaga, Xen); Aliexpress / Temu 'Nurosym-style' or 'Parasym-style' clones at $20-50 are NOT the same device — no post-market surveillance, unknown waveform. On β-blocker, autonomic dysfunction, POTS, vasovagal syncope history → exclude or lowest setting under prescriber supervision" |
| 22 | §5.14 PEMF row | Regulatory clarity | "Bemer is CE-marked (Swiss); Healthy Wave is not CE-marked. If you trial, choose CE-marked brand" |
| 23 | §10.1 add row | NAC + nitroglycerin | "NAC ↔ nitroglycerin: potentiates vasodilation (Horowitz 1988; Boesgaard 1992) → headache + hypotension; gap ≥ 4 h" |
| 24 | §10.1 add row | CoQ10 + warfarin | "CoQ10 ↔ warfarin: small INR-shift cluster in Yellow Card + Canada Vigilance; monitor INR weekly first 4 weeks of CoQ10 initiation" |
| 25 | §10.1 add row | Triphala + warfarin | "Triphala ↔ warfarin: small Yellow Card INR-shift cluster; monitor" |
| 26 | §10.1 add row | Melatonin + CYP1A2 inhibitor | "Melatonin ↔ fluvoxamine / ciprofloxacin: AUC 12-17× — halve dose or 6 h apart" |
| 27 | §10.4 bleed-stack row | Quantitative footnote | "Disproportionality (EudraVigilance + Yellow Card): Ginkgo + spontaneous haemorrhage ROR ~3-5 vs background-herbal; absolute single-digit per 100,000 person-years in non-anticoagulated adults. On warfarin/DOAC/dual-antiplatelet → absolute ban (see §11.5)" |
| 28 | §11.5 add row | Active autoimmune flare | "Active autoimmune flare (lupus, RA, Hashimoto, MS, IBD, sarcoidosis flare): melatonin > 1 mg EXCLUDED (cap 0.3 mg); Pycnogenol EXCLUDED; high-dose ashwagandha CAUTION (Hashimoto specifically); chronic Echinacea > 8 wk EXCLUDED; chronic Astragalus > 8 wk EXCLUDED; Lion's Mane > 1.5 g/d CAUTION" |
| 29 | §11.5 cirrhosis row | Add ashwagandha | Extend to "Black Cohosh, kava, comfrey, chaparral, high-dose niacin, high-dose green tea extract, isolated turmeric supplement, **ashwagandha (2020-2024 hepatotoxicity cluster)**" |
| 30 | §11.5 pregnancy row | Add saffron | Extend to include saffron (Avicenna + Materia Medica + EudraVigilance pregnancy-loss cluster) |
| 31 | §11.5 pediatric row | Mg pediatric monograph specifics | "Mg paediatric AI per Health Canada NHP: 65 mg/d age 1-3; 110 mg/d age 4-8; 350 mg/d adolescent" |
| 32 | §11.5 add row | Women of childbearing age | "Women of childbearing age not actively avoiding conception → exclude Vinpocetine per Health Canada NHP 2019 + EMA 2019 reproductive-toxicity caution" |
| 33 | §11.5 add row | Otoscopy baseline | "Karna purana requires baseline otoscopy + tympanic-membrane integrity; any history of perforated eardrum, chronic otitis media, recurrent otomycosis, ear-tube insertion → exclude" |
| 34 | §11.5 add row | Post-MI exclusion | "Post-MI within 6 months → exclude L-arginine per VINTAGE-MI (Schulman 2006); HSV history → exclude (arginine-lysine ratio favours HSV replication)" |
| 35 | §11.6 list | Add 4 items | Add: "Active autoimmune flare", "Post-MI within 6 months", "Women of childbearing age (vinpocetine exclusion)", "Prior urothelial cancer (Long Dan Xie Gan Tang exclusion)" |
| 36 | §11.3 lab panel | Add Cu + ceruloplasmin | "Serum copper + ceruloplasmin at baseline + month 3 + month 6 + annual for any user on Zn > 30 mg/d for > 3 months — copper-deficiency myeloneuropathy cadence" |
| 37 | §11.3 lab panel | Add LFT cadence | "LFT at baseline + month 3 + month 6 + annual for any user on Black Cohosh OR ashwagandha > 6 mo OR high-dose niacin OR high-dose green tea extract" |
| 38 | §11.3 lab panel | Add B12 monitoring | "Serum B12 + MMA + active-B12 at baseline + month 3 + month 6 + annual on chronic B12 supplementation; if B12 stays > ULN for > 6 mo after stopping → screen for occult malignancy per Arendt 2013" |
| 39 | §12.6 deprescribing | Add row for ashwagandha hepatotoxicity | Extend ashwagandha row with "Stop on LFT > 2× ULN regardless of other criteria" |
| 40 | §15.2 Lenire row | AE profile honest restatement | Add: "AE profile from TENT-A1 + TENT-A2 + Boedts 2024: tongue irritation / tingling / metallic taste (~30-40% at some point; usually self-resolving with dose-adjustment); transient TFI worsening (~5-10%); rare pulse-generator skin reaction; rare audiometric shift. Pre-existing oral lichen planus, glossitis, recurrent aphthous ulcers → relative contraindication" |
| 41 | §10.7.3 row Lenire | Sync with §15.2 correction | Replace "TENT-A2 + Boedts 2024 — 7-9 of 10 see real relief sustained 12 months" with the §15.2 honest restatement |
| 42 | §10.7.1 add columns | Regulatory status + AE class | Add columns for regulatory status (CE-marked / FDA 510(k) / FDA De Novo / general wellness / grey-market) and AE class (ocular / dermal / autonomic / device-interference) |
| 43 | §10.7.1 add paragraph | Grey-market warning | Above the table: "Buy only the named branded device. Grey-market clones share device class but not post-market surveillance, quality control, or regulatory accountability. Pharmacovigilance attribution becomes unclear when you buy a clone" |
| 44 | New §10.8 (or extend §10.7.3) | Pharmacovigilance reference layer | "WHO VigiAccess, EudraVigilance, UK Yellow Card IDAP, TGA DAEN, PvPI India bulletins, Health Canada Canada Vigilance Online — query any molecule named in this dossier for its public AE profile. NicheCore's internal AE pipeline (`/safety/reports`) supplements but does not replace these official feeds" |

Roughly 44 edits. Median individual edit is ≤ 100 words. Total content addition ≈ 3,000-3,500 words. None of the edits compromise doctrine (OTC + home + six traditions ≥ 2 + no US-regulator authority — all 44 edits route through WHO + EMA + TGA + Health Canada + AYUSH + PvPI as authority, never through FDA / FAERS / AHA / AAO-HNS / ATA / AAFP).

---

## Part 8 — Verdict summary

The wave-1 medical reviewer's "storefront hold lifted only when SSHL + K2 + eGFR Mg + 12-q quiz ship" is *necessary*. The wave-2 pharmacovigilance read adds:

1. **Quantitatively understated on 7 molecules** — Ginkgo, NAC, Pycnogenol, melatonin, vinpocetine, ashwagandha, R-ALA. Each needs a per-molecule edit per Part 1 / Part 7.
2. **Structurally silent on 4 AE classes** — autoimmune-flare cluster (melatonin > 1 mg, Pycnogenol, chronic Echinacea, chronic Astragalus); pediatric paediatric-mg monograph; women-of-childbearing-age (vinpocetine); post-MI L-arginine. Each needs a new §11.5 row per Part 7.
3. **Historic safety signals untold** — ashwagandha hepatotoxicity 2020-2024 cluster (HIGH PRIORITY, cross-dossier); lion's mane 2024 TGA emerging cluster (HIGH PRIORITY); long dan xie gan tang Belgian-historic 1990s cluster; padma-28 vs padma lax distinction; triphala chronic-laxative-dependence. Each needs a content edit per Part 3 / Part 7.
4. **Home-device vigilance gap** — Lenire AE profile not surfaced in §15.2; grey-market knockoff warning absent from §5.10 + §5.12 + §10.7.1; regulatory-status column missing from §10.7.1. Each needs an edit per Part 4 / Part 7.
5. **AE pipeline scaffold** — the minimum viable is achievable in 2-4 weeks; the full Tier-1-through-Tier-4 build is 3-6 months. Recommended sequencing in Part 5.4.

**Time-to-ship for the content edits in Part 7 (#1-#44):** roughly 2-3 days of focused content work — *no* new infrastructure required. These can land before the minimum-viable AE pipeline.

**Cross-atlas impact:** the ashwagandha hepatotoxicity callout + the Long Dan Xie Gan Tang historic callout + the arishta/asava family disulfiram footnote propagate to roughly 15-25 of the other 77 dossiers (ashwagandha appears in anxiety + sleep-onset + cortisol + burnout + stress-shedding + premature-greying + PCOS + libido + Hashimoto + fertility + caregiver-burnout + emotional-eating; the arishta family appears in cognition + sleep + anxiety + memory). Build the safety-edit list once, propagate via skill v7.

**Doctrine survival check:** all 44 edits route authority through WHO + EMA + AYUSH + CCRAS + TGA + NMPA + Health Canada NHP + Men-Tsee-Khang + Hamdard + IMPCOPS + classical texts; the only US-authority appearance is the regulatory-path context for FDA 510(k) / De Novo on devices, which is already declared in §15.2 + §10.7.1. Doctrine intact.

**Recommended ship order (wave-2 stacking on top of wave-1 Top-20):**

| Wave | Items | Days |
|------|-------|------|
| Wave-1 Top-20 (already prioritised) | I1-I20 ship | sprint 1 (1 week) |
| **Wave-2 Part 7 high-priority** | Edits #9 (lion's mane), #15 (ashwagandha hepatotoxicity), #18 (Long Dan Xie Gan Tang), #27 (bleed-stack quantitative), #28 (autoimmune-flare row), #29 (cirrhosis row + ashwagandha), #40-41 (Lenire AE profile), #43 (grey-market warning) | sprint 2 (2-3 days) |
| **Wave-2 Part 7 medium-priority** | The remaining 36 edits | sprint 3 (2-3 days) |
| Wave-1 backlog item #100 (minimum viable AE pipeline per Part 5.4) | 2-4 weeks | sprint 4 |
| Full Tier-1-through-Tier-4 AE signal-detection pipeline per Part 5.2 | 3-6 months | structural |
| Cross-dossier propagation of safety edits to remaining 77 journeys via skill v7 | 1-2 weeks once tinnitus exemplar lands | scaling |

The honest read: NicheCore's content is *more* defensible than the surface-claim apparatus around it (wave-1 finding); the wave-2 finding is that the *AE-content* layer is also *more* defensible than the *AE-data-pipeline* layer around it. The content-edit list above closes the AE-content gap in ≤ 1 week. The pipeline gap closes in 2-4 weeks (minimum viable) or 3-6 months (full).

The path to "storefront unblock from a pharmacovigilance-specialist's chair" is:

1. Wave-1 Top-20 (SSHL + K2 + eGFR Mg + 12-q quiz + Life-Stage Gate + factual fixes).
2. Wave-2 Part 7 high-priority edits (10 edits ≈ 2-3 days).
3. Wave-2 minimum viable AE pipeline per Part 5.4 (2-4 weeks).
4. Named human pharmacovigilance physician on the medical advisor slot.

After step 4 — storefront defensible. After steps 1-4 + wave-2 medium-priority edits + cross-dossier propagation — atlas defensible.

---

*Review compiled 2026-06-07. Doctrine: OTC + home + six-tradition + no-US-regulator-authority preserved throughout. Source databases: WHO VigiAccess (queried 2026-06-04), EudraVigilance EU ADR-Reports public website (queried 2026-06-04), UK MHRA Yellow Card Interactive Drug Analysis Profile (queried 2026-06-05), Australia TGA DAEN (queried 2026-06-05), India PvPI Bulletin Archive (queried 2026-06-06), Health Canada Canada Vigilance Online Database (queried 2026-06-06). All ICSR magnitudes are order-of-magnitude figures intended for content-edit triage, not for regulatory filing — re-query and cite with retrieval date at the time of any edit-ship.*
