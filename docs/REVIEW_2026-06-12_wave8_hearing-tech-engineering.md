# Wave-8 Review — Hearing-Tech Vendor Product-Engineering Audit (Lenire/Neuromod + Sound Pharma + Hearing-Aid Tinnitus-Masker Programs + Sound-Therapy Apps + Consumer taVNS + Red-Light PBM Devices)

**Dossier under review:** `nichecore/research/tinnitus-support.md` (schemaVersion `v7.0.0-rigor-pass-2026-06-06`; post-wave-7 with waves 1-7 corrections folded).
**Skill under review:** `.claude/skills/ailment-360-research/SKILL.md` (v6.2.6 in-progress).
**Reviewer persona.** Senior product engineer with 15 years across the hearing-tech device-vendor ecosystem — Neuromod Devices (Dublin — Lenire bimodal-stimulation algorithm + clinical-trial pipeline), Sound Pharmaceuticals (Seattle — SPI-1005 ebselen otoprotection), hearing-aid-firmware roles at three Big-Six aid vendors (ReSound Tinnitus Relief in Ballerup; Phonak Tinnitus Balance + AutoSense OS in Stäfa; Widex Zen fractal-tone generator in Lynge), consumer work on MyNoise, Tinnitracks (Hannover — notched-music + §139e SGB V file), Vielight Neuro (Toronto — 810 nm + 40 Hz firmware), and consumer taVNS at Parasym (London) + Nurosym. Have read Conlon 2020, Conlon 2022, Boedts 2024 as Lenire's primary literature. Lens: vendor-internal product-engineering accuracy — would the engineers who shipped these devices object to how the dossier describes them?
**Date:** 2026-06-12.
**Waves 1-7 respected (NOT re-litigated).** Country-attribution + citation discipline (wave-1); EMA HMPC + ASA + biostatistics MCID/GRADE + integrative-clinic-PI + pharmacovigilance (wave-2); ENT-audiology SSHL + classical-text + supplement-QC + disability-inclusion (CI / middle-ear-implant red-flag) + health-info-UX (wave-3); behavioural-adherence MVP + cohort infrastructure + commercial substantiation + health-economist (wave-4); AI-safety + academic-PI + consumer-health-editor + fact-checker + infosec + patient-advocate (wave-5); behavioural-pricing + cross-cultural-localization + drug-development + payer-policy + psychometrician (wave-6); military-veteran-specialist (wave-7). Wave-8 addresses what no prior wave saw: the **device-vendor engineering layer** — Lenire mechanism, hearing-aid tinnitus-masker program differentiation, sound-therapy app algorithm fidelity, consumer taVNS hardware accuracy, red-light PBM dose specification — carries five product-engineering-grade errors and elisions any device engineer would catch. None doctrine-breaking; all additive precision. They matter because they are the substrate beneath the consumer's decision to spend $4k on a Lenire, $5k on a pair of Widex Zen-fitted aids, or $250 on a taVNS knockoff that may or may not deliver the labelled dose.
**Verdict (TL;DR):** **MODERATE revision — precision pass on the device layer.** The dossier is materially better on device-tech than typical consumer health content — correct Conlon 2022 TENT-A2 citation, correct Boedts 2024 *Commun Med*, correct Lenire Grade D per honest GRADE-strict reading, correct Vielight 810 nm pulsed 40 Hz spec. It **does not pass the vendor-engineering accuracy bar** at five points: (1) the Lenire description elides the **timing-pairing primitive** — the mechanism is not "do both at once" but a precisely timed temporal-association protocol where tongue stimulation lags or leads each tone-burst by milliseconds; (2) the six §5.9 hearing-aid tinnitus-masker programs are grouped as if equivalent when they are **four distinct algorithm families** (fractal-tone vs broadband-noise+nature vs notched-amplification vs app-coupled hybrid) — including a brand-attribution error (Zen is Widex, not ReSound, repeated in §2.3 + §5.2); (3) the sound-therapy apps in §5.2 + §5.3 + §5.4 (myNoise, Tinnitracks, ReSound Relief) are treated as quasi-interchangeable when they differ at the generative-vs-recorded + open-vs-clinical-grade + free-vs-§139e-reimbursable layers; (4) the consumer taVNS list mixes **three different anatomical sites** (Pulsetto cervical vs Truvaga/Parasym/Nurosym cymba conchae vs Xen tragus) and three regulatory grades; (5) the red-light PBM cluster groups **three different delivery geometries** (Vielight transcranial skull-targeted vs hand-held mastoid spot vs Mito/Hooga/Joov panel-at-distance) that deliver completely different photonic doses to completely different anatomy. Verdict is MODERATE not MAJOR because no doctrine breaks, no safety inversion sits in the current text, and the fix surface is ~2,000 words of additive precision content. None require renouncing OTC + home + six-traditions doctrine.

The five dimensions follow.

---

## SUMMARY OF FINDINGS

| Dimension | Verdict | Severity |
|---|---|---|
| 1. Lenire (Neuromod) bimodal-stimulation mechanism — the timing-pairing primitive is elided | **Moderate revision** — the description of "sound through headphones + electrical pulses on tongue" is true but loses the precisely-timed temporal-association protocol that is the actual differentiator from pure sound therapy |
| 2. Hearing-aid tinnitus-masker programs — six products grouped as if equivalent when they are four distinct algorithm families | **Moderate revision** — Widex Zen fractal-tone vs Phonak Tinnitus Balance noise+nature vs Signia Notch Therapy notched-music vs ReSound Tinnitus Relief app-coupled hybrid are not interchangeable; consumer needs sub-type-by-algorithm matching |
| 3. Sound-therapy apps — myNoise generative vs Tinnitracks notched-music vs ReSound Relief brand-app are three different product categories | **Moderate revision** — open-architecture noise-generator vs clinical-grade reimbursable notched-music vs hearing-aid-companion app sit on different evidence + cost + regulatory pathways |
| 4. Consumer taVNS devices — Pulsetto vs Truvaga vs Parasym vs Xen vs Nurosym target three different anatomical sites | **Moderate revision** — Pulsetto is cervical-vagal not auricular; Truvaga + Parasym + Nurosym + Xen are all auricular but stimulate three different branches at three different sites; mixing them flattens engineering-meaningful differences |
| 5. Red-light PBM devices — Vielight Neuro Gamma vs Mito Red Light vs Hooga vs Joov are three distinct delivery geometries | **Moderate revision** — transcranial-skull-targeted intranasal + 40Hz-pulsed-810nm vs panel-irradiance-at-distance vs hand-held mastoid-spot deliver very different photonic doses to very different anatomy; "red light behind the ear" hides the engineering question of whether dose reaches the cochlea at all |

The dossier passes every prior wave's audit + the founder's doctrinal bar. It **does not pass the bar** for vendor-engineering-grade accuracy because that population was outside every prior reviewer's specialty. Wave-8's job is to land the device-layer precision without disrupting the dossier's evidence + doctrine surface. Five dimensions below.

---

## 1. LENIRE (NEUROMOD) BIMODAL-STIMULATION MECHANISM — THE TIMING-PAIRING PRIMITIVE IS ELIDED

### 1.1 What the dossier currently says

§15.2 lede: *"A clinic-prescribed device that pairs sound through headphones with tiny electrical pulses on the tongue. Trains the brain to stop fixating on the ringing."* §10.7.3 row: *"Bimodal neuromodulation (Lenire — Neuromod Devices) — TENT-A2 + Boedts 2024."* §13.7 row + §14.1 row both name it as bimodal. The descriptive layer is **directionally correct** — Lenire does pair acoustic stimulation through bilateral headphones with electrical pulses delivered via the Tonguetip™ array (32 lingual electrodes, mid-tongue placement). The dossier correctly cites TENT-A1 (Conlon 2020 *Sci Transl Med* PMID 33028706) and TENT-A2 (Conlon 2022 *Sci Rep* 12:10845 PMID 35729184 — explicitly corrected from the earlier "2024" error) and Boedts 2024 *Commun Med*. The Grade-D demotion (no sham comparator) is correct per honest GRADE-strict reading. **None of that is wrong.**

What it elides is the actual mechanistic primitive the device implements — and that primitive is the entire product-engineering reason the device exists as a regulated medical device rather than as "a headset + a tongue thing."

### 1.2 What Lenire actually does — the temporal-pairing algorithm

The Lenire treatment session is 60 minutes, twice daily, for a 12-week course. Each session delivers tone-burst stimuli through headphones (broadband acoustic stimulation personalised on audiogram + tinnitus pitch-match) **paired with electrical pulses via the Tonguetip™ to the lingual surface at precisely controlled inter-stimulus intervals**. The two streams are not simultaneous — they are **temporally yoked** at specific lag intervals (milliseconds to tens of milliseconds, depending on the personalisation profile) so the CNS receives both inputs within the **spike-timing-dependent-plasticity (STDP) window**.

This matters because Lenire's mechanism claim — built on Engineer 2011 *Nature* paired-VNS-tone preclinical work + Marks 2018 *Sci Transl Med* in animal models — is **not "two stimuli at once produce a stronger response than either alone."** It is the narrower claim that paired auditory + somatosensory input at specific timing intervals, repeated over 12 weeks of sessions, drives plasticity in the dorsal cochlear nucleus + auditory cortex to re-organise the tinnitus generator. The temporal-pairing window is Neuromod's IP. Without that timing primitive the device is acoustically + electrically identical to a tone-generator + a TENS unit.

For the dossier reader making a $4-6k decision, this matters because the consumer needs to know **what differentiates Lenire from "I already do sound therapy + I could buy a $50 TENS unit."** The answer is the temporal-pairing protocol, not the existence of two modalities.

### 1.3 The Tonguetip™ array specifics + AE profile

§15.2's AE section names "tongue irritation / paraesthesia / lingual sensory shift ~30-40% of users" — correct per Boedts 2024 safety. What's unstated is **why**: the Tonguetip™ delivers pulses across 32 independent lingual electrodes, current amplitude user-titrated to just-perceptible. The 30-40% paraesthesia rate is **the perceptual readout that the device is delivering its intended dose** — not a defect. Complete numbness means the device is under-dosing, which is why audiologists re-calibrate every 2-4 weeks as the lingual sensory threshold drifts.

### 1.4 Completer-vs-ITT denominator + CE mark vs FDA framing

§15.2 already nails the denominator decomposition (~70-80% completer + ~60-65% ITT at 12-week TFI ≥7-point MCID). One annotation: discontinuation in Lenire trials is **not random with respect to outcome** — the 15-25% discontinuation rate is heavily weighted toward non-responders at weeks 4-6 dropping out, biasing the completer rate upward. The dossier's restatement flags this correctly.

On regulatory framing: §15.2 + §16.1 treat the FDA De Novo as regulatory-path context, not evidence anchor — doctrine-compliant. But **CE mark 2021** is the actually-load-bearing event for most named country availability (UK + IE + DE + CH + BE + NL + AU) — the FDA De Novo only opened US market access. The dossier could pair both.

### 1.6 Specific edits

- **Edit 1.1.** In §15.2 paragraph 1, after the current "pairs sound through headphones with tiny electrical pulses on the tongue" sentence, add one sentence: *"The acoustic and electrical stimuli are not simultaneous — they are paired at precisely controlled millisecond-to-tens-of-millisecond lag intervals so that the central nervous system receives both inputs within the spike-timing-dependent-plasticity window. The temporal-pairing protocol — not the existence of two stimulation modalities — is the engineering primitive that distinguishes a Lenire session from sound therapy plus a TENS unit."*

- **Edit 1.2.** In the AE section of §15.2, after "Tongue irritation / paraesthesia / lingual sensory shift: ~30-40% of users," add: *"This is not a defect — the device delivers electrical pulses across 32 independent lingual electrodes at a user-titrated just-perceptible level, and lingual paraesthesia is the perceptual readout that the device is delivering its intended dose. Complete numbness means the device is under-dosing and audiologists re-calibrate every 2-4 weeks as the lingual sensory threshold drifts."*

- **Edit 1.3.** Replace the "FDA De Novo 2023 — regulatory-path context only" reference in §15.2 with: *"CE mark 2021 (EU + UK + IE + DE + CH + BE + NL market-access — load-bearing for most dossier-named availability); FDA De Novo 2023 (US market access — regulatory-path context only)."*

### 1.7 Verdict on Dimension 1

**Moderate revision.** The dossier's Lenire framing is directionally correct + grade-honest + denominator-honest — better than 95% of consumer-health content on the device. What it elides is the temporal-pairing algorithmic primitive that is the only engineering justification for the price tag + clinic-fit pathway. Three additive edits ~150 words; no retraction needed.

---

## 2. HEARING-AID TINNITUS-MASKER PROGRAMS — SIX PRODUCTS GROUPED AS IF EQUIVALENT WHEN THEY ARE FOUR DISTINCT ALGORITHM FAMILIES

### 2.1 What the dossier currently lists

§5.9 names six clinic-grade hearing aids with tinnitus-masker programs:

- *Widex Zen — fractal-tone masker programs*
- *Phonak Tinnitus Balance — adjustable noise + nature sounds*
- *Oticon Tinnitus SoundSupport — ocean / shower / fractal options*
- *ReSound Tinnitus Relief — app-paired sound therapy*
- *Starkey Multiflex Tinnitus Technology — masker + relaxation*
- *Signia Notch Therapy — notched-music programmed to your tinnitus pitch*

§2.3 (Brain "volume turn-up") names "fractal tones (ReSound Zen, Oticon)" — which is **wrong at the brand level** (Zen is Widex, not ReSound). §5.2 names "fractal tones (ReSound Zen, Oticon SoundSupport)" — same brand-attribution error repeated. §13.6 names "clinic-grade tinnitus-masker programs (Widex Zen / Phonak Tinnitus Balance / Oticon SoundSupport / ReSound Tinnitus Relief / Signia Notch)" — five-named, lossy on the Signia mechanism. The §5.9 list is the canonical place to fix this.

### 2.2 The Zen brand-attribution error

**Widex Zen is Widex's fractal-tone generator** — not ReSound's. Widex Zen has been in market since 2009 (originally on the Mind/Clear series, current on Moment Sheer + AllInOne). ReSound has its own tinnitus-relief offering — the **Nature Sounds + Tinnitus Sound Generator** integrated into LiNX Quattro / Nexia / Vivia, with the **ReSound Relief / ReSound Tinnitus Relief app** as the smartphone-side companion. The dossier's §2.3 and §5.2 phrasing "fractal tones (ReSound Zen, Oticon)" conflates two competing vendors' products. Any aid-fitting audiologist would catch this in the first sentence. Engineers at either company would too — the inter-vendor IP boundaries on tinnitus-generator firmware are sharp.

### 2.3 The four algorithm families the six products actually implement

The six products split into four distinct families at the signal-processing layer:

- **Family A — Fractal tone generation.** Widex Zen is canonical — self-similar, non-repeating, slowly-evolving harmonic tone sequences from Mandelbrot-style fractal math. Predictable enough to soothe + unpredictable enough to avoid attention-binding. Oticon SoundSupport has an analogous fractal option. **Phonak Tinnitus Balance does not ship a fractal generator. ReSound does not ship Zen** — the dossier's "ReSound Zen" attribution is a brand error.
- **Family B — Broadband / shaped-noise + nature-sound masking.** Phonak Tinnitus Balance is canonical — audiologist-shapable noise (white/pink/speech-shaped) + nature presets via Phonak Target software. Oticon SoundSupport's ocean + shower presets and Starkey Multiflex are the same family — spectrum shaped to user's pitch + audiogram, not fractally generated.
- **Family C — Notched-stimulus algorithms.** Signia Notch Therapy is canonical — the aid's amplification chain selectively dampens at the measured tinnitus frequency. Same lateral-inhibition / Pantev-Okamoto pathway as Tinnitracks notched-music (Dimension 3) but implemented at aid-firmware layer rather than music-streaming.
- **Family D — App-coupled hybrid.** ReSound Tinnitus Relief is canonical — aid produces baseline mask (Family-B-adjacent) but the load-bearing intervention is the **ReSound Relief app** streaming soundscapes via 2.4 GHz Bluetooth LE Audio to the aid speakers. Phone is the controller; aid is the speaker. Structurally distinct from A/B/C where the algorithm lives in the aid DSP.

### 2.4 Algorithm-family-to-sub-type matching (the clinical question the dossier misses)

- Tonal hearing-loss with narrow pitch-match → **Family C** (Signia Notch; Tinnitracks as lower-cost alternative outside the aid)
- Tonal hearing-loss with broad pitch-match + sleep-onset distress → **Family A** (Widex Zen — fractal soothes-without-binding-attention)
- Distress-dominant long-standing brain-amplification → **Family B** (Phonak Tinnitus Balance + Starkey Multiflex — audiologist-shapable + nature overlays)
- Tech-fluent user wanting smartphone iteration → **Family D** (ReSound Tinnitus Relief)

This is the selection guidance every aid-fitting audiologist applies; the dossier currently flattens it.

### 2.5 The Apple AirPods Pro 2 pathway

§5.9 correctly names AirPods Pro 2 hearing-aid mode (iOS 18.1+) as the closest global equivalent to US OTC aids. Under-specified: **Settings → Accessibility → Audio & Visual → Background Sounds** ships Balanced/Bright/Dark Noise + Ocean + Rain + Stream — a Family-B implementation at the consumer-electronics layer. Paired with hearing-aid-mode amplification, the user gets gain compensation + tinnitus masking through a $249 device — the lowest-cost path to clinic-grade tinnitus masking for global readers.

### 2.6 Specific edits

- **Edit 2.1.** Fix the §2.3 + §5.2 brand-attribution errors. Replace *"fractal tones (ReSound Zen, Oticon)"* with *"fractal tones (Widex Zen + Oticon SoundSupport fractal program; ReSound uses a different nature-sound-plus-app architecture)."*

- **Edit 2.2.** Restructure the §5.9 hearing-aid-tinnitus-masker list as a four-algorithm-family table. Add a row for each family with: canonical implementation, the algorithm in plain words, mechanistic-fit sub-type, alternatives in the same family. Keep the six product names but group them by family. ~250 words of additive content.

- **Edit 2.3.** Add a §5.9.x sub-section *"Algorithm-family-to-sub-type matching"* with the four selection-guidance bullets above. ~120 words.

- **Edit 2.4.** Expand the AirPods Pro 2 paragraph in §5.9 to name the **Settings > Accessibility > Audio & Visual > Background Sounds** pathway as the iOS-native Family B implementation, and clarify it pairs with hearing-aid-mode amplification for a combined $249 OTC tinnitus solution. ~60 words.

### 2.7 Verdict on Dimension 2

**Moderate revision.** The dossier names the six aid products correctly but groups them as if equivalent + has a brand-attribution error (Zen is Widex not ReSound) repeated in two sections. Fix is a four-family table + sub-type-matching guidance + AirPods pathway expansion + targeted brand-error correction. ~450 words additive; no retraction.

---

## 3. SOUND-THERAPY APPS — MYNOISE GENERATIVE VS TINNITRACKS NOTCHED-MUSIC VS RESOUND RELIEF ARE THREE DIFFERENT PRODUCT CATEGORIES

### 3.1 What the dossier currently says

§5.2 names *"Free apps: myNoise, ReSound Relief"* and *"Notch-filtered music (see §5.4) — your favourite music with the tinnitus frequency band removed"* and *"Fractal tones (ReSound Zen, Oticon SoundSupport) — built into some hearing aids."* §5.3 names myNoise binaural mode + Brain.fm + Tinnitracks. §5.4 names Tinnitracks specifically as the "commercial Hannover app, ~$15-25/month" and references TinnitusPlay + Audiogram for pitch-matching. §10.7.1 lists "home taVNS, red-light, sound machine" generically. **The apps are correctly identified but treated as if they sit in the same product category.** They do not.

### 3.2 MyNoise — open-architecture generative noise

MyNoise (Stéphane Pigeon, Belgium — ex-ESA EE engineer) is an open-architecture multi-channel noise generator with **real-time procedural synthesis** of broadband noise across multiple bands, user-shapeable via sliders. Pink/brown/white noise + rain/wind/ocean + dozens of presets. Free with optional donations + one-time pro purchase. **Critically, myNoise generates noise in real time — it doesn't loop a recorded sample.** Looped samples develop perceptual artefacts the brain learns to ignore; generative synthesis stays perceptually fresh indefinitely — the engineering difference between "noise still works after a month" and "familiar wallpaper."

### 3.3 Tinnitracks — clinical-grade notched-music with GKV reimbursement pathway

Tinnitracks (Sonormed GmbH, Hamburg — founded 2014 on Pantev-Okamoto notched-music research) is a different product category. User uploads own music (Spotify / Apple Music / local) + app applies a **notch filter centred at the measured tinnitus frequency** (typically 1-octave notch) before playback. Same Pantev-Okamoto 2010 PMID 20080545 lateral-inhibition pathway the dossier already cites at §5.4. Tinnitracks is the **only sound-therapy app on the German §139e SGB V DiGA list** — German Krankenkasse subscribers can have it prescribed by an HNO specialist (ICD-10 H93.1) and fully reimbursed. Load-bearing for the dossier's §15.7 GKV section but currently undisclosed.

### 3.4 ReSound Relief — hearing-aid-companion architecture

ReSound Tinnitus Relief is **a hearing-aid-companion app**, not a standalone sound-therapy app. Free download but load-bearing utility requires a paired ReSound aid (LiNX Quattro / Nexia / Vivia / OMNIA) as audio receiver. Standalone-on-phone gets a feature subset; architecture assumes aid-as-speaker. Listing it as a "free app" alongside myNoise in §5.2 creates a category error.

### 3.5 Binaural-beats framing

§5.3 grades binaural beats H (emerging signal) — honest. Engineering point: binaural beats are a **perceptual phenomenon, not a product** — any two headphone channels delivering tones at slightly different frequencies produce them. myNoise has a binaural mode; Brain.fm has its own engine; Endel offers binaural pairings. The dossier mixes binaural apps (myNoise + Brain.fm) with notched-music (Tinnitracks) in one bullet — same product-category-conflation error as Dimension 2.

### 3.6 The actual landscape the consumer should see

A consumer choosing self-applied sound therapy needs to know the actual landscape:

- **MyNoise (free / donation)** — generative noise + user-adjustable EQ; best for sleep-enrichment + masking; open-architecture so the user shapes their own soundscape
- **Apple Background Sounds (free, iOS-native)** — Family B implementation built into iPhone settings; works through any headphones or AirPods; closest to a Phonak Tinnitus Balance noise-track at zero cost
- **ReSound Tinnitus Relief (free app + paired aid required)** — Family D hearing-aid-companion; need a ReSound aid for the full feature set
- **Tinnitracks (€10-€25/month + GKV-reimbursable in DE)** — notched-music for the Pantev-Okamoto pathway; clinical-grade; the only app on §139e SGB V
- **Audionotch / Notch Player / Notched Audio Player** — alternative notched-music apps at lower cost without the §139e listing; useful if the user is outside Germany or can't access the Sonormed app

Naming all five with their product-category labels gives the consumer an actual decision tree.

### 3.7 Specific edits

- **Edit 3.1.** In §5.2 "Options" subsection, replace the *"Free apps: myNoise, ReSound Relief"* with the product-category-disambiguated list above. ~120 words.

- **Edit 3.2.** In §5.4 (notched-music), add one sentence after the Tinnitracks pricing: *"Tinnitracks is the only sound-therapy app on the German §139e SGB V DiGA list — German Krankenkasse subscribers can have it prescribed by an HNO specialist (ICD-10 H93.1) and fully reimbursed. Lower-cost notched-music alternatives outside Germany: Audionotch, Notch Player."* ~40 words.

- **Edit 3.3.** In §5.3 (binaural beats), separate the binaural-beats apps from the notched-music apps in the "How to try it" paragraph. ~30 words of re-wording.

### 3.8 Verdict on Dimension 3

**Moderate revision.** The dossier names the right apps but mixes three product categories in one bullet and misses the German GKV reimbursement pathway for Tinnitracks (the load-bearing fact for the dossier's DE reader segment). Fix is product-category disambiguation + GKV pathway disclosure. ~190 words additive; no retraction.

---

## 4. CONSUMER taVNS DEVICES — PULSETTO VS TRUVAGA VS PARASYM VS XEN VS NUROSYM TARGET THREE DIFFERENT ANATOMICAL SITES

### 4.1 What the dossier currently lists

§5.12 names: *"Pulsetto (neck), Truvaga (ear clip), Parasym (ear clip), Xen by Neuvana (ear clip). Apollo Neuro (vibrational, also calms autonomic tone). Nurosym auricular taVNS — 30 min/day."* §10.7.1 lists *"Home taVNS ear-clip (Pulsetto, Truvaga, Parasym, Xen)"* — which conflates Pulsetto with the ear-clip cluster despite §5.12 correctly noting Pulsetto is a neck device. §15.3 distinguishes home taVNS from implanted VNS correctly. **The §5.12 lede has the right info but §10.7.1 + the general framing flattens engineering-meaningful distinctions.**

### 4.2 Three different anatomical-site categories

- **Site 1 — Cervical-vagal (neck, lateral surface).** Pulsetto is canonical — a neck band stimulating the cervical vagus branch via skin-surface electrodes. Same anatomical target as surgical VNS (Cyberonics / LivaNova), through skin. Cervical vagus runs deeper than auricular — higher current needed. **Pulsetto is not an ear-clip device**; §10.7.1 is wrong to group it with Truvaga/Parasym/Xen/Nurosym.
- **Site 2 — Auricular at cymba conchae.** Truvaga (Electrocore's consumer rebrand of gammaCore), Parasym (London — most clinical-trial-prominent), Nurosym (EU Parasym sister-line) all target Arnold's nerve at cymba conchae. Mechanistically equivalent at engineering layer — different ear-clip geometries + pulse parameters, same target nerve at same site.
- **Site 3 — Auricular tragus + audio-paired.** Xen by Neuvana targets the inner tragus surface and pairs electrical stimulation with **synchronised audio through paired earbuds**, claiming audio-electrical pairing increases vagal entrainment. Whether the audio adds anything beyond placebo is unestablished; engineering is distinct from Site 2.

### 4.3 Regulatory-grade spectrum

- **Parasym** — strongest clinical-trial file (Stavrakis 2017 AFib RCT + Wolf 2021 PTSD RCT + tinnitus pilots; De Ridder 2014 was the precursor)
- **Nurosym** — CE-marked Class IIa medical device in EU; on prescription via UK/EU clinics + OTC via manufacturer
- **Truvaga** — 510(k) US-market wellness clearance (not a tinnitus medical claim)
- **Pulsetto + Xen by Neuvana** — general-wellness consumer devices without specific medical-device clearance in most jurisdictions

A consumer trying taVNS for tinnitus should know Parasym + Nurosym have the most direct evidence base.

### 4.4 CI / middle-ear-implant exclusion

Top-of-page red-flag block already names auricular taVNS on the implanted side as flatly contraindicated (electrical interference with receiver-stimulator). Wave-3 disability-inclusion landed this. Engineering point: **Pulsetto (neck site) is less obviously contraindicated than the auricular ear-clip devices** because the stimulation site is anatomically distant from the implant — but still not validated against CI manufacturer bulletins. Err on the side of "discuss with CI clinic before any taVNS, neck or ear."

### 4.5 Specific edits

- **Edit 4.1.** Fix the §10.7.1 row error. Replace *"Home taVNS ear-clip (Pulsetto, Truvaga, Parasym, Xen)"* with *"Home taVNS — three anatomical sites: cervical-vagal (Pulsetto), auricular cymba conchae (Parasym, Nurosym, Truvaga), auricular tragus + audio-paired (Xen by Neuvana). Different targets, different evidence bases."* ~30 words.

- **Edit 4.2.** Expand §5.12 with the three-site disambiguation + the regulatory-grade spectrum (Parasym + Nurosym have the strongest clinical-trial files; Pulsetto + Xen are wellness-grade). ~150 words.

- **Edit 4.3.** Add a single line to the §11.5 life-stage gate CI / active middle-ear implant row: *"Cervical taVNS (Pulsetto) is less obviously contraindicated than the auricular ear-clip devices but still not validated against CI manufacturer safety bulletins — discuss with your CI clinic before any taVNS device, neck or ear."* ~30 words.

### 4.6 Verdict on Dimension 4

**Moderate revision.** The dossier names the right devices but flattens three anatomical sites + three regulatory grades into one ear-clip bucket. Fix is site-disambiguation + clinical-trial-file disclosure + a single safety-row expansion. ~210 words additive; no retraction.

---

## 5. RED-LIGHT PBM DEVICES — VIELIGHT NEURO GAMMA VS MITO RED LIGHT VS HOOGA VS JOOV ARE THREE DISTINCT DELIVERY GEOMETRIES

### 5.1 What the dossier currently lists

§5.10 names *"Vielight Neuro Gamma (810 nm pulsed at 40 Hz) + Vielight 810 intranasal + a hand-held red panel (Hooga, Mito Red Light, 660+810 nm) to the mastoid bone behind each ear for 5-10 min a side, 5×/week. Dose 10-20 J/cm² per session."* §10.7.1 lists *"Red-light panel (Mito Red Light, Joov, Hooga) — 660+850 nm behind ear; small mechanistic signal. Hamblin 2017 PBM review."* §8.5 hour-by-hour names *"15-20 min red-light therapy to head + behind each ear; eye protection. Vielight Neuro Gamma."* The wavelength + dose specs are **largely correct** — Vielight Neuro Gamma is 810 nm, pulsed at 40 Hz, the dose target 10-20 J/cm² is in the published PBM literature range. **What's missing is the engineering distinction between three completely different delivery geometries that the dossier groups under "red light."**

### 5.2 Three delivery-geometry categories

- **Geometry A — Transcranial skull-targeted with sub-cranial dose model.** Vielight Neuro Gamma + Neuro Alpha — head-worn cradle, 4 LED clusters over default-mode-network cortical targets (medial prefrontal, posterior cingulate, parietal). 810 nm chosen for **deep-tissue penetration through skull bone** (longest mean free path in cortical tissue among PBM wavelengths). 40 Hz pulsing chosen for **gamma-band entrainment** (Iaccarino 2016 + Martorell 2019 mouse Alzheimer's work — controversial in human translation). Vielight 810 intranasal adds nasal-cavity → cribriform → olfactory-bulb pathway to ventral brain.
- **Geometry B — Panel-array irradiance-at-distance.** Mito Red Light + Hooga + Joov — full-body or partial-body LED panels placed 6-24 inches from skin. 660 nm (skin) + 850 nm (deeper tissue). Dose = irradiance × time at target distance. **Designed for systemic / superficial-tissue dosing**, not transcranial. Placing a Joov panel "behind the ear" delivers real dose to mastoid skin but minimal dose to cochlea (~3-4 cm deep behind dense temporal-bone) and effectively zero to auditory cortex.
- **Geometry C — Hand-held spot-irradiation.** Hand-held red-light wands (many rebranded OEM hardware) — targeted spot dosing at close skin contact. Higher irradiance per cm² than panels because device is pressed against skin. For mastoid-behind-the-ear this is the most appropriate geometry — contact + tissue compression reduces optical scatter. Cochlear dose still small (temporal bone is thick + dense), but surface dose to post-auricular vasculature is real.

### 5.3 Why geometry matters for the dossier's claims

The §5.10 lede *"Vielight Neuro Gamma + a hand-held red-light to the mastoid bone behind each ear"* is **mixed-geometry** — Vielight is Geometry A (transcranial, cortical-target), hand-held mastoid is Geometry C (spot, post-auricular). Different targets, different dose models. Lumping panel-array Mito/Hooga/Joov (Geometry B) into the same recommendation at §10.7.1 conflates more.

**Honest claim:** no high-quality tinnitus RCT establishes PBM benefit. Vielight's cortical-target claim is the most mechanistically coherent for the §2.3 brain-amplification node, no condition-specific RCT. Hand-held mastoid (C) targets §2.4 blood-flow node via post-auricular vasculature, but cochlear-dose question is unestablished. Panel devices (B) at distance from "behind the ear" deliver minimal dose to either target.

### 5.4 Dose-spec disclosure the dossier could add

Most consumer PBM devices are **dramatically under-dosed for the claimed application** because labelled irradiance is measured at LED surface, user is told to position panel 6-12 inches away, and inverse-square + tissue scatter eat 95%+ of surface dose. Hooga 660+850 nm at 6 inches → ~100 mW/cm² at target → 10 min → 60 J/cm². **Vielight's contact-geometry design changes this** — LEDs are essentially in skin contact, so surface dose IS target dose. The dossier's 10-20 J/cm² target makes sense for contact devices but is under-specified for panel-at-distance.

### 5.5 CI / middle-ear-implant exclusion granularity

Top-of-page block correctly names red-light over magnet site as flatly contraindicated (heat + photon energy on receiver-stimulator). Engineering point: **the contraindication applies most sharply to high-irradiance hand-held + panel devices placed near the implant**; lower-irradiance transcranial Vielight at the forehead (away from receiver-stimulator) is mechanistically lower-risk. Err on broader exclusion but a granular CI-clinic conversation could distinguish "Vielight forehead OK, hand-held mastoid contraindicated, panel near implant contraindicated."

### 5.6 Vielight 40 Hz framing

§5.10's "810 nm pulsed at 40 Hz" is correct per Vielight spec. The 40 Hz gamma-band rationale is controversial in human translation — multiple human trials failed to replicate Iaccarino's mouse cognitive-improvement effect (Iaccarino's original modality was flicker + sound, not LED at skull surface). Dossier's H grade is correct. Honest framing: 40 Hz pulsing is a **plausibility-claim layered on top of an unestablished cortical-dose-delivery claim**.

### 5.7 Specific edits

- **Edit 5.1.** In §5.10 paragraph 1, replace the device list with the three-geometry disambiguation: *"Vielight Neuro Gamma (Geometry A — transcranial skull-targeted, 810 nm pulsed 40 Hz, cortical-target claim for §2.3 brain-amplification node) + Vielight 810 intranasal (Geometry A — nasal-cavity → olfactory pathway) + a hand-held red-light spot device (Geometry C — spot-irradiation at mastoid bone for §2.4 blood-flow node, post-auricular vasculature target). Panel-array devices (Mito Red Light, Hooga, Joov — Geometry B) are designed for systemic / superficial dosing and deliver minimal dose to behind-the-ear targets at the typical 6-24 inch user distance. Dose-target 10-20 J/cm² per session is calibrated for contact-geometry devices."* ~120 words.

- **Edit 5.2.** Fix the §10.7.1 row error. Replace *"Red-light panel (Mito Red Light, Joov, Hooga) — 660+850 nm behind ear; small mechanistic signal"* with *"Red-light — three delivery geometries: transcranial skull-targeted with cortical claim (Vielight Neuro Gamma 810 nm pulsed 40 Hz); hand-held spot-irradiation at mastoid (various consumer wands, Geometry C); panel-array at distance for systemic dosing (Mito Red Light, Hooga, Joov, Geometry B — minimal cochlear dose at typical user distance). No direct tinnitus RCT in any geometry."* ~70 words.

- **Edit 5.3.** Add a single line to the top-of-page CI red-flag block: *"The red-light contraindication applies most sharply to high-irradiance hand-held + panel devices placed near the implant; lower-irradiance transcranial Vielight cradle worn at the forehead is mechanistically lower-risk but still discuss with your CI clinic before any PBM device."* ~40 words.

### 5.8 Verdict on Dimension 5

**Moderate revision.** The dossier names the right devices + correct wavelengths + correct dose targets but groups three completely different delivery geometries under "red light." Fix is geometry-disambiguation + dose-model clarification + a single safety-row granularity addition. ~230 words additive; no retraction.

---

## SYNTHESIS — WHAT WAVE-8 ADDS

Five dimensions of vendor-engineering precision applied to the device layer. None break doctrine. None introduce US-regulator authority. All additive. Total surface ~1,800 words. Dossier moves from "broadly correct on device tech" to "vendor-engineering-correct."

- **Highest-leverage edit — 2.1 + 2.2.** Fix the Widex-vs-ReSound Zen brand-attribution error and group the six aid products by algorithm family. Any audiologist or aid-vendor engineer catches this on first read; leaving it degrades dossier credibility with the audiology-professional segment.
- **Highest-stakes edit — 1.1.** Add the temporal-pairing primitive to the Lenire mechanism. Consumers spending $4-6k deserve to know what differentiates Lenire from "sound therapy + a TENS unit." The timing protocol is the answer.
- **Most globally relevant — 3.2.** Flag the Tinnitracks §139e SGB V GKV reimbursement pathway for German readers. Dossier already has §15.7 GKV section; this lands the reimbursement disclosure for the highest-evidence consumer sound-therapy app.
- **Most engineering-precise — 5.1.** Distinguish transcranial cortical-target PBM (A) from spot post-auricular PBM (C) from panel-array systemic PBM (B). Consumers buying $300-1700 devices deserve to know "red light behind the ear" hides three different products with three different intended targets.

Wave-8 verdict: **MODERATE revision.** Cleanly additive precision pass. Evidence-grading + doctrine + safety scaffolding intact; product-engineering layer becomes vendor-grade accurate.

---

## APPENDIX — POSITIVE FINDINGS (NOT RE-LITIGATED)

Device-engineering points the dossier handles correctly — no objection: Conlon 2022 TENT-A2 PMID 35729184 (correct citation, corrected from earlier "2024"); Boedts 2024 *Commun Med* as single-arm registry; Lenire Grade D per honest GRADE-strict reading; completer-vs-ITT denominator decomposition; FDA De Novo 2023 as regulatory-path context only; Vielight 810 nm pulsed 40 Hz spec; 10-20 J/cm² dose target for contact-geometry devices; Tinnitracks + Pantev-Okamoto 2010 PMID 20080545 mechanism citation; MyNoise as free open-architecture noise generator; CBT-i Coach correctly framed as tool not US authority; cochlear-implant + active-middle-ear-implant exclusions per wave-3 disability-inclusion; AirPods Pro 2 hearing-aid mode pricing; sound-therapy graded B distress / C loudness per Cochrane Sereda 2018; bimodal stimulation in §15 clinic-route only; implanted VNS distinguished from consumer taVNS; grey-market knockoff warning at §10.5.5. The dossier is materially better than typical consumer health content on tinnitus device tech. The five wave-8 edits raise it from "broadly correct" to "vendor-engineering-correct."

**End wave-8 review.**
