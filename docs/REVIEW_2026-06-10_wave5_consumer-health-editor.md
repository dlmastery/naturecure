# Wave-5 Consumer-Health-Editor Review — Tinnitus Dossier 2026-06-10

**Reviewer.** Senior consumer-health editor, 18 years across the Cochrane Consumer Network (plain-language summaries discipline), NICE Evidence Search (UK), NHS Choices / nhs.uk content design (Information Standard era through 2022 redesign), UpToDate Patient Education, MedlinePlus (US NLM), Patient.info UK, Healthdirect Australia, and India National Health Portal. My day-job lens is "would I publish this on the NHS Choices / UpToDate / Cochrane Consumer Network surface tomorrow?" My night-job is auditing what got retracted, who got sued, and why mid-tier specialty publishers exit the market.

**Distinct from neighbouring waves.** Wave-3 health-info UX already audited reading age (FKGL 14.6), WCAG 2.2 AA, and screen-reader behaviour. Wave-5 fact-checker (running in parallel) is doing claim-by-claim verification against PMID/DOI/monograph anchors. My lens is *editorial standard + masthead positioning* — would this be publishable on the NHS Choices surface? On UpToDate's? On MedlinePlus's? On Patient.info's? Where does NicheCore land in the publisher landscape, and what would it take to hold a line at one of those mastheads.

**Materials read.**

1. `nichecore/research/tinnitus-support.md` (post-wave-3, schemaVersion v7.0.0-rigor-pass-2026-06-06, 1,153 lines, 23 prior reviewer audit annotations in YAML front matter).
2. `.claude/skills/ailment-360-research/SKILL.md` (current v7 banner with 8 overnight callouts + cumulative v6.2.4 rules).
3. The four `docs/IMPROVEMENT_BACKLOG_*.md` and `docs/REVIEW_*.md` predecessors (waves 1–4; 23 prior reviewers).

**Headline verdict.** **Major revision required at the editorial-masthead layer; doctrine-reconciliation choice required from the founder.** The content itself has now passed through enough reviewer waves that it is genuinely defensible at a *technical* editorial standard. What it has *not* yet done is decide what masthead it is publishing under — and the doctrinal collisions with each of the established consumer-health editorial standards (NHS Choices, UpToDate, MedlinePlus, Patient.info) are load-bearing enough that the founder must make a sovereign editorial-architecture choice before the dossier scales to 78 conditions. The dossier today reads like an *intelligent specialty publisher's flagship* — closer to Patient.info UK or Healthdirect AU than to NHS Choices or UpToDate. That is a *defensible position* and a *commercial position* — but the dossier surfaces neither the position nor the editorial-board structure that the position requires. I will surface 5 BLOCKER-class editorial defects, ~16 P1 corrections, and a recommended editorial-architecture reconciliation that costs roughly £200–800k/year and brings the 78-dossier atlas to within the upper quartile of mid-tier specialty publishers.

The non-trivial finding: **the doctrine's no-US-regulator-authority rule is a publisher-defining choice that excludes NHS Choices, UpToDate, MedlinePlus, and most of the Cochrane Consumer Network from the partnership/co-publication universe — but opens the Patient.info + Healthdirect + India NHP universe cleanly.** The honest masthead path is the second one. The dossier should be designed against it explicitly.

---

## D0. The fundamental editorial-masthead diagnosis (read this first)

Before the five dimensions, the one observation that touches every one of them: **NicheCore today reads like a publisher without a declared masthead.** It has a *doctrine* (global-sources, OTC-strict, home-only, six-traditions, no-US-regulator-authority). It has an *editorial discipline* (the v6.2.x skill + 23 reviewer waves). It has a *style guide* (progressive disclosure, "For you, in plain words" openers, TL;DR table columns, §13.7 honest-tier comparison). What it does not have, in any visible surface, is the kind of *editorial-board + named-clinical-lead + review-cycle + corrections-policy* infrastructure that an Information Standard scheme submission, a Cochrane Consumer Network co-publication, a Patient.info advisory-board signature, or a Healthdirect cross-reference would require.

This is not an oversight — it is a *deferred masthead choice*. The waves 1–4 reviewers were not asked which masthead NicheCore is publishing under; they assumed the founder would resolve it. The reviewer pattern that produced the dossier (AI agent author + sequenced specialist reviewers + founder synthesis) is *editorially robust at the per-article level* and *editorially silent at the masthead level*. The five dimensions below all reduce to: pick the masthead, build the editorial-board around it, declare it on the surface.

Now the five dimensions.

---

## D1. NHS Choices / nhs.uk editorial standard (BLOCKER for direct alignment; informative for technical discipline)

### 1.1 What the NHS Choices standard actually demands

The Information Standard scheme (run by NHS England 2009–2016, then absorbed into the Patient Information Forum's PIF TICK 2020 onward) and the subsequent nhs.uk content design (2017–2026) sit on five load-bearing pillars: (a) **named clinical lead** with declared credentials reviewing every claim; (b) **stated review cycle** — typically 12 months for chronic-condition pages, 6 months for safety-sensitive content, immediate for safety signals; (c) **plain language at reading age 9** — nhs.uk content design 2022 mandates Hemingway-grade-9 or lower for primary content; (d) **page length under ~1,500 words on the primary page** with deep-dive links to specialist content; (e) **non-commercial editorial separation** — nhs.uk is publicly funded and explicitly does not run advertising, affiliate links, or product recommendations.

### 1.2 Where the dossier sits against each pillar

(a) **Named clinical lead.** The YAML front matter names `authorAgent: ailment-360-research` and the wave-2 BLOCKER flagged a `reviewerName` field defaulting to "Dr. Meera Iyer" — a placeholder. No human clinical lead is named on the surface. This is the **single largest masthead gap**. Under the Information Standard / PIF TICK, this is disqualifying — not for the content quality, but for the accountability surface. The NHS Choices editorial standard does not care that the content is well-researched; it cares that a named human clinician with credentials has signed it and can be held accountable if a reader is harmed.

(b) **Stated review cycle.** The YAML carries `lastUpdated: 2026-06-06` and `schemaVersion: v7.0.0-rigor-pass-2026-06-06`. There is no `nextReviewDue` field, no `safetyReviewCadence`, no published corrections-log. The Cochrane Consumer Network publishes a "what changed" diff on every plain-language summary update; UpToDate does the same. The dossier's `factualErrorsFixedThisRevision` block is the right *shape* of a corrections-log; it needs to migrate from YAML metadata to a reader-facing "Corrections and updates" footer with a publicly stated review cadence (annual baseline, immediate on safety signals — the wave-2 pharmacovigilance reviewer's surface).

(c) **Reading age.** Wave-3 health-info UX flagged FKGL 14.6 against the nhs.uk grade-9 target. That gap is real and is a wave-3 backlog item, not a wave-5 finding. Note for masthead positioning: nhs.uk grade-9 is the *strictest* threshold; UpToDate clinician-facing runs grade 12–14 routinely; Patient.info UK averages grade 11; Healthdirect AU targets grade 8. **The dossier's current reading age aligns with Patient.info + UpToDate, not nhs.uk + Healthdirect.** That is a masthead choice, not a defect.

(d) **Page length.** The dossier is ~17,000 words on a single canonical URL. nhs.uk's tinnitus page (`https://www.nhs.uk/conditions/tinnitus/`) is ~1,200 words across 5 short pages with deep-dive links. **This is a structural mismatch with the NHS Choices standard.** It is *not* a mismatch with UpToDate (whose tinnitus chapter runs ~25,000–35,000 words across sections), Cochrane Consumer Network plain-language summaries (typically 800–1,200 words but paired with a full Cochrane Review of 30,000–80,000 words), or Patient.info UK (whose specialist condition pages run 3,000–8,000 words). **The dossier is publication-length compatible with UpToDate + Patient.info, not with NHS Choices + Healthdirect.** Wave-3 UX already proposed a progressive-disclosure surface (90-second read mode, deep-dive collapsibles); the masthead implication is that the *short surface* should be designed to NHS Choices length discipline (~1,200 words at grade-9) and the *deep surface* should be designed to UpToDate length discipline (~17–25k words at grade 12–14). That is one dossier with two reading layers, not one document.

(e) **Commercial separation.** The dossier integrates with `tinnitus-quiet-90` ($169 bundle), affiliate-style "Brand options" columns naming Schwabe Tebonin / Doctor's Best / Pure Encapsulations / Jarrow / Thorne / Kaneka etc., and the ConversionStrip CTA. **This is structurally NHS-Choices-incompatible**. nhs.uk policy prohibits affiliate, advertising, and product-recommendation surfaces. There is no editorial path that lets NicheCore both ship the bundle storefront and hold a nhs.uk-style masthead. The honest publisher-positioning is: NicheCore is a *commercial specialty publisher* in the Patient.info / WebMD / Healthline mould — not a public-service publisher in the NHS Choices / Healthdirect mould. Declare the position, build the editorial separation discipline around it (ASA-compliant brand-disclosure footers per wave-2 advertising-substantiation, COI declarations on every Brand-options row, "we may earn a commission" surfaces) rather than pretending the bundle is somehow editorial-neutral.

### 1.3 The NICE Evidence Search collision

NICE Evidence Search (the UK National Institute for Health and Care Excellence's secondary-evidence aggregator, now absorbed into the NICE BNF + CKS surfaces) evaluates evidence strictly by **GRADE-rigor hierarchy**: systematic reviews + meta-analyses → individual RCTs → observational → mechanism → tradition. The six-traditions-equal-voice framing the founder has mandated is **structurally NICE-incompatible** at the rigor-hierarchy level. NICE would never publish a page in which Ayurveda, TCM, Unani, Siddha, Tibetan and Homeopathy are given parallel structural sections to the Cochrane-graded interventions — not because the traditions lack value, but because NICE's editorial-rigor convention is to grade everything against one hierarchy.

This is a *real* doctrinal collision, not a fixable defect. The reconciliation choice is binary:

- **Path A (NICE-compatible).** Restructure §4 (Six Traditions) as a single "Traditional and complementary medicine — what the global evidence base says" section, GRADE-graded throughout, with the T-tier honestly named as "documented tradition, not evidence-graded for clinical decision." This loses the founder's six-traditions-equal-voice frame.

- **Path B (NicheCore-doctrine sovereign).** Keep the six-traditions structure exactly as is, and declare the doctrine explicitly: "NicheCore evaluates evidence by both modern systematic-review hierarchy and traditional-medicine canonical-text-corpus discipline; the two are surfaced in parallel because we hold both to count. This is not the NICE editorial convention and not the Cochrane editorial convention." That declaration is what makes the dossier *honest about its masthead*.

**My recommendation: Path B.** The doctrine is the moat. Renaming the moat to fit NICE convention erases the moat. But declare the doctrine, and declare what masthead it puts NicheCore on (not NICE-compatible; not nhs.uk-compatible; close to Patient.info UK + Healthdirect AU + India NHP + Cochrane Consumer Network in the *non-USA + global-evidence-pluralist + named-tradition-honouring* publisher family).

### 1.4 BLOCKER-N1: The nhs.uk + NICE masthead is unreachable; declare it; pick the publisher family NicheCore actually belongs to

Surface the masthead choice on the home page + on every dossier footer. Three sentences:

> *NicheCore is a global-evidence-pluralist consumer-health publisher. We honour modern systematic-review hierarchy and traditional-medicine canonical-text-corpus discipline in parallel; we do not align with the NHS Choices / NICE convention of single-hierarchy GRADE-only evidence. We are closest in editorial position to Patient.info UK, Healthdirect Australia, India National Health Portal, and the Cochrane Consumer Network plain-language tradition.*

Add this banner to the home page footer, the `/atlas` footer, the dossier shell footer, and the about page. **Until this declaration ships, every NHS-Choices-trained reader is reading the dossier against an editorial convention it does not aim to satisfy and will mark it down for failing.** Declaring the position re-baselines the reader to the masthead the dossier actually targets.

---

## D2. UpToDate clinician-facing standard (the *closest structural analogue*; honest gaps surfaced)

### 2.1 What UpToDate's tinnitus chapter actually does

UpToDate's "Etiology and diagnosis of tinnitus" + "Treatment of tinnitus" chapters (most recent update 2024, lead author varies by topic — Dirk De Ridder + Sarah Sydlowski are recent tinnitus contributors) cover: **etiology + classification** (subjective vs objective, pulsatile vs non-pulsatile, somatic-modulable, sub-types); **clinical evaluation** (history + audiogram + MRI triggers + medication review); **sound therapy** (Cochrane-Sereda-2018 honest verdict); **CBT** (multiple-RCT-supported); **hearing aids** (the highest-impact single intervention for hearing-loss-driven); **medications** (drugs to avoid, drugs without strong evidence — antidepressants, anxiolytics, anticonvulsants honestly graded); **emerging therapies** (Lenire bimodal, taVNS, transcranial-magnetic-stimulation honestly graded); **specialty referral criteria** (when to escalate); **key clinical recommendations** (numbered list at chapter close); **summary**; **author disclosures** (publicly visible); **"last reviewed" + "what changed"** boxes.

### 2.2 Where the dossier hits the UpToDate standard

(a) **Topic coverage.** The dossier covers every UpToDate-chapter topic, plus the six-traditions surface UpToDate omits. **Topic coverage is at parity or exceeds UpToDate.**

(b) **Structured sub-typing.** The §2.6 sub-types table (7 sub-types with realistic-prognosis column) is *better* than UpToDate's prose treatment of the same material. The §11.5 life-stage gate is novel — UpToDate has no equivalent. **This is one of the dossier's genuine masthead-differentiating strengths.**

(c) **Cochrane verdict honesty.** §3.2 Ginkgo + Cochrane null discipline is *exactly* what UpToDate does in its "Cochrane summary" boxes. Apply this same discipline more consistently:

- §3.3 Magnesium — the Attias 1994 IDF hearing-protection RCT is correctly distinguished from the Cederroth 2011 chronic-tinnitus null, but the row TL;DR ("Plausible cofactor floor...") is gentler than UpToDate would write it. UpToDate would write: *"Magnesium supplementation has not been shown to reduce tinnitus in the only RCT in chronic tinnitus (Cederroth 2011, null primary endpoint). Mechanism + cofactor rationale is plausible; clinical effect in the target population is unproven."* Adopt the UpToDate phrasing for every C-grade row.

- §3.3 NAC — graded B but the Cochrane-grade evidence in chronic tinnitus is genuinely weaker than B (the Lorito 2008 + Vellore + Coleman 2007 trials are noise-injury / ototoxic-prevention, not chronic tinnitus established). UpToDate would grade this as Cochrane-unrated for chronic tinnitus; prevention-graded for noise injury. Re-grade the row to surface the indication-mismatch.

- §3.3 Lion's Mane — graded C honestly with "no direct tinnitus RCT" — this is the UpToDate standard exactly. Apply the same "no direct tinnitus RCT — graded by extrapolation" disclaimer to every row where it's true (Vinpocetine outside narrow cerebral-insufficiency context; CoQ10; R-ALA; L-arginine; binaural beats §5.3; red-light §5.10; taVNS §5.12; PEMF §5.14).

(d) **Citation discipline.** UpToDate cites every claim with structured author + year + journal + volume + pages + PMID. Waves 1–2 + 5-fact-checker have all flagged the dossier's mixed citation style (some rows have PMID, some have year only, some have "Italy" or "Israel" as a location marker without trial-name + journal). The factualErrorsFixedThisRevision YAML block lists ~9 citation corrections — Cima Maastricht-not-Bristol, Megwalu St-Louis-not-Singapore, Hurtuk Columbus-not-Israel, TENT-A2 2022-not-2024, Hilton/Sereda re-issue, Attias-vs-Cederroth distinction, EMA Ginkgo indication clarification, Lenire ITT-vs-completer decomposition, Bhramari B→H downgrade. **Each of these corrections vindicates the UpToDate convention.** The full citation pass is wave-5-fact-checker's surface, not mine — but the *editorial implication* is that until the dossier hits 100% PMID/DOI-anchored on every claim, it cannot be cross-referenced from UpToDate's "External links" surface (UpToDate does cross-link to Patient.info, NHS Choices, MedlinePlus, but only to surfaces that meet citation-anchoring standards).

(e) **Last reviewed + what changed.** UpToDate's "what changed in this update" box is the gold-standard transparency surface for revisions. The dossier's `factualErrorsFixedThisRevision` YAML is the same artifact but YAML-buried. Migrate to a reader-facing "Latest changes (2026-06-06)" footer on each dossier. This is a 30-minute UX change that pays editorial-trust dividends disproportionate to the effort.

### 2.3 Where UpToDate would reject the dossier

(a) **No-US-regulator-authority doctrine.** UpToDate cites the FDA, AHA, ADA, ACR, AAFP, AAO-HNSF, ACOG routinely. The doctrine excludes NicheCore from UpToDate's editorial convention. This is fine — **NicheCore is not trying to be on UpToDate, and the founder has stated this explicitly.** Declare it: "We do not cite US regulators or US disease-association guidelines as authorities; we cite WHO TCIM, EMA HMPC, India AYUSH/CCRAS, Australia TGA, China NMPA, Health Canada NHP, and the classical-text-corpus of six traditions instead. This makes us editorially distinct from UpToDate, MedlinePlus, and US-disease-association content."

(b) **Six-traditions framing.** UpToDate has a "Complementary and alternative medicine" sub-section in tinnitus that grades CAM by the same modern-evidence hierarchy as everything else. The six-traditions-equal-voice section the dossier carries is editorially different. UpToDate would not adopt it. **Again — fine; declare the difference.**

(c) **Commerce integration.** Same as nhs.uk — UpToDate is paid-subscription editorial with strict commercial separation; affiliate-style "Brand options" rows are incompatible. UpToDate would never list "Doctor's Best · Magtein" in a treatment row.

### 2.4 BLOCKER-N2: Migrate the YAML corrections-log to a reader-facing "Latest changes" footer + add structured citation discipline as wave-5-fact-checker exit gate

Concrete edits:

- Move `factualErrorsFixedThisRevision` from YAML to a visible footer at the bottom of each dossier: "Latest changes (2026-06-06): [9 corrections, plain-language]; next scheduled review: 2026-12-06; safety-signal cadence: immediate."
- Add `nextReviewDue: 2026-12-06` and `safetyReviewCadence: immediate-on-signal` to YAML for all 78 dossiers.
- Add `correctionsLog: []` array that accumulates across schema versions (don't overwrite — accumulate, with date + author + nature-of-correction columns).
- Lock the wave-5-fact-checker pass to a hard exit gate: every claim must carry an inline PMID/DOI/monograph-ID anchor before the dossier can advance to schemaVersion v7.1. The 9 fixed errors in factualErrorsFixedThisRevision are a partial pass; the remaining ~50 citations flagged in pass2 are the bulk of the work.

### 2.5 P1-N3: Adopt UpToDate-style C-grade phrasing across §3.3 and §4 rows

Edit pattern: every C-grade row should explicitly name the indication-mismatch where one exists. Template: *"[Compound] has [mechanism + extrapolation evidence] but has not been shown to reduce tinnitus in [RCT or systematic review name]. Mechanism + cofactor rationale is plausible; clinical effect in the chronic-tinnitus target population is [unproven / weak / subgroup-only]."* Apply to Mg, NAC, CoQ10, R-ALA, L-arginine, Lion's Mane, vinpocetine, binaural beats, red-light, taVNS, PEMF.

---

## D3. MedlinePlus + Healthdirect Australia + Patient.info UK — the publisher family NicheCore *can* join

### 3.1 The publisher-family triangulation

This is the most consequential framing in this review. The dossier today reads like a publisher in search of a family. The five candidate families are:

1. **Public-service single-hierarchy (NHS Choices · nhs.uk · MedlinePlus · Healthdirect AU).** Non-commercial, single-evidence-hierarchy, named-clinical-lead, short-form, government-funded. **Excluded by doctrine + by commerce-integration.** Healthdirect AU is the most doctrine-compatible (cites TGA + NHMRC + Cochrane Australasia which are NicheCore-compatible sources) but still non-commercial and short-form.

2. **Clinician-facing paid-subscription (UpToDate · DynaMed · BMJ Best Practice).** Paid-subscription editorial, full-citation discipline, US-regulator-citing, long-form, named-physician-authored. **Excluded by no-US-regulator-doctrine + by AI-author + by six-traditions framing.**

3. **Plain-language secondary (Cochrane Consumer Network).** Plain-language summaries paired to full Cochrane Reviews, GRADE-graded, non-commercial, short-form, partner-organisation cross-referenced. **The dossier's Ginkgo §3.2 Cochrane honesty discipline is exactly Cochrane Consumer Network style — but the six-traditions parallel structure is editorially incompatible.** Path B (the doctrine-sovereign route) closes Cochrane Consumer Network as a partner. Path A (NICE-compatible) opens it.

4. **Commercial specialty publisher with editorial board (Patient.info UK · WebMD · Healthline · Verywell · GoodRx).** Affiliate-and-advertising-funded, editorial-board-reviewed, broad-content-domain, mid-form (3-8k words typical), named-medical-reviewer per article. **This is NicheCore's actual publisher family.** The doctrine fits, the commerce fits, the length fits, the global-pluralist framing fits.

5. **Tradition-aligned national public health (India NHP · AYUSH portals · WHO TCIM).** Government-funded, single-tradition-aligned, often non-English-primary, classical-text-citing. **NicheCore's six-traditions framing is closest to this family of any — but NicheCore is multi-tradition + English-primary + commercial, so a co-publication partnership rather than membership is the path.**

### 3.2 The Patient.info UK partnership analysis

Patient.info (formerly EMIS Patient — now owned by Mentholatum's parent) is the closest structural analogue to NicheCore in the entire publisher landscape. The structural similarities:

- Mid-form condition pages (3,000–8,000 words; NicheCore at 17,000 is over).
- Affiliate-and-advertising revenue model with declared commercial separation footer.
- Editorial-board of UK GPs + specialists (named, credentialed, declared COI).
- Cochrane + EMA + NICE-CKS as evidence anchors.
- Reading-age target around grade 11 (NicheCore at FKGL 14.6 is over but close).
- Plain-English summary + technical detail in progressive disclosure.
- Patient.info publishes "complementary therapies" sections without grading them at GRADE-RCT hierarchy.

The structural differences:

- Patient.info is UK-only-jurisdictional (NicheCore is multi-jurisdictional).
- Patient.info publishes ~2,500 condition pages (NicheCore aims for 78).
- Patient.info's commerce is advertising + Symptom Checker (no own-bundle SKU); NicheCore's commerce is bundle-DTC (more concentrated commercial risk).
- Patient.info is acquisition-attractive; NicheCore is at pre-acquisition scale.

**Recommendation: pitch Patient.info UK as a co-publication / cross-reference / acquisition target.** The dossier already meets ~80% of Patient.info's editorial conventions. Closing the remaining 20% (length, reading age, editorial-board declaration, COI on Brand-options rows, ASA-compliant commerce-disclosure footer) is ~3–6 months of editorial discipline work. Patient.info would likely value the global-pluralist framing as a content-extension into AYUSH / TCM / EMA-HMPC surfaces they do not currently cover well.

### 3.3 The Healthdirect Australia cross-reference analysis

Healthdirect is the AU public-service equivalent of nhs.uk, but with a critical doctrine-compatibility: it cites TGA + NHMRC + Cochrane Australasia routinely + has a Traditional & Complementary Medicine framing that does not exclude AYUSH / TCM at the rigor-hierarchy level the way NHS Choices does. Healthdirect is non-commercial — so direct co-publication is excluded — but **cross-reference is plausible**. The work to enable cross-reference: (a) split the long-form dossier into a 1,500-word "Healthdirect-grade summary" surface + the 17,000-word deep-dive (wave-3 90-second read mode is the start); (b) declare doctrine alignment with TGA + NHMRC; (c) the six-traditions framing actually *helps* the Healthdirect AU surface (which has Indigenous + AU-multicultural health pages that take traditional medicine seriously). **Healthdirect AU is the public-service masthead NicheCore is closest to.**

### 3.4 The India NHP / AYUSH co-publication analysis

This is the most under-explored opportunity in the entire backlog. India's National Health Portal (NHP) is AYUSH-aligned, government-funded, English + 10 regional languages, and explicitly mandates traditional-medicine inclusion in its content design. The wave-4 founder-product reviewer surfaced India + AYUSH as natural launch-sequence territory. The masthead implication is bigger than launch-sequence:

- NicheCore's six-traditions framing is *editorially native* to India NHP — far more native than to any non-Indian publisher.
- AYUSH-aligned hospital networks (KIMS, Apollo AYUSH wings, AIIMS integrative, Patanjali clinical research) are the natural editorial-board recruitment pool for the AYUSH + Siddha + Unani columns of NicheCore.
- CCRAS / CCRH / CCRUM / CCRS / PCIMH are the named regulatory bodies NicheCore already cites — co-publication is mechanically straightforward.
- Distribution is the biggest gain: NicheCore as a *co-published surface on India NHP* would reach ~10–50× the audience the standalone storefront will reach in year 1.

**Recommendation: open conversations with CCRAS + India NHP editorial leadership about cross-publication of the AYUSH / Siddha / Unani / Tibetan dossier sections.** The commercial bundle stays on the NicheCore storefront; the content surface gets editorial-board co-signed on the India NHP side. This is the highest-leverage publisher-partnership opportunity in the entire wave-1-through-5 backlog.

### 3.5 BLOCKER-N4: Declare publisher-family positioning + open Patient.info + Healthdirect + India NHP partnership conversations

Concrete actions:

- Surface the publisher-family positioning on the home page (D1.4 above).
- Build a 1,500-word Healthdirect-AU-compatible summary surface for each dossier (wave-3 90-second read-mode is the foundation; expand to ~1,500 words at grade-9 with full progressive-disclosure to the long-form below).
- Build a Patient.info-UK-compatible 3,000–8,000-word mid-form surface (the §1–13 summary level with deep-dives collapsed; the §14 references + §15 referral as the deep-cut).
- Open partnership outreach to: Patient.info UK editorial (medical-writers@patient.info), Healthdirect AU content team, India NHP editorial (info@nhp.gov.in), CCRAS Director-General, Cochrane Consumer Network coordinating editor.

---

## D4. Editorial peer-review + named author + named reviewer discipline (BLOCKER for masthead readiness)

### 4.1 The named-human-author gap

The dossier's `authorAgent: ailment-360-research` is the most honest possible label for the AI-research-factory pipeline. Wave-2 caught the placeholder `reviewerName: "Dr. Meera Iyer"` BLOCKER and the founder has acknowledged. The structural gap is bigger than that one placeholder. The editorial-board surface that all five publisher families require — named human author + named human reviewer + declared credentials + COI declaration + signed-off-on-date — does not yet exist for any of the 78 dossiers.

This is the **single largest masthead-readiness gap.** Without it, NicheCore is not editorially co-publishable with any of the five publisher families, regardless of doctrine compatibility. The Information Standard scheme, the PIF TICK, the Cochrane Consumer Network co-publication agreement, the Patient.info advisory-board signature, the Healthdirect cross-reference, the India NHP co-publication — all require a named human clinician with declared credentials accountable for each page.

### 4.2 The "AI-assisted + human-reviewed" model — the actual 2024–2026 publisher convention

Some publishers (Patient.info UK in 2025 announced explicit "AI-assisted draft + GP-reviewed" labels on a subset of pages; Healthline + Verywell have similar disclosure conventions; specialty publishers in Germany + the Netherlands are moving same direction) are formalising the AI-author + human-reviewer model. **This is the model NicheCore should adopt explicitly.** The honest disclosure:

> *This dossier was researched and drafted by an AI agent (ailment-360-research, v6.2.x) trained on the WHO TCIM + EMA HMPC + India AYUSH + Australia TGA + China NMPA + Health Canada NHP + classical-text-corpus evidence base. It was reviewed and signed off by [Named Reviewer, credentials, date]. Corrections log: [link]. Next review due: [date]. Reviewer COI: [declared].*

This disclosure does *three* things simultaneously: (a) it satisfies the editorial-board convention that all five publisher families require; (b) it honestly discloses AI authorship — which the wave-5-fact-checker and future trust-and-safety regulators will require; (c) it positions NicheCore at the *leading edge* of the AI-assisted-editorial convention rather than as a laggard that gets caught by it.

### 4.3 The cost of human-reviewer infrastructure for 78 dossiers

Honest cost-line build:

- **Senior medical writer** (UK £60–90k / US $80–140k full-time, or freelance £200–500/day equivalent). NicheCore needs ~0.5–1.0 FTE-equivalent for ongoing editorial polish + major-revision drafting. Annual cost: **£40–90k**.

- **Named clinical reviewer per dossier** (NHS GP £500–1,500 per review; specialist £1,000–2,500 per review; Ayurveda/TCM/Unani/Siddha/Tibetan/Homeopathy practitioner £300–800 per review). Per-dossier per-year cost (annual review + safety-signal updates): **£800–2,500**. Across 78 dossiers: **£62k–195k**.

- **Editorial-board honoraria** (5–7 named clinicians on a standing board with quarterly meetings + cross-cutting review). Honoraria £3–8k/year per member. Total: **£15k–56k**.

- **Corrections-log + transparency infrastructure** (developer + tooling time): **£20–40k year-1, £5–10k thereafter**.

- **Annual cost total: £140–390k** at MVP discipline; **£300–800k** at full Cochrane-Consumer-Network-grade discipline. This matches the per-dossier per-year £3–8k editorial work + £500–2,000 reviewer fee estimate × 78 dossiers = **£270–780k annually**.

### 4.4 The minimum-viable editorial board

The lowest-cost editorially-credible editorial board for the 78-dossier atlas, given the doctrine's accepted authorities, is **5–7 named clinicians + 1 ethicist + 1 patient advocate**, structured to cover the doctrine's six traditions + modern evidence hierarchy + patient-voice surface:

1. **Phytopharmacologist with EMA HMPC monograph experience** (preferably a German or Dutch academic — the EMA HMPC is the most NicheCore-aligned regulatory monograph corpus). Covers §3 OTC phytochemicals across all 78 dossiers. Honoraria £6–10k/year. Sample profile: a Tübingen / Utrecht academic pharmacognosist with HMPC committee experience.

2. **AYUSH BAMS practitioner with CCRAS / CCRH connection** (preferably an AIIMS integrative wing or Banaras Hindu University Faculty of Ayurveda fellow). Covers §4.2 Ayurveda + §4.5 Siddha cross-review + the cofactor floor + the dietary protocol's millet + ghee + tempering discipline. Honoraria £4–7k/year (lower than UK rates).

3. **Australia TGA-aligned integrative GP or naturopath** (covers §3 + §6 + §10 interactions matrix; TGA-aligned because TGA is the regulatory body NicheCore cites; integrative practice because the GRADE-RCT-only convention does not survive the six-traditions framing). Honoraria A$8–14k/year.

4. **NHS audiologist (RNID-affiliated or BAA-affiliated)** for tinnitus + SSHL + Bell's palsy + Ménière's + acoustic-neuroma-adjacent dossiers. Honoraria £5–8k/year. Sample profile: a London-based RNID-listed audiologist with BAA leadership.

5. **Patient advocate from RNID + BTA (UK) + BTSA (Australia) + Indian Tinnitus Society or equivalent** (the wave-3 disability-inclusion + crisis-line surfaces require lived-experience review). Honoraria £3–5k/year. Sample profile: an RNID volunteer with public-speaking + content-review experience.

6. **Cochrane methodology-trained reviewer** (for the §13.7 honest-tier comparison + the §11.7 placebo-discipline + the Cochrane null + meta-vs-individual-trial honesty discipline). Honoraria £4–7k/year. Sample profile: a Cochrane Australia or Cochrane UK methodologist with chronic-condition consumer review experience.

7. **Ethicist** (for the doctrine's tradition-honouring framing + the AI-authorship disclosure + the commerce-editorial-separation surface + the suicide / crisis-line block). Honoraria £3–5k/year. Sample profile: a bioethics academic with consumer-health publishing experience.

**Total editorial board honoraria: £33–56k/year.** Add quarterly board meetings, named-on-dossier sign-off discipline, COI declarations. **This is the minimum viable editorial-board investment to make the masthead claim credible.** It is plausibly Tier-2 subscription revenue from the wave-4 founder-product architecture (a 2,000-subscriber tier at £9.99/month = £240k/year ARR funds the editorial-board honoraria comfortably).

### 4.5 BLOCKER-N5: Recruit the 7-member editorial board + ship the named-reviewer surface on every dossier within 90 days of subscription-product launch

This is the **single highest-priority masthead-readiness action**. The dossier content is now publication-grade. The accountability surface that makes the content publishable is the editorial-board structure. Without it, every reviewer wave + every reader will mark NicheCore down for "no named human accountability." With it, the editorial-board is the visible signal that elevates NicheCore from "interesting AI-research-factory output" to "publisher-quality consumer-health content."

Concrete actions:

- Draft an editorial-board recruitment brief (sample-profile + honoraria + meeting cadence + sign-off discipline + COI policy) within 14 days.
- Open recruitment conversations with 15–20 prospective members across the 7 roles within 60 days.
- Onboard the first 7 within 90 days; sign off the first wave of dossiers within 120 days.
- Surface the editorial-board on the home page, the atlas page, and every dossier footer.

---

## D5. Editorial scalability + maintenance burden for the 78-dossier atlas

### 5.1 The benchmark publishers

The realistic comparator publishers:

| Publisher | Topics | Editorial FTE | Per-topic-per-year editorial spend (estimate) |
|---|---|---|---|
| **NHS Choices / nhs.uk** | ~1,500 | ~50 FTE editorial + clinical-reviewer panel | £30–50k |
| **UpToDate** | ~7,000 | ~200 editorial + ~6,000 contributing physician-authors | £30–60k (physician contributors are paid per-topic) |
| **Cochrane Consumer Network** | ~7,500 plain-language summaries (paired to full reviews) | ~30 FTE editorial + ~28,000 contributing authors globally | £5–15k (most authors are unpaid academic contributors) |
| **Patient.info UK** | ~2,500 | ~30 FTE editorial + ~80 contributing GP-reviewers | £8–20k |
| **Healthline** (US) | ~25,000 | ~200 editorial + ~150 contributing medical-reviewers | £3–8k |
| **MedlinePlus** | ~1,000+ topics | ~40 FTE editorial + NIH staff reviewers | £15–30k |
| **Healthdirect Australia** | ~1,500 | ~60 FTE editorial + clinical panel | £25–45k |
| **WebMD** | ~10,000 | ~150 editorial + medical-reviewer board | £4–10k |
| **NicheCore — at MVP discipline** | 78 | 1 founder + AI agent + part-time reviewer | **£1.8–5k current; £4–10k recommended** |
| **NicheCore — at full discipline** | 78 (eventually 200+?) | 1–2 FTE editorial + AI agent + editorial-board | **£10–15k per dossier per year** |

### 5.2 The realistic maintenance cadence per dossier

Per-dossier annual maintenance workload at editorial-board discipline:

- **Annual full review** (12 months: editorial-board-signed full re-read against evidence-base updates) — 8–15 hours editorial + 2–4 hours clinical reviewer = **£800–2,500**.
- **Quarterly safety-signal sweep** (4× per year: scan EMA + TGA + MHRA + Health Canada + WHO + AYUSH + classical-text reissue for new signals affecting the dossier) — 1–2 hours editorial = **£200–500**.
- **Immediate safety-signal update** (event-driven: new pharmacovigilance, new Cochrane reissue, new high-quality RCT changing the §13.7 grading) — 4–10 hours editorial + 1–2 hours clinical = **£500–1,500 per event, averaging 1–3 events/year for an active condition**.
- **Major Cochrane / EMA / regulator-monograph update** (typically quarterly across the 78-dossier atlas; per-dossier average annual incidence ~0.5–1.0 such events) — 6–12 hours editorial + 2–4 hours clinical = **£700–1,800 per event**.

Per-dossier annual cost (mid-range): **£2,500–6,500 editorial + £500–1,500 reviewer = £3,000–8,000.** Across 78 dossiers: **£234k–624k annual editorial budget**.

### 5.3 The realistic NicheCore editorial budget envelope

The wave-4 founder-product + health-economist analysis pegs realistic year-1 revenue around £100–300k, year-2 around £400k–1.2M, year-3 around £1.5–4M (Tier-2 subscription scale). The editorial-budget overlay:

- **Year 1:** revenue insufficient for full editorial-board discipline. Run on **MVP editorial discipline**: founder + AI agent + 1 part-time medical writer (£40–60k FTE-equivalent) + 3 editorial-board members at lower honoraria (£15–25k total) + named-reviewer-per-dossier at lighter touch (£40–80k total). **Total year-1 editorial budget: ~£100–170k.** This funds the named-reviewer + named-author + corrections-log surface across all 78 dossiers at a *defensible* discipline. It does not fund the full Cochrane-Consumer-Network-grade discipline.

- **Year 2:** at £400k–1.2M revenue, scale to **full editorial-board discipline at lower-bound** (£200–350k editorial budget = ~25–30% of revenue). This is high-as-a-share-of-revenue but appropriate for a publisher whose moat *is* the editorial discipline.

- **Year 3:** at £1.5–4M revenue, full editorial-board discipline at upper-bound (£400–700k editorial budget = ~15–25% of revenue). At this level, NicheCore is in the upper quartile of mid-tier specialty publishers for per-dossier editorial spend.

### 5.4 The honest founder choice — invest in editorial cost-line vs scale dossier count

The dossier today is at 78 conditions with the v6.2.x discipline. The wave-4 reviewers proposed expansion to 81+ (cancer-survivorship-wellness, MS adjunctive, Parkinson's adjunctive). The masthead-readiness question is: **at year-1 editorial budget capacity, does NicheCore expand from 78 to 100+ dossiers at MVP discipline, or does it hold at 78 and invest the editorial capacity in deepening discipline?**

My honest editorial recommendation: **hold at 78, invest in deepening discipline.** Three reasons:

1. **The marginal masthead-readiness gain per editorial-discipline-pound at 78 dossiers is far higher than per-new-dossier-pound at 79–100.** A reader who finds NicheCore through a tinnitus query and sees full editorial-board sign-off + corrections-log + named-reviewer + Patient.info-mirror-quality surface will trust the *brand* across the other 77 dossiers. A reader who finds 100 dossiers at half-baked editorial discipline will discount each one.

2. **The 78 covered today is already broader than NHS Choices' core 1,500 condition pages on a per-pageview basis** (NHS Choices' top 78 condition pages account for ~70% of their tinnitus + comparable-chronic-condition pageviews; NicheCore at 78 is hitting the high-leverage condition surface efficiently).

3. **The reviewer-wave fatigue is real.** 23 prior reviewers have hardened the surface; the marginal next-reviewer-wave (wave 5, this one) is now hitting masthead-positioning questions rather than per-dossier-content questions. The marginal next-dossier-add hits the per-dossier-content layer again, restarting the reviewer-wave cycle. Stop adding; invest in the masthead surface that lets the 78 hold the line.

### 5.5 P1-N6: Lock the 78-dossier scope until the editorial-board + named-reviewer + corrections-log + masthead-declaration discipline ships across all 78

This is a scope-discipline recommendation, not a content recommendation. The expansion to 81+ that surfaces in the wave-4 backlog (cancer-survivorship + MS + Parkinson's) should be **explicitly deferred** until the editorial-board signs off on the 78-condition atlas in full. The deferral conversation with the founder is honest: *we have the content for 100 conditions in our AI-research-factory backlog; we are choosing to deepen 78 to publisher-masthead grade before scaling, because masthead trust is a slower-build moat than content breadth and is the moat that compounds.*

---

## D6. The five blockers + sixteen P1s — consolidated backlog

### BLOCKERS (must ship before schemaVersion v7.1.0)

- **N1.** Surface the publisher-family positioning declaration on home + atlas + dossier-footer. *(D1.4)*
- **N2.** Migrate corrections-log to reader-facing footer + add structured citation discipline as wave-5-fact-checker exit gate + add `nextReviewDue` + `safetyReviewCadence` + `correctionsLog` YAML fields. *(D2.4)*
- **N3.** Adopt UpToDate-style C-grade phrasing across §3.3 and §4 rows (indication-mismatch surfacing on every applicable row). *(D2.5)* — this is wave-5-editor-scope; the wave-5-fact-checker independently validates the underlying citation anchors.
- **N4.** Declare publisher-family positioning + open Patient.info + Healthdirect + India NHP partnership conversations. *(D3.5)*
- **N5.** Recruit the 7-member editorial board + ship the named-reviewer surface on every dossier within 90 days of subscription-product launch. *(D4.5)*

### P1s (must ship before schemaVersion v7.2.0)

- **N6.** Lock 78-dossier scope; defer 81+ expansion until masthead discipline ships across all 78. *(D5.5)*
- **N7.** Build the 1,500-word Healthdirect-AU-compatible summary surface for each dossier (wave-3 90-second read-mode foundation, expanded to grade-9 reading age).
- **N8.** Build the 3,000–8,000-word Patient.info-UK-compatible mid-form surface (§1–13 with deep-dives collapsed by default).
- **N9.** Add "Latest changes" footer to every dossier (reader-facing, plain-language, dated, linked).
- **N10.** Add `Reviewer COI declared: [Y/N + summary]` to every dossier YAML + footer.
- **N11.** Add `AI-assisted draft + human-reviewed by [Name, credentials, date]` disclosure footer to every dossier.
- **N12.** Add commerce-editorial-separation footer: *"This page may include links to products we receive commission on. The bundle recommendations are editorial — the link is commercial. We declare COI on every Brand-options row."*
- **N13.** Add ASA-compliant disclosure rider to every Brand-options row (UK readers; wave-2 ad-substantiation reviewer surface).
- **N14.** Migrate `factualErrorsFixedThisRevision` YAML to public-facing corrections log with cumulative history (don't overwrite — accumulate).
- **N15.** Add `safetyReviewCadence: immediate-on-signal` + `quarterlyRegulatoryScan: enabled` to YAML for all 78.
- **N16.** Add `nextReviewDue` field with a 12-month cadence for all 78.
- **N17.** Add `publisherFamily: commercial-specialty-pluralist` field to YAML for all 78 (this is the masthead-declaration in machine-readable form).
- **N18.** Add `editorialBoardMember: [name + role]` field to each dossier YAML once the editorial board is recruited.
- **N19.** Build the corrections-policy page (`/corrections`) with the public-facing escalation route for readers who flag content errors.
- **N20.** Build the editorial-policy page (`/editorial`) declaring the doctrine + the publisher-family + the AI-assisted-author discipline + the named-reviewer convention + the COI policy + the corrections cadence.
- **N21.** Add a "Cite this page" surface to every dossier (NicheCore's own structured citation: title + author-agent + reviewer + version + URL + last-reviewed date + DOI if registered) — important because academic + clinician readers will want to cite the dossier in their own writing if it holds the masthead line.

---

## D7. Closing editorial verdict

The dossier today is *content-grade* at every layer the 23 prior reviewers tested. It is *masthead-grade* at none. The five-dimensional editorial gap above resolves cleanly into one founder decision:

> **NicheCore is a commercial specialty publisher in the Patient.info UK / Healthline / Verywell family, with a global-evidence-pluralist doctrine that makes it editorially distinct from every existing publisher in that family. Its closest co-publication partners are Patient.info UK + Healthdirect Australia + India NHP + the Cochrane Consumer Network. Its closest masthead-positioning differentiator is the six-traditions framing + the no-US-regulator-authority doctrine. Its honest masthead claim is "we publish at Patient.info-mirror editorial discipline, with AI-assisted authorship + human-clinician review, and we are honest about both."**

That sentence, surfaced on the home + atlas + dossier-footer, plus the editorial-board recruitment + the named-reviewer surface + the corrections-log + the publisher-family positioning, *is* the masthead. Build it, declare it, hold the line at it. The 78-dossier atlas already exists at content-grade — the masthead is the surface that converts the content into a *publishable specialty-publisher line*.

The dossier could not survive an NHS Choices editorial review tomorrow. It is not trying to. It could potentially survive a Patient.info editorial review tomorrow with ~3–6 months of editorial-discipline work. It is already informally adjacent to what an India NHP / AYUSH co-publication surface would look like. **The masthead the dossier is reaching for exists, is publishable, has commercial precedent, and is honest about its position relative to the public-service single-hierarchy editorial families.**

The 7-member editorial-board + the named-reviewer surface + the corrections-log + the publisher-family declaration is the wave-5 exit-gate. Until it ships, the dossier is *interesting AI-research-factory output*. Once it ships, the dossier is *publishable specialty-publisher content*. The editorial gap between those two positions is ~£100–170k of year-1 editorial budget and ~90 days of editorial-board recruitment + masthead-declaration build. Both are inside the founder's wave-4-projected operational envelope.

The masthead is the moat. Ship the masthead.

---

**End of wave-5 consumer-health-editor review.**

*Sister-review running in parallel: wave-5 fact-checker (claim-by-claim citation anchoring); cross-reference findings on schedule.*

*Recommended next-wave deferral: wait until the editorial-board ships + the masthead declaration goes live + the corrections-log surfaces + the named-reviewer-per-dossier discipline holds across all 78 before commissioning wave-6. The marginal next-reviewer-wave at the per-dossier-content layer has saturated; the marginal next-reviewer-wave at the masthead-positioning + editorial-discipline layer (this wave) was overdue.*
