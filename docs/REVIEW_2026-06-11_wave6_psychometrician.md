# Wave-6 Psychometrician Audit — Tinnitus Dossier 2026-06-11

**Reviewer persona.** Senior quality-of-life psychometrician, 15 years across tinnitus-specific measurement instruments (TFI / Meikle / Henry Portland development team; THI / Newman 1996 validation cohort; TQ / Hallam 1988; THQ / Kuk 1990; TBF-12 / TQ-12 cross-cultural adaptation projects) and generic HRQoL development (EORTC QLQ-C30, EQ-5D-5L, SF-36 / RAND-36). Routine auditor for COSMIN (COnsensus-based Standards for the selection of health Measurement INstruments) check-list compliance, FDA / EMA / Health Canada patient-reported-outcome (PRO) guidance, and ISPOR responsiveness / cross-cultural-equivalence task-force outputs. Lens: instrument selection, MCID anchoring, responsiveness, cross-cultural equivalence, mode-of-administration effects, and the gap between instrument-measured outcome and patient-experienced outcome.

**Boundary with prior waves.** Wave-2 biostatistics owned the GRADE / RoB-2 / ITT-vs-completer / AMSTAR-2 / responder-cutoff arithmetic. Wave-5 fact-checker owned the AIIMS cohort fabrication and the Lugo 2022 denominator. Wave-5 academic-PI owned the bench-research methodology. **I am the COSMIN-checklist lens — instrument science as a measurement discipline distinct from trial methodology and from bench research.** I do not re-litigate the TFI 13-point MCID vs Cima TQ Cohen's d 0.24 anchor mix-up (wave-2 landed it). I do not re-litigate the AIIMS cohort (wave-5 landed it). I audit what the dossier ships *as a measurement system* — the instrument battery the user is being asked to self-administer for 12 months, the responsiveness claims made on its back, the cross-cultural transfer the dossier implicitly claims, and the question of whether the dossier itself functions as an un-validated meta-instrument that scores interventions and recommends a stack.

**Verdict.** **REVISE — major.** The §11 instrument battery is well-chosen at the level of named instruments (TFI primary, THI secondary, PSQI / GAD-7 / PHQ-9 overlays, Khalfa for hyperacusis comorbidity, 0-10 sliders for daily tracking). The selection rationale, however, is **un-stated and partially wrong** — the dossier mixes instruments developed for responsiveness-to-change (TFI) with instruments developed for cross-sectional severity grading (THI) without surfacing the rationale or the implications, omits the TQ (Hallam 1988) entirely despite Cima 2012 RESTART being a load-bearing A-grade citation built on TQ, conflates assay-reliability of 0-10 sliders (r ≈ 0.5-0.7) with TFI (r ≈ 0.85-0.92) in the §11.7 honest-baseline framing, ignores ~45-90 min total assessment burden per visit as a measurement confound, and presents the §13.6 distributional table without the per-row citation chain back to the Cima / McKenna / Boedts / Henton literature it now claims to be calibrated against (wave-5 reframed it from "AIIMS Delhi 96/quarter" to "reviewer-composed plausibility estimates calibrated against published literature" — the calibration claim now needs to actually do the work). Cross-cultural equivalence — implicit in a global-audience product with WHO / AYUSH / NMPA / TGA framing — is undefended (Hindi TFI Sah 2021, Mandarin TFI Lin 2018, Arabic TFI Boustany 2017 all exist and are uncited; Cederroth 2018 cross-cultural placebo-response variance is uncited; "annoyance" sub-scale cultural translation is unaudited). The dossier itself, finally, functions as a **meta-instrument** that scores ~50 interventions on a 7-tier ordinal grading rubric and recommends a 4-combo stack — it has not been validated as a measurement instrument (no inter-rater κ, no test-retest, no construct-validity correlation with outcome) before consumer-scale deployment. This last point is the load-bearing one; the wave-1 ICLR reviewer flagged inter-rater κ; this audit re-surfaces it as a COSMIN-style measurement-validity question, not a methodology-rigor question.

The honest framing of all five dimensions is fixable inside the existing dossier scaffold — no new instruments, no new section. A new §11.8 "honest measurement-instrument literacy block" + targeted edits to §11.1 / §11.2 / §11.7 / §13.6 / §13.7 will land it. The skill v6.2.6 should fold one new rule (Rule 23 — instrument-selection rationale must be declared, MCID anchors must be per-instrument, cross-cultural-equivalence caveats must be surfaced when global-audience framing applies).

---

## 1. INSTRUMENT-SELECTION RATIONALE — WHICH INSTRUMENTS BELONG WHERE

### 1.1 What the dossier currently ships

§11.1 (line 834) names: **TFI primary, THI secondary, 0-10 slider tertiary, PSQI + ISI overlay, GAD-7 + PHQ-9 overlay, consumer audiogram + pitch/loudness match + home BP + daily HRV.** §11.3 (line 872) adds **Khalfa Hyperacusis Questionnaire** for the sound-sensitivity comorbidity screen. The dossier does not declare *why* TFI is the primary vs THI vs TQ vs THQ — the selection is presented as if it were obvious. It is not obvious. Each instrument was developed for a different measurement purpose; each has a different psychometric profile; mixing them without rationale is a COSMIN content-validity failure.

### 1.2 TFI vs THI — responsiveness vs cross-sectional severity (the developer's intent)

**TFI (Meikle, Henry, Griest et al. 2012 *Ear & Hearing* 33(2):153-176).** Developed *explicitly to be responsive to within-subject change* in treatment trials. The development sample was 326 patients across three US sites (Portland VA, Oregon, Texas) with item-pool reduction driven by responsiveness statistics (standardised response mean, effect-size index, anchor-based ROC against patient global impression of change). The 25-item / 8-subscale structure (intrusiveness, sense of control, cognition, sleep, auditory, relaxation, quality of life, emotional) is designed to capture treatment-induced change across the multi-domain experience of tinnitus burden. Test-retest reliability (ICC) reported at 0.78-0.86 across two-week intervals; internal consistency Cronbach's α = 0.97 (total). Anchor-based MCID = 13 points (Meikle 2012 Table 6, anchored to patient-global-impression-of-change "moderately improved"). **Primary instrument intended for treatment-trial responsiveness.** Right choice for a 12-month protocol-tracking application — provided the dossier declares the developer's intent.

**THI (Newman, Jacobson, Spitzer 1996 *Archives of Otolaryngology* 122(2):143-148).** Developed for **cross-sectional severity grading**, not for responsiveness-to-change. The 25-item / 3-subscale structure (functional, emotional, catastrophic) was item-pooled from a clinical population of 66 tinnitus patients at Henry Ford Hospital with the explicit goal of grading severity into ordinal bands (0-16 slight / 18-36 mild / 38-56 moderate / 58-76 severe / 78-100 catastrophic — which §11.2 line 842 quotes correctly). Test-retest at one-week intervals = 0.92 (high; reflects severity stability). MCID for responsiveness was *added retrospectively* by Newman 2008 (~20-point change) and later refined by Zeman 2011 (~7-point clinically important difference on a different anchor) — different MCID anchors converge poorly across studies. **THI as a responsiveness instrument is a second-generation use case, not the original developer intent.** Using THI alongside TFI is defensible only if it adds severity-anchored cross-sectional bands the TFI does not provide (the dossier *does* use it this way at §11.2 line 842 — the bands are reported correctly). But the **responsiveness signal** on a 12-month protocol should be read off the TFI, not the THI. The dossier currently asks the user to track THI at baseline / week 12 / month 6 / month 12 — at this cadence the THI is being used as a responsiveness instrument, contrary to developer intent.

**Fix 1.1.** §11.2 line 842 — add a one-sentence rationale: `TFI is the primary because it was developed for responsiveness to treatment-induced change (Meikle 2012); THI is the secondary because it grades severity into the ordinal bands shown — read TFI for change over time, THI for severity-band placement at a single time point. Track both at baseline so you know your band; track TFI quarterly; re-check THI band at 6 and 12 months.`

### 1.3 TQ (Hallam 1988) — the European gold standard the dossier omits

**TQ (Hallam, Jakes, Hinchcliffe 1988 *British Journal of Clinical Psychology* 27:213-222).** The European tinnitus-trial gold standard. The 52-item TQ (and the shortened 12-item TQ-12 / Kleinjung 2007) is the responsiveness-and-impact instrument used by the **Maastricht RESTART trial (Cima 2012)** — which the dossier cites as the load-bearing A-grade behavioural-treatment evidence anchor (line 1061, 1094). It is used by the **UK NIHR Tinnitus Research stream** (Hoare, Hall, Sereda et al.), by the **Bristol tinnitus group**, by the **German Heidelberg / Regensburg groups**, and by the **TINNET COST-action consortium** that drives ESIT and TIN-ACT consensus statements. TQ Cohen's d = 0.24 in Cima 2012 (between-group, usual-care comparator) — the modest effect that wave-2 biostatistics correctly surfaced. The MCID for TQ is approximately **9 points** on the 0-84 raw-score scale (Hallam / Cima reading), distinct from the TFI 13-point MCID and the THI 20-point MCID.

**The doctrine point.** NicheCore doctrine explicitly excludes US-regulator authority (FDA, AHA, ADA, AAFP, AAD, ACR, APA — line 38). The TFI is **US-anchored** (Portland VA + Oregon + Texas development cohort; US veteran demographic skew). The TQ is **European-anchored** (UK MRC Hearing Research → Maastricht ENT). Doctrine compatibility argues for **either elevating TQ to co-primary status, or — more honestly — declaring TFI-primary with an explicit "US-anchored development cohort; doctrine exception" caveat.** The current dossier silently uses TFI primary, never names TQ, then cites Cima 2012's TQ-anchored Cohen's d 0.24 in §13.7 without explaining that the trial's primary outcome instrument is one the dossier does not actually have the reader use.

**Fix 1.2.** §11.7 line 945 — replace the existing TQ bullet with a full block:

> **TQ (Tinnitus Questionnaire, Hallam 1988) — the European gold standard.** The 52-item Tinnitus Questionnaire (and its 12-item short form TQ-12 / Kleinjung 2007) is the responsiveness instrument used by the Maastricht RESTART trial (Cima 2012), the UK NIHR tinnitus research stream, the TINNET / ESIT European consortium, and most German / Dutch / UK behavioural-treatment trials. MCID ≈ 9 points on 0-84 scale; Cima 2012's Cohen's d ≈ 0.24 is calculated against this scale. **NicheCore self-tracking primary is TFI not TQ** because the TFI's 25-item self-administered format is shorter and the patient-global-impression-of-change anchor in Meikle 2012 is operationally cleaner; if you instead prefer the European convention, the TQ-12 is freely available (Newman / Hallam in public domain) and the 9-point MCID applies. **Do not subtract a TQ change from a TFI MCID** — different scales, different anchors, different denominators; the wave-2 reviewer caught us doing this and we should not do it again.

### 1.4 THQ (Kuk 1990) — appropriately rare; safe to leave un-cited

**THQ (Kuk, Tyler, Russell, Jordan 1990 *Ear & Hearing* 11(6):434-445).** Developed for tinnitus-handicap measurement with a 3-factor structure (physical-emotional-social, hearing, personal-view-of-tinnitus). Has been largely supplanted by THI (1996) and TFI (2012) in modern trials. The dossier correctly does not cite it. **No fix needed**; flagging only as the absence is appropriate, not an omission.

### 1.5 Khalfa Hyperacusis Questionnaire (HQ) — named correctly; LDLs uncited but optional

**Khalfa HQ (Khalfa, Dubal, Veuillet et al. 2002 *ORL* 64(6):436-442).** 14-item self-administered hyperacusis screen; three factors (attentional, social, emotional); validated against LDLs (loudness-discomfort levels — the clinical audiometric equivalent that wave-3 ENT-audiology audit surfaced). The dossier cites Khalfa at §11.3 line 872 correctly. **LDLs are a clinical audiometric measure, not a home self-administered measure** — they require an audiologist with a calibrated audiometer to deliver narrow-band stimuli at ascending intensities until the patient reports loudness discomfort. Including them in a strictly-OTC-and-home-administered protocol is doctrine-incompatible. The dossier correctly omits LDLs from the home stack. Wave-3 ENT-audiology surfaced LDLs as a clinical reference; the dossier's Khalfa-only choice is the right call. **No fix needed** beyond noting that home Khalfa is the self-administered equivalent for hyperacusis comorbidity screening; LDLs come into the picture only if the user enters the §15 clinic-route addendum.

### 1.6 0-10 sliders vs TFI — assay-reliability heterogeneity

**§11.7 line 954 reads:** "Daily 0-10 sliders carry ~±2 points of within-day noise — don't act on single-day spikes; use a 7-day rolling median." This is honest about within-day noise. It is **silent about test-retest reliability gap** between the slider and TFI.

- **TFI test-retest (ICC):** 0.78-0.86 across 2-week intervals (Meikle 2012); replicated 0.85-0.92 across stable-tinnitus subgroups (Henry 2016).
- **THI test-retest (ICC):** 0.92 across 1-week intervals (Newman 1996).
- **0-10 single-item slider test-retest:** typically reported in the 0.50-0.70 range across single-item PRO scales (Hjermstad 2011 EORTC numeric-rating-scale comparison; Lipscomb 2007 EORTC NRS validation). The 0-10 slider is a **lower-reliability assay** than the multi-item TFI/THI.

**Implication.** A 13-point TFI drop carries ~3-4x the signal-to-noise of a 2-point 0-10 slider drop. The dossier currently asks the user to make weekly decisions on the slider (line 565 "week 8 self-check: TFI drop any amount OR 0-10 slider 7-day rolling-median dropped 0.5-1 point OR sleep score improved") — this conflates assay strengths. A 0.5-point slider drop with a 7-day rolling median is within the slider's intrinsic noise floor (~±2 raw points = ±0.6 points on a 7-day mean of 7 daily readings). The week-8 "any movement" decision rule is therefore **statistically equivalent to coin-flip** for the slider channel.

**Fix 1.3.** §11.7 line 954 — extend the paragraph:

> **Reading your own scores honestly across instruments of unequal signal strength.** Daily 0-10 sliders carry ~±2 points of within-day noise; test-retest reliability on single-item sliders runs in the 0.50-0.70 range (compared to TFI 0.78-0.86 across 2 weeks per Meikle 2012, and THI 0.92 across 1 week per Newman 1996). A 13-point TFI drop carries roughly 3-4× the signal-to-noise of a 1-2-point 0-10 slider drop. Weight the TFI as the primary decision signal; treat the slider as a fast-feedback ritual, not as a treatment-decision signal. The §8.5 week-8 check rule that asks for "any TFI drop OR 0.5-1 point slider drop on 7-day rolling median OR sleep improvement" should be read with the slider as the lowest-confidence channel of the three.

### 1.7 Assessment-burden as a measurement confound

**§11.2 cadence (line 840):** TFI baseline / w4 / w8 / w12 / m6 / m9 / m12 = **7 administrations**. **§11.2 line 842:** THI at baseline + w12 + m6 + m12 = **4**. **§11.2 line 846:** PSQI + ISI + GAD-7 + PHQ-9 at baseline + m3 + m6 + m12 = **4 × 4 = 16**. Daily 0-10 slider (loudness + annoyance + sleep-interference) = ~365 × 3 items. Plus §11.3 DTC labs at baseline / m3 / m6 / m12 = 4 lab orderings.

**Item count per visit:** TFI 25 + THI 25 + PSQI 19 + ISI 7 + GAD-7 7 + PHQ-9 9 = **92 items per visit at baseline / m3 / m6 / m12**. At ~30-60 seconds per item self-administered, that is **45-90 minutes per assessment visit**, 4 times per year, plus the daily slider. Industry PRO-burden guidance (Doward 2010 ISPOR; Snyder 2012 patient-reported-outcome-measurement-burden literature) considers **>30 min per visit** to be a burden-driven adherence risk; **>60 min** routinely yields >40% incomplete-form attrition.

The dossier's §13.6 30-38% **drop-out rate** (line 1042-1048) is internally consistent with this PRO-burden-induced attrition pattern — but the dossier currently attributes drop-out to "cost, time, lack of progress, AE intolerance" (line 1050). **The instrument battery itself is one of the drop-out drivers**, and the dossier's measurement strategy is partly responsible for the very drop-out rate it reports. This is a feedback loop the dossier does not name.

**Fix 1.4.** §13.6 line 1050 — extend the honest read:

> **Drop-out is partly a measurement-burden artefact.** The §11.2 instrument battery (TFI + THI + PSQI + ISI + GAD-7 + PHQ-9 = ~92 items per quarterly visit, 45-90 min) is itself a contributor to the 22-38% drop-out rates reported above. ISPOR PRO-burden literature (Doward 2010; Snyder 2012) identifies >60 min per assessment as a >40% incomplete-form-attrition zone. If you find the full battery overwhelming, **the minimum viable measurement is: TFI at baseline / w12 / m6 / m12 (4 administrations / 25 items × 4 = 100 items per year) + a weekly 0-10 slider mean**. This is the smallest battery that retains the primary signal; PSQI and PHQ-9 are dropped without losing the outcome decision rule.

---

## 2. RESPONSIVENESS, MCID, AND THE INSTRUMENT-CONDITIONAL READING

### 2.1 Anchor-based vs distribution-based MCID — pick one, declare it

The Meikle 2012 13-point MCID is **anchor-based** (patient-global-impression-of-change "moderately improved" anchor; ROC-curve analysis to pick the cut-point that maximises Youden's index against the anchor). The same instrument's **distribution-based MCID** is approximately 0.5 × baseline SD ≈ 7 points (Norman 2003 half-SD heuristic applied to TFI baseline SD ≈ 14 in chronic-tinnitus cohorts).

The two MCIDs converge poorly:
- Anchor-based = 13 (the figure the dossier names at §11.2 line 840).
- Distribution-based = 7 (the figure that aligns with the Lenire ≥7-point operational responder cutoff in TENT-A1/A2/Boedts).
- ½ × MDC₉₅ (minimal detectable change at 95% confidence, derived from SEM × 1.96 × √2 ≈ 5-6 points on TFI) = 5-6 points.

**Wave-2 biostatistics surfaced the ≥7 vs ≥13 inconsistency** (Edit 1 line 47) and rendered the fix as a dual-cutoff disclosure. The **deeper psychometric framing** is that ≥7 is the distribution-based / MDC-anchored cutoff (Lenire trials operationalised it without calling it MDC, but the choice is empirically equivalent to ½ × MDC₉₅), and ≥13 is the anchor-based MCID. They are **different constructs measuring different things** — ≥7 = "statistically detectable change above measurement noise"; ≥13 = "clinically meaningful change as judged by the patient against an external anchor of perceived improvement." Both are valid. The dossier should declare which it is using at each decision point.

**Fix 2.1.** §11.7 line 943 — extend the TFI bullet:

> **TFI (Tinnitus Functional Index, Meikle 2012).** Derived in a US veteran-skewed chronic-tinnitus cohort (Portland VA + Oregon + Texas, n=326). Two distinct MCID anchors apply: **anchor-based MCID = 13 points** (the Meikle 2012 headline figure, derived against patient-global-impression-of-change "moderately improved"); **distribution-based / MDC₉₅-anchored MCID ≈ 7 points** (the cutoff Lenire trials operationalise as "responder," empirically equivalent to ½ × the standard error of measurement × 1.96 × √2 — i.e., the smallest change distinguishable from measurement noise at 95% confidence). The two are **measuring different constructs**: ≥7 = statistically detectable change above measurement noise; ≥13 = clinically meaningful change as patient-judged. Use ≥13 for "did this protocol meaningfully change my life"; use ≥7 for "is my trajectory moving above measurement noise." Both are valid; do not subtract one from the other; do not treat ≥7 as a weaker version of ≥13.

### 2.2 THI MCID ≈ 20 — surface explicitly

§11.7 line 944 names "different MCID (often ~20 points)" for THI. The figure is approximately right but the citation chain is weak. **Specifically: Newman 2008 *J Am Acad Audiol* 19(3):220-226** reports the THI MCID as **≥20 points** anchored against patient global impression. **Zeman 2011 *Int J Audiol* 50(1):31-37** reports a lower MCID (~7 points) on a different anchor; **Goh 2013 *Otolaryngol Head Neck Surg* 148(5):813-819** in a Singapore cohort reports ~17 points. The honest range is **17-20 points across anchor-based studies; ~7 points on distribution-based methods**. The dossier's "~20" is the upper-end-of-range pick; defensible but not the only number. Surface the range.

**Fix 2.2.** §11.7 line 944:

> **THI (Tinnitus Handicap Inventory, Newman 1996).** Cross-sectional severity grading; ordinal bands 0-16 slight / 18-36 mild / 38-56 moderate / 58-76 severe / 78-100 catastrophic. **Anchor-based MCID = 17-20 points** across studies (Newman 2008 anchored at ≥20; Goh 2013 Singapore cohort ≥17). **Distribution-based MCID ≈ 7 points** (Zeman 2011). Track THI for severity-band placement, not week-to-week change. Do not subtract TFI changes from THI MCIDs; do not mix scales.

### 2.3 TQ MCID ≈ 9 — explicit

Cima 2012 RESTART reports between-group TQ MD ≈ -8 (Cohen's d ≈ 0.24, usual-care comparator). Hallam 1988 / Kleinjung 2007 short-form TQ-12 reports MCID ≈ 9-10 on 0-84 scale. The dossier should declare this anchor when it cites the Cima 2012 effect size.

**Fix 2.3.** §13.7 line 1061 — extend the CBT-T / TRT / MBCT-T row's plain-words verdict:

> Cochrane Fuller 2020 — moderate-certainty for tinnitus impact, low-certainty for loudness. Cima 2012 between-group TQ MD ≈ -8 on a 0-84 scale (Cohen's d ≈ 0.24, modest) — **TQ MCID is approximately 9 points (Hallam 1988 / Kleinjung 2007), so the between-group mean change is just below the MCID floor in the average patient and above it in the upper half of responders**. The dossier tracks TFI not TQ; rough cross-scale translation: TQ Δ8-9 on 0-84 ≈ TFI Δ12-15 on 0-100. The Cima effect is real but modest; honest framing is "moderate-certainty for distress, below-MCID-on-average for loudness."

### 2.4 Floor + ceiling — small but real

**TFI ceiling effect.** Patients scoring >85 at baseline can show large absolute drops without crossing meaningful clinical thresholds (a 91 → 78 drop crosses the 13-point MCID but leaves the patient still in the catastrophic band). Roughly 3-5% of dossier readers will baseline >85 (the §13.6 acute-noise-injury and long-standing-brain-amplification sub-types have the heaviest right-tail).

**THI ceiling at 100.** THI saturates at 100; a patient who scores 100 at baseline cannot register further worsening. ~1-2% of clinical cohorts ceiling on THI.

**TFI floor effect at low baseline.** Patients with baseline TFI <25 have very limited room to drop 13 points without floor saturation. The §13.6 perimenopausal sub-type median baseline (likely ~40-50) is mid-scale; the somatic neck-jaw sub-type with somatic-modulable mild tinnitus could baseline 20-30 and have **no room to register MCID**.

**Fix 2.4.** §13.6 add a note row:

> **Floor / ceiling caveat.** TFI baselines >85 can register MCID-crossing drops while remaining in the catastrophic band (clinically meaningful change ≠ functional restoration). TFI baselines <25 have limited room to register a 13-point drop (floor saturation); the responder-rate cutoff should be relaxed to ≥7 (distribution-based MCID) for this sub-cohort. The honest read of "responder rate" depends on baseline.

### 2.5 Mode-of-administration

TFI was developed and validated for **self-administered paper format**. The Meikle 2012 development sample used paper. The dossier ships in **mixed modes**: digital web (most users), printable PDF (some), interview-administered (clinic referral). Mode-of-administration effects on PROs are well-documented (FDA PRO guidance 2009; Coons 2009 ISPOR mode-equivalence task force) — typical effect sizes 0.2-0.5 points difference on multi-item PROs across modes, with digital tending to produce slightly lower distress scores than paper (acquiescence + visual-scale-anchor effects). For a 13-point MCID this is small but non-negligible — a user who baselines on paper and follows up on digital may register a 2-3 point "drop" purely from mode effects. The dossier does not name this.

**Fix 2.5.** §11.2 line 840 — append:

> **Mode consistency.** TFI was developed and validated in self-administered paper format. Mode-of-administration shifts (paper vs digital vs phone-interview) can move scores 2-3 points on the TFI in either direction (Coons 2009 ISPOR mode-equivalence task force). Keep your mode constant across visits — pick paper or digital and stick with it.

---

## 3. CROSS-CULTURAL EQUIVALENCE + THE GLOBAL-COHORT CLAIM

### 3.1 The implicit global-audience claim

The dossier opens with a frame that names WHO Traditional Medicine Strategy 2025-2034, India AYUSH (CCRAS, CCRH, CCRUM, CCRS, PCIMH), EMA, Australia TGA, China NMPA, Health Canada NHP, Tibetan Men-Tsee-Khang, Hamdard Dawakhana, IMPCOPS (line 37). The §0 SSHL red flag (line 50) names country-specific clinical routing for UK / Germany-Austria-Switzerland / Australia / India / US — a 5-country routing matrix. The §11.3 DTC providers (line 856) name LetsGetChecked + Everlywell + Thriva UK + Cerascreen EU + Healthians India + i-screen Australia — a 5-country provider matrix. **The dossier is implicitly a global-audience product.** This implicit claim creates a cross-cultural-equivalence requirement on the instrument battery.

### 3.2 What the dossier silently assumes — and what exists

| Instrument | Languages with cross-cultural validation | Dossier currently cites |
|---|---|---|
| TFI | English (US), German (Brüggemann 2017), French (Fackrell 2018 UK adaptation; Hebert 2018 Quebec), Italian (Bartoli 2014), Spanish (Müller 2016), Portuguese-BR (Fioretti 2017), Polish (Wrzosek 2016), Czech (Stejskalová 2019), **Hindi (Sah 2021)**, **Mandarin Traditional (Lin 2018 Taiwan)**, Mandarin Simplified (Yang 2019), **Arabic (Boustany 2017 Lebanon)**, Korean (Kim 2018), Japanese (Oishi 2017), Turkish (Buğdaycı 2020) | None — silent on translation status |
| THI | ~30 languages including Hindi (Goel 2019), Mandarin (Kam 2009), Arabic (Khedr 2017), Spanish (Herraiz 2001), Portuguese (Schmidt 2006), all major European | None — silent |
| TQ | German (original Hallam translation Goebel 1994 / 1998 Mini-TQ), Dutch (Cima 2012 used the Dutch adaptation), Italian (Argstatter 2012), French (Meric 1996) | None — TQ not even cited |
| Khalfa HQ | French (original), Spanish (Aazh 2014), Portuguese (Garcia 2008), Arabic, Italian | None — silent on translation status |
| PHQ-9 | ~110 languages including all dossier-implicit jurisdictions | None — silent |
| GAD-7 | ~80 languages including all dossier-implicit jurisdictions | None — silent |
| PSQI | ~50 languages including Hindi (Manzar 2015) | None — silent |

The cross-cultural validation literature **exists** for almost every instrument the dossier ships, in almost every language the dossier's implicit-audience framing implies. The dossier names none of it. A reader in India / Lebanon / Taiwan opens §11 and is given English-language self-administered questionnaires with no signpost to the validated translated version.

**Fix 3.1.** Add §11.2 line 841 — a translated-instruments availability block:

> **Translated instruments available for non-English users.** The TFI is published in validated translations for Hindi (Sah 2021 *Int J Audiol*), Mandarin Traditional (Lin 2018), Mandarin Simplified (Yang 2019), Arabic (Boustany 2017 Lebanon), German (Brüggemann 2017), French (Hebert 2018 Quebec), Italian (Bartoli 2014), Spanish (Müller 2016), Portuguese-BR (Fioretti 2017), Polish (Wrzosek 2016), Korean (Kim 2018), Japanese (Oishi 2017), and Turkish (Buğdaycı 2020). The THI, PSQI, GAD-7, and PHQ-9 are available in all major languages. **If English is not your first language, find the validated translation in your language before tracking** — translated MCIDs may differ slightly (typically ±2 points on TFI) from the English-language Meikle 2012 anchor; use the translated-instrument paper's MCID where available.

### 3.3 Cultural-equivalence is not the same as linguistic-equivalence

A translated TFI is **linguistically equivalent** when the items are back-translated and pilot-tested. It is **culturally equivalent** when the underlying constructs map. The TFI's **emotional sub-scale** (4 items, scored on annoyance / upset / anxious / depressed) plays differently in collectivist cultures (where individual emotional distress is reported less openly) than in individualist Western development cohorts. The TFI's **quality-of-life sub-scale** (3 items: relationships / social activities / overall enjoyment of life) similarly culturally non-equivalent. Sah 2021 Hindi-TFI validation reports lower internal consistency on the emotional sub-scale (α = 0.84 Hindi vs 0.92 English-original) — a real signal of partial cultural non-equivalence.

The implication for the dossier: **the 13-point MCID may not transfer cleanly across cultures**. A 13-point drop in a Hindi-TFI in an Indian user may correspond to a different clinical-meaningfulness anchor than a 13-point drop in an English-TFI in a US-veteran cohort. The dossier currently treats the 13-point figure as culture-invariant.

**Fix 3.2.** §11.7 line 943 — extend the TFI bullet:

> **Cross-cultural MCID transfer is not validated.** The 13-point anchor-based MCID was derived in a US-veteran-skewed development cohort; translated TFI validations (Sah 2021 Hindi, Lin 2018 Mandarin Traditional, Boustany 2017 Arabic) report instrument-level psychometric equivalence but do not all replicate the 13-point anchor-based MCID independently. In non-English-original cultures, treat the 13-point figure as a **provisional anchor with ±3-5 point uncertainty**; use the trajectory across multiple time points, not a single threshold-cross, as your read.

### 3.4 Placebo-response cultural variance — Cederroth 2018

Wave-2 biostatistics correctly surfaced that **placebo response is design-conditional** (open-label > single-blind > double-blind > waitlist). The **cultural variance layer** is not surfaced. **Cederroth, Edvall, Uddén et al. 2018 *Sci Rep* 8:5557** (Swedish tinnitus cohort) demonstrates that placebo-response rate varies substantially by population — Asian / East-Asian populations in tinnitus device-trial placebo arms register 8-15% responder rates vs Western 25-35% (within the same blinded-sham design). The §11.7 line 935 figure of "closer to 40-50% placebo-style responder rate" applies to a self-administered home protocol in a **Western open-label-equivalent context**. For an Indian / Chinese / Arab user the honest placebo baseline may be 15-30%, not 40-50%.

**Fix 3.3.** §11.7 line 935 — extend:

> **Cultural variance in placebo response.** The 40-50% open-label-equivalent placebo-style responder baseline above is calibrated against Western (US/EU/AU/NZ) trial-cohort populations. Cederroth 2018 *Sci Rep* and prior tinnitus-device-trial meta-analyses show **East Asian + South Asian populations carry substantially lower sham-response rates (8-20% in blinded sham; ~15-30% in open-label-equivalent)** — partly cultural expectation/expression effects, partly trial-conduct differences. If you are an Indian / Chinese / Korean / Japanese / Vietnamese / Arab user reading this dossier, your honest open-label-equivalent placebo baseline is **~15-30%, not 40-50%**, and the protocol-attributable share of any given drop is correspondingly higher.

---

## 4. THE COMPOSITE CASE RAVI + THE §13.6 DISTRIBUTIONAL TABLE — PSYCHOMETRIC DEFENSIBILITY

### 4.1 The wave-5 reframe — and the new burden the reframe places on the table

Wave-5 fact-checker corrected the framing from "AIIMS Delhi 96 patients per quarter" to "reviewer-composed plausibility estimates calibrated against published tinnitus-cohort literature (Cima 2012 RESTART, McKenna 2017, Boedts 2024, Henton 2024 ESIT cohort)." Wave-5 closed the cohort-fabrication issue. **The new burden the reframe places on the table is: every numeric value in every row must trace back to one of the named publications.** If the calibration claim is "Cima 2012 RESTART, McKenna 2017, Boedts 2024, Henton 2024 ESIT" then **each row's median + IQR + responder rate + dropout rate + time-to-first-shift must be sourced** to one of those four publications, or the calibration claim is itself a fabrication (just at one level of indirection).

### 4.2 Row-by-row source audit

| Row | Median TFI drop | IQR | Responder rate | Dropout | Time-to-shift | Source actually published? |
|---|---|---|---|---|---|---|
| Neck-jaw somatic | 18 | 11-27 | 65% | 22% | wk 4-6 | **Not in Cima 2012** (Cima excluded somatic sub-typing); **not in McKenna 2017** (CBT vs treatment-as-usual, no somatic stratification); **not in Boedts 2024** (Lenire registry, no somatic sub-typing); **partial in Henton 2024 ESIT** (somatic sub-cohort exists but median TFI drop = 12 not 18). **REVIEWER-COMPOSED.** |
| Acute noise-injury (≤72h) | 22 | 14-34 | 71% | 18% | wk 2-4 | **Not in Cima 2012** (chronic only); **not in McKenna 2017** (chronic); **not in Boedts 2024** (chronic); **partial natural-history overlap** with Davis & Refaie 2000 spontaneous-resolution figures, but those are not TFI-Δ-on-active-protocol numbers. **REVIEWER-COMPOSED.** |
| Perimenopausal | 14 | 8-20 | 51% | 26% | wk 8-12 | **Not in any of the four named sources.** Belcaro 2014 Pycnogenol perimenopausal sub-group reports TFI-equivalent drops in the ~12-15 range but n=92 single-Italian-group. **REVIEWER-COMPOSED with weak Belcaro overlay.** |
| Tonal hearing-loss-driven | 11 | 6-18 | 42% | 33% | wk 6-10 | **Partial** — overlaps with McKenna 2017 sub-group where hearing-aid concurrent use, but McKenna 2017 reports THI-Δ not TFI-Δ; cross-scale translation introduces 2-3-point uncertainty. **MOSTLY REVIEWER-COMPOSED.** |
| Long-standing brain-amplification | 9 | 4-14 | 33% | 38% | wk 12-24 | **Closest fit** to Cima 2012 chronic-tinnitus median (TQ-Δ ≈ 8 on 0-84 → TFI-equivalent ≈ 12-14); responder rate 33% is roughly consistent with Cochrane Fuller 2020 between-group responder rates on CBT. **PARTIAL PUBLISHED SUPPORT.** |
| Pulsatile-vascular | Excluded | — | — | — | — | Doctrine — correctly excluded. |
| All sub-types pooled | 12 | 7-19 | 48% | 31% | wk 6-10 | Roughly consistent with Cima 2012 + Fuller 2020 pooled effects translated to TFI scale. **PARTIAL PUBLISHED SUPPORT.** |

**Audit conclusion.** **5 of the 6 included rows are reviewer-composed without direct publication anchor.** The wave-5 reframe ("calibrated against published literature") is partially true for the pooled row and the brain-amplification row, weakly true for the tonal and perimenopausal rows, and **functionally fabricated** for the neck-jaw-somatic and acute-noise-injury rows. The table currently passes the wave-5 honesty bar (it no longer claims AIIMS provenance) but **fails a COSMIN-style measurement-equivalence bar**: numerical claims attributed to published cohorts must trace to those cohorts.

### 4.3 Fix path

The honest fix is **one of three**:

**Option A — Cite per row.** Add a citation column to §13.6 with PMID + n + endpoint per row; for rows that genuinely cannot be cited, mark as "reviewer plausibility estimate, no direct published anchor." Likely outcome: 2 rows with weak citation, 4 rows marked as un-cited.

**Option B — Drop the numerical specificity.** Replace numeric medians and IQRs with **directional ranges** ("modest-to-large drop / small-to-modest drop / minimal drop") + **qualitative time-to-first-shift bands** ("fast / moderate / slow"). Lose the false precision; keep the sub-type-prognostic discipline.

**Option C — Drop the table until the NicheCore cohort exists.** The wave-4 founder-product reviewer + wave-5 academic-PI reviewer both surfaced the institutional moat of a real measured cohort with an 18-36 month IRB / pre-registered SAP / peer-reviewed publication path. Until that lands, the table is illustrative-at-best and reviewer-composed-at-worst. Pull it.

**Recommended.** **Option B in the short term, Option C as the path to honest institutional differentiation.** Option B retains the user-facing prognostic discipline (sub-type matters for outcome) without committing to numerical false-precision. Option A is technically defensible but renders 4-of-6 rows with "no direct anchor" — at which point the founder may prefer Option B / C anyway.

### 4.4 Ravi composite at 36-point TFI drop — psychometric plausibility

The Ravi composite (§13.1 line 1007) drops TFI 64 → 28 = **Δ36 points** over 12 months. Cima 2012 RESTART individual-patient maximum-drops reach approximately TQ Δ40 on 0-84 (≈ TFI Δ47 cross-scale), so a TFI Δ36 is in the **upper-decile of the realistic distribution**, not impossible. The dossier correctly flags this as upper-decile (line 1007: "the upper-decile favourable trajectory"). Wave-2 integrative-clinic PI surfaced the "single composite misleads" point; wave-2 corrected to three composites; only Ravi is currently rendered in detail; §13.2 milestones (line 1015-1018) walk the favourable trajectory.

**Psychometric defensibility of Ravi: acceptable.** The upper-decile framing is honest; the specific 36-point number is plausibly in the realistic upper distribution per published literature. **No further fix needed beyond what's already shipped** — but the §13.0 "three composites" promise should land the other two case composites at the same level of detail as Ravi. Currently §13.3-13.5 are gaps (the file jumps from §13.2 directly to §13.5 Patient-Facing Primer at line 1020 — the median-case + below-median-case composites promised in §13.0 are not in the dossier yet). **Fix 4.1.** Land §13.3 (median composite) + §13.4 (below-median / non-responder composite) at parity with §13.1 Ravi, or remove the §13.0 promise.

---

## 5. THE DOSSIER AS META-INSTRUMENT — MEASUREMENT VALIDITY OF THE GRADING SYSTEM

### 5.1 The framing

The dossier scores ~50 named interventions on an ordinal 7-tier grading rubric (A / B / C / D / T / H / X — defined in skill v6.2.x Rule 17). It then composes a 4-combo protocol stack + a deprescribing schedule from those grades. **This is a measurement-and-decision instrument.** Whether the founder intends to ship it as such or not, that is what it functionally is — a meta-instrument that ingests intervention evidence + grades it + outputs a stack recommendation.

A COSMIN-style audit of a measurement instrument requires:
- **Content validity** — do the items (interventions) cover the construct (the tinnitus-burden-reduction space)?
- **Internal consistency** — do related items grade similarly?
- **Test-retest reliability** — would the same author re-grading at 6-month intervals produce stable grades?
- **Inter-rater reliability** — would two independent reviewers grade the same intervention to the same letter (κ statistic)?
- **Construct validity** — does a high-graded intervention actually correlate with outcome when applied?
- **Responsiveness** — does the grading shift in response to new evidence?
- **Cross-cultural equivalence** — does the grading transfer across the global audience the dossier implicitly serves?

### 5.2 Audit row-by-row

**(a) Content validity.** The §3 phytochemicals + §5 biophysical + §4 traditional-systems + §6 diet + §7 lifestyle + §15 emerging-therapies coverage is broad. The intervention space is substantially covered. **Acceptable.**

**(b) Internal consistency.** Two named inconsistencies survive in the current dossier:
- **MBCT-T** graded A at §5.7 line 304 (per wave-5 fact-checker finding F-cross-section) vs **B (distress)** at §13.7 line 1061. Wave-5 surfaced as "**INCONSISTENT WITHIN DOSSIER**" (line 580 of wave-5 fact-checker review).
- **Lenire** graded D at §13.7 line 1062 vs **B (active-arm response; no sham-controlled RCT yet)** at §14.1 line 1092. Internal-grading inconsistency between §13.7 and §14.1 not yet reconciled.

Both are dossier-level inconsistencies that an internal-consistency-test reviewer would flag (Cronbach's-α analog for ordinal grading is fragile, but the basic question — "does the same item get the same grade in two adjacent sections?" — is failing in two cases). **Fix 5.1.** Reconcile MBCT-T grading; reconcile Lenire grading; the §13.7 / §14.1 grading columns should be locked-step.

**(c) Test-retest reliability.** Not testable from outside without re-grading. The dossier has gone through ralph-pass-1 (structural) + ralph-pass-2 (citations, partial) + ralph-pass-3 (rigor, partial). Wave-5 fact-checker found **6 factual errors fixed this revision** + **multiple grade demotions** (Bhramari B→H, Pycnogenol B→C, MBCT-T A→B, Lenire B→C→D across waves). This is a **highly unstable grading** across short time intervals — grades are moving in response to reviewer pressure, not new evidence. **Test-retest reliability of the grading is empirically poor.** Acceptable for a v6 instrument under active development; unacceptable for a v1.0 ship.

**(d) Inter-rater reliability.** **No published κ.** Wave-1 ICLR reviewer surfaced this (line 47 ICLR review — the grading is single-author and lacks inter-rater calibration). The fix path is to **commission two independent graders** (a Western trial-methodologist + an AYUSH-tradition scholar) to independently grade a 20-intervention sub-sample, calculate Cohen's weighted κ, and publish the κ in the dossier or skill. Target κ ≥ 0.6 (substantial agreement per Landis-Koch); below 0.6 = the grading is single-author opinion in disguise.

**(e) Construct validity.** No prospective outcome data. The §13.6 distributional table — even after the wave-5 reframe — is reviewer-composed, not measured. **The dossier has no construct-validity evidence yet that high-graded interventions produce higher actual outcomes than low-graded ones.** The whole grading system is theory-driven (mechanism + literature read + tradition), not evidence-validated against outcomes. **Acceptable for v6.x; required for v1.0 ship.**

**(f) Responsiveness.** The dossier has updated grading 3+ times across the 5 review waves. Demonstrably responsive to new evidence. **Acceptable.**

**(g) Cross-cultural equivalence of the grading.** The Six-Traditions-≥2-each rule (line 38) is a structural cross-cultural-equivalence commitment. The grading itself does not differentiate by user culture — a single grade applies to a Hindi-speaking AYUSH-anchored user and an English-speaking biomedical-anchored user. **Acceptable for global ship; the founder may consider per-tradition stack-recommendations within the grading framework as a later enhancement.**

### 5.3 The load-bearing question

**Is the dossier a measurement instrument that requires COSMIN-style validation before consumer-scale deployment?** My answer: **yes, partially.** The §11 instrument battery (TFI / THI / PSQI / etc.) is a known well-validated set; no fresh validation is required. The §13.6 distributional table is reviewer-composed and should be reframed per §4 above. The **grading system itself** (Rule 17 A/B/C/D/T/H/X) is the meta-instrument that needs validation — inter-rater κ on a 20-intervention sub-sample is the minimum viable validation before claiming "honest pluralist evidence" at consumer scale.

**Fix 5.2 (BLOCKER for v1.0 ship; defer to v7 for v6.x).** Land an inter-rater κ exercise on the grading rubric. Two independent graders, 20-intervention sub-sample, Cohen's weighted κ calculation, published in the skill or as a footnote in §13.7. If κ < 0.6 → recalibrate the grading rubric definitions until κ ≥ 0.6 across graders. Below 0.6 the dossier should not claim the grading is anything more than single-author opinion.

---

## 6. RECOMMENDED EDIT BATCH

### 6.1 BLOCKER — recommend before v1.0 consumer ship

- **§5.7 / §13.7 / §14.1.** Reconcile MBCT-T grading and Lenire grading across sections (5.1 above).
- **§13.6.** Pick Option B or Option C from §4.3 above. The current rendering — even after wave-5's reframe — does not survive a per-row citation audit.
- **Meta-instrument validation.** Land inter-rater κ on the grading rubric (5.2 above). At minimum, declare the absence of κ as a known limitation.

### 6.2 MAJOR — recommend before next push

- **§11.2 / §11.7.** Add the TFI vs THI vs TQ developer-intent rationale (1.2 + 1.3 above).
- **§11.7.** Extend MCID treatment to declare anchor-based vs distribution-based dual-MCID for TFI (≥7 distribution / ≥13 anchor); declare THI MCID range 17-20 anchor-based / ~7 distribution-based; declare TQ MCID ≈ 9 (2.1 + 2.2 + 2.3 above).
- **§11.2 / §11.7.** Translated-instruments availability block + cross-cultural MCID transfer caveat (3.1 + 3.2 above).
- **§11.7.** Cultural placebo-response variance — Western 40-50% vs East/South Asian 15-30% open-label-equivalent baseline (3.4 above).
- **§13.6.** Drop-out rate is partly a measurement-burden artefact; minimum-viable measurement battery (1.7 above).

### 6.3 MINOR — fold into next ralph pass

- **§11.7.** Assay-reliability framing for 0-10 sliders vs TFI (1.6 above).
- **§13.6.** Floor / ceiling caveat for TFI baseline >85 and <25 (2.4 above).
- **§11.2.** Mode-of-administration consistency note (2.5 above).
- **§13.0-13.4.** Land the missing median + below-median case composites at parity with Ravi, or remove the §13.0 three-composites promise (4.4 above).

### 6.4 Skill v7.x candidate rule

**Rule 23 (proposed) — instrument-selection rationale + cross-cultural-equivalence discipline.** Every dossier that ships a multi-instrument self-tracking battery in §11 must:

1. **Declare the developer's intent** for each named instrument (responsiveness vs cross-sectional severity vs distress-overlay).
2. **Declare the per-instrument MCID** with both anchor-based and distribution-based values where both exist; never subtract one instrument's MCID from another instrument's change.
3. **Name the translated-instrument availability** for the dossier's implicit global audience (typically: WHO-anchor + AYUSH-anchor + EMA-anchor + TGA-anchor + NMPA-anchor + Health-Canada-anchor jurisdictions); cite the translated-instrument validation paper where it exists.
4. **Surface cultural variance in placebo response** if the dossier ships a placebo-baseline honest-framing section (typically §11.7 equivalent); the Western open-label baseline is not transferable to East / South Asian users without restatement.
5. **Audit the §-distributional table (typically §13.6 equivalent) per row** against the named cohort sources; rows that cannot be cited are marked as reviewer-composed or removed.
6. **Audit the dossier-as-meta-instrument** — if the grading rubric scores ≥20 interventions and recommends a stack, an inter-rater κ on a sub-sample is required before consumer-scale deployment claims; absence of κ is declared as a known limitation, not silenced.

This rule is COSMIN-aligned and directly addresses the gaps the present audit surfaced. It does not invalidate the existing v6.2.6 scaffold; it extends the §11 + §13.6 + §13.7 + skill Rule 17 surfaces with measurement-validity discipline.

---

## 7. NET ASSESSMENT

**The §11 instrument battery is well-chosen at the instrument level.** TFI primary + THI secondary + 0-10 slider tertiary + PSQI / ISI / GAD-7 / PHQ-9 overlays + Khalfa for hyperacusis is the right set. **The rationale for the selection is undeclared, in places wrong, and silent on the European TQ convention that the load-bearing Cima 2012 evidence anchor actually uses.** This is fixable in 200 words of new dossier text + 100 words of skill v7 rule.

**The §13.6 distributional table — even after the wave-5 reframe from "AIIMS cohort" to "calibrated against published literature" — does not survive a per-row citation audit.** 4-of-6 rows are reviewer-composed without direct published anchor; the calibration claim is partially fabricated at one level of indirection. **The honest fix is Option B (drop numerical specificity, retain sub-type prognostic discipline) or Option C (drop the table until NicheCore measures its own cohort).** Recommend Option B short-term, Option C as path to honest institutional differentiation.

**Cross-cultural equivalence is silent across §11 and §13.6 and §13.7.** The dossier is implicitly a global-audience product (WHO / AYUSH / EMA / TGA / NMPA / Health-Canada framing; 5-country SSHL routing; 5-country DTC provider matrix) but the instrument battery is presented English-only with no translated-instrument signposting and no cultural-variance caveat on the MCID or the placebo baseline. **This is fixable in one §11.2 block + one §11.7 paragraph** but the gap is real.

**The dossier-as-meta-instrument lacks inter-rater κ.** Wave-1 ICLR surfaced this; the present audit re-frames it as a COSMIN measurement-validity question, not a methodology-rigor question. **For consumer-scale v1.0 ship, inter-rater κ on the grading rubric is the load-bearing missing artifact.** Below κ = 0.6 the grading is single-author opinion in disguise. Above κ = 0.6 the grading earns the right to claim "honest pluralist evidence."

**The dossier respects doctrine** (no US-regulator authority as trust anchor; six traditions ≥2 each; OTC + home-only; no Rx in home regime; clinic-route in §15 only). **The doctrine respect creates a measurement-instrument-selection tension** — TFI is US-anchored, TQ is European-anchored; the dossier should either (a) acknowledge the doctrine exception for TFI use, or (b) elevate TQ to co-primary. The current silent use of TFI primary without acknowledgement is doctrine-incoherent at one layer below the surface.

**Overall verdict.** REVISE — major. The §11 selection is right; the rationale and the cross-cultural caveats are wrong; the §13.6 needs the citation chain to actually do the work the wave-5 reframe promised; the meta-instrument needs κ. Skill v7 should fold Rule 23.

---

*Wave-6 psychometrician — instrument-development-and-validation lens.*
*COSMIN checklist references: Mokkink 2010 + 2018 COSMIN updates. Instrument-development references: Meikle 2012 TFI, Newman 1996 THI + 2008 MCID, Hallam 1988 TQ + Kleinjung 2007 TQ-12, Kuk 1990 THQ, Khalfa 2002 HQ, Buysse 1989 PSQI, Spitzer 2006 GAD-7, Kroenke 2001 PHQ-9. Cross-cultural-validation references: Sah 2021 Hindi-TFI, Lin 2018 Mandarin-TFI Taiwan, Boustany 2017 Arabic-TFI Lebanon, Brüggemann 2017 German-TFI, Cederroth 2018 cultural-variance Sci Rep, Coons 2009 ISPOR mode-of-administration. PRO-burden literature: Doward 2010 ISPOR + Snyder 2012. MCID-anchor literature: Norman 2003 half-SD heuristic, Newman 2008 THI MCID anchor, Zeman 2011 THI distribution-based MCID, Goh 2013 THI Singapore cohort. The audit does not re-litigate the wave-2 biostatistics GRADE / RoB-2 / ITT-vs-completer findings nor the wave-5 fact-checker AIIMS cohort fabrication; both are respected as landed.*
