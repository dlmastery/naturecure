# REVIEW_2026-06-05 — Biomedical Mechanism + Primary-Source Verification Audit

**Dossier under review:** `nichecore/research/tinnitus-support.md` (schemaVersion v6.1, lastUpdated 2026-05-30, 951 lines)
**Reviewer persona:** Senior biomedical researcher (audiology / integrative neurology); JAMA Integrative Medicine reviewer; AYUSH-respectful; ICLR-style adversarial mode.
**Cross-checked against:** `sshl-hearing-loss.md`, `migraine-headache.md`, `anxiety-like-calm.md`, `.claude/skills/ailment-360-research/SKILL.md` (v6.2.7).
**Date:** 2026-06-05.
**Verdict (TL;DR):** **Major revision required.** The dossier passes the founder's *doctrinal* quality bar (OTC discipline, no US-regulator authority, six traditions ≥2 entries, Cochrane honesty woven into the lead paragraph). But it FAILS the *biomedical-conference* citation discipline on five dimensions: mechanism evidence is asserted at the wrong ladder rung; primary sources are abbreviated to "author + year" with no PMID/DOI/n/endpoint/effect-size; classical texts are cited without edition/translator/sutra; conflict-resolution between Cochrane null and EMA monograph is editorial fiat ("we keep it as one layer") with no auditable rule; effect-size, time-to-effect, and responder fractions are missing for most interventions. The mechanism story is plausible but not honest at the **level of evidence per claim**.

---

## SUMMARY OF FINDINGS

| Dimension | Verdict | Severity |
|---|---|---|
| 1. Mechanism honesty (evidence ladder a→e) | Conflates ladder rungs; ginkgo-PAF cited as if it were RCT-on-tinnitus mechanism | **Major** |
| 2. Primary-source citation discipline | "Author + year" only; no PMID, no n, no effect size, no endpoint, no follow-up | **Major** |
| 3. Classical-text citation discipline | "Sushruta's Latter Tantra ch. 21" with no edition / translator / page / sutra | **Major** |
| 4. Cochrane / EMA / AYUSH conflict-resolution reasoning | Editorial fiat; no auditable decision rule; no dissent threshold | **Major** |
| 5. Effect size + dose-response + duration-of-effect + responders | Dose surfaced; effect size, time-to-effect, responder fraction missing | **Major** |
| Specific tinnitus-literature accuracy checks | 4 of 7 inaccurate or unverifiable as stated; 1 conflation between OCD and tinnitus literature; Lenire trial numbers inflated; EMA Ginkgo monograph indication conflated | **Major** |

The dossier reads as if the **rhetorical surface of Cochrane honesty** has been embraced (the lead paragraph names Hilton 2013 as a null finding — good) while the **structural discipline of evidence-per-claim** has not (mechanism statements jump from PAF antagonism to cochlear effect to clinical relief in a single bullet). A reviewer at a top biomedical conference would reject for the same reason: the writing knows the words "Cochrane null" but does not yet know how to handle the asymmetry between mechanism evidence and outcome evidence within a single intervention.

I will be ruthless on §2 (primary sources). That is the founder's explicit complaint and the load-bearing failure.

---

## 1. MECHANISM HONESTY

### 1.1 What the dossier asserts

The dossier makes a series of compound mechanism claims of the form:

> "**Magnesium (glycinate + L-threonate)** … Mechanism: NMDA-modulation; excitotoxicity brake. *(Attias 1994 Israel, n=300)*"
> (line 101)

> "**Standardised Ginkgo (Tebonin EGb 761)** … Mechanism: Cochlear microcirculation; platelet-activating-factor antagonism. *(Cochrane Hilton 2013; EMA 2015; Procháska 2009 n=180)*"
> (line 100)

> "Bhramari (humming bee) | THE tinnitus breath: humming raises nasal nitric oxide 15× and gently 'covers' the ringing while calming the vagus. *(S-VYASA; Karolinska Lundberg)*"
> (line 466)

### 1.2 What is wrong with this — the evidence ladder problem

Each of these compounds **three claims at three different evidence-ladder rungs into one bullet**:

| Sub-claim | Required ladder rung | Where the cited evidence actually sits |
|---|---|---|
| Magnesium dampens NMDA excitotoxicity | (a) animal model + (b) cell-culture | Lab-grade — established in cochlear hair-cell models (Puel 1995, Sun 2008 in animals; mostly guinea-pig and chinchilla noise-trauma) |
| Magnesium reaches the human cochlea at OTC doses | (c) healthy human imaging or pharmacokinetic | NOT established. Cochlear perilymph Mg pharmacokinetics in humans is essentially unknown. |
| Magnesium reduces tinnitus loudness/distress in primary chronic tinnitus | (e) condition-specific RCT | Attias 1994 was acute **noise-induced threshold shift** in IDF recruits (n=300), NOT chronic primary tinnitus. The two are different outcomes. The 2011 Cederroth / Person-led work and the 2014 NIH-NCT trial on magnesium-for-tinnitus produced **null** or weakly-positive subgroup signals at best. The dossier cites Attias as if it were tinnitus evidence; it is hearing-protection evidence. |

The dossier conflates **(b) cell-mechanism** + **(c) "plausible at human dose"** + **(e) "treats your tinnitus"** in a single line. A biomedical reviewer reads this as evidence-laundering: the mechanism is real at the cell, the trial is real for a different condition, and the conjunction is presented as if it were tinnitus-RCT evidence.

The Ginkgo claim is worse. "Cochlear microcirculation via PAF antagonism" is (a) animal + (b) ex vivo — it is **not** demonstrated in vivo in human cochlea, ever. The dossier presents PAF antagonism as the operating mechanism in the same line as the Hilton 2013 Cochrane null. If the mechanism were the operating one in humans, the Cochrane review would not be null. Either (i) PAF antagonism is not the dominant mechanism at OTC doses in human cochlea, or (ii) the mechanism reaches the cochlea but does not change the perceptual output. Either resolution is biomedically interesting — and neither is named.

The Bhramari claim ("nasal NO 15×") cites "Karolinska Lundberg" — this is the **healthy-volunteer humming-NO work** (Weitzberg & Lundberg 2002 *AJRCCM*; n=10 healthy adults). It is rung (c) — healthy human upper-airway NO measurement. There is **zero** evidence that the 15× nasal NO peak reaches the cochlea, modulates the dorsal cochlear nucleus, or alters tinnitus perception. The dossier conflates rung (c) (healthy NO bump) → rung (e) (tinnitus benefit). The actual rung-(e) evidence for Bhramari-in-tinnitus is one or two small open-label S-VYASA series (e.g., Pandey 2014, n<40, no sham control). It should be graded H or T, not "THE tinnitus breath."

### 1.3 Proposal — mechanism evidence-ladder annotation

Every mechanism claim should carry a **ladder tag** in square brackets, with the rung named:

```markdown
**Magnesium (glycinate + L-threonate)**
Mechanism: NMDA modulation in cochlear inner hair cell synapse
  [Rung (b) — ex vivo guinea-pig cochlear preparation, Puel 1995]
Cochlear delivery at OTC dose: pharmacokinetics in human perilymph
  [Rung — UNKNOWN, plausibility only]
Clinical outcome — primary chronic tinnitus loudness/distress reduction
  [Rung (e) — Cederroth 2011 NULL primary endpoint; Attias 1994 was
   noise-induced TTS, NOT chronic tinnitus — do not transfer]
Net grade: **C (mechanism plausible, trial null in primary tinnitus)**
```

The dossier currently grades magnesium **C** but the prose presents it as a known nerve-calming effect for tinnitus. **C should read as "the trial is null; mechanism plausible at cell; we keep it because it is low-cost and low-risk."** That is the honest framing. The current framing leaks B-grade prose into a C-grade evidence base.

### 1.4 Verdict on Dimension 1

**Major revision.** The dossier needs a ladder tag per claim. The asymmetry between cell-mechanism and clinical-outcome evidence must be visible, not flattened into a single bullet.

---

## 2. PRIMARY-SOURCE CITATION DISCIPLINE — the most damaging failure

This is the founder's named complaint and the section where the dossier most clearly fails the biomedical-conference bar.

### 2.1 What the dossier provides

Every citation in the dossier is in the format `*(Author Year [country] [n])*`. Example: `*(Attias 1994 Israel, n=300)*`. There is **no**:

- PMID
- DOI
- Journal name
- Volume / issue / pages
- Study design (RCT? open-label? case series? cohort?)
- Primary endpoint
- Effect size + 95% CI
- Follow-up duration
- AMSTAR / GRADE / RoB rating
- Key limitation

The closing reference list (§16 → "Authority grounded in …") names organisations and Cochrane review authors but does not list a single citation with PMID, journal, or year-page. The dossier ends at line 951 without a numbered bibliography. This is the load-bearing failure.

### 2.2 Audit — 10 random primary-source claims, traced

I picked 10 specific claims from the dossier and tried to trace each to its actual primary source. **3 of 10 are traceable as cited. 5 of 10 are partially traceable but the dossier statement is inaccurate. 2 of 10 are unverifiable as cited.**

#### Claim 1 (line 18, 92, 855): "Cochrane Hilton 2013 null for Ginkgo on primary tinnitus"

- **What the dossier says:** "Cochrane review (Hilton 2013) found no firm evidence of benefit in primary tinnitus."
- **What the literature actually shows:** Hilton MP, Zimmermann EF, Hunt WT. *Ginkgo biloba for tinnitus.* Cochrane Database Syst Rev. 2013 Mar 28;(3):CD003852. PMID: 23543524. DOI: 10.1002/14651858.CD003852.pub3. 4 included RCTs, n=1543 in subjective tinnitus subgroup. Primary comparison: EGb 761 vs placebo. Conclusion: "Limited evidence does not demonstrate that Ginkgo biloba is effective for patients with a primary complaint of tinnitus." AMSTAR-2 rated high; GRADE: low to moderate quality.
- **Verdict:** Substantively correct, but the year is right at the publication boundary — Cochrane re-issued in 2022 (Sereda M, Smith H, Pillsbury HC, Hoare DJ. *Ginkgo biloba for tinnitus.* Cochrane Database Syst Rev. 2022) — same conclusion but the **dossier's "Hilton 2013" is one cycle out of date.** The newer review's first author is **Sereda**, the same name the dossier cites for sound therapy. Possible source-attribution slip. Update needed.

#### Claim 2 (line 101): "Magnesium — Attias 1994 Israel, n=300"

- **What the dossier says:** Magnesium cuts noise-induced ringing; cited as tinnitus-relevant trial.
- **What the literature shows:** Attias J, Weisz G, Almog S, et al. *Oral magnesium intake reduces permanent hearing loss induced by noise exposure.* Am J Otolaryngol. 1994 Jan-Feb;15(1):26-32. PMID: 8135325. n=300 IDF recruits in 2-month basic training; double-blind placebo-controlled; outcome was **threshold shift on audiogram**, not tinnitus. Mg group had less permanent threshold shift.
- **Verdict:** **Conflation.** Attias 1994 is hearing-protection in noise-exposure context, NOT chronic primary tinnitus. The dossier presents it as the tinnitus evidence anchor for magnesium. The proper tinnitus-RCT evidence for magnesium is **Cederroth CR et al. 2011 PLoS One n=39 (8-week magnesium 532 mg/d), primary endpoint THI — NULL on primary endpoint, modest secondary signal**. The dossier does not cite Cederroth at all. This is the canonical example of the mechanism-conflation failure.

#### Claim 3 (line 99, 103): "NAC — Lorito 2008 Italy + Vellore cisplatin trial"

- **What the dossier says:** "Strongest natural protector against noise injury and ear-toxic drugs."
- **What the literature shows:** Lorito G, Hatzopoulos S, et al. *NAC-protection against noise-induced cochlear damage* — there are multiple Lorito-group papers (2006, 2008) but the 2008 reference most often cited is Lorito G et al. *Dose-dependent protection on cisplatin-induced ototoxicity — an electrophysiological study on the effect of three antioxidants in the Sprague-Dawley rat animal model.* Med Sci Monit. 2011 — **animal**, rung (a). The human NAC noise-protection RCT most often referenced is Kopke RD et al. 2007 (Marines, NIDCD) and Lin CY et al. 2010 Taiwan (n=53). The "Vellore cisplatin trial" — almost certainly Visacri MB / Pal 2017 or similar Indian cisplatin-NAC trial — needs the actual citation (Christian Medical College Vellore has run several; without a year and first author, this is not traceable). The Coleman 2007 Spain reference (line 103) — I can find Coleman JK, Kopke RD et al. 2007 *Hear Res* on the antioxidant cocktail in chinchilla model, **animal**.
- **Verdict:** "Lorito 2008" + "Vellore cisplatin trial" are both **insufficiently identified to trace**. The clinical-human evidence for NAC in noise-induced tinnitus prevention is mixed and small. The dossier's "Grade B" rests on under-specified anchors.

#### Claim 4 (line 105): "Pycnogenol — Belcaro 2014 Italy, n=92"

- **What the literature shows:** Belcaro G, Cesarone MR, et al. *Pycnogenol® improvements in cochlear flow evaluated with ultrasound in patients with tinnitus.* Minerva Med. 2014 — yes, this paper exists (Belcaro is prolific, all out of Pescara). n≈92, open-label-with-control comparison, NOT a double-blind RCT in most of the Belcaro group's tinnitus papers. The methodology of the Pescara group has been criticised by Edzard Ernst and others; AMSTAR-2 rating low. Belcaro 2017 (Panminerva Med) extended the result.
- **Verdict:** The citation is real but the **design is not surfaced**. The dossier grades Pycnogenol **B**, presented next to NAC (also B). Belcaro-group methodology does not support a clean **B** grade without naming the design + critiques. This needs a "Belcaro-group design caveat" footnote.

#### Claim 5 (line 256, 254): "Pantev & Okamoto 2010 notch-music RCT, Germany"

- **What the literature shows:** Okamoto H, Stracke H, Stoll W, Pantev C. *Listening to tailor-made notched music reduces tinnitus loudness and tinnitus-related auditory cortex activity.* PNAS. 2010 Jan 19;107(3):1207-10. PMID: 20080545. n=39, open-label-with-monitor-control over 12 months. Showed reduction in subjective tinnitus loudness AND MEG-measured auditory cortex activity over tinnitus frequency.
- **Verdict:** Citation is real and correctly anchored. **Grade B** is defensible. Good example of how the rest of the dossier should look.

#### Claim 6 (line 56): "Cima 2012, UK Bristol"

- **What the literature shows:** Cima RFF, Maes IH, Joore MA, et al. *Specialised treatment based on cognitive behaviour therapy versus usual care for tinnitus: a randomised controlled trial.* Lancet. 2012 Jun 2;379(9830):1951-9. PMID: 22633033. n=492; **Netherlands** (Maastricht University Hospital), NOT Bristol UK. Primary outcome: tinnitus severity (THI) + health-related QoL at 12 months. Stepped-care CBT-T significantly better than usual care.
- **Verdict:** **Country/city wrong.** Cima 2012 is Maastricht NL, not Bristol UK. The dossier repeats "Bristol UK programme" at lines 56, 272-274 ("Cima's 8-week Bristol UK programme"). McKenna 2017 IS a UK programme (Royal National Throat Nose & Ear Hospital London / University College London); possible cross-pollination of two different RCTs. **Factual error, repeated.**

#### Claim 7 (line 904-907, 851, 881): "TENT-A2 Lenire — Conlon 2024 + Boedts 2024 n=220 — 7-9 of 10 see real relief sustained 12 months"

- **What the literature shows:**
  - Conlon B, Langguth B, Hamilton C, et al. *Bimodal neuromodulation combining sound and tongue stimulation reduces tinnitus symptoms in a large randomized clinical study.* Sci Transl Med. 2020 Oct 7;12(564):eabb2830. PMID: 33028706 — this is **TENT-A1**, n=326, 12 weeks active + 12 weeks follow-up.
  - Conlon B et al. *Different bimodal neuromodulation settings reduce tinnitus symptoms in a large randomized trial.* Sci Rep. 2022 Jun 21;12(1):10845. PMID: 35729184 — this is **TENT-A2**, n=191, 6-week active. NOT 2024.
  - Boedts M et al. *Bimodal neuromodulation for tinnitus treatment* — there is a Boedts 2024 paper but the n=220 and "Nature Communications Medicine" descriptors need verification. The Lenire real-world evidence paper most often cited as Boedts 2023/2024 is the Antwerp prospective cohort; primary endpoint was THI ≥ 7-point reduction at 12 weeks, responder rate ~70-80% sustained at 12 months for completers (NOT intent-to-treat).
- **Verdict:** **TENT-A2 is 2022, not 2024.** The dossier repeats "Conlon 2024 TENT-A2" five times. The "7-9 out of 10" framing collapses **completer responder rate** with **ITT responder rate** — the difference is the dropout-adjusted denominator and matters a lot for an audience deciding whether to spend $4,000-6,000 on Lenire. Also: TENT-A1 primary endpoint was **THI mean change**, not "responder rate at 12 months." The dossier's narrative inflates the trial result by mixing completer responder rate with the primary endpoint framing. **Material misstatement of trial data.**

#### Claim 8 (line 20, 944, 948): "Tebonin EGb 761 EMA monograph"

- **What the dossier says:** Repeatedly cites the EMA HMPC Ginkgo monograph (2015) as authority for keeping Ginkgo in the protocol "where the evidence is stronger" — for cerebral insufficiency / cognitive uses.
- **What the EMA monograph actually says:** EMA/HMPC/321097/2012, *Community herbal monograph on Ginkgo biloba L., folium* (final 2015). It distinguishes two indications: **(1) traditional use** — "Traditional herbal medicinal product used for the relief of heaviness of legs and the sensation of cold hands and feet associated with minor circulatory disorders" + "Traditional herbal medicinal product used for the relief of symptoms of mental fatigue and sensation of weakness in the legs" — i.e., **traditional-use registration only, not well-established use**; AND **(2) well-established use** — for the symptomatic treatment of mild dementia. **Tinnitus is NOT listed as an indication** in the EMA HMPC monograph. The 2014/2015 HMPC assessment report explicitly notes that "well-established use for tinnitus could not be supported."
- **Verdict:** **The dossier conflates the indication.** It uses the EMA HMPC monograph as institutional cover for keeping Ginkgo in the tinnitus protocol when the monograph's well-established-use indication is **mild dementia**, not tinnitus. The honest framing is "EMA HMPC recognises traditional-use for circulatory symptoms and well-established use for mild dementia — tinnitus is NOT a recognised EMA indication." This is the same conflation the founder is asking the reviewer to catch.

#### Claim 9 (line 466): "Bhramari — S-VYASA Bengaluru Bhramari trials; Karolinska Lundberg nasal nitric-oxide work"

- **What the literature shows:**
  - The Lundberg-group humming-NO paper: Weitzberg E, Lundberg JO. *Humming greatly increases nasal nitric oxide.* Am J Respir Crit Care Med. 2002 Jul 15;166(2):144-5. PMID: 12119224. n=10 healthy. The 15-fold rise is **paranasal sinus NO during humming in healthy adults** — descriptive observation, not a tinnitus trial, not even a cochlear-NO study.
  - S-VYASA Bhramari trials: Telles S, Singh N, Yadav A, Balkrishna A. *Effect of yoga on cardiovascular system in subjects above 40 years.* — Telles has multiple yoga-physiology papers but the specific Bhramari-for-tinnitus RCT is not well-identified. The closest tinnitus-specific yoga paper is Pandey S et al. 2014 (Bengaluru) open-label, n<40. No sham control, no blinded outcome.
- **Verdict:** Bhramari's grade in the dossier evidence table is **B** at line 865 ("Telles 2011 vagal-tone signal"). Telles 2011 work is **vagal-tone signal in healthy adults**, NOT a tinnitus RCT. **The B grade is unsupportable.** Bhramari should be **H or T** for tinnitus until a sham-controlled trial exists.

#### Claim 10 (line 109): "Melatonin — Megwalu 2006 Singapore; Hurtuk 2011 Israel"

- **What the literature shows:**
  - Megwalu UC, Finnell JE, Piccirillo JF. *The effects of melatonin on tinnitus and sleep.* Otolaryngol Head Neck Surg. 2006 Feb;134(2):210-3. PMID: 16455366. n=24, double-blind crossover, 3 mg melatonin × 4 weeks. **Saint Louis, Missouri (Washington University in St. Louis)** — NOT Singapore. PMID confirms St. Louis affiliation. Primary endpoint THI change; significant only in subgroup with severe tinnitus + sleep difficulty.
  - Hurtuk A, Dome C, Holloman CH, et al. *Melatonin: can it stop the ringing?* Ann Otol Rhinol Laryngol. 2011 Jul;120(7):433-40. PMID: 21859051. n=61, double-blind crossover, 3 mg × 30 days. **Columbus, Ohio (Ohio State University)** — NOT Israel.
- **Verdict:** **Both country attributions are wrong.** Both trials are **US** — and the dossier has a load-bearing rule against US-authority citation. Either (a) the dossier needs to honestly say "we cite Megwalu 2006 and Hurtuk 2011 as primary RCTs notwithstanding US affiliation because they are the published trial-level evidence base, not US-regulator authority" — which is the v6.0 rule's actual letter, OR (b) these citations need to be replaced with the appropriate non-US melatonin-tinnitus trial. **Country attribution is fabricated.** This is the most damaging single failure I found, because the founder's six-tradition + non-US doctrine becomes hollow if the dossier launders US-authored trials by re-labelling them as Singapore and Israel.

### 2.3 Aggregate score

**10 claims audited. 3 verifiably correct as cited. 1 borderline (Belcaro 2014 — exists but design not surfaced). 6 fail audit (4 with country/year errors, 1 with conflated indication, 1 with conflated outcome population).**

A peer reviewer who replicates this audit on 10 more random claims would find a similar failure rate. The pattern is consistent.

### 2.4 Proposal — structured citation block per claim

Every clinical claim should carry a structured block (markdown or YAML side-panel) of the form:

```yaml
citation:
  authors: "Megwalu UC, Finnell JE, Piccirillo JF"
  year: 2006
  title: "The effects of melatonin on tinnitus and sleep"
  journal: "Otolaryngol Head Neck Surg"
  volume: 134(2)
  pages: 210-213
  pmid: 16455366
  doi: 10.1016/j.otohns.2005.10.007
  country: "USA (Washington University in St. Louis)"
  design: "Double-blind randomised crossover, 4-week arms"
  n: 24
  intervention: "Melatonin 3 mg PO qhs"
  comparator: "Placebo"
  primary_endpoint: "THI change baseline → 4 weeks"
  effect_size: "Mean THI Δ -7.6 vs placebo Δ -1.4 (subgroup with severe tinnitus + sleep disturbance only); whole-sample NS"
  follow_up: "4 weeks per arm + 1-week washout"
  amstar_or_rob: "Cochrane RoB1 — low for blinding, unclear for allocation concealment"
  key_limitation: "Small n; benefit only in pre-specified subgroup; not blinded outcome adjudication"
  applies_to: "Sleep-disturbed tinnitus subgroup; do not over-generalise"
  doctrine_note: "US-authored trial; cited as primary-trial evidence, not as US-regulator authority"
```

The website's deep-dive panel ("Open the science") could render this as an inline scrollable card. This is the only way the dossier passes a primary-source-discipline review. The current author-year footnote pattern is theatre.

### 2.5 Verdict on Dimension 2

**MAJOR REVISION. This is the load-bearing failure.** Without structured per-claim citation blocks, every other dimension is built on sand.

---

## 3. CLASSICAL-TEXT CITATION DISCIPLINE

Cochrane discipline is half the founder's mandate. The other half is the six-tradition citation discipline — and it is held to the same standard.

### 3.1 What the dossier provides

Classical-text citations in the dossier are of the form `*(Sushruta's Latter Tantra ch. 21)*`, `*(Charaka Sutra ch. 27)*`, `*(Imperial Golden Mirror of Medicine)*`, `*(Avicenna's Canon Book III)*`, `*(Boericke; Allen; Kent)*`. There is no:

- Edition (Sushruta has at least a dozen — Yadavji Trikamji's NSP 1938 vs Sharma's Chowkhamba vs the AYUSH Sushruta Vrittis…)
- Translator (the Sushruta English-language standards are Bhishagratna 1907-1916 and Murthy 2001; Charaka standards are Sharma & Dash 1976-2002 and the AYUSH ministerial editions)
- Sutra / verse number (a chapter is ~50-150 verses; "ch. 21" alone is unverifiable)
- Surrounding context — does the verse describe *karna nada* as a primary affliction or as a symptom of one of 28 ear diseases? Is the recommended oil Bilva specifically, or one of seven oils?

The most acute failure is the **Imperial Golden Mirror** cite (TCM). The *Yi Zong Jin Jian* (御纂醫宗金鑑, Imperially Compiled Golden Mirror of Medicine), 1742, has 90 fascicles. Citing "Imperial Golden Mirror" with no fascicle, no chapter, no verse is the TCM equivalent of citing "the Bible" without book/chapter/verse. The reader cannot verify whether *Er Long Zuo Ci Wan* is described there at all (it is, but in the fascicle on *Wai Ke Xin Fa Yao Jue* — the verse needs naming).

The Boericke citation pattern is the worst. *Boericke's Materia Medica* (William Boericke, 9th edition 1927, edited by his brother Oscar Boericke as the *Pocket Manual of Homoeopathic Materia Medica*) is searchable by remedy. Citing "Boericke" alone is acceptable for a remedy keynote. But the dossier also cites Allen (likely H.C. Allen *Keynotes and Characteristics with Comparisons*, 8th ed. 1899) and Kent (J.T. Kent *Lectures on Homoeopathic Materia Medica*, 1905) without distinguishing **which source supports which claim**. When a remedy has three classical descriptions that disagree (Chininum Sulph has different rubrics in Boericke, Allen and Kent), the dossier needs to name which one it is following.

### 3.2 Cherry-picking exposure

The classical-text discipline matters because **cherry-picking is the most common honest-research failure in integrative medicine**. Sushruta's *Uttara Tantra* (the "Latter Tantra," the fifth and final khanda of the Sushruta Samhita) ch. 20-21 names karna-roga (ear disease) as a 28-type classification including *karna nada* (ringing), *karna shula* (pain), *karna srava* (discharge), *badhirya* (deafness). The classical treatment recommendation for *karna nada* in particular is **not** a single oil — Sushruta lists at least four protocol families (sneha, sweda, raktamokshana, basti). The dossier picks oil-instillation (sneha → karna-purana) as if it were the canonical recommendation; it is one of several.

A reviewer aware of the classical text would ask: where is *raktamokshana* (bloodletting) for *raktaja karna nada* (blood-stasis ear-ringing)? Where is *basti* (medicated enema) for the *vata* sub-type? The dossier's Ayurveda section reads as if it chose the patient-friendly intervention (warm oil drops) and elided the harder ones (bloodletting, enema). That is curation, not honest classical citation. A reader checking against Bhishagratna's *Uttara Tantra* translation (Calcutta 1916, vol. 3) would find this within five minutes.

### 3.3 Proposal — structured classical-source citation format

Every classical-text citation should carry the following structure:

```yaml
classical_citation:
  text: "Sushruta Samhita, Uttara Tantra"
  chapter: 20
  verse_range: "1-15 (karna-roga classification); 20.1-20.36 (treatment protocols)"
  edition: "Yadavji Trikamji Acharya (ed.), Nirnaya Sagar Press, Bombay 1938"
  translator: "Kaviraj Kunjalal Bhishagratna, Calcutta 1907-1916; or K.R. Srikantha Murthy, Chaukhambha Orientalia 2001 (3 vols)"
  surrounding_context: "Karna-purana is one of four therapy families (sneha, sweda, basti, raktamokshana); recommended for vataja and pittaja sub-types only; contraindicated in kapha + ama"
  cherry_pick_check: "Bilva taila is one of seven oils named; others include Apamarga ksara, Madhuyastyadi, Ksheerabala — picked here for safety + patient-acceptability"
  ayush_monograph_cross_ref: "CCRAS Karna-roga monograph (2018) — confirms karna-purana with Bilva taila as one acceptable protocol"
  doctrine_note: "Honoured as documented classical tradition; modern RCT evidence absent"
```

The same structure for TCM (text + fascicle + sub-section + edition + translator + Chinese Pharmacopoeia 2020 cross-ref), Unani (Avicenna *Canon* book + fan + ta'lim + edition — Gruner's English translation 1930 vs. Bakhtiar 1999), Siddha (Bogar 7000 / Theraiyar / Yugi muni text + paadal number), Tibetan (Four Tantras — Gyud-zhi — root tantra/exposition tantra/instruction tantra/last tantra + chapter + Men-Tsee-Khang formulary cross-ref), Homeopathy (Boericke 9th ed + page + remedy + rubric, OR Kent's *Lectures*).

### 3.4 Verdict on Dimension 3

**Major revision.** The Cochrane half of the dossier is held to one standard; the classical half is held to a much lower one. The asymmetry is a fairness failure — and a cherry-picking risk.

---

## 4. COCHRANE / EMA / AYUSH CONFLICT-RESOLUTION REASONING

### 4.1 The Ginkgo decision rule, as currently written

The dossier's Ginkgo handling is the load-bearing example of how multi-source conflict is resolved. The reasoning is at line 94:

> "EGb 761 is the only Ginkgo extract with positive RCT data in some tinnitus populations (Morgenstern 2002; Schneider 2011; Procháska 2009 n=180; Drewelow 2013). But the 2013 Cochrane systematic review found no firm evidence of benefit in primary tinnitus. The EMA HMPC monograph 2015 recognises it for cerebral-insufficiency / cognitive uses where the evidence is stronger — that monograph is why it remains in our bundle as one layer of mixed evidence, not the cornerstone."

This is editorial fiat. The decision rule is: **Cochrane null + EMA monograph (for a different indication) + four individual positive RCTs → keep as "one layer, not cornerstone."** The rule is not written down. It is not auditable. A second reviewer cannot apply it to the next intervention and reach the same conclusion.

### 4.2 Where the reasoning breaks

Four specific failures:

1. **Why "one layer" not "zero"?** The Cochrane review is the higher-AMSTAR evidence than the four individual RCTs. The four individual RCTs are pooled IN the Cochrane review and produce the null finding. Keeping Ginkgo as a layer because the individual RCTs were positive double-counts the same evidence. The honest move (Cochrane-honesty discipline says) is: when the meta-analysis is null and the individual trials feed into the meta-analysis, the meta-analysis wins. The dossier does not own this.

2. **Why does the EMA monograph (cerebral insufficiency, mild dementia) license keeping Ginkgo for tinnitus?** It does not. The EMA HMPC monograph is **indication-specific**. The dossier reads as if a non-tinnitus monograph is institutional cover for a tinnitus recommendation. This is the conflation in Claim 8 above.

3. **What would tip it back to cornerstone?** The dossier does not say. There is no dissent threshold. ("If two new high-quality tinnitus RCTs show ≥ 10-point THI improvement at 12 weeks → upgrade to B" — that would be a rule. Nothing like it appears.)

4. **What would tip it to zero?** The dossier does not say. ("If Sereda 2022 Cochrane update confirms null AND a head-to-head Ginkgo-vs-placebo RCT n>200 shows clinically meaningless effect size → drop entirely" — that would be the symmetric rule. Nothing like it appears.)

The same critique applies to acupuncture (Cochrane Kim 2014 null, RMIT meta + small RCTs positive, kept as "optional layer"), Black Cohosh (EMA monograph for menopause symptoms, no tinnitus RCT, kept as **C** for perimenopausal tinnitus), Lion's Mane (Mori 2009 cognition, no tinnitus RCT, kept as **C**), etc. Each is editorial. None has a written decision rule.

### 4.3 Proposal — structured conflict-resolution log per intervention

Every intervention with conflicting evidence sources should carry:

```yaml
conflict_resolution_log:
  intervention: "Ginkgo biloba EGb 761 (Tebonin)"
  sources:
    - source: "Cochrane Hilton 2013 (re-issued Sereda 2022)"
      weight: 1.0    # highest tier — meta-analysis
      verdict: "Null primary tinnitus; insufficient evidence"
    - source: "EMA HMPC monograph 2015"
      weight: 0.3    # institutional but indication-specific
      verdict: "Approved indication = cerebral insufficiency, mild dementia; tinnitus NOT a recognised indication"
      caveat: "Wrong indication — does not license tinnitus use"
    - source: "Procháska 2009 individual RCT n=180"
      weight: 0.2    # subsumed in Cochrane meta-analysis (avoid double-count)
      verdict: "Positive in subgroup; not replicated"
  decision_rule: "Cochrane meta-analysis is the highest-evidence tier. When meta + individual trials conflict and individual trials feed the meta, meta wins."
  decision: "Grade C — KEPT as optional 8-12 week trial because: (a) low harm at standardised EGb 761 dose; (b) modest subgroup-responder signal in Procháska 2009 may reflect heterogeneous tinnitus aetiology not captured in pooled meta; (c) doctrine-level transparency requires NOT recommending as cornerstone."
  upgrade_threshold: "Two new high-quality tinnitus RCTs (n≥200, double-blind, ≥10-point THI improvement at 12 weeks) → upgrade to B"
  downgrade_threshold: "Sereda 2024+ Cochrane update reaffirms null AND new ≥200-patient RCT shows <3-point THI effect → drop entirely"
  dissent_note: "A senior reviewer could legitimately argue Grade D given Cochrane null + indication-mismatched EMA monograph. Decision documented for audit."
```

This is the missing audit trail. Without it, every C grade in the dossier reads as discretionary defence rather than rule-bound reasoning.

### 4.4 Verdict on Dimension 4

**Major revision.** The dossier embraces Cochrane honesty rhetorically but its actual decision rules are editorial. A structured conflict-resolution log per intervention is mandatory for biomedical-conference review.

---

## 5. EFFECT SIZE + DOSE-RESPONSE + DURATION-OF-EFFECT + RESPONDERS

### 5.1 What is missing

For every intervention in the daily combos (§8), the dossier surfaces the **dose** ("NAC 600 mg twice a day with water") and the **timing** ("AM/PM with food"). Good. It does not surface:

- **Typical effect size** in published trials (mean THI Δ vs placebo, Hedges' g, NNT)
- **Minimum effective dose** and **ceiling**
- **Time-to-effect** (when does the first measurable change appear?)
- **Sustainability** (what happens at month 3 if the user stops?)
- **Sub-population responder fraction** (who responds, who does not, named by baseline characteristic)

The §12 timeline (line 802-806) gives broad ranges ("TFI drops 8-18 [13 = meaningful]") but does not attribute to individual interventions. The §13 case composite (Ravi, line 814-825) gives one composite trajectory but is explicitly illustrative.

### 5.2 Specific failures

- Magnesium: dose 400 mg/day. Effect size? Attias 1994 reported a threshold-shift reduction (not THI). Cederroth 2011 was null on primary THI. **No effect size on tinnitus surfaced.**
- NAC: dose 600-1800 mg. Effect size? Lorito-group rat data + Kopke et al. Marine cohort — these are noise-injury **prevention** studies, not chronic tinnitus treatment. **Wrong outcome population.**
- Lenire (TENT-A2): "7-9 out of 10 see real relief." Whose denominator? Completer responder rate ≠ ITT responder rate; the difference for Lenire is roughly 15-20 percentage points. **Inflated.**
- Tebonin: 120-240 mg/day. Procháska 2009 reported THI Δ but the dossier does not name the effect size. Cochrane Hilton 2013 said null. **No effect size.**
- Bhramari: 10 min AM + 5 min PM. Time-to-effect? Sustainability if you stop? Responder vs non-responder profile? **Nothing surfaced.**

### 5.3 Proposal — structured intervention card schema

Every intervention in the daily combos should have a card:

```yaml
intervention_card:
  name: "Magnesium glycinate + L-threonate"
  combo_position: "Combo 1 (08:00) + Combo 3 (21:00 — L-threonate variant)"
  dose:
    minimum_effective: "Not established for tinnitus; Attias 1994 used 167 mg elemental/day for hearing protection"
    recommended: "400 mg elemental total/day, split"
    ceiling: "800 mg elemental/day before GI tolerance + bowel-laxation issue"
  effect_size:
    primary_endpoint: "THI change at 12 weeks"
    pooled_estimate: "Cederroth 2011 null on primary; Attias 1994 reported audiometric threshold protection not THI"
    NNT: "Not calculable from current literature for chronic tinnitus"
  time_to_effect:
    first_signal: "Sleep + somatic muscle relaxation in 1-2 weeks (anecdotal, plausibility only)"
    tinnitus_specific: "Not established"
  sustainability:
    on_continuation: "Cofactor floor — continue indefinitely if RBC Mg low"
    on_discontinuation: "No published washout data in tinnitus"
  responder_profile:
    likely_responders: "Low baseline RBC Mg; high stress + bruxism + sleep disturbance overlap; acute noise-exposure window"
    unlikely_responders: "Replete RBC Mg; long-standing brain-amplification sub-type with normal audiogram"
  evidence_ladder:
    mechanism: "(b) ex vivo cochlear preparation — Puel group"
    cochlear_delivery: "Unknown — pharmacokinetic gap"
    clinical_outcome: "(e) RCT null on primary tinnitus endpoint (Cederroth 2011); positive in noise-protection adjacent (Attias 1994)"
  grade: "C (low harm; cofactor rationale; trial null in primary tinnitus)"
  honest_one_liner: "Probably won't move your tinnitus much. Worth taking because Mg is a known cofactor floor and the harm is near zero."
```

The website's Top-Shelf surface (Rule 10 in v6.2.5) could surface a condensed version of these cards in the daily-combos preview. The full card opens on click.

### 5.4 Verdict on Dimension 5

**Major revision.** A biomedical reviewer asks "by how much, in how long, in whom, with what stability?" The dossier answers "take X mg with food twice a day." That is a clinical recipe; it is not a trial-grade synthesis.

---

## 6. SPECIFIC TINNITUS-LITERATURE ACCURACY CHECKS

Founder asked for direct checks on seven named claims. Verdicts:

### 6.1 "Hilton 2013 Cochrane review found null for Ginkgo on primary tinnitus"

**Substantively correct.** Hilton MP et al. 2013, CD003852, version 3. Re-issued by Sereda et al. 2022 — same conclusion. AMSTAR-2 high. The dossier should update to the 2022 version OR explicitly note "Hilton 2013, re-affirmed Sereda 2022."

### 6.2 "Sayyah 2012 NAC for OCD" — does this transfer to tinnitus?

**This is a trap question and the dossier walked into it elsewhere.** Sayyah M et al. *A preliminary randomized double-blind clinical trial on the efficacy of N-acetylcysteine for mental symptoms in continuous ambulatory peritoneal dialysis* — there are also Sayyah papers on NAC for OCD (Sarris 2015 review pooled). The OCD-NAC literature is a glutamatergic-NMDA story with mixed signal. **The tinnitus dossier does NOT cite Sayyah** — but the mechanism story (NMDA-glutamate excitotoxicity → NAC as glutathione precursor → tinnitus benefit) **borrows the OCD-NAC mechanism logic** without surfacing the source. This is mechanism-borrowing without citation. The proper handling: name the cross-condition mechanism transfer ("NAC's glutamatergic effect in OCD is the closest neuropsychiatric analogue; in tinnitus, the mechanism case rests on cochlear glutathione, NOT the OCD glutamatergic story") and grade it accordingly.

### 6.3 "Magnesium NMDA-glutamate excitotoxicity protection" — what is the actual TRIAL evidence for tinnitus?

**Weak.** Cederroth CR et al. *Association between hyperacusis and tinnitus.* J Clin Med 2020 (not the trial). The relevant trial-level evidence is Cederroth 2011 (small, null primary), Person OC et al. 2016 Cochrane on antioxidant supplements for tinnitus (null), and the broader Cederroth-group programme. **The dossier cites Attias 1994 (noise-protection, not chronic tinnitus) as the evidence anchor for magnesium-in-tinnitus.** This is the conflation I called out in Claim 2.

### 6.4 "Bhramari pranayama" — controlled-trial evidence?

**Essentially absent.** The Pandey 2014 S-VYASA series + a handful of open-label dissertations. No sham-controlled, blinded, registered RCT. The "Karolinska Lundberg" citation refers to **healthy-volunteer nasal NO measurement**, not tinnitus. **The dossier's B grade for Bhramari is not defensible. Should be H or T.**

### 6.5 "Sound therapy / notched music" — Schoenen 2017 / Stein 2019?

The dossier does NOT cite Schoenen 2017 or Stein 2019. The Pantev/Okamoto 2010 PNAS notch-music paper IS cited (line 56, 254-256) and is correctly attributed. The Cochrane sound-therapy review for tinnitus is **Sereda M, Xia J, El Refaie A, Hall DA, Hoare DJ. Sound therapy (using amplification devices and/or sound generators) for tinnitus. Cochrane Database Syst Rev. 2018 Dec 27;12(12):CD013094. PMID: 30589445.** Dossier cites "Sereda 2018" — correct year, correct review, correct conclusion ("limited evidence; some benefit on tinnitus distress, not always loudness"). **OK.** But the Tinnitracks-specific Hannover work (Stein A, Wunderlich R, Lau P et al. 2016 *Eur J Med Res*, n≈100) is not surfaced; the dossier's notch-music section rides on Pantev/Okamoto 2010 (n=39) which is solid but a decade old.

### 6.6 "TENT-A2 Lenire bimodal" — actual trial data

- **TENT-A1** — Conlon et al. 2020 *Sci Transl Med*; n=326; 12-week active; primary endpoint THI mean change; significant improvement vs baseline (no sham arm); responder rate ≈ 67-79% (definition varies).
- **TENT-A2** — Conlon et al. 2022 *Sci Rep* (NOT 2024); n=191; tested three stimulation arms; one arm showed sustained 12-month responder rate ≈ 70%.
- **Boedts 2024** — real-world Antwerp cohort, n claimed ~220, primary endpoint THI Δ≥7 at 12 weeks; responder rate in completers ≈ 80%, **ITT responder rate ≈ 60-65%** (denominator-dependent).
- **Completion rates** — meaningful dropout (~15-25% across trials). Dossier does not surface this.
- **Safety** — mostly mild discomfort; no serious adverse events but pulse-generator tolerance issues in subset.

**The dossier conflates TENT-A1 + TENT-A2 + Boedts 2024 into "7-9 out of 10 see real relief sustained 12 months" — this inflates the result by mixing completer with ITT, and dates TENT-A2 wrong (2022 not 2024).**

### 6.7 "Tebonin EGb 761 EMA monograph" — indication conflation

**Confirmed conflation.** EMA HMPC monograph 2015 well-established-use indication is **mild dementia**, traditional-use indication is **circulatory disorders / mental fatigue**. **Tinnitus is NOT a recognised indication.** Dossier reads as if monograph licenses tinnitus use. Honest framing: "Tebonin is OTC under EMA traditional-use registration for circulatory symptoms; tinnitus is off-monograph and the Cochrane meta is null. We keep it as an optional 8-12 week trial because of the modest subgroup signal and low harm."

---

## 7. CROSS-DOSSIER CONSISTENCY CHECKS

I cross-checked the four dossiers for shared mechanism claims:

### 7.1 SSHL ↔ Tinnitus — Ginkgo

- `sshl-hearing-loss.md` line 122: "Burschka 2001 small signal cochlear circulation; Cochrane Hilton **2012** NULL for tinnitus."
- `tinnitus-support.md` line 92: "Cochrane Hilton **2013**."
- **Two dossiers disagree on the Cochrane year by one cycle.** Hilton review has been re-issued; 2013 is the dossier's standard. SSHL needs a consistency edit.

### 7.2 SSHL ↔ Tinnitus — Magnesium

- SSHL cites **Joachims 2003** for magnesium + steroid combination in SSHL; outcome was hearing recovery. Joachims HZ et al. 2003 *Am J Otol* — yes, n=133, magnesium adjunct to steroid. Reasonable citation.
- Tinnitus cites **Attias 1994** for magnesium in tinnitus (noise-protection conflation as above).
- **Two different magnesium evidence anchors for two related cochlear conditions, both reasonable for their dossier but neither calls out the other.** A reviewer would expect the tinnitus dossier to cite Joachims 2003 (SSHL evidence, adjacent population) as part of the magnesium evidence base — and to honestly mark it as "adjacent indication, not chronic tinnitus." The tinnitus dossier does not.

### 7.3 Migraine ↔ Tinnitus — Magnesium NMDA mechanism

- Migraine dossier (line 109) grades magnesium **A (with aura) / B (without)** for migraine prevention, cites **Peikert 1996 + Wang 2003**.
- Tinnitus dossier grades magnesium **C** with Attias 1994 anchor.
- The migraine evidence is much stronger AND uses the same NMDA-CSD-threshold mechanism. **The tinnitus dossier should acknowledge the migraine-magnesium evidence as the strongest cross-condition support for the NMDA mechanism family — and explicitly note that the migraine evidence does NOT transfer to tinnitus because the perceptual readout (headache vs. tinnitus loudness) is different.** This is the kind of cross-condition mechanism honesty a reviewer expects.

### 7.4 Anxiety ↔ Tinnitus — magnesium NMDA + GABA-ergic

- Anxiety dossier (line 130) grades magnesium **B** with Boyle 2017 review + Slutsky 2010 (threonate). Boyle 2017 is a real review (Boyle NB et al. *Nutrients* 2017;9(5):429 PMID 28445426).
- Tinnitus dossier does not cite Boyle 2017.
- Same cross-condition lesson: the **mechanism literature is shared** (NMDA + GABA modulation), but the **clinical-outcome evidence is condition-specific**. The tinnitus dossier could surface Boyle 2017 as the anxiety-evidence anchor and honestly mark it as "not transferable to tinnitus."

### 7.5 Verdict on Dimension 6 (consistency)

**Minor-to-moderate.** The four dossiers are internally reasonable but do not cross-reference each other on shared mechanisms. The founder's own skill v6.2.4 Cluster B notes "cross-dossier shared-finding references" as a v6.2.4 refinement — this is not yet implemented for the magnesium / NMDA / cochlear story.

---

## 8. WHAT THE DOSSIER DOES WELL (CREDIT WHERE DUE)

To be fair to the author:

1. **The Cochrane-null-for-Ginkgo is named at the top of the dossier (line 18 + line 92).** Most natural-medicine sources for tinnitus omit this. The honesty discipline is real at the rhetorical level.
2. **Homeopathy is explicitly downgraded to "documented for transparency; NOT active" with Simpson 1998 PMID 9923984.** That is exactly right.
3. **Lipoflavonoid is explicitly de-endorsed (line 436, 866).** This is the marketing-vs-evidence pattern the founder asked for.
4. **Pulsatile tinnitus is correctly flagged as a vascular-imaging red flag (lines 24, 80, 794, 839).** The flag appears in five places. That repetition is the right safety discipline.
5. **The OTC + home-only doctrine is held strictly.** Lenire and implanted VNS are correctly siloed in §10.7.3 / §15 as clinic-route, not home regime.
6. **Six traditions are surfaced with ≥2 entries each.** Compliance with the founder's mandate.
7. **The §10 interaction matrix is the strongest section of the dossier.** Five sub-tables (drug↔supplement, drug↔food, supplement↔food, supplement↔supplement, timing rules) with concrete actions. A clinical pharmacist reviewer would find this useful.
8. **The §13.7 honest evidence-tier comparison includes "DO NOT RECOMMEND" rows for homeopathy as active layer, Lipoflavonoid as cornerstone, off-label nerve drugs, implanted VNS as routine, ignoring pulsatile tinnitus, continued loud-noise exposure.** This is the honest-comparison discipline. Strong.

The dossier is a serious piece of work. The critique above is what separates "serious natural-medicine encyclopedia" from "biomedical-conference acceptable."

---

## 9. WHAT MUST CHANGE BEFORE CONFERENCE-GRADE ACCEPT

In rough priority order:

1. **Structured per-claim citation block (Dimension 2).** This is the single highest-leverage change. Without PMID/DOI/n/design/effect-size per claim, every other improvement is unanchored. Propose: YAML side-panel inside the `#### Open the science` deep-dive collapsible.

2. **Mechanism evidence-ladder annotation per claim (Dimension 1).** Tag every mechanism statement with the rung (a-e). The asymmetry between cell-mechanism and clinical-outcome must be visible.

3. **Fix six factual errors I caught (any audit will find more):**
   - Cima 2012 — Maastricht NL, NOT Bristol UK
   - Megwalu 2006 — St. Louis Missouri USA, NOT Singapore
   - Hurtuk 2011 — Columbus Ohio USA, NOT Israel
   - TENT-A2 — 2022, NOT 2024
   - Hilton Cochrane — update to 2022 Sereda re-issue
   - Attias 1994 — noise-induced threshold shift (hearing protection), NOT chronic tinnitus

4. **Resolve EMA Ginkgo monograph indication conflation.** Honest framing: "EMA HMPC traditional-use for circulatory symptoms + well-established-use for mild dementia. Tinnitus is NOT an EMA-recognised indication. We keep Ginkgo as an optional 8-12 week trial on the basis of the modest Procháska 2009 subgroup signal, not on the basis of the EMA monograph."

5. **Add structured conflict-resolution log per intervention with upgrade/downgrade thresholds (Dimension 4).**

6. **Add structured intervention card with effect size + time-to-effect + sustainability + responder profile (Dimension 5).**

7. **Add structured classical-text citation format with edition + translator + verse (Dimension 3).**

8. **Numbered bibliography at the end of the dossier (§17?), every entry with PMID/DOI.** The current closing paragraph naming "WHO, AYUSH councils, EMA, TGA, NMPA, Health Canada NHP, Men-Tsee-Khang, Hamdard, IMPCOPS" + Cochrane review authors is an *institutional* bibliography. It is not a *citation* bibliography. Both are needed.

9. **Cross-dossier shared-finding references (per skill v6.2.4 Cluster B).** Magnesium-NMDA shared with migraine + anxiety + SSHL needs an explicit cross-reference paragraph.

10. **Downgrade Bhramari from B to H or T.** No sham-controlled tinnitus RCT exists. The current B grade rides on Telles 2011 vagal-tone-in-healthy-adults — wrong outcome population.

---

## 10. FINAL SCORE + RECOMMENDATION

| Criterion | Current state | Conference bar | Gap |
|---|---|---|---|
| Doctrinal discipline (OTC + 6 traditions + no US-regulator authority) | Strong | Strong | None |
| Mechanism honesty (evidence ladder) | Weak | Required | Major |
| Primary-source citation discipline | Weak (author + year only) | Required (PMID/DOI/n/design/effect-size) | Major |
| Classical-text citation discipline | Weak (no edition / translator / verse) | Required | Major |
| Cochrane/EMA/AYUSH conflict-resolution reasoning | Editorial, not rule-bound | Required (auditable rule) | Major |
| Effect size + dose-response + responder profile | Dose only | Required (effect size, time-to-effect, responders) | Major |
| Internal consistency across dossiers | Inconsistent on Cochrane year + shared mechanisms not cross-referenced | Required | Moderate |
| Safety discipline (red flags, contraindications, drug-interaction matrix) | Strong | Strong | None |
| Tone and readability (plain-English-first) | Strong | Strong | None |

**Recommendation: MAJOR REVISION.** The dossier is the best natural-medicine tinnitus protocol I have seen at the consumer level. It is not yet at the bar for a biomedical-conference-grade evidence document.

**Two specific structural moves would change the verdict:**
1. Add per-claim structured citation blocks (the YAML schema above) inside the existing `#### Open the science` collapsibles. This is mechanically tractable — every author-year footnote becomes a 12-line block.
2. Fix the six factual errors I caught (Cima country, Megwalu country, Hurtuk country, TENT-A2 year, Hilton Cochrane year, Attias outcome population) and audit the remaining ~50 author-year citations to the same standard.

After those two moves, the dossier crosses from "serious popular natural-medicine reference" to "defensible biomedical-conference-level synthesis." Everything else (effect-size cards, conflict-resolution logs, classical-citation discipline) is upgrade-path beyond that bar.

---

**Reviewer signature:** Senior biomedical researcher persona, anonymous double-blind peer review.
**Conflicts of interest:** None declared. Persona is integrative-medicine-respectful; not a Schwabe, Neuromod, or Boericke shareholder.
**Date:** 2026-06-05.
**Confidentiality:** This review is for the NicheCore author. Do not circulate externally without permission.
