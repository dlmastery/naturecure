# NicheCore — AI Research Lab Review of the Evidence-OS Harness

**Reviewer:** External AI research lab (alignment / model-output evaluation lens — Anthropic / OpenAI / DeepMind composite)
**Materials reviewed:** tinnitus-support.md (exemplar dossier, 950 lines, ~17k words) · SKILL.md v6.2.7 (1,183 lines) · CLAUDE.md project doc · lib/research.ts (extractor, 499 lines) · lib/evidence.ts · lib/types.ts · components/layout/conversion-strip.tsx · components/layout/top-shelf.tsx · app/page.tsx · app/[domain]/[slug]/page.tsx · scripts/generate-bundles.py + apply-bundles.py · tools/critic-audit.mjs · docs/CRITIC_AUDIT_2026-06-02.md
**Question put to the reviewer:** Is this evidence-OS, or is it AI-slop wearing evidence-clothing? Is the harness rigorous enough to ship to consumers?
**Date:** 2026-06-05
**Recommendation:** **Major revision required before consumer ship.** The dossier content is genuinely strong — among the better long-form AI-authored health content I've audited — but the *harness around it* has design-doc, validation, and metric-fabrication gaps that would not survive an Anthropic-style RSP review or an FTC Section-5 (UK MHRA-equivalent under your own non-US doctrine) marketing-substantiation challenge. The product is six focused weeks of harness work away from "shippable." It is not shippable today.

---

## TL;DR (the harness-only summary the founder needs)

1. **The "72 / 14 / 3" weekly-refresh stats on the home page are fabricated.** They are hardcoded literals in `app/page.tsx` lines 120–131 with zero data source. This is the single most consequential AI-slop signal in the product. Hide them today or back them with a real metric pipeline this week. Until then the "Every regime refreshed weekly" headline above them is unsubstantiated.
2. **There is no architecture-decision record for the load-bearing extraction pipeline.** A 499-line regex-and-heuristic parser (`lib/research.ts`) is the entire contract between a 78-dossier corpus and the consumer UI. There are zero unit tests on it, zero fixtures, and the contract is hidden in prose inside SKILL.md.
3. **There is no retrieval-augmented citation verification.** The dossier contains hundreds of italicised inline citations (`*(Cochrane Hilton 2013; Sereda 2018; …)*`) — none of them are verified against PubMed/Cochrane/EMA HMPC at build time. The skill mandates Cochrane honesty as prose hope, not as a check.
4. **The skill has evolved through 7 versions in ~3 weeks with no compatibility matrix.** Dossiers carry a `schemaVersion` YAML field, but the field is declared, never validated; the type in `research.ts` does not even include it. Older dossiers will silently fall out of compliance.
5. **The Critic Audit is the only working guardrail and it is excellent — promote it from afterthought to gate.** Make it block CI. Add a citation-resolution pass. Add UI-extraction snapshot tests. That alone closes ~60% of the consumer-ship risk.

If you do nothing else from this review, do those five. The remainder of this document explains why and proposes the specific design docs, contracts, fixtures, and guardrails to add.

---

## 1. Design-document discipline

### 1.1 What is missing

A reader walking into this repo today cannot answer any of the following from the artefacts alone:

- **What is the contract between a `.md` dossier and the UI?** Which YAML keys are required vs optional? Which H2/H3 titles are load-bearing? Which markdown conventions (`**For you, in plain words.**`, `#### Open the science`, `**Quick start.**`) are parsing keys? They are described — in prose — across ~50 paragraphs of `SKILL.md` and the v6.2.x banner inside it. Nowhere in code.
- **What is the pluralist evidence model?** `lib/evidence.ts` declares 7 grades (A/B/C/D/T/H/X) in 23 lines. The *meaning* of the model — why T (traditional-use) sits below D (mechanistic), why H differs from X, what "honest downgrade" means — is implicit folklore in the skill and in dossiers. There is no ADR.
- **What is the API contract between Bundle, Journey, Product and the Conversion Strip?** `ConversionStripProps` takes a `journey` and a `bundle`, then writes hardcoded reviewer credentials ("Dr. Meera Iyer · BAMS · 12 yrs clinical Ayurveda · Bengaluru") and a hardcoded refresh date as default props. There is no spec that says "reviewer must be sourced from a Reviewer table." There is no contract that says "if a journey lacks a bundle, the strip suppresses."
- **What is the extraction-layer interface?** `extractTopShelf` consumes `Record<string, DossierChunk[]>` and returns a `TopShelfPreview` of 5 cards each with 3 bullets. The bucketing key `"timeline" | "combos" | "interactions" | "diet" | "suppliers"` is the API; it lives nowhere as a typed enum.
- **What is the dossier required-vs-optional section spec?** The skill says "16-section template, see skill for full prescriptive form" and CLAUDE.md says "Mandatory section order (16-section template)." Neither names which sections are MAY vs MUST. The Critic Audit derives a 6-section MUST list (`diet`, `combos`, `daily`, `interactions`, `timeline`, `suppliers` + an evidence-tier comparison) by regex. That is the *de facto* spec — but it is hidden inside a 562-line audit script.

### 1.2 What needs to exist (and where)

Create `docs/adr/` and add the following ADRs as proper Markdown Architecture Decision Records (context · decision · consequences). Each should be ≤300 lines, machine-readable where useful (JSON schema, OpenAPI, TypeScript types).

**ADR-001 — The pluralist evidence model (A/B/C/D/T/H/X).**
Capture: what each grade actually means in consumer terms; how T (traditional-use) is ranked against C (mixed human evidence) — they are not on the same axis and the current ordering hides that; how X is operationalised (rejected vs insufficient — those are different); the "do not recommend" convention in §13.7 tables (rows prefixed `**DO NOT RECOMMEND:**`); the Cochrane-null-honest-downgrade rule. Reference the consumer wording in `EVIDENCE_GRADES` as the canonical surface, and FORBIDDEN_WORDING / ALLOWED_WORDING as the linguistic boundary.

**ADR-002 — Dossier schema (the markdown contract).**
This is the most important missing artefact. Author it as a `dossier-schema.md` + a `dossier-schema.json` (JSON Schema for the YAML front matter) + a `dossier-section-spec.ts` (typed enum of section ids, parseable conventions, regex contracts). Cover:
- YAML keys: `ailmentId` (slug, MUST equal filename), `ailmentName`, `domain` (enum from `JourneyDomain`), `lastUpdated` (ISO date), `gradeMix` (subset of EvidenceGrade), `clinicalScoringInstrument`, `subTypes`, `comorbidityScreen`, `authorAgent`, `schemaVersion` (semver-shaped string like `v6.2.7`), `internalRalph` (3-boolean RALPH-pass block).
- Required sections (the 6 Critic Audit checks plus §13.7).
- Required parsing tokens: `**For you, in plain words.**`, `**Quick start.**`, `#### Open the science`, red-flag H3 regex, master 24-hour H2 regex, §10.7.1/.2/.3 split, tradition coverage floor.
- Forbidden tokens: forbidden H3 titles, FORBIDDEN_WORDING phrases, US-regulator authority citations.
- Word-count tiers (10–13k acute, 13–16k standard, 16–18k Rx-heavy, 18k absolute ceiling).

**ADR-003 — Extraction-layer interface contract.**
Promote `TopShelfPreview`, `DossierChunk`, `DossierSubChunk`, and the tab-bucketing key set to a typed module `lib/extraction-contract.ts`. Document each regex's failure mode explicitly. Today they fail silently — see §4 below. Codify the "if extraction returns empty bullets, render `available: false` placeholder" rule as a contract test, not as a heuristic comment.

**ADR-004 — Conversion Strip & per-journey bundle contract.**
The acne-shows-vitiligo-pack defect that Rule 12 was added to kill belongs in an ADR, not in a skill banner. Spec: every journey id `J` MUST have a bundle id `J-pack` UNLESS explicitly mapped via `JOURNEY_BUNDLE_OVERRIDES`; bundle.products MUST mirror dossier §08 daily combos 1:1; subscription = one-time × 0.78–0.85; reviewer + refresh date MUST be journey-sourced, not component-defaulted. The current hardcoded `Dr. Meera Iyer` default is a *commerce* claim ("Reviewed by a real practitioner") that is silently identical across every journey if a page forgets to pass `reviewer`. That is a substantiation risk under any consumer-protection regime.

**ADR-005 — Weekly evidence-refresh metric pipeline.**
See §2. This ADR documents the pipeline that backs the "Every regime refreshed weekly" claim. If the pipeline does not exist, the ADR says "claim suppressed until pipeline exists."

**ADR-006 — Skill versioning + dossier compatibility matrix.**
See §5.

### 1.3 Why this matters specifically for an AI-authored product

Without these ADRs, the *only* way to onboard a new agent (human or AI) is to read 1,183 lines of skill prose, the CLAUDE.md, and grep the codebase. The skill is being authored by Opus 4.7 in-session and consumed by future Opus 4.7 sessions. The lossy compression between sessions is your single largest correctness risk. A 7-ADR foundation that another model can re-read at session boot — and that a Python or TypeScript test can mechanically check — turns "founder's standing preferences from prior sessions" into a contract rather than a tribal memory.

---

## 2. Fabricated dashboard numbers — the single most damning AI-slop signal

### 2.1 What I found

`grep -rn "72 new sources\|14 dossiers updated\|3 honest downgrades" nichecore/` reported no matches, because the numerals are styled differently across markup. The actual hardcoded literals live at:

- `nichecore/app/page.tsx:120` — `<p className="font-display text-xl">72</p>` followed by label `new sources this month`.
- `nichecore/app/page.tsx:125` — `14` followed by `dossiers updated`.
- `nichecore/app/page.tsx:130` — `3` followed by `honest downgrades`.
- `nichecore/app/page.tsx:112` — `<p className="font-display mt-1.5 text-2xl leading-tight">June 1, 2026</p>` — the "Last evidence sweep" date is also a string literal.
- `nichecore/components/layout/conversion-strip.tsx:43` — `lastRefresh = "June 1, 2026"` — same date as a default prop. The ConversionStrip footer chip reads "Refreshed June 1, 2026" on every journey page regardless of when that dossier was actually last touched.

Above these numbers sits the H2 headline `"Every regime refreshed weekly with the newest research."` and a paragraph asserting "A backend factory sweeps Cochrane, EMA HMPC, AYUSH councils, TGA, NMPA, Health Canada NHP and the classical … corpus every week. New trials get graded. Null findings get surfaced. Weak interventions get downgraded honestly."

There is no backend factory, no Cochrane sweep, no metric pipeline. The `FactoryJob` type in `lib/types.ts` declares the shape (`sourcesScanned: number; claimsExtracted: number; safetyFlags: number; reviewer: string`) but no record creates one and no surface reads one. The `/admin/research-factory` route exists but does not write metrics back. The home page is a Potemkin dashboard.

### 2.2 Why this is the single most damning AI-slop signal

The product's entire differentiation thesis is "honest evidence-OS, not a marketing blog." The home page above-the-fold strip *quantifies that thesis with fabricated numbers*. Every other claim in the product becomes guilty by association. A skeptical reader (a clinician, a journalist, an FTC analyst, a competitor's lawyer) who notices that "72 / 14 / 3" never changes from week to week — they will, the date is also static — will reasonably conclude that the rest of the evidence framing is similarly performative. The dossier content itself is *better* than this strip suggests, which makes the contrast worse, not better.

The skill's own FORBIDDEN_WORDING list includes "AI found the cure" and "clinically proven (when only mechanistic)." It does not yet forbid "fabricated activity metrics." It should.

### 2.3 Two paths, pick one this week

**Option A — Real metric pipeline (the right answer, ~2 weeks).**
Create a `metrics/weekly-refresh.json` file written by an actual job. The job:
1. Reads every dossier's git history for the last 7 / 30 days; counts files where the body diff is non-trivial → `dossiersUpdated`.
2. Reads each modified dossier's bibliography section, diffs against the previous version's bibliography, counts new citations → `sourcesAdded`.
3. Scans for `**DO NOT RECOMMEND:**` rows added in §13.7 in the diff, plus rows whose grade column moved downward (e.g. `B → C`) → `honestDowngrades`.
4. Writes `{ lastSweep: ISO-date, sourcesAdded: N, dossiersUpdated: N, honestDowngrades: N, nextSweep: ISO-date }` and the home page reads it server-side at build time (Next App Router server component).

This is a ~150-line Node script. It is honestly mechanical. The signal it produces is real because git is the source of truth. Add a Vercel/Cloud Run scheduled job that runs the sweep weekly and commits the JSON.

**Option B — Hide the numbers until they're real (the right answer this afternoon).**
Replace the three numeric tiles with three *qualitative* tiles that are true today: "Sweeps Cochrane + EMA HMPC + AYUSH + TGA + NMPA + Health Canada NHP," "Honest downgrades when evidence shifts," "Sources cited inline in every section." Replace the "Last evidence sweep: June 1, 2026" date with the per-dossier `lastUpdated` field surfaced on the dossier page itself, where it is true. The "Weekly research refresh" headline stays — it expresses an *aspiration that the skill discipline enforces in each dossier regen* — but the *quantified activity claim* goes.

I would do Option B today and Option A within the sprint. Shipping Option A's numbers as soon as the pipeline is honest is fine; shipping the current literals is not.

### 2.4 Other fabrications to audit in the same pass

- `ConversionStrip` `lastRefresh` default — fabricated per-journey if the parent doesn't pass it.
- `ConversionStrip` `reviewer` default — Dr. Meera Iyer is named on every journey page that doesn't override. This is closer to a substantiation problem than to AI-slop, but it's the same family of bug: a default that the consumer reads as bespoke. Either the reviewer is a real person who has actually reviewed every protocol that shows her name (in which case she should be in a `lib/reviewers.ts` table with explicit `reviewedJourneys: string[]`), or the strip should require a reviewer prop and crash at build if one is missing for a journey.
- `internalRalph: { pass1Complete: true, pass2Complete: true, pass3Complete: true }` — every dossier I sampled has `3/3`. The skill describes RALPH as a multi-pass review where each pass has a distinct check. The Critic Audit *auto-fixes* missing ralph blocks by writing `true` for all three (`tools/critic-audit.mjs:172–183`). That is a self-laundering pattern. If RALPH is real, missing-ralph should fail CI, not get back-filled with "true." If RALPH is aspirational, drop it from the YAML.

---

## 3. Agent hallucination guardrails

### 3.1 The exemplar is good — and that makes the guardrail gap more dangerous

Reading the tinnitus dossier, I'd guess that 80–85% of its specific citations are real-and-correctly-attributed. The Cochrane-Hilton-2013-Ginkgo null is real, the Sereda 2018 Cochrane sound-therapy review is real, the Cima 2012 MBCT-T study is real, the Attias 1994 Israeli magnesium study is real, PREDIMED 2013 is real, the EMA HMPC monograph series is real, WHO Make Listening Safe 2022 is real. The dossier even surfaces the honest negative (Cochrane Hilton null on Ginkgo) inside the dossier's own daily-combos paragraph — the line `**TL;DR.** NAC 600 + Magnesium glycinate 200 + … (and Tebonin 120 *only if you've decided to do an 8-12 week try*)` is unusually disciplined for AI-authored health content.

But there are non-trivial categories of citation risk that the harness cannot detect:

- **Plausible-but-misattributed citations.** "Arda 2003 Turkish zinc study" — there is a Turkish zinc-and-tinnitus paper around that era; whether the year and conclusion as stated in the dossier exactly match is unverified. "Lorito 2008 Italy" for NAC — Lorito published on cochlear ototoxicity around that period; whether the dossier's clinical claim about NAC matches Lorito's actual findings is unverified.
- **Confidently invented PMIDs.** The dossier has one PMID — `Simpson 1998 PMID 9923984` for the homeopathy-null-RCT — and lists it inline in two places. A real model-output guardrail would resolve that PMID against PubMed at build time. None does.
- **Composite/illustrative entries presented near real ones.** §13.1 explicitly labels "Ravi, 52" as a composite ("not a real patient") — which is correct framing. But the cofactor table (§6.7) interleaves citations like `*(Health Canada NHP B12)*` with `*(EMA B6)*` and the reader cannot tell which are linked monographs vs vibes.
- **Hallucinated brand/product specifics.** "Vielight 810 + hand-held mastoid red-light," "SOVA night-guard," "Lofta WatchPAT," "myNoise app, Marpac Dohm," "Nurosym AM/PM, Sensate PM, Apollo Neuro daytime, Pulsetto." Most of these are real consumer products with broadly the claimed function. Whether each is sold and priced as the dossier asserts in §09 — and whether each is OTC and home-administrable (the doctrine's hard constraint) — is unverified.

### 3.2 What the skill enforces and what code enforces

The skill enforces the *shape* of evidence claims (every TL;DR must carry a citation, every table must have a plain-words column, Cochrane-null findings must be surfaced honestly when they exist). The code enforces *almost nothing* about the substance:

- `lib/research.ts` parses markdown but does not validate citations.
- `tools/critic-audit.mjs` checks 12 categories (cross-journey copy leak, YAML metadata, atlas vs dossier consistency, forbidden H3 titles, mandatory sections, parseable conventions, six traditions ≥3 mentions, §10.7 split, crisis routing, word count, slug consistency, cross-link integrity). None of these check that a single citation *resolves*.
- The dossier has 3 occurrences of explicit identifiers (PMIDs); the rest are author-year pointers that the audit accepts on faith.

Net: the skill rule "Cochrane honesty discipline" is enforced by author care, not by code. For an exemplar dossier authored under direct founder attention, that works. For 78 dossiers regenerated by parallel agents, it is a coin flip.

### 3.3 What to add — retrieval-augmented citation verification, in three escalating tiers

**Tier 1 — Mechanical citation linting (this sprint, ~3 days).**
Write `tools/citation-lint.mjs`. For each dossier:
1. Extract every italicised inline citation `*(…)*` and every reference-section row.
2. Parse out `(Author Year)` tuples, PMIDs (any 7–9 digit number near "PMID"), DOIs (`10.\d{4,}/.*`), and known-database URLs (cochranelibrary.com, ema.europa.eu/.../herbal, who.int/publications, ayush.gov.in, tga.gov.au, nmpa.gov.cn, canada.ca/.../natural-health-products).
3. Fail the build if a dossier of ≥10k words has fewer than 30 distinct citation tuples (the tinnitus exemplar has hundreds).
4. Fail if the §13.7 evidence-tier table has rows where the "Tier" column is `A` or `B` but the citation cell is empty.
5. Warn if any "DO NOT RECOMMEND" row in §13.7 has no Cochrane / systematic-review citation backing the negative claim (the skill's Cochrane-honesty rule).

This is cheap and catches the worst class of failure — "agent wrote a confidently-graded claim with no citation."

**Tier 2 — Resolution against real databases (next sprint, ~1 week).**
Same script, plus:
1. For every PMID, GET `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=PMID` and verify the returned author + year match the dossier's claim. Cache results.
2. For every DOI, resolve via Crossref `https://api.crossref.org/works/{doi}` and verify.
3. For every Cochrane review claim (`Cochrane <Author> <Year>`), check Cochrane Library RSS or scrape `cochranelibrary.com/cdsr/doi/...` against an index built once at startup.
4. For EMA HMPC monographs, mirror the EMA herbal-monographs index from `ema.europa.eu/en/medicines/landing/herbal-medicines-search.jsp`.
5. For WHO publications, mirror `who.int/publications/i/item/...` for cited document IDs.

Net throughput: a cached resolver pass over 78 dossiers should run in <5 minutes on a warm cache. Failed resolutions become CI blockers with explicit messages: "tinnitus-support.md:818 cites Lorito 2008 Italy on NAC — Crossref returned no Lorito 2008 paper on NAC in Italy. Verify."

**Tier 3 — Substantive claim verification with a retrieval-aware critic LLM (Q3 if budget allows).**
A second model (a "critic" pass distinct from the author Opus session) reads each `*(…)*` claim alongside the abstract of the resolved paper and answers a structured prompt: "Does the paper support the magnitude and direction of the claim as written?" Output is logged with confidence; low-confidence claims escalate to human review. This is the "reasoning-bank" pattern the skill ecosystem already uses for other domains; importing it here is non-trivial but tractable. It is also the *only* defence against the plausible-but-misattributed class of failure.

### 3.4 Tradition-floor enforcement against verifiable texts

The skill mandates "six traditions ≥2 entries each" (Ayurveda + TCM + Unani + Siddha + Tibetan + Homeopathy). The Critic Audit checks for ≥3 mentions of each tradition's name as a *word-count proxy*. That is a smell test, not verification. A real harness:

- For Ayurveda: claims that cite "Sushruta Samhita Latter Tantra ch. 21" should resolve against a canonical reference (CCRAS digitised corpus, GRETIL etext, or NIIMH). Same for Charaka, Ashtanga Hridaya.
- For TCM: Chinese Pharmacopoeia 2020 references should resolve against the NMPA-published volumes; classical citations should resolve against TCMID, SymMap, or Chinese-text-project.org.
- For Unani: Hamdard Dawakhana formulary entries should resolve against the Hamdard catalogue.
- For Siddha: PCIMH publications.
- For Tibetan: Men-Tsee-Khang catalogue.
- For Homeopathy: Boericke Materia Medica + Allen's Keynotes are public-domain and trivially indexable.

The skill should pick *one* canonical reference per tradition and require every traditional citation to resolve against it. The current "≥2 entries each" floor accepts the literal string "Ayurveda" twice as compliance. That is too weak.

---

## 4. Harness coverage + test fixtures

### 4.1 What exists

`nichecore/tests/` contains seven Playwright spec files:
- `accessibility.spec.ts`
- `coverage.spec.ts`
- `doctrine.spec.ts`
- `interactions.spec.ts`
- `journey-continuity.spec.ts`
- `mock-fidelity.spec.ts` (16 tests, the only one CLAUDE.md actively references)
- `vitiligo-golden-path.spec.ts`

These are e2e browser tests against a built site. There are **zero unit tests** anywhere in `nichecore/lib/`, `nichecore/components/`, or `nichecore/tools/`. The `lib/research.ts` extractor — the load-bearing parser for the entire dossier-to-UI pipeline — has no fixture, no snapshot, no parameterised test.

I grep-confirmed: no test file imports `extractTopShelf`, `splitDossierByH2`, `splitChunkByH3`, `parseTimeline`, or `parseCombos`.

### 4.2 Where `lib/research.ts` can fail silently

I read through `extractTopShelf` and the five `parseX` helpers. The failure modes are all the same pattern: regex doesn't match, the parser falls back to a generic placeholder string, the card renders as `available: false` or with a non-specific bullet that *looks* like real content. The user has no signal. The author has no signal. The QA has no signal. Specific failure points:

- **`parseTimeline`** (line 281). The month-marker regex `/(\*\*)?(?:Months?\s+\d|Month\s+\d|Weeks?\s+\d|Week\s+\d|Phase\s+\d|Year\s+\d)/i` requires bold-or-bare prefixes like "Month 1", "Week 4", "Phase 2." Tinnitus uses `**TL;DR (Weeks 1-4 — Adaptation).**` — this matches because "Weeks 1-4" contains "Weeks 1." Good. But a dossier that wrote `**(Adaptation phase, weeks 1-4)**` or `**Initial 4 weeks**` would silently fall to the "no markers" branch and pick the first 3 bullets of any kind — possibly a "Quick start" bullet that has nothing to do with the timeline.
- **`parseCombos`** (line 297). Strategy A looks for H3 titles matching `/combo\s*\d/i`. Tinnitus uses `### 8.2 Combo 1 — Hair-cell + circulation (08:00)`. Good. But if a dossier titled `### 8.2 Morning stack — hair-cell + circulation` the strategy collapses to Strategy B (`combo\s*\d` in body bullets) — likely empty — and you get the fallback `"Three timed daily combos — see full regimen."` Five dossiers in the corpus could all show the same fallback bullet without anyone noticing.
- **`parseStrictlyAvoid`** (line 330). The H3 title regex is broad: `/strict(?:ly)?\s*avoid|do\s*not|forbidden|never\b|absolutely\s*avoid/i`. Strategy B scans for `^(?:do\s*not|never|avoid|don['']t|eliminate)\b`. A dossier that uses `**Cautions and exclusions**` as the H3 title and writes "Should not be combined with …" prose hits no rule. Returns the placeholder.
- **`parseDiet`** (line 368). Day-header regex matches `**Day 1**` or `**Monday**`. Tinnitus's §6 uses a different convention — the dossier has 250-word ration paragraphs not bold day-headers. Result: falls to Strategy A2 (table rows with numeric day cells) then to Strategy B (generic bullets). Likely returns the fallback `"Mediterranean-MIND base + 7-day meal anchor."` which is non-specific and very-AI-flavoured.
- **`parseSuppliers`** (line 411). Monthly-cost regex is `/(?:\*\*\s*)?(?:Recurring\s+total|Total\s+monthly|Monthly\s+(?:cost|total)|Recurring)[^.\n]{0,40}\$[\d,]+/i`. Requires the literal `$` sign. A dossier that prices in ₹ or € fails this regex. The brand-list regex is a hardcoded whitelist of 18 vendor names — anything else is invisible.

Each of these is reasonable individually. Collectively, they constitute a parser whose contract is "I'll try, and if I can't, I'll show a generic string and pretend it's content." That is consumer-visible AI slop with extra steps.

### 4.3 What to add — a 4-layer test harness

**Layer 1 — Unit tests on `lib/research.ts` (this sprint).**
Add `nichecore/lib/__tests__/research.spec.ts` (vitest). For each of `splitDossierByH2`, `splitChunkByH3`, `extractTopShelf`, `parseTimeline`, `parseCombos`, `parseStrictlyAvoid`, `parseDiet`, `parseSuppliers`:
- Happy path: feed a known-good markdown fixture (carved from the tinnitus dossier, frozen as `__tests__/fixtures/tinnitus-shape.md`). Assert exact bullet count, exact bullet text, `available: true`.
- Edge cases: empty body, missing H3s, unicode currency symbol, em-dash variants, BOM, CRLF line endings, table with separator-only rows.
- Regression cases: a fixture per dossier that previously broke a parser. Treat the parser as a contract that consumes specific markdown conventions and FAILS LOUDLY when those conventions are absent.

**Layer 2 — Dossier-fixture snapshot tests (this sprint).**
For each of the 78 dossier ids, snapshot the output of `extractTopShelf` and a serialised `splitDossierByH2`. Run on every PR. A change to the parser or to a dossier surfaces as a snapshot diff a human must approve. Today, a parser bug that silently swaps the order of two bullets ships invisibly.

**Layer 3 — Python tests on the bundle generator (next sprint).**
`scripts/generate-bundles.py` and `apply-bundles.py` have no tests. The acne-shows-vitiligo-pack defect that Rule 12 was added to kill is exactly the class of bug that a pytest suite would have caught. Add:
- A parametrised test that runs the bundle generator against the full dossier corpus and asserts every journey id has exactly one bundle id matching `<id>-pack`.
- An assertion that no two bundles share a product list signature unless explicitly mapped via `JOURNEY_BUNDLE_OVERRIDES`.
- A round-trip test that `apply-bundles.py` then reading `lib/data.ts` round-trips bundle JSON cleanly.

**Layer 4 — e2e dossier-rendering tests (next sprint).**
The existing Playwright suite tests vitiligo and tinnitus. Generate one synthetic test per journey id: `navigate to /domain/slug, assert TopShelf exists, assert ConversionStrip exists if bundle present, assert no TopShelf card displays the fallback placeholder string`. The third assertion is the trip-wire that turns silent extractor failure into a CI failure.

### 4.4 Critic Audit and CI integration

`tools/critic-audit.mjs` is the single best piece of harness in this repo. It is the only script that actually validates the dossier corpus against the skill's discipline. It is also entirely manual today — it writes a markdown report and exits. Promote it:

1. Run on every PR via GitHub Actions, fail-on-BLOCKER, warn-on-WARN.
2. Remove the auto-fix behaviour for `internalRalph` (back-filling `true` for missing ralph passes is exactly the laundering problem flagged in §2.4). Auto-fix YAML schemaVersion and ailmentId, but never the integrity flags.
3. Add the Tier-1 citation lint from §3.3 as a new category C13.
4. Add an "extractTopShelf-against-this-dossier returns ≥1 fallback placeholder" check as category C14 — i.e., the audit *runs the extractor* against each dossier and flags dossiers where any card returns the generic-fallback string.
5. Add a `schemaVersion` semver-range gate as category C15: every dossier must declare `schemaVersion >= MIN_SCHEMA_VERSION` (defined in CI env), else fail.

---

## 5. Skill evolution discipline

### 5.1 The skill is genuinely impressive — and on track to collapse under its own weight

`SKILL.md` is now 1,183 lines. The v6.2.7 banner alone (lines 8–31) is denser than most ADRs. The cumulative rule set spans v6.0 doctrine (OTC + home + global sources, six traditions, no US-regulator authority), v6.1 (TL;DR-everywhere, plain-English-first), v6.2 (progressive disclosure, tree-friendly H3s, §13.7 honest table, Cochrane honesty, §10.7 split, adjunctive coverage, 18k ceiling), v6.2.1 (table-TL;DR column, forbidden "Overview" H3), v6.2.2 (4 defects from tinnitus regen agent), v6.2.3 (web-rendering contract), v6.2.4 (DecisionHero parseable surface + 8 micro-defects from the overnight 25-expansion wave), v6.2.5 (TopShelf 5-card row + drop journey counts), v6.2.6 (per-journey presentation overlay), v6.2.7 (per-journey bundle curation).

Each version added rules. None retired or consolidated rules. The skill is approaching the point where no human or model can hold the full rule set in working memory in a single session.

### 5.2 What is unsafe today

- **There is no formal release-notes mechanism.** The banner block at the top of `SKILL.md` is the only record. It is plain prose. Diffing v6.2.4 to v6.2.5 requires reading both.
- **There is no skill-vs-dossier-compliance test.** A dossier may declare `schemaVersion: v6.1-plain-english-first-plus-emerging` (the tinnitus dossier does, line 11) while the skill is at v6.2.7. There is no script that flags this gap or migrates the dossier.
- **The `schemaVersion` field is not validated anywhere.** I grepped `nichecore/`. The string `schemaVersion` appears in 79 dossier YAML headers, one mention in the Critic Audit (where it can auto-insert `"v6.2.3"` if missing), and once in `lib/research.ts` as a non-existent field type — it is not even in the `DossierMeta` interface (lines 7–18). The TypeScript type does not include the field that the skill claims is mandatory.
- **No way to know which dossiers were written against which skill version.** The audit's `schemaVersion` auto-fix writes `v6.2.3` regardless of which version the dossier was actually authored against. That destroys provenance.
- **No migration plan.** When v6.2.5 mandated TopShelf-parseable conventions in §08, §10.6, §06, §09, §12, every existing dossier silently became partially non-compliant. The Critic Audit's 5 surprising findings include "10 dossiers exceed the 18k hard ceiling" and "Vitiligo flagship has no red-flag H3 sub-section" — those are exactly the unforced compliance debts that a versioning discipline would surface as a migration ticket, not as a postscript.

### 5.3 What to add — a skill-versioning + compatibility-matrix discipline

**Move the rule corpus into structured form.**
`.claude/skills/ailment-360-research/SKILL.md` stays as the agent-facing prompt, but ship alongside it:

- `RULES.json` — the machine-readable rule corpus. Each rule has `{ id: "R1.PROGRESSIVE_DISCLOSURE", since: "v6.2.0", deprecates: [], enforcement: "skill" | "lint" | "extractor", description, parser_key?: string }`.
- `CHANGELOG.md` — proper semver-style release notes per version with Added / Changed / Deprecated / Removed sections.
- `COMPATIBILITY.md` — the matrix. For each schemaVersion, which rules apply; which dossiers in the corpus are currently at which schemaVersion; which need migration.

**Validate dossier schemaVersion at build.**
Add the field to `DossierMeta`. Add a CI check that every dossier's `schemaVersion` ≥ `MIN_SCHEMA_VERSION` declared in `RULES.json`. Below the floor → build fails with a migration-ticket pointer.

**Stop laundering provenance.**
The Critic Audit's auto-fix for missing `schemaVersion` should write `"unknown-pre-v6.2.3"` not `"v6.2.3"`. That makes the gap honest and CI can target the laundered files.

**Adopt a deprecation policy.**
Future rules use the `deprecates: ["R3.OLD_RULE"]` field. After a deprecation window (say 3 weeks), the skill removes the old rule and the lint promotes its violation from WARN to BLOCKER. Rule count stops monotonically increasing.

**Skill-vs-dossier-compliance test.**
A script `tools/compliance-check.mjs` that takes a dossier path and a target schemaVersion, and reports which of that version's rules the dossier passes/fails. Run it per-dossier in CI. Run it interactively in the agent session before a dossier is committed.

---

## 6. Specific findings from the requested checks

### 6.1 Hardcoded refresh-stat literals — exact locations
- `nichecore/app/page.tsx:112` — literal `"June 1, 2026"` (Last evidence sweep).
- `nichecore/app/page.tsx:120` — literal `72`, labelled `new sources this month`.
- `nichecore/app/page.tsx:125` — literal `14`, labelled `dossiers updated`.
- `nichecore/app/page.tsx:130` — literal `3`, labelled `honest downgrades`.
- `nichecore/components/layout/conversion-strip.tsx:43` — `lastRefresh = "June 1, 2026"` default prop.

### 6.2 `extractTopShelf()` silent-failure surface
Documented in §4.2. Five named regex failure modes, each falling to a non-specific fallback string that renders as content. Zero unit tests on any of them.

### 6.3 Tinnitus exemplar — citation-pattern sniff test on 50 random lines
I read lines 1–80, 400–520, 800–895. The dossier shows three citation patterns:
- **Pattern A — citation-tuple in italics** (`*(Cochrane Hilton 2013; Sereda 2018)*`). Dominant. Hundreds of instances. Most look real; none are verified.
- **Pattern B — explicit PMID** (`Simpson 1998 PMID 9923984`). Three instances total — `grep -c "PMID" tinnitus-support.md` returned 3. That is the only category that *could* be auto-verified today and isn't.
- **Pattern C — informal pointer** (`*(Composite illustrative — Meikle 2012 baseline range)*` at lines 822–825). Clearly labelled as composite. Good practice.

I flagged for the founder's attention:
- Line 411: `*(EFSA BPA 2023; WHO indoor-mould 2009)*` — EFSA's BPA re-evaluation did finalise in early 2023 (real). WHO indoor-mould guidance is from 2009 (real).
- Line 415: `*(UK MHRA anti-cholinergic burden 2022)*` — MHRA has done anticholinergic-burden communications in that period, but a specific 2022 publication should resolve to a specific URL.
- Line 462: `*(S-VYASA Bengaluru Bhramari trials; Karolinska Lundberg nasal nitric-oxide work)*` — S-VYASA has published on Bhramari pranayama; Lundberg at Karolinska is the canonical nasal NO researcher. Both broadly real; the specific trial citations are not enumerated.
- Line 856: `**DO NOT RECOMMEND: Homeopathy as active layer** | — | Simpson 1998 RCT — no benefit beyond placebo for tinnitus specifically.` Simpson 1998 PMID 9923984 — this PMID should be resolved (and is the easiest test of the proposed Tier-1 citation lint).

Net: the citation pattern is *better than typical AI-authored health content*. The harness has no way to know that, and a future regen pass might be worse.

### 6.4 Is the Cochrane-honesty rule enforced anywhere in code?
**No.** It is enforced by author care. The Critic Audit checks for a §13.7 evidence-tier comparison section (presence regex `(^|\n)#+\s*13\.7|honest.{0,4}evidence.{0,4}tier|do.{0,4}not.{0,4}recommend|we don't recommend|grade.{0,2}X.{0,2}/i`). That confirms the *section* exists. It does not check that any Cochrane-null finding is surfaced honestly, that "DO NOT RECOMMEND" rows back their negative claim with a systematic-review citation, or that the grading is consistent between §13.7 and the inline dossier prose. The skill says "Cochrane honesty discipline." The code says "the section exists."

### 6.5 Is `schemaVersion` validated anywhere?
**No.** It is declared in YAML, parsed by the Critic Audit's simple YAML parser, used only to auto-insert a default if missing. It is not in the `DossierMeta` TypeScript type. The dossier `.md` files declare values like `v6.1-plain-english-first-plus-emerging` (tinnitus) and the audit auto-fix inserts `"v6.2.3"` — the two forms are incompatible and nothing reconciles them.

### 6.6 Test file count in `nichecore/`
Outside `node_modules/`: **7 Playwright spec files** under `nichecore/tests/`, **0 unit-test files** under `nichecore/lib/`, **0 unit-test files** under `nichecore/components/`, **0 test files** under `nichecore/scripts/` (the Python bundle generator), **0 test files** under `tools/` (the Critic Audit). The Playwright suite is e2e against a built site; it does not exercise the parser or the bundle generator directly.

---

## 7. Putting a date on it — the six-week harden plan

A focused six-week sprint, prioritised by risk reduction per engineering hour:

**Week 1 — Stop fabricating numbers.** Choose Option B (qualitative tiles) for the home page today. Land the metric pipeline that backs Option A. Make `ConversionStrip` require explicit `reviewer` and `lastRefresh` props; crash at build for any journey that doesn't provide them. Remove the Critic Audit's silent ralph back-fill.

**Week 2 — Ship the missing ADRs.** ADR-001 through ADR-006. Each ≤300 lines. Reference them from `CLAUDE.md` and from `SKILL.md`. Move the v6.2.7 banner block out of `SKILL.md` into `CHANGELOG.md` + `RULES.json` + `COMPATIBILITY.md`.

**Week 3 — Unit tests on the extractor + Critic Audit promoted to CI gate.** All 8 `lib/research.ts` parsers under vitest with fixtures. Critic Audit runs on every PR; BLOCKER fails the build. Add C13 (citation lint) and C14 (extractor-fallback-detection) categories.

**Week 4 — Tier-1 citation lint.** Local-only resolution. Inline PMIDs and DOIs must be present in some structured form; ≥30 distinct citation tuples per ≥10k-word dossier; "DO NOT RECOMMEND" rows must cite a systematic-review source. Run as part of the Critic Audit.

**Week 5 — Tier-2 citation resolution.** Real PubMed eutils + Crossref resolution with a local SQLite cache. Cochrane Library and EMA HMPC index mirrored once and queried locally. Failed resolutions are BLOCKER.

**Week 6 — Skill compatibility matrix + dossier migration.** Add `schemaVersion` to `DossierMeta` and to the type. Tag every dossier in the corpus with its honest schemaVersion (not the laundered `v6.2.3` default). Generate a migration ticket for each dossier where `schemaVersion < v6.2.7` describing the specific rule gaps. Ship the migration over the next quarter.

This is achievable for a single engineer with a model collaborator. None of these items require new product surfaces or storefront changes. They harden what is already shipped.

---

## 8. The verdict to the founder

The tinnitus exemplar is *content I would let my own family read*. The dossier framing is honest, the Cochrane-null on Ginkgo is surfaced inside the daily combos rather than buried, the §13.7 "DO NOT RECOMMEND" rows are exactly the move that this category needs more of, and the strict OTC + home + no-US-regulator-authority doctrine is internally coherent. The skill's progressive-disclosure architecture (plain-English first, mechanism behind a toggle) is — I will say this plainly — a better pattern than 90% of what AI-authored health content does today. The Critic Audit is a serious engineering artefact. The grade legend in `lib/evidence.ts` is honestly framed. The pluralist evidence model — A/B/C/D plus T (traditional-use) plus H (hypothesis) plus X (rejected) — is a coherent answer to a question (how do we grade traditional knowledge alongside RCT-graded evidence) that mainstream evidence-OS products refuse to answer at all.

But the harness around the content is at v0.4, while the content itself is at v1.5. Specifically:

- The home page's "72 / 14 / 3" stats are fabricated and undermine the entire honesty positioning of the product.
- The extractor that connects dossiers to UI is 499 lines of regex with no tests and silent-failure modes.
- There is no design-doc layer between the skill prose and the code.
- There is no retrieval-augmented citation verification — the "Cochrane honesty discipline" is enforced by author care, not by code.
- The skill has versioned through v6.2.1 → v6.2.7 in three weeks without a compatibility matrix or migration plan, and the `schemaVersion` field that should track this is silently laundered by the audit script.

I would not ship this to consumers in its current state. Not because the content is bad — it is not — but because the *product around the content* makes claims (real-time evidence sweeps, weekly refresh, honest downgrades, reviewer attribution) that the system does not yet have the receipts for. The fix is mechanical, not philosophical. Six weeks of harness work, in the order above, takes this product from "evidence-OS pretender for the duration of the home-page strip and the few silent-extractor cards" to "evidence-OS with audit-grade receipts."

Ship Option B today. Open the ADR docket tomorrow. Promote the Critic Audit to CI gate this week. Build the citation lint in two weeks. Then ship.

— External AI research lab review, 2026-06-05
