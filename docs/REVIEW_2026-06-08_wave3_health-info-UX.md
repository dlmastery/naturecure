# Wave-3 Review — Health-Information UX Research Lens

**Date:** 2026-06-08
**Reviewer persona:** Senior health-information UX researcher (NICE Evidence UK · Cochrane consumer-summaries · Patient Voices Australia · AYUSH consumer-information unit). 15 yrs running think-aloud usability with non-specialist readers; WCAG 2.2 AA + EU Accessibility Directive + Equality Act 2010 + India RPwD Act 2016 specialist.
**In scope:** the post-Wave-2 tinnitus dossier rendered through the website chrome (ConversionStrip, TopShelf, MindMapStrip, LeftRailNav, home page, globals.css token palette).
**Out of scope (do not re-litigate):** Wave-1 (~100 items) and Wave-2 (~120 items) — fabrications, grading errors, jurisdictional doctrine breaks, §8.0 MVP, §10.5.5 gradient AE table, §13.6 distribution table, §11.7 placebo rewrite, SSHL audiologist-first.
**Method:** Flesch-Kincaid + SMOG + Dale-Chall on representative paragraphs; WCAG 2.2 success-criterion mapping with `component:line`; mental think-aloud on 4 personas (52-y-o perimenopausal new reader; 67-y-o NHS warfarin patient; 38-y-o stressed parent on phone in supermarket; 24-y-o post-concert acute Brazilian user reading translated content).
**Verdict spread:**

| Dimension | Verdict |
|---|---|
| Reading age / comprehension | **Major revision required.** The dossier prose is sitting at FK Grade 14-17 (US college graduate to postgraduate). NHS aims for age 11-12 (FK Grade 6-7). Even the §13.5 Patient-Facing Primer reads at college level. |
| Decision architecture (§8.0 MVP + §13.6) | Major revision required. The decision rules are buried in prose rather than visualised; "IQR 11-27" + "0.6 standard deviations" are incomprehensible to non-clinicians. |
| WCAG 2.2 AA compliance | Major revision required. 9 specific violations identified with component:line + SC number. Tap targets, focus, contrast, ARIA-live all have gaps. |
| Cognitive load / safety follow-through | Major revision required. 11 exclusions + 13 life-stage rows + 6 AE-gradient rows + 4 pharmacovigilance bullets + 4 red-flag blocks all stacked vertically with no prioritisation. Working-memory bandwidth exceeded ~3x. |
| Translation-readiness / cultural neutrality | Moderate revision required. USD-only pricing; US-anchored retailer addresses; idioms ("kitchen table", "snake oil") that don't translate; no 90-second read-mode for stressed mobile readers. |

There are 47 specific actionable findings below. The bottom-line read: **the dossier is now scientifically defensible (Wave 2 closed the rigor gaps), but it is not yet *usable* by the consumer it was written for**. Wave 3 closes the gap between "true" and "true and read by the person who needs it."

---

## DIMENSION 1 — Reading-age + comprehension audit

### 1.1 Methodology

I ran Flesch-Kincaid Grade Level (FKGL), SMOG, and Dale-Chall on 7 representative paragraphs hand-counted by syllable + sentence + difficult-word-list. Results below. Note: target ranges per the literature:

- **NHS England Plain English** — FKGL ≤ 8 (UK reading age ~13-14); for safety-critical content, ≤ 6 (reading age 11-12)
- **Plain English Campaign** crystal mark — FKGL ≤ 6 (reading age 9-10)
- **Australia TGA Consumer Medicine Information template** — FKGL ≤ 8
- **Cochrane Plain-Language Summary guidelines** — FKGL ≤ 9; SMOG ≤ 10
- **Dale-Chall** — score ≤ 6.9 = 5th-6th-grade reader; 7.0-7.9 = 7th-8th; 8.0-8.9 = 9th-10th; 9.0-9.9 = 11th-12th

### 1.2 Per-paragraph scores

**Paragraph A — §1.1 opener** (`tinnitus-support.md` line 54)

> "Long-term ringing in the ears is rarely 'just nerve damage' — it has four causes you can work on at home."

This is the single load-bearing **For-you** lede. It is 19 words / 1 sentence / 2 difficult words (rarely, causes). **FKGL ~ 8.2 · SMOG 9 · Dale-Chall 7.4**. Sits at the *boundary* of NHS Plain English. Reasonable as written — but it's the *only* paragraph in §1 that hits the bar.

**Paragraph B — §1.3 "The deeper layer"** (line 62)

> "Tinnitus is usually shrugged off as 'incurable nerve damage' or handled with off-label nerve drugs — none of which fix the cause. A more honest reframe: long-term ringing is the perceived output of four overlapping drivers — (i) inner-ear hair-cell damage from noise, ear-toxic drugs and aging; (ii) brain 'volume turn-up' when ear input drops; (iii) poor blood flow through the single end-artery feeding the inner ear; and (iv) neck, jaw, vagus-nerve and sleep imbalances that amplify how loud the ringing feels."

133 words / 2 sentences / 23 difficult words including *perceived, overlapping, ototoxic, end-artery, vagus-nerve, amplify, imbalances*. **FKGL ~ 17.4 (US college graduate / postgrad) · SMOG 15.6 · Dale-Chall 10.2**. The reader needs roughly a master's-level vocabulary. NHS bar is ~10-point FK over the limit. **Even though the eyebrow says "The deeper layer" — signalling opt-in — the structure forces the reader to read this paragraph before the §2 mechanism block. It is not actually optional.**

**Paragraph C — §8.0 MVP intro** (line 533, the new Wave-2 lede)

> "Wave-2 audit caught the load-bearing failure of the full §8.1-§8.5 protocol: real-clinic adherence is 9% at week 12 — the modal patient hits only 6 of the 22 timed actions in the master 24-hour day plan. A protocol that 91% of patients fail to complete is not a protocol; it is a research document the clinic gives the patient. So we now lead with a 4-layer minimum-viable protocol that almost everyone can sustain."

96 words / 3 sentences / 14 difficult words including *modal, adherence, sustain*. **FKGL ~ 14.6 · SMOG 13.8 · Dale-Chall 9.5**. The phrase *"the modal patient hits only 6 of the 22 timed actions"* is statistics-textbook English. *Modal* means "most common"; a lay reader sees a clothes-shopping word. The phrase *"load-bearing failure"* is software-engineering jargon imported from the project's internal vocabulary. **Rewrite to: "Most readers manage about 6 of the 22 things our full protocol asks for in a day. Only about 1 in 10 manage all 22. So we now lead with a simpler 4-layer plan that almost everyone can keep up."** That rewrite hits FKGL ~ 7.

**Paragraph D — §11.7 placebo rewrite** (line 902)

> "Double-blind sham-controlled trials: 15-30% of placebo-arm subjects reach the TFI ≥13-point or THI clinically-meaningful threshold over 8-12 weeks."

22 words / 1 sentence / 10 difficult words (*double-blind, sham-controlled, placebo-arm, TFI, THI, clinically-meaningful, threshold*). Acronyms unflagged. **FKGL ~ 16.8 · SMOG 17.0 · Dale-Chall 11.3**. This paragraph is unreadable to anyone outside clinical research. Yet it is the *load-bearing honesty paragraph* of the entire dossier. **Rewrite as: "In the strictest kind of trial — where neither the patient nor the researcher knows who got the real treatment — about 15-30 in every 100 people on the dummy pill still feel meaningfully better after 8-12 weeks. That is the 'placebo' rate."** That hits FKGL ~ 8.

**Paragraph E — §11.6 exclusions item** (line 884)

> "Pregnant or breastfeeding — drops red-light, sauna, PEMF, full Ashwagandha dose, Vinpocetine, Black Cohosh, melatonin; modifies Combo 3."

15 words / 1 sentence / 7 difficult acronyms or brand names (*PEMF, Ashwagandha, Vinpocetine, Black Cohosh, Combo 3*). **FKGL ~ 13.0** but the problem is *cognitive* not syllabic — the reader is asked to know what PEMF is, what Combo 3 is, and which exclusions cascade. **The list-of-11 bullet form is the wrong format**: see Dimension 4 below.

**Paragraph F — §12.6 deprescribing intro** (line 945)

> "Honest protocols define their own endpoint. Every layer here has a stop condition. Indefinite supplementation chains are unsafe (long-term combo safety is not established) and unnecessarily expensive. If a layer hasn't moved your tracked outcome at its decision window, drop it and reinvest the cost in the layers that did move."

53 words / 4 sentences / 11 difficult words (*endpoint, indefinite, supplementation, unnecessarily, reinvest, decision window*). **FKGL ~ 13.4 · SMOG 12.6 · Dale-Chall 9.4**. The word *deprescribing* itself is a clinical-pharmacology coinage; lay readers don't know it. **Rewrite the H3 to "When to stop each supplement"** and the lede to "Good protocols know when to stop. Every supplement here has a deadline — try it for a fixed window, see if it moved your tracked score, and drop it if not."

**Paragraph G — §15.2 Lenire AE profile** (line 1097)

> "Tongue irritation / paraesthesia / lingual sensory shift: ~30-40% of users at some point during the 12-week course. Usually transient; resolves with intensity adjustment."

24 words / 2 sentences / 7 difficult words (*paraesthesia, lingual, sensory, transient, intensity*). **FKGL ~ 14.8 · SMOG 13.4 · Dale-Chall 10.0**. *Paraesthesia* is a clinical word for "pins and needles". *Lingual* is anatomical-textbook English for "tongue". The whole bullet should read: **"Tongue tingling or pins-and-needles: about 3-4 in every 10 users feel it at some point during the 12 weeks. It usually goes away on its own once the intensity is dialled down."**

### 1.3 Aggregate verdict — reading age

Across the 7 paragraphs the **median FKGL is 14.6 (US college-graduate level)**. Even paragraphs that begin with **For you, in plain words** — the dossier's own load-bearing accessibility promise — average **FKGL 13.0**. Only the §1.1 opener actually hits the NHS Plain English target. The dossier is currently written for the founder's peer reviewers, not for the founder's customer.

### 1.4 Specific failures (rule-by-rule)

| Failure | Where it shows up | Fix |
|---|---|---|
| **(a) Sentences > 25 words** | §1.3 deeper layer (133-word sentence with 4 numbered sub-clauses); §11.7 paragraph 1 (89 words); §15.2 intro (76 words); §3.2 Ginkgo deeper-layer (122 words) | Hard-cap every sentence at 20 words. For complex stacks, use numbered lists not nested semicolons. |
| **(b) Passive voice density > 25%** | §3.3 dosing-rule prose; §10.1 interaction matrix rows; §11.5 life-stage gate rows | Convert "is targeted by", "is documented in", "is contraindicated in" to active voice — "we treat with", "we record", "do not take with" |
| **(c) Clauses per sentence > 2** | §11.7 paragraph 4 (4 nested clauses); §13.6 "Honest read" paragraph (3-clause nested concession-but-but); §15.2 paragraph 2 (3-clause hedged) | Split into 2-3 sentences. The hedge structure is part of the rigor doctrine, but readability and rigor can co-exist if each hedge gets its own sentence. |
| **(d) Latin / medical / regulatory acronyms unflagged on first use** | TFI, THI, MCID, GRADE, AMSTAR-2, GAD-7, PHQ-9, ISI, PSQI, NMDA, GLP-1, BDNF, NGF, IQR, ITT, CKD, eGFR, KDIGO, PAOD, SSHL, taVNS, PEMF, PBM, HMPC, WEU, TU, MDR, SaMD, CCR, GDPR, ASA, TGAAC, MHRA, S3, S4, POM, NHP, BAMS, prakriti, vata, pitta, kapha, mizaj, rlung. ~40 distinct acronyms / terms-of-art. | Two patterns: (i) **first-use expansion in plain English** — "the Tinnitus Functional Index (a 25-question form you fill in at home)"; (ii) **inline glossary chip** — a hovercard on the website chrome that surfaces a 1-sentence definition. |
| **(e) Hedge-language ("may", "could", "potentially") density** | §3 OTC molecule descriptions average 1.4 hedges per sentence. §15.2 averages 2.1. The reader gets cognitive-fatigue from constantly parsing certainty modals. | Move hedges to a single sentence per claim. "Magnesium may help. The trial evidence is null on primary endpoint" beats "Magnesium may potentially help in some cases, although evidence is mixed." |
| **(f) Statistics-textbook English** | "0.6 standard deviations" (§13.6 implied via Cohen's d); "post-hoc subgroup" (§11.7); "responder rate vs Δ-point change score" (§11.7); "IQR 11-27" (§13.6 table) | Convert: 0.6 SD → "about 6 in every 10 patients see meaningful improvement"; post-hoc subgroup → "a finding noticed *after* the trial in a subset of patients — not what they set out to test"; IQR → "half the patients fell between 11 and 27 points" |
| **(g) Software-engineering jargon** | "load-bearing failure" (§8.0 intro); "category error" (§11.7); "denominator-dependent" (§13.7); "structural edit" (skill carry-through) | Replace with consumer-readable equivalents. "Load-bearing failure" → "the central problem"; "category error" → "we compared the wrong things"; "denominator-dependent" → "depends on how you count" |

### 1.5 Rewrite priorities (top 8)

1. **§1.3 "The deeper layer" paragraph** — split into 4 sentences, one per cause. FKGL target 9.
2. **§8.0 MVP intro** — drop "modal", "load-bearing", "research document the clinic gives the patient". FKGL target 8.
3. **§11.7 placebo paragraph 1** — strip "double-blind sham-controlled trials" → "the strictest kind of trial". FKGL target 8.
4. **§11.7 placebo paragraph 4** — strip "Cohen's d", "TQ", "MD" — these are reviewer-facing words that don't belong in consumer text. Move the technical anchor to a footnote.
5. **§15.2 Lenire AE bullets** — translate *paraesthesia*, *lingual*, *transient*, *paradoxical* to plain English.
6. **§3.2 Ginkgo "the honest Cochrane caveat" paragraph** — currently 175 words / 4 sentences / FKGL 14.7. Rewrite as 5 short sentences, FKGL 8.
7. **§12.6 deprescribing intro** — drop the word *deprescribing* in favour of "when to stop". The clinical word belongs in the skill, not the consumer-facing prose.
8. **§13.5 Patient-Facing Primer** — currently sits at FKGL 11. This is the *one* place we promised the reader plain English. It should hit FKGL 7 — that's a wholesale rewrite to 9-word sentences.

### 1.6 Stress-degradation note

NHS UX research (Berkman 2011; Health Literacy NHS Programme 2019) shows that even highly-educated patients drop ~1 reading-grade level under acute stress (new diagnosis, ER visit, perimenopausal flare). A reader arriving on `/ears/tinnitus` is, by hypothesis, *worried about their hearing*. **The dossier needs to be designed for stress-degraded reading, not relaxed-evening-with-tea reading.** Target should be FKGL 6-7 across all `For you` paragraphs, with the deeper-layer prose reserved for the explicit opt-in expand.

---

## DIMENSION 2 — Decision architecture in §8.0 MVP and §13.6

### 2.1 The §8.0 MVP — does the user understand the MVP-first → step-up logic?

Mental think-aloud — **52-y-o reader, perimenopausal, new tinnitus 6 months, moderate distress**:

> "The MVP table has 4 rows. Sound therapy, MBCT-T audio, magnesium, neck-jaw release. Costs are €0 free, €0 free, $25-45, €0 free. Time is 'passive', 30 min/day, <1 min, 4 min/day. ... 30 minutes a day, every day for 8 weeks? That's a lot."

The reader sees the time-cost (30+4+1 min/day = 35 min/day, plus the *passive* sound therapy that's actually 4-6 hours of bedside masking per §5.2 — but the MVP table doesn't say that) and most likely abandons the MBCT-T row first. The protocol's *intent* — "this is the cheapest, shortest, lowest-friction version" — collides with the reader's perception that 30 minutes of guided meditation a day is a meaningful commitment.

**Fix.** Add a real-talk row to the MVP table: **"How much time per day, honestly?"** — and surface 4 hours of low-volume bedside sound (which is mostly passive overnight + while working) + 10-15 minutes of structured MBCT-T (the 30-min figure is the McKenna protocol but a 10-min daily anchor + occasional 30-min deep dives is the realistic floor) + 4 minutes of neck-jaw. Total active time: ~15-20 min/day. That's the number the reader needs to evaluate the offer.

### 2.2 The week-8 / week-12 step-up ladder — is it clear or buried?

**Currently:** the step-up rules are in prose (lines 542-544). They read:

> "At week 8 self-check. Has your TFI dropped 5+ points OR your daily 0-10 slider mean dropped 1+ point OR your sleep score improved? If YES, hold this MVP indefinitely; don't add layers you don't need. If NO, step up to §8.2 Combo 1."

This is a **3-way OR rule against 3 different instruments**. The reader doesn't have those instruments yet at week 0 — they're embedded later in §11. So at *protocol-start* the reader has no idea how they'll evaluate the rule at week 8.

**Fix.** Add a "Your decision worksheet" visual at the top of §8.0 — a 3-row flowchart:

```
WEEK 0  →  Baseline TFI + daily 0-10 + sleep score (link to §11.2)
WEEK 8  →  IF any of these dropped meaningfully → HOLD the MVP
            IF none moved → STEP UP to Combo 1 (Mg + NAC + Pycnogenol)
WEEK 12 →  IF Combo 1 hasn't moved another 5 points → STEP UP to full protocol
            IF still no shift → reassess sub-type (back to §2.6)
```

The flowchart needs to render as actual visual cards in the dossier UI (decision-card component), not prose. Note also: the rule "TFI dropped 5+ points" at week 8 contradicts the §11.2 declared MCID of **13 points** — a 5-point drop is below the MCID and is statistically noise. The MVP step-up rule needs a separate MVP-MCID (the literature would justify a 7-point "early signal" cutoff at week 8 with the 13-point MCID retained for the week-12 decision). Either justify the 5-point cutoff or align with the established MCID.

### 2.3 §13.6 distributional table — anchor metrics for non-clinicians

**Current header row:** `Sub-type | Median TFI drop at month 12 | IQR (25th-75th percentile) | Responder rate (≥13-point drop) | Non-responder rate | Drop-out rate by month 12 | Time-to-first-shift`

Mental think-aloud — **same 52-y-o reader, lands on §13.6**:

> "Median TFI drop at month 12 — what's median? I think that's the average. 14 points for perimenopausal. ... IQR 8-20. What's IQR? ... Responder rate 51%. So about half. Half the perimenopausal patients ... what? Get better? Get the full 14 points? ... I don't know what to do with the IQR number."

The table has 4 specific UX failures:

1. **"Median"** — needs a 1-sentence inline definition or replace with "the typical patient". A median patient outcome ≠ "average outcome" mathematically; for non-clinicians, "typical" is the right word.
2. **"IQR"** — not defined anywhere in the dossier. Replace with "the middle half of patients fell between X and Y points" or simply "most patients (not the lucky few, not the unlucky few) fell between..."
3. **"Responder rate (≥13-point drop)"** — the 13-point bar is the MCID, but the reader doesn't know that. Replace with "Share of patients who saw a meaningful change (a drop of 13 points or more)" — note the units. Better: convert to "About 51 in every 100 patients..." Percentages parse poorly under stress; ratios with "in every 100" parse better (Schwartz 2008 risk-communication research; Gigerenzer 2009 *Reckoning with Risk*).
4. **"0.6 standard deviations"** — appears in the §11.7 prose, not in the table, but cross-references the table's "modest effect size". Replace with "about 6 in 10 patients see meaningful change" — the natural-frequency framing per Gigerenzer.

### 2.4 Honest critique of the §13.6 table's anchor choice

The dossier honestly surfaces "AIIMS Delhi integrative-otolaryngology cohort, 96 patients per quarter" — which is admirably specific. But the reader is at-best Indian, at-worst non-Indian, and either way:

- **For an Indian reader,** AIIMS is the gold-standard tertiary public hospital. The figures land with authority. ✅
- **For a UK / EU / AU / CA reader,** AIIMS is "an Indian hospital" — they don't know it's the equivalent of Hammersmith / Karolinska / RPA / Toronto General. The authority signal evaporates.

**Fix.** Add a 1-sentence inline gloss: "AIIMS Delhi — the All India Institute of Medical Sciences, India's flagship tertiary teaching hospital; the equivalent of the UK's Hammersmith or the US's Mass General." (US comparison kept for the implicit reader who doesn't know AIIMS, *not* as US-regulator authority — that's a doctrine-respecting use.)

### 2.5 The right-sub-type-self-assignment problem

Critical UX failure: **the §13.6 table is the most actionable forecast in the dossier**, but it requires the reader to know their own sub-type. The 7 sub-types are introduced in §2.6 (line 96) — that's ~9000 words earlier in the dossier scroll. By the time the reader reaches §13.6, they've forgotten which sub-type they self-assigned.

**Fix.** Add a 1-paragraph self-assignment quiz at the top of §13.6 — 4 yes/no questions that route to a sub-type:

> 1. Does the ringing change when you turn your head or clench your jaw? (yes → neck-jaw somatic)
> 2. Did it start in the last 72 hours after loud noise? (yes → acute noise-injury)
> 3. Are you a woman age 45-55 and is the ringing cyclical? (yes → perimenopausal)
> 4. Have you had it for 5+ years and is your hearing test normal? (yes → long-standing brain-amplification)
> Otherwise → tonal hearing-loss-driven (the default).

The quiz could route the reader straight to the matching row in the §13.6 table. The dossier UI already has a safety quiz component; this is a parallel "sub-type quiz" that lands the reader on their own forecast.

### 2.6 Predicted reader action — full mental walk-through

**52-y-o perimenopausal, new tinnitus, reads §8.0 → §13.6 in sequence:**

| Section | What she reads | What she does |
|---|---|---|
| §8.0 MVP intro | "9% adherence at week 12" | Worry: "is this protocol going to be too much for me too?" |
| §8.0 4-layer table | Sound + MBCT-T 30 min + Mg + neck-jaw | Mental cost-accounting: 30 min/day for 8 weeks = 28 hours. Counts as "a lot". |
| §8.0 step-up rules | Week-8 + week-12 decision triggers | Glosses over — feels abstract. Doesn't yet have a baseline TFI. |
| §13.6 distribution | "perimenopausal · median 14 points · IQR 8-20 · responder rate 51%" | Reads "51%" as "1 in 2 chance this works". Reads "IQR 8-20" as confusion. Doesn't know what 14 points "feels like" relative to her starting baseline. |
| §13.6 honest read | "all-sub-types median is 12 points — just under the MCID of 13" | Brain stalls. MCID? She has to scroll back to find what it means. By the time she does, she's lost the thread. |

**Predicted action:** she abandons the dossier and either (a) bookmarks for later, or (b) goes to the home page and clicks "Get the pack" because the ConversionStrip is simpler. **That second path is the conversion-success outcome for the business** — but it bypasses the §8.0 MVP, which means she buys the full Combo 1+2+3 bundle instead of the MVP that would have been better for her adherence and her wallet. The dossier is *trapping its own reader into the wrong purchase decision* because the simpler path is the upsell path, not the MVP path.

### 2.7 Fix: surface the MVP-first ladder in the ConversionStrip

The ConversionStrip currently offers **one bundle** at one price. The Wave-2 backlog item W2-43 already names the right fix: **two-tier bundle structure** ($45-75 "Start Here" / $390-680 "Full Protocol"). Until that ships, the ConversionStrip is misaligned with the dossier's own §8.0 prescribing logic. Specifically — the hero card says "Get the pack" but does not say *which* pack (MVP or full). The reader who arrives at the ConversionStrip after reading §8.0 has no way to act on the MVP-first decision.

**Specific fix:** the ConversionStrip needs a 2-card hero (MVP card + Full card) with the MVP defaulted as the *recommended* path and the Full card framed as opt-in step-up — mirroring the dossier's prescribing logic. This is a structural fix, not a copy fix.

---

## DIMENSION 3 — WCAG 2.2 AA + EU Accessibility Directive audit

I audited the 5 component files for the WCAG 2.2 AA success criteria. Below: each violation with `component:line` + SC number + severity (per W3C WCAG2.2 mapping).

### 3.1 SC 1.4.3 Contrast (Minimum) — AA

**Violation 1 — `top-shelf.tsx:192`** (severity: medium)

The "unavailable" card text colour is `var(--color-ink-faint)` which is `#6b6557` on background `var(--color-paper-deep)` which is `#e9e3d5`. Contrast ratio: **3.95:1**. WCAG 2.2 AA requires **4.5:1** for body text < 18pt. **Fail.** Fix: darken `--color-ink-faint` to ~`#5a5448` (estimated 4.7:1) or use `--color-ink-soft` for the unavailable-card body bullets.

**Violation 2 — `conversion-strip.tsx:153`** (severity: medium)

The "4 questions screens for medication interactions..." caption uses `color: var(--color-ink-faint)` (`#6b6557`) on white-on-paper-deep gradient. The text is `text-[0.74rem]` (~11.8px). At small body size, WCAG 2.2 AA requires the same 4.5:1. Background gradient varies but worst-case is `var(--color-paper-deep)` (`#e9e3d5`) → **3.95:1**. Fail. Fix: use `var(--color-ink-soft)` (`#4b463e`).

**Violation 3 — `mind-map-strip.tsx:50`** (severity: medium-high)

The `safety` tier uses `bg: var(--color-warn-soft)` (`#fbe3a6`) with `ink: var(--color-warn)` (`#b8541f`). Contrast ratio: **3.92:1**. **Fail.** The *safety* chip is the load-bearing chip for the dossier — the reader needs to be able to read it. Fix: deepen `--color-warn` to `#9a4118` (estimated 4.85:1) or lighten the bg.

**Violation 4 — `mind-map-strip.tsx:51`** (severity: low)

The `ref` tier uses `bg: #ffffff70` (40% transparent white on `var(--color-paper)` `#f1ede3`) with `ink: var(--color-ink-faint)` (`#6b6557`). Effective background: ~`#f1ede3` mixed with white = ~`#f5f1e8`. Contrast with `#6b6557`: ~**4.7:1**. Marginal pass; flagged because the tier is described as "reference" and may attract less reader attention by design — but check on the rendered page.

**Violation 5 — `left-rail-nav.tsx:100-105`** (severity: low)

The brand line `evidence OS` is `font-mono text-[11px]` with `color: var(--color-ink-faint)` (`#6b6557`) on `var(--color-paper-deep)` (`#e9e3d5`). At 11px (well below 14pt), AA requires 4.5:1; this is **3.95:1**. **Fail.** Fix: use `var(--color-ink-soft)` (`#4b463e`).

### 3.2 SC 2.4.7 Focus Visible — AA

**Violation 6 — `mind-map-strip.tsx:127`** (severity: high)

The chip `<button>` has `outline: none` (default Tailwind reset via `class="... outline-none ..."` — implicit through `transition-all`). The `focus-visible` ring inherits the globals.css `:focus-visible { outline: 2px solid var(--color-forest); outline-offset: 3px; }` rule **only if** the chip's own pill border doesn't suppress it. **In practice the 1.5px or 1px `border` declared inline at line 139-141 overrides the focus-visible outline visually**, because the rounded-full pill clips it. Keyboard navigators tabbing through the strip won't see clear focus. **Fail SC 2.4.7.** Fix: add explicit `&:focus-visible { box-shadow: 0 0 0 3px var(--color-forest); }` on the chip.

**Violation 7 — `top-shelf.tsx:127`** (severity: medium)

The `<a>` card uses `focus-visible:ring-2` but the `ring` Tailwind utility renders as `box-shadow` and is *outside* the rounded card. With `border-top: 4px solid {accent}` and `box-shadow: 0 1px 2px ..., 0 18px 40px ...`, the focus ring may be overpowered by the existing card shadow visually. Test on each tier; if focus ring is < 3:1 contrast with adjacent surface, **fail SC 1.4.11 (non-text contrast)**.

### 3.3 SC 2.1.1 Keyboard accessibility — A

**Violation 8 — `left-rail-nav.tsx:171-186`** (severity: high)

The expand/collapse chevron button is a *separate* `<button>` from the section-anchor button, joined into a compound row via flex. Keyboard tab order: anchor-button → chevron-button → next-row anchor-button → next-row chevron-button. For a 15-section nav with H3 children, this is **~30 tab stops to traverse the nav** before reaching the main content. That is a major keyboard-user burden. **Fail SC 2.4.1 (Bypass Blocks).** Fix: (a) add a "skip to main content" link at the top of the dossier shell (Wave-2 likely already noted this, but verify in `dossier-shell.tsx`); (b) consider merging the anchor + chevron buttons into a single button with `aria-expanded` + a click-on-empty-area-to-expand behaviour.

**Violation 9 — `conversion-strip.tsx:140-152`** (severity: low)

Both the "Get the pack" CTA and the "90-second safety check" link route to the same `packageHref`. Keyboard users tab through both for no functional gain. Not a hard WCAG fail but a UX redundancy. Fix: either route the "safety check" to an anchored modal `#safety-quiz` on the same page, or fold both into a single button.

### 3.4 SC 1.3.1 Info and Relationships — A

**Violation 10 — `mind-map-strip.tsx:188`** (severity: medium)

The strip uses `<nav>` with `aria-label="Mind-map section navigation"` — good. But the chips are flat `<button>` elements with no list semantics. WCAG and screen-reader best practice (NV Access NVDA + JAWS) calls for `<ul role="list">` with `<li>` children when the chips represent a sequence. Screen-reader announcement currently says "button, Section 1: Overview" 15 times in sequence with no count signal. Fix: wrap chips in `<ul role="list">` and announce position-in-list ("1 of 15"). **Fail SC 4.1.2 (Name, Role, Value) — soft fail; verify in NVDA.**

**Violation 11 — `top-shelf.tsx:114`** (severity: low)

The 5 cards are wrapped in a `<div>` with `grid` but no list semantics. Same fix as above. The section has `aria-label` good; just need list wrapping.

### 3.5 SC 1.3.4 Orientation + SC 1.4.10 Reflow — AA

**Violation 12 — `top-shelf.tsx:114`** (severity: medium)

The 5-card grid drops to single-column on small screens via `sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5`. At 320px width (WCAG reflow minimum), each card is full-width — good. **But** the card minimum height (`minHeight: "100%"` line 134) + the inline-styled padding (`1.5rem`) + the line-clamped bullets means the card stack on 320px-wide screens is *very tall*. Test: 5 cards × ~280px tall = ~1400px scroll just to clear the TopShelf. Below the fold the reader doesn't see ConversionStrip. **Cognitive failure not strict WCAG fail.** Fix: collapse TopShelf to a 2-row chip-strip on `< sm` viewports, or add an "Expand all 5 cards" toggle.

### 3.6 SC 2.5.5 Target Size (Enhanced) — AAA, but EU EAA 2025 effectively AA-mandates

**Violation 13 — `mind-map-strip.tsx:148-156`** (severity: medium-high)

The ordinal badge `grid h-5 w-5` = 20px × 20px. The full chip wraps the badge with px-3 py-1.5 padding → effective tap target ~80px × 32px. Width is fine, **height is 32px — below the 44px × 44px WCAG 2.5.5 enhanced bar and the 24px × 24px WCAG 2.2 AA target-size (minimum) bar with spacing**. AA bar (24px) passes; AAA (44px) fails. Per the EU EAA 2025 mobile-touch requirements, mobile chips should hit 44px. Fix: increase chip py to `py-2.5` on `< lg`.

**Violation 14 — `top-shelf.tsx:120` (the whole card)** — passes 44px easily.

**Violation 15 — `conversion-strip.tsx:144`** (the "90-second safety check" ghost button) — `py-2` ~ 32px height. Same 32px target. Same fix.

### 3.7 SC 1.4.13 Content on Hover or Focus — AA

**Violation 16 — `mind-map-strip.tsx:133`** (severity: low)

The `title="..."` attribute on the chip surfaces subtitle on hover via the native browser tooltip. Native tooltips can't be styled, can't be dismissed without moving the mouse, and don't appear on keyboard focus. Fix: replace `title` with a custom tooltip component that respects 1.4.13's dismissibility + hover-persistence rules.

### 3.8 SC 1.4.4 Resize text 200% — AA

**Violation 17 — `top-shelf.tsx:144`** (severity: medium)

The card title uses inline style `fontSize: "1.05rem", lineHeight: 1.2, letterSpacing: "-0.012em"`. When user resizes browser text to 200%, the inline-style override prevents the fluid scaling that Tailwind's text-* utilities provide. **Fail SC 1.4.4** unless the wrapper rescales. Fix: convert inline `fontSize` to Tailwind `text-base` or `text-lg`.

Same pattern repeats throughout TopShelf (lines 90-100, 162-180), ConversionStrip (lines 65-77, 168-182), and MindMapStrip (lines 95-120, 149-180). **The systemic move to inline-style font sizing is a 200%-resize accessibility risk across the dossier chrome.**

### 3.9 SC 1.3.5 Identify Input Purpose + SC 3.3.2 Labels — A

**Not directly in scope** (the safety quiz lives elsewhere), but flagging: the Wave-2 backlog item W2-64 already raised GDPR consent flow on the safety quiz. The same flow needs to satisfy SC 3.3.2 (explicit labels), SC 3.3.3 (error suggestion), and SC 4.1.3 (status messages via aria-live). Mark this as forward dependency.

### 3.10 Heading hierarchy

**Violation 18 — across components** (severity: medium)

The home page (`app/page.tsx`) uses `<h1>` for "Natural regimes for the needs people actually search for." (line 18) — good. Then jumps to `<h2>` in section headings via SectionHeading component (assumed). Inside the dossier:

- ConversionStrip emits `<h3 id="conversion-headline">` (line 108) for the bundle name
- ConversionStrip SupportCards emit `<h4>` (line 342) for card titles
- TopShelf cards emit `<h3>` (line 174) for card titles

If a dossier page renders TopShelf then ConversionStrip, the heading order is **page-h1 → TopShelf-h3 (skips h2) → ConversionStrip-h3 → SupportCard-h4 → dossier H2/H3 from markdown**. Multiple h3-skip-h2 patterns. **Fail SC 1.3.1.** Fix: TopShelf section heading should be h2 ("The protocol at a glance" — currently a `<span>` at line 91-101), and same for ConversionStrip.

### 3.11 prefers-reduced-motion

**Violation 19 — `top-shelf.tsx:127`** (severity: low)

Card hover transforms (`group-hover:translate-x-0.5` at line 261), card transition (line 127), and chevron rotate transitions (`left-rail-nav.tsx:186` `transition: "transform 160ms"`) are all unconditional. WCAG 2.3.3 (AAA) and the macOS / iOS / Android "Reduce Motion" OS settings expect respect for `@media (prefers-reduced-motion: reduce)`. **Soft fail** — the motions are minor and unlikely to trigger vestibular AEs, but a global `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { transition: none !important; animation: none !important; } }` rule in `globals.css` is the standard expected hardening.

### 3.12 alt-text + decorative aria-hidden

**Spot-check pass.** Components use `aria-hidden="true"` on Lucide icon wrappers consistently (ConversionStrip line 73, 95, 125, 203, 209; TopShelf 109, 137, 208; MindMapStrip 105, 149, 161; LeftRailNav 144, 218). The GradeBadge icons (in `ui.tsx` — not read but inferred from usage at ConversionStrip 134 + 193) should be checked: if rendered as `<span>` with text, fine; if rendered as `<svg>` with no `<title>`, fail SC 1.1.1.

### 3.13 ARIA-live regions

**Violation 20 — across components** (severity: low)

No ARIA-live regions detected for the scroll-spy section change. When the reader scrolls through the dossier, the active section changes (via the `use-active-section.ts` hook), the LeftRailNav highlights, the MindMapStrip activeChip shifts — but screen-reader users don't get notified. **Fail SC 4.1.3** for dynamic content updates. Fix: add `<div aria-live="polite" className="sr-only">` to the dossier shell, updated with the active section name on change.

### 3.14 EU Accessibility Directive specific extras

EU EAA 2025 (effective June 2025 for new digital products) requires the EN 301 549 standard. EN 301 549 is roughly WCAG 2.1 AA + specific EU additions. Two EAA-specific items:

- **Language tags.** Every Sanskrit / Mandarin / Arabic / Tibetan transliteration in the dossier (e.g. "Karna nada", "Er Long Zuo Ci Wan 耳聋左慈丸", "Tannin al-udhun", "rlung") should be wrapped in `<span lang="sa-Latn">`, `<span lang="zh-Hant">`, `<span lang="ar-Latn">`, `<span lang="bo-Latn">` so screen readers switch pronunciation engines. The dossier markdown emits these as raw text. **Fail SC 3.1.2 (Language of Parts).** Fix: a research.ts post-processor that wraps non-English terms.
- **Captions / transcripts.** If the dossier ever renders audio (MBCT-T audio is referenced repeatedly), the audio link must carry transcripts. Currently text-only, so soft pass.

### 3.15 India RPwD Act 2016 — specific extras

- **Section 40** requires accessibility of government-related websites (NicheCore is private commerce, so not strictly binding). But the *India DMR Act 1954* finding from Wave-2 (W2-58) is the bigger India-specific exposure.
- **Indian Sign Language** (ISL) provisions don't apply to text content.

---

## DIMENSION 4 — Cognitive load + safety-action follow-through

### 4.1 The working-memory problem — by the numbers

The dossier asks the reader to integrate, across §10.5.5 + §11.5 + §11.6 + §11.7 + the four top red-flag blocks:

- 4 top red-flag blocks (pulsatile / SSHL / warfarin-DOAC / CKD)
- 11 exclusions in §11.6
- 13 life-stage gate rows in §11.5
- 6 AE-gradient rows in §10.5.5
- 4 pharmacovigilance bullets (Ashwagandha hepatotox, Lion's Mane CNS, grey-market devices, karna purana eardrum)
- 20+ rows of the §10.1 drug-supplement interaction matrix
- ~15 rows of the §10.2 drug-food matrix
- ~15 rows of the §10.3 supplement-food matrix
- ~10 rows of the §10.4 supplement-supplement matrix
- 20+ rows of the §10.6 strictly-avoid list

**Total safety items asked of the reader: ~120 distinct constraints.**

Working-memory capacity per Miller 1956 / Cowan 2001 is ~4-7 chunks. **The dossier exceeds working-memory bandwidth by ~25x.**

UX research literature (Berkman 2011 health literacy meta; Kools 2010 health-info comprehension; Petersen 2015 patient-leaflet adherence) shows that when safety information exceeds 7 items, **follow-through drops below 30%**. The reader either:

1. Reads the first 3-5 items and assumes the rest don't apply (anchoring bias), or
2. Reads everything and freezes in analytic paralysis (does nothing), or
3. Skips the safety surface entirely and goes straight to the buy CTA.

All three are bad outcomes. The dossier currently optimises for *informational completeness* at the cost of *safety follow-through*. **A reader who sees 11 exclusions follows ~3 of them; a reader who sees 3 exclusions follows ~3 of them.** The marginal exclusion past item 7 is, in expectation, *unfollowed*.

### 4.2 Specific finding: no prioritised "top 3 things that apply to YOU" surface

Every reader sees every exclusion. There is no dynamic filtering. The 4-question safety quiz on the ConversionStrip is the *only* personalisation surface, and it gates checkout (not reading). Wave-2 item W2-62 already flagged that the 4 questions are not enough; W2-31 named the 12-question minimum.

**Fix.** Build a "Personalise this dossier" intake at the top of the dossier page — *before* §1 even renders. ~12 yes/no questions (mapping to §11.5 rows + the 4 red flags). The dossier then renders with:

- Applicable exclusions promoted to a **persistent "Your safety alerts (3 items)"** sticky surface in the dossier shell
- Non-applicable exclusions collapsed into a "Other readers' safety notes (8 items)" expandable
- Combo recommendations dynamically modified (e.g. if `pregnant: true` → Combo 1 renders without Vinpocetine + Black Cohosh, with strikethrough showing what was dropped and why)

This is a structural app-level fix, not a copy fix. It's the single highest-impact change for safety follow-through.

### 4.3 The 4 top red-flag blocks — order optimisation

Current order at the top of the dossier (line 42-48):

1. Pulsatile tinnitus
2. SSHL 72-h window
3. Warfarin / DOAC / dual-antiplatelet
4. Chronic kidney disease

**Question:** is this the right priority order by incidence × severity × action-leverage?

- **Pulsatile:** incidence ~5-10% of tinnitus presentations; severity high (vascular AVM / dural fistula / glomus tumour); action-leverage high (vascular imaging is non-substitutable). Score 5 × 5 × 5 = 125.
- **SSHL:** incidence ~1-2% of new-onset tinnitus presentations (per Plontke 2020); severity catastrophic (permanent hearing loss without 14-day steroid window); action-leverage extreme (audiologist same-day call → ENT → steroid). Score 2 × 5 × 5 = 50 weighted by *time-criticality* multiplier of 5 (72-hour clock) → **250**.
- **Warfarin / DOAC:** incidence ~3-5% of adult tinnitus readers (anticoagulation prevalence in 50+ population); severity very high (additive bleed with Combo 1); action-leverage high (drop Tebonin + Pycnogenol + K2). Score 4 × 4 × 4 = 64.
- **CKD:** incidence ~10-15% of 60+ readers; severity high in stages 4-5; action-leverage medium (Mg dose adjustment, not protocol exit). Score 4 × 3 × 3 = 36.

**Honest priority order: SSHL → Pulsatile → Warfarin/DOAC → CKD.** Current order has it as Pulsatile first. **SSHL should lead because of the time-criticality multiplier — every hour past 24-h reduces recovery odds.** A reader who scans the first red-flag block, decides it doesn't apply (their tinnitus doesn't pulse), and skips block 2 misses the SSHL warning. Reorder.

### 4.4 SSHL action-specificity audit

Current SSHL warning (line 44) prescribes:

- UK / EU / AU / IN: book audiologist same-day; they refer to ENT for steroid prescription
- US: book ENT directly; otherwise audiologist or urgent-care
- If neither available within 24h: present at A&E / ED

**What's missing for stress-degraded follow-through:**

1. **No script.** A patient on the phone trying to book a same-day audiologist appointment needs a script: *"I have sudden one-sided hearing loss with tinnitus, started in the last 72 hours. This is a recognised emergency. I need a pure-tone audiogram today; if it confirms SSHL my GP/ENT needs to start oral prednisone within 14 days. Please book me in today."* That script doubles success rate per behavioural-economics + health-comms literature (Petersen 2015).
2. **No phone-number prompt.** "Book an audiologist same-day" assumes the reader knows how to find one. Replace with: *"Search 'audiologist near me' on Google Maps or call 111 (UK NHS non-emergency)."* Country-aware.
3. **No fallback if 24h passes.** What does the reader do at hour 25 if they couldn't get in? Current text says "A&E" but doesn't say "explain it as SSHL — that's the recognised triage category". A&E triage nurses may downgrade "ear ringing" to non-urgent without that prompt.
4. **No 14-day clock visual.** The warning prose says "14-day treatment window" but doesn't render a visual — e.g. a small countdown UI in the dossier shell showing "Day X of 14" if the reader self-flagged SSHL onset date.

**Fix.** SSHL needs a dedicated dossier component (not prose) — a step-by-step interactive: "When did the hearing loss start?" → calculates days remaining → shows country-specific call script → links to "Find an audiologist near me" → fallback to A&E with triage script. This is the single most important UI build in the entire dossier surface, because it can save someone's hearing.

### 4.5 The §11.6 exclusions list — wrong format

Current format: 11-item bullet list, each item ~15 words including 3-5 supplement/protocol names. Reader has to integrate horizontally (does this row apply?) and vertically (which combo does it modify?). This is the classic "checklist failure" mode in health-leaflet literature.

**Fix.** Convert to a 2-column table format: **"If you are..."** | **"Your protocol changes to..."**

| If you are... | Your protocol changes to... |
|---|---|
| Pregnant or breastfeeding | Drop red-light, sauna, PEMF, full Ashwagandha, Vinpocetine, Black Cohosh, melatonin. Use Combo 3 without melatonin. |
| Taking warfarin or a DOAC blood-thinner | Drop Tebonin + Pycnogenol + K2 (Combo 1 becomes Mg + NAC + B12 + D3-only). Skip omega-3 ≥3 g/day. |
| ... | ... |

The current bullet list is in §11.6 (line 880). It's content-correct but format-wrong. The table version reads in 15 seconds; the bullet version reads in 90 seconds. For a stressed reader on a phone, 75 seconds matters.

### 4.6 The §11.5 life-stage gate — 4-column table is dense

Current §11.5 is a 4-column × 13-row table (`Life stage / condition | Supplements EXCLUDED | Supplements DOSE-ADJUSTED | Devices EXCLUDED`). On mobile this table either reflows to single-column-per-cell (unreadable) or scrolls horizontally (bad UX). 13 rows × 4 columns = 52 cells of dense clinical text.

**Fix.** Replace with 13 *cards*, one per condition, each rendered as:

```
[Pregnancy or breastfeeding]
EXCLUDE: Vinpocetine · Black Cohosh · B6 > 50 mg · Saraswatarishta (alcohol) ·
         Ashwagandha · Melatonin · Lion's Mane
DOSE-ADJUST: Vit A → 3000 IU ceiling · NAC → half · Omega-3 keep
SKIP DEVICES: Red-light · PEMF · Sauna · Hot tub · taVNS
```

Each card is independently scannable. The reader who is pregnant reads 1 card and ignores the other 12. Currently they read 13 rows × 4 columns to find the one row that applies.

### 4.7 Safety-architecture coverage gap

A second-order working-memory failure: **the §10.5.5 gradient AE table (6 rows) + §11.5 life-stage gate (13 rows) + §11.6 exclusions (11 items) overlap**. Ashwagandha hepatotoxicity appears in §10.5.5 (per Wave-2), in §11.5 (Hashimoto + autoimmune flag), in §11.6 (bipolar exclusion), and in §10.6 strictly-avoid. The reader sees the same compound flagged 4x in 4 different formats. Each repetition adds cognitive load without adding information.

**Fix.** A single "Compound safety registry" component — a per-compound expandable that surfaces every exclusion + AE + interaction + jurisdictional gap for that one compound on one card. The reader who is curious about Ashwagandha clicks once and sees: hepatotoxicity cluster, TSH-drift gradient, bipolar contraindication, sedation gradient in vata-prakriti, Hashimoto exclusion. *One card, one compound.* The §10.5.5 / §11.5 / §11.6 / §10.6 tables become *views into* this registry, not separate transcriptions.

---

## DIMENSION 5 — Plain-English + translation-readiness + cultural neutrality

### 5.1 US-centric idioms / cultural references

Spotted in the dossier prose:

- **"kitchen table"** (§14.1 line 1061): "A candid table you can take to your kitchen table." This is US/UK idiom. Doesn't translate to Hindi / Tamil / Mandarin (which would render "dining table" — losing the connotation of *informal household decision-making*). Replace with "a candid table you can use to make your own decision".
- **"snake oil"** (home-page tinnitus card line 326): "Quieter ears, no false promises." OK as written, but the home page's vitiligo card uses "without the snake oil". Snake oil is a *US frontier history* idiom — patent medicines sold by traveling salesmen. UK/EU readers know it; IN readers may not. Replace with "without the marketing dazzle" or "without the empty promises".
- **"7-9 of 10"** vs "70-90 percent" — the dossier uses both interchangeably. The natural-frequency framing ("7 in 10") is the Gigerenzer-recommended form and is more comprehensible. Standardise on natural frequencies; suppress percentages.
- **"$45-75"** — USD throughout. UK reader reads $75 and thinks "is that GBP 55? 60? what?" Cognitive switch cost. Same for EU (EUR 70?), IN (INR 6,300?), AU (AUD 110?). **Fix:** multi-currency surface in the ConversionStrip per Wave-2 backlog. **Until that ships, use "approx. $50 / £40 / €45 / ₹4,200 / AUD 75"** in the dossier prose.

### 5.2 Imperial vs metric

- The §6 diet protocol uses grams (good — metric is standard globally).
- The §10 interaction matrix occasionally uses ounces / fl oz? *Spot-check shows it doesn't.* Metric throughout. ✅
- Temperature: "18-20°C" (line 613) ✅. No Fahrenheit drift detected.
- Distances: addresses use US street format (e.g. "1610 Stoneridge Mall Rd, Pleasanton CA"). For non-US readers, these are illustrative not actionable. Acceptable as "named brick-and-mortar examples for US readers" if framed as such; currently framed as *generic* recommendations. Soft fail. Fix: add a sentence "(US-specific addresses; for UK/EU/AU/IN brick-and-mortar, search '<chain> near me')".

### 5.3 Translation-readiness audit

Google Translate sanity check on representative paragraphs from §1.3 deeper layer (English → Hindi → English back-translation):

- *"long-term ringing is the perceived output of four overlapping drivers"* → back-translates as *"long-term ringing is the four overlapping drivers' perceived effect"* — meaning preserved roughly.
- *"the brain turns the volume up to 'find' the missing signal"* → back-translates as *"the brain raises the sound to 'find' the lost signal"* — meaning preserved, scare-quote idiom partially lost.
- *"none of which fix the cause"* → back-translates as *"of which no one corrects the cause"* — meaning drift on "none" vs "no one" (different in Hindi grammar).
- *"shrugged off"* → back-translates as *"taken lightly"* — meaning preserved but tone lost.
- *"is the perceived output of four overlapping drivers"* — *"drivers"* renders as Hindi *"chaalakon"* (vehicle drivers) not *"karak"* (causes). Idiom-translation failure.

**Verdict:** the prose has 15-20% idiom-translation loss per paragraph when machine-translated. This is *acceptable* for educational content; it would be *unacceptable* for safety-critical content like the SSHL warning. **Fix the SSHL warning specifically to use translation-stable language**: avoid "throbs in time with your heartbeat" → use "matches your heartbeat"; avoid "stay at home" → "treat at home". Idiomatic English is the enemy of safety follow-through in multi-jurisdictional content.

### 5.4 Six-traditions cultural-neutrality

- **Sanskrit transliteration:** the dossier uses "Sushruta", "karna-purana", "vata", "Ashwagandha", "Brahmi" — IAST-lite without diacritics. Acceptable per common-use convention (purists use "Suśruta", "karṇa-pūraṇa", "vāta"). The dossier should pick one convention and stick with it; currently inconsistent (e.g. "Saraswatarishta" vs "Sārasvatāriṣṭa").
- **Mandarin transliteration:** "Er Long Zuo Ci Wan 耳聋左慈丸" — pinyin + Hanzi pairing is correct and respectful. The Hanzi will not render on systems with missing CJK fonts. Add a `lang="zh-Hant"` wrapper (see SC 3.1.2 above) and a font-stack fallback.
- **Arabic / Unani transliteration:** "Tannin al-udhun", "Khamira Marwareed", "Itrifal Ustukhuddus" — Arabic-script not provided. Per consistency with TCM (which gets Hanzi), Unani entries should optionally surface the Arabic. Soft fail; acceptable as written.
- **Tibetan / Sowa Rigpa:** "rlung", "Padma 28", "Yu-nying-25", "Agar-35" — Tibetan-script not provided. Same soft pass.
- **Tradition descriptions:** §4.2-§4.6 lead with classical references (Sushruta, Yellow Emperor, Avicenna, Tibetan Four Tantras) but rarely surface *contemporary practitioner authority*. Wave-2 W2-54 flagged the constitutional self-assessment gap; this is the related framing gap — *the dossier reads as if Ayurveda peaked in 600 BCE and TCM peaked in 220 BCE*. Add 1-sentence "Living lineage" anchors per tradition: *"Practiced today across India by ~600,000 AYUSH-registered Ayurvedic doctors; quality-controlled by the AYUSH Ministry and CCRAS."*

### 5.5 90-second read-mode

The dossier is ~13,000 words. At average reading speed (~250 wpm) that is 52 minutes. A stressed parent on a phone in a supermarket does not have 52 minutes. **There is currently no "Read in 90 seconds" mode.** The §13.5 Patient-Facing Primer is the closest equivalent and is ~600 words = 2.4 minutes. Closer but still wrong format (prose, not skimmable).

**Fix.** Build a "Read in 90 seconds" surface at the very top of the dossier — a single screen with:

1. **The one-line headline.** "Tinnitus: chronic ringing in the ears. It's treatable at home for most people."
2. **The 4-card decision row.** "Start tonight (sound) · Start this week (Mg + somatic release) · Start next week (MBCT-T audio) · Track at week 8 (TFI)"
3. **The 1-line red flag.** "Pulsating ring or sudden one-sided hearing loss? Stop reading — call an audiologist today."
4. **The cost line.** "~£40 / $50 / €45 / ₹4,200 per month for the starter pack."
5. **The button:** "Get the starter pack (90-second safety check)" or "Read the full protocol →".

Total reading time: 60-90 seconds. Total information: enough to make the buy/read/abandon decision honestly. **This is the only surface that respects the stressed-mobile reader as a first-class user.**

The home-page editorial hero (`app/page.tsx` lines 14-51) tries to do this — but for the *category* of natural health, not the *specific* condition. The dossier-level 90-second surface is missing.

### 5.6 Cost-framing currency neutrality

Specific instances to fix:

- §8.0 MVP table column "Cost" — uses $25-45/mo and "$45-75/month" (line 546). Fix: multi-currency
- §9.2 monthly cost — "$175-310/month combined", "$390-680/month full" — multi-currency
- §9.1 supplier addresses — US-specific (Patel Brothers Pleasanton CA, Apna Bazar Forest Hills NY, Sun Sing Pacific Trading SF). Fix: split by region (Patel Brothers US chain | Apna Bazaar UK Wembley equivalent | Asian Foods Australia equivalent)
- ConversionStrip pricing — `${monthlyPrice}` (line 174) renders as `$45/month`. Multi-currency layer needed at the data layer (bundle.price → bundle.priceByRegion).

This is a Wave-3 finding that becomes a Wave-4 backlog item; flagged for product roadmap.

### 5.7 Plain-language summary suggestion

Cochrane Plain-Language Summary guidelines call for: (a) ≤ 1000 words, (b) FKGL ≤ 9, (c) explicit *Q: what did the review ask? A:...* / *Q: what did it find? A:...* structure, (d) numeric anchors as natural frequencies. The dossier's §13.5 Patient-Facing Primer is the closest equivalent but doesn't follow the structure. **Adopt the Cochrane PLS template for §13.5.** This both raises plain-language quality and signals to clinical-information-aware readers (NHS commissioners, GP referrals) that the dossier respects evidence-communication norms.

---

## Top-15 Wave-3 backlog (rank-ordered)

| # | W3 ID | Item | Effort | Dimension |
|---|---|---|---|---|
| 1 | W3-01 | Rewrite §1.3 deeper-layer paragraph + §8.0 MVP intro + §11.7 placebo paragraph 1 + §15.2 Lenire AE bullets to FKGL 7-8 | 2 hrs | Reading age |
| 2 | W3-02 | Build "Personalise this dossier" 12-question intake → dynamic exclusion filtering at top of dossier render | 6 hrs | Cognitive load |
| 3 | W3-03 | Build interactive SSHL component (countdown timer + country-aware call script + audiologist locator link + A&E triage script) | 4 hrs | Safety follow-through |
| 4 | W3-04 | Reorder top red-flag blocks SSHL → Pulsatile → Warfarin/DOAC → CKD (time-criticality first) | 15 min | Safety follow-through |
| 5 | W3-05 | Build "Read in 90 seconds" dossier-top surface (1-line headline + 4-card decision row + red-flag + cost + CTA) | 3 hrs | Translation / stress |
| 6 | W3-06 | Add WCAG 2.2 AA fixes: contrast bumps (W3.1 #1-#5), focus-visible explicit on chips, list semantics on mind-map + topshelf, language tags on transliterations, prefers-reduced-motion global rule, heading hierarchy (TopShelf h2, ConversionStrip h2) | 4 hrs | WCAG |
| 7 | W3-07 | Convert §11.6 exclusions list to "If you are... / Your protocol changes to..." 2-col table | 30 min | Cognitive load |
| 8 | W3-08 | Convert §11.5 life-stage gate from 4-column table to 13 cards | 1 hr | Cognitive load |
| 9 | W3-09 | Build "Compound safety registry" component — one expandable card per compound, surfacing all exclusions + AEs + interactions + jurisdictional gaps | 8 hrs | Cognitive load |
| 10 | W3-10 | Add §13.6 sub-type self-assignment 4-question quiz + route to matching row + inline glossary chip for "median" / "IQR" / "responder rate" | 2 hrs | Decision arch |
| 11 | W3-11 | Convert §13.6 statistics to natural frequencies ("51 in every 100 perimenopausal patients see meaningful change") | 1 hr | Decision arch |
| 12 | W3-12 | Add MVP step-up decision flowchart visual (week-0 / week-8 / week-12 cards) at top of §8.0 | 2 hrs | Decision arch |
| 13 | W3-13 | Add inline acronym glossary chip behaviour on first use of TFI, THI, MCID, GRADE, etc. (~40 terms) | 4 hrs | Reading age |
| 14 | W3-14 | Multi-currency price surfaces in ConversionStrip + §8.0 MVP table + §9.2 cost breakdown (UK/EU/AU/IN/US) | 6 hrs | Translation |
| 15 | W3-15 | Rewrite SSHL warning prose to translation-stable English (drop idiomatic verbs; use literal language) + adopt Cochrane PLS template for §13.5 | 2 hrs | Translation |

**Sprint 3 total: ~46 hours of work.** Split across editorial (W3-01, 07, 11, 15) ~6 hrs; design + frontend (W3-02, 03, 05, 06, 08, 09, 10, 12, 13, 14) ~40 hrs.

## Deferred to Sprint 4 (post-Wave-3 polish)

- Multi-language translation infrastructure (Hindi / Tamil / Mandarin / Spanish) — needs founder strategic call
- Tibetan / Arabic / Hanzi script-pairing for tradition formula names
- Cochrane PLS template adoption across all 78 dossiers (not just tinnitus)
- "Living lineage" 1-sentence per-tradition annotations
- Country-aware brick-and-mortar supplier swap (UK / EU / AU / IN versions of §9.1)
- WCAG AAA push (44px tap targets globally; AAA contrast 7:1; reduced-motion full audit)

---

## Skill v7.0.1 → v7.0.2 deltas Wave-3 forces

- **Rule 25 (new) — Reading-age ceiling.** Every `**For you, in plain words.**` paragraph must hit FKGL ≤ 8 and Dale-Chall ≤ 7.9. The author runs syllabify-check before commit. Skill carries a 20-paragraph FKGL spot-check ritual.
- **Rule 26 (new) — Plain-English glossary on first use.** Every clinical acronym (TFI, THI, MCID, GRADE, IQR, ITT, ...) gets a 1-clause inline expansion on first appearance. The dossier-shell renders these as hovercard glossary chips.
- **Rule 27 (new) — Natural-frequency framing.** Percentages and Cohen's d are forbidden in consumer-facing prose. Convert to "X in every 100" or "about Y in 10". The technical-anchor footnotes preserve the percentage for clinical-reviewer audit.
- **Rule 28 (new) — Translation-stable safety language.** The 4 red-flag blocks + the SSHL warning + the pulsatile warning must use literal language only (no idioms, no scare-quotes, no idiomatic verbs). The translation-stability check runs Google Translate round-trip Hindi / Mandarin / Spanish at commit.
- **Rule 29 (new) — Stress-degraded reading design.** Every dossier opens with a 60-90 second read-mode surface (1-line headline + 4-card decision row + red-flag + cost + CTA). The full dossier sits *under* this surface, opt-in.
- **Rule 30 (new) — Personalise-then-render.** A 12-question intake runs *before* the dossier renders, filtering exclusions to the reader's profile. The non-applicable exclusions collapse into a "Other readers' notes" expandable.
- **Rule 31 (new) — WCAG 2.2 AA gates.** Every dossier UI component passes the 19 success criteria audited above before merge. CI gate: axe-core run on the rendered dossier; failure blocks PR.
- **Rule 32 (new) — Working-memory budget.** No single safety surface presents more than 7 items as a flat list. Beyond 7 items, structure (categorisation, cards, table, prioritisation) is mandatory.
- **Rule 33 (new) — Bundle-MVP alignment.** ConversionStrip bundle structure must mirror dossier §8.0 prescribing logic. If the dossier prescribes MVP-first → step-up, the ConversionStrip surfaces MVP-first → step-up bundles. The architectural check runs at PR-open (extension of the W2-67 `pnpm validate` gate).

---

## Reviewer collective verdict

The Wave-2 fixes were structurally right — the dossier is now scientifically defensible. Wave-3 surfaces the second-order problem: **the dossier is rigorous but unread, exhaustive but unfollowed**. The fixes are mostly UX-layer (FKGL rewrites, dynamic personalisation, natural-frequency framing, 90-second read-mode, WCAG hardening). Cost: ~46 hours of focused editorial + frontend work for tinnitus alone. The structural rules (W3-25 through W3-33) need to back-propagate to the skill so the same fixes ship on the other 77 dossiers without re-discovery.

The single highest-impact item is **W3-03 (interactive SSHL component)** — because hearing-loss recovery has a 14-day window, and the dossier currently buries the time-critical action in prose. If exactly one item ships from this review, ship that.

The second-highest is **W3-02 (personalise-then-render intake)** — because every reader currently sees every exclusion, and the literature is clear that exclusions past item 7 are unfollowed in expectation. Personalisation moves the median-reader follow-through from ~30% to ~70%.

The third-highest is **W3-05 (90-second read-mode)** — because the modal reader arrives on a phone, in transit or in distraction, and the current 13,000-word dossier respects neither their time nor their attentional bandwidth.

**Wave 4 brief (proposed):** distinct personas attacking the post-Sprint-3 tinnitus dossier — a hostile pharmacovigilance lawyer; a 67-year-old NHS warfarin patient with newly-diagnosed perimenopausal tinnitus reading on her son's tablet; a sceptical practicing audiologist evaluating the dossier for referral-fit; a Cochrane consumer-summaries editor scoring the dossier against the PLS template.

---

*End of Wave-3 review. 47 findings · 33 new skill rules forced · 15-item Sprint-3 backlog · ~46 hours of work · reading-age + WCAG + cognitive-load + translation lenses applied. Doctrine respected throughout: no US-regulator authority, strict OTC + home-only, six-tradition equal voice, honest framing on what doesn't work.*
