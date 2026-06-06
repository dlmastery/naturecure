# NicheCore — NeurIPS Reproducibility-Track Review

**Reviewer:** R2 — NeurIPS Reproducibility Track
**Date:** 2026-06-05
**Submission:** "NicheCore: an evidence-OS for natural-medicine protocols" (Tinnitus-Support dossier + Ailment-360 skill + Next 16 rendering app + Critic Audit tooling)
**Materials reviewed:**

- `nichecore/research/tinnitus-support.md`
- `.claude/skills/ailment-360-research/SKILL.md` (v6.2.7)
- `nichecore/lib/research.ts` (markdown extraction)
- `nichecore/lib/data.ts` (journey atlas + bundle inventory)
- `nichecore/lib/types.ts` (data model)
- `nichecore/lib/evidence.ts` (`EVIDENCE_GRADES`, allowed/forbidden wording)
- `nichecore/components/layout/conversion-strip.tsx`, `top-shelf.tsx`
- `nichecore/scripts/generate-bundles.py` (1,140 LOC bundle regen)
- `nichecore/scripts/apply-bundles.py` (regex splice into `lib/data.ts` + `page.tsx`)
- `tools/critic-audit.mjs` (562 LOC)
- `docs/CRITIC_AUDIT_2026-06-02.md` (most recent audit output)
- `nichecore/app/page.tsx` (home stat-strip)

---

## Verdict

**Reject — not reproducible. Not defensible as a data system.**

There is real craft here: the writing is graceful, the editorial doctrine is unusually honest (Cochrane null surfacing, Ginkgo downgraded in `tinnitus-support.md:90-94`), and the `tools/critic-audit.mjs` script is a legitimate first-draft sanity gate. As a **content product** I would rate this above most consumer-health surfaces on the open web.

As a **reproducibility-track artefact** it fails on every load-bearing axis a NeurIPS reviewer must check.

1. There is no canonical schema for what a "dossier," a "claim," a "citation," or a "source" is. The data model in `lib/types.ts` (`EvidenceClaim`, `SourceRef`, `Ingredient`) is declared but *not used by the dossier corpus* — dossiers are free-form markdown with ad-hoc YAML and inline parenthetical citations. The TypeScript types are decorative.
2. Extraction of structured signal (combos, suppliers, timelines, strictly-avoid lists, supplement names + doses) is done by 700+ lines of multi-fallback regex with `re.I` flags and silent failure paths. `lib/research.ts`, `scripts/generate-bundles.py`, and the per-card parsers in `top-shelf.tsx`/`research.ts` are three parallel regex universes that disagree about what a "combo" or a "supplier" is.
3. The dossier-generation pipeline is **not reproducible by an independent team**: the skill describes editorial output style and forbidden language, but the actual production process is "an LLM agent makes claims" — there is no seed corpus, no source-claim provenance, no diff between input and output, no verifiable per-claim citation pointer.
4. There is no CI gating. `critic-audit.mjs` exists but runs only when a human runs `node tools/critic-audit.mjs`. There is no pre-commit hook, no PR gate, no GitHub Action mentioned in the materials. The Critic's most recent report (`docs/CRITIC_AUDIT_2026-06-02.md`) contains **21 BLOCKER issues that shipped to `main`**, including 12 word-count violations and 9 cross-journey copy-leakage flags. The blocker count is not a P0 gate; it is a passive log.
5. The home page makes a **living-protocol** claim — "Every regime refreshed weekly with the newest research" — backed by three statistics ("72 new sources this month / 14 dossiers updated / 3 honest downgrades") that are hard-coded literals in `app/page.tsx:120-131`. They are fabricated. There is no audit trail, no source-monitor pipeline, no `lastReviewedBy`, no `evidenceDigestRunAt`. The product is asserting a process that does not exist.

The fifth point is, in my view, the rejection-deciding finding. A reproducibility-track paper cannot ship a fabricated headline metric. Doing so for a *health* product crosses from sloppy science into a consumer-protection problem.

The remainder of this review explains the five attack dimensions in detail and proposes a credible minimum reproducibility pack.

---

## 1. Data model defensibility

### What is actually there

`lib/types.ts:3-128` defines a clean-looking domain model:

```ts
export type EvidenceGrade = "A" | "B" | "C" | "D" | "T" | "H" | "X";
export interface EvidenceClaim {
  id: string; intervention: string; claim: string; grade: EvidenceGrade;
  confidence: number; lastReviewed: string; sources: string[]; // SourceRef ids
  safety: string; allowedWording: string;
}
export interface SourceRef {
  id: string; title: string; publisher: string; year: string; url: string;
  sourceType: "market" | "research" | "traditional" | "quality" | "demand";
}
export interface Ingredient {
  name: string; role: string; dose: string; timing: string;
  grade: EvidenceGrade; cautions: string[]; qualityMarkers: string[];
}
export interface Category { /* …includes claims: EvidenceClaim[], protocol: ProtocolLayer[]… */ }
export interface Journey {
  id: string; name: string; domain: JourneyDomain; route: string;
  consumerHook: string; packageConcept: string; gradeMix: EvidenceGrade[];
  freshness: Freshness; risk: "low" | "moderate" | "guarded" | "specialist";
}
```

This is the model a reviewer wants to see. The problem: **it is not the model the corpus uses.**

`lib/data.ts:6-19` declares twelve `SourceRef` records. There is one called `sources` exported at the top of `data.ts`. **The 78 dossiers in `nichecore/research/*.md` do not reference these SourceRef ids.** Citations inside the markdown are free-form inline italics, e.g. from `tinnitus-support.md:18`:

```
*(WHO Traditional Medicine Strategy 2025-2034; Cochrane Hilton 2013; Sereda 2018 Cochrane sound-therapy review)*
```

There is no machine-readable link between "Cochrane Hilton 2013" in that prose and any `SourceRef.id`. There is no `EvidenceClaim` object instantiated anywhere for "Ginkgo EGb 761 may reduce tinnitus distress." The `EvidenceClaim.sources: string[]` array — designed to be a foreign key into `SourceRef` — is **uninhabited across the entire corpus**. I searched `Category.claims` for actual usage and found no journey populating it.

The `Journey.gradeMix: EvidenceGrade[]` field is the only structured-grade field at the journey level, and it is hand-curated free-form in `data.ts:1187`:

```ts
{ id: "tinnitus-support", … gradeMix: ["B", "C", "T", "H"], … }
```

while the YAML front-matter on `tinnitus-support.md:6` independently states `gradeMix: [A, B, C, D, T, H]`. **These two facts disagree.** Neither is derived from the dossier's actual content (the body table at lines 96–113 shows compounds graded B and C, the tradition tables show T, and §13 declares an H tier). Three locations, three different gradeMixes, zero source of truth.

The `Bundle` type in `types.ts:57-68` is one level worse: it has `Product.evidenceGrade: EvidenceGrade` and `Product.qualityScore: number`. But `qualityScore` is a free-form integer with no rubric — `generate-bundles.py:512-642` hard-codes 90/88/87/93/etc. from a 130-row regex table the author wrote by hand. Two products with identical evidence underpinning can get `qualityScore: 86` or `qualityScore: 93` purely based on which regex line matched first.

### Why this fails the data-model defensibility test

The model says "every claim has a grade and at least one source ID." The corpus says "claims live in markdown prose, sources live in italic parentheses, and the typed `EvidenceClaim[]` array is never populated." A reproducibility-track reviewer cannot verify that the Ginkgo claim in `tinnitus-support.md:90-94` is graded "C in tinnitus / B in cerebral-insufficiency" because:

- there is no Claim record with id `tinnitus--ginkgo--cochrane-null`,
- no `sources: ["cochrane-hilton-2013", "ema-hmpc-ginkgo-2015", "prochaska-2009"]` array tying the prose to verifiable URLs,
- no `lastReviewed: "2026-05-30T..."` timestamp specific to this claim,
- no `reviewedBy: "<name + credential>"` field,
- and no way to compute the gradeMix `[B, C, T, H]` from the underlying claim grades because the underlying claims are unstructured.

### Proposed normalised schema

The minimum the project needs, expressed as JSON Schema-ready TypeScript:

```ts
// 1. Sources — append-only, hash-stable bibliography.
interface Source {
  id: string;             // e.g. "cochrane-hilton-2013-tinnitus-ginkgo"
  type: "rct" | "meta-analysis" | "cochrane-review" | "monograph"
      | "classical-text" | "regulatory-context" | "observational" | "mechanistic";
  title: string;
  authors: string[];
  year: number;
  doi?: string;
  pubmedId?: string;
  url: string;
  publisher: string;
  jurisdiction?: "EMA" | "AYUSH" | "TGA" | "NMPA" | "WHO" | "HealthCanada" | "MenTseeKhang";
  // Verifiability:
  lastVerifiedAt: string;       // ISO-8601, UTC
  lastVerifiedBy: string;       // human reviewer or model-id+prompt-hash
  contentHash: string;          // SHA-256 of fetched abstract/full-text/PDF
  archiveUrl?: string;          // Wayback Machine snapshot URL
}

// 2. Claim — the atomic unit a grade attaches to.
interface Claim {
  id: string;                                  // canonical: "<journey>--<intervention>--<outcome>"
  journeyId: string;                           // FK
  interventionId: string;                      // FK into Intervention table
  outcome: string;                             // e.g. "tinnitus-distress-tfi"
  population: string;                          // e.g. "adults, primary tinnitus, chronic"
  effect: {
    direction: "decrease" | "increase" | "null" | "mixed";
    magnitude?: { value: number; unit: string; ci95?: [number, number] };
  };
  grade: "A" | "B" | "C" | "D" | "T" | "H" | "X";
  gradeRationale: string;                      // why this grade
  sources: string[];                           // FK into Source.id
  conflictingSources: string[];                // sources that disagree
  lastReviewed: string;
  reviewedBy: string;
  changelog: ClaimChange[];                    // append-only
}

interface ClaimChange {
  at: string; by: string; from: Partial<Claim>; to: Partial<Claim>; reason: string;
}

// 3. Section — typed sub-units of a dossier.
interface Section {
  id: string;                  // "tinnitus--3.2--ginkgo-cochrane-caveat"
  dossierId: string;
  ordinal: string;             // "3.2"
  title: string;
  plainEnglishSummary: string; // the "For you, in plain words." block, structured
  quickStart?: string[];       // bullets
  deepDive?: string;           // free markdown
  claimIds: string[];          // claims surfaced in this section
}

// 4. Dossier — the top-level document.
interface Dossier {
  id: string; ailmentName: string; domain: JourneyDomain;
  schemaVersion: string;
  sections: Section[];
  redFlags: RedFlag[];
  daily24Hour: TimelinePlan;
  combos: ComboDay[];
  diet: DietPlan;
  suppliers: SupplierEntry[];
  doNotRecommend: Claim[];                    // §13.7 row equivalents
  audit: AuditRecord;                          // see §5
}
```

The point isn't that this exact shape ships. It's that **there is exactly one schema**, the markdown body becomes a *rendering* of these structured objects (not the source of truth), and a CI step asserts every `Section` body parses cleanly into typed Claims with non-empty `sources` arrays. Today the source of truth is the markdown, and the typed model in `types.ts` is aspirational decoration.

---

## 2. Extraction fragility

### What is actually there

Three parallel parsers, written in different languages, that disagree about the dossier shape.

**Parser A — `lib/research.ts` (TypeScript, runtime extraction for the UI):**

- `splitDossierByH2` (lines 71-96) slices on `^##\s+(.+?)$`. Works.
- `splitChunkByH3` (lines 133-179) slices on `^###\s+(.+?)$`. Synthetic preamble stitched into the first H3 sub-chunk.
- `DEEP_DIVE_H4_RE = /^####\s+open\s+the\s+science\b/i` (line 120) — case-insensitive English-only marker.
- `parseTimeline` (lines 281-295): bullets with `/(?:Months?\s+\d|Month\s+\d|Weeks?\s+\d|Week\s+\d|Phase\s+\d|Year\s+\d)/i`. Three bullets, no marker → silent fallback to first 3 bullets of section. **No fail-loud.**
- `parseCombos` (lines 297-328): three fallback strategies. If none find anything, returns `["Three timed daily combos — see full regimen."]` and sets `available: true` (line 326 returns `available: out.length > 0`, but the bullet-list `picked` slice always produces ≥1 element if any bullets exist).
- `parseStrictlyAvoid` (lines 330-366): regex `matchRe = /strict(?:ly)?\s*avoid|do\s*not|forbidden|never\b|absolutely\s*avoid/i`. Two strategies, each with silent fallback. The "Do not", "Never", "Avoid" line-prefix detector at line 358 will fire on legitimate dossier prose like "Never start with a high-dose Vitex if you have endometriosis" — which is a *recommendation*, not a strictly-avoid item.
- `parseDiet` (lines 368-409): three strategies. The day-header regex (line 373) is 7-day-week-only; an 8-week diet rollout (which `daily-energy-fatigue.md` actually has, by Critic's word-count of 17,778) wouldn't trigger.
- `parseSuppliers` (lines 411-480): four strategies, each with silent fallback to "Curated supplier ecosystem — see channels + brands." The `costRe` regex at line 418 is fragile to phrasing: "Monthly total: $58–82" works, "Total each month around $60" does not.

**Parser B — `scripts/generate-bundles.py` (Python, build-time extraction for bundle TS generation):**

This is the most concerning file. 1,140 LOC of regex with five fallback strategies per section:

- `parse_combos` (line 136): splits §8 by H3 headings via `re.compile(r"^### (\d+(?:\.\d+)?)\s+(?:Combo \d+\s+—\s+)?([^\n]+)$", re.M)`. If H3 count < 3 it falls through to bullet/joined-line/table/prose-doses parsers.
- `_parse_joined_line` (line 376): matches `"Name X mg + Name Y mg + Name Z mg"` patterns. Excludes lines starting with `**For you|Quick start|Why`. Already a clear signal that **dossiers don't agree on a §8 syntax**.
- `_parse_bullet_lines` (line 422): bullet pattern with stripping for parenthetical notes, em-dashes, `OR` options, trailing italics, plus-joined sub-stacks, and a `_looks_like_supplement` keyword-list gate.
- `_parse_table_lines` (line 274): markdown-table parser that walks looking for a `---` separator row.
- `_parse_prose_doses` (line 199): the last-resort prose scanner. The author themselves left a comment: *"Anchors name detection to known supplement keywords (via `_SUPPLEMENT_KEYWORDS`) so we don't grab phrase fragments like 'For You, In Plain Words. Three Things With Breakfast: D-mannose'."* This is a **known regression bug** in the parser, fixed by a hand-curated keyword regex `_SUPPLEMENT_KEYWORDS` (lines 342-369) listing roughly 130 supplement keyword stems. If a future dossier uses "berberine HCl" with hyphen on one side, the keyword detector matches; if it uses a transliteration ("kishida-cha") it does not.

`PRICING_RULES` (lines 510-642) is 130 hand-written regex→price tuples that pick a per-product price, supplier, qualityScore, signals, and evidenceGrade. **This is the most reproducibility-hostile object in the codebase.** Two products at identical dose with the same evidence — "Magnesium taurate 150 mg" vs "Magnesium glycinate 200 mg" — get separate (price, supplier, qualityScore, grade) tuples because they happen to match different rules. The first-match-wins ordering hides the rule that fires: rule order is the model.

`scripts/apply-bundles.py` (entire file, 100 LOC) then **regex-splices** the generated TypeScript fragments back into `lib/data.ts` and `app/[domain]/[slug]/page.tsx`. If the TS file's formatting drifts — e.g. a future refactor wraps `export const bundles: Bundle[] = [` across two lines — the splicing breaks silently.

**Parser C — `tools/critic-audit.mjs`** (also TypeScript-ish ESM):

- Yet another YAML parser (lines 110-128) — very simple, doesn't handle multi-line YAML values, doesn't handle list-of-objects shapes other than `internalRalph`.
- Yet another section-detection scheme (lines 263-285): regexes for diet / combos / daily / interactions / timeline / suppliers, evaluated against H2 only (except `daily` which is `anyLevel`). The Critic considers a section present if *any* `## ` line matches its regex — including matches in other sections' bodies if a future H2 happens to share a keyword.
- `STRONG_CROSSREF` regex (line 200) to detect cross-journey copy leakage. Per the audit output, 9 BLOCKER issues fired here — but inspection of the snippets (e.g. `sshl-hearing-loss.md:472` "Cross-link with the tinnitus-support sister dossier") shows these are intentional related-content links, not leakage. **The Critic is firing false-positive BLOCKERs.** That makes the BLOCKER count itself unreliable.

### Why this fails the extraction-fragility test

1. **No fail-loud anywhere.** Every parser has a fallback that returns "Section not available in this dossier yet." or "Three timed daily combos — see full regimen." or a default supplier. A reproducibility-track reviewer needs to see "parse failed → fail build" not "parse failed → fabricate placeholder text".
2. **Three parallel parsers disagree.** Parser A in `research.ts` will happily render a TopShelf card when Parser B in `generate-bundles.py` has emitted a fallback minimal stack. There is no single source of truth that says "this dossier's §8 has these 6 products at these doses."
3. **Hand-curated allowlists are load-bearing.** `_SUPPLEMENT_KEYWORDS` and `PRICING_RULES` together are roughly 250 hand-written regex patterns. Adding a 79th journey may silently fail to bundle if its supplements aren't in the list.
4. **Silent regex-splice of source code is a CI nightmare.** `apply-bundles.py` writes back into `lib/data.ts` between BEGIN/END markers. If a developer hand-edits inside the markers, regen overwrites their work. If they hand-edit outside the markers, the next regen still wins for journeys it owns. There is no lock/merge protocol.

### What a defensible extraction pipeline looks like

- **Structured fences inside markdown.** Replace the "Quick start." prose convention with a typed fence:
  ```markdown
  ::: combo id="tinnitus--combo-1" name="Hair-cell + circulation" time="08:00"
  - { product: "magnesium-glycinate", dose: "200 mg", role: "NMDA-modulation" }
  - { product: "ginkgo-egb761",      dose: "120 mg", role: "cochlear microcirculation" }
  - { product: "nac",                dose: "600 mg", role: "glutathione" }
  :::
  ```
  Parsable by a single MDX/remark plugin. JSON-validated against a Combo schema.
- **JSON Schema for YAML front-matter.** Use Ajv or `zod` to validate every dossier's YAML at PR-open time. `gradeMix`, `subTypes`, `comorbidityScreen`, `lastUpdated`, `lastReviewedBy`, `schemaVersion` all type-checked.
- **AST-level parsing.** Use `unified` + `remark` + `mdast` instead of `re.M` regex line scanning. Walk the AST; assert §8 has exactly N combos; assert §13.7 has ≥40 rows; assert every claim has at least one citation node.
- **Single canonical extractor.** One language, one parser. Today's split across `research.ts` (Next), `generate-bundles.py` (build), and `critic-audit.mjs` (audit) means three independently-broken truths.
- **Fail-loud, log-louder.** Parse failure → exit 1 in CI. Today `parseSuppliers` returning `available: false` ships to production with a generic placeholder bullet.

---

## 3. Reproducibility of dossier generation

### What is actually there

`.claude/skills/ailment-360-research/SKILL.md` is a sophisticated **editorial style guide**. Rules 1–12 cover progressive disclosure, tree-friendly H3s, the honest evidence-tier comparison table, Cochrane honesty, emerging-therapies framing, the regulatory-context exception, six-tradition coverage, the §10.7 split, parseable decision-surface markers, the TopShelf 5-card surface, the tinnitus presentation overlay, and per-journey bundle curation. Roughly 350 lines of prescriptive constraints.

What it is **not**: a reproducible specification. The skill is the *intent*. The implementation is "an LLM agent reads the skill and writes a markdown file."

For tinnitus-support.md, the YAML records `authorAgent: ailment-360-research` (line 10) and a `lastUpdated: 2026-05-30` (line 5). It does **not** record:

- which LLM produced the dossier (Opus 4.7? Sonnet 4? GPT-5.2? Gemini 3.1?),
- the prompt that was given (and is the prompt the SKILL.md verbatim, or did a parent agent paraphrase?),
- the seed/temperature/tool-use trace,
- which corpus the agent had access to (PubMed RSS? a local PDF cache? a Pinecone index? the model's training data?),
- which sources it actually consulted (vs which it pattern-matched from its training data),
- a per-claim provenance pointer.

The Cochrane Hilton 2013 citation in `tinnitus-support.md:93` is the canonical example. Did the agent fetch the Cochrane review and read it? Almost certainly not — there's no fetcher in the repo, no Cochrane API key, no cached PDF. The agent generated the text "Cochrane Hilton 2013 found insufficient evidence for primary tinnitus" because that fact is in its training data. **This is a plausibility-grade citation, not a verified one.**

For a reproducibility reviewer, three independent claims in `tinnitus-support.md` rang alarm bells:

1. **`tinnitus-support.md:101` — "Attias 1994 Israel, n=300"** — the Attias magnesium / military / noise-induced hearing loss study is a real publication (Am J Otolaryngol 1994), but the exact n=300 is from memory. An independent team trying to reproduce the dossier cannot verify this without re-reading Attias 1994. There is no `sources/attias-1994.pdf` in the repo. There is no `pubmedId` field.
2. **`tinnitus-support.md:107` — "CoQ10 / Ubiquinol … Khan 2007 Italy"** — there is a Khan study on CoQ10 in tinnitus (Khan M et al. Acta Otolaryngol 2007), Italian-Pakistani authorship. The "Italy" tag is the agent's inference. Reasonable, possibly wrong.
3. **`tinnitus-support.md:152` — "Er Long Zuo Ci Wan 耳聋左慈丸 … Imperial Golden Mirror; NMPA; Chinese open-label consortium"** — "Chinese open-label consortium" is too vague to verify. Which consortium? Which open-label study? There is no resolvable citation.

### Why this fails the reproducibility test

A different team given `SKILL.md` and the seed `tinnitus-support` request would not produce `tinnitus-support.md`. They would produce *a* dossier — different agent, different temperature, different training-data anchoring, different memory of the Sayyah/Procháska/Attias literature. The skill cannot be the unit of reproducibility because the skill leaves enormous degrees of freedom to the agent.

Worse: the skill **mandates editorial honesty discipline** (Rule 4, "Cochrane null findings MUST be honestly downgraded"), but nothing in the pipeline verifies that the agent actually surfaced the Cochrane review and didn't just pattern-match the phrase "Cochrane Hilton" from training data. A future agent regenerating this dossier could simply invent a Cochrane review that does not exist, with grade-C confidence, and ship.

### What a reproducible generation pipeline looks like

**A reproducibility pack per dossier** would include:

```
research/tinnitus-support/
├── tinnitus-support.md           # The rendered output (current state)
├── PROMPT.md                     # The actual prompt sent to the agent, verbatim
├── MODEL.json                    # { id: "claude-opus-4-7", temperature: 0, seed: 12345 }
├── SEED.json                     # User-supplied inputs: ailment id, sub-types, founder edits
├── SOURCES/                      # Every source the agent was given (or fetched)
│   ├── cochrane-hilton-2013.pdf
│   ├── attias-1994.pdf
│   ├── prochaska-2009.pdf
│   ├── ema-hmpc-ginkgo-2015.pdf
│   └── …
├── SOURCES.lock.json             # Frozen list of sources with SHA-256 + Wayback URLs
├── CLAIMS.json                   # Structured EvidenceClaim[] derived from the dossier
├── TRACE.jsonl                   # Every tool call the agent made, with timestamps
└── DIFF.json                     # Per-claim diff vs the previous regen
```

**A per-claim verification log** would record, for each `Claim`:

```jsonc
{
  "id": "tinnitus--ginkgo-egb761--tinnitus-distress",
  "claim": "EGb 761 may reduce tinnitus distress in a circulation-linked subgroup; Cochrane null for primary tinnitus.",
  "grade": "C",
  "sources": ["cochrane-hilton-2013", "ema-hmpc-ginkgo-2015", "prochaska-2009"],
  "verifications": [
    { "by": "opus-4.7", "at": "2026-05-30T14:22:11Z", "method": "fetched-cached-pdf", "verdict": "claim-consistent" },
    { "by": "human:meera-iyer", "at": "2026-05-31T09:14:00Z", "method": "manual-pdf-read", "verdict": "claim-consistent" }
  ],
  "nextVerificationDue": "2026-08-31"
}
```

**Version-pin every claim, not the dossier.** The dossier is a render. Claims are the unit that ages and needs revisiting. Right now the only thing versioned is the dossier-level `lastUpdated: 2026-05-30` — meaningless to a reviewer who wants to know "when was Sayyah 2012 last verified, by whom, against what?"

---

## 4. Automated validation and CI

### What is actually there

`tools/critic-audit.mjs` (562 LOC, no dependencies, plain Node ESM) is a competent first-draft validator. It runs 12 categories:

- C1 cross-journey copy leakage
- C2 YAML schemaVersion + ralph auto-fix
- C3 atlas vs dossier consistency
- C4 forbidden H3 titles
- C5 mandatory section presence
- C6 parseable conventions (Quick start / red-flag / 24h plan / §13.7)
- C7 six-traditions ≥3 mentions
- C8 §10.7.1/.2/.3 split
- C9 crisis-line routing for mental-health and time-critical journeys
- C10 word-count vs 18k/5k bounds
- C11 (declared in CAT_TITLES but no body checks in the file I reviewed)
- C12 internal route link integrity

It writes `docs/CRITIC_AUDIT_2026-06-02.md` with a per-journey scorecard. **This is the only QA artifact in the repo.**

**What is missing:**

- **No CI.** No `.github/workflows/critic-audit.yml`, no `.pre-commit-config.yaml`, no Husky hook. Run-on-demand only.
- **No PR gate.** A PR can introduce a BLOCKER and merge with no warning.
- **No fixture-based tests.** `tools/` contains no `*.test.mjs`. The Critic itself has no regression suite — if a future edit to `STRONG_CROSSREF` regex breaks leak detection, no test catches it.
- **No schema validation step.** YAML parsing is a 15-line ad-hoc parser at line 110. There is no Ajv/zod schema asserting `gradeMix` is a subset of `EvidenceGrade`, that `lastUpdated` is ISO-8601, that `subTypes` are kebab-case slugs.
- **No citation-format validation.** Inline `*(Author Year; Author Year)*` italics are not parsed, not validated, not linked to anything.
- **No dead-link detection.** Internal route checks exist at C12 (lines 364-381) but external citation URLs in `lib/data.ts` `sources` array are never fetched.
- **No claim-effect-size presence check.** A claim like "magnesium calms the over-fired hearing nerve" has no quantified effect anywhere in the dossier and no validator complains.
- **No regression tests on the extractors.** `lib/research.ts` `parseTimeline`/`parseCombos`/etc. ship with no fixtures showing input markdown → expected TopShelfCard output.
- **The Critic ships false-positive BLOCKERs.** The 2026-06-02 audit logged 21 BLOCKERs; ~9 of those are cross-link patterns the author considers intentional and healthy (the audit's own "5 most surprising findings" section, finding #5, agrees these look intentional). A gate that fires false-positives is worse than no gate — teams learn to ignore it.
- **The Critic auto-fixes silently.** Lines 152-187 add missing `schemaVersion`, fix `ailmentId` mismatches, and inject `internalRalph: pass1Complete: true` for any dossier >5000 words. **Auto-marking ralph passes as `true` without verifying them is fabricated provenance.** It mutates the corpus inside the same audit run that's supposed to be read-only.

### What a defensible CI gating workflow looks like

```yaml
# .github/workflows/dossier-gate.yml
name: Dossier gate
on: [pull_request]
jobs:
  schema:
    steps:
      - run: npx tsx scripts/validate-yaml-front-matter.ts   # Ajv-validated
      - run: npx tsx scripts/validate-claim-citations.ts     # every claim has ≥1 source FK
      - run: npx tsx scripts/validate-source-urls.ts         # head-check every external URL
  parse:
    steps:
      - run: npx tsx scripts/parse-and-snapshot.ts           # AST-level dossier → structured JSON
      - run: npx vitest run tests/extraction-snapshot.test.ts # snapshot regression on TopShelf, ConversionStrip, bundle gen
  critic:
    steps:
      - run: node tools/critic-audit.mjs --strict --no-autofix
      - if: failure()
        run: echo "::error::Critic gate failed. See docs/CRITIC_AUDIT_*.md"
  format-citations:
    steps:
      - run: npx tsx scripts/validate-citation-format.ts     # every *(Author Year)* parses
  links:
    steps:
      - run: npx tsx scripts/check-internal-routes.ts
      - run: npx tsx scripts/check-external-urls.ts --cached-30d
```

A separate snapshot test fixture, `tests/fixtures/tinnitus-support.snapshot.json`, would freeze "given tinnitus-support.md, the extractor produces this exact TopShelfPreview + this exact bundle." Then changes to extractors must update snapshots intentionally.

**Remove the auto-fix path entirely** from the Critic. Auto-fixing `internalRalph: pass1Complete: true` for any dossier above 5k words is the audit lying to itself. A check either passes or fails on its own; it does not pass because it auto-edits the artefact under review.

---

## 5. Audit trail and living-protocol claims

This is the dimension I want the program-chair-cc'd on.

### What is actually there

`app/page.tsx:80-104` carries the home headline:

> **A living protocol — not a static blog**
> **Every regime refreshed *weekly* with the newest research.**
> A backend factory sweeps Cochrane, EMA HMPC, AYUSH councils, TGA, NMPA, Health Canada NHP and the classical Ayurveda / TCM / Unani / Siddha / Tibetan / Homeopathy corpus every week. New trials get graded. Null findings get surfaced. Weak interventions get downgraded honestly. Your protocol stays current — without you having to read another paper.

And then `app/page.tsx:106-134` shows three statistics:

- **Last evidence sweep: June 1, 2026** (line 112)
- **72** new sources this month (line 120)
- **14** dossiers updated (line 125)
- **3** honest downgrades (line 130)

These are **string literals in a JSX file.** There is no script that computes them. There is no `audit/` directory. There is no `evidenceDigestRunAt` timestamp anywhere in the codebase. There is no Cochrane RSS subscriber, no PubMed E-utilities fetcher, no HMPC monograph crawler. `lib/data.ts:6-19` declares twelve `SourceRef` records hand-curated **and they have not changed** in the git history snapshot the reviewer was given.

Cross-checking the corpus: `tinnitus-support.md:5` says `lastUpdated: 2026-05-30`. There is no `lastReviewedBy`. There is no per-claim `lastReviewed`. There is no changelog. The schema in `types.ts:111` has `Category.lastReviewed: string` and `Category.nextRefresh: string` — also string literals, not derived from any process.

The skill v6.2.6 banner at `SKILL.md:23-24` says explicitly:

> **Home-page "Weekly research refresh" selling point** sits between the manifesto band and the featured-journeys grid: "Every regime refreshed weekly with the newest research." Surfaces the living-protocol differentiation — backend factory sweeps Cochrane + EMA HMPC + AYUSH + TGA + NMPA + Health Canada NHP + classical 6-tradition corpus every week.

The skill itself documents a process that does not exist. The product is asserting a backend that has not been built.

### Why this is the worst finding in the review

For an academic paper this would be reviewer-fatigue catnip. For a consumer health product it is a regulatory disclosure issue. The home page sets the user's expectation that a knowable, fresh, auditable process underlies every dossier they read. It does not. A user who buys the 90-Day Tinnitus Quiet Pack ($169 one-time / $139 subscription per `lib/data.ts:48`) is paying for that promise.

The Critic catches none of this — there is no `C13 living-protocol claim verification` category. The home stats are not in scope for any validator.

### What a credible audit trail looks like

**Per-claim append-only changelog.** Stored alongside the claim, never overwritten:

```jsonc
{
  "claimId": "tinnitus--ginkgo-egb761--cochrane-null",
  "changes": [
    { "at": "2026-05-30T14:22:11Z", "by": "opus-4.7-regen-001", "type": "grade-downgrade",
      "from": { "grade": "B" }, "to": { "grade": "C" },
      "reason": "Re-read Hilton 2013 Cochrane; B grade not defensible in primary-tinnitus context.",
      "sources": ["cochrane-hilton-2013"] },
    { "at": "2026-06-12T09:00:00Z", "by": "weekly-evidence-sweep-2026-W24", "type": "no-change",
      "reason": "No new Cochrane update; Procháska 2009 unchanged; EMA monograph unchanged." }
  ]
}
```

**Automated source-monitor pipeline.** A scheduled job (Cloud Run job, Cloud Scheduler weekly cron) that:

1. Fetches the Cochrane Tinnitus topic page RSS, the EMA HMPC monographs RSS, PubMed E-utilities `eFetch` for keyword queries per journey, AYUSH/CCRAS publication lists, TGA listings updates, NMPA pharmacopoeia change-log, Health Canada NHP monograph updates.
2. For each new/updated source, posts a candidate-change record to a `pending/` directory.
3. A scheduled critic agent reads pending and either (a) auto-applies trivial reference-date bumps, or (b) opens a PR with a proposed claim change.
4. Emits a real `audit/weekly-sweep-2026-W24.json` recording: number of sources fetched, number of new sources, number of claims touched, number of downgrades, number of upgrades. **These become the home-page metric source.**

**Real home-page metrics.** Compute the three stats at build time from `audit/weekly-sweep-*.json`. If no audit data exists, **hide the stat block.** Render the headline as "Refresh cadence: planned weekly; first scheduled sweep <date>" until the pipeline is live. The current state — fabricated stats next to a "Refreshed June 1, 2026" date that has no underlying event log — is worse than no stats.

**`lastReviewedBy` becomes mandatory.** Every dossier's YAML must record the reviewer (model id + prompt-hash for AI; name + credential for human). Critic enforces.

**Public audit page.** `/audit` route exposes the latest sweep report and per-dossier change log. This is the move that converts "trust us, we refresh weekly" into "look at our event log, here are the 14 sources we fetched this week, here are the 3 claims we touched, here is the diff."

---

## Top-5 highest-leverage fixes

If I had to pick five fixes that, if shipped before resubmission, would move my verdict from **reject** to **borderline accept (revisions)**:

1. **Hide the fabricated home-page stats today.** Remove the "72 / 14 / 3" block in `app/page.tsx:117-133` until a real audit pipeline produces them. Until then, the headline reads "A living protocol — first weekly sweep scheduled <date>." Anything else is fabricated provenance on a consumer health surface, and it is the single fastest credibility-restoring fix. **Estimated effort: 30 minutes.**

2. **Replace the `_SUPPLEMENT_KEYWORDS` + `PRICING_RULES` regex tables with a JSON product catalogue.** `scripts/products.json` keyed by canonical product id, with `(price, supplier, qualityScore, qualitySignals, evidenceGrade)` per entry. Dossiers reference products by id inside the structured fences proposed in §2. `generate-bundles.py` becomes ~200 lines of straight join logic rather than 1,140 lines of regex. Bundle output becomes deterministic and PR-reviewable. **Estimated effort: 3–5 days for the catalogue; 1 day for the bundle generator.**

3. **Promote `tools/critic-audit.mjs` to a CI gate.** Add `.github/workflows/dossier-gate.yml` that runs `node tools/critic-audit.mjs --strict --no-autofix` on every PR. Remove the silent YAML auto-fix path. Triage the current 21 BLOCKERs: word-count violations are real and need trimming or skill rule update; the 9 cross-link "leakages" need a `relatedDossiers: string[]` YAML field that the Critic recognises as legitimate. Block PR merge on BLOCKER count > 0. **Estimated effort: 2 days.**

4. **Introduce structured fences for §8 combos, §10.6 strictly-avoid, §13.7 evidence-tier rows, and citations.** Three custom remark plugins parse them into typed JSON. `lib/research.ts` reads the JSON, not the markdown. `TopShelf`, `ConversionStrip`, and `Bundle` generation all consume the same JSON. The three parallel parsers collapse to one. **Estimated effort: 1–2 weeks if done correctly, including back-conversion of the 78 existing dossiers.**

5. **Per-claim provenance and changelog.** Add `claims/<journey>.json` per dossier with `id`, `sources`, `grade`, `gradeRationale`, `lastReviewedAt`, `lastReviewedBy`, `changelog: []`. Add a `sources/<source-id>.json` registry with `doi`, `pubmedId`, `archiveUrl`, `contentHash`, `lastVerifiedAt`. Now the home headline can say "Last weekly sweep touched 14 claims across 6 dossiers" and a `/audit` page can render the diff. **Estimated effort: 1 week for schema + back-fill of the tinnitus dossier as the exemplar; ~3 weeks to back-fill all 78.**

---

## What I'd still reject even after the Top-5 ship

Even with all five fixes shipped I would still flag the following at the next review:

- **The "Boericke + Hamdard + Men-Tsee-Khang" tradition rows in `tinnitus-support.md:170-200` are graded T (Traditional-use evidence) but the Critic only checks for ≥3 mentions, not whether the cited classical source actually contains the cited formula.** Sushruta's Latter Tantra ch. 21 either does or does not list Karnapurana with Bilva Taila at that dose; today no validator checks. The reproducibility-track minimum is a per-classical-source verification step (citation → folio range → cached page image / OCR).
- **`gradeMix: [A, B, C, D, T, H]` in `tinnitus-support.md:6` claims the dossier contains every grade.** Inspection of the §3.3 table (lines 98-113) shows no grade-A row. There is one grade-D row (L-Arginine + L-Citrulline, line 108). The H-tier appears only at §13.7 if at all. The gradeMix field is **aspirational, not computed**. A trivial fix: compute it from the parsed structured rows. Until that compute step exists, every gradeMix value in `data.ts` and YAML is unverified.
- **Bundle pricing disagrees with itself.** `tinnitus-support.md` lists "Standardised Ginkgo (Tebonin EGb 761)" at $20-45/mo (line 100). The hand-curated bundle `tinnitus-quiet-90` in `data.ts:48` charges $49 for "Tebonin Ginkgo EGb 761." Both are inside the dossier's stated band, but the dossier's "$20-45" plain-words promise to the user gets quietly violated by the bundle's $49 sticker. A reviewer asks: which is canonical? Neither, today. The catalogue (fix #2) would force a single answer.
- **The Critic auto-fix path is not just a CI-hygiene problem — it's an audit-trail problem.** Lines 168-187 of `critic-audit.mjs` will silently write `schemaVersion: "v6.2.3"` and `pass1Complete: true / pass2Complete: true / pass3Complete: true` into any dossier YAML. The audit thereby fabricates provenance that the corresponding human-reviewer ralph passes were completed. This is the same class of integrity issue as the home-page stats. Remove the auto-fix path.
- **There is no Sayyah 2012 in the bibliography but the Critic does not notice.** Tinnitus dossier inline citations name authors and years; nothing checks those names against a registry of actual papers. The Khan 2007 "Italy" tag in `tinnitus-support.md:107` (CoQ10) is a plausible-but-unverified placeholder. The reviewer who tries to follow up gets nothing. Fix: every italic-parenthetical citation parses into a `Citation` AST node and resolves to a `Source` record or the build fails.

---

## Summary scorecard

| Dimension | Severity | One-line verdict |
|---|---|---|
| 1. Data model defensibility | **major** | Typed model in `types.ts` is decorative; corpus lives in unstructured markdown + ad-hoc YAML; gradeMix disagrees across three locations. |
| 2. Extraction fragility | **major** | Three parallel regex parsers (TS / Python / Node) with silent fallback to fabricated placeholder text; no fail-loud, no fixtures. |
| 3. Reproducibility of generation | **major** | Skill is editorial style guide, not a reproducibility spec; no PROMPT.md, no model/seed/trace pinning, no per-claim source provenance. |
| 4. Automated validation + CI | **major** | Critic exists and is decent; never gated, never PR-blocking, auto-fixes silently, ships false-positive BLOCKERs, no claim-effect-size check. |
| 5. Audit trail + living-protocol claims | **fatal** | Home headline asserts weekly sweep + 72/14/3 metrics that **do not come from any process**. String literals in JSX. Hardest finding to defend. |

**Overall recommendation:** Reject. Resubmission with the Top-5 fixes implemented would be welcome and likely to land at borderline-accept on next pass.

— R2
