---
name: "Ailment 360 Research"
description: "Produce an evidence-graded, global-sources-only, STRICTLY OTC + HOME-BASED natural-medicine dossier for a single ailment, following the NicheCore vitiligo/diabetes recipe with full cross-plan coordination. The protocol contains NO prescription drugs, NO clinic-based treatments, and NO hospital-visit requirements — every supplement, device, food, and practice is self-administrable. Use when researching the 360-degree holistic protocol for any consumer health need — covers OTC phytochemicals, Ayurveda, TCM, Unani, Siddha, Tibetan, homeopathy, home biophysical interventions (red-light PBM, home PEMF, infrared sauna, cold immersion), 7-day meal plan with gram quantities, occupational/environmental trigger elimination, cofactor micronutrient floor, weekly exercise periodization, yoga/pranayama mapped to mechanism nodes, supplier ecosystem with prices, drug↔supplement↔food↔exercise↔sleep interaction matrix (drug column is for users ALREADY on prescriptions, never as a recommendation), master 24-hour timetable, self-administered clinical scoring instrument, direct-to-consumer comorbidity screening, and 12-month self-tracked implementation timeline. STRICTLY EXCLUDES US regulatory/professional sources (FDA, FTC, US disease associations, US hospital systems); ONLY honours WHO TCIM, India AYUSH/CCRAS/CCRH/PCIMH/ICMR, EMA HMPC, Australia TGA/NHMRC, China NMPA + Chinese Pharmacopoeia, Health Canada NHP, Men-Tsee-Khang, Hamdard/Dawakhana Tibbiya, IMPCOPS, and classical Ayurveda/TCM/Unani/Siddha/Tibetan/Homeopathy texts."
---

# Ailment 360 Research

## What this skill produces

A **single markdown dossier (2,500–5,500 words)** for one ailment, structured around the 15 mandatory sections below. Output goes to `research/{ailment-id}.md`. Every supplement, formula, food, exercise, and intervention carries an evidence grade (A–X) and a **timing tag** that fits the master 24-hour day plan. **No plan stands alone — supplement timing, meal composition, exercise window, breathwork, and sleep must be cross-validated against the interaction matrix.**

## Foundational rule — STRICTLY OTC + HOME-BASED (load-bearing)

**The protocol contains NO prescription medication, NO prescription treatment, and NO hospital-visit requirement. Period.**

- Every supplement is over-the-counter (or sold direct-to-consumer through AYUSH-GMP, NMPA, EMA HMPC, TGA, or Health Canada NHP channels) and self-orderable from Amazon Prime / iHerb / Patel Brothers / Apna Bazaar / Chinatown TCM pharmacies / Hamdard / IMPCOPS / Men-Tsee-Khang / SBL / Schwabe / Boiron.
- Every biophysical device is consumer-purchasable and self-administrable at home (red-light PBM, home PEMF, home infrared sauna, home cold tub, hand-held devices). **NO clinic phototherapy cabin, NO 308 nm excimer laser, NO PUVA, NO hospital infusion, NO surgical procedure.**
- Every test is self-administered (rating scales, photos, home glucose meter, home BP cuff) OR ordered through direct-to-consumer labs (LetsGetChecked, Everlywell, Thriva UK, Cerascreen EU, True Test IN, Lab Me, Walk-In Lab) — **never "see your doctor for labs"** as the framing.
- The drug-interaction matrix in §10.1 documents conflicts for users **already on prescription therapy** who may be considering a taper at their own pace — it does **NOT** recommend any prescription drug. The dossier itself prescribes none.
- The patient is sovereign over their body. The protocol is independent. If the user chooses to keep a physician in the loop, that's their personal call — the protocol does not require it.

**Forbidden framings** (never write):
- "see your doctor for ..."
- "prescribed by a physician"
- "Rx-only"
- "clinic-based phototherapy"
- "hospital admission required"
- "physician supervision required" (re-frame as "if you are already under physician care, coordinate with them on your own initiative")
- "first-line therapy is [prescription drug]" (re-frame as "conventional first-line conventionally prescribed for this condition is X — interactions documented in §10.1 for those already on it")

## Source policy (load-bearing — never deviate)

**ALLOWED** (rank-ordered):
1. **Tier 1 — RCTs / meta-analyses** from non-US-pharma sources (Cochrane, BMC, peer-reviewed work led by Asian / European / Australian / Canadian institutions).
2. **Tier 2 — Global regulatory & monograph authorities (non-US)**: WHO TCIM Strategy 2025–2034 · India Ministry of AYUSH · CCRAS (Ayurveda) · CCRH (Homoeopathy under AYUSH) · CCRYN (Yoga & Naturopathy under AYUSH) · CCRUM (Unani) · CCRS (Siddha) · PCIMH · ICMR · EMA HMPC herbal monographs · Australia TGA + NHMRC · China NMPA + Chinese Pharmacopoeia · Health Canada NHP · Japan Kampo Pharmacopoeia · Korea KFDA monographs · NSF (quality only).
3. **Tier 3 — Classical texts**: *Charaka Samhita*, *Sushruta Samhita*, *Ashtanga Hridaya*, *Bhavaprakasha*, *Madhava Nidanam*, *Sahasrayoga* (Ayurveda) · *Huang Di Nei Jing*, *Shen Nong Ben Cao Jing*, *Shang Han Lun*, *Tai Ping Hui Min He Ji Ju Fang*, *Yi Zong Jin Jian* (TCM) · *Canon of Medicine* by Avicenna, *Qarabadeen Qadri*, *Tibb-e-Nabawi* (Unani) · *Siddha Maruthuvam*, *Bogar 7000* (Siddha) · *rGyud-bzhi*, Men-Tsee-Khang formularies (Tibetan Sowa Rigpa) · *Organon of the Medical Art* by Hahnemann + Boericke's *Materia Medica* + Allen's *Keynotes* + Kent's *Repertory* (Homeopathy — graded T or H only).
4. **Tier 4 — Independent research, university consortia, independent labs** (with conflicts disclosed).

**EXCLUDED — never cited as authority** (override even if found in search results):
- FDA, FTC, CDC, NIH official policy positions
- ADA, AHA, AAD, ACOG, APA, NAMS, ACR, ACS, AMA, AAFP, AAP — every US disease association / US professional medical body
- US hospital systems, US insurance-aligned medical policy bodies
- US pharma-funded advocacy/professional orgs

US-origin **individual peer-reviewed papers** are allowed only with explicit conflict-of-interest review and only as **evidence objects**, never as institutional authority.

---

## Output structure — 15 mandatory sections

Each dossier opens with YAML front matter and writes the sections in exactly the order below.

### YAML front matter

```yaml
---
ailmentId: <atlas-id, e.g. "acne-prone-skin">
ailmentName: <display name>
domain: <Skin | Hair | Metabolic | Gut | StressSleep | BrainEye | MobilityEnergy | HormoneVitality | ImmuneOral | CardioLiverLongevity>
lastUpdated: <YYYY-MM-DD>
gradeMix: [A|B|C|D|T|H]            # grades that appear in this dossier
clinicalScoringInstrument: <e.g. "VASI", "PASI", "SCORAD", "HAM-D", "IPSS", "HbA1c+FPG", "Migraine Disability Assessment">
subTypes: [<list>]                  # e.g. ["segmental","non-segmental","acral"]
comorbidityScreen: [<list>]         # e.g. ["autoimmune thyroid","T2D","alopecia areata"]
authorAgent: <agent name>
---
```

### 1. Executive Summary
One paragraph reframing the ailment from mainstream silo to integrative-mechanism view. State the 2–4 root drivers. End with a one-sentence "**Synthesis:**" closer.

### 2. Mechanistic Triad / Network
2–4 root mechanisms. Each:
- Scientific explanation (3–5 sentences)
- Key molecular actors (proteins, receptors, transcription factors, cell types)
- Clinical presentation
- Which interventions in this dossier target it
- End with "**Synthesis:**" closer (1 sentence)

Mechanism families to consider: oxidative stress / Nrf2-GPX4 / ferroptosis · gut permeability / zonulin / LPS endotoxemia · microbiome dysbiosis / SCFA depletion · HPA-axis dysregulation · mitochondrial dysfunction · chronic neuroinflammation · molecular mimicry / autoimmunity · fibrosis / TGF-β / collagen dysregulation · insulin resistance / AMPK / mTOR · cellular senescence / SASP · vagal tone / autonomic imbalance · neurotransmitter depletion / monoamine oxidation · sex-hormone signalling · iron dysregulation.

### 2.5 Clinical sub-types & differential prognosis
2–4 sub-types of the ailment (e.g., for vitiligo: segmental / non-segmental / acral / mucosal). For each: clinical features, which mechanism in §2 dominates, expected protocol response (best / moderate / poor / requires specialist referral).

### 3. OTC Phytochemicals — Pharmacological Validation

A markdown table of **4–10 botanicals / nutrients**. Mandatory columns:

| Compound | Mechanism | Dose | Timing | Take WITH | Avoid WITH (≥2h gap) | Grade | Brand options | Price/mo | Evidence note |
|---|---|---|---|---|---|---|---|---|---|

- **Take WITH** — co-administration that aids bioavailability (e.g., curcumin + piperine + fat; vitamin D + dietary fat; iron + vitamin C; turmeric + black pepper + ghee).
- **Avoid WITH** — antagonists / chelators that must be separated by at least 2h (e.g., iron + calcium; iron + tea/coffee tannins; thyroid med + calcium/iron; zinc + iron; calcium + magnesium taken at the same dose).
- **Brand options** — prefer Asian/European/Australian-sourced brands: Organic India, Himalaya, Baidyanath, Patanjali, Banyan Botanicals, Nootropics Depot, NOW Foods, Double Wood, Pure Encapsulations, Thorne, Solgar (EU), iHerb private label. AYUSH-GMP certified where possible.
- **Evidence note** — cite strongest supporting study or monograph (e.g., "EMA HMPC monograph 2024", "RCT n=120, BMC Complement Med 2023", "Charaka Samhita Ch. 28").

### 4. Traditional Medicine Integration

Each sub-section must include **at least 2 formulations** if the tradition documents the ailment; **1 line acknowledging silence** otherwise. Where applicable, **name the originator / lineage** (e.g., Dr. Khadar Vali for Siri Dhanyalu millet revival, Dr. Hiroshi Mori for certain Kampo, named Bengali Ayurvedic lineages, Plum Flower formulators for TCM granules).

**4.1 Ayurveda** — dosha framing (vata / pitta / kapha imbalance), rasayanas, classical formulas with Sanskrit names. Cite Charaka / Sushruta / Bhavaprakasha chapter. Sourcing: Organic India, Himalaya, Baidyanath, Patanjali (AYUSH-GMP).

**4.2 TCM** — pattern differentiation (zang-fu, six stages, four levels, qi-blood-yin-yang), classical formulas (pinyin + characters where helpful, e.g., 玉泉丸 Yu Quan Wan, 消渴方 Xiao Ke Fang, 六味地黄丸 Liu Wei Di Huang Wan), herb composition, mechanism per Chinese Pharmacopoeia. Sourcing: Plum Flower, Min Tong, Mayway, Treasure of the East, Chinatown TCM pharmacies (San Jose / SF / NYC / Toronto).

**4.3 Unani** — Mizaj (temperament: damawi / safrawi / balghami / saudawi) framing, Khamiras / Majoons / Itrifals / Sharbats / Arq, classical Hakim formulations. Sourcing: Hamdard, Dawakhana Tibbiya College Aligarh, Ajmal, Saif Pharmaceuticals.

**4.4 Siddha** — Tamil tradition specific to South India; **only chooranam (herbal powders), kuzhambu (decoctions), legiyam (semi-solid herbal preparations)** are eligible for this OTC self-administered protocol. **Classical mercurial/metallic preparations (chenduram, parpam, mezhugu) are EXCLUDED** because they require expert pharmacy preparation and supervised administration. Sourcing: IMPCOPS, SKM Siddha & Ayurveda, Aimil Pharmaceuticals.

**4.5 Tibetan / Sowa Rigpa** — Men-Tsee-Khang Dharamsala formulations and the *rGyud-bzhi* framework. Notable formulas: Agar-35, Padma-28 (also EMA-approved as Padma Lax).

**4.6 Homeopathy** — classical remedies **graded strictly T or H** with this explicit caveat: *"Homeopathy is honoured under the founder's mandate to explore all directions of alternative medicine. Modern evidence is contested; entries are presented as a documented tradition (Tier 3), not as clinical proof."* List 3–6 common remedies for the ailment (e.g., for vitiligo: Arsenicum Sulphuratum Flavum, Hydrocotyle Asiatica, Natrum Muriaticum). Cite Boericke's *Materia Medica*, Allen's *Keynotes*, or Kent's *Repertory*.

### 5. Biophysical Interventions — home-administered only (branch by domain)

This section MUST branch by ailment domain. **All devices must be consumer-purchasable and self-administrable at home. NO clinic-based phototherapy, NO excimer laser, NO PUVA, NO hospital infusion.**

- **Skin domain** (vitiligo, psoriasis, eczema, hyperpigmentation, acne):
  - **Photobiomodulation (660 nm visible red + 810–850 nm NIR)** as primary biophysical — home panels (Mito Red Light MitoMIN/MID/MAX, Joov Original/Solo/Elite, Hooga, Red Light Rising, BlockBlueLight).
  - **Controlled direct sunlight exposure** — skin-type-aware dosing (Fitzpatrick I 5–10 min, II 10–15 min, III 15–20 min, IV 20–25 min, V 30 min, VI 30–40 min). AM and late-PM windows preferred. This is the home substitute for clinic NB-UVB.
  - **Home infrared sauna** (Sunlighten Solo, JNH Lifestyles, Clearlight) — full-body warming + circulation + sweat-driven detox.
  - **Home cold-water immersion / contrast hydrotherapy** (Plunge tub, Edge Tub, ice-bath barrel) — vagal + anti-inflammatory.
  - **Wet-wrap + emollient occlusion** (eczema, psoriasis flare) — cotton layer over emollient, sealed with damp gauze, 1–2 h sessions.
  - **Dead Sea bath salts** (Mg chloride + Br + K) — 250–500 g per bath, 20 min, 2–3 ×/week for psoriasis and eczema (Premier Dead Sea, Westlab, Salt of the Earth).
- **Brain / Eye / Mood** domains: PBM (810 nm transcranial / 670 nm intranasal) — Vielight Neuro Alpha/Gamma, Vielight Vagus, Neuradiant; consumer VNS — Nurosym, Sensate, Pulsetto; HRV biofeedback — HeartMath Inner Balance, Lief, Polar/Whoop/Oura HRV.
- **Metabolic / Cardio** domains: PBM (670 nm abdominal panel), HIIT cardio (home or outdoor), low-pressure home **soft-shell hyperbaric oxygen chambers** (OxyHealth Vitaeris, Summit to Sea) where available consumer-grade.
- **Mobility / Recovery** domains: home PEMF (Bemer mat, Pulse Centers home unit, Healthy Wave), red-light panel, infrared sauna, cold immersion.
- **All ailments**: home infrared sauna + cold-water immersion as systemic adjuncts when appropriate.

For each device: wavelength (nm), irradiance / dose (J/cm² per session), session duration, frequency, brand options (consumer-grade only), price, **timing in the master day plan**, contraindications (photosensitising drugs the user may be on, pregnancy, malignancy, retinal disease, pacemaker for PEMF).

### 6. Dietary Protocol

**6.1 Mandatory foods** — daily gram quantities (e.g., "150–200 g bitter greens", "60–80 g sprouted small millets", "30 g raw nuts").

**6.2 Absolutely avoid** — with molecular reason. Examples:
- Gluten → gliadin → zonulin release → intestinal permeability
- High-fructose corn syrup → de novo lipogenesis → NAFLD
- Industrial seed oils → omega-6/omega-3 imbalance → inflammation
- Refined sugar → insulin spike → glycation
- Alcohol → zinc / B-vit depletion → CYP2E1 activation
- Trans fats, ultraprocessed foods, aspartame

**6.3 Preparation methodology** — sprouting (8–10 h soak + 8–12 h germinate), fermentation (kanji, sauerkraut, kefir, dosa batter), bone broth, ghee tempering, slow-cooking.

**6.4 Seven-day meal plan** with **exact gram quantities** per meal, per day, per timing slot. At least 3 distinct day patterns; days 4–7 can rotate.

**6.5 Environmental & occupational triggers to eliminate** (mandatory new sub-section)
- Topical exposures (cosmetics, soaps, hair dyes) — list specific molecules to avoid
- Occupational chemicals (e.g., para-tertiary butyl phenol for vitiligo, organic solvents for liver, isocyanates for asthma, pesticides for thyroid)
- Indoor air (mould, VOCs, formaldehyde, plastic off-gassing)
- Endocrine disruptors (BPA, phthalates, parabens)
- EMF where applicable (5G, dirty electricity for headache / insomnia / EHS sensitivities)
- Light pollution / blue light at night
- Personal care products to swap for clean alternatives

**6.6 Cofactor / micronutrient floor** (mandatory new sub-section)
A table of micronutrients the ailment's pathology requires as cofactors. Include: copper, zinc, selenium, iodine, magnesium, B6, B9 (methylfolate), B12 (methylcobalamin), vitamin D3+K2, vitamin A (retinol from cod-liver), choline, iron (only if deficient — **measure ferritin via DTC lab first, supplement only if <30 ng/mL**). For each: target intake (mg/μg/day), food sources, supplement form if needed, antagonist nutrients (e.g., zinc:copper ratio 8–15:1). Always state "**measure before supplementing**" for iron, copper, selenium, iodine.

### 7. Lifestyle / Mind-Body Anchors (every entry mapped to a §2 mechanism node)

**7.1 Yoga** — specific asanas with the §2 mechanism node they target.

| Asana | Mechanism node targeted | Duration | Time of day |
|---|---|---|---|

Examples: Sarvangasana → thyroid + skin perfusion (Skin §2 node); Bhujangasana → digestive fire + spinal flexibility (Gut §2 node); Shavasana → HPA / parasympathetic (Stress §2 node); Setu Bandhasana → pelvic circulation (Hormone §2 node).

**7.2 Pranayama** — techniques + duration + mechanism node + time of day:
| Technique | Mechanism node targeted | Duration | Time of day |
|---|---|---|---|
- Anulom Vilom (alternate-nostril, 10 min AM) → HPA / vagal tone
- Bhramari (humming bee, 5 min PM) → vagal nerve / nitric oxide
- Kapalbhati (cleansing, 5 min AM) → diaphragm + sympathetic activation; **CONTRAINDICATED in hypertension, pregnancy, cardiac disease, recent abdominal surgery**
- Nadi Shodhana (channel-purification) → autonomic balance
- Ujjayi (ocean breath) → vagal tone + thermogenesis
- Bhastrika (bellows breath) → energetic; CONTRAINDICATED in HTN
- Sheetali / Sheetkari (cooling) → pitta reduction

**7.3 Meditation** — match tradition to ailment's psycho-emotional load: Vipassana (insight), Yoga Nidra (deep rest / sleep restoration), Transcendental (mantra), mindfulness (MBSR / MBCT), Tibetan Tonglen (compassion), Sufi Zikr (remembrance), Christian centering prayer. Specify daily duration.

**7.4 Sleep hygiene + circadian** — bedtime target, blue-light cutoff (≥90 min before bed), room temperature (18–20°C), AM sunlight within 30 min of waking.

**7.5 Nervous-system reset** — vagal-nerve practices (humming, gargling, cold splash, gentle gag-reflex training, deep-slow-breath 4-7-8).

**7.6 Exercise periodization** — weekly + monthly cadence. Mandatory new sub-section.

Weekly cadence example:
- Mon / Wed / Fri — Zone 2 cardio (45 min) at 60–70% HRmax
- Tue / Thu — strength training (compound lifts), 45 min
- Sat — high-intensity intervals (HIIT, 20 min) OR sport
- Sun — restorative yoga + long walk (60–90 min)

Monthly cadence:
- Week 1 — full intensity + TCM cycling overlay
- Week 2 — moderate + supplement steady-state
- Week 3 — deload (≤70% volume) + extra sleep
- Week 4 — full intensity + TCM cycling overlay
- Optional 16:8 / 14:10 intermittent fasting window if metabolically appropriate (NOT for hypothyroid, NOT for HPA-axis depleted, NOT for underweight, NOT in pregnancy / breastfeeding).

### 8. Daily Unified Combos (≤10 capsules/day total)

**Combo 1 — Morning (post-breakfast)** — 3–5 items. Each item: name + dose + timing rationale (e.g., "needs fat for absorption", "Nrf2 morning surge").
**Combo 2 — Midday (post-lunch)** — 3–5 items.
**Combo 3 — Evening (post-dinner)** — 3–5 items.
**Optional TCM cycling overlay (weeks 1 & 4)** — granule formula, dose, weeks active.

### 8.5 Master 24-Hour Day Plan (mandatory)

A single hour-by-hour timetable that integrates supplements, meals, exercise, breathwork, light exposure, and sleep — and that resolves every co-administration conflict from §10.

| Hour | Action | Why this timing | Conflicts resolved |
|---|---|---|---|

Example skeleton (adapt to ailment):
- **06:00** Wake → 5 min direct sunlight (circadian anchor + cortisol awakening response)
- **06:30** Pranayama 10 min (Anulom Vilom + Bhramari) → vagal tone before any food/supplement
- **07:00** Yoga 20 min — list specific asanas
- **07:30** Breakfast (specific composition + grams). **Pre-meal rule**: tea/coffee polyphenols ≥1 h away from iron-rich foods; thyroid meds (if any) taken 60 min before food + coffee + calcium.
- **08:00** Combo 1 (with food, fat present for fat-soluble; piperine present if curcumin)
- **09:30** Sunlight 10 min OR PBM 15 min (if winter or skin domain)
- **12:30** Lunch (composition + grams)
- **13:00** Combo 2 (with food)
- **13:30** 10-min post-meal walk → blunts post-prandial glucose
- **14:00** Caffeine cut-off (no caffeine after 14:00 to protect sleep)
- **16:00** Exercise window (45 min Zone 2 or strength per §7.6)
- **18:30** Dinner — light, low-carb evening composition
- **19:00** Combo 3 (with food)
- **20:00** Red light PBM 15 min (skin / metabolic / brain — per §5 device)
- **20:30** Restorative yoga or walk 20 min
- **21:30** Blue-light cutoff, screens off
- **22:00** Magnesium glycinate + ashwagandha + L-theanine (if in protocol); Bhramari 5 min
- **22:30** Bedtime
- **02:00–06:00** Sleep — avoid waking eating (insulin spike)

Where the ailment requires specific deviations (e.g., diabetics on insulin take long-acting at fixed time; menopause sleep needs evening progesterone-supporting herbs), the timetable must call them out explicitly.

### 9. Supplier Ecosystem + Monthly Cost

A supplier table:

| Channel | What it sources well | Typical brands | Notes |
|---|---|---|---|

Channels to cover:
- Amazon Prime (US / IN / UK), iHerb, Whole Foods, Sprouts Farmers Market, Vitamin Shoppe
- Patel Brothers, Apna Bazaar, India Cash & Carry (sprouted millets, fresh methi, Indian formulations)
- Chinatown TCM pharmacies (raw herbs, granules, classical formulas)
- AYUSH-GMP-certified direct (Organic India, Himalaya, Patanjali, Baidyanath)
- Hakim shops / Hamdard outlets (Unani)
- Siddha clinics / IMPCOPS (Siddha)
- Tibetan Men-Tsee-Khang branches (Sowa Rigpa)
- CCRH-affiliated homeopathic pharmacies (SBL, Schwabe, B.Jain — India; Boiron — France)
- Device suppliers (Mito Red Light, Joov, Hooga, Daavlin, Bemer, Sunlighten, Vielight)

**Monthly cost — broken down by line:**
- Combo 1: $X–Y
- Combo 2: $X–Y
- Combo 3: $X–Y
- TCM cycling (1 week × 2/month): $X–Y
- Fresh produce uplift (diet §6): $X–Y
- Probiotics / specialty items: $X–Y
- **Total monthly: $X–Y**
- One-time: PBM device ($X), sauna / cold tub / PEMF mat (if applicable)

Include at least **one Indian-grocery address AND one Chinatown TCM pharmacy address** for fresh-food / formulary sourcing — ideally in 2 geographies (Bay Area + NYC as defaults; e.g., "Patel Brothers, 1610 Stoneridge Mall Rd, Pleasanton CA" and "Kamwo Meridian Herbs, 209 Grand St, NYC").

### 10. Interaction Matrix — drug ↔ supplement ↔ food ↔ exercise ↔ sleep

This section is the load-bearing safety + plan-coordination layer. **Every supplement in §3/§4/§8 must have a row somewhere in §10.1–10.4, and the §8.5 timetable must resolve all conflicts.**

**10.1 Drug ↔ Supplement interactions** — *for users ALREADY on conventional therapy who are adding this OTC protocol on their own initiative. The dossier itself prescribes NONE of these drugs.*

| Drug (currently on it) | Supplement in this protocol | Risk | Mitigation (the user decides their own taper pace) |
|---|---|---|---|

For each ailment, name the conventional pharmaceuticals typically prescribed (so users on them know what to watch) and tabulate every relevant herb interaction. Frame strictly as "**if you are already on X, here is the conflict**" — never "**we recommend X**". Drugs the user may currently be on but that this protocol considers replaceable should be tagged "**discouraged in this protocol**" inline (the dossier still documents the interaction, but signals that the protocol's own path doesn't include this drug). Examples:
- For vitiligo: topical tacrolimus, ruxolitinib cream, methoxsalen, oral mini-pulse steroids, methotrexate, JAK inhibitors.
- For T2D: metformin, sulfonylureas, GLP-1 agonists, SGLT-2 inhibitors, basal/bolus insulin.
- For hypertension: ACE inhibitors, ARBs, β-blockers, CCBs, thiazides.
- For depression/anxiety: SSRIs, SNRIs, benzodiazepines, lamotrigine, lithium.
- For thyroid: levothyroxine, liothyronine, methimazole.

Specific high-risk pairs to ALWAYS document if relevant: Metformin + Momordica = additive hypoglycemia. Insulin + Nigella sativa = severe hypoglycemia. Warfarin + curcumin / ginkgo / ginger / garlic / vitamin K-rich greens = bleeding / INR shift. SSRIs + St. John's Wort = serotonin syndrome. JAK inhibitors + high-dose flavonoids (quercetin/polydatin) = CYP3A4 interaction. Levothyroxine + calcium / iron / coffee within 60 min = absorption block. Statins + niacin = hepatotoxicity / myopathy.

**10.2 Drug ↔ Food interactions**

| Drug | Food | Mechanism | Required action |
|---|---|---|---|

Examples:
- Warfarin + vitamin K-rich greens → maintain consistent intake (don't oscillate)
- MAOIs + tyramine (aged cheese, fermented sausage, wine) → hypertensive crisis
- Levothyroxine + coffee / soy / fibre within 60 min → absorption block
- Grapefruit + many drugs (statins, CCBs, immunosuppressants) → CYP3A4 inhibition → toxicity
- Acetaminophen + alcohol → hepatotoxicity
- NSAIDs + alcohol → GI bleed
- Metformin + alcohol → lactic acidosis
- ACE inhibitors + high-potassium foods (banana, coconut water, salt substitutes) → hyperkalemia
- Lithium + low-sodium diet → toxicity
- Iron supplement + tea/coffee/dairy within 60 min → absorption block

**10.3 Supplement ↔ Food interactions** (the new layer the founder mandated)

| Supplement | Food / Drink | Mechanism | Required action |
|---|---|---|---|

Mandatory rules to encode wherever applicable:
- **Curcumin** + dairy → casein binds polyphenols, ↓ bioavailability → take 2h apart; pair with **piperine + fat (ghee/coconut oil)**.
- **Iron** + tea / coffee / wine (tannins, polyphenols) → ↓ absorption → take 1–2h apart; pair with **vitamin C**.
- **Iron** + dairy / calcium → divalent cation competition → ≥2h gap.
- **Zinc** + iron → competition for DMT1 transporter → ≥2h gap.
- **Calcium** + magnesium at same dose → competition → split AM/PM (calcium AM with breakfast; magnesium PM with dinner).
- **Fat-soluble vitamins** (A, D, E, K) → ALWAYS with a meal containing fat.
- **Vitamin D** + magnesium → magnesium is a cofactor for vitamin D activation → take together.
- **Probiotic** + hot food / drink (>40°C) → kills viable bacteria → take with cool/room-temp.
- **Probiotic** + antibiotic → ≥2h gap.
- **Thyroid medication** (if patient takes one) + calcium / iron / coffee / soy / high-fibre → 60 min gap.
- **Polyphenol-rich herbs** (green tea EGCG, grape seed, resveratrol) + iron → ↓ absorption.
- **Berberine** + dairy → ↓ absorption (some studies); separate by 1h.
- **Carotenoids** (lutein, zeaxanthin, astaxanthin) → fat-required for absorption.
- **Ashwagandha** + alcohol → CNS depression; avoid same evening.
- **Melatonin** + caffeine → caffeine blocks → no caffeine after 14:00.
- **Adaptogens (rhodiola, eleuthero)** → mornings only; stimulating, disrupts evening sleep if taken late.
- **L-theanine** + caffeine (morning) → smoother caffeine; antagonistic if taken at bedtime with chamomile.
- **Cruciferous veg (raw)** in high quantities → goitrogenic; if hypothyroid, lightly steam.
- **Grapefruit** + any CYP3A4-metabolised supplement (some flavonoids) → interaction.
- **High-oxalate foods** (spinach, beet, almond) + calcium / kidney-stone risk → moderate.
- **Bone broth** + iron supplement → glycine + collagen aid absorption (synergy).

**10.4 Supplement ↔ Supplement interactions**

| Supplement A | Supplement B | Mechanism | Required action |
|---|---|---|---|

Examples:
- **Zinc ↔ Copper** → long-term zinc without copper → copper depletion → maintain 8–15:1 ratio.
- **Iron ↔ Zinc / Calcium / Magnesium** → divalent competition → separate by 2h.
- **Vitamin A ↔ Vitamin D** → high-dose A can compete with D receptor activation → balance.
- **Vitamin E ↔ Vitamin K** → high-dose E can antagonise K → balance.
- **St. John's Wort ↔ SSRIs and many herbs** → serotonin syndrome / CYP induction → avoid combinations.
- **Echinacea ↔ Immunomodulators** → counter-active.
- **High-dose flavonoids ↔ thyroid hormone uptake** → consider gap.
- **Magnesium ↔ Calcium** at same dose → split times.
- **Berberine ↔ many herbs via CYP3A4 inhibition** → reduce concurrent CYP3A4-metabolised herbs.

**10.5 Exercise / Sleep / Caffeine timing rules**

- **Caffeine cutoff: 14:00 latest** (half-life ~6h; protects sleep).
- **Creatine**: pre- or post-workout with carb/protein; consistent daily timing.
- **Beta-alanine**: ≥30 min pre-workout; expect paresthesia.
- **L-theanine + caffeine**: AM only.
- **Magnesium glycinate**: PM (sleep support).
- **Ashwagandha (KSM-66 / Sensoril)**: AM or PM; if PM, take ≥2h before bed to avoid vivid dreams in sensitive users.
- **Rhodiola / Eleuthero**: AM only (stimulating).
- **Melatonin (if used)**: 30–60 min before sleep; ≤0.3 mg physiological dose preferred.
- **Probiotic**: morning empty stomach OR with first meal.
- **Heavy meal + supine position** within 3h → reflux risk → no late dinner with inverted yoga.
- **Inverted yoga (Sarvangasana, Halasana)** + acid reflux / late dinner → contraindicated.
- **Hot sauna** + alcohol → dehydration / arrhythmia risk → don't combine.
- **Cold immersion** + cardiovascular disease → physician clearance.

**10.6 "Strictly Avoid" list — specific to this ailment**

Bullet list of supplements/foods/drugs the ailment's pathology contraindicates:
- Vitiligo (autoimmune): high-dose Echinacea, pure Astragalus (high-dose), Ma Huang (Ephedra), Panax ginseng (immune over-activation)
- T2D: high-glycaemic sweeteners, high-dose niacin (insulin resistance worsening), licorice (BP)
- Autoimmune: melatonin high-dose, IL-stimulating herbs
- Hypertension: licorice, ephedra, Kapalbhati pranayama (BP spike), Bhastrika
- Pregnancy: Vitex, parsley (high-dose), pennyroyal, many oils, high-dose vitamin A
- Hepatic disease: kava, comfrey, chaparral
- Renal disease: high-protein loads, high-dose creatine, potassium-sparing herbs

### 11. Clinical Scoring + Comorbidity Screening

**11.0 Self-administered clinical scoring instrument** for the ailment — measured at baseline / week 12 / month 6 / month 12 **by the user**, using consumer rating scales, smartphone photos under consistent lighting, home glucose / BP / HRV / weight / waist devices. NO clinic-administered scoring. Examples by domain:
- Skin: VASI (vitiligo), PASI (psoriasis), SCORAD/EASI (eczema), GAGS (acne), MASI (melasma)
- Hair: Hamilton-Norwood / Ludwig (androgenetic alopecia), SALT (alopecia areata)
- Metabolic: HbA1c, fasting plasma glucose, HOMA-IR, OGTT, fasting insulin
- Cardio: SBP/DBP home log, ABPM, ABI for PAD
- Brain / Mood: HAM-D / PHQ-9 / GAD-7 / BAI / MADRS (avoid US framing where possible — these are international scales) / MoCA / MMSE for cognition
- Gut: IBS-SSS, Bristol stool, GAS / Symptom Severity Scale
- Hormonal: Menopause Rating Scale (MRS), Greene Climacteric Scale, PCOS Health-Related Quality of Life
- Musculoskeletal: WOMAC (osteoarthritis), VAS pain, ODI (back), KSS (knee)
- Eye: NEI VFQ-25, OSDI (dry eye)
- Sleep: Pittsburgh Sleep Quality Index (PSQI), ISI (insomnia)

**11.5 Autoimmune & Comorbidity Screening — direct-to-consumer labs only**

Labs are ordered by the user through DTC channels (LetsGetChecked, Everlywell, Thriva UK, Cerascreen EU, True Test IN, Walk-In Lab, Lab Me, Choose Health, InsideTracker). Cadence: baseline, month 3, month 6, month 12. List comorbid conditions the ailment carries elevated risk for, plus the screening labs:
- Vitiligo → autoimmune thyroid (anti-TPO, anti-Tg, TSH), T2D (HbA1c), Hashimoto's, alopecia areata, B12 deficiency, pernicious anaemia
- T2D → CV risk (lipid panel, ApoB), kidney (eGFR, ACR), retinopathy screen, neuropathy screen, NAFLD (ALT/AST/GGT, FibroScan if needed), depression
- Hypertension → renal artery stenosis, sleep apnea (Epworth), thyroid, adrenal
- Depression → thyroid, B12, vitamin D, ferritin, inflammatory markers
- IBS → SIBO breath test, celiac (anti-tTG-IgA), micronutrient deficiencies
- Acne → PCOS markers (free testosterone, DHEAS, LH/FSH), insulin resistance
- Eczema → food allergy panel, atopic march (asthma / allergic rhinitis), filaggrin

### 12. Implementation Timeline (12 months) — self-tracked, home-based

- **Weeks 1–4 — Adaptation.** Half-dose ramp days 1–3 to test tolerance. What to expect (mild bloating, dark urine on day 1 from polyphenols, taste adjustment). Daily/weekly self-log in a notebook or app (e.g. Cronometer, MyFitnessPal, AYUSH MyPal, Welltory).
- **Weeks 5–8 — Stabilisation.** Tolerance confirmed. Early biomarker drift. Optional mid-protocol DTC-lab spot-check (e.g. CBC + ferritin + vitamin D + hs-CRP).
- **Weeks 9–12 — Clinical shift.** First repeat of self-administered scoring instrument (§11.0). DTC lab panel from §11.5. Photo-document any visible markers (skin, hair, weight).
- **Months 4–6 — Consolidation.** Maintenance protocol. Subtract any non-responders (grade-based pruning).
- **Months 6–12 — Long-term sustainability.** Quarterly self-scoring. Annual DTC labs. Cycling considerations (TCM weeks 1 & 4 of each month; metabolic + adaptogen rotation; seasonal millet rotation).
- **No physician check-in milestones are mandatory.** If the user keeps a physician in the loop, that's their personal decision — the protocol does not require it.

### 13. Illustrative Case Composite (optional but recommended)

Anonymised composite — NOT a real patient identifier. Profile, baseline, protocol applied, outcomes at the 4 timeline milestones.

### 13.5 Patient-facing Primer (mandatory)

A 150–250 word, lay-language explainer that decodes the ailment in everyday voice: what is going on inside the body, why this protocol differs from the conventional path, what the patient can expect month-by-month, what to NOT expect (this is a months-long re-balancing, not an overnight reversal), and the **sovereign ethos**: this is an independent, OTC, home-based protocol. **No prescription. No clinic. No hospital.** The user is in charge of their own body. If they choose to keep a physician informed, that is their personal decision; the protocol does not require it.

### 14. Independent Healing Paradigm (closing editorial, ~150 words)

- Why this protocol differs from the mainstream pharmaceutical model.
- **Sovereignty ethos**: OTC + home-based by design. **No prescription. No clinic. No hospital. No surgery.** The user owns their body and their healing path.
- Honest acknowledgment of evidence limits and uncertainty — we are not promising outcomes; we are documenting the strongest globally-sourced natural path.
- Explicit re-affirmation: **no FDA, FTC, ADA, AHA, AAD, AMA, APA, ACOG, NAMS, ACR, ACS, CDC, NIH-policy, AAFP, AAP as authority. Period.**
- Explicit re-affirmation: protocol grounded in WHO TCIM, India AYUSH/CCRAS/CCRH/CCRYN/CCRUM/CCRS/PCIMH/ICMR, EMA HMPC, Australia TGA + NHMRC, China NMPA + Chinese Pharmacopoeia, Health Canada NHP, Men-Tsee-Khang, Hamdard, IMPCOPS, plus classical traditional texts.

---

## Evidence grading (apply to every claim / table row)

| Grade | Meaning |
|---|---|
| A | Strong human evidence — multiple RCTs or meta-analyses |
| B | Moderate human evidence — 1+ RCT, mixed |
| C | Early / mixed human evidence |
| D | Mechanistic, animal, in vitro, in silico only |
| T | Traditional use evidence (Ayurveda / TCM / Unani / Siddha / Tibetan / Homeopathy) |
| H | Hypothesis / emerging signal |
| X | Insufficient / rejected |

## Forbidden language (do not write these phrases anywhere)

- "cure your X", "cures X" as a marketing claim
- "guaranteed results / repigmentation / reversal / cure"
- "no side effects"
- "100 % safe"
- "exceptionally high safety profile" (be honest about caveats)
- "miracle cure / formula / treatment / pill"
- "clinically proven" (unless an RCT exists for *that exact intervention at that exact dose*)
- "doctor-approved" (unless a named, credentialed reviewer has actually reviewed it)
- "ancient secret"
- "FDA-approved" (we do not use FDA as a trust anchor anyway)
- "see your doctor for ..."
- "consult your physician about ..."
- "prescribed by a physician" (except in §10.1 *describing* what a user might already be on)
- "Rx-only", "clinic-based phototherapy", "hospital admission required"
- "physician supervision required"
- "first-line therapy is [prescription drug]"
- "you'll need a prescription for ..."

## How to apply this skill (workflow)

When asked to research ailment **X**:

1. **Identify mechanism family** — autoimmune, metabolic, neurodegenerative, hormonal, microbial, structural, microbiome-driven.
2. **Web-search the allowed sources** (Tier 2 / Tier 3). Cross-check at least one AYUSH/CCRAS source, one EMA HMPC monograph or TGA / NMPA reference, and one classical text per relevant tradition.
3. **Identify 2–4 mechanistic drivers** shared across traditions (§2).
4. **Identify clinical sub-types** (§2.5).
5. **Find 4–10 OTC phytochemicals** with verified non-US suppliers, AYUSH-GMP where possible, AND co-administration metadata (§3).
6. **Lay out the six traditions** with min 2 entries each (§4).
7. **Specify biophysical interventions branched by domain** (§5).
8. **Build dietary protocol with exact grams + environmental triggers + cofactor floor + 7-day plan** (§6).
9. **Specify yoga / pranayama / meditation / sleep / nervous-system anchors mapped to mechanism nodes** (§7), plus weekly + monthly exercise cadence (§7.6).
10. **Compose three daily combos (≤10 caps total)** (§8).
11. **Write the master 24-hour day plan** that resolves every co-administration conflict from §10 (§8.5).
12. **Map supplier ecosystem with monthly cost breakdown** (§9).
13. **Build the full interaction matrix** — §10.1 drug↔supp, §10.2 drug↔food, §10.3 supp↔food, §10.4 supp↔supp, §10.5 timing rules, §10.6 strictly-avoid.
14. **Specify clinical scoring instrument + comorbidity screen** (§11).
15. **Define the 12-month implementation timeline** (§12).
16. **Write the patient-facing primer + closing paradigm** (§13.5 + §14).

Save the dossier as `research/{ailmentId}.md`.

## Internal Ralph Loop (MANDATORY before saving) — three internal passes

Before writing the final file, run **three internal review iterations** on your draft and refine after each. The point is to look at the dossier from a different angle each pass so all directions of the protocol have been challenged.

### Pass 1 — Completeness & coherence (structural)
- Are all 15 sections present in the exact order specified?
- Are all sub-sections present (§2.5, §6.5, §6.6, §7.6, §8.5, §10.1–10.6, §11.0, §11.5, §13.5)?
- Do all 6 traditional systems (§4.1–4.6) have ≥2 entries OR an explicit silence acknowledgment?
- Does §8.5 (24-hour timetable) explicitly resolve every conflict from §10 (especially curcumin/dairy, iron/tea/Mg/Ca timing, Ashwagandha pre-bed, caffeine cut-off)?
- Are all yoga + pranayama rows in §7.1/§7.2 mapped to a §2 mechanism node?
- Does §6 sum to a coherent weekly grocery list that matches the §8.5 meal times?
- **Iterate**: if any answer is "no", revise and re-check.

### Pass 2 — Validation & citation integrity (truthfulness)
- For every Tier-2 / Tier-3 citation (AYUSH/CCRAS/CCRH/EMA HMPC/TGA/NMPA/Health Canada NHP/classical texts/named non-US peer-reviewed RCTs): does it actually support the claim it is attached to? Cross-check against the published monograph or text reference where possible.
- **No invented citations**, no "Smith et al 2023" without a real journal, no "studies show" without a named monograph/RCT/classical text.
- **No invented doses** — every mg/g/μg figure must come from a monograph (EMA HMPC, AYUSH/CCRAS, Chinese Pharmacopoeia, Health Canada NHP) or a real peer-reviewed paper.
- **No invented brand SKUs** — if you name a product (e.g. "Mito Red Light MitoMAX") it must really exist and be consumer-purchasable. If unsure, drop the brand and keep the generic.
- Every grade (A/B/C/D/T/H/X) must match the evidence cited in the row (don't grade T as B).
- Every claim in §3 has a mechanism + a dose + a timing + a Take WITH + an Avoid WITH + a grade + a source. Missing any column → revise.
- §10.1 drugs must actually be conventionally prescribed for the ailment — not invented (e.g. don't list "tacrolimus" for psoriasis if it's not standard there; do list it for vitiligo and eczema).
- **Iterate**: if any row fails validation, fix or remove.

### Pass 3 — Elite-physician smell test (clinical credibility)
Read the dossier as if you were:
- **An AYUSH-credentialed BAMS / Vaidya / Siddha specialist / Hakim** under CCRAS / CCRUM / CCRS / IMPCOPS, OR
- **An integrative GP in Australia** under TGA / NHMRC who treats patients with herbal + complementary medicine alongside primary care.

The dossier must pass their smell test:
- **Dosha / Mizaj / TCM-pattern framing is correct** (not just label-dropped — actually consistent with the symptom profile, e.g. dry-eczema = vata aggravation, oozing-eczema = pitta-kapha, not the other way around).
- **Drug-herb interaction call-outs are clinically accurate** (e.g. licorice + diuretic + ACE-i = hypokalemia + hypertension; warfarin + ginkgo/garlic/ginger = bleed; lithium + diuretic = toxicity).
- **Contraindications are not glossed over** (e.g. Kapalbhati & Bhastrika in hypertension / pregnancy / glaucoma; Vitex in pregnancy; St John's Wort with SSRIs; high-dose vitamin A in pregnancy).
- **Cofactor floors (§6.6)** are pharmacologically sane (Zn:Cu ratio 8–15:1 maintained, iron only if ferritin low, iodine cautious in autoimmune-thyroid context).
- **Timeline (§12)** is realistic — no "VASI drops 50% in week 4" overclaims; chronic-disease re-balancing takes months.
- **Forbidden language absent** under the most cynical read.
- **No prescription / clinic / hospital recommendation** under any framing.
- **Patient sovereignty preserved** without becoming reckless (the dossier should still respect when something is genuinely beyond the OTC protocol's reach and should say so honestly).
- **Iterate**: if any clinical-credibility concern surfaces, revise.

After all three passes, save the dossier. **Document in the YAML front matter that the three-pass internal ralph loop was completed**:

```yaml
internalRalph:
  pass1Complete: true   # structural coherence
  pass2Complete: true   # citation + dose validation
  pass3Complete: true   # elite-physician smell test (AYUSH BAMS / Australia TGA-integrative GP)
```

## Self-check before submitting (mandatory)

- [ ] All 15 sections present, in order.
- [ ] YAML front matter complete, including `clinicalScoringInstrument`, `subTypes`, `comorbidityScreen`.
- [ ] Every supplement / formula has a grade (A–X) AND a "Take WITH" + "Avoid WITH" column where applicable.
- [ ] No FDA / FTC / ADA / AHA / AAD / AMA / APA / ACOG / NAMS / ACR / ACS / CDC / NIH-policy citations.
- [ ] At least one AYUSH / CCRAS / CCRH source cited.
- [ ] At least one EMA HMPC / TGA / NMPA source cited.
- [ ] At least one classical text per relevant tradition cited.
- [ ] §4 each tradition has ≥2 entries OR a 1-line silence acknowledgment.
- [ ] §5 branched by domain — Skin = PBM + controlled sun + IR sauna + cold immersion + (optional) home PEMF. **NO clinic phototherapy, NO 308 nm excimer, NO PUVA, NO hospital procedure.**
- [ ] §6.5 environmental triggers populated.
- [ ] §6.6 cofactor floor table populated.
- [ ] §7 yoga & pranayama each row maps to a §2 mechanism node.
- [ ] §7.6 weekly + monthly exercise cadence specified.
- [ ] §8 combos ≤10 capsules total.
- [ ] §8.5 master 24-hour day plan present, integrates supplements + meals + exercise + breathwork + light + sleep, resolves all §10 conflicts.
- [ ] §9 monthly cost broken down by line + brick-and-mortar address included.
- [ ] §10.1–10.6 all populated.
- [ ] §10.1 includes conventional first-line drugs for THIS ailment with interactions.
- [ ] §10.3 supplement↔food matrix populated (curcumin/dairy, iron/tea, Mg/Ca, etc.).
- [ ] §10.5 timing rules include caffeine 14:00 cutoff, exercise/sleep alignment.
- [ ] §10.6 strictly-avoid list specific to ailment pathology.
- [ ] **OTC/HOME-ONLY check**: every supplement is consumer-purchasable; every device is consumer-purchasable and self-administrable; every test is self-administered or DTC; NO clinic phototherapy / NO excimer / NO PUVA / NO hospital infusion / NO surgical procedure recommended ANYWHERE.
- [ ] **Sovereignty check**: §11/§12/§13.5/§14 frame the user as sovereign over their body; physician involvement is optional, not required.
- [ ] §11.0 clinical scoring instrument named with measurement cadence.
- [ ] §11.5 comorbidity screening list populated.
- [ ] §13.5 patient-facing primer 150–250 words present.
- [ ] §14 closing paradigm re-affirms forbidden + allowed sources.
- [ ] Homeopathy section grades remedies T or H only.
- [ ] No forbidden language anywhere.
- [ ] 7-day meal plan with exact gram quantities.
- [ ] Word count: 2,500–5,500 for narrow ailments; **4,500–8,500 for moderately complex; up to 12,000 for high-complexity multi-system ailments with ≥5 prescription drug classes in §10.1** (e.g. psoriasis, T2D, IBD, Hashimoto's, RA, lupus, depression with co-prescriptions).
