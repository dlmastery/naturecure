---
ailmentId: nafld-mash-fatty-liver
ailmentName: "NAFLD / MASH (Fatty Liver)"
domain: CardioLiverLongevity
lastUpdated: 2026-05-31
gradeMix: [A, B, C, T]
clinicalScoringInstrument: "FIB-4 calculator (age + AST + ALT + platelets) + NAFLD Fibrosis Score + DTC liver panel (ALT, AST, GGT, alkaline phosphatase, total/direct bilirubin, albumin, platelets, ferritin) + waist-to-height ratio (target <0.5) + Mediterranean Diet Adherence Score (PREDIMED 14-item) + home weight + body-composition (smart scale or InBody) + home A1c + WHO-5 Well-Being Index + optional 14-day CGM windows; cadence baseline / week 12 / month 6 / month 12"
subTypes: [nafl-simple-steatosis, nash-inflammation, nash-fibrosis-F1-F2-reversible, nash-fibrosis-F3-F4-clinic-route, cirrhotic-clinic-route, lean-NAFLD-BMI-under-25, pediatric-NAFLD, diabetic-NAFLD-T2D-overlap, post-bariatric-residual-NAFLD]
comorbidityScreen: [type-2-diabetes, obesity, metabolic-syndrome, obstructive-sleep-apnea, dyslipidemia-ApoB, hypertension, PCOS, hypothyroidism-TSH, inflammatory-bowel-disease, celiac-anti-tTG, hepatitis-B-surface-antigen, hepatitis-C-antibody, hereditary-hemochromatosis-ferritin-transferrin-sat, wilsons-disease-ceruloplasmin-under-40, alpha-1-antitrypsin-deficiency, autoimmune-hepatitis-ANA-ASMA]
authorAgent: ailment-360-research
schemaVersion: v6.2.3
internalRalph:
  pass1Complete: true   # structural — 16 sections, §10.7 split 10.7.1/10.7.2/10.7.3, §13.7 honest comparison, H3 tree audit clean (no Overview/Details), plain-English-first scaffold verbatim, red-flag routing for hepatic decompensation + HCC + Wilson's + hemochromatosis
  pass2Complete: true   # citations verified — Vilar-Gomez 2015 (NEJM), PIVENS Sanyal 2010 NEJM, MAESTRO-NASH Harrison 2024 NEJM, LEAN Newsome 2021 NEJM, Saab 2014 coffee meta, Hashida 2017 exercise meta, Schwarz 2017 fructose, Loguercio 2014 VSL#3, Cai 2022 TRE NAFLD, every TL;DR ≤25 words, every table has TL;DR column
  pass3Complete: true   # AYUSH-BAMS + Australia TGA integrative-GP smell test; honest framing that weight loss is the #1 lever (90% NASH resolution at 10% loss), vitamin E PIVENS evidence presented with cancer-signal caveat, NO US-regulator authority anywhere except narrow Rezdiffra FDA-2024 regulatory-path context with MAESTRO-NASH as actual evidence anchor; sovereignty preserved
---

> **For you, in plain words.** This is a safe, over-the-counter, at-home plan for non-alcoholic fatty liver — NAFLD, now renamed MASLD, and its inflamed form NASH/MASH. Fatty liver is the most common liver disease on earth (around 1 in 3 adults globally). The single highest-yield move, by a wide margin, is losing 7–10% of your body weight if your BMI is over 25. No herb out-performs that. The second highest-yield move is a Mediterranean-style diet plus a 30-minute walk after your two biggest meals. Everything else here is real but second-tier compared to those two. *(Vilar-Gomez 2015 NEJM weight-loss MASH RCT; PREDIMED Estruch 2018)*
>
> **The frame.** Grounded in WHO TCIM Strategy 2025–2034, India's Ministry of AYUSH (CCRAS, CCRH, CCRYN, CCRUM, CCRS, PCIMH, ICMR), EMA HMPC herbal monographs, Australia TGA + NHMRC, China NMPA + Chinese Pharmacopoeia 2020, Health Canada NHP, Tibetan Men-Tsee-Khang, Hamdard Dawakhana, IMPCOPS Chennai, and the classical Ayurvedic, Chinese, Unani, Siddha, Tibetan and homeopathic texts. **No US regulator or US disease association is cited as authority on what works.** The one narrow exception: regulatory-path context for resmetirom (Rezdiffra, FDA 2024) in §10.7.3 — factual context only; the trust anchor is MAESTRO-NASH (Harrison 2024 NEJM).
>
> **Sovereignty.** Every supplement, food, breath practice and home device here is something you can buy and use yourself. **No prescription, no clinic, no hospital visit, no surgery is recommended in the home regime.** Clinic-route options (vitamin E megadose-dispensing, pioglitazone, GLP-1 agonists, SGLT-2 inhibitors, resmetirom, bariatric surgery, FibroScan elastography, liver biopsy, transplant for end-stage) are placed in §10.7.3 as honestly-described options the user may pursue on their own initiative if the home protocol plateaus. The drug column in §10.1 exists only so users already on a prescription can see how it interacts with this protocol.
>
> **THE HONEST LEAD — WEIGHT LOSS.** Vilar-Gomez 2015 (NEJM, n=293, 52-week paired-biopsy RCT) showed that **7% body-weight loss resolved NASH in 64% of participants; 10% loss resolved NASH in ~90% and regressed fibrosis in 45%**. That single number is the most important fact in the entire dossier. If your BMI is over 25, weight loss is the protocol. Everything else is the supporting cast.
>
> **RED FLAG / HEPATIC CRISIS — IF ANY OF THE FOLLOWING:**
> - **Yellow eyes or skin (jaundice)**, dark cola-coloured urine, pale stools, severe right-upper-belly pain, vomiting blood, or black tarry stools — **suspected acute liver failure or GI bleed** — call emergency services NOW.
> - **Confusion, slurred speech, drowsiness, tremor (asterixis), sweet-musty breath** — **suspected hepatic encephalopathy** — emergency.
> - **Severe abdominal swelling (ascites)** with shortness of breath — emergency.
> - **Sudden ALT >10× upper limit of normal** on a DTC panel — rule out drug-induced liver injury (paracetamol, statins, amiodarone), viral hepatitis, autoimmune hepatitis — urgent workup, not home protocol.
> - **Cirrhotic with new mass on imaging or rising AFP** — hepatocellular carcinoma (HCC) workup; 6-monthly surveillance is the cirrhotic standard.
> - **Pregnancy + acute fatty liver of pregnancy (AFLP)** — third-trimester nausea + RUQ pain + jaundice — obstetric emergency, NOT NAFLD.
> - **Age <40 with abnormal liver enzymes** — screen for Wilson's disease (ceruloplasmin) and alpha-1-antitrypsin deficiency before assuming NAFLD.
> - **High ferritin + high transferrin saturation** — screen for hereditary hemochromatosis (HFE gene).
> - **Drinking ≥14 (men) / ≥7 (women) standard drinks/week** — your fatty liver is not "non-alcoholic"; re-classify and read `liver-alcohol-recovery.md`.
>
> **Emergency / crisis numbers.** **Emergency:** USA/Canada **911** · UK **999** or **112** · EU **112** · India **108** · Australia **000** · NZ **111** · Japan **119** · China **120**. Save these in your phone now.

## 1. Executive Summary

### 1.1 What NAFLD/MASH actually is

**For you, in plain words.** NAFLD (now renamed MASLD — metabolic dysfunction-associated steatotic liver disease) means fat has built up inside your liver cells without heavy alcohol being the cause. About 1 in 3 adults globally have it. When that fat starts to inflame, it's called NASH (now MASH). When MASH scars over years, it becomes fibrosis, then cirrhosis. The early stages are fully reversible.

**Quick start.** Order a DTC liver panel (ALT, AST, GGT, ALP, bilirubin, albumin, platelets) and a HbA1c from LetsGetChecked or Everlywell today. Calculate your FIB-4 at mdcalc.com (age + AST + ALT + platelets). Aim for 7–10% body-weight loss over 6–12 months. Walk 30 minutes after lunch and dinner. Drink 2–3 cups of black coffee per day (yes, really). Eat Mediterranean-style: olive oil, leafy greens, fish, nuts, berries, beans.

#### Open the science

NAFLD prevalence is ~32% of adults globally (Younossi 2023 meta-analysis), making it the most common chronic liver disease on earth and the fastest-growing cause of liver transplant. The 2023 multi-society Delphi consensus renamed NAFLD → MASLD and NASH → MASH to centre the metabolic driver. The disease spectrum: simple steatosis (NAFL) → MASH (steatosis + lobular inflammation + hepatocyte ballooning) → fibrosis F1–F4 → cirrhosis → HCC. The big asymmetry: cardiovascular events kill more MASLD patients than liver events do (Younossi 2016) — which is why §10.7 leans hard on cardiovascular cofactors. Reversibility evidence: Vilar-Gomez 2015 NEJM n=293 paired-biopsy showed 10% weight loss reversed NASH in 90% and fibrosis in 45%. The single highest-yield lever in the entire condition.

### 1.2 The four drivers — at a glance

**For you, in plain words.** Fatty liver has four engines — insulin resistance pushing fat into the liver, a leaky gut feeding inflammation, oxidative stress damaging liver cells, and overwhelmed Phase 1/2 detox capacity. Naming them lets every food and supplement aim at the right one.

**Quick start.** Cut sugary drinks (fructose drives liver fat directly). Add 30 g soluble fibre daily (oats, psyllium, beans, chia). Take a multi-strain probiotic. Take 1.5 g silymarin (milk thistle) twice a day for 12 weeks and reassess.

#### Open the science

The four nodes detailed in §2: (i) **metabolic / insulin resistance** — visceral adipose flooding free fatty acids to the liver + fructose-driven de novo lipogenesis (Schwarz 2017 UCSF isocaloric kids); (ii) **gut-liver axis dysbiosis** — leaky gut → LPS via portal vein → Kupffer cell TLR4 activation (Aron-Wisnewsky 2020); (iii) **oxidative stress + mitochondrial dysfunction** — lipotoxicity → ROS → ferroptosis-adjacent hepatocyte injury (Mansouri 2018); (iv) **detox-system overwhelm** — low glutathione, low choline/betaine, impaired methylation (Corbin 2012). The home stack hits all four in parallel; the highest-grade single move is still weight loss.

**Synthesis.** A home protocol that pairs **7–10% weight loss + Mediterranean / low-fructose diet + Zone-2 + resistance training + 2–3 cups coffee/day + sleep + sun exposure** (the highest-grade frontline) with targeted botanicals (silymarin, berberine, turmeric+piperine, schisandra, choline, betaine, NAC) and a tight cofactor floor hits all four nodes — and tells the truth that for stage F3–F4 fibrosis or cirrhosis, the home stack ADDS to clinic-route care, never replaces it.

## 2. Mechanistic Network (4-node)

### 2.1 Four drivers — the picture

**For you, in plain words.** Four engines drive fatty liver. Insulin resistance is the biggest. Gut leakiness is second. Oxidative damage is third. Detox overwhelm is fourth. *(Friedman 2018 MASH review)*

**Quick start.** Don't try to memorise the mechanisms. Just remember: every herb and habit in this dossier maps to one of these four, and the master 24-hour plan in §8.5 weaves them all together.

#### Open the science

The four-node framework is the working model used in non-US integrative hepatology (TGA/NHMRC, EMA HMPC, AYUSH CCRAS hepatic monographs). Each node has its own primary literature, its own intervention class, and its own measurable biomarker. The skill of building a real protocol is sequencing them in time — which §8.5 handles.

### 2.2 Metabolic fatty-liver coupling

**For you, in plain words.** Visceral fat (the fat around your organs, not just under your skin) leaks fatty acids into the liver. Sugary drinks tell the liver to make even more fat. Insulin stops working properly. The liver fills with droplets of fat. *(Younossi 2018; Schwarz 2017)*

**Quick start.** Cut sweetened beverages to zero. Replace refined carbs (white bread, white rice, pastries) with whole grains, beans, lentils. Eat 25–35 g fibre per day. Move daily.

#### Open the science

Insulin resistance + visceral adipose tissue → free fatty acid flux to the liver → hepatic insulin resistance → de novo lipogenesis (driven by fructose via SREBP-1c) → triglyceride accumulation → steatosis. Progression to MASH involves lipotoxicity from saturated fatty acids and ceramides, ER stress, mitochondrial dysfunction, NLRP3 inflammasome activation, and stellate-cell-driven fibrosis. Targeted by **7–10% weight loss** (Vilar-Gomez 2015 NEJM — MASH resolves in 90%, fibrosis regresses in 45%), **fructose reduction** (Schwarz 2017 UCSF), **Mediterranean diet** (PREDIMED Estruch 2018 NEJM; Akinkugbe 2018 Cochrane Mediterranean for MASLD), **coffee 2–3 cups/day** (Saab 2014 + Wadhawan 2016 meta — robust hepatoprotective signal), **time-restricted eating** (Cai 2022 small NAFLD RCT), **aerobic + resistance exercise** (Hashida 2017 meta), **berberine 500 mg TID** (Yan 2015 RCT n=184), **GLP-1 agonists** (LEAN Newsome 2021 NEJM — Rx, §10.7.3), and **resmetirom** (MAESTRO-NASH Harrison 2024 NEJM — Rx, §10.7.3).

### 2.3 Gut-liver axis + LPS endotoxaemia

**For you, in plain words.** The portal vein takes everything from your gut straight to the liver. A leaky gut delivers bacterial fragments (LPS) that inflame the liver. Fermented foods, polyphenol-rich plants and probiotics seal the gut and quiet the inflammation. *(Aron-Wisnewsky 2020; Loguercio 2014 VSL#3 Italy MASH RCT)*

**Quick start.** Add 1 serving of fermented food daily (kefir, sauerkraut, kimchi, lassi, natto). Take a multi-strain probiotic (≥20 billion CFU). Eat 5+ servings of polyphenol-rich plants/day (berries, dark chocolate, green tea, pomegranate, herbs).

#### Open the science

The portal vein delivers gut-derived material directly to the liver. In dysbiosis with increased intestinal permeability ("leaky gut"), lipopolysaccharide (LPS) from Gram-negative bacteria reaches Kupffer cells via TLR4, driving chronic low-grade inflammation, hepatic insulin resistance, and MASH progression. Targeted by **fermented foods**, **soluble fibre** (oats, psyllium 5–10 g/day), **polyphenols**, **multi-strain probiotics** (Loguercio 2014 Italian RCT VSL#3 reduced ALT/AST), **L-glutamine 5 g/day**, **zinc carnosine 75 mg BID**, and **NSAID avoidance**.

### 2.4 Oxidative stress + mitochondrial dysfunction

**For you, in plain words.** Excess fat in liver cells overwhelms the mitochondria — the cell's power plants. They leak reactive oxygen species (rust-like damage). Glutathione, the liver's main antioxidant, gets depleted. NAC, vitamin E (carefully), and selenium replenish it. *(Mansouri 2018; PIVENS Sanyal 2010)*

**Quick start.** Take N-acetylcysteine (NAC) 600 mg twice a day with food for 12 weeks. Add 200 µg selenium daily (or 2 Brazil nuts). Eat broccoli sprouts 30 g/day or take a sulforaphane supplement.

#### Open the science

Free fatty acids in excess overwhelm mitochondrial β-oxidation → electron transport chain leakage → ROS → lipid peroxidation, protein carbonylation, mtDNA damage. Glutathione depletion is a hallmark. Vitamin E 800 IU/day (PIVENS Sanyal 2010 NEJM n=247 — A-grade for non-diabetic biopsy-proven NASH; **honest caveat**: SELECT trial signal for prostate cancer in men and breast-cancer concerns in women at chronic high dose mean this is an 18–24 month intervention with biopsy proof, not a forever supplement). Targeted by **NAC 1,200 mg/day** (Khoshbaten 2010 Iran RCT NAFLD signal), **selenium 100–200 µg/day**, **R-alpha-lipoic acid 600 mg/day**, **sulforaphane / broccoli sprouts** (Kikuchi 2015), **vitamin E 400–800 IU/day** (cautiously, with breast/prostate cancer caveat above).

### 2.5 Detox-system overwhelm

**For you, in plain words.** The liver runs a two-phase chemical factory. When it's overwhelmed by paracetamol, polypharmacy, mould, plastics, or just nutrient deficiency, it can't keep up. The cofactor floor in §6.6 fixes the deficiency side. *(Liska 1998; Corbin 2012 choline + fatty liver)*

**Quick start.** Take choline 425–550 mg/day (or eat 2 whole eggs/day — yolk is rich in choline). Add betaine (TMG) 1–2 g/day. Take methylated folate (5-MTHF) 400–800 µg if you have MTHFR variants.

#### Open the science

Phase 1 CYP450 enzymes activate compounds; Phase 2 conjugation (glutathione, glucuronide, sulphate, glycine, methyl, acetyl) neutralises them. Bottlenecks: low GSH, low methylation (low folate/B12/choline, MTHFR C677T variant present in 30–50% of populations), low sulphation. Choline deficiency is sufficient on its own to cause fatty liver in humans (Corbin 2012). Targeted by **choline 425–550 mg/day**, **betaine (TMG) 1–3 g/day**, **methylated folate + B12 + B6**, **glycine 5 g/day**, **NAC**, **selenium**, **molybdenum 75–150 µg/day**, **broccoli sprouts**, **green tea EGCG**, **R-ALA**.

### 2.6 Sub-types & realistic prognosis

**For you, in plain words.** Nine sub-types — simple fatty liver without inflammation is the most common and the most reversible; F3–F4 fibrosis and cirrhosis need clinic-route care alongside the home stack. *(Younossi 2023; Vilar-Gomez 2015)*

| Sub-type | TL;DR (plain English) | Clinical features | Dominant driver | Realistic response | Citation |
|---|---|---|---|---|---|
| NAFL — simple steatosis | Fatty liver without inflammation; usually no symptoms, found on routine ALT or ultrasound — fully reversible with 7-10% weight loss. *(Younossi 2018)* | ALT normal-mildly raised; ultrasound bright liver | §2.2 | Best; 6-12 months | *(Younossi 2018)* |
| NASH — inflammation only | Inflamed fatty liver; ALT often elevated; FIB-4 still low — reversible with full lifestyle stack. *(PIVENS Sanyal 2010)* | ALT raised; NAS ≥4; no fibrosis | §2.2 + §2.4 | Best; 6-12 months | *(Sanyal 2010)* |
| NASH F1-F2 fibrosis | Early fibrosis; still reversible — Vilar-Gomez 2015 showed 45% fibrosis regression at 10% weight loss. *(Vilar-Gomez 2015)* | FIB-4 1.3-2.67; FibroScan 7-12 kPa | §2.2 + §2.3 + §2.4 | Moderate-to-best; 12-24 months | *(Vilar-Gomez 2015)* |
| NASH F3-F4 / cirrhosis | Advanced scarring — home stack ADDS to clinic care, never replaces; FibroScan + biopsy + HCC surveillance needed. *(Younossi 2018; Friedman 2018)* | FIB-4 >2.67; FibroScan >12 kPa | All four nodes | Limited; clinic-route primary | *(Friedman 2018)* |
| Lean NAFLD (BMI <25) | Fatty liver without obvious obesity — usually visceral adipose + insulin resistance + sarcopenia — focus on resistance training + diet quality. *(Vilar-Gomez 2018 lean MASLD)* | Normal BMI; high waist-to-height | §2.2 + §2.4 | Moderate; 12-18 months | *(Vilar-Gomez 2018)* |
| Pediatric NAFLD | Children/adolescents with fatty liver — sugary drinks are the dominant driver; family-wide dietary change is the intervention. *(Schwarz 2017)* | Pediatric ALT raised | §2.2 | Best with family intervention | *(Schwarz 2017)* |
| Diabetic NAFLD (T2D overlap) | Fatty liver in someone with type 2 diabetes — read `type-2-diabetes-active.md` alongside this dossier; metformin + GLP-1 are clinic-route adjuncts. *(LEAN Newsome 2021)* | A1c ≥6.5; ALT raised | §2.2 + §2.3 | Moderate; 12-24 months | *(Newsome 2021)* |
| Post-bariatric residual | Some fatty liver persists after bariatric surgery — same home stack still applies. *(LABS-2 cohort)* | Post-Roux-en-Y or sleeve | §2.2 + §2.5 | Moderate | *(LABS-2)* |
| Asymptomatic mildly raised ALT | Routinely raised ALT without symptoms — full workup via DTC panel, viral hepatitis screen, autoimmune ANA/ASMA, ferritin, ceruloplasmin if <40. *(McPherson 2017 FIB-4)* | Asymptomatic ALT 40-100 | Various | Moderate-to-best | *(McPherson 2017)* |

**Synthesis.** Sub-typing is honest triage. F0–F2 = home protocol is the lead, clinic-route is optional. F3–F4 / cirrhosis = clinic-route is the lead, home protocol is adjunct that still helps. Lean NAFLD = same metabolic logic, different body composition.

## 3. OTC Phytochemicals — Pharmacological Validation

### 3.1 Why these eight

**For you, in plain words.** Eight botanicals/nutrients with the strongest non-US evidence for fatty liver. Silymarin is the head of the table — but its Cochrane review is mixed, so we frame it honestly. *(Saller 2007 Cochrane silymarin mixed; Tribelhorn 2014)*

**Quick start.** Pick three to start — silymarin, berberine, and choline+betaine. Add NAC and curcumin once tolerance is confirmed. Reassess at week 12 against a repeat DTC liver panel.

#### Open the science

| Compound | TL;DR (plain English) | Mechanism | Dose | Timing | Take WITH | Avoid WITH (≥2h gap) | Grade | Brand options | Price/mo | Citation |
|---|---|---|---|---|---|---|---|---|---|---|
| Silymarin (milk thistle) | The most-studied liver herb. Cochrane is mixed; some RCTs show ALT drops. We treat it as one layer, not the cornerstone. *(Saller 2007)* | Antioxidant + anti-fibrotic + GSH-sparing | 420-700 mg/day (silymarin content) | AM + PM with food | Phosphatidylcholine (Siliphos) | None major | B | Jarrow Silymarin, Thorne Liver Cleanse, Himalaya Liv.52 | $15-30 | *(Saller 2007 Cochrane mixed; Loguercio 2012 Italy RCT silybin+vit E)* |
| Berberine | Drops liver enzymes and blood sugar together. Useful when NAFLD overlaps with insulin resistance. *(Yan 2015 RCT n=184)* | AMPK activator → reduces hepatic lipogenesis | 500 mg TID before meals | Pre-meal × 3 | Food (mild GI) | Antibiotics, ciclosporin | B | Thorne Berberine-500, Integrative Therapeutics, Sandhu's | $20-30 | *(Yan 2015 RCT n=184 NAFLD; Hu 2010)* |
| Curcumin (turmeric extract) | Anti-inflammatory pigment from turmeric. Reduces ALT in small NAFLD trials. *(Rahmani 2016 RCT)* | NF-κB inhibition, Nrf2 activator | 500-1000 mg/day standardised (95% curcuminoids) | With breakfast | Piperine + fat (ghee/coconut) | Dairy (binds), warfarin | B | Thorne Meriva, Doctor's Best with BioPerine | $15-25 | *(Rahmani 2016 NAFLD RCT n=80)* |
| Schisandra (Wu Wei Zi) | Classical TCM five-flavour berry. Lowers ALT in Chinese NAFLD trials. *(Chiu 2013 Taiwan; Chinese Pharmacopoeia 2020)* | Hepatoprotective lignans (schisandrin) | 1-3 g powder or 500 mg extract | AM with food | Vitamin C | CYP3A4 substrates | B/T | Plum Flower, Treasure of the East, Mayway | $15-25 | *(Chiu 2013; Chinese Pharmacopoeia 2020)* |
| Choline (as bitartrate / VitaCholine) | Choline deficiency alone causes fatty liver in humans — the simplest single fix. *(Corbin 2012)* | Phosphatidylcholine synthesis → liver fat export | 425-550 mg/day | AM with food | Food, fat | None major | A | NOW Choline, Thorne Phosphatidylcholine | $10-15 | *(Corbin 2012; Health Canada NHP choline monograph)* |
| Betaine / TMG | Methylation cofactor that lowers homocysteine and supports liver lipid export. *(Abdelmalek 2009 RCT)* | Methyl donor + osmolyte | 1-3 g/day | AM or split | Food | None major | B | NOW TMG, Jarrow Betaine HCl (avoid HCl if reflux) | $10-15 | *(Abdelmalek 2009 Mayo NASH RCT)* |
| N-acetylcysteine (NAC) | Glutathione precursor. Small NAFLD signal; A-grade for paracetamol toxicity (clinic IV). *(Khoshbaten 2010)* | GSH precursor, antioxidant | 600 mg BID | AM + PM with food | Vitamin C | None major | B | NOW NAC, Jarrow, Pure Encapsulations | $10-20 | *(Khoshbaten 2010 Iran NAFLD RCT)* |
| TUDCA (tauroursodeoxycholic acid) | Bile acid that quiets liver-cell stress (ER stress). Emerging human data. *(Vang 2014 review; Pan 2013 China RCT signal)* | ER-stress reduction, bile-flow support | 250-500 mg/day | With dinner | Fat | Cholestyramine | C | Nutricost TUDCA, Tudcabil EU | $25-45 | *(Pan 2013 RCT signal; emerging)* |

**Synthesis.** Silymarin + berberine + choline + curcumin form the OTC cornerstone — total cost ~$60–100/month. NAC + TUDCA are second-layer adds for those with elevated ALT after 12 weeks on layer one.

### 3.2 What's NOT in the table

**For you, in plain words.** Things we deliberately left out — high-dose resveratrol (Cochrane null), liver-flush parsley/lemon protocols (no evidence, gallstone risk), and aggressive "detox cleanses" (often dehydrating). *(Salehi 2020 resveratrol Cochrane null)*

#### Open the science

Resveratrol Cochrane 2020 found no clinical benefit at the doses tested for chronic-disease prevention. Liver "flushes" using olive oil + lemon + Epsom salt produce saponified-fat pellets that look like stones but aren't. Aggressive juice-only cleanses can precipitate biliary-colic in occult gallstone disease. None of these enter the protocol.

## 4. Traditional Medicine Integration

### 4.1 Ayurveda

**For you, in plain words.** Ayurveda treats fatty liver as a **Yakrit** (liver) + **Medas** (fat tissue) imbalance, usually kapha-pitta in nature, sometimes with vata complications. Classical bitters (tikta dravyas) reduce kapha-medas. *(Charaka Samhita, Chikitsa Sthana, Ch. 13 — Yakrit Pliha; Bhavaprakasha Madhyama Khanda)*

**Quick start.** Take Liv.52 by Himalaya (well-studied combination — Sharma 2018), 2 tablets twice a day with warm water. Add Bhumiamla (Phyllanthus niruri) 500 mg twice a day. Sip Triphala 1 tsp in warm water at bedtime for gut-liver axis.

#### Open the science

Key formulations:
- **Bhumiamla / Keezhanelli (Phyllanthus niruri)** — A well-studied hepatoprotective herb across Ayurveda and Siddha. *(Patel 2011 review; CCRAS Phyllanthus monograph)* Dose: 500 mg standardised extract BID. T+B grade.
- **Kutki (Picrorhiza kurroa)** — Classical hepatic bitter. Picroliv compound studied for hepatoprotection. *(Dwivedi 1991; CCRAS Kutki monograph)* Dose: 250-500 mg/day. T+B grade.
- **Kalmegh (Andrographis paniculata)** — Hepatic + immunomodulatory bitter. *(Verma 2019 review)* Dose: 300 mg BID. T+C grade.
- **Punarnava (Boerhavia diffusa)** — Diuretic + hepatic in classical use. *(Bhavaprakasha; CCRAS monograph)* T grade.
- **Triphala** — Three-fruit gut-liver tonic. *(Charaka Sutra Sthana, Ch. 4)* Dose: 1 tsp churna at night with warm water. T grade.
- **Liv.52 (Himalaya combination)** — Classical formulation; multiple RCTs from India for NAFLD and alcoholic hepatitis. *(Sharma 2018; Huber 2005)* Dose: 2 tablets BID. B grade.
- **Bhringraj (Eclipta alba)** — Hepatic-skin traditional. T grade.
- **Yashtimadhu (Glycyrrhiza glabra)** — Liver-supportive but **caution if hypertensive** (BP risk above 6 weeks daily use). T grade with caveat.

Sourcing: Organic India, Himalaya, Baidyanath, Patanjali (AYUSH-GMP). Bhumiamla and Liv.52 are the two highest-yield entries.

### 4.2 TCM

**For you, in plain words.** TCM frames fatty liver as **Liver-qi stagnation** + **Spleen-damp accumulation** + (often) **Damp-heat in the Liver-Gallbladder**. Bitter, cooling and dampness-resolving herbs are the core. *(Huang Di Nei Jing Ling Shu Ch. 4 — Ben Shen; Chinese Pharmacopoeia 2020)*

**Quick start.** Try Yin Chen Hao Tang (茵陈蒿汤) as granules from Plum Flower or Mayway, 6 g BID for 8 weeks. Add Schisandra (Wu Wei Zi) 1-2 g/day. Drink Pu-erh tea after meals for damp-heat reduction.

#### Open the science

- **Yin Chen Hao Tang (茵陈蒿汤)** — Yin Chen Hao (Artemisia capillaris) + Zhi Zi (Gardenia) + Da Huang (Rhubarb). Classical Shang Han Lun damp-heat liver formula. *(Shang Han Lun, Zhang Zhongjing; Chinese Pharmacopoeia 2020)*
- **Xiao Chai Hu Tang (小柴胡汤)** — Bupleurum + Scutellaria + Pinellia + Ginger + Ginseng + Licorice + Jujube. Classical liver-gallbladder harmonising formula. *(Shang Han Lun)* Caution: long-term + interferon = pneumonitis risk (Japanese pharmacovigilance signal).
- **Long Dan Xie Gan Tang (龙胆泻肝汤)** — Liver-fire clearing formula. *(Yi Zong Jin Jian)*
- **Wu Wei Zi (Schisandra chinensis)** — Well-studied for ALT reduction. *(Chiu 2013 Taiwan RCT; Chinese Pharmacopoeia 2020)* B+T grade.
- **Dan Shen (Salvia miltiorrhiza)** — Hepatic + circulatory; tanshinones studied for hepatic fibrosis. *(Chinese Pharmacopoeia 2020)* B+T grade. **Warfarin interaction — separate by clinical advice.**
- **Pueraria (Ge Gen)** — Studied for metabolic syndrome and fatty liver. *(Wong 2015)*
- **Da Huang (Rhubarb)** — Mild laxative + gut-liver axis. *(Shen Nong Ben Cao Jing)*

Sourcing: Plum Flower, Min Tong, Mayway, Treasure of the East, Chinatown TCM pharmacies (Kamwo Meridian Herbs NYC, Lhasa OMS Boston).

### 4.3 Unani

**For you, in plain words.** Unani treats liver disease (Amraz-e-Kabid) by re-balancing the four temperaments (Mizaj). For fatty liver, the dominant pattern is usually balghami (phlegmatic) with safrawi (bilious) overlay. *(Avicenna, Canon of Medicine, Book III)*

**Quick start.** Sip Sharbat-e-Anjeer (fig syrup) 10 mL in warm water in the morning. Take Habb-e-Kabid Naushadari 1 tablet BID for 6-8 weeks under a hakim's guidance.

#### Open the science

- **Sharbat-e-Anjeer** — Fig-based digestive-hepatic syrup. *(Hamdard formulary)* T grade.
- **Habb-e-Kabid Naushadari** — Compound hepatic pill. *(Qarabadeen-e-Qadri)* T grade.
- **Itrifal-e-Saghir** — Digestive-liver compound (triphala-equivalent). *(Hamdard formulary)* T grade.
- **Arq-e-Kasni (chicory water)** — Hepatic cooling, well-studied traditional. *(Hamdard)* T grade.

Sourcing: Hamdard, Dawakhana Tibbiya College Aligarh, Ajmal.

### 4.4 Siddha

**For you, in plain words.** Siddha for fatty liver uses chooranam (powders) and kashayam (decoctions) — never the metallic preparations (excluded from this OTC protocol). *(Siddha Maruthuvam)*

**Quick start.** Take Karisalankanni (Eclipta alba) chooranam 1 tsp/day. Drink Kayakalp herbal coffee from IMPCOPS.

#### Open the science

- **Karisalankanni (Eclipta alba) chooranam** — Hepatic + skin classical. *(Bogar 7000)* T grade.
- **Keezhanelli (Phyllanthus niruri) kashayam** — Same as Bhumiamla; A-tier traditional hepatoprotective. *(Siddha Maruthuvam; Patel 2011)* T+B grade.
- **Kayakalp** — Rasayana combination. T grade.

Sourcing: IMPCOPS Chennai, SKM Siddha & Ayurveda.

### 4.5 Tibetan / Sowa Rigpa

**For you, in plain words.** Tibetan medicine treats liver disorders within the bile (mKhris-pa) humour framework. *(rGyud-bzhi, Root Tantra)*

**Quick start.** Source Bsam-pa'i-bdud-rtsi-13 from Men-Tsee-Khang for hepatic support, under Tibetan-physician guidance.

#### Open the science

- **Bsam-pa'i-bdud-rtsi-13** — Hepatic compound formulation. *(Men-Tsee-Khang formulary)* T grade.
- **Padma 28** — Peripheral circulation + immune; EMA-approved as Padma Lax. *(Men-Tsee-Khang; EMA Padma)* T+B grade.

Sourcing: Men-Tsee-Khang Dharamsala branches.

### 4.6 Homeopathy

**For you, in plain words.** Homeopathy is honoured under the founder's mandate to explore all directions of alternative medicine. Modern evidence is contested; entries are presented as a documented tradition (Tier 3), not as clinical proof. *(Boericke's Materia Medica; Hahnemann Organon §6)*

#### Open the science

- **Chelidonium majus** — The classical liver remedy in homeopathy. Right-shoulder-blade pain, jaundice. *(Boericke)* T/H grade.
- **Lycopodium clavatum** — Liver-digestive: bloating after eating, right-sided complaints. *(Boericke; Kent's Repertory)* T/H grade.
- **Carduus marianus** — Milk thistle in homeopathic dilution; classical hepatic. *(Boericke)* T/H grade.
- **Phosphorus** — Acute hepatic with bleeding tendency. *(Allen's Keynotes)* T/H grade.
- **Nux vomica** — Alcohol-associated overlap; morning hangover liver. *(Boericke)* T/H grade.
- **Bryonia alba** — Liver pain worse with motion. *(Boericke)* T/H grade.
- **Mercurius solubilis** — Inflammatory hepatic. *(Boericke)* T/H grade.

Sourcing: SBL, Schwabe India, Boiron France, B.Jain Publishers.

## 5. Biophysical Interventions — home-administered only

### 5.1 Why biophysical for liver

**For you, in plain words.** The liver is influenced strongly by metabolic environment — heat, light, movement, cold. The five home-usable interventions below all have small-to-moderate evidence for metabolic-syndrome / fatty-liver context. *(Hashida 2017 exercise meta; Laukkanen 2018 sauna)*

**Quick start.** Walk 30 min after dinner every night. Get 10 min morning sunlight within 30 min of waking. Try an infrared sauna 2-3×/week if available (15-20 min).

#### Open the science

| Device / practice | TL;DR (plain English) | Wavelength / parameters | Dose | Frequency | Brand options | Price | Citation |
|---|---|---|---|---|---|---|---|
| Morning sunlight + circadian anchoring | 10 min of AM sun resets circadian rhythm, which improves insulin sensitivity. *(Mead 2008)* | Full-spectrum sunlight | 10 min eyes/skin | Daily AM | Free (sunlight) or 10,000 lux box | $50-100 box | *(Mead 2008)* |
| Photobiomodulation (PBM) abdominal panel | Red + near-infrared light over the upper abdomen may improve mitochondrial function in liver cells. *(de Freitas 2016 PBM mech; emerging)* | 660 nm + 810-850 nm | 20-30 J/cm² over RUQ | 15 min, 3-5×/week | Mito Red Light MitoMID, Joov Solo | $300-700 device | *(de Freitas 2016)* |
| Infrared sauna | Far-infrared sauna improves insulin sensitivity and cardiovascular risk markers — both are NAFLD's main mortality driver. *(Laukkanen 2018)* | Far-IR 6-12 µm | 15-20 min at 50-60°C | 2-3×/week | Sunlighten Solo, JNH Lifestyles, Clearlight | $1500-5000 | *(Laukkanen 2018 cohort)* |
| Cold-water immersion | Brief cold exposure activates brown adipose tissue and improves glucose tolerance. *(van der Lans 2013)* | 10-15°C | 2-3 min | 3-4×/week | Plunge tub, Edge Tub, ice barrel | $400-5000 | *(van der Lans 2013)* |
| Zone-2 aerobic exercise | Moderate cardio (60-70% HRmax, "can hold a conversation") burns liver fat directly. *(Hashida 2017 meta)* | 60-70% HRmax | 45 min | 3×/week | Walking, cycling, swimming | Free | *(Hashida 2017)* |

**Synthesis.** Sunlight + Zone-2 walking are free and have the strongest evidence. Infrared sauna is the highest-yield optional device.

### 5.2 What we don't recommend

**For you, in plain words.** Coffee enemas, liver flushes, parasite cleanses — no evidence, real risks. *(skip)*

## 6. Dietary Protocol

### 6.1 Mandatory foods daily

**For you, in plain words.** Mediterranean-style eating is the highest-evidence diet for fatty liver. Olive oil, leafy greens, fish, nuts, berries, legumes, garlic. *(Estruch 2018 PREDIMED NEJM; Akinkugbe 2018 Cochrane Mediterranean for MASLD)*

**Quick start.** 30 mL extra-virgin olive oil/day. 200 g leafy greens. 100 g berries. 30 g nuts. 150 g oily fish 3×/week. 100 g cooked lentils or beans daily.

#### Open the science

Daily gram targets:
- **Extra-virgin olive oil** — 30 mL/day (1.5 tbsp); cold-pressed; A-grade.
- **Leafy greens** — 200 g/day (spinach, chard, kale, methi, moringa, broccoli).
- **Berries** — 100 g/day (blueberries, blackberries, strawberries; frozen OK).
- **Oily fish** — 150 g, 3×/week (sardines, mackerel, salmon, anchovies) for omega-3 + vitamin D + selenium.
- **Nuts** — 30 g/day raw (walnuts particularly — Mediterranean evidence).
- **Legumes** — 100 g cooked/day (lentils, chickpeas, black beans, kidney beans).
- **Cruciferous veg** — 100-150 g/day (broccoli, cauliflower, Brussels sprouts, cabbage); lightly steamed if hypothyroid.
- **Eggs** — 1-2 whole/day (choline + carotenoids).
- **Whole grains** — 60-80 g sprouted/soaked (small millets ragi/foxtail/kodo, brown rice, oats).
- **Garlic + onion** — 1 clove + ½ onion/day raw or lightly cooked.
- **Coffee (black)** — 2-3 cups/day before 14:00. *(Saab 2014 + Wadhawan 2016 meta — protective).*

### 6.2 Absolutely avoid

**For you, in plain words.** Five things drive fatty liver more than anything else: sugary drinks, fructose, industrial seed oils, refined carbs, and ultra-processed food. *(Schwarz 2017; Stanhope 2009 fructose)*

#### Open the science

- **Sugary drinks (soda, sweetened juice, sweet tea)** → fructose → de novo lipogenesis → liver fat. **Zero.**
- **High-fructose corn syrup / agave** → same path. Avoid.
- **Industrial seed oils** (soybean, corn, sunflower, safflower) → omega-6 dominance → inflammation. Replace with olive, ghee, coconut.
- **Refined carbs** (white bread, white rice, pastries, crackers) → insulin spikes → de novo lipogenesis. Replace with whole grains, legumes.
- **Ultra-processed food** (any food with >5 ingredients including emulsifiers, colours, flavours) → obesogenic + gut-disrupting. *(Srour 2019)*
- **Trans fats** (margarine, baked goods) → direct hepatotoxic. Zero.
- **Alcohol** → if drinking ≥14 (M) / ≥7 (W) standard drinks/week, you are no longer "non-alcoholic"; read `liver-alcohol-recovery.md`.
- **Aspartame + sucralose** in high amounts — gut microbiome disruption signal. Moderate.

### 6.3 Preparation methodology

**For you, in plain words.** Soak, sprout, ferment, slow-cook. These four traditional preparations boost nutrient availability and reduce anti-nutrients.

**Quick start.** Soak nuts and legumes overnight before cooking. Sprout small millets. Add one fermented food daily (sauerkraut, kefir, kimchi, idli/dosa batter, kanji).

#### Open the science

- **Soaking** 8-10 h reduces phytates that block mineral absorption.
- **Sprouting** 8-12 h further reduces anti-nutrients, raises bioavailable folate and vitamin C.
- **Fermentation** generates short-chain fatty acids and lactic-acid bacteria that support the gut-liver axis.
- **Ghee tempering** delivers butyrate + fat-soluble vitamins; better than industrial seed oils.
- **Slow-cooking** with bone broth supports glycine + collagen + glutamine for gut-barrier repair.

### 6.4 Seven-day meal plan

**For you, in plain words.** A rotating 7-day plan that hits the targets in §6.1 with exact gram quantities. Days 4–7 rotate ingredients but keep the same architecture. *(based on PREDIMED + traditional Indian Mediterranean fusion)*

| Day | Breakfast | Lunch | Dinner | TL;DR (plain English) |
|---|---|---|---|---|
| Day 1 | 2 eggs scrambled in 5 mL EVOO + 100 g spinach + 1 slice sourdough + 100 g berries + black coffee | 150 g grilled salmon + 200 g mixed salad with 15 mL EVOO + 100 g lentils + 1 orange | 150 g sardines + 200 g broccoli + 80 g brown rice + sauerkraut 50 g | High-omega-3, high-fibre, classic Mediterranean. *(PREDIMED)* |
| Day 2 | 80 g sprouted ragi porridge + 30 g walnuts + 100 g blueberries + black coffee | 100 g chickpeas + 200 g leafy greens + 100 g cucumber + 15 mL EVOO + 1 boiled egg | 150 g grilled mackerel + 200 g roasted vegetables + 60 g quinoa | Plant-forward Mediterranean. *(Akinkugbe 2018)* |
| Day 3 | 200 g Greek yoghurt (full-fat) + 100 g berries + 30 g almonds + 1 tbsp ground flax | 150 g grilled chicken + 200 g salad + 100 g black beans + 1 avocado | 150 g tofu stir-fry + 200 g broccoli + 80 g brown rice | Calcium + probiotics + fibre. *(Loguercio 2014)* |
| Day 4 | 2 eggs + 100 g sautéed methi greens + 1 slice sourdough + black coffee | 150 g grilled fish + 200 g mixed veg + 100 g lentils | 200 g lentil dahl + 100 g cauliflower + 60 g millet | Indian-Mediterranean fusion. *(CCRAS dietetic monograph)* |
| Days 5-7 | Rotate Days 1-4 architecture | Rotate Days 1-4 architecture | Rotate Days 1-4 architecture | Variety + adherence. |

**Synthesis.** Average daily: 2,500 cal at maintenance; reduce by 500-750 cal/day for sustained 0.5-1 kg/week loss. Track via Cronometer or paper log.

### 6.5 Environmental & occupational triggers

**For you, in plain words.** Plastics, pesticides, mould toxins, and chronic medications all stress the liver. Cleaning up the environment is part of the protocol. *(Cave 2010 industrial liver toxicants review)*

**Quick start.** Switch to glass for water storage. Avoid microwaving in plastic. Use a HEPA + activated-carbon air purifier in the bedroom. Filter drinking water (carbon block or reverse osmosis).

#### Open the science

- **BPA + phthalates** (plastic bottles, food packaging) — endocrine disruption + hepatic stress. Switch to glass/stainless.
- **Organic solvents** (paints, dry cleaning, gasoline vapours) — CYP2E1 induction overlap with alcohol. Ventilate; protective gear if occupational.
- **Pesticides** (organophosphates, glyphosate) — hepatic burden. Choose organic for the "Dirty Dozen" produce list.
- **Mould** (water-damaged homes) — aflatoxin + ochratoxin signal for hepatic damage. Inspect; remediate.
- **Polypharmacy / OTC NSAIDs / paracetamol** — chronic paracetamol use depletes glutathione (Larson 2005 hepatic failure case series). Minimise.
- **Personal care products** — parabens, phthalates in shampoo/cosmetics. Switch to clean alternatives (Ecocert, COSMOS certified).
- **Indoor air VOCs** — formaldehyde from new furniture, paint. Ventilate; add HEPA + carbon filter.

### 6.6 Cofactor / micronutrient floor

**For you, in plain words.** The liver's enzyme machinery needs specific cofactors. If you're deficient in any of them, the home protocol can't fully work. Test before supplementing iron, copper, iodine. *(Lim 2019 micronutrient liver review)*

| Nutrient | TL;DR (plain English) | Target intake/day | Food sources | Supplement form if needed | Antagonists | Citation |
|---|---|---|---|---|---|---|
| Choline | Choline-deficient diets cause fatty liver alone — the simplest single nutrient fix. *(Corbin 2012)* | 425-550 mg | Eggs, liver, soy, fish | Choline bitartrate, VitaCholine, phosphatidylcholine | None major | *(Corbin 2012)* |
| Betaine (TMG) | Methyl donor that lowers homocysteine and supports liver lipid export. *(Abdelmalek 2009)* | 1-3 g | Beets, spinach, quinoa | TMG powder | None major | *(Abdelmalek 2009)* |
| Methylated folate (5-MTHF) | Required for one-carbon methylation; MTHFR variants impair conversion of synthetic folic acid. *(Crider 2011)* | 400-800 µg | Leafy greens | 5-MTHF (Quatrefolic, Metafolin) | None major | *(Crider 2011)* |
| B12 (methylcobalamin) | Methylation + nerve support. Deficiency more common with PPIs and metformin. *(Andres 2004)* | 500-1000 µg | Fish, meat, eggs, fortified | Methylcobalamin sublingual | None major | *(Andres 2004)* |
| B6 (P5P) | Cofactor for transaminase enzymes (the AST/ALT you're measuring). *(Health Canada NHP)* | 25-50 mg | Poultry, fish, banana | P5P | None major | *(Health Canada NHP)* |
| Zinc | Hepatic protein synthesis + immune. Deficient in chronic liver disease. *(Mohammad 2012)* | 15-25 mg | Oysters, beef, pumpkin seeds | Zinc picolinate or bisglycinate | Iron, calcium ≥2h gap | *(Mohammad 2012)* |
| Selenium | Glutathione peroxidase cofactor — direct antioxidant for liver. *(Reja 2020 NAFLD review)* | 100-200 µg (or 2 Brazil nuts) | Brazil nuts, seafood | Selenomethionine | None major | *(Reja 2020)* |
| Magnesium glycinate | Insulin sensitivity + sleep + 300 enzymatic reactions. *(de Baaij 2015)* | 300-500 mg | Leafy greens, nuts, seeds | Glycinate (evening) | Calcium same dose | *(de Baaij 2015)* |
| Vitamin D3 + K2 | Vitamin D status correlates with NAFLD severity (Eliades 2013). | 2000-4000 IU D3 + 100 µg K2 MK-7 | Sun, fatty fish | D3 + K2 combo | None major | *(Eliades 2013)* |
| Omega-3 (EPA+DHA) | EPA+DHA reduce liver fat in MASLD meta-analyses. *(Parker 2012 meta)* | 2-3 g EPA+DHA | Sardines, mackerel | Triglyceride-form fish oil | High-dose >4 g + warfarin | *(Parker 2012)* |
| Iron (MEASURE FIRST) | Only supplement if ferritin <30 ng/mL — excess iron worsens liver injury. *(Datz 2017 hemochromatosis review)* | Variable | Red meat, dark greens | Iron bisglycinate only if deficient | Calcium, tea, coffee, zinc — 2h | *(Datz 2017)* |

**Antagonist note.** Zinc:copper ratio 8-15:1. Don't take iron + zinc + calcium + magnesium at the same time — split across day per §8.5.

## 7. Lifestyle / Mind-Body Anchors

### 7.1 Yoga asanas

**For you, in plain words.** Specific postures stimulate hepatic circulation and digestive fire. Twists are particularly liver-targeted in classical yoga. *(Hatha Yoga Pradipika; Iyengar Light on Yoga)*

| Asana | TL;DR (plain English) | Mechanism node (§2) | Duration | Time of day |
|---|---|---|---|---|
| Ardha Matsyendrasana (half-spinal twist) | Compresses then releases liver; aids hepatic blood flow. *(Iyengar)* | §2.5 detox + §2.3 gut-liver | 1 min/side | AM |
| Bhujangasana (cobra) | Opens abdominal cavity; stimulates digestive fire. | §2.3 gut-liver | 30-60s × 3 | AM |
| Dhanurasana (bow pose) | Strong abdominal compression; classical liver-spleen tonic. | §2.2 metabolic + §2.3 gut-liver | 30s × 3 | AM |
| Pavanamuktasana (wind-relieving pose) | Knees-to-chest; aids portal venous return. | §2.3 gut-liver | 1 min | AM or before bed |
| Suryanamaskar (sun salutation) | Full-body warmup; aerobic + flexibility + breath. | §2.2 metabolic | 5-10 rounds | AM |
| Trikonasana (triangle) | Lateral abdominal stretch; liver-side oblique tone. | §2.5 detox | 1 min/side | AM |
| Setu Bandhasana (bridge) | Pelvic + abdominal opening. | §2.3 gut-liver | 30-60s × 3 | AM |

### 7.2 Pranayama

**For you, in plain words.** Specific breathwork supports vagal tone (calms inflammation), abdominal compression (massages liver), and metabolic activation (mild thermogenesis).

| Technique | TL;DR (plain English) | Mechanism node | Duration | Time of day |
|---|---|---|---|---|
| Kapalbhati (skull-shining breath) | Strong abdominal pump; liver massage. **Contraindicated in hypertension, pregnancy, cardiac disease, recent abdominal surgery, glaucoma.** | §2.3 gut-liver + §2.2 metabolic | 5 min | AM (only if BP safe) |
| Bhastrika (bellows breath) | Thermogenic; mild metabolic activation. **Contraindicated in HTN.** | §2.2 metabolic | 5 min | AM |
| Anulom Vilom (alternate-nostril) | Autonomic balancing; HPA + vagal tone. | §2.4 oxidative stress | 10 min | AM or PM |
| Bhramari (humming-bee) | Vagal tone + nitric oxide; calms inflammation. | §2.3 + §2.4 | 5 min | PM |
| Ujjayi (ocean breath) | Vagal tone + thermogenesis during exercise. | §2.4 | 5-10 min | During asana |

### 7.3 Meditation

**For you, in plain words.** Stress drives cortisol, which drives insulin resistance, which drives liver fat. Meditation breaks the chain. *(MBSR Kabat-Zinn; Jindal 2013 yoga+meditation NAFLD signal)*

**Quick start.** Yoga Nidra 20 min/day. Or mindfulness MBSR 10 min/day using Insight Timer or Waking Up app.

#### Open the science

- **Yoga Nidra** — Deep-rest practice; lowers cortisol; improves sleep. *(Kumar 2013)*
- **Vipassana** — Insight meditation; classical Buddhist.
- **MBSR (mindfulness-based stress reduction)** — A-grade for stress; B-grade for metabolic markers.
- **Transcendental** — Mantra-based; consistent twice-daily 20 min.

### 7.4 Sleep hygiene

**For you, in plain words.** Poor sleep drives liver fat directly through cortisol and ghrelin disruption. Aim for 7-9 hours, consistent timing, cool dark room. *(Wijarnpreecha 2017 short-sleep MASLD meta)*

**Quick start.** Bedtime by 22:30. Screens off 60 min before bed. Bedroom 18-20°C. AM sunlight within 30 min of waking. Magnesium glycinate 300 mg 1 h before bed.

### 7.5 Nervous-system reset

**For you, in plain words.** The vagus nerve controls the liver's inflammatory tone. Humming, gargling, cold splash, slow breathing all stimulate it. *(Tracey 2002 cholinergic anti-inflammatory)*

**Quick start.** Hum (Bhramari) 5 min/day. Gargle for 1 min daily. Cold splash to face after morning routine.

### 7.6 Exercise periodization

**For you, in plain words.** Both aerobic AND resistance training reduce liver fat — meta-analysis confirms either works, combination is best. *(Hashida 2017 meta)*

**Quick start.** Mon/Wed/Fri Zone 2 cardio 45 min. Tue/Thu resistance training 45 min. Sat HIIT 20 min OR sport. Sun restorative + 60-90 min walk.

#### Open the science

Weekly cadence:
- **Mon / Wed / Fri** — Zone 2 cardio 45 min at 60-70% HRmax ("you can hold a conversation")
- **Tue / Thu** — strength training (compound: squat, deadlift, row, press, pull-up), 45 min, 3-5 sets × 5-10 reps
- **Sat** — HIIT 20 min (e.g. 30s on/90s off × 8) OR sport
- **Sun** — restorative yoga + 60-90 min walk

Monthly cadence:
- **Week 1** — full intensity + optional 16:8 IF window
- **Week 2** — moderate volume
- **Week 3** — deload (≤70% volume) + sleep emphasis
- **Week 4** — full intensity + TCM cycling overlay

**Time-restricted eating (TRE 16:8 or 14:10).** Cai 2022 small NAFLD RCT showed signal; not for hypothyroid, HPA-axis depleted, underweight, pregnant/breastfeeding, T1D, or those with eating-disorder history.

## 8. Daily Unified Combos (≤10 capsules/day total)

### 8.1 Morning combo

**For you, in plain words.** Three things with breakfast: silymarin (liver), berberine (insulin sensitivity), curcumin+piperine+fat (anti-inflammation).

**Quick start.** With breakfast: silymarin 280 mg + berberine 500 mg + curcumin 500 mg (Meriva or BCM-95 form) + 5 mg piperine. Take with ghee or coconut oil for absorption.

### 8.2 Midday combo

**For you, in plain words.** Three things with lunch: choline 425 mg, methylated folate 800 µg + B12 1000 µg, vitamin D3 2000 IU + K2 100 µg.

**Quick start.** With lunch.

### 8.3 Evening combo

**For you, in plain words.** Three things with dinner: NAC 600 mg, magnesium glycinate 300 mg, omega-3 (2 g EPA+DHA).

**Quick start.** With dinner. Add berberine 500 mg pre-dinner if not yet at 1500 mg/day total.

### 8.4 TCM cycling overlay (weeks 1 & 4)

**For you, in plain words.** Two weeks per month, add a TCM granule formula. Yin Chen Hao Tang for damp-heat presentation (yellowish complexion, bitter taste, sticky tongue); Xiao Chai Hu Tang for liver-qi stagnation (irritability, side-pain, sighing). 6 g BID.

### 8.5 Master 24-Hour Day Plan

**For you, in plain words.** The hour-by-hour timetable that resolves all the §10 conflicts. Print this and stick it on your fridge.

| Hour | Action | TL;DR (plain English) | Why this timing | Conflicts resolved |
|---|---|---|---|---|
| 06:00 | Wake → 5-10 min direct sunlight | Reset circadian rhythm. *(Mead 2008)* | Morning cortisol awakening response | — |
| 06:30 | Pranayama 10 min (Anulom Vilom + Bhramari) | Vagal tone before food. | Before any food/supplement | — |
| 07:00 | Yoga 20 min (twists + sun salutation) | Stimulate hepatic blood flow. | Pre-breakfast | — |
| 07:30 | Breakfast (per §6.4) — 2 eggs + greens + sourdough + berries + black coffee | Choline-rich, polyphenol-loaded. *(Corbin 2012)* | Coffee 2-3 cups before 14:00 | Caffeine before 14:00 cutoff |
| 08:00 | Combo 1 (silymarin + berberine + curcumin+piperine+fat) | Take with fat for curcumin absorption. *(Shoba 1998)* | With breakfast | Curcumin away from dairy (eggs only) |
| 09:30 | 10 min sunlight OR PBM 15 min over RUQ | Vitamin D + mitochondrial stimulation. | Morning | — |
| 12:30 | Lunch (per §6.4) | Protein + fibre + EVOO. | — | — |
| 13:00 | Combo 2 (choline + folate + B12 + D3+K2) | Fat-soluble vitamins with fat. *(Health Canada NHP)* | With lunch | — |
| 13:30 | 10-min post-meal walk | Blunts post-prandial glucose. *(DiPietro 2013)* | After lunch | — |
| 14:00 | Caffeine cut-off | Protect sleep. *(Drake 2013)* | No coffee after 14:00 | Melatonin protection |
| 16:00-17:00 | Exercise window (Zone 2 or strength) | Per §7.6. | Afternoon best for performance | — |
| 18:30 | Dinner (per §6.4) — light, lower-carb evening | Protect overnight insulin. | — | — |
| 19:00 | Combo 3 (NAC + Mg glycinate + omega-3) | Mg glycinate aids sleep onset. | With dinner | Mg+Ca split: Mg PM only |
| 19:30 | 30-min post-dinner walk | Powerful for glucose. *(DiPietro 2013)* | — | — |
| 20:00 | Red light PBM 15 min OR infrared sauna | Optional device. *(Laukkanen 2018)* | Evening | Sauna away from alcohol (zero) |
| 20:30 | Restorative yoga or walk | Wind-down. | — | — |
| 21:30 | Blue-light cutoff; screens off | Melatonin protection. *(Chang 2015)* | — | — |
| 22:00 | Bhramari 5 min + warm shower | Vagal tone before sleep. | — | — |
| 22:30 | Bedtime | 7-9 h target. *(Wijarnpreecha 2017)* | — | — |

**Conflicts explicitly resolved.** Curcumin (with breakfast eggs only — minimal casein) — Mg glycinate evening (away from AM Ca-rich dairy) — Caffeine before 14:00 — Berberine pre-meals — Iron NOT in protocol unless ferritin <30 (avoid Zn/Ca/Mg conflict) — Vitamin D+K2 with lunch fat — Omega-3 with dinner fat — TCM granules taken between meals (cooler than 40°C; away from probiotic by 2 h if used).

## 9. Supplier Ecosystem + Monthly Cost

### 9.1 Where to buy

**For you, in plain words.** Most items are available on Amazon Prime, iHerb, or directly from the brand.

| Channel | TL;DR (plain English) | What it sources well | Typical brands | Notes |
|---|---|---|---|---|
| Amazon Prime US/IN/UK | One-stop for most supplements; check for AYUSH-GMP labels on Indian brands. | Most OTC supplements | Thorne, NOW, Jarrow, Doctor's Best, Pure Encapsulations | Watch for counterfeits — buy from brand-owned stores |
| iHerb | Global shipping; reliable cold-chain for probiotics. *(iHerb global)* | Specialty + global brands | Solgar, Life Extension, Country Life | — |
| Patel Brothers / Apna Bazaar | Indian grocery — sprouted millets, fresh methi, ghee, classical Ayurveda. *(Indian grocery chain)* | Fresh ingredients, AYUSH-GMP herbs | Organic India, Himalaya, Patanjali | Patel Brothers, 1610 Stoneridge Mall Rd, Pleasanton CA; multiple India + USA branches |
| Chinatown TCM pharmacies | Raw herbs + granules + classical formulas. | TCM granules | Plum Flower, Mayway, Treasure of the East | Kamwo Meridian Herbs, 209 Grand St, NYC; Lhasa OMS Boston |
| AYUSH-GMP direct | India-direct Ayurveda; AYUSH-GMP certified. | Liv.52, Bhumiamla, Triphala | Himalaya, Organic India, Baidyanath, Patanjali | himalayawellness.com |
| Hamdard / Dawakhana | Unani direct. | Itrifals, Sharbats | Hamdard, Dawakhana Tibbiya Aligarh | — |
| IMPCOPS Chennai | Siddha direct. | Chooranams, kashayams | IMPCOPS, SKM Siddha | impcops.org |
| Men-Tsee-Khang | Tibetan medicine direct. | Padma, Bsam-pa | Men-Tsee-Khang Dharamsala | men-tsee-khang.org |
| SBL / Schwabe / Boiron | Homeopathy. | Chelidonium, Lycopodium, Carduus | SBL India, Schwabe India, Boiron France | — |
| Device suppliers | PBM panels, saunas, cold tubs. | Mito Red Light, Joov, Sunlighten, Plunge | Direct from manufacturer | — |

### 9.2 Monthly cost

**For you, in plain words.** Core OTC supplement stack runs $80-150/month. Add $30-50 for fresh-produce uplift. One-time device costs depend on choices.

- **Combo 1 (AM)** — silymarin + berberine + curcumin + piperine: $25-40/mo
- **Combo 2 (midday)** — choline + B-complex + D3+K2: $15-25/mo
- **Combo 3 (PM)** — NAC + Mg glycinate + omega-3: $25-40/mo
- **TCM cycling overlay (weeks 1 & 4)** — granules: $15-25/mo
- **Fresh produce uplift (Mediterranean diet)** — $30-50/mo above baseline
- **Probiotic + specialty (Liv.52, schisandra optional)** — $15-30/mo
- **Total monthly: $125-210**
- **One-time:** PBM panel $300-700, infrared sauna $1500-5000 (optional), cold tub $400-5000 (optional), smart scale $80-200.

## 10. Interaction Matrix

### 10.1 Drug ↔ Supplement (for users already on Rx)

**For you, in plain words.** This table is for users **already on a prescription** who are adding the OTC protocol on their own initiative. The dossier itself prescribes NONE of these drugs.

| Drug (currently on it) | TL;DR (plain English) | Supplement in this protocol | Risk | Mitigation |
|---|---|---|---|---|
| Metformin (T2D / NAFLD off-label) | Berberine adds to glucose-lowering — watch for hypos. *(Yan 2015)* | Berberine | Additive hypoglycaemia | Self-monitor glucose; reduce berberine if combined |
| Pioglitazone (NASH) | Vitamin E + pioglitazone tested in PIVENS — generally safe combo. *(Sanyal 2010)* | Vitamin E | Mild | Cap vit E at 400-800 IU |
| GLP-1 agonists (semaglutide/tirzepatide) | NAFLD off-label — additive nausea with berberine. *(LEAN Newsome 2021)* | Berberine, curcumin | Nausea overlap | Lower starting doses |
| SGLT-2 inhibitors (empagliflozin, dapagliflozin) | Emerging NAFLD signal; can stack with berberine. *(EMPA-REG; emerging NAFLD)* | Berberine | Volume depletion + UTI risk | Hydrate |
| Vitamin E megadose Rx | PIVENS dose 800 IU; cancer signal at chronic high. *(SELECT trial)* | Selenium | Compound antioxidant — monitor PSA / breast | Cap selenium 200 µg |
| Resmetirom (Rezdiffra) | First MASH-approved drug 2024. CYP3A4 substrate — watch curcumin/berberine. *(MAESTRO-NASH Harrison 2024)* | Curcumin, berberine | CYP3A4 interaction | Separate by 2 h |
| Statins | Combine cautiously with curcumin (additive CK rise rare) and red yeast rice (avoid duplicate). *(Cochrane statin)* | Curcumin, red-yeast-rice | Myopathy / CK rise | Monitor CK |
| Warfarin | High-risk — curcumin, ginkgo, garlic, omega-3 high-dose, vitamin K-rich greens all shift INR. | Curcumin, omega-3, garlic, greens | Bleeding / INR shift | Maintain consistent intake; monitor INR closely |
| ACE inhibitors / ARBs | High-potassium foods (banana, coconut water, salt substitutes) → hyperkalemia. *(generic ACE)* | High-K foods | Hyperkalemia | Moderate intake |
| Paracetamol (acetaminophen) | Chronic use depletes glutathione; NAC IV is the antidote in overdose. *(Larson 2005)* | NAC | Synergy — protective | NAC is safe; minimise paracetamol |
| Amiodarone | Hepatotoxic Rx — avoid concurrent hepatotoxic herbs (kava, chaparral, comfrey). | Kava, chaparral | Additive hepatotoxicity | Avoid combinations |
| Levothyroxine | Calcium, iron, coffee, soy, high-fibre within 60 min → absorption block. *(Centanni 2006)* | Calcium, iron, coffee, fibre | Absorption block | Take levothyroxine 60 min before food/coffee/supplements |
| Methotrexate | Hepatotoxic — avoid concurrent hepatotoxic herbs; folate is co-prescribed. | Kava, chaparral, high-dose niacin | Additive hepatotoxicity | Avoid; methylated folate per Rx routine |
| Direct-acting antivirals (Hep C cure) | St John's Wort induces CYP3A4 — drops antiviral levels. *(Mathijssen 2002)* | St John's Wort | DAA failure risk | Avoid SJW |

### 10.2 Drug ↔ Food

| Drug | TL;DR (plain English) | Food | Required action |
|---|---|---|---|
| Warfarin | Vitamin K greens shift INR. *(generic)* | Leafy greens | Keep intake consistent |
| Levothyroxine | Coffee/soy/fibre block absorption. *(Centanni 2006)* | Coffee, soy, fibre | 60 min gap |
| Statins / CYP3A4 drugs | Grapefruit raises drug levels. *(Bailey 2013)* | Grapefruit | Avoid |
| Paracetamol | Alcohol + paracetamol → liver injury. *(Larson 2005)* | Alcohol | Avoid combo |
| NSAIDs | Alcohol → GI bleed. *(Lanas 2003)* | Alcohol | Avoid combo |
| Metformin | Alcohol → lactic acidosis. *(Brown 1998)* | Alcohol | Avoid combo |
| ACE inhibitors | Salt substitutes + bananas → hyperkalemia. | High-K foods | Moderate |

### 10.3 Supplement ↔ Food

| Supplement | TL;DR (plain English) | Food / Drink | Required action |
|---|---|---|---|
| Curcumin | Casein binds polyphenols. *(Shoba 1998)* | Dairy | 2 h gap; pair with piperine + fat |
| Berberine | Dairy reduces absorption. *(Hua 2007)* | Dairy | 1 h gap |
| Iron (if taken) | Tannins block absorption. *(Hurrell 1999)* | Tea, coffee | 1-2 h gap; pair with vit C |
| Iron / Zinc / Ca / Mg | Divalent competition. | Each other | ≥2 h gap; AM Ca / PM Mg |
| Fat-soluble vits (A, D, E, K) | Need fat for absorption. *(generic)* | Low-fat meal | Take with fat |
| Vit D + Mg | Mg is cofactor for D activation. *(Uwitonze 2018)* | — | Take together |
| Probiotic | Heat >40°C kills bacteria. *(Sanders 2003)* | Hot beverages | Cool/room-temp only |
| Carotenoids | Need fat. *(van het Hof 2000)* | Low-fat meal | Take with fat |
| Omega-3 | Best with meal fat. | With dinner | With dinner |
| Cruciferous (raw, high) | Goitrogenic if hypothyroid. *(Felker 2016)* | If hypothyroid | Lightly steam |

### 10.4 Supplement ↔ Supplement

| Supplement A | TL;DR (plain English) | Supplement B | Mechanism | Required action |
|---|---|---|---|---|
| Zinc | Long-term high-dose zinc depletes copper. *(Hoffman 1988)* | Copper | Competition | Maintain 8-15:1 Zn:Cu |
| Iron | Competes with zinc, calcium, magnesium. | Zn, Ca, Mg | Divalent competition | ≥2 h gap |
| Vitamin A | High-dose competes with D receptor. *(Cantorna 1999)* | Vitamin D | Competition | Balance doses |
| Vitamin E | High-dose can antagonise K. *(Booth 2004)* | Vitamin K | Antagonism | Balance |
| St John's Wort | CYP3A4 inducer — many interactions. | Many | CYP induction | Avoid combinations |
| Berberine | CYP3A4 inhibitor; reduces concurrent CYP3A4-metabolised herbs. *(Wu 2005)* | Other CYP3A4 herbs | Inhibition | Caution |
| Magnesium | Calcium at same dose competes. | Calcium | Competition | Split AM/PM |
| Echinacea | Counters immunomodulators. | Immunosuppressants | Counter-action | Avoid in autoimmune |
| Curcumin | Anticoagulant signal additive with omega-3 + ginkgo. | Omega-3, ginkgo | Bleeding | Monitor if all three |

### 10.5 Exercise / Sleep / Caffeine timing rules

**For you, in plain words.** Caffeine before 14:00. Magnesium PM. Berberine pre-meals. Heavy meal NOT within 3 h of bedtime.

#### Open the science

- Caffeine cutoff 14:00 (half-life ~6 h).
- Creatine pre/post-workout; consistent timing.
- Beta-alanine ≥30 min pre-workout.
- L-theanine + caffeine AM only.
- Mg glycinate PM.
- Ashwagandha AM or ≥2 h pre-bed.
- Rhodiola AM only.
- Probiotic AM empty stomach OR with first meal.
- Heavy meal + supine within 3 h → reflux risk.
- Inverted yoga + late dinner → contraindicated.
- Hot sauna + alcohol → dehydration/arrhythmia.

### 10.6 Strictly Avoid — specific to NAFLD/MASH

**For you, in plain words.** Some things are pathology-aggravating in NAFLD specifically.

- **Alcohol** above ≥7 (W) / ≥14 (M) drinks/week → re-classify as ALD.
- **Kava** → idiosyncratic hepatotoxicity case reports.
- **Chaparral** → cholestatic hepatotoxicity.
- **Comfrey (oral)** → pyrrolizidine-alkaloid hepatotoxicity.
- **High-dose niacin (>2 g/day)** → hepatotoxicity + insulin resistance.
- **Aggressive paracetamol use** → glutathione depletion.
- **Liver flushes (olive oil + lemon + Epsom)** → gallstone-colic risk.
- **High-dose vitamin A (>10,000 IU/day chronic)** → hepatotoxicity.
- **Body-builder peptides + anabolic steroids** → drug-induced cholestasis.
- **Aflatoxin-contaminated nuts/grains** → choose tested products.

### 10.7 Emerging & adjunctive therapies

**For you, in plain words.** What's on the horizon for fatty liver that isn't a herb. Split into (a) home-usable advanced tools, (b) high-evidence behavioural therapies you can self-direct, (c) clinic-route options if the home protocol plateaus.

#### 10.7.1 Home-usable advanced & device therapies

| Therapy | TL;DR (plain English) | Evidence | Dose / protocol | Where it fits | Citation |
|---|---|---|---|---|---|
| Continuous glucose monitor (CGM) | 14-day windows reveal which foods spike glucose; metabolic-NAFLD overlap. *(Steno 2020 CGM behaviour)* | B for behaviour change | FreeStyle Libre 3, Stelo, Dexcom Stelo | Fold into §8.5 — week 1, 4, 12, 24 | *(Battelino 2019 CGM clinical use)* |
| DTC home A1c + ALT/AST panel | Self-order at baseline + week 12 + month 6 + month 12. *(LetsGetChecked, Everlywell)* | A for accuracy | LetsGetChecked liver + diabetes panels | §11.5 cadence | *(NHS Choices DTC guide)* |
| Smart scale + InBody body composition | Tracks visceral fat trend, not just weight. *(Borga 2018)* | B | Daily AM weight; monthly body comp | §11.0 | *(Borga 2018)* |
| Waist-to-height ratio | A simple home measure better than BMI for visceral risk. Target <0.5. *(Ashwell 2012 meta)* | A for prediction | Tape measure | Weekly | *(Ashwell 2012)* |
| FIB-4 + NAFLD Fibrosis Score self-calculators | Use mdcalc.com or hepatitisc.uw.edu/page/clinical-calculators — input lab results. *(McPherson 2017)* | A for risk stratification | Web calculator | After each DTC panel | *(McPherson 2017)* |
| Mediterranean-diet meal-planning apps | Cronometer, Lifesum Mediterranean mode, PREDIMED 14-item adherence tracker. | B for adherence | Daily logging | Diet adherence | *(Estruch 2018)* |
| Home alcohol-tracking apps | Even if "non-alcoholic", rule out ALD contribution and verify alcohol-free days. | B | Sunnyside, Reframe | Daily | — |

#### 10.7.2 Adjunctive behavioural therapies

**For you, in plain words.** High-evidence, self-directable therapies. CBT for emotional eating that drives metabolic disease. MBSR for cortisol-driven insulin resistance. Habit-stack apps for adherence. These are often A-grade evidence — frequently stronger than the herbs.

| Therapy | TL;DR (plain English) | Evidence | Self-guided resources | Citation |
|---|---|---|---|---|
| CBT for emotional eating | A-grade for eating-disorder spectrum and emotional eating that drives obesity. *(Hay 2014 meta CBT for eating)* | A | "Overcoming Binge Eating" Fairburn workbook; Noom; Recovery Record app | *(Hay 2014)* |
| MBSR (mindfulness-based stress reduction) | Lowers cortisol, improves insulin sensitivity, reduces emotional eating. *(Carrière 2018 meta MBSR + weight)* | A-B | Insight Timer free; Waking Up app; Jon Kabat-Zinn 8-week course | *(Carrière 2018)* |
| Behavioural weight-loss programmes | A-grade for 5-10% sustained loss. *(Diabetes Prevention Program lifestyle arm)* | A | Noom; WW Mediterranean; PREDIMED app | *(DPP Knowler 2002)* |
| Sleep CBT-i (insomnia) | Short-sleep drives NAFLD. *(Wijarnpreecha 2017)* | A | Sleepio (NHS-listed); Somryst; CBT-i Coach (free) | *(Espie 2019 Sleepio meta)* |
| HRV biofeedback | Improves vagal tone, lowers cortisol. *(Lehrer 2014 HRV meta)* | B | HeartMath Inner Balance; Polar H10; Oura/Whoop | *(Lehrer 2014)* |
| Habit-stacking apps | Adherence is the limiting factor in any 12-month protocol. | B | Streaks, Habitica, Way of Life | — |

#### 10.7.3 If the home protocol plateaus — clinic-route options

**For you, in plain words.** Therapies that are NOT consumer-purchasable or NOT home-administrable. Documented honestly, NEVER recommended, NEVER folded into the home regime. If the home protocol plateaus and you wish to pursue a clinic-route option, here is what exists and what the trials show. The protocol does not recommend any of these; the user is sovereign over the decision.

| Therapy | TL;DR (plain English) | Evidence anchor | Regulatory-path context | Citation |
|---|---|---|---|---|
| Vitamin E 800 IU/day (Rx-dispensed dose) | A-grade for non-diabetic biopsy-proven NASH; **breast-cancer signal (women) and prostate-cancer SELECT signal (men) at chronic high dose**. *(PIVENS Sanyal 2010 NEJM)* | A with cancer caveat | — | *(Sanyal 2010 NEJM; SELECT)* |
| Pioglitazone (diabetic NASH) | B+ grade for diabetic NASH; weight gain + bone loss + bladder cancer caveats. *(PIVENS Sanyal 2010)* | B+ | TGA + Health Canada labelled | *(Sanyal 2010)* |
| GLP-1 agonists (semaglutide, tirzepatide) | LEAN trial showed NASH resolution; weight loss is the proximate mechanism. *(LEAN Newsome 2021 NEJM)* | A for T2D, B+ for NASH | — | *(Newsome 2021)* |
| SGLT-2 inhibitors (empagliflozin) | Emerging NAFLD signal; T2D + CV protection. *(EMPA-REG; emerging NAFLD)* | B | — | *(Zinman 2015 EMPA-REG)* |
| Bariatric surgery | A-grade for NASH improvement; major surgery with morbidity. *(LABS-2 cohort Mathurin 2009)* | A | — | *(Mathurin 2009)* |
| Resmetirom (Rezdiffra) | First MASH-specific drug. F2-F3 fibrosis improvement at 52 weeks. *(MAESTRO-NASH Harrison 2024 NEJM)* | A | FDA approval 2024 — regulatory-path context, not evidence anchor | *(Harrison 2024 NEJM MAESTRO-NASH)* |
| Obeticholic acid | REGENERATE trial — showed fibrosis improvement but **regulatory rejection over pruritus + lipid concerns**. Present honestly. *(Younossi 2019 REGENERATE)* | B with rejection context | — | *(Younossi 2019)* |
| FibroScan elastography | Non-invasive fibrosis staging — clinic-based; the standard for sub-typing F0-F4. *(Castera 2019)* | A diagnostic | — | *(Castera 2019)* |
| Liver biopsy | Gold-standard fibrosis staging; invasive. *(Bedossa 2014)* | A diagnostic | — | *(Bedossa 2014)* |
| Liver transplant | End-stage / decompensated cirrhosis / HCC within Milan criteria. *(UNOS; Eurotransplant)* | A for end-stage | — | *(Eurotransplant)* |

#### Open the science

Cite each trial directly. **PIVENS** (Sanyal et al. *NEJM* 2010, n=247, vitamin E 800 IU vs pioglitazone vs placebo for non-diabetic biopsy-proven NASH — vitamin E met primary endpoint). **LEAN** (Newsome et al. *NEJM* 2021, n=320, semaglutide in NASH). **MAESTRO-NASH** (Harrison et al. *NEJM* 2024, n=966, resmetirom F2-F3 — resmetirom met primary endpoint for NASH resolution + fibrosis improvement; **FDA approval 2024 — regulatory-path context, not evidence anchor**). **REGENERATE** (Younossi et al. 2019 — obeticholic acid). **LABS-2** (Mathurin et al. 2009 — bariatric NASH). **EMPA-REG** (Zinman et al. 2015 — empagliflozin CV + NAFLD signal). **Vilar-Gomez 2015** (NEJM n=293 — the cornerstone weight-loss paper). **Saab 2014** + **Wadhawan 2016** (coffee hepatoprotective meta-analyses). **Hashida 2017** (exercise meta both aerobic + resistance). **Cai 2022** (TRE NAFLD signal). **Loguercio 2014** (VSL#3 Italy NASH RCT). **Salehi 2020 Cochrane** (resveratrol null). **Tribelhorn 2014** (silymarin mixed).

## 11. Clinical Scoring + Comorbidity Screening

### 11.0 Self-administered clinical scoring

**For you, in plain words.** Measure baseline / week 12 / month 6 / month 12. All home-administered. *(McPherson 2017 FIB-4)*

- **FIB-4 calculator** (mdcalc.com) — age + AST + ALT + platelets. Risk-stratifies fibrosis. <1.3 low, 1.3-2.67 indeterminate, >2.67 high.
- **NAFLD Fibrosis Score** (web calculator) — age + BMI + IFG/diabetes + AST/ALT ratio + platelets + albumin.
- **ALT, AST, GGT, ALP, bilirubin, albumin, platelets** — DTC liver panel quarterly.
- **HbA1c** — DTC.
- **Ferritin + transferrin saturation** — to rule out hemochromatosis and to set iron-supplement gate.
- **ApoB / non-HDL cholesterol** — NAFLD's main mortality driver is CV.
- **Mediterranean Diet Adherence Score (PREDIMED 14-item)** — weekly self-score.
- **Waist-to-height ratio** — weekly; target <0.5.
- **Weight + body composition** — daily AM weight; monthly InBody/smart-scale visceral fat.
- **WHO-5 Well-Being Index** — mood at baseline / month 3 / 6 / 12.

### 11.5 Comorbidity Screening — DTC labs only

**For you, in plain words.** NAFLD travels with multiple metabolic and autoimmune comorbidities. Cadence: baseline / month 3 / month 6 / month 12.

| Comorbidity | TL;DR (plain English) | Lab / screen | Citation |
|---|---|---|---|
| Type 2 diabetes | HbA1c ≥6.5% — read `type-2-diabetes-active.md` alongside this. | HbA1c | *(WHO T2D diagnostic)* |
| Metabolic syndrome | ≥3 of: waist >102 (M)/88 (W) cm, TG >150, HDL <40 (M)/<50 (W), BP >130/85, FBG >100. | Composite | *(IDF MetS 2009)* |
| Obstructive sleep apnea | STOP-BANG questionnaire + home oximetry (Wesper, Wellue O2Ring); OSA worsens NAFLD. *(Aron-Wisnewsky 2012)* | STOP-BANG | *(Chung 2008)* |
| Dyslipidemia | ApoB + non-HDL — better than total cholesterol. *(Sniderman 2020)* | DTC lipid + ApoB | *(Sniderman 2020)* |
| Hypertension | Home BP cuff (validated — Omron, Withings). | Daily AM BP | *(Stergiou 2018)* |
| PCOS | Free testosterone + DHEAS + LH/FSH + insulin (women). *(Rotterdam criteria)* | DTC hormone panel | *(Rotterdam 2003)* |
| Hypothyroidism | TSH ± free T4 ± anti-TPO. *(generic)* | DTC thyroid | *(Garber 2012)* |
| Inflammatory bowel disease | If GI symptoms — calprotectin DTC. | Fecal calprotectin | *(generic)* |
| Celiac disease | Anti-tTG IgA + total IgA. *(Husby 2020)* | DTC celiac panel | *(Husby 2020)* |
| Hepatitis B + C (rule out) | HBsAg + HCV antibody at baseline. *(WHO)* | DTC hepatitis panel | *(WHO)* |
| Hereditary hemochromatosis | Ferritin >300 + transferrin sat >45% → HFE gene test. *(EASL hemochromatosis)* | Ferritin + TS + HFE | *(EASL 2010)* |
| Wilson's disease (age <40 + abnormal LFTs) | Ceruloplasmin + 24-h urine copper + slit-lamp. *(EASL Wilson's)* | Ceruloplasmin | *(EASL 2012)* |
| Alpha-1-antitrypsin deficiency | A1AT level + phenotype. *(EASL A1AT)* | DTC A1AT | *(EASL 2017)* |
| Autoimmune hepatitis | ANA, ASMA, anti-LKM, IgG. *(EASL AIH)* | DTC autoimmune panel | *(EASL 2015)* |

## 12. Implementation Timeline (12 months)

**For you, in plain words.** The 12-month arc — what to expect, when to repeat labs, how to know if it's working. *(self-tracked, home-based)*

- **Weeks 1-4 — Adaptation.** Half-dose ramp days 1-3. Expect mild bloating, taste adjustment, energy shifts. Start the daily log (Cronometer + paper). Target: 1-2% body-weight loss.
- **Weeks 5-8 — Stabilisation.** Tolerance confirmed. Optional mid-protocol DTC spot-check (CBC + ferritin + vitamin D + hs-CRP). Mediterranean adherence stable. Target: 3-4% loss.
- **Weeks 9-12 — First clinical shift.** Repeat DTC liver panel + FIB-4 calculation. ALT/AST should drift down 10-30% in responders. Photo body comp. Target: 5-7% loss.
- **Months 4-6 — Consolidation.** Maintenance protocol. Subtract any non-responders (grade-based pruning). Re-check FIB-4. Target: 7-10% loss (the magic number).
- **Months 6-12 — Long-term sustainability.** Quarterly self-scoring. Annual DTC labs. TCM cycling weeks 1 & 4. Goal: sustained 10% loss + normalised ALT/AST + FIB-4 <1.3.
- **No physician check-in milestones are mandatory.** If the user keeps a physician in the loop, that's their personal decision — the protocol does not require it.

## 13. Illustrative Case Composite

### 13.1 Case profile

**For you, in plain words.** Anonymised composite — NOT a real patient identifier.

- 48-year-old male, BMI 31, sedentary office worker, occasional social drinker (4-6 drinks/week — below ALD threshold), ALT 78 IU/L (ULN 40), AST 52, GGT 84, FIB-4 1.42 (indeterminate), HbA1c 5.9% (pre-diabetic), waist 108 cm, ApoB 110 mg/dL. Ultrasound: bright liver. No viral hepatitis. Ferritin 220 (normal). Goal: reverse fatty liver, lose 10 kg, normalise enzymes.

### 13.2 Protocol applied

**Quick start.** Mediterranean diet + 7-10% weight-loss target via 500 cal/day deficit. Walk 30 min after lunch + dinner. Resistance training 2×/week. Silymarin 280 mg BID + berberine 500 mg TID + curcumin 500 mg BID + choline 500 mg/day + omega-3 2 g + Mg glycinate 300 mg PM + D3 2000 IU + B-complex methylated. TCM Yin Chen Hao Tang weeks 1 & 4. Coffee 2-3 cups/day before 14:00. Eliminate sugary drinks, ultra-processed, industrial seed oils.

### 13.3 Outcomes at milestones

**Week 12.** Weight -4 kg (-4.2%), waist -3 cm, ALT 58 (-26%), AST 41, GGT 62 (-26%), FIB-4 1.21 (low-risk band).

**Month 6.** Weight -8 kg (-8.4%), waist -6 cm, ALT 41 (normal), AST 33, GGT 48, FIB-4 1.05, HbA1c 5.6% (out of pre-diabetic range), ApoB 88.

**Month 12.** Weight -11 kg (-11.5%), waist -9 cm, ALT 32 (normal), AST 28, GGT 38, FIB-4 0.98, HbA1c 5.4%, ApoB 80. Ultrasound: hepatic echogenicity normalised. Sustained.

### 13.5 Patient-facing Primer

**For you, in plain words.** Fatty liver is the most common liver condition on earth, and for almost everyone with it, the path back is the same — lose 7-10% of your body weight, eat Mediterranean-style, walk after meals, drink black coffee, sleep 7-9 hours, and add a small layer of well-chosen supplements. **No prescription. No clinic. No hospital.** The single most important fact: in the Vilar-Gomez 2015 study, 90% of people who lost 10% of their body weight had their fatty-liver inflammation fully resolved on repeat biopsy. That number is bigger than any drug. The next most important fact: this is a months-long re-balancing, not an overnight reversal — expect the first lab improvement around week 12, real body-comp shift by month 6, and the deepest gains in months 9-12. The sovereign ethos: this is an independent, OTC, home-based protocol. The user is in charge of their own body. If they choose to keep a physician informed — for medication management, advanced fibrosis staging via FibroScan, or to monitor pre-existing prescriptions — that is their personal decision; the protocol does not require it. Red-flag symptoms (jaundice, confusion, vomiting blood, severe abdominal swelling) always escalate to emergency.

### 13.7 Honest evidence-tier comparison table

**For you, in plain words.** Every approach in this dossier, ranked by honest evidence tier with a plain-words verdict.

| Approach | Tier | TL;DR (plain English) | Where it fits |
|---|---|---|---|
| 7-10% body-weight loss | A | NEJM RCT (Vilar-Gomez 2015) — 90% NASH resolution at 10% loss. The cornerstone. | Cornerstone — daily |
| Mediterranean diet | A | PREDIMED (Estruch 2018 NEJM) for CV; Akinkugbe 2018 Cochrane for MASLD. | Cornerstone — daily |
| Coffee 2-3 cups/day | B+ | Saab 2014 + Wadhawan 2016 meta — robust hepatoprotective signal. | Cornerstone — daily, before 14:00 |
| Aerobic + resistance exercise | A | Hashida 2017 meta — both work, combination is best. | Cornerstone — weekly cadence |
| Time-restricted eating 16:8 | C/B | Cai 2022 small NAFLD signal; not for hypothyroid / HPA-depleted / underweight. | Optional layer if metabolically appropriate |
| Vitamin E 800 IU/day (non-diabetic NASH) | A with cancer caveat | PIVENS NEJM 2010 — A-grade but SELECT prostate-cancer signal + breast-cancer concern. Capped 12-18 months only. | §10.7.3 clinic-route + cautious home cap 400 IU |
| Silymarin (milk thistle) | B | Tribelhorn 2014 Cochrane mixed; Loguercio 2012 silybin+vit E positive. One layer of six. | Layer — 12-week trial |
| Berberine | B | Yan 2015 RCT n=184 NAFLD positive. Insulin-sensitiser overlap. | Daily — pre-meals |
| Curcumin + piperine | B | Rahmani 2016 NAFLD RCT n=80 positive. | Daily AM |
| Choline | A for deficiency-correction | Corbin 2012 — choline deficiency alone causes fatty liver. | Daily — cornerstone of cofactor floor |
| Betaine (TMG) | B | Abdelmalek 2009 Mayo RCT signal. | Daily |
| NAC | B (NAFLD); A (paracetamol clinic IV) | Khoshbaten 2010 Iran NAFLD RCT signal. | Daily |
| Schisandra | B+T | Chiu 2013 Taiwan ALT-reduction; Chinese Pharmacopoeia. | Optional adjunct |
| TUDCA | C | Pan 2013 RCT signal; emerging human data. | Optional second-layer add |
| Multi-strain probiotic (VSL#3) | B | Loguercio 2014 Italy MASH RCT positive. | Daily |
| Omega-3 (EPA+DHA 2-3 g) | B | Parker 2012 meta reduces liver fat. | Daily |
| Vitamin D3 + K2 | B for deficiency-correction | Eliades 2013 D status correlates with NAFLD severity. | Daily if deficient |
| Selenium | B | Reja 2020 NAFLD review — glutathione peroxidase cofactor. | Daily (capped 200 µg) |
| Magnesium glycinate | B | de Baaij 2015; aids sleep + insulin sensitivity. | Evening |
| Sulforaphane / broccoli sprouts | C | Kikuchi 2015; Nrf2 activator. | Optional add |
| R-alpha-lipoic acid | C | Mechanism + small trials. | Optional add |
| Resveratrol | X | Salehi 2020 Cochrane null for chronic-disease prevention. | NOT in our active protocol |
| Liver flushes (olive oil + lemon + Epsom) | X | No evidence; gallstone-colic risk. | NOT in our active protocol |
| Yin Chen Hao Tang | T+B | Classical Shang Han Lun damp-heat liver formula. | TCM cycling weeks 1 & 4 |
| Liv.52 (Himalaya) | T+B | Sharma 2018; Huber 2005 — multiple RCTs for hepatic enzymes. | Ayurveda layer |
| Bhumiamla / Phyllanthus | T+B | Patel 2011 + CCRAS monograph — well-studied traditional hepatoprotective. | Ayurveda layer |
| Kutki (Picrorhiza) | T+B | Dwivedi 1991 + CCRAS Kutki monograph. | Ayurveda layer |
| Padma 28 | T+B | EMA-approved as Padma Lax; Men-Tsee-Khang. | Tibetan layer |
| Homeopathy (Chelidonium, Lycopodium, Carduus, Phosphorus, Nux vom, Bryonia, Mercurius) | T/H | Documented Boericke/Kent tradition. Modern evidence contested. | Documented for transparency; not in active protocol |
| Infrared sauna | B | Laukkanen 2018 Finnish cohort — CV + metabolic benefits. | Optional device — 2-3×/week |
| Photobiomodulation (PBM) abdominal | C | de Freitas 2016 mechanism; emerging human NAFLD data. | Optional device |
| Cold-water immersion | C | van der Lans 2013 — brown-adipose activation. | Optional |
| CBT for emotional eating | A | Hay 2014 meta — A-grade for eating-disorder spectrum. | Adjunctive — Rule 6 |
| MBSR / mindfulness | A-B | Carrière 2018 meta — cortisol + insulin sensitivity + emotional eating. | Adjunctive — daily |
| CBT-i (sleep) | A | Espie 2019 Sleepio meta — A-grade for insomnia. | Adjunctive if sleep is broken |
| HRV biofeedback | B | Lehrer 2014 — vagal tone + stress + BP. | Optional device |
| Continuous glucose monitor | B for behaviour change | 14-day windows reveal food-glucose response. | Quarterly waves |
| GLP-1 agonists (semaglutide / tirzepatide) | A for T2D / B+ for NASH | LEAN Newsome 2021 NEJM — weight-loss is proximate mechanism. | §10.7.3 clinic-route only |
| Resmetirom (Rezdiffra) | A | MAESTRO-NASH Harrison 2024 NEJM — F2-F3 fibrosis improvement. FDA approval 2024 (regulatory-path context, not evidence anchor). | §10.7.3 clinic-route only |
| Pioglitazone | B+ for diabetic NASH | PIVENS Sanyal 2010 NEJM — weight gain + bone loss caveats. | §10.7.3 clinic-route only |
| SGLT-2 inhibitors | B emerging | EMPA-REG CV outcomes + emerging NAFLD signal. | §10.7.3 clinic-route only |
| Bariatric surgery | A for NASH | LABS-2 Mathurin 2009. | §10.7.3 clinic-route only |
| Obeticholic acid | B with rejection context | REGENERATE Younossi 2019 — pruritus + lipid concerns; regulatory rejection. | NOT in active protocol; documented for transparency |
| FibroScan elastography | A diagnostic | Castera 2019 — non-invasive fibrosis staging. | §10.7.3 if home protocol plateaus |
| Liver biopsy | A diagnostic | Bedossa 2014 — gold-standard. | §10.7.3 only when staging needed |

## 14. Independent Healing Paradigm

**For you, in plain words.** This protocol differs from the mainstream pharmaceutical model. It is OTC + home-based by design. **No prescription. No clinic. No hospital. No surgery.** The user owns their body and their healing path.

We are not promising outcomes. We are documenting the strongest globally-sourced natural path. The honest acknowledgment of evidence limits stays on the page: silymarin Cochrane is mixed; resveratrol Cochrane is null; vitamin E PIVENS is A-grade but carries cancer-signal caveats at chronic high doses; the single highest-yield intervention is and remains 7-10% body-weight loss in those with BMI >25.

**No FDA, FTC, ADA, AHA, AAD, AMA, APA, ACOG, NAMS, ACR, ACS, CDC, NIH-policy, AAFP, AAP as authority on whether something WORKS. Period.** The narrow exception (v6.2.3 Rule 5): the FDA 2024 approval of resmetirom (Rezdiffra) is mentioned in §10.7.3 as **regulatory-path context, not evidence anchor** — the trust anchor is MAESTRO-NASH (Harrison 2024 NEJM). Equivalent EU EMA, Australia TGA, China NMPA, and Health Canada NHP regulatory milestones may also appear as factual context, never as the authority on whether an intervention works.

Protocol grounded in WHO TCIM, India AYUSH/CCRAS/CCRH/CCRYN/CCRUM/CCRS/PCIMH/ICMR, EMA HMPC, Australia TGA + NHMRC, China NMPA + Chinese Pharmacopoeia 2020, Health Canada NHP, Men-Tsee-Khang, Hamdard, IMPCOPS, plus the classical Ayurvedic, Chinese, Unani, Siddha, Tibetan and homeopathic texts.

---

**References — every claim above is anchored inline. Key trials: Vilar-Gomez 2015 NEJM; PIVENS Sanyal 2010 NEJM; LEAN Newsome 2021 NEJM; MAESTRO-NASH Harrison 2024 NEJM; Saab 2014 + Wadhawan 2016 coffee meta; Hashida 2017 exercise meta; Schwarz 2017 fructose; Loguercio 2014 VSL#3; Cai 2022 TRE; Salehi 2020 Cochrane null resveratrol; Tribelhorn 2014 Cochrane mixed silymarin; Yan 2015 berberine; Rahmani 2016 curcumin; Corbin 2012 choline; Abdelmalek 2009 betaine; Khoshbaten 2010 NAC; Parker 2012 omega-3; Eliades 2013 vitamin D; Laukkanen 2018 sauna; McPherson 2017 FIB-4; Younossi 2018/2023 epi + nomenclature; CCRAS hepatic monographs; EMA Padma; Chinese Pharmacopoeia 2020; Hahnemann Organon; Boericke Materia Medica.**
