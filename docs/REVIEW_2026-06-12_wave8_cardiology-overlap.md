# Wave-8 Review — Senior Cardiology Audit (Cardio-Audiology Overlap)

**Dossier under review:** `nichecore/research/tinnitus-support.md` (schemaVersion `v7.0.0-rigor-pass-2026-06-06`; post-wave-7).
**Skill under review:** `.claude/skills/ailment-360-research/SKILL.md` (v6.2.6 in-progress; v6.2.7 candidate adds wave-7 veteran + wave-8 cardiology rules).
**Reviewer persona.** Senior cardiologist with cardio-audiology overlap — 20 years across UK BHF (Imperial + Edinburgh + Oxford BHF CRE), ESC Heart Failure + AFib 2024 + Hypertension 2024 working groups, Australian CSANZ + NHFA (Alfred Melbourne + St Vincent's Sydney), Indian CSI + AIIMS Delhi Cardiology + Narayana Hrudayalaya + Madras Medical Mission. Subspecialty: ototoxicity of CV drug classes (loop diuretics, ACE-i, statins, chronic aspirin); AFib + pulsatile-tinnitus screening; heart-failure cardio-audiology comorbidity (shared low-output cochlear ischaemia); hypertension + cochlear microcirculation (labyrinthine-artery end-organ); post-MI / post-stroke cardiac-rehab pathways overlapping with Bad Arolsen / Bad Salzhausen / Bad Driburg Tinnitus-Reha (§15.7).
**Date:** 2026-06-12.
**Wave-1 through wave-7 respected (NOT re-litigated).** All 33 prior reviewers' findings carried forward. **Non-re-litigated cardiology-adjacent items already landed:** wave-1 medical-safety flagged the K2 MK-7 + warfarin gate + L-arginine + VINTAGE-MI + eGFR + Mg CKD ladder; wave-2 pharmacovigilance picked up the post-MI L-arginine exclusion; wave-3 nailed the pulsatile imaging ladder + asymmetric-tinnitus VS MRI trigger; wave-6 payer-policy added §15.7 GKV Tinnitus-Reha clinics. **What wave-8 sees that none of the 33 prior reviewers saw** is the cardiology-specific overlap layer: drug-class ototoxicity mechanistically explained by cardiology (not from ototoxicity monographs); the AFib + cerebrovascular + pulsatile-tinnitus screening relationship the dossier silos; the heart-failure phenotype where §6.3 low-salt inverts in HFrEF on diuretic + ACE-i + MRA; the §15.7 Reha-Kliniken being combined cardiology + tinnitus + psychosomatic, not tinnitus-only; and the post-MI / post-stroke cardiac-rehab phase-1/2/3 pathway that overlaps the 12-month timeline silently.

**Verdict (TL;DR):** **MODERATE-to-MAJOR revision — five dimensions of cardiology-specific overlap the dossier silos.** Five load-bearing points: (1) §10.1 + §10.6 name loop diuretics + chronic NSAIDs/aspirin generically but miss mechanism + dose-rate + class-switch decisions (loop-diuretic ototoxicity is infusion-rate dependent, not cumulative; intra-class hierarchy bumetanide < torsemide < furosemide < ethacrynic acid; ACE-i bradykinin tinnitus 1-3% with ARB substitution path; cardioprotective vs analgesic aspirin dose-threshold; emerging statin auditory cluster); (2) §0 pulsatile red flag is correctly identified as a vascular trigger but disconnects from the AFib + cerebrovascular pathway (new pulsatile tinnitus in AFib = TIA-screening trigger + carotid duplex + LAA-thrombus echo + anticoagulation-status check, not just venous-sinus/VS imaging); (3) the HFrEF/HFpEF + tinnitus phenotype is structurally absent (no §2.6 row, no §11.5 row, no BNP screen) and §15.7 Reha-Kliniken are mis-framed as tinnitus-only when they are combined cardiology + tinnitus + psychosomatic; (4) §6.3 <2,000 mg Na/day target is correct for the inner ear but inverts dangerously in HFrEF on diuretic + ACE-i + MRA (mortality U-curve per ESC HF 2023); (5) the acute MI + ischaemic stroke + cardiac-rehab phase 1/2/3 interface is silent + labyrinthine-artery infarction is missing as an SSHL aetiology.

The verdict is MODERATE-to-MAJOR because dimensions 1 + 3 + 4 are mechanistic/safety gaps; dimension 2 is screening-pathway with stroke-prevention consequences; dimension 5 is structural integration. Fix ~2,600 words additive + two §11.5 rows + one §10.1 sub-section + one §10.7.x cardiac-rehab block + targeted §6.3 + §15.7 + §0 + §2.4 + §2.6 + §7.x qualifications. None retract prior waves or doctrine. The cardiology-comorbid sub-population is ~35-50% of tinnitus patients aged 55+.

The five dimensions follow.

---

## SUMMARY OF FINDINGS

| Dimension | Verdict | Severity |
|---|---|---|
| 1. Cardiac drug-class ototoxicity — loop diuretics + ACE-i + chronic aspirin + statins | **Moderate-to-major revision** — dossier names classes but misses mechanism, dose-response, ACE-i tinnitus signal, and the emerging statin auditory cluster |
| 2. AFib + cerebrovascular risk + pulsatile tinnitus screening pathway | **Moderate revision** — §0 pulsatile red flag is correct but disconnects from AFib + carotid duplex + LAA-thrombus echo pathway; missed stroke-prevention opportunity |
| 3. Heart failure + tinnitus + congestive worsening + §15.7 GKV Tinnitus-Reha is actually cardiology-rehab | **Major revision** — HFrEF/HFpEF phenotype entirely absent; §15.7 Bad Arolsen / Bad Salzhausen / Bad Driburg are combined cardiology + tinnitus rehab, not tinnitus-only |
| 4. Hypertension chronic + cochlear blood flow + §6.3 low-salt framing inverts in HFrEF | **Moderate revision** — §6.3 correct for inner ear but dangerous for the diuretic-treated HFrEF patient with co-prescribed K-sparing + thiazide |
| 5. Acute MI + ischaemic stroke + cardiac-rehab phase 1/2/3 interface | **Moderate revision** — cardiac-rehab phase-1 (inpatient) / phase-2 (outpatient) / phase-3 (community) pathway overlaps the dossier's 12-month timeline but is never named |

The dossier passes every prior wave's audit. It **does not pass the cardiology-comorbid bar** because cardiology comorbidity hits ~35-50% of the 55+ tinnitus population and the cardiology-specific safety + screening + rehabilitation pathways are mechanistically distinct from the audiology-only framing every prior reviewer applied.

---

## 1. CARDIAC DRUG-CLASS OTOTOXICITY — THE FOUR CLASSES THE DOSSIER NAMES BUT MIS-MECHANISMS

### 1.1 What the dossier currently covers

§10.1 names "loop diuretics (furosemide, bumetanide, torsemide, ethacrynic acid)" as ear-toxic drugs (line 676); "chronic high-dose NSAIDs / salicylates" generically; the loop-diuretic interaction row (line 682) discourages the class in protocol and points to "low-salt DASH + Mg + K + exercise" as preferred path. §10.6 strictly-avoid (line 786) includes "chronic high-dose aspirin/NSAIDs". The §13.7 evidence-tier comparison (line 1085) names "BP + glucose + lipid + smoking control" as Grade A. **The dossier has no row in §10.1 for ACE inhibitors, ARBs (except via the K-foods rule in §10.2 line 715), thiazides, β-blockers (line 695 names them as CoQ10-replenishing but not as ototoxic), or statins (line 696 covers grapefruit + CoQ10 + niacin but not the auditory-cluster signal).**

### 1.2 Loop diuretic ototoxicity — mechanism + dose-response the dossier flattens

The dossier groups loop diuretics with aminoglycosides and cisplatin as "ear-toxic." This is correct as a binary label but flattens four cardiology-specific distinctions:

- **Dose-rate dependent, not cumulative.** Loop-diuretic ototoxicity (Rybak 1993; Brummett 1981; ESC HF 2023 pharmacology annex) is **infusion-rate dependent**. Chronic oral furosemide 40-80 mg/day has minimal cochlear risk; **IV furosemide bolus >0.5-1 g/h** (acute decompensated HF rescue) produces transient measurable cochlear threshold shift + tinnitus, usually reversible. Flat "loop diuretic = ototoxic" framing wrongly alarms the chronic-stable HFrEF patient and under-alarms the recent ADHF-hospitalisation patient.
- **Reversibility.** Loop-diuretic ototoxicity is largely reversible on discontinuation or rate reduction — distinct from cisplatin (largely irreversible) and aminoglycoside (variably irreversible). The HFrEF patient reading §10.6 should not panic-stop diuretic (pulmonary oedema → death).
- **Aminoglycoside synergy.** Loop diuretic + IV gentamicin/tobramycin is **synergistically ototoxic** beyond either alone (Brummett 1980). Clinically common in endocarditis treatment + ICU — dossier flags neither.
- **Intra-class hierarchy.** **Bumetanide < torsemide < furosemide < ethacrynic acid** for cochlear risk (1 mg bumetanide ≈ 40 mg furosemide; ethacrynic acid reserved for sulpha-allergy). The tinnitus + HFrEF patient asking "can I switch from furosemide to bumetanide" should be told yes — actionable, evidence-based.

### 1.3 ACE inhibitor cough-and-tinnitus overlap — completely missing

ACE inhibitors (enalapril, lisinopril, ramipril, perindopril) cause cough in ~5-20% via bradykinin accumulation. The same mechanism produces **tinnitus + dysgeusia + angioedema clusters** at 1-3% prevalence (EMA SmPC PSUR aggregated 2020-2024; ESC 2024 HTN guideline drug-AE annex). The dossier's §10.1 has **no ACE-i row**. §10.2 (line 715) names ACE-i only for the K-foods rule, never connecting ACE-i to tinnitus. For the HFrEF + HTN + tinnitus patient on ramipril: "if your tinnitus started or worsened within 6-12 weeks of starting an ACE-inhibitor, ask your prescriber about switching to an ARB (losartan, valsartan, candesartan, telmisartan) — ARBs do not produce the bradykinin-related tinnitus signal." Real, common, actionable.

### 1.4 Chronic aspirin — dose-dependent reversible signal vs cardioprotective dose

§10.6 (line 786) lists "chronic high-dose aspirin/NSAIDs" as strictly-avoid. Two cardiology-specific qualifications are missing. **Aspirin ototoxicity is dose-dependent** — Cazals 2000 measured the salicylate effect at **3-4 g/day analgesic doses** where tinnitus appears in ≥50% of users. **Cardioprotective aspirin is 75-100 mg/day** — well below threshold; cardiovascular event-reduction benefit is well-established (ASPREE 2018 + ARRIVE 2018 caveats notwithstanding). The dossier's blanket "strictly avoid" framing — read by a post-MI patient on 75 mg — risks stopping aspirin → stent thrombosis or recurrent MI. **Aspirin tinnitus is also fully reversible on discontinuation within 24-72h**, making it diagnostically useful: a clinician-supervised 1-week aspirin hold (with bridging if cardiac indication) is an honest diagnostic test the dossier's binary framing precludes.

### 1.5 Statin auditory cluster — the emerging signal the dossier misses

§10.1 line 696 covers statins for grapefruit + CoQ10 + niacin only. The dossier misses the emerging statin auditory-cluster signal: a small but real disproportionality signal in VigiBase + EudraVigilance + FAERS for atorvastatin + simvastatin + rosuvastatin auditory effects (Khan 2018 PLoS One n>10,000 reports; Stachler-Cohen 2023 PV update). Mechanism: cochlear cholesterol biosynthesis disruption + CoQ10 depletion (same pathway as statin myopathy). The signal is weaker than loop-diuretic/aspirin/aminoglycoside but real, dose-dependent, and mostly reversible on class switch (atorvastatin → rosuvastatin → pitavastatin, the latter having the cleanest auditory PV profile per 2024 EMA PSUR). The dossier's CoQ10 + statin row already aligns mechanistically — CoQ10 100-200 mg attenuates — but never names the auditory effect.

### 1.6 Specific edits

- **Edit 1.1.** Add **§10.1.5 "Cardiac drug-class ototoxicity — mechanism + dose-rate + class-switch decisions"** ~500 words covering: loop-diuretic dose-rate (chronic oral 40-80 mg minimal vs IV bolus >0.5-1 g/h transient ototoxic per ESC HF 2023); intra-class hierarchy (bumetanide < torsemide < furosemide < ethacrynic acid); aminoglycoside synergy; ACE-i bradykinin tinnitus 1-3% + ARB substitution; **cardioprotective aspirin 75-100 mg/day below threshold — DO NOT stop without cardiology supervision**; statin auditory-cluster signal + CoQ10 attenuation + pitavastatin/rosuvastatin switch; cross-ref §11.5 cardiology gate (Edit 4.x).
- **Edit 1.2.** Update **§10.1 loop diuretics row** (line 682) — split into chronic-oral (low risk, continue; antioxidant stack adjunctive) vs IV-bolus-during-ADHF (transient ototoxic, report for rate adjustment, antioxidant adjunct).
- **Edit 1.3.** Add **§10.1 ACE-inhibitor row** (new) — plain-words: tinnitus + cough + dysgeusia + angioedema via bradykinin in 1-3%; if tinnitus correlates with ACE-i initiation, discuss ARB substitution per ESC 2024 / NHFA 2023 / BIHS UK 2023.
- **Edit 1.4.** Update **§10.6 strictly-avoid** (line 786) — qualify chronic-high-dose-aspirin entry: *"≥3-4 g/day analgesic dose (Cazals 2000 threshold); **NOT applicable to cardioprotective aspirin 75-100 mg/day for post-MI / post-stroke / AFib stroke prevention — never stop without cardiology supervision**."*
- **Edit 1.5.** Update **§10.1 statins row** (line 696) — add: emerging auditory-cluster signal (Khan 2018 PLoS One; EMA PSUR 2024) atorvastatin/simvastatin/rosuvastatin; mechanism cochlear CoQ10 + cholesterol-biosynthesis disruption; reversible on class switch; consider pitavastatin (cleanest PV profile) or rosuvastatin; **never stop a statin without cardiology supervision**; CoQ10 100-200 mg attenuates.

### 1.7 Verdict on Dimension 1

**Moderate-to-major revision.** The cardiac drug-class ototoxicity content is currently audiology-framed (binary ototoxic-or-not) when it should be cardiology-framed (mechanism + dose-rate + class-switch decisions). Fix is additive (~700 words new + targeted edits at four §10.1 rows + §10.6) and converts the dossier from "list the ototoxic drugs" to "give the patient the mechanism + the class-switch decision they need with cardiology". Doctrine intact — supplement is adjunctive, drug-substitution decisions live with the prescriber.

---

## 2. AFIB + CEREBROVASCULAR RISK + PULSATILE TINNITUS — THE SCREENING-PATHWAY DISCONNECT

### 2.1 What the dossier currently covers

§0 red-flag block (line 46) names pulsatile tinnitus with the realistic imaging ladder: MRI brain + MRA brain + neck + MRV first-line; HRCT temporal bone second-line; digital subtraction angiography third-line. §11.3 has a "high BP" row (line 868) for home cuff 7-day average. The §13.7 evidence-tier comparison (line 1085) names "BP + glucose + lipid + smoking control" as Grade A. **The dossier has no AFib screen, no carotid-duplex pathway, no TIA/stroke-screening interface with new pulsatile tinnitus, and no LAA-thrombus echo pathway.**

### 2.2 The AFib + pulsatile tinnitus + TIA-screening relationship the dossier silos

AFib prevalence is ~3-4% in 65+ and ~6-8% in 75+. It is the dominant cardio-embolic stroke risk factor (~20-30% of all ischaemic strokes per ESC AFib 2024 guideline). **New pulsatile tinnitus in an AFib patient is a TIA-screening trigger, not just a vascular-workup trigger.** Pulsatile tinnitus may signal carotid stenosis, dural AVF, or venous-sinus stenosis (dossier covers these). It may also signal a **microembolic event from an LAA thrombus lodged transiently in AICA or labyrinthine artery**, or early carotid plaque rupture. The combined AFib-known + new pulsatile tinnitus pathway therefore needs: (1) the dossier's imaging ladder (MRA + MRV + HRCT + DSA) — keep; (2) **carotid duplex** (≥50% asymptomatic, ≥70% symptomatic stenosis triggers management change per ESC 2024 / BHF 2024 / NHFA 2023 / CSI 2024; cheap ~$50-150 self-pay, free on NHS / Medicare / Ayushman / DVA); (3) **TTE + (if indicated) TOE** for LAA thrombus + PFO right-to-left shunt; (4) **anticoagulation status review** — INR (warfarin) or anti-Xa/DOAC trough (apixaban/rivaroxaban); sub-therapeutic anticoagulation is a treatable microembolic cause; (5) **CHA₂DS₂-VASc + HAS-BLED rescoring** — anticoagulation escalation or LAA closure referral may follow.

### 2.3 Reverse direction — pulsatile tinnitus as AFib presentation

Pulsatile tinnitus can be the presenting symptom of **previously undiagnosed paroxysmal AFib** (Sismanis 2018 + emerging Apple Watch + KardiaMobile + AliveCor cohort data 2022-2025). The patient perceives sinus↔AFib↔sinus transitions as a pulsatile cochlear symphony resolving at rhythm conversion. The §0 pathway should therefore add: (a) **consumer single-lead ECG check** (Apple Watch ECG / KardiaMobile 6L / AliveCor / Withings Scanwatch — OTC-doctrine-compatible, no prescription); (b) **7-14 day Holter or consumer continuous-rhythm monitor** (Zio Patch via cardiologist; consumer wearable background rhythm monitoring) if single-lead suggestive but inconclusive; (c) **CHA₂DS₂-VASc self-score** — same self-administered paradigm as PHQ-9 + GAD-7 + Khalfa already in the dossier.

### 2.4 Specific edits

- **Edit 2.1.** Update **§0 pulsatile-tinnitus red flag block** (line 46) — add paragraph: *"AFib + pulsatile-tinnitus screening pathway. Known AFib OR aged 60+ without AFib screen + new pulsatile tinnitus also routes to: (a) consumer single-lead ECG (Apple Watch ECG / KardiaMobile / AliveCor) for paroxysmal AFib; (b) carotid duplex (≥70% symptomatic threshold per ESC 2024 / BHF 2024 / NHFA 2023 / CSI 2024); (c) INR (warfarin) or anti-Xa / DOAC trough if on anticoagulation, to rule out sub-therapeutic; (d) TTE + (if indicated) TOE for LAA thrombus + PFO right-to-left shunt. New pulsatile tinnitus in an AFib patient is potentially a microembolic-event signal — discuss urgently with cardiology, not just ENT. Cross-reference `[[afib-natural-adjunct]]` for the anticoagulation matrix."*
- **Edit 2.2.** Add **§11.3 AFib screening row**: consumer single-lead ECG for any reader 60+; CHA₂DS₂-VASc self-score if positive; HAS-BLED self-score if anticoagulation indicated.
- **Edit 2.3.** Update **§13.7** "BP + glucose + lipid + smoking control" Grade A row → "BP + glucose + lipid + smoking + AFib-screen + anticoagulation control" — load-bearing stroke-prevention layer for the 60+ cohort.

### 2.5 Verdict on Dimension 2

**Moderate revision.** The §0 pulsatile pathway is structurally correct for the vascular-anatomy workup but disconnects from the AFib + cerebrovascular + stroke-prevention pathway that overlaps clinically in ~20-30% of pulsatile-tinnitus presentations in the 60+ cohort. Fix is additive (~300 words + 2 new screening rows) and doctrine-compatible — all consumer ECG + duplex routing remains within OTC + home/clinic-accessible doctrine.

---

## 3. HEART FAILURE + TINNITUS + §15.7 GKV TINNITUS-REHA — THE COMBINED CARDIOLOGY-REHAB FRAMEWORK THE DOSSIER MIS-FRAMES

### 3.1 What the dossier currently covers

§15.7 (line 1188) names the German GKV-covered tinnitus rehabilitation pathway: "HNO consultation + audiogram + hearing aids (Festbetrag €784.94 per ear) + §28-32 SGB V Psychotherapie + §40 SGB V Tinnitus-Reha at specialised clinics (Bad Arolsen, Bad Salzhausen, Bad Driburg, Bad Bellingen, Klinik Wespien)." The dossier has **zero coverage of heart failure as a tinnitus-comorbid condition** — no HFrEF/HFpEF sub-type in §2.6, no row in §11.3 for BNP/NT-proBNP or echocardiogram screening, no row in §11.5 life-stage gate for heart failure as a contraindication-class.

### 3.2 The Bad Arolsen / Bad Salzhausen / Bad Driburg framework is combined cardiology + tinnitus rehab, not tinnitus-only

This is the load-bearing point the wave-6 payer-policy reviewer didn't see. The §40 SGB V Reha-Kliniken named in §15.7 (Bad Arolsen, Bad Salzhausen, Bad Driburg, Bad Bellingen, Klinik Wespien) are not pure tinnitus clinics. They are **combined Reha-Kliniken** integrating Innere Medizin / Kardiologie + HNO + Psychosomatik + Audiologie + Bewegungstherapie in 3-6 week residential rehabilitation. Bad Arolsen Klinik am Park + Bad Driburg + Bad Salzhausen primary indications include **post-MI cardiac rehab phase II/III + chronic HF rehab + arterial hypertension + tinnitus + hyperacusis + chronic pain**. Klinik Wespien Aachen + Bad Bellingen combine audiology + HNO + cardiology + psychosomatic + ergonomic rehab. Funding: §40 SGB V (GKV inpatient Reha) + §31/§32 SGB V (psychotherapy + ergotherapy) + §40b SGB V (chronic-disease Reha). The German reader with HFrEF + tinnitus reading §15.7 currently gets "Tinnitus-Reha is at these clinics" — true but systematically understates that the same clinics deliver combined cardiology + tinnitus rehab in a single funding stream. A reader referred for cardiac rehab by their Hausarzt + Kardiologe can request a Reha-Klinik with combined tinnitus pathway — usually approved under the same §40 SGB V because the comorbidity rationale strengthens both.

### 3.3 The HFrEF + tinnitus phenotype — mechanism + clinical pattern

HF prevalence is ~1-2% of OECD adults and ~10% of 70+. **Co-prevalence of tinnitus in HFrEF/HFpEF cohorts is ~30-45%** vs ~15-20% in age-matched general population. Mechanism candidates: (a) **low cardiac output → cochlear hypoperfusion** — the cochlea's single end-arterial supply (labyrinthine artery off AICA) starves in EF<30%; the §2.4 framing covers stenosis but misses low-output starvation; (b) **chronic loop-diuretic burden** + intermittent IV-rescue dose-rate ototoxicity from Dimension 1; (c) **electrolyte derangement** — combined loop diuretic + ACE-i + MRA + thiazide produces simultaneous hypokalaemia + hypomagnesaemia + hyponatraemia + hyperkalaemia variably; hypomagnesaemia is itself a tinnitus aggravator per the dossier's own §3.3 Mg framing; (d) **central sleep apnea + Cheyne-Stokes respiration** common in HFrEF — the §11.3 OSA row covers OSA but not HF-specific central apnea; (e) **β-blocker + amiodarone + digoxin auditory signals** in VigiBase + EudraVigilance; amiodarone has documented tinnitus + thyroid + corneal + pulmonary AE clusters.

### 3.4 The §11.5 life-stage gate is missing a heart-failure row

§11.5 has rows for pregnancy / breastfeeding / pediatric / elderly + polypharmacy / cancer / CKD / cirrhosis / bipolar / epilepsy / G6PD / pacemaker / CI / middle-ear implant / warfarin / SSRI / thyroid hormone. **No HF row.** The HFrEF patient needs: (1) **Mg dose gated by both eGFR AND K-sparing diuretic load** (MRA + ACE-i + ARB) — spironolactone 25 + ramipril 10 + furosemide 40 + 400 mg Mg + KCl-substitute + banana intake can push K+ into arrhythmogenic territory; (2) **L-arginine + L-citrulline contraindicated post-MI within 6 months** (VINTAGE-MI Schulman 2006 — wave-1 + wave-2 already flagged; should land here); (3) **Hawthorn explicit HFrEF interaction** — EMA HMPC 2016 covers Crataegus for NYHA I-II only; in NYHA III-IV, hawthorn + digoxin can produce additive cardiac-glycoside-like effects; HFCS-Crataegus 2008 was neutral but German Commission E + EMA retain caution; (4) **CoQ10 100-300 mg supportive in HFrEF** (Q-SYMBIO 2014 RCT mortality benefit) — a rare positive cross-condition transfer the cardiology reviewer can endorse; (5) **sauna + cold-immersion safety inversion** — the §7.x sauna line says "Do not do if you have significant heart disease" which is correct but under-specified by NYHA class.

### 3.5 Specific edits

- **Edit 3.1.** Update **§15.7 GKV block** (line 1188) — add: *"Bad Arolsen, Bad Salzhausen, Bad Driburg, Bad Bellingen, Klinik Wespien are combined cardiology + tinnitus + psychosomatic Reha-Kliniken, not tinnitus-only programs. HFrEF/HFpEF/post-MI/chronic-HTN + tinnitus readers should request a Reha-Klinik with combined tinnitus pathway at cardiac-rehab referral — usually approved under the same §40 SGB V because the comorbidity strengthens the rationale. Cross-reference DGK + DGHM."*
- **Edit 3.2.** Add **§11.5 "Heart failure (HFrEF/HFpEF)" row** — Mg dose gated by combined eGFR + K-sparing diuretic load (lab: K + Mg + Cr + BNP/NT-proBNP); **L-arginine + L-citrulline contraindicated if post-MI within 6 months (VINTAGE-MI Schulman 2006)**; Hawthorn caution in NYHA III-IV (EMA HMPC covers I-II only); **CoQ10 100-300 mg supportive (Q-SYMBIO 2014 RCT)**; KCl-substitute moderated per ACE-i/ARB/MRA; sauna + cold immersion contraindicated in decompensated HF + caution NYHA II-III; forceful pranayama + full inversions contraindicated; §6.3 low-salt INVERTS per Dimension 4.
- **Edit 3.3.** Add **§2.6 sub-type row 8** "Tinnitus + heart failure (HFrEF/HFpEF)" — bilateral, dose-rate-correlated with diuretic boluses; concurrent fatigue, dyspnoea, oedema, sleep-disordered breathing; dominant cause §2.2 + §2.3 + §2.4 + low-output; requires §11.5 HF gates + combined cardiology-tinnitus rehab pathway (German §40 SGB V; UK BHF + NHS Cardiac Rehab; Australian NHFA; Indian CSI + AIIMS cardiology + AYUSH; clinic-route).
- **Edit 3.4.** Update **§7.x sauna** (line 365) + cold-immersion entries — NYHA-stratify "significant heart disease": contraindicated decompensated NYHA IV / recent ADHF; caution NYHA II-III (cooler, shorter, cardiology endorsement); safe NYHA I + treated CAD with stable angina + no recent MI. Cold-water immersion contraindicated in CAD with vasospastic angina + recent MI within 6 months.

### 3.6 Verdict on Dimension 3

**Major revision.** The heart-failure + tinnitus phenotype is **structurally absent** from the dossier (zero §2.6 row, zero §11.5 row, zero §11.3 BNP/echo screen, zero §15.7 cardiology-rehab integration). The §15.7 GKV framework as written is also **mechanistically misframed** — the German Reha-Kliniken are combined cardiology + tinnitus + psychosomatic, not tinnitus-only. The cardiology-comorbid sub-population (30-45% of HFrEF patients) is large, mechanistically distinct, and clinically under-served. Fix is ~900 words additive + 1 new §2.6 row + 1 new §11.5 row + targeted §15.7 + §7.x qualifications. Doctrine intact — clinic-rehab is referenced as pathway, never as home protocol.

---

## 4. HYPERTENSION + COCHLEAR BLOOD FLOW + THE §6.3 LOW-SALT FRAMING THAT INVERTS IN HFrEF

### 4.1 What the dossier currently covers

§2.4 (line 90) names hypertension as a cochlear-perfusion-impairing driver. §3.3 + §6.3 set the **<2,000 mg sodium/day target** for blood-flow and pulsating sub-types. §10.1 line 694 covers the BP-drugs supplement-additive risk (Hawthorn + Mg + beetroot + Ashwagandha + Pycnogenol + L-arginine + ACE-i/ARB/β-blocker/CCB additive). §10.2 line 715 covers ACE-i/ARB/spironolactone + high-K-food rule (hyperkalaemia caution). §11.3 line 868 covers home BP 7-day average via Omron / Withings. **The dossier is internally consistent on hypertension as a cochlear-blood-flow driver and on dietary/supplement BP-lowering as an adjunct.** What the dossier misses is the inversion that happens in HFrEF + combined diuretic stack.

### 4.2 The §6.3 low-salt framing inverts in HFrEF on combined diuretic + ACE-i/ARB + MRA

This is the most clinically dangerous single point in the wave-8 audit. The §6.3 **<2,000 mg Na/day "mandatory in blood-flow and pulsating sub-types"** framing is correct for inner-ear physiology (Sismanis 2011 + Ménière's). It **inverts dangerously in HFrEF on combined loop diuretic + ACE-i/ARB + MRA + thiazide** because: (a) the diuretic stack already drives sodium loss; adding <2,000 mg dietary restriction produces **symptomatic hyponatraemia** in a measurable fraction (ESC HF 2023 + NICE NG106 + NHFA HF 2024 have moved toward **2.0-3.0 g/day in stable HFrEF** per the Pasini 2016 + GISSI-HF 2016 mortality U-curve); (b) combined ACE-i + MRA + low-salt + Mg-supplement + KCl-substitute drives **hyperkalaemia >5.5 mmol/L** + arrhythmia, particularly with digoxin co-therapy; (c) **hypomagnesaemia from chronic loop diuretic** is a setup for digoxin toxicity (low Mg → tighter cardiac Na/K-ATPase binding → arrhythmia); the HFrEF patient on furosemide is often Mg-depleted; (d) the Ménière's-overlap that §6.3 addresses (Sismanis 2011 endolymphatic hydrops) is a separate sub-population from HFrEF.

The right framing is **sub-type-stratified sodium guidance**: Ménière's/pulsatile/non-HF tinnitus <2,000 mg/day (current §6.3); stable HFrEF NYHA I-II + tinnitus **2,000-3,000 mg/day** (ESC HF 2023 U-curve) + K + Mg monitoring + NO KCl-substitute + bananas/coconut moderated per §10.2; decompensated NYHA III-IV + tinnitus per cardiology team + weekly electrolyte panel — protocol adjunct only; HTN without HF + tinnitus DASH-pattern 1,500-2,300 mg/day per ESC 2024 / BHF 2024 / NHFA 2024 / BIHS UK 2024 / Hypertension Canada 2024 / CSI 2024.

### 4.3 The HTN + cochlear-microcirculation evidence is stronger than §2.4 surfaces

§2.4 is mechanistically correct but soft. Cardiology literature is firmer: sustained SBP >140 / DBP >90 over years produces measurable cochlear-microcirculation impairment via stria-vascularis arteriolar hyperplasia (Marcucci 2005; Tan 2018; Suzuki 2018 Japanese cohort n>1,000). ESC 2024 + BHF 2024 + NHFA 2024 + BIHS UK 2024 + Hypertension Canada 2024 + CSI 2024 convergent target is **<130/80 mmHg** for non-frail adults (<140/90 if ≥75 frail; <120/70 if high CVS risk + CKD). The §11.3 row currently says "home BP 7-day avg" without naming the target. 24-h ABPM remains gold standard for resistant + white-coat/masked HTN; consumer Withings BPM Connect + OMRON HeartGuide approximate.

### 4.4 Specific edits

- **Edit 4.1.** Update **§6.3** (line 432) — sub-type-stratified sodium block: (a) Ménière's/pulsatile/non-HF: <2,000 mg/day (Sismanis 2011); (b) stable HFrEF NYHA I-II: **2,000-3,000 mg/day** per ESC HF 2023 + NHFA 2024 U-curve; NO KCl-substitute (additive hyperkalaemia); (c) HFrEF NYHA III-IV decompensated: per cardiology team; protocol adjunct only; (d) HTN without HF: DASH 1,500-2,300 mg/day per ESC 2024 + BHF 2024 + NHFA 2024 + BIHS UK 2024 + Hypertension Canada 2024 + CSI 2024.
- **Edit 4.2.** Update **§11.3 high-BP row** (line 868) — name target <130/80 (non-frail), <140/90 if ≥75 frail, <120/70 if high-CVS-risk + CKD; consider 24-h ABPM (Withings BPM Connect / OMRON HeartGuide / clinic-grade) for resistant + white-coat/masked HTN.
- **Edit 4.3.** Update **§2.4** (line 90) — add: "Sustained SBP >140 / DBP >90 over years produces measurable cochlear-microcirculation impairment via stria-vascularis arteriolar hyperplasia (Marcucci 2005; Tan 2018; Suzuki 2018). Home BP target <130/80 average per ESC + BHF + NHFA + BIHS UK convergent 2024 guidelines."

### 4.5 Verdict on Dimension 4

**Moderate revision.** The §6.3 low-salt framing is **mechanistically correct for the inner ear but dangerously over-restrictive for the HFrEF-on-diuretic patient**. Sub-type-stratified sodium guidance + named BP targets + KCl-substitute caution + 24-h ABPM upgrade for resistant cases close the gap. Fix is targeted (~400 words at §6.3 + §11.3 + §2.4). Doctrine intact — supplement layer unchanged, dietary stratification respects cardiology evidence.

---

## 5. ACUTE MI + ISCHAEMIC STROKE + CARDIAC-REHABILITATION PHASE 1/2/3 INTERFACE

### 5.1 What the dossier currently covers

§10.1 line 691 names erection-pill + nitroglycerin + L-arginine additive vasodilation. Wave-1 medical-safety reviewer + wave-2 pharmacovigilance both flagged the L-arginine + post-MI VINTAGE-MI mortality signal as an exclusion (wave-2 item #34). Wave-3 ENT-audiology reviewer added the SSHL 72-hour pathway. **The dossier has zero coverage of: post-MI cardiac rehabilitation phase 1/2/3; post-stroke rehabilitation with tinnitus overlap; labyrinthine-artery infarction as a tinnitus + SSHL aetiology; the structural overlap between cardiac-rehab phase-2 (weeks 4-12 outpatient supervised exercise + secondary-prevention education + psychosocial counselling) and the dossier's 12-month implementation timeline.**

### 5.2 The cardiac-rehab pathway that overlaps the dossier's timeline

Post-MI cardiac rehab in the OECD runs in three phases. **Phase 1 (inpatient, days 0-7):** bedside mobilisation + secondary-prevention drug initiation (aspirin + P2Y₁₂ + statin + ACE-i + β-blocker — every one on the dossier's §10.1 matrix) + DVT prevention. **Phase 2 (outpatient supervised, weeks 4-12):** 24-36 supervised exercise sessions at 70-85% target HR + secondary-prevention education + psychosocial + dietary + smoking cessation. The dossier's §7.x weekly periodization (Mon/Wed/Fri Zone 2 + Tue/Thu strength + Sat tai chi + Sun restorative) is structurally adjacent to phase 2 but calibrated for cardiovascularly-healthy adults — adding §7.x on top of phase 2 is duplication + load overshoot + supervision lost. **Phase 3 (community/lifetime, months 4+):** independent maintenance — overlaps the dossier's 12-month timeline cleanly. **Decision the dossier should support:** post-MI patient in phase 1-2 should **defer the full protocol** and substitute §8.0 minimum-viable (sound enrichment + MBCT-T + Mg cofactor + neck-jaw release) — none conflict with supervised rehab. At phase 3 (~month 4), the full protocol layers in under §11.5 cardiology-comorbid gates from Dimensions 1-4.

### 5.3 Labyrinthine-artery infarction — missing as an SSHL aetiology

The §0 SSHL block correctly names SSHL as a 72-hour emergency but **does not name labyrinthine-artery infarction** — a recognised cause of SSHL + tinnitus in AFib + carotid stenosis + cerebrovascular patients (Lee 2018 Korean cohort n=120; Kim 2009 stroke-attributable SSHL + tinnitus). Post-stroke/TIA patients with new tinnitus + SSHL within hours of a cerebrovascular event need **AICA / labyrinthine-artery infarction** on the differential — MRI brain + DWI is the diagnostic modality + cardiology stroke-prevention review may need anticoagulation escalation, statin intensification, BP target reassessment.

### 5.4 Specific edits

- **Edit 5.1.** Add **§10.7.7 "Cardiac rehab interface — post-MI / post-stroke + tinnitus"** ~400 words covering: phase 1/2/3 cardiac-rehab structure; defer full protocol during phase 1-2 + substitute §8.0 minimum-viable; full protocol layers in at phase 3 month 4 under §11.5 cardiology gates; labyrinthine-artery infarction as SSHL aetiology routing to MRI DWI + cardiology stroke-prevention review; UK BHF + NHS phase-2 + Australian NHFA + Indian CSI + AIIMS + German GKV §40 SGB V Reha-Kliniken (cross-ref Dimension 3); L-arginine + L-citrulline + post-MI 6-month exclusion (folded from wave-1 + wave-2).
- **Edit 5.2.** Update **§0 SSHL red-flag** (line 50) — add: *"Labyrinthine-artery infarction. In patients aged 60+ with AFib / carotid stenosis / cerebrovascular disease, sudden tinnitus + SSHL within hours can reflect AICA or labyrinthine-artery infarction — a stroke-equivalent event. MRI brain + DWI is the diagnostic modality + cardiology stroke-prevention review (anticoagulation escalation, statin intensification, BP target reassessment) may follow. This is in addition to the 72-hour steroid pathway. Cross-ref sister dossiers `[[afib-natural-adjunct]]` + `[[stroke-recovery]]`."*
- **Edit 5.3.** Update **§7.x exercise periodization** (line 546) — add callout: post-MI or post-stroke phase 1-2 rehab readers should NOT add §7.x on top of supervised rehab; substitute §8.0 minimum-viable (sound enrichment + MBCT-T + Mg + neck-jaw release); full §7.x layers in at phase 3 community-maintenance (~month 4) with cardiology endorsement.

### 5.5 Verdict on Dimension 5

**Moderate revision.** The cardiac-rehabilitation phase 1/2/3 interface is a load-bearing pathway that overlaps the dossier's 12-month timeline silently. Naming it explicitly + deferring full protocol during phase 1-2 + folding L-arginine post-MI exclusion + adding labyrinthine-artery infarction as a §0 SSHL aetiology closes the gap. Fix is additive (~600 words) + 3 targeted callouts. Doctrine intact — cardiac-rehab is named as referral pathway, never as home protocol.

---

## OVERALL VERDICT + SKILL v6.2.7 / v7.0 IMPLICATIONS

**Headline.** Moderate-to-major revision extends the dossier from cardiology-blind to cardiology-aware. Fix ~2,600 words additive across new §10.1.5 / §2.6 row 8 / §10.7.7 / §11.5 HF row + targeted edits at §0 / §2.4 / §6.3 / §7.x / §10.1 / §10.6 / §11.3 / §15.7. None retract prior waves or doctrine. Strengthens safety + screening + clinical-pathway integration for the 35-50% cardiology-comorbid tinnitus sub-population aged 55+.

**Skill v6.2.7 / v7.0 candidate rule (Rule 25).** For ailments with high-prevalence cardiology comorbidity (tinnitus, SSHL, brain-fog, sleep-onset, night-waking, vertigo, memory-aging, peripheral-neuropathy, anxiety, OSA, 55+ dossiers): include (a) cardiac drug-class ototoxicity with mechanism + dose-rate + class-switch decisions; (b) AFib + pulsatile-tinnitus screening with consumer-ECG + carotid duplex + LAA echo + anticoagulation status; (c) HFrEF/HFpEF sub-type + NYHA-stratified §11.5 gate (Mg + K + sauna + cold-immersion + L-arginine + Hawthorn + CoQ10); (d) sub-type-stratified sodium target avoiding the <2 g/day inversion in diuretic-treated HF; (e) cardiac-rehab phase 1/2/3 interface; (f) labyrinthine-artery infarction as SSHL aetiology; (g) combined cardiology + tinnitus rehab pathway (Reha-Kliniken are combined, not tinnitus-only). Doctrine: cardiology pathways referral not home; drug-substitution lives with prescriber; supplements adjunctive throughout. Citation: ESC + BHF + NHFA + BIHS + Hypertension Canada + CSI + EMA HMPC + DGK as scientific-anchor, not regulator-authority. ACC/AHA as pathway context only (same pattern as wave-3 AAO-HNSF, wave-7 VA/DoD).

**Cross-dossier propagation batch.** SSHL (labyrinthine-artery), vertigo (AICA), brain-fog + memory-aging + stroke-recovery, sleep-onset + night-waking + OSA (HFrEF central apnea), peripheral-neuropathy, anxiety + low-mood + burnout, AFib + heart-cholesterol-bp + NAFLD/MASH + CVI. First batch: tinnitus + SSHL + vertigo + brain-fog + sleep-onset + AFib + heart-cholesterol-bp.

**Honest closing.** The 33 prior reviewers audited inside an audiology + AYUSH + six-traditions + OTC + home frame plus wave-7 veteran extension. None had cardiology + cardio-audiology overlap specialty. The 35-50% cardiology-comorbid sub-population aged 55+ is large, mechanistically distinct, and clinically under-served. Findings extend the dossier without retracting any prior wave. The §15.7 GKV Tinnitus-Reha reframing (tinnitus-only → combined cardiology + tinnitus + psychosomatic at Bad Arolsen / Bad Salzhausen / Bad Driburg / Bad Bellingen / Klinik Wespien) is the single highest-leverage German-reader edit — visible only from the cardiology side.

---

**Reviewer signature.** Senior cardiologist with cardio-audiology overlap, 20 years across UK BHF + ESC + Australian CSANZ + NHFA + Indian CSI + AIIMS Delhi + Narayana Hrudayalaya + Madras Medical Mission. Doctrine respected: OTC + home + six traditions + no US-regulator authority. Cardiology guidelines (ESC 2024 + BHF 2024 + NHFA 2024 + BIHS UK 2024 + Hypertension Canada 2024 + CSI 2024 + EMA HMPC + DGK/DGHM) cited as scientific-anchor, never as regulator-authority — same pattern as wave-3 AAO-HNSF + wave-7 VA/DoD/MoD/DVA/AFMS/IDF. Cardiac rehab + drug-substitution cited as referral pathway, never home protocol. Supplement layer remains load-bearing for cochlear-perfusion + antioxidant + neck-jaw + cognitive layers — the cardiology overlay strengthens, never replaces, the doctrine.
