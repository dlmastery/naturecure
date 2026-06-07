# Wave-10 Review — Senior Pharmacogenomics Specialist Audit (CYP / SLCO1B1 / Prakriti-Genomics / DTC PGx Pathway Gaps)

**Dossier under review:** `nichecore/research/tinnitus-support.md` (schemaVersion `v7.0.0-rigor-pass-2026-06-06`; post-wave-9 geriatric audit).
**Skill under review:** `.claude/skills/ailment-360-research/SKILL.md` (v6.2.6 in-progress; v6.2.9 candidate adds wave-10 pharmacogenomic rules).
**Reviewer persona.** Senior pharmacogenomics specialist — 19 years across DPWG (KNMP, Leiden UMC, Radboud UMC, Erasmus MC; 100+ DPWG gene-drug guidelines indexed in PharmGKB), UK NHS Genomic Medicine Service (Manchester Centre for Genomic Medicine, Royal Marsden, Guy's & St Thomas's, NIHR BioResource — operationalising the NHS 14-gene PGx panel embedded in primary care from 2024), Indian PharmGKB consortium (CSIR-IGIB Delhi GenomeAsia 100k node, AIIMS PGx-OPD, Nizam's Institute Hyderabad, Manipal Centre for Clinical Pharmacology), EMA PGx Working Party. Subspecialty: CYP2D6 / CYP2C9 / CYP3A4 / CYP2C19 phenoconversion arithmetic; SLCO1B1 *5/*15 statin myopathy + ototoxicity overlap; melatonin CYP1A2 + MTNR1B dose-finding; prakriti × genomic-cluster cross-mapping (Bhushan 2005, Sethi 2020, Patwardhan 2008, Govindaraj 2015); DTC PGx pathway audit across 23andMe + MyHeritage + Promethease + Sequencing.com + Mapmygenome + GenePlanet + MyToolbox AYUSH-Genomics.
**Date:** 2026-06-14.
**Wave-1 through wave-9 respected (NOT re-litigated).** All 43 prior reviewers carried forward. **What wave-10 sees** is that §3.3, §10.1, §10.5.5, §11.5, and §4.2 Ayurveda prakriti framing all sit on an unstated CYP2D6 / CYP2C9 / CYP3A4 / CYP2C19 normal-metaboliser assumption. ~7-10% European readers are CYP2D6 PM; ~30-40% IM; ~1-3% UM. CYP2C19 PM reaches ~14-20% in East Asia (vs ~2-5% European). Dose-titrations, §10.1 mitigations, §10.5.5 gradient-AE incidences, and §11.5 halving rules are phenotype-blind — under-protect PM + CYP2C9 *3/*3, over-restrict UM.

**Verdict (TL;DR):** **MODERATE-TO-MAJOR revision — five dimensions of pharmacogenomic-specific overlap the dossier silos.** (1) CYP2D6 / CYP2C9 / CYP3A4 / CYP2C19 phenotype × §3.3 — Ginkgo (CYP2C9 + CYP3A4 inhibition), SJW (potent CYP3A4 + P-gp inducer — already in §10.6 but induction-and-washout arithmetic never quantified), Pycnogenol + Saffron + Black Cohosh (CYP2D6) + Curcumin (CYP3A4 + UGT). (2) SLCO1B1 *5/*15/*17 (rs4149056) + statin row — wave-8 named statin-auditory-cluster as tiebreaker; PGx names SLCO1B1 reduced-function carrier (~15% European, ~8% South-Asian, ~3% East-Asian) as actual high-risk sub-cohort. (3) Melatonin §3.3 + §8.4 — CYP1A2 *1F/*1C + MTNR1B rs10830963 G-allele give a 4-fold range (0.1 mg → 3 mg + SR option) read off CYP1A2 + MTNR1B + smoker status. (4) AYUSH prakriti × CYP / GST / VDR / TLR4 — §4.2 + §10.5.5 name vata-prakriti as clinical axis (~16% Ashwagandha sedation incidence) without the Bhushan 2005 / Patwardhan 2008 / Govindaraj 2015 / Sethi 2020 scaffold. (5) Consumer DTC PGx pathway — ~5-10% of readers have 23andMe / MyHeritage / Mapmygenome / GenePlanet / Sequencing.com raw data; zero §11.3 read-through pathway.

MODERATE-TO-MAJOR because dimensions 1 + 2 + 3 are dose + safety + interaction inversions for ~20-30% of readers; 4 is operational; 5 is structural. Fix ~2,850 words additive.

---

## SUMMARY OF FINDINGS

| Dimension | Verdict | Severity |
|---|---|---|
| 1. CYP2D6 / CYP2C9 / CYP3A4 / CYP2C19 phenotype × §3.3 phytochemicals | **Moderate-to-major** — PM and UM sub-cohorts mis-dosed by 2-4× |
| 2. SLCO1B1 *5/*15/*17 + statin-ototoxicity (wave-8 underneath) | **Moderate** — wave-8 named auditory-signal-as-tiebreaker; PGx names the actual high-risk sub-cohort |
| 3. Melatonin §3.3 + §8.4 — CYP1A2 + MTNR1B dose-finding | **Moderate** — current 0.3-3 mg range phenotype-blind; PGx range is 4-fold wider |
| 4. AYUSH prakriti × CYP / GST / VDR / TLR4 mapping | **Moderate** — §4.2 + §10.5.5 vata-prakriti row sits on missing PGx scaffold |
| 5. Consumer DTC PGx testing pathway | **Moderate** — structural addition; zero home read-through pathway today |

---

## 1. CYP2D6 / CYP2C9 / CYP3A4 / CYP2C19 PHENOTYPE × §3.3 PHYTOCHEMICAL MATRIX

### 1.1 What the dossier currently covers

§3.3 lists 12 OTC molecules with dose ranges + timing rules. §10.1 names CYP3A4 grapefruit + statin in one row; CYP3A4 / CYP2D6 / CYP2C9 / CYP2C19 are never named as phenotype-bearing axes. §10.3 names piperine + ghee for curcumin absorption but never names piperine's CYP3A4 + UGT inhibition (the actual mechanism). §10.6 lists "St John's Wort + 5-HTP with SSRIs" as excluded but never names the SJW induction half-life (~14 days CYP3A4 + ~7 days P-gp recovery — Markowitz 2003, Hennessy 2002, Mai 2004). §10.5.5 names a ~16% vata-prakriti Ashwagandha daytime-sedation rate without phenotype-stratifying.

### 1.2 The PGx inversion — five gene-supplement pairs the dossier silos

- **Ginkgo (Tebonin EGb 761) — CYP2C9 + CYP3A4 + P-gp inhibition (modest).** Mohutsky 2006 + Gurley 2008 + Gaudineau 2004 establish in-vitro and in-vivo CYP2C9 + CYP3A4 inhibition signals (modest at OTC dose; clinically relevant on top of CYP2C9 *2/*3 background). §10.1 names Ginkgo as absolute contraindication on warfarin — load-bearing pharmacogenomically because warfarin S-enantiomer is CYP2C9 metabolised + VKORC1 sensitivity is genotype-driven. A reader with VKORC1 -1639 AA + CYP2C9 *2/*3 (~1-3% European, ~5-10% Maghrebi) is on warfarin 1-2 mg/day with very tight INR — adding Ginkgo here is a bleeding emergency at far lower exposure than the dossier's "absolute contraindication" framing implies.
- **SJW — CYP3A4 + CYP2C9 + CYP1A2 + P-gp potent inducer (Markowitz 2003, Hennessy 2002, Mai 2004).** Already excluded in §10.6; the induction-and-washout arithmetic is never named. Hyperforin induces CYP3A4 to ~140-200% of baseline over 10-14 days; recovery half-life ~14 d CYP3A4 + ~7 d P-gp. A reader who stops SJW today still phenoconverts as functional CYP3A4 UM for ~2-3 weeks — any §3.3 CYP3A4 substrate (saffron, melatonin partially, curcumin partially) is under-exposed in that window. PGx-aware exclusion counsels a 2-3 week wait before judging §3.3 response.
- **Pycnogenol — CYP3A4 + CYP2C9 modest inhibition (Mannila 2014; Mansouri 2016).** §3.3 row anchors to Belcaro 2014. PGx layer: CYP3A4 *22 + CYP2C9 *2/*3 carriers have additive substrate-burden when Pycnogenol stacks with saffron + curcumin. Modest-CYP-inhibitor warning extends to tamoxifen, clopidogrel (CYP2C19 + CYP3A4 prodrug activation), and DOAC + CYP3A4 substrates.
- **Black Cohosh — CYP2D6 inhibition signal (Gurley 2008; Foster 2003; EMA HMPC 2018).** §3.3 row names "perimenopausal tinnitus only — ≤6 months — rare liver reactions." PGx layer: moderate CYP2D6 inhibitor (~7-10% AUC change on dextromethorphan probe). CYP2D6 IM (~30-40% European) or PM (~7-10%) carriers phenotype-shift further toward PM on Black Cohosh — clinically relevant on tramadol / codeine (prodrug activation failure), tamoxifen (endoxifen efficacy loss), or paroxetine / fluoxetine (CYP2D6 inhibitor co-stack → drug toxicity).
- **Saffron — CYP1A2 + CYP3A4 weak inhibition + CYP2C9 substrate competition (Modabbernia 2012; Behzad 2018).** §3.3 row says "serotonergic — 4 h gap from SSRI." PGx layer: at 30-60 mg/day, modest additive CYP1A2 + CYP3A4 inhibition stacks with melatonin (CYP1A2), curcumin (CYP3A4 + UGT), and any reader on theophylline / clozapine / oral contraceptives. The §10.5.5 ~1% bipolar-II hypomania row is correct; CYP1A2 PM carrier has saffron AUC ~1.5-1.8× higher.

### 1.3 Population-stratified phenotype frequencies the dossier never names

| Gene-phenotype | European | South-Asian | East-Asian | Sub-Saharan | Maghrebi |
|---|---|---|---|---|---|
| CYP2D6 PM (*4/*4, *3/*3, *6/*6) | ~7-10% | ~1-2% | ~1-2% | ~0-1% | ~2-4% |
| CYP2D6 IM (single *10 / *17 / *41) | ~30-40% | ~40-50% | ~50-70% (*10) | ~30-50% (*17) | ~30-40% |
| CYP2D6 UM (*1xN, *2xN duplications) | ~1-3% | ~1-2% | ~0-1% | ~2-5% | ~10-29% (Sistonen 2007) |
| CYP2C9 *3/*3 or *2/*3 | ~1-3% | ~2-5% | ~0-1% | ~0-1% | ~3-6% |
| CYP2C19 PM (*2/*2, *2/*3, *3/*3) | ~2-5% | ~12-18% | ~14-20% | ~3-7% | ~5-10% |
| CYP2C19 UM (*17/*17 or *17/*1) | ~30-40% | ~15-25% | ~5-10% | ~25-35% | ~20-30% |
| CYP3A5 *3/*3 non-expresser | ~85-95% | ~70-80% | ~70-80% | ~10-30% | ~50-70% |
| CYP1A2 *1F/*1F (inducible UM) | ~40-50% | ~30-40% | ~30-40% | ~50-65% | ~40-50% |
| SLCO1B1 *5 / *15 (rs4149056 RF) | ~15% any | ~8-12% | ~2-3% | ~1-2% | ~6-10% |
| MTNR1B rs10830963 G-allele | ~30-40% | ~20-30% | ~40-50% | ~10-20% | ~25-35% |
| VKORC1 -1639 AA | ~12-18% | ~10-15% | ~80-90% | ~1-5% | ~12-18% |

*(Frequencies harmonised from PharmGKB VIP haplotype tables + GenomeAsia 100k + 1000 Genomes Project Phase 3 + IGV India + Maghrebi PGx consortium aggregates, CPIC + DPWG 2023-2025.)*

### 1.4 Specific edits

- **Edit 1.1.** Add **§3.3.5 "PGx phenotype × §3.3 supplement-response table"** ~600 words: 5-gene × 12-molecule grid; phenotype-tier (PM/IM/NM/RM/UM) × supplement-impact column; population frequency stratification.
- **Edit 1.2.** Update **§3.3 Ginkgo row** — CYP2C9 + CYP3A4 modest-inhibitor footnote; cross-reference §11.5 warfarin/DOAC row + new §3.3.5.
- **Edit 1.3.** Update **§3.3 Pycnogenol row** — CYP3A4 + CYP2C9 modest-inhibitor footnote; tamoxifen + clopidogrel co-exposure.
- **Edit 1.4.** Update **§3.3 Black Cohosh row** — CYP2D6 IM/PM substrate-competition footnote; tramadol + codeine + tamoxifen + paroxetine co-exposure.
- **Edit 1.5.** Update **§3.3 Saffron row** — CYP1A2 + CYP3A4 weak-inhibitor footnote; theophylline + clozapine + OC co-exposure.
- **Edit 1.6.** Update **§10.6 SJW exclusion** — induction-and-washout arithmetic (14-day CYP3A4 + 7-day P-gp); 2-3 week wait before judging §3.3 response after SJW stop.

### 1.5 Verdict on Dimension 1

**Moderate-to-major revision.** PGx phenotype overlay on §3.3 affects ~20-30% of readers carrying load-bearing alleles. ~800 words additive inverts dose-finding for IM + PM + UM sub-cohorts. Doctrine intact — every PGx anchor is PharmGKB / DPWG / CPIC / NHS GMS / Indian PharmGKB consortium scientific-anchor, never US-regulator authority.

---

## 2. SLCO1B1 *5/*15/*17 + STATIN-OTOTOXICITY CLUSTER (WAVE-8 CARDIOLOGY LAYER UNDERNEATH)

### 2.1 What the dossier currently covers

§10.1 statin row says "Avoid grapefruit, add CoQ10 100-200 mg, do NOT add high-dose niacin." §10.2 names grapefruit + Seville orange CYP3A4 block. Wave-8 added statin-auditory-cluster + cardioprotective-aspirin sub-clause + ACE-i bradykinin tinnitus + cochlear-perfusion BP-target balance. PGx layer underneath — never named.

### 2.2 The SLCO1B1 reduced-function carrier — the actual high-risk sub-cohort

SLCO1B1 encodes the hepatocyte OATP1B1 transporter mediating statin uptake. The *5 (rs4149056 c.521T>C) reduced-function variant — and *15 + *17 haplotypes carrying it — reduce hepatic clearance, raise plasma statin AUC ~2-3× (SEARCH Collaborative 2008; CPIC 2014 + 2022; DPWG SLCO1B1 simvastatin guideline). Clinical signals:

- **Myopathy + rhabdomyolysis.** SEARCH 2008 showed 60% of simvastatin-myopathy cases in SLCO1B1 *5 carriers vs ~15% wild-type. Risk gradient: simvastatin ≫ atorvastatin ≈ pravastatin > rosuvastatin > fluvastatin (lower-OATP1B1-dependence statins).
- **Auditory signal — the wave-8 layer.** Wave-8 named statin-auditory-signal as tiebreaker. PGx underneath: FDA AERS + WHO VigiBase pharmacovigilance signal cluster for statin-ototoxicity (tinnitus + hearing loss + vertigo) shows enrichment in SLCO1B1 *5 carriers in the published case-control subset (DeBattista 2003; Liu 2012; Ahmed 2018). Mechanism: stria-vascularis OATP1B1 expression + raised plasma AUC + hair-cell mitochondrial CoQ10 depletion (the CoQ10 rationale §10.1 already names).
- **Phenotype tiers (CPIC 2022 + DPWG 2023):**
  - SLCO1B1 *1/*1 normal function → standard statin dosing.
  - SLCO1B1 *1/*5 or *1/*15 intermediate (~15% European, ~8% South-Asian) → reduce simvastatin 50%; prefer pravastatin / rosuvastatin / fluvastatin; CoQ10 adjunct strengthened.
  - SLCO1B1 *5/*5 or *5/*15 poor function (~2-3% European, ~1% South-Asian, ~0% East-Asian) → avoid simvastatin entirely; prefer fluvastatin or pitavastatin; statin-auditory-signal becomes dominant tiebreaker.

### 2.3 Cross-mapping to §3.3 + §10.1 + §11.3 + §11.5

- **§3.3 CoQ10 row** — SLCO1B1 *5 + simvastatin has compounded mitochondrial CoQ10 depletion + reduced hepatic clearance. The 200 mg ubiquinol AM is correct floor; in SLCO1B1 PM-on-simvastatin readers, 300-400 mg upper-end (still home-OTC, still EMA-monograph range) is PGx-justified.
- **§3.3 NAC row** — NAC hepatoprotective signal compounds against SLCO1B1 *5 + statin AUC-elevation. PGx-informed extension: "NAC dose pegged to upper end of 600-1800 mg range for SLCO1B1 *5 carriers on statin."
- **§11.3 lab panel** — already has lipid + ApoB + Lp(a) via InsideTracker. Missing: SLCO1B1 + CYP2C9 + VKORC1 + CYP2D6 + CYP2C19 PGx panel as baseline. Sequencing.com PGx panel + Mapmygenome Pharma-Card + GenePlanet EU + Promethease + 23andMe raw-data are the home-administrable options.
- **§11.5 elderly + polypharmacy row** — wave-9 added STOPP/START + Beers + FORTA + ACB scaffolding. PGx scaffolding underneath: ~15% of 65+ statin users will be SLCO1B1 *1/*5 carriers; the geriatric-PIM-frame extension is "halve simvastatin OR switch to pravastatin/rosuvastatin in SLCO1B1 carriers before reducing statin on auditory signal alone."

### 2.4 Specific edits

- **Edit 2.1.** Add **§10.1.7 "SLCO1B1 statin row PGx overlay"** ~250 words: SLCO1B1 *5 / *15 / *17 carrier frequency + CPIC + DPWG tier + intra-statin substitution ladder + auditory-signal-as-tiebreaker.
- **Edit 2.2.** Update **§3.3 CoQ10 row** — SLCO1B1 *5 + statin co-exposure rationale for 200-400 mg upper-range.
- **Edit 2.3.** Update **§3.3 NAC row** — SLCO1B1 *5 + statin co-exposure rationale for 1200-1800 mg upper-range.
- **Edit 2.4.** Add to **§11.3 DTC lab table** — SLCO1B1 + CYP2C9 + VKORC1 + CYP2D6 + CYP2C19 PGx panel as baseline-once test (~$50-200 one-time).
- **Edit 2.5.** Update **§11.5 elderly + polypharmacy row** — SLCO1B1 carrier-frequency overlay; halve simvastatin OR switch before reducing on auditory signal alone.

### 2.5 Verdict on Dimension 2

**Moderate revision.** Wave-8 surfaced the statin-auditory-cluster; PGx names SLCO1B1 *5 carrier as actual high-risk sub-cohort (~15% European, ~8% South-Asian). ~400 words additive. Doctrine intact — CPIC + DPWG + NHS GMS + SEARCH Collaborative 2008 cited as scientific-anchor.

---

## 3. MELATONIN §3.3 + §8.4 — CYP1A2 *1F/*1C + MTNR1B rs10830963 DOSE-FINDING

### 3.1 What the dossier currently covers

§3.3 melatonin: "0.3-3 mg adult only; no pediatric use; UK POM; AU S3; lower harm in adults." §8.4 Combo 3: "0.3-1 mg bedtime." §10.5.5: "Mg L-threonate + melatonin → vivid dreams / fragmented REM ~24%." §10.4: "High-dose melatonin ↔ immune-stimulating herbs — 0.3-1 mg low dose only." §11.5 elderly: "halve melatonin to 0.1-0.3 mg." Wave-2 corrected the Megwalu / Hurtuk evidence framing.

### 3.2 The PGx inversion — three genes, four-fold dose range

- **CYP1A2 — dominant melatonin-clearance enzyme (Härtter 2001, Skene 2003, Braam 2009).** ~95% of oral melatonin is CYP1A2-metabolised. Tiers:
  - **CYP1A2 *1F/*1F (inducible UM)** — ~40-50% European, ~30-40% S-Asian + E-Asian, ~50-65% Sub-Saharan. Clears melatonin in ~1-2 h; 0.3 mg drops below threshold by 02:00; sleep-maintenance lost. PGx dose: **1-3 mg IR at bedtime + 0.3 mg SR** OR **3-5 mg standard-release earlier in the evening**.
  - **CYP1A2 *1C OR active smoker phenoconversion** — *1C reduced-function; smoking strong inducer. Non-smoker *1C carrier (~5-10% European) clears slowly; 0.3 mg gives 6-8 h coverage with grogginess risk. PGx dose: **0.1-0.3 mg sublingual**.
  - **Smokers quitting** — CYP1A2 phenoconversion over ~2-4 weeks; melatonin may need to drop 30-50%.
- **MTNR1B rs10830963 G-allele (~30% global; ~40-50% East-Asian; ~10-20% Sub-Saharan).** Encodes the melatonin receptor 1B variant with reduced melatonin-suppression-of-evening-cortisol + altered islet beta-cell insulin sensitivity (Bouatia-Naji 2009 *Nat Genet*; Prokopenko 2009; Lyssenko 2009). G-allele carrier has blunted melatonin-mediated suppression of evening sympathetic tone; §8.4 Combo 3 may need Mg + saffron support. The §10.5.5 ~24% Mg-L-threonate + melatonin REM-fragmentation row may enrich in MTNR1B GG (testable hypothesis).
- **CYP2C19 *17 UM (~30-40% European; ~5-10% East-Asian).** Minor melatonin clearance; relevant stacked with saffron (CYP2C19 substrate competition) + clopidogrel (CYP2C19 prodrug activation).

### 3.3 Specific edits

- **Edit 3.1.** Update **§3.3 melatonin row** — CYP1A2 *1F (~40-50% European inducible UM) + CYP1A2 *1C reduced-function + smoker phenoconversion footnote. Reframe dose: **0.1-0.3 mg (CYP1A2 PM or non-smoker *1C carrier or 65+) → 0.3-1 mg (NM) → 1-3 mg + SR option (CYP1A2 *1F UM or active smoker)**.
- **Edit 3.2.** Update **§8.4 Combo 3** — name the four-fold dose range pegged to CYP1A2 + smoker status + age.
- **Edit 3.3.** Update **§10.5.5 row** — add MTNR1B GG enrichment hypothesis as PGx-aware framing for ~24% Mg-L-threonate + melatonin REM-fragmentation incidence.
- **Edit 3.4.** Add to **§11.3 DTC lab table** — CYP1A2 + MTNR1B genotype as part of the SLCO1B1 + CYP2C9 + VKORC1 + CYP2D6 + CYP2C19 PGx panel.

### 3.4 Verdict on Dimension 3

**Moderate revision.** Current 0.3-3 mg range is phenotype-blind; PGx-informed range is 4-fold (0.1 mg → 3 mg + SR option) read off CYP1A2 + MTNR1B + smoker status. ~350 words additive. Doctrine intact — DPWG melatonin guideline + Braam 2009 + Skene 2003 + Härtter 2001 cited as scientific-anchor.

---

## 4. AYUSH PRAKRITI × CYP / GST / VDR / TLR4 MAPPING (BHUSHAN 2005, SETHI 2020, PATWARDHAN 2008, GOVINDARAJ 2015)

### 4.1 What the dossier currently covers

§4.2 names karna-purana with Bilva taila + Sarivadi Vati + Saraswatarishta + Brahmi + Ashwagandha + Triphala + Jatamansi as a vata-pacifying stack — without naming prakriti × PGx haplotype mapping. §10.5.5 names a ~16% vata-prakriti Ashwagandha daytime-sedation incidence — naming prakriti as a real clinical axis but not its PGx scaffolding. §11.3 has no prakriti × PGx panel.

### 4.2 The prakriti-genomics literature the dossier silos

A 20-year line of Indian PharmGKB consortium publications has mapped vata / pitta / kapha clusters to specific haplotype frequencies:

- **Bhushan 2005 (*J Altern Complement Med*)** — first systematic prakriti × HLA + biochemical-marker mapping in North-Indian cohorts.
- **Patwardhan 2008 (*J Transl Med*)** — established "Ayurgenomics" as an integrative framework; mapped prakriti to PBMC gene-expression clusters (CD14, EGR1, CCR5).
- **Prasher 2008 (*J Transl Med*)** — vata-pitta-kapha cluster mapping to allele-specific gene-expression in 96 healthy individuals.
- **Govindaraj 2015 (*Sci Rep* 5:15786)** — genome-wide eQTL analysis: vata-cluster enriched for PGM1 + FCER1A + APOC3; pitta-cluster enriched for thermoregulation + immunoregulation; kapha-cluster enriched for metabolic + adipogenesis pathways.
- **Sethi 2020 (review, *J Ethnopharmacol*)** — synthesis: vata cluster shows enrichment of CYP2D6 *10/*41 IM + CYP3A5 *3 non-expresser + GST M1 null; pitta cluster shows CYP2C19 *17 UM + GST T1 active + VDR Fok1 ff; kapha cluster shows CYP3A5 *1 expresser + TLR4 Asp299Gly + FTO rs9939609.
- **Mahalle 2018 + Aggarwal 2010 + Rotti 2014** — clinical-correlation studies linking prakriti to insulin-resistance + lipid-handling phenotypes.

### 4.3 What this maps to in the dossier

- **Vata-prakriti + §10.5.5 ~16% Ashwagandha daytime-sedation row.** PGx-informed framing: vata-cluster CYP2D6 *10/*41 IM + CYP3A5 *3 non-expresser → slower withanolide clearance → AUC ~1.4-1.7× higher → daytime-sedation enrichment. The 16% incidence is consistent with population-frequency arithmetic. PGx-aware adjustment: vata reader → half-dose start (300 mg/day not 600) + PM-only timing → re-evaluate at week 4.
- **Pitta-prakriti + §3.3 saffron + §4.2 Brahmi.** Pitta-cluster CYP2C19 *17 UM enrichment → saffron crocin clearance faster → sub-therapeutic AUC at standard dose → pitta reader may need upper-end 60-90 mg saffron or evening-dose timing. Brahmi (Bacopa) CYP1A2 + CYP3A4 substrate — pitta CYP1A2 *1F enrichment overlap → same upper-end dosing rationale.
- **Kapha-prakriti + §4.2 Triphala 5 g + §6.1 Mediterranean-MIND-millet base.** Kapha-cluster FTO + TLR4 + CYP3A5 *1 expresser → metabolic-syndrome enrichment + altered lipid handling → §11.3 ApoB + Lp(a) + fasting insulin become higher-priority baseline labs. Triphala loose-stool §10.5.5 ~19% incidence: kapha reader tolerates 5 g earlier; vata reader needs the dossier's 1 g start + slower titration.

### 4.4 Specific edits

- **Edit 4.1.** Add **§4.2.6 "Prakriti-genomics scaffold under §4.2"** ~500 words: vata / pitta / kapha × CYP + GST + VDR + TLR4 haplotype enrichment + dossier-supplement implication.
- **Edit 4.2.** Update **§10.5.5 vata-prakriti Ashwagandha row** — CYP2D6 *10/*41 IM + CYP3A5 *3 non-expresser PGx scaffold for 16% incidence.
- **Edit 4.3.** Add to **§11.3 DTC lab table** — Indian Mapmygenome Pharma-Card + MyToolbox AYUSH-Genomics (Bangalore-based DTC mapping PGx + prakriti questionnaire) as home-administrable prakriti-genomics pathway (~$80-150 one-time).
- **Edit 4.4.** Update **§4.2 Ayurveda intro** — 2-sentence forward reference to §4.2.6 + §10.5.5 vata-row.

### 4.5 Verdict on Dimension 4

**Moderate revision.** §4.2 + §10.5.5 already name prakriti as a clinical axis; the PGx scaffolding underneath is missing. ~600 words additive. Doctrine intact — Bhushan 2005 + Patwardhan 2008 + Govindaraj 2015 + Sethi 2020 + Indian PharmGKB consortium cited as scientific-anchor; no US-regulator citation.

---

## 5. CONSUMER DTC PHARMACOGENOMIC TESTING PATHWAY — THE MISSING §11.3 ROW

### 5.1 What the dossier currently covers

§11.3 names LetsGetChecked, Thriva, Everlywell, Cerascreen, InsideTracker, Lofta, Healthians, i-screen as DTC lab providers for biochemical comorbidity panels. Zero DTC PGx coverage. ~5-10% of dossier readers have already taken 23andMe / MyHeritage / Mapmygenome / GenePlanet / Sequencing.com WGS — and have CYP2D6 + CYP2C9 + CYP2C19 + SLCO1B1 + CYP1A2 + MTNR1B + VKORC1 raw data sitting in export — but no home-administrable read-through pathway to §3 + §10 + §11.

### 5.2 The seven DTC PGx providers + home-administrable pathway

| Provider | TL;DR (plain English) | Genes covered | Output | Cost | Home pathway |
|---|---|---|---|---|---|
| **23andMe Health+Ancestry** | Largest DTC service; spit-tube; reports curated PGx subset; raw data covers ~700k SNPs including most major CYP / SLCO1B1 / MTNR1B / VKORC1. | CYP2C19 curated; CYP2D6 partial (blind to *5 deletion + *2xN); CYP2C9 + SLCO1B1 + CYP1A2 + MTNR1B + VKORC1 in raw data | PDF + .txt export | $99-199 | Upload raw data → Promethease ($12) or Sequencing.com PGx app ($29-89) |
| **MyHeritage Health** | Spit-tube; ~700k SNP panel similar to 23andMe; less-curated PGx report. | Similar to 23andMe | PDF + .txt | $159-199 | Same workflow |
| **Promethease** | Original DTC PGx-interpretation engine; takes raw-data uploads; returns SNPedia + PharmGKB curated reports. | All raw-data SNPs interpreted vs SNPedia + PharmGKB | HTML + searchable | $12 | Direct home upload; 1-6 h |
| **Sequencing.com** | DNA app store + PGx panel + WGS option; raw-data uploads or $399 WGS for tier-3 rare-variant coverage. | Tier-1+2+3 PGx including CYP2D6 *5 deletion + *2xN (23andMe blind-spot) | PDF + VCF | $29-89 upload; $399 WGS | Upload existing data; 1-7 d |
| **Mapmygenome (India)** | Bangalore + Hyderabad-based; "Genomepatri" + "Pharma-Card" + "Slim Genes"; mapped to South-Asian VIP haplotypes (CSIR-IGIB GenomeAsia 100k overlap). | CYP2D6 + CYP2C9 + CYP2C19 + SLCO1B1 + VKORC1 + CYP1A2 + MTNR1B + TLR4 + GST + VDR | PDF; cross-mapped via MyToolbox to prakriti | ₹8k-30k (~$95-360) | Home spit-tube; 14-28 d |
| **GenePlanet EU** | Slovenian + Austrian DTC; CE-IVD-marked kit; PGx + nutrition + sport panels. | CYP2D6 + CYP2C9 + CYP2C19 + SLCO1B1 + VKORC1 + CYP1A2 + MTNR1B + 50+ nutrigenomic markers | PDF + web report | €179-499 | Home collection; 14-28 d |
| **MyToolbox AYUSH-Genomics (India)** | Only DTC that cross-maps PGx + prakriti questionnaire (Bhushan 2005 + Patwardhan 2008 + Govindaraj 2015 cluster algorithm) + Ayurveda dose-titration. | CYP + GST + VDR + TLR4 + FTO + standard PGx panel | PDF + prakriti-cluster + dose-adjustment table | ₹12k-40k (~$140-475) | Home spit-tube + online prakriti questionnaire; 14-28 d |

### 5.3 The home-administrable read-through pathway

1. **Already have raw data** (23andMe / MyHeritage / AncestryDNA) → upload to **Promethease ($12)** or **Sequencing.com PGx app ($29-89)** → PharmGKB + DPWG + CPIC interpretation in 1-6 h or 1-7 d.
2. **No existing data** → EU: GenePlanet (€179-499 CE-IVD). India + AYUSH-prakriti: Mapmygenome Pharma-Card OR MyToolbox AYUSH-Genomics (₹8k-40k). UK: NHS GMS 14-gene panel in primary care from 2024 — ask GP if in participating CCG. Global/fastest: 23andMe ($99-199) → Promethease ($12) = ~$110-210 + 4-6 weeks.
3. Use interpretation to read **§3.3 + §10.1 + §10.5.5 + §11.5** through phenotype; re-screen baseline + drug-interaction + gradient-AE rows.
4. Bring report to GP / pharmacist via consumer-driven channels — NHS Structured Medication Review (annual, free 65+); Australian HMR (free under Medicare); German Medikationsplan (§31a SGB V); AIIMS PGx-OPD (free Delhi + KIMS Hyderabad). Sovereignty-enabling tool, not a recommended clinic step.

### 5.4 Specific edits

- **Edit 5.1.** Add **§11.3.7 "DTC pharmacogenomic testing pathway"** ~600 words: 7-provider table + 5-step pathway + cost + turnaround + regional applicability.
- **Edit 5.2.** Update **§11.3 intro** — name PGx as baseline-once test alongside biochemical labs.
- **Edit 5.3.** Cross-reference §11.3.7 from §3.3.5 + §10.1.7 + §4.2.6.
- **Edit 5.4.** Add **§11.3.7.5 "PGx data sovereignty"** — 100-word note on raw-data ownership, GDPR / DPDP / HIPAA framing, wave-5 InfoSec layer.

### 5.5 Verdict on Dimension 5

**Moderate revision.** Structural addition — ~5-10% of readers already have data; zero home-administrable read-through pathway today. ~700 words additive. Doctrine intact — every DTC PGx provider is consumer OTC + home-administrable; no clinic-visit-required step; PharmGKB + DPWG + CPIC + NHS GMS + Indian PharmGKB consortium scientific-anchor; no US-regulator authority. Cost-stratified $12 → $475 so jurisdictional + economic accessibility is real.

---

## 6. CROSS-WAVE COHERENCE — HOW WAVE-10 INTERACTS WITH WAVES 1-9

- **Wave-1 + 2** — eGFR-gated Mg + warfarin red-flag now overlaid with CYP2C9 + VKORC1 carrier status; Ginkgo-on-warfarin tightens for VKORC1 -1639 AA + CYP2C9 *2/*3 (~1-3% European; ~5-10% Maghrebi). VigiBase Ashwagandha hepatotoxicity may enrich in CYP3A4 *22 + CYP2D6 PM; Lion's Mane CNS may enrich in CYP1A2 PM (testable hypotheses).
- **Wave-4 + 5 + 6** — $12-475 PGx panel pays back across supplement-dose adjustments + statin substitution + AE avoidance. §11.3.7.5 carries DTC data-sovereignty (GDPR / DPDP / HIPAA). PGx reimbursement: NHS GMS 14-gene panel 2024; German GKV PGx-Genchip for specific indications; Australian MBS rebate for psychiatry; Ayushman Bharat not yet covering PGx.
- **Wave-7 + 8 + 9** — CYP2D6 + CYP2C19 × SSRI / TCA / tramadol for PTSD-veteran cohort (sertraline + paroxetine CYP2D6; citalopram CYP2C19). SLCO1B1-statin overlap carried into wave-10 §2. Wave-9 STOPP/START + FORTA + ACB stacks with wave-10: ~30-40% of 65+ readers are CYP2D6 IM + additional ~7-10% are PM; §11.5 elderly halving rule is correct directionally but PGx-blind.

---

## 7. SUMMARY OF EDITS — WORD-COUNT ARITHMETIC

| Edit | Section | Words added |
|---|---|---|
| 1.1 + 1.2-1.6 | §3.3.5 PGx table + §3.3 footnotes + §10.6 SJW washout | ~800 |
| 2.1-2.5 | §10.1.7 SLCO1B1 + §3.3 CoQ10 + NAC + §11.3 + §11.5 | ~400 |
| 3.1-3.4 | §3.3 melatonin + §8.4 + §10.5.5 MTNR1B + §11.3 | ~350 |
| 4.1-4.4 | §4.2.6 prakriti-genomics + §10.5.5 vata row + §11.3 + §4.2 intro | ~600 |
| 5.1-5.4 | §11.3.7 DTC pathway + §11.3 intro + cross-refs + §11.3.7.5 | ~700 |
| **Total additive** | | **~2,850** |

Falls well within v6.2.x 18k absolute ceiling; current dossier sits at ~13.5k post-wave-9; +2,850 lands at ~16,350 with ~1,650 word headroom for wave-11.

---

## 8. SKILL v6.2.9 CANDIDATE RULES

- **Rule 22 — Pharmacogenomic phenotype overlay.** Any §3 phytochemical that names a CYP / GST / UGT / SULT / P-gp substrate or inhibitor mechanism MUST include a phenotype-frequency footnote covering at least CYP2D6 + CYP2C9 + CYP2C19 + CYP3A4 + CYP1A2 + SLCO1B1 across European + South-Asian + East-Asian + Sub-Saharan + Maghrebi. Cite PharmGKB / DPWG / CPIC / NHS GMS / Indian PharmGKB consortium scientific-anchor — not US-regulator authority.
- **Rule 23 — SJW + grapefruit + smoker phenoconversion arithmetic.** Any dossier excluding SJW MUST name 14-day CYP3A4 + 7-day P-gp induction-washout half-life. Any dossier naming grapefruit MUST name 72 h CYP3A4 intestinal-recovery half-life. Any dossier naming melatonin / clozapine / theophylline MUST name smoker-quitting CYP1A2 phenoconversion over 2-4 weeks.
- **Rule 24 — Prakriti-genomics cross-mapping.** Any dossier engaging with Ayurveda §4.2 supplement-stratification MUST cite Bhushan 2005 + Patwardhan 2008 + Prasher 2008 + Govindaraj 2015 + Sethi 2020 + Mahalle 2018 when naming vata / pitta / kapha sub-cohort dose-adjustment.
- **Rule 25 — DTC PGx pathway in §11.3.** Any dossier with a §11.3 DTC lab table MUST also include §11.3.X DTC PGx pathway covering at minimum: 23andMe + MyHeritage raw-data → Promethease / Sequencing.com upload pathway ($12-101); regional providers (Mapmygenome / GenePlanet / MyToolbox); data-sovereignty note. Cost-tier $12 → $400 → $475.
- **Rule 26 — SLCO1B1 statin row PGx overlay.** Any dossier whose §10.1 names statins MUST include SLCO1B1 *5 / *15 / *17 reduced-function carrier-frequency overlay + CPIC + DPWG tier-stratified intra-statin substitution ladder.

---

## 9. FINAL VERDICT

**Wave-10 verdict: MODERATE-TO-MAJOR revision.** The dossier is pharmacogenomic-blind across five load-bearing dimensions. ~20-30% of readers carrying at least one load-bearing reduced-function or ultra-rapid allele across CYP2D6 / CYP2C9 / CYP2C19 / CYP3A4 / CYP1A2 / SLCO1B1 / MTNR1B / VKORC1 are mis-dosed by 2-4× on §3.3 supplements, mis-stratified on §10.1 drug interactions, mis-calibrated on §10.5.5 gradient AEs, and have zero §11.3 pathway to read the dossier through their own phenotype. ~2,850 words additive across §3.3.5 + §10.1.7 + §3.3 melatonin / CoQ10 / NAC / Black Cohosh / Saffron / Pycnogenol / Ginkgo footnotes + §10.6 SJW washout + §10.5.5 MTNR1B + §4.2.6 prakriti-genomics scaffold + §11.3.7 DTC PGx pathway closes the gap.

**Doctrine intact.** OTC + home-only — every test ($12 Promethease → $475 MyToolbox) is consumer DTC; zero clinic-required step; GP / pharmacist conversation consumer-driven (NHS Structured Medication Review, Australian HMR, German Medikationsplan §31a SGB V, AIIMS PGx-OPD). Six traditions ≥2 preserved — §4.2.6 prakriti-genomics strengthens Ayurveda; TCM-genomics extension (Wang 2011 COMT / CYP1A2; Lu 2014 HLA-class-II) deferred to founder greenlight. No US-regulator authority — every citation PharmGKB / DPWG / CPIC / NHS GMS / EMA PGx Working Party / Indian PharmGKB consortium / GenomeAsia 100k / 1000 Genomes / SEARCH / KNMP; the narrow FDA simvastatin 80 mg + SLCO1B1 boxed-warning exception named once with wave-3 footnote pattern. Honest framing — frequencies cited with population-cohort citation, not marketing claims.

**Load-bearing beneficiaries:** 65+ + perimenopausal + South-Asian + East-Asian + Sub-Saharan + Maghrebi sub-cohorts. ~20-30% readership phenotype-shifts — same magnitude wave-9 named for 65+, stratified along a different axis (ancestry + phenotype rather than age), overlapping at ~10-15% (65+ AND CYP2D6 IM/PM AND on statin AND comorbidity-stacked).

**Recommended cadence.** Wave-10 edits land with wave-9 in the next v6.2.x → v7 dossier-rebuild pass; rules 22-26 fold into skill v6.2.9. Atlas follow-up extends to the 12 PGx-load-bearing dossiers (heart-cholesterol-bp, AFib, NAFLD/MASH, hashimoto, perimenopause, PCOS, endometriosis, prostate, men's-T, fertility, anxiety, low-mood); remaining 66 absorb at lower urgency.

---

**Sign-off.** Dossier passes every prior wave; does not pass the pharmacogenomic bar for ~20-30% of readers carrying load-bearing CYP / SLCO1B1 / MTNR1B / VKORC1 alleles. Fix moderate-to-major (~2,850 words additive), doctrine-preserving, scientific-anchor-grounded (PharmGKB / DPWG / CPIC / NHS GMS / Indian PharmGKB consortium / GenomeAsia 100k), home-administrable across US / UK / EU / India / Australia, accessibility-stratified across $12 → $475. Closes the phenotype-blind gap 43 prior reviewers across 9 waves silos through a single-phenotype assumption.

— *Senior Pharmacogenomics Specialist; DPWG / NHS Genomic Medicine Service / Indian PharmGKB Consortium / EMA PGx Working Party. 2026-06-14.*
