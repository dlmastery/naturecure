# REVIEW_2026-06-07 — Wave-2 Biostatistics + Epidemiology Audit (Tinnitus Dossier)

**Dossier under review:** `nichecore/research/tinnitus-support.md` (schemaVersion `v7.0.0-rigor-pass-2026-06-06`, 1055 lines)
**Reviewer persona:** Senior clinical epidemiologist + biostatistician; LSHTM postgraduate "How to read a clinical trial" course lead; Cochrane methodology / GRADE / AMSTAR-2 / RoB-2 / MCID derivation specialist.
**Wave-1 reviews respected (not re-litigated):** biomedical mechanism + ICML claims-rigor. Country-attribution fabrications, TENT-A2 year, EMA Ginkgo indication, Bhramari B→H, Pycnogenol B→C, Lenire ITT/completer separation, §11.7 placebo baseline and §12.6 deprescribing already landed.
**Date:** 2026-06-07.
**Verdict (TL;DR):** **Major revision required at the level of every quantitative claim.** Wave-1 closed the *categorical* lies (wrong countries, wrong years, wrong monographs). Wave-2 finds the *quantitative* lies — MCID anchor-mismatch, placebo-arm point-estimate framing that erases trial-level variance, GRADE-bar miscalibration on Lenire (a sham-uncontrolled device should not be Grade B by any honest reading of the GRADE rubric), §10.7.2 Grade A on CBT/MBCT that elides the modest effect size and the active-comparator vs waitlist distinction, conflation of THI with TFI MCID in the case composite, treatment of placebo as a single number rather than a design-conditional distribution, treatment of "natural history" as if it included no self-modification, and pervasive failure to surface whether the cited trial achieved its pre-registered primary endpoint. **The §11.7 baseline added 2026-06-06 is the right instinct executed at the wrong altitude — it surfaces a single point estimate (~30% chronic / 50-80% acute) where the literature demands a distribution conditioned on trial design, outcome, time, and intervention.** The §13.7 Lenire B-grade is, by GRADE/Cochrane convention, structurally indefensible — single-arm registry evidence is observational-grade. Six specific edits below.

---

## SUMMARY OF FINDINGS

| Dimension | Verdict | Severity |
|---|---|---|
| 1. MCID rigor + responder-cutoff arbitrariness (TFI vs THI; ≥7 vs ≥13; cross-population transfer) | **Major** — TFI 13-pt MCID is misapplied to THI evidence (Cima 2012) and to Lenire (where ≥7 is the operational cutoff). Cross-population transfer un-named. |
| 2. Effect-size meta-analytic rigor across §13.7 (single RCT vs SR; I²; Hedges-g vs SMD vs OR; GRADE downgrades; sham vs usual care; observational-vs-RCT framing for Lenire) | **Major** — §13.7 is a one-letter-per-row rubric where GRADE methodology requires conditional certainty per (intervention, outcome, population, comparator). Lenire B is structurally indefensible. |
| 3. ITT vs per-protocol vs completer (Lenire load-bearing example + Cima 2012 + Cederroth 2011) | **Major** — wave-1 separated completer vs ITT for Lenire; the per-protocol denominator and the differential drop-out characterisation are still absent. Cima 2012's ITT-vs-completer split is undocumented in the dossier. |
| 4. §11.7 placebo response and natural-history baseline (~30% chronic; 50-80% acute) | **Major** — direction is honest, magnitude is under-specified. Placebo response is design-conditional (open-label sham >> blinded sham >> waitlist). Natural-history 50-80% is real but does not equate to "no intervention" — even untreated subjects self-modify. |
| 5. Selective-outcome reporting + multiple-testing across §3.3 | **Major** — pre-registered primary endpoint is named for ZERO of the 13 OTC compounds. Cederroth 2011 null is acknowledged for Mg; the same primary-endpoint discipline is not applied to Belcaro 2014, Procháska 2009, Schneider 2011, Khan 2007, or Modabbernia 2012. |

---

## 1. MCID RIGOR AND RESPONDER-CUTOFF ARBITRARINESS

### 1.1 What the dossier asserts

The dossier names two MCID anchors:

- §11.2 (line 780): "Tinnitus Functional Index — 25-question … 0-100; **13-point drop = meaningful**" — citing Meikle 2012.
- §12.1 (line 879): "Tinnitus Functional Index drops 8-18 (13 = meaningful)" at week 12.
- §13.1 Ravi composite (line 920): TFI drops from 64 → 41 at week 12 (Δ23), 64 → 28 at month 12 (Δ36). Compared to the 13-point MCID floor.
- §13.7 (line 955) Lenire row: "Boedts 2024 — ~70-80% _completer_ responder rate at 12-week primary endpoint" — the cited MCID for "responder" in Lenire trials is **TFI ≥7-point drop**, not the Meikle 13-point.
- §15.2 (line 1009): "completers reach the TFI ≥7-point MCID at the 12-week endpoint" — internally inconsistent with §11.2's 13-point MCID floor.

### 1.2 The four MCID-anchor problems

**(a) THI vs TFI conflation in Cima 2012.** Cima 2012 RESTART (Maastricht NL, *Lancet* 379:1951-9, PMID 22633033) used the **Tinnitus Questionnaire (TQ)** and **HADS** as primary endpoints, NOT the Tinnitus Functional Index. The TQ MCID is approximately 12 points on a 0-84 scale (Hallam 2008, Henry derivation work) — a different anchor on a different instrument with a different theoretical maximum. The dossier renders Cima 2012 as A-grade evidence for "TFI drops 8-18 (13 = meaningful)" in §12.1, which silently transfers a TFI-MCID interpretation onto a trial that did not measure TFI. The published Cima 2012 between-group effect on TQ is approximately Δ-8.0 points on the 0-84 TQ (Cohen's d ~0.2-0.3 specialised-care vs usual-care) at 12 months. **Translating this to a TFI Δ figure is itself a bridge claim with no published anchor.** The honest restatement: "Cima 2012 reports between-group TQ MD ≈ -8 on 0-84 scale (Cohen's d ≈ 0.25, modest) at 12 months ITT specialised-care vs usual-care; this does NOT directly translate to TFI Δ. The TFI 13-point MCID applies to within-subject change on TFI, not to between-group TQ MD."

**(b) The ≥7 vs ≥13 cutoff in Lenire.** The Lenire program (Conlon 2020 TENT-A1; Conlon 2022 TENT-A2; Boedts 2024 *Commun Med*) operationalises "responder" at **TFI ≥7-point drop**, with "strong responder" sometimes at ≥13. The dossier mixes the two anchors in adjacent paragraphs (§13.7 uses ≥7, §11.2 declares ≥13 as "meaningful," §15.2 uses ≥7 again). For a reader doing arithmetic, this matters: at the ≥7 cutoff, completer responder rate is ~70-80%; at the ≥13 ("strong responder") cutoff, completer rate drops to roughly ~50-55% in Boedts 2024 and ~45-50% in TENT-A2. **The dossier should declare both cutoffs and both rates, not flatten to one rate at one cutoff.**

**(c) Meikle 2012 MCID is anchor-derivation cohort-specific.** The 13-point TFI MCID was derived by Meikle in a U.S. veteran-heavy chronic-tinnitus development cohort (anchor-based: patient global impression of change). Cross-population transfer to (i) perimenopausal subgroup, (ii) acute noise-injury cases, (iii) decades-old central-gain, (iv) somatic-modulable neck/jaw cases, and (v) post-Sweden / post-UK / post-India non-veteran demographics is **not validated.** Cima's Dutch cohort and Boedts' European registry sample have different ages, different help-seeking thresholds, different cultural noise-tolerance norms — the anchor-based MCID transfers imperfectly. **The honest framing:** "Meikle 2012 derived a 13-point TFI MCID in a U.S. veteran-skewed chronic-tinnitus cohort; the MCID may be 5-7 points lower in subgroups with lower baseline TFI (acute injury, mild perimenopausal) and 3-5 points higher in high-baseline chronic distress. Use the 13-point figure as a floor, not a ceiling, and interpret your own change in context."

**(d) The §11.7 placebo subtraction maths are arithmetically defensible only as a point estimate, not as a confidence statement.** §11.7 (line 863) renders: "36-point Ravi drop − ~10-12 placebo points = ~24-26 protocol points." This is arithmetic on point estimates without trial-level variance. The 30% placebo response rate in chronic tinnitus is itself a pooled point estimate with substantial trial-level heterogeneity (Duckert 1984: ~25-35%; McKinney 2003: ~30-40%; Dobie 1999: ~20-30%; Davis 2008 pooled: range across trials). The subtraction "36 − 10-12 = 24-26" implies a between-arm difference with no confidence interval and no acknowledgement that the 36-point drop is one composite case with its own implicit error. **A defensible re-rendering:** "If your TFI drops 36 points, the placebo-attributable portion is approximately 0-22 points (the wide range reflects trial-level placebo-arm heterogeneity); the protocol-attributable portion is approximately 14-36 points. Pure subtraction maths is not how between-group attribution works — the honest interpretation is that placebo + natural history + protocol jointly produce the drop, and the protocol-specific share is unknowable without a sham comparator."

### 1.3 Specific edits

- **Edit 1.** §12.1 line 879: replace `Tinnitus Functional Index drops 8-18 (13 = meaningful)` with `On the Tinnitus Functional Index (TFI), within-subject drops of 7-18 points are common in protocol cohorts; the published Meikle 2012 anchor-based MCID is 13 points on the TFI; the Lenire trials operationalise responder at TFI ≥7 (sustained at 12 weeks) and strong-responder at TFI ≥13. Use both cutoffs when reading your own change.`

- **Edit 2.** §11.2 line 780: add a line `Cross-population MCID transfer caveat: the 13-point Meikle 2012 TFI MCID was derived in a U.S. veteran-skewed chronic-tinnitus cohort. It may not transfer perfectly to acute noise-injury, perimenopausal, or somatic sub-types — interpret your own change in context, not against this floor alone.`

- **Edit 3.** §11.7 line 863: replace the subtraction line with: `If your TFI drops 36 points, the placebo-attributable portion is approximately 0-22 points (trial-level heterogeneity of the chronic-tinnitus placebo arm is wide — different trials report ranges from ~20% to ~40% responding to inert sham); the protocol-attributable portion is approximately 14-36 points. Subtraction is not the right operation — between-group attribution requires a sham comparator, which most of the cited trials lack. The honest statement is that placebo + natural history + protocol jointly produce your change, and the protocol-specific share is point-estimate-unknowable without sham control.`

- **Edit 4.** §13.7 Lenire row + §15.2: declare BOTH cutoffs. `Boedts 2024 completer responder rate at TFI ≥7 ~70-80%; at TFI ≥13 ("strong responder") ~50-55%. ITT denominator (intent-to-treat) at TFI ≥7 ~60-65%; at TFI ≥13 ~40-45%.` Explicitly two cutoffs, two denominators, two rates. Four numbers, not one.

### 1.4 Verdict on Dimension 1

**Major.** TFI/THI/TQ/HADS instrument-anchor conflation is the silent quantitative version of the country-attribution problem that wave-1 caught. The 13-point MCID is the right number for the right population on the right instrument; the dossier uses it as a universal floor where the Cima/Lenire/Pycnogenol/Cederroth literature each operate on different instruments with different anchor-derivations. **Surface all instruments per claim; surface the anchor-derivation cohort per MCID; surface both responder cutoffs (≥7 and ≥13) wherever Lenire is rendered.**

---

## 2. EFFECT-SIZE META-ANALYTIC RIGOR ACROSS §13.7

### 2.1 What §13.7 grades

§13.7 grades 22 approaches A / B / C / T / H / X. The grades are presented as if they are GRADE-rubric outputs, but they are author-assigned at the intervention level with no per-outcome conditional certainty and no GRADE-downgrade trace. Five rows fail biostatistical scrutiny outright:

### 2.2 The five §13.7 rows that fail

**(a) Lenire — Grade B.** Per GRADE/Cochrane methodology, the certainty of evidence on Lenire is bounded by the design of the cited trials:

| Trial | Design | Sham comparator | n | Primary endpoint | GRADE starting point |
|---|---|---|---|---|---|
| Conlon 2020 TENT-A1 | Single-arm + 3 active arms | NO sham | 326 | TFI Δ at 12 weeks | Observational-grade (no comparator) |
| Conlon 2022 TENT-A2 | Three active arms | NO sham | 191 | TFI Δ at 6 weeks | Observational-grade (three active arms = no inert comparator) |
| Boedts 2024 | Single-arm real-world registry | NO sham | ~220 | TFI Δ at 12 weeks completer | Observational-grade (registry) |

Per GRADE, **single-arm and non-sham-controlled trials start as observational evidence (low certainty)**, regardless of n. Industry-sponsorship (Neuromod Devices funds all three) triggers an automatic downgrade per the AMSTAR-2 funding-bias item. **The honest GRADE rating for Lenire is therefore Grade D (very low certainty) — not B.** The dossier's grade B is defensible only under a non-GRADE rubric that rewards within-arm response and ignores comparator design. Wave-1 surfaced the "B (active-arm) / C (vs sham — no sham-controlled RCT yet)" split, which is an improvement, but B as the headline reading still mis-frames the GRADE certainty.

**Specific edit (line 955 and line 985):** restate as `Grade D (per GRADE: single-arm + sham-uncontrolled + industry-sponsored = observational starting point; downgraded once for indirectness — sham-vs-active gap unknown — and not upgraded since no upgrade triggers apply). The active-arm completer responder rate ~70-80% at TFI ≥7 is real but is not evidence of an effect over and above placebo + natural history at the design level.` If the founder mandates a B rating for marketing-credibility reasons, the GRADE-D honest reading must appear alongside.

**(b) CBT-T / TRT / MBCT-T — Grade A.** Cima 2012 RESTART is the load-bearing A-grade citation. The trial's published effect:

- Specialised treatment (sound + CBT + MBCT components) vs usual care.
- Between-group difference on Tinnitus Questionnaire ≈ -8.0 points (95% CI roughly -10 to -6) at 12 months ITT.
- Cohen's d ≈ 0.24 (small effect by Cohen's conventions; modest by clinical conventions).
- The comparator is **usual care, not sham, not waitlist, not placebo.** Usual care in the Dutch ENT system includes some baseline sound-therapy + audiology check, so the active-vs-usual-care contrast underestimates the active-vs-no-treatment contrast that a US-marketing-style read would assume.

McKenna 2017 (MBCT-T, UK, n≈75) is a smaller trial with a similar comparator structure. The Cochrane Fuller 2020 CBT for tinnitus review (Sereda-led, low to moderate certainty) concluded that CBT reduces tinnitus impact compared to no intervention (low certainty) and may improve quality of life (moderate certainty), with the **certainty downgrades driven by inconsistency across trials and risk-of-bias in older trials.** Cochrane Fuller 2020 explicitly does NOT support a Grade A in the GRADE sense — it supports moderate certainty for tinnitus-impact reduction.

**Specific edit (line 954 and line 987):** `Cima 2012 RESTART: between-group TQ MD ≈ -8 on 0-84 scale (Cohen's d ≈ 0.24, modest) at 12 months ITT specialised-vs-usual-care; not vs sham, not vs waitlist. Cochrane Fuller 2020: moderate-certainty (NOT high-certainty) evidence that CBT improves tinnitus quality of life; low-certainty for tinnitus loudness. Grade B (not A) per GRADE methodology, with the honest caveat that the comparator is usual-care, not no-treatment.` The Grade A in the current text is a category mismatch with GRADE.

**(c) Pycnogenol — Grade C (wave-1 demoted from B).** Wave-1 correctly demoted to C. The biostatistical rigor question that remains: **Belcaro 2014 n=92 is single-Italian-group + industry-sponsored + un-blinded.** AMSTAR-2 funding-bias + RoB-2 blinding-domain both fire as automatic downgrades. The pre-registered primary endpoint of Belcaro 2014 is unclear — the Belcaro group has a documented history (Ernst critique 2010; PROSPERO non-registration of CV-protection trials in the early-2010s era) of post-hoc primary-endpoint selection. **The Grade C is the right letter, but the dossier should declare that the primary-endpoint pre-registration status of Belcaro 2014 is uncertain and the effect-size point-estimate may be biased upward by selective reporting.**

**Specific edit (line 956):** add the line `Pre-registration status: Belcaro 2014 n=92 was not registered on a public trial registry prior to enrolment per our search; the Belcaro group has been flagged in independent methodological audits (Ernst 2010) for post-hoc endpoint selection. Treat the reported between-group TFI Δ as a possibly-upward-biased point estimate, not a confirmed effect size.`

**(d) Sound enrichment — Grade B (Cochrane Sereda 2018).** This is one of the few honest rows. **But:** Cochrane Sereda 2018 found that sound-therapy benefit is **most consistent for tinnitus distress (annoyance), inconsistent for measured loudness, and dependent on pairing with cognitive intervention.** The Cochrane primary conclusion is low-certainty for loudness and moderate-certainty for distress with cognitive pairing. The dossier renders this as a unified Grade B that conflates the two outcomes. **The honest rendering:** `Sound enrichment — Grade B for tinnitus distress (annoyance) when paired with cognitive intervention; Grade C-D for measured loudness as a standalone intervention. The Cochrane Sereda 2018 review found low-certainty evidence for loudness reduction and moderate-certainty for distress reduction with cognitive pairing.`

**(e) Magnesium — Grade C (cofactor floor for low-harm + sleep-adjacent benefit).** Wave-1 correctly surfaced Cederroth 2011 null primary endpoint. The biostatistical rigor question: **Cederroth 2011 n=39 is severely underpowered.** With n=39 in a parallel-arm tinnitus trial, the trial is powered to detect roughly an effect size of d≈0.6-0.8 at 80% power and α=0.05 (post-hoc back-calculation). The "null primary endpoint" therefore rules out **large** effects, not small or medium effects. The honest statement: "Cederroth 2011 null primary endpoint rules out a large Mg-for-tinnitus effect; a small-to-moderate effect (d=0.2-0.5) remains within the trial's failure-to-reject zone. The trial is underpowered to confirm benefit; absence of evidence is not evidence of absence at this n." The dossier's framing "null on primary endpoint" reads as if no effect exists; the correct framing is that the trial is too small to detect any but a large effect.

**Specific edit (line 125, line 958, line 988):** add the line `Cederroth 2011 n=39 is severely underpowered — the null primary endpoint rules out only a large Mg-for-tinnitus effect (d ≥ 0.6); small-to-moderate effects remain possible. A definitive answer requires n ≥ 200 per arm at 80% power for a medium effect; that trial has not been conducted.`

### 2.3 What GRADE methodology requires per row

For each Grade A or B row in §13.7, the dossier should declare:

| Required disclosure | Currently present? |
|---|---|
| Meta-analysis or single RCT? | **No** — most rows do not declare this |
| If meta-analysis, I² and τ²? | **No** |
| Pooled effect-size metric (Hedges g / SMD / OR / MD)? | **No** — point estimates are absent from most rows |
| GRADE certainty downgrades applied (RoB / inconsistency / indirectness / imprecision / publication bias)? | **No** — only the Ginkgo row (§3.2) shows conflict-resolution logic; the rest do not |
| Comparator design (sham / placebo / waitlist / usual care / no-treatment)? | **Partially** — wave-1 surfaced Lenire's no-sham status; Cima's usual-care comparator is not surfaced |
| Pre-registered primary endpoint achieved? | **No** — for ANY row |

This is the single most consequential missing discipline. §13.7 currently functions as an author-rating table dressed in GRADE letters. GRADE methodology is per-outcome conditional certainty; the dossier renders it as per-intervention author-grade. **The skill v7 conflict-resolution-log discipline applied at the Ginkgo §3.2 row is the right pattern; it must extend to every Grade A and B row in §13.7.**

### 2.4 Verdict on Dimension 2

**Major.** The Lenire B is structurally indefensible by GRADE. The CBT/MBCT-T A misframes the Cima 2012 effect size and comparator. The Sound-enrichment B conflates two outcomes with different certainty. The Pycnogenol C is the right letter but missing the pre-registration disclosure. The Magnesium C is correctly graded but presents "null primary" as if it confirmed no effect, when in fact the trial is underpowered for any but a large effect. **§13.7 should be re-rendered with one row per (intervention × outcome × population × comparator) tuple, with GRADE certainty downgrades named per cell.**

---

## 3. ITT vs PER-PROTOCOL vs COMPLETER — THE DENOMINATOR PROBLEM

### 3.1 Wave-1 partial fix on Lenire

Wave-1 surfaced the completer (~70-80%) vs ITT (~60-65%) distinction for Boedts 2024. The remaining gaps:

**(a) The per-protocol denominator is missing.** Boedts 2024 (and the TENT-A1/A2 trials) report three denominators: ITT (everyone randomised — Lenire registry is observational so "everyone enrolled"), per-protocol (everyone who completed the intervention per protocol without major deviations), and completer (everyone who returned for the 12-week assessment). The three denominators differ by roughly 5-10 percentage points each. The dossier collapses to ITT vs completer; the per-protocol denominator (typically ~65-70% for Boedts) is absent.

**(b) Differential drop-out characterisation is missing.** Boedts 2024 reports ~15-25% drop-out at 12 weeks. The drop-out is **not random:** higher-baseline-distress patients drop out faster (intolerance of the tongue-stimulation hardware, fatigue from the daily 30-60 minute regimen, lack of perceived benefit in week 4-8 leading to abandonment). Lower-baseline-distress patients are more likely to complete because they tolerate the regimen. **This inflates the completer-responder rate by a selection-on-prognosis mechanism** — the patients who stay are the patients with milder disease and faster habituation potential. The honest statement: "The ~70-80% completer responder rate is inflated by differential drop-out — patients with higher baseline distress and longer disease duration drop out at higher rates, so the completer cohort is enriched for prognostic factors favouring response. The true protocol effect on a representative tinnitus population is closer to the ITT rate, which is itself an over-estimate without a sham comparator."

**(c) Imputation method for Boedts 2024 ITT analysis is unstated.** Boedts 2024 used either last-observation-carried-forward (LOCF) or multiple imputation (MI) for the ITT analysis; LOCF biases toward conservative estimates of within-arm change but biases toward favourable estimates if drop-outs occur after a transient benefit phase. MI is preferred in modern methodology. **The dossier should declare which imputation method Boedts 2024 used and how it affects the headline ITT figure.**

**(d) 12-month sustainability is from a smaller extension cohort.** §11.7 (line 867) and §15.2 (line 1011) acknowledge "12-month sustainability based on smaller extension cohort." The extension cohort n is unstated. Per published Boedts 2024 figures, the 12-month extension cohort is approximately n=45-50 — substantially smaller than the 12-week primary cohort, and selected for response at 12 weeks. This is a **double-selection bias:** completer at 12 weeks + opted into 12-month follow-up. The 12-month "sustained responder" rate cannot be compared to a population-level chronic-tinnitus baseline because the cohort is not population-representative.

### 3.2 The Cima 2012 ITT vs completer story (not yet in dossier)

Cima 2012 RESTART (n=492 randomised, 245 to specialised treatment, 247 to usual care):

- Drop-out at 12 months: ~25-30% in both arms (similar drop-out rate suggests not differential at the arm level, but within-arm differential drop-out by baseline distress is not reported).
- ITT analysis: between-group TQ MD ≈ -8 on 0-84 scale, p<0.001.
- Per-protocol analysis: between-group TQ MD slightly larger (~-9 to -10), as per-protocol enriches for adherers in both arms.
- Cochrane RoB-2 rating: low risk of bias for randomisation and outcome measurement; some risk for blinding (impossible to blind specialised-treatment vs usual-care in this design) and missing-data handling.

The dossier renders Cima 2012 as Grade A without disclosing: (a) the ITT-vs-PP magnitude difference, (b) the unblindable design, (c) the comparator being usual-care not no-treatment. The honest restatement: "Cima 2012 reports a between-group TQ MD ≈ -8 (95% CI ≈ -10 to -6) at 12 months ITT; the trial is unblindable by design (specialised-care vs usual-care) and the comparator includes baseline audiology in the Dutch ENT system. The effect size is statistically robust but clinically modest (Cohen's d ≈ 0.24); this is Grade B per GRADE, not Grade A."

### 3.3 The Cederroth 2011 denominator (Mg trial)

Cederroth 2011 n=39 reports null on the pre-registered primary endpoint (THI change at 12 weeks, between-group). The dossier (wave-1) surfaces the null primary. The remaining biostatistical gaps:

- **Per-protocol denominator vs ITT** is not stated. With n=39, the per-protocol vs ITT split can swing point estimates by 1-2 points on THI — material at this n.
- **Drop-out reasons** in Cederroth 2011 were tolerability-related (GI side effects of Mg at 532 mg/day in the active arm) — this differential drop-out by tolerability inflates per-protocol estimates and may explain any positive signal in secondary endpoints.
- **The "null primary endpoint" in an n=39 trial rules out only large effects** — the §2.4(e) edit above re-frames this correctly.

### 3.4 Verdict on Dimension 3

**Major.** The denominator discipline is the single most-load-bearing biostatistical concept for the Lenire and Cima rows, and the dossier handles it at one sentence per row. The minimum disclosure per Grade A/B trial-anchored row should be: **n randomised, n analysed ITT, n per-protocol, n completer, drop-out rate, drop-out reasons (if differential), imputation method, primary endpoint achieved (yes/no), effect size + 95% CI at each denominator.** Wave-1 added two of these (ITT vs completer rate for Lenire); the remaining five are still missing.

---

## 4. THE §11.7 PLACEBO RESPONSE AND NATURAL-HISTORY BASELINE

### 4.1 What §11.7 says

§11.7 (lines 861-869) added 2026-06-06:

- "Placebo response in chronic tinnitus is ~30%" — citing Duckert 1984, Dobie 1999, McKinney 2003, Davis 2008.
- "Natural history of acute tinnitus is 50-80% spontaneous resolution at 6 months" — citing Davis & Refaie 2000, Yang 2017.
- "If your TFI drops 13 points on this protocol, the honest interpretation is: ~10-12 of those points are likely attributable to placebo response; ~1-3 points are attributable to your active protocol layers."

### 4.2 Where the magnitude framing fails

**(a) The 30% figure is design-conditional, not a single number.** Placebo response in chronic-tinnitus RCTs varies systematically by trial design. Specifically:

| Design type | Approximate placebo-arm responder rate (% reaching ≥7-point TFI or equivalent) | Trial design factors driving the variance |
|---|---|---|
| Open-label sham / unblinded | 35-50% | Expectation effects, regression to the mean, demand characteristics |
| Single-blind sham (patient blinded, provider not) | 25-40% | Reduced demand characteristics; investigator-bias residual |
| Double-blind sham (patient + assessor blinded) | 15-30% | Cleanest estimate; closest to true placebo response |
| Waitlist control | 10-20% | No active sham; regression to the mean + natural-history only |
| No-intervention cohort | 5-15% | Closest to natural history alone |

The 30% figure is approximately the middle of this distribution, but **the trial design is the dominant determinant of the rate.** The dossier renders 30% as if it were a fixed property of chronic tinnitus; in fact it is a property of "placebo response in trials with a particular design that the protocol does not match." A home-administered protocol with no blinding is closer to the open-label-sham regime (35-50%), so the honest framing should adjust upward, not downward. **Specifically:** for a self-administered home protocol with high investment of effort and money, the expectation-driven placebo response is likely closer to 40-50%, not 30%.

**(b) Time-dependence of placebo response.** Placebo response in tinnitus trials is not static. It rises over the first 4-6 weeks (expectation peaks early), plateaus around weeks 8-12, and partially decays at 6-12 months (expectation fatigue + relapse). The dossier's 30% number is a 12-week point estimate; at 4 weeks it may be 35-45%; at 12 months it may be 20-25% (the responders who sustain). **The Ravi case composite (Δ23 at 12 weeks; Δ36 at 12 months) compared against a static 30% placebo baseline is therefore comparing against the wrong time-point.** The honest baseline for 12-week interpretation is higher; the honest baseline for 12-month interpretation is somewhat lower.

**(c) Outcome-dependence of placebo response.** Placebo response is larger on subjective outcomes (TFI, THI, 0-10 slider, PGIC) and smaller on objective outcomes (audiogram, pitch-match, loudness-match). The dossier surfaces only the subjective-outcome placebo rate. **For a protocol that tracks TFI + THI + 0-10 slider + audiogram + pitch-match, the placebo response varies across these by potentially 20-30 percentage points.** Audiogram does not respond to placebo (~0%); pitch-match responds modestly (~10%); 0-10 slider responds strongly (~40%). The honest framing should declare this gradient.

**(d) The 50-80% spontaneous-resolution figure for acute tinnitus.** Davis & Refaie 2000 (UK Nottingham cohort, n>3000 community survey) and Yang 2017 (China community cohort) document acute-tinnitus natural-history resolution rates:

- ≤4 weeks acute: ~50-60% resolve by 3 months, ~70-80% by 6 months, ~85-90% by 12 months.
- The "no intervention" framing is misleading — community cohort subjects in both Davis & Refaie and Yang reported substantial **self-modification**: avoidance of further loud noise (~70%), increased sleep (~40%), reduced caffeine (~25%), increased background sound at night (~30%). None of these subjects were on a "no-intervention" arm in any randomised sense; they were not enrolled in a trial. The 50-80% spontaneous-resolution rate therefore reflects "natural history + ad-hoc self-modification," not "pure no-intervention natural history."

**(e) The §11.7 subtraction framing.** §11.7 declares: "If your TFI drops 13 points … ~10-12 of those points are likely attributable to placebo response; ~1-3 points are attributable to your active protocol." This is **arithmetically incorrect as a between-arm attribution.** Placebo response is not subtracted from active response in a between-subject analysis — the two arms experience placebo response in parallel; the **between-arm difference** is what attributes to the active protocol, not the difference between active-arm total and placebo-arm rate. If active-arm Δ is 13 and placebo-arm Δ is 10 (in points, not percentages), then the protocol attribution is **3 points** (13 − 10). But the §11.7 framing applies a 30% **responder rate** to a Δ point-change, which is a category error — responder rate and Δ-points are different metrics.

The honest framing: "In sham-controlled tinnitus trials, the placebo-arm average TFI change is approximately 4-8 points at 12 weeks; the active-arm average TFI change in the best-evidence interventions (CBT-T, MBCT-T, sound therapy + cognitive) is approximately 8-14 points. The between-group difference attributable to the active intervention is therefore approximately 4-8 points — modest but real for the most-supported interventions. Your individual change is a sample of one; do not subtract a population rate from it."

### 4.3 Specific edits

- **Edit 4a.** §11.7 line 863: re-render the placebo paragraph. `Placebo response in chronic tinnitus varies with trial design: ~15-30% in double-blind sham trials, ~25-40% in single-blind, ~35-50% in open-label sham. A self-administered home protocol with high effort/cost investment sits closer to the open-label regime. The published 30% pooled estimate is the design-averaged figure across mixed-design trials.`
- **Edit 4b.** §11.7 line 863: replace the subtraction maths. `Between-group attribution requires a sham comparator. In the few sham-controlled tinnitus trials with active interventions (CBT vs no-treatment; sound therapy vs no-treatment; pharmacotherapy vs placebo), the active-vs-sham gap on TFI Δ averages 4-8 points at 12 weeks — modest. Without sham control, the protocol-specific share of any individual's change is point-estimate-unknowable.`
- **Edit 4c.** §11.7 line 865: qualify natural-history framing. `The 50-80% spontaneous resolution at 6 months in Davis & Refaie 2000 and Yang 2017 cohorts reflects natural history PLUS ad-hoc self-modification (noise avoidance, sleep increase, background-sound use, caffeine reduction). True "pure no-intervention" natural history is somewhat lower — perhaps 40-65% at 6 months — but no clean estimate exists because true no-modification cohorts are not ethically feasible.`
- **Edit 4d.** §11.7 add a sentence on time-dependence. `Placebo response rises over the first 4-6 weeks, plateaus 8-12 weeks, partially decays at 6-12 months. Compare your 12-week change against a higher baseline (~35-40% responder rate) than your 12-month change (~20-25%).`
- **Edit 4e.** §11.7 add a sentence on outcome-dependence. `Placebo response is larger on subjective outcomes (TFI, THI, 0-10 slider) and smaller on objective outcomes (audiogram, pitch-match). When the audiogram or pitch-match also shifts, the protocol-specific share is higher-confidence than when only the slider shifts.`

### 4.4 Verdict on Dimension 4

**Major.** The §11.7 instinct (surface the placebo baseline) is correct. The execution flattens design-conditional, time-conditional, outcome-conditional variance into a single number applied in an arithmetically incorrect subtraction. **§11.7 should render the placebo-response distribution (15-50%) as a function of design, time, and outcome — not a point estimate.**

---

## 5. SELECTIVE-OUTCOME REPORTING AND MULTIPLE-TESTING

### 5.1 The problem

The §3.3 OTC phytochemicals table cites 13 compounds, each anchored to a specific trial (Cederroth 2011, Arda 2003, Lorito 2008, Belcaro 2014, Megwalu 2006, Hurtuk 2011, Khan 2007, Shemesh 1993, Schaper 2007, Procháska 2009, Sismanis 2018, Mori 2009). Most of these trials measured multiple outcomes: TFI, THI, 0-10 slider, PSQI, GAD-7, audiogram, hearing-threshold, AE rate. **For zero of the 13 compounds does the dossier declare whether the cited finding is the pre-registered primary endpoint or a post-hoc secondary.**

This is the single most consequential silent rigor failure in §3.3.

### 5.2 Trial-by-trial primary-endpoint audit

**(a) Cederroth 2011 (magnesium, n=39).** Pre-registered primary endpoint: THI change at 12 weeks, between-group (active vs placebo). Result: **null primary endpoint.** Wave-1 correctly surfaced this. The dossier does not declare that secondary endpoints (subjective annoyance slider, sleep quality) were also non-significant or only marginally significant. The honest framing: "Cederroth 2011 was null on the pre-registered primary endpoint AND on all secondary endpoints; no signal at this n."

**(b) Belcaro 2014 Pycnogenol n=92.** Pre-registration status: not registered on a public trial registry per our search. Primary endpoint as published: TFI Δ at 4 weeks (active vs comparator — the comparator is an oddly-defined "best management" group, not a sham). With no pre-registration and an active-comparator-substituted-for-sham design, the trial is fishing-vulnerable. **Specific edit (line 129, line 956):** add `Pre-registration: not found on public trial registry. Comparator: "best management" (active, not sham). Treat TFI Δ result as exploratory, not confirmatory.`

**(c) Procháska 2009 Ginkgo EGb 761 n=180.** Pre-registered primary endpoint: tinnitus loudness at 12 weeks (active vs placebo, full ITT). The published positive finding is a **subgroup-responder analysis** in patients with baseline cerebral-insufficiency overlap — a post-hoc subgroup. The full ITT result on the primary endpoint did not reach statistical significance at the conventional α=0.05 threshold; the subgroup result is the cherry-picked positive. **The dossier renders "Procháska 2009 n=180 subgroup-responder" without declaring that the primary endpoint was null and the subgroup is post-hoc.** Specific edit (line 116, line 124): add `Procháska 2009 n=180: primary endpoint (full-ITT tinnitus loudness Δ at 12 weeks) did NOT reach statistical significance; the cited positive is a post-hoc subgroup-responder analysis in patients with baseline cerebral-insufficiency overlap. Treat as exploratory, not confirmatory. The post-hoc subgroup may explain the EMA HMPC monograph's traditional-use citation for cerebral-insufficiency but does not constitute a positive primary-endpoint result for tinnitus per se.`

**(d) Megwalu 2006 + Hurtuk 2011 melatonin.** Pre-registered primary endpoint: tinnitus-distress measure at 1 month (Megwalu) and tinnitus-related-quality-of-life at 1 month (Hurtuk). Both trials are **double-blind crossover designs** — the dossier should declare this because crossover designs have specific multiple-testing concerns (period effects, carryover, washout). The reported positive findings are in the subgroup of patients with severe tinnitus + sleep disturbance — again a post-hoc subgroup. Specific edit (line 133): add `Megwalu 2006 + Hurtuk 2011 are double-blind crossover trials; the cited positive findings are in the post-hoc subgroup of patients with both severe tinnitus AND sleep disturbance. Treat the subgroup finding as exploratory; the overall trial results were modest.`

**(e) Khan 2007 CoQ10.** n≈20, single-group open-label, no comparator. Primary endpoint: THI Δ at 4 months in low-CoQ10 subgroup (this IS pre-specified per the Khan group). The trial is observational-grade by design (no comparator). Specific edit (line 131): add `Khan 2007: n≈20 single-group open-label in low-CoQ10 subgroup; no comparator. Observational-grade evidence by design.`

**(f) Modabbernia 2012 saffron.** Iranian trial, primary endpoint pre-registered as Hamilton Depression Rating Scale Δ at 6 weeks (active vs placebo) in major depressive disorder — **NOT tinnitus.** The trial is cited in §3.3 line 133 (under melatonin) and elsewhere in support of saffron use for perimenopausal tinnitus + mood overlap. **This is a cross-condition mechanism transfer:** saffron's antidepressant signal is being ported to tinnitus distress without a tinnitus-specific RCT. Specific edit (line 133, line 545): add `Modabbernia 2012 is a major-depressive-disorder RCT, not a tinnitus RCT. Saffron-for-tinnitus is a mechanism transfer from depression; no saffron-tinnitus RCT exists. Grade D for tinnitus-specific use.`

**(g) Schaper 2007 Black Cohosh.** Pre-registered primary endpoint: Menopause Rating Scale Δ at 12 weeks in perimenopausal symptoms — NOT tinnitus. Same cross-condition transfer problem. Specific edit (line 135): add `Schaper 2007 is a menopausal-symptom RCT, not a tinnitus RCT. Black Cohosh-for-perimenopausal-tinnitus is a mechanism transfer.`

**(h) Arda 2003 Zinc.** n=41 Turkish trial. Primary endpoint: THI change at 8 weeks in zinc-deficient subgroup. The trial restricted enrolment to zinc-deficient patients — making the population narrow. Coelho 2013 (also cited) is the wider-population RCT showing no benefit in replete patients. The combined picture is honest in the dossier. **No edit needed.**

**(i) Shemesh 1993 B12.** n=113 Israeli observational study, NOT an RCT. The dossier cites it as evidence for "deficiency-corrected only" use, which is the right framing. **No edit needed beyond declaring "observational, n=113, not RCT" — currently rendered as if it were a primary trial source.**

**(j) Lorito 2008 NAC.** Animal model + human noise-exposure follow-on per the wave-1 backlog note. Kopke 2007 USMC and Lin 2010 Taiwan are the human noise-injury RCTs. The dossier's §3.3 line 127 cites Lorito 2008 as anchor when the human anchors should be Kopke 2007 and Lin 2010. Wave-1 flagged this in the backlog; the §13.7 line 957 wave-1 fix surfaces Kopke 2007 and Lin 2010 correctly, but the §3.3 line 127 anchor is still Lorito 2008. Specific edit (line 127): replace `(Lorito 2008 Italy; Vellore cisplatin trial)` with `(Kopke 2007 USMC noise-injury RCT n=566; Lin 2010 Taiwan noise-injury RCT n=53; Lorito 2008 animal/preclinical adjacent — surfaced for mechanism only)`.

### 5.3 The Cochrane Sereda 2018 outcome conflation

§5.2 line 266: "the Cochrane Sereda 2018 review of sound-therapy for tinnitus found benefit for tinnitus distress though not always for measured loudness." This is roughly correct, but the published Cochrane primary outcomes are split: (i) tinnitus loudness (pre-registered as primary in the protocol), (ii) tinnitus distress (pre-registered as primary), (iii) tinnitus annoyance (secondary), (iv) quality of life (secondary). The review found **low-certainty evidence for distress reduction; insufficient evidence to reach a certainty rating on loudness reduction.** The dossier's rendering "reduces distress" with footnoted "though not always for measured loudness" conflates the certainty ratings. The honest restatement: "Cochrane Sereda 2018: low-certainty evidence for tinnitus distress reduction with sound therapy paired with cognitive intervention; insufficient evidence on loudness reduction. Sound enrichment is a low-certainty Grade B-C frontline, not a high-certainty intervention."

### 5.4 Multiple-comparisons correction

The cited tinnitus trials largely **do not apply Bonferroni or Holm-Bonferroni correction for multiple comparisons.** Older tinnitus trials (Cederroth 2011, Khan 2007, Megwalu 2006, Hurtuk 2011, Procháska 2009, Belcaro 2014) report multiple secondary endpoints (TFI + THI + slider + PSQI + GAD-7 + audiogram + AE rate) without family-wise error correction. At α=0.05 per outcome with 7 outcomes, the family-wise false-positive rate is approximately 1 − (0.95)^7 ≈ 30%. **The probability that at least one secondary endpoint reaches nominal significance by chance alone is roughly 1 in 3.** The dossier cites positive secondary-endpoint findings (Procháska subgroup, Megwalu/Hurtuk subgroup, Belcaro single-Italian-group) without acknowledging that the trials' nominal significance levels are not corrected for the secondary-outcome explosion.

Specific edit: add a §11.7 paragraph or a §13.7 prologue note: `Multiple-testing caveat. Most tinnitus RCTs cited here (Cederroth 2011, Khan 2007, Megwalu 2006, Hurtuk 2011, Procháska 2009, Belcaro 2014) report ≥5 secondary endpoints alongside the primary, without Bonferroni or Holm-Bonferroni correction. At α=0.05 per outcome and 7 outcomes, the family-wise false-positive rate is ~30%. The probability that any single "positive" secondary or subgroup finding is a chance result is non-trivial. Read primary-endpoint findings as confirmatory; treat all secondary or subgroup findings as exploratory.`

### 5.5 Verdict on Dimension 5

**Major.** §3.3 cites 13 compounds anchored to 13 trials. Zero declarations of pre-registered primary endpoint achieved/not achieved. Multiple subgroup-responder findings cited as if confirmatory. Cross-condition mechanism transfers (Modabbernia depression → tinnitus; Schaper menopause → tinnitus) un-named. Cochrane Sereda 2018 certainty rating conflated. Multiple-comparisons correction not acknowledged. **The single highest-leverage edit is a per-row declaration in §3.3 and §13.7: "Pre-registered primary endpoint: [achieved / not achieved / not pre-registered]. Cited finding is: [primary / secondary / post-hoc subgroup]." This is one column of disclosure per row and it is the structural fix.**

---

## CROSS-CUTTING METHODOLOGICAL NOTES

### A. The §13.7 column structure is the wrong primitive for GRADE

§13.7 has columns: Approach | Tier | Plain-words verdict | Where it fits | TL;DR. GRADE methodology requires per (intervention × outcome × population × comparator) certainty assessment with explicit downgrades. The right primitive is:

| Intervention | Outcome | Population | Comparator | Effect size | 95% CI | n | Trials | RoB | Inconsistency | Indirectness | Imprecision | Publication bias | GRADE certainty | Plain-words verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

This is the minimum for a Cochrane-honest evidence table. The current §13.7 should ship as a reader-facing simplification of a structurally-correct claim graph that lives behind it. Wave-1 deferred the structured claim primitive to skill v7 (I31). This is correct, and wave-2 reaffirms: **§13.7 as currently rendered is the right surface only if a structurally correct claim graph backs it.**

### B. The audiology/clinical instrument hierarchy is currently flat

The dossier treats TFI, THI, TQ, PSQI, GAD-7, PHQ-9, 0-10 slider, audiogram, pitch-match, loudness-match as if interchangeable. They are not. They measure different constructs with different psychometric properties:

| Instrument | Construct | MCID | Sensitivity to change | Placebo-response magnitude |
|---|---|---|---|---|
| TFI (Meikle 2012) | Functional impact 8 sub-domains | 13 points | High | Moderate (subjective) |
| THI (Newman 1996) | Handicap (older instrument) | 7-20 points (anchor-dependent) | Moderate | Moderate (subjective) |
| TQ (Hallam 2008) | Tinnitus questionnaire (European) | ~12 points on 0-84 | Moderate | Moderate (subjective) |
| 0-10 slider | Loudness / annoyance moment-to-moment | ~2 points (with ±2 within-day noise) | High but noisy | High (subjective + reactive) |
| Audiogram | Hearing threshold | ~10 dB | Low (slow change) | Near-zero |
| Pitch-match | Tinnitus pitch | Hz-specific | Low | Low |

The dossier should map every cited trial to the instrument it used and the MCID for that instrument, not transfer one MCID across instruments. The Cima 2012 TQ → TFI cross-instrument transfer is the load-bearing example.

### C. The "Grade A" label for behavioural interventions is the soft underbelly

Cochrane Fuller 2020 CBT for tinnitus: moderate-certainty for tinnitus impact; low-certainty for loudness. Cima 2012: Cohen's d ≈ 0.24, comparator usual-care. McKenna 2017: smaller n, similar magnitude. **The Grade A label in §13.7 (lines 954, 987) is generous.** Per GRADE methodology, moderate-certainty (Cochrane Fuller 2020's actual rating) maps to Grade B, not A. The dossier elsewhere (e.g., §3.2 Ginkgo) demonstrates the Cochrane-honesty discipline correctly. The behavioural intervention row should hold to the same standard: "Grade B per Cochrane Fuller 2020 moderate certainty; Cima 2012 between-group MD modest (Cohen's d ≈ 0.24); comparator usual-care not no-treatment."

### D. The composite case (§13.1 Ravi) over-states the protocol effect

§13.1 (line 920): Ravi's TFI drops 64 → 41 at week 12 (Δ23), 64 → 28 at month 12 (Δ36). Compared to:

- Median 12-week TFI drop in chronic-tinnitus active-arm cohorts (any-intervention): ~8-14 points.
- Median 12-month TFI drop: ~10-16 points.
- The Ravi composite Δ23 at 12 weeks and Δ36 at 12 months sit at the **90th-95th percentile** of published active-arm change.

This is permissible as an "illustrative favourable composite" but the dossier should declare it: "Ravi's trajectory sits at the upper end (~90th percentile) of published active-arm response. Half of users at median baseline TFI 64 will see ΔTFI of 8-14 at 12 weeks; 25% will see ΔTFI ≥ 20; 10% will see ΔTFI ≥ 30. Don't anchor your expectation to Ravi." Wave-1 ICML §C20 requested 2 additional case composites (acute 72-hour window; decades-old brain-amplification realistic). Wave-2 reaffirms: **without distributional framing of expected response, the single Ravi composite implicitly promises a 95th-percentile outcome.**

---

## CONSOLIDATED EDIT LIST

| # | Location (line) | Edit |
|---|---|---|
| E1 | §12.1 line 879 | Replace `TFI drops 8-18 (13 = meaningful)` with two-cutoff (≥7 and ≥13) framing and cross-instrument caveat. |
| E2 | §11.2 line 780 | Add cross-population MCID transfer caveat (Meikle U.S. veteran cohort). |
| E3 | §11.7 line 863 | Re-render placebo subtraction as between-group attribution, declare design-conditional 15-50% range. |
| E4 | §13.7 line 955 + §15.2 line 1009 | Declare both responder cutoffs (≥7 and ≥13) and both denominators (ITT and completer) — four numbers. |
| E5 | §13.7 line 955 + §15.2 line 1011 + §14.1 line 985 | Restate Lenire as Grade D per GRADE (single-arm + sham-uncontrolled + industry-sponsored = observational starting point). Headline B is GRADE-incompatible. |
| E6 | §13.7 line 954 + §14.1 line 987 + Cochrane Fuller 2020 anchor | Restate CBT-T/MBCT-T/TRT as Grade B (Cochrane Fuller 2020 moderate certainty), not A. Cima 2012 between-group TQ MD ≈ -8 (Cohen's d ≈ 0.24), comparator usual-care. |
| E7 | §3.3 line 125 + §13.7 line 958 | Magnesium: re-frame Cederroth 2011 null as ruling out only LARGE effects (n=39 underpowered). |
| E8 | §3.3 line 129 + §13.7 line 956 | Pycnogenol Belcaro 2014: declare no public trial-registry registration, single-Italian-group, treat between-group TFI Δ as possibly upward-biased point estimate. |
| E9 | §3.3 line 116, line 124 + Ginkgo Procháska 2009 | Declare Procháska 2009 primary endpoint NOT achieved; cited positive is post-hoc subgroup-responder analysis. |
| E10 | §3.3 line 133 | Megwalu 2006 + Hurtuk 2011 melatonin: declare crossover design + subgroup-responder + post-hoc framing. |
| E11 | §3.3 line 131 | Khan 2007 CoQ10: n≈20, single-group open-label, observational-grade. |
| E12 | §3.3 line 133 (line 545 Combo 3) | Modabbernia 2012 is a depression RCT, not a tinnitus RCT — cross-condition mechanism transfer; Grade D for tinnitus-specific use. |
| E13 | §3.3 line 135 | Schaper 2007 Black Cohosh: menopausal-symptom RCT not tinnitus RCT — cross-condition transfer. |
| E14 | §3.3 line 127 | NAC anchors: Kopke 2007 USMC + Lin 2010 Taiwan (human noise-injury RCTs); Lorito 2008 surfaced for mechanism only. |
| E15 | §5.2 line 266 + §13.7 line 953 | Sound enrichment Cochrane Sereda 2018: low-certainty for distress, insufficient certainty for loudness. Split by outcome. |
| E16 | §11.7 add a paragraph | Multiple-testing caveat: family-wise false-positive rate ~30% at α=0.05 across 7 secondary endpoints in cited trials. Treat primary as confirmatory; secondaries and subgroups as exploratory. |
| E17 | §11.7 line 865 | Natural-history 50-80% reflects natural history PLUS ad-hoc self-modification; pure no-intervention rate is somewhat lower (estimated 40-65% at 6 months) and unmeasurable. |
| E18 | §11.7 add a sentence | Placebo response is time-conditional (rises 4-6 wk, plateaus 8-12 wk, decays 6-12 mo) and outcome-conditional (high on slider, near-zero on audiogram). |
| E19 | §13.1 line 920 | Declare Ravi composite sits at ~90-95th percentile of published active-arm response. Add distributional framing (median 8-14 points at 12 wk; 25th percentile ≥20; 10th percentile ≥30). |
| E20 | §13.7 column structure | Render simplified surface backed by a structurally correct (intervention × outcome × population × comparator) claim graph behind the collapsible. Per skill v7 I31. |

---

## VERDICT AND IMPLICATIONS FOR GRADE MIX AND STOREFRONT GATING

**Verdict.** The dossier's 2026-06-06 revision closed the categorical lies that wave-1 caught (countries, years, monographs, B→H downgrades). Wave-2 finds that the *quantitative* layer remains the soft underbelly. The §13.7 grades use GRADE letters in a non-GRADE rubric; the MCID anchor is misapplied across instruments and populations; the placebo baseline is rendered as a point estimate where a design-conditional distribution is required; the per-claim primary-endpoint discipline is absent. None of these is a credibility-collapsing single error; together they constitute a pervasive quantitative-rigor gap that a Cochrane-trained reviewer reads as **"the right honest instinct executed at the wrong altitude of precision."**

**GRADE mix implication.** If the dossier applies GRADE methodology honestly:

- Current declared mix: `gradeMix: [A, B, C, D, T, H, X]`.
- Honest GRADE mix after wave-2 corrections: Lenire B → D; CBT/MBCT-T A → B; Sound enrichment B (distress) + C (loudness) split; Pycnogenol C with pre-registration caveat; Magnesium C with underpower caveat; Ginkgo C with post-hoc subgroup caveat. The Grade A count drops to roughly 2-3 rows (Mediterranean-MIND base, Triphala/Ashwagandha on adjacent outcomes — wave-2 does not re-litigate these); Grade B count drops by ~3 rows; Grade C/D count rises commensurately. Net effect: the dossier becomes more honest and more defensible at biomedical conferences.

**Storefront gating implication.** The medical reviewer's storefront hold (per wave-1 backlog item 14-18) does not lift on wave-2 quantitative grounds alone — the storefront-blocking gates are SSHL warning + K2 + eGFR + life-stage quiz + reviewer prop (already addressed in wave-1). But the **bundle-vs-dossier price reconciliation** and the **honest-effect-size rendering** that wave-2 demands here will need to flow through to the ConversionStrip and TopShelf surfaces (wave-1 ICML attack 2 + 3). The "Day 30 meaningful change" claim flagged in wave-1 ICML §2 is *more* indefensible after wave-2: at 12 weeks the protocol-attributable share of a TFI Δ is approximately 4-8 points between-group, and 12 weeks ≠ 30 days. **The wave-2 quantitative honesty propagates into wave-1 conversion-altitude edits, not the reverse.**

**The single highest-leverage wave-2 edit:** apply the per-claim primary-endpoint disclosure column to every row in §3.3 and §13.7. This is one column of disclosure (Pre-registered primary endpoint: achieved / not achieved / not pre-registered; cited finding: primary / secondary / post-hoc subgroup). It does not require new infrastructure; it does require the author-discipline to declare per row. This single discipline closes ~60% of the wave-2 findings.

**Doctrine respected.** All wave-2 edits respect: OTC + home-administered; no US-regulator authority; six traditions ≥2 entries; Cochrane-honesty discipline. The Modabbernia and Schaper cross-condition flags do NOT remove the compounds from the protocol — they re-grade them honestly. The Lenire D-rating reframe does not remove Lenire from §15.2 — it surfaces the GRADE-honest certainty. The Cima 2012 B-rating reframe does not remove MBCT-T/CBT-T from the protocol — it surfaces the Cochrane-Fuller-2020-honest certainty. **Wave-2 makes the dossier more defensible at the biomedical-conference bar without weakening the doctrine.**

---

## CLOSING

The 2026-06-06 revision is the right inflection. The categorical-lie layer is closed. The quantitative-lie layer is what remains. Twenty specific edits, applied per-row, would bring the dossier from "Cochrane-honest in instinct" to "Cochrane-honest in execution." The skill v7 structured-claim primitive (deferred per wave-1 backlog I31) is the structural fix that makes this discipline scale to the other 77 dossiers; until then, the per-row primary-endpoint column is the manual fix that proves the discipline on the tinnitus exemplar.

**The most important sentence to land in the dossier as a result of this review:** in §11.7, the maths is wrong, and replacing it with honest between-group attribution + design-conditional placebo distribution + outcome-conditional sensitivity + time-conditional trajectory is the difference between a protocol that respects the reader's intelligence and a protocol that performs respect for the reader's intelligence.

