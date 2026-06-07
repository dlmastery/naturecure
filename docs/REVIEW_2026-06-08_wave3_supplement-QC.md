# REVIEW 2026-06-08 — Wave 3: Supplement Quality-Control + COA Audit (Tinnitus Dossier)

**Reviewer role.** Senior analytical chemist + supplement quality-control specialist. Twelve years at Eurofins, NSF International, Informed-Sport, ConsumerLab, the Indian Pharmacopoeia Commission, and the TGA pre-market audit unit. Routine workload: third-party batch testing on OTC botanicals + dietary supplements + traditional formulations for (a) identity via HPLC fingerprint + DNA barcoding, (b) potency via HPLC-MS / UPLC-DAD, (c) heavy-metal residues via ICP-MS for Pb / As / Hg / Cd, (d) microbiological via USP <61> / <62>, (e) pesticide residues via GC-MS / LC-MS-MS, (f) aflatoxin via HPLC-FLD, and (g) adulteration screens against the Saper 2008 paradigm (the Boston-Ayurvedic-heavy-metal cluster).

**Materials reviewed.**
- `nichecore/research/tinnitus-support.md` (post-wave-2, 1145 lines)
- `nichecore/lib/data.ts` — bundle entries (in particular the `tinnitus-quiet-90` bundle, line 48; the global `qualityScore` + `qualitySignals` schema)
- `.claude/skills/ailment-360-research/SKILL.md`
- `docs/REVIEW_2026-06-05_medical_safety.md` §4 (wave-1 high-level QC gap)
- `docs/REVIEW_2026-06-07_wave2_pharmacovigilance.md` (Saper 2008 + per-molecule residue framing)

**Brief.** The wave-1 medical reviewer surfaced the structural QC absence (no COA registry, no lot traceability, no recall pipeline). The wave-2 pharmacovigilance specialist surfaced the per-molecule and per-formula AE registries. This wave-3 audit is the per-brand + per-molecule + per-batch analytical-chemistry audit — the layer beneath the medical-safety and pharmacovigilance layers. The right unit for QC critique is not the dossier paragraph or the §11.5 gate; it is the actual molecule that lands in the user's mouth.

**One-line verdict.** The tinnitus dossier names brands at a higher fidelity than any other natural-medicine commerce property I have audited in the last six years — but the gap between *naming a brand* and *verifying the bottle that ships to a user's address* is wider than the dossier's surface concedes. The biggest exposures are (a) the Tebonin/EGb 761 vs generic Ginkgo spec drift, (b) the Pycnogenol vs unspecified pine-bark trial-spec mismatch, (c) Saper 2008-cluster heavy-metal risk on Patel Brothers / Apna Bazar / generic-Chinatown sourcing, (d) Lenire + taVNS + red-light grey-market clone dilution of the device class, and (e) absence of a lot-traceability + recall ingestion pipeline that turns the storefront into a real recall destination, not a one-way affiliate funnel.

**Final scoresheet (0 worst, 10 best).**

| Dimension | Score | One-line verdict |
|---|---|---|
| 1. Per-brand identity + potency verification | 4 / 10 | Schwabe Tebonin + Magtein + KSM-66 + Horphag Pycnogenol are named correctly; but the dossier sometimes lets unspecified "pine bark" / generic Ginkgo / generic threonate stand in. Trial-spec discipline drifts as you move down the §3.3 table. |
| 2. Heavy-metal residue on Ayurvedic / Siddha / Unani / TCM formulas | 2 / 10 | Wave-2 added the Saper 2008 paragraph in §10.5.5; structural per-supplier audit + lab-test pathway is still absent. Patel Brothers + Apna Bazar + Chinatown bulk + Hamdard imports each have a different risk profile that the dossier flattens. |
| 3. Microbiological + aflatoxin + pesticide on botanicals | 3 / 10 | Triphala + Lion's Mane + Saffron + Black Cohosh + Ashwagandha each have a *named* QC failure mode in the world supply (aflatoxin, identity adulteration, sulphur dioxide, species substitution). The dossier surfaces zero of these per-botanical. |
| 4. Device QC + grey-market problem at depth | 3 / 10 | Wave-2 §10.5.5 added a grey-market warning. Per-device verification spec (wavelength, irradiance, waveform, pulse rate, electrode-impedance match) is absent. A user buying a $40 "Vielight-style" knockoff on Temu cannot be told from a user buying the real $1,749 unit. |
| 5. Lot-traceability + recall ingestion + AE-to-batch chain | 1 / 10 | No lot capture on purchase, no recall feed ingestion, no customer affordance to record a lot number, no AE → batch linkage. This is the layer that makes a real OTC commerce safety system rather than a content site that ships pills. |

**Bottom line for the founder.** All five gaps are closable without abandoning doctrine (OTC + home + six traditions + no US-regulator authority). Two of them — per-brand spec discipline (Dim 1) and a per-formula heavy-metal honesty callout (Dim 2) — can ship as text edits this week. Two more — botanical QC reference table (Dim 3) and the device QC verification spec (Dim 4) — can ship as appendix tables in 2-3 weeks. The fifth — lot traceability + recall ingestion — is a 4-8 week infrastructure build that should gate the *subscription* button, not the dossier itself.

The storefront should not sell a 90-Day Tinnitus Quiet Pack as a recurring subscription until at minimum a per-shipment lot-number capture + a one-channel recall feed (EMA EUDAMED for devices + EU RAPEX + UK MHRA Drug Safety Updates) is wired in. Once-off purchases at the affiliate-referral layer are defensible today.

---

## Strengths to acknowledge before attacking

Reviewer discipline first: name what is genuinely better-than-average so the criticism that follows is calibrated.

1. **Schwabe Tebonin EGb 761 is named specifically, not as "Ginkgo".** Line 124 (§3.3) names Schwabe Tebonin with the EGb 761 standardisation. This is the analytically correct identifier — EGb 761 is the extract specification that 24% flavone glycosides + 6% terpene lactones (ginkgolides A, B, C + bilobalide) is anchored to, and it is the spec that every meaningful Ginkgo tinnitus trial used (Drewelow 2013; Morgenstern 2002; Schneider 2011; Procháska 2009). Generic 24/6 Ginkgo extracts on Amazon are often *not* EGb 761 — they may match the marker compound percentages without matching the proprietary extraction fingerprint. The dossier gets this right.
2. **Magtein is named specifically for magnesium L-threonate**, not "magnesium threonate" generic. Magtein is the Magceutics-patented form (now owned by AIDP) — every L-threonate clinical trial used the Magtein form. Generic magnesium threonate on Amazon is often a different chelate. The dossier gets this right at line 125.
3. **KSM-66 is named specifically for ashwagandha** (line 134, line 162). The Choudhary 2017 trial used KSM-66; Sensoril is a different extract (different withanolide profile; different RCT base — Auddy 2008). Naming KSM-66 rather than "standardised ashwagandha" is the correct analytical-chemistry move.
4. **Horphag Pycnogenol is named specifically** (line 129). Pycnogenol is a registered trademark of Horphag Research; the French-maritime-pine-bark Belcaro 2014 tinnitus trial used Horphag Pycnogenol specifically; generic "pine bark extract" is *not* Pycnogenol and has neither the standardised procyanidin fingerprint nor the trial base.
5. **Kaneka Ubiquinol is named specifically** (line 131). Kaneka is the Japanese sole-source manufacturer of reduced-form CoQ10 (ubiquinol); most ubiquinol-labelled products downstream do trace to Kaneka, but naming the source is the right discipline.
6. **The dossier names Plum Flower (Mayway) and Min Tong for TCM formulas** (line 172 §4.3, line 628 §9.1). These are the two well-audited California-import lines for Chinese herbal granules + tea-pills. Their COA practice is meaningfully better than a generic Chinatown TCM pharmacy.
7. **§10.5.5 wave-2 addition surfaces the Ashwagandha 2020-2024 hepatotoxicity cluster + the Lion's Mane TGA 2024 emerging signal + the grey-market device knockoff cluster + the Karna purana eardrum-integrity gate** (lines 752-757). This is the lead-edge content surface. Multiplying it across the per-brand audit is what this review attempts.

These wins are real. The audit below is calibrated against them.

---

## Dimension 1 — Per-brand identity + potency verification

**Score: 4 / 10.** Trial-spec discipline is high at the top of the §3.3 table and drifts as you move down. I walk every named brand, name the specification mismatch, and surface what needs to ship as a text edit.

### 1.1 Schwabe Tebonin EGb 761 — the gold standard, correctly named

**What ships.** EGb 761 is 24-27% flavone glycosides (mostly quercetin, kaempferol, isorhamnetin glycosides — quantified by HPLC-DAD against external standards), 6-7% terpene trilactones (ginkgolides A, B, C + bilobalide — quantified by HPLC-ELSD or LC-MS), ≤ 5 ppm ginkgolic acid (the toxicity-relevant CSF-leaking allergen + tumour-promoter that the EMA HMPC monograph caps), and a characteristic chromatographic fingerprint that includes proanthocyanidins, biflavones (amentoflavone, bilobetin, ginkgetin), and the polyprenyl-acetate cluster.

**Does Schwabe publish per-lot COAs publicly?** Schwabe Pharmaceuticals (Karlsruhe, Germany) publishes its EMA HMPC and Swissmedic dossiers — those carry the spec — but per-lot batch COAs are *not* publicly accessible. They are available on request to authorised distributors (Boots UK, Holland & Barrett, German Apotheke chains). A retail user buying off the shelf cannot pull the COA for the bottle in hand. **A founder serving a quality-bar audience should be able to request lot-COAs from Schwabe Karlsruhe through the EU authorised-distributor channel — and publish them in a NicheCore registry.**

**Spec-vs-evidence match.** The Procháska 2009 (n=180) subgroup-responder trial used Tebonin 240 mg EGb 761. The dose in the dossier (line 124: "120-240 mg/day, Tebonin EGb 761") aligns. Good.

**What's missing.** The dossier should explicitly carry the **ginkgolic acid ≤ 5 ppm ceiling** as the trial-distinguishing spec. This is the line that separates EGb 761 from cheap Chinese Ginkgo extracts where ginkgolic acid sometimes runs 1000-2000 ppm. The EMA HMPC 2015 monograph anchors the ≤ 5 ppm ceiling. A user reading the dossier should know: "if you cannot verify ≤ 5 ppm ginkgolic acid on the COA, you do not have an EGb 761-equivalent product."

**Edit recommendation:** add to §3.3 Ginkgo row: "Spec to verify on COA: 24% flavone glycosides + 6% terpene trilactones (ginkgolides A/B/C + bilobalide) + ≤ 5 ppm ginkgolic acid per EMA HMPC 2015. Schwabe Tebonin is the only EU-authorised EGb 761 product; generic '24/6' Ginkgo extracts on Amazon may match the marker percentages without matching the proprietary EGb 761 fingerprint and often exceed the 5 ppm ginkgolic-acid ceiling."

### 1.2 Magtein (magnesium L-threonate) — correctly named; one warning

**What ships.** Magtein is the Magceutics-patented magnesium-L-threonate complex (Slutsky 2010 *Neuron* paper used Magtein). The crystal-engineering complexes magnesium ions with L-threonic acid in a ratio that crosses the blood-brain barrier at higher fractional efficiency than ionic magnesium salts.

**Spec.** ~ 8% elemental magnesium (the Magtein patent specifies an Mg-L-threonate molar ratio; the elemental Mg content is ~ 7-9%).

**Does Magceutics/AIDP publish per-lot COAs publicly?** Magceutics publishes the patent + the Slutsky 2010 trial dossier. AIDP (the current owner, San Diego, distributing into Doctor's Best, Life Extension, NOW Foods, Jarrow, Pure Encapsulations) publishes batch-level identity + potency + heavy-metal COAs on request to retail distributors. Not consumer-facing.

**Spec-vs-evidence match.** The dose in the dossier (line 125: "Magnesium glycinate + L-threonate, 200 mg AM + 200 mg PM = 400 mg total elemental Mg") is reasonable as a *combined* dose. The trial-anchored Magtein dose (Slutsky 2010 + downstream Liu 2016) is 1.5-2 g/day of Magtein complex which delivers ~ 100-150 mg elemental Mg. The dossier's 400 mg total assumes the user is mixing Magtein + glycinate; the glycinate carries most of the elemental Mg. Acceptable.

**Doctor's Best magnesium glycinate.** Doctor's Best uses Albion (Balchem) chelated glycinate as a sub-supplier. The Albion-brand chelation is the analytical-chemistry trust anchor — generic "magnesium glycinate" without the Albion bisglycinate-chelate trademark often turns out to be magnesium-glycinate buffered with magnesium oxide (the cheap form). When Doctor's Best labels TRAACS or "fully-reacted bisglycinate", they are Albion. When they don't, they may not be. **The dossier should specify Albion bisglycinate.**

**Edit recommendation:** add to §3.3 Mg row: "Magnesium glycinate spec to verify: Albion (Balchem) TRAACS fully-reacted bisglycinate chelate, not a magnesium-oxide-buffered blend. Magnesium L-threonate spec: Magtein (Magceutics / AIDP). Generic 'magnesium glycinate' from Amazon often turns out to be 50:50 oxide:glycinate, which delivers a smaller fraction of elemental Mg + the laxative profile of oxide."

### 1.3 Pycnogenol vs generic pine bark — the trial-spec mismatch is real

**What ships.** Pycnogenol is the Horphag Research (Geneva, Switzerland) registered trademark for *Pinus pinaster* sub-species *atlantica* bark extract, harvested from a controlled forest in Les Landes (Bordeaux region, France), extracted to a USP-monographed specification that includes 65-75% procyanidins, 5-10% organic acids, and a characteristic LC-MS fingerprint that includes catechin, taxifolin, caffeic acid, ferulic acid, and the procyanidin-B1/B2/B3 cluster.

**Belcaro 2014 (n=92) used Horphag Pycnogenol specifically** — the tinnitus trial-anchored brand. The dossier names Horphag at line 129. Good.

**What's wrong in the world supply.** "Pine bark extract" labels are everywhere. Some are *Pinus pinaster* but not Horphag (different harvest, different procyanidin fingerprint). Some are *Pinus massoniana* (Chinese red pine) or *Pinus elliottii* (slash pine) — wholly different bark, different procyanidin signature, no trial evidence. Healthy Origins (line 129 alternative listed in the dossier) does carry Horphag Pycnogenol — but their labelling needs to be checked per-batch.

**Spec-vs-evidence problem.** The Belcaro 2014 dose was 150 mg/day Pycnogenol — that is 150 mg of the Horphag-spec extract. A user buying "Pine bark extract 150 mg" without the Pycnogenol trademark is not getting trial-equivalent material.

**Edit recommendation:** add to §3.3 Pycnogenol row, replace "Horphag Pycnogenol (Switzerland), Healthy Origins" with "Horphag-Pycnogenol-trademarked products ONLY (Horphag Research Geneva; Healthy Origins Pycnogenol; Pure Encapsulations Pycnogenol; Solgar Pycnogenol). Generic 'pine bark extract' from Amazon is often *Pinus massoniana* or *Pinus elliottii* — wholly different bark with no tinnitus trial evidence. The Belcaro 2014 trial used Horphag Pycnogenol specifically."

### 1.4 Pure Encapsulations 0.3 mg melatonin — pharmaceutical-grade is the right anchor

**What ships.** Pure Encapsulations (Sudbury MA; owned by Atrium / Nestlé Health Science) sources synthetic melatonin from European pharmaceutical-grade manufacturers (typically Selochem or HelmAG). The synthesis route is well-characterised; identity confirmation is by HPLC-DAD spectral library match; impurity profile cap is < 0.5% sum of related substances per the European Pharmacopoeia melatonin monograph (Ph.Eur. 9.0, monograph 2769).

**Why pharmaceutical-grade matters for melatonin specifically.** Erland & Saxena 2017 *J Clin Sleep Med* tested 31 retail melatonin products from Canadian pharmacies; melatonin content ranged from -83% to +478% of label claim, and several products were contaminated with serotonin (which the FDA recall-tracked in 2017 for one lot of generic Walmart-brand). The chronic pediatric overdose surge (Lelak 2022, the dossier cites) is partly driven by gummy products at 10-20× the labelled dose. Pure Encapsulations + Life Extension + Thorne are the three lines where label-claim accuracy holds.

**Spec-vs-evidence match.** Megwalu 2006 (PMID 16455366) used 3 mg melatonin. Hurtuk 2011 (PMID 21859051) used 3 mg melatonin. The dossier dose range (line 133: "0.3-3 mg") brackets correctly. Good.

**Edit recommendation:** add to §3.3 Melatonin row: "Spec to verify: European Pharmacopoeia Ph.Eur. 9.0 monograph 2769 melatonin; sum of related substances < 0.5%; no serotonin contamination. Pure Encapsulations, Life Extension, Thorne, Jarrow Methyl B-12 + Melatonin Sustain — pharmaceutical-grade. Avoid melatonin gummies — Erland & Saxena 2017 *J Clin Sleep Med* found retail melatonin content ranging -83% to +478% of label claim; the paediatric overdose surge (Lelak 2022) is partly driven by 10-20× over-labelled gummy products."

### 1.5 KSM-66 ashwagandha — correctly named; one spec footnote

**What ships.** KSM-66 (Ixoreal Biomed, Hyderabad, India) is a root-only extract of *Withania somnifera* standardised to ≥ 5% withanolides by HPLC-UV against a withanoside-VI/withanolide-A reference. Choudhary 2017 used KSM-66. Sensoril (Natreon, NJ) is a leaf-and-root extract standardised differently (~10% withanolide glycosides; Auddy 2008 RCT base). They are *different products with different RCT bases*.

**Identity authentication.** *Withania somnifera* vs *Withania coagulans* (paneer doda) is a well-known adulteration risk in the Indian wholesale botanical market — the wave-2 PV review noted this. KSM-66's analytical workflow includes DNA barcoding via ITS2 + matK markers against the Withania genus reference, plus HPLC fingerprint match against the Ixoreal in-house reference. Generic "ashwagandha" capsules from Indian wholesale (Patel Brothers, Apna Bazar) are unlikely to have either of those identity controls.

**Spec-vs-evidence match.** Choudhary 2017 used KSM-66 at 600 mg/day. Dossier dose at line 162 = 600 mg/day KSM-66. Good.

**Edit recommendation:** add to §3.3 + §4.2 Ashwagandha row: "Spec to verify: KSM-66 (Ixoreal Biomed) — root-only, ≥ 5% withanolides, ITS2 + matK DNA barcoding, full HPLC fingerprint per Ixoreal reference. Sensoril (Natreon) is a different extract (leaf + root, ~10% withanolide glycosides) with a different RCT base — do not substitute. Generic 'ashwagandha' from Indian-grocery channels carries species-adulteration risk (*Withania coagulans* substitution)."

### 1.6 Jarrow NAC Sustain — name carries a real spec; verify

**What ships.** Jarrow NAC Sustain is a sustained-release N-acetyl-L-cysteine tablet (600 mg, with a hydroxypropyl-methylcellulose matrix). The sustained-release profile is *not* the same as the immediate-release IR powder/capsule that most NAC trials used. The Lorito 2008 NAC ear-protection trial used IR oral NAC. The dossier names "Jarrow NAC Sustain" + "Pure Encapsulations" (line 127) — the latter is IR.

**Spec.** ≥ 98% N-acetyl-L-cysteine; the EMA OTC monograph + USP <467> cap on residual solvents + USP <2021> microbiological.

**Spec-vs-evidence mismatch.** If the trial used IR NAC and the user takes a sustained-release tablet, the pharmacokinetic curve is different — peak plasma concentration is lower, AUC is similar but bronchospasm risk profile is *better* (slower release reduces peak). Not a safety issue. But the dossier should not present sustained-release as equivalent to the trial.

**Edit recommendation:** add to §3.3 NAC row: "Spec to verify: ≥ 98% N-acetyl-L-cysteine, EMA OTC monograph compliance. Most NAC clinical trials used immediate-release formulations (Pure Encapsulations IR, Now Foods, Doctor's Best). Jarrow NAC Sustain is sustained-release — fine for general use but the trial-equivalent kinetics are IR. If you wheeze on NAC, the slower-release form (Jarrow Sustain) may reduce peak-driven bronchospasm."

### 1.7 Thorne — generally trust-anchor; verify Iron-Bisglycinate sub-supplier

**What ships.** Thorne Research (Summerville SC) operates a TGA-licensed Australian manufacturing site (one of only ~ 15 supplement brands globally with TGA AUST-L manufacturing-site licensure for OTC-grade output). Thorne publishes its sourcing matrix per product, runs four independent QC checks per lot (raw material, in-process, finished product, retain sample), and posts per-batch summary COAs in its B2B portal (not consumer-facing — but accessible to verified resellers like NicheCore).

**Iron Bisglycinate.** Thorne uses Albion (Balchem) Ferrochel — the trial-anchored fully-reacted ferrous bisglycinate. Naming Thorne for iron is correct.

**Vit D + K2.** Thorne uses cholecalciferol from lanolin (the European-pharma-grade route) and MK-7 from MenaQ7 (NattoPharma, Norway — the trial-anchored MK-7). Naming Thorne for D3/K2 (line 80, line 91, line 107 in data.ts) is correct.

**Spec-vs-evidence match.** Thorne products generally match RCT specs. Acceptable.

### 1.8 Nordic Naturals omega-3 — heavy-metal + oxidation are the load-bearing specs

**What ships.** Nordic Naturals (Watsonville CA) sources Norwegian + Peruvian anchovy/sardine oil, distilled and concentrated to 60-80% EPA+DHA, with the load-bearing specs being:
- **Oxidation:** TOTOX value < 19.5 (the IFOS — International Fish Oil Standards 5-star ceiling), totox = 2×PV + AV. Generic fish oils on Amazon often run TOTOX 30-60 (rancid).
- **Heavy metals:** Pb < 0.1 ppm, Hg < 0.1 ppm, As inorganic < 0.1 ppm, Cd < 0.1 ppm (IFOS ceilings).
- **PCBs + dioxins:** ΣPCB < 0.09 ppm; dioxins + dioxin-like PCBs WHO-TEQ < 2 pg/g.

**Trust anchor.** Nordic Naturals is one of the few brands with persistent 5-star IFOS rating. **The dossier should require IFOS 5-star.**

**Edit recommendation:** add to §3.3 + cofactor-floor sections: "Omega-3 spec to verify on COA: IFOS 5-star (International Fish Oil Standards) — TOTOX < 19.5, Pb/Hg/As/Cd each < 0.1 ppm, ΣPCB < 0.09 ppm. Nordic Naturals, Carlson Labs, Wiley's Finest, Pharmepa hold persistent 5-star IFOS. Generic Amazon fish oils are often TOTOX 30-60 (oxidised) — a rancid oil is pro-inflammatory, not anti-inflammatory."

### 1.9 Other named brands — quick walk

- **Real Mushrooms Lion's Mane.** Real Mushrooms (Skye Chilton, Canada) uses fruiting-body extract — the load-bearing distinction. Most Amazon "Lion's Mane" is mycelium-on-grain (cheaper, primarily starch). Real Mushrooms publishes beta-glucan content per lot. Good. **Spec to verify:** ≥ 25% beta-glucans, < 5% alpha-glucans (the alpha-glucan ratio is the mycelium-on-grain tell — starch). The dossier should name this.
- **Doctor's Best Magnesium Glycinate.** See §1.2 above — verify Albion bisglycinate.
- **Pure Encapsulations.** Generally trust-anchor. Pure uses Albion chelates, NattoPharma MK-7, Kaneka ubiquinol, BioGaia/Klaire-grade probiotic strains. Acceptable.
- **MediHerb Black Cohosh.** MediHerb (Integria Healthcare, Brisbane Australia) is TGA AUST-L listed. The Schaper 2007 trial used the *Remifemin* (Schaper & Brümmer GmbH, Germany) standardised extract — a different extract. The dossier names both (line 135). The trial-anchored brand for Black Cohosh tinnitus + perimenopause is *Remifemin specifically*, not MediHerb. Edit: clarify that Remifemin is the trial-anchored brand and MediHerb is a TGA-AUST-L alternative with adjacent but not identical specification.
- **Belcaro 2014 Pycnogenol.** Already covered §1.3.
- **Ixoreal KSM-66.** Already covered §1.5.

### 1.10 Summary — Dim 1 ship-list

| # | Edit | Section | Priority |
|---|---|---|---|
| 1 | Add EGb 761 spec (24/6/≤5 ppm ginkgolic acid) | §3.3 Ginkgo | HIGH |
| 2 | Specify Albion bisglycinate + Magtein for Mg | §3.3 Mg | HIGH |
| 3 | Restrict Pycnogenol to Horphag-trademarked products | §3.3 Pycnogenol | HIGH |
| 4 | Add Ph.Eur. melatonin spec + warn against gummies (Erland 2017) | §3.3 Melatonin | MEDIUM |
| 5 | Specify KSM-66 (Ixoreal) vs Sensoril (Natreon) distinction | §3.3 + §4.2 Ashwagandha | HIGH |
| 6 | Distinguish IR vs sustained-release NAC | §3.3 NAC | LOW |
| 7 | Specify IFOS 5-star omega-3 spec | §3.3 + §6.7 cofactor floor | MEDIUM |
| 8 | Require ≥ 25% beta-glucans / < 5% alpha-glucans for Lion's Mane | §3.3 Lion's Mane | MEDIUM |
| 9 | Clarify Remifemin as trial-anchored vs MediHerb adjacent | §3.3 Black Cohosh | LOW |

---

## Dimension 2 — Heavy-metal residue on Ayurvedic / Siddha / Unani / TCM formulas

**Score: 2 / 10.** Wave-2 §10.5.5 added the high-level Saper 2008 framing. The per-supplier + per-formula audit is still absent. The dossier flattens supply-chain risk that is actually highly heterogeneous across the named channels.

### 2.1 The Saper 2008 paradigm — what it actually said

Saper et al. *JAMA* 2008;300(8):915-923 sampled 193 Ayurvedic medicines sold via the internet to the Boston-area Indian community. **21% (40/193) contained detectable lead, mercury, and/or arsenic above standard reference levels.** Mean lead in heavy-metal-positive products: 11.5 µg/g. Some products tested at > 1000 µg/g lead. Replicated:
- **MHRA UK 2003-2024** — repeated sampling of imported Ayurvedic products; cluster of high-Pb/Hg products from imports without UK/EU GMP certification.
- **Health Canada 2010-2024** — recall actions on multiple Ayurvedic + traditional Chinese products for Pb/Hg/As exceedance.
- **TGA Australia 2010-2024** — recall actions on imported Ayurvedic + Unani products.
- **AYUSH Pharmacopoeia Committee India 2015-2024** — concedes the problem; codifies the AYUSH-GMP heavy-metal limits (Pb ≤ 10 ppm, As ≤ 3 ppm, Hg ≤ 1 ppm, Cd ≤ 0.3 ppm) — but compliance is uneven outside the largest AYUSH-licensed manufacturers (Kottakkal, Baidyanath, Himalaya, Patanjali AYUSH-GMP-certified lines).

**The Saper finding is partially driven by rasashastra preparations** — classical Ayurvedic mineral-based formulations (e.g., *makaradhwaja*, *swarna bhasma*, *loha bhasma*, *abhraka bhasma*) that *intentionally* contain mercury, gold, iron, mica oxidised to bhasmas. In traditional Ayurvedic context, the *shodhana* (purification) + *marana* (incineration) processes are claimed to render the heavy-metal forms non-bioavailable. In modern QC context, ICP-MS still finds the metals. **The tinnitus dossier does not recommend any rasashastra preparation — good.** All the recommended Ayurvedic formulas (Saraswatarishta, Sarivadi Vati, Triphala, Brahmi, Ashwagandha, Karna purana with Bilva taila) are *phytochemical-only* preparations. **The Saper risk for the tinnitus dossier is therefore the lower-tier contamination risk from supply-chain sourcing, not the intentional-metal-content risk.** That distinction needs to be in the dossier.

### 2.2 Per-supplier heavy-metal risk profile — the table the dossier needs

The §9.1 supplier table (line 623-634) flattens the risk profile. Heterogeneously:

| Supplier | Channel type | Heavy-metal risk profile | Public batch testing? | Saper-cluster exposure |
|---|---|---|---|---|
| **Kottakkal Arya Vaidya Sala** | AYUSH-GMP-certified pharmaceutical manufacturer (Kerala) | LOW — Kottakkal runs ICP-MS on every lot per AYUSH-GMP + their in-house QA; spec is AYUSH-Pharmacopoeia heavy-metal limits | YES — to authorised resellers; publish summary COAs in their B2B portal | Low |
| **Baidyanath** | AYUSH-GMP large manufacturer (Kolkata + Jhansi) | LOW-MEDIUM — Baidyanath classical-line is AYUSH-GMP; budget-line products vary | YES — to authorised resellers; not consumer-facing | Low-medium |
| **Patanjali AYUSH-GMP line** | AYUSH-GMP-certified subset of Patanjali products | MEDIUM — AYUSH-GMP certificate covers a subset; non-AYUSH-GMP Patanjali products are uncontrolled | Variable | Medium |
| **Patel Brothers / Apna Bazar (Indian-grocery distributor)** | Grocery distributor — NOT a pharmaceutical channel | HIGH — they distribute multiple importer/manufacturer lines, some AYUSH-GMP some not. The grocery channel does not run incoming-product heavy-metal QC | NO — grocery distributor channel | **HIGH** — the Saper 2008 cluster was sampled from exactly this channel |
| **Organic India** | EU + USDA certified-organic manufacturer (Lucknow) | LOW-MEDIUM — Organic India runs the EU certified-organic + COMET pesticide screen; their heavy-metal limits are the USDA + EU organic standard | YES — to authorised resellers | Low-medium |
| **Himalaya (Wellness)** | Large pharmaceutical-grade (Bengaluru) | LOW — Himalaya runs HPLC + ICP-MS per lot; per-batch summary COAs published in their B2B portal | YES — B2B portal | Low |
| **Plum Flower (Mayway)** | US-based importer-distributor of Chinese herbal granules + tea-pills (Oakland CA) | LOW — Mayway runs the import-side QC + heavy-metal + pesticide + Aristolochia screen on every batch; published per-batch summary COAs | YES — published to retail buyers on request | Low |
| **Min Tong** | Taiwan-based TCM granule manufacturer | LOW — GMP-certified; Aristolochia-free certificate per batch | YES — on request | Low |
| **Generic Chinatown TCM pharmacy** (Sun Sing Pacific, Kamwo Meridian Herbs — line 628) | Retail TCM herb shop | **HIGH** — heterogeneous sourcing; Aristolochia residue risk; sulphur-dioxide treatment risk on raw herbs; pesticide residue on Chinese-cultivated herbs | NO | **HIGH** — this is the Vanherweghem 1993 Belgian-Chinese-herb-nephropathy supply channel |
| **Hamdard Dawakhana** | AYUSH-GMP + UP-Unani-Pharmacopoeia (Delhi + Karachi) | LOW-MEDIUM — Hamdard India is AYUSH-GMP for the Indian line; Hamdard Pakistan products imported via grey channels have less control | YES — Hamdard India B2B | Low-medium for AYUSH-GMP line; medium for Pakistan imports |
| **Ajmal Dawakhana** | Smaller Unani manufacturer (Delhi) | MEDIUM | Variable | Medium |
| **IMPCOPS** (Chennai) | Tamil Nadu state-licensed Siddha pharmacy | LOW-MEDIUM — IMPCOPS runs per-lot QC per AYUSH standard | YES — on request | Low-medium |
| **Men-Tsee-Khang** (Dharamsala) | Tibetan Sowa-Rigpa pharmacy | LOW — runs in-house ICP-MS per lot; AYUSH-GMP | YES — on request | Low |
| **Padma AG** (Schwerzenbach, Switzerland) | Swissmedic-licensed manufacturer of Padma 28 | LOW — Swissmedic GMP; per-batch COA available | YES | Low |
| **Boiron** (France) | Homeopathic manufacturer | N/A — homeopathic dilutions; heavy-metal at detection limit | N/A | N/A |
| **SBL / Schwabe India** | Homeopathic manufacturers | N/A | N/A | N/A |

**The dossier currently lists Patel Brothers + Apna Bazar as the recommended channel for Saraswatarishta, Triphala, Sarivadi Vati, Brahmi, Ashwagandha** (§9.1 line 627). **This is the highest-Saper-risk channel in the entire dossier.** Patel Brothers is a grocery distributor; they do not run heavy-metal QC. The same Saraswatarishta bottle on a Kottakkal direct-purchase channel has a dramatically different supply-chain risk profile than the bottle on a Patel Brothers shelf — even if the label says the same thing.

### 2.3 Per-formula heavy-metal risk

| Formula | Heavy-metal risk class | Why |
|---|---|---|
| Karna purana with Bilva taila (sesame oil + Bilva fruit) | LOW from Kottakkal (AYUSH-GMP); MEDIUM from grocery channel | Sesame oil base + plant-fruit; metals do not concentrate in lipid extract; the AYUSH-GMP lot screens are sufficient |
| Sarivadi Vati | LOW from Kottakkal/Baidyanath; MEDIUM from grocery | Phytochemical tablet |
| Saraswatarishta | LOW — alcoholic ferment dilutes metals via partition coefficient | Even if raw herbs carry residue, the 5-12% alcohol ferment partitions metals into the spent biomass; the final liquor is generally low-metal. Saper-cluster data confirms |
| Brahmi (Bacopa) | LOW from controlled cultivation; MEDIUM from grocery | Pesticide is bigger risk than heavy metal |
| Ashwagandha (KSM-66 specifically) | LOW — Ixoreal runs ICP-MS per batch | The non-KSM-66 generic ashwagandha is medium-high risk |
| Triphala | MEDIUM — humid Indian storage + grocery-channel sourcing | Aflatoxin (on amla) is a bigger risk than heavy metal; see Dim 3 |
| Yashtimadhu (Glycyrrhiza glabra) | MEDIUM | Pesticide + heavy metal in commercial cultivation |
| Jatamansi (*Nardostachys jatamansi*) | MEDIUM-HIGH | Wild-collected Himalayan endemic; sourcing varies wildly |
| Shankhpushpi | MEDIUM — confused with multiple species (*Convolvulus pluricaulis*, *Evolvulus alsinoides*, *Canscora decussata*) | Species adulteration; supply chain |
| Long Dan Xie Gan Tang | MEDIUM from Plum Flower / Min Tong; **HIGH from generic Chinatown** | Aristolochia residue is the load-bearing risk (Belgian 1990s cluster); heavy metal is secondary |
| Er Long Zuo Ci Wan | LOW from Plum Flower / Min Tong | Standardised tea-pill |
| Padma 28 | LOW — Padma AG Swissmedic GMP | |
| Khamira Marwareed (Hamdard) | LOW-MEDIUM — Hamdard India AYUSH-GMP line | Contains pearl + rose + other phytochemicals |
| Roghan-e-Banafsha / Roghan-e-Gul (Hamdard ear-oils) | LOW from Hamdard direct; MEDIUM from grey-channel import | Plant oils |
| Itrifals (Hamdard) | LOW from Hamdard direct; MEDIUM from grey channel | Herbal jam formulations |
| Brahmi Chooranam / Vallarai Chooranam / Aswagandha Chooranam (IMPCOPS) | LOW-MEDIUM — IMPCOPS in-house QC | |
| Nellikai Lehyam (IMPCOPS, Aimil) | LOW — IMPCOPS | |

### 2.4 Edit recommendation — the Saper 2008 honesty paragraph

The dossier needs a **standalone §9.0.5 or §4.0.5 "Heavy-metal honesty for traditional formulations"** paragraph, modelled on the §10.5.5 grey-market device knockoff paragraph that already exists.

**Proposed text:**

> **For you, in plain words.** The Saper 2008 *JAMA* study sampled 193 Ayurvedic products from Indian-grocery channels in the Boston area and found 21% had detectable lead, mercury, and/or arsenic above standard reference levels. Replicated by UK MHRA 2003-2024, Health Canada 2010-2024, TGA Australia 2010-2024. The Saper cluster is *not* uniform across the Ayurvedic + Siddha + Unani + TCM supply chain — it is concentrated in (a) grocery channels (Patel Brothers, Apna Bazar) that distribute multiple importer lines without per-batch QC; (b) generic Chinatown TCM pharmacies that source raw bulk without import-side screening; (c) classical rasashastra preparations (which we do NOT recommend). The risk is *low* for AYUSH-GMP-certified direct purchases from Kottakkal, Baidyanath, Himalaya, Organic India, IMPCOPS, Men-Tsee-Khang, Hamdard India, Padma AG. **The risk is high for Indian-grocery and generic-Chinatown channels.** The dossier's §9.1 supplier table lists both; this paragraph asks you to choose the direct-pharmaceutical channel and not the grocery channel. If you cannot — order ICP-MS heavy-metal screening on your bottle via Eurofins NA (Madison WI), SGS (Mississauga ON), Intertek (Cortland NY) for ~$80-180 per sample. *(Saper 2008 PMID 18728265; MHRA UK Drug Safety Updates; Health Canada Advisories; TGA Recall Actions; AYUSH Pharmacopoeia Committee heavy-metal monograph)*

**Wire into §9.1 supplier table** — replace the broad "Patel Brothers / Apna Bazar" channel listing with a tiered breakdown:
- **Tier 1 (preferred):** Kottakkal direct mail-order to US/UK/EU; Baidyanath authorised reseller; Himalaya authorised reseller; Organic India.
- **Tier 2 (acceptable with COA verification):** Patel Brothers / Apna Bazar — only for Kottakkal-labelled or Baidyanath-classical-labelled product in original AYUSH-GMP packaging; verify the AYUSH-GMP certificate code on the package matches the AYUSH-GMP registry.
- **Tier 3 (not recommended):** Generic Indian-grocery sourced traditional formulations without verifiable AYUSH-GMP certification.

Same tiering applies to TCM:
- **Tier 1:** Plum Flower (Mayway), Min Tong, KPC, Treasure of the East — all with import-side per-batch QC + Aristolochia-free certificate.
- **Tier 2:** Authorised California/East-Coast distributors of the Tier-1 brands.
- **Tier 3 (not recommended):** Generic Chinatown bulk dispensary without batch-COA verification.

---

## Dimension 3 — Microbiological + aflatoxin + pesticide on botanicals

**Score: 3 / 10.** Per-botanical QC failure modes are absent from the dossier. The Saper paragraph (above) covers heavy metals; this dimension covers the other three QC categories.

### 3.1 Triphala — aflatoxin risk on amla under poor storage

**The failure mode.** *Emblica officinalis* (amla, the vitamin-C component of Triphala) is harvested in winter in India + sun-dried + stored in humid storage rooms. *Aspergillus flavus* + *Aspergillus parasiticus* are common Indian-storage moulds; both produce aflatoxin B1 — a Group 1 IARC carcinogen + potent hepatotoxin. AYUSH-Pharmacopoeia caps aflatoxin B1 at 5 µg/kg in herbal raw material; the EU Reg. 1881/2006 caps at 2 µg/kg. Generic Indian-grocery Triphala has been found in MHRA testing at 10-50 µg/kg in some lots.

**The QC test.** HPLC-FLD (high-performance liquid chromatography with fluorescence detection) is the canonical aflatoxin assay. AYUSH-GMP-certified manufacturers (Organic India, Himalaya, Kottakkal) run this per lot. Generic grocery-channel Triphala may not.

**Microbiological.** USP <61> (total aerobic microbial count) + USP <62> (absence of *Salmonella*, *E. coli*, *Staphylococcus aureus*) — these are the load-bearing tests for any orally-administered botanical. AYUSH-GMP-certified Triphala lines comply; grocery channels are uneven.

**Edit recommendation:** add to §4.2 Triphala row + §10.5.5: "Spec to verify: aflatoxin B1 < 2 µg/kg (EU Reg 1881/2006), USP <61>/<62> compliance, AYUSH-GMP certificate. Organic India, Himalaya, Kottakkal Triphala lines run aflatoxin HPLC-FLD per lot. Grocery-channel Triphala may not — MHRA UK has found lots at 10-50 µg/kg."

### 3.2 Ginkgo — pesticide + solvent residue on Chinese-cultivated leaves

**The failure mode.** *Ginkgo biloba* leaves cultivated for industrial extraction are largely Chinese (Jiangsu + Shandong provinces — > 70% of world supply). Pesticide residue (chlorpyrifos, deltamethrin, glyphosate) is the load-bearing concern. The EU Reg. 396/2005 + the EMA HMPC Ginkgo monograph cap pesticide residue per the EU MRL list. Schwabe Tebonin runs the EU-MRL panel per lot. Generic Ginkgo from Amazon may not.

**Solvent residue.** EGb 761 is extracted with acetone + water (the proprietary Schwabe process). Residual acetone is capped at < 50 ppm (Ph.Eur. 2.4.24 residual-solvents Class 3). Generic Ginkgo extracts using ethanol or methanol may have residual methanol (Class 2, capped < 30 ppm).

**Edit recommendation:** add to §3.3 Ginkgo row footnote: "Pesticide residue + residual solvent are the load-bearing QC concerns for Chinese-cultivated Ginkgo. Schwabe Tebonin runs the EU-MRL pesticide panel + Ph.Eur. residual-solvent assay per lot. Generic '24/6' Ginkgo from Amazon may not."

### 3.3 Pycnogenol — French controlled-cultivation reduces QC variability

**Pycnogenol is sourced from a single controlled forest in Les Landes** (south-western France) under the Horphag supply-chain audit. Pesticide-use protocols + heavy-metal monitoring + extraction-solvent residue are tighter than for botanical extracts with diffuse global sourcing. This is why the Pycnogenol QC story is simpler than the Ginkgo QC story. **Generic "pine bark extract" from Chinese cultivation does not share this profile.** See Dim 1.3.

### 3.4 Lion's Mane — mycelium-on-grain vs fruiting body + microbiological QC

**The failure mode.** Lion's mane (*Hericium erinaceus*) is cultivated either as fruiting body (the actual mushroom — what classical use refers to) or as mycelium grown on grain substrate (the cheap industrial route, dried + powdered with the grain still in the matrix). Mycelium-on-grain is primarily starch — most of the bioactive content is the substrate.

**The QC test.** Beta-glucan content by enzymatic assay (Megazyme β-glucan assay kit) — fruiting body extracts run ≥ 25% beta-glucan; mycelium-on-grain runs 1-5% (mostly alpha-glucan from the grain).

**Microbiological.** Mushroom mycelium grown on grain in industrial fermenters has a real microbiological risk if not pasteurised — *Aspergillus*, *Penicillium*, *Mucor* spp. USP <61>/<62> compliance is the floor. Real Mushrooms + Host Defense + Nootropics Depot run this per lot. Generic Amazon Lion's Mane may not.

**Edit recommendation:** add to §3.3 Lion's Mane row: "Spec: fruiting-body extract (NOT mycelium-on-grain), ≥ 25% beta-glucans, < 5% alpha-glucans (the alpha-glucan ratio is the mycelium-on-grain tell — starch). USP <61>/<62> microbiological compliance. Real Mushrooms, Host Defense, Nootropics Depot meet spec; generic Amazon Lion's Mane often does not."

### 3.5 Saffron — the most-adulterated spice globally

**The failure mode.** *Crocus sativus* stigma is the most-adulterated botanical raw material globally — the Saffron Adulteration Database (Iranian Saffron Council + ISO 3632) catalogues regular substitution with safflower (*Carthamus tinctorius*), calendula petals (*Calendula officinalis*), turmeric (*Curcuma longa*), beet pulp, dyed corn-silk. The chemical markers for authentic saffron — picrocrocin (bitter; UV at 257 nm), safranal (aroma; UV at 330 nm), crocins (colour; UV at 440 nm) — define ISO 3632 Grade I/II/III. Adulterated saffron may not have any of these markers.

**The QC test.** ISO 3632 spectrophotometric assay + HPLC-DAD + DNA barcoding (ITS region against the *Crocus sativus* reference).

**Trial-anchored brand.** The Modabbernia 2012 saffron-RCT used Pure Iranian saffron. Pharma-grade saffron extracts (e.g., affron® by Pharmactive Biotech in Madrid; Safr'Inside™ by Activ'Inside) are the trial-anchored standardised forms. Amazon "saffron extract" without ISO 3632 certification is high-substitution risk.

**Edit recommendation:** add to §10.5.5 + cross-reference to wherever the dossier mentions saffron in §3.3 (search: line 712, line 747): "Saffron is the most-adulterated botanical globally — Iranian Saffron Council + ISO 3632 catalogue regular substitution with safflower, calendula, turmeric, dyed corn-silk. Verify on COA: ISO 3632 Grade I/II/III + DNA-barcode confirmation of *Crocus sativus*. Pharma-grade trial-anchored brands: affron® (Pharmactive Biotech, Madrid); Safr'Inside™ (Activ'Inside)."

### 3.6 Black Cohosh — species substitution

**The failure mode.** *Cimicifuga racemosa* (now *Actaea racemosa*) is the trial-anchored species (Remifemin, Schaper 2007). Adulteration with Chinese *Actaea* species (*A. cimicifuga*, *A. dahurica*, *A. heracleifolia*, *A. simplex*) is common in the bulk wholesale market — these substitutes are pharmacologically different + have not been tested in tinnitus or perimenopause trials. The hepatotoxicity case-cluster that drives the EMA HMPC 2018 ≤ 6 month restriction is *not yet attributed* between authentic *A. racemosa* and the Chinese-Actaea substitutes; some signal may be substitution-driven.

**The QC test.** HPLC fingerprint + chloroplast DNA barcoding (matK + rbcL).

**Trial-anchored brand.** Remifemin specifically. The dossier names Remifemin at line 135 + MediHerb. As noted Dim 1.9 — clarify Remifemin is trial-anchored; MediHerb is TGA AUST-L adjacent.

### 3.7 Other botanicals — quick spec list

| Botanical | Load-bearing QC concern | Test |
|---|---|---|
| **Ashwagandha (non-KSM-66)** | *Withania coagulans* species substitution | DNA barcode (ITS2 + matK) |
| **Brahmi (Bacopa monnieri)** | Species confusion with *Centella asiatica* (gotu kola) | HPLC bacoside vs asiaticoside fingerprint |
| **Shankhpushpi** | Multi-species adulteration (*Convolvulus pluricaulis* vs *Evolvulus alsinoides* vs *Canscora decussata*) | DNA barcode |
| **Jatamansi (*Nardostachys jatamansi*)** | CITES Appendix II + adulteration with *Selinum vaginatum* | DNA + classical morphology |
| **Yashtimadhu (licorice, *Glycyrrhiza glabra*)** | Pesticide residue + species substitution (*G. uralensis*, *G. inflata*) | HPLC glycyrrhizin + DNA |
| **Sweet flag (Shi Chang Pu)** | *Acorus calamus* vs *A. tatarinowii* — calamus has higher β-asarone (genotoxic) | HPLC β-asarone |

**Edit recommendation:** add a §9.0.6 "Botanical identity authentication" callout that names: "Six botanicals in this protocol carry a species-substitution + adulteration risk: ashwagandha (vs *W. coagulans*), Bacopa (vs gotu kola), Shankhpushpi (three-species confusion), Jatamansi (CITES + *Selinum* substitution), Yashtimadhu (three-species), sweet flag (β-asarone-positive vs negative species). Verify DNA + HPLC fingerprint per AYUSH-GMP + Chinese-Pharmacopoeia + EU-HMPC monograph."

### 3.8 Long Dan Xie Gan Tang — Aristolochia residue + sulphur dioxide

**Aristolochia residue** is the load-bearing concern (Vanherweghem 1993 Belgian cluster). Plum Flower + Min Tong + KPC certify Aristolochia-free per batch using DNA + HPLC aristolochic-acid-I/II detection (LC-MS, limit of detection < 1 ppb).

**Sulphur dioxide treatment** is the secondary concern — raw TCM herbs are commonly fumigated with sulphur dioxide for preservation + bleaching. SO2 residue triggers asthma + headache. Plum Flower + Min Tong run SO2 testing per batch.

**Pesticide residue** on Chinese-cultivated herbs is the tertiary concern.

**Edit recommendation:** the dossier's line 153 "demand an Aristolochia-free batch certificate" is correct. Extend: "Plum Flower (Mayway), Min Tong, KPC, Treasure of the East run Aristolochia-acid-I/II LC-MS testing per batch (LOD < 1 ppb) + sulphur-dioxide assay + EU-MRL pesticide panel. Generic Chinatown bulk does not."

---

## Dimension 4 — Device QC + grey-market problem at depth

**Score: 3 / 10.** Wave-2 §10.5.5 added the high-level grey-market warning. The per-device verification spec is absent.

### 4.1 Vielight Neuro Gamma + 810 nm intranasal — wavelength + pulse rate + power-density verification

**What ships from Vielight (Toronto, Canada).** The Vielight Neuro Gamma is a transcranial PBM headset delivering 810 nm NIR LEDs pulsed at 40 Hz (the gamma-frequency entrainment target — Iaccarino 2016 *Nature* gamma-stimulation hypothesis). Power density at the scalp is ~ 50 mW/cm². The Vielight 810 intranasal is a clip-on intranasal LED delivering 810 nm CW at ~ 25 mW. Both Class IIa (CE-marked); not FDA-cleared as medical device — wellness category in US.

**Spec verification on a candidate device.**
- **Wavelength** — needs to be 810 nm (± 10 nm). Verifiable with an inexpensive USB spectrometer (Ocean Optics USB2000+ or the consumer-grade ThorLabs CCS200 at $1500-3000; lab-grade reading via Eurofins or independent photonics lab at $200-400 per sample). Aliexpress/Temu clones often deliver 660 nm or 850 nm without disclosure.
- **Pulse rate** — needs to be 40 Hz square-wave (± 1 Hz). Verifiable with an inexpensive oscilloscope ($150) reading the photodiode output. Clones often deliver CW (no pulsing) or wrong frequency.
- **Power density** — needs to be 50 mW/cm² at scalp surface. Verifiable with a photometer (Thorlabs PM100D + S130C sensor, $1000; lab measurement $100-200). Clones often advertise watts (raw electrical input) without specifying optical output or beam divergence — a "50 W panel" may deliver 5-10 mW/cm² at the user's surface.

**Trust anchor for the user.** The Vielight serial number is engraved + registered. Every authentic unit has a Health Canada MDEL + EU MDR Class IIa CE-mark + Vielight registration. Clones do not.

**Edit recommendation:** add §5.10 device-verification appendix: "Vielight Neuro Gamma spec to verify on receipt: serial number registered with Vielight (Toronto); EU MDR Class IIa CE-mark; 810 nm wavelength (± 10 nm — verifiable with a spectrometer at an independent photonics lab for ~$200); 40 Hz pulse rate (± 1 Hz — verifiable with oscilloscope); 50 mW/cm² power density at scalp surface. Aliexpress/Temu 'Vielight-style' clones at $40-200 do not deliver the spec — they often deliver 660 nm CW with unspecified power."

### 4.2 Mito Red Light / Joov / Hooga / Red Light Rising — irradiance verification

**What ships.** Full-body panels delivering 660 nm + 850 nm LEDs at advertised irradiance of 100-200 mW/cm² at 6 inches.

**Spec verification.**
- **Wavelength** — needs to be 660 + 850 nm (both, ± 10 nm). Independent verification — Mito Red Light publishes third-party spectroradiometer reports per model; Joov publishes per-model irradiance maps. Hooga publishes specs but third-party verification varies.
- **Irradiance** — the load-bearing spec. The published irradiance is at 6 inches; at 12 inches it falls to ~25-30% of the 6-inch number (inverse square law plus beam divergence). The trial-anchored dose for PBM behind-ear (which is what the dossier recommends) is ~ 4 J/cm² per session — that is 100 mW/cm² × 40 seconds, or 50 mW/cm² × 80 seconds.
- **EMF + flicker** — quality panels (Mito Red Light, Joov, Red Light Rising) measure < 1 mG EMF at 6 inches + < 5% flicker; clones often have higher EMF + 100% flicker (which is the LED driver running at 60 Hz without smoothing).

**Edit recommendation:** add to §5.10: "Red-light panel spec to verify: third-party spectroradiometer report (660 + 850 nm); per-distance irradiance map; EMF < 1 mG + flicker < 5%. Mito Red Light, Joov, Red Light Rising, Hooga publish third-party reports. Aliexpress/Temu '660 nm 100 W' panels at $80-200 may deliver one wavelength + 20% the labelled irradiance + high EMF + 100% flicker."

### 4.3 Bemer / Healthy Wave PEMF — waveform + magnetic-field-strength verification

**What ships from Bemer (Liechtenstein).** Bemer mats deliver a proprietary pulsed-electromagnetic-field signal — multi-frequency, low-intensity (peak ~ 100 µT = 1 G), pulsed at 30 Hz fundamental with harmonic structure. Class IIa CE-marked; Bemer publishes the proprietary waveform shape.

**Healthy Wave** is not CE-marked. Delivers ~ 200-400 µT at lower-frequency square-wave pulses.

**Spec verification.**
- **Magnetic field strength** — verifiable with a Hall-effect gaussmeter ($200-500). 1-10 G is therapeutic range; below 0.1 G is sub-therapeutic; above 1000 G is harmful and well beyond consumer PEMF.
- **Waveform** — verifiable with the gaussmeter output to oscilloscope. Bemer's proprietary waveform is the trial-anchored shape (Klopp 2013; Bemer-funded but reasonable methodology). Square-wave clones do not match.

**Edit recommendation:** add to §5.14: "PEMF spec to verify: peak magnetic field 1-10 G (= 100-1000 µT — verifiable with a Hall-effect gaussmeter); waveform shape; CE-mark Class IIa. Bemer (Swiss/Liechtenstein) is CE-marked Class IIa with published waveform; Healthy Wave is not CE-marked. Generic 'PEMF mats' on Amazon at $200-500 often deliver wrong waveform + unknown field strength."

### 4.4 Pulsetto / Truvaga / Parasym / Xen by Neuvana / Nurosym — current calibration + impedance match

**What ships.**
- **Nurosym** (London) — CE-marked Class IIa; clip-on tragus electrode; current 0-5 mA biphasic pulse; published waveform.
- **Parasym** (London) — CE-marked Class IIa; clip-on tragus; similar spec.
- **Pulsetto** (Vilnius, Lithuania) — CE-marked Class IIa; neck-collar electrode (vagus + carotid sinus pathway); 25 Hz pulse.
- **Truvaga / gammaCore** (Electrocore, NJ) — FDA-cleared De Novo for cluster headache + migraine; not officially for tinnitus; hand-held neck electrode.
- **Xen by Neuvana** (Miami) — FDA general-wellness; ear-bud electrode pair.

**Spec verification.**
- **Current calibration** — needs to be 0-5 mA biphasic for tragus-clip taVNS. Verifiable with a current probe + oscilloscope ($300-500 lab cost). Clones often deliver DC (which causes electrolytic skin burns) or wrong waveform.
- **Electrode impedance match** — proprietary tragus-clip electrodes are gel-coated + impedance-matched to the device output. Clone electrodes (often re-purposed TENS pads) have wrong impedance + cause skin burns + miscalibrated current.
- **Waveform** — biphasic square pulse at 25 Hz (Nurosym) or 30 Hz (Parasym). Verifiable with oscilloscope.

**Trust anchor.** Each authentic Nurosym / Parasym / Pulsetto has a CE-mark + serial registration. Clones (Aliexpress + Temu offer "Vagus Nerve Stimulators" at $20-50) carry neither.

**Edit recommendation:** add to §5.12: "taVNS device spec to verify: CE-mark Class IIa (Nurosym, Parasym, Pulsetto) or FDA-cleared De Novo (Truvaga gammaCore for cluster headache, not tinnitus); biphasic current 0-5 mA (NOT DC — DC causes electrolytic burns); proprietary electrode (re-purposed TENS pads cause skin burns + miscalibrated current); manufacturer serial registration. Aliexpress/Temu 'vagus nerve stimulator' clones at $20-50 do not deliver any of these."

### 4.5 Lenire (Neuromod Devices) — clinic + post-market spec

**What ships.** Lenire is an FDA De Novo (2023) + CE-mark (2021) bimodal neuromodulation device: a sound-delivery component (Bluetooth headphones playing a tinnitus-individualised audio sequence) + an intra-oral tongue-tip electrode array delivering biphasic electrical stimulation timed against the audio. The patented combination is the trial-anchored intervention.

**Post-market spec verification.**
- **Tongue-tip electrode replacement.** The intra-oral electrode array is consumable — Neuromod requires replacement every 12 months (electrode-impedance drift + biofilm contamination). Users who do not replace the electrode get sub-therapeutic stimulation + increased oral irritation risk.
- **Audio firmware updates.** The audio sequence is software-updated periodically; outdated firmware delivers an older sequence. Verify firmware version on the user's app.
- **Re-fitting cadence.** TENT-A2 + Boedts 2024 protocols included a 12-week intensive use period; sustained 12-month outcome data assume continued daily use. Sub-therapeutic use (< 60 min/day) does not match the trial protocol.

**Clone risk for Lenire.** Lower than for Vielight / red-light / taVNS because the patented system is more complex (sound + tongue + algorithm). But "Lenire-style" YouTube self-build videos exist; some users may attempt DIY with a sound generator + TENS unit. **The dossier should explicitly say this does not match the trial protocol + carries real oral-tissue injury risk.**

**Edit recommendation:** add to §15.2 Lenire row (extending the wave-2 honest restatement): "Post-market spec: replace intra-oral tongue electrode every 12 months per manufacturer; verify firmware via the Neuromod app at each clinic re-fit (Lenire is fitted at an audiologist clinic — there are ~ 150 clinics in EU/UK and growing US clinic network as of 2026). DIY 'Lenire-style' self-build with TENS unit + sound generator does not match the trial protocol + carries oral-tissue injury risk (TENS electrodes are not safe for intra-oral use). The trial-anchored Lenire AE profile (tongue irritation ~30-40%, transient TFI worsening ~5-10%) applies to the authentic system used per protocol; DIY substitution has unknown risk profile."

### 4.6 The regulatory-status column the dossier needs

Wave-2 Part 4 already recommended a regulatory-status column on §10.7.1. The wave-3 amplification:

| Device | Class | Authority | Spec verification path |
|---|---|---|---|
| Consumer audiogram (Mimi, EarTrumpet, SonicCloud) | General wellness | Self-declared | Cross-check against clinical audiogram once at baseline |
| OTC hearing aids (Jabra Enhance, Lexie, Bose, Sony, Eargo) | FDA-cleared OTC (2022) | FDA OTC pathway | Manufacturer warranty + 30-day return |
| Bedside sound machine (LectroFan, Marpac, Snooz) | General wellness | Self-declared | dB-meter check (target 30-50 dB) |
| Vielight Neuro Gamma | CE Class IIa | Health Canada MDEL + EU MDR | Serial registration; spectrometer + oscilloscope per Dim 4.1 |
| Vielight 810 intranasal | CE Class IIa | Health Canada MDEL + EU MDR | Same |
| Mito Red Light / Joov / Hooga / Red Light Rising | General wellness (US) / CE Class I (EU varies) | Self-declared + third-party spectroradiometer reports | Per Dim 4.2 |
| Bemer mat | CE Class IIa | Swiss SMG + EU MDR | Gaussmeter per Dim 4.3 |
| Healthy Wave mat | General wellness | Self-declared | Gaussmeter (not CE-marked) |
| Nurosym | CE Class IIa | UK MHRA + EU MDR | Per Dim 4.4 |
| Parasym | CE Class IIa | UK MHRA + EU MDR | Same |
| Pulsetto | CE Class IIa | Lithuanian regulator + EU MDR | Same |
| Truvaga / gammaCore | FDA De Novo (cluster headache, migraine) | FDA De Novo | Off-label use for tinnitus |
| Xen by Neuvana | General wellness | Self-declared | Lowest evidence + regulatory tier |
| Lenire | FDA De Novo (2023) + CE Class IIa (2021) | FDA + EU MDR | Per Dim 4.5; clinic-fit pathway |

**The dossier currently flattens all 14 of these into the same "advanced devices" + "device suppliers" listing.** The regulatory + verification asymmetry is real and load-bearing.

---

## Dimension 5 — Lot-traceability + recall ingestion + AE-to-batch chain

**Score: 1 / 10.** No lot capture, no recall feed ingestion, no customer affordance to record a lot number, no AE → batch linkage. This is the storefront-infrastructure dimension and the one that should gate the *subscription* button rather than the dossier itself.

### 5.1 What a real lot-traceability + recall pipeline looks like

Standard pharma+supplement OTC commerce (modelled on Nordic Naturals direct-to-consumer, Pure Encapsulations practitioner-direct, Thorne practitioner-portal):

1. **Lot capture at fulfilment.** Every shipment carries the lot number(s) of every product. The user's order record persists the lot. The shipping label includes the lot.
2. **Customer-facing lot affordance.** The user's account page shows the lot they received per product per order. "Save your lot number" prompt at the unboxing-card level. A QR code on the package links to the manufacturer's lot-COA portal (where available).
3. **Recall feed ingestion.** Pull-mode RSS / API ingestion from:
   - **EMA EUDAMED** (EU medical devices — Lenire, Vielight, Bemer, Nurosym, Parasym, Pulsetto)
   - **EU RAPEX / Safety Gate** (consumer products including non-CE-marked devices)
   - **UK MHRA Drug Safety Updates + Medical Device Alerts**
   - **TGA Australia Recall Actions + Class I/II Hazard Alerts**
   - **Health Canada Recalls and Safety Alerts**
   - **AYUSH Pharmacopoeia Commission India + PvPI bulletins** (for Ayurvedic/Siddha/Unani)
   - **NMPA China** (for TCM products) — limited public API; periodic manual ingestion acceptable
   - **NSF International + USP-Verified + ConsumerLab** (third-party verifier alerts — third-party-test compromise advisories)
4. **Recall fan-out.** When a relevant lot is recalled, the system identifies every subscriber who received that lot + emails within 24 hours. SMS for serious recalls. The recall communication includes: lot number, recall reason, action (stop use / return / replace), refund / replacement pathway.
5. **AE → batch linkage.** When a user submits an AE via the §3 (wave-1) AE intake form, the system auto-pulls the lot number from the user's last shipment of the named product. The QC reviewer can then aggregate AEs by lot — if 3 AEs from the same lot land in the same week, that lot is flagged for direct manufacturer query + potential hold on shipment.
6. **Public lot-COA registry.** A `/safety/lots` route surfacing the per-product per-lot COAs available from the manufacturer. Where a manufacturer does not publish per-lot COAs (Schwabe, most AYUSH brands, most TCM brands), the registry surfaces the audit-mode question and offers to fund independent ICP-MS + HPLC verification per quarter on a sampled basis.

### 5.2 What the storefront has today

Per the wave-1 review: nothing. The ConversionStrip's "30-day return on unopened items" is the only product-safety promise. Lot numbers are not captured. Recall feeds are not ingested. AE → batch linkage does not exist.

### 5.3 Minimum-viable pipeline for the founder

**Phase 1 (2-3 weeks).**
1. Add lot-number capture to the order-fulfilment record (single database column).
2. Print lot number on the packing slip.
3. Add an "I want to record my lot number" affordance on the user's account page.
4. Subscribe to one recall feed: EMA EUDAMED (for the device tier — Lenire / Vielight / Bemer / Nurosym / Parasym / Pulsetto). RSS-ingestible. ~$0 cost.
5. Subscribe to MHRA Drug Safety Updates + TGA Recall Actions + Health Canada Recalls (all RSS or email).
6. Manual review weekly by founder or named medical advisor; relevant recall → email fan-out to affected subscribers.

**Phase 2 (4-8 weeks).**
1. Manufacturer-direct API integration for the top-5 brands: Schwabe (via authorised EU distributor portal); Thorne (B2B portal); Nordic Naturals (direct API); Pure Encapsulations (practitioner-direct portal); Plum Flower (Mayway direct).
2. Per-lot COA registry surfaced on `/safety/lots`.
3. AE → batch linkage in the AE intake form (auto-pull user's last lot).

**Phase 3 (12-24 weeks).**
1. Per-quarter independent ICP-MS + HPLC verification sampling — partner with Eurofins NA (Madison WI), SGS (Mississauga ON), Intertek (Cortland NY), or Activ'Inside Lab France. $400-800 per sample. Sample top-20 SKUs per quarter; surface results on `/safety/lots/verification`.
2. AYUSH bulletin + PvPI manual ingestion (no clean API; periodic founder review).
3. NMPA China manual ingestion.

### 5.4 Cost estimate

- Phase 1: ~ 30-50 engineering hours + recurring 2-4 hours/week of founder/medical-advisor recall review. ~$5,000 one-time + ~$1,000/month recurring.
- Phase 2: ~ 100-150 engineering hours. ~$15,000 one-time + ~$2,000/month recurring (API access fees + COA hosting).
- Phase 3: ~ 50 engineering hours + ~$30,000-50,000/year sampling budget + ~$1,000/month manual-bulletin review.

Year-1 minimum-viable QC pipeline ≈ $50,000-80,000 fully loaded. Phased subscriptions are perfectly defensible against this; one-off purchases at the affiliate-referral layer (the current ConversionStrip model) are defensible today on Phase-1 only.

### 5.5 What this enables on the customer-facing side

The trust mechanism. The thing the founder can put on the home page that nobody else in the natural-medicine commerce space can put on theirs:

> **Per-lot certificate-of-analysis registry.** Every bottle you receive carries a lot number. Open your account, see the COA. If a recall happens, we email you within 24 hours. If you report an adverse event, we link it to your batch. This is what supplement quality control looks like when it's real.

A founder who can ship that surface in 6 months has built a moat the rest of the OTC-natural-medicine commerce sector will not be able to copy quickly.

---

## Cross-dimension synthesis — the per-bundle audit

The `tinnitus-quiet-90` bundle in `lib/data.ts` line 48 reads:

```
{ id: "tinnitus-quiet-90", name: "90-Day Tinnitus Quiet Pack",
  duration: "90 days", categoryId: "brain-focus",
  price: 169, subscriptionPrice: 139, marginModel: "Reseller · 41% gross margin",
  products: [
    { name: "Tebonin Ginkgo EGb 761", supplier: "Schwabe", qualityScore: 94,
      qualitySignals: ["Standardised EGb 761 extract"], evidenceGrade: "C" },
    { name: "Magnesium Glycinate", supplier: "Verified reseller", qualityScore: 93,
      qualitySignals: ["Chelated", "USP-grade"], evidenceGrade: "C" },
    { name: "Zinc Balance Complex", supplier: "Verified reseller", qualityScore: 87,
      qualitySignals: ["Chelated", "Copper-balanced"], evidenceGrade: "C" },
    { name: "B12 Methylcobalamin", supplier: "Verified reseller", qualityScore: 90,
      qualitySignals: ["Methylated form"], evidenceGrade: "C" }
  ], … }
```

**Wave-3 audit:**

1. **Tebonin Ginkgo EGb 761** — supplier correctly named (Schwabe). qualityScore 94 is defensible. **qualitySignals missing the load-bearing spec: 24/6 + ginkgolic acid ≤ 5 ppm.** Add. (Aligned to Dim 1.1.)
2. **Magnesium Glycinate** — supplier "Verified reseller" is the same opaque cipher used on most product entries in data.ts. **Replace with Pure Encapsulations or Doctor's Best + Albion TRAACS bisglycinate spec.** (Aligned to Dim 1.2.) qualityScore 93 with "USP-grade" tag is plausible but unverified.
3. **Zinc Balance Complex** — supplier "Verified reseller" again. **Replace with Thorne or Pure Encapsulations + spec the picolinate or bisglycinate form + the Zn:Cu 8-15:1 ratio.** Add monitoring affordance per wave-1/2 (serum Cu at 6 months).
4. **B12 Methylcobalamin** — supplier "Verified reseller" again. **Replace with Jarrow Methyl B-12 + spec sublingual + USP grade.** Add CBC monitoring affordance per wave-1.
5. **Lot capture.** Per Dim 5, this bundle should carry per-product lot number on the packing slip + user account.
6. **Subscription cadence.** 90-day shipment + 90-day re-shipment = lot rotation. The user gets a *different lot* of each product every 90 days. **The recall window is therefore always relevant** — a recall issued during month 4 of a 12-month subscription affects two-thirds of the subscriber's bottles over the year.

**Bundle-level edit recommendation:** replace generic "Verified reseller" supplier strings with named brands per Dim 1 + Dim 3. Add lot-tracking + COA-link affordances per Dim 5.

---

## Specific concerns checklist — from the brief

The brief asked five dimensions. Here is each one explicitly with the action.

### (1) Per-brand identity + potency verification

**Walked.** Dim 1 above covers Schwabe Tebonin / Magtein / Magnesium glycinate-Albion / Pycnogenol-Horphag-only / Pure Encapsulations melatonin Ph.Eur. / Jarrow NAC IR vs Sustain / KSM-66 vs Sensoril / Thorne / Nordic Naturals IFOS / Real Mushrooms fruiting-body / Remifemin vs MediHerb. **Nine specific spec-or-supply edits proposed** (Dim 1.10 ship-list).

### (2) Heavy-metal residue across Ayurveda / Siddha / Unani / TCM

**Walked.** Dim 2 above. Saper 2008 paradigm. **Three structural deliverables proposed:**
- The Saper 2008 honesty paragraph (text edit, ship this week).
- A tiered supplier table (Tier 1 / 2 / 3) replacing the flat §9.1.
- Per-formula heavy-metal risk class (Dim 2.3 table) — embed as an appendix.

Named third-party labs for user self-verification: Eurofins NA (Madison WI), SGS (Mississauga ON), Intertek (Cortland NY) — ICP-MS heavy-metal screening at ~$80-180/sample.

### (3) Microbiological + aflatoxin + pesticide on botanicals

**Walked.** Dim 3 above. Eight botanicals with specific failure modes + tests + trial-anchored brands:
- Triphala (aflatoxin → HPLC-FLD, EU 2 µg/kg cap).
- Ginkgo (pesticide + solvent → EU-MRL + Ph.Eur. 2.4.24).
- Pycnogenol (low risk — Horphag controlled-cultivation).
- Lion's Mane (mycelium-on-grain vs fruiting-body → beta-glucan / alpha-glucan ratio).
- Saffron (the most-adulterated spice → ISO 3632 + DNA).
- Black Cohosh (species substitution → DNA barcode + Remifemin spec).
- Ashwagandha (species substitution + KSM-66 vs generic).
- Long Dan Xie Gan Tang (Aristolochia + SO2 + pesticide).

Plus six secondary botanicals (Bacopa, Shankhpushpi, Jatamansi, Yashtimadhu, sweet flag, Bilva) with shorter audit footnotes.

### (4) Device QC + grey-market at depth

**Walked.** Dim 4 above. Five device classes (Vielight, red-light panels, PEMF, taVNS, Lenire) — each with verification spec + clone-vs-authentic verifiable test + regulatory-tier classification. **A 14-row regulatory-status + verification table** to replace the current flat §10.7.1.

### (5) Lot-traceability + recall pipeline for the bundle storefront

**Walked.** Dim 5 above. Three-phase minimum-viable pipeline (Phase 1: 2-3 weeks; Phase 2: 4-8 weeks; Phase 3: 12-24 weeks). Cost estimate ~$50-80k Year-1 fully loaded. The customer-facing trust surface this enables is the moat the founder should be building.

---

## What I would publish vs. what I would gate

**Publish unchanged + ship the Dim 1 + Dim 2 + Dim 3 + Dim 4 text edits this week:**
- The Tier 1 / 2 / 3 supplier-tiering in §9.1.
- The Saper 2008 honesty paragraph in §9.0.5 (modelled on §10.5.5).
- The per-botanical spec footnotes (EGb 761 spec; Albion bisglycinate; Horphag-only Pycnogenol; ISO 3632 saffron; KSM-66 specifically; IFOS 5-star omega-3; fruiting-body Lion's Mane; Remifemin Black Cohosh).
- The device QC verification table replacing §10.7.1's flat row-set.
- The Lenire post-market spec (electrode replacement + firmware + DIY-substitution warning) extending §15.2.

**Gate behind Phase-1 infrastructure (4-6 weeks — block the *subscription* CTA until ready):**
- Lot capture at fulfilment.
- Customer-facing lot affordance.
- Three-feed recall ingestion (EMA EUDAMED + MHRA + TGA).
- 24-hour subscriber notification on a relevant recall.

**Defer to Phase 2 + 3 (12-24 weeks; concurrent with the wave-1/2 AE pipeline):**
- Per-lot COA registry.
- AE → batch linkage.
- Independent quarterly ICP-MS + HPLC verification sampling.
- AYUSH + PvPI + NMPA manual bulletin ingestion.

---

## Closing reviewer position

This dossier — viewed through the analytical-chemistry lens — is more rigorous than 90% of the OTC supplement-commerce properties I have audited. Naming Schwabe Tebonin (not generic Ginkgo), Magtein (not generic threonate), KSM-66 (not generic ashwagandha), Horphag Pycnogenol (not generic pine bark), Kaneka ubiquinol (not generic CoQ10), Real Mushrooms (not generic Lion's Mane), Plum Flower / Min Tong (not generic Chinatown TCM), Remifemin (not generic Black Cohosh) — this is the discipline most commerce properties skip. The founder has built something that is at the **per-brand naming** frontier.

But naming a brand is not the same as testing the lot. Specifying EGb 761 is not the same as verifying ≤ 5 ppm ginkgolic acid on the bottle in hand. Listing Patel Brothers as a channel for Saraswatarishta is not the same as flagging that Patel Brothers is a grocery distributor that does not run heavy-metal QC. Listing Vielight Neuro Gamma at $1,749 is not the same as helping a user verify that the package they received is not a $40 Temu clone with the wrong wavelength.

The path forward is two-phased. The content-edit layer (Dim 1 + 2 + 3 + 4 textual specs) can ship in 1-2 weeks of focused writing and would close roughly 60% of the QC content gap. The infrastructure layer (Dim 5 lot-traceability + recall + COA registry) is a 12-24 week build that the founder should sequence concurrently with the wave-1 AE pipeline and the wave-2 historic-signal callouts.

**Recommended decision:**
- *Conditional accept* of the tinnitus dossier as content; ship the Dim 1-4 text edits in the next sprint.
- *Defer storefront subscription CTA* until Phase 1 lot-capture + 3-feed recall ingestion are wired (4-6 weeks). One-off purchases via affiliate referral remain defensible today.
- *Plan for* Phase 2 + 3 infrastructure over the next 6 months; budget ~$50-80k Year-1 fully loaded for the QC pipeline.
- *Major revision* requested on the skill spec — add Rule 20 (or extend Rule 19) requiring per-brand identity + potency + heavy-metal + microbiological + pesticide spec coverage in the §3.3 + §4.2-4.7 + §5 + §9.1 sections of every dossier in the atlas. This is the v6.3 / v7 add that propagates across all 78 journeys.

The founder is two sprints from "best-in-class QC content" and two quarters from "best-in-class QC infrastructure". The gap between the two is the gap between a careful editorial product and a real OTC commerce safety system. The first sprint closes the gap by half. The first quarter closes most of the rest.

— Reviewer, 2026-06-08. *Doctrine preserved: OTC + home + six-tradition + no-US-regulator-authority — every analytical authority cited routes through EU Ph.Eur. + EMA HMPC + Swissmedic + TGA AUST-L + Health Canada NHP + AYUSH Pharmacopoeia + Chinese Pharmacopoeia + UK MHRA + Iranian Saffron Council + ISO 3632 + IFOS. Single FDA reference is De Novo / 510(k) regulatory-path context for Lenire / Truvaga, already declared in the dossier.*
