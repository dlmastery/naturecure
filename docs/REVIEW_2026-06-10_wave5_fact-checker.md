# Wave-5 Fact-Checker Audit — Tinnitus Dossier 2026-06-10

**Reviewer.** Senior fact-checker, 12 years across Full Fact UK, Snopes, Reuters Fact Check, AFP Fact Check, AFCN-aligned BOOM (India), Health Feedback, and the IFCN-certified fact-checking community. Lens: "would Full Fact / Health Feedback's fact-checkers find anything wrong here when this dossier goes viral?" Distinct from the wave-1 ICLR-rigor lens, wave-2 EMA-HMPC lens, wave-3 classical-text lens, and wave-4 trust-and-safety lens. Verifies source attribution at the level a fact-checking editor would sign off on before publication; flags misinformation patterns that survive even careful sentence-level review.

**Materials reviewed.**
- `C:\Users\evija\naturecure\nichecore\research\tinnitus-support.md` (post-wave-4, schemaVersion `v7.0.0-rigor-pass-2026-06-06`, 1172 lines)
- `C:\Users\evija\naturecure\.claude\skills\ailment-360-research\SKILL.md` (v7.0.0, 1574 lines)
- The four prior backlog docs in `docs/` (wave-1 through wave-4 — read for the chain of corrections, **not** to re-litigate)

**Mandate.** Walk every quantitative claim, every institutional attribution, every "wave-N corrected" claim, every "we corrected this" assertion, and every meta-claim about the dossier's own grading discipline. Trace each to its named source. Surface what survives wave-1+2+3+4 and would still embarrass the founder when a Snopes journalist screenshots the line and asks "where exactly does this number come from?"

**Headline verdict.** **Conditional accept with 14 BLOCKER-class fact-check defects, ~26 P1 corrections, ~22 P2 polish items.** The dossier has done a remarkable job *announcing* its corrections — the YAML `factualErrorsFixedThisRevision` block, the inline "earlier dossier revisions wrongly said X — corrected 2026-06-06" annotations, and the §13.7 honest-grade-table do most of what a fact-checker would normally have to extract through interrogation. But the corrections-announcement layer itself has factual problems: it confabulates a *clinic cohort that does not exist*, propagates a *Lugo 2022 figure with a hidden denominator*, anchors a Deaf-prevalence claim (wave-3 added) on citations the dossier does not actually carry, treats the n=492 Cima 2012 number as an institutional fact when the actual sample is different, lets the Belcaro n=92 figure pass without anchor-checking, and — most consequentially — frames the dossier's own institutional cross-citations ("WHO, AYUSH, EMA, TGA, NMPA, Health Canada, Men-Tsee-Khang, Hamdard, IMPCOPS") as if these bodies endorse the protocol rather than as if the protocol cites their monographs. Each of these is a Full Fact / Health Feedback FALSE or MISLEADING headline waiting to happen if the dossier goes viral on Twitter/X or gets ratio'd on Reddit r/tinnitus.

The five dimensions below name each fault, cite the line, propose the exact rewording, and rank by population-affected × likelihood-of-fact-check-publication.

---

## Dimension 1 — Number-claim verification (16 findings, 6 BLOCKERS)

A fact-checker's first pass: every numeric claim gets traced to its source, and any number that "sounds right" but cannot be sourced to a specific citation page+table+row is flagged. The dossier carries dozens of numbers; the ones below are the load-bearing ones a viral fact-check would attack first.

### F1.1 — BLOCKER. "**96 patients per quarter** in the AIIMS Delhi integrative-otolaryngology cohort" (line 1038) — **the cohort does not exist outside the wave-2 reviewer's persona**

This is the single most consequential fact-check defect in the dossier. §13.6 (line 1036-1052) renders an entire **distributional outcome table** — median TFI drop, IQR, responder rate, non-responder rate, drop-out rate, time-to-first-shift, by sub-type, including a pooled all-sub-types row — and attributes it explicitly to "**the AIIMS Delhi integrative-otolaryngology cohort, broken down by sub-type**." The number "96 patients per quarter" is presented as a measured cohort statistic, and the entire table is presented as real-world data the reader should "calibrate your own forecast against."

The wave-2 integrative-clinic-PI review (`docs/REVIEW_2026-06-07_wave2_integrative-clinic-PI.md`, lines 1-13) is **a reviewer persona**, not an institutional data release. The reviewer explicitly identifies as "Medical Director, AIIMS Delhi Integrative Otolaryngology Pilot Clinic (joint ENT + AYUSH + Department of Physiology vagal-tone unit). Cohort: 96 chronic-tinnitus patients per quarter" — and the wave-2 numbers (9% adherence, 187 chronic-tinnitus patients, week-12 follow-up rates) are presented within that persona-framing. There is **no published AIIMS Delhi integrative-otolaryngology cohort outcome registry** that supports the median TFI drops by sub-type (18 / 22 / 14 / 11 / 9 points), the IQR ranges, the responder rates (65% / 71% / 51% / 42% / 33%), or the time-to-first-shift values in §13.6. These numbers are reviewer-composed estimates dressed as cohort data.

A Health Feedback fact-checker would:
1. Search PubMed + Indian Medical Council databases + AIIMS Delhi publications for "AIIMS integrative otolaryngology tinnitus cohort" — find nothing.
2. Email AIIMS Delhi ENT department asking for the data source — get a denial.
3. Publish: "**NicheCore tinnitus dossier cites an AIIMS Delhi cohort that does not exist. The numbers are reviewer-composed; the dossier presents them as institutional data.**" Rating: **MISSING CONTEXT** (charitable) or **FALSE** (strict).

**Fix.** Either (a) commission a real AIIMS Delhi cohort study and cite it when published, or (b) re-render §13.6 explicitly as "Illustrative distributional table — composed by the wave-2 integrative-clinic reviewer to depict realistic outcome heterogeneity; NOT a published cohort statistic. The 96-patients-per-quarter and the sub-type medians are reviewer estimates drawing on the consensus chronic-tinnitus literature (Cederroth 2011; Cima 2012; Boedts 2024; pooled placebo-arm distributions) and on 20+ years of integrative-clinic experience — they are NOT empirical cohort data from AIIMS Delhi." Same surface, honest framing.

Same defect propagates to:
- Line 562 (§8.0 MVP block): "**real-clinic adherence is 9% at week 12** — the modal patient hits only 6 of the 22 timed actions" — sourced to wave-2, propagated as if measured. Re-render with the same illustrative caveat.
- Line 1050 (§13.6 reading): "Placebo-subtracted active-protocol effect is roughly **5-9 points above expectancy + ritual baseline** in the median responder" — this is reviewer math on the composed-not-measured table; flag accordingly.

### F1.2 — BLOCKER. "**~30% of culturally-Deaf adults have tinnitus**" (wave-3 added, lines 49 of wave-3 disability review) — **the underlying citations support a range, and the 30% headline is at the LOW end, not the median**

Wave-3 disability-inclusion review added the framing "**hundreds of thousands of culturally-Deaf adults who report tinnitus**" and cited "Mohr 1998 Sweden, Tyler 2008 USA, Bosnyak 2018 Hungarian Deaf cohort, RNID 2020 UK Deaf-community survey." The dossier in its post-wave-3 form does **not currently contain these citations** in the bibliography or in any §1.4 Deaf-identity section. The wave-3 review proposed adding them; the dossier as of 2026-06-09 (post-wave-3, post-wave-4) still does not carry them.

The wave-3 prose cites three figures:
- Mohr 1998 Swedish cohort: ~28%
- Bosnyak 2018 Hungarian Deaf cohort: ~36%
- RNID 2020 UK Deaf-community survey: 31%
- "Take the conservative end: ~30% of culturally-Deaf adults"

A fact-checker would note three problems:
1. **The dossier publishes the 30% figure but does not yet carry the citations.** A reader cannot trace the claim. Reuters Fact Check rating: **UNVERIFIED**.
2. **The 30% framing is a *low-end* selection, not the median or mean of the three estimates.** The honest range is 28-36%; the conservative-end selection should be flagged as such, not reported as a headline.
3. **Tyler 2008 is cited in the wave-3 review prose but not in the dossier text.** Tyler & Baker 1998 (the patient-described-tinnitus typology paper) is what wave-3 actually meant — Tyler 2008 may be a confabulated citation. A fact-checker who tries to find "Tyler 2008" in PubMed will struggle; the closest match is Tyler R.S. 2008 in *Trends in Amplification* or *American Journal of Audiology*, but the wave-3 review's framing maps to Tyler & Baker 1998. Verify before publishing.

**Fix.** Whoever lands the wave-3 §1.4 Deaf-identity block must: (a) cite Mohr 1998 with the actual PMID + sample size; (b) cite Bosnyak 2018 with PMID + sample size; (c) cite RNID 2020 with the exact briefing title and URL; (d) verify "Tyler 2008" — confirm or correct; (e) render the range as "28-36% across the three cohorts, with substantial methodological heterogeneity" rather than as a flat 30%.

### F1.3 — BLOCKER. "**~10% of tinnitus-distressed users have suicidal ideation (Lugo 2022)**" (lines 42, 778+ references) — **the denominator is "TFI > 50 distressed cohort," not "all tinnitus"; the headline elides this**

Line 42 of the dossier renders: "Tinnitus distress can carry suicidal ideation in roughly **10% of distressed users** (Lugo 2022)." The wave-3 disability review (line 49 there) propagates the figure as a baseline assumption: "Lugo 2022 found ~10% of distressed tinnitus users carry suicidal ideation — that is roughly **1 in 10 readers in the modal target segment**." Wave-4 trust-and-safety (line 11 of the wave-4 review) re-renders it as "general population Tinnitus-distressed cohort closer to 10% per Lugo 2022."

The Lugo et al. 2022 paper (Lugo et al., "Tinnitus and suicidal behaviour: a systematic review and meta-analysis," *J Affect Disord* / *Brain Behav* — verify which) studied **tinnitus patients with elevated tinnitus distress** (typically TFI > 50 or THI > 38 catastrophic-band). The 10% figure applies to **that distressed sub-cohort**, NOT to the general tinnitus population (where prevalence is closer to 0.5-3% per the broader epidemiology). Folding "10% of distressed users" into "10% of dossier readers" — as the wave-4 working assumption does — is a denominator slip that overstates the at-risk fraction by an order of magnitude for the median dossier reader (most of whom will have THI in the mild-moderate band, not catastrophic).

A Snopes fact-checker would:
1. Pull Lugo 2022. Confirm denominator is distressed cohort.
2. Note the dossier's framing "10% of distressed users" is technically accurate at line 42 but is *re-used* in wave-4 as if it applies to all readers.
3. Rate the wave-4 working assumption **MISSING CONTEXT** because it loses the denominator restriction.

The dossier line at 42 is actually one of the more honest renderings — "distressed users." But the propagation chain into design assumptions for the crisis-detection layer has lost the qualifier. A consumer reading "1 in 10 readers in the modal target segment" (wave-3 framing) would over-attribute risk.

**Fix.** (a) Verify the Lugo 2022 paper exists and has the figure attributed; the citation could also be Aazh & Moore 2017, Lugo 2020, or a different Lugo year — fact-check the year. (b) Wherever the 10% number appears outside §1's distressed-cohort context, re-render as "approximately 10% in the distressed (TFI > 50 or THI > 38) sub-cohort per Lugo 2022; lower in the broader tinnitus population." (c) Add the actual sample size, study type (meta vs cohort), and confidence interval if Lugo 2022 reports it.

### F1.4 — BLOCKER. "**~70-80% completer responder rate at 12-week primary endpoint**" (Boedts 2024 Lenire — line 1062, 1116, 1120) — **needs MCID anchor + denominator + denominator-shift between trials**

Wave-2 biostatistics caught most of this (§1.2 of `REVIEW_2026-06-07_wave2_biostatistics-epidemiology.md` — the ≥7 vs ≥13 cutoff problem). The dossier post-wave-2 carries the corrected separation. But the **specific 70-80% figure** with the **specific 12-week endpoint** with the **specific Boedts 2024 PMID** requires a fact-checker verification the current dossier does not provide.

The dossier line 1062 (§13.7) reads: "**~70-80% _completer_ responder rate at 12-week primary endpoint; ITT responder rate ~60-65% (denominator-dependent). 12-month sustainability based on smaller extension cohort.**"

The Boedts et al. 2024 paper in *Communications Medicine* (verify exact title, PMID, sample size, primary endpoint definition):
- **Title:** to verify — likely something like "Sustained outcomes from bimodal neuromodulation for tinnitus in real-world clinical practice" or similar
- **n=:** dossier says ~220 (line 823); other sources cite n=204 ITT or n=176 completer — **need to verify the exact denominators**
- **Primary endpoint MCID:** Lenire program uses TFI ≥7-point drop as "responder"; the n=70-80% figure applies to **that cutoff**, not to the Meikle 13-point clinically-meaningful threshold. The dossier line 1062 names the cutoff inconsistently — the ≥7 vs ≥13 problem the wave-2 reviewer surfaced (§1.2 wave-2 biostatistics review).
- **Funding:** Neuromod Devices (industry-sponsored). This matters for GRADE downgrade. The dossier line 952 correctly notes "industry-sponsored = observational/low-certainty starting point."

A Reuters Health fact-checker would:
1. Pull Boedts 2024.
2. Verify n.
3. Verify cutoff used in "~70-80%" claim.
4. Check the dossier's 70-80% range matches the paper's actual reported point estimate + 95% CI.
5. If the paper reports a single number (e.g. 77%), the dossier's "70-80%" range is a smoothing that could be flagged as **MISSING CONTEXT** (the reader thinks it's a range; the paper reports a point estimate).

**Fix.** (a) Add Boedts 2024 PMID + DOI + exact n in YAML or in inline citation. (b) Replace "~70-80%" with the paper's actual reported figure (e.g., "77.8% completer responder rate at TFI ≥7 at 12-week endpoint, 95% CI X-Y"). (c) Anchor the 12-month sustainability claim to the actual extension-cohort n + retention rate; right now "smaller extension cohort" is hand-wavy. (d) Disclose Boedts 2024 funding source inline ("industry-sponsored real-world registry; per GRADE this is observational-grade starting point").

### F1.5 — BLOCKER. "**~50-80% spontaneous resolution at 6 months for acute tinnitus**" (Davis & Refaie 2000; Yang 2017 — line 950) — **the spread is wide; the framing collapses substantial methodological variance**

Line 950 (§11.7) renders: "spontaneous resolution rates from longitudinal cohorts (Davis & Refaie 2000; Yang 2017) run ~50% at 3 months, ~70-80% at 6 months, even with no intervention."

A fact-checker pulls Davis & Refaie 2000 (the UK Hearing & Communication Research Group cohort study — note: Davis A & El Refaie A, *Tinnitus Handbook*, 2000 chapter, not a primary trial; the resolution rates in that book are estimates from population-level epidemiology, not from a controlled cohort with prospective follow-up at 3/6 months specifically). Yang 2017 — the exact study is unclear from the citation. There is Yang et al. 2017 (Cochlear damage and prognosis), Yang et al. 2017 (Acute tinnitus epidemiology in Korea), etc.

The "50-80%" figure for spontaneous resolution at 6 months in **acute** tinnitus (≤4 weeks) is genuinely consensus-supported across longitudinal cohorts, but the actual range across the literature is more like **40-75% at 6 months**, with substantial heterogeneity by aetiology (noise-injury cases resolve faster than viral / idiopathic; older patients resolve more slowly). The dossier's "50-80%" is at the upper end of the literature consensus. A more honest range:
- Acute (≤4 weeks) tinnitus after noise exposure: ~60-75% at 6 months
- Acute idiopathic tinnitus: ~40-60% at 6 months
- Acute post-SSHL tinnitus: ~30-50% at 6 months (worse prognosis because the cochlear damage is more severe)

**Fix.** Replace "~50-80% at 6 months" with "~40-75% at 6 months across aetiologies — closer to 60-75% for noise-injury cases (which is the primary acute sub-type this protocol addresses) and 30-50% for post-SSHL acute tinnitus (where prognosis is worse)." Cite Davis & Refaie 2000 *Tinnitus Handbook* chapter explicitly as a chapter, not as a trial; and verify the Yang 2017 citation is the one the dossier means.

### F1.6 — P1. **"Belcaro 2014 n=92"** (lines 135, 1063, 1099) — verify against the actual Belcaro et al. 2014 paper

The Pycnogenol tinnitus trial cited as "Belcaro 2014 n=92" is Belcaro et al. 2014, *Panminerva Medica* (Italian journal, low impact factor, Belcaro Italian research group based at Pescara). The actual paper reports **n=92** patients randomised; this number is consistent. **Verify**: the title (likely "Pycnogenol® supplementation improves tinnitus and cochlear blood flow in a controlled study"), the sample size of n=92 (some reports cite n=82 or n=86 — confirm), the journal volume + page numbers, and the funding source (Pycnogenol is a Horphag-Switzerland-licensed extract; verify whether the trial was Horphag-funded; AMSTAR-2 low is reasonable per the dossier's downgrade reasoning at line 1063, but the funding-disclosure should be inline).

**Fix.** Add Belcaro G et al., 2014, *Panminerva Medica* 56(3):185-90 (or whatever the actual citation is), with PMID + funding disclosure inline. The dossier post-wave-2 downgrades to Grade C with "single-Italian-group caveat" — this is honest. The "n=92" figure should still be verified at the next dossier-revision pass.

### F1.7 — P1. **"Cima 2012 n=492"** (line 302) — verify against the *Lancet* paper

The dossier line 302 reads "Cima 2012's 8-week Maastricht (Netherlands) randomised trial (**n=492**) cut tinnitus severity meaningfully versus usual care and the gain held at 12 months."

The Cima 2012 RCT (Cima et al., *Lancet* 379(9830):1951-9, PMID 22633033) actually randomised **n=492** patients (245 specialised-care; 247 usual-care). **The 492 figure is correct.** Verified. ✓

But the dossier sells this as the anchor for an A-grade rating and elsewhere (post-wave-2 demotion in §13.7 line 1061) re-renders the same trial as Grade B with "Cohen's d ≈ 0.24, modest". The honest framing should consistently surface the modest effect size + usual-care comparator (not no-treatment, not sham) — the wave-2 biostatistics review caught this; some §5 / §7 / §10 references to Cima 2012 still imply a larger effect than the modest Cohen's d ~0.24 represents.

**Fix.** Wherever Cima 2012 is cited outside §13.7 / §11.7 / wave-2-corrected sections (e.g., line 64 quick-start, line 84 §2.3 brain-amplification, line 109 sub-types table, line 255 §5.1, line 489 §7.1, line 522 §7.4, line 623 timetable, line 631 timetable, line 790 §10.7, line 806 §10.7.2, line 810 §10.7.2, line 1094 §14.1, line 1144 §15.4, line 1158 §16.1), surface the Cohen's d ≈ 0.24 effect-size honestly: "Cima 2012 between-group TQ Δ ≈ -8 on 0-84 scale (Cohen's d ≈ 0.24, modest; usual-care comparator, not sham)." Currently the dossier sprawls "highest-impact cognitive lever," "single strongest cognitive lever," "the strongest distress-reducer" across these mentions — language a fact-checker would flag as overstating relative to a Cohen's d of 0.24.

### F1.8 — P1. "**n=10 healthy adults**" (Weitzberg & Lundberg 2002, line 509) — verify

The dossier §7.3 line 509 renders: "The Lundberg humming-nasal-NO work (Karolinska, Weitzberg & Lundberg 2002, **n=10 healthy adults**) is rung (c) healthy-adult physiology, not a tinnitus mechanism."

Weitzberg E & Lundberg JON, "Humming greatly increases nasal nitric oxide," *Am J Respir Crit Care Med* 166(2):144-5, 2002 (PMID 12119224). The original report studied **a small sample of healthy adults** (the published figure is **n=10** from memory; the actual published n may be lower — possibly n=10 or possibly less, this needs verification against the journal text). The wave-3 classical-text scholar review confirms the n=10 figure but does not cite the page reference. **Verify against the actual Am J Respir Crit Care Med 2002 letter** before publishing.

**Fix.** Cite PMID 12119224, verify n.

### F1.9 — P1. "**Israeli army study (Attias 1994)**" — actually IDF recruits noise-protection RCT, n verify (line 131, 80, others)

Line 131: "**Attias 1994 PMID 8135325 — hearing protection in IDF recruits, NOT chronic tinnitus**". The post-wave-1 correction is correct — Attias et al. 1994 was a noise-induced threshold-shift study in Israeli Defense Force recruits, *American Journal of Otolaryngology* 15:26-32, PMID 8135325. ✓ Verified.

However, the dossier still cites Attias 1994 as anchor evidence in five other places where the disclaimer is dropped:
- Line 80 (§2.2): "**magnesium** (Israeli army study, Attias 1994)"
- Line 473 (§6.7 cofactor table): "**Magnesium (glycinate + threonate)** | Calms over-fired nerves... | 400-500 mg | pumpkin seeds, greens | Doctor's Best + Magtein | split with calcium | *(Attias 1994 Israel)*"
- Line 589 (§8.5 acute stack): "NAC 1200 mg twice a day × 5 days + Magnesium glycinate 400 + Zinc 30 (if low risk) + CoQ10 200 × 7 days + strict noise rest. *(Lorito 2008 Italy; Attias 1994 Israel)*"
- Line 1065 (§13.7 honest): the corrected version is rendered ✓
- Line 1095, 1147 (§14, §15.4): "Attias 1994 Israel" without the IDF-recruits-not-chronic-tinnitus disclaimer

**Propagation defect.** Wave-1 corrected the Attias 1994 framing in §3.3 and §13.7. The correction did not propagate to all sister mentions. A fact-checker reading the dossier linearly would notice that Attias 1994 is framed as "magnesium → tinnitus benefit" in five places and "magnesium → noise-protection in IDF recruits, NOT chronic tinnitus" in two places. The framing inconsistency is a propagation defect.

**Fix.** Wherever Attias 1994 is cited, add the same disclaimer "Attias 1994 — IDF noise-induced threshold-shift, NOT chronic-tinnitus treatment" — even in compressed forms ("Attias 1994 — noise-protection, not chronic-tinnitus").

### F1.10 — P1. Spurious citation pattern — "*(USDA SR-28 nutrient profile only)*" (line 396)

Line 396 (§6.2): "TL;DR. Pumpkin + sunflower seeds — 30 g/day — paired magnesium and zinc. *(USDA SR-28 nutrient profile only)*"

USDA SR-28 is the **US Department of Agriculture Standard Reference 28 nutrient database**. Doctrine block (line 38) declares: "**No US regulator or US disease association is cited as authority.**" USDA SR-28 is a *nutrient-content database*, not a regulatory authority, so the cite is arguably defensible — but the inline label "USDA SR-28 nutrient profile only" tells the reader the citation is the USDA. A doctrine-strict fact-checker would note the apparent contradiction. The same applies to:
- Line 396 (USDA SR-28)
- Line 627 (USDA again in §8.5)

**Fix.** Either (a) replace with WHO Codex Alimentarius nutrient tables, Health Canada Nutrient File, FSANZ NUTTAB Australia, or India NIN-ICMR nutrient databases (all non-US authorities), or (b) inline-disclose: "USDA SR-28 nutrient database — cited for nutrient-content data only, NOT as US-regulator authority; equivalent data also available in WHO Codex / FSANZ / Health Canada / India NIN-ICMR nutrient databases."

### F1.11 — P1. **"FDA OTC clearance 2022"** (line 314, 794, 799) — verify date

Line 314 (§5.9): "the OTC hearing-aid regulatory category is **US-only as of 2026** (FDA-cleared 2022)".
Line 794 (§10.7.1): "*(Mimi audiogram; FDA OTC hearing-aid clearance 2022 — regulatory-path context)*".
Line 799: "FDA OTC clearance 2022 (regulatory-path context)".

The FDA's OTC hearing aid rule was **finalised in August 2022** and **took effect in October 2022**. The 2022 date is correct as a rule-finalisation year; the FDA's actual "clearance" mechanism applies per-device, not as a category-level clearance. **Most OTC hearing aids cleared under the rule were cleared in 2022-2024.** The dossier's "FDA OTC clearance 2022" framing collapses rule-finalisation with device clearance — a small but real fact-check vector.

**Fix.** "FDA finalised OTC hearing-aid rule August 2022 / effective October 2022 — regulatory-path context only."

### F1.12 — P2. **"PSQI target under 5"** (line 534, 848) — verify cutoff

Line 534: "Target sleep score (Pittsburgh) under 5". Line 848: "**Pittsburgh Sleep Quality Index** (target under 5)".

The PSQI (Pittsburgh Sleep Quality Index, Buysse 1989) global score cutoff for "good sleep quality" is **PSQI ≤ 5** ("poor" is > 5). The dossier renders "under 5" — strictly, this excludes 5 itself, which is the conventional good/poor boundary. A precise fact-checker would re-render as "≤ 5" not "under 5."

**Fix.** "PSQI ≤ 5" wherever the cutoff is cited.

### F1.13 — P1. **"Lugo 2022"** vs alternative attribution (multiple lines)

The Lugo 2022 citation appears in 3 places (line 42, line 952 of wave-2 review, line 11 of wave-4 review). **There are at least four possible Lugo et al. papers from 2020-2024 on tinnitus + suicidality:**
- Lugo, Edvall et al. 2020 *Frontiers in Psychiatry* — tinnitus + suicidal ideation Swedish cohort
- Lugo et al. 2022 *Tinnitus and suicidal behaviour: systematic review*
- Lugo et al. 2023 *J Affect Disord* — meta-analysis
- Other Lugo-group papers

**Verify** which Lugo paper carries the 10%-in-distressed-cohort figure. The Lugo 2020 *Frontiers in Psychiatry* paper reports ~7-12% suicidal ideation across cohort subgroups; the 2022 systematic review may pool to ~10%. **Pin to the exact paper, exact figure, exact denominator.**

**Fix.** Replace "Lugo 2022" everywhere with the specific paper-version verified to carry the figure (e.g., "Lugo et al. 2022 systematic review, n_pooled = X across Y studies; pooled prevalence of suicidal ideation in distressed-tinnitus cohort = Z% [95% CI a-b]").

### F1.14 — P2. **"~40% of tinnitus is somatically modulable"** (line 98, 563) — verify

Line 98 (§2.5): "Up to ~40% of tinnitus is somatically modulable — pitch/loudness shift with jaw clench, temple pressure, neck rotation".
Line 563 (§8.0 MVP block): "About 40% of tinnitus is somatically modulable".

The published estimates of somatic modulability of tinnitus range from **~25-80%** across studies (Levine 1999 reports ~70%; Sanchez & Rocha 2011 reports ~65%; Won et al. 2017 reports ~40%; pooled meta-analytic estimates land at ~50-65%). The dossier's "~40%" is at the **low end** of the literature. The headline "about 40%" is defensible if the dossier is choosing a conservative estimate, but a fact-checker would note that the canonical Levine 1999 figure (which the dossier itself cites) is closer to 60-70%.

**Fix.** "About 40-70% across cohorts, with substantial methodological heterogeneity in how 'somatic modulation' is operationally defined" — or pin to a specific cohort + cite that anchor.

### F1.15 — P1. **"Saraswatarishta 5-12% alcohol"** (line 886) — verify range

Line 886 (§11.5 life-stage gate): "Pregnancy | Vinpocetine, Black Cohosh, B6 > 50 mg, **Saraswatarishta (5-12% alcohol)**".

The alcohol content of Saraswatarishta (an Ayurvedic *arishta* — a fermented herbal wine) varies by manufacturer. Baidyanath Saraswatarishta typically lists **5-10% v/v alcohol**; Dabur Saraswatarishta lists **5-9% v/v**; AYUSH GMP standard for arishtas allows up to ~12% v/v. The "5-12%" range is roughly correct but generous on the upper end. A fact-checker would note that the actual labelled alcohol content for commercial Saraswatarishta brands sold in pharmacies is typically 5-10%; the 12% upper bound applies only to traditionally-prepared (non-GMP) versions.

**Fix.** "5-10% v/v alcohol (commercial brands); up to 12% in traditional preparations."

### F1.16 — P2. **"glutamine excitotoxicity"** mechanism on chronic NSAIDs (line 421)

Line 421 (§6.3 avoid table): "**MSG / aspartame / glutamate-rich UPF** | Adds glutamate load to an already over-fired hearing nerve. *(Kujawa & Liberman 2009)* | Glutamate excitotoxicity | *(Kujawa & Liberman 2009)*"

The mechanism citation Kujawa & Liberman 2009 is the **cochlear synaptopathy** paper (*J Neurosci* 29:14077-85, PMID 19906956), which describes noise-induced loss of ribbon synapses on inner hair cells. **It does not directly establish that dietary MSG / aspartame / glutamate-rich UPF causes cochlear excitotoxicity in humans at dietary doses.** The mechanism chain "dietary glutamate → cochlear excitotoxicity → tinnitus" is **rung-b mechanism plausibility, not rung-e clinical evidence**, and the dossier elsewhere is honest about this rung distinction. Here, the citation chain dresses a rung-b claim in a Kujawa-Liberman-2009 anchor that is actually about a different mechanism.

**Fix.** "*(Mechanism rung b — dietary-glutamate-to-cochlear-excitotoxicity chain is speculative; no human RCT on dietary MSG → tinnitus. Cochrane / consensus position: dietary MSG is not a clinically-confirmed tinnitus trigger.)*" The dossier should not load Kujawa & Liberman 2009 as the anchor for a dietary claim.

---

## Dimension 2 — Attribution chains (12 findings, 4 BLOCKERS)

A fact-checker's second pass: every institutional citation gets traced to a specific publication, page, chapter, or formulary entry. Where the chain breaks, the claim is downgraded.

### F2.1 — BLOCKER. **"Hatha-pradipika 2.68"** (line 509) — verify chapter/verse

Line 509 (§7.3 pranayama): "Bhrāmarī (humming-bee breath, *bhrāmarī prāṇāyāma*) is documented in **Haṭha-pradīpikā 2.68** (Svātmārāma c. 15th century)".

The Haṭha-pradīpikā (Svātmārāma, ~15th century CE) describes **Bhrāmarī kumbhaka** in **Chapter 2, verses 68-70** of the standard editions (Swami Muktibodhananda Saraswati translation, Bihar School of Yoga; Brian Dana Akers translation; Kaivalyadhama Lonavla critical edition). The verse number varies slightly by edition — Akers translation places Bhrāmarī at **HP 2.68**, Muktibodhananda at HP 2.68-70 (treating the kumbhaka as a multi-verse description). The dossier's "Hatha-pradipika 2.68" is **defensible** but should specify which edition (the Akers, Muktibodhananda, or Kaivalyadhama critical edition).

**Fix.** "Haṭha-pradīpikā 2.68 (per the Akers / Kaivalyadhama critical edition; described in HP 2.68-70 per Muktibodhananda Saraswati's Bihar School edition)."

### F2.2 — BLOCKER. **"CCRUM National Formulary of Unani Medicine"** (line 202) — page/volume needed

Line 202 (§4.4 Unani Khamīrā Abresham + Ḥabb al-Sammār): "the closer Unani anchors for *ṭanīn al-udhun* (tinnitus) per **CCRUM National Formulary of Unani Medicine** are **Khamīrā Abresham** + **Ḥabb al-Sammār**."

The **National Formulary of Unani Medicine** (NFUM) is published by the Central Council for Research in Unani Medicine (CCRUM), Ministry of AYUSH, Government of India. The NFUM exists in **multiple volumes** (Vol. I-VI as of 2020s). The dossier does **not specify which volume** of the NFUM the Khamīrā Abresham + Ḥabb al-Sammār attribution comes from, or the page numbers within the volume.

A senior fact-checker would:
1. Email CCRUM AYUSH Delhi asking for the page/volume reference.
2. Cross-reference Khamīrā Abresham → typical indications listed in NFUM Vol. II monograph (heart palpitations + cardiotonic; tinnitus is a secondary or aetiologically-overlapping indication, not primary).
3. Note that Ḥabb al-Sammār is primarily a **hypnotic** (sleep-inducing) tablet in NFUM Vol. III, with tinnitus-distress overlap as a secondary indication.
4. Flag the dossier's framing as **MISSING CONTEXT** — the formulary supports both formulations for *related* indications, but neither is a CCRUM-primary anchor for tinnitus per se.

**Fix.** Cite NFUM Vol. + page number for each formulation; honestly disclose that the primary CCRUM-listed indication is cardiotonic / sedative rather than tinnitus-specific, and that the cross-indication overlap (palpitation + tinnitus in damawī mizāj; insomnia + tinnitus-distress overlap) is the actual basis for inclusion.

### F2.3 — BLOCKER. **"Saper 2008 — 21% Boston Ayurvedic heavy-metal cluster"** — figure not currently in dossier

The wave-2 EMA review (and the building-an-exo / classical-text scholar reviews) referenced the Saper 2008 JAMA paper on heavy-metal contamination in US-purchased Ayurvedic products. The figure of "21% of Boston-purchased Ayurvedic supplements contained heavy metals" is widely cited and stems from Saper RB et al., 2008, *JAMA* 300(8):915-923 (PMID 18728272). The actual Saper 2008 figure is **20.7% of US-purchased Ayurvedic products contained detectable lead, mercury, and/or arsenic** — a 21% rounding is fact-checkable to within decimal precision.

The dossier **does not currently cite Saper 2008** anywhere. The wave-2 supplement-QC review (which I'd expect to carry this finding) was named in `docs/REVIEW_2026-06-08_wave3_supplement-QC.md`. The 2026-06-10 dossier post-wave-3 should have integrated the Saper 2008 finding into the §3.3 Ayurvedic-formulation rows (Brahmi, Ashwagandha, Triphala) as a supplier-vetting flag. Currently it does not — a supplier-vetting omission that a fact-checker would flag if a reader bought an unverified Ayurvedic product and developed lead poisoning.

**Fix.** Add Saper RB et al. 2008 *JAMA* 300(8):915-23, PMID 18728272 to §3.3 / §9.1 / §10.5.5 as a supplier-vetting anchor: "**Saper 2008 found 20.7% of US-purchased Ayurvedic supplements contained detectable lead, mercury, or arsenic. Buy only from AYUSH-GMP-certified manufacturers (Baidyanath, Kottakkal, Dabur, Patanjali) with heavy-metal-tested batches; ask for the Certificate of Analysis.**" This is doctrine-compliant (JAMA is cited as a publication, not as US regulator) and a real safety addition.

### F2.4 — P1. **"RNID 2020"** UK Deaf-community survey — citation does not exist in dossier

Wave-3 disability review attributes a "31%" tinnitus prevalence figure to "RNID 2020 UK Deaf-community survey." The Royal National Institute for Deaf People (RNID) — formerly Action on Hearing Loss — publishes annual reports and topic-specific briefings. **Verify** whether a 2020 RNID briefing specifically on "Deaf-community tinnitus prevalence" exists with the 31% figure. The 2020 RNID *Deaf Identity and Tinnitus* briefing is real (referenced in the disability-inclusion literature); the 31% prevalence figure may or may not be from that specific briefing.

**Fix.** Cite "RNID 2020. *Tinnitus and Deaf Identity*. Royal National Institute for Deaf People briefing, accessed [date], URL [verify]". If the 31% figure is from a different RNID publication, correct the year/title.

### F2.5 — P1. **"AAO-HNSF 2019" SSHL clinical practice guideline** (line 50) — verify date

Line 50 (§0 SSHL red flag): "*(Plontke 2020 *Lancet*; the country-specific routing reflects per-jurisdiction NHS / KBV / RACGP / AIIMS / **AAO-HNSF** clinical workflow ..."

The American Academy of Otolaryngology–Head and Neck Surgery Foundation (AAO-HNSF) published the **Sudden Sensorineural Hearing Loss Clinical Practice Guideline Update in 2019** (Chandrasekhar SS et al., *Otolaryngol Head Neck Surg* 161(1_suppl):S1-S45, August 2019, PMID 31369359). ✓ 2019 date is correct. ✓ The AAO-HNSF reference is doctrine-compliant when "cited for clinical-pathway context only, not as US-regulator authority" (the dossier line 48 includes this disclaimer) — but the AAO-HNSF is, technically, a US disease-association adjacent body. Doctrine-strict: this could be flagged. The dossier handles it with the "clinical-pathway context only" disclaimer; a fact-checker would note the doctrine-edge but probably accept the framing.

**Fix.** Verify the 2019 date once; otherwise leave as-is with the existing disclaimer.

### F2.6 — P1. **"Plontke 2020 *Lancet*"** (line 50) — verify

The SSHL Lancet paper: Plontke SK, **2020** *Lancet* — verify exact title and reference. The most likely candidate is Plontke SK et al. 2020 *Dtsch Arztebl Int* (German Medical Weekly), not *Lancet*. **Or** Plontke SK 2017 *Lancet* (review article). The dossier may have the journal wrong.

**Fix.** Verify Plontke 2020 *Lancet* vs Plontke 2020 *Dtsch Arztebl Int* (the German review). Likely the German version is the canonical SSHL clinical-pathway review.

### F2.7 — P2. **"Bauer 2003 perioperative herbal medicines review"** (lines 52, 130) — verify

Line 52 (§0 warfarin/DOAC red flag): "*(Bauer 2003 perioperative herbal medicines review; ACCP 2022 herbal-medicine perioperative guideline; Stanger 2012 DOAC + herbal interaction case series)*"

The classic perioperative-herbal-medicines paper is Ang-Lee MK, Moss J, Yuan CS, "Herbal medicines and perioperative care," *JAMA* 286(2):208-216, 2001 (PMID 11448284). There is no widely-cited Bauer 2003 perioperative herbal medicines review — the citation may be a confabulation. **Or** the reference is to Bauer LA, *Applied Clinical Pharmacokinetics*, 2003 (textbook), which is not perioperative-specific.

**Fix.** Verify "Bauer 2003" — if it does not exist as cited, replace with Ang-Lee 2001 *JAMA* PMID 11448284 (with the disclaimer "cited for perioperative herbal-medicine context, NOT as US regulator authority").

### F2.8 — P2. **"ACCP 2022 herbal-medicine perioperative guideline"** (line 52) — verify

The American College of Chest Physicians (ACCP) publishes antithrombotic guidelines; the most recent perioperative chapter is **ACCP 9th Edition 2012** with subsequent updates. The "ACCP 2022 herbal-medicine perioperative guideline" — verify this specific publication. May be a confabulation or may be a separate ACCP publication.

**Fix.** Verify ACCP 2022 reference.

### F2.9 — P1. **"Lelak 2022 *JAMA Pediatr*"** (line 139, 888) — verify

Line 139 (§3.3 melatonin row): "Lelak 2022 documented a 530% rise in paediatric melatonin poisoning calls".
Line 888 (§11.5 life-stage gate): "Melatonin (per **Lelak 2022 *JAMA Pediatr*** + TGA 2024 S3)".

The paediatric melatonin overdose surge paper is Lelak K, Vohra V, Neuman MI, Toce MS, Sethuraman U, "Pediatric Melatonin Ingestions — United States, 2012-2021," published in *MMWR Morb Mortal Wkly Rep* June 2022, NOT *JAMA Pediatrics*. Specifically MMWR 2022;71(22):725-729 (Lelak et al. CDC report). There IS a related Lelak 2022 *JAMA* paper but it is in *JAMA Internal Medicine* or *JAMA Pediatrics* (verify). **The actual MMWR Lelak 2022 paper reports a 530% increase in paediatric melatonin ingestions (not "poisoning calls")** — the dossier's framing is approximately correct but the journal attribution is likely wrong.

**Fix.** Verify Lelak 2022 — likely *MMWR* (CDC) — and correct the journal attribution. Note that citing CDC's MMWR is doctrine-edge (CDC is a US regulator); the rephrase should be "Lelak 2022 paediatric melatonin ingestions data — cited for paediatric-safety context only, not as US-regulator authority."

### F2.10 — P1. **"Choudhary 2017 Australia (Ashwagandha)"** (lines 142, 168, 215, 583, 633) — verify country

The dossier repeatedly cites "Choudhary 2017 Australia" as anchor evidence for Ashwagandha + cortisol + sleep:
- Line 142 §3.3: "*(Schaper 2007 Germany; EMA 2018)*" (this is the Black Cohosh row)
- Line 168 §4.2: "Australian Choudhary 2017 trial confirmed lower cortisol and better sleep. *(Ixoreal KSM-66; Choudhary 2017 Australia)*"
- Line 215, 583, 633: similar attribution

**The actual Choudhary D et al. 2017 KSM-66 RCT was conducted in INDIA, NOT Australia.** Choudhary D, Bhattacharyya S, Joshi K, "Body Weight Management in Adults Under Chronic Stress Through Treatment With Ashwagandha Root Extract," *J Evid Based Complementary Altern Med* 22(1):96-106, 2017 (PMID 27055824) — this is an Indian clinical trial, sponsored by Ixoreal Biomed (Hyderabad, India), conducted at Indian study sites.

The dossier's "Australia" attribution is **factually wrong**. The wave-1 reviewer should have caught this; the wave-3 classical-text reviewer flagged the "Stough trials Australia" framing for Brahmi/Bacopa (line 167 — Stough Con, Roodenrys S, etc., conducted at Swinburne University of Technology, Australia, which IS correct), but the parallel Choudhary 2017 misattribution to Australia was not caught.

**Fix.** Replace "Choudhary 2017 Australia" with "Choudhary 2017 India (Hyderabad, KSM-66 / Ixoreal Biomed-sponsored)" everywhere. This is the **same class of country-attribution error** as the wave-1 Cima 2012 / Megwalu 2006 / Hurtuk 2011 fixes — wave-5 surfaces a missed one.

### F2.11 — P1. **"Khan 2007 Italy (CoQ10)"** (lines 137, 695, 1095) — verify country

Line 137 §3.3: "**CoQ10 / Ubiquinol** | Fuels the inner-ear hair cells' energy factories — Italian study found benefit in the low-CoQ10 subgroup. *(Khan 2007 Italy)*"

The CoQ10 + tinnitus paper is Khan M, Gross J, Haupt H, Jainz A, et al., "A pilot clinical trial of the effects of coenzyme Q10 on chronic tinnitus aurium," *Otolaryngol Head Neck Surg* 136(1):72-77, **2007** (PMID 17210336). **The study was conducted at Charité University Hospital, Berlin, GERMANY — NOT Italy.** First author Khan M was at Charité Berlin.

The dossier's "Khan 2007 Italy" attribution is **factually wrong**. This is **the same class of country-attribution error as the wave-1 Megwalu / Hurtuk / Cima fixes** — Megwalu Singapore→St Louis, Hurtuk Israel→Columbus OH, Cima Bristol→Maastricht NL, **Khan Italy→Berlin Germany**. Wave-5 surfaces a missed one.

**Fix.** Replace "Khan 2007 Italy" with "Khan 2007 Germany (Charité Berlin)" in all six places it appears.

### F2.12 — P2. **"Sismanis 2018 Italy"** (line 142, 989) — verify

Line 142 §3.3 R-ALA row: "R-alpha-lipoic acid | Glutathione recycler — add-on if your tinnitus started after cisplatin or aminoglycoside drugs. *(Sismanis 2018 Italy)*"

Sismanis A is a US-based otologist (Medical College of Virginia / VCU) — best known for pulsatile tinnitus reviews (Sismanis 2011). The "Sismanis 2018 Italy" attribution is very likely wrong on both year and country. **There is no canonical Sismanis 2018 R-ALA-and-tinnitus paper.** The dossier may have confabulated this citation.

**Fix.** Verify "Sismanis 2018" — likely should be a different author (possibly Pirodda 2011 Italy, or Lorito 2008 Italy ALA branch). Replace with the correct citation.

---

## Dimension 3 — Misinformation-flag patterns (10 findings, 2 BLOCKERS)

A fact-checker's third pass: even when a claim's underlying source is real, the *framing* can carry misinformation patterns. The list below maps to the common patterns Health Feedback / Snopes flag.

### F3.1 — BLOCKER. Cherry-picking single studies vs meta-analyses (the §3.3 OTC table)

For each of the 12 OTC molecules in §3.3 (line 128-143), the dossier carries 1-3 named primary trials and (where applicable) the meta-analysis. **Where the meta is null but a primary trial is positive, the dossier should not silently elevate the primary trial.** The current §3.3 handles Ginkgo (Cochrane Hilton 2013 null is foregrounded ✓ correctly) and Magnesium (Cederroth 2011 null is foregrounded ✓ correctly), but:

- **NAC**: Lorito 2008 Italy + Vellore cisplatin trial cited as positive; **Cochrane / Bhatt 2024 systematic review on NAC for tinnitus is null on primary tinnitus** — the dossier does not surface this. NAC's evidence is strong for **acute noise/ototoxic injury PROTECTION** but weak for **chronic tinnitus TREATMENT**; the dossier conflates these two endpoints in the Grade B label.
- **Pycnogenol**: Belcaro 2014 + Belcaro 2017 cited; no independent confirmation. The post-wave-2 demotion C with "single-Italian-group" caveat catches this ✓.
- **CoQ10**: Khan 2007 Germany (per F2.11) cited as positive; pilot trial n<50; no meta-analysis exists; the Grade C is appropriate but the framing "Italian study found benefit in the low-CoQ10 subgroup" is misleading because the subgroup analysis was post-hoc.
- **Lion's Mane**: "Mori 2009 cognition" cited; **no direct tinnitus RCT**, which the Grade C honestly reflects. ✓
- **Vinpocetine**: "Hungarian Gedeon Richter Cavinton clinical-trial dossier" cited; **no public peer-reviewed tinnitus RCT** — the citation is an industry-sponsored unpublished dossier. This is borderline misinformation — a Snopes fact-checker would flag "named trial dossier from a pharma company is not equivalent to a peer-reviewed trial."

**Fix.** (a) NAC row: surface Bhatt 2024 / Cochrane null on chronic tinnitus separately from the noise-injury Grade B. (b) CoQ10 row: flag subgroup analysis as post-hoc. (c) Vinpocetine row: explicitly disclose "Hungarian Gedeon Richter Cavinton dossier — industry-sponsored, unpublished — Grade is C-D on transparency, not C on evidence."

### F3.2 — BLOCKER. **Overgeneralisation — "THE tinnitus breath" (Bhrāmarī)**

Line 513 (§7.3 pranayama table): "Bhramari (humming bee) | **THE tinnitus breath**: humming raises nasal nitric oxide 15× and gently 'covers' the ringing while calming the vagus."

The post-wave-3 classical-text fix (line 509) demoted Bhrāmarī from B → H, citing:
- Telles 2011 is vagal-tone-in-healthy-adults, wrong population
- Lundberg humming-NO is n=10 healthy adults, wrong outcome
- Pandey 2014 S-VYASA open-label n<40, no sham

**No sham-controlled tinnitus RCT supports Bhrāmarī specifically for tinnitus.** Yet line 513 of the dossier still calls it "THE tinnitus breath" — a marketing-grade overgeneralisation that contradicts the H-grade designation. This is the canonical Snopes / Health Feedback pattern — when the grade demotes but the headline copy doesn't, the headline carries the misinformation.

**Fix.** Replace "THE tinnitus breath" with "A traditional tinnitus-adjacent breath — H-grade per §13.7. Pilot evidence only; pleasant, low-harm, low-cost; not RCT-confirmed as a tinnitus-specific intervention."

### F3.3 — P1. **Confusion between association and causation (tinnitus + sleep apnea)**

Line 9 (subTypes): includes "sleep-apnea" as a comorbidity.
Line 460 §6.6: "Untreated sleep apnea — order a home sleep test (Lofta WatchPAT)".

The evidence on tinnitus + sleep apnea is **bidirectional association**, not unidirectional causation. The dossier framing — treat sleep apnea to fix tinnitus — implies a causal arrow. The reality:
- Tinnitus and sleep apnea both share underlying mechanisms (inner-ear hypoperfusion, autonomic dysregulation, sleep fragmentation feedback).
- Treating sleep apnea **modestly improves tinnitus distress in some cohorts** (Nakamoto 2021; Pellegrino 2017) but does **NOT cure tinnitus** in most cohorts.
- Untreated sleep apnea worsens tinnitus distress; CPAP improves sleep-quality-anchored tinnitus distress; CPAP does NOT reduce tinnitus loudness on audiogram or pitch-match.

The dossier's framing reads as if treating sleep apnea is a tinnitus-causal lever. A fact-checker would re-render as: "Sleep apnea and tinnitus share mechanisms (hypoperfusion + autonomic dysregulation); treating sleep apnea modestly improves tinnitus DISTRESS but typically does not change tinnitus loudness."

### F3.4 — P1. Cherry-picking traditional-medicine evidence (which texts? which centuries? whose translation?)

The dossier cites classical texts without consistent edition / translator / century:
- "Sushruta's Latter Tantra ch. 21" (Bhishagratna 1907 translation idiom — wave-3 caught this)
- "Imperial Golden Mirror" (Yī Zōng Jīn Jiàn — wave-3 caught)
- "Avicenna's Canon Book III" (al-Qānūn fī'l-Ṭibb — translator?)
- "Tibetan Four Tantras Book IV" (rGyud bzhi — which translation? Men-Tsee-Khang official? Yuthok original?)
- "Charaka Chikitsa ch. 1" (which edition? Cakrapāṇi commentary? P.V. Sharma translation?)

Wave-3 classical-text scholar surfaced the IAST + edition + lineage problem at exhaustive length. The wave-5 fact-checker flag is narrower: **the dossier cites traditional texts in 11 different inconsistent ways** — sometimes title-only, sometimes title + chapter, never title + chapter + verse + edition + translator. A Health Feedback fact-checker would note this as **MISSING CONTEXT** or **MISLEADING CONTEXT** because a non-Sanskrit reader cannot verify the claim.

**Fix.** Adopt the wave-3 classical-text scholar's recommended IAST + edition + chapter + verse format throughout.

### F3.5 — BLOCKER. **Regulatory-authority hierarchy is internally inconsistent**

The dossier's doctrine block (line 38) declares: "**No US regulator or US disease association is cited as authority.** The single factual exception is the regulatory-path note about Lenire (FDA De Novo grant 2023) in §15." But the dossier elsewhere cites:

- **WHO IARC RF classification 2B 2011** (line 457) — WHO is non-US ✓
- **WHO selenium guidance, drinking-water guidelines, indoor-mould, low-frequency-noise** (lines 408, 458, 460, 477, 532) — WHO is non-US ✓
- **EMA monographs** (many) — EU regulator ✓
- **Health Canada NHP** (many) — Canadian regulator ✓
- **AYUSH / CCRAS / CCRH / CCRUM / CCRS / PCIMH** (many) — Indian regulator ✓
- **TGA / NHMRC** (Australia) ✓
- **NMPA + Chinese Pharmacopoeia 2020** ✓
- **UK MHRA** ✓
- **AAO-HNSF 2019** (line 50, 48) — **US disease-association adjacent** — cited with "clinical-pathway context only, not US-regulator authority" disclaimer; doctrine-edge but acceptable per the disclaimer
- **AHA DASH / AHA home BP / AHA tai chi BP trials** (lines 544, 696, 711, 868) — **AHA = American Heart Association = US disease association** — **VIOLATES doctrine**. The dossier carries multiple AHA citations without the "clinical-pathway context only" disclaimer.
- **USDA SR-28** — see F1.10
- **CDC** (Lelak 2022 if confirmed MMWR — F2.9) — US regulator

The AHA citations are the cleanest violation of the doctrine block. The dossier states it never cites US disease associations as authority, then cites AHA five times. A fact-checker writing about the dossier's own consistency would flag this as **MISLEADING** — the doctrine claim and the practice don't align.

**Fix.** Either (a) replace AHA citations with European Society of Cardiology (ESC), British Heart Foundation, India National Heart Institute, or similar non-US heart-society authorities, or (b) add the "cited for clinical-pathway context only, not as US-disease-association authority" disclaimer inline at each AHA mention. Same fix for any CDC reference.

### F3.6 — P1. Headline-vs-detail mismatch (the §16 closing position)

Line 1164: "Authority grounded in WHO Traditional Medicine Strategy 2025-2034, Cochrane systematic reviews (Hilton 2013, Sereda 2018, Kim 2014, Fuller 2020, Trauer 2015), India AYUSH councils, EMA herbal monographs, Australia TGA/NHMRC, China NMPA + Chinese Pharmacopoeia, Health Canada NHP, Tibetan Men-Tsee-Khang, Hamdard, IMPCOPS, plus the classical texts named in the dossier opener."

The implication of this closing line is that these authorities **endorse the protocol**. They do not. They are **cited as the source of monographs / evidence reviews the protocol draws from**. A fact-checker would flag this as the **"endorsement-by-citation" pattern** — where citing a body's monograph is presented as if the body endorses the dossier's synthesis. Cochrane Hilton 2013 is cited and the dossier honestly reports its null finding; that is the correct way to cite Cochrane. But "Authority grounded in [list]" reads as if the list endorses the synthesis. This is the canonical Health Feedback critique of marketing-grade health content.

**Fix.** "Sources drawn from WHO, Cochrane, AYUSH, EMA, TGA, NMPA, Health Canada, Men-Tsee-Khang, Hamdard, IMPCOPS, and named classical texts. These bodies do not endorse the protocol; the protocol cites their published monographs and reviews and reports their findings honestly — including where their findings are null (Cochrane Hilton 2013 on Ginkgo; Cochrane Kim 2014 on acupuncture; Cochrane Person 2016 on antioxidants)."

### F3.7 — P1. **"trusted by global authorities" framing trap**

Wave-4 founder-product reviewer flagged that "the cohort + clinician advisory board + two-way institutional relationships do not yet exist" — meaning the dossier cannot claim institutional trust without misleading the reader. The dossier does not currently use the phrase "trusted by" — but the overall §16.1 framing (line 1158: "the home OTC + home + six-tradition + no-US-regulator-authority **doctrine ... Authority grounded in WHO...**") functions as an implicit trust-anchor framing. A fact-checker would flag the headline tile on the home page (`/atlas`, `/`) if it carries "trusted by [list]" language. **Need to check the home page Manifesto chips for this pattern.**

**Fix.** Audit home-page Manifesto chips (`nichecore/app/page.tsx`) + ConversionStrip (`nichecore/components/layout/conversion-strip.tsx`) for "trusted by [authority]" framing. Replace with "cites [authority] monographs."

### F3.8 — P2. **"Vital Farms pasture-egg nutrient data"** (line 394, 656) — branded source as nutrient anchor

Line 394: "TL;DR. Pasture-raised eggs — 2/day — choline, B12, natural vitamin A. *(Vital Farms pasture-egg nutrient data)*"

Citing **Vital Farms** (a US branded egg producer) as the nutrient anchor is a fact-check vulnerability. Vital Farms publishes nutrient data on its website; this is marketing-grade nutrient data, not peer-reviewed. The actual nutrient differential between pasture-raised and conventional eggs is documented in academic literature (e.g., Karsten 2010 *Renewable Agric Food Syst*; Anderson 2011 *Poult Sci*) — not from a brand's website.

**Fix.** Replace "Vital Farms pasture-egg nutrient data" with the Karsten 2010 academic citation or with WHO Codex Alimentarius egg-nutrient profiles.

### F3.9 — P2. **"WHO/IARC RF classification 2B 2011"** (line 457) — verify

Line 457: "Cellphone held to the ear — use speakerphone or wired and alternate sides. *(WHO/IARC RF classification 2B 2011)*"

The IARC classified radiofrequency electromagnetic fields as **Group 2B (possibly carcinogenic to humans) in May 2011**. ✓ The 2011 date is correct. IARC = International Agency for Research on Cancer, a WHO body, non-US. ✓ Doctrine-compliant. ✓

However, the link between cellphone RF and tinnitus is **not established** in the WHO/IARC 2B classification — that classification is for glioma/acoustic neuroma cancer risk, not for tinnitus. The dossier's framing implies tinnitus relevance which is not what the classification addresses.

**Fix.** "WHO/IARC 2011 classified RF EMF as Group 2B (possibly carcinogenic — for cancer endpoints, not tinnitus). The tinnitus-RF link is not established; speakerphone-or-wired is a precautionary practice based on RF heat / acoustic neuroma risk, not on confirmed tinnitus causality."

### F3.10 — P2. **"Iliff 2012"** (line 636) glymphatic-clearance citation

Line 636: "Bedtime | Lights out in a cool (18-20°C) blackout room — brain clears overnight. *(Iliff 2012)*"

Iliff JJ et al. 2012 *Sci Transl Med* "A paraventricular pathway facilitates CSF flow through the brain parenchyma" (PMID 22896675) — the glymphatic-clearance paper, conducted in mice. Translating mouse glymphatic-clearance to human tinnitus is **rung-b mechanism extrapolation**, not a clinical evidence anchor. The dossier elsewhere is honest about rung distinctions but this citation passes without it.

**Fix.** "*(Iliff 2012 mouse glymphatic-clearance — rung-b mechanism; human translation is plausible but not RCT-confirmed for tinnitus)*"

---

## Dimension 4 — Living-document drift (8 findings, 2 BLOCKERS)

A fact-checker's fourth pass: when a document has been corrected by multiple waves of revision, do the corrections propagate everywhere they need to, or are there ghost-claims that survived in unaudited corners?

### F4.1 — BLOCKER. **Cima 2012 Maastricht NL correction did NOT propagate to all 4 mentions**

Wave-1 corrected Cima 2012 from Bristol UK to Maastricht NL. The correction propagated to:
- Line 21 YAML factualErrorsFixedThisRevision ✓
- Line 86 §2.3 "Cima 2012, Maastricht NL" ✓
- Line 302 §5.7 "Cima 2012's 8-week Maastricht (Netherlands) randomised trial" ✓

But Cima 2012 is also cited in **22 other places** without the "Maastricht NL" qualifier. Most of these are short citations like "*(Cima 2012)*" or "*(Cima 2012; McKenna 2017)*" — a fact-checker would not necessarily flag these as wrong, since the simpler citation doesn't repeat the country attribution. **But** if a reader pulls one of those citations and Googles "Cima 2012 tinnitus Bristol" (because they remember the dossier saying Bristol), they would still find Bristol-attributed third-party blog posts cached from before the correction propagated.

**The wave-1 propagation is technically complete but the *announcement* of the correction needs to be more visible.** The dossier opener (line 38) does not mention the Cima 2012 correction in the "factual exception" block; the §5.7 (line 302) inline annotation is the only place a reader sees it.

**Fix.** Add a "corrections register" at the top of the dossier (separate from the YAML block, which is metadata) — a 6-line visible block: "**Corrections register (2026-06-06 → 2026-06-10).** Earlier revisions of this dossier wrongly attributed: (1) Cima 2012 to Bristol UK (correct: Maastricht NL); (2) Megwalu 2006 to Singapore (correct: St Louis MO); (3) Hurtuk 2011 to Israel (correct: Columbus OH); (4) TENT-A2 to 2024 (correct: 2022); (5) Choudhary 2017 to Australia (correct: India); (6) Khan 2007 to Italy (correct: Berlin Germany); (7) the Lugo 2022 figure was rendered without denominator restriction; (8) the §13.6 AIIMS Delhi cohort was framed as measured data — it is reviewer-composed illustrative data. The corrections are documented inline at the relevant sections; this register exists for transparency."

### F4.2 — BLOCKER. **Bundle vs dossier reconciliation — wave-3 fix may have left mismatches**

The wave-3 backlog reconciled the `tinnitus-quiet-90` bundle in `lib/data.ts` (4 products: Tebonin + Mg + Zn + B12) with the dossier's §8.0 MVP (sound + MBCT-T + Mg + 4-min release). The mismatch:
- Bundle leads with **Tebonin** (Ginkgo) as a product.
- Dossier MVP §8.0 leads with **sound + MBCT-T + Mg + somatic release** — Ginkgo is NOT in the MVP.
- Dossier §8.2 Combo 1 includes Ginkgo "**only if you've decided to do an 8-12 week try**" (line 577).
- Dossier §13.7 grades Ginkgo C with "Cochrane null" honesty.
- Wave-2 biostatistics demoted Ginkgo to C-with-honest-Cochrane-null framing.

**The bundle's marketing of Tebonin as a primary product is inconsistent with the dossier's framing of Ginkgo as a C-grade 8-12-week-trial-only optional layer.** A reader who buys the bundle gets Tebonin without the honest framing that the Cochrane review found it null for most users. A Snopes / Health Feedback fact-checker who pulls the bundle SKU and compares to the dossier would flag this as **MISLEADING** — the bundle and the dossier give different evidence framing.

**Fix.** Either (a) restructure the bundle to lead with magnesium glycinate + sound-app-access + MBCT-T audio (matching the §8.0 MVP), with Tebonin as opt-in step-up after 8-week trial decision, or (b) inline-disclose on the bundle SKU page that "Tebonin is included as an optional 8-12 week trial layer per the §3.2 honest Cochrane-caveat — Grade C; stop at week 12 if no shift."

### F4.3 — P1. **YAML schemaVersion v7.0.0 is stale**

Line 11: `schemaVersion: v7.0.0-rigor-pass-2026-06-06`

The dossier has been substantially modified post-2026-06-06 with wave-2, wave-3, and wave-4 fixes. The schemaVersion does not reflect these. A fact-checker checking the YAML metadata against the body would note the metadata staleness.

**Fix.** Update to `v7.0.0-wave5-fact-check-2026-06-10` or similar, with a corresponding entry in `factualErrorsFixedThisRevision` and `reviewPanelAudit2026-06-06` updated to `reviewPanelAudit2026-06-10` covering wave-2 through wave-5.

### F4.4 — P1. **Rule 13 (counterfactual annotation) NOT consistently applied to §3.3 and §13.7**

Skill v7.0.0 Rule 13 mandates counterfactual annotation on every quantitative claim. Spot-check §3.3 row by row:
- Ginkgo: counterfactual annotation present ✓ (Cochrane null, EMA indication mismatch)
- Magnesium: counterfactual annotation present ✓ (Cederroth 2011 null)
- Zinc: counterfactual annotation present ✓ (Coelho 2013 replete population no benefit)
- NAC: counterfactual annotation **partially present** — no high-quality chronic-tinnitus RCT is mentioned in §13.7 row but not in §3.3 row
- Vinpocetine: counterfactual annotation **absent** in §3.3 — only doctrine break mentioned
- Pycnogenol: counterfactual annotation **absent** in §3.3 — single-Italian-group + Belcaro-funded caveat only in §13.7
- Methyl-B12: counterfactual annotation ≈ present (deficiency-only)
- CoQ10: counterfactual annotation **absent** in §3.3 — Khan 2007 subgroup post-hoc not flagged
- L-Arg + L-Cit: counterfactual annotation **absent**
- Melatonin: counterfactual annotation present ✓ (post-hoc subgroup framing)
- Lion's Mane: counterfactual annotation ≈ present (no direct tinnitus RCT)
- Black Cohosh: counterfactual annotation **absent** — Cochrane Black Cohosh for menopausal symptoms is mixed; tinnitus relevance not established
- R-ALA: counterfactual annotation **absent** in §3.3

**Fix.** Apply Rule 13 to every row in §3.3 — surface the counterfactual / null evidence for each compound (where it exists) in the row itself, not only in §13.7. The two sections should agree.

### F4.5 — P1. **Wave-3 disability-inclusion CI red-flag block — propagation check**

The CI / middle-ear implant red flag block (line 44) lists four contraindicated §5 interventions. Cross-check propagation to:
- §5.10 red-light: contraindication added ✓ (line 339)
- §5.12 taVNS: contraindication added ✓ (line 351)
- §5.14 PEMF: contraindication added ✓ (line 361)
- §5.9 OTC hearing aid: contraindication added ✓ (line 333 BAHA / Ponto block)
- §11.5 life-stage gate: CI + middle-ear implant rows added ✓ (lines 897-898)
- §11.6 who-this-protocol-is-not-for: CI row added ✓ (line 920)

Wave-3 propagation is **complete**. ✓ This is well-handled.

### F4.6 — P2. **TENT-A2 year correction (Conlon 2022 not 2024) — propagation check**

Wave-1 corrected TENT-A2 from 2024 to 2022. Propagation:
- Line 24 YAML ✓
- Line 1062 §13.7 "Conlon **2022** TENT-A2" ✓
- Line 1092 §14.1 "Conlon **2022** TENT-A2" ✓
- Line 1116 §15.2 "Conlon **2022** TENT-A2" ✓
- Line 790 §10.7: "Conlon 2024 TENT-A2" **NOT corrected** ✗
- Line 819 §10.7.3: "Conlon 2024 TENT-A2" **NOT corrected** ✗
- Line 1112 §15.1: "Conlon 2024 TENT-A2" **NOT corrected** ✗
- Line 1146 §15.4: "Conlon 2024 TENT-A2" **NOT corrected** ✗
- Line 1170 §16: "the TENT-A2 trial (Conlon 2024)" **NOT corrected** ✗

**The TENT-A2 year correction propagated to §13.7 and §14.1 but NOT to §10.7, §15.1, §15.4, or §16.** Five remaining "Conlon 2024 TENT-A2" instances are factually wrong. A fact-checker who pulls the dossier today would find the inconsistency.

**Fix.** Replace "Conlon 2024 TENT-A2" with "Conlon 2022 TENT-A2" in all 5 remaining places.

### F4.7 — P2. **Padma Lax vs Padma 28 correction (wave-2 EMA) — propagation check**

Wave-2 EMA reviewer corrected: "Padma Lax and Padma 28 are different products; there is no EMA HMPC monograph for either." Propagation:
- Line 223 §4.6 Tibetan: correction present ✓
- Line 230 §4.6 Tibetan table: correction present ✓
- Line 654 §9.1: "Padma-28" + "(Men-Tsee-Khang; EMA Padma)" — **EMA Padma is still wrong here** — the correction did not propagate to the supplier ecosystem table. The "EMA Padma" attribution at line 654 contradicts the line 223 correction that "there is no EMA HMPC monograph."

**Fix.** Line 654: replace "*(Men-Tsee-Khang; EMA Padma)*" with "*(Men-Tsee-Khang; Padma AG Swissmedic — NO EMA HMPC monograph)*".

### F4.8 — P2. **Lipoflavonoid framing — multiple mentions, consistency check**

Line 483: "Lipoflavonoid is not endorsed".
Line 786 §10.6: "(**Lipoflavonoid not endorsed**)".
Line 1028 §13.5: "This protocol does **not** chase tinnitus with off-label nerve drugs or Lipoflavonoid."
Line 1078 §13.7: "**DO NOT RECOMMEND: Lipoflavonoid as cornerstone** | Marketing > evidence; no RCT base for the proprietary blend."
Line 1164 §16: "**Lipoflavonoid not endorsed**".

Consistency is **complete**. ✓ Five mentions, all aligned. Wave-1 handled this well. The §13.7 framing "Marketing > evidence; no RCT base for the proprietary blend" is the cleanest. A fact-checker would not flag this row.

**However** — Lipoflavonoid is a US-marketed brand (DSE Healthcare Solutions). Calling out a specific brand by name as "do not recommend" is a defensible health-communication move, but it is also a potential trademark / commercial-disparagement vector. A trust-and-safety review (wave-4 covered some of this) should address whether brand-specific anti-recommendations carry legal risk. (Probably not in this case because the claim is "no RCT base" which is factually defensible, but worth noting.)

---

## Dimension 5 — The "graded honestly" meta-claim itself (4 findings, all P1)

A fact-checker's fifth pass: when a dossier claims to grade evidence honestly, does the grading discipline survive scrutiny?

### F5.1 — P1. **Ashwagandha hepatotoxicity — Rule 19 harm-axis applied at one mention only**

Wave-2 pharmacovigilance review surfaced the Ashwagandha hepatotoxicity 2020-2024 VigiBase + TGA + Health Canada + EMA HMPC cluster. Honest harm-grade per Rule 19 is C-D, not A.

Where Ashwagandha appears in the dossier:
- Line 142 §3.3 (NOT in the main 12-OTC table — Ashwagandha is missing from §3.3 but added to §4.2 Ayurveda)
- Line 168 §4.2 Ayurveda table: Grade A | "Ashwagandha (KSM-66) | 'Winter cherry' adaptogen — Australian Choudhary 2017 trial confirmed lower cortisol and better sleep. *(Ixoreal KSM-66; Choudhary 2017 Australia)*" — **NO hepatotoxicity flag**, **NO Grade C-D downgrade** per wave-2 finding.
- Line 215 §4.5 Siddha: "Aswagandha Chooranam | Siddha adaptogen taken with warm milk at night for sleep and tinnitus distress." — **NO hepatotoxicity flag**
- Line 444 §6.5 meal plan day 3: "Ashwagandha-milk day" — **NO hepatotoxicity flag**
- Line 583 §8.4 Combo 3: "Ashwagandha KSM-66 300" — **NO hepatotoxicity flag**
- Line 633 §8.5 timetable: "Combo 3 — Mg-Thr + Ashwagandha ≥1.5 h pre-bed" — **NO hepatotoxicity flag**
- Line 686 §10.1: "Ashwagandha, melatonin, Mg | Sedation" — **NO hepatotoxicity flag**
- Line 691 §10.1: "Ashwagandha" appears repeatedly — **NO hepatotoxicity flag**
- Line 733 §10.3: "Ashwagandha | Alcohol adds sedation" — **NO hepatotoxicity flag**
- Line 768, 772 §10.5.5 gradient-AE: TSH drift + daytime sedation surfaced, but **hepatotoxicity flag is only in line 777 wave-2 pharmacovigilance bullet list**
- Line 786 §10.6 strictly-avoid: "**chronic Ashwagandha if any baseline LFT elevation**" ✓ — surfaced
- Line 893 §11.5 life-stage gate: Bipolar disorder | "Ashwagandha (caution)" — **partial flag**
- Line 991 §12.6: "Stop if levothyroxine dose changes; stop in Hashimoto flare" — **NO hepatotoxicity flag**
- Line 1164: Ashwagandha listed as Grade B — **STILL A IN §4.2 but B IN §16; not internally consistent**

**The Ashwagandha hepatotoxicity flag is surfaced at line 777-786 only.** Everywhere else (12+ mentions), Ashwagandha is rendered without the harm flag. A reader scanning the dossier for Ashwagandha guidance — § 4.2 Ayurveda, §6.5 meal plan, §8.4 Combo 3 — would miss the hepatotoxicity flag entirely. **This is the canonical Health Feedback critique: when a safety flag exists in one place but not in all places where the compound is recommended, the safety flag fails its purpose.**

**Fix.** Surface "**hepatotoxicity flag — see §10.5.5; stop if LFTs elevated**" at every Ashwagandha mention.

### F5.2 — P1. **§13.7 grades vs Cochrane Consumer Network grades — comparison**

A fact-checker compares the dossier's §13.7 grades to what Cochrane Consumer Network grades for the same intervention:
- **Sound enrichment**: dossier B (distress) / C (loudness). Cochrane Sereda 2018 = low-certainty for both. ✓ aligned.
- **CBT-T**: dossier B (post-wave-2 demotion). Cochrane Fuller 2020 = moderate-certainty for distress, low for loudness. ✓ aligned.
- **MBCT-T**: dossier A (line 304 §5.7) vs B (§13.7 line 1061). **INCONSISTENT WITHIN DOSSIER.**
- **Ginkgo**: dossier C. Cochrane Hilton 2013 re-issue Sereda 2022 = null. ✓ aligned with honest demotion.
- **Magnesium**: dossier C. Cochrane Person 2016 antioxidants = null. ✓ aligned.
- **Pycnogenol**: dossier C. No Cochrane review. AMSTAR-2 low per wave-2. ✓ aligned.
- **Lenire**: dossier D (post-wave-2). Cochrane has no review yet. GRADE-strict = observational. ✓ aligned with wave-2 demotion.

**The MBCT-T A-vs-B inconsistency between §5.7 and §13.7 is the load-bearing internal inconsistency.** §5.7 line 304 reads "**Grade A** for tinnitus distress reduction"; §13.7 line 1061 reads "**B (distress per GRADE moderate-certainty; was A — demoted 2026-06-07**". The demotion was applied to §13.7 but **not propagated** to §5.7.

**Fix.** Update §5.7 (line 304) to "**Grade B** for tinnitus distress reduction (Cochrane Fuller 2020 moderate-certainty; demoted from A 2026-06-07 per honest GRADE reading)".

### F5.3 — P1. **Harm-axis grading inconsistency for Lion's Mane**

Wave-2 pharmacovigilance surfaced the Lion's Mane TGA 2024 emerging CNS + dermatological cluster (line 778). The dose threshold: "low-harm at 500-1000 mg; rising signal at 1500-3000 mg." Dossier §3.3 row recommends 1500-3000 mg/day — i.e., at the **threshold-of-signal** dose range. The harm-axis grade should reflect this:
- Line 140 §3.3: Grade C, recommends 1500-3000 mg
- Line 786 §10.6: "**Lion's Mane > 1500 mg if any history of mood disorder**" ✓ added
- Line 985 §12.6: "Drop if no cognitive / habituation signal" — **NO mention of harm signal at dose threshold**

**The §3.3 recommended dose sits at the harm-signal threshold without inline flag.** A fact-checker would re-render: "Lion's Mane | Grade C | recommended dose 500-1000 mg AM (lower-harm); 1500-3000 mg only after 4-week tolerance trial + no CNS/dermal signal."

**Fix.** Update §3.3 Lion's Mane row to recommend the lower 500-1000 mg dose first, with 1500-3000 mg conditional on 4-week tolerance.

### F5.4 — P1. **Trust-framing audit — "trusted by global authorities" implicit pattern**

Wave-4 founder-product reviewer raised this as a commercial-architecture flag. From a fact-checker lens:

The dossier nowhere uses the literal phrase "trusted by global authorities." But the §16.1 closing position (line 1164: "Authority grounded in WHO, Cochrane, AYUSH, EMA, TGA, NMPA, Health Canada, Men-Tsee-Khang, Hamdard, IMPCOPS") functions as an implicit endorsement framing — the rhetorical move from "cites these authorities" to "authority grounded in these authorities" is a one-step framing slide that a fact-checker would flag.

The home page (`nichecore/app/page.tsx`) Manifesto chips and the ConversionStrip should be audited for the same pattern. Wave-4 trust-and-safety touched the operations layer but did not specifically audit Manifesto / ConversionStrip copy for "trusted by [authority]" patterns.

**Fix.** Audit Manifesto chips + ConversionStrip + footer + every storefront surface for "trusted by [authority]", "endorsed by [authority]", "approved by [authority]" patterns. Replace with "cites [authority] monographs", "draws on [authority] reviews", "follows [authority] dosing guidance."

---

## Headline summary — what a Snopes / Health Feedback / Full Fact / AFP / Reuters fact-check would flag if the tinnitus dossier went viral tomorrow

The dossier has done a remarkable amount of self-correcting work. The wave-1+2+3+4 chain is the strongest fact-check-resilient natural-health dossier I have seen in my 12 years. It is honest about Cochrane nulls, honest about evidence tiers, honest about sub-type variation, honest about adherence reality. The corrections-announcement layer (the inline "earlier revisions wrongly said X" annotations) is the right move.

But five specific defects would carry the headlines if a fact-check published tomorrow:

**1.** The **AIIMS Delhi cohort does not exist as published institutional data**. The §13.6 distributional outcome table presents reviewer-composed estimates as cohort statistics. **MISLEADING.**

**2.** The **Lugo 2022 10% suicidal-ideation figure** is propagated without the distressed-cohort denominator restriction in wave-3/4 design assumptions, overstating risk for the median reader by an order of magnitude. **MISSING CONTEXT.**

**3.** The **30% Deaf-community tinnitus prevalence** figure (wave-3 added) is published without the underlying citations in the dossier body. The figure is at the **low end** of the 28-36% range; the headline framing flattens variance. **UNVERIFIED.**

**4.** The **Khan 2007 Italy** and **Choudhary 2017 Australia** country attributions are **factually wrong** (Khan = Berlin Germany; Choudhary = Hyderabad India). Same class of error as wave-1's Cima Bristol → Maastricht fix; **wave-5 surfaces missed instances**.

**5.** The **TENT-A2 year correction did not propagate to 5 of 8 mentions** — five "Conlon 2024 TENT-A2" instances remain in the post-wave-4 dossier. **PROPAGATION INCOMPLETE.**

Plus the operational-doctrine inconsistency: **AHA citations** (American Heart Association = US disease association) appear 5+ times without the "clinical-pathway context only" disclaimer — a direct **DOCTRINE VIOLATION** the dossier's own §16 declares against. **MISLEADING.**

These are all fixable with one revision pass. The dossier post-wave-5 fix would be the most fact-check-resilient natural-health dossier publicly available.

---

## Specific edit recommendations (35 items, ranked)

**BLOCKERS (6).** Must land before any storefront push.

1. **§13.6 AIIMS Delhi cohort** — reframe as "illustrative reviewer-composed distribution, NOT measured cohort data" (F1.1).
2. **§1 Lugo 2022 figure** — surface distressed-cohort denominator restriction at every mention (F1.3).
3. **§1.4 Deaf-identity prevalence** — publish underlying citations OR remove the 30% figure until cited (F1.2 + F2.4).
4. **Boedts 2024 Lenire** — pin PMID + exact n + exact MCID cutoff + funding source inline (F1.4).
5. **Acute spontaneous resolution** — re-render "40-75% across aetiologies" with sub-aetiology breakdown (F1.5).
6. **Khan 2007 country attribution** — Italy → Berlin Germany propagated everywhere (F2.11).

**P1 (12).** Must land before next dossier-revision tag.

7. Choudhary 2017 Australia → India (F2.10).
8. TENT-A2 year propagation — 5 remaining "Conlon 2024" → "Conlon 2022" (F4.6).
9. Cima 2012 effect-size honesty — Cohen's d ≈ 0.24 surfaced wherever cited outside §13.7 (F1.7).
10. MBCT-T §5.7 grade A → B (matching §13.7) (F5.2).
11. Saper 2008 add — heavy-metal vetting on Ayurveda supplier chain (F2.3).
12. Bauer 2003 verify or replace with Ang-Lee 2001 *JAMA* (F2.7).
13. Lelak 2022 journal verify — MMWR not JAMA Pediatr (F2.9).
14. AHA citation doctrine block — add "clinical-pathway context only" disclaimer at every AHA mention (F3.5).
15. Bhrāmarī "THE tinnitus breath" → "A traditional tinnitus-adjacent breath, H-grade" (F3.2).
16. Ashwagandha hepatotoxicity flag propagated to every Ashwagandha mention (F5.1).
17. Lion's Mane dose lowered to 500-1000 mg first (F5.3).
18. Sismanis 2018 R-ALA citation verify or replace (F2.12).

**P2 (17).** Polish items for the next quarterly revision.

19. PSQI cutoff "under 5" → "≤ 5" (F1.12).
20. Saraswatarishta alcohol "5-12%" → "5-10% commercial" (F1.15).
21. Hatha-pradīpikā 2.68 — specify edition (F2.1).
22. CCRUM NFUM — specify volume + page (F2.2).
23. RNID 2020 — specific briefing title + URL (F2.4).
24. Plontke 2020 — verify *Lancet* vs *Dtsch Arztebl Int* (F2.6).
25. USDA SR-28 — replace with non-US nutrient database OR add doctrine disclaimer (F1.10).
26. FDA OTC clearance 2022 — "rule finalised August 2022 / effective October 2022" (F1.11).
27. Belcaro 2014 n=92 — verify, add PMID + funding (F1.6).
28. Attias 1994 disclaimer propagated to all 7 mentions (F1.9).
29. Vital Farms egg nutrient cite → Karsten 2010 academic (F3.8).
30. Iliff 2012 mouse glymphatic → "rung-b mechanism extrapolation" disclaimer (F3.10).
31. Cochrane / Bhatt 2024 NAC null on chronic tinnitus surfaced (F3.1).
32. Schema version bump v7.0.0-wave5-2026-06-10 (F4.3).
33. Padma 28 line 654 supplier table: "EMA Padma" → "Padma AG Swissmedic, NO EMA HMPC" (F4.7).
34. WHO/IARC 2B classification — clarify cancer-not-tinnitus scope (F3.9).
35. Sleep apnea + tinnitus framing → "bidirectional association, modest distress benefit, not causal" (F3.3).

---

**Closing position.** The dossier has earned the right to ship. The five BLOCKER fixes above protect the founder from the specific fact-check headlines that would otherwise embarrass NicheCore the first week a viral tweet links it. The P1 + P2 items are the next-revision discipline that keeps the dossier honest across the next 12 months of evidence drift. A Health Feedback reviewer reading the post-wave-5 fixed version would land at **"Mostly Accurate, With Important Caveats Honestly Surfaced"** — which is the highest rating any natural-health dossier can earn from the IFCN-aligned community. That is real, and that is moat.

— Wave-5 fact-checker, 2026-06-10
