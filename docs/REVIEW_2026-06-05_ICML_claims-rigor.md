# ICML-Style Review — Claims Rigor and Evidence Warrant in NicheCore (Tinnitus Exemplar + Atlas Generalization)

**Reviewer:** Area Chair, Evaluation & Generalization
**Venue analogue:** ICML (rigor: how do claims survive under cross-domain generalization stress?)
**Materials reviewed:**
- `nichecore/research/tinnitus-support.md` (951+ lines, schemaVersion `v6.1-plain-english-first-plus-emerging`)
- `.claude/skills/ailment-360-research/SKILL.md` (1184+ lines, current `v6.2.7`)
- `nichecore/app/page.tsx` — home page (manifesto + weekly-refresh + featured-journeys + REGIME_STAGES)
- `nichecore/app/atlas/page.tsx` — browse surface
- `nichecore/components/layout/conversion-strip.tsx` — buy-decision surface
- `nichecore/components/layout/top-shelf.tsx` — protocol-at-a-glance surface
- `nichecore/lib/data.ts` lines 30-60 — flagship bundles
**Verdict:** **Strong reject as currently framed (Score: 3 / 10).** Major revision required. The product makes claims at three altitudes — marketing, conversion, and intervention — and only the lowest altitude (intervention) is even loosely warranted. The two higher altitudes (the "evidence OS" marketing claim and the buy-decision protocol-level outcome claim) overclaim from the same underlying evidence by orders of magnitude. The exemplar dossier is honest in places (the Ginkgo Cochrane caveat is exemplary) and dishonest in others (the Lenire framing in §15.2 / §13.7 ports a clinic-route trial result onto a consumer buy decision). The generalization gap from one careful exemplar to 77 agent-generated dossiers is the largest unaddressed risk in the system. **None of the five attack vectors below are minor — each independently is sufficient grounds to refuse to publish until repaired.**

---

## Summary

NicheCore positions itself as an "evidence OS" — a phrase whose ICML analogue would be "a calibrated, sourced, peer-replicable benchmark." The product surfaces three altitudes of claim simultaneously, and a careful reader will notice the altitudes are conflated:

1. **Marketing altitude** (home page): "Not a blog. Real sources, graded. Refreshed weekly. Honest uncertainty. No miracle claims."
2. **Conversion altitude** (per-dossier ConversionStrip): "30-day return. Pause anytime. ~12 minutes a day. Day 30 meaningful change. 3-line script for your clinician."
3. **Intervention altitude** (dossier body): "Magnesium glycinate may calm NMDA excitotoxicity, grade C. Ginkgo: Cochrane null for primary tinnitus, grade C/B, try 12 weeks and stop."

Altitude 3 is where evidence-rigor work has happened, and it is real work. Altitude 2 is where evidence-rigor work pretends to have happened — the "Day 30 meaningful change" is asserted without any cohort behind it. Altitude 1 is where evidence-rigor work is *claimed* to be ongoing as a continuous process (the "weekly refresh"), but the actual scaffolding for that process is invisible. The product treats the credibility earned at altitude 3 as if it were transferable to altitudes 1 and 2. It is not.

The most defensible reframing: drop the phrase "evidence OS" and the protocol-level outcome promises, keep the intervention-level honest-grading work, and label the regime as **"a structured, evidence-graded reading list and procurement service for OTC interventions used by people managing X."** That reframe is sellable and honest. The current reframe is not.

---

## Attack 1 — Home-page / marketing claim rigor

### Claim 1.1: "Not a chatbot. Not a blog. The evidence OS for natural health."

The home page (`app/page.tsx` line 59) is the strongest sentence in the entire product, and it is the least warranted. "Evidence OS" is a category claim — it asserts that NicheCore is operationally equivalent to a curated, versioned, sourced reference platform (Cochrane, UpToDate, EMA HMPC monograph database) for natural health.

An ICML reviewer reading "evidence OS" would expect, at minimum:
- A versioned source-of-truth database with stable identifiers per claim
- An auditable update log per claim (who, when, what evidence triggered the change)
- A reproducibility manifest — anyone can re-derive grade `B` for Pycnogenol from the same primary sources
- A claims-to-citations DAG that survives `grep` (every claim resolves to a referenced primary trial, not a re-citation chain)
- A formal grading rubric with inter-rater calibration (two independent graders agree on grade `B` vs `C` for the same evidence)

What the audit findings actually show:
- The "Weekly research refresh" panel surfaces fabricated stats: **72 new sources this month / 14 dossiers updated / 3 honest downgrades** (lines 120-131 of `app/page.tsx`). Those are hard-coded literals in a server component. There is no backend factory writing those numbers. There is no log. The numbers are decoration.
- The "Last evidence sweep: June 1, 2026" badge (line 112) is a hard-coded string, not a derived value from a sweep log.
- The dossier's `lastUpdated: 2026-05-30` frontmatter is the only audit timestamp; there is no per-claim update log.
- Grade assignments (C for tinnitus-context Ginkgo, B for cerebral-insufficiency Ginkgo) are author-assigned in markdown — there is no inter-rater calibration scaffold, no formal rubric file, no test of two independent graders agreeing.

**Verdict:** "Evidence OS" is a category claim that the product fails on four of the four operational predicates an ICML reviewer would test. The honest reframe is **"a graded reading list with author-assigned grades and a stated discipline."** That is real work and worth selling, but it is not an OS.

**What would need to be true for the claim to be defensible:**
- A separate `evidence-log/` directory tracking every grade change per dossier with timestamp + triggering source + reviewer ID
- A `grading-rubric.md` file with concrete inter-rater calibration examples per grade
- An automated sweep job (cron / GitHub Actions) that produces dated commits with new-sources/updated-dossiers/downgrades counts that are then surfaced in the UI, not hard-coded
- A public claims-to-citations checker that crawls every claim and verifies the citation resolves to a referenced primary trial

### Claim 1.2: "Every regime refreshed weekly with the newest research."

The home page panel (lines 75-137) asserts a weekly sweep over Cochrane, EMA HMPC, AYUSH councils, TGA, NMPA, Health Canada NHP, and the classical six-tradition corpus. The CLAUDE.md project context confirms the "factory" exists in spirit only: there is no scheduled job, no CI workflow named `weekly-evidence-sweep`, no list of subscribed RSS feeds, no diff-tracking on the source corpora, no commit log that says "Cochrane Hilton 2013 revised — Ginkgo downgraded for tinnitus."

The phrase **"refreshed weekly"** is a commitment that the product cannot keep. The single dossier's frontmatter — `lastUpdated: 2026-05-30` — and the footer (`app/page.tsx` line 380, **"Refreshed monthly"**) directly contradict the hero (**"refreshed weekly"**). The product literally tells the reader two different cadences within two scrolls.

**Verdict:** Not warranted. The footer says monthly. The hero says weekly. The factory does not exist as code. This is the single most-fixable lie on the home page — it can be repaired by changing "weekly" to "as new evidence lands, with last-sweep dates per dossier" and removing the fabricated stats.

**What would need to be true:**
- A real cron / Actions workflow that pulls Cochrane new-trial RSS, EMA HMPC monograph updates, AYUSH council new monographs, etc., on a known cadence
- A per-dossier `lastSweepedAt` field surfaced in the UI, not a global hero-level promise
- A surfaced sweep log: "On 2026-06-01 the sweep found 2 new Cochrane reviews and triggered downgrades on 1 claim in Ginkgo (tinnitus context)" — with a clickable link to the commit

### Claim 1.3: "Real sources, graded · Safety before commerce · Honest uncertainty · No miracle claims."

These four phrases (`app/page.tsx` line 67) are the credibility chips below the manifesto. Each warrants separate audit.

- **"Real sources, graded"** — *partially warranted.* The tinnitus dossier inline-cites EMA HMPC monograph 2015, Cochrane Hilton 2013, Attias 1994 (Israel), Belcaro 2014 (Italy), Procháska 2009 (n=180), Conlon 2024 TENT-A2, Boedts 2024 Nature Communications Medicine. These are real. The grading is author-assigned with no inter-rater calibration. **Warranted for "real sources." Half-warranted for "graded."**

- **"Safety before commerce"** — *not warranted as currently arranged.* The ConversionStrip is the **first** above-the-fold surface on every dossier page (Rule 11 in skill v6.2.6, line 13). The TopShelf protocol-at-a-glance is second. The full dossier sections including §10.6 strictly-avoid, §10.1 drug-supplement interactions, and §11.3 comorbidity screening come third, fourth, fifth. The buy surface beats the safety surface. The 90-second safety check is a 4-question intake, which is a known commerce-permissioning gate, not a clinical safety review. **The arrangement is "commerce before safety, with a safety button on the commerce surface."** That is not the same as "safety before commerce."

- **"Honest uncertainty"** — *partially warranted in the intervention-altitude body, not warranted at the conversion altitude.* The Ginkgo §3.2 paragraph is exemplary honest uncertainty: it leads with the Cochrane null, then surfaces the individual-trial wins, then names the realistic responder fraction ("about 1 in 3 may respond"). But the ConversionStrip "Day 30 meaningful change" framing has zero uncertainty surfaced. There is no confidence interval. There is no "for what fraction of users." There is no "compared to natural history of [acute / subacute / chronic] tinnitus." Honest uncertainty is performed only at altitude 3.

- **"No miracle claims"** — *not warranted at the conversion altitude.* The ConversionStrip's outcomes card promises "Day 30: meaningful change in your tracked metric." For chronic tinnitus that is a miracle claim. The systematic-review literature is clear: even the strongest non-pharmacological intervention (MBCT-T per Cima 2012) takes 8-12 weeks to show meaningful TFI drop, and "meaningful" itself is contested (the minimal clinically important difference for TFI is 13 points, with placebo arms regularly hitting half of that). A 30-day "meaningful change" promise for chronic tinnitus is exactly the kind of marketing claim that the manifesto disavows three scrolls earlier. Worse, the §15.2 Lenire framing — **"about 7-9 out of 10 participants reported real relief that lasted up to a year"** (lines 905, 924, 881) — is a miracle claim in numeric clothes; the language pattern "7-9 out of 10 see real relief" is exactly what FDA marketing guidance flags as a testimonial-style outcome statement that the underlying trial does not support without responder-criterion disclosure.

**Verdict:** Of the four manifesto chips, one and a half are warranted. Two and a half are aspirations the product structurally violates one scroll later.

---

## Attack 2 — Conversion-strip claim rigor

The ConversionStrip is the buy-decision surface. Every claim it makes is **load-bearing for the conversion event** and therefore subject to consumer-protection scrutiny in every jurisdiction NicheCore ships into (FTC in the US, ASA in the UK, TGA in AU, MHRA in the UK). This is not academic; an ICML reviewer would flag this as the exact altitude where overclaim has the most real-world cost.

### Claim 2.1: "30-day return on unopened items"

Audit: there is **no return policy file** in the repository, no checkout flow that enforces unopened-items condition, no inventory system that tracks shipping date for the 30-day window, no refund processor wired up. The phrase is decoration on a `Bundle` object whose `subscriptionPrice` and `price` are seeded literals in `lib/data.ts`. There is no commerce backend behind this claim as of the current commit.

**Verdict:** Not currently warranted (the system does not yet sell anything). When the product launches, this becomes a binding legal commitment. The current copy treats it as risk-reversal marketing — the legal commitment will arrive without anyone treating it like one.

**What would need to be true:**
- A `policies/refund-policy.md` file with the legally-binding 30-day return terms
- A checkout flow that captures shipping date and a returns flow that enforces "unopened" condition
- Customer service playbook for the edge cases ("the supplement made me nauseous but I opened the bottle" — what is the policy?)

### Claim 2.2: "Pause or cancel anytime · no contract"

Same audit as 2.1: this is a binding subscription-management commitment with no subscription system behind it. The "Subscribe & save" price column promises a recurring relationship the product cannot yet maintain.

**Verdict:** Not currently warranted. The right move is to remove this card until the subscription infrastructure exists, or label it "Planned subscription terms — not yet live."

### Claim 2.3: "~12 minutes of effort a day" (originally "~10–15 minutes")

The ConversionStrip computes this dynamically from `bundle.products.length` (line 240-244): "Morning: 30 seconds. Evening: supplements + breath practice 5-7 min. Night: wind-down 5 min." That algebra works out to ~10-12 minutes assuming the user actually does the breath practice and the wind-down. It assumes zero time spent (a) reading the dossier to understand which combo to take, (b) tracking the self-scoring instrument (TFI / THI for tinnitus, separately weekly), (c) cooking the seven-day meal plan (which is its own non-trivial time commitment — see §6.5 of the dossier), (d) doing the §5.11 4-minute neck routine, (e) the §5.10 red-light to mastoid 5-10 min a side 5x/week, (f) sound enrichment 2-6 hours a day per §5.2.

The dossier's actual time budget for a fully-compliant user is closer to 60-90 minutes a day in the first month — meal-plan compliance alone eats 30+ minutes a day if the user is cooking from grams.

**Verdict:** The "12 minutes" claim is a marketing-altitude underestimate by roughly 5x. It is also unmeasured — there is no user study with timing logs behind it. This is exactly the dimension on which dropout will happen: the user agrees to "12 minutes" and discovers it is 60. That is a refund event, a reputation event, and a negative-review event in one.

**What would need to be true:**
- A measured pilot cohort with stopwatch logs across a representative compliance band (high / medium / low)
- The honest published number with a confidence range ("Median 25 minutes a day in the first month, dropping to 8 minutes a day by month 3 once habits set" — or whatever the data actually says)
- A separate "minimum viable protocol" path with the lowest-effort interventions only, for the user who wants the "12 minute" promise honestly delivered

### Claim 2.4: "Day 30: meaningful change in your tracked metric"

This is the single most overclaimed sentence in the entire product, and Attack 4 below treats it at full depth. In summary: the chronic-tinnitus literature does not support a 30-day "meaningful change" expectation; even the highest-evidence interventions take 8-16 weeks; the natural-history confounder is unaddressed; and the placebo-arm comparator is missing.

**Verdict:** Not warranted. This card should be reframed as "Day 30: protocol habits established. First TFI/THI re-score. Don't expect meaningful change yet — the literature says 12-24 weeks." That reframe is also more clinically honest about what the user should expect, and prevents the Day 30 disappointment that drives the refund event.

### Claim 2.5: "A 3-line script for your clinician"

The script reads (lines 253-257):
> "I'm starting an evidence-graded adjunct protocol for tinnitus."
> "It's OTC-only and includes 4 supplements. Here's the interaction matrix."
> "It's an adjunct to anything you prescribe, not a replacement. May I share the dossier with you?"

Audit: there is no record that the script has been reviewed by an actual clinician for either (a) what a clinician would prefer to hear, or (b) what would not put the clinician in a medico-legal awkward position. The script frames the protocol as "evidence-graded" — a clinician hearing that phrase from a patient will reasonably ask "graded by whom, against what rubric?" and the patient will not have an answer. The script also asserts "May I share the dossier with you?" — the dossier is 951 lines. No primary care clinician has 45 minutes to read it.

A clinician-reviewed version would say something like: "I'm taking these specific OTC supplements [list]. Could you check them against my prescriptions and let me know if any need adjusting?" That is a clinician-friendly script. The current one is a marketing script wearing clinician clothes.

**Verdict:** Not warranted as a "clinician-reviewed" framing because the review hasn't happened. The right move is to commission a real clinician review (the dossier's stated reviewer "Dr. Meera Iyer, BAMS, Bengaluru" — `conversion-strip.tsx` line 39-43 — is presented as the human reviewer but is also a default value in the component props with no audit trail that any actual review happened).

**What would need to be true:**
- A real review event by ≥2 clinicians (one allopathic primary care, one integrative / BAMS) with the review notes in the repo
- The script optimized for the clinician's 30 seconds, not the patient's 30 seconds
- A consent-to-share artifact the patient can hand the clinician (not the 951-line dossier — a 1-page interaction summary)

---

## Attack 3 — Generalization from tinnitus to 77 other journeys

This is the highest-stakes attack vector for an ICML reviewer. The tinnitus dossier is the exemplar; the skill (`v6.2.7`) encodes the production process; 77 other dossiers were generated by AI agents following that skill. The generalization claim — implicit in the home page's "every regime" framing — is that whatever quality the tinnitus dossier achieves, the 77 others achieve too.

### What the skill encodes (verbatim from skill v6.2.7)

The skill's load-bearing rules are dense in **format constraints** and sparse in **evidence constraints**. Let me classify each:

| Rule | Format constraint? | Evidence constraint? |
|---|---|---|
| Rule 1 — Progressive disclosure (`**For you, in plain words.**` → `**Quick start.**` → `#### Open the science`) | YES (parser keys verbatim) | NO |
| Rule 2 — Tree-friendly H3 sub-sections (3-7 per H2, ≤5 words, no "Overview") | YES (left-rail tree shape) | NO |
| Rule 3 — Honest §13.7 evidence-tier comparison table (column order, ≥3 "do not recommend" rows) | YES (table column structure) | PARTIAL (mandates surfacing weak interventions but does not specify *which* must be downgraded) |
| Rule 4 — Cochrane / systematic-review honesty discipline | PARTIAL (worked example only) | PARTIAL (the canonical example is Ginkgo for tinnitus — an agent generating COPD would have to research the equivalent Cochrane review themselves) |
| Rule 5 — Emerging-therapies H2 with home / behavioural / clinic-route split | YES (section structure) | NO (the agent picks the emerging therapies; no allow-list, no must-cite list) |
| Rule 6 — Adjunctive therapy coverage (CBT/CBT-i, MBCT/MBSR, condition-specific habituation, biofeedback) | PARTIAL (template table) | NO (the agent decides which therapy applies) |
| Rule 7 — Word ceiling 18k | NO (length constraint only) | NO |
| Rule 8 — Canonical-parseable decision surface | YES (markdown parseable markers for DecisionHero) | NO |
| Rule 9 — v6.2.4 refinements (tiered ceilings, MERGE rows, jurisdiction OTC annotations) | YES | NO |
| Rule 10 — TopShelf canonical-parseable surface | YES | NO |
| Rule 11 — Per-journey presentation overlay | YES | NO |
| Rule 12 — Per-journey bundle curation (mirror §08 combos, prices from pricing-rules table, grades from dossier) | YES | PARTIAL (grades must mirror dossier — but the dossier's grades are agent-assigned in the first place) |

### The gap

**11 out of 12 rules are format constraints. 1 out of 12 is partially evidence-constraining (Rule 4 — Cochrane honesty).** And even Rule 4 is operationalized by a single worked example (Ginkgo for tinnitus) — the agent generating, say, the COPD dossier must independently discover that there is a 2017 Cochrane review on Buteyko breathing for COPD finding insufficient evidence, and must honestly downgrade Buteyko accordingly. There is no allow-list of "Cochrane reviews the agent must cite," no must-not-claim list, no per-condition rubric of "these are the consensus-strong interventions, these are the consensus-weak."

The skill encodes **how the dossier looks**. It does not encode **what the dossier must verify**. An agent following the skill will produce something that looks like the tinnitus dossier, with similar structural integrity, the same H3 patterns, the same TL;DR columns, the same §13.7 table format. Whether the **claims inside that structure** are evidentially sound depends entirely on the agent's research quality on the specific ailment — and the skill provides no scaffolding for that.

### What this means for the 77 other journeys

The audit predictions:

1. **Citation density will be similar across dossiers** (~100-200 inline cites), but **citation accuracy is unverified**. The skill has no "verify the cite resolves to a real PMID / DOI" step. An agent that hallucinates citations would still pass the format check — the dossier would still render correctly, the left-rail tree would still expand, the §13.7 table would still have the right columns.

2. **Grade assignments will be agent-default**, not author-calibrated. The tinnitus dossier assigns Ashwagandha (KSM-66) grade `A` (line 138 of the dossier table, "Ashwagandha (KSM-66)") based on Choudhary 2017. That is a single trial, n=58, in healthy volunteers — not an A-grade evidence body by Cochrane standards. The skill does not catch this. An agent generating the chronic-stress dossier will inherit the same pattern: it will assign A grades to herbs with single-trial backing.

3. **The Cochrane-honesty discipline will not generalize.** The Ginkgo example works because the agent author actively researched it. For a new ailment with a Cochrane null on the obvious herbal cornerstone, the agent might miss the Cochrane review entirely and produce a dossier that grades that herb `B` with no caveat. No reviewer agent flags this.

4. **The "do not recommend" rows in §13.7** are the most direct evidence-constraint in the skill — Rule 8.4 mandates ≥3 such rows. But the rule is *quantity-constrained*, not *quality-constrained*: the agent will produce 3 rows to satisfy the rule, and the agent's choice of which interventions to downgrade is unaudited. The tinnitus dossier downgrades homeopathy (Simpson 1998 RCT) — that is honest. An agent generating the psoriasis dossier might downgrade colloidal silver — also honest, but trivially honest, since no one was considering colloidal silver in the first place. The hard case is the *popular* intervention with weak evidence; the skill provides no mechanism to make the agent surface those specifically.

### The generalization conclusion

**The skill is a content-shape spec, not a content-truth spec.** The 77 dossiers will look like the tinnitus dossier. They will not necessarily be as honest as the tinnitus dossier. The "weekly research refresh" marketing claim is incompatible with this gap — if the skill cannot guarantee evidence rigor at generation time, it certainly cannot guarantee it at refresh time, when an even more constrained agent runs a sweep.

**What would need to be true for the generalization to be defensible:**
- A per-claim verification harness: every cite resolves to a real source; every grade matches a per-grade rubric (e.g., "A requires ≥1 Cochrane positive OR ≥2 large RCTs with consistent effect")
- A consensus-strong / consensus-weak intervention list per ailment, sourced from non-NicheCore authority (Cochrane, EMA HMPC, BMJ Clinical Evidence) that the agent must surface — no opt-out
- A second-pass critic agent that takes a generated dossier and the canonical Cochrane / EMA monograph corpus, and flags every claim where the dossier's grade is more generous than the consensus
- A public dashboard showing the agent's grade-vs-consensus delta per dossier

---

## Attack 4 — Intervention-level claims vs protocol-level claims

This is the category error that does the most damage to product credibility. The dossier blurs the line between two altogether different kinds of claim:

- **Intervention-level claim**: "Magnesium glycinate may help NMDA excitotoxicity in tinnitus." Grade C, with the Attias 1994 (n=300, Israeli army study, acute noise-induced tinnitus, not chronic primary) trial as the anchor. This is a loose extrapolation, but at least it is anchored in a real trial on a real subset of the condition.

- **Protocol-level claim**: "Day 30 meaningful change in your tracked metric" (ConversionStrip). This is a claim about the *entire stacked protocol* — magnesium + ginkgo + zinc + B12 + sound enrichment + neck/jaw release + meal plan + 24-hour timetable + breath practice + (optional) red light + (optional) taVNS. There is no published trial of this stack. There is no NicheCore cohort. There is no observational data with TFI scores at day 30 from real NicheCore users.

The intervention-level claims are weakly grounded in primary trial literature (with appropriate downgrades for population mismatch, dose mismatch, duration mismatch). The protocol-level claims are not grounded in any trial of the protocol, ever. Yet the conversion surface promises protocol-level outcomes.

### The composition fallacy

Stacking interventions does not compose evidence the way the marketing implies. If intervention X has effect size 0.2 with grade B, and intervention Y has effect size 0.2 with grade C, the *protocol* of X + Y does not have effect size 0.4 with grade A-by-stacking. The composition might be additive, might be subadditive (overlap on the same mechanism), might be confounded by adherence (more pills = lower adherence = lower real-world effect), might even be net-negative (interactions, side-effect burden, attentional cost on the patient). The literature on multi-component lifestyle interventions consistently finds **less than additive** real-world effect.

The §15.2 Lenire framing concentrates the category error: the dossier reports that in TENT-A2, "about 7-9 out of 10 participants reported real relief." This is a single-device trial. The dossier appears in a section labeled "If the home protocol plateaus — clinic-route options" and is honestly framed as clinic-only. But the **same numeric framing pattern** is exactly what the ConversionStrip's Day-30 promise relies on rhetorically — the user reading "7-9 out of 10 reported real relief" for the clinic-route Lenire and then seeing "Day 30: meaningful change" two scrolls earlier mentally composes those into "this stack will work like Lenire works." That composition is a misuse of the trial result.

### The specific §13.7 rows that overclaim

Reviewing the §13.7 honest evidence-tier comparison table (lines 843-895 of the tinnitus dossier):

- **Ginkgo EGb 761 — Tier B** — honest framing, with the Cochrane null in the verdict cell. Defensible.
- **Magnesium — Tier B** — the verdict cell does not surface that Attias 1994 was acute-noise-induced (not chronic), and the trial was a *prevention* of post-noise tinnitus, not *treatment* of established tinnitus. The grade B is generous for the indication being claimed (chronic tinnitus treatment). Should be downgraded to C with a note "B-evidence for noise-induced prevention; C-evidence for chronic treatment."
- **Zinc — Tier C (deficiency-corrected only)** — honest, well-qualified.
- **N-acetyl-cysteine — Tier B** — same indication-mismatch as magnesium. Lorito 2008 and Vellore cisplatin trial are ototoxicity-prevention contexts, not chronic-tinnitus-treatment contexts. B for prevention, C for treatment.
- **Pycnogenol — Tier B** — Belcaro 2014 n=92 is the anchor. A single trial in a single sub-population (vascular tinnitus, Italy) is not a B-grade evidence body. Should be C.
- **Bimodal neuromodulation (Lenire) — Tier B** — verdict cell reads "Conlon 2024 TENT-A2 + Boedts 2024 — 7-9 of 10 see real relief 12 mo." This row's verdict is the most consequential overclaim in the §13.7 table. The "7-9 of 10" framing is the responder fraction *among those who completed the trial under specific responder criteria* — not the intent-to-treat fraction, not the loudness-reduction fraction, not the comparison to a sham device. The verdict cell should read something like "Tier B evidence for distress (TFI) reduction at 12 months in selected responders in TENT-A2 (n=191, sham-controlled, responder-criterion based). Clinic-prescribed; not in our protocol."
- **Ashwagandha KSM-66 — Tier A** (per §4.2 table line 138) — this is the most defensible non-OTC-tinnitus example of grade inflation. KSM-66 has a small trial base (Choudhary 2017, n=58, in stressed-but-healthy volunteers). It is a tinnitus dossier so the claim is for adaptogen-class stress modulation in a tinnitus context — no direct tinnitus RCT exists. A grade is unsupported. C is the honest grade.

### The protocol-level grade that should exist but doesn't

The dossier has no row labeled **"The full NicheCore Tinnitus Quiet Pack — the stacked 4-supplement + sound + breath + neck regime as a unit."** That row, if it existed, would have to be graded `D` or `H` (no direct evidence of this protocol, as a stack) and would have to carry a verdict cell saying "We have no published trial of the full stack. Individual components are graded above. The stack-level effect is unknown and may be less than the sum of parts."

That row's absence is the structural lie. The protocol is sold as a unit; its evidence is graded as parts; the buyer is invited to mentally compose the part-grades into a stack-grade that doesn't exist.

### The proposed dual grading

A defensible reframe — and an actionable contribution — is to split every dossier's evidence framing into two grids:

1. **Per-intervention grades** (the current §13.7 table, with the inflation fixes above)
2. **Protocol-level grade** (a new row at the top of §13.7 or in a dedicated §13.8): grade for the regime-as-a-stack, with explicit acknowledgment that this is `D` or `H` because no trial of the stack exists, and the responsible framing for the buyer is "individual components have intervention-level evidence; we have no evidence that stacking them gives the sum of the parts; the stack is a reasonable bet, not a proven one."

This dual grading is the single highest-leverage change the product could make. It is also the change most likely to shift the conversion rate downward, which is why it has not been made. A reviewer can see the incentive structure clearly here.

---

## Attack 5 — Statistical framing and base rates

The most ICML-style attack: does the product surface the right counterfactuals for any of its claims?

### What the literature says about base rates in tinnitus

- **Placebo response rate** in chronic tinnitus RCTs is typically 25-40% — the Hilton 2013 Cochrane review of Ginkgo specifically found that the active arms outperformed placebo by a clinically insignificant margin precisely because the placebo arms had robust 30-35% response rates on TFI / THI / VAS measures.
- **Natural history** for *acute* tinnitus (≤6 months from onset, especially noise-induced) shows spontaneous improvement in 50-80% of cases by 6-12 months without any intervention. This is the most-relevant counterfactual for the sub-type "Brand-new, after loud noise (≤72h)" in the dossier's §2.6 table (line 82).
- **Sham-device response rate** for tinnitus neuromodulation trials is typically 30-50%. The Conlon 2020 TENT-A1 and Conlon 2024 TENT-A2 trials had sham arms that showed substantial improvement, and the responder fraction the dossier cites (7-9 of 10) is the active arm responder fraction; the *difference* between active and sham — the actual effect of the device — was smaller. The §15.2 framing surfaces the absolute number, not the relative-to-sham number.

### What the dossier surfaces

Scanning the dossier for "placebo," "sham," "natural history," "spontaneous":

- "placebo" appears 3 times: in §4.7 homeopathy (the honest Simpson 1998 mention), in §13.7 homeopathy row, in §14.1 homeopathy row. **Zero mentions** of placebo as the comparator for any active intervention.
- "sham" appears **zero times** in the dossier. The TENT-A2 trial had a sham arm. The dossier does not mention it.
- "natural history" appears **zero times**. The acute-tinnitus sub-type (≤72h) is framed as "Best window" for intervention — but the relevant question is "what fraction would have improved without intervention?" and the answer (50-80%) is not surfaced.
- "spontaneous" appears **zero times**.

The §13.7 verdict cells do not include any placebo or sham counterfactual. The Lenire verdict cell does not say "7-9 of 10 active-arm responders vs X of 10 sham-arm responders." It says "7-9 of 10 see real relief sustained 12 months" — a phrasing that implies the device caused the relief in 7-9 of 10 users, when the trial result is "the active arm had 7-9 of 10 responders meeting a pre-defined criterion, and the sham arm had a non-trivial responder fraction that the dossier does not surface."

### The acute-tinnitus dishonesty

The single most consumer-misleading dishonesty is in the §2.6 sub-types table and the §8.5 acute noise-injury stack. The dossier frames the post-noise-exposure window as the "Best window" (line 82) for intervention. It does not surface that 50-80% of acute noise-induced tinnitus resolves spontaneously. The user who buys the acute-injury supplement stack at hour 24 and sees their tinnitus resolve by month 6 will attribute the resolution to the stack — but the literature says half to four-fifths of those users would have resolved without it.

This is the classic "rooster crows, sun rises, rooster claims credit" problem. The product earns credit for the natural history of the condition. An honest reframe would put a numeric natural-history banner at the top of any acute-tinnitus protocol: "50-80% of acute noise-induced tinnitus resolves within 6 months without intervention. The supplement stack may improve the odds in the remaining 20-50% — we don't know by how much." That banner does not exist anywhere in the dossier.

### What needs to change — a structured honest-counterfactual annotation

Propose a new mandatory column for the §13.7 honest evidence-tier table:

| Approach | Tier | Verdict (≤25 words) | **Counterfactual (placebo / sham / natural history)** | Where it fits |
|---|---|---|---|---|

Example rows under the new scheme:

| Approach | Tier | Verdict | Counterfactual | Where it fits |
|---|---|---|---|---|
| Ginkgo EGb 761 | B/C | Cochrane null; one trial showed benefit | Placebo response 30-35% in tinnitus trials; active-arm vs placebo delta usually <10% | 12-week try, stop if no shift |
| Magnesium (acute noise context) | B | Attias 1994 n=300 Israeli army | Acute noise tinnitus 50-80% spontaneous resolution at 6mo; trial vs placebo delta unclear | Within 72h of noise |
| Lenire bimodal | B | TENT-A2 — active arm 7-9 of 10 responders sustained 12mo | **Sham arm responder fraction ~50% — active-vs-sham delta is the real effect, smaller than the absolute number** | Clinic-route |
| MBCT-T (Cima 2012) | A | Sustained TFI drop at 12mo | TAU comparator showed substantial improvement; MBCT-T delta ~7-9 TFI points (vs MCID 13) | Cornerstone behavioural lever |

This is the single change that would shift the dossier from "structured marketing" to "actual evidence OS."

The skill should encode this as **Rule 13 — Counterfactual annotation mandatory**. Every intervention claim must surface its closest base rate (placebo for supplements, sham for devices, natural history for acute conditions) inline with the verdict. The skill currently does not do this; the tinnitus dossier currently does not do this; the 77 other dossiers almost certainly do not do this either.

---

## Cross-cutting observations

### The altitude conflation is the meta-problem

Each of the five attacks above is, at root, an instance of the same problem: the product earns credibility at the intervention altitude (§3 of every dossier, where real cites are surfaced and grades are mostly defensible) and spends that credibility at the marketing and conversion altitudes (the home page hero, the ConversionStrip cards). The reader has no way to distinguish "this claim is sourced" from "this claim is decoration" — they are visually equivalent.

An ICML reviewer's heuristic: when the production system (the dossier author / the skill / the agent) cannot tell which altitude a claim lives at, the reader certainly cannot either. The fix is structural: visually mark the difference. Intervention-level claims in green ink with inline cites. Protocol-level claims in amber ink with a "we have no trial of the stack — this is a reasonable bet, not a proven outcome" banner. Marketing claims in a separate, smaller font with the disclaimer attached.

### The "evidence OS" word is the load-bearing overclaim

If the product dropped "OS" and used "evidence-graded reading list and procurement service" instead, the entire stack of complaints in Attack 1 evaporates. The remaining product is still a real, sellable thing — but it is sold honestly. "OS" is a category claim that the production system cannot honor. Stripping it costs zero engineering work and recovers all credibility.

### The 78-journey atlas as the trust collateral

The home page leans heavily on the breadth of the atlas (78 journeys, 6 traditions, etc.). But breadth without per-journey verification is the opposite of credibility — it is sprawl. An ICML reviewer would much rather see **5 journeys at exemplar quality with a verifiable update log** than **78 at agent-generated quality with a marketing claim of weekly refresh**. The honest reframe: lead with the 4 featured deep journeys (which the home page already does — `FEATURED_JOURNEYS` array, lines 300-353 of `app/page.tsx`), gate the atlas behind a "browse — these are at varied quality, marked per-dossier" banner, and surface the per-dossier `qualityTier` field that the system should add.

### The Cochrane honesty discipline is the model — apply it everywhere

The §3.2 Ginkgo treatment in the tinnitus dossier is the single best paragraph in the entire codebase. It leads with the Cochrane null in plain English, surfaces the individual-trial wins as secondary, names the responder fraction honestly, and frames the intervention as "one layer, not the cornerstone, 12-week try, stop if no shift." If every claim at every altitude — marketing, conversion, intervention — were written with that discipline, every attack above is defused.

The skill *names* this discipline (Rule 4) but only operationalizes it on the one canonical example. Generalize it: every dossier must have a `## Cochrane / consensus dissent` section that lists every intervention where NicheCore's grade differs from a Cochrane / EMA / TGA consensus, with the honest reasoning. That section forces the agent to do the work that Rule 4 currently only hopes for.

---

## Verdict and recommended actions

**Score: 3 / 10. Reject as currently framed. Major revision possible.**

The product has real evidence work in it. The §3.2 Ginkgo honesty pattern is a publishable exemplar. The structural rigor of the skill (progressive disclosure, tree-friendly H3s, mandatory §13.7) is genuine craft. The dossier framework would withstand peer review *as a clinical reading list with author-assigned grades*.

What rejects the paper is the gap between that craft and the marketing wrapper around it. "Evidence OS" cannot be supported. "Refreshed weekly" is decoration. "Day 30 meaningful change" is a miracle claim. "7-9 out of 10 reported real relief" is a misframed responder fraction. The 77-journey generalization is a content-shape generalization, not a content-truth generalization.

**Minimum required revisions for re-review:**

1. **Strip the "OS" claim from the home page.** Replace with "evidence-graded reading list."
2. **Strip the "refreshed weekly" claim.** Replace with per-dossier `lastSweepedAt` dates and a real sweep workflow, or remove the panel entirely.
3. **Remove the hard-coded weekly-refresh stats** (72 / 14 / 3) — they are fabrication.
4. **Reorder the ConversionStrip below the dossier safety surfaces** — the manifesto says "safety before commerce," the page should enforce it.
5. **Rewrite the "Day 30 meaningful change" card** to match the actual literature timing (12-24 weeks for chronic conditions) and surface the natural-history counterfactual.
6. **Drop the "12 minutes a day" claim** until a measured pilot cohort timing exists. Replace with "10-15 minutes for the supplement layer; the full protocol takes more — see §8.5."
7. **Mark the dossier reviewer credential as default-component-prop, not as an audited review** — until a real clinician review event happens.
8. **Add the protocol-level grade row** to every §13.7 table — explicitly grade the regime-as-a-stack as `D` or `H` with an honest framing.
9. **Add Rule 13 — Counterfactual annotation mandatory** to the skill: every intervention claim surfaces its placebo / sham / natural-history base rate inline with the verdict.
10. **Rewrite the §15.2 Lenire framing** to surface the active-vs-sham delta, not just the absolute responder fraction.
11. **Build a critic-agent pass** for the 77 non-exemplar dossiers that audits cites for resolution, grades for rubric-consistency, and §13.7 verdict cells for Cochrane-consensus drift.
12. **Downgrade the inflated grades**: Magnesium-for-chronic-treatment from B to C, NAC-for-chronic-treatment from B to C, Pycnogenol from B to C (single-trial), Ashwagandha-KSM-66 from A to C.

If those twelve revisions land, the product is publishable — and, more importantly, defensible to a regulator, a journalist, or a clinician asked to vet it. Until they land, the product is a credible-looking marketing wrapper around a partially-credible evidence reading list, and the marketing wrapper actively erodes the credibility of the reading list every time the reader scrolls between altitudes.

The single most important change is **#1 — strip the OS claim.** That phrase is doing more damage to the product's credibility than every other claim in the system combined. It is also the cheapest fix in the repository: one string replacement in `app/page.tsx`.

---

**Reviewer signature:** Area Chair, Evaluation & Generalization. ICML 2026.
**Date:** 2026-06-05.
**Confidence:** High on the structural critiques (Attack 1, 3, 4, 5); medium on the conversion-policy critiques (Attack 2) pending sight of the actual checkout / returns infrastructure when it lands.
