# REVIEW_2026-06-05_medical_safety.md

**Reviewer.** Senior clinical-trial methodologist + safety-pharmacovigilance specialist. Cochrane Colloquium / Lancet review-panel posture. Not here to defend FDA, ABIM, or any industry interest. Here to defend the reader's liver, kidneys, marrow, and inner ear.

**Materials reviewed.**
- `nichecore/research/tinnitus-support.md` (951 lines, end-to-end)
- `.claude/skills/ailment-360-research/SKILL.md` (v6.2.7 banner through Rule 12)
- `nichecore/research/anxiety-like-calm.md` (sibling — SSRI overlap)
- `nichecore/research/afib-natural-adjunct.md` (sibling — anticoagulation overlap)
- `nichecore/research/pregnancy-postpartum-nutrition.md` (sibling — life-stage gating)
- `nichecore/components/layout/conversion-strip.tsx` (the buy CTA — quality-claim surface)

**Final scoresheet (rubric style — 0 worst, 10 best).**

| Dimension | Score | One-line verdict |
|---|---|---|
| 1. Contraindication + interaction rigor | 5 / 10 | Narrative is honest where it lands — but the matrix has measurable gaps and is non-systematic. Not a PK/PD database. |
| 2. Life-stage gating | 3 / 10 | No structured gate. Caveats are scattered as inline asides. The pregnancy + CKD + pediatric + active-cancer reader walks off a cliff. |
| 3. Adverse-event reporting + pharmacovigilance | 1 / 10 | Functionally absent. No yellow-card pipeline, no signal-detection loop, no public AE board. "Trust us, day-14" is not a safety system. |
| 4. Supplier + product quality control | 2 / 10 | Brand-naming is presented as if it implies QC. There is no COA registry, no lot-traceability, no recall pipeline. |
| 5. Two-axis evidence weighting (efficacy × harm) | 4 / 10 | The grade letter conflates "we don't have evidence it works" with "we have evidence it harms". This is the deepest structural defect. |

**Bottom line.** The dossier is among the most thoughtful natural-medicine documents I have read. It explicitly downgrades Ginkgo on the strength of Cochrane Hilton 2013 (line 92, line 855). It refuses to endorse Lipoflavonoid (line 436). It correctly bans tonic water (line 372), correctly flags pulsatile tinnitus (line 24, line 794), correctly puts homeopathy in a "DO NOT RECOMMEND" row (line 866). These are real and rare disciplines.

But the safety architecture is **narrative, not systematic**. It depends on the reader reading every caveat in the right cell of the right table. The five specific gaps below are not hypothetical — each one is the type of preventable harm that would, in a regulated context, generate a yellow-card cluster within 12 months of a 10,000-user roll-out.

I would not block publication. I would block the storefront's "Subscribe & save" CTA from firing until items 2, 3, and a meaningful slice of 1 are closed.

---

## Strengths the dossier deserves credit for (so the criticisms are calibrated)

Before I attack, let me name what is genuinely good — because criticism without acknowledgement is cheap.

1. **Cochrane-honesty on Ginkgo is real and rare.** Line 92: *"the largest reviews of all the studies (Cochrane Hilton 2013) say it does NOT help most people with simple tinnitus."* Line 855: `Ginkgo EGb 761 (Tebonin) | C (Cochrane null; subset responds)`. Most consumer-health properties would not write this sentence in a paid funnel.
2. **Pulsatile-tinnitus red flag is up-front.** Line 24, top-of-page, before the protocol begins: *"If your ringing throbs in time with your heartbeat… arrange ear-and-neck vascular imaging on your own initiative."* That is correct triage.
3. **Quinine (tonic water) ototoxicity is correctly flagged twice.** Line 372 (food avoid table), line 638 (drug interaction matrix), line 653 (drug↔food). Most natural-medicine sources don't surface this at all.
4. **Lipoflavonoid is explicitly refused.** Line 436 ("Lipoflavonoid is not endorsed"), line 867 ("DO NOT RECOMMEND: Lipoflavonoid as cornerstone"). Niacin hepatotoxicity surfaced. Good.
5. **Black cohosh has a 6-month ceiling.** Line 111 *"never longer than 6 months continuous (rare liver reactions)"*. EMA HMPC 2018-consistent. Good.
6. **Kapalbhati / Bhastrika contraindications are present.** Line 471, line 702: excluded in HBP, pregnancy, glaucoma, retinal disease, ulcer.
7. **Zinc-without-copper is correctly handled.** Line 102, line 683: Zn:Cu 8-15:1 ratio. Most consumer protocols never name this. Important — chronic isolated zinc supplementation causes copper-deficiency myeloneuropathy (a real, irreversible neurologic syndrome).
8. **Aristolochia is named for Long Dan Xie Gan Tang.** Line 153: *"demand an Aristolochia-free batch certificate"*. This is a real renal-failure / urothelial-carcinoma issue from the 1990s Belgian "Chinese herb nephropathy" cluster. Naming it is correct.
9. **St John's Wort + 5-HTP excluded entirely.** Line 689, line 916-917 in the sibling anxiety dossier. A serotonin-syndrome ban that holds even though SJW has Cochrane support for depression. The protocol correctly judged that the polypharmacy interaction footprint (CYP3A4 induction → contraceptive failure, SSRI serotonin syndrome, INR shift, statin failure, immunosuppressant failure) is too dangerous for unsupervised self-administration.

These wins matter. The criticisms below are *given* these wins — they are about the gap between "this paragraph is honest" and "this protocol will be safe at 10,000-user scale."

---

## Dimension 1 — Contraindication + interaction rigor

**Score: 5 / 10.**

The §10.1-10.6 matrices (lines 606-702) are honest where they land. But they are **narrative-by-author** rather than **systematic-by-database**. The result is a long string of preventable, named, mechanistically-obvious omissions.

### 1.1 Ginkgo + warfarin / DOAC / NSAID — bleeding window is qualitative, not numeric

The dossier handles Ginkgo + warfarin in three places (lines 100, 620, 628). The interaction is flagged, but the **numeric, mechanism-resolved, perioperative pattern is not stated**.

What's there (line 628): *"Combining Ginkgo, Curcumin, omega-3 ≥3 g, Pycnogenol and vitamin E can shift INR or cause bleeding — keep to 1-2, vit K consistent."*

What's missing:
- **No surgical bleeding window.** Ginkgolide B is a platelet-activating-factor (PAF) antagonist; standard perioperative guidance (AAGBI, ESA, classic Bauer 2003 review) is **stop ≥36 hours pre-op, ideally 7-10 days for elective surgery and any dental procedure with significant tissue trauma**. The dossier never names a numeric stop-window. A reader scheduled for a colonoscopy, dental extraction, cataract surgery, or epidural injection will not know to pause.
- **No NSAID overlap quantified.** Ginkgo + chronic ibuprofen/naproxen — the BMJ / Pharm World Sci case series (1996-2002, ≈10 spontaneous-bleeding case reports including the Rosenblatt subdural haematoma case 1997) are exactly the kind of post-marketing signal that should drive a "do not combine chronic NSAID + Ginkgo" rule. The dossier flags NSAID stack risk in row 620 but does not name the case-report literature or the recommendation to deprescribe one of the two.
- **DOAC absolute vs. relative risk.** Apixaban / rivaroxaban + Ginkgo: there is a small but real signal (Stanger 2012 case series, Spolverato 2018 review). The dossier groups DOACs with warfarin (line 628) and treats them as one — but the management is different. Warfarin → INR self-monitor. DOAC → no validated home monitoring; if you're on apixaban + Ginkgo + omega-3 + curcumin and you have a bleed, you have no way to know your hidden tilt.
- **The §10.4 "bleed-stack" cap is right but soft.** Line 685: *"On a blood-thinner or antiplatelet, keep this stack to 1-2 items max."* Why 1-2? What's the additive risk model? In a real PK/PD framing, the answer is: **on warfarin/DOAC/dual-antiplatelet, the only natural product with a positive risk-benefit for tinnitus is sound therapy and CBT-T; the bleed-stack should be functionally banned, not throttled.** A "1-2 items" rule is a soft cap that a non-clinician reader will misinterpret.

**Recommendation.** Replace the qualitative warning with a structured "Bleed-stack table" — every Ginkgo, Pycnogenol, omega-3 ≥3g, curcumin, vit E ≥400 IU, garlic, ginger, Dan Shen, San Qi, vinpocetine, NAC (high dose), fish oil row gets a numeric perioperative stop-window, a chronic-NSAID concomitancy rule, and a DOAC-vs-warfarin split. Cite EMA Ginkgo bleed warning 2015, Bauer 2003, Stanger 2012, ACCP 2022 perioperative herbal guideline (the latter exists and is non-US — Chest journal but Canadian/European authorship).

### 1.2 Magnesium + chronic kidney disease — dose-adjusted-for-eGFR table missing

This is the single most concerning omission for me as a reviewer.

Magnesium glycinate (200 mg AM + 200 mg PM = 400 mg/day per line 101) is dosed identically for every reader. Magnesium clearance is renal. In CKD stage 4-5 (eGFR < 30), 400 mg/day of supplemental Mg can produce symptomatic hypermagnesaemia — bradycardia, hypotension, areflexia, respiratory depression. In dialysis patients, the risk is well-documented (KDIGO 2017 CKD-MBD update). The case reports of magnesium-induced cardiac arrest in CKD patients exist (e.g., Onishi 2006, Mordes & Wacker 1977, multiple ED reports).

The dossier mentions "kidney" only in TCM-pattern context (lines 146, 148, 152, 154, 156). The eGFR / creatinine / CKD-stage gate is **functionally absent**.

| Patient profile | Dossier dose | Safe dose | Risk if dossier dose given |
|---|---|---|---|
| Healthy adult, eGFR > 60 | 400 mg/day Mg | 400 mg/day | None |
| CKD 3a (eGFR 45-59) | 400 mg/day | 200-300 mg/day | Mild — monitor serum Mg quarterly |
| CKD 3b (eGFR 30-44) | 400 mg/day | 100-200 mg/day, monitor | Hypermagnesaemia risk |
| CKD 4 (eGFR 15-29) | 400 mg/day | Avoid supplemental Mg | Symptomatic |
| CKD 5 / dialysis | 400 mg/day | Contraindicated | Cardiac arrest possible |

The dossier's only CKD-adjacent screening is line 652 in the AFib sibling (`eGFR + ACR | CKD — DOAC dose-adjust`) — but the tinnitus dossier itself has no eGFR row in §11.3 (the DTC lab screen, lines 774-792). A reader with stage 3-4 CKD will subscribe to "Magnesium glycinate + threonate, 400 mg total" and have no warning.

**Recommendation.** Add an eGFR-gated dose table for: magnesium, potassium (KCl substitute mentioned line 651), high-dose vitamin C, high-dose NAC, and herbal nephrotoxins (Long Dan Xie Gan Tang's Aristolochia residue, line 153, even with the "Aristolochia-free batch" caveat — many Chinatown batches are not certified). Add eGFR/creatinine to the §11.3 baseline DTC panel. **Gate the safety quiz.**

### 1.3 Zinc + copper homeostasis on chronic use — the ratio is named but the failure mode is not

Line 102: *"copper 1-2 mg (keep ratio safe)"*. Line 683: *"keep Zn:Cu 8-15 to 1"*. Good. Better than most.

What's missing:
- **The named clinical syndrome.** Chronic isolated zinc → **copper-deficiency myeloneuropathy** (CDM) — a subacute combined-degeneration-like cord lesion that mimics B12 deficiency and is **partially irreversible**. The literature is real: Schleper & Stuerenburg 2001, Kumar 2004 Mayo Clin Proc series, multiple denture-cream-zinc case clusters (Nations 2008 *Neurology*). It causes ataxia, paraparesis, neuropathy. Important for an audience that overlaps heavily with B12-deficient B12-supplementing readers, because both pathways look identical on early presentation.
- **Tinnitus reader's specific risk.** The very same reader who is told "supplement B12 because vegan/65+/metformin/PPI" (line 106) is the reader most likely to have low copper *and* be on chronic zinc. Vegan + chronic zinc + PPI = the perfect storm.
- **No serum-Cu monitoring cadence.** §11.3 line 782 has *"Plasma Zn:Cu | InsideTracker"*. Cadence not stated. Should be: baseline + 6 months + then annual on any chronic Zn supplementation.

**Recommendation.** Add a CDM-warning callout in the zinc row of §3.3 and the §10.4 Zn↔Cu row. Lock a 6-month serum Cu lab into the timeline.

### 1.4 High-dose B12 + leukemia / MDS masking — not surfaced

This is a quieter risk and one a Cochrane-trained reader will catch.

High-dose chronic B12 supplementation:
- **Normalises CBC indices in early MDS / aplastic anaemia / occult leukemia**, masking the macrocytosis that would otherwise trigger workup.
- **Recent observational signals on elevated B12 and mortality** (the Danish nationwide cohort, Arendt 2013 *J Natl Cancer Inst* — elevated serum B12 as a paraneoplastic marker for hepatic, GI, and haem malignancy).
- **No CBC monitoring cadence in the dossier.**

The dossier dose (line 106): "1000-2000 µg sublingual" — this is fine for a true deficient. It is too high for indefinite chronic use without a CBC anchor. The dossier says *"ONLY IF DEFICIENT"* (good), *"measure first"* (good), but does not say *"and re-measure CBC + serum B12 every 6 months while supplementing, and stop or investigate if B12 is elevated despite stopping intake"*.

**Recommendation.** Add to §11.3: serum B12 + CBC + MMA + active-B12 at baseline + 3 months + 6 months + annual. Add to the B12 row: if serum B12 stays elevated > 6 months after stopping supplementation, this is a flag for hepatic or haematologic workup.

### 1.5 Other interaction gaps — listed in priority order

| # | Missing interaction | Where to fix |
|---|---|---|
| 1 | **Ashwagandha + thyroid hormone.** Ashwagandha is mildly thyrotropic (Sharma 2018 RCT — TSH suppression, T4 rise). Patient on levothyroxine + ashwagandha can drift to subclinical hyperthyroidism. Not in §10.1. | §10.1 + §3.3 ashwagandha row |
| 2 | **Ashwagandha + autoimmune thyroid (Hashimoto's).** Theoretical immune-modulation concern; multiple case reports of thyroiditis flare. Tinnitus comorbidity screen *names* Hashimoto's (line 777). | §3.3 ashwagandha row needs a Hashimoto's gate |
| 3 | **Melatonin + autoimmune disease.** Melatonin is immune-stimulatory. Patient with SLE / RA / Hashimoto's + melatonin > 1 mg → small but real flare risk. Line 692 only names "immune-stimulating herbs" — wrong direction (melatonin IS the immune modulator). | §10.4 |
| 4 | **Melatonin + adolescents / pediatric use.** Dossier dose 0.3-3 mg (line 109). Children are not addressed. **Pediatric melatonin overdose is now the leading cause of paediatric poison-centre calls in the US (2012-2021 Lelak 2022 *JAMA Pediatr* — 530% increase). Australia TGA 2024 reclassified melatonin S3 with paediatric warning.** Dossier silent on pediatric. | Life-stage gate (Dim. 2) |
| 5 | **Pycnogenol + autoimmune disease.** Immunomodulatory; theoretical flare risk. Not flagged. | §3.3 |
| 6 | **L-arginine + recent MI / herpes reactivation.** Post-MI patients on L-arginine had increased mortality (Schulman 2006 *JAMA*, VINTAGE-MI). Arginine also reactivates HSV. Dossier names PDE5/nitroglycerin (good, line 108) but not post-MI. | §3.3 L-arg row |
| 7 | **Saffron + bipolar disorder.** Serotonergic; can flip bipolar I/II into hypomania. Not flagged. | §3.3 + §10.1 saffron row |
| 8 | **Lion's Mane + cholinergic load + bleeding.** Emerging case reports (Kawagishi 2008+) of bleeding, plus theoretical NGF-mediated effects on hyperexcitable conditions. Mushroom allergen cross-reactivity is named (line 670) but bleed signal isn't. | §3.3 |
| 9 | **NAC + nitroglycerin.** Real interaction (potentiation of nitrate effect → severe headache, hypotension). Line 103 names it ("nitroglycerin" in avoid column) — good. But not re-surfaced in §10.1 drug-supplement matrix. | §10.1 |
| 10 | **Vinpocetine + pregnancy.** Line 104 says "not in pregnancy" — good. Vinpocetine is also Hungarian-Rx / Australian-S4 in some jurisdictions; this is not a pure OTC. Should also flag taVNS pregnancy use. | §3.3 + §5.12 |
| 11 | **NMDA-antagonist herbs + ketamine clinic-route.** If reader is doing both home protocol and clinic ketamine (sibling §10.7.3) — NAC + magnesium + theanine + ketamine = unstudied NMDA stack. | Cross-dossier §10.7.3 |
| 12 | **Black cohosh + tamoxifen / aromatase inhibitors.** Patient on tamoxifen for breast cancer — black cohosh is contraindicated in many EU monographs. Tinnitus protocol recommends black cohosh for perimenopausal sub-type (line 111). Active or prior breast cancer is not screened. | §3.3 black cohosh row + life-stage gate |
| 13 | **Triphala / Saraswatarishta + diabetes / hypoglycemia.** Triphala has mild glucose-lowering effect; the daily 5 g dose (line 142) stacked with a diabetic on sulfonylurea or insulin can cause hypoglycaemia. Not flagged. | §4.2 Ayurveda table |
| 14 | **Saraswatarishta — alcohol content.** Fermented Ayurvedic wine, 5-12% alcohol. Recommended in tinnitus (line 136) and pregnancy dossier (line 168). Pregnancy dossier should explicitly exclude — does not. Recovering alcoholic / on metformin / on disulfiram → real risk. Not flagged. | §4.2 + cross-pregnancy |
| 15 | **R-ALA + diabetes.** Line 112 cautions thyroid med, but R-ALA is glucose-lowering — known hypoglycaemia risk with concomitant insulin / sulfonylurea. Not flagged. | §3.3 |

**System-fix recommendation.** None of these gaps are unknown to a clinical pharmacology database. The defect is that the dossier was written by a careful human pulling interactions from memory — not generated by querying a structured PK/PD reference (Lexi-Comp / Stockley's Herbal Medicines / NaturalMed / WHO-UMC global database / Australian TGA Interactions / EMA HMPC monograph corpus). Make this **systematic**:

1. Build a `supplements.json` machine-readable table — one row per molecule, with fields: `dose-range`, `eGFR-gates`, `pregnancy-category`, `lactation-category`, `pediatric-floor`, `interactions[]`, `contraindications[]`, `monitoring-cadence`.
2. Build an `interactions.json` triple — `(molecule, drug-or-other-molecule, severity, mechanism, action, citation)`.
3. The dossier markdown rows are *rendered from* this corpus, not authored by hand. The corpus is signed off by a credentialled clinical pharmacologist, version-controlled, and updated quarterly from EMA/TGA/Health Canada/AYUSH bulletins.
4. Then any per-journey dossier inherits a consistent interaction table by joining its supplement list against this corpus. **Today the interaction matrix is narrative; tomorrow it must be relational.**

---

## Dimension 2 — Life-stage gating

**Score: 3 / 10.**

This is the most structurally absent piece of safety architecture in the dossier. Caveats are scattered as inline parentheticals — never aggregated, never gated by the intake.

### 2.1 What exists

Searched the dossier (951 lines) for pregnancy / breastfeeding / pediatric / elderly / CKD / dialysis / active cancer signals:

- Line 104: Vinpocetine "not in pregnancy"
- Line 111: Black Cohosh ≤6 months continuous (no pregnancy exclusion)
- Line 292: Red-light "Do not use if pregnant, have head/face cancer, take photosensitising drugs, have had brain surgery, or have a severe seizure disorder"
- Line 314: PEMF mat "Do not use with a pacemaker, in pregnancy, or with active cancer"
- Line 318: Sauna "Do not do if you have significant heart disease or are pregnant"
- Line 434: Cod-liver vitamin A "do not mega-dose in pregnancy"
- Line 471: Kapalbhati/Bhastrika excluded pregnancy/glaucoma/HBP/retinal/ulcer
- Line 503: Time-restricted eating "NOT for underweight, burnt-out, pre-frail elderly, or pregnant/breastfeeding"

That's it. Eight scattered inline mentions across a 951-line document. For a reader who is **pregnant + on levothyroxine + with mild CKD**, there is no single place to read what's safe.

### 2.2 What's missing

The following high-risk gates are simply not addressed:

1. **Pregnancy** — beyond the eight inline parentheticals, no consolidated table. The full supplement stack — Ginkgo, NAC (high dose), Pycnogenol, L-arginine, CoQ10, ashwagandha, melatonin, lion's mane, R-ALA, ALA, black cohosh, all six tradition formulas, the entire taVNS device class, red-light, PEMF — needs pregnancy-category labelling (FDA A/B/C/D/X retired; TGA Australia A/B/C/D/X still canonical; EMA narrative form; Health Canada NHP framework). **Black cohosh in pregnancy is associated with neonatal stroke + meconium-staining in case reports**. Ashwagandha in pregnancy is contraindicated in classical Ayurvedic texts (used as abortifacient historically). NAC at high dose is poorly studied in pregnancy. None of these are gated.
2. **Breastfeeding / lactation** — even softer than pregnancy gating. LactMed (referenced in pregnancy sibling line 571) is the canonical Health Canada-accessible database. **None of the tinnitus supplements is mapped to LactMed.** Reader who is 4 months postpartum + has gestational tinnitus + is breastfeeding → walks into the protocol blind.
3. **Pediatric (< 18 / < 12 / < 6)** — tinnitus is uncommon but real in children (post-OME, post-noise-trauma, in kids on ADHD stimulants or SSRIs for paediatric anxiety). The dossier has no pediatric dose adjustment, no melatonin pediatric warning (despite the Lelak 2022 paediatric melatonin poisoning surge), no age floor.
4. **Elderly (> 65) with polypharmacy** — the at-risk group for ototoxic drug burden is also the at-risk group for falls (Mg, melatonin, ashwagandha, valerian all → sedation → falls). No falls-risk gate.
5. **Active cancer / chemotherapy** — line 78 mentions cisplatin-induced tinnitus as a sub-type (correct — NAC is a real radioprotectant/chemoprotectant). But the converse — patient with active hormone-receptor-positive breast cancer being recommended black cohosh / pomegranate (line 359) / soy — is not gated. *(Pomegranate has phytoestrogenic activity; tamoxifen interaction unsettled.)* Active malignancy + immunomodulatory supplements (melatonin, ashwagandha, pycnogenol) is not addressed.
6. **CKD stages 3-5** — see Dim 1.2.
7. **Liver disease / NAFLD / cirrhosis** — kava is explicitly excluded (line 702 "chronic kava"). Good. But black cohosh, high-dose niacin (excluded — good), green tea extract (EGCG hepatotoxicity at high dose), turmeric (newer signal — Halegoua-DeMarzio 2023 *J Med Toxicol* case series on Indian turmeric supplements + AST/ALT elevations) are not gated by LFT status.
8. **Bipolar disorder** — saffron, ashwagandha (questionable), magnesium-threonate at high dose — none are bipolar-gated.
9. **Epilepsy / seizure history** — line 621 names Ginkgo + anti-seizure drug. Good. But Ginkgo + Bacopa + theoretical seizure-threshold effects — not surfaced in a structured way.
10. **G6PD deficiency** — high-dose vitamin C, R-ALA, some Ayurvedic herbs → haemolysis risk. Reader from Mediterranean / South Asian / African ancestry — never asked.

### 2.3 What this should look like

A **structured Life-Stage Gate Table**, fired by the 4-question safety quiz before checkout, with hard supplements-excluded / dose-adjusted outputs:

| Life stage / condition | Supplements EXCLUDED | Supplements DOSE-ADJUSTED | Devices EXCLUDED |
|---|---|---|---|
| Pregnancy | Vinpocetine, Black cohosh, high-dose B6 (>100 mg = neuropathy), Saraswatarishta (alcohol), ashwagandha (classical contraindication), melatonin (insufficient safety data, sibling pregnancy line 548), Lion's Mane (no pregnancy data) | Vit A ceiling 3000 IU not 10000, NAC dose halve, omega-3 keep | Red-light, PEMF, sauna, hot tub, taVNS, infrared sauna, vinpocetine |
| Breastfeeding | Saraswatarishta (alcohol), high-dose B6, melatonin (passes into milk) | Per LactMed | Same as pregnancy minus red-light if behind ear only |
| Pediatric < 18 | Melatonin (per Lelak 2022 + AAP / TGA 2024), ashwagandha (no pediatric data), pycnogenol, saffron, NAC adult dose, vinpocetine, R-ALA, L-arginine + L-citrulline at adult dose | Vit D + omega-3 + Mg per pediatric monograph | taVNS, red-light intranasal, infrared sauna |
| Elderly > 65 + polypharmacy | Re-evaluate ALL sedating supplements; ashwagandha + melatonin + valerian = falls risk | Halve melatonin to 0.1-0.3 mg; halve ashwagandha; B12 monitor CBC | None |
| Active cancer / chemo | Black cohosh (if ER+ breast), pycnogenol (immunomodulation), melatonin > 1 mg, lion's mane (cross-react), high-dose curcumin (anti-platelet); pomegranate caution with tamoxifen | NAC: discuss with oncologist (theoretical chemo-protection ↔ chemo-interference debate) | Cold immersion, sauna |
| CKD stage 3+ | High-dose Mg, high-dose K, high-dose vit C, Long Dan Xie Gan Tang (Aristolochia residue), licorice (Yashtimadhu) | eGFR-adjusted Mg per §1.2 table above | Same |
| Cirrhosis / NAFLD / abnormal LFTs | Black cohosh, kava, comfrey, chaparral, high-dose niacin, high-dose green tea extract, isolated Indian turmeric supplement (per Halegoua-DeMarzio 2023) | NAC OK (actually hepatoprotective), saffron monitor | None |
| Bipolar | Saffron, St John's Wort (already excluded), 5-HTP (already excluded), ashwagandha (caution) | Mg-threonate fine | None |
| Epilepsy / seizure history | Ginkgo high-dose, Bacopa, certain pranayama (Kapalbhati) | Magnesium fine; B6 ≤50 mg | Red-light Vielight pulsed (40 Hz) — already flagged line 292 |
| G6PD deficiency | High-dose vit C, R-ALA, henna | Standard mineral floor OK | None |
| Pacemaker / implanted cardiac device | — | — | PEMF mat (already flagged line 314), taVNS, possibly red-light intranasal |

**Wire this into the safety quiz.** Line 154 of `ConversionStrip.tsx` says *"4 questions screens for medication interactions, pregnancy and red-flag conditions before checkout."* Four questions is not enough. The real intake needs ~12 yes/no gates (current pregnancy, breastfeeding, age < 18, CKD/dialysis history, active cancer, liver disease, bipolar/epilepsy, autoimmune flare, pacemaker, on warfarin/DOAC, on SSRI/SNRI, on thyroid hormone). Render the life-stage exclusions explicitly to the user BEFORE the Subscribe & Save button. **A "$30-day return on unopened items" risk-reversal (line 205-206) is not a substitute for not selling someone a contraindicated stack in the first place.**

---

## Dimension 3 — Adverse-event reporting + pharmacovigilance

**Score: 1 / 10.**

This is the area where the protocol most clearly does not yet exist as a safety system. It exists as content.

### 3.1 What pharmacovigilance requires (real-world standard)

For an over-the-counter product/protocol sold at scale (10,000+ users), the pharmacovigilance standard — across EMA EudraVigilance, MHRA Yellow Card, TGA Database of Adverse Event Notifications (DAEN), Health Canada Canada Vigilance, WHO-UMC VigiBase — has six load-bearing components:

1. **Structured AE intake form**, accessible to every user from the product page in ≤2 clicks, with: free-text symptom field, structured severity scale, onset timing, drug+supplement concomitancy list, dechallenge/rechallenge, MedDRA-style coding (or a simplified consumer analogue).
2. **Trigger keyword auto-flagging** on intake — words like *bleeding, jaundice, dark urine, ataxia, weakness, palpitations, blackout, hallucination, suicidal* — generate an internal escalation within 24 hours.
3. **Periodic safety report (PSUR-analogue)** — quarterly aggregation of AEs by molecule, by demographic, by concomitant medication.
4. **Signal-detection pipeline** — Bayesian or disproportionality-based (BCPNN, PRR) when N grows, even a simple count-based threshold (e.g., > 3 AEs of the same type for the same molecule in the same month → review).
5. **Public AE board / transparency surface** — the protocol publishes its own AE register, with reporter consent, redacted PII. This is what differentiates a credible OTC-natural protocol from the rest of the market.
6. **Action loop** — confirmed signal → dossier update → user re-consent → e-mail to all subscribers of the affected pack.

### 3.2 What the dossier has

The dossier names a "day-14 check-in" pattern in the ConversionStrip (`SupportCard "What to expect — first 30 days"`, line 222-232: *"Day 30: meaningful change in your tracked metric. If not, the safety check routes you to a credentialed expert before refills."*) — and a §11.5 comorbidity screening section (the dossier table at lines 774-792).

That's a **clinical-effectiveness monitoring loop**, not a pharmacovigilance loop. It catches "the protocol didn't help me" but not "the protocol gave me a GI bleed on day 6."

The §11 self-administered scoring instrument is TFI + THI + 0-10 slider + PSQI + GAD-7 + PHQ-9. **None of these instruments capture adverse events.** A reader can score TFI = 80 → 30 (huge improvement) and simultaneously develop jaundice from black cohosh — the dossier's scoring catches the win but misses the harm.

There is **no AE reporting URL**, no structured form, no Bearable / Cronometer / paper template that names AEs, no e-mail/Slack/forum surface, no internal triage, no public board.

The ConversionStrip's "30-day return on unopened items" (line 205-206) is a refunds policy, not pharmacovigilance.

### 3.3 What this protocol needs

A real AE pipeline. Specifically:

**3.3.1 — AE intake form, accessible from every dossier + product page**

Six fields: (1) Which pack/products, (2) Lot/batch number, (3) Symptom + severity (mild/moderate/severe/life-threatening), (4) Onset days from start, (5) Dechallenge (stopped + resolved?), (6) Concomitant Rx + OTC list. Auto-flag if free text contains any of: *bleeding, blood in stool/urine, jaundice, yellow eyes, dark urine, chest pain, breathlessness, ataxia, falls, suicidal, hallucination, rash, hives, swelling, palpitations, blackout, syncope, severe headache, vision change, weakness, confusion*.

**3.3.2 — Day-3, day-14, day-30, day-60, day-90 prompted check-ins, with a structured AE section**

Currently the §12 timeline lists check-in dates as protocol-fidelity touchpoints (line 802-806). Convert each one to a two-section check-in: efficacy (TFI/sliders) **and** safety (symptom check, new-onset list, dose-modification log).

**3.3.3 — Signal-detection rule (count-based first, statistical later)**

Quarterly internal review. Threshold to publish-to-board: ≥ 3 AEs of the same MedDRA-class for the same molecule in the same quarter, or 1 serious AE (hospitalisation / disability / death / life-threatening). Publication includes: anonymised case description, reviewer comment, dossier action taken.

**3.3.4 — Public AE board**

A `/safety/reports` route on the website. Updated quarterly. Lists all confirmed signals, all open investigations, all dossier amendments forced by AE. This is the trust mechanism. If NicheCore won't do it, no one will know it exists.

**3.3.5 — Clinician hand-off pathway**

The ConversionStrip already has a "A 3-line script for your clinician" card (line 248-258). Extend: if AE intake flags a serious-keyword, route the user to a same-day clinical hand-off (the "credentialed expert" the SupportCard hints at — but that expert needs to exist, be on retainer, and be on-call). The expert is the kill switch.

**3.3.6 — Cross-reference WHO-UMC VigiBase / EMA EudraVigilance / TGA DAEN ingestion**

For molecules with existing AE surveillance (Ginkgo, NAC, melatonin all have substantial signals in VigiBase), surface the aggregate AE rate to the user on the product page. Honesty signal. **"This molecule has 318 reports of bleeding in VigiBase 2010-2025; your protocol-stacked risk is higher if you're on warfarin"** is more useful than "30-day return on unopened items".

**Bottom line for Dim 3.** Today the protocol is reactive: a user who bleeds will return the bottle. Tomorrow it should be proactive: a user who bleeds will be flagged, the flag will trigger a review, the review will trigger an update, the update will be transmitted to every other user on the same molecule. Without this loop, scaling the protocol scales the harm linearly with the wins. With this loop, scaling the protocol scales the safety architecture sub-linearly. **This is the single highest-leverage change the founder can make.**

---

## Dimension 4 — Supplier + product quality control

**Score: 2 / 10.**

The dossier names specific brands at every supplement row (lines 100-112): *Schwabe Tebonin, Doctor's Best, Magtein, Thorne, Pure Encapsulations, Jarrow NAC Sustain, Horphag Pycnogenol, Kaneka Ubiquinol, Real Mushrooms, Nordic Naturals, MediHerb*, etc. The ConversionStrip displays these brands as the buy CTA. The §13 patient primer says the protocol uses these brands. The §16 closing paradigm says the trust anchor is the named non-US authority + the named brand.

**This is presented to the reader as if it is quality control. It is not.** Naming a brand is not the same as testing the lot.

### 4.1 What's missing

1. **No COA registry.** A user buying "Schwabe Tebonin EGb 761 240 mg" via Amazon UK or Boots UK has no way to verify the specific bottle's certificate of analysis (heavy metals, microbiological, identity, potency). The protocol does not provide one.
2. **No lot-level traceability.** When a user reports an AE, NicheCore cannot pull the lot number, batch, manufacturing date.
3. **No recall pipeline.** When Schwabe or Thorne or Nordic Naturals issues a recall (these happen — examples: Nordic Naturals 2019 fish-oil recall for oxidation; multiple Indian Ayurvedic recalls for lead/mercury), the protocol has no way to notify subscribers.
4. **No batch testing of Ayurvedic / TCM / Unani / Siddha / Tibetan formulas.** This is the biggest exposure. **The historical heavy-metal contamination signal in imported Ayurvedic / Siddha medicines is real and large** — Saper 2008 *JAMA* sampled 193 Ayurvedic products sold in the Boston area and found 21% had detectable lead/mercury/arsenic > standard reference. Replicated in UK MHRA + Health Canada multiple times. The dossier recommends formulas from Kottakkal, Baidyanath, Patanjali, IMPCOPS, Hamdard, Ajmal, Men-Tsee-Khang — most of which are AYUSH-GMP certified. AYUSH-GMP is real but is **not** equivalent to USP-verified or NSF-Certified for Sport — there is a known gap.
5. **No customer-submitted batch test pipeline.** A user who buys a "Patel Brothers Saraswatarishta" bottle (line 586) and gets it heavy-metal tested has nowhere to upload the result for community benefit.
6. **ConversionStrip's "30-day return on unopened items"** is the only product-safety promise. Returns don't catch contamination.

### 4.2 Specific exposures by tradition

- **Long Dan Xie Gan Tang** — Aristolochia residue. The dossier (line 153) correctly says *"demand an Aristolochia-free batch certificate"*. The Belgian-Chinese-herb-nephropathy cluster of the 1990s was exactly this product class. The dossier puts the burden on the user to demand a certificate Chinatown TCM pharmacies (line 587) will not have. Functionally, this row should be: *"Buy only from Plum Flower (Mayway) or Treasure of the East lots with public COA. Do not buy from generic Chinatown TCM pharmacies. Or use Liu Wei Di Huang Wan instead."*
- **Ayurvedic herbal medicines** — Saper-style heavy-metal sampling. Kottakkal is generally well-controlled. Patel Brothers + Apna Bazar (line 586, recommended addresses) are grocery distributors, **not pharmaceutical distributors**. Buying Saraswatarishta from Patel Brothers is buying without QC.
- **Imported Hamdard / Ajmal Unani formulas (line 588)** — varied. Some lots have heavy-metal failures in MHRA testing.
- **Karna purana oil (line 134)** — Kottakkal oils are generally fine. Sesame-oil base + Bilva fruit. But the contraindication — *"never if eardrum torn"* — depends on the user knowing they have an intact eardrum. **No otoscopy-recommendation step.** A user with an undiagnosed tympanic membrane perforation does the karna purana → otitis externa or worse. The dossier should require a one-time clinical otoscopy gate before recommending karna purana.

### 4.3 What this should look like

1. **Stand up a third-party COA registry.** Partner with an independent testing lab (Eurofins, NSF, USP, ConsumerLab equivalents non-US — Informed-Sport, Australian TGA-listed manufacturer audit reports). For each named brand in each dossier, maintain a public COA registry by lot.
2. **Lot-number capture on purchase.** When NicheCore is the storefront (current ConversionStrip implies direct purchase or affiliate referral), capture the lot. When NicheCore is a referral (e.g., to Boots UK for Tebonin), advise the user to record the lot number for AE tracing.
3. **Recall ingestion pipeline.** Subscribe to EMA / MHRA / TGA / Health Canada / AYUSH bulletin RSS or APIs; auto-flag affected products to active subscribers within 24 hours.
4. **Customer-submitted batch test surface.** A user who tests a bottle uploads the result; results are aggregated by lot for community trust.
5. **Per-formula minimum supplier list.** Replace the broad supplier table (line 583-593) with a per-formula whitelist: for each supplement, only 1-3 named SKUs with verifiable COA. Anything else, the user is on their own and the dossier should say so.
6. **The Saper 2008 honesty paragraph.** The Ayurveda / TCM / Unani / Siddha / Tibetan sections should each carry a "heavy-metal contamination is a real risk in this tradition's commercial supply chain; here is how we screen" callout. **Don't elide the issue to protect the tradition.**

The ConversionStrip surface today says *"Reviewed by Dr. Meera Iyer, BAMS · 12 yrs clinical Ayurveda · Bengaluru"* (default `reviewer` prop, line 38-42). That's a reviewer endorsement. It is not QC. Don't conflate them.

---

## Dimension 5 — Two-axis evidence weighting (efficacy × harm)

**Score: 4 / 10.**

This is the deepest structural critique.

### 5.1 The conflation

The dossier uses a single-axis grading: A / B / C / D / T / H / X (skill v6.2.7, banner). The §13.7 table (line 847-871) and §14 table (line 880-895) use that single axis. The same letter has to express two distinct things:

- **Efficacy evidence weight** — "the data say it works"
- **Harm/safety evidence weight** — "the data say it is safe"

These two axes can decouple. A herb with weak efficacy evidence and strong harm signal should be REJECTED. A herb with weak efficacy evidence and no harm signal can be tried. **The current grading conflates them**, and the result is that "T" (traditional) gets used for both "kava in Polynesian tradition" (well-documented hepatotoxic) and "karna purana oil" (long-tradition, minimal harm signal). They are not the same row.

### 5.2 Where this hurts in the tinnitus dossier

Line 702 lists "chronic kava, comfrey, chaparral, ephedra" in the strict-avoid block. Good. But the §13.7 honest evidence table (line 847-871) doesn't include kava as a "DO NOT RECOMMEND" row even though kava has been historically used for tinnitus distress. Why? Because the dossier treats it as not-recommended-because-efficacy-null, not as not-recommended-because-harm-positive. The harm signal is hidden in §10.6 — buried.

The tinnitus dossier has correctly handled this for **Lipoflavonoid** (line 867: *"Marketing > evidence; no RCT base"* — efficacy-X) AND **chronic high-dose niacin** (line 436 + 632: liver hepatotoxicity). But the two reasons are written in different cells. A reader can't tell at a glance which is which.

### 5.3 What the two-axis system should look like

| Approach | Efficacy grade | Harm grade | Where it fits |
|---|---|---|---|
| Sound enrichment | B | A (essentially zero harm) | Cornerstone |
| CBT-T / MBCT-T | A | A | Cornerstone |
| Ginkgo EGb 761 | C (Cochrane null) | B (bleeding risk, only minor for most) | One layer, careful with bleed-stack |
| Pycnogenol | B | B (bleeding risk) | One layer, careful |
| NAC | B | A (very safe) | Cornerstone in acute |
| Magnesium glycinate | C | A (safe at recommended dose, harm-positive in CKD) | Daily — gate by eGFR |
| Zinc | C (deficiency only) | C (copper depletion on chronic use) | Replete then stop |
| Melatonin | B | B (pediatric overdose risk; immune flare) | Low dose only; gated by age + autoimmune |
| Ashwagandha | A (cortisol) / B (anxiety) | C (thyroid + hepatotoxic signal + pregnancy contra) | Daily — gated |
| Black cohosh | C (perimenopausal) | D (rare hepatotoxicity; tamoxifen interaction; pregnancy contra) | ≤6 months — gated by liver/cancer history |
| Kava | C-D (anxiety only) | E (hepatotoxicity well-documented) | NEVER recommended |
| Comfrey | T (traditional) | F (veno-occlusive disease, hepatic) | NEVER |
| Chaparral | T | F (hepatotoxic) | NEVER |
| Ephedra | C (asthma historical) | F (cardiac arrhythmia, stroke — banned in EU, AU) | NEVER |
| Kratom | T | E (opioid dependence, hepatotoxic, fatal overdoses) | NEVER |
| High-dose B6 chronic | T | D (peripheral neuropathy at > 100 mg chronic) | Gated by dose ceiling 50 mg |
| High-dose niacin | C (cholesterol) | D (hepatotoxicity at > 1 g) | NEVER as cornerstone |
| Lipoflavonoid | X (marketing > evidence) | C (niacin component issue) | NEVER recommended |
| Homeopathy | X (Simpson 1998 null) | A (placebo — no harm) | Documented for transparency; not active |

**Note the asymmetry.** Homeopathy is X on efficacy + A on harm → "honestly null but harmless; documented for transparency". Kava is C-D on efficacy + E on harm → "even where it works, the risk outweighs". These need to be **two cells in the table, not one merged letter**.

### 5.4 The harm-axis veto rule

Define a threshold: **if harm grade ≥ D (well-documented serious adverse event class), the supplement is REJECTED regardless of efficacy.** This is the same rule the FDA used to ban ephedra (good or not, the rule is sound), the EU used to ban kava, the EU restricted comfrey, the TGA restricts chaparral. The protocol should adopt this veto and apply it consistently.

### 5.5 What the §13.7 table should become

Add a column. Make the grade letter compound: `EfficacyGrade / HarmGrade`. Sort by harm-grade descending then by efficacy-grade descending. Every "DO NOT RECOMMEND" row carries the explicit *because-of-harm* vs *because-of-efficacy* distinction in the verdict column.

The skill spec (SKILL.md Rule 3) currently mandates a single-tier column. **Amend Rule 3 to mandate the two-axis structure.** This is a v6.3 change worth making for all 78 dossiers.

---

## Specific concerns checklist — from the brief

The brief asked me to address seven specific gaps. Here is each one explicitly.

### (a) Ginkgo + warfarin / DOAC / NSAID — numeric interaction stated?

**Partial.** Lines 100, 620, 628 flag it. **Numeric not stated.** No perioperative stop-window. No DOAC-vs-warfarin split. No NSAID quantification. See Dim 1.1. **Fix:** add Bauer 2003 / ACCP 2022 perioperative herbal guideline citation; numeric stop-windows (Ginkgo: ≥36h pre-op minimum, 7-10d ideal); DOAC-specific bleed-stack absolute ban.

### (b) Magnesium + CKD — dose-adjusted-for-eGFR table present?

**No.** No eGFR row, no creatinine row, no CKD-stage table. See Dim 1.2. **Fix:** add eGFR-gated Mg dose table; add eGFR to §11.3 baseline lab panel; gate the safety quiz with CKD-stage question; functionally exclude all Mg-supplementation in CKD 4-5.

### (c) Zinc + copper homeostasis on chronic use — supplementation:diet ratio addressed?

**Partial.** Lines 102 + 683 name the 8-15:1 ratio. **Copper-deficiency myeloneuropathy syndrome is not named** (the clinical failure mode). No serum-Cu monitoring cadence. See Dim 1.3. **Fix:** add CDM warning callout; lock 6-month serum-Cu lab into §11.3.

### (d) High-dose B12 + leukemia masking — CBC monitoring surfaced?

**No.** Dossier dose 1000-2000 µg sublingual (line 106). No CBC monitoring cadence. No "elevated B12 as paraneoplastic marker" warning (Arendt 2013 *J Natl Cancer Inst*). See Dim 1.4. **Fix:** add CBC + serum B12 + MMA + active-B12 cadence (baseline + 3 / 6 mo + annual); add Arendt 2013 elevated-B12-malignancy signal to the B12 row.

### (e) Pulsatile tinnitus red-flag workup pathway

**Good.** Line 24 (top-of-page), line 794 (§11.3), line 80 (sub-type table), line 870 (DO NOT IGNORE row). Stated four times. The workup pathway named — vascular imaging (MRA, CTA, duplex), per line 743. **Minor gap:** "arrange ear-and-neck vascular imaging on your own initiative" puts the burden on the consumer with no friction-reduced path. Better: list named non-US clinical surfaces (UK NHS Choices pathway, Australian RACGP pathway, India private radiology providers) with cost ranges. **Honest verdict — this is the dossier's best safety surface.**

### (f) Sudden hearing loss overlap with SSHL emergency — 72-hour window stated upfront?

**Inadequate.** Line 82 mentions "Brand-new, after loud noise (≤72h) — the highest-leverage moment". Line 525 mentions an "Acute noise-injury stack (start ≤24 h post-exposure)". **BUT:** the dossier does NOT clearly separate sudden sensorineural hearing loss (SSHL) — which is a 14-day-window oral-steroid emergency with a real chance of permanent hearing loss if untreated — from tinnitus.

SSHL is the canonical otolaryngology emergency: idiopathic sudden hearing loss → oral prednisone 60mg/d × 10-14 d or intratympanic dexamethasone → ~60% spontaneous-or-treated recovery if started < 14d, dramatically worse if delayed. Tinnitus is often the first symptom.

A reader with new-onset unilateral hearing loss + tinnitus who finds the tinnitus dossier first will spend 24-72 hours starting NAC + magnesium per the acute stack (line 525) — and miss the SSHL steroid window. **The dossier does not clearly say: if you have new-onset hearing loss + tinnitus (one-sided), this is SSHL until proven otherwise; you have a 14-day window; go to ENT same-day; do not substitute the home stack for that visit.**

CLAUDE.md indicates an SSHL dossier is in flight (`sshl-hearing-loss [in flight]`). **Until SSHL ships, the tinnitus dossier MUST carry a top-of-page SSHL warning identical to the pulsatile-tinnitus red flag.** Even after SSHL ships, the tinnitus dossier must cross-link.

**Fix wording** (use this verbatim):

> **Red flag — sudden one-sided hearing loss with new tinnitus.** If your tinnitus started in the last 72 hours and you also notice sudden one-sided hearing loss or muffled hearing in that ear, this is **sudden sensorineural hearing loss (SSHL)** — an otolaryngology emergency with a 14-day treatment window. See an ENT same-day. Oral steroids within 14 days dramatically improve the chance of permanent recovery. The home OTC stack here is an adjunct, not a substitute.

**This is the single most important safety addition the dossier needs.** It is a 72-hour clock that is not visible in today's text.

### (g) Aspirin / NSAID / loop-diuretic ototoxicity deprescribing pathway?

**Partial.** Line 374 ("Chronic high-dose NSAIDs/aspirin"), line 618 (loop diuretic row + NAC ear-protection). **Not addressed:** structured deprescribing pathway. The dossier says "this drug class discouraged in protocol" — but a reader on chronic furosemide for heart failure CANNOT just stop. They need:

- A "talk to your prescriber" 3-line script (the ConversionStrip surfaces a generic clinician script line 248-258, but not a drug-specific one).
- A drug-by-drug deprescribing window (e.g., loop diuretic + Mg-K-DASH adjunct: 2-week titration with home BP cuff and ferritin / electrolyte check).
- A named alternative (e.g., thiazide for HF? no — but Mg + DASH + Zone-2 cardio for mild fluid retention may permit dose reduction; this is a cardiologist conversation).
- Explicit "do not stop your loop diuretic on your own" warning (heart-failure decompensation risk).

**Fix:** add §10.0.5 "Deprescribing ototoxic drugs — with your prescriber" sub-section, per drug class, with the explicit warning that self-stop is dangerous in CHF, refractory edema, malignant hypertension, organ-transplant contexts.

---

## Cross-dossier consistency findings

I cross-read three siblings to test the safety-architecture consistency.

**1. Saraswatarishta is in the tinnitus dossier (line 136) AND the pregnancy dossier (line 168 — "5-10 ml twice a day after meals" in postpartum + lactation).** Saraswatarishta is a fermented Ayurvedic wine with 5-12% alcohol. The tinnitus dossier doesn't flag the alcohol content. The pregnancy dossier doesn't flag it in lactation (alcohol passes into breast milk; the AAP / Australian breastfeeding guidance is < 0.5g/kg/day). Recovering alcoholic, on metformin (disulfiram-like reaction), on disulfiram (severe), pregnant, lactating, < 18 — should all see explicit alcohol-content warning. **System fix:** add an `alcohol-content` field to every Ayurvedic / TCM ferment formula in the corpus.

**2. Anxiety dossier handles SSRI + saffron with a 4h gap (line 627, 676).** Tinnitus dossier handles it (line 623, 671). Good consistency. **But:** tinnitus dossier doesn't include the explicit "saffron may flip bipolar I/II into hypomania" warning that's missing from both. Add to both.

**3. AFib dossier correctly excludes K2 MK7 on warfarin (line 489-490 absolute contraindication).** Tinnitus dossier doesn't recommend K2 by itself, but recommends Thorne D/K2 combo (line 429). Patient who is on warfarin for AFib AND has tinnitus → walks into the tinnitus protocol → starts D3/K2 → **K2 antagonises warfarin → INR plummets → stroke risk explodes**. The tinnitus dossier does not surface this. The cross-dossier integration fails here.

**4. AFib dossier handles DOAC interactions (apixaban, rivaroxaban, dabigatran, edoxaban — lines 491-494) with mechanism (CYP3A4, P-gp).** Tinnitus dossier lumps "Warfarin / DOAC blood-thinners" (line 628) — no mechanism, no DOAC-specific bleed-stack. Inconsistency.

**System fix.** The interaction matrix should be sourced from a single shared corpus, not per-dossier authoring. See Dim 1 recommendation.

---

## What I would publish vs. what I would gate

**Publish unchanged:** the dossier's narrative content, the §3 OTC table, the §4 traditional sections, the §5 biophysical interventions, the §6 dietary protocol, the §8 timetable, the §13.5 patient primer, and the §13.7 honest evidence-tier table. These are well-written and largely defensible.

**Gate behind a structural fix (the storefront "Subscribe & Save" button should not fire until these ship):**

1. **Life-stage gate at intake** — the 12-question safety quiz (Dim 2). Hard exclusions rendered before checkout.
2. **CKD eGFR gate** for magnesium and all renally-cleared molecules.
3. **SSHL 72-hour warning at the top of every tinnitus page** — this is two hours of work. Do it tonight.
4. **K2 MK7 + warfarin absolute contraindication** — cross-pulled from the AFib dossier into every dossier that recommends D3+K2 combo. (Search for "Thorne D/K2" in all dossiers; gate.)
5. **AE intake form + day-3/14/30/60/90 check-ins** with structured AE section + trigger-keyword auto-flagging (Dim 3).
6. **COA registry stand-up for the top-10 most-prescribed brands** (Dim 4).

**Defer to v6.3 of the skill:**

7. **Two-axis evidence grading** (Dim 5) — affects all 78 dossiers; do this as a unified migration.
8. **`supplements.json` / `interactions.json` machine-readable corpus** — affects the underlying authoring substrate.
9. **Public AE board** at `/safety/reports`.

---

## Closing reviewer position

This dossier sits in the top 5% of natural-medicine content I have audited in the last decade. The Cochrane-honesty discipline, the tonic-water-quinine ban, the Lipoflavonoid refusal, the Aristolochia name-check, the homeopathy "documented for transparency, NOT active" framing, and the pulsatile-tinnitus red flag are real and rare. The founder has built something that is at the **doctrinal honesty** frontier.

But doctrinal honesty is not the same as a safety system. The current architecture is a careful author writing careful prose. It is not a relational interaction corpus, a structured life-stage gate, a pharmacovigilance pipeline, a COA registry, or a two-axis efficacy-times-harm grading. At 100 users, the careful prose is enough. At 10,000 users, the careful prose **will fail** — predictably, in the patterns named above. The lead indicators of that failure will be: SSHL recoveries missed in the first month; a K2-on-warfarin INR-stroke event in the first six months; a CDM neurological presentation in the second year; an Ayurvedic-formula heavy-metal nephrotoxicity case in the third year.

The remedy is not to soften the protocol. The remedy is to **promote the careful prose into a structured safety system**. The founder is one v6.3 spec away from this.

**Recommended decision:**
- *Conditional accept* of the tinnitus dossier as content.
- *Hold* on the storefront's "Subscribe & Save" CTA until the SSHL 72-hour warning, life-stage gate, K2-warfarin cross-dossier check, and AE intake form ship.
- *Major revision* requested on the skill spec — promote to v6.3 with the two-axis grading and the relational interaction corpus.

— Reviewer, 2026-06-05.
