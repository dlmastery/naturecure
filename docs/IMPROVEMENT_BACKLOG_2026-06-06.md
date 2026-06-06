# 100-Improvement Backlog — Aggregated From 5 Elite Reviewer Audits

**Date:** 2026-06-06
**Source reviews (all in `docs/`):**
- `REVIEW_2026-06-05_ICLR_evidence-rigor.md` — evidence rigor + reasoning chain
- `REVIEW_2026-06-05_NeurIPS_reproducibility.md` — data model + reproducibility + audit trail
- `REVIEW_2026-06-05_medical_safety.md` — contraindications + life-stage + AE pipeline + QC
- `REVIEW_2026-06-05_biomedical_mechanism.md` — mechanism honesty + primary-source verification
- `REVIEW_2026-06-05_AI-lab_harness-design.md` — harness + ADRs + agent guardrails
- `REVIEW_2026-06-05_ICML_claims-rigor.md` — marketing claim rigor + base rates + generalization

**Doctrine respected throughout:** OTC + home-administered; six traditions ≥2 entries each (Ayurveda + TCM + Unani + Siddha + Tibetan + Homeopathy); no US-regulator authority (Cochrane / EMA HMPC / AYUSH / TGA / NMPA / Health Canada NHP as primary anchors).

**Verdict spread:** ICLR Not Publishable · NeurIPS Reject · Medical Conditional Accept (storefront hold) · Biomedical Major Revision · AI-Lab Major Revision · ICML Strong Reject (3/10). Five out of six are some form of major revision. The content scores meaningfully better than the harness, surface claims, and citation discipline that surround it.

**Top-20 highlighted in bold.** Numbered roughly by leverage × cost (P0 = ship today, P1 = ship this week, P2 = ship this month, P3 = ship next quarter, P4 = structural multi-month).

---

## A. Factual-error fixes — verifiable in 1 minute each (P0)

These are mistakes a reviewer caught by name. They corrode credibility disproportionately because anyone with access to PubMed verifies them in a single Google search.

1. **🎯 [Top-20] Fix Cima 2012 country — it is Maastricht NL, NOT Bristol UK** (4 occurrences in `tinnitus-support.md` lines 56, 272-274). Source: Cima RFF et al. *Lancet* 2012;379(9830):1951-9. PMID 22633033.
2. **🎯 [Top-20] Fix Megwalu 2006 country — it is St Louis, Missouri USA (Washington U), NOT Singapore.** PMID 16455366. Annotate as US-authored trial cited as primary-trial-level evidence, not as US-regulator authority. This launders nothing; the country error launders US-affiliation.
3. **🎯 [Top-20] Fix Hurtuk 2011 country — it is Columbus, Ohio USA (OSU), NOT Israel.** PMID 21859051. Same handling note as Megwalu.
4. **🎯 [Top-20] Fix TENT-A2 year — it is 2022 (Conlon *Sci Rep* 12:10845; PMID 35729184), NOT 2024.** 5 occurrences in tinnitus dossier.
5. **🎯 [Top-20] Update Hilton 2013 Cochrane → Sereda 2022 re-issue** (or cite both with version pin). Same conclusion; updated search dates.
6. **🎯 [Top-20] Untangle Attias 1994 attribution.** That trial measured noise-induced permanent threshold shift in IDF recruits (n=300), not chronic primary tinnitus. The Mg-in-tinnitus trial-level evidence is Cederroth 2011 *PLoS One* (small, null primary) and Person 2016 Cochrane antioxidants review (null). Cite Attias for hearing-protection adjacency; cite Cederroth for honest null on chronic tinnitus.
7. **🎯 [Top-20] Fix EMA Ginkgo HMPC monograph indication conflation.** The monograph's well-established-use indication is mild dementia; traditional-use is circulatory symptoms. Tinnitus is NOT a recognised EMA indication. Honest framing supplied in the biomedical review.
8. **🎯 [Top-20] Fix Lenire "7-9 of 10 sustained 12 months" claim.** Conflates 3 trials (TENT-A1 n=326 @ 12 weeks, TENT-A2 n=191 @ 6 weeks, Boedts 2024 n≈220 @ 12 weeks), 2 different outcomes (completer responder rate vs ITT), and 2 different timepoints. Render the trials separately. Boedts 2024 ITT responder rate is closer to ~60-65%; the "7-9 of 10" is the completer denominator.
9. **🎯 [Top-20] Downgrade Bhramari pranayama from B → H or T.** Telles 2011 is vagal-tone-in-healthy-adults (wrong population). Lundberg humming-NO is n=10 healthy adults (wrong outcome). The only Bhramari-in-tinnitus evidence is Pandey 2014 S-VYASA open-label n<40, no sham.
10. **Acknowledge "Vellore cisplatin trial" is unverifiable as cited.** Either resolve to a specific paper (Christian Medical College Vellore has run several NAC-cisplatin trials) or remove.
11. **Acknowledge Lorito 2008 anchor is animal not human RCT.** Lorito-group human ototoxicity data is mostly later/preclinical-adjacent. NAC-in-noise human RCT evidence is Kopke 2007 (USMC) and Lin 2010 (Taiwan).
12. **Mark Belcaro-group Pycnogenol trials with single-Italian-group + industry-sponsorship caveat.** Edzard Ernst flagged the methodology. AMSTAR-2 rating is low. Without independent confirmation, Grade B is not supportable; demote to C until replication.
13. **Audit the remaining ~50 author-year citations to the same standard.** Six factual errors in the first 10 random audit-picks; failure rate is consistent across the corpus. Use Tier-1 mechanical citation lint (see I47) to gate the next regen.

## B. Safety-critical content edits — earliest possible ship (P0)

These are the items the medical reviewer would gate the storefront on. None require new infrastructure.

14. **🎯 [Top-20] Add SSHL 72-hour warning at top of tinnitus dossier** (verbatim from medical review §6.f). Red-flag panel: "if your tinnitus started in the last 72 hours and you also notice sudden one-sided hearing loss or muffled hearing in that ear, this is sudden sensorineural hearing loss (SSHL) — an otolaryngology emergency with a 14-day treatment window. See an ENT same-day. Oral steroids within 14 days dramatically improve the chance of permanent recovery. The home OTC stack here is an adjunct, not a substitute."
15. **🎯 [Top-20] Add K2 MK7 + warfarin cross-dossier gate** to tinnitus dossier (and to every dossier that recommends a D3/K2 combo). AFib dossier already correctly bans K2 on warfarin; tinnitus recommends Thorne D3/K2 without that gate. INR collapse → stroke risk.
16. **🎯 [Top-20] Add eGFR-gated Magnesium dose table** to §3.3 + add eGFR / creatinine to §11.3 baseline DTC panel. CKD 3a → reduce to 200-300 mg/day; 3b → 100-200 mg/day; 4 → avoid; 5/dialysis → contraindicated.
17. **🎯 [Top-20] Add 12-question safety quiz gate before checkout** (replace current 4-question quiz). Fields: pregnancy, breastfeeding, age <18, CKD/dialysis history, active cancer, liver disease, bipolar/epilepsy, autoimmune flare, pacemaker, on warfarin/DOAC, on SSRI/SNRI, on thyroid hormone. Render life-stage exclusions explicitly before the Subscribe & Save CTA.
18. **🎯 [Top-20] Add structured Life-Stage Gate Table** to tinnitus dossier (verbatim from medical review §2.3). 10 rows covering pregnancy / breastfeeding / pediatric / elderly+polypharmacy / active cancer / CKD 3+ / cirrhosis-NAFLD / bipolar / epilepsy / G6PD / pacemaker, each with EXCLUDED, DOSE-ADJUSTED, DEVICES-EXCLUDED columns.
19. **Name copper-deficiency myeloneuropathy (CDM)** as the chronic-zinc clinical failure mode in §3.3 zinc row + §10.4 Zn↔Cu row. Add 6-month serum Cu lab monitoring cadence.
20. **Add CBC + serum B12 + MMA + active-B12 monitoring cadence** to B12 row (baseline + 3 mo + 6 mo + annual). Add Arendt 2013 elevated-B12-paraneoplastic-marker signal to §10 interaction matrix.
21. **Flag Saraswatarishta 5-12% alcohol content** in tinnitus, anxiety, and pregnancy dossiers. Risks: pregnancy / lactation (alcohol in breast milk), recovering AUD, on metformin (disulfiram-like), on disulfiram (severe).
22. **Add Ginkgo perioperative stop-window** (≥36h minimum, 7-10d ideal pre-op; ACCP 2022 / Bauer 2003 citations). Apply to dental extraction, colonoscopy, cataract, epidural injection.
23. **Make bleed-stack functional ban (not 1-2 cap) on warfarin/DOAC/dual-antiplatelet.** Only sound therapy and CBT-T have positive risk-benefit in that population. Replace "keep stack to 1-2" with absolute ban; surface as red-flag panel.
24. **Add pediatric melatonin warning** (Lelak 2022 *JAMA Pediatr* 530% paediatric poisoning increase; TGA 2024 S3 reclassification). Currently dossier has no pediatric age floor.
25. **Add ashwagandha + thyroid hormone interaction.** Mildly thyrotropic; can drift levothyroxine users into subclinical hyperthyroidism (Sharma 2018).
26. **Add ashwagandha + autoimmune thyroid (Hashimoto's) interaction.** Comorbidity screen already names Hashimoto's; gate the ashwagandha row.
27. **Add saffron + bipolar disorder warning.** Serotonergic; can flip bipolar I/II into hypomania.
28. **Add black cohosh + tamoxifen/aromatase-inhibitor + active breast cancer contraindication.** Dossier recommends it for perimenopausal sub-type without active-cancer screen.
29. **Add L-arginine + post-MI mortality signal** (VINTAGE-MI; Schulman 2006 *JAMA*) + L-arginine + HSV reactivation warning.
30. **Add ototoxic-drug deprescribing section §10.0.5.** Loop diuretic + chronic high-dose NSAID + chronic salicylate deprescribing — per-drug-class window, explicit "do not self-stop loop diuretic in CHF" warning, named alternatives where evidence supports.

## C. Citation-format primitive — the structural lock (P1)

The single biggest fix per ICLR. Without this, every other rigor fix is unanchored.

31. **🎯 [Top-20] Add structured per-claim citation block** behind the existing `#### Open the science` collapsible (skill v7). Mandatory fields per claim: PMID, DOI, journal, year, volume-issue-pages, study design, n, intervention, comparator, primary endpoint, effect size + 95% CI, follow-up duration, AMSTAR/GRADE/RoB, funding, COI, key limitation, retrieval date, applies-to population scoping, doctrine note. Example schema in ICLR §C1 and biomedical §2.4.
32. **Add structured ClassicalRef format** parallel to SourceRef. Fields: tradition, text, edition, translator, chapter, verse/section, page, language, publisher, publication year, commentary chain, cross-reference to AYUSH/CCRAS/Chinese Pharmacopoeia 2020 monograph. Worked example for Sushruta Uttara Tantra ch. 21 in ICLR §C2.
33. **Replace `gradeMix: [A, B, C, D, T, H]` aspirational union** with `gradeMixHistogram: { A: 2, B: 8, C: 15, T: 22, H: 6, X: 5 }` computed from claim-level grades. Three locations currently disagree (YAML, `data.ts:1187`, dossier body) — one source of truth.
34. **Add Funding / Sponsor-relationship badges** to industry-sponsored single-group RCT chains (Belcaro group, Schwabe, Horphag). Skill rubric automatic-downgrade rule: single-group industry-sponsored → demote one tier.
35. **Add per-claim freshness label** (already declared in `evidence.ts` `FRESHNESS_LABEL` but consumed nowhere). Derived from `last_verified` date.
36. **Numbered bibliography with PMID/DOI per entry** added as final §16 (or wherever the closing paradigm currently lives). Today's institutional bibliography (WHO, AYUSH, EMA, Cochrane authors) is preserved but separated from citation bibliography.
37. **Add `bridges:` field for outcome-extrapolation / subset-response / cross-condition mechanism transfers** (ICLR §C13). Captures the inferential step that the prose currently glosses as common sense.

## D. Grade rubric — operational not editorial (P1)

38. **🎯 [Top-20] Promote grade rubric from labels → operational decision tree** with conditions-all-required per tier (A: ≥2 RCTs or 1 Cochrane SR low RoB + clinically-meaningful effect size + replication; B: 1 well-powered low-RoB RCT + supporting mechanism, or Cochrane positive moderate certainty, or regulatory monograph backed by ≥1 RCT + automatic downgrade if single-group / industry-funded; etc). Worked example in ICLR §C7.
39. **Move grading from intervention level → claim level.** Every grade attaches to (intervention, outcome, population, context) tuple. Pycnogenol gets grade B for perimenopausal subgroup short-term TFI; grade D for generic chronic tinnitus.
40. **Promote single grade → compound `EfficacyGrade / HarmGrade`** (medical review Dim 5). Harm-axis veto rule: harm grade ≥ D → REJECT regardless of efficacy. Apply to kava, comfrey, chaparral, ephedra, kratom, lipoflavonoid, chronic high-dose niacin.
41. **Add Grade X explicitly to §13.7 "DO NOT RECOMMEND" rows.** Currently homeopathy, Lipoflavonoid, off-label nerve drugs, implanted VNS-routine, ignoring pulsatile-tinnitus, loud-noise-exposure are marked DO NOT RECOMMEND verbally but Tier column is not X. Rubric mandates X; surface red-line UI accent.
42. **Add `grade_rationale` field next to every grade.** Captures the specific evidence triggers + downgrade reasons + dissent threshold. Audited as a hover/click trace in UI.
43. **Add `tradition_inclusion_rationale` field per tradition section.** For homeopathy specifically: "Included per founder mandate; clinical evidence does not support active use for tinnitus per Simpson 1998 PMID 9923984; documented for transparency only." Make the doctrine load-bearing.
44. **Inter-rater κ sampling protocol.** 10% of all grade assignments across the atlas re-rated by a second reviewer blind to first grade. Cohen's κ logged per dossier and per grade-tier. Public.
45. **`grading_worked_examples.md`** at skill level. 6-8 borderline cases walked through, with disagreement-log capturing overturned grades.

## E. Reasoning chain auditability (P1)

46. **🎯 [Top-20] Add structured conflict-resolution log per intervention** with upgrade/downgrade thresholds and dissent note (biomedical §4.3). Ginkgo worked example: "If 2 new high-quality tinnitus RCTs n≥200 ≥10-point THI improvement at 12 weeks → upgrade to B. If Sereda 2024+ reaffirms null AND new ≥200-patient RCT <3-point THI effect → drop entirely. Dissent: a senior reviewer could legitimately argue Grade D given Cochrane null + indication-mismatched EMA monograph."
47. **Add mechanism evidence-ladder annotation `[rung (a)-(e)]`** per claim (biomedical §1.3). Ladder: (a) animal model, (b) ex vivo human cells, (c) healthy human imaging/PK, (d) condition-specific human imaging, (e) condition-specific clinical RCT. Magnesium-tinnitus: mechanism (b), delivery (UNKNOWN), outcome (e null).
48. **Add reasoning-trace side-panel** (ICLR §C12). On click/hover, renders: claim → primary source full metadata → what the source actually measured → bridge to claim → bridge to dose → bridge to mechanism. Lets a clinician audit in 60s.
49. **Per-claim version-controlled reasoning manifest changelog** (ICLR §C15). Autogenerated `tinnitus-support.changelog.md` showing per-claim grade/effect/recommendation/source diffs across refreshes. Makes "weekly research refresh" load-bearing.
50. **Replace `clampBullet` 80-char regex truncation** (in `lib/research.ts`) with an authored `ui_summary` field per claim. Current regex strips Cochrane-null caveats while preserving marketing-shape lead-ins. UI extraction silently degrades the honesty layer the dossier writes.

## F. Effect size + base rates + counterfactuals (P1)

51. **🎯 [Top-20] Add `effect:` block per quantitative claim** (ICLR §C17). Fields: metric, intervention-arm CI, comparator-arm CI, between-group difference + CI, p, clinically-meaningful threshold + MCID source, NNT, responder rates, plain-language interpretation.
52. **🎯 [Top-20] Add §11.7 "Placebo response in tinnitus — the honest baseline"** (ICLR §C18). Surface ~30% placebo responder rate (Duckert 1984, Dobie 1999, McKinney 2003). Render Ravi composite's 36-point drop with placebo-subtracted estimate overlay. Force every RCT-backed claim to render placebo-arm comparator alongside intervention-arm.
53. **🎯 [Top-20] Add counterfactual annotation discipline** (ICML §5 — proposed Rule 13). Every intervention claim surfaces its placebo / sham / natural-history base rate. Acute tinnitus: 50-80% spontaneous resolution within 6 months — must accompany "best window" framing. Sham appears 0 times in current dossier; mandate ≥1 sham/placebo/natural-history mention per major intervention section.
54. **Add 2 more case composites** covering prognosis spread (ICLR §C20). (a) Ravi favourable (existing); (b) brand-new noise-injury 72-hour window; (c) decades-old brain-amplification realistic-annoyance-shift-not-loudness-shift. Each with expected-effect distribution not point estimate.
55. **Replace point-estimate outcome promises with distributional framing.** "TFI drops 8-18" → "median TFI drop ~10-14 (IQR 4-22); responder rate 45-55% per Cima 2012; non-responder 20-30%; placebo ~6 points." Reads less marketable; wouldn't get a JAMA letter.
56. **Add intra-subject variability framing for self-tracking** (ICLR §C25). 0-10 daily slider has ±2 noise; use 7-day rolling median; MCID is 13 points for TFI. Don't act on single-day spikes.

## G. Protocol individualisation + deprescribing (P1)

57. **🎯 [Top-20] Restructure §8 combos as sub-type-aware decision tree** for 7 sub-types declared in §2.6 (ICLR §C22). One-size-fits-all combo grid contradicts dossier's own taxonomy. Pulsatile sub-type combo → "STOP, vascular imaging, no blood-flow agent until cleared." Brain-amplification → de-emphasise antioxidants, emphasise MBCT-T + sound enrichment + low-dose melatonin.
58. **🎯 [Top-20] Add §11.6 "Who this protocol is not for" exclusion list** (ICLR §C23). 10 explicit exclusions: pregnant/breastfeeding, active cancer, bipolar, mania/psychosis, CKD 4-5, warfarin/DOAC unstable INR, pulsatile, severe hearing loss without audiology workup, Ménière's, pediatric. Self-screen above §8.
59. **🎯 [Top-20] Add §12.6 "Deprescribing — when to drop each layer"** (ICLR §C24). Each supplement/intervention gets endpoint condition: Tebonin 8-12 wk stop-if-no-shift (already exemplar); NAC 3 mo continuous then acute-only after month 6; Pycnogenol 12 wk decision; Magnesium drop supplement if food intake hits 400 mg; Lion's Mane 12 wk decision; CoQ10 drop after 6 mo unless statin/confirmed-low; Melatonin reassess month 6; Vinpocetine 12-16 wk decision.
60. **Add interaction-magnitude grading** (ICLR §C21). Each interaction-matrix row tagged low/moderate/high. Ginkgo-warfarin = moderate; tonic-water quinine in active tinnitus = high. UpToDate-style.

## H. Audit trail + fabricated metrics + dashboards (P0)

61. **🎯 [Top-20] Hide fabricated "72 / 14 / 3" stats at `app/page.tsx:120-131` TODAY** + remove "Last evidence sweep: June 1, 2026" string literal at line 112 (NeurIPS §5, AI-Lab §2.3 Option B). Replace with qualitative tiles: "Sweeps Cochrane + EMA HMPC + AYUSH + TGA + NMPA + Health Canada NHP" / "Honest downgrades when evidence shifts" / "Sources cited inline in every section." Single most damaging AI-slop signal in product.
62. **🎯 [Top-20] Fix "Refreshed weekly" hero vs "Refreshed monthly" footer contradiction** (ICML §1).
63. **Make `ConversionStrip` `reviewer` prop required** (AI-Lab §2.4). Currently defaults to "Dr. Meera Iyer · BAMS · 12 yrs Bengaluru" on every journey page that forgets to override — silent substantiation risk. Either populate from a real `lib/reviewers.ts` table with `reviewedJourneys: string[]`, or crash at build for missing reviewer.
64. **Make `ConversionStrip` `lastRefresh` prop required** + sourced from journey/dossier YAML.
65. **Drop "30-day return / Pause-cancel anytime" claims from ConversionStrip** until the commerce backend exists (ICML §2). They are binding consumer claims.
66. **Drop "Day 30 meaningful change" claim from ConversionStrip** (ICML §2). For chronic tinnitus, 12-24 weeks is the honest timing. The Day 30 hook isn't supported by tinnitus literature.
67. **Fix "~12 minutes of effort a day" in ConversionStrip** (ICML §2). The actual full-protocol time budget (Combo 1+2+3 + Bhramari + MBCT + sound enrichment + tracking) is ~60 min. Either drop or honest-recalculate.
68. **Add `audit/` directory + per-claim append-only changelog format** (NeurIPS §5). Each claim records `at` / `by` / `from` / `to` / `reason` per change. Frozen, never overwritten.
69. **Stand up real weekly-sweep job** (NeurIPS §5, AI-Lab §2.3 Option A). Scheduled Cloud Run job: fetches Cochrane Tinnitus RSS + EMA HMPC monographs RSS + PubMed E-utilities per journey + AYUSH/CCRAS bulletin + TGA listings + NMPA changelog + Health Canada NHP updates. Writes `audit/weekly-sweep-YYYY-Wnn.json`. Home page stats compute from this file. Hide until file exists.
70. **Stand up `/audit` public page** rendering latest sweep report + per-dossier change log + diff per claim.

## I. Data model + extraction (P2)

71. **🎯 [Top-20] Replace inline italic citations with claim-graph YAML sibling** `research/tinnitus-support.claims.yml`. Schema: Source / Claim / Section / Dossier (NeurIPS §1.3). Markdown body becomes a rendering of structured objects, not the source of truth.
72. **Add `lib/extraction-contract.ts` typed enum** for the tab-bucketing key set (`timeline | combos | interactions | diet | suppliers`) currently implicit in `lib/research.ts` regex.
73. **Replace `_SUPPLEMENT_KEYWORDS` + `PRICING_RULES` 130-row regex tables in `generate-bundles.py`** with a `scripts/products.json` catalogue keyed by canonical product id. `(price, supplier, qualityScore, qualitySignals, evidenceGrade)` per entry. Bundle generator becomes ~200 lines of join, not 1,140 lines of regex.
74. **Introduce structured fences for §8 combos, §10.6 strictly-avoid, §13.7 evidence-tier rows, citations.** Three custom remark plugins parse them into typed JSON; `lib/research.ts` reads JSON not markdown. Collapses three parallel parsers to one.
75. **JSON Schema for YAML front matter** (Ajv or zod). Validate every dossier YAML at PR-open. Mandatory: `ailmentId` (kebab slug = filename), `lastUpdated` ISO-8601, `gradeMix` ⊆ EvidenceGrade, `lastReviewedBy`, `schemaVersion` semver-shaped.
76. **AST-level markdown parsing** via unified + remark + mdast. Replace `re.M` line scanning. Walk AST; assert §8 has exactly N combos; §13.7 has ≥40 rows; every claim has ≥1 citation node.
77. **Fail-loud not fail-quiet** in every extractor. Today `parseTimeline`, `parseCombos`, `parseStrictlyAvoid`, `parseDiet`, `parseSuppliers` all silent-fallback to placeholder text. Build must fail when parse fails.

## J. CI gating + Critic Audit promotion (P1)

78. **🎯 [Top-20] Promote `tools/critic-audit.mjs` to PR-blocking CI gate** `.github/workflows/dossier-gate.yml` (NeurIPS §4, AI-Lab §4.4). Run with `--strict --no-autofix` on every PR. Block merge on BLOCKER > 0.
79. **🎯 [Top-20] Remove silent auto-fix path at `critic-audit.mjs:168-187`.** Auto-stamping `pass1Complete:true / pass2Complete:true / pass3Complete:true` for any dossier >5k words fabricates ralph provenance. Auto-stamping `schemaVersion: v6.2.3` for missing values destroys provenance. Replace with `unknown-pre-v6.2.3` and fail CI.
80. **Fix Critic's 9 false-positive cross-link BLOCKERs** (NeurIPS §4). Currently flags "Cross-link with the tinnitus-support sister dossier" as leakage. Add `relatedDossiers: string[]` YAML field that Critic recognises as legitimate.
81. **Add C13 citation-format lint category to Critic** (AI-Lab §3.3 Tier 1, NeurIPS §4). Extract every italic citation; parse author-year tuples + PMIDs + DOIs; fail if dossier ≥10k words has <30 distinct citation tuples; warn if "DO NOT RECOMMEND" row has no Cochrane/SR citation backing.
82. **Add C14 extractor-fallback-detection category** (AI-Lab §4.4). Audit runs `extractTopShelf` against each dossier; flags dossiers where any card returns the generic-fallback placeholder string.
83. **Add C15 schemaVersion semver-range gate** (AI-Lab §4.4). Every dossier must declare `schemaVersion >= MIN_SCHEMA_VERSION` (env-pinned).
84. **Add C16 external-URL liveness check** + `--cached-30d` flag. HEAD-check every external URL in dossier + `lib/data.ts:sources`.
85. **Add C17 claim-effect-size presence check.** Every Grade A/B claim must declare an `effect:` block with at least one quantitative metric.
86. **Add C18 bundle-vs-dossier price reconciliation.** Bundle product price must fall within dossier's stated supplier price band. Today `tinnitus-quiet-90` charges $49 for Tebonin while dossier says $20-45.

## K. Reproducibility pack per dossier (P3)

87. **Add per-dossier reproducibility pack** (NeurIPS §3.3). Layout: `research/tinnitus-support/PROMPT.md` + `MODEL.json` (id+seed+temperature) + `SEED.json` (inputs) + `SOURCES/` (fetched PDFs) + `SOURCES.lock.json` (SHA-256 + Wayback URLs) + `CLAIMS.json` (typed `EvidenceClaim[]`) + `TRACE.jsonl` (tool calls) + `DIFF.json` (per-claim diff vs previous regen).
88. **Per-claim verification log** (NeurIPS §3 example block). Records `verifications: [{by, at, method, verdict}]` per claim; `nextVerificationDue`.
89. **Version-pin every claim, not the dossier.** `lastUpdated: 2026-05-30` global stamp is meaningless. Claim is the unit that ages.

## L. Retrieval-augmented citation verification (P3)

90. **Tier-1 mechanical citation lint** = item #81 above.
91. **Tier-2 retrieval-based citation resolution** (AI-Lab §3.3). PMID → PubMed eutils ESummary; DOI → Crossref `api.crossref.org/works/{doi}`; Cochrane → Cochrane Library RSS index; EMA HMPC → herbal monographs index; WHO → publication ID index. Local SQLite cache. Failed resolution → BLOCKER. Cached resolver pass over 78 dossiers should run <5 min.
92. **Tier-3 substantive claim verification with critic LLM** (AI-Lab §3.3). Second model reads each claim alongside resolved-paper abstract; answers structured prompt "does paper support magnitude+direction of claim as written?" Low-confidence → human review queue.
93. **Tradition-floor enforcement against canonical references.** Pick one canonical reference per tradition (Ayurveda → CCRAS digital + GRETIL + NIIMH; TCM → Chinese Pharmacopoeia 2020 + TCMID + chinese-text-project.org; Unani → Hamdard catalogue; Siddha → PCIMH; Tibetan → Men-Tsee-Khang; Homeopathy → Boericke + Allen + Kent). Every traditional citation must resolve. Replaces today's "≥2 entries each" word-count proxy.

## M. ADR + design-doc discipline (P2)

94. **ADR-001 Pluralist evidence model** — A/B/C/D/T/H/X meanings, T-vs-C axis warning, X operationalisation, DO NOT RECOMMEND convention, Cochrane honesty rule.
95. **ADR-002 Dossier schema** — YAML key spec + required sections + parsing tokens + forbidden tokens + word-count tiers. The single most important missing artefact.
96. **ADR-003 Extraction-layer interface contract** + typed `lib/extraction-contract.ts`.
97. **ADR-004 ConversionStrip & per-journey bundle contract** — kills acne-shows-vitiligo defect class structurally.
98. **ADR-005 Weekly evidence-refresh metric pipeline** — documents the pipeline that backs the home claim. If pipeline doesn't exist, ADR says "claim suppressed."
99. **ADR-006 Skill versioning + compatibility matrix** — `RULES.json` + `CHANGELOG.md` + `COMPATIBILITY.md` + deprecation policy + `tools/compliance-check.mjs`.

## N. Pharmacovigilance + QC + outcomes (P4 — structural)

100. **Real AE pipeline** (medical §3). AE intake form ≤2 clicks from product page + day-3/14/30/60/90 prompted check-ins with structured AE section + trigger-keyword auto-flag (bleeding, jaundice, ataxia, suicidal, palpitations, blackout, ...) + count-based then disproportionality signal detection + public AE board at `/safety/reports` + clinician hand-off pathway + WHO-UMC VigiBase cross-ref for known-AE molecules. Plus: `supplements.json` + `interactions.json` relational corpus + COA registry partnership (Eurofins / Informed-Sport / TGA-listed manufacturer audit) + lot-number capture + recall ingestion pipeline (EMA/MHRA/TGA/Health Canada/AYUSH RSS) + customer-submitted batch test surface + Saper-2008-style heavy-metal-honesty paragraph per tradition + Karna purana eardrum-integrity otoscopy gate + opt-in self-reported TFI/THI/PSQI tracking → quarterly real-world cohort publication → named human reviewer board with conflict-of-interest disclosure.

---

## Top-20 explicit list

The 20 highest-leverage items to apply to tinnitus exemplar this sprint, in dependency order:

| # | Backlog ID | Item | Effort |
|---|---|---|---|
| 1 | I61 | Hide fabricated 72/14/3 stats on home page | 30 min |
| 2 | I14 | Add SSHL 72-hour warning to top of tinnitus dossier | 1 hour |
| 3 | I15 | Add K2 MK7 + warfarin cross-dossier gate to tinnitus | 1 hour |
| 4 | I16 | Add eGFR-gated Magnesium dose table + add eGFR to §11.3 lab panel | 1 hour |
| 5 | I1 | Fix Cima 2012 country (Maastricht NL not Bristol UK) | 15 min |
| 6 | I2 | Fix Megwalu 2006 country (St Louis MO USA not Singapore) | 15 min |
| 7 | I3 | Fix Hurtuk 2011 country (Columbus OH USA not Israel) | 15 min |
| 8 | I4 | Fix TENT-A2 year (2022 not 2024) | 15 min |
| 9 | I5 | Update Hilton 2013 → Sereda 2022 Cochrane re-issue | 15 min |
| 10 | I6 | Untangle Attias 1994 (noise-protection ≠ chronic tinnitus) | 30 min |
| 11 | I7 | Fix EMA Ginkgo monograph indication conflation | 30 min |
| 12 | I8 | Fix Lenire "7-9 of 10" trial/outcome/timepoint conflation | 45 min |
| 13 | I9 | Downgrade Bhramari B → H | 15 min |
| 14 | I17 | Add 12-question safety quiz gate before checkout | 4 hours |
| 15 | I18 | Add Life-Stage Gate Table | 2 hours |
| 16 | I79 | Remove Critic auto-fix path (lines 168-187) | 30 min |
| 17 | I52 | Add §11.7 placebo response baseline (~30%) | 1 hour |
| 18 | I53 | Add counterfactual / natural-history annotation (acute tinnitus 50-80% spontaneous) | 1 hour |
| 19 | I57 | Restructure §8 combos as sub-type-aware (7 sub-types) | 4 hours |
| 20 | I58 + I59 | Add §11.6 exclusions + §12.6 deprescribing | 2 hours |

**Total Top-20 estimated effort: ~22 hours** — achievable in a focused sprint while preserving doctrine.

**Deferred to skill v7 + multi-week structural work** (not in Top-20):
- I31 Structured per-claim citation primitive (3+ weeks for tinnitus + back-fill discipline)
- I38 Operational grade rubric decision tree (1 week + 2 weeks re-grade)
- I46 Conflict-resolution log per intervention (1 week)
- I47 Mechanism evidence-ladder annotation (1 week)
- I71 Claim-graph YAML sibling per dossier (2-3 weeks per dossier exemplar then back-fill)
- I78 Critic CI gate (2 days but blocks on dependencies)
- I94-I99 ADR-001 through ADR-006 (week 2 of harden plan)
- I91 Tier-2 PubMed/Crossref/Cochrane resolution (week 5)
- I100 Pharmacovigilance + QC + cohort registry (the big multi-month structural lift)

---

## How this list moves the verdicts

- **ICLR (not publishable today)** → Top-20 + I31 + I38 = borderline accept. Without structured claim primitive (I31) the verdict stays revise.
- **NeurIPS (reject today)** → Top-20 + I69 + I78 + I79 + I71 = borderline accept. The fabricated dashboard fix (I61) closes the rejection-deciding finding.
- **Medical (storefront hold today)** → Top-20 items 14-15 + I63 + I65 + I100 → storefront unblock. The Top-20 alone re-opens the storefront gate IF I65 (drop unsubstantiated 30-day return + pause/cancel claims) and I63 (reviewer prop) also land in the same sprint.
- **Biomedical (major revision today)** → I1-I12 + I31 + I46 + I47 = conditional accept. The 6 factual errors + structured citation blocks are the load-bearing moves.
- **AI-Lab (major revision today)** → I61 + I63-I65 + I78 + I79 + I81-I83 + ADR-005 (I98) = borderline accept. Plus ADR-001 through ADR-006.
- **ICML (3/10 today)** → I52 + I53 + I57 + Top-20 + I31 → ~6/10. Counterfactual annotation (Rule 13 in skill v7) is the highest-leverage marketing-claim fix.

---

## What founder asks doctors to verify before scaling to other 77 journeys

After Top-20 lands on tinnitus, the proof-point dossier should be reviewable on:

1. SSHL 72-hour warning wording — clinically accurate? Audiologist-friendly?
2. eGFR-gated Magnesium dose table — KDIGO-consistent? Safe for the dialysis population?
3. K2 + warfarin gate wording — sufficient for a primary-care reader?
4. Life-stage gate table — exclusions complete? Any false-restriction that frustrates legitimate users?
5. §11.7 placebo response framing — calibrated correctly?
6. §11.6 exclusions list — clinically sound + readable?
7. §12.6 deprescribing path — defensible per supplement?
8. Sub-type-aware §8 combos — clinical-pharmacology-defensible?
9. Lenire restatement — accurate ITT vs completer framing?
10. EMA Ginkgo monograph restatement — accurate as biomedical reviewers will read it?

The founder takes these 10 review points to one Ayurveda BAMS practitioner, one ENT/audiology specialist, one clinical pharmacist, and one Cochrane-methodology-trained reviewer. Sign-off on tinnitus → scale Top-20 pattern to remaining 77 journeys via skill v7.

---

**Reviewer panel collective verdict:** the content is meaningfully stronger than the harness and the surface claims around it. The path from "AI-slop perception" to "defensible-pluralist-evidence reality" is mechanical — six weeks of focused harness work + one tinnitus exemplar reauthored against skill v7. The doctrine survives intact; the apparatus is what changes.
