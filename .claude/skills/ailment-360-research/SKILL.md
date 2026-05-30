---
name: "Ailment 360 Research"
description: "Produce an evidence-graded, global-sources-only, STRICTLY OTC + HOME-BASED natural-medicine dossier for a single ailment, following the NicheCore vitiligo/diabetes recipe with full cross-plan coordination. The protocol contains NO prescription drugs, NO clinic-based treatments, and NO hospital-visit requirements — every supplement, device, food, and practice is self-administrable. Use when researching the 360-degree holistic protocol for any consumer health need — covers OTC phytochemicals, Ayurveda, TCM, Unani, Siddha, Tibetan, homeopathy, home biophysical interventions (red-light PBM, home PEMF, infrared sauna, cold immersion), 7-day meal plan with gram quantities, occupational/environmental trigger elimination, cofactor micronutrient floor, weekly exercise periodization, yoga/pranayama mapped to mechanism nodes, supplier ecosystem with prices, drug↔supplement↔food↔exercise↔sleep interaction matrix (drug column is for users ALREADY on prescriptions, never as a recommendation), master 24-hour timetable, self-administered clinical scoring instrument, direct-to-consumer comorbidity screening, and 12-month self-tracked implementation timeline. STRICTLY EXCLUDES US regulatory/professional sources (FDA, FTC, US disease associations, US hospital systems); ONLY honours WHO TCIM, India AYUSH/CCRAS/CCRH/PCIMH/ICMR, EMA HMPC, Australia TGA/NHMRC, China NMPA + Chinese Pharmacopoeia, Health Canada NHP, Men-Tsee-Khang, Hamdard/Dawakhana Tibbiya, IMPCOPS, and classical Ayurveda/TCM/Unani/Siddha/Tibetan/Homeopathy texts."
---

# Ailment 360 Research

> **Version: v6.2.1** — adds seven load-bearing rules on top of v6.1: progressive disclosure (`#### Open the science` deep-dive blocks), tree-friendly H3 sub-sections (≤5 words, 3–7 per H2), mandatory honest evidence-tier comparison table, Cochrane/systematic-review honesty discipline, mandatory Emerging & adjunctive therapies H2 (with the narrow regulatory-context exception), mandatory adjunctive therapy coverage (CBT/CBT-i, MBCT/MBSR, TRT/ERP/vestibular rehab, biofeedback, sound/light/vagal), and word ceiling raised from 14,000 to 18,000. v6.1's plain-English TL;DR-everywhere contract is preserved unchanged. **v6.2.1 hardens two recurring failures:** (a) **EVERY table — without exception — must carry a TL;DR (plain English) column as the last text column.** No table ships without it. (b) **"Overview" is a forbidden H3 title** — when multiple chunks under the same tab each name an H3 "Overview" the left-rail tree fills with confusing duplicate rows; every H3 must be a real, specific, action-oriented title.

## What this skill produces

A **single markdown dossier (2,500–5,500 words for narrow ailments; up to 18,000 words for high-complexity multi-system ailments — see v6.2 ceiling rule below)** for one ailment, structured around the mandatory sections below. Output goes to `research/{ailment-id}.md`. Every supplement, formula, food, exercise, and intervention carries an evidence grade (A–X) and a **timing tag** that fits the master 24-hour day plan. **No plan stands alone — supplement timing, meal composition, exercise window, breathwork, and sleep must be cross-validated against the interaction matrix.**

---

## v6.2 NEW LOAD-BEARING RULES — READ THESE FIRST

The seven rules below are the FIRST things any future agent must read. They sit on top of (not in place of) the v6.1 TL;DR contract and the v6.0 OTC + home-based + global-sources doctrine. All v6.1 content is preserved unchanged as a strict superset.

### Rule 1 — PROGRESSIVE DISCLOSURE (load-bearing)

**Every section AND every sub-section opens with the plain-English summary. The technical mechanism / citation-dense material follows in a deep-dive block that the website renders as a collapsible.**

**Markdown convention** (the website parser keys on either form):

- **Preferred**: a markdown H4 heading `#### Open the science` marks the start of the deep-dive. Everything from that H4 until the next H2 or H3 (or end of file) is the collapsible body.
- **Alternative**: a fenced `:::deepdive` ... `:::` block also works for inline deep-dives mid-section.

This serves two audiences at once: the non-technical user gets the gem immediately; the professor-curious user clicks "Open the science" and gets the full mechanism + citations + references rabbit hole.

**Worked example:**

❌ **Wrong** (mechanism first, lay-reader bounces):
```markdown
### Ginkgo biloba EGb 761

Ginkgo biloba EGb 761 is a standardised extract containing 24% flavone glycosides and 6% terpene lactones (ginkgolides A, B, C and bilobalide). It modulates cochlear microcirculation via PAF-receptor antagonism and exerts NMDA-receptor modulation in the central auditory pathway. The EMA HMPC monograph (2015) recognises it for cerebral insufficiency...
```

✅ **Right** (plain-English first, deep-dive collapsible after):
```markdown
### Ginkgo biloba EGb 761

> **TL;DR.** Standardised Ginkgo (Tebonin brand): may make ringing softer for about 1 in 3 users; daily for 12 weeks before deciding. *(EMA HMPC monograph 2015; Procháska 2009, n=180)*

**What you actually do.** 120 mg twice a day with food for 12 weeks. If no shift in ringing volume or distress by week 12, stop and don't restart.

#### Open the science

Ginkgo biloba EGb 761 is a standardised extract containing 24% flavone glycosides and 6% terpene lactones (ginkgolides A, B, C and bilobalide). It modulates cochlear microcirculation via PAF-receptor antagonism and exerts NMDA-receptor modulation in the central auditory pathway. The EMA HMPC monograph (2015) recognises it for cerebral insufficiency. Note: a 2012 Cochrane review (Hilton et al.) found insufficient evidence for ginkgo as a primary tinnitus monotherapy — see Rule 4 below for how to frame this honestly.

References: [EMA HMPC monograph 2015](...) · [Procháska et al. 2009, n=180](...) · [Hilton Cochrane 2012](...)
```

### Rule 2 — TREE-FRIENDLY H3 SUB-SECTIONS

**Every H2 must have 3–7 H3 sub-sections.** H3 names must be:

- **≤5 words** (scannable in a left-rail tree)
- **Action-oriented when possible** ("What to take tonight", "When to call your doctor")
- **Specific, not generic** (NOT "Overview" / "Details" / "More info" / "Background")

**"Overview" is the single most common and most damaging failure** — when a tab in the website aggregates multiple H2 chunks and each chunk has an "Overview" H3, the left-rail tree fills with several rows all labelled "Overview", which is worse than no tree at all. Banned outright. If the section needs a framing intro, write the H3 as something specific: `### What this section gives you`, `### Why this matters tonight`, `### How to read this page`.

The website renders these as expandable tree nodes in the left-rail nav, so the H3 IS the user's wayfinding.

❌→✅ **H3 naming examples:**

| ❌ Don't write | ✅ Write instead |
|---|---|
| Overview | What this section does |
| Details | Doses & timing |
| More information | When it fails |
| Background | Why ringing happens |
| Introduction to herbs | Six herbs that work |
| Discussion of evidence | What the trials show |
| Mechanism | How it quiets the nerve |
| Additional considerations | Side effects to watch |
| Safety information | When to stop |
| References and sources | Where this came from |

If a section genuinely only has 1–2 things to say, split it into 3+ specific H3s anyway (e.g., "What to take", "When to take it", "When to stop") rather than collapsing into a wall of prose under one heading.

### Rule 3 — HONEST EVIDENCE-TIER COMPARISON TABLE (mandatory)

**Every dossier must end (immediately before the References section) with a candid evidence-tier comparison table.** This is the load-bearing trust mechanism: NicheCore tells the truth about what works AND what doesn't.

Columns (in this order):

| Approach | Evidence tier | Plain-words verdict (≤25 words) | Where it fits in YOUR protocol |
|---|---|---|---|

- **Evidence tier** uses the dossier's standard grading: A / B / C / D / T / H / X.
- **Plain-words verdict** is brutally honest: "Cochrane null for primary tinnitus; one RCT (Procháska) showed benefit but with caveats. Try 12 weeks, stop if no shift." Not marketing.
- **Where it fits** is the protocol-call: "Tier-2 layer, not cornerstone" / "Cornerstone — daily" / "Documented for transparency; not in our protocol" / "Optional adjunct if other layers plateau".

The table includes **everything the dossier covers** — including approaches we DO NOT recommend (homeopathy, low-evidence herbs, popular-but-weak interventions) — listed for transparency with the honest tier label. Hiding the weak ones is dishonest; the user has already seen them in mainstream coverage and needs to know where NicheCore stands.

**Example row (tinnitus dossier):**

| Approach | Tier | Plain-words verdict | Where it fits |
|---|---|---|---|
| Ginkgo EGb 761 | B | EMA monograph supports it; Cochrane 2012 found null for primary tinnitus; one RCT shows benefit. About 1 in 3 may respond. | One layer of 6 — 12-week try, stop if no shift |
| Homeopathy (Calcarea, Chininum Sulph) | T/H | Documented tradition (Boericke, Kent). No robust modern evidence. Included for completeness per founder mandate. | Not in our active protocol; documented for transparency |
| Bimodal neuromodulation (Lenire) | A | TENT-A2 trial (n=191) showed 91% of moderate responders sustained benefit at 12 months. FDA De Novo grant 2023 (regulatory context, not evidence anchor). | Clinic-route option in §10 if home protocol plateaus |

### Rule 4 — COCHRANE / SYSTEMATIC-REVIEW HONESTY DISCIPLINE

**When a Cochrane review or major non-US meta-analysis finds NULL or insufficient evidence for an approach we are tempted to recommend, that approach MUST be honestly downgraded — even if it is the "obvious" cornerstone of the protocol or the brand-name product is widely sold.**

The TL;DR leads with the honest caveat. The individual-trial wins come second. The protocol keeps the herb as ONE layer (not the cornerstone) with an explicit "try this long, stop if no shift" frame.

**Canonical example (encode this exact pattern):** Ginkgo EGb 761 has an EMA HMPC monograph for cerebral insufficiency AND a 2012 Cochrane review (Hilton et al.) that found insufficient evidence for primary tinnitus. The dossier MUST:

1. Lead the TL;DR with the Cochrane caveat in plain words.
2. Present the individual-trial wins (Procháska 2009 etc.) as the secondary evidence.
3. Keep Ginkgo in the protocol as ONE layer (not the cornerstone).
4. Frame as "8–12 week try, stop if no shift" — not "take indefinitely".

❌→✅ **Language examples:**

| ❌ Don't write | ✅ Write instead |
|---|---|
| "Ginkgo EGb 761 is clinically proven for tinnitus (EMA HMPC monograph 2015)." | "Ginkgo (Tebonin) has an EMA monograph for cerebral circulation, but the 2012 Cochrane review found no clear benefit for tinnitus itself. One good trial (Procháska 2009) did show a softening for about 1 in 3 users — so we keep it as one layer of six, not the cornerstone. Try 12 weeks; stop if nothing shifts." |
| "Cornerstone supplement: Ginkgo 120 mg BID indefinitely." | "Adjunct (one of six layers): Ginkgo 120 mg twice a day for a 12-week trial. Stop if no shift in volume or distress by week 12 — don't keep taking it on hope." |
| "Acupuncture is recommended (TCM tradition + studies show benefit)." | "Acupuncture: 2014 Cochrane review found low-quality evidence and no firm conclusion. Tradition is strong (Huang Di Nei Jing); modern trials are mixed. Try 6–10 sessions; stop if no shift." |

The discipline applies symmetrically — when a Cochrane or major meta-analysis is POSITIVE, surface that as the trust anchor; when it's NULL, surface that as the honest caveat. Never cherry-pick.

### Rule 5 — EMERGING-THERAPIES H2 (required)

**Every dossier must include a section covering emerging / device-class / advanced therapies that exist for the condition.** This is where NicheCore acknowledges what's beyond the home protocol without abandoning sovereignty.

**Examples by condition family** (illustrative — agent must research the actual landscape for the specific ailment):

- **Tinnitus** → bimodal neuromodulation (Lenire / Neuromod), non-invasive vagus nerve stimulation (Nurosym, transcutaneous auricular VNS, De Ridder protocols), hearing-aid masking, CR neuromodulation.
- **Diabetes (T2D)** → continuous glucose monitors (CGM — Dexcom, Libre, Stelo), GLP-1 receptor agonists (semaglutide, tirzepatide), bariatric surgery, automated insulin delivery.
- **Mental health (depression, OCD, PTSD)** → ketamine / esketamine clinics, transcranial magnetic stimulation (TMS), transcranial direct current stimulation (tDCS), psychedelic-assisted therapy (in legal jurisdictions).
- **Migraine** → CGRP monoclonals (erenumab, fremanezumab), gepants, neuromodulation devices (Cefaly, gammaCore, Nerivio).
- **Psoriasis / eczema** → biologics (IL-17, IL-23, IL-4/13 inhibitors), JAK inhibitors.
- **Cardiac** → SGLT-2 inhibitors for HF, leadless pacemakers, wearable ECG (Apple Watch / KardiaMobile).
- **Sleep apnea** → hypoglossal nerve stimulation (Inspire), positional therapy devices.

**DOCTRINE-COMPLIANT FRAMING (load-bearing):**

- **Pure OTC + home-usable device options** (e.g., consumer Nurosym, Cefaly home use, home CGM, Apple Watch ECG, home red-light, home PEMF) go in the **main protocol** with appropriate caveats.
- **Clinic-prescribed / prescription / surgical / clinic-administered options** (Lenire bimodal, ketamine clinics, TMS sessions, biologics, bariatric, Inspire implant, esketamine) go in a **§10-style "If the home protocol plateaus — clinic-route options" addendum**. NEVER in the home regime. Never recommended; presented as honestly-described options the user may pursue on their own initiative if the home protocol plateaus.
- **Cite the actual clinical trials directly** (TENT-A2 for Lenire; De Ridder pilots for non-invasive VNS in tinnitus; SUSTAIN / STEP for semaglutide; STAR-D for ketamine; etc.) NOT US regulatory clearance as the trust anchor.

**The ONE narrow exception to the no-US-regulatory-bodies doctrine:** "FDA De Novo grant", "FDA breakthrough designation", "CE mark", or "Health Canada licence" can be mentioned **as factual REGULATORY-PATH CONTEXT** — not as evidence anchor — because regulatory history is verifiable fact and is often the clearest way to explain when a device became consumer-purchasable. The trust anchor remains the clinical trial. Frame as "(FDA De Novo 2023 — regulatory-path context, not evidence anchor)" inline, so the reader sees the framing explicitly.

Update the §14 closing paradigm and the source-policy section to reflect this narrow exception: US regulatory bodies are still NEVER cited as authority on whether something works; they MAY be cited as factual context on when a device crossed the regulatory threshold.

### Rule 6 — ADJUNCTIVE THERAPY COVERAGE (mandatory)

**Every dossier covers the relevant adjunctive / behavioural therapy family at depth — NOT just supplements + diet + lifestyle.** These are some of the highest-evidence non-pharmacological interventions we have. Hiding them in favour of herbs is dishonest.

For each condition, include the appropriate therapies from this template (only those clinically relevant to the ailment):

| Therapy family | Best fit for | Typical evidence tier |
|---|---|---|
| **CBT / CBT-i** (cognitive behavioural therapy / for insomnia) | Distress, insomnia, chronic pain, anxiety, depression, IBS, tinnitus distress, menopause hot flashes | A (often the strongest non-pharm evidence available) |
| **MBCT / MBSR** (mindfulness-based cognitive therapy / stress reduction) | Recurrent depression relapse prevention, chronic pain, tinnitus distress, anxiety, hot flashes | A–B |
| **Condition-specific habituation / retraining therapies** — TRT (tinnitus retraining therapy) · ERP (exposure & response prevention for OCD) · graded exposure (phobias, PTSD) · vestibular rehab (BPPV, vestibular hypofunction) · pelvic floor PT (incontinence, pelvic pain) | Each maps to its specific condition | A–B for the ones with strong trial bases (CBT-i, ERP, vestibular rehab) |
| **Biofeedback / HRV training** | Stress, hypertension, migraine, IBS, tinnitus, anxiety, dysautonomia | B |
| **Masking / sensory enrichment** | Tinnitus, sensory processing, chronic pain | B–C |
| **Sound therapies** (notched music, fractal tones, white/pink/brown noise) | Tinnitus, sleep, focus | C–B |
| **Light therapies** (bright-light box for SAD, dawn simulators, red-light for skin/circadian) | Seasonal depression, circadian disruption, skin | A for SAD bright-light; B for circadian dawn sim; B for PBM in skin |
| **Vagal / breath therapies** (slow paced breathing 5–6 bpm, coherent breathing, Buteyko, Wim Hof for cold tolerance only) | Anxiety, hypertension, dysautonomia, IBS, asthma | B |

These get **honest evidence grades** (often A or B — frequently higher than the herbs we cover) and are framed as **the patient's own work** (no clinic dependency for self-guided CBT workbooks, app-based CBT-i like Sleepio / Somryst, app-based MBSR, home biofeedback hardware like HeartMath / Lief / Polar HRV, etc.).

For therapies that require a trained therapist (TRT, ERP, vestibular rehab), document them with the honest framing: "Self-guided versions exist (workbooks, apps) but the protocol acknowledges a credentialed therapist gets better outcomes for many. The user decides; the protocol does not require it."

### Rule 7 — WORD CEILING RAISED TO 18,000

**Updated from 14,000 to 18,000.**

The progressive-disclosure pattern (Rule 1), the tree-friendly H3 audit (Rule 2), the comparison table (Rule 3), the Cochrane-honesty layering (Rule 4), the Emerging Therapies H2 (Rule 5), and the Adjunctive Therapies coverage (Rule 6) collectively add ~3,000–4,000 words to a complex dossier. Quality and honesty over brevity.

**3/3 internal ralph passes still required** — no shortcuts. The longer dossier means each pass is harder; budget the time accordingly.

New tiered ceiling table:

| Complexity | Word ceiling |
|---|---|
| Narrow ailment (single mechanism, few interactions) | 2,500–5,500 |
| Moderately complex | 4,500–8,500 |
| High-complexity multi-system (≥5 prescription drug classes in §10.1; multiple comorbidities; rich emerging-therapy landscape) | up to 18,000 |

---

## Foundational rule — TL;DR EVERYWHERE (load-bearing, v6.1)

**Every entry must be readable by a non-technical user in under 15 seconds.** Add a TL;DR line/column to every list item, table row, claim, formula, ingredient, food, anchor, combo, day-plan slot, interaction, scoring instrument, timeline milestone, supplier, expert, FAQ, and references row.

### Plain-English rules for the TL;DR (v6.1 — the founder's "easy to understand" mandate)

**Write at a 9th-grade reading level.** The TL;DR is for a parent reading this on their phone in the supermarket, not for a clinician.

| ❌ Too technical (do NOT write) | ✅ Plain-English equivalent (write this) |
|---|---|
| "Ginkgo EGb 761 modulates cochlear microcirculation and NMDA glutamatergic neurotransmission" | "Standardised Ginkgo (Tebonin brand) may make tinnitus ringing softer for about 1 in 3 people. Take it daily for 12 weeks before you decide if it helped." |
| "Magnesium glycinate prevents NMDA-mediated excitotoxicity" | "Magnesium (the easy-on-the-stomach 'glycinate' form) calms the nerves that make your ears ring after loud noise." |
| "Polydatin upregulates Nrf2 and inhibits GPX4-dependent ferroptosis in melanocytes" | "Polydatin (from Japanese knotweed) protects skin pigment cells from rusting — the same kind of damage that drives vitiligo." |
| "Triphala is a tridoshic rasayana with mild laxative action" | "Triphala is an Indian three-fruit powder, taken at night. It gently keeps the gut moving and is safe long-term." |
| "Bhramari pranayama increases nitric oxide and vagal tone" | "Bhramari is a humming-bee breath, 5 minutes a day. The humming calms the same nerve that handles your heart rate and ear noise." |

**Hard rules:**
1. **No jargon** — Latin names go in brackets after a plain name (e.g. "Indian gooseberry (Amla)" not "Phyllanthus emblica"). If you must use a technical word, define it in the same sentence ("vagus nerve — the calming nerve from your brain to your gut").
2. **Lead with what it does for YOU**, not the mechanism. "Quiets ringing" before "modulates cochlear blood flow".
3. **Use everyday units** — "1 capsule twice a day with food" beats "200 mg PO BID with meals". Keep precise dose in the technical body below.
4. **No acronyms** in the TL;DR unless they are household (no NMDA, NRF2, GPX4, AMPK, HPA, SCFA, CYP3A4, BAMS, TFI, THI — spell out or describe).
5. **One idea per TL;DR.** If two mechanisms apply, pick the one a patient cares about most.
6. **End every TL;DR with a real citation in italics**: `*(EMA HMPC monograph 2015)*` / `*(Procháska 2009, n=180)*` / `*(Charaka Samhita, Ch. 28)*`.
7. **No more than 25 words.** Count them.

### Format conventions (apply to every section)

- **List items** start with `**TL;DR.**` then one plain-English sentence (≤25 words), THEN the technical body. Example:
  > **TL;DR.** Standardised Ginkgo (Tebonin brand): may make ringing softer for 1 in 3 users; daily for 12 weeks before deciding. *(EMA HMPC monograph 2015; Procháska 2009, n=180)*
  > Technical body: Ginkgo biloba EGb 761 is the only ginkgo extract with positive randomised trial data for tinnitus...

- **Tables** must include a `TL;DR (plain English)` column AS THE LAST text column (before the citation column). Every row carries it populated, max 25 words, lay-reader register. **NO EXCEPTIONS — every table in the dossier, including the references table, the supplier table, the comorbidity table, the master 24-hour table, the interaction matrix, every nutrient/dose table, and the honest evidence-tier comparison table (Rule 3) — gets a TL;DR column.** If a table seems "too technical" to have a TL;DR column, that is a sign the table itself is failing the lay reader; add the column and write the TL;DR. Self-check #11 below enforces this — a dossier with even one table missing the TL;DR column fails Pass 2.

- **Per-section TL;DR card**: every section opens with a single italic 2-sentence overview:
  ```markdown
  > **TL;DR.** First sentence — what this section does for the patient (≤20 words). Second sentence — when it matters / who it's for (≤20 words). *(source anchor)*
  ```

- **No claim appears more than 4 lines away from its citation.** Citations are surfaced inline, not pushed to a references footer.

This rule is the load-bearing accessibility lift between "long Medium article" and "navigable, trustworthy resource a non-clinician trusts at 7 PM after a long day". Without it the dossier reads as a research dump and the founder's "easy to understand" bar is failed.

## Foundational rule — STRICTLY OTC + HOME-BASED (load-bearing)

**The protocol contains NO prescription medication, NO prescription treatment, and NO hospital-visit requirement. Period.**

- Every supplement is over-the-counter (or sold direct-to-consumer through AYUSH-GMP, NMPA, EMA HMPC, TGA, or Health Canada NHP channels) and self-orderable from Amazon Prime / iHerb / Patel Brothers / Apna Bazaar / Chinatown TCM pharmacies / Hamdard / IMPCOPS / Men-Tsee-Khang / SBL / Schwabe / Boiron.
- Every biophysical device is consumer-purchasable and self-administrable at home (red-light PBM, home PEMF, home infrared sauna, home cold tub, hand-held devices). **NO clinic phototherapy cabin, NO 308 nm excimer laser, NO PUVA, NO hospital infusion, NO surgical procedure.**
- Every test is self-administered (rating scales, photos, home glucose meter, home BP cuff) OR ordered through direct-to-consumer labs (LetsGetChecked, Everlywell, Thriva UK, Cerascreen EU, True Test IN, Lab Me, Walk-In Lab) — **never "see your doctor for labs"** as the framing.
- The drug-interaction matrix in §10.1 documents conflicts for users **already on prescription therapy** who may be considering a taper at their own pace — it does **NOT** recommend any prescription drug. The dossier itself prescribes none.
- The patient is sovereign over their body. The protocol is independent. If the user chooses to keep a physician in the loop, that's their personal call — the protocol does not require it.

**Forbidden framings** (never write):
- "see your doctor for ..."
- "prescribed by a physician"
- "Rx-only"
- "clinic-based phototherapy"
- "hospital admission required"
- "physician supervision required" (re-frame as "if you are already under physician care, coordinate with them on your own initiative")
- "first-line therapy is [prescription drug]" (re-frame as "conventional first-line conventionally prescribed for this condition is X — interactions documented in §10.1 for those already on it")

## Source policy (load-bearing — never deviate)

**ALLOWED** (rank-ordered):
1. **Tier 1 — RCTs / meta-analyses** from non-US-pharma sources (Cochrane, BMC, peer-reviewed work led by Asian / European / Australian / Canadian institutions).
2. **Tier 2 — Global regulatory & monograph authorities (non-US)**: WHO TCIM Strategy 2025–2034 · India Ministry of AYUSH · CCRAS (Ayurveda) · CCRH (Homoeopathy under AYUSH) · CCRYN (Yoga & Naturopathy under AYUSH) · CCRUM (Unani) · CCRS (Siddha) · PCIMH · ICMR · EMA HMPC herbal monographs · Australia TGA + NHMRC · China NMPA + Chinese Pharmacopoeia · Health Canada NHP · Japan Kampo Pharmacopoeia · Korea KFDA monographs · NSF (quality only).
3. **Tier 3 — Classical texts**: *Charaka Samhita*, *Sushruta Samhita*, *Ashtanga Hridaya*, *Bhavaprakasha*, *Madhava Nidanam*, *Sahasrayoga* (Ayurveda) · *Huang Di Nei Jing*, *Shen Nong Ben Cao Jing*, *Shang Han Lun*, *Tai Ping Hui Min He Ji Ju Fang*, *Yi Zong Jin Jian* (TCM) · *Canon of Medicine* by Avicenna, *Qarabadeen Qadri*, *Tibb-e-Nabawi* (Unani) · *Siddha Maruthuvam*, *Bogar 7000* (Siddha) · *rGyud-bzhi*, Men-Tsee-Khang formularies (Tibetan Sowa Rigpa) · *Organon of the Medical Art* by Hahnemann + Boericke's *Materia Medica* + Allen's *Keynotes* + Kent's *Repertory* (Homeopathy — graded T or H only).
4. **Tier 4 — Independent research, university consortia, independent labs** (with conflicts disclosed).

**EXCLUDED — never cited as authority** (override even if found in search results):
- FDA, FTC, CDC, NIH official policy positions
- ADA, AHA, AAD, ACOG, APA, NAMS, ACR, ACS, AMA, AAFP, AAP — every US disease association / US professional medical body
- US hospital systems, US insurance-aligned medical policy bodies
- US pharma-funded advocacy/professional orgs

US-origin **individual peer-reviewed papers** are allowed only with explicit conflict-of-interest review and only as **evidence objects**, never as institutional authority.

**The ONE narrow exception (v6.2 — see Rule 5 above):** US regulatory milestones — "FDA De Novo grant", "FDA breakthrough designation" — and their non-US peers ("CE mark", "Health Canada licence", "TGA listing") MAY be mentioned as **factual REGULATORY-PATH CONTEXT** when discussing emerging device/biologic therapies in §5.5 (Emerging & adjunctive therapies). They are NEVER the evidence anchor. The trust anchor remains the named clinical trial (e.g., TENT-A2 for Lenire, not "FDA-cleared"). Frame inline as "(FDA De Novo 2023 — regulatory-path context, not evidence anchor)" so the reader sees the framing.

---

## Output structure — 16 mandatory sections (v6.2)

Each dossier opens with YAML front matter and writes the sections in exactly the order below.

**v6.2 structural requirements (apply to every H2):**
- Every H2 has **3–7 H3 sub-sections** with **≤5-word, action-oriented, specific names** (Rule 2).
- Every section AND every sub-section **opens with the plain-English TL;DR card / summary** (v6.1 + Rule 1), then the lay-language body, then a `#### Open the science` deep-dive block holding the mechanism + citations + references (Rule 1).
- The dossier ends with §5.5-style **Emerging & adjunctive therapies** (new H2 — see Rule 5 + Rule 6) immediately before §11 scoring, AND with a **mandatory honest evidence-tier comparison table** (Rule 3) immediately before §14 / References.

### YAML front matter

```yaml
---
ailmentId: <atlas-id, e.g. "acne-prone-skin">
ailmentName: <display name>
domain: <Skin | Hair | Metabolic | Gut | StressSleep | BrainEye | MobilityEnergy | HormoneVitality | ImmuneOral | CardioLiverLongevity>
lastUpdated: <YYYY-MM-DD>
gradeMix: [A|B|C|D|T|H]            # grades that appear in this dossier
clinicalScoringInstrument: <e.g. "VASI", "PASI", "SCORAD", "HAM-D", "IPSS", "HbA1c+FPG", "Migraine Disability Assessment">
subTypes: [<list>]                  # e.g. ["segmental","non-segmental","acral"]
comorbidityScreen: [<list>]         # e.g. ["autoimmune thyroid","T2D","alopecia areata"]
authorAgent: <agent name>
---
```

### 1. Executive Summary
One paragraph reframing the ailment from mainstream silo to integrative-mechanism view. State the 2–4 root drivers. End with a one-sentence "**Synthesis:**" closer.

### 2. Mechanistic Triad / Network
2–4 root mechanisms. Each:
- Scientific explanation (3–5 sentences)
- Key molecular actors (proteins, receptors, transcription factors, cell types)
- Clinical presentation
- Which interventions in this dossier target it
- End with "**Synthesis:**" closer (1 sentence)

Mechanism families to consider: oxidative stress / Nrf2-GPX4 / ferroptosis · gut permeability / zonulin / LPS endotoxemia · microbiome dysbiosis / SCFA depletion · HPA-axis dysregulation · mitochondrial dysfunction · chronic neuroinflammation · molecular mimicry / autoimmunity · fibrosis / TGF-β / collagen dysregulation · insulin resistance / AMPK / mTOR · cellular senescence / SASP · vagal tone / autonomic imbalance · neurotransmitter depletion / monoamine oxidation · sex-hormone signalling · iron dysregulation.

### 2.5 Clinical sub-types & differential prognosis
2–4 sub-types of the ailment (e.g., for vitiligo: segmental / non-segmental / acral / mucosal). For each: clinical features, which mechanism in §2 dominates, expected protocol response (best / moderate / poor / requires specialist referral).

### 3. OTC Phytochemicals — Pharmacological Validation

A markdown table of **4–10 botanicals / nutrients**. Mandatory columns (TL;DR is required):

| Compound | TL;DR (lay-reader, ≤20 words) | Mechanism | Dose | Timing | Take WITH | Avoid WITH (≥2h gap) | Grade | Brand options | Price/mo | Citation |
|---|---|---|---|---|---|---|---|---|---|---|

The **TL;DR** column says, in plain language, *what this does for the patient and why it's on the list* — not the mechanism. Example: "Quiets ringing in 1 in 3 users; the only Ginkgo extract with monograph backing." The **Citation** column must contain a real source anchor (EMA HMPC, AYUSH, named RCT with n=N, classical chapter).

- **Take WITH** — co-administration that aids bioavailability (e.g., curcumin + piperine + fat; vitamin D + dietary fat; iron + vitamin C; turmeric + black pepper + ghee).
- **Avoid WITH** — antagonists / chelators that must be separated by at least 2h (e.g., iron + calcium; iron + tea/coffee tannins; thyroid med + calcium/iron; zinc + iron; calcium + magnesium taken at the same dose).
- **Brand options** — prefer Asian/European/Australian-sourced brands: Organic India, Himalaya, Baidyanath, Patanjali, Banyan Botanicals, Nootropics Depot, NOW Foods, Double Wood, Pure Encapsulations, Thorne, Solgar (EU), iHerb private label. AYUSH-GMP certified where possible.
- **Evidence note** — cite strongest supporting study or monograph (e.g., "EMA HMPC monograph 2024", "RCT n=120, BMC Complement Med 2023", "Charaka Samhita Ch. 28").

### 4. Traditional Medicine Integration

Each sub-section must include **at least 2 formulations** if the tradition documents the ailment; **1 line acknowledging silence** otherwise. Where applicable, **name the originator / lineage** (e.g., Dr. Khadar Vali for Siri Dhanyalu millet revival, Dr. Hiroshi Mori for certain Kampo, named Bengali Ayurvedic lineages, Plum Flower formulators for TCM granules).

**4.1 Ayurveda** — dosha framing (vata / pitta / kapha imbalance), rasayanas, classical formulas with Sanskrit names. Cite Charaka / Sushruta / Bhavaprakasha chapter. Sourcing: Organic India, Himalaya, Baidyanath, Patanjali (AYUSH-GMP).

**4.2 TCM** — pattern differentiation (zang-fu, six stages, four levels, qi-blood-yin-yang), classical formulas (pinyin + characters where helpful, e.g., 玉泉丸 Yu Quan Wan, 消渴方 Xiao Ke Fang, 六味地黄丸 Liu Wei Di Huang Wan), herb composition, mechanism per Chinese Pharmacopoeia. Sourcing: Plum Flower, Min Tong, Mayway, Treasure of the East, Chinatown TCM pharmacies (San Jose / SF / NYC / Toronto).

**4.3 Unani** — Mizaj (temperament: damawi / safrawi / balghami / saudawi) framing, Khamiras / Majoons / Itrifals / Sharbats / Arq, classical Hakim formulations. Sourcing: Hamdard, Dawakhana Tibbiya College Aligarh, Ajmal, Saif Pharmaceuticals.

**4.4 Siddha** — Tamil tradition specific to South India; **only chooranam (herbal powders), kuzhambu (decoctions), legiyam (semi-solid herbal preparations)** are eligible for this OTC self-administered protocol. **Classical mercurial/metallic preparations (chenduram, parpam, mezhugu) are EXCLUDED** because they require expert pharmacy preparation and supervised administration. Sourcing: IMPCOPS, SKM Siddha & Ayurveda, Aimil Pharmaceuticals.

**4.5 Tibetan / Sowa Rigpa** — Men-Tsee-Khang Dharamsala formulations and the *rGyud-bzhi* framework. Notable formulas: Agar-35, Padma-28 (also EMA-approved as Padma Lax).

**4.6 Homeopathy** — classical remedies **graded strictly T or H** with this explicit caveat: *"Homeopathy is honoured under the founder's mandate to explore all directions of alternative medicine. Modern evidence is contested; entries are presented as a documented tradition (Tier 3), not as clinical proof."* List 3–6 common remedies for the ailment (e.g., for vitiligo: Arsenicum Sulphuratum Flavum, Hydrocotyle Asiatica, Natrum Muriaticum). Cite Boericke's *Materia Medica*, Allen's *Keynotes*, or Kent's *Repertory*.

### 5. Biophysical Interventions — home-administered only (branch by domain)

This section MUST branch by ailment domain. **All devices must be consumer-purchasable and self-administrable at home. NO clinic-based phototherapy, NO excimer laser, NO PUVA, NO hospital infusion.**

- **Skin domain** (vitiligo, psoriasis, eczema, hyperpigmentation, acne):
  - **Photobiomodulation (660 nm visible red + 810–850 nm NIR)** as primary biophysical — home panels (Mito Red Light MitoMIN/MID/MAX, Joov Original/Solo/Elite, Hooga, Red Light Rising, BlockBlueLight).
  - **Controlled direct sunlight exposure** — skin-type-aware dosing (Fitzpatrick I 5–10 min, II 10–15 min, III 15–20 min, IV 20–25 min, V 30 min, VI 30–40 min). AM and late-PM windows preferred. This is the home substitute for clinic NB-UVB.
  - **Home infrared sauna** (Sunlighten Solo, JNH Lifestyles, Clearlight) — full-body warming + circulation + sweat-driven detox.
  - **Home cold-water immersion / contrast hydrotherapy** (Plunge tub, Edge Tub, ice-bath barrel) — vagal + anti-inflammatory.
  - **Wet-wrap + emollient occlusion** (eczema, psoriasis flare) — cotton layer over emollient, sealed with damp gauze, 1–2 h sessions.
  - **Dead Sea bath salts** (Mg chloride + Br + K) — 250–500 g per bath, 20 min, 2–3 ×/week for psoriasis and eczema (Premier Dead Sea, Westlab, Salt of the Earth).
- **Brain / Eye / Mood** domains: PBM (810 nm transcranial / 670 nm intranasal) — Vielight Neuro Alpha/Gamma, Vielight Vagus, Neuradiant; consumer VNS — Nurosym, Sensate, Pulsetto; HRV biofeedback — HeartMath Inner Balance, Lief, Polar/Whoop/Oura HRV.
- **Metabolic / Cardio** domains: PBM (670 nm abdominal panel), HIIT cardio (home or outdoor), low-pressure home **soft-shell hyperbaric oxygen chambers** (OxyHealth Vitaeris, Summit to Sea) where available consumer-grade.
- **Mobility / Recovery** domains: home PEMF (Bemer mat, Pulse Centers home unit, Healthy Wave), red-light panel, infrared sauna, cold immersion.
- **All ailments**: home infrared sauna + cold-water immersion as systemic adjuncts when appropriate.

For each device: wavelength (nm), irradiance / dose (J/cm² per session), session duration, frequency, brand options (consumer-grade only), price, **timing in the master day plan**, contraindications (photosensitising drugs the user may be on, pregnancy, malignancy, retinal disease, pacemaker for PEMF).

### 6. Dietary Protocol

**6.1 Mandatory foods** — daily gram quantities (e.g., "150–200 g bitter greens", "60–80 g sprouted small millets", "30 g raw nuts").

**6.2 Absolutely avoid** — with molecular reason. Examples:
- Gluten → gliadin → zonulin release → intestinal permeability
- High-fructose corn syrup → de novo lipogenesis → NAFLD
- Industrial seed oils → omega-6/omega-3 imbalance → inflammation
- Refined sugar → insulin spike → glycation
- Alcohol → zinc / B-vit depletion → CYP2E1 activation
- Trans fats, ultraprocessed foods, aspartame

**6.3 Preparation methodology** — sprouting (8–10 h soak + 8–12 h germinate), fermentation (kanji, sauerkraut, kefir, dosa batter), bone broth, ghee tempering, slow-cooking.

**6.4 Seven-day meal plan** with **exact gram quantities** per meal, per day, per timing slot. At least 3 distinct day patterns; days 4–7 can rotate.

**6.5 Environmental & occupational triggers to eliminate** (mandatory new sub-section)
- Topical exposures (cosmetics, soaps, hair dyes) — list specific molecules to avoid
- Occupational chemicals (e.g., para-tertiary butyl phenol for vitiligo, organic solvents for liver, isocyanates for asthma, pesticides for thyroid)
- Indoor air (mould, VOCs, formaldehyde, plastic off-gassing)
- Endocrine disruptors (BPA, phthalates, parabens)
- EMF where applicable (5G, dirty electricity for headache / insomnia / EHS sensitivities)
- Light pollution / blue light at night
- Personal care products to swap for clean alternatives

**6.6 Cofactor / micronutrient floor** (mandatory new sub-section)
A table of micronutrients the ailment's pathology requires as cofactors. Include: copper, zinc, selenium, iodine, magnesium, B6, B9 (methylfolate), B12 (methylcobalamin), vitamin D3+K2, vitamin A (retinol from cod-liver), choline, iron (only if deficient — **measure ferritin via DTC lab first, supplement only if <30 ng/mL**). For each: target intake (mg/μg/day), food sources, supplement form if needed, antagonist nutrients (e.g., zinc:copper ratio 8–15:1). Always state "**measure before supplementing**" for iron, copper, selenium, iodine.

### 7. Lifestyle / Mind-Body Anchors (every entry mapped to a §2 mechanism node)

**7.1 Yoga** — specific asanas with the §2 mechanism node they target.

| Asana | Mechanism node targeted | Duration | Time of day |
|---|---|---|---|

Examples: Sarvangasana → thyroid + skin perfusion (Skin §2 node); Bhujangasana → digestive fire + spinal flexibility (Gut §2 node); Shavasana → HPA / parasympathetic (Stress §2 node); Setu Bandhasana → pelvic circulation (Hormone §2 node).

**7.2 Pranayama** — techniques + duration + mechanism node + time of day:
| Technique | Mechanism node targeted | Duration | Time of day |
|---|---|---|---|
- Anulom Vilom (alternate-nostril, 10 min AM) → HPA / vagal tone
- Bhramari (humming bee, 5 min PM) → vagal nerve / nitric oxide
- Kapalbhati (cleansing, 5 min AM) → diaphragm + sympathetic activation; **CONTRAINDICATED in hypertension, pregnancy, cardiac disease, recent abdominal surgery**
- Nadi Shodhana (channel-purification) → autonomic balance
- Ujjayi (ocean breath) → vagal tone + thermogenesis
- Bhastrika (bellows breath) → energetic; CONTRAINDICATED in HTN
- Sheetali / Sheetkari (cooling) → pitta reduction

**7.3 Meditation** — match tradition to ailment's psycho-emotional load: Vipassana (insight), Yoga Nidra (deep rest / sleep restoration), Transcendental (mantra), mindfulness (MBSR / MBCT), Tibetan Tonglen (compassion), Sufi Zikr (remembrance), Christian centering prayer. Specify daily duration.

**7.4 Sleep hygiene + circadian** — bedtime target, blue-light cutoff (≥90 min before bed), room temperature (18–20°C), AM sunlight within 30 min of waking.

**7.5 Nervous-system reset** — vagal-nerve practices (humming, gargling, cold splash, gentle gag-reflex training, deep-slow-breath 4-7-8).

**7.6 Exercise periodization** — weekly + monthly cadence. Mandatory new sub-section.

Weekly cadence example:
- Mon / Wed / Fri — Zone 2 cardio (45 min) at 60–70% HRmax
- Tue / Thu — strength training (compound lifts), 45 min
- Sat — high-intensity intervals (HIIT, 20 min) OR sport
- Sun — restorative yoga + long walk (60–90 min)

Monthly cadence:
- Week 1 — full intensity + TCM cycling overlay
- Week 2 — moderate + supplement steady-state
- Week 3 — deload (≤70% volume) + extra sleep
- Week 4 — full intensity + TCM cycling overlay
- Optional 16:8 / 14:10 intermittent fasting window if metabolically appropriate (NOT for hypothyroid, NOT for HPA-axis depleted, NOT for underweight, NOT in pregnancy / breastfeeding).

### 8. Daily Unified Combos (≤10 capsules/day total)

**Combo 1 — Morning (post-breakfast)** — 3–5 items. Each item: name + dose + timing rationale (e.g., "needs fat for absorption", "Nrf2 morning surge").
**Combo 2 — Midday (post-lunch)** — 3–5 items.
**Combo 3 — Evening (post-dinner)** — 3–5 items.
**Optional TCM cycling overlay (weeks 1 & 4)** — granule formula, dose, weeks active.

### 8.5 Master 24-Hour Day Plan (mandatory)

A single hour-by-hour timetable that integrates supplements, meals, exercise, breathwork, light exposure, and sleep — and that resolves every co-administration conflict from §10.

| Hour | Action | Why this timing | Conflicts resolved |
|---|---|---|---|

Example skeleton (adapt to ailment):
- **06:00** Wake → 5 min direct sunlight (circadian anchor + cortisol awakening response)
- **06:30** Pranayama 10 min (Anulom Vilom + Bhramari) → vagal tone before any food/supplement
- **07:00** Yoga 20 min — list specific asanas
- **07:30** Breakfast (specific composition + grams). **Pre-meal rule**: tea/coffee polyphenols ≥1 h away from iron-rich foods; thyroid meds (if any) taken 60 min before food + coffee + calcium.
- **08:00** Combo 1 (with food, fat present for fat-soluble; piperine present if curcumin)
- **09:30** Sunlight 10 min OR PBM 15 min (if winter or skin domain)
- **12:30** Lunch (composition + grams)
- **13:00** Combo 2 (with food)
- **13:30** 10-min post-meal walk → blunts post-prandial glucose
- **14:00** Caffeine cut-off (no caffeine after 14:00 to protect sleep)
- **16:00** Exercise window (45 min Zone 2 or strength per §7.6)
- **18:30** Dinner — light, low-carb evening composition
- **19:00** Combo 3 (with food)
- **20:00** Red light PBM 15 min (skin / metabolic / brain — per §5 device)
- **20:30** Restorative yoga or walk 20 min
- **21:30** Blue-light cutoff, screens off
- **22:00** Magnesium glycinate + ashwagandha + L-theanine (if in protocol); Bhramari 5 min
- **22:30** Bedtime
- **02:00–06:00** Sleep — avoid waking eating (insulin spike)

Where the ailment requires specific deviations (e.g., diabetics on insulin take long-acting at fixed time; menopause sleep needs evening progesterone-supporting herbs), the timetable must call them out explicitly.

### 9. Supplier Ecosystem + Monthly Cost

A supplier table:

| Channel | What it sources well | Typical brands | Notes |
|---|---|---|---|

Channels to cover:
- Amazon Prime (US / IN / UK), iHerb, Whole Foods, Sprouts Farmers Market, Vitamin Shoppe
- Patel Brothers, Apna Bazaar, India Cash & Carry (sprouted millets, fresh methi, Indian formulations)
- Chinatown TCM pharmacies (raw herbs, granules, classical formulas)
- AYUSH-GMP-certified direct (Organic India, Himalaya, Patanjali, Baidyanath)
- Hakim shops / Hamdard outlets (Unani)
- Siddha clinics / IMPCOPS (Siddha)
- Tibetan Men-Tsee-Khang branches (Sowa Rigpa)
- CCRH-affiliated homeopathic pharmacies (SBL, Schwabe, B.Jain — India; Boiron — France)
- Device suppliers (Mito Red Light, Joov, Hooga, Daavlin, Bemer, Sunlighten, Vielight)

**Monthly cost — broken down by line:**
- Combo 1: $X–Y
- Combo 2: $X–Y
- Combo 3: $X–Y
- TCM cycling (1 week × 2/month): $X–Y
- Fresh produce uplift (diet §6): $X–Y
- Probiotics / specialty items: $X–Y
- **Total monthly: $X–Y**
- One-time: PBM device ($X), sauna / cold tub / PEMF mat (if applicable)

Include at least **one Indian-grocery address AND one Chinatown TCM pharmacy address** for fresh-food / formulary sourcing — ideally in 2 geographies (Bay Area + NYC as defaults; e.g., "Patel Brothers, 1610 Stoneridge Mall Rd, Pleasanton CA" and "Kamwo Meridian Herbs, 209 Grand St, NYC").

### 10. Interaction Matrix — drug ↔ supplement ↔ food ↔ exercise ↔ sleep

This section is the load-bearing safety + plan-coordination layer. **Every supplement in §3/§4/§8 must have a row somewhere in §10.1–10.4, and the §8.5 timetable must resolve all conflicts.**

**10.1 Drug ↔ Supplement interactions** — *for users ALREADY on conventional therapy who are adding this OTC protocol on their own initiative. The dossier itself prescribes NONE of these drugs.*

| Drug (currently on it) | Supplement in this protocol | Risk | Mitigation (the user decides their own taper pace) |
|---|---|---|---|

For each ailment, name the conventional pharmaceuticals typically prescribed (so users on them know what to watch) and tabulate every relevant herb interaction. Frame strictly as "**if you are already on X, here is the conflict**" — never "**we recommend X**". Drugs the user may currently be on but that this protocol considers replaceable should be tagged "**discouraged in this protocol**" inline (the dossier still documents the interaction, but signals that the protocol's own path doesn't include this drug). Examples:
- For vitiligo: topical tacrolimus, ruxolitinib cream, methoxsalen, oral mini-pulse steroids, methotrexate, JAK inhibitors.
- For T2D: metformin, sulfonylureas, GLP-1 agonists, SGLT-2 inhibitors, basal/bolus insulin.
- For hypertension: ACE inhibitors, ARBs, β-blockers, CCBs, thiazides.
- For depression/anxiety: SSRIs, SNRIs, benzodiazepines, lamotrigine, lithium.
- For thyroid: levothyroxine, liothyronine, methimazole.

Specific high-risk pairs to ALWAYS document if relevant: Metformin + Momordica = additive hypoglycemia. Insulin + Nigella sativa = severe hypoglycemia. Warfarin + curcumin / ginkgo / ginger / garlic / vitamin K-rich greens = bleeding / INR shift. SSRIs + St. John's Wort = serotonin syndrome. JAK inhibitors + high-dose flavonoids (quercetin/polydatin) = CYP3A4 interaction. Levothyroxine + calcium / iron / coffee within 60 min = absorption block. Statins + niacin = hepatotoxicity / myopathy.

**10.2 Drug ↔ Food interactions**

| Drug | Food | Mechanism | Required action |
|---|---|---|---|

Examples:
- Warfarin + vitamin K-rich greens → maintain consistent intake (don't oscillate)
- MAOIs + tyramine (aged cheese, fermented sausage, wine) → hypertensive crisis
- Levothyroxine + coffee / soy / fibre within 60 min → absorption block
- Grapefruit + many drugs (statins, CCBs, immunosuppressants) → CYP3A4 inhibition → toxicity
- Acetaminophen + alcohol → hepatotoxicity
- NSAIDs + alcohol → GI bleed
- Metformin + alcohol → lactic acidosis
- ACE inhibitors + high-potassium foods (banana, coconut water, salt substitutes) → hyperkalemia
- Lithium + low-sodium diet → toxicity
- Iron supplement + tea/coffee/dairy within 60 min → absorption block

**10.3 Supplement ↔ Food interactions** (the new layer the founder mandated)

| Supplement | Food / Drink | Mechanism | Required action |
|---|---|---|---|

Mandatory rules to encode wherever applicable:
- **Curcumin** + dairy → casein binds polyphenols, ↓ bioavailability → take 2h apart; pair with **piperine + fat (ghee/coconut oil)**.
- **Iron** + tea / coffee / wine (tannins, polyphenols) → ↓ absorption → take 1–2h apart; pair with **vitamin C**.
- **Iron** + dairy / calcium → divalent cation competition → ≥2h gap.
- **Zinc** + iron → competition for DMT1 transporter → ≥2h gap.
- **Calcium** + magnesium at same dose → competition → split AM/PM (calcium AM with breakfast; magnesium PM with dinner).
- **Fat-soluble vitamins** (A, D, E, K) → ALWAYS with a meal containing fat.
- **Vitamin D** + magnesium → magnesium is a cofactor for vitamin D activation → take together.
- **Probiotic** + hot food / drink (>40°C) → kills viable bacteria → take with cool/room-temp.
- **Probiotic** + antibiotic → ≥2h gap.
- **Thyroid medication** (if patient takes one) + calcium / iron / coffee / soy / high-fibre → 60 min gap.
- **Polyphenol-rich herbs** (green tea EGCG, grape seed, resveratrol) + iron → ↓ absorption.
- **Berberine** + dairy → ↓ absorption (some studies); separate by 1h.
- **Carotenoids** (lutein, zeaxanthin, astaxanthin) → fat-required for absorption.
- **Ashwagandha** + alcohol → CNS depression; avoid same evening.
- **Melatonin** + caffeine → caffeine blocks → no caffeine after 14:00.
- **Adaptogens (rhodiola, eleuthero)** → mornings only; stimulating, disrupts evening sleep if taken late.
- **L-theanine** + caffeine (morning) → smoother caffeine; antagonistic if taken at bedtime with chamomile.
- **Cruciferous veg (raw)** in high quantities → goitrogenic; if hypothyroid, lightly steam.
- **Grapefruit** + any CYP3A4-metabolised supplement (some flavonoids) → interaction.
- **High-oxalate foods** (spinach, beet, almond) + calcium / kidney-stone risk → moderate.
- **Bone broth** + iron supplement → glycine + collagen aid absorption (synergy).

**10.4 Supplement ↔ Supplement interactions**

| Supplement A | Supplement B | Mechanism | Required action |
|---|---|---|---|

Examples:
- **Zinc ↔ Copper** → long-term zinc without copper → copper depletion → maintain 8–15:1 ratio.
- **Iron ↔ Zinc / Calcium / Magnesium** → divalent competition → separate by 2h.
- **Vitamin A ↔ Vitamin D** → high-dose A can compete with D receptor activation → balance.
- **Vitamin E ↔ Vitamin K** → high-dose E can antagonise K → balance.
- **St. John's Wort ↔ SSRIs and many herbs** → serotonin syndrome / CYP induction → avoid combinations.
- **Echinacea ↔ Immunomodulators** → counter-active.
- **High-dose flavonoids ↔ thyroid hormone uptake** → consider gap.
- **Magnesium ↔ Calcium** at same dose → split times.
- **Berberine ↔ many herbs via CYP3A4 inhibition** → reduce concurrent CYP3A4-metabolised herbs.

**10.5 Exercise / Sleep / Caffeine timing rules**

- **Caffeine cutoff: 14:00 latest** (half-life ~6h; protects sleep).
- **Creatine**: pre- or post-workout with carb/protein; consistent daily timing.
- **Beta-alanine**: ≥30 min pre-workout; expect paresthesia.
- **L-theanine + caffeine**: AM only.
- **Magnesium glycinate**: PM (sleep support).
- **Ashwagandha (KSM-66 / Sensoril)**: AM or PM; if PM, take ≥2h before bed to avoid vivid dreams in sensitive users.
- **Rhodiola / Eleuthero**: AM only (stimulating).
- **Melatonin (if used)**: 30–60 min before sleep; ≤0.3 mg physiological dose preferred.
- **Probiotic**: morning empty stomach OR with first meal.
- **Heavy meal + supine position** within 3h → reflux risk → no late dinner with inverted yoga.
- **Inverted yoga (Sarvangasana, Halasana)** + acid reflux / late dinner → contraindicated.
- **Hot sauna** + alcohol → dehydration / arrhythmia risk → don't combine.
- **Cold immersion** + cardiovascular disease → physician clearance.

**10.6 "Strictly Avoid" list — specific to this ailment**

Bullet list of supplements/foods/drugs the ailment's pathology contraindicates:
- Vitiligo (autoimmune): high-dose Echinacea, pure Astragalus (high-dose), Ma Huang (Ephedra), Panax ginseng (immune over-activation)
- T2D: high-glycaemic sweeteners, high-dose niacin (insulin resistance worsening), licorice (BP)
- Autoimmune: melatonin high-dose, IL-stimulating herbs
- Hypertension: licorice, ephedra, Kapalbhati pranayama (BP spike), Bhastrika
- Pregnancy: Vitex, parsley (high-dose), pennyroyal, many oils, high-dose vitamin A
- Hepatic disease: kava, comfrey, chaparral
- Renal disease: high-protein loads, high-dose creatine, potassium-sparing herbs

### 10.7 Emerging & adjunctive therapies (mandatory new H2 — v6.2 Rule 5 + Rule 6)

> **TL;DR.** What's on the horizon for this condition that isn't a herb. Split into (a) home-usable advanced therapies that can join the main protocol, (b) clinic-route options if the home protocol plateaus, (c) the high-evidence behavioural/adjunctive therapies the user can self-direct.

**10.7.1 Home-usable advanced & device therapies** — emerging therapies that are consumer-purchasable AND home-administrable. Fold into the main protocol with appropriate caveats. Examples: consumer non-invasive VNS (Nurosym, Sensate, Pulsetto), home CGM, Apple Watch / KardiaMobile ECG, Cefaly migraine device, app-based CBT-i (Sleepio, Somryst), HRV biofeedback hardware (HeartMath Inner Balance, Lief, Polar H10). Each gets: device, dose / session protocol, evidence anchor (the actual trial, not the regulatory clearance), price, where it fits in the §8.5 day plan.

**10.7.2 Adjunctive behavioural therapies** — high-evidence non-pharm interventions per **Rule 6**. Must include the relevant subset of CBT / CBT-i / MBCT / MBSR / TRT / ERP / vestibular rehab / pelvic floor PT / biofeedback / HRV training / sound therapies / light therapies / vagal-breath therapies for this specific ailment. Each gets: therapy, what it does in plain words, evidence tier (often A or B — frequently higher than the herbs in §3), self-guided resources (workbooks, apps), and the honest "therapist-led gets better outcomes for many but the user decides" framing for those that need a credentialed practitioner.

**10.7.3 If the home protocol plateaus — clinic-route options** — emerging therapies that are NOT consumer-purchasable or NOT home-administrable. Documented honestly, NEVER recommended, NEVER folded into the home regime. Examples by condition family (per **Rule 5**): bimodal neuromodulation (Lenire / Neuromod) for tinnitus · GLP-1 agonists / bariatric for T2D · ketamine clinics / TMS / tDCS / psychedelic-assisted therapy for refractory depression · CGRP monoclonals / gepants for migraine · biologics (IL-17/IL-23/IL-4/13) / JAK inhibitors for psoriasis/eczema · Inspire hypoglossal stimulator for OSA. Each row cites the actual clinical trial (TENT-A2, STEP, STAR-D, etc.) as evidence anchor; regulatory milestones (FDA De Novo, CE mark) appear only as **factual regulatory-path context** in parentheses per the **narrow exception in the source policy** and **Rule 5** framing. Frame: "If the home protocol plateaus and the user wishes to pursue a clinic-route option, here is what exists and what the trials actually show. The protocol does not recommend any of these; the user is sovereign over the decision."

#### Open the science

Cite each trial directly: TENT-A2 (Conlon et al., *Sci Transl Med* 2020, n=191, Lenire) · De Ridder transcutaneous auricular VNS pilot studies · Hilton 2012 Cochrane (ginkgo null for primary tinnitus) · McKenna 2018 CBT for tinnitus (BMJ) · Cima 2012 TRT vs. usual care · etc. For each emerging therapy, link the primary trial paper and (where it exists) the latest Cochrane / Lancet / BMJ meta-analysis. Where regulatory-path context is mentioned, frame it explicitly as "(FDA De Novo 2023 — regulatory-path context, not evidence anchor)" so the reader sees the framing.

### 11. Clinical Scoring + Comorbidity Screening

**11.0 Self-administered clinical scoring instrument** for the ailment — measured at baseline / week 12 / month 6 / month 12 **by the user**, using consumer rating scales, smartphone photos under consistent lighting, home glucose / BP / HRV / weight / waist devices. NO clinic-administered scoring. Examples by domain:
- Skin: VASI (vitiligo), PASI (psoriasis), SCORAD/EASI (eczema), GAGS (acne), MASI (melasma)
- Hair: Hamilton-Norwood / Ludwig (androgenetic alopecia), SALT (alopecia areata)
- Metabolic: HbA1c, fasting plasma glucose, HOMA-IR, OGTT, fasting insulin
- Cardio: SBP/DBP home log, ABPM, ABI for PAD
- Brain / Mood: HAM-D / PHQ-9 / GAD-7 / BAI / MADRS (avoid US framing where possible — these are international scales) / MoCA / MMSE for cognition
- Gut: IBS-SSS, Bristol stool, GAS / Symptom Severity Scale
- Hormonal: Menopause Rating Scale (MRS), Greene Climacteric Scale, PCOS Health-Related Quality of Life
- Musculoskeletal: WOMAC (osteoarthritis), VAS pain, ODI (back), KSS (knee)
- Eye: NEI VFQ-25, OSDI (dry eye)
- Sleep: Pittsburgh Sleep Quality Index (PSQI), ISI (insomnia)

**11.5 Autoimmune & Comorbidity Screening — direct-to-consumer labs only**

Labs are ordered by the user through DTC channels (LetsGetChecked, Everlywell, Thriva UK, Cerascreen EU, True Test IN, Walk-In Lab, Lab Me, Choose Health, InsideTracker). Cadence: baseline, month 3, month 6, month 12. List comorbid conditions the ailment carries elevated risk for, plus the screening labs:
- Vitiligo → autoimmune thyroid (anti-TPO, anti-Tg, TSH), T2D (HbA1c), Hashimoto's, alopecia areata, B12 deficiency, pernicious anaemia
- T2D → CV risk (lipid panel, ApoB), kidney (eGFR, ACR), retinopathy screen, neuropathy screen, NAFLD (ALT/AST/GGT, FibroScan if needed), depression
- Hypertension → renal artery stenosis, sleep apnea (Epworth), thyroid, adrenal
- Depression → thyroid, B12, vitamin D, ferritin, inflammatory markers
- IBS → SIBO breath test, celiac (anti-tTG-IgA), micronutrient deficiencies
- Acne → PCOS markers (free testosterone, DHEAS, LH/FSH), insulin resistance
- Eczema → food allergy panel, atopic march (asthma / allergic rhinitis), filaggrin

### 12. Implementation Timeline (12 months) — self-tracked, home-based

- **Weeks 1–4 — Adaptation.** Half-dose ramp days 1–3 to test tolerance. What to expect (mild bloating, dark urine on day 1 from polyphenols, taste adjustment). Daily/weekly self-log in a notebook or app (e.g. Cronometer, MyFitnessPal, AYUSH MyPal, Welltory).
- **Weeks 5–8 — Stabilisation.** Tolerance confirmed. Early biomarker drift. Optional mid-protocol DTC-lab spot-check (e.g. CBC + ferritin + vitamin D + hs-CRP).
- **Weeks 9–12 — Clinical shift.** First repeat of self-administered scoring instrument (§11.0). DTC lab panel from §11.5. Photo-document any visible markers (skin, hair, weight).
- **Months 4–6 — Consolidation.** Maintenance protocol. Subtract any non-responders (grade-based pruning).
- **Months 6–12 — Long-term sustainability.** Quarterly self-scoring. Annual DTC labs. Cycling considerations (TCM weeks 1 & 4 of each month; metabolic + adaptogen rotation; seasonal millet rotation).
- **No physician check-in milestones are mandatory.** If the user keeps a physician in the loop, that's their personal decision — the protocol does not require it.

### 13. Illustrative Case Composite (optional but recommended)

Anonymised composite — NOT a real patient identifier. Profile, baseline, protocol applied, outcomes at the 4 timeline milestones.

### 13.5 Patient-facing Primer (mandatory)

A 150–250 word, lay-language explainer that decodes the ailment in everyday voice: what is going on inside the body, why this protocol differs from the conventional path, what the patient can expect month-by-month, what to NOT expect (this is a months-long re-balancing, not an overnight reversal), and the **sovereign ethos**: this is an independent, OTC, home-based protocol. **No prescription. No clinic. No hospital.** The user is in charge of their own body. If they choose to keep a physician informed, that is their personal decision; the protocol does not require it.

### 13.7 Honest evidence-tier comparison table (mandatory — v6.2 Rule 3)

> **TL;DR.** Every approach covered in this dossier, ranked by honest evidence tier with a plain-words verdict and where it fits in the protocol — including the ones we do NOT recommend, listed for transparency.

This table is the load-bearing trust mechanism. NicheCore tells the truth about what works AND what doesn't. Hiding the weak approaches is dishonest; users have already seen them in mainstream coverage.

| Approach | Evidence tier (A/B/C/D/T/H/X) | Plain-words verdict (≤25 words) | Where it fits in YOUR protocol |
|---|---|---|---|

**Rules for filling this table:**
- Include EVERY approach the dossier covers — phytochemicals (§3), traditional formulas (§4), biophysical interventions (§5), dietary anchors (§6), mind-body anchors (§7), emerging & adjunctive therapies (§10.7).
- Include approaches we do NOT recommend (homeopathy graded T/H per honest evidence; low-evidence popular herbs; clinic-route options) with the honest tier label and a "Documented for transparency; not in our active protocol" / "Clinic-route option per §10.7.3 only" verdict.
- **Plain-words verdict** is brutally honest, follows the Cochrane-honesty discipline (Rule 4). Lead with the null result if there is one. Example: "Cochrane null for primary tinnitus; one RCT (Procháska) showed benefit; about 1 in 3 may respond. Try 12 weeks, stop if no shift."
- **Where it fits** is the protocol call: "Cornerstone — daily" / "One layer of 6 — 12-week trial" / "Optional adjunct if other layers plateau" / "Documented for transparency; not in our active protocol" / "Clinic-route option per §10.7.3".

### 14. Independent Healing Paradigm (closing editorial, ~150 words)

- Why this protocol differs from the mainstream pharmaceutical model.
- **Sovereignty ethos**: OTC + home-based by design. **No prescription. No clinic. No hospital. No surgery.** The user owns their body and their healing path.
- Honest acknowledgment of evidence limits and uncertainty — we are not promising outcomes; we are documenting the strongest globally-sourced natural path.
- Explicit re-affirmation: **no FDA, FTC, ADA, AHA, AAD, AMA, APA, ACOG, NAMS, ACR, ACS, CDC, NIH-policy, AAFP, AAP as authority on whether something WORKS. Period.**
- **Narrow exception (v6.2 Rule 5)**: US regulatory milestones (FDA De Novo, breakthrough designation) and their non-US peers (CE mark, Health Canada licence, TGA listing) may appear ONLY as factual regulatory-path context for emerging device/biologic therapies in §10.7 — never as the trust anchor on whether something works. The trust anchor remains the named clinical trial.
- Explicit re-affirmation: protocol grounded in WHO TCIM, India AYUSH/CCRAS/CCRH/CCRYN/CCRUM/CCRS/PCIMH/ICMR, EMA HMPC, Australia TGA + NHMRC, China NMPA + Chinese Pharmacopoeia, Health Canada NHP, Men-Tsee-Khang, Hamdard, IMPCOPS, plus classical traditional texts.

---

## Evidence grading (apply to every claim / table row)

| Grade | Meaning |
|---|---|
| A | Strong human evidence — multiple RCTs or meta-analyses |
| B | Moderate human evidence — 1+ RCT, mixed |
| C | Early / mixed human evidence |
| D | Mechanistic, animal, in vitro, in silico only |
| T | Traditional use evidence (Ayurveda / TCM / Unani / Siddha / Tibetan / Homeopathy) |
| H | Hypothesis / emerging signal |
| X | Insufficient / rejected |

## Forbidden language (do not write these phrases anywhere)

- "cure your X", "cures X" as a marketing claim
- "guaranteed results / repigmentation / reversal / cure"
- "no side effects"
- "100 % safe"
- "exceptionally high safety profile" (be honest about caveats)
- "miracle cure / formula / treatment / pill"
- "clinically proven" (unless an RCT exists for *that exact intervention at that exact dose*)
- "doctor-approved" (unless a named, credentialed reviewer has actually reviewed it)
- "ancient secret"
- "FDA-approved" (we do not use FDA as a trust anchor anyway)
- "see your doctor for ..."
- "consult your physician about ..."
- "prescribed by a physician" (except in §10.1 *describing* what a user might already be on)
- "Rx-only", "clinic-based phototherapy", "hospital admission required"
- "physician supervision required"
- "first-line therapy is [prescription drug]"
- "you'll need a prescription for ..."

## How to apply this skill (workflow)

When asked to research ailment **X**:

1. **Identify mechanism family** — autoimmune, metabolic, neurodegenerative, hormonal, microbial, structural, microbiome-driven.
2. **Web-search the allowed sources** (Tier 2 / Tier 3). Cross-check at least one AYUSH/CCRAS source, one EMA HMPC monograph or TGA / NMPA reference, and one classical text per relevant tradition.
3. **Identify 2–4 mechanistic drivers** shared across traditions (§2).
4. **Identify clinical sub-types** (§2.5).
5. **Find 4–10 OTC phytochemicals** with verified non-US suppliers, AYUSH-GMP where possible, AND co-administration metadata (§3).
6. **Lay out the six traditions** with min 2 entries each (§4).
7. **Specify biophysical interventions branched by domain** (§5).
8. **Build dietary protocol with exact grams + environmental triggers + cofactor floor + 7-day plan** (§6).
9. **Specify yoga / pranayama / meditation / sleep / nervous-system anchors mapped to mechanism nodes** (§7), plus weekly + monthly exercise cadence (§7.6).
10. **Compose three daily combos (≤10 caps total)** (§8).
11. **Write the master 24-hour day plan** that resolves every co-administration conflict from §10 (§8.5).
12. **Map supplier ecosystem with monthly cost breakdown** (§9).
13. **Build the full interaction matrix** — §10.1 drug↔supp, §10.2 drug↔food, §10.3 supp↔food, §10.4 supp↔supp, §10.5 timing rules, §10.6 strictly-avoid.
14. **Write §10.7 Emerging & adjunctive therapies** (v6.2 Rule 5 + Rule 6) — home-usable advanced devices · adjunctive behavioural therapies (CBT/CBT-i, MBCT/MBSR, condition-specific habituation/retraining, biofeedback, sound/light/vagal) · clinic-route options if home protocol plateaus. Cite actual trials; regulatory milestones only as factual context.
15. **Specify clinical scoring instrument + comorbidity screen** (§11).
16. **Define the 12-month implementation timeline** (§12).
17. **Write the patient-facing primer** (§13.5).
18. **Write §13.7 honest evidence-tier comparison table** (v6.2 Rule 3) — every approach covered, including ones not recommended, with honest tier and plain-words verdict.
19. **Write the closing paradigm** (§14) — including the v6.2 narrow regulatory-path-context exception.
20. **Audit H3 tree-friendliness** (v6.2 Rule 2) — every H2 has 3–7 H3s, each ≤5 words, action-oriented, specific.
21. **Audit progressive disclosure** (v6.2 Rule 1) — every section + sub-section opens with plain-English summary; technical body sits in a `#### Open the science` deep-dive block.
22. **Audit Cochrane honesty** (v6.2 Rule 4) — any approach with a null Cochrane / major meta-analysis is honestly downgraded in the TL;DR and in §13.7.

Save the dossier as `research/{ailmentId}.md`.

## Internal Ralph Loop (MANDATORY before saving) — three internal passes

Before writing the final file, run **three internal review iterations** on your draft and refine after each. The point is to look at the dossier from a different angle each pass so all directions of the protocol have been challenged.

### Pass 1 — Completeness & coherence (structural)
- Are all 16 sections present in the exact order specified (v6.2 adds §10.7 Emerging & adjunctive therapies and §13.7 honest evidence-tier comparison table)?
- Are all sub-sections present (§2.5, §6.5, §6.6, §7.6, §8.5, §10.1–10.6, §10.7.1–10.7.3, §11.0, §11.5, §13.5, §13.7)?
- Do all 6 traditional systems (§4.1–4.6) have ≥2 entries OR an explicit silence acknowledgment?
- Does §8.5 (24-hour timetable) explicitly resolve every conflict from §10 (especially curcumin/dairy, iron/tea/Mg/Ca timing, Ashwagandha pre-bed, caffeine cut-off)?
- Are all yoga + pranayama rows in §7.1/§7.2 mapped to a §2 mechanism node?
- Does §6 sum to a coherent weekly grocery list that matches the §8.5 meal times?
- **v6.2 progressive-disclosure audit (Rule 1)**: does every section AND every sub-section open with a plain-English summary, with the technical mechanism + citations + references inside a `#### Open the science` deep-dive block?
- **v6.2 tree-friendly H3 audit (Rule 2)**: does every H2 have 3–7 H3 sub-sections, each ≤5 words, action-oriented, specific (no "Overview" / "Details" / "Background")?
- **v6.2 comparison table audit (Rule 3)**: is §13.7 present, covering every approach the dossier mentions including ones we do NOT recommend, with brutally honest plain-words verdicts ≤25 words?
- **v6.2 Cochrane honesty audit (Rule 4)**: for every approach with a known null Cochrane / major meta-analysis, does the TL;DR lead with the honest caveat, with individual-trial wins presented as secondary?
- **v6.2 emerging-therapies audit (Rule 5)**: is §10.7 present and properly split into home-usable / adjunctive-behavioural / clinic-route? Are trials cited directly with regulatory milestones only as factual context?
- **v6.2 adjunctive therapy audit (Rule 6)**: is the relevant subset of CBT / CBT-i / MBCT / MBSR / habituation-retraining / biofeedback / sound / light / vagal-breath covered with honest grades?
- **Iterate**: if any answer is "no", revise and re-check.

### Pass 2 — Validation & citation integrity (truthfulness)
- For every Tier-2 / Tier-3 citation (AYUSH/CCRAS/CCRH/EMA HMPC/TGA/NMPA/Health Canada NHP/classical texts/named non-US peer-reviewed RCTs): does it actually support the claim it is attached to? Cross-check against the published monograph or text reference where possible.
- **No invented citations**, no "Smith et al 2023" without a real journal, no "studies show" without a named monograph/RCT/classical text.
- **No invented doses** — every mg/g/μg figure must come from a monograph (EMA HMPC, AYUSH/CCRAS, Chinese Pharmacopoeia, Health Canada NHP) or a real peer-reviewed paper.
- **No invented brand SKUs** — if you name a product (e.g. "Mito Red Light MitoMAX") it must really exist and be consumer-purchasable. If unsure, drop the brand and keep the generic.
- Every grade (A/B/C/D/T/H/X) must match the evidence cited in the row (don't grade T as B).
- Every claim in §3 has a mechanism + a dose + a timing + a Take WITH + an Avoid WITH + a grade + a source. Missing any column → revise.
- §10.1 drugs must actually be conventionally prescribed for the ailment — not invented (e.g. don't list "tacrolimus" for psoriasis if it's not standard there; do list it for vitiligo and eczema).
- **Iterate**: if any row fails validation, fix or remove.

### Pass 3 — Elite-physician smell test (clinical credibility)
Read the dossier as if you were:
- **An AYUSH-credentialed BAMS / Vaidya / Siddha specialist / Hakim** under CCRAS / CCRUM / CCRS / IMPCOPS, OR
- **An integrative GP in Australia** under TGA / NHMRC who treats patients with herbal + complementary medicine alongside primary care.

The dossier must pass their smell test:
- **Dosha / Mizaj / TCM-pattern framing is correct** (not just label-dropped — actually consistent with the symptom profile, e.g. dry-eczema = vata aggravation, oozing-eczema = pitta-kapha, not the other way around).
- **Drug-herb interaction call-outs are clinically accurate** (e.g. licorice + diuretic + ACE-i = hypokalemia + hypertension; warfarin + ginkgo/garlic/ginger = bleed; lithium + diuretic = toxicity).
- **Contraindications are not glossed over** (e.g. Kapalbhati & Bhastrika in hypertension / pregnancy / glaucoma; Vitex in pregnancy; St John's Wort with SSRIs; high-dose vitamin A in pregnancy).
- **Cofactor floors (§6.6)** are pharmacologically sane (Zn:Cu ratio 8–15:1 maintained, iron only if ferritin low, iodine cautious in autoimmune-thyroid context).
- **Timeline (§12)** is realistic — no "VASI drops 50% in week 4" overclaims; chronic-disease re-balancing takes months.
- **Forbidden language absent** under the most cynical read.
- **No prescription / clinic / hospital recommendation** under any framing.
- **Patient sovereignty preserved** without becoming reckless (the dossier should still respect when something is genuinely beyond the OTC protocol's reach and should say so honestly).
- **Iterate**: if any clinical-credibility concern surfaces, revise.

After all three passes, save the dossier. **Document in the YAML front matter that the three-pass internal ralph loop was completed**:

```yaml
internalRalph:
  pass1Complete: true   # structural coherence
  pass2Complete: true   # citation + dose validation
  pass3Complete: true   # elite-physician smell test (AYUSH BAMS / Australia TGA-integrative GP)
```

## Self-check before submitting (mandatory)

- [ ] All 15 sections present, in order.
- [ ] YAML front matter complete, including `clinicalScoringInstrument`, `subTypes`, `comorbidityScreen`.
- [ ] Every supplement / formula has a grade (A–X) AND a "Take WITH" + "Avoid WITH" column where applicable.
- [ ] No FDA / FTC / ADA / AHA / AAD / AMA / APA / ACOG / NAMS / ACR / ACS / CDC / NIH-policy citations.
- [ ] At least one AYUSH / CCRAS / CCRH source cited.
- [ ] At least one EMA HMPC / TGA / NMPA source cited.
- [ ] At least one classical text per relevant tradition cited.
- [ ] §4 each tradition has ≥2 entries OR a 1-line silence acknowledgment.
- [ ] §5 branched by domain — Skin = PBM + controlled sun + IR sauna + cold immersion + (optional) home PEMF. **NO clinic phototherapy, NO 308 nm excimer, NO PUVA, NO hospital procedure.**
- [ ] §6.5 environmental triggers populated.
- [ ] §6.6 cofactor floor table populated.
- [ ] §7 yoga & pranayama each row maps to a §2 mechanism node.
- [ ] §7.6 weekly + monthly exercise cadence specified.
- [ ] §8 combos ≤10 capsules total.
- [ ] §8.5 master 24-hour day plan present, integrates supplements + meals + exercise + breathwork + light + sleep, resolves all §10 conflicts.
- [ ] §9 monthly cost broken down by line + brick-and-mortar address included.
- [ ] §10.1–10.6 all populated.
- [ ] §10.1 includes conventional first-line drugs for THIS ailment with interactions.
- [ ] §10.3 supplement↔food matrix populated (curcumin/dairy, iron/tea, Mg/Ca, etc.).
- [ ] §10.5 timing rules include caffeine 14:00 cutoff, exercise/sleep alignment.
- [ ] §10.6 strictly-avoid list specific to ailment pathology.
- [ ] **OTC/HOME-ONLY check**: every supplement is consumer-purchasable; every device is consumer-purchasable and self-administrable; every test is self-administered or DTC; NO clinic phototherapy / NO excimer / NO PUVA / NO hospital infusion / NO surgical procedure recommended ANYWHERE.
- [ ] **Sovereignty check**: §11/§12/§13.5/§14 frame the user as sovereign over their body; physician involvement is optional, not required.
- [ ] §11.0 clinical scoring instrument named with measurement cadence.
- [ ] §11.5 comorbidity screening list populated.
- [ ] §13.5 patient-facing primer 150–250 words present.
- [ ] §14 closing paradigm re-affirms forbidden + allowed sources.
- [ ] Homeopathy section grades remedies T or H only.
- [ ] No forbidden language anywhere.
- [ ] 7-day meal plan with exact gram quantities.
- [ ] Word count: 2,500–5,500 for narrow ailments; **4,500–8,500 for moderately complex; up to 18,000 for high-complexity multi-system ailments with ≥5 prescription drug classes in §10.1** (e.g. psoriasis, T2D, IBD, Hashimoto's, RA, lupus, depression with co-prescriptions). **v6.2 ceiling raised from 14k to 18k** because progressive-disclosure deep-dive blocks + tree-friendly H3 audit + comparison table + emerging-therapies H2 + adjunctive therapies coverage add ~3–4k words on dense dossiers.
- [ ] **TL;DR everywhere check (v6.1)**: every section opens with a 2-sentence TL;DR card; every list item starts with `**TL;DR.**`; every table includes a TL;DR column; every TL;DR ends with an inline italic citation; no claim is more than 4 lines from its citation.
- [ ] **Progressive disclosure check (v6.2 Rule 1)**: every section AND every sub-section opens with the plain-English summary; the technical mechanism / citation-dense material sits inside a `#### Open the science` deep-dive block (or `:::deepdive` fenced block); no section dumps the mechanism before the lay-reader gem.
- [ ] **Tree-friendly H3 check (v6.2 Rule 2)**: every H2 has 3–7 H3 sub-sections; every H3 name is ≤5 words, action-oriented where possible, specific (never "Overview", "Details", "Background", "More info").
- [ ] **Honest evidence-tier comparison table check (v6.2 Rule 3)**: §13.7 present, immediately before §14; covers EVERY approach the dossier mentions including ones we do NOT recommend (homeopathy, low-evidence herbs, clinic-route options); plain-words verdict ≤25 words; "Where it fits" column populated.
- [ ] **Cochrane honesty check (v6.2 Rule 4)**: every approach with a null Cochrane / major meta-analysis leads its TL;DR with the honest caveat; individual-trial wins come second; protocol keeps such approaches as ONE layer not the cornerstone; "X-week try, stop if no shift" frame applied.
- [ ] **Emerging-therapies H2 check (v6.2 Rule 5)**: §10.7 present with 10.7.1 home-usable advanced + 10.7.2 adjunctive behavioural + 10.7.3 clinic-route options; trials cited directly (TENT-A2, SUSTAIN, STAR-D, etc.); regulatory milestones (FDA De Novo, CE mark) appear only as factual regulatory-path context with explicit framing, never as evidence anchor.
- [ ] **Adjunctive therapy coverage check (v6.2 Rule 6)**: relevant subset of CBT / CBT-i / MBCT / MBSR / condition-specific habituation-retraining (TRT/ERP/vestibular rehab/pelvic floor PT) / biofeedback / HRV / sound / light / vagal-breath covered with honest evidence grades and self-guided resources.
- [ ] **Narrow regulatory-context exception applied correctly (v6.2 Rule 5)**: any FDA / CE / Health Canada mention is framed inline as "(regulatory-path context, not evidence anchor)"; never used as the trust anchor on whether the therapy works.
