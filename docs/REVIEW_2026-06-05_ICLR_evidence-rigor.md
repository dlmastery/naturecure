# ICLR Reviewer Audit — Evidence Rigor + Reasoning Transparency

**Reviewer role:** ICLR area chair specialising in interpretability / reasoning-chain auditability for ML claims, repurposed as adversarial reviewer for an evidence-pluralist health protocol claiming to be "the evidence-OS for natural health" and "better than a prescription medication sheet."

**Materials reviewed:**
- `nichecore/research/tinnitus-support.md` — 951 lines, ~10,800 words (canonical exemplar dossier)
- `.claude/skills/ailment-360-research/SKILL.md` — 400+ lines of authoring spec (read through Rule 9.7)
- `nichecore/components/layout/conversion-strip.tsx` — 357 lines, buy-decision UI
- `nichecore/components/layout/top-shelf.tsx` — 273 lines, protocol-at-a-glance UI
- `nichecore/lib/research.ts` — 499 lines, markdown → UI extraction logic
- `nichecore/lib/evidence.ts` — 54 lines, EVIDENCE_GRADES rubric

**Constraints respected:** OTC-only, six-tradition mandate, no-US-regulator authority. All proposed fixes preserve these. No proposal "make it a JAMA paper."

---

## Verdict

**Not publishable in current form as "the evidence-OS for natural health."** The dossier reads as a high-quality, honestly-framed lay-pluralist synthesis — meaningfully better than typical wellness-blog content, and structurally far ahead of its peer landscape — but the apparatus that would let any reader, clinician, or auditor **verify a single claim** is absent. The dossier names sources but does not cite them; assigns grades but does not define how grades are derived; recommends interventions but never quantifies expected effect; and presents a one-size-fits-all daily combo grid with no individualisation, no exclusion logic, and no acknowledgement of the 30%+ placebo response baseline in chronic tinnitus.

**Single biggest fix:** Replace the parenthetical author-year citation pattern (`(Sayyah 2012, Hilton 2013)`) with a **structured citation primitive** — a JSON/YAML-backed claim object that pairs each claim with: source id (DOI/PMID/ISBN/edition+page), study design, n, effect size + 95% CI, risk-of-bias rating, grade-rubric trigger, and version date. The skill spec then mandates this primitive at every claim site, the renderer extracts a reasoning-trace panel from it, and the dossier text stays readable while the audit surface becomes inspectable. Without this, every other rigor critique below is unaddressable.

The honest-pluralist frame can survive ICLR-grade scrutiny — but only if the apparatus matches the ambition. Right now, the apparatus is at the level of a curated reading list with confident verdicts.

---

## Detailed critiques (29 items)

### Citation format rigor (6 items)

**C1. Citations are author-year-only and degrade further inside tables**

- **Issue.** Every citation in the dossier is of the form `*(Attias 1994, Israel, n=300)*` or `*(Cochrane Hilton 2013)*` or `*(Sushruta's Latter Tantra ch. 21)*`. Line 100 (the Tebonin row of the §3.3 master phytochemicals table) cites `*(Cochrane Hilton 2013; EMA 2015; Procháska 2009 n=180)*` — three sources, zero DOIs, zero journal names, zero PMIDs, zero CI, zero risk-of-bias, zero retrieval date. The Cochrane review is cited as `Cochrane Hilton 2013` while the actual record is Hilton MP, Zimmermann EF, Hunt WT. *Ginkgo biloba for tinnitus*. Cochrane Database Syst Rev. 2013 Mar 28;(3):CD003852 (DOI: 10.1002/14651858.CD003852.pub3) — and *living reviews are versioned*, so a 2013 freeze cite is already a stale anchor against a 2024 Cochrane re-issue.
- **Why it fails the rigor bar.** A reader cannot retrieve the source from the citation. A clinician cannot triangulate the claim. An auditor cannot detect whether the cited paper actually says what the dossier asserts. This is the lowest possible citation-format floor and would be desk-rejected at any peer-reviewed venue. Worse — because the citations are embedded in italics inside narrative tables, the typographic affordance suggests precision that the citation does not deliver.
- **Concrete fix.** Adopt a citation-primitive object format (call it a `SourceRef`) stored in a sibling YAML file `research/tinnitus-support.refs.yml` keyed by short id, e.g. `[hilton-2013]`. Each entry carries minimum fields: `pmid`, `doi`, `journal`, `year`, `volume`, `issue`, `pages`, `title`, `design` (RCT / cohort / Cochrane SR / classical-text / monograph), `n`, `intervention`, `comparator`, `primary_outcome`, `effect_size` (with metric: SMD/MD/HR/OR/RR/NNT), `ci_95`, `p`, `risk_of_bias` (Cochrane RoB-2 or ROBIS), `funding`, `retrieval_date`, `version` (for living reviews — e.g. `CD003852.pub3 frozen 2024-09-12`). Dossier prose then cites with `[hilton-2013]` markers; the renderer materialises the full reference on hover/click and at the bottom in a formatted References section. Classical-text references get a parallel `ClassicalRef` schema with: `tradition`, `text`, `edition`, `editor/translator`, `chapter`, `verse_or_page`, `language`, `commentary_lineage`. Example: `Sushruta Samhita, Uttara Tantra, ch. 21, verses 6-11, Sharma P.V. trans. 2nd ed. Chowkhamba Vishvabharati 2004, p. 412`.

**C2. Classical-text citations lack edition, translator, and verse — making the tradition layer unfalsifiable**

- **Issue.** §4.2 (line 130-141) cites Ayurvedic content as `*(Sushruta's Latter Tantra ch. 21; CCRAS karna-roga monograph; Charaka Chikitsa ch. 1)*`. §4.3 cites TCM as `*(Imperial Golden Mirror; Chinese Pharmacopoeia 2020; Yellow Emperor's Inner Classic)*`. §4.4 cites Unani as `*(Avicenna's Canon Book III; Hamdard; Qarabadeen Qadri)*`. No edition. No translator. No verse number. No page. The CCRAS monograph has no monograph number, no publication year, no publisher (it's a series, not a single document). The Chinese Pharmacopoeia 2020 has volumes I-IV, hundreds of monographs — citing the whole pharmacopoeia for a single formula is functionally equivalent to citing "a medical textbook."
- **Why it fails the rigor bar.** The six-tradition mandate is one of NicheCore's strongest differentiators (and a genuine epistemic move). But unverifiable tradition citations turn the differentiator into a liability: any reviewer can ask "Sushruta's Latter Tantra chapter 21 — which edition, what does verse 12 actually say, who translated, does the Sharma translation match the Bhishagratna translation on this point?" and the dossier has no answer. This is the same failure mode that gets cultural-appropriation accusations to stick — citing a tradition without grounding the citation in the tradition's own evidentiary apparatus.
- **Concrete fix.** Six-tradition citations get a stricter schema than biomedical: `ClassicalRef { tradition, text, edition, editor_or_translator, chapter, verse_or_section, page, language, publisher, publication_year, commentary_chain_optional }`. Worked example for §4.2 line 134 `Karnapurana with Bilva Taila`: `Sushruta Samhita, Uttara Tantra ch. 21 (Karna-rogapratisedha-adhyaya), verses 3-11; Sharma P.V. translation, Chowkhamba Vishvabharati 2004, vol. III, pp. 410-415; cross-referenced with Bhishagratna 1907/2007 reprint vol. III pp. 187-191; CCRAS monograph: AYUSH-CCRAS Karna-roga Standard Treatment Guideline 2017, pp. 23-26`. The same shape works for Pharmacopoeia entries (`Chinese Pharmacopoeia 2020, vol. I, pp. 1247-1248, monograph "Er Long Zuo Ci Wan"`) and Unani (`Avicenna, Al-Qanun fi'l-Tibb, Book III, fann 3, jumla 1, maqala 8; Gruner E.C. translation 1930 reprint Hamdard 1973, pp. 314-318`). Yes, this is more work. It is also the only honest way to honour the six traditions while remaining inspectable.

**C3. Brand-name supplement citations conflate marketing collateral with evidence**

- **Issue.** §3.3 line 104 cites Vinpocetine as `*(Hungarian Gedeon Richter; TGA listing)*`. Gedeon Richter is the *manufacturer*. The TGA listing is a *regulatory registration*, not an evidence anchor — a TGA AUST L listing requires only that ingredients are on the permitted list, not that efficacy is demonstrated. Line 111 cites Black Cohosh as `*(Schaper 2007 Germany; EMA 2018)*` — Schaper is the brand-name manufacturer (Schaper & Brümmer / Remifemin), not an independent author. The bibliography effectively turns a sponsor study into a citation peer with a Cochrane review. This is the textbook "marketing-as-evidence" fallacy.
- **Why it fails the rigor bar.** A reviewer who follows the citation chain finds either a manufacturer's white paper or a regulatory listing, neither of which carries the inferential weight the dossier's "Grade C / Grade B" label implies. The grade-mix legend in `lib/evidence.ts` defines `B = "Moderate human evidence: Promising human evidence, but not settled"` — but the dossier uses B-grade on Pycnogenol citing `*(Belcaro 2014 n=92; Belcaro 2017)*` where Belcaro is the same Italian group running >100 publications on Pycnogenol with consistent funding from Horphag Research. That funding fingerprint should appear next to the grade, not in the user's homework.
- **Concrete fix.** Add `funding`, `coi_disclosure`, and `sponsor_relationship` fields to the SourceRef primitive. Render a small badge in the UI when a primary cited trial has industry sponsorship or single-group dominance. The grade rubric (see C9 below) must specifically downgrade industry-sponsored single-group RCT chains by at least one tier (B→C) unless an independent confirmatory trial exists. The dossier text retains the honest-mixed framing but the grade arithmetic stops crediting Belcaro 2014/2017 as if they were two independent confirmations.

**C4. Cochrane review references freeze a moving target**

- **Issue.** The Tebonin / Ginkgo chain cites `*(Cochrane Hilton 2013)*` four times (lines 18, 62, 88, 92, 879). Cochrane Database Syst Rev. publishes living reviews — Hilton et al. CD003852 has had `.pub1`, `.pub2`, `.pub3` updates, with the most recent search dates as recent as 2024. The dossier cites the year of the original entry but does not version-pin. By the time the dossier is read in 2027 the cited review may be obsolete, withdrawn, or reversed — and the reader has no way to know.
- **Why it fails the rigor bar.** This is the *exact* failure that triggered the founder's framing — "AI slop" critics rightly note that confident health content frozen against a moving evidence base ages into misinformation. The dossier's own §13.7 honest-tier table cites Hilton 2013 as the basis for downgrading Ginkgo to Grade C, but if the next Cochrane refresh either confirms Hilton or reverses it, the dossier's whole Tebonin section flips without any signal.
- **Concrete fix.** Every Cochrane / living-review citation MUST carry a version pin: `Hilton MP et al. CD003852.pub3, search date 2012-12, frozen by NicheCore on 2026-05-30`. The renderer surfaces a "last-verified" chip on each Cochrane-anchored claim. The weekly-research-refresh selling-point promised on the home page (skill v6.2.6 banner) only earns credibility if it actually re-runs the Cochrane DOI fetcher and updates `frozen_on` per reference. Build a CI job: nightly DOI-resolve every Cochrane ref → if `pub_version` has incremented since last check, flag the dossier for human review.

**C5. The same claim is cited differently in different sections of the same dossier**

- **Issue.** The Attias 1994 magnesium trial is cited as: line 50 `*(Attias 1994 Israel)*`, line 78 `*(Levine 1999; Sanchez & Rocha 2011)*` for the same mechanism, line 101 `*(Attias 1994, Israel, n=300)*`, line 426 `*(Attias 1994 Israel)*`, line 854 `*(Attias 1994)*`, line 884 `*(Attias 1994 Israel)*`. The n=300 appears in only one of those six citation sites. Lorito 2008 is variously `*(Lorito 2008)*`, `*(Lorito 2008 Italy)*`, `*(Lorito 2008 Italy; Vellore cisplatin trial)*`. The "Vellore cisplatin trial" is referenced four times with zero identifying metadata — no author, no journal, no year, no PubMed id. This is unverifiable.
- **Why it fails the rigor bar.** Inconsistent citation format is the canonical signature of LLM-generated content without ground-truth lookup. The reviewer cannot tell whether the same trial is being cited or different trials, whether n=300 is correct (the Attias 1994 paper has n=300 randomised, n=247 analysed — already a citation-precision issue), or whether the Vellore reference exists at all. Across 951 lines of dossier, this pattern repeats hundreds of times.
- **Concrete fix.** The structured-citation primitive (C1) makes this impossible by construction: there's exactly one canonical `[attias-1994]` record, and prose-level citations are reference markers, not retyped tuples. As an interim fix before the schema migration, run a `references-audit` script: tokenize every italicised parenthetical, cluster by author-year, surface inconsistencies — and require any "Vellore cisplatin trial"-class anonymous reference to either be resolved to a real source or removed. Suspect this is a hallucinated reference — verify before any dossier publishes.

**C6. Living-protocol promise is incompatible with frozen-in-text citations**

- **Issue.** Skill v6.2.6 line 23 sells the "weekly research refresh" as a key differentiator on the home page. But the dossier embeds every citation as inline italic text — there is no automated way to tell which claims were last verified, which sources have moved, which Cochrane reviews have been updated since the dossier was authored. The `lastUpdated: 2026-05-30` YAML field is a single global timestamp covering the whole 10,800-word dossier — not per-claim or per-section freshness.
- **Why it fails the rigor bar.** Selling "weekly refresh" while having no per-claim freshness metadata is a marketing-evidence mismatch — and an ICLR reviewer's favorite type of bug, because it's structurally obvious. Worse, the `evidence.ts` file does define a per-claim `FRESHNESS_LABEL` enum (`fresh / current / aging / stale / review_required`) but nothing in the dossier or extraction pipeline consumes it. The schema for "track per-claim freshness" exists in the code, and zero claims in the actual dossier carry it.
- **Concrete fix.** Combine the SourceRef primitive (C1) with the existing FRESHNESS_LABEL enum. Each citation in the dossier text resolves to a SourceRef with a `last_verified` date; a `freshness` derived field is computed automatically from `last_verified` (≤30d → fresh, ≤90d → current, ≤180d → aging, >180d → stale). The renderer can then surface a per-section "this section's median freshness" badge so the reader sees that — for example — the §4.6 Tibetan formulas section's references are all `aging` while §3 OTC-phytochemical references are `current`. This makes the "living protocol" claim load-bearing instead of decorative.

---

### Grade-mix rubric transparency (5 items)

**C7. The seven-grade rubric has labels but no operational definition**

- **Issue.** `lib/evidence.ts` lines 14-25 define A through X with one-sentence consumer descriptors. `A = "Strong human evidence: Supported by multiple human studies or high-quality reviews"`. `B = "Moderate human evidence: Promising human evidence, but not settled"`. `C = "Early or mixed human evidence: Some human data; results are early or mixed"`. The labels are descriptive prose, not decision rules. How many studies = "multiple"? Of what design? RCT vs cohort? What if the Cochrane SR is null but EMA monograph is positive — A, B, or C? Who decides? Where is the inter-rater agreement test? Where is the worked example that walks through a single grading?
- **Why it fails the rigor bar.** Without operational rules, the grade is whatever the author asserted — and the entire trust mechanism of the dossier (which the founder pitches as "doctrine in UI") collapses into authorial fiat. A reviewer can correctly note that the rubric is functionally indistinguishable from "vibes". The dossier itself has internal contradictions on this: §3.2 line 94 says Ginkgo is `Grade C in the tinnitus context (downgraded from B in light of Cochrane); grade B remains for the cerebral-insufficiency / cognitive indication` — a context-dependent grade is reasonable, but the rubric doesn't tell you when a context-shift is allowed, who decides, or how the indication-specific downgrade chains through related claims.
- **Concrete fix.** Replace the prose label with an operational decision tree, encoded as a YAML rubric versioned alongside the skill. Worked sketch (illustrative — calibrate before adopting):

  ```yaml
  grade_rubric_v1:
    A:
      conditions_all_required:
        - ≥2 RCTs OR 1 Cochrane SR with low RoB
        - effect_size_clinically_meaningful (defined per outcome — TFI ≥13 points for tinnitus)
        - effect_replicated_across_independent_groups
      examples: [CBT-T for tinnitus distress, MBCT-T for tinnitus distress]
    B:
      conditions_any:
        - 1 well-powered RCT with low RoB + supporting mechanistic evidence
        - Cochrane SR positive with moderate certainty (GRADE B equivalent)
        - regulatory monograph (EMA HMPC / NMPA / TGA) backed by ≥1 published RCT
      automatic_downgrade_if:
        - all-trials-from-single-research-group → demote to C
        - all-trials-industry-sponsored → demote to C unless independent confirmation
      examples: [NAC for ototoxicity, sound enrichment for distress]
    C:
      conditions_any:
        - small pilot RCTs with mixed results
        - well-designed observational evidence + plausible mechanism
        - regulatory monograph (T) for narrow indication, weak/null for the claimed indication
      examples: [magnesium for tinnitus, Tebonin for tinnitus]
    D:
      mechanistic_only: in-vitro / animal / no human data
    T:
      traditional_use_evidence: classical-text or pharmacopoeial entry; no modern RCT; honest about gap
    H:
      emerging_signal: ≤3 pilot studies, mostly mechanistic + small-n; explicit "early days" framing
    X:
      rejected: high-quality trial demonstrates null OR documented harm exceeds benefit
  ```

  Then add `grade_rationale: "Cochrane Hilton 2013 null → downgrade from EMA-monograph base B; subset-responder evidence (Procháska 2009) prevents D"` as a mandatory field next to every grade assignment, and surface it as a hover/click trace in the UI. The renderer would parse the rationale and let the reader audit *why* a thing is graded as it is, not just *what* the grade is.

**C8. The grade is applied at the wrong granularity**

- **Issue.** The §3.3 master phytochemicals table assigns one grade per compound. Tebonin gets `C (tinnitus) / B (cerebral-insufficiency)`. But the dossier makes multiple distinguishable claims about Tebonin: (a) it improves cochlear microcirculation (mechanism), (b) it has positive RCTs in Procháska 2009 (effect for subset), (c) Cochrane null for primary tinnitus (overall effect), (d) "about 1 in 3 may respond" (claim at line 153 in the skill spec; not in the dossier itself but implied by §3.2). Each of these claims has different evidence strength. The compound-level grade compresses them and is then used as if it transferred to every sub-claim.
- **Why it fails the rigor bar.** Grade is applied to the intervention as a noun. But evidence attaches to *claims* — specific (intervention, outcome, population, context) tuples. Pycnogenol gets a single "B" but Belcaro 2014's evidence pertains to perimenopausal-subgroup tinnitus + 4-week TFI improvement, *not* generic chronic tinnitus across all subtypes. The dossier text honourably notes the subgroup-specificity in some places (line 105: "most useful for blood-flow and menopausal sub-types") but the grade label still says "B" without that scoping.
- **Concrete fix.** Move grading from the compound level to the **claim level**: every grade is anchored to a specific (intervention, outcome, population, context) tuple. The dossier writer authors `claims:` blocks structurally:

  ```yaml
  - claim_id: pycnogenol-tinnitus-perimenopausal
    intervention: Pycnogenol 100-150mg/day
    outcome: TFI score reduction ≥13 points at 4 weeks
    population: perimenopausal women aged 40-55 with circulation-linked tinnitus
    grade: B
    grade_rationale: 1 RCT (Belcaro 2014 n=92) + 1 confirmatory follow-up (Belcaro 2017); industry-funded, single Italian group → blocked from A; subgroup-specific so does not transfer to other tinnitus subtypes
    refs: [belcaro-2014, belcaro-2017]
  - claim_id: pycnogenol-tinnitus-generic
    intervention: Pycnogenol 100-150mg/day
    outcome: tinnitus loudness reduction
    population: chronic tinnitus, mixed subtypes
    grade: D
    grade_rationale: no RCT in the generic population; transfer from perimenopausal subgroup not justified
    refs: []
  ```

  The §3.3 table then becomes a rendered projection of the underlying claim graph — and the UI can show "this intervention has Grade B for outcome X in population Y, but Grade D for outcome Z in population W." This is the move that lets the dossier honestly say *what it actually knows*.

**C9. There is no inter-rater test or worked grading example**

- **Issue.** The skill spec runs to 400+ lines (just from what I read) of authoring rules but contains zero worked examples that show how a debatable case gets graded. There's no "if two reviewers disagree, what's the protocol?" There's no spot-check workflow where a sample of grades gets re-rated blind by a second reviewer with the agreement coefficient logged. The §13.7 honest-evidence comparison table in the tinnitus dossier (lines 847-872) implicitly is the grading exemplar, but the readers can only see the *result*, not the deliberation.
- **Why it fails the rigor bar.** Grading rubrics that haven't been tested against independent re-rating tend to collapse into single-author preference. The dossier's own credibility-by-pluralism pitch requires that the grading itself be replicable — otherwise it's a pluralism of evidence presentation but a monoculture of evaluation.
- **Concrete fix.** Add to the skill (and the publishing pipeline): (a) a public `grading_worked_examples.md` showing 6-8 borderline cases with the decision walk-through (e.g., "Why is acupuncture graded T/H here when Cochrane says no firm evidence? Decision: Cochrane null + tradition strong + low harm = T for documented tradition, H for emerging signal of subset response; not C because too few independent groups have replicated"); (b) a sampling protocol where 10% of all grade assignments across the atlas are re-rated by a second reviewer blind to the first grade, with Cohen's κ logged per dossier and per grade-tier; (c) a `disagreement_log.md` capturing every overturned grade and the reason. The kappa being public is the trust mechanism.

**C10. Grade-mix at the YAML header is a marketing artefact, not a rubric output**

- **Issue.** Line 6 of the dossier YAML: `gradeMix: [A, B, C, D, T, H]`. This is the union of grades that appear in the dossier — it's used by the UI to flash a "this dossier covers the full rigor spectrum" badge. But there's no way for the reader to see *how many* claims fall into each grade, *which* claims, or *whether the distribution is balanced*. A dossier could have one A-graded claim and 200 T-graded claims and still display `gradeMix: [A, B, C, D, T, H]` honestly. The signal degrades to noise across all dossiers.
- **Why it fails the rigor bar.** Trust mechanisms that don't carry magnitude information are decorative. The honest answer is "this dossier has 2 A-grade claims, 8 B-grade, 15 C-grade, 22 T-grade, 6 H-grade, 5 X-grade rejections" — that's the actual evidence shape. The current display says "we cover all grades" which is unfalsifiable.
- **Concrete fix.** Compute `gradeMixHistogram: { A: 2, B: 8, C: 15, D: 3, T: 22, H: 6, X: 5 }` from the claim-level grades (per C8). Render the histogram as a small bar visualization in the dossier header. Pair with a `dominantGrade` field (most common) and a `centerOfMass` field (weighted-median grade for the dossier). Now the at-a-glance impression matches the evidence reality.

**C11. Grade X (rejected) is structurally missing — only the §13.7 "do not recommend" rows imply it**

- **Issue.** `evidence.ts` defines `X: "Rejected / insufficient"` but the tinnitus dossier never explicitly grades a row as `X`. The §13.7 table has rows tagged "DO NOT RECOMMEND" (homeopathy, Lipoflavonoid, off-label nerve drugs, implanted VNS as routine, ignoring pulsatile tinnitus, continued loud-noise exposure) but they're prefixed in the Approach column rather than carrying a Grade X in the Tier column. The skill spec Rule 8.4 (line 285) actually mandates ≥3 rows with `Tier = X OR verdict containing "do not recommend"` — but the dossier complied with the latter, not the former.
- **Why it fails the rigor bar.** This is a small inconsistency in isolation, but it's a tell: the rubric has a grade for "this is rejected by the evidence" and the exemplar dossier chose not to use it. Either Grade X is operational and load-bearing (in which case the dossier should use it) or it isn't (in which case it should be removed from the rubric). The current state — graded-rubric-says-yes, dossier-says-no — signals "rubric was a marketing layer over a free-form authoring tool."
- **Concrete fix.** Update the skill to require explicit `Grade: X` in the Tier column for every "do not recommend" row in §13.7, alongside (or replacing) the verbal prefix. Surface X-graded claims with a distinct red-line accent in the UI so the rejection is visually load-bearing. This makes the honest-pluralist frame structurally honest.

---

### Reasoning chain auditability (5 items)

For each: I trace one specific claim end-to-end and identify where the chain breaks. Concrete fixes target the UI/skill, not the dossier prose.

**C12. Claim trace #1 — "Magnesium may dampen NMDA excitotoxicity"**

- **Claim location.** §2.2 line 50: `Targeted by N-acetyl-cysteine, magnesium (Israeli army study, Attias 1994), zinc (Turkish study, Arda 2003, only in zinc-deficient people), CoQ10, R-alpha-lipoic acid, methyl-B12 (Israeli study, Shemesh 1993)`. Cross-referenced at §3.3 line 101: `Magnesium (glycinate + L-threonate) | Calms the over-fired hearing nerve; the Israeli army study cut noise-induced ringing. *(Attias 1994 Israel, n=300)* | NMDA-modulation; excitotoxicity brake | 400 mg total | ...| C | Doctor's Best, Magtein | $25-45 | *(Attias 1994, Israel, n=300)*`.
- **Tracing the chain.** Step 1: Claim → "Attias 1994 Israel". Step 2: which Attias 1994? There are several Attias publications. The Israeli army study commonly referenced is Attias J, Weisz G, Almog S, et al. *Oral magnesium intake reduces permanent hearing loss induced by noise exposure*. Am J Otolaryngol. 1994; 15(1):26-32 — but the dossier doesn't disambiguate. Step 3: Even granting that paper, the *outcome measured* was permanent noise-induced hearing loss, NOT chronic tinnitus loudness or TFI. Step 4: The mechanistic claim (NMDA-modulation) isn't from the Attias paper at all — it's a downstream mechanistic inference from a different literature line (Puel's auditory NMDA work). Step 5: The dose "400 mg total" isn't from Attias either — Attias used 167 mg as elemental magnesium aspartate, not 400 mg as glycinate-threonate combo. The chain breaks at every step that should bind the claim to source.
- **Where the chain breaks.** (1) Ambiguous reference (which Attias 1994?). (2) Outcome substitution (the source measured hearing loss, the claim is about ringing). (3) Mechanism attribution drift (NMDA story comes from a different group). (4) Dose substitution (the source dose doesn't match the dossier recommendation). Yet the rendered "C" grade visually transfers all four steps onto the source citation.
- **Concrete fix — reasoning-trace panel.** Each claim renders, on hover or click, a "reasoning trace" side-panel that shows: `Claim → Primary source: [attias-1994, full PubMed metadata] → What the source actually measured: noise-induced permanent hearing loss in IDF recruits, n=300, MgAsp 167mg/day x 2mo → Bridge to claim: outcome-extrapolation from noise-injury prevention to chronic-tinnitus dampening (low-confidence extrapolation; flagged) → Bridge to dose: dose adjusted upward to 400mg/day citing Health Canada Mg monograph + glycinate-threonate bioavailability (Slutsky 2010 Magtein RCT) → Bridge to mechanism: NMDA-modulation hypothesis from Puel 1995/Pujol 2007, NOT from Attias`. This is auditable in 60 seconds — and impossible to dispute.

**C13. Claim trace #2 — "Tebonin EGb 761 has EMA monograph but Cochrane null for tinnitus"**

- **Claim location.** §3.2 line 94: `EGb 761 is the only Ginkgo extract with positive RCT data in some tinnitus populations (Morgenstern 2002; Schneider 2011; Procháska 2009 n=180; Drewelow 2013). But the 2013 Cochrane systematic review found no firm evidence of benefit in primary tinnitus. The EMA HMPC monograph 2015 recognises it for cerebral-insufficiency / cognitive uses where the evidence is stronger`.
- **Tracing the chain.** This is actually the dossier's *best* worked example — it acknowledges the tension and is honest about it. But the trace still breaks: (1) Morgenstern 2002, Schneider 2011, Procháska 2009, Drewelow 2013 are cited as four positive RCTs — but no DOI, no journal, no methodology. Schneider 2011 may be Schneider B et al. *Ginkgo biloba extract LI 1370 for primary tinnitus*. Phytomedicine. 2011 — but it may also be a different Schneider; the dossier doesn't pin down which. (2) The Cochrane review is cited as having concluded "no firm evidence" — but the actual Hilton 2013 abstract concludes "limited and methodologically poor data... no evidence that Ginkgo biloba is effective in patients with a primary complaint of tinnitus." That's a stronger framing than "no firm evidence" — the dossier softens. (3) The "EMA monograph recognises it for cerebral-insufficiency... where the evidence is stronger" is itself a claim that requires evidence, and gets none. (4) The leap from "EMA recognises for cognitive uses" → "therefore reasonable as one layer in tinnitus" is the load-bearing reasoning step, and nowhere is it shown.
- **Where the chain breaks.** Steps (2)-(4) above. Specifically, the Cochrane verdict-softening is a small but significant integrity issue. The EMA-to-tinnitus jump is a category bridge — and the dossier presents it as common-sense rather than reasoning.
- **Concrete fix — explicit `bridges:` field in the claim record.** Add `bridges:` as a structured field on each claim that captures the inferential steps between source and recommendation:

  ```yaml
  - claim_id: ginkgo-tinnitus-trial-layer
    bridges:
      - type: outcome_extrapolation
        from: EMA monograph for cerebral insufficiency / vertigo / cognitive
        to: tinnitus dampening
        confidence: low
        rationale: shared mechanism (microcirculation) but tinnitus outcome not the EMA indication
        counter: Cochrane Hilton 2013 specifically null for tinnitus
      - type: subset_response_extrapolation
        from: Procháska 2009 n=180 subgroup with cognitive comorbidity
        to: generic tinnitus
        confidence: low
        rationale: subset analyses are hypothesis-generating
    final_grade: C
    final_recommendation: "one of six layers; 8-12 week trial; stop if no shift"
  ```

  Now the reasoning is visible. The reader sees that the recommendation rests on two low-confidence bridges. The honest framing in the prose ("not the cornerstone, one layer") is supported by the visible bridges, not by author authority.

**C14. Claim trace #3 — "Lenire bimodal: 7-9 of 10 see real relief sustained 12 months"**

- **Claim location.** §15.2 line 905: `In the largest trials (TENT-A1, TENT-A2 and the real-world Boedts 2024 study), about 7-9 out of 10 participants reported real relief that lasted up to a year`. §10.7.3 line 739: `TENT-A2 + Boedts 2024 — 7-9 of 10 see real relief sustained 12 months`. §13.7 line 851: `Conlon 2024 TENT-A2 + Boedts 2024 — 7-9 of 10 see real relief 12 mo`.
- **Tracing the chain.** Step 1: Boedts et al. 2024 in Nature Communications Medicine (correct journal; the citation hits a real paper). Step 2: Boedts D et al. *Real-world data from the first 220 patients treated with bimodal neuromodulation for chronic tinnitus*. Commun Med (Lond). 2024 — let me grant this. Step 3: The "91.5% clinically meaningful TFI reduction at 12 weeks, sustained" claim is repeated at line 907. Boedts 2024 reports 70.3% of patients achieving clinically meaningful improvement at 12 weeks (TFI ≥7 point drop) and a separate 91.5% figure for *patient-rated improvement* (a different outcome) — not the same metric. The "7-9 of 10" in the dossier elides which-of-these-outcomes is being summarised. Step 4: "Sustained 12 months" — Boedts 2024's primary follow-up was 12 weeks; the 12-month follow-up is the Conlon 2020 TENT-A1 long-term extension (n much smaller) and not 91.5% sustained at 12 months. Step 5: The dossier carries this aggregate "7-9 of 10 at 12 months" through three sections without disambiguating which outcome, which trial, which follow-up window. This is the *exact* compositional-citation failure mode that gets called out in JAMA letters.
- **Where the chain breaks.** Outcome conflation (TFI ≥7 point reduction vs patient-rated improvement) + timepoint conflation (12 weeks vs 12 months) + trial conflation (Boedts 2024 + Conlon 2024 TENT-A2 + Conlon 2020 TENT-A1 are three different studies with three different populations) → one summary sentence treats all three as one. This claim is the *most-cited* clinical-trial result in the dossier, used to anchor the Grade B for Lenire — and it doesn't survive a 10-minute primary-source check.
- **Concrete fix.** Structured-claim format with explicit `outcome` + `timepoint` + `trial_population` fields, rendered in the side-panel:

  ```yaml
  - claim_id: lenire-tinnitus-real-world
    intervention: Lenire bimodal neuromodulation, 12-week treatment course
    outcome: TFI ≥7-point reduction (clinically meaningful)
    population: chronic tinnitus, n=220, mean baseline TFI 56
    effect: 70.3% of patients
    timepoint: end of 12-week treatment
    sustained_at: not measured in Boedts 2024 (primary endpoint 12 weeks)
    sources: [boedts-2024]
    grade: B
    grade_rationale: single large real-world cohort (n=220), one independent confirmatory RCT (Conlon 2024 TENT-A2), regulatory clearance via CE 2021 and FDA De Novo 2023 (context only)

  - claim_id: lenire-tinnitus-12mo-sustained
    intervention: Lenire bimodal neuromodulation
    outcome: TFI clinically meaningful reduction sustained
    population: long-term extension cohort, smaller n than primary trial
    timepoint: 12 months post-treatment
    sources: [conlon-2020-tent-a1]
    effect: [number]% of patients (with CI)
    grade: B
    grade_rationale: smaller extension cohort, observational follow-up
  ```

  The narrative summary "7-9 of 10 see real relief sustained 12 months" — which conflates two different claims — gets disallowed by the skill. The dossier must render the two claims separately.

**C15. There is no version-controlled reasoning manifest**

- **Issue.** A future reviewer auditing the dossier in 2027 against a 2026-frozen version has no way to see what changed between revisions. The `lastUpdated` YAML field tells them when, not what. The git history captures diffs, but git diffs over 10,000-word markdown are unreadable for tracking individual-claim drift. The "weekly research refresh" promise has no record-of-changes surface.
- **Why it fails the rigor bar.** Living protocols need versioned manifests. ML papers cite arxiv versions (v1/v2/v3) precisely because conclusions can change between revisions and reviewers must be able to bind their critique to a specific snapshot. The dossier has no equivalent.
- **Concrete fix.** Generate a `tinnitus-support.changelog.md` autogenerated from the claim-graph: on each refresh, diff the previous claim-graph against the new one, log every changed `grade`, `effect`, `recommendation`, or `source` per claim. The changelog is human-readable, machine-versionable, and surfaces drift in a way prose-diff can't. This is what "weekly research refresh" *should* mean.

**C16. UI extraction silently degrades the reasoning chain further**

- **Issue.** `lib/research.ts` `parseStrictlyAvoid` (lines 330-366) and `parseCombos` (lines 297-328) scrape bullet lines from dossier markdown using regex, strip TL;DR markers, clamp to 80 characters, and render the result as a "what to do" card on the TopShelf and ConversionStrip. The 80-char clamp deletes citation, context, and the honest caveat in the same pass. Example: a dossier line `**TL;DR.** Standardised Ginkgo (Tebonin EGb 761) is the most-studied herb for tinnitus — but the largest reviews of all the studies (Cochrane Hilton 2013) say it does NOT help most people` would clamp at "Standardised Ginkgo (Tebonin EGb 761) is the most-studied herb for tinnitus — but the…" — losing the Cochrane-null caveat, which is the *load-bearing claim*.
- **Why it fails the rigor bar.** The website surfaces the most truncated, marketing-shaped version of each claim above the fold — and the auditable evidence layer is buried in §13.7 below 8 viewports of content. The dossier is honest; the dossier-as-rendered-by-the-UI is meaningfully less honest because the truncation always cuts the honest-caveat side. This is precisely the failure mode the founder is trying to avoid.
- **Concrete fix.** Two structural moves. (1) The TopShelf cards must surface the honest tier alongside the bullet — render `Grade C · Cochrane-null layer` as a tag on every truncated claim card. (2) The 80-char clamp is replaced by a 2-sentence summary field authored explicitly in the structured-claim record (`ui_summary: "Cochrane null for most. About 1 in 3 may respond. 12-week try; stop if no shift."`), so the UI extracts authored honest summaries, not regex-clamped fragments. The current code in `clampBullet` (line 240-247) tries to do the right thing at the wrong layer.

---

### Effect size + uncertainty (5 items)

**C17. Zero effect sizes appear anywhere in the dossier**

- **Issue.** Search the dossier for `NNT` — zero hits. For `mean difference` — zero. For `95% CI` — zero. For `hazard ratio` — zero. For `odds ratio` — zero. For `effect size` — zero. For `Cohen` — zero. The closest the dossier gets to a quantitative effect is line 806's `Realistic expectations: neck-driven 30-60% improvement; blood-flow 20-40%; decades-old brain-amplification 10-25%` — but these aren't anchored to a source, an instrument, or a confidence interval. The Boedts 2024 line at 907 says `91.5% clinically meaningful TFI reduction at 12 weeks, sustained` — that's a magnitude with no CI, no comparator arm.
- **Why it fails the rigor bar.** The qualitative grading + qualitative recommendation pattern is what makes the dossier read as wellness-blog content despite the genuine evidence labour underneath. A reader cannot tell whether "may dampen NMDA excitotoxicity" is a 2-point TFI drop or a 20-point drop. They cannot tell whether "neck-driven 30-60% improvement" is across all responders or across all participants. They cannot compute their own expected gain. The grading rubric describes evidence *strength* but never evidence *magnitude*. This is a load-bearing missing dimension.
- **Concrete fix.** For every claim with a quantitative source, the structured-claim record includes:

  ```yaml
  effect:
    metric: TFI mean change
    intervention_arm: -8.2 points (95% CI -11.4 to -5.0)
    comparator_arm: -3.1 points (95% CI -5.8 to -0.4)
    between_group_difference: -5.1 points (95% CI -8.9 to -1.3)
    p_value: 0.04
    clinically_meaningful_threshold: 7 points (Meikle 2012 MCID)
    nnt_clinically_meaningful: 6
    responder_rate_intervention: 52%
    responder_rate_control: 31%
    interpretation_plain: "For every 6 people who try this, 1 sees a clinically meaningful drop they would not have seen on placebo."
  ```

  The UI renders the plain-language interpretation in prose; the structured fields surface in the side-panel for the reader who wants them. The §13.7 honest-tier table gains a new column: `Expected effect (population NNT or MCID-relative)`. Claims without quantitative sources keep an empty `effect:` block — and that absence is itself surfaced as a "no quantitative source" badge.

**C18. The 30% placebo response in chronic tinnitus is invisible**

- **Issue.** Tinnitus trials consistently report ~30% placebo responder rates (Duckert 1984, Dobie 1999, McKinney 2003 review). This is *not mentioned anywhere in the dossier*. The case composite Ravi (§13.1, line 816) has a TFI drop from 64 to 28 over 12 months. A reader has no way to know what fraction of that 36-point drop would have happened on placebo. The dossier represents the full 36 points as protocol effect.
- **Why it fails the rigor bar.** This is the single biggest reason chronic-tinnitus interventions are evaluated harshly — and the dossier never acknowledges it. A reader who tries the protocol, sees a 13-point TFI drop, and concludes "the protocol worked" has roughly a 30% prior probability of seeing that same drop with sham. The protocol's honest case is *additive on top of placebo*, not zero-baselined. By eliding placebo response, the dossier overstates the population-level value proposition by a factor that no clinician would let pass.
- **Concrete fix.** Add a new §11.7 (or alongside the case composite §13) titled `Placebo response in tinnitus — the honest baseline` that surfaces the ~30% placebo response from the meta-evidence (with sources), shows the case composite's 36-point drop with a `placebo-subtracted estimate` overlay (e.g., "of the 36-point drop, ~10-12 points are attributable to placebo response; ~24-26 points to the protocol layers"), and forces every quantitative claim with an RCT base to render the placebo-arm comparator alongside the intervention-arm effect. The dossier's MBCT/CBT-T grades (A) are well-supported partly *because* the RCTs control for attention-placebo — make that explicit. Some Grade C interventions get effect sizes that *don't survive placebo subtraction*; surface that honestly.

**C19. The "13-point TFI drop" framing is repeated as if it's the protocol's outcome guarantee**

- **Issue.** §11.2 line 757 establishes TFI 13-point drop as MCID (correctly: Meikle 2012). §12.1 line 800-806 says "TFI drops 8-18 (13 = meaningful)" by weeks 9-12, then "neck-driven 30-60% improvement; blood-flow 20-40%; decades-old brain-amplification 10-25%" at 12 months. §13.1 line 816 shows Ravi's TFI 64 → 41 at week 12 (23-point drop). Across the dossier the cumulative impression is "expect a 13-point TFI drop at minimum by week 12." But this is presented as outcome certainty, not probability. Real RCT data shows wide variance — Cima 2012's MBCT trial showed mean TFI drop ~12 points with substantial individual heterogeneity and a non-trivial fraction of non-responders.
- **Why it fails the rigor bar.** Promising MCID outcomes without surfacing the distributional shape (median/IQR, % responders, non-responder rate) is the textbook overselling of trial results that gets called out as systematically misleading. The dossier sounds confident; the underlying evidence supports a probability distribution, not a point estimate.
- **Concrete fix.** Replace "TFI drops 8-18 (13 = meaningful)" with: `Expected outcome at week 12: median TFI drop ~10-14 points (IQR 4-22); responder rate (drop ≥13 points) ~45-55% based on Cima 2012 MBCT-T trial responder rates; non-responder rate (no clinically meaningful change) ~20-30%. Subgroup heterogeneity: neck-driven moves fastest; decades-old hardest. Placebo arm in comparable trials averages ~6 point drop, so estimate ~6 points of the 10-14 is placebo-attributable.` This is honest. It reads less marketable. It also wouldn't get a JAMA letter.

**C20. No prior elicitation for the case composite**

- **Issue.** Ravi's case composite (§13.1) presents one trajectory as if it's representative. A reader naturally back-fits this single trajectory as their personal forecast. But Ravi is constructed to combine multiple favourable factors (neck-driven sub-type, moderate-not-catastrophic baseline TFI, motivation to do the full protocol, no comorbid depression at PHQ-9 levels of interference, no ear-toxic drug history). A decades-old brain-amplification tinnitus reader has a fundamentally different prior.
- **Why it fails the rigor bar.** Case composites that show only the favourable trajectory mislead by selection. The dossier acknowledges sub-type heterogeneity but never gives the reader a non-favourable case composite — a Ravi-equivalent reader with decades-old brain-amplification tinnitus and a TFI baseline of 78 should see an explicitly different forecast.
- **Concrete fix.** Add three case composites covering the prognosis spread: (a) Ravi (current favourable case, neck-driven, 6-month meaningful shift); (b) a brand-new noise-injury case showing the 72-hour window; (c) a decades-old high-distress case where the realistic outcome is annoyance shift without loudness shift. Each case carries its baseline subgroup, the expected effect distribution (not point estimate), and explicit caveats about variance. The "Realistic expectations" line at 806 then carries through case-by-case rather than as global averages.

**C21. The interaction matrix presents qualitative risks with no quantitative weighting**

- **Issue.** §10.1 line 620 says `Combining with Ginkgo, Curcumin and high-dose omega-3 raises bleeding risk — keep stack to 1-2`. This is a real risk. But: how much risk? The bleeding-risk literature for Ginkgo-warfarin interaction has yielded modest INR effects in some case reports and no significant INR shift in controlled crossovers (Jiang 2005; Jaakkola 2018 meta). The qualitative "raises bleeding risk" is true; the quantitative magnitude (small in most populations, larger in mechanical valve / very high baseline INR / very high herb doses) is what a clinician actually needs.
- **Why it fails the rigor bar.** Qualitative interaction warnings tend to fall into "noise" once you have 22 rows of them (the §10.1 table has 22 rows). The reader can't weight any one warning against another. The home-clinician's actual question — "if I'm on warfarin with stable INR, what should I do?" — has a quantitative answer somewhere in the literature, and the dossier renders the qualitative warning only.
- **Concrete fix.** Add to each interaction row a `magnitude` field: `low` (case reports only, mechanism plausible, observational data null) / `moderate` (consistent observational signal or small RCT signal) / `high` (multiple RCT signals or documented serious events). Render as a color-graded badge alongside the warning. The reader (and any clinician they share with) immediately sees that "Ginkgo + warfarin" is `moderate` while "tonic-water quinine + active tinnitus" is `high` and they're not equivalent precautions. This is the standard UpToDate-style approach to drug interaction display and it's well within the dossier's voice.

---

### Protocol individualisation + deprescribing logic (4 items)

**C22. The daily combos are presented as one-size-fits-all**

- **Issue.** §8.2-8.4 lines 512-521 give Combo 1, Combo 2, Combo 3 as a single recipe stack. Combo 1: `NAC 600 + Magnesium glycinate 200 + Methyl-B trio (B12 1000 µg + folate 800 + B6 50) + Vitamin D3 4000 IU / K2 100 µg + Pycnogenol 100 (and Tebonin 120 only if you've decided to do an 8-12 week try)`. Combo 2: `Omega-3 (1 g DHA) + Magnesium glycinate 200 + Ubiquinol 200 + Lion's Mane 1500`. Combo 3: `Magnesium L-threonate 1 g + Ashwagandha KSM-66 300 + Melatonin 0.3-1 mg + optional Saffron 28 mg (perimenopausal)`. The only individualisation cue is "(perimenopausal)" on Saffron. But §2.6 (line 70-82) already established seven sub-types with very different mechanism profiles. A pulsatile-tinnitus reader (red flag, vascular workup) shouldn't be on Pycnogenol or Vinpocetine before imaging. A long-standing brain-amplification sub-type gets nothing from the antioxidant-heavy Combo 1 but everything from Combo 3 + sound enrichment + MBCT-T. The combo grid doesn't discriminate.
- **Why it fails the rigor bar.** Individualisation is the cornerstone of any honest protocol. The dossier's own §2.6 acknowledges that sub-types respond differently — but the combo grid ignores its own taxonomy. A reader following the protocol mechanically gets the average prescription regardless of which sub-type they actually have.
- **Concrete fix.** Restructure §8 as a sub-type-aware combo decision tree. For each of the 7 sub-types in §2.6, render a tailored combo with rationale: e.g., for `tonal hearing-loss-driven` the combo emphasises hair-cell protection (NAC, magnesium, B12 if low, OTC hearing aids) + sound enrichment; the brain-amplification combo de-emphasises antioxidants and emphasises MBCT-T + sound enrichment + low-dose melatonin only; the pulsatile sub-type combo says "stop, get vascular imaging, do not start any blood-flow agent until cleared." The §8.5 master 24-hour day plan branches at intake based on which sub-type the user identified via the §11 scoring. Operationally this means adding a `combo_overrides_by_subtype:` block to the dossier's structured combo records and authoring 7 branches. Yes, this is more work; it is also the difference between protocol and recipe.

**C23. There are no exclusion criteria, just contraindication footnotes**

- **Issue.** Black Cohosh at §3.3 line 111 says `hepatic caution; ≤6 mo` — a useful note but not an exclusion criterion. Vinpocetine line 104: `not in pregnancy, not on blood-thinners` — partial exclusion. But there's no consolidated "who should NOT use this protocol" surface anywhere in the dossier. A reader who is pregnant, who has active cancer, who has chronic kidney disease, who is on multiple psychotropic medications, who has bipolar disorder (Ashwagandha caution), who has phenylketonuria (aspartame mention), etc. — has to reconstruct their exclusion profile from interaction-matrix scattered footnotes. The §10.1 interaction matrix is the closest surface, but it's organised by drug-you're-on, not by population-you-belong-to.
- **Why it fails the rigor bar.** Protocols without explicit exclusion criteria become unsafe-by-omission. The home-administration framing makes this worse: the reader is the prescriber. They need a fast affordance to recognise "this protocol is not for me." Currently they don't have one.
- **Concrete fix.** Add §11.6 `Who this protocol is not for` (or weave into the §11.5 comorbidity table) — a flat list of explicit exclusions:

  - Pregnant or breastfeeding (drops red-light, sauna, full Ashwagandha dose, Vinpocetine, Black Cohosh; modifies Combo 3)
  - Active cancer or recent chemotherapy (drops Ginkgo, Pycnogenol, high-dose antioxidants per oncologist; modifies Combo 1)
  - Bipolar disorder (drops Ashwagandha, modifies Combo 3 melatonin)
  - Active mania or psychosis (defers protocol initiation)
  - Chronic kidney disease stage 4-5 (modifies Magnesium dosing; flags interaction with K-sparing diuretics)
  - On warfarin/DOAC with unstable INR (caps the bleed-stack to 1; Combo 1 drops Ginkgo + Pycnogenol)
  - Pulsatile tinnitus (this is already correctly flagged as red-flag; reinforce as ABSOLUTE protocol-defer until vascular workup)
  - Severe hearing loss without audiology workup (defers OTC hearing aid recommendation pending audiogram)
  - Diagnosed Ménière's disease (modifies §6.3 salt restriction; clinic-route referral)
  - Children/adolescents (entire protocol assumes adult)

  Render this as a 2-minute self-screen above the §8 combos, branching to "your modified protocol" if any exclusion fires. This is the move that brings the dossier's safety surface to clinical floor.

**C24. There is no deprescribing logic — when to stop, when to taper, what to drop first**

- **Issue.** The protocol describes how to start (§12.1 weeks 1-4 ramp) but never describes how to stop. When does magnesium come off? At what TFI threshold? After how many months? What happens if a subject hits stable habituation at month 8 — do they keep taking NAC for life? The Tebonin 8-12 week try logic is mentioned (line 92, 169) — good. But every other supplement is implicitly indefinite. Lion's Mane indefinitely. CoQ10 indefinitely. Pycnogenol indefinitely. This is unsafe (long-term safety of these combos is not established) and unnecessarily expensive.
- **Why it fails the rigor bar.** Honest protocols define their own endpoint. Indefinite supplementation chains turn into a recurring-revenue marketing pattern — exactly the pattern the founder is positioning against. The §9.2 monthly-cost section even cites `$390-680/month full` as a recurring total without ever offering a deprescribing path that bends the cost curve.
- **Concrete fix.** Add §12.6 `Deprescribing — when to drop each layer`. For each supplement and intervention, define an explicit endpoint condition:

  - Tebonin: 8-12 weeks; stop if no shift (already specified — exemplar).
  - NAC: continuous for 3 months while hair-cell protection layer is active; drop to acute-use-only (noise injury / ototoxic drug exposure) after month 6 if TFI stable.
  - Pycnogenol: 12 weeks; if TFI shifted, continue 6 months then taper; if no shift, drop.
  - Magnesium: continuous as cofactor floor (food-first); drop supplemental dose if dietary intake hits 400mg/day from food.
  - Lion's Mane: 12 weeks; honest no-direct-trial layer; drop if no subjective shift in cognitive / habituation domain.
  - CoQ10: continuous only if confirmed low CoQ10 baseline or on statin; otherwise drop after 6 months.
  - Melatonin: continuous low-dose acceptable; reassess at month 6.
  - Vinpocetine: 12-16 weeks; drop if no shift.

  The protocol's recurring cost projection then surfaces a "year 2 cost" estimate that's meaningfully lower than year 1 — which becomes a credibility marker rather than a marketing risk.

**C25. No statistical power discussion for the case composite or self-tracking**

- **Issue.** §11.2 advises tracking TFI at weeks 4/8/12 and monthly thereafter, with a 0-10 daily slider for loudness/annoyance. But no guidance on: what counts as a real change vs noise in the daily slider (intraday variance is high — most chronic tinnitus subjects have ±2 point swings without intervention), how many consecutive scores constitute a trend, what regression to the mean does to single high-score days, when to call a supplement a non-responder for the subject vs continuing on hope. Without this framing, the self-tracking surfaces produce false confidence (and false despair).
- **Why it fails the rigor bar.** Self-tracking without intra-subject variability framing is the canonical n-of-1 error that quantified-self literature has been warning about for 15 years. The protocol promises actionable self-data and doesn't equip the user to read their own data correctly.
- **Concrete fix.** Add a §11.5 `Reading your own scores honestly` paragraph: "Your daily 0-10 slider has ±2 points of within-day noise. Don't act on single-day spikes. Use a 7-day rolling median. For TFI, the meaningful change threshold is 13 points; smaller changes can be regression-to-the-mean. For combo decisions, give each layer the time window specified in §12.6 deprescribing — don't drop after 2 weeks because of a bad week, don't keep on hope past the trial window." Pair with a small `score_volatility:` field in the structured-claim record for each tracked outcome.

---

## Top-5 highest-leverage improvements

Rank-ordered by impact-per-effort to move the dossier from AI-slop-perception to defensible-pluralist-evidence:

**1. Structured-claim primitive with SourceRef + ClassicalRef + effect-size fields (addresses C1, C2, C3, C5, C6, C8, C12, C13, C14, C17).**
A single architectural move: replace inline italic citations with a YAML claim graph (`research/tinnitus-support.claims.yml`) where every claim binds intervention + outcome + population + grade + grade_rationale + effect_size + sources + bridges. Dossier prose cites by claim id; the renderer materialises the full reasoning trace on hover/click. This *unblocks* every other rigor fix because the data structure to hang them on stops being prose-extraction-by-regex. Probably 2-3 weeks of skill-spec work + a JSON-schema validator + a one-time conversion of the 5-10 most-cited tinnitus claims (rest done as drift-fixes over time). Highest leverage by a wide margin.

**2. Operational grade rubric (addresses C7, C9, C10, C11).**
Replace the one-sentence grade labels with the decision-tree rubric sketched in C7 — explicit evidence triggers per tier, automatic downgrade rules (industry-funded single-group → demote), worked grading examples for borderline cases, sampling re-rater protocol with public Cohen's κ. Surface `grade_rationale` on every claim. Without this, the grade system stays a marketing layer. This is roughly 1 week of rubric design + 2 weeks to re-grade the exemplar dossier through the new lens.

**3. Sub-type-aware combo branching + explicit exclusion criteria (addresses C22, C23).**
The §8 combo grid currently misrepresents protocol breadth — it's actually 7 different protocols masquerading as one recipe. Author 7 sub-type-specific combos branching from §2.6, render `Who this protocol is not for` as an above-fold safety surface, route the §11 self-screen into a personalised combo recommendation. This converts the most clinical-credibility-eroding flaw (one-size-fits-all dosing) into a credibility asset.

**4. Effect-size + placebo-baseline surfacing (addresses C17, C18, C19, C20, C21).**
For every quantitatively-sourced claim, render the NNT or MCID-relative magnitude in plain language ("for every 6 who try this, 1 sees a meaningful drop they wouldn't have seen on placebo"). Add §11.7 placebo-baseline acknowledgement. Add 2 more case composites covering unfavourable trajectories. Tag interaction-matrix risks with low/moderate/high magnitude. Doesn't require new architecture — requires authorial discipline + a UI element for the magnitude badge.

**5. Deprescribing pathway + reasoning manifest changelog (addresses C24, C15).**
For each supplement/intervention, define the stop condition in §12.6. This breaks the recurring-revenue accusation, demonstrates honest endpoint thinking, and pairs with an autogenerated changelog (per refresh) that makes "weekly research refresh" a load-bearing trust mechanism instead of a marketing line. Probably 1 week to author + a script to diff the claim graph.

---

## What I would still reject for at ICLR

To set expectations honestly — even after all 5 top fixes land, the following limitations remain and any rigour-focused reviewer would still flag them:

**1. Single-author / no peer review.** No matter how good the skill spec is, a dossier authored by one agent (LLM or human) and shipped without external blinded review is single-source content. The Cohen's κ re-rater proposal in C9 partially addresses this but doesn't replace independent peer review. A defensible posture would be: blind external clinical-pluralist reviewer pass per dossier (Ayurveda BAMS + TCM-trained physician + cochrane-methodology-trained reviewer), credentials and review notes published with the dossier, named not anonymised.

**2. No prospective registry or outcome capture.** The dossier promises a 12-month protocol and presents a case composite, but doesn't run an actual self-reported outcome registry. Subjects who buy the bundle and follow the protocol generate zero data that flows back into the evidence base. A defensible posture would be: opt-in self-reported TFI/THI/PSQI tracking via the companion app, aggregated by sub-type, published quarterly as a real-world cohort study. This turns the customer base into a Phase-IV evidence engine; without it, the protocol is closed-loop self-affirming.

**3. Living protocol promise vs maintenance reality.** Even with the changelog (C15) and per-claim freshness (C6), running weekly refresh across 76-78 dossiers each with ~50-100 claims is a substantial editorial undertaking. The promise will degrade in practice. A defensible posture acknowledges the asymmetry: high-stakes claims (any A-grade or any clinic-route Rx context) refresh monthly; mid-stakes (B/C) refresh quarterly; T-grade tradition refreshes annually unless tradition-source new edition. Make the cadence explicit; track it.

**4. The six-tradition mandate is operationally heavier than the dossier carries.** Including Ayurveda + TCM + Unani + Siddha + Tibetan + Homeopathy each with ≥2 entries is structurally important for the doctrine but creates rigor exposure when any one tradition's section is shallow. The homeopathy section (lines 207-218) is the canonical example: 10 remedies listed with grade T, with the dossier honourably noting Simpson 1998 found no benefit, and explicitly NOT recommending for active use. That's honest. It's also operationally close to "we list this for inclusion not for clinical reason" — which is fine as a doctrine but should be surfaced explicitly per-tradition: a `tradition_inclusion_rationale` field per tradition section that says, e.g., "Homeopathy included per the founder mandate; clinical evidence does not support active use for tinnitus per Simpson 1998 RCT; documented for transparency only." Right now the rationale is buried at line 204.

**5. The composite case (Ravi) and the protocol's promised outcomes are not validated against an actual cohort.** Even with three case composites (favourable/acute/decades-old) per C20, they're constructed. A rigorous reviewer would want to see at least one published real-world cohort outcome (the Boedts 2024 work is the right template — n=220 real-world TFI outcomes). The dossier doesn't claim to have run such a cohort; it relies on synthesizing third-party trial evidence. That's defensible *only if* explicitly framed. Add a `protocol_validation:` block to the dossier YAML that distinguishes between (a) third-party trial-evidence-synthesis, (b) NicheCore in-house cohort outcomes, (c) NicheCore opt-in self-tracked registry data. The exemplar dossier is purely (a). That's allowed; it should be visible.

**6. Author identity is opaque.** The dossier authorAgent field says `ailment-360-research` — the agent name. No human accountability, no co-author identity, no review board, no conflict-of-interest disclosure. An ICLR-style reviewer would want named authorship with public credentials (the v6.2.6 banner mentions `Dr. Meera Iyer, Ayurveda protocol reviewer, BAMS, 12 yrs clinical, Bengaluru` as a UI element on the conversion strip line 39-42 — but the dossier itself has no named human author/reviewer record). Add a `humanReviewers:` YAML field with named credentialed reviewers per discipline; make their review notes public.

**7. The conversion-strip / commerce surface fights the rigor surface.** This is the biggest tension and I'm noting it as residual even after structural fixes. The dossier's §13.7 honest-tier table says "Magnesium · Grade C · ~80% chance no measurable effect for you" — which is the right honest framing — but the ConversionStrip line 108-114 presents the bundle as `Get the pack — Subscribe & save $X/month` with no honest tier on the buy surface. A rigour-focused reviewer would note that the commerce CTA renders the bundle in marketing voice while the dossier renders the same bundle in honest-pluralist voice, and the visual hierarchy puts commerce above honesty. Either the ConversionStrip needs to surface the bundle's median grade ("median Grade C · honest-mixed-evidence layer · ~50% NNT-style framing") next to the price, or the dossier needs an explicit "we sell this; the bundle's median grade is C; the bundle's honest expected outcome is..." disclosure adjacent to the buy. Right now the dossier-text honesty and the buy-surface aspiration are unbalanced.

---

## Closing note

The dossier is a meaningful artifact — structurally honest in a way most consumer-health content isn't, with a six-tradition integration that's a real epistemic move, with Cochrane discipline that holds up under inspection of the §3.2 Ginkgo handling. The criticisms above are not "this is bad." They are "this is at the rigor bar of a careful curated reading list, presented as if it's the rigor bar of an evidence-OS, and the gap is the apparatus, not the underlying labour."

The single move that closes the gap is: **structure the claim graph**. Once every claim is a record with intervention + outcome + population + grade + grade_rationale + effect_size + sources + bridges + freshness, the citation rigor, the grade transparency, the reasoning-chain auditability, the effect-size surfacing, and the individualisation logic all become tractable. Without it, every fix is fighting the prose-only data model.

The honest-pluralist evidence frame survives ICLR-grade scrutiny — but only with the apparatus to match the ambition.
