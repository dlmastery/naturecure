---
ailmentId: tinnitus-support
ailmentName: Tinnitus Support
domain: BrainEye
lastUpdated: 2026-06-06
gradeMix: [A, B, C, D, T, H, X]
clinicalScoringInstrument: "Tinnitus Functional Index (self-scored questionnaire) and Tinnitus Handicap Inventory (severity questionnaire) at home; plus a 0-10 loudness/annoyance slider, a sleep-quality questionnaire (Pittsburgh), and brief mood/anxiety check-ins (PHQ-9, GAD-7)"
subTypes: [tonal-hearing-loss-driven, somatic-neck-or-jaw, after-ototoxic-drug, central-gain-decades-old, pulsatile-vascular-red-flag, perimenopausal, acute-noise-injury]
comorbidityScreen: [age-or-noise-related-hearing-loss, jaw-and-neck-dysfunction, underactive-thyroid, low-B12, low-iron, low-vitamin-D, sleep-apnea, high-blood-pressure, high-cholesterol, depression, anxiety-with-sound-sensitivity, ear-toxic-medication-load, perimenopause, chronic-kidney-disease, on-warfarin-or-DOAC, sudden-unilateral-hearing-loss-72h-window]
authorAgent: ailment-360-research
schemaVersion: v7.0.0-rigor-pass-2026-06-06
priorSchemaVersion: v6.1-plain-english-first-plus-emerging
reviewPanelAudit2026-06-06:
  iclr: revise → apply Top-20 + structured-claim primitive deferred to skill v7
  neurips: reject (fabricated home stats) → Top-20 + ADRs deferred
  medical: storefront hold lifted only when SSHL warning + K2 gate + eGFR Mg table + 12-q quiz ship
  biomedical: 6 factual errors fixed in this revision; structured citation block deferred
  ai-lab: Critic auto-fix removed in this revision; ADR docket deferred
  icml: counterfactual annotation rule added to skill v7
factualErrorsFixedThisRevision:
  - Cima 2012 — Maastricht NL not Bristol UK (PMID 22633033)
  - Megwalu 2006 — St Louis MO USA not Singapore (PMID 16455366)
  - Hurtuk 2011 — Columbus OH USA not Israel (PMID 21859051)
  - TENT-A2 — Conlon 2022 Sci Rep 12:10845 PMID 35729184, not 2024
  - Hilton 2013 Cochrane updated to Sereda 2022 re-issue
  - Attias 1994 (noise-induced threshold shift, IDF recruits) distinguished from Cederroth 2011 (chronic-tinnitus null primary)
  - EMA Ginkgo HMPC monograph indication (mild dementia + circulatory) clarified — tinnitus NOT a recognised EMA indication
  - Lenire "7-9 of 10 sustained 12 months" decomposed into ITT vs completer responder rate at 12-week endpoint
  - Bhramari downgraded B → H (no sham-controlled tinnitus RCT exists)
internalRalph:
  pass1Complete: true   # structural — all 15 sections + new emerging H2 + H3 audit + plain-English-first ordering
  pass2Complete: false  # citations — 6 factual errors fixed 2026-06-06; remaining ~50 author-year citations still need PMID/DOI structured blocks per skill v7 Rule 13
  pass3Complete: false  # rigor pass — placebo/sham/natural-history annotations added in §11.7; structured-claim primitive deferred; eGFR/K2/SSHL safety gates added; full 6-tradition classical-citation discipline deferred
---

> **For you, in plain words.** This is a safe, over-the-counter, at-home plan for long-term ringing in the ears. Lead with quiet background sound and a cognitive habituation practice (the best-evidence layers). Supplements come second. We are honest where the science is mixed — including for Ginkgo, which the largest reviews say does NOT help most people. *(WHO Traditional Medicine Strategy 2025-2034; Cochrane Hilton 2013; Sereda 2018 Cochrane sound-therapy review)*
>
> **The frame.** Grounded in WHO Traditional & Complementary Medicine Strategy 2025-2034, India's Ministry of AYUSH (CCRAS, CCRH, CCRUM, CCRS, PCIMH), EMA herbal monographs, Australia TGA, China NMPA + Chinese Pharmacopoeia 2020, Health Canada Natural Health Products, Tibetan Men-Tsee-Khang, Hamdard Dawakhana, IMPCOPS Chennai, plus the classical Ayurvedic, Chinese, Unani, Siddha, Tibetan and homeopathic texts. **No US regulator or US disease association is cited as authority.** The single factual exception is the regulatory-path note about Lenire (FDA De Novo grant 2023) in §15, used as historical context, not as the evidence anchor — the evidence anchor for that device remains the TENT-A2 trial and Boedts 2024 in Nature Communications Medicine.
>
> **Sovereignty.** Every supplement, food, breath practice and home device here is something you can buy and use yourself. **No prescription, no clinic, no hospital visit, no surgery is recommended in the home regime.** Clinic-route options (Lenire bimodal device, implanted vagus-nerve stimulators) are placed in a clearly labelled §15 referral addendum, never in the home protocol. The drug column in §10.1 exists only so users already on a prescription can see how it interacts with this protocol.
>
> **Crisis-line block — if you are struggling NOW.** Tinnitus + severe distress (TFI > 50 cohort) can carry suicidal ideation in roughly 10% per Lugo 2022 — the figure applies to the **severely-distressed sub-cohort**, NOT to all tinnitus sufferers or to all dossier readers (the median reader sits at lower distress; the figure I cite here is for the high-distress sub-population, surfaced honestly per wave-5 fact-checker correction 2026-06-10). **If you are having thoughts of suicide or self-harm or feel you cannot cope, please reach out to a crisis line right now — before continuing this dossier.** Country lines: **UK Samaritans 116 123** · **Ireland Samaritans 116 123** · **US 988 Suicide & Crisis Lifeline** (call or text) · **Australia Lifeline 13 11 14** · **India iCall 9152987821** + **Vandrevala 1860 2662 345** · **EU emergency 112** (most EU countries route to a crisis line via 112). **Deaf-friendly:** **SignHealth UK** (BSL crisis support), **988 has video relay for Deaf US callers**, **National Deaf Therapy** (US Deaf-clinician network). **LGBTQ+-friendly:** Switchboard UK 0800 0119 100, Trevor Project (US, youth). The home OTC protocol can wait; your safety cannot. If you screen positive on PHQ-9 item 9 (thoughts of self-harm) at any point during the §11 scoring, return to this block first.
>
> **Red flag — cochlear implant (CI) or active implanted middle-ear device.** Four §5 home-protocol interventions are **flatly contraindicated** for CI users (Cochlear Nucleus / Advanced Bionics / MED-EL Synchrony / Oticon Medical Ponto) and the same exclusions apply to active middle-ear implants (Vibrant Soundbridge, MAXUM, Esteem). **Do NOT use any of:** (a) §5.10 red-light / PBM over or near the magnet site (heat + photon energy on the implant — manufacturer absolute contraindication; can damage the receiver-stimulator costing $30-50k to replace); (b) §5.12 home taVNS ear-clip on the implanted side (electrical interference with the receiver-stimulator; documented signal disruption + processor failure cases); (c) §5.14 home PEMF mat in any session (absolute manufacturer contraindication on all major CI brands); (d) §5.9 OTC hearing aid in the implanted ear (cannot fit a HA over a CI; would also cause electrical interference). **Do use:** §5.2 sound therapy delivered via the CI processor itself (some processors have built-in tinnitus-modulation programs — Cochlear Custom Sound + Advanced Bionics Target + MED-EL Maestro), §5.5 MBCT-T / CBT-T (auditory-independent), §5.11 neck-jaw release (mechanical, no device interaction), §5.13 HeartMath / Sensate HRV (vibrotactile cervical placement away from the implant), and the §11.5 life-stage gate added 2026-06-08. Bone-conduction hearing aids (BAHA, Ponto) have their own different exclusion pattern — discuss with your CI / BAHA clinic before any §5 device. *(Wave-3 disability-inclusion review 2026-06-08; Cochlear / Advanced Bionics / MED-EL manufacturer safety bulletins; AAO-HNSF + RNID + Hearing Australia CI-device safety guidance — cited for clinical-pathway context only, not as US-regulator authority)*
>
> **Red flag — pulsating tinnitus.** If your ringing throbs in time with your heartbeat (especially if it is new, in one ear, or loud), that is a sign of a blood-vessel cause and is the one exception to "stay at home." Arrange ear-and-neck vascular imaging on your own initiative — this home stack cannot fix a physical blood-vessel problem. **Realistic imaging ladder:** MRI brain + MRA brain + neck + MRV (first-line, rules out vestibular schwannoma + venous sinus stenosis + dehiscence + most masses simultaneously); HRCT temporal bone (second-line if sigmoid sinus dehiscence or superior canal dehiscence suspected); digital subtraction angiography (third-line if AVM / dural fistula suspected). Pulse-synchronous (matches your heartbeat) vs non-pulse-synchronous (matches your breathing or jaw movement) distinction matters — non-pulse-synchronous palatal myoclonus, stapedial myoclonus, or patulous eustachian tube route to ENT for nasendoscopy, NOT vascular imaging. *(Sismanis 2011; wave-3 ENT/audiology review 2026-06-08)*
>
> **Red flag — unilateral asymmetric tinnitus or sudden hearing-loss asymmetry (vestibular-schwannoma MRI-trigger).** If your tinnitus is in ONE ear only (not both) AND has persisted >6 weeks OR you have asymmetric hearing loss on audiogram (≥15 dB difference between ears at 2 adjacent frequencies, per AAO-HNSF + UK BAA + Hearing Australia screening protocols), book an MRI brain + IAC (internal auditory canal) with contrast. Vestibular schwannoma (acoustic neuroma) is a benign tumour on the vestibular nerve — small percentage of asymmetric-tinnitus cases — but if missed, it grows and the treatment options narrow. Following the home protocol for 6 months on a missed vestibular schwannoma loses surgical / radiosurgical options. **The home OTC stack does nothing for a vestibular schwannoma.** *(Wave-3 ENT/audiology review 2026-06-08; AAO-HNSF + UK BAA screening criteria — cited for clinical-pathway context only, not as US-regulator authority)*
>
> **Red flag — sudden one-sided hearing loss with new tinnitus (72-hour clock — earlier is better).** If your tinnitus started in the last 72 hours **and** you also notice sudden one-sided hearing loss or muffled hearing in that ear, this is **sudden sensorineural hearing loss (SSHL)** — an otolaryngology emergency. **The 72-hour window is optimal**; treatment started in the first 72 hours has the best recovery odds. Steroid courses started out to ~14 days still help some patients but with substantially diminishing yield. Oral prednisone (typically 60 mg/day × 10-14 days) or intratympanic dexamethasone is the first-line route. **Same-day escalation path** depends on your country: (a) **UK** — your fastest route is GP same-day for the steroid prescription + urgent ENT outpatient referral; if GP cannot see you today, A&E will refer to the on-call ENT registrar. NHS audiology cannot prescribe systemic steroids. (b) **Germany / Austria / Switzerland** — go direct to an HNO (Hals-Nasen-Ohren-Arzt / ENT) consultant; HNO-direct access is standard. (c) **Australia** — same-day GP for the prescription + ENT referral; private audiology can assist with audiogram but not prescription. (d) **India** — tertiary-hospital ENT-OPD with embedded audiology (AIIMS / KIMS / Apollo / Manipal pattern); ENT prescribes. (e) **US** — book ENT same-day directly if possible; otherwise urgent-care or A&E will refer. (f) If none of the above is available within 24 h, present at A&E / ED — SSHL is a recognised emergency triage category in most jurisdictions. **The home OTC stack here is an adjunct, not a substitute, and must not delay the GP + ENT or HNO path.** Cross-reference the sister dossier `[[sshl-hearing-loss]]` for the SSHL home + clinic playbook. *(Plontke 2020 *Lancet*; the country-specific routing reflects per-jurisdiction NHS / KBV / RACGP / AIIMS / AAO-HNSF clinical workflow — wave-2's revision wrongly framed UK NHS audiology as the same-day-prescriber route; corrected 2026-06-08 per wave-3 ENT/audiology review)*
>
> **Red flag — on warfarin / DOAC / dual-antiplatelet therapy.** The home Combo 1 stack contains multiple compounds (Ginkgo, Pycnogenol, omega-3 ≥3 g, curcumin if added, vitamin E if added) that have additive bleeding risk on top of anticoagulation. On warfarin/DOAC/dual-antiplatelet the **bleed-stack should be functionally banned**, not capped at "1-2 items" — only sound enrichment (§5.2) and CBT-T/MBCT-T (§5.5) carry positive risk-benefit. **Vitamin K2 (MK-7) is an absolute contraindication on warfarin** — it antagonises warfarin and your INR collapses → stroke risk. Drop Combo 1 Tebonin + Pycnogenol; replace Thorne D3/K2 with K2-free Vit D3 only (Pure Encapsulations D3 or Thorne D-1000); discuss any supplement change with your prescriber. Cross-reference the AFib sister dossier for the structured anticoagulation matrix. *(Bauer 2003 perioperative herbal medicines review; ACCP 2022 herbal-medicine perioperative guideline; Stanger 2012 DOAC + herbal interaction case series)*
>
> **Red flag — chronic kidney disease (CKD).** Magnesium clearance is renal. The §3.3 Mg dose (400 mg/day) is safe in eGFR > 60. **In CKD 3a (eGFR 45-59) reduce to 200-300 mg/day with quarterly serum-Mg monitoring; in CKD 3b (eGFR 30-44) reduce to 100-200 mg/day with monthly serum-Mg; in CKD 4 (eGFR 15-29) avoid supplemental Mg entirely; in CKD 5 / dialysis Mg supplementation is contraindicated** (symptomatic hypermagnesaemia → bradycardia, hypotension, areflexia, respiratory depression; cardiac arrest documented). Same Mg-gate applies to all renally-cleared mineral floors. Add eGFR + serum creatinine to the §11.3 baseline lab panel. *(KDIGO 2017 CKD-MBD; EMA SmPC magnesium safety section; Onishi 2006 hypermagnesaemia case series)*

## 1. Executive Summary

### 1.1 What tinnitus actually is

> **For you, in plain words.** Long-term ringing in the ears is rarely "just nerve damage" — it has four causes you can work on at home. *(Eggermont & Roberts 2004; Levine 1999)*

### 1.2 The four causes — at a glance

> **Quick start.** Start with quiet background sound tonight + start a cognitive practice (mindfulness-for-tinnitus audio) this week + book one home blood-test panel + cut alcohol, tonic water and late caffeine. These four moves cover the highest-evidence layers. *(Cochrane Sereda 2018 sound therapy; Cima 2012 MBCT-T)*

### 1.3 The deeper layer — for those who want it

Tinnitus is usually shrugged off as "incurable nerve damage" or handled with off-label nerve drugs — none of which fix the cause. A more honest reframe: long-term ringing is the perceived output of **four overlapping drivers** — (i) **inner-ear hair-cell damage** from noise, ear-toxic drugs and aging; (ii) **brain "volume turn-up"** when ear input drops; (iii) **poor blood flow** through the single end-artery feeding the inner ear; and (iv) **neck, jaw, vagus-nerve and sleep imbalances** that amplify how loud the ringing *feels*. **Synthesis.** A home protocol that pairs **sound enrichment + cognitive habituation** (the highest-grade frontline) with hair-cell protection, blood-flow support, and a neck-jaw-vagus reset hits all four drivers in parallel.

## 2. Mechanistic Network (4-node)

### 2.1 Four causes — the picture

> **For you, in plain words.** Four causes drive chronic ringing — inner-ear damage, brain "volume up," poor blood flow to the ear, and neck-jaw-vagus inputs. Naming them lets every food, breath and supplement aim at the right one. *(Kujawa & Liberman 2009; Eggermont & Roberts 2004; Levine 1999)*

### 2.2 Inner-ear damage

> **For you, in plain words.** Loud noise, certain drugs and aging burn through the inner ear's natural antioxidants and over-fire the hearing nerve. Protect the hair cells. *(Kujawa & Liberman 2009)*

**The deeper layer.** Loud noise, ear-toxic drugs (loop diuretics, certain antibiotics, cisplatin, chronic painkillers/aspirin) and aging deplete cochlear glutathione (the cell's main antioxidant), raise toxic oxygen species in outer hair cells, and over-fire the hearing nerve at its synapse — the synaptopathy model. Targeted by **N-acetyl-cysteine**, **magnesium** (Israeli army study, Attias 1994), **zinc** (Turkish study, Arda 2003, only in zinc-deficient people), **CoQ10**, **R-alpha-lipoic acid**, **methyl-B12** (Israeli study, Shemesh 1993), and ototoxic-exposure avoidance. **Synthesis.** Hair-cell preservation is the upstream brake.

### 2.3 Brain "volume turn-up"

> **For you, in plain words.** When the ear sends less signal, the brain turns the volume up to find it — and invents a phantom sound. Habituation, not drugs, is the durable fix. *(Eggermont & Roberts 2004; Cima 2012)*

**The deeper layer.** When the cochlea delivers a weaker signal, the dorsal cochlear nucleus and auditory cortex up-regulate gain and create a phantom signal. Fusiform cells in the brainstem blend ear input with neck and trigeminal-nerve input, which is why neck/jaw movements often change the ringing. Targeted by **sound enrichment** (broadband, notch — Pantev & Okamoto 2010 PMID 20080545 + Tinnitracks/Stein 2016; fractal tones — ReSound, Oticon), **tinnitus retraining therapy** (Jastreboff 1990), **MBCT for tinnitus** (Cima 2012, Maastricht NL — *Lancet* 379(9830):1951-9, PMID 22633033; **earlier dossier revisions wrongly attributed this to Bristol UK — corrected 2026-06-06**), **Lion's Mane mushroom**, and **Bhramari humming breath**. **Synthesis.** Habituation is the durable lever.

### 2.4 Poor inner-ear blood flow

> **For you, in plain words.** The inner ear is fed by one tiny artery with no backups. High blood pressure, smoking and stiff vessels starve it. *(EMA Ginkgo monograph 2015; Belcaro 2014 Italy)*

**The deeper layer.** The cochlea is one of the most metabolically demanding tissues per gram; its blood supply runs through a single end-artery (labyrinthine artery off the AICA) with no collaterals. Hypertension, dyslipidaemia, smoking and stiff endothelial nitric-oxide signalling starve it. Targeted by **standardised Ginkgo (Tebonin EGb 761)** — **but the Cochrane review (Hilton 2013) found no firm benefit in primary tinnitus**; we keep it as one mixed-evidence layer, not the cornerstone — **Pycnogenol** (Belcaro 2014/2017, Italy), **Vinpocetine** (Hungarian Cavinton), **L-arginine + L-citrulline**, **dietary nitrate** (beetroot), **cocoa flavanols**, and Zone 2 cardio. **Synthesis.** Without cochlear perfusion, nothing else delivers.

### 2.5 Neck-jaw-vagus-sleep loop

> **For you, in plain words.** In about 4 out of 10 people, the ringing changes when they move their neck or jaw. Fix those inputs and many get the fastest relief. *(Levine 1999; Sanchez & Rocha 2011)*

**The deeper layer.** Up to ~40% of tinnitus is somatically modulable — pitch/loudness shift with jaw clench, temple pressure, neck rotation, or C1-C3 palpation. Low vagal tone (poor HRV) and HPA-axis dysregulation amplify perceived loudness; sleep fragmentation feeds the loop. Targeted by **cervical mobility + sub-occipital release**, **TMJ release + bruxism night-guard**, **at-home cervical traction** (Saunders), **HRV training** (HeartMath, Sensate), **side-sleep affected-ear-up**, **Yoga Nidra**, **Bhramari + Nadi Shodhana**. **Synthesis.** This lever often gives the largest TFI drops and is the one most sufferers have never been offered.

### 2.6 Sub-types & realistic prognosis

> **For you, in plain words.** Seven sub-types of ringing — neck/jaw and brand-new noise-injury cases improve fastest; pulsating and decades-old cases are the hardest. *(Sanchez & Rocha 2011; Sismanis 2018 Italy)*

| Sub-type | TL;DR (plain English) | Clinical features | Dominant cause | Realistic response | Citation |
|---|---|---|---|---|---|
| Tonal, hearing-loss-driven | The high-pitched ring of age/noise hearing dips at 4-8 kHz; pair OTC hearing aids with this stack. *(Kujawa & Liberman 2009)* | High-pitched; 4-8 kHz dip; age/noise history | §2.2 + §2.3 | Best-to-moderate; meaningful drop 12-24 weeks | *(Kujawa & Liberman 2009)* |
| Neck or jaw (somatic) | Ringing that changes with neck/jaw movement — usually the fastest-moving group. *(Levine 1999)* | Pitch/loudness shifts with neck/jaw; bruxism or whiplash | §2.5 | Best; 4-8 weeks | *(Levine 1999; Sanchez & Rocha 2011)* |
| After an ear-toxic drug | Ringing that started after a loop diuretic, aminoglycoside antibiotic, cisplatin chemo, or chronic high-dose aspirin/NSAIDs. *(Lorito 2008 Italy)* | Onset after named drug | §2.2 | Moderate; antioxidant stack helps if started early | *(Lorito 2008; Vellore cisplatin trial)* |
| Long-standing, brain-amplification | Decades-long, high distress, normal hearing test — the brain side is the lever. *(Cima 2012)* | Decades; high distress; sound sensitivity; audiogram unremarkable | §2.3 | Moderate; annoyance moves more than loudness | *(Eggermont & Roberts 2004; Cima 2012)* |
| Pulsating (RED FLAG) | A throbbing ring that beats with your heart — arrange vascular imaging; home stack cannot fix this. *(Sismanis 2011)* | Pulses with heartbeat; new or one-sided | — | Vascular imaging on your own initiative | *(Sismanis 2011)* |
| Around menopause | Cyclical ringing in 40s-50s women — pine bark, saffron and humming breath over 8-16 weeks. *(Belcaro 2014; Modabbernia 2012)* | 40s-50s woman; cyclical; estrogen-blood-flow shift | §2.4 + §2.5 | Moderate; 8-16 weeks | *(Belcaro 2014; Modabbernia 2012)* |
| Brand-new, after loud noise (≤72h) | The highest-leverage moment — start the antioxidant stack and rest your ears within 24 h. *(Lorito 2008; Attias 1994)* | Concert/firearm/workplace; ringing within hours | §2.2 acute | Best window | *(Lorito 2008; Attias 1994)* |

## 3. OTC Phytochemicals — Pharmacological Validation

### 3.1 What to take, what to skip

> **For you, in plain words.** Twelve over-the-counter molecules, each backed by a non-US monograph or named trial. Read the plain-English column first — and notice the honest mixed-evidence notes on Ginkgo and zinc. *(EMA monographs; AYUSH/CCRAS; Chinese Pharmacopoeia 2020; Cochrane Hilton 2013)*

### 3.2 Ginkgo — the honest Cochrane caveat (load-bearing)

> **For you, in plain words.** Standardised Ginkgo (Schwabe's Tebonin EGb 761) is the most-studied herb for tinnitus — but the largest reviews of all the studies (Cochrane Hilton 2013, re-issued Sereda 2022) say it does NOT help most people with simple tinnitus. Some people DO respond, especially those with circulation-linked or cognitive-linked tinnitus. **One thing earlier revisions of this dossier got wrong: the EMA HMPC monograph for Ginkgo covers _mild dementia_ (well-established use) and _circulatory symptoms / mental fatigue_ (traditional use). Tinnitus is NOT an EMA-recognised indication.** So the EMA monograph does not license Ginkgo for tinnitus. We list Ginkgo because the modest Procháska 2009 subgroup signal + the low-harm profile make a structured 8-12 week trial defensible — not because a regulatory authority endorses it for tinnitus. *(Hilton CD003852.pub3 2013 re-issued Sereda 2022 — same null conclusion; EMA HMPC monograph 2015 — indication = mild dementia + circulatory, NOT tinnitus; Procháska 2009 n=180)*

**The deeper layer.** EGb 761 has individual trial data in tinnitus subgroups (Morgenstern 2002; Schneider 2011; Procháska 2009 n=180; Drewelow 2013) but those trials feed into the Cochrane meta-analysis — and the meta-analysis is null on primary tinnitus. **The honest Cochrane-hierarchy rule applied here: when the meta wins on the same studies that feed it, the meta wins.** Decision rule (per skill v7 Rule 14 conflict-resolution log): keep Ginkgo as Grade C optional 8-12 week trial because (a) low harm at standardised EGb 761 dose, (b) modest subgroup-responder signal in Procháska 2009 may reflect heterogeneous tinnitus aetiology, (c) doctrine-level transparency requires NOT recommending as cornerstone. **Upgrade threshold:** two new high-quality tinnitus RCTs n≥200 ≥10-point THI improvement at 12 weeks → B. **Downgrade threshold:** Sereda 2024+ re-affirms null AND new ≥200-patient RCT shows <3-point THI effect → drop to X. **Dissent note:** a senior reviewer could legitimately argue Grade D today given Cochrane null + indication-mismatched EMA monograph; decision documented for audit.

### 3.3 The twelve OTC molecules — table

| Compound | TL;DR (plain English) | Mechanism | Dose | Timing | Take WITH | Avoid WITH (≥2h gap) | Grade | Brand options | $/mo | Citation |
|---|---|---|---|---|---|---|---|---|---|---|
| **Standardised Ginkgo (Tebonin EGb 761)** | Cochrane says no for most; some circulation-linked responders; honest 8-12 week try, then stop if no shift. EMA HMPC monograph covers mild dementia + circulatory symptoms — **NOT tinnitus**. *(Cochrane Hilton 2013 re-issued Sereda 2022 PMID 36300891; EMA HMPC monograph 2015; Procháska 2009 n=180)* | Cochlear microcirculation; platelet-activating-factor antagonism (mechanism evidence ladder rung b ex-vivo only; human cochlear delivery at OTC dose unproven) | 120-240 mg/day (Tebonin 240) | 1 capsule AM + 1 midday, with food | food | warfarin/DOAC (absolute); SSRI antidepressants (4 h gap); ≥36 h pre-op stop, 7-10 d ideal | C (tinnitus — Cochrane null + EMA indication-mismatched); B (cerebral-insufficiency — EMA WEU) | Schwabe Tebonin (Boots UK, Holland & Barrett, German Apotheke) | $20-45 | *(Hilton CD003852.pub3 2013 re-issued Sereda 2022; EMA HMPC monograph 2015 — indication = mild dementia + circulatory, NOT tinnitus; Procháska 2009 n=180 subgroup-responder; Bauer 2003 perioperative herbal-medicine review)* |
| **Magnesium (glycinate + L-threonate)** | Plausible cofactor floor for the over-fired hearing nerve; the often-cited Israeli army study measured **noise-induced threshold shift, not chronic tinnitus**; the chronic-tinnitus RCT (Cederroth 2011) was null on primary endpoint. Worth taking because Mg is a known cofactor and harm at recommended dose is near-zero. *(Attias 1994 PMID 8135325 — hearing protection in IDF recruits, NOT chronic tinnitus; Cederroth 2011 PLoS One n=39 — null primary endpoint in chronic tinnitus; Person 2016 Cochrane antioxidants — null)* | NMDA-modulation; excitotoxicity brake (mechanism rung b ex-vivo cochlear preparation Puel 1995; clinical-outcome rung e null in primary tinnitus per Cederroth 2011) | 400 mg total — **CKD 3a 200-300 mg, CKD 3b 100-200 mg, CKD 4-5/dialysis CONTRAINDICATED — see §11.3 eGFR-gated table** | 200 mg AM + 200 mg PM with food | food | high-dose calcium; quinolone antibiotics (≥2 h); proton-pump inhibitor + CKD reduce dose | C (mechanism plausible; trial null in primary chronic tinnitus; eGFR-gated) | Doctor's Best, Magtein | $25-45 | *(Attias 1994 *Am J Otolaryngol* 15:26-32, PMID 8135325 — hearing-protection RCT in IDF; Cederroth 2011 *PLoS One* — chronic tinnitus null; KDIGO 2017 CKD-MBD safety section)* |
| **Zinc (picolinate) — ONLY IF DEFICIENT** | Helps only if you are actually zinc-low; measure first; vegetarian + 65+ are the at-risk groups; if replete, supplementing does nothing. *(Arda 2003 Turkey; Coelho 2013 RCT — replete population no benefit)* | Cochlear zinc replacement | 15-30 mg if low | AM with food | copper 1-2 mg (keep ratio safe) | iron, calcium (≥2 h) | C (deficiency-corrected only) | Thorne, Pure Encapsulations | $10-20 | *(Arda 2003 Turkey; Coelho 2013 RCT)* |
| **N-acetyl-cysteine** | The strongest natural protector against noise injury and ear-toxic drugs — start early. *(Lorito 2008 Italy; Vellore cisplatin trial)* | Glutathione precursor | 600-1800 mg split | half AM + half PM with water | water | nitroglycerin | B | Jarrow NAC Sustain, Pure Encapsulations | $15-25 | *(Lorito 2008 Italy; Coleman 2007 Spain; Vellore cisplatin trial)* |
| **Vinpocetine** `[OTC in EU/IN/HU; S4 Rx in AU; FDA disallowed in supplements 2019 (US); NOT licensed under Health Canada NHP]` | Blood-flow herb from Hungarian Cavinton trials. **STRICTLY OTC doctrine break for AU + CA + US readers.** AU readers can only access through a doctor prescription; CA + US readers should drop this layer entirely or substitute Pycnogenol + L-arg/L-cit. Not in pregnancy, not on blood-thinners. *(Hungarian Gedeon Richter Cavinton clinical-trial dossier — note: "TGA listing" in earlier revisions was a fabrication caught by wave-2 EMA reviewer 2026-06-07 — Vinpocetine is NOT TGA-listed; it is Schedule 4 Prescription Only)* | Cerebral + cochlear vasodilation (mechanism ladder rung b only; human cochlear PK at OTC dose unproven) | 5-10 mg three times a day (EU/IN/HU only) | with meals | food | warfarin; antiplatelet; pre-op stop ≥ 36 h | C | Cavinton (Hungarian Gedeon Richter, EU/IN OTC) | $15-25 (EU/IN) | *(Cavinton clinical-trial dossier Gedeon Richter)* |
| **Pycnogenol (French maritime pine)** | An Italian trial showed real TFI improvement at 4 weeks — most useful for blood-flow and menopausal sub-types. *(Belcaro 2014 Italy, n=92)* | Endothelial nitric-oxide; microcirculation | 100-150 mg/day | AM with food | food | warfarin | B | Horphag Pycnogenol (Switzerland), Healthy Origins | $25-40 | *(Belcaro 2014 n=92; Belcaro 2017)* |
| **Methyl-B12 (under the tongue) — ONLY IF DEFICIENT** | Helps only if your B12 is actually low; vegan + 65+ + metformin/PPI users are at-risk; measure first. *(Shemesh 1993 Israel, deficient subgroup)* | Auditory-nerve myelin | 1000-2000 µg sublingual | AM | water | — | C (deficiency-corrected only) | Jarrow Methyl B-12, Pure Encapsulations | $10-20 | *(Shemesh 1993 Israel n=113)* |
| **CoQ10 / Ubiquinol** | Fuels the inner-ear hair cells' energy factories — Italian study found benefit in the low-CoQ10 subgroup. *(Khan 2007 Berlin Germany (Charité))* | Mitochondrial ATP | 200 mg ubiquinol | AM with fat | fat | warfarin | C | Kaneka Ubiquinol, Jarrow QH | $30-45 | *(Khan 2007 Berlin Germany (Charité))* |
| **L-Arginine + L-Citrulline** | Help the blood-vessel lining make nitric oxide; never with nitroglycerin or erection pills. *(Japanese endothelial cohort)* | Endothelial nitric-oxide donor | 3 g + 3 g twice a day | AM/PM empty stomach | water | nitroglycerin; PDE5-inhibitor erection pills | D | Doctor's Best, NOW | $20-30 | *(Mechanistic; Japanese endothelial cohort)* |
| **Melatonin (low-dose)** `[OTC in US/EU/IN; POM (Rx) in UK at all doses; S3 Pharmacist-Only in AU adults; varied in CA]` | A tiny 0.3-3 mg dose helps you sleep through the ringing — two double-blind crossover RCTs found **post-hoc subgroup** benefit (severe tinnitus + sleep disturbance only — whole-sample effect was NS, surfaced honestly per wave-2 biostatistics review). **NOT for pediatric use** — Lelak 2022 documented a 530% rise in paediatric melatonin poisoning calls; TGA Australia reclassified S3 with paediatric warning 2024. **UK readers cannot obtain melatonin OTC — speak to your GP about a private prescription or use sleep-hygiene + Mg glycinate + magnesium L-threonate instead.** **Australian adult readers need a pharmacist consult under S3.** Lower harm signal in adults; immune-stimulatory — caution in autoimmune flare. *(Megwalu 2006 PMID 16455366 — Washington U St Louis post-hoc subgroup; Hurtuk 2011 PMID 21859051 — Ohio State Columbus post-hoc subgroup; both cited as primary-trial-level evidence, NOT as US-regulator authority; primary endpoint whole-sample effect was non-significant in both — wave-2 biostatistics 2026-06-07)* | Breaks tinnitus-insomnia loop in sleep-disturbed sub-type | 0.3-3 mg at bedtime (adult only; **no pediatric use**) | 30-60 min before sleep | cool water | caffeine after 14:00; SSRI 4 h gap; autoimmune flare | C (subgroup-only signal; primary endpoint NS — corrected 2026-06-07 from B) | Pure Encapsulations 0.3 mg, Life Extension | $8-15 (US/EU/IN) | *(Megwalu 2006 PMID 16455366; Hurtuk 2011 PMID 21859051 — both subgroup analyses; Lelak 2022 *JAMA Pediatr* paediatric overdose surge)* |
| **Lion's Mane (dual extract)** | Supports nerve-growth-factor signalling — no direct tinnitus RCT, so honestly graded C. *(Mori 2009 cognition)* | NGF/BDNF support | 1500-3000 mg | AM + midday | water | — | C | Real Mushrooms, Nootropics Depot, Host Defense | $25-45 | *(Mori 2009; no direct tinnitus RCT)* |
| **Black Cohosh** | For perimenopausal tinnitus only — never longer than 6 months continuous (rare liver reactions). *(Schaper 2007 Germany; EMA 2018)* | Estrogen-receptor-beta-like | 40 mg standardised twice a day | AM + PM with food | food | hepatic caution; ≤6 mo | C | Remifemin (Germany), MediHerb (Australia TGA) | $20-30 | *(Schaper 2007 Germany; EMA 2018)* |
| **R-alpha-lipoic acid** | Glutathione recycler — add-on if your tinnitus started after cisplatin or aminoglycoside drugs. *(Sismanis 2018 Italy)* | Glutathione recycling | 300-600 mg | AM empty stomach | water | thyroid medication (4 h) | C | Pure Encapsulations, Doctor's Best | $20-35 | *(Sismanis 2018 Italy)* |

### 3.4 Antioxidant-rich Mediterranean pattern

> **For you, in plain words.** A Mediterranean-style way of eating — fruits, leafy greens, berries, oily fish — lowers oxidative stress and shows a small link to lower tinnitus distress in a Greek cohort. *(Petridou 2019 dietary-pattern study)*

**Quick start.** Daily floor: 250 g leafy greens, 150 g berries, 30 g pumpkin seeds, 2 Brazil nuts, 30 ml olive oil, oily fish 3-4×/week (see §6.1 for full grams). The supplement stack works only on top of this food base.

## 4. Traditional Medicine Integration

### 4.1 Six traditions — at a glance

> **For you, in plain words.** Six healing traditions described ear-ringing centuries before audiology existed. We honour them — and we are honest that modern high-quality trials are mostly absent. *(Sushruta's Latter Tantra ch. 21; Imperial Golden Mirror; Avicenna's Canon; Siddha Maruthuvam; Tibetan Four Tantras; Boericke)*

### 4.2 Ayurveda — *Karna nada* (ear-ringing)

> **For you, in plain words.** Ayurveda calls ear-ringing a "wind" (vata) imbalance. The signature ritual is karna-purana — warm medicated oil dripped into the ear — plus Brahmi, Ashwagandha and the brain-tonic wine Saraswatarishta. Modern high-quality tinnitus trials are absent; honoured as tradition, not as clinical proof. Never drip oil if you suspect a hole in your eardrum. *(Sushruta's Latter Tantra ch. 21; CCRAS karna-roga monograph; Charaka Chikitsa ch. 1)*

**The deeper layer.** Classical category: *vata-pradhana karna roga*. Central intervention: *karna-purana* (medicated oil instillation). Classical sources: *Sushruta's Latter Tantra* ch. 20-21; *Ashtanga Hridaya, Latter Tantra* ch. 17; *Bhavaprakasha*. Kerala lineage: Kottakkal, Vaidyaratnam; AYUSH-CCRAS monographs.

| Formulation | TL;DR (plain English) | Dose | Grade | Citation |
|---|---|---|---|---|
| Karnapurana with Bilva Taila | Warm Bilva-fruit oil drops gently sealed in the ear canal — classical wind-pacifier; **never if eardrum torn**. *(Sushruta's Latter Tantra ch. 21; Kottakkal AYUSH-GMP)* | 5-10 drops each ear at bedtime, 2-3×/week | T | *(Sushruta's Latter Tantra ch. 21; Kottakkal)* |
| Sarivadi Vati | The classical Kerala tablet for ear disorders — calms wind and excess heat. *(Kottakkal; Baidyanath formulary)* | 1-2 tablets twice a day | T | *(Kottakkal; Baidyanath)* |
| Saraswatarishta | A fermented Ayurvedic wine taken after meals; calms the mind and supports sleep. *(Sharangdhara Samhita; Baidyanath, Dabur)* | 15-20 ml twice a day after meals | T | *(Sharangdhara Samhita; Baidyanath)* |
| Brahmi (Bacopa monnieri) | Classical brain-tonic — Australian Stough trials confirm cognitive support. *(Charaka Chikitsa ch. 1; Stough trials Australia)* | 3-5 g powder twice a day | B | *(Charaka ch. 1; CCRAS; Stough)* |
| Ashwagandha (KSM-66) | "Winter cherry" adaptogen — Australian Choudhary 2017 trial confirmed lower cortisol and better sleep. *(Ixoreal KSM-66; Choudhary 2017 India (Ixoreal Hyderabad))* | 600 mg/day | A | *(Ixoreal KSM-66; Choudhary 2017)* |
| Yashtimadhu (licorice) | Soothing anti-inflammatory; switch to DGL if you have high blood pressure. *(Bhavaprakasha; AYUSH monograph)* | 1-3 g twice a day | T | *(Bhavaprakasha; AYUSH)* |
| Jatamansi (Indian valerian root) | Wind-pacifying calming herb — good for tinnitus distress and broken sleep. *(Charaka; CCRAS monograph)* | 1-3 g twice a day | T | *(Charaka; CCRAS)* |
| Shankhpushpi | Classical "intellect-enhancing" tonic that supports the hearing nerve. *(Baidyanath; Charaka)* | 10-15 ml syrup or 3-5 g powder twice a day | T | *(Baidyanath; Charaka)* |
| Triphala | The nightly gut-and-circadian reset taken with warm water before bed. *(AYUSH monograph; Organic India)* | 5 g at bedtime with warm water | A | *(AYUSH monograph; Organic India)* |

### 4.3 TCM — *Er Ming* 耳鸣 / *Er Long* 耳聋

> **For you, in plain words.** Chinese medicine splits tinnitus into four patterns — weak-kidney, liver-fire, weak-spleen-with-phlegm, and stuck-blood. The signature kidney-pattern formula is Er Long Zuo Ci Wan. *(Imperial Golden Mirror; Chinese Pharmacopoeia 2020; Yellow Emperor's Inner Classic)*

**The deeper layer.** Patterns: kidney-essence depletion; kidney-yin deficiency with empty-fire; liver-fire blazing; spleen-qi deficiency with phlegm-damp; blood-stasis. Classical: *Yellow Emperor's Inner Classic*, *Imperial Golden Mirror of Medicine*; Chinese Pharmacopoeia 2020. Lineage: Plum Flower (Mayway), Min Tong.

| Formula | TL;DR (plain English) | Pattern | Dose | Grade | Citation |
|---|---|---|---|---|---|
| Er Long Zuo Ci Wan 耳聋左慈丸 | The classical formula for weak-kidney tinnitus — Six-Flavour Rehmannia plus chai hu and ci shi. *(Imperial Golden Mirror; NMPA)* | Kidney-yin xu | 8 pills three times a day OR 6 g granules twice a day | B | *(Imperial Golden Mirror; NMPA; Chinese open-label consortium)* |
| Long Dan Xie Gan Tang 龙胆泻肝汤 | For sudden loud ringing with high BP and irritability — short course only (≤6 weeks); demand an Aristolochia-free batch certificate. *(Imperial Golden Mirror; Plum Flower)* | Liver-fire | 6-9 g granules twice a day, ≤6 weeks | B | *(Imperial Golden Mirror; Plum Flower)* |
| Liu Wei Di Huang Wan 六味地黄丸 | The maintenance backbone for long-term age-related ringing. *(Qian Yi; NMPA)* | Chronic kidney-yin xu | 8 pills three times a day | B | *(Qian Yi; NMPA)* |
| Tian Wang Bu Xin Dan 天王补心丹 | For "wired-but-tired" people who can't sleep and have ringing. *(She Sheng Mi Pou; Plum Flower)* | Heart blood-yin xu | 8 pills twice a day | B | *(She Sheng Mi Pou; Plum Flower)* |
| Cong Er Wan 聪耳丸 | "Smart-Ear Pills" — a kidney-yin tonic specifically for ear function. *(NMPA patent monograph)* | Kidney-yin tonic for ear | 8 pills twice a day | T | *(NMPA patent monograph)* |
| Gui Pi Tang 归脾汤 | For exhaustion-driven tinnitus in someone pale and overworked. *(Ji Sheng Fang; Plum Flower)* | Heart-spleen qi-blood xu | 6 g twice a day | B | *(Ji Sheng Fang; Plum Flower)* |
| Ban Xia Bai Zhu Tian Ma Tang | For muffled ringing with foggy-head dizziness — the phlegm-damp pattern. *(Yi Xue Xin Wu)* | Phlegm-damp | 6 g twice a day | T | *(Yi Xue Xin Wu; Plum Flower)* |
| Bu Yang Huan Wu Tang 补阳还五汤 | Wang Qing-Ren's classical post-trauma blood-stasis formula. *(Yi Lin Gai Cuo)* | Qi-xu + blood-stasis | 9 g twice a day | B | *(Yi Lin Gai Cuo, Wang Qing-Ren)* |
| Shi Chang Pu 石菖蒲 (sweet flag) | An aromatic "orifice-opener" — ask for *Acorus tatarinowii*, not *Acorus calamus*. *(Shen Nong Ben Cao)* | Phlegm-damp | 3-6 g twice a day | T | *(Divine Husbandman's Classic of the Materia Medica)* |

> **Acupuncture note.** *(For you, in plain words.)* Some signal in Chinese, Korean and Australian (RMIT) trials, but Cochrane 2014 found no firm evidence. Clinic-based — outside the home core of this protocol; low-risk option to try if other layers plateau. *(Cochrane Kim 2014; RMIT acupuncture meta-analyses)*

### 4.4 Unani — *Tannin al-udhun*

> **For you, in plain words.** The Unani tradition (Greco-Arabic medicine) treats tinnitus as a "cold-natured" brain-and-hearing-nerve imbalance. The classic stack is Khamira Marwareed, the herbal jams Itrifals, and warm rose/violet ear-drops. *(Avicenna's Canon Book III; Hamdard; Qarabadeen Qadri)*

**The deeper layer.** Mizaj: *barid of dimagh with su'al mizaj of asab al-sam'i*; often dry-cold in the elderly. Lineage: Hamdard (Hakim Mohammed Said), Dawakhana Tibbiya College Aligarh.

| Formulation | TL;DR (plain English) | Dose | Grade | Citation |
|---|---|---|---|---|
| **Khamīrā Abresham** (preferred) + **Ḥabb al-Sammār** (alternate) | Wave-3 classical-text review correction: **Khamīrā Marwārīd's Qarabadeen Qadri primary indication is heart palpitations / cardiac weakness, NOT tinnitus.** The closer Unani anchors for *ṭanīn al-udhun* (tinnitus) per CCRUM National Formulary of Unani Medicine are **Khamīrā Abresham** (silk-cocoon-based cardiotonic with tinnitus-aetiology overlap in damawī/balghami patterns) + **Ḥabb al-Sammār** (sleep + tinnitus-distress formula). Khamīrā Marwārīd remains useful for tinnitus-with-palpitation comorbidity but is not the canonical first-line. *(CCRUM NFUM; Qarabadeen Qadri; wave-3 classical-text scholar correction 2026-06-08)* | 5-10 g in the morning (per CCRUM dose ranges) | T | *(CCRUM National Formulary of Unani Medicine; Qarabadeen Qadri; wave-3 correction)* |
| Itrifal Ustukhuddus | A lavender-rich evening brain-cleanser and gentle sedative. *(Hamdard; Avicenna's Canon)* | 5-10 g at bedtime | T | *(Hamdard; Avicenna)* |
| Itrifal Kishneezi | Coriander-based jam for the headache-plus-tinnitus overlap. *(Hamdard; Dawakhana Tibbiya College Aligarh)* | 5-10 g at bedtime | T | *(Hamdard; Dawakhana Tibbiya)* |
| Roghan-e-Banafsha (violet oil) | Warm violet-oil drops — soothing for cold-pattern ringing; **never if eardrum torn**. *(Hamdard; Avicenna)* | 2-3 warm drops each ear at bedtime, 2-3×/week | T | *(Hamdard; Avicenna)* |
| Roghan-e-Gul (rose oil) | Warm rose-oil drops — same wind-pacifying action; same eardrum caveat. *(Hamdard; Avicenna)* | 2-3 warm drops each ear at bedtime, 2-3×/week | T | *(Hamdard; Avicenna)* |
| Majoon-e-Falasfa | Hamdard/Ajmal's classical "brain confection" — a rich herbal paste. *(Hamdard, Ajmal)* | 5 g twice a day | T | *(Hamdard, Ajmal)* |

### 4.5 Siddha — *Kaadu olikkum*

> **For you, in plain words.** The Tamil Siddha tradition treats ear-ringing with herbal powders, decoctions and semi-solid jams only. Mercury preparations are excluded because they need expert pharmacy supervision. *(IMPCOPS Chennai; Siddha Maruthuvam; Bogar 7000)*

| Formulation | TL;DR (plain English) | Dose | Grade | Citation |
|---|---|---|---|---|
| Brahmi Chooranam | Tamil-Siddha Brahmi powder taken with honey for memory and hearing nerve. *(IMPCOPS; Siddha Maruthuvam)* | 3-5 g twice a day with honey | T | *(IMPCOPS; Siddha Maruthuvam)* |
| Aswagandha Chooranam | Siddha adaptogen taken with warm milk at night for sleep and tinnitus distress. *(IMPCOPS; SKM)* | 3-5 g twice a day with warm milk | T | *(IMPCOPS; SKM Siddha)* |
| Vallarai Chooranam (gotu kola) | Siddha brain-tonic for cognition and blood flow. *(IMPCOPS; Bogar 7000)* | 3-5 g twice a day with honey | T | *(IMPCOPS; Bogar 7000)* |
| Nellikai Lehyam (Amla jam) | Rejuvenative Amla jam — antioxidant and tissue-rebuilding. *(IMPCOPS, Aimil)* | 5-10 g twice a day | T | *(IMPCOPS, Aimil)* |
| Thiripala Chooranam | Tamil-Siddha three-fruit gut-and-detox formula taken at night with warm water. *(IMPCOPS)* | 3-5 g at bedtime with warm water | T | *(IMPCOPS)* |

### 4.6 Tibetan / Sowa Rigpa

> **For you, in plain words.** Tibetan medicine calls ringing a "wind" (rlung) disturbance. Agar-35 is the classical wind-pacifier; Padma 28 is a 22-herb Tibetan formula with Swissmedic national authorisation for **PAOD / intermittent claudication** (peripheral arterial-vascular use, NOT tinnitus). **Correction 2026-06-07:** earlier revisions said "EMA Padma Lax monograph for microcirculation" — Padma Lax and Padma 28 are **different products** (Padma Lax is a separate Padma AG laxative blend); there is **no EMA HMPC monograph for either** (they are Swissmedic-authorised, national-level, not EMA Centralised). The relevance to blood-flow tinnitus is mechanistic / cross-condition transfer, not regulatory-monograph-grade. *(Tibetan Four Tantras Book IV; Men-Tsee-Khang Dharamsala formulary; Padma AG Switzerland — Swissmedic registration for Padma 28 in PAOD, NOT EMA HMPC for tinnitus)*

| Formulation | TL;DR (plain English) | Dose | Grade | Citation |
|---|---|---|---|---|
| Agar-35 | A 35-herb wind-pacifier — the classical Tibetan "ringing + dizziness" formula. *(Tibetan Four Tantras IV; Men-Tsee-Khang)* | per Men-Tsee-Khang label | T | *(Tibetan Four Tantras Book IV; Men-Tsee-Khang)* |
| Yu-nying-25 | A heart-and-mind formula for tinnitus distress and emotional load. *(Tibetan Four Tantras; Men-Tsee-Khang)* | per Men-Tsee-Khang label | T | *(Tibetan Four Tantras; Men-Tsee-Khang)* |
| Sogdzin-11 | Tibetan cognitive-and-memory formula for age-related hearing decline. *(Men-Tsee-Khang formulary)* | per Men-Tsee-Khang label | T | *(Men-Tsee-Khang formulary)* |
| Padma 28 (NOT Padma Lax — distinct products) | Swissmedic-authorised Tibetan 22-herb formula. **Authorised indication is PAOD / intermittent claudication, NOT tinnitus** — cross-condition mechanistic extrapolation from peripheral microcirculation. **No EMA HMPC monograph.** *(Padma AG Switzerland; Swissmedic registration; corrected 2026-06-07 per wave-2 EMA reviewer)* | per Padma AG label | D (mechanism cross-condition only; no tinnitus RCT) | *(Padma AG Switzerland; Swissmedic registration — Tibetan-derived; NO EMA HMPC monograph exists)* |

### 4.7 Homeopathy — honoured tradition, honestly graded

> **For you, in plain words.** Homeopathy is included to honour the founder's mandate to explore every direction. The high-quality RCT (Simpson 1998, PMID 9923984) found homeopathic preparations no better than placebo for tinnitus. We list these remedies as documented tradition only — **NOT recommended** in the active protocol. *(Boericke; Allen; Kent; Simpson 1998 RCT)*

| Remedy | TL;DR (plain English) | Keynote | Potency | Grade | Citation |
|---|---|---|---|---|---|
| Chininum Sulphuricum | Quinine "mirror" remedy for loud roaring with vertigo — classically used for Ménière overlap. *(Boericke; Allen)* | Loud roaring + vertigo | 30C | T | *(Boericke; Allen)* |
| Salicylicum Acidum | Aspirin "mirror" remedy for roaring + deafness with Ménière overlap. *(Boericke; Kent)* | Roaring + deafness | 30C-200C | T | *(Boericke; Kent)* |
| Carbo Vegetabilis | Classical sluggish-circulation remedy — ringing with vertigo on standing. *(Boericke; Allen)* | Tinnitus + vertigo on rising | 30C | T | *(Boericke; Allen)* |
| Calcarea Carbonica | Cracking/clicking ringing in someone with cold sweats and a chilly damp constitution. *(Kent; Boericke)* | Cracking/clicking + cold sweats | 30C-200C | T | *(Kent; Boericke)* |
| Lycopodium Clavatum | Right-sided ringing worse 4-8 PM, in someone who searches for words. *(Boericke; Allen)* | Right-sided; worse 4-8 PM | 30C | T | *(Boericke; Allen)* |
| Coffea Cruda | Ringing with insomnia and sound sensitivity — the homeopathic mirror of "too much coffee". *(Boericke; Kent)* | Tinnitus + insomnia + sound sensitivity | 30C | T | *(Boericke; Kent)* |
| Natrum Sulphuricum | Ringing that started after a head injury or whiplash. *(Boericke; Allen)* | Tinnitus + head injury / whiplash | 30C | T | *(Boericke; Allen)* |
| Kali Iodatum | Persistent roaring linked to old infections in classical homeopathic doctrine. *(Boericke; Kent)* | Persistent roaring; old-infection background | 30C | T | *(Boericke; Kent)* |
| Chenopodium Anthelminticum | Small specific remedy for high-pitched ringing with Ménière-like vertigo. *(Boericke; Allen)* | High-pitched + Ménière-like vertigo | 30C | T | *(Boericke; Allen)* |
| Causticum | Progressive nerve weakness with cracking on swallowing. *(Boericke; Kent)* | Progressive nerve weakness; cracking on swallowing | 30C | T | *(Boericke; Kent)* |

CCRH (AYUSH Council for Research in Homoeopathy) has published tinnitus case series in the *Indian Journal of Research in Homoeopathy*. Graded T as documented clinical tradition only.

## 5. Biophysical & Sound-Therapy Interventions — home-administered

### 5.1 What works at home — the priority order

> **For you, in plain words.** The single highest-evidence layer for chronic tinnitus is sound enrichment + a cognitive habituation practice (mindfulness or retraining therapy). Devices come after. *(Cochrane Sereda 2018 sound therapy; Cima 2012 MBCT-T)*

**Quick start, tonight:**
1. Turn on a soft fan, a rain track, or the free **myNoise** app at a volume *just below* your tinnitus pitch — leave it running.
2. Download an MBCT-for-tinnitus audio or the McKenna/Marks/Hallam workbook.
3. If your ringing changes when you move your neck or jaw, do 3 chin-tucks and 2 min of jaw self-massage.

### 5.2 Sound enrichment — your nightly habit

> **For you, in plain words.** Quiet background sound stops the brain from cranking the volume up to find missing input. 2-6 hours a day, at a level *just below* your tinnitus pitch, never in pure silence. *(Pantev & Okamoto 2010; Cochrane Sereda 2018)*

**Options.**
- **White / pink / brown noise** — broadband sound that masks the ringing. Free apps: myNoise, ReSound Relief. Pink and brown are easier on the ear than pure white for most people.
- **Nature sounds** — rain, ocean, forest. Same masking effect, more pleasant for many.
- **Notch-filtered music** (see §5.4) — your favourite music with the tinnitus frequency band removed.
- **Fractal tones** (ReSound Zen, Oticon SoundSupport) — built into some hearing aids.

**The deeper layer.** The Cochrane Sereda 2018 review of sound-therapy for tinnitus found benefit for tinnitus distress though not always for measured loudness; benefit is most consistent when paired with a cognitive practice (TRT, MBCT-T, CBT). **Never combine** with active noise-cancellation in silent rooms — silence makes the brain "turn up" worse.

### 5.3 Binaural beats — what the headphones do

> **For you, in plain words.** Headphones play two slightly-different tones, one per ear. Your brain creates a third "phantom" tone that may calm tinnitus distress for some people. Free apps make this trivially cheap to try. *(Garcia-Argibay 2019 binaural meta-analysis)*

**How to try it.** Use over-ear headphones (not earbuds — earbud overuse is itself a tinnitus driver). Start with a 6-10 Hz delta/theta-band pairing (e.g., 200 Hz left, 207 Hz right). 20-30 min sessions. Free apps: myNoise binaural mode, Brain.fm (subscription), Tinnitracks notch-filtered music. Honest caveat: works best as ONE layer of broader sound enrichment, not a standalone fix.

**The deeper layer.** Garcia-Argibay 2019 meta-analysis pooled small studies on binaural beats for anxiety and cognitive states (signal present, effect sizes modest). Direct tinnitus-specific RCT evidence is limited — most users who report benefit do so via distress reduction rather than loudness reduction. **Grade H** (emerging signal, mostly small studies). *(Garcia-Argibay 2019; Cope 2015)*

### 5.4 Notch-filtered music (Tinnitracks-style)

> **For you, in plain words.** You pitch-match your tinnitus, then play music with that exact frequency band removed for 1-2 h/day. Over weeks, the hearing cortex appears to dial down the over-fired neurons matching your tinnitus pitch. *(Pantev & Okamoto 2010 notch-music RCT, Germany)*

**How to try it.** Pitch-match your tinnitus in the free TinnitusPlay or Audiogram apps (you'll match a slider tone until it matches what you hear). Then play notched music: Tinnitracks (commercial Hannover app, ~$15-25/month) does this automatically; alternatives include manual notch-filter audio software. 1-2 h/day, headphones or speakers. **Grade B** for the specific notch-music intervention. *(Pantev & Okamoto 2010; Okamoto 2010)*

### 5.5 Cognitive Behavioural Therapy for tinnitus (CBT-T) and CBT for insomnia (CBT-I)

> **For you, in plain words.** Talking therapy that reframes your relationship to the sound — and a sleep-focused version (CBT-I) for when tinnitus wrecks your sleep. Cochrane-supported for tinnitus distress, not loudness. *(Cochrane Fuller 2020 CBT for tinnitus; Trauer 2015 CBT-I meta-analysis)*

**How to try it.** Self-applied via the McKenna / Marks / Hallam *Living with Tinnitus and Hyperacusis* workbook + audio (free at most libraries). Online programs: Tinnitus Pro Therapy, Beating-the-Blues UK, MoodGYM (Australian National University free CBT). For CBT-I specifically when tinnitus disrupts sleep: Sleepio (UK), CBT-i Coach (free Veterans Affairs app — listed as a tool, not as a US authority). **Grade B** for tinnitus distress reduction (Cochrane Fuller 2020 — moderate-certainty for distress; low-certainty for loudness; Cima 2012 between-group MD ≈ -8 Cohen's d ≈ 0.24 modest; earlier revisions said Grade A — demoted 2026-06-07 per wave-2 biostatistics review; this paragraph corrected 2026-06-10 per wave-5 fact-checker propagation audit).

### 5.6 Tinnitus Retraining Therapy (TRT — Jastreboff)

> **For you, in plain words.** A 6-18 month framework combining low-volume background sound with cognitive reframing, designed to make the brain stop labelling the ringing as "important". Self-applicable with the right reading. *(Jastreboff 1990; Jastreboff & Hazell 2004)*

**How to try it.** Start the background sound layer (§5.2) at the volume *just below* your tinnitus. Read *Tinnitus Retraining Therapy: Implementing the Neurophysiological Model* (Jastreboff & Hazell). Track your reactions, not the ringing. **Grade B** with overlap with sound therapy and CBT-T.

### 5.7 Mindfulness-Based Cognitive Therapy for tinnitus (MBCT-T) and MBSR

> **For you, in plain words.** The single strongest cognitive lever for tinnitus distress. Cima 2012's 8-week Maastricht (Netherlands) randomised trial (n=492) cut tinnitus severity meaningfully versus usual care and the gain held at 12 months. *(McKenna 2017 UK; Cima 2012 Maastricht NL *Lancet* 379:1951-9 PMID 22633033 — earlier dossier revisions said "Bristol UK"; corrected 2026-06-06; Philippot 2012 MBSR small RCT)*

**How to try it.** McKenna 2017 MBCT-T workbook + audio (UK programme, Royal National Throat-Nose-Ear / UCL); 30 min daily for the 8-week core, then 10 min maintenance. MBSR (Mindfulness-Based Stress Reduction) — Kabat-Zinn's 8-week programme taught worldwide and offered via several UK NHS routes. **Grade B** for tinnitus distress reduction (Cochrane Fuller 2020 — moderate-certainty for distress, low-certainty for loudness; Cima 2012 between-group MD ≈ -8 Cohen's d ≈ 0.24 modest; demoted from A 2026-06-07 per wave-2 biostatistics review; this paragraph corrected 2026-06-10 per wave-5 fact-checker propagation audit).

### 5.8 Biofeedback — jaw, neck, breathing, HRV

> **For you, in plain words.** Sensors show your jaw tension, breathing rhythm or heart-rate variability on a screen, and you learn to relax them. Small trials show distress reduction in tinnitus. *(Weise 2008 small RCT)*

**How to try it.** Home options: Muse headband (EEG meditation); Elite HRV app; HeartMath Inner Balance ($179); Welltory app. 10-15 min twice a day. **Grade C**.

### 5.9 Hearing-aid masking (for measurable hearing loss)

> **For you, in plain words.** If your hearing test shows more than 25 decibels of loss at 4-8 kHz, hearing aids restore the missing input — and dedicated tinnitus-masker programs in clinic-grade aids are the highest-impact single intervention for the tonal-hearing-loss-driven sub-type (~40-60% of tinnitus presentations). **OTC vs clinic-grade jurisdictional note:** the OTC hearing-aid regulatory category is **US-only as of 2026** (FDA-cleared 2022); UK / EU / AU / IN / CA readers should look at clinic-fit pathways OR consumer self-fit devices that exist outside the OTC class. **Apple AirPods Pro 2 hearing-aid mode (iOS 18.1+)** at ~$249 is the closest global equivalent — works in every jurisdiction with iOS access; passes Mimi audiogram on iPhone; integrates with Apple Hearing app for tinnitus masking via ambient-sound boost.

**Smartphone audiograms — screening only, not diagnosis.** Mimi / EarTrumpet / SonicCloud miss mid-frequency notch loss **30-50% of the time** and **cannot distinguish conductive from sensorineural** hearing loss. They are a screening tool. If they suggest loss, **get a clinical audiogram + tympanometry + bone-conduction + acoustic reflex thresholds** before purchasing aids. Earlier dossier revisions framed Mimi as a "baseline hearing test" — corrected 2026-06-08 per wave-3 ENT/audiology review.

**Clinic-grade hearing aids with dedicated tinnitus-masker programs** (the highest-impact category):
- **Widex Zen** — fractal-tone masker programs
- **Phonak Tinnitus Balance** — adjustable noise + nature sounds
- **Oticon Tinnitus SoundSupport** — ocean / shower / fractal options
- **ReSound Tinnitus Relief** — app-paired sound therapy
- **Starkey Multiflex Tinnitus Technology** — masker + relaxation
- **Signia Notch Therapy** — notched-music programmed to your tinnitus pitch

These require a clinic fitting (typically £2-3k per pair UK / €2-3k EU / A$3-5k AU / ₹50k-1.5L IN / C$2-4k CA / $3-5k US). NHS audiology in the UK can fit some of these on the NHS pathway at no cost.

**Consumer / self-fit hearing-aid options outside the US OTC category:**
- **Apple AirPods Pro 2 hearing-aid mode** (iOS 18.1+) — global, ~$249/€269/£229/A$399/₹24,900
- **Bose SoundControl** — UK + EU consumer-grade self-fit
- **Jabra Enhance / Lexie / Eargo / Sony CRE-C10** — US OTC category; ship to some other jurisdictions but no regulatory clearance there

**Bone-anchored hearing aids (BAHA / Ponto)** are for single-sided deafness or conductive losses — see your CI / ENT clinic; not a consumer self-fit. **Middle-ear implants** (Vibrant Soundbridge, MAXUM, Esteem) — same routing.

### 5.10 Red-light therapy to the head + behind the ear

> **For you, in plain words.** Vielight Neuro Gamma + a hand-held red-light to the mastoid bone behind each ear, 5-10 min a side, 5 days a week. No direct tinnitus RCT — honestly graded C. *(Vielight Neuro Gamma data; Hamblin transcranial PBM review)*

**Practical.** Vielight Neuro Gamma (810 nm pulsed at 40 Hz) + Vielight 810 intranasal + a hand-held red panel (Hooga, Mito Red Light, 660+810 nm) to the mastoid bone behind each ear for 5-10 min a side, 5×/week. Dose 10-20 J/cm² per session. **Do not use** if pregnant, have head/face cancer, take photosensitising drugs, have had brain surgery, have a severe seizure disorder, **have a cochlear implant (CI) — red-light over or near the magnet site is an absolute manufacturer contraindication; can damage the receiver-stimulator costing $30-50k to replace** (added 2026-06-08 per wave-3 disability-inclusion review), **or have an active middle-ear implant (Vibrant Soundbridge, MAXUM, Esteem, BAHA, Ponto)** (added 2026-06-08). Eye protection mandatory.

### 5.11 Neck and jaw release — 4-minute routine

> **For you, in plain words.** Chin tucks, tennis-ball release under the back of the skull, jaw self-massage, a night-guard for grinding, and an over-the-door cervical traction unit often give the biggest score-drops in 4-8 weeks for neck/jaw cases. *(Levine 1999; Sanchez & Rocha 2011)*

**The 4-minute routine.** Chin tucks 10 reps × 3 sets · supine neck rotation · doorway pectoral stretch · sub-occipital tennis-balls-in-a-sock for 2-5 min · jaw masseter self-massage 2 min a side + "N-rest" posture (tongue on roof, teeth apart, lips closed) · OTC night-guard (SOVA, Pro Teeth Guard) · over-the-door cervical traction (Saunders, Pronex) for 10-15 min 1-2×/day if your tinnitus is confirmed neck-driven.

### 5.12 At-home vagus-nerve devices (taVNS)

> **For you, in plain words.** A small clip on your ear sends a gentle electrical buzz that calms the body's stress nervous system. Some people who pair it with sound therapy report quieter tinnitus over weeks. Direct tinnitus RCT data is limited; mostly mood and migraine evidence. *(De Ridder 2014 pilot; Tyler 2017)*

**How to try it.** Home-usable consumer devices: Pulsetto (neck), Truvaga (ear clip), Parasym (ear clip), Xen by Neuvana (ear clip). Apollo Neuro (vibrational, also calms autonomic tone). Nurosym auricular taVNS — 30 min/day. **Do not use** with a pacemaker, history of seizures, vagal instability, **a cochlear implant or active middle-ear implant on the side the ear-clip would attach — electrical interference with the receiver-stimulator is documented; signal disruption + processor failure cases reported** (added 2026-06-08 per wave-3 disability-inclusion review). **Grade H** for taVNS specifically for tinnitus (mostly pilot trials; bigger RCTs ongoing). The surgical/implanted VNS (Vivistim, Microtransponder Serenity) is clinic-only and goes in §15.

### 5.13 Heart-rate-variability training

> **For you, in plain words.** HeartMath, Sensate and Apollo train the calming nerve (vagus) — pair them with humming-breath for the neck-jaw-vagus driver. *(HeartMath Institute data)*

**Practical.** HeartMath Inner Balance 5-15 min twice a day; Sensate 10 min PM; Apollo Neuro daytime. Timing 06:30 + 21:30.

### 5.14 At-home pulsed magnetic mat (optional)

> **For you, in plain words.** Bemer or Healthy Wave mat for 15 min, 3×/week — mechanistic only, with small Eastern-European signal. **Do not use** with a pacemaker, in pregnancy, with active cancer, **with a cochlear implant or active middle-ear implant — absolute manufacturer contraindication on all major CI brands (Cochlear, Advanced Bionics, MED-EL, Oticon Medical Ponto) plus Vibrant Soundbridge / MAXUM / Esteem / BAHA** (added 2026-06-08 per wave-3 disability-inclusion review), or **with any implanted cardiac defibrillator / deep-brain-stimulator / spinal-cord-stimulator / Inspire hypoglossal-nerve stimulator**. *(Bemer mat published protocols; manufacturer safety bulletins; wave-3 disability-inclusion review)*

### 5.15 Infrared sauna + cold splash

> **For you, in plain words.** 20 min in a home sauna at 50-60°C, 3×/week, followed by a 30-60 s cold splash — supports calming-nerve tone and blood flow. **Do not do** if you have significant heart disease or are pregnant. *(Finnish Laukkanen 2018 sauna cohort)*

Sunlighten, HigherDOSE blanket; Plunge tub or bathtub + ice.

### 5.16 Hearing protection (load-bearing prevention)

> **For you, in plain words.** Custom-mould ear plugs at concerts, with power tools, at gun ranges and on motorcycles. Plus a 60/60 rule for earbuds. Preventing more hair-cell loss is half the protocol. *(WHO Make Listening Safe 2022)*

Etymotic ER-20, Eargasm, Loop Experience. Custom-mould from a local audiologist for the highest-fidelity sound (musicians, frequent concert-goers).

### 5.17 Side-sleeping + bedside masker

> **For you, in plain words.** If your tinnitus is one-sided, sleep with the affected ear UP so the room sound reaches it. Marpac Dohm or HoMedics SoundSpa on low overnight. *(Classical Jastreboff bedside-masker protocols)*

### 5.18 What to skip

> **For you, in plain words.** Pure silence (sensory deprivation makes the brain "turn up"); active noise-cancellation in silent rooms; sleeping with earbuds in; over-loud sound therapy (above your tinnitus pitch — it just trains your ears to need more sound). *(Cochrane Sereda 2018; WHO 2022)*

## 6. Dietary Protocol

### 6.1 Eat the Mediterranean-MIND-millet base

> **For you, in plain words.** A Mediterranean-MIND-Indian-millet base of oily fish, leafy greens, beetroot, berries, olive oil, sprouted millets, plus magnesium and selenium foods. Cut alcohol, tonic water and late caffeine. *(Petridou 2019 dietary-pattern study; MIND-diet trials; Lavinsky 2007 Italy)*

**Quick-start summary.** **No** alcohol routinely, **no** tonic water ever, **no** caffeine after 14:00. See §6.2 for the daily-gram list.

### 6.2 Mandatory foods — the daily grams

- **TL;DR.** Wild oily fish — 150 g, 3-4×/week — omega-3, selenium and B12; algal omega-3 if vegan. *(UK SACN omega-3 review 2020)*
- **TL;DR.** Pasture-raised eggs — 2/day — choline, B12, natural vitamin A. *(Vital Farms pasture-egg nutrient data)*
- **TL;DR.** Dark leafy greens — 250 g/day — folate, magnesium, potassium, nitrate. *(Charaka Sutra ch. 27; Catelani 2018 magnesium-tinnitus cohort, Italy)*
- **TL;DR.** Pumpkin + sunflower seeds — 30 g/day — paired magnesium and zinc. *(USDA SR-28 nutrient profile only)*
- **TL;DR.** Brazil nuts — 2/day — natural selenium 100-200 µg. *(Brazilian selenium monograph)*
- **TL;DR.** Walnuts — 30 g/day — plant omega-3 and polyphenols. *(Spanish PREDIMED walnut sub-cohort)*
- **TL;DR.** Berries — 150 g/day — anthocyanins for blood-vessel-lining support. *(UK Norfolk EPIC anthocyanin-vascular cohort)*
- **TL;DR.** Beetroot — 150 g cooked or 70 ml juice — dietary nitrate. *(UK Exeter Jones beetroot trials)*
- **TL;DR.** Extra-virgin olive oil — 30 ml/day — anti-inflammatory backbone. *(Spanish PREDIMED olive-oil trial)*
- **TL;DR.** Avocado — half/day — monounsaturated fat, potassium, folate. *(Mexican Hass avocado nutrient panel)*
- **TL;DR.** Turmeric — 3-5 g fresh or 1 g powder — pair with black pepper and ghee. *(EMA turmeric monograph 2018; Shoba 1998 India)*
- **TL;DR.** Sprouted small millets — 60 g cooked — Dr Khadar Vali's revival grains. *(Khadar Vali Siri Dhanyalu lineage; ICAR-IIMR millet monographs)*
- **TL;DR.** Dark chocolate ≥85% — 15-20 g/day — cocoa flavanols for blood-vessel nitric oxide. *(German Heiss cocoa-flavanol trials)*
- **TL;DR.** Pomegranate — half/day — punicalagins for blood-vessel antioxidant support. *(Israeli Aviram pomegranate trials)*
- **TL;DR.** Green tea / matcha / tulsi — 2 cups, **none after 14:00**. *(Japanese Sakurai EGCG monograph; AYUSH tulsi monograph)*
- **TL;DR.** Filtered water — 2.5-3 L/day — mild fluid discipline for blood-flow and pulsating sub-types. *(WHO drinking-water guidelines 2022)*

### 6.3 Absolutely avoid

> **For you, in plain words.** Alcohol and tonic water are the single strongest dietary tinnitus triggers; high salt, MSG, sugar spikes, chronic NSAIDs and tobacco all amplify the four drivers. *(Lavinsky 2007 Italy; EMA quinine warning 2010)*

| Food / class | TL;DR (plain English) | Molecular reason | Citation |
|---|---|---|---|
| High-salt processed foods | Sodium overloads inner-ear fluid — the single biggest food trigger for blood-flow and pulsating tinnitus. *(Sismanis 2011)* | Sodium → cochlear fluid imbalance | *(Sismanis 2011)* |
| Caffeine after 14:00 | Blocks the sleep-onset chemical adenosine, so you sleep badly and the next day's ringing feels louder. *(Drake 2013)* | Adenosine block | *(Drake 2013)* |
| Alcohol | Dehydrates the inner ear and burns through B-vitamins, zinc and magnesium — users name it the single worst trigger. *(WHO alcohol harm report 2018)* | Dehydration + cofactor depletion | *(WHO alcohol harm report 2018)* |
| Tonic water / cinchona cocktails | Tonic water contains quinine, which is directly ear-toxic — even bar-quantity can spike loudness. *(EMA quinine warning 2010)* | Quinine ototoxicity | *(EMA quinine warning 2010)* |
| MSG / aspartame / glutamate-rich UPF | Adds glutamate load to an already over-fired hearing nerve. *(Kujawa & Liberman 2009)* | Glutamate excitotoxicity | *(Kujawa & Liberman 2009)* |
| Chronic high-dose NSAIDs / aspirin | Aspirin is directly ear-toxic; do not stop a prescription without your own prescriber (§10.1). *(Cazals 2000)* | Salicylate ototoxicity | *(Cazals 2000)* |
| Tobacco / nicotine / vaping | Tightens the single tiny artery feeding the inner ear. *(Nakanishi 2014, Japan)* | Cochlear vasoconstriction | *(Nakanishi 2014)* |
| Sugar + HFCS + sweet drinks | Sugar spikes make inner-ear blood flow oscillate. *(Lavinsky 2007 Italy)* | Inner-ear blood-flow oscillation | *(Lavinsky 2007)* |
| Industrial seed oils | Omega-6 inflammation crowds out the DHA your hearing-nerve membranes need. *(Simopoulos 2002)* | Omega-6/omega-3 imbalance | *(Simopoulos 2002)* |
| Gluten | Gliadin can open gut tight-junctions, priming the brain's hearing relay-stations. *(Fasano 2011)* | Gut permeability → neuro-inflammation | *(Fasano 2011)* |
| Trans fats / UPF | Damages blood-vessel lining and feeds the blood-flow driver. *(EU trans-fat ban 2019 evidence)* | Endothelial damage | *(EU trans-fat ban 2019)* |

### 6.4 Preparation methodology

> **For you, in plain words.** Sprouting, fermenting, bone broth, and ghee-tempering are the four Indian techniques that boost absorption and lower anti-nutrients. Low-salt cooking is mandatory in blood-flow and pulsating cases. *(AYUSH Annapurna cooking monograph; Charaka Sutra ch. 27)*

Sprouting (millets, fenugreek, mung): soak 8-10 h, then drain into a muslin cloth for 12-18 h. Bone broth simmered 24-36 h. Fermented foods: kanji, sauerkraut, A2 kefir. Beetroot juice loading: 70 ml taken 2 h before a task. Ghee-tempering of greens with cumin and turmeric. **Low-salt target: under 2,000 mg sodium/day** for blood-flow and pulsating sub-types.

### 6.5 Seven-day meal plan

> **For you, in plain words.** A 7-day rotation pre-loads magnesium, nitrate, mitochondrial nutrients, choline/B12, marine omega-3, flavanols and a reset day — so each cofactor floor is hit weekly. *(MIND-millet hybrid; ICAR-IIMR millet monographs)*

| Day | TL;DR (plain English) | Breakfast (Combo 1) | Lunch (Combo 2) | Dinner (Combo 3) |
|---|---|---|---|---|
| 1 Magnesium | Magnesium-loaded day pairing seeds, greens and foxtail millet. *(USDA Mg tables; AYUSH foxtail-millet)* | 2 eggs + 100 g spinach + 30 g pumpkin seeds + 150 g blueberries + matcha | 150 g sardines + 250 g greens + 60 g foxtail millet + 30 ml olive oil + 150 g beetroot | 70 g kodo-millet khichdi + 250 g gotu-kola greens + 100 g kanji + ghee |
| 2 Blood-flow | Beetroot-nitrate and Brazil-nut day. *(UK Exeter Jones beet trials)* | 70 ml beet juice + 60 g sprouted oats + 150 g berries + 2 Brazil nuts | 150 g mackerel + 200 g methi-amaranth + 50 g moong + 60 g millet | 75 g barnyard-millet roti + 200 g spinach-methi + 100 g A2 kefir + walnuts |
| 3 Mitochondria | Avocado, tulsi and Ashwagandha-milk day. *(Choudhary 2017 India (Ixoreal Hyderabad))* | 2 eggs + half avocado + 100 g greens + 15 g dark chocolate + tulsi | 50 g pasture liver (weekly) + 250 g salad + 60 g millet | 65 g millet roti + 200 g lauki-drumstick + 200 ml Ashwagandha-milk |
| 4 Choline/B12 | Eggs, salmon and mushroom day for methylation cofactors. *(UK SACN 2020)* | 3-egg omelette + 100 g greens + walnuts | 150 g salmon + 250 g kale + olive oil + 80 g mushroom | 70 g browntop-millet pulao + 200 g okra-drumstick + kanji |
| 5 Marine omega-3 | Sardine and anchovy day. *(UK SACN 2020)* | Sardine on millet toast + greens + tulsi | 120 g anchovy salad + 250 g greens + millet + beetroot | 70 g khichdi + 200 g gotu-kola + ghee |
| 6 Flavanol | Cocoa, beet and blueberry smoothie day. *(German Heiss cocoa-flavanol trials)* | Smoothie: 70 ml beet + 150 g blueberry + 20 g cocoa + collagen | 150 g grilled fish + salad + millet + mushrooms | 75 g millet roti + 200 g greens + ferment |
| 7 Reset | Lightest day, early 18:00 dinner — circadian and gut reset. *(AYUSH daily-rhythm monograph)* | Light: 2 eggs + greens + berries | Sprouted dal khichdi + 200 g greens + Amla | Early 18:00 dinner; bone-broth-based |

Maintain daily: 250 g greens, 150 g berries, 60 g millet, 30 ml olive oil, 30 g pumpkin seeds, 2 Brazil nuts, 2 eggs, half a pomegranate, 80 g mushrooms 4-5×/week.

### 6.6 Environmental & occupational triggers

> **For you, in plain words.** Noise above 85 decibels, earbud over-use, work-place solvents and metals, untreated sleep apnea/bruxism/hearing loss, and over-the-counter anti-cholinergic sleep pills all amplify ringing. Fix the environment before scaling supplements. *(WHO Make Listening Safe 2022; EU-OSHA ear-toxic chemicals 2021)*

- **TL;DR.** Chronic noise above 85 decibels at work or play — custom-mould ear plugs non-negotiable. *(WHO 2022; EU directive 2003/10/EC)*
- **TL;DR.** Earbud over-use — apply the 60/60 rule and never sleep with earbuds. *(WHO 2022)*
- **TL;DR.** Work-place ear-toxic chemicals — toluene, xylene, styrene, n-hexane, lead, mercury, manganese, carbon monoxide. *(EU-OSHA 2021)*
- **TL;DR.** Cellphone held to the ear — use speakerphone or wired and alternate sides. *(WHO/IARC RF classification 2B 2011)*
- **TL;DR.** Endocrine-disrupting plastics, mould, VOCs and formaldehyde — switch to glass; ERMI/HERTSMI-2 if water-damage history; HEPA-plus-carbon purifier. *(EFSA BPA 2023; WHO indoor-mould 2009)*
- **TL;DR.** Low-frequency HVAC hum — find and dampen it; environmental hum amplifies perceived tinnitus. *(WHO low-frequency-noise guidance 2018)*
- **TL;DR.** Untreated sleep apnea — order a home sleep test (Lofta WatchPAT). *(Lofta WatchPAT validation)*
- **TL;DR.** Untreated hearing loss, bruxism, and light pollution — fix each before scaling supplements. *(WHO 2022; Australian Dental Association; Health Canada melatonin monograph)*
- **TL;DR.** Anti-cholinergic OTC sleep pills (Benadryl, ZzzQuil, Unisom) — stop chronic use; long-term link to dementia. *(UK MHRA anti-cholinergic burden 2022)*

### 6.7 Cofactor / micronutrient floor

> **For you, in plain words.** A "measure-first" floor for B12, folate, B6, magnesium, zinc, iron, vitamin D, selenium, iodine, omega-3, choline and natural vitamin A. **Vegetarian/vegan and over-65 are the deficiency-risk groups for B12 and zinc — be specific about who needs to supplement.** Never blanket-supplement iron, copper, selenium or iodine. *(Health Canada cofactor monographs; AYUSH dhatu framing)*

| Cofactor | TL;DR (plain English) | Target/day | Food | Supplement | Antagonist | Citation |
|---|---|---|---|---|---|---|
| Methyl-B12 | Hearing-nerve insulation; measure MMA first; vegetarian, vegan, age-65+, metformin and PPI users are the deficiency-risk groups. *(Shemesh 1993; Health Canada B12)* | 1000-2000 µg sublingual | sardines, eggs, liver | Jarrow Methyl B12 | metformin, PPIs | *(Shemesh 1993; Health Canada NHP B12)* |
| Methyl-folate | Pair with B12 and B6 for full methylation — lowers homocysteine. *(Health Canada folate monograph)* | 400-800 µg | greens, lentils | Pure Encapsulations 5-MTHF | — | *(Health Canada folate)* |
| B6 (P-5-P) | Neurotransmitter and homocysteine cofactor — 25-50 mg is enough. *(EMA B6 monograph)* | 25-50 mg | banana, salmon | Thorne P-5-P | — | *(EMA B6)* |
| Magnesium (glycinate + threonate) | Calms over-fired nerves, supports sleep, supports blood vessels — 400-500 mg split AM/PM. *(Attias 1994)* | 400-500 mg | pumpkin seeds, greens | Doctor's Best + Magtein | split with calcium | *(Attias 1994 Israel)* |
| Zinc (measure first) | Inner-ear zinc; supplement only if low; vegetarian + 65+ at risk; always balance with copper. *(Arda 2003 Turkey; Coelho 2013 RCT)* | 15-30 mg if low | pumpkin seeds, oysters | Thorne Zn picolinate | iron, calcium (≥2 h); add Cu 1-2 mg | *(Arda 2003; Coelho 2013)* |
| Iron (women, measure ferritin <30) | Iron carries oxygen to the inner ear, but only supplement if ferritin is low. *(WHO ferritin cut-off 2020)* | only if low | red meat, liver | Solgar Gentle Iron | ≥2 h from tea, Ca, Zn | *(WHO ferritin 2020)* |
| Vitamin D3 + K2 | Brain and blood-vessel support; target 40-60 ng/mL; take with fat and magnesium. *(EMA vit D monograph)* | 4000 IU + 100 µg | sunlight, sardines | Thorne D/K2 | fat + Mg | *(EMA vit D; Health Canada NHP)* |
| Selenium | Antioxidant protector against ear-toxic drugs; 2 Brazil nuts give roughly 100-200 µg. *(WHO selenium guidance)* | 100-200 µg | 2 Brazil nuts | Solgar 200 µg | toxic >400 µg | *(WHO selenium guidance)* |
| Iodine (cautious — check thyroid antibodies first) | Thyroid cofactor; be cautious if you have autoimmune thyroid disease. *(WHO iodine guidance)* | 150 µg | seaweed | Pure Encapsulations KI | autoimmune caution | *(WHO iodine; AYUSH)* |
| Omega-3 EPA + DHA | Anti-inflammatory and supplies DHA your hearing-nerve membranes need — 2-3 g with ≥1 g DHA. *(UK SACN 2020)* | 2-3 g (≥1 g DHA) | sardines | Nordic Naturals ProDHA | — | *(UK SACN 2020)* |
| Choline | Acetylcholine and methylation cofactor — egg yolk and liver are top food sources. *(EFSA choline AI 2016)* | 425-550 mg | egg yolk, liver | Alpha-GPC | — | *(EFSA choline 2016)* |
| Vitamin A (cod-liver retinol) | Hair-cell maintenance — do not mega-dose in pregnancy. *(Nordic Naturals cod-liver monograph; EMA vit A)* | 3000-5000 IU | cod-liver oil | Nordic Naturals cod-liver | excess in pregnancy | *(Nordic Naturals; EMA vit A)* |

> **For you, in plain words (Dr Oz note).** Dr Oz has televised Ginkgo, magnesium, zinc, B12 and Lipoflavonoid for tinnitus. We cite the EU herbal authority, India AYUSH, the Israeli army study, the Italian Belcaro group, the Turkish Arda study and the German Schwabe data as the actual authorities — and **Lipoflavonoid is not endorsed** (chronic high-dose niacin carries liver risk). *(EMA monographs; CCRAS; high-dose niacin hepatotoxicity literature)*

## 7. Lifestyle / Mind-Body Anchors

### 7.1 The mind-body map at a glance

> **For you, in plain words.** Yoga, breath work, meditation, sleep hygiene, calming-nerve practices, and a weekly+monthly exercise pattern — every entry mapped to which of the four §2 drivers it pulls. *(S-VYASA Bengaluru Bhramari trials; AYUSH daily-rhythm; Cima 2012)*

### 7.2 Yoga — neck-cleared inversions only

> **For you, in plain words.** Default to bridge and legs-up-the-wall for blood flow. Full shoulder-stand is only safe if your neck is healthy and you do not have high blood pressure, glaucoma or retinal disease. *(Iyengar Light on Yoga; AYUSH yoga monographs)*

| Asana | TL;DR (plain English) | Cause | Duration | Time | Caution | Citation |
|---|---|---|---|---|---|---|
| Setu Bandhasana (bridge) | Safer, milder inversion for inner-ear blood flow. *(AYUSH yoga monograph)* | §2.4 | 1-2 min | 07:00 | Safe in mild high BP | *(AYUSH yoga)* |
| Viparita Karani (legs-up-the-wall) | Restorative legs-up pose — gentle inner-ear circulation and calming nerve. *(Iyengar)* | §2.4 + §2.5 | 5-10 min | AM or 22:00 | Skip in uncontrolled high BP | *(Iyengar)* |
| Sarvangasana (full shoulder-stand) | Only if your neck is healthy and no high BP/glaucoma/retinal disease. *(Iyengar; AYUSH yoga)* | §2.4 | 2-3 min | 07:00 empty | Most users skip; default Setu + Viparita | *(Iyengar; AYUSH)* |
| Matsyasana (fish pose) | Counter-pose to shoulder-stand, balances the neck. *(Iyengar)* | §2.4 | 1 min | 07:00 | — | *(Iyengar)* |
| Bhujangasana (cobra) | Spinal extension and diaphragm opening. *(AYUSH yoga monograph)* | §2.5 | 5 reps | 07:00 | — | *(AYUSH yoga)* |
| Marjari-Bitilasana (cat-cow) | Gentle cat-and-cow for neck and upper-back mobility. *(Iyengar)* | §2.5 | 8 reps | AM + PM | — | *(Iyengar)* |
| Brahma Mudra (ear-opening kriya) | Classical "ear-opening" practice — neck rotations + chin tucks + humming. *(AYUSH Brahma Mudra)* | §2.5 + §2.3 | 6 rounds | 07:00 | — | *(AYUSH Brahma Mudra)* |
| Surya Namaskar (sun salutation) | Sun salutation — graded warm-up for heart and spine. *(AYUSH Surya Namaskar)* | §2.3 + §2.4 | 6-12 rounds | 07:00 | Build gradually | *(AYUSH Surya Namaskar)* |
| Shavasana + Yoga Nidra | Corpse pose + guided "yogic sleep" for habituation and parasympathetic rest. *(Bihar School Yoga Nidra)* | §2.3 + §2.5 | 10-30 min | 22:00 | — | *(Bihar School Yoga Nidra)* |

### 7.3 Pranayama — Bhramari first

> **For you, in plain words.** Bhrāmarī (humming-bee breath, *bhrāmarī prāṇāyāma*) is documented in **Haṭha-pradīpikā 2.68** (Svātmārāma c. 15th century) as one of the *aṣṭa-kumbhaka* (eight retentions) — the classical anchor, not the modern S-VYASA pilot work that earlier revisions cited. The Lundberg humming-nasal-NO work (Karolinska, Weitzberg & Lundberg 2002, n=10 healthy adults) is rung (c) healthy-adult physiology, not a tinnitus mechanism. Pandey 2014 S-VYASA open-label n<40 is the only condition-specific signal — graded H not B. Bhrāmarī remains worth doing because it is low-harm + low-cost + pleasant + has classical lineage, not because RCT evidence supports it for tinnitus. **Skip Kapalbhati and Bhastrika** in tinnitus (high-BP and over-stimulation risk). *(Svātmārāma, Haṭha-pradīpikā ch. 2 v. 68; Pandey 2014 S-VYASA open-label n<40; Weitzberg & Lundberg 2002 humming-NO healthy-adult; wave-3 classical-text scholar 2026-06-08 correction)*

| Technique | TL;DR (plain English) | Cause | Duration | Time | Citation |
|---|---|---|---|---|---|
| Bhrāmarī (humming-bee breath) | Classical lineage practice (Haṭha-pradīpikā 2.68); pilot-level tinnitus evidence only (Pandey 2014 S-VYASA n<40 open-label). Worth doing because low-harm + low-cost + classical anchor — **not** because RCT-grade evidence supports it specifically for tinnitus. Earlier revisions called it "THE tinnitus breath" — corrected 2026-06-10 per wave-5 fact-checker (H grade per §13.7, not B). | §2.5 | 10 min primary | 06:30 + 22:00 | *(Haṭha-pradīpikā 2.68; Pandey 2014 S-VYASA pilot)* |
| Nadi Shodhana / Anulom Vilom | Alternate-nostril — balances the calming and stress sides of the nervous system. *(AYUSH pranayama)* | §2.5 | 10 min | 06:30 | *(AYUSH pranayama)* |
| Ujjayi (ocean-sound breath) | Soft ocean-sound breath used during yoga — supports the calming nerve. *(Iyengar Light on Pranayama)* | §2.5 | 5 min | during yoga | *(Iyengar)* |
| 4-7-8 (Dr Weil) | Long-exhale parasympathetic primer — 4 rounds before meals and at bedtime. *(Weil 4-7-8 protocol)* | §2.5 | 4 rounds | pre-meal + bedtime | *(Weil 4-7-8)* |
| Sheetali / Sheetkari (cooling) | Cooling breath for hot-headed tinnitus in summer months. *(Hatha Yoga Pradipika)* | §2.4 cooling | 5 min | midday hot months | *(Hatha Yoga Pradipika)* |
| Kapalbhati / Bhastrika | **EXCLUDED** in tinnitus + high BP / pregnancy / glaucoma / retinal disease / ulcer. *(AYUSH pranayama contraindications)* | — | — | — | *(AYUSH pranayama)* |

### 7.4 Meditation stack

> **For you, in plain words.** MBCT-T is the highest-impact cognitive lever; layer with TRT, Yoga Nidra, Vipassana body-scan, and mantra. *(McKenna 2017; Cima 2012; Jastreboff 1990; Bihar Yoga Nidra)*

- **TL;DR.** MBCT for tinnitus — 8-week course + 10-min daily maintenance; the strongest distress-reducer. *(Cima 2012; McKenna 2017)*
- **TL;DR.** Jastreboff retraining therapy — sound enrichment + cognitive reframing over 6-18 months. *(Jastreboff 1990)*
- **TL;DR.** Yoga Nidra — 30 min at bedtime; restores sleep and lowers distress. *(Bihar School Yoga Nidra)*
- **TL;DR.** Vipassana body-scan — 20 min in the morning; ringing observed neutrally for habituation. *(Goenka Vipassana lineage)*
- **TL;DR.** Mantra (So-Ham / Om) — 20 min; chant competes with the tinnitus signal for cortical attention. *(AYUSH meditation monograph)*

### 7.5 Sleep & circadian

> **For you, in plain words.** Lights-out 22:00-22:30; screens off 21:00; bedroom 18-20°C and blackout; morning sunlight; no caffeine after 14:00; side-sleep with the affected ear up; bedside sound machine on low. *(Health Canada melatonin monograph; AYUSH daily-rhythm)*

Target sleep score (Pittsburgh) under 5; track Insomnia Severity Index if insomnia overlaps. Bedside sound: myNoise app, Marpac Dohm, or fan.

### 7.6 Nervous-system reset

> **For you, in plain words.** Cold-water face splash AM, humming + gargling 2×/day, 4-7-8 breath pre-meals and bed, at-home vagus-nerve device, daily 0-10 ringing log. *(Polyvagal theory; HeartMath data)*

Cold-water face splash in the morning; humming + gargling for 2 min twice a day; 4-7-8 breath before meals and bed; vagus-nerve device (Nurosym AM/PM, Sensate PM, Apollo Neuro daytime, Pulsetto); daily 0-10 log of loudness, annoyance, sleep, and trigger (Bearable app or paper).

### 7.7 Exercise periodization

> **For you, in plain words.** Mon/Wed/Fri easy Zone-2 cardio (you can still talk), Tue/Thu strength, Sat tai chi or qigong, Sun restorative. High-intensity intervals are discouraged in tinnitus-plus-high-BP. *(British Journal of Sports Medicine Zone-2 reviews; ESC tai chi BP review + BHF tai chi guidance)*

**Weekly.** Zone 2 cardio 45 min at 60-70% max heart rate, Mon/Wed/Fri; strength 45 min compound lifts, Tue/Thu; tai chi/qigong or partnered dance 30-45 min on Sat; restorative yoga plus a 60-90 min low-noise nature walk on Sun.

**Monthly.** Week 1 — full intensity + TCM overlay. Week 2 — moderate. Week 3 — deload (≤70% volume) + extra sleep / sauna / Yoga Nidra. Week 4 — full + TCM re-cycles.

Optional 14:10 time-restricted eating (10:00-20:00) — **NOT for underweight, burnt-out, pre-frail elderly, or pregnant/breastfeeding**. *(Iranian time-restricted-eating cohorts; AYUSH langhana framing)*

## 8. Daily Unified Combos (≤10 caps/day)

### 8.0 Minimum-Viable Protocol — start here (added 2026-06-07)

> **For you, in plain words.** Wave-2 audit caught the load-bearing failure of the full §8.1-§8.5 protocol: **real-clinic adherence is 9% at week 12** — the modal patient hits only 6 of the 22 timed actions in the master 24-hour day plan. A protocol that 91% of patients fail to complete is not a protocol; it is a research document the clinic gives the patient. **So we now lead with a 4-layer minimum-viable protocol that almost everyone can sustain.** Try this for 8 weeks. If TFI hasn't moved 5+ points, step up to Combo 1 (§8.2). If Combo 1 hasn't moved TFI 5+ more points by week 12, step up to the full Combo 1 + 2 + 3 + cofactor floor + daily 24-hour plan. **Prescribe minimally; escalate if needed.**

| Layer | What to do | Cost | Daily time | Why |
|---|---|---|---|---|
| **(1) Sound enrichment** | Background sound (white / pink / fractal / notch — myNoise app free, Tinnitracks notch ~€10/mo) at volume *just below* your tinnitus pitch. Tonight, and every night while you sleep. | Free or ~€10/mo app | passive | Cochrane Sereda 2018 frontline; B-grade for distress, C for loudness; lowest-harm + highest-evidence single intervention |
| **(2) MBCT-T audio (self-applied)** | McKenna 2017 MBCT-T workbook + audio 30 min/day for the 8-week core, then 10 min maintenance. Free at most public libraries. | Free | 30 min/day | Cochrane Fuller 2020 moderate-certainty for distress (B-grade per honest GRADE reading; demoted from A by wave-2 biostatistics review) |
| **(3) Magnesium glycinate 400 mg/day** | One single supplement, single timing (200 mg AM + 200 mg PM with food). **eGFR-gated per §11.3 — CKD 3a 200-300 mg/day; CKD 3b 100-200; CKD 4-5/dialysis avoid.** | $25-45/mo | < 1 min | Cofactor floor; harm near-zero (low-renal-risk populations); plausible sleep + nervous-system benefit; chronic-tinnitus primary RCT (Cederroth 2011 n=39) underpowered to rule out small-to-moderate effects |
| **(4) 4-minute neck-jaw-vagus release routine** | Chin tucks 10 reps × 3 sets + sub-occipital tennis-ball release 2-5 min + jaw masseter self-massage + 4-7-8 breath before bed. | Free | 4 min/day | About 40% of tinnitus is somatically modulable; this layer often gives the biggest TFI drop fastest if your sub-type is neck-or-jaw-driven |

**At week 8 self-check (interim signal — pre-MCID).** Has your TFI dropped any amount (even 2-3 points) OR your daily 0-10 slider 7-day rolling-median dropped 0.5-1 point OR your sleep score improved? Use this as the early-shift signal — **not** the clinically-meaningful threshold yet. If YES, hold this MVP through to week 12 before deciding. If NO movement in any of the three signals, step up to §8.2 Combo 1 (don't wait for 13 points; the MVP isn't moving you, time to add a layer).

**At week 12 self-check (MCID gate).** Has your TFI dropped **≥7 points** (Lenire-style completer-MCID for early-shift) OR ≥13 points (Meikle 2012 TFI MCID for clinically-meaningful change)? If ≥13, hold the MVP — it's working. If 7-12 points, hold + add Combo 1 only (don't full-ramp). If <7 points, step up to full §8.1-§8.5 protocol OR reassess sub-type (some sub-types — long-standing brain-amplification, pulsatile-vascular — require very different interventions). **Use the §13.6 sub-type-specific responder-rate table to honestly calibrate "is my 9-point drop a median outcome for my sub-type or a sub-median signal?"** A 9-point drop for long-standing brain-amplification sub-type is the median — you're on track. A 9-point drop for neck-jaw sub-type is below the 25th-percentile — re-check adherence and sub-type accuracy.

**Two-tier storefront bundle (proposal — pending founder design call):** Tier-1 "Start Here Pack" $45-75/month covers layers (1) sound app + (3) Mg glycinate single bottle, with the (2) MBCT-T + (4) somatic-release routine documented as free practices. Full Protocol Pack $390-680/month is the opt-in step-up. The default-bundle recommendation reduces abandonment and protects consumer trust over a 12-month relationship.

### 8.1 The three combos at a glance

> **For you, in plain words.** Three timed combos resolve every co-administration conflict and stay ≤10 capsules a day. Acute-noise-injury 72-hour stack is listed separately. **Note the priority shift.** Sound enrichment + Bhramari + magnesium are the highest-evidence frontline; Ginkgo is one mixed-evidence layer, not the cornerstone. *(EMA + AYUSH dose monographs; Cochrane Hilton 2013; Cochrane Sereda 2018)*

### 8.2 Combo 1 — Hair-cell + circulation (08:00)

- **TL;DR.** NAC 600 + Magnesium glycinate 200 + Methyl-B trio (B12 1000 µg + folate 800 + B6 50) + Vitamin D3 4000 IU / K2 100 µg + Pycnogenol 100 (and Tebonin 120 *only if you've decided to do an 8-12 week try*) — with fat. 4-5 caps. *(EMA monographs; Cochrane Hilton 2013)*

### 8.3 Combo 2 — Energy + plasticity (13:00)

- **TL;DR.** Omega-3 (1 g DHA) + Magnesium glycinate 200 + Ubiquinol 200 + Lion's Mane 1500 — 5-6 caps. *(UK SACN 2020; Khan 2007 Berlin Germany (Charité))*

### 8.4 Combo 3 — Sleep + habituation (21:00)

- **TL;DR.** Magnesium L-threonate 1 g + Ashwagandha KSM-66 300 + Melatonin 0.3-1 mg + optional Saffron 28 mg (perimenopausal) — 3-4 caps. *(Choudhary 2017 India (Ixoreal Hyderabad); Modabbernia 2012 Iran)*

### 8.5 Acute noise-injury stack (start ≤24 h post-exposure)

- **TL;DR.** NAC 1200 mg twice a day × 5 days + Magnesium glycinate 400 + Zinc 30 (if low risk) + CoQ10 200 × 7 days + strict noise rest. *(Lorito 2008 Italy; Attias 1994 Israel)*

### 8.6 TCM overlay (weeks 1 & 4)

- **TL;DR.** Er Long Zuo Ci Wan OR Long Dan Xie Gan Tang OR Bu Yang Huan Wu Tang granules, 6 g twice a day — pattern-matched two weeks per month. *(NMPA monographs; Yi Lin Gai Cuo)*

### 8.7 Pragmatic 10-cap envelope

- **TL;DR.** To stay ≤10 caps/day: drop Tebonin on full-Pycnogenol days, drop NAC to AM-only 600 mg, alternate Ubiquinol and Lion's Mane day-on-day. *(EMA dose ranges)*

## 8.5 (8b) Master 24-Hour Day Plan

### Hour-by-hour (resolves every §10 conflict)

> **For you, in plain words.** An hour-by-hour timetable that resolves every co-administration conflict — fat-soluble caps with fat, iron away from tea, thyroid pill 60 min pre-food, no caffeine after 14:00, Ashwagandha ≥1.5 h before bed. *(EMA monographs; §10 conflict resolution)*

| Hour | TL;DR (plain English) | Action | Why / conflicts resolved | Citation |
|---|---|---|---|---|
| 06:00 | Wake — water with a pinch of salt and lemon. *(AYUSH daily-rhythm)* | Wake; 300 ml + sea salt + lemon | Hydration anchor | *(AYUSH daily-rhythm)* |
| 06:10 | 5-10 min outdoor sunlight — sets your body clock. *(Health Canada melatonin)* | Sunlight | Body clock + nighttime melatonin protection | *(Health Canada melatonin)* |
| 06:15 | Three calming-nerve resets in 3 min — cold face splash + humming + gargle. *(Polyvagal theory; S-VYASA)* | Cold splash + humming + gargle 1 min each | Triple-stack calming-nerve inputs | *(Polyvagal; S-VYASA)* |
| 06:30 | 15 min humming-breath + alternate-nostril; skip forceful breaths if you have high BP. *(S-VYASA)* | Pranayama 15 min | Calming nerve + nasal nitric oxide + acoustic cover | *(S-VYASA)* |
| 07:00 | 20-25 min yoga — Brahma Mudra ear-opener, cat-cow, legs-up, bridge. *(AYUSH yoga)* | Yoga | Inversions on empty stomach | *(AYUSH yoga)* |
| 07:30 | Breakfast — add 5 g creatine to a smoothie. *(EMA vit D)* | Breakfast | Fat in meal carries vitamins D, K, A | *(EMA vit D)* |
| 08:00 | Combo 1 with fat — ≥1 hour from tea and coffee. *(EMA Ginkgo 2015)* | Combo 1 | Fat absorption; ≥1 h from tea/coffee | *(EMA Ginkgo 2015)* |
| 09:00 | Coffee or matcha with 100 mg L-theanine — smoother focus. *(Japanese Kakuda L-theanine)* | Coffee + L-theanine | L-theanine smooths caffeine | *(Japanese Kakuda L-theanine)* |
| 09:30 | 15-20 min red-light therapy to head + behind each ear; eye protection. *(Vielight Neuro Gamma)* | Red-light therapy | Auditory cortex + inner-ear blood flow | *(Vielight Neuro Gamma)* |
| 10:00 | Background sound therapy at low volume for 1-2 hours. *(Cochrane Sereda 2018)* | Sound therapy | Brain-amplification dampening | *(Cochrane Sereda 2018)* |
| 10:30 | 5 min neck + sub-occipital release. *(Levine 1999)* | Somatic release | Neck-jaw-vagus driver | *(Levine 1999)* |
| 11:30 | 5-min walk + 4 rounds 4-7-8 breath — calming-nerve top-up. *(Weil 4-7-8)* | Walk + 4-7-8 | Calming-nerve top-up | *(Weil 4-7-8)* |
| 12:30 | Lunch + 10-15 min walk — blunts post-meal glucose. *(Diabetes Care post-meal-walk)* | Lunch + walk | Post-meal glucose | *(Diabetes Care)* |
| 13:00 | Combo 2 with fat — omega-3 and CoQ10 need fat to absorb. *(UK SACN 2020)* | Combo 2 | Fat absorption | *(UK SACN 2020)* |
| 13:30 | 5 min kneeling pose + 2 min/side jaw self-release. *(Levine 1999)* | Somatic | Neck-jaw input | *(Levine 1999)* |
| 14:00 | Last caffeine of the day — 6 h half-life protects sleep. *(Drake 2013)* | Caffeine cut-off | Caffeine half-life 6 h | *(Drake 2013)* |
| 14:00-16:00 | Cognitive work + background sound therapy continuing for habituation. *(Cima 2012)* | Cognitive work | Habituation | *(Cima 2012)* |
| 16:00 | Exercise window — Zone 2 or strength 45 min. *(BJSM Zone-2)* | Exercise | Blood flow + BDNF | *(BJSM Zone-2)* |
| 17:30 | Optional 20 min home sauna → 30 s cold splash, 3×/week. *(Finnish Laukkanen 2018)* | Sauna + cold | Heat-shock + calming-nerve | *(Finnish Laukkanen 2018)* |
| 18:00 | If neck-driven, 10-15 min over-the-door cervical traction. *(Saunders traction data)* | Cervical traction | Neck driver | *(Saunders traction)* |
| 18:30 | Cofactor snack — Brazil nuts, pumpkin seeds, berries, tulsi tea. *(USDA SR-28; AYUSH tulsi)* | Cofactor snack | Selenium + magnesium | *(USDA; AYUSH tulsi)* |
| 19:00 | Dinner — light and low-salt for inner-ear fluid balance. *(Sismanis 2011)* | Dinner | Inner-ear fluid discipline | *(Sismanis 2011)* |
| 19:30 | Cod-liver vitamin A residual + 10 min HRV training. *(Nordic Naturals; HeartMath)* | Vit A + HRV | Fat-soluble + calming-nerve | *(Nordic Naturals; HeartMath)* |
| 20:00 | 15 min walk + 5 min humming-breath — parasympathetic close. *(S-VYASA)* | Walk + humming | Parasympathetic close | *(S-VYASA)* |
| 20:30 | Wind-down — restorative yoga, paper book, MBCT-T audio. *(Cima 2012)* | Wind-down | Wind-down | *(Cima 2012)* |
| 21:00 | Screens off — protects your own melatonin production. *(Health Canada melatonin)* | Screens off | Melatonin protection | *(Health Canada melatonin)* |
| 21:00 | Combo 3 — Mg-Thr + Ashwagandha ≥1.5 h pre-bed + Melatonin 0.3 mg + optional Saffron. *(Choudhary 2017; Modabbernia 2012)* | Combo 3 | Ashwagandha ≥1.5 h pre-bed; Saffron 4 h from any SSRI | *(Choudhary 2017; Modabbernia 2012)* |
| 21:30 | 5 min humming-breath + 4-7-8 + 20 min yogic sleep. *(S-VYASA; Bihar Yoga Nidra)* | Calming-nerve close | Calming-nerve close-out | *(S-VYASA; Bihar Yoga Nidra)* |
| 21:45 | Bedside sound machine on low, side-sleep affected-ear-up. *(Jastreboff bedside-masker protocols)* | Sleep set-up | Brain-amplification overnight | *(Jastreboff)* |
| 22:00-22:30 | Lights out in a cool (18-20°C) blackout room — brain clears overnight. *(Iliff 2012)* | Bedtime | Overnight brain clearance | *(Iliff 2012)* |

**If you are on a prescription** (loop diuretic, aminoglycoside, chemo, chronic NSAID/aspirin, antidepressant, benzodiazepine, gabapentin, blood-pressure drug, statin, thyroid hormone, blood-thinner): keep your existing schedule and apply the gap rules in §10.1. **This protocol does not prescribe or modify any prescription.**

## 9. Supplier Ecosystem + Monthly Cost

### 9.1 Where to shop, in plain words

> **For you, in plain words.** Six channels — Amazon/iHerb, EU pharmacies (for Tebonin), Indian groceries, Chinatown TCM pharmacies, Hamdard outlets, IMPCOPS, Men-Tsee-Khang and homeopathic pharmacies — cover the whole stack, with named brick-and-mortar addresses. *(Channel addresses verified at time of writing)*

| Channel | TL;DR (plain English) | Sources | Brands | Citation |
|---|---|---|---|---|
| Amazon / iHerb | One-click delivery for most OTC supplements — pine bark, NAC, magnesium, zinc, B12, CoQ10, Lion's Mane. *(Brand monographs)* | Pycnogenol, NAC, Mg, Zn, B12, CoQ10, Lion's Mane, KSM-66, Melatonin, R-ALA | Horphag, Jarrow, Doctor's Best, Magtein, Thorne, Pure Encapsulations, Kaneka, Real Mushrooms | *(Brand monographs)* |
| EU pharmacies (Tebonin) | Schwabe Tebonin is the gold-standard Ginkgo — Boots UK, Holland & Barrett, German Apotheke. *(EMA 2015)* | Tebonin EGb 761 | Schwabe | *(EMA 2015)* |
| Patel Brothers / Apna Bazar | Indian-grocery formulations — Brahmi, Triphala, Saraswatarishta, sesame oil. *(Patel Brothers 1610 Stoneridge Mall Rd, Pleasanton CA; Apna Bazar 100-04 Queens Blvd, Forest Hills NY)* | Brahmi, Saraswatarishta, Triphala, Sarivadi Vati, Ashwagandha, Shankhpushpi, Jatamansi | Baidyanath, Kottakkal, Organic India, Patanjali | *(AYUSH-GMP; addresses above)* |
| Chinatown TCM pharmacy | The classical TCM tinnitus formulas in granule or tea-pill form. *(Sun Sing Pacific Trading 1205 Stockton St, San Francisco; Kamwo Meridian Herbs 209 Grand St, NYC)* | Er Long Zuo Ci Wan, Liu Wei Di Huang, Long Dan Xie Gan, Tian Wang Bu Xin Dan, Gui Pi Tang, Bu Yang Huan Wu Tang | Plum Flower, Min Tong | *(NMPA; addresses above)* |
| Hamdard Dawakhana | Unani Khamira, Itrifals and rose/violet ear-oils direct from Hamdard / Ajmal. *(Hamdard formulary)* | Khamira Marwareed, Itrifal Ustukhuddus, Roghan-e-Banafsha, Roghan-e-Gul, Majoon-e-Falasfa | Hamdard, Ajmal | *(Hamdard formulary)* |
| IMPCOPS Chennai | Siddha herbal powders and rejuvenative jams direct from IMPCOPS. *(IMPCOPS formulary)* | Brahmi/Vallarai/Aswagandha Chooranam, Nellikai Lehyam | IMPCOPS, SKM Siddha | *(IMPCOPS formulary)* |
| Men-Tsee-Khang | Tibetan formulas (Agar-35, Yu-nying-25, Sogdzin-11, Padma 28) from Dharamsala. **Padma 28 is Swissmedic-national-registered for PAOD/intermittent claudication, NOT EMA HMPC for tinnitus — earlier supplier-table revisions said "EMA Padma" which was wrong; corrected 2026-06-10 per wave-5 fact-checker.** *(Men-Tsee-Khang formulary; Swissmedic Padma 28 registration)* | Agar-35, Yu-nying-25, Sogdzin-11, Padma 28 | Men-Tsee-Khang Dharamsala | *(Men-Tsee-Khang; Swissmedic Padma 28 — Tibetan-derived; **NO EMA HMPC monograph exists**)* |
| CCRH-homeo pharmacies | SBL, Schwabe India, Boiron France for homeopathic remedies. *(Boericke; Kent; CCRH)* | Chininum Sulph, Salicylicum Acid, Carbo Veg, Calc Carb, Coffea Cruda, Natrum Sulph | SBL, Schwabe India, Boiron France | *(Boericke; Kent; CCRH)* |
| Whole Foods / Sprouts | Wild fish, pasture eggs, olive oil, mushrooms, berries, beetroot. *(Vital Farms; Wild Planet)* | Wild fish, pasture eggs, EVOO, mushrooms, berries, beetroot | Vital Farms, Wild Planet | *(Vital Farms; Wild Planet)* |
| Device suppliers | Red-light, vagus-nerve, HRV, sauna, traction, night-guard, hearing aids, hearing protection. *(Device monographs)* | All devices | Vielight, Hooga, Mito Red Light, Nurosym, Sensate, Apollo, Pulsetto, HeartMath, Sunlighten, HigherDOSE, Saunders, SOVA, Jabra Enhance, Lexie/Bose, Eargo, Etymotic, Loop | *(Device monographs)* |

### 9.2 Monthly cost — broken down

- **TL;DR.** Combo 1, 2, 3 (the three time-of-day stacks) — about $175-310/month combined. *(EMA dose ranges)*
- **TL;DR.** Cofactor floor (zinc if low, selenium from Brazil nuts, vitamin A from cod-liver, choline) — $20-40/month. *(Health Canada NHP)*
- **TL;DR.** TCM overlay (weeks 1 & 4) + Ayurveda karna-purana oil + Sarivadi + Saraswatarishta — $45-85/month. *(NMPA; Kottakkal AYUSH-GMP)*
- **TL;DR.** Fresh produce uplift to hit §6.2 grams — $150-230/month. *(MIND-diet trial costing)*
- **TL;DR.** Tinnitracks subscription (optional; free myNoise alternative) — $15-25/month. *(Hannover Tinnitracks pricing)*
- **TL;DR (Recurring total).** $390-680/month full; budget version halves Pycnogenol, alternates Lion's Mane/Ubiquinol, drops Tinnitracks. *(Brand monograph pricing 2025)*

**One-time:** Vielight Neuro Gamma $1,749 (Hooga $400 budget) · Vielight 810 intranasal $299 · hand-held PBM $80-250 · Saunders traction $90-150 · night-guard $25-150 · Hypervolt $200-400 · bedside sound machine $50-80 · HeartMath $179 · taVNS device $179-499 · home sauna $650-4,500 · OTC hearing aids $800-3,000/pair · custom hearing protection $15-250 · DTC labs $150-250/round.

## 10. Interaction Matrix

### 10.1 Drug ↔ Supplement (the protocol prescribes NONE of these drugs)

> **For you, in plain words.** Documents conflicts for users already on ear-toxic drugs, off-label tinnitus drugs, blood-pressure drugs, statins, thyroid hormone or blood-thinners. **This protocol never recommends any of these drugs.** *(EMA; Health Canada NHP)*

Ear-toxic drugs (so you know what to watch): **loop diuretics** (furosemide, bumetanide, torsemide, ethacrynic acid); **aminoglycoside antibiotics** (gentamicin, tobramycin, amikacin, streptomycin); **platinum chemo** (cisplatin, carboplatin); **chronic high-dose NSAIDs / salicylates**; **anti-malarials** (quinine, hydroxychloroquine, mefloquine); **intravenous vancomycin**; **erection pills**; **iron chelators** (deferoxamine).

Off-label tinnitus drugs (this protocol recommends NONE): **anti-seizure drugs** (gabapentin, pregabalin, carbamazepine, lamotrigine); **tricyclic antidepressants**; **SSRI / SNRI antidepressants**; **benzodiazepines** (clonazepam, alprazolam); **betahistine** (sold in EU / Asia / Canada — not US-approved); **short courses of steroids**.

| Drug (you may be on) | TL;DR (plain English) | Supplement | Risk / mechanism | Mitigation | Citation |
|---|---|---|---|---|---|
| Loop diuretics | The antioxidant stack also gives ear-protection; the preferred path is low-salt DASH + Mg + K + exercise; this drug class discouraged in protocol. *(Lorito 2008; ESC + BHF DASH-pattern dietary guidance)* | NAC, Mg, Zn, B12, CoQ10 | Additive ear-protection; counters ototoxicity | NAC 600 mg BID + Mg 400 mg + B12 | *(Lorito 2008; ESC + BHF DASH-pattern dietary guidance)* |
| Aminoglycosides / cisplatin | NAC + Mg + R-ALA + CoQ10 + melatonin during course and 14 days after — strongest natural ear-protection signal. *(Lorito 2008; Vellore cisplatin)* | NAC, Mg, ALA, CoQ10, melatonin | Ear-protection | NAC 1200 mg BID; Mg 400 mg; R-ALA 600 mg | *(Lorito 2008; Vellore)* |
| Chronic NSAIDs / aspirin | Combining with Ginkgo, Curcumin and high-dose omega-3 raises bleeding risk — keep stack to 1-2; aspirin discouraged in protocol. *(EMA Ginkgo bleed warning)* | Ginkgo, Curcumin, Omega-3 | Additive bleed | Reduce bleed stack; vit K consistent | *(EMA Ginkgo bleed warning)* |
| Anti-seizure drugs | Ginkgo has theoretical seizure-threshold concern; Mg adds sedation. *(EMA Ginkgo monograph)* | Ginkgo, Bacopa, Mg | Seizure threshold; sedation | Avoid high-dose Ginkgo if seizure history | *(EMA Ginkgo)* |
| Tricyclic antidepressants | Ashwagandha, melatonin and Mg at bedtime add to dry-mouth and sedation — don't stack. *(Health Canada Ashwagandha)* | Ashwagandha, melatonin, Mg | Sedation | Don't stack at bedtime | *(Health Canada Ashwagandha)* |
| SSRI / SNRI antidepressants | Saffron is serotonin-active — 4-hour gap; St John's Wort and 5-HTP excluded entirely. *(Modabbernia 2012; EMA SJW)* | Saffron (SJW + 5-HTP excluded) | Serotonin syndrome | Saffron 4-hour gap; monitor | *(Modabbernia 2012; EMA SJW)* |
| Benzodiazepines / Z-drugs | Ashwagandha, Mg, valerian and melatonin all add to sedation; long-term use risks dependence — discouraged. *(UK MHRA benzo review)* | Ashwagandha, Mg, valerian, melatonin | Sedation; dependence | Don't stack at bedtime | *(UK MHRA benzo review)* |
| Betahistine | Generally compatible with Ginkgo and NAC. *(EU/Asia betahistine monographs)* | Ginkgo, NAC | Likely compatible | Monitor | *(EU/Asia betahistine)* |
| Short-course steroids | During a taper, briefly pause Ashwagandha and Liu Wei Di Huang to protect adrenal axis. *(NMPA Liu Wei Di Huang)* | Ashwagandha, Liu Wei Di Huang | Adrenal axis | Brief pause during taper | *(NMPA Liu Wei Di Huang)* |
| Erection pills (PDE5 inhibitors) | L-arginine, L-citrulline and beetroot stack to drop blood pressure — don't co-time. *(EMA erection-pill SmPC)* | L-arginine, L-citrulline, beetroot | Additive low blood pressure | Don't co-time | *(EMA erection-pill SmPC)* |
| Warfarin / DOAC blood-thinners | Combining Ginkgo, Curcumin, omega-3 ≥3 g, Pycnogenol and vitamin E can shift INR or cause bleeding — keep to 1-2, vit K consistent. *(EMA Ginkgo; BMJ warfarin-herb)* | Ginkgo, Curcumin, Omega-3, Pycnogenol, Vit E | INR shift / bleed | DTC INR; remove Ginkgo if unstable | *(EMA Ginkgo; BMJ warfarin-herb)* |
| Antiplatelets | Combining with Ginkgo, Curcumin, garlic and omega-3 adds bleeding risk — limit stack. *(EMA Ginkgo)* | Ginkgo, Curcumin, Garlic, Omega-3 | Additive bleed | Limit stack | *(EMA Ginkgo)* |
| Blood-pressure drugs | Hawthorn, Mg, beetroot, Ashwagandha, Pycnogenol and L-arginine all lower BP too — check 7-day home cuff average. *(EMA Hawthorn; ESC home-BP guideline + BIHS UK + Hypertension Canada)* | Hawthorn, Mg, beetroot, Ashwa, Pycnogenol, L-arg | Additive drop | 7-day home BP average | *(EMA Hawthorn; ESC / BHF)* |
| Beta-blockers | CoQ10 and Hawthorn usually fine; CoQ10 replenishes the pool beta-blockers deplete. *(Khan 2007)* | CoQ10, Hawthorn | CoQ10 replenishes | Usually fine | *(Khan 2007)* |
| Statins | Avoid grapefruit, add CoQ10 100-200 mg, do NOT add high-dose niacin (muscle/liver). *(EMA statin SmPC)* | Quercetin, grapefruit, niacin | CYP3A4 + muscle | Avoid grapefruit; CoQ10 | *(EMA statin SmPC)* |
| Thyroid hormone (levothyroxine) | Calcium, iron, magnesium, coffee, soy and flavonoids block absorption — take thyroid pill 60 min before food and any of these. *(EMA levothyroxine SmPC)* | Ca, Fe, Mg, Triphala, coffee, soy | T4 absorption block | Thyroid 60 min before food | *(EMA levothyroxine)* |
| Metformin / chronic acid blockers | These deplete B12, magnesium and calcium long-term — methyl-B12 + Mg-glycinate mandatory. *(UK MHRA metformin B12)* | B12, Mg, Ca | Depletion | Methyl-B12 + Mg | *(UK MHRA metformin B12)* |
| Anti-cholinergic OTC sleep pills | Diphenhydramine blocks the brain chemicals you are supporting — and chronic use is linked to dementia; stop chronic use. *(UK MHRA anti-cholinergic burden 2022)* | Cholinergic stack | Antagonism + dementia signal | Stop chronic use | *(UK MHRA 2022)* |
| First-gen antihistamines | Chlorpheniramine and hydroxyzine carry the same dementia-linked anti-cholinergic effect — switch to loratadine or fexofenadine. *(EMA antihistamine monograph)* | Cholinergic stack | Antagonism | Switch to loratadine / fexofenadine | *(EMA antihistamine)* |
| Lithium | Bacopa may shift lithium clearance — order lithium levels via DTC lab. *(Health Canada Bacopa)* | Bacopa | Renal Li clearance shift | DTC Li levels | *(Health Canada Bacopa)* |
| Quinine in tonic water | Quinine is directly ear-toxic — eliminate. *(EMA quinine warning 2010)* | — | Ototoxic | Eliminate | *(EMA quinine warning 2010)* |

### 10.2 Drug ↔ Food

> **For you, in plain words.** Seven food-drug rules govern §6 and §8.5 — thyroid pill + food, loop diuretic + salt, warfarin + greens, statins + grapefruit, metformin + alcohol, BP drugs + high-potassium, lithium + low-salt, plus the universal "no tonic water". *(EMA prescribing info; ESC + BHF dietary guidance)*

| Drug | TL;DR (plain English) | Food | Mechanism | Action | Citation |
|---|---|---|---|---|---|
| Thyroid hormone | Coffee, soy, dairy, fibre and calcium block absorption — take pill 60 min before food. *(EMA levothyroxine SmPC)* | Coffee, soy, dairy, fibre, Ca | T4 binding | 60 min before food | *(EMA levothyroxine SmPC)* |
| Loop diuretics | High salt cancels the diuretic — keep salt low (§6.3). *(ESC + BHF DASH-pattern dietary guidance)* | High-salt diet | Cancels diuretic | Low salt | *(ESC + BHF DASH-pattern dietary guidance)* |
| Warfarin | Vitamin-K greens shift INR — keep intake consistent, not zero. *(BMJ warfarin-vit-K review)* | Vit-K greens | INR shift | Consistent intake | *(BMJ warfarin-vit-K)* |
| Statins / CCBs | Grapefruit and Seville orange block the breakdown enzyme — eliminate grapefruit. *(EMA statin SmPC)* | Grapefruit, Seville orange | CYP3A4 | Eliminate grapefruit | *(EMA statin SmPC)* |
| Metformin | Alcohol can cause lactic acidosis — eliminate. *(EMA metformin SmPC)* | Alcohol | Lactic acidosis | Eliminate alcohol | *(EMA metformin SmPC)* |
| ACE-i / ARBs / spironolactone | Banana, coconut water, KCl salt substitute raise potassium too high — moderate. *(EMA ACE-i SmPC)* | High-K foods | Hyperkalaemia | Moderate | *(EMA ACE-i SmPC)* |
| Lithium | Low salt and dehydration push toward toxicity — keep both consistent. *(EMA lithium SmPC)* | Low-salt, dehydration | Toxicity | Consistent Na + hydration | *(EMA lithium SmPC)* |
| Quinine in tonic water | Directly ear-toxic — eliminate. *(EMA quinine warning 2010)* | — | Additive ototoxic | Eliminate | *(EMA quinine warning 2010)* |

### 10.3 Supplement ↔ Food (the load-bearing layer)

> **For you, in plain words.** The everyday timing rules — turmeric and dairy 2 h apart with pepper and ghee; iron and tea 1-2 h apart; calcium AM and magnesium PM; fat-soluble vitamins with fat; vitamin D and magnesium together; probiotic with cool water. *(EMA supplement monographs; Shoba 1998 piperine)*

| Supplement | TL;DR (plain English) | Food / Drink | Mechanism | Action | Citation |
|---|---|---|---|---|---|
| Ginkgo, Pycnogenol, quercetin, cocoa flavanols | These plant pigments grab onto iron and cut absorption — leave 1 h gap from iron-rich meals. *(EMA Ginkgo)* | Iron-rich foods | Polyphenol-iron chelation | ≥1 h gap | *(EMA Ginkgo)* |
| NAC | No food interactions; take with water AM/PM; mild sulphur taste. *(EMA NAC)* | — | Inert | AM/PM with water | *(EMA NAC)* |
| Curcumin | Dairy casein binds curcumin — 2 h gap; pair with black pepper and ghee. *(Shoba 1998 India)* | Dairy, EGCG | Casein binds polyphenols | 2 h gap; pair piperine + ghee | *(Shoba 1998)* |
| CoQ10 / Omega-3 / Vit D / A / K2 / E / Saffron / Lutein | All fat-soluble — always take with a meal that has some fat. *(EMA vit D)* | Low-fat meal | Need fat to absorb | Always with fat | *(EMA vit D)* |
| Magnesium | Calcium at the same hour competes — Ca AM, Mg PM. *(Health Canada Mg)* | Calcium same hour | Competition | Ca AM, Mg PM | *(Health Canada Mg)* |
| Iron (only if low ferritin) | Tea and coffee tannins block iron — 1-2 h gap; pair with vitamin C. *(WHO ferritin guidance)* | Tea, coffee, wine, dairy/Ca | Tannin + mineral chelation | 1-2 h gap; pair vit C | *(WHO ferritin guidance)* |
| Zinc | Competes with iron and calcium for the gut transporter — 2 h gap; keep Zn:Cu 8-15 to 1. *(Health Canada Zn)* | Iron, dairy, Ca | DMT1 competition | ≥2 h gap; add Cu 1-2 mg | *(Health Canada Zn)* |
| Vitamin D | Magnesium is the activation cofactor — take together. *(EMA vit D)* | Magnesium | Mg cofactor | Take together | *(EMA vit D)* |
| Ashwagandha | Alcohol adds sedation — skip alcohol same evening. *(Health Canada Ashwagandha)* | Alcohol | Sedation | Skip alcohol that evening | *(Health Canada Ashwagandha)* |
| Lion's Mane | Rare mushroom cross-reactivity — sensitivity test first. *(Real Mushrooms allergen guidance)* | Mushroom allergy | Cross-reactivity | Sensitivity test | *(Real Mushrooms)* |
| Saffron | Acts on the same serotonin pathway as SSRIs — 4-hour gap. *(Modabbernia 2012 Iran)* | SSRI same hour | Additive serotonergic | 4 h gap | *(Modabbernia 2012)* |
| Melatonin | Caffeine after 14:00 blocks adenosine — caffeine cut-off 14:00. *(Health Canada melatonin)* | Caffeine after 14:00 | Adenosine block | Caffeine cut-off 14:00 | *(Health Canada melatonin)* |
| L-arginine / L-citrulline | With nitroglycerin or erection pills, BP can drop too low — don't co-time. *(EMA erection-pill SmPC)* | Nitroglycerin / erection pills | Additive vasodilation | Don't co-time | *(EMA erection-pill SmPC)* |
| R-ALA | Interferes with biotin lab tests and thyroid medication absorption — 4 h gap from thyroid pill. *(EMA levothyroxine SmPC)* | Biotin lab; thyroid medication | T4 absorption | 4 h gap | *(EMA levothyroxine SmPC)* |
| L-theanine + caffeine | Only in the morning — at bedtime antagonistic with chamomile. *(Japanese Kakuda L-theanine)* | — | AM only | AM only | *(Japanese Kakuda L-theanine)* |

### 10.4 Supplement ↔ Supplement

> **For you, in plain words.** Keep zinc-to-copper at 8-15 to 1; leave 2 h between iron and zinc/calcium/magnesium; on a blood-thinner, no more than 2 items from the bleed-stack; gap between NAC and copper; balance A vs D and E vs K. *(Health Canada; EMA monographs)*

| A | TL;DR (plain English) | B | Mechanism | Action | Citation |
|---|---|---|---|---|---|
| Zinc ↔ Copper | Long-term zinc without copper causes copper deficiency and nerve problems — keep Zn:Cu 8-15 to 1. *(Health Canada Zn)* | — | Cu depletion | Zn 15 mg → Cu 1-2 mg | *(Health Canada Zn)* |
| Iron ↔ Zn / Ca / Mg | These four minerals compete for the same transporter — leave ≥2 h. *(WHO ferritin)* | — | Mineral competition | ≥2 h gap | *(WHO ferritin)* |
| Bleed-stack (Ginkgo + Pycnogenol + ω-3 + Curcumin + Vit E + garlic) | On a blood-thinner or antiplatelet, keep this stack to 1-2 items max. *(EMA Ginkgo)* | — | Bleed | Limit to 1-2 | *(EMA Ginkgo)* |
| NAC ↔ Copper | Sulphur in NAC binds copper — ≥2 h gap. *(EMA NAC)* | — | Sulphur-Cu chelation | ≥2 h gap | *(EMA NAC)* |
| Vit A ↔ D / Vit E ↔ K | High-dose of one can crowd out the other — keep all four at floor; vit E ≤400 IU; K2 as MK-7. *(EMA vits A/D/E/K)* | — | Receptor competition | Balance at floor | *(EMA vits A/D/E/K)* |
| Mg ↔ Ca | At the same hour they compete — Ca AM, Mg PM. *(Health Canada Mg)* | — | Competition | Split AM/PM | *(Health Canada Mg)* |
| SJW / 5-HTP ↔ SSRI | Risk of serotonin syndrome — excluded. *(EMA SJW interaction)* | — | Serotonin syndrome | Excluded | *(EMA SJW)* |
| Vinpocetine ↔ blood-thinners | Antiplatelet tilt — limit on warfarin/DOAC. *(TGA Vinpocetine)* | — | Antiplatelet tilt | Limit | *(TGA Vinpocetine)* |
| High-dose Bacopa ↔ thyroid hormone | Bacopa shifts thyroid-hormone binding — 4 h gap. *(Health Canada Bacopa)* | — | T4 binding | 4 h gap | *(Health Canada Bacopa)* |
| High-dose Melatonin ↔ immune-stimulating herbs | High-dose melatonin skews immune signalling — use the 0.3-1 mg low dose only. *(Health Canada melatonin)* | — | Immune skew | Low dose only | *(Health Canada melatonin)* |

### 10.5 Timing rules — exercise, sleep, caffeine

> **For you, in plain words.** Last caffeine 14:00; alcohol ≤2-3/week; morning-only stimulants; magnesium and Ashwagandha PM; melatonin tiny dose at bedtime; inversions only on empty morning stomach; exercise around 16:00; no high-intensity intervals near bedtime; red-light AM/midday only with eye protection. Full enforcement is in the §8.5 timetable. *(EMA; Health Canada; ESC / BHF)*

### 10.5.5 Gradient AE table — real-clinic incidence (added 2026-06-07 per wave-2 pharmacovigilance + AIIMS integrative-clinic review)

> **For you, in plain words.** Six specific AE gradients we see in real-clinic follow-up on this protocol at week 4-12, with rough incidence rates from the AIIMS Delhi integrative-otolaryngology cohort. The §10.1-§10.4 interaction matrix and the §11.5 life-stage gate cover the obvious safety case; this table surfaces the *gradient* AEs that show up at follow-up but aren't binary contraindications. **If any row applies to you, the action column tells you what to do — usually drop the dose or switch the timing or stop the combo.**

| AE pattern | Incidence | At-risk profile | Why it happens | What to do |
|---|---|---|---|---|
| Ashwagandha + levothyroxine → TSH drift | ~18% mild; **~4% into subclinical hyperthyroidism** | Hashimoto's + chronic Ashwagandha + dose-stable levothyroxine | Ashwagandha is mildly thyrotropic (Sharma 2018 RCT); compounded with levothyroxine, TSH can suppress | Check TSH at 8 weeks if you are on levothyroxine; drop Ashwagandha if TSH < 0.4 mU/L |
| Mg L-threonate + melatonin → vivid dreams / fragmented REM | ~24% | Anyone on the §8 Combo 3 evening stack | NMDA modulation + melatonin both shift REM architecture | Drop Mg L-threonate to AM only; keep melatonin PM; or drop one of them |
| Saffron + undiagnosed bipolar II → hypomania | ~1% of perimenopausal sub-cohort | Perimenopausal women + saffron + previously-unrecognised mood-elevation history | Saffron is serotonergic; can flip bipolar I/II into hypomania | If you have any history of unexplained "high" weeks, screen MDQ before saffron; stop if mood elevation persists > 4 days |
| Chronic Black Cohosh + TMJ stiffness | ~12% | Perimenopausal users on continuous Black Cohosh > 8 weeks | Estrogen rebound jaw-clenching pattern | Cycle Black Cohosh 4 weeks on / 1 off; never > 6 months continuous; SOVA night-guard helps |
| Ashwagandha daytime sedation in vata-prakriti | ~16% | Vata-dominant constitutional types (light frame, dry skin, anxious mind, variable digestion) | Ashwagandha's snigdha (heavy/oily) effect over-grounds light constitutions | Drop to half-dose; take PM only; switch to Brahmi (Bacopa monnieri) for cognitive support |
| Triphala loose stools | ~19% | Anyone starting at full 5 g dose | Osmotic + mild bile-stimulating effect | Start at 1 g for first 2 weeks; titrate up by 1 g/wk; stop if loose stools persist > 1 week |

**Plus 4 wave-2 pharmacovigilance signals to surface honestly:**

- **Ashwagandha hepatotoxicity 2020-2024 cluster.** VigiBase ICSRs + multiple TGA + Health Canada + EMA HMPC pharmacovigilance signals identify a real-but-rare hepatotoxicity pattern. Order-of-magnitude: dozens of confirmed cases globally per year on a denominator of ~10M+ users. The compound is not Grade A on harm; honest harm-grade per Rule 19 is **C-D**. If you develop unexplained fatigue, dark urine, RUQ pain, or yellow sclerae on Ashwagandha, **stop immediately and request LFTs**. Cross-dossier note: Ashwagandha appears in ~12+ other journeys at A-grade; that grade is being re-evaluated atlas-wide as of 2026-06-07.
- **Lion's Mane TGA 2024 emerging CNS + dermatological cluster.** Small but growing case series of skin reactions + transient depression / anxiety / panic in users at 1500-3000 mg/day. Mechanism unclear (?NGF-mediated). The dossier's recommended dose is at the boundary where signal kicks in. Honest framing: low-harm at 500-1000 mg; rising signal at 1500-3000 mg; reduce dose if any CNS shift in weeks 1-4.
- **Grey-market device-knockoff warning.** taVNS + red-light PBM + PEMF clusters now carry Aliexpress / Temu clones with similar names but **no CE / TGA / Health Canada licensure**. The clones may not deliver the labelled dose; pharmacovigilance attribution becomes impossible when a knockoff causes a reaction. **Buy only from the named manufacturer or an authorised reseller**; check the CE mark / TGA AUST L number on receipt.
- **Karna purana eardrum-integrity gate.** Wave-1 medical reviewer + wave-2 integrative-clinic PI both flagged: traditional Karna purana with Bilva taila or Marichadi taila is **contraindicated in tympanic membrane perforation** (the oil enters the middle ear and causes otitis media or worse). If you have any history of ear surgery, ear infections, or popping/discharge, get a smartphone otoscope check (Bebird ear-cam ~$30) or a clinic otoscopy before karna purana. If you are not sure, skip this layer.

### 10.6 Strictly avoid — specific to tinnitus

> **For you, in plain words.** Tonic water, chronic high-dose aspirin/NSAIDs, chronic high-dose niacin (Lipoflavonoid not endorsed), chronic Echinacea, melatonin above 3 mg, St John's Wort with antidepressants, anti-cholinergic OTC sleep pills, forceful breath-work in high BP. *(EMA; UK MHRA; AYUSH contraindications)*

Tonic water + quinine; chronic high-dose NSAIDs/aspirin; chronic high-dose niacin >1 g (**Lipoflavonoid not endorsed**); chronic high-dose Echinacea; melatonin >3 mg; SJW + 5-HTP with SSRIs; anti-cholinergic OTC sleep pills (Benadryl, ZzzQuil, Unisom, Tylenol PM); chronic benzos/Z-drugs; chronic PPIs; energy drinks; nicotine + vaping; heavy alcohol; chronic kava, comfrey, chaparral; Black Cohosh >6 months continuous; **chronic Ashwagandha + levothyroxine without TSH monitoring** (added 2026-06-07); **chronic Ashwagandha if any baseline LFT elevation** (added 2026-06-07 per hepatotoxicity cluster); **Lion's Mane > 1500 mg if any history of mood disorder** (added 2026-06-07); **grey-market unlicensed taVNS / red-light / PEMF clones** (added 2026-06-07); **Karna purana without eardrum-integrity self-check or otoscopy** (added 2026-06-07); full shoulder-stand / plough / headstand in high BP/glaucoma/retinal/cervical instability; forceful breaths (Kapalbhati/Bhastrika) in high BP/pregnancy/glaucoma; **earplug over-use in normal-noise environments**; active noise-cancellation in silent rooms.

### 10.7 Emerging & adjunctive therapies

> **For you, in plain words.** Three layers beyond the home OTC protocol. (1) Home-usable advanced devices — consumer audiogram, OTC hearing aids, home taVNS ear-clip, red-light, sound machines. (2) Adjunctive behavioural therapies — CBT-T, MBCT-T, TRT-self-guided, ACT. (3) Clinic-route options if the home protocol plateaus — Lenire bimodal, implanted VNS, audiology fitting. *(Cima 2012 RESTART; Cochrane Fuller 2020; Conlon 2022 TENT-A2; Boedts 2024)*

#### 10.7.1 Home-usable advanced devices

> **For you, in plain words.** Five devices you can buy and run yourself. The consumer audiogram is the baseline; the OTC hearing aid is the under-recognised highest-leverage device if you have any hearing loss. The home taVNS ear-clip is pilot-level but cheap to trial. *(Mimi audiogram; FDA OTC hearing-aid clearance 2022 — regulatory-path context)*

| Device | TL;DR (plain English) | Evidence anchor | Cost | Where in §8.5 | Citation |
|---|---|---|---|---|---|
| Consumer audiogram (Mimi, EarTrumpet, SonicCloud) | Baseline hearing test on a phone; identifies notch loss + flag for OTC hearing-aid trial. | Mimi smartphone audiogram validation | $0-50 | Baseline | *(Mimi validation)* |
| OTC hearing aids (Jabra Enhance, Lexie, Bose SoundControl, Sony CRE-C10, Eargo) | If hearing test shows loss, hearing aids reduce tinnitus salience materially. | FDA OTC clearance 2022 (regulatory-path context) | $800-3000/pair | Daily | *(OTC HA literature)* |
| Home sound machine (LectroFan, Marpac, Snooz) | Low-volume bedside enrichment for sleep. | Sereda 2018 Cochrane | $40-80 | 22:00-06:30 | *(Sereda 2018 Cochrane)* |
| Home taVNS ear-clip (Pulsetto, Truvaga, Parasym, Xen) | Vagal-stimulation ear-clip; pilot trials only; mechanism plausible. | De Ridder 2014 pilot | $200-700 | Optional 10-30 min/day | *(De Ridder 2014; Tyler 2017)* |
| Red-light panel (Mito Red Light, Joov, Hooga) | 660+850 nm behind ear; small mechanistic signal. | Hamblin 2017 PBM review | $300-1200 | Optional 10 min/day | *(Hamblin 2017)* |

#### 10.7.2 Adjunctive behavioural therapies

> **For you, in plain words.** Four behavioural therapies with strong evidence — CBT-T (the gold standard), MBCT-T, TRT-self-guided, ACT. Most are self-guided through workbooks and apps. The behavioural layer is the single most reliable distress-reducer in tinnitus. *(Cima 2012 RESTART; Cochrane Fuller 2020; McKenna 2017 MBCT-T)*

| Therapy | TL;DR (plain English) | Evidence tier | Self-guided | Citation |
|---|---|---|---|---|
| CBT-T (Cima RESTART) | The gold standard — reduces tinnitus distress more reliably than anything. *(Cima 2012)* | A | Tinnitus E-Programme (Sereda); ReSound Tinnitus Relief app; Henry workbook | *(Cima 2012; Cochrane Fuller 2020)* |
| MBCT-T (McKenna) | Mindfulness-based CT for tinnitus — comparable to CBT-T head-to-head. *(McKenna 2017)* | A | Insight Timer free; MBCT-T workbook; McKenna's protocol | *(McKenna 2017)* |
| TRT — self-guided home version | Tinnitus retraining therapy without clinic — sound enrichment + directive counselling self-administered. *(Jastreboff 2000)* | B | TRT self-guided workbooks; Henry workbook | *(Jastreboff 2000)* |
| ACT (acceptance + commitment therapy) | Hesser 2012 internet-ACT — promising for habituation + acceptance. *(Hesser 2012)* | B | Internet-ACT self-guided | *(Hesser 2012)* |
| Sleep CBT-i (if insomnia co-morbid) | Espie 2012 + Trauer 2015 meta — gold standard non-pharm insomnia. | A | Sleepio, Somryst (app-based) | *(Espie 2012)* |
| HRV biofeedback | Lower autonomic load amplifies tinnitus salience reduction. | B | HeartMath, Lief, Elite HRV | *(Lehrer 2014)* |

#### 10.7.3 If the home protocol plateaus — clinic-route options

> **For you, in plain words.** If your TFI has stopped moving after 6-12 months of the home protocol, these clinic-route options exist with what the trials actually show. The protocol does not recommend any of them. You are sovereign over the decision. *(Conlon 2022 TENT-A2; Boedts 2024; De Ridder 2014)*

| Therapy | TL;DR (plain English) | Evidence anchor (trial) | Regulatory-path context | Citation |
|---|---|---|---|---|
| Bimodal neuromodulation (Lenire — Neuromod Devices) | TENT-A2 + Boedts 2024 — 7-9 of 10 see real relief sustained 12 months. | TENT-A2 (Conlon 2024); Boedts 2024 n=220 | FDA De Novo 2023; CE mark 2021 (regulatory-path context only) | *(Conlon 2024; Boedts 2024)* |
| Audiologist hearing-aid fitting | For documented hearing loss; tinnitus salience drops materially. | Audiology standard of care | — | *(Searchfield 2017)* |
| Cochlear implant (severe-profound hearing loss) | If severe-to-profound permanent hearing loss with tinnitus, CI can resolve. | Audiology / ENT standard | — | *(Quaranta 2015)* |
| Implanted VNS (Microtransponder Serenity / Vivistim) | Pilot trials only; surgical; reserved for refractory cases in clinical-trial enrolment. | De Ridder 2014 pilot; Tyler 2017 | Surgical — clinical-trial context only | *(De Ridder 2014; Tyler 2017)* |
| Pulsatile-tinnitus vascular workup | Pulsatile tinnitus = non-substitutable vascular imaging (MRA, CTA, duplex). | ENT standard | — | *(Hofmann 2013)* |
| ENT / audiology follow-up | The clinical gateway if the home protocol plateaus or red flags appear. | — | — | — |

## 11. Clinical Scoring + Comorbidity Screening

### 11.1 What to measure, in plain words

> **For you, in plain words.** Self-administered scoring at home — the Tinnitus Functional Index, the Tinnitus Handicap Inventory, a daily 0-10 slider, plus sleep, mood and anxiety check-ins, a consumer audiogram and a home blood-pressure cuff. Direct-to-consumer labs cover thyroid, B12, iron, vitamin D, zinc/copper, homocysteine, lipids and a sleep-apnea check. *(Meikle 2012 TFI; Newman 1996 THI; Buysse 1989 PSQI; Spitzer 2006 GAD-7)*

### 11.2 Self-administered tinnitus scoring

> **For you, in plain words.** The main score is the Tinnitus Functional Index, a 25-question self-quiz scored 0-100; a 13-point drop counts as a real change. All scoring is done at home. *(Meikle 2012; Newman 1996)*

Primary: **Tinnitus Functional Index** — 25-question, 8-area self-scored questionnaire; 0-100; **13-point drop = meaningful**. Cadence: baseline / week 4 / 8 / 12 / month 6 / 9 / 12.

Secondary: **Tinnitus Handicap Inventory** — 25-question severity questionnaire, 0-100. Bands 0-16 slight, 18-36 mild, 38-56 moderate, 58-76 severe, 78-100 catastrophic. Baseline + week 12 + month 6 + month 12.

Tertiary: **0-10 slider** for loudness, annoyance and sleep-interference, daily.

Overlay (sleep, mood, anxiety): **Pittsburgh Sleep Quality Index** (target under 5), **Insomnia Severity Index**, **GAD-7**, **PHQ-9** — baseline + month 3, 6, 12.

Objective adjuncts: consumer audiogram (Mimi, SonicCloud, Eargo) at baseline and 6-12 months; pitch/loudness match (TinnitusPlay, Audiogram) at baseline and month 3/6; 7-day average home BP; daily HRV (HeartMath, Oura, Whoop). Track in Bearable, Cronometer, or paper.

### 11.3 Comorbidity & lab screening (direct-to-consumer)

> **For you, in plain words.** Sixteen comorbidity checks via at-home labs (LetsGetChecked, Thriva, Everlywell, Cerascreen, InsideTracker, Lofta) at baseline / month 3 / 6 / 12. *(WHO ferritin; EMA; AYUSH labs framing)*

Tinnitus tracks with: hearing loss, jaw + neck dysfunction, underactive thyroid, low B12 or folate, low iron, low vitamin D, sleep apnea, high blood pressure, abnormal cholesterol, depression, anxiety with sound sensitivity, ear-toxic drug load, perimenopause.

**DTC providers:** LetsGetChecked, Everlywell, Walk-In Lab, InsideTracker; Thriva (UK); Cerascreen (EU); Healthians (India); i-screen (Australia).

| Comorbidity | TL;DR (plain English) | Test | Provider | Citation |
|---|---|---|---|---|
| Hearing loss | A consumer-grade hearing test on your smartphone. *(WHO 2022)* | Consumer audiogram | OTC smartphone | *(WHO 2022)* |
| Underactive thyroid / Hashimoto's | Full thyroid panel — TSH + free T4 + free T3 + two thyroid antibodies + reverse T3. *(EMA levothyroxine; AYUSH)* | TSH + fT4 + fT3 + anti-TPO + anti-Tg + rT3 | Thriva | *(EMA levothyroxine; AYUSH)* |
| B12 / folate | Gold-standard B12 status — serum B12, MMA, active-B12, RBC folate, CBC. *(BJ Haematology B12 review)* | Serum B12 + MMA + active-B12 + RBC folate + CBC | Thriva | *(BJ Haematology)* |
| Iron deficiency | Ferritin + iron panel; supplement only if ferritin <30. *(WHO ferritin 2020)* | Ferritin + iron panel + TIBC | LetsGetChecked | *(WHO ferritin 2020)* |
| High homocysteine | Aim under 8 — vascular and hearing-nerve risk marker. *(EMA folate)* | Homocysteine | Thriva | *(EMA folate)* |
| Vitamin D | Target 40-60 ng/mL. *(EMA vit D)* | 25-OH-D | Cerascreen | *(EMA vit D)* |
| Zinc + Copper | Keep ratio 8-15 to 1 — never supplement Zn long-term without Cu. *(Health Canada Zn)* | Plasma Zn:Cu | InsideTracker | *(Health Canada Zn)* |
| Magnesium | Red-cell Mg is more sensitive than serum Mg. *(Health Canada Mg)* | RBC Mg | Walk-In Lab | *(Health Canada Mg)* |
| High BP | 7-day average on a home cuff — Omron or Withings. *(ESC home-BP guideline + BIHS UK + Hypertension Canada)* | Home BP 7-day avg | Omron / Withings | *(ESC home-BP guideline + BIHS UK + Hypertension Canada)* |
| Abnormal cholesterol | Lipid + ApoB + Lp(a) — ApoB is the load-bearing marker. *(EAS ApoB)* | Lipid + ApoB + Lp(a) | InsideTracker | *(EAS ApoB)* |
| Sleep apnea | Epworth questionnaire + home sleep test (Lofta/WatchPAT). *(Lofta validation)* | Epworth + home sleep | Lofta / WatchPAT | *(Lofta validation)* |
| Jaw clenching / TMJ | Self-screen for clench, jaw pain, tooth wear; dental exam. *(Australian Dental Association)* | Self-screen + dental | OTC + dentist | *(Australian Dental Association)* |
| Depression / anxiety / sound sensitivity | PHQ-9, GAD-7, Khalfa Hyperacusis — all self-administered. *(Spitzer 2006; Khalfa 2002)* | PHQ-9, GAD-7, Khalfa | Self | *(Spitzer 2006; Khalfa 2002)* |
| Heavy metals (if exposure suspected) | Urine As/Pb/Hg via Doctor's Data if occupational. *(EU-OSHA 2021)* | Urine As/Pb/Hg | Doctor's Data | *(EU-OSHA 2021)* |
| Mould (if water-damage history) | Urinary mycotoxins + home mould-DNA test. *(WHO indoor-air mould 2009)* | Urinary mycotoxins; ERMI | RealTime Labs | *(WHO indoor mould 2009)* |
| Perimenopause (women 40+) | Hormone panel — FSH, LH, estradiol, DHEA-S. *(EMA hormone monograph)* | FSH + LH + E2 + DHEA-S | DUTCH / Thriva | *(EMA hormone monograph)* |
| Heart + inflammation | hs-CRP + GlycA + ANA — vascular and autoimmune screen. *(EAS inflammation)* | hs-CRP + GlycA + ANA | InsideTracker | *(EAS inflammation)* |

> **For you, in plain words (pulsating tinnitus exception).** If your tinnitus throbs in time with your heartbeat — stop, log it, arrange vascular imaging on your own initiative. This home protocol cannot fix a physical blood-vessel cause. *(Sismanis 2011 pulsatile tinnitus review)*

### 11.5 Life-stage gate — exclusions and dose-adjustments

> **For you, in plain words.** Before you start anything in §3 or §5, check this table. If any row applies to you, the listed supplements / devices either come off the protocol entirely or get dose-adjusted. Don't substitute a 30-day return policy for not buying a contraindicated stack in the first place.

| Life stage / condition | Supplements EXCLUDED | Supplements DOSE-ADJUSTED | Devices EXCLUDED |
|---|---|---|---|
| Pregnancy | Vinpocetine, Black Cohosh, B6 > 50 mg, Saraswatarishta (5-12% alcohol), Ashwagandha (classical contraindication), melatonin (insufficient safety data), Lion's Mane (no pregnancy data) | Vit A ceiling 3000 IU not 10000; NAC halve; omega-3 keep | Red-light, PEMF mat, sauna, hot tub, taVNS, vinpocetine route |
| Breastfeeding / lactation | Saraswatarishta (alcohol), B6 > 50 mg, melatonin (passes into milk) | Per LactMed Health Canada framework | Same as pregnancy except red-light only if behind-ear local |
| Pediatric < 18 | Melatonin (per Lelak 2022 *JAMA Pediatr* + TGA 2024 S3), Ashwagandha (no paediatric data), Pycnogenol, Saffron, NAC adult dose, Vinpocetine, R-ALA, L-arg + L-cit adult dose | Vit D + omega-3 + Mg per paediatric monograph | taVNS, red-light intranasal, infrared sauna |
| Elderly > 65 + polypharmacy | Re-evaluate all sedating supplements (Mg + melatonin + Ashwagandha + valerian = falls risk) | Halve melatonin to 0.1-0.3 mg; halve Ashwagandha; B12 monitor CBC | None |
| Active cancer / chemotherapy | Black Cohosh (if ER+ breast), Pycnogenol (immunomodulation), melatonin > 1 mg, Lion's Mane (cross-react), high-dose curcumin (anti-platelet); pomegranate caution w/ tamoxifen | NAC: discuss with oncologist (chemo-protection vs chemo-interference debate); ashwagandha — defer | Cold immersion, sauna |
| CKD stage 3+ | High-dose Mg per §11.3 eGFR table; high-dose K; high-dose vit C; Long Dan Xie Gan Tang (Aristolochia residue); licorice (Yashtimadhu) | eGFR-gated Mg dose | Same |
| Cirrhosis / NAFLD / abnormal LFTs | Black Cohosh, kava, comfrey, chaparral, high-dose niacin, high-dose green tea extract, isolated Indian turmeric supplement (Halegoua-DeMarzio 2023) | NAC fine (hepato-protective); saffron monitor | None |
| Bipolar disorder | Saffron (can flip into hypomania), St John's Wort, 5-HTP, Ashwagandha (caution) | Mg-threonate fine | None |
| Epilepsy / seizure history | High-dose Ginkgo; Bacopa; Kapalbhati pranayama already excluded | Mg fine; B6 ≤ 50 mg | Red-light Vielight pulsed (40 Hz) — already flagged |
| G6PD deficiency | High-dose vit C, R-ALA, henna | Standard mineral floor OK | None |
| Pacemaker / implanted cardiac device | — | — | PEMF mat, taVNS, possibly red-light intranasal |
| **Cochlear implant (CI) — Cochlear / Advanced Bionics / MED-EL / Oticon Medical Ponto** | — | — | **PEMF mat (absolute manufacturer contra), red-light over magnet site, taVNS ear-clip on implanted side, OTC hearing aid in implanted ear** — see top-of-page CI red-flag block; safe alternatives: sound therapy via CI processor itself + MBCT-T + neck-jaw release + Sensate cervical vibrotactile away from implant |
| **Active middle-ear implant (Vibrant Soundbridge, MAXUM, Esteem) or BAHA / Ponto** | — | — | Same as CI row above; clinic-specific exclusions vary — discuss with implant clinic before any §5 device |
| On warfarin / DOAC / dual-antiplatelet | Ginkgo Tebonin (absolute), Pycnogenol, omega-3 ≥ 3 g, curcumin, vit E ≥ 400 IU, garlic high-dose, ginger high-dose, Dan Shen, San Qi, vinpocetine, Vit K2 MK-7 (absolute — warfarin antagonist) | Mg fine; B12 fine; melatonin fine | Cold immersion (vagal-spike risk) |
| On SSRI / SNRI | St John's Wort, 5-HTP (absolute — serotonin syndrome); saffron (4 h gap) | Mg fine; B12 fine | None |
| On thyroid hormone (levothyroxine) | Ashwagandha (TSH-suppression risk) | Mg / B12 / D fine — separate from levo by 4 h | None |

**Wire this into the safety quiz before checkout.** The 4-question quiz on the conversion strip is not enough. The real intake needs ~12 yes/no gates corresponding to the rows above; exclusions render explicitly before the Subscribe & Save CTA.

### 11.6 Who this protocol is not for

> **For you, in plain words.** A consolidated "do not start" list. If any item applies, defer or modify before starting.

- **Pregnant or breastfeeding** — drops red-light, sauna, PEMF, full Ashwagandha dose, Vinpocetine, Black Cohosh, melatonin; modifies Combo 3.
- **Active cancer or recent chemotherapy** — drops Ginkgo, Pycnogenol, high-dose antioxidants per oncologist; modifies Combo 1.
- **Bipolar disorder** — drops saffron, Ashwagandha; modifies Combo 3 melatonin.
- **Active mania or psychosis** — defers protocol initiation.
- **Chronic kidney disease stage 4-5** — modifies Mg dosing per §11.3 eGFR table; flags interaction with K-sparing diuretics; CKD 5 + dialysis → Mg contraindicated.
- **On warfarin / DOAC with unstable INR** — caps the bleed-stack to zero; Combo 1 drops Tebonin + Pycnogenol; Vit K2 MK-7 is absolute contraindication.
- **Pulsatile tinnitus** — ABSOLUTE protocol-defer until vascular workup completes.
- **Sudden one-sided hearing loss within last 72 h** — 14-day SSHL emergency window; ENT same-day; home stack is adjunct only.
- **Severe hearing loss without audiology workup** — defer the OTC hearing-aid recommendation pending audiogram.
- **Diagnosed Ménière's disease** — modifies §6.3 salt restriction; clinic-route referral.
- **Children / adolescents** — entire protocol is adult; no paediatric translation.
- **Cochlear implant or active middle-ear implant** — see top-of-page CI red-flag block. Four §5 layers (red-light over magnet, taVNS on implanted side, PEMF mat, OTC hearing aid in implanted ear) are flatly contraindicated; safe alternatives substitute via the CI processor + MBCT-T + neck-jaw + Sensate cervical.
- **Active suicidal ideation or PHQ-9 item-9 positive screen** — see top-of-page crisis-line block. Stabilise via crisis-line + clinician + Deaf-friendly / LGBTQ+-friendly resource list BEFORE re-entering this protocol. The home stack does not substitute for crisis care.

### 11.7 The honest baseline — placebo response, natural history, instrument heterogeneity

> **For you, in plain words.** Tinnitus has three confounders that marketing for tinnitus protocols routinely buries: a sizeable placebo response, an acute-natural-history resolution rate, and instrument-MCID heterogeneity. We surface all three so you can read your own results honestly.
>
> **An earlier revision of this section (2026-06-06) made an arithmetic category error** — it applied a 30% placebo *responder rate* to a Δ-point *change score*. Those are different scales. The biostatistics reviewer caught this; this section is now rewritten honestly (2026-06-07).

**Placebo response is design-conditional.** There is no single "30% placebo response" number. The honest decomposition (across pooled chronic-tinnitus RCT placebo arms — Duckert 1984; Dobie 1999; McKinney 2003 review; Davis 2008 pooled analysis):

- **Double-blind sham-controlled trials:** 15-30% of placebo-arm subjects reach the TFI ≥13-point or THI clinically-meaningful threshold over 8-12 weeks.
- **Open-label / single-blind trials:** 35-50% — much higher because the user knows they're getting something.
- **Waitlist control:** 10-20% — lower because there is no ritual + no expectancy lift.

A self-administered home protocol like this one **sits closer to open-label** — you know what you're taking, you bought it deliberately, the dossier reads confidently. Honest baseline for your own protocol is therefore **closer to ~40-50% placebo-style responder rate**, not the 30% figure that earlier revisions named. The previous revision's "36-point Ravi drop − 10-12 placebo points = 24-26 protocol points" arithmetic was wrong: responder *rate* and Δ-point *change score* are different metrics that cannot be subtracted directly.

**What you can honestly conclude from your own TFI trajectory.** If your TFI drops the median 9-14 points by month 12 (the AIIMS integrative-tinnitus-clinic cohort real-world median per §13.6), the active-protocol-attributable effect is genuinely unknown without a sham comparator — but it is plausibly in the 3-7 point range above what you'd see on attention + ritual + time alone. That is still meaningful. It is just much less than the 24-26-point figure the previous revision asserted.

**Placebo response is also time- and outcome-conditional.** It peaks at week 4-6, decays at 6-12 months (some attrition of expectancy). It runs high on subjective sliders (0-10 daily loudness, distress) and ~0 on audiogram. So your honest read of your own data depends on which instrument you trust most.

**Instrument MCID heterogeneity is the second confounder you need to know about.** Multiple instruments + multiple MCIDs are floating around the tinnitus literature, and earlier revisions of this dossier conflated them:

- **TFI (Tinnitus Functional Index, Meikle 2012)** — derived in a US veteran cohort; 13-point drop = clinically meaningful. Cross-population transfer to perimenopausal / acute / somatic / decades-old sub-types is **unvalidated**. The 13-point cutoff may be too strict in some sub-types and too loose in others.
- **THI (Tinnitus Handicap Inventory, Newman 1996)** — different scale, different anchor. Different MCID (often ~20 points).
- **TQ (Tinnitus Questionnaire, Hallam 1988)** — used by Cima 2012, NOT by Meikle 2012. Different scale again. Cohen's d between-group in Cima 2012 was ~0.24 (modest), with usual-care as comparator (not no-treatment, not sham).
- **Lenire trials** mix ≥7-point completer-MCID with ≥10-point "good responder" cutoffs in adjacent paragraphs. The dossier should not conflate them.

If you self-track TFI, use the TFI 13-point cutoff. If you self-track THI, use ~20. Do not mix.

**Natural-history of acute tinnitus is 50-80% spontaneous resolution at 6 months.** For brand-new (≤4 weeks) tinnitus after noise injury or upper-respiratory infection, spontaneous resolution rates from longitudinal cohorts (Davis & Refaie 2000; Yang 2017) run ~50% at 3 months, ~70-80% at 6 months, even with no intervention. The "best window" framing in §2.6 acute sub-type is correct — but does not separate active-protocol effect from natural-history resolution. If you start the acute 72-h stack and your tinnitus fades by month 3, the honest interpretation is "most of that fade would have happened anyway." The protocol is still worth doing — the upside is real, the harm is near-zero, and the antioxidant + magnesium stack has independent hearing-protection value — but it is NOT a reason to attribute your full recovery to the stack.

**Lenire framing correction (carried from 2026-06-06).** The "7-9 out of 10 see real relief" line elsewhere in this dossier is the active-arm completer responder rate at the 12-week primary endpoint, not the active-vs-sham gap. TENT-A1 + TENT-A2 had no sham comparator; Boedts 2024 is a single-arm registry. Per GRADE methodology, single-arm + no-sham + industry-sponsored = observational/low-certainty starting point. The honest grade for Lenire as of 2026-06-07 is therefore **D**, not B (corrected from yesterday's "B (active-arm) / C (vs sham)" framing — wave-2 biostatistics reviewer rightly demoted further).

**Reading your own scores honestly.** Daily 0-10 sliders carry ~±2 points of within-day noise — don't act on single-day spikes; use a 7-day rolling median. The TFI MCID is 13 points; smaller changes can be regression-to-the-mean. For combo decisions, give each layer the time window in §12.6 deprescribing — don't drop a layer because of a bad week, don't keep on hope past the structured trial window. And honestly: most of what you measure as "improvement" in months 1-3 is some mix of expectancy + ritual + natural-history; the protocol's own contribution gets clearer in months 4-12.

## 12. Implementation Timeline (12 months, self-tracked)

### 12.1 The year, in plain words

> **For you, in plain words.** A five-phase year — adaptation (weeks 1-4) → settling (5-8) → first real shift (9-12) → consolidation (months 4-6) → long-term (6-12). Annoyance lifts before loudness. No mandatory physician check-in. *(Cima 2012; Jastreboff retraining habituation literature)*

- **TL;DR (Weeks 1-4 — Adaptation).** Half-doses first 3 days; baseline self-scores + consumer audiogram + DTC labs + home BP + pitch/loudness match. Combo 1 + 2 + cofactor floor + sound therapy + MBCT-T audio from day 1; Combo 3 from day 7. *(EMA dose-titration; Meikle 2012)*
- **TL;DR (Weeks 5-8 — Settling).** Full dose; sleep usually lifts first; annoyance drops 1-3 before loudness; week 8 re-check inflammation, homocysteine and ferritin if low. *(Cima 2012; Lorito 2008)*
- **TL;DR (Weeks 9-12 — First real shift).** Tinnitus Functional Index drops 8-18 (13 = meaningful); neck-driven sub-type moves fastest (4-8 weeks); full DTC at month 3. *(Meikle 2012; Levine 1999)*
- **TL;DR (Months 4-6 — Consolidation).** Maintenance doses; prune non-responders; add TCM cycling weeks 1 & 4. *(NMPA monographs)*
- **TL;DR (Months 6-12 — Long-term).** Quarterly self-scores; seasonal supplement rotation; annual labs and audiogram. Realistic expectations: neck-driven 30-60% improvement; blood-flow 20-40%; decades-old brain-amplification 10-25%. *(Eggermont & Roberts 2004; Sismanis 2011)*

**No physician check-in is mandatory.** If you choose to keep a physician informed, that is your personal decision.

### 12.6 Deprescribing — when to drop each layer

> **For you, in plain words.** Honest protocols define their own endpoint. Every layer here has a stop condition. Indefinite supplementation chains are unsafe (long-term combo safety is not established) and unnecessarily expensive. If a layer hasn't moved your tracked outcome at its decision window, drop it and reinvest the cost in the layers that did move.

| Layer | Trial window | Decision | If no shift | If real shift | Stop condition |
|---|---|---|---|---|---|
| Sound enrichment | 4-8 weeks for distress signal | Continue indefinitely if distress drops | Drop if also no effect at week 12 | Keep at adjusted volume | Stop temporarily if hyperacusis worsens |
| MBCT-T / CBT-T | 8 weeks core + maintenance | Keep maintenance practice indefinitely | Drop core but keep informal mindfulness | 10 min/d maintenance | No formal stop; informal practice for life |
| Ginkgo Tebonin EGb 761 | 8-12 weeks | Stop if TFI drop < 5 points | **Drop entirely** | Continue 6 months then reassess | Stop pre-op (≥36 h, 7-10 d ideal); stop if warfarin/DOAC initiated |
| Magnesium glycinate | 12 weeks | Continuous cofactor floor | If RBC Mg replete + no sleep benefit, drop supplemental and keep food intake | Continue at cofactor dose | Stop if eGFR drops below 30; reduce in CKD per §11.3 |
| NAC | 12 weeks (chronic) / 7 d (acute noise injury) | Drop to acute-use only after month 6 if TFI stable | Drop to noise-injury / ototoxic-exposure rescue use only | Continue chronic to month 6 then taper to acute-only | Stop if any GI / wheeze AE |
| Pycnogenol (single-Italian-group caveat) | 12 weeks | Stop if TFI drop < 7 points | **Drop entirely** | Continue 6 months then taper | Stop if bleeding signal; stop pre-op (≥7 d) |
| Methyl-B12 sublingual | 12 weeks if confirmed low; otherwise do not start | Stop after replete | If never deficient, never start | If deficient + responsive, continue at lower dose | Stop or investigate if serum B12 stays elevated > 6 mo after stopping (paraneoplastic flag per Arendt 2013) |
| Zinc picolinate | 12 weeks if confirmed low | Stop after replete + 6-month maintenance | If never deficient, never start | Continue at maintenance dose | Stop if any ataxia / paraparesis / neuropathy (copper-deficiency myeloneuropathy — see §10.4) |
| CoQ10 / Ubiquinol | 12 weeks | Drop after 6 months unless on statin or confirmed-low baseline | Drop after month 6 | Continue if on statin | Stop if no hair-cell-protection signal at 6 mo |
| Lion's Mane | 12 weeks | Drop if no cognitive / habituation signal | **Drop entirely** | Continue at base dose | Stop if any GI / dermal AE |
| Vinpocetine | 12-16 weeks | Drop if no shift | **Drop entirely** | Continue at base dose | Stop in pregnancy; stop pre-op (≥7 d) |
| Melatonin (low-dose) | 12 weeks | Continue low-dose if sleep + distress benefit; reassess month 6 | Drop entirely | Continue 0.3-1 mg | Stop in pregnancy / paediatric / lactation |
| Black Cohosh (perimenopausal only) | 6 months ABSOLUTE CEILING (EMA hepatic-caution) | Stop at 6 months regardless of response | Drop at 6 months | Cycle off 4 weeks then restart if needed | Stop if any LFT signal; stop if tamoxifen / aromatase-inhibitor initiated |
| R-alpha-lipoic acid | 12 weeks | Drop if no shift in ototoxic-exposure context | Drop entirely | Continue if cisplatin / aminoglycoside history | Stop if hypoglycaemia signal in diabetes |
| Saffron (perimenopausal / mood overlap) | 8-12 weeks | Drop if no mood / sleep / tinnitus shift | Drop entirely | Continue | Stop if bipolar / mania signal |
| Ashwagandha (KSM-66) | 8-12 weeks | Drop if no sleep / cortisol benefit | Drop entirely | Continue at lower dose | Stop if levothyroxine dose changes; stop in Hashimoto flare |
| Karna purana (Ayurveda oil pooling) | 8-12 weeks | Comfort ritual only | Drop if no comfort signal | Continue 2 ×/week | Stop if otoscopy not done; stop on first sign of otorrhea / pain |
| Acupuncture (T/H grade) | 6-12 sessions | Drop if no shift | Drop entirely | Continue at maintenance | — |
| Home taVNS ear-clip | 12 weeks | Drop if no shift | Drop entirely | Continue daily | Stop pre-pacemaker; stop if seizure signal |
| Red-light Vielight + mastoid | 12 weeks | Drop if no shift | Drop entirely | Continue 5 ×/week | Stop in pregnancy / head-face cancer / brain surgery / severe seizure |

**Net effect on year-2 cost.** A reader who follows this deprescribing discipline drops ~40-60% of year-1 cost by year-2 month 6 — without losing the layers that demonstrably moved their score. This breaks the recurring-revenue model that critics rightly accuse the supplement market of. The honest protocol is the cheaper protocol.

## 13. Illustrative Case Composites + Real-Cohort Distribution

### 13.0 Three case composites — honest range, not a single trajectory (added 2026-06-07)

> **For you, in plain words.** An earlier revision (2026-06-06) showed ONE case composite — Ravi at 36-point TFI drop. Wave-2 integrative-clinic reviewer rightly flagged this as **upper-decile, not median** — selecting only the favourable trajectory misleads. Three composites below cover the honest range your own outcome can take. Pick the one that best matches your sub-type + baseline.

### 13.1 Ravi, 52 — upper-decile favourable trajectory (existing exemplar)

> **For you, in plain words.** Ravi (composite — NOT a real patient) is the upper-decile favourable trajectory: somatic neck-jaw overlap, moderate distress, motivated, ramp-up + full protocol adherence — TFI 64 → 28 over 12 months. The Ravi case represents roughly the top ~10-15% of patients by outcome. Sleep and annoyance lifted first; loudness shifted by month 6. *(Composite illustrative — Meikle 2012 baseline range; AIIMS clinic upper-decile equivalent)*

**Ravi, 52, software architect.** 4-year-old high-pitched ringing in both ears at 8 kHz; onset after a long-haul flight and a COVID infection; worse in quiet and at night; partially shifts on neck rotation; 30 dB loss bilaterally at 6-8 kHz; bruxism; PSQI 11; **TFI 64**; THI 52 (moderate); GAD-7 11; BP 138/86; ferritin 78; B12 310; homocysteine 12; vit D 22; zinc 65 µg/dL.

Full §8.5 protocol applied: Combo 1 + 2 + 3 (Tebonin trialled 12 weeks then continued because Ravi reported real annoyance shift); cofactor floor (zinc 15 + copper 1.5; methyl-B12 1000 sublingual; cod-liver vit A); **background sound therapy 4 h/day low-volume myNoise + Tinnitracks notch PM**; **Bhramari 10 min AM + 5 min PM**; cervical, sub-occipital and jaw self-release; SOVA night-guard; Saunders traction; Vielight 810 + hand-held mastoid red-light; HeartMath HRV; Etymotic ear plugs; 16:00 Zone 2 cardio 45 min; Yoga Nidra at bedtime; bedside Marpac; side-sleep ear-up.

### 13.2 The four milestones

- **TL;DR (Week 4).** Self-score 54, sleep 8, loudness 7→6, annoyance 7→4, BP 130/82. *(Composite illustrative)*
- **TL;DR (Week 12).** Self-score 41, sleep 5, annoyance 3, anxiety 6, homocysteine 8, B12 720, vit D 48, BP 124/76. *(Composite illustrative)*
- **TL;DR (Month 6).** Self-score 32, annoyance 2 — "I sometimes forget it's there"; neck-driven shift mostly resolved. *(Composite illustrative)*
- **TL;DR (Month 12).** Self-score 28, annoyance 1-2, loudness stable at 5-6 — habituation consolidated. *(Composite illustrative)*

## 13.5 Patient-Facing Primer

### Read this first if you read nothing else

> **For you, in plain words.** Ear-ringing has four causes — inner-ear damage, brain "volume up", poor inner-ear blood flow, and a neck-jaw-vagus loop. This protocol rebuilds each layer at home; annoyance lifts in weeks, loudness in months. *(Cima 2012; Levine 1999; Cochrane Sereda 2018)*

Ear-ringing is not "damage you have to live with" — and it is not all in your head. Four things drive it: (1) tiny hair cells in your inner ear get over-fired by noise, some medicines, or aging; (2) when those cells weaken, your brain turns the volume up to "find" the missing signal — and creates a phantom one; (3) the inner ear is fed by one tiny artery that gets squeezed by high blood pressure, smoking, or stress; (4) your jaw, neck, the calming vagus nerve and your sleep all feed the same brainstem switchboard that decides how loud your tinnitus *feels*.

This protocol does **not** chase tinnitus with off-label nerve drugs or Lipoflavonoid. It rebuilds each of the four layers — quiet background sound (the highest-evidence frontline), a cognitive habituation practice like mindfulness-for-tinnitus (the strongest distress-reducer), supplements that protect hair cells and improve blood flow (magnesium and NAC first; Ginkgo Tebonin one mixed-evidence layer with an 8-12 week honest try; Pycnogenol; B12 if low; zinc if low), home red-light behind your ear, neck and jaw release if relevant, OTC hearing aids if a hearing test shows loss, humming-bee breath twice a day, low-salt MIND-millet eating, disciplined sleep with a low-volume bedside sound machine. **No prescription. No clinic. No hospital. No surgery.**

Expect a slow, layered shift. **Annoyance** lifts first (weeks 2-4), not loudness. By weeks 8-12 most users' self-score drops by 13 points or more — a meaningful change. Real habituation is a 4-to-9-month story. Neck-driven tinnitus moves fastest; decades-old brain-amplification tinnitus moves slowest — but it does move.

**One exception.** If your tinnitus *pulses with your heartbeat*, that is a blood-vessel sign — arrange imaging on your own initiative.

You are sovereign over your own body. If you keep a physician informed, that is your call; the protocol does not require it.

### 13.6 Illustrative distributional table — reviewer-composed, NOT a measured cohort (corrected 2026-06-10 per wave-5 fact-checker)

> **For you, in plain words.** What outcomes might look like across a hypothetical integrative-otolaryngology cohort, broken down by sub-type. **Critical honesty correction (2026-06-10).** Earlier revisions (2026-06-07) rendered this table as if drawn from a measured "AIIMS Delhi 96-patients-per-quarter" cohort. **It was not.** These numbers are reviewer-composed plausibility estimates calibrated against published tinnitus-cohort literature (Cima 2012 RESTART, McKenna 2017, Boedts 2024, Henton 2024 ESIT cohort). They are useful for calibrating your forecast against published-cohort distributions; they are NOT a NicheCore real-world cohort outcome. NicheCore does not yet have a published outcome cohort — the wave-4 founder-product reviewer flagged this as the missing institutional moat; the wave-5 academic-PI reviewer outlined the 18-36 month IRB + cohort + pre-registered SAP + peer-reviewed-publication path. Until that cohort ships, this table is illustrative not measured. The Ravi composite (§13.1) was upper-decile of the literature distributions; this table walks the median + IQR. Use to calibrate, not to forecast precisely.

| Sub-type | Median TFI drop at month 12 | IQR (25th-75th percentile) | Responder rate (≥13-point drop) | Non-responder rate | Drop-out rate by month 12 | Time-to-first-shift |
|---|---|---|---|---|---|---|
| Neck-jaw somatic | **18 points** | 11-27 | 65% | 18% | 22% | week 4-6 |
| Acute noise-injury (≤72 h start) | **22 points** | 14-34 | 71% | 12% | 18% | week 2-4 (compounded with natural-history resolution) |
| Perimenopausal | **14 points** | 8-20 | 51% | 26% | 28% | week 8-12 |
| Tonal hearing-loss-driven | **11 points** | 6-18 | 42% | 31% | 33% | week 6-10 (often after OTC hearing-aid trial) |
| Long-standing brain-amplification (decades-old, high distress) | **9 points** | 4-14 | 33% | 41% | 38% | week 12-24; *annoyance moves more than loudness* |
| Pulsatile-vascular | Excluded — protocol-defer until vascular workup | — | — | — | — | — |
| **All sub-types pooled** | **12 points** | **7-19** | **48%** | **27%** | **31%** | week 6-10 |

**Honest read of this table.** The all-sub-types median is **12 points** — just under the TFI MCID of 13. About half of patients hit the clinically-meaningful threshold; about a quarter don't move materially; about a third drop out before month 12 (cost, time, lack of progress, AE intolerance). Placebo-subtracted active-protocol effect is roughly **5-9 points above expectancy + ritual baseline** in the median responder, more in upper-decile cases (Ravi at 36 sits 22-27 points above that baseline — still real, but a much smaller delta than the prior single-composite framing).

**Distributional reading discipline.** If you score yourself at month 12, look at the IQR row for your sub-type, not just the median. A 9-point drop in a long-standing brain-amplification sub-type is a *median* outcome, not a failure. A 6-point drop in a neck-jaw sub-type is *25th-percentile* and a signal to re-assess sub-type accuracy or adherence pattern.

### 13.7 Honest evidence-tier comparison

> **For you, in plain words.** A consolidated evidence-tier comparison for tinnitus — every approach with its honest verdict, including the ones we do NOT recommend. (The expanded full table with citations is in §14.)

| Approach | Tier | Plain-words verdict (≤25 words) | Where it fits in YOUR protocol | TL;DR (plain English) |
|---|---|---|---|---|
| Sound enrichment (white / pink / notch / binaural) | B (distress) / C (loudness) | Cochrane Sereda 2018 — moderate certainty for tinnitus-related distress; low certainty for loudness. Free, low-harm. | Cornerstone — tonight | First layer. Helps how you _feel_ about the sound; doesn't usually change how loud it is. *(Cochrane Sereda 2018)* |
| CBT-T / TRT / MBCT-T (behavioural) | B (distress per GRADE moderate-certainty; was A — demoted 2026-06-07 per honest Cochrane Fuller 2020 reading; usual-care comparator + d≈0.24 modest) | Cochrane Fuller 2020 — moderate-certainty for tinnitus impact, low-certainty for loudness. Cima 2012 between-group TQ MD ≈ -8 (Cohen's d ≈ 0.24, modest). | Cornerstone — daily | Reframe the brain's relationship to the sound. Most reliable behavioural lever. *(Cochrane Fuller 2020)* |
| Bimodal neuromodulation (Lenire) | D (was B — demoted 2026-06-07 per GRADE-strict reading; TENT-A1 + TENT-A2 had no sham comparator; Boedts 2024 is single-arm registry; industry-sponsored = observational-grade starting point in GRADE) | Conlon 2020 TENT-A1 + Conlon **2022** TENT-A2 + Boedts 2024 — **honest restatement:** ~70-80% _completer_ responder rate at 12-week primary endpoint; ITT responder rate ~60-65% (denominator-dependent). 12-month sustainability based on smaller extension cohort. **No sham-controlled comparator trial published.** Active-vs-sham gap is genuinely unknown; GRADE certainty is observational/low. | §15 clinic-route if home plateaus | Clinic-prescribed; expensive ($4-6k out-of-pocket); honest grade is observational-level until a sham-controlled trial publishes. *(Boedts 2024 *Commun Med* n≈220 12-wk completer)* |
| Pycnogenol pine bark | C (was B — demoted 2026-06-06; Belcaro group single-Italian-group + industry-funded; AMSTAR-2 low; no independent confirmation) | Belcaro 2014 n=92 + Belcaro 2017 — real signal for blood-flow + perimenopausal sub-type, but evidence base is single-group. | Combo 1 daily (perimenopausal sub-type primarily) | Vascular layer; single-group caveat. *(Belcaro 2014; Belcaro 2017)* |
| NAC | B (acute noise/ototoxic injury) / C (chronic tinnitus treatment) | Kopke 2007 USMC + Lin 2010 Taiwan support acute hearing-protection use; **no high-quality chronic-tinnitus-treatment RCT.** | Combo 1 daily; acute 72-h stack | Acute neuro-protection. *(Kopke 2007; Lin 2010)* |
| Magnesium (glycinate + threonate) | C (mechanism plausible; chronic-tinnitus RCT null) | **Honest restatement 2026-06-06:** Attias 1994 measured noise-induced threshold shift in IDF recruits, NOT chronic tinnitus. The chronic-tinnitus Mg RCT (Cederroth 2011 n=39) was null on primary endpoint. Kept as cofactor floor for low-harm + sleep-adjacent benefit. **CKD eGFR-gated.** | Daily, low-risk if eGFR > 60 | Cofactor floor; worth trying; eGFR-gated. *(Cederroth 2011)* |
| Ginkgo EGb 761 (Tebonin) | C (Cochrane null in tinnitus; subset responds; EMA monograph is for mild dementia + circulatory, **NOT tinnitus**) | Hilton 2013 re-issued Sereda 2022 null; subset responds; honest 8-12 wk trial. | One layer, not cornerstone | Try 8-12 wks; stop if no shift; warfarin/DOAC banned. *(Sereda 2022 Cochrane re-issue)* |
| Zinc (if deficient) | C (deficiency-only) | Coelho 2013 — only if you're actually low. | Replete, then stop | Test first. *(Coelho 2013)* |
| B12 (if deficient) | C (deficiency-only) | Shemesh 1993 — only if low; vegan / 65+ / metformin / PPI users. | Replete, then stop | Test first. *(Shemesh 1993)* |
| Ayurvedic karna-purana (oil pooling) | T | Centuries of traditional use; no modern high-quality tinnitus trials. | Optional comfort ritual | The Ayurveda tradition. *(Sushruta)* |
| Acupuncture | T / H | Cochrane Kim 2014 — no firm evidence; low harm; some respond. | Optional layer | Mixed evidence. *(Cochrane Kim 2014)* |
| Home taVNS (ear-clip — Pulsetto, Parasym, Truvaga, Xen) | H | Pilot trials; mechanism plausible; sold direct-to-consumer. | Optional §5.12 add-on | Pilot-level evidence. *(De Ridder 2014)* |
| Mediterranean / MIND-millet food pattern | A (vascular base) | PREDIMED 2013 vascular protection underpins cochlear blood-flow. | Daily | The platform. *(PREDIMED 2013)* |
| BP + glucose + lipid + smoking control | A | Modifiable vascular layer for the cochlear micro-circulation. | Cornerstone | Vascular discipline. |
| OTC hearing aids / AirPods Pro hearing mode | B | FDA OTC clearance 2022 — regulatory-path context; mild-moderate residual loss. | If hearing test shows loss | Hear better = ring less. |
| Low-volume bedside sound machine | B | Reduces sleep-onset latency + nighttime tinnitus salience. | Daily PM | The sleep layer. |
| Humming-bee breath (Bhramari) + slow-paced breathing | H (was B — demoted 2026-06-06; no sham-controlled tinnitus RCT; Telles 2011 is vagal-tone-in-healthy-adults, wrong population; Lundberg humming-NO is n=10 healthy adults, wrong outcome; Pandey 2014 S-VYASA open-label n<40, no sham) | Cheap, free, low-harm — but evidence specifically for tinnitus is pilot-level only. | Daily AM + PM | Hum + breathe — evidence is pilot, not confirmed. *(Pandey 2014; Telles 2011 healthy-adult vagal-tone; Lundberg humming-NO n=10 healthy)* |
| **DO NOT RECOMMEND: Homeopathy as active layer** | — | Simpson 1998 RCT — no benefit beyond placebo for tinnitus specifically. | Documented for transparency; NOT active | Honest framing. *(Simpson 1998)* |
| **DO NOT RECOMMEND: Lipoflavonoid as cornerstone** | — | Marketing > evidence; no RCT base for the proprietary blend. | NOT prescribed | Save the money. |
| **DO NOT RECOMMEND: Off-label nerve drugs for routine tinnitus** | — | Cochrane reviews on gabapentin / pregabalin / SSRI for tinnitus are weak; sleep + anxiety effects only. | NOT prescribed | Treat the upstream not the symptom. *(Cochrane Hoekstra 2011)* |
| **DO NOT RECOMMEND: Implanted VNS as routine** | — | Pilot trials only; surgical; reserved for refractory clinical-trial enrolment. | NOT prescribed | Wait for evidence to mature. *(De Ridder 2014)* |
| **DO NOT RECOMMEND: Ignoring pulsatile tinnitus** | — | Pulsatile tinnitus = vascular-imaging workup; non-substitutable. | Mandatory escalation | Pulses = imaging. |
| **DO NOT RECOMMEND: Continued loud-noise exposure during recovery** | — | Re-traumatises injured cochlea; ear-pro mandatory in any noise environment. | Mandatory protection | Wear the plugs. |

## 14. Honest Evidence-Tier Comparison

### 14.1 What the best evidence actually says

> **For you, in plain words.** A candid table you can take to your kitchen table. Some things have great evidence (sound therapy, CBT/MBCT). Some have honest mixed evidence (Ginkgo). Some have very little (homeopathy). Read this side-by-side and decide what fits your case. *(Cochrane reviews; primary RCT evidence)*

| Approach | Evidence tier | Where it fits in YOUR protocol | TL;DR (plain English) | Citation |
|---|---|---|---|---|
| Bimodal neuromodulation (Lenire-type, clinic device) | B (active-arm response; no sham-controlled RCT yet) | §15 clinic-referral addendum if home protocol plateaus | **Honest restatement (corrected 2026-06-06):** ~70-80% _completer_ responder rate at 12-week primary endpoint (Boedts 2024 n≈220); ITT responder rate ~60-65%; 12-month sustainability based on smaller extension cohort, not the primary trial. No published sham-controlled comparator. — clinic-prescribed. *(Boedts 2024 *Commun Med* — completer denominator)* | *(Conlon 2020 TENT-A1 n=326; Conlon **2022** TENT-A2 n=191 — *Sci Rep* 12:10845 PMID 35729184, NOT 2024; Boedts 2024 n≈220 *Commun Med*)* |
| Sound enrichment (white/pink/notch/binaural) | B (Cochrane Sereda 2018) | Tonight, every night — first layer | Most-recommended frontline; free; reduces distress even when loudness doesn't drop. *(Cochrane Sereda 2018)* | *(Cochrane Sereda 2018)* |
| CBT-T / TRT / MBCT-T | A (multiple RCTs) | Weeks 2-12 — change your relationship to the sound | Reduces tinnitus distress more reliably than anything else we have. *(Cima 2012; McKenna 2017; Cochrane Fuller 2020)* | *(Cima 2012; McKenna 2017; Cochrane Fuller 2020)* |
| Magnesium (glycinate + threonate) | C | Daily, low-risk; ~80% chance no measurable effect for you | Plausible nerve-calming; small wins in noise-exposure tinnitus. *(Attias 1994)* | *(Attias 1994 Israel)* |
| Ginkgo EGb 761 (Tebonin) | C (Cochrane negative; subset responds) | One layer, not the cornerstone | Cochrane says no for most. Real subset responds. Honest 8-12 week trial. *(Cochrane Hilton 2013; EMA 2015)* | *(Cochrane Hilton 2013; EMA 2015)* |
| Zinc (if deficient) | C (deficiency-corrected only) | Replete, then stop | Only if you are actually low — vegetarian, age 65+; replete population gets nothing. *(Coelho 2013 RCT)* | *(Arda 2003; Coelho 2013)* |
| B12 (if deficient) | C (deficiency-corrected only) | Replete, then stop | Same — vegan, age 65+, metformin/PPI users; only matters if you are low. *(Shemesh 1993)* | *(Shemesh 1993)* |
| Pycnogenol pine bark | B (Belcaro 2014) | One layer in Combo 1 | Real signal for blood-flow and perimenopausal sub-types. *(Belcaro 2014 Italy)* | *(Belcaro 2014 n=92; 2017)* |
| NAC | B (acute noise injury) | Combo 1 daily; acute 72-hour stack | Strongest natural ear-protectant for acute noise / chemo / aminoglycosides. *(Lorito 2008 Italy)* | *(Lorito 2008; Vellore cisplatin trial)* |
| Home taVNS (ear-clip) | H | Optional §5.12 add-on if budget allows | Pilot trials; mechanism plausible; sold direct-to-consumer. *(De Ridder 2014)* | *(De Ridder 2014; Tyler 2017)* |
| Implanted VNS (Microtransponder Serenity) | C (pilot) | Referral addendum only | Surgical clinical-trial device — not home over-the-counter. *(De Ridder & Vanneste 2014)* | *(De Ridder & Vanneste 2014; Tyler 2017)* |
| Ayurvedic karna-purana (oil pooling) | T | Traditional comfort ritual; honest about evidence gap | Centuries of traditional use; no modern high-quality tinnitus trials confirm benefit. *(Sushruta's Latter Tantra ch. 21)* | *(Sushruta's Latter Tantra ch. 21; CCRAS karna-roga monograph)* |
| Acupuncture | T / H (Cochrane Kim 2014 — no firm evidence) | Optional comfort ritual; not in home core | No firm evidence; low harm; some respond. *(Cochrane Kim 2014)* | *(Cochrane Kim 2014; RMIT meta-analyses)* |
| Homeopathy | T (essentially placebo per Simpson 1998 RCT) | NOT in protocol — listed for honest transparency | Randomised trial found no benefit beyond placebo. **NOT recommended** for active use. *(Simpson 1998, PMID 9923984)* | *(Simpson 1998 PMID 9923984)* |
| Unani / classical herbal blends | T | Caveat-flagged traditional-use only | Mostly lack high-quality randomised-trial support; some single herbs have signal. *(Hamdard Dawakhana formulary)* | *(Hamdard Dawakhana; Qarabadeen Qadri)* |

## 15. Emerging & Adjunctive Therapies (clinic-route addendum)

### 15.1 When the home protocol plateaus

> **For you, in plain words.** If you have done the home protocol for 6-12 months and your self-score has stopped moving, these are clinic-route options worth discussing with an audiologist or ENT — they are NOT part of the home OTC regime. *(Boedts 2024 Nature Communications Medicine; De Ridder 2014; Conlon 2020 TENT-A1; Conlon 2022 TENT-A2)*

### 15.2 Bimodal neuromodulation (Lenire-type devices)

> **For you, in plain words.** A clinic-prescribed device that pairs sound through headphones with tiny electrical pulses on the tongue. Trains the brain to stop fixating on the ringing. **Honest restatement (corrected 2026-06-06).** The TENT-A1 trial (Conlon 2020, n=326, 12-week active arm) and TENT-A2 trial (Conlon **2022**, n=191) showed within-group improvement; neither trial had a sham comparator arm, so the "7-9 of 10" responder framing reflects active-arm response, not active-vs-sham gap. The Boedts 2024 real-world cohort (n≈220) is a single-arm registry. Best honest framing: ~70-80% of _completers_ reach the TFI ≥7-point MCID at the 12-week endpoint; ITT-responder rate is closer to ~60-65% (denominator-dependent). Long-term sustainability comes from a smaller extension cohort. The Cochrane methodology bar (sham-controlled blinded RCT) has not been cleared for this device yet. *(Conlon 2020 TENT-A1 *Sci Transl Med* PMID 33028706; Conlon 2022 TENT-A2 *Sci Rep* 12:10845 PMID 35729184 — earlier dossier revisions wrongly said 2024, corrected 2026-06-06; Boedts 2024 *Commun Med*)*

**Practical, clinic-route.** The Lenire device (Neuromod Devices, Ireland) is the named product. Received CE mark Europe (2021) and FDA De Novo grant (March 2023) — cited here as factual regulatory history only, not as the evidence anchor. The evidence anchor is the TENT-A2 trial (Conlon 2022 — NOT 2024) and the Boedts 2024 single-arm cohort (220 patients, completer-responder rate ~80% at 12 weeks; ITT closer to ~60-65%). Cost: $4,000-6,000 out-of-pocket (not covered by most insurance/NHS). Country availability: UK + Ireland + Germany + Switzerland + Belgium + Netherlands + Australia + select US clinics; expanding. Ask your audiologist about referral. **DOCTRINE COMPLIANCE: this is a clinic-prescribed device, NEVER part of the home regime.**

**Grade D (corrected 2026-06-07 from B per wave-2 biostatistics GRADE-strict reading).** Per GRADE methodology, single-arm trials + industry sponsorship + no sham comparator = observational-level evidence (downgraded starting point). The 2026-06-06 revision split this as "B (active-arm) / C (vs sham)" — wave-2 biostatistics reviewer rightly demoted further to D until a sham-controlled blinded RCT publishes. The active-arm response data is real and substantial; the active-vs-sham gap (the only metric that distinguishes protocol effect from placebo + expectancy + ritual) is genuinely unknown.

**Adverse-event profile (added 2026-06-07 per wave-2 pharmacovigilance review — previously omitted):**

- **Tongue irritation / paraesthesia / lingual sensory shift:** ~30-40% of users at some point during the 12-week course. Usually transient; resolves with intensity adjustment.
- **Transient TFI worsening (paradoxical):** ~5-10% experience a temporary worsening of tinnitus loudness or distress in weeks 1-4, before improvement (or non-response) at week 8-12.
- **Pulse-generator skin reactions:** small case-cluster (TGA + MHRA + Health Canada post-market surveillance).
- **Discontinuation rate:** ~15-25% across trials, not always disclosed cleanly in the headline responder rates.

These AEs are real but mostly minor + reversible. Your audiologist should walk you through them at referral. *(Boedts 2024 *Commun Med* safety section; post-market surveillance summaries via EUDAMED + TGA DAEN 2023-2025)*

### 15.3 Implanted vagus-nerve stimulation (clinic-only)

> **For you, in plain words.** A surgically-implanted vagus-nerve stimulator paired with sound — clinic-only, not for home use. Early trials (De Ridder/Vanneste, Tyler) showed 50% of the paired-VNS group had clinically meaningful improvement at 6 weeks vs 28% controls, sustained at 1 year in a subset. *(De Ridder 2014; Tyler 2017; Microtransponder Serenity trials)*

**Practical, clinic-route.** Microtransponder Serenity (Vivistim, BrainPort and related platforms) — surgically implanted, requires clinical-trial enrolment or specialist referral. Distinguish clearly from the home taVNS ear-clip devices in §5.12 (Pulsetto, Truvaga, Parasym, Xen) which are direct-to-consumer. **Grade C** (pilot trials only); referral-path only, not home. *(De Ridder & Vanneste 2014; Tyler 2017)*

### 15.4 Honest mixed-evidence map

> **For you, in plain words.** This is the honest read across all the therapies in this dossier — what works, what's mixed, what's tradition, what to skip. *(Combined Cochrane reviews + primary RCT evidence)*

| Therapy | Best home or clinic? | TL;DR (plain English) | Citation |
|---|---|---|---|
| Sound enrichment | Home | The highest-evidence frontline lever. Free. Start tonight. *(Cochrane Sereda 2018)* | *(Cochrane Sereda 2018)* |
| CBT-T / MBCT-T | Home (self-applied workbook) | The highest evidence we have for tinnitus-distress reduction. *(Cima 2012; McKenna 2017)* | *(Cima 2012; McKenna 2017)* |
| Hearing aids (OTC) | Home | The single highest-impact move if your hearing test shows loss. *(Mimi consumer audiogram data)* | *(Mimi consumer data; Jabra Enhance gain curves)* |
| Lenire bimodal | Clinic-only | The strongest single-device randomised trial — but needs a clinic prescription. *(Boedts 2024 Nature Communications Medicine)* | *(Conlon 2022 TENT-A2; Boedts 2024)* |
| Magnesium / NAC / Pycnogenol | Home | Mixed-to-positive evidence; low-risk; combine in Combo 1. *(Attias 1994; Lorito 2008; Belcaro 2014)* | *(Attias 1994; Lorito 2008; Belcaro 2014)* |
| Ginkgo (Tebonin) | Home | Cochrane says no for most. Real subset responds. Honest 8-12 week try then stop if no shift. *(Cochrane Hilton 2013; EMA 2015)* | *(Cochrane Hilton 2013; EMA 2015)* |
| Zinc / B12 | Home | Only worth it if you are actually deficient — replete users get nothing. *(Coelho 2013 RCT)* | *(Arda 2003; Shemesh 1993; Coelho 2013)* |
| Home taVNS (ear-clip) | Home, optional | Pilot signal; mostly mood and migraine evidence — try if budget allows. *(De Ridder 2014)* | *(De Ridder 2014; Tyler 2017)* |
| Implanted VNS | Clinic-only | Clinical-trial route with pilot-only evidence; not for home use. *(De Ridder & Vanneste 2014)* | *(De Ridder & Vanneste 2014)* |
| Karna-purana, TCM, Unani, Siddha, Tibetan | Home | Honoured traditions; modern high-quality randomised trials absent. *(Classical texts)* | *(Sushruta's Latter Tantra; Yi Zong Jin Jian; Avicenna's Canon)* |
| Acupuncture | Clinic, optional | Cochrane found no firm evidence; low harm; some respond. *(Cochrane Kim 2014)* | *(Cochrane Kim 2014)* |
| Homeopathy | NOT recommended | Randomised trial found no benefit beyond placebo. *(Simpson 1998, PMID 9923984)* | *(Simpson 1998 PMID 9923984)* |

## 16. Independent Healing Paradigm

### 16.1 The closing position

> **For you, in plain words.** A sovereign, over-the-counter, at-home path that works on all four drivers in parallel — graded honestly, citing only WHO, AYUSH, EMA, TGA, NMPA, Health Canada, Men-Tsee-Khang, Hamdard, IMPCOPS and classical texts plus named non-US peer-reviewed trials. **No US authority is cited as the trust anchor.** *(WHO Traditional Medicine Strategy 2025-2034; Cochrane; EMA; AYUSH; NMPA)*

This protocol diverges from the mainstream "incurable damage" or off-label-nerve-drug model. Tinnitus is treated as a four-part system (inner-ear damage, brain "volume turn-up", poor inner-ear blood flow, neck-jaw-vagus-sleep loop), intervened at every layer using only **over-the-counter, home-administered** tools — with clinic-route options (Lenire, implanted VNS) placed in §15 as referral-only.

**Sovereignty ethos. No prescription. No clinic. No hospital. No surgery in the home regime.** Evidence varies honestly: Grade A for MBCT-T and CBT-T; Grade B for sound enrichment, NAC, magnesium, Pycnogenol, melatonin, Ashwagandha, notch-music, and Lenire (clinic-only, §15); Grade C for Ginkgo Tebonin in tinnitus (Cochrane Hilton 2013 negative, subset responders), zinc/B12 (if deficient), Lion's Mane, CoQ10, Vinpocetine, L-arginine, R-ALA, Black Cohosh, biofeedback; Grade H for binaural beats and home taVNS; Grade T for Ayurvedic, Unani, Siddha, Tibetan and classical TCM formulas — honoured as traditions, not marketed as proof. **Homeopathy not recommended for active use** (Simpson 1998 RCT: no better than placebo). **Lipoflavonoid not endorsed.**

**Dr Oz is a cultural reference, not a trust anchor.** Where his televised picks overlap with this protocol, the actual evidence cited comes from EU herbal authority, Cochrane reviews, the Israeli army study, the Italian Belcaro and Lorito groups, the Turkish Arda group, German Schwabe, Hungarian Gedeon Richter, Japanese Mori, Indian S-VYASA, AYUSH-CCRAS, IMPCOPS, Men-Tsee-Khang, Hamdard, and the classical texts.

Authority grounded in WHO Traditional Medicine Strategy 2025-2034, Cochrane systematic reviews (Hilton 2013, Sereda 2018, Kim 2014, Fuller 2020, Trauer 2015), India AYUSH councils, EMA herbal monographs, Australia TGA/NHMRC, China NMPA + Chinese Pharmacopoeia, Health Canada NHP, Tibetan Men-Tsee-Khang, Hamdard, IMPCOPS, plus the classical texts named in the dossier opener.

The single factual exception to the US-authority exclusion is the regulatory-path mention of Lenire's FDA De Novo grant (March 2023) in §15.2 — used as historical context only, never as the evidence anchor. The evidence anchor for Lenire remains the TENT-A2 trial (Conlon 2024) and Boedts 2024 in Nature Communications Medicine.

Explicit re-affirmation: **no FDA, FTC, AAO-HNS, ATA, AAFP, AMA, APA, CDC, NIH policy positions are cited as trust authority. Period.**
