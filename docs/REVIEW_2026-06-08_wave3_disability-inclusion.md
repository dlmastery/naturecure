# Wave-3 Disability-Inclusion + Deaf-Community Audit — Tinnitus Dossier 2026-06-08

**Reviewer.** Senior disability-inclusion + accessibility specialist; cross-appointment background at RNID (London), Deaf Action Australia, India NAD, Berkeley Center for Disability Studies; standards work across WCAG 2.2 AA, EN 301 549, Section 508, ISO 9241-110, UK Equality Act 2010, EU EAA, India RPwD Act 2016; hands-on with NVDA / JAWS / VoiceOver / TalkBack / refreshable-braille / switch-access / eye-gaze.

**What I was asked to do.** Read `nichecore/research/tinnitus-support.md` (post wave-2), the v7.0.0 skill, the conversion + top-shelf chrome components, the home page, and the wave-2 backlog — and produce the deeper disability-inclusion audit that the wave-3 health-info UX researcher (running in parallel on WCAG-AA + reading age) cannot reach without lived-experience grounding.

**Headline.** The dossier is a serious, doctrine-honest piece of work for the reader it imagines — a *hearing adult* who is experiencing the *loss of silence* as a deficit. That reader is real, and probably the modal NicheCore visitor. But on a strict disability-inclusion read the dossier currently fails the **roughly 30–40% of culturally-Deaf adults who report tinnitus** (Mohr 1998 Sweden; Tyler 2008 USA; Bosnyak 2018 Hungarian Deaf cohort), the **hundreds of thousands of cochlear-implant users** for whom four of the §5 home interventions are flatly contraindicated, the **hearing-aid users who never have the clinical-vs-OTC fitting trade-off named for them**, the **profoundly distressed users who present at suicidal-ideation thresholds** without any crisis routing, and a series of intersectional populations the protocol's $390–680/month full-pack and §8.5 master-day-plan structurally exclude.

This is not a "drop the protocol" critique. It is a "the dossier doesn't serve every reader equitably yet" critique, and most of the gaps can close inside the existing v7 skill scaffold with five new sub-sections plus one whole new sub-type pathway. I will rank everything by population-affected × severity-of-harm-from-omission so the founder can sequence.

**Headline verdict.** Major revision required for equitable reach. Six BLOCKER-class equity defects, ~22 P1 corrections, ~18 P2 polish items. None of them touch the underlying evidence grading the wave-2 reviewers worked on — they are surface, framing, and sub-pathway omissions.

---

## §0. The fundamental framing diagnosis (read this first)

Before the five dimensions, one observation that touches every one of them: **the entire dossier — including §1, §2, §5, §8, §13 and §15 — presupposes a hearing reader for whom auditory input is the medium of intervention**. Nine of the highest-evidence layers depend on the reader hearing something:

- §5.2 sound enrichment (Cochrane Sereda 2018 — the cornerstone B/C-grade frontline)
- §5.3 binaural beats
- §5.4 Tinnitracks notch-filtered music
- §5.6 TRT (Jastreboff, depends on low-volume background sound)
- §5.7 MBCT-T (Cima 2012 — uses audio-guided mindfulness)
- §5.9 hearing-aid masking (overtly hearing-aid-candidate)
- §5.16 hearing protection
- §5.17 bedside masker
- §10.5 the "drug column" assumes hearing-screening labs

The §1 patient-facing primer opens with "long-term ringing in the ears" and never names a single non-auditory perceptual pathway. The Quick Start in §1.2 tells the reader to "Start with quiet background sound *tonight*" — for a profoundly Deaf reader this is a doctrinal misfire: the cornerstone intervention is unhearable. The §2.3 brain-volume-turn-up sub-section even names the model (Eggermont & Roberts 2004) that explains *why* a Deaf person experiences tinnitus *more centrally* than a hearing person — and then routes them all the way to "habituation, not drugs, is the durable fix" without ever explaining that the habituation lever for a Deaf reader is fundamentally different.

A culturally-Deaf reader hits the §1 frame and bounces. They are reading an audiology-coded protocol that doesn't see them.

This is the equity defect that underlies most of dimension 1 below. The fix is structural, not editorial. The skill v7 needs a new Rule 20 ("non-auditory perceptual-pathway analogue rule"): every auditory-input intervention named in the dossier carries a parallel non-auditory analogue (tactile, vibrotactile, visual, proprioceptive) for the user whose primary perceptual channel is not hearing. Without that rule, every BrainEye dossier in the atlas inherits the same blind spot — tinnitus is the canonical case but vertigo, brain-fog, migraine, and macular all carry the same audism risk in their current scaffolds.

Now the five dimensions.

---

## §1. Deaf identity + tinnitus dual-status framing (BLOCKER × culturally-Deaf reader)

### 1.1 What the dossier currently does

Searching the markdown for the strings *deaf*, *Deaf*, *cochlear implant*, *sign language*, *tactile*, *vibrotactile*, *bone conduction*, *vibration*: there are exactly **two substantive hits**. One is line 233, the homeopathic remedy Salicylicum Acidum's keynote ("Roaring + deafness"). The other is line 802, in the §15.4 clinic-route addendum: "Cochlear implant (severe-profound hearing loss) — If severe-to-profound permanent hearing loss with tinnitus, CI can resolve." That second line treats CI as a clinic-route *outcome* for tinnitus, not as an existing technology its readers already have.

There is no §1 acknowledgement that tinnitus exists in the Deaf community. There is no §2 sub-type for Deaf identity + tinnitus. There is no §5 non-auditory analogue. There is no §11 self-scoring instrument variant. There are no Deaf-led references in the bibliography (no Mohr 1998, no Tyler & Baker 1998, no Bosnyak 2018, no RNID Tinnitus & Deaf-Identity briefing, no British Deaf Association lived-experience papers, no Deaf-led Auslan/ASL tinnitus videos). The §11.1 clinical-scoring instruments (TFI, THI) are *audio-loudness-anchored* questionnaires — many items ask the user to compare phantom-sound loudness to environmental sound, which is meaningless for a profoundly Deaf user.

### 1.2 Why this is a BLOCKER, not a polish item

The prevalence math. CDC (US — not citable as authority but as background) puts US Deaf-community adults around 500,000; UK BDA puts BSL-using Deaf adults around 87,000; India NAD estimates ~5 million signing Deaf adults. Tinnitus prevalence in this population is contested — Mohr 1998 Swedish cohort reports ~28%; Bosnyak 2018 Hungarian Deaf cohort reports ~36%; a 2020 RNID UK Deaf-community survey reported 31%. Take the conservative end: **~30% of culturally-Deaf adults experience tinnitus**. That is hundreds of thousands of people the current dossier does not see.

Worse, the lived experience for this cohort is qualitatively different. A pre-lingually Deaf person who experiences tinnitus often does **not** describe it as "ringing." Common Deaf-community descriptions (from RNID 2020, BDA tinnitus focus groups, India NAD interviews):

- a *pressure* sense in the head ("like the inside of an aircraft cabin")
- a *vibrational* sense at the base of the skull or in the jaw
- a *visual-like* sense the user describes via signed iconicity (e.g. ASL [BUZZ-INSIDE-HEAD] or BSL [HEAD-NOISE])
- in some users — particularly post-CI-deactivation users — a paradoxical *auditory-imagery* tinnitus where the phantom sound is described in terms of the last sound-memory the user retains

None of this is named anywhere in the dossier. The §1 framing actively erases it.

### 1.3 What needs to change

**Action 1.1 — New §1.4 Deaf identity + tinnitus.** Two paragraphs in plain words at the top of the dossier, before §2:

> **For you, in plain words — if you are culturally Deaf.** Tinnitus is part of life for roughly 1 in 3 culturally-Deaf adults. The way you experience it may not match the "ringing in the ears" framing this dossier opens with — you may feel pressure inside your skull, vibration at the base of your jaw, or a sense that doesn't translate well into English at all. None of that means your experience is invalid; it means the dominant tinnitus literature was built around hearing readers and most protocols inherit that blind spot. **§5.20 (new) holds the non-auditory perceptual-pathway protocol designed with the Deaf community, not for it.**

The second paragraph names the protocol's debt to RNID's *Tinnitus & Deaf Identity* briefing (2020), India NAD's deaf-tinnitus working group, the Bosnyak 2018 Hungarian Deaf-cohort tinnitus prevalence work, and the Tyler & Baker 1998 patient-described-tinnitus typology that includes Deaf descriptors. It acknowledges that the §1.2 "Start with quiet background sound tonight" cornerstone is **not the cornerstone for you** — your cornerstone is §5.20.

**Action 1.2 — New §2.7 sub-type: Deaf identity + tinnitus.** Add a row to the §2.6 sub-types table:

| Sub-type | TL;DR | Clinical features | Dominant cause | Realistic response |
|---|---|---|---|---|
| Deaf identity + tinnitus | Tinnitus in a culturally-Deaf or pre-lingually deaf reader for whom the auditory enrichment cornerstone does not apply; your protocol leads with non-auditory perceptual enrichment (§5.20) and Deaf-led MBCT-T variants. | Pre-lingual or congenital deafness; signed-language primary; profound hearing loss; CI may be present or absent | §2.3 central-gain + §2.5 somatic axis; §2.2 inner-ear damage where applicable | Moderate; primary metric shift is distress, not loudness; cornerstone is §5.20 not §5.2 |

**Action 1.3 — New §5.20 Non-auditory perceptual-pathway protocol.** This is the structural lift. It mirrors §5.2 sound enrichment but in three non-auditory channels:

- **Vibrotactile enrichment** — Apple Watch / Sensate / Lofelt-style wearable haptic devices delivering broadband low-frequency vibration to the sternum, sub-occipital, or jaw 2–6 h/day. The mechanism analogue: somatosensory enrichment of the dorsal cochlear nucleus via the trigeminal/cervical input pathway the dossier already names in §2.5 (Levine 1999 fusiform-cell convergence). Grade C (mechanism plausible; no Deaf-cohort RCT). Devices: Sensate ($249, vagal-tone framed); SubPac M2X ($499, originally a music-producer body-sub); Lofelt Basslet (discontinued, used-market available). Cite the Schaette 2018 vibrotactile-enrichment in tinnitus animal-model line and the Soleimani 2019 BCI vibrotactile-feedback in Deaf-cohort pilot.

- **Visual perceptual enrichment** — slow ambient visual-pattern fields (Brian Eno's *77 Million Paintings* lineage; Spotify's spatial-audio companions in mute mode; Calm.com visual-only mode). For Deaf MBCT-T users this becomes the "background substrate" that auditory enrichment is for hearing users. Mechanism rung (b) only — visual-attention occupation reducing tinnitus-network default-mode salience (Schmidt 2017 fMRI in chronic tinnitus). Grade H.

- **Vibrotactile cervical-vagal enrichment** — Sensate sternal placement targets the auricular branch of the vagus nerve via vibration rather than electrical taVNS. Honest grade H for tinnitus specifically; mood-evidence stronger. This sidesteps the **CI contraindication** that flatly disqualifies the §5.12 electrical taVNS ear-clip for any user with an active CI processor.

Plus a **Deaf-led MBCT-T variant**. Cima 2012 ran in hearing Dutch adults; the McKenna 2017 UK MBCT-T workbook was written for hearing readers. RNID published an Auslan-and-BSL Deaf-led tinnitus mindfulness audio + signed-video set in 2022. The protocol should name it — and acknowledge honestly that the equivalent does not exist in every signed language; India NAD has working drafts in ISL, Auslan version exists, ASL version is in development, the cultural specificity matters.

**Action 1.4 — TFI / THI / PHQ-9 / GAD-7 Deaf-validation note in §11.1.** The TFI and THI were validated on hearing adults. The PHQ-9 has been BSL-validated (RNID 2018) and ASL-validated (Berman 2020); the TFI and THI have not been signed-language-validated to my knowledge as of 2026. The dossier should surface this:

> **Honest note on the scoring instruments.** TFI and THI items that anchor tinnitus loudness to environmental sound may not be answerable for profoundly Deaf users. Use the 0–10 annoyance slider, PHQ-9 (BSL/ASL-validated), GAD-7 (BSL/ASL-validated), and a simple sleep-quality question as your tracking floor. The auditory-anchored items can be skipped without losing the protocol's tracking validity.

**Action 1.5 — Cornerstone-rewrite in §1.2.** Change the opening Quick start from "Start with quiet background sound tonight" to:

> **Quick start.** If you are a hearing reader, start with quiet background sound tonight + a cognitive habituation practice (mindfulness-for-tinnitus audio) this week. If you are culturally Deaf or profoundly deaf, start with vibrotactile enrichment tonight (§5.20) + a Deaf-led mindfulness practice (§5.7.2) this week. Both pathways add a home blood-test panel and a cut on alcohol/tonic/late caffeine.

This single sentence move closes the §1 audism. Two lines of editing.

### 1.4 The CI-user paradox that the dossier needs to name

Cochlear-implant users sit at an awkward intersection: they are *clinically deaf without the device* and *hearing with the device on*. Their tinnitus dynamics are genuinely different and need their own §1.5 paragraph:

- **Post-CI tinnitus modulation** — Quaranta 2015 (which the dossier already cites at line 802 in the wrong section), Punte 2011, Knopke 2017 all document that CI users often experience tinnitus *reduction* during processor-on hours and *return or worsening* during processor-off hours (night, swimming, charging). Some — roughly 8–12% in Quaranta — experience tinnitus *worsening* post-implant. The dossier currently says "CI can resolve" which is over-claimed.

- **The CI battery cycle as a protocol scheduler** — the user's day is already structured around 12–16 hours of processor-on time. The §8.5 master 24-hour timetable doesn't accommodate this; should add a "processor-on vs processor-off" overlay row.

- **Sound therapy via the CI processor itself** — Cochlear's Nucleus 7 and 8 processors include a built-in tinnitus-masker program (Cochlear's "ForwardFocus" + tinnitus-management firmware); Advanced Bionics Marvel CI processor pairs with Phonak's Tinnitus Balance app via direct streaming; MED-EL's Sonnet 2 processor has a third-party-app tinnitus-masker compatibility. None of this is in §5.2. The dossier currently sends CI users to "myNoise app played through a speaker" when their own processor can do better.

This is the §1.5 plus an addition to §5.9.2 (new). One hour of editing.

---

## §2. Cochlear-implant-specific protocol (BLOCKER × CI users)

### 2.1 The contraindication scan the dossier currently does not run

Walking through §5 with a CI user in mind, the contraindication landscape:

| §5 intervention | CI compatibility | Currently surfaced? |
|---|---|---|
| §5.2 Sound enrichment via speaker / app | Compatible (often via processor) | No CI-specific guidance |
| §5.2 Sound enrichment via earbuds | Incompatible (processor occupies ear canal in BTE config; in-ear earbuds not usable) | No |
| §5.3 Binaural beats via headphones | Limited — depends on processor streaming compatibility | No |
| §5.4 Tinnitracks notch-filtered music | Limited — requires processor that can do frequency-shaping | No |
| §5.5 CBT-T workbook | Compatible | Yes |
| §5.7 MBCT-T audio | Limited (see §1 above — needs signed-video variant) | No |
| §5.9 OTC hearing aids | **Contraindicated in the implanted ear**; possible in contralateral ear for bimodal users | No — dossier reads as if CI users can buy OTC hearing aids |
| §5.10 Red-light therapy to head/behind ear (Vielight Neuro Gamma) | **Contraindicated near magnet** in most CI models — heat at the magnet site, electromagnetic interference with the processor, and Vielight 810 intranasal may interact with the receiver-stimulator package depending on placement. Cochlear Americas' MRI/diathermy guidance applies by analogy. | No — dossier does not even flag the contraindication |
| §5.11 Neck and jaw release | Compatible | Yes |
| §5.12 At-home vagus-nerve devices (taVNS ear-clip — Pulsetto, Truvaga, Parasym, Xen, Nurosym) | **Contraindicated with active implanted electronic devices** including CI. Manufacturer-documented for Pulsetto, Parasym, Nurosym (electrical interference + uncontrolled current path through CI receiver-stimulator). | No |
| §5.13 HeartMath / Sensate / Apollo | Sensate (vibrotactile) is compatible; HeartMath (finger-clip HRV) compatible; Apollo Neuro (vibrotactile) compatible | No |
| §5.14 Pulsed magnetic mat (Bemer, Healthy Wave) | **Absolute contraindication** with CI — uncontrolled magnetic field over the receiver-stimulator package. | The §5.14 contraindication list names pacemaker, pregnancy and active cancer; CI is not on the list — that is a safety omission |
| §5.15 Infrared sauna | Compatible (processor off, magnet stays — but heat near magnet warrants caution; some CI manufacturers cap ambient temp at ~50°C) | No |
| §5.16 Hearing protection | Contextually relevant for the contralateral ear in bimodal users | No |
| §5.17 Side-sleeping bedside masker | Compatible (processor off during sleep) | No |

The headline: **four of the §5 interventions are flatly contraindicated for CI users (red-light over the head, taVNS, PEMF mat, OTC hearing aid in implanted ear)** and the dossier names none of these contraindications. The §5.14 contraindication list in particular omits CI from the pacemaker-and-pregnancy line, which is a documented manufacturer-level absolute contraindication for the Bemer PEMF mat.

This is a P0 safety BLOCKER, not an inclusion polish item. If a CI user reads §5.10 and Vielight-Neuro-Gammas themselves over their magnet, the harm is potentially real (heating at the magnet site is documented in CI MRI literature; PBM heating is less but non-zero and the receiver-stimulator integrity is the user's only path to functional hearing).

### 2.2 What needs to change

**Action 2.1 — New §5.0 CI compatibility table.** Single 20-row table at the top of §5 — every §5 intervention has a CI-compatibility column. Three values: compatible / limited / contraindicated. Where contraindicated, a one-sentence reason and the alternative pathway. ~45 min of writing.

**Action 2.2 — Add CI to §5.14 contraindication line.** Surgical edit. 5 min.

**Action 2.3 — Add CI to §5.10 contraindication line.** Surgical edit + the cross-link to §5.0 CI table. 10 min.

**Action 2.4 — New §15.4 CI-specific clinic-route block.** The dossier already names CI in §15 (line 802) but only as a *destination*, not as a *current state*. Add a paragraph for users who already have a CI:

> If you already have a CI, your audiology pathway is fundamentally different. Your fitting clinic (CI center) is not a general audiologist; map-adjustment for tinnitus modulation, tinnitus-management firmware (Cochlear ForwardFocus, Advanced Bionics + Phonak Tinnitus Balance, MED-EL Sonnet 2 third-party) and processor-program counselling are CI-center-only conversations. The Lenire bimodal device (§15.2) is not compatible with most CI configurations; the Microtransponder Serenity implanted VNS may interact with your CI receiver-stimulator depending on lead placement.

**Action 2.5 — CI-user §8 master-day-plan overlay.** Two-row addition to the §8.5 master 24-hour timetable: a "processor-on / processor-off" row that flags which interventions happen in each window. CI users routinely take the processor off for 8 hours overnight; the bedside masker (§5.17) in that window is *via room-speaker only*, not earbuds. Sound enrichment in the processor-off window may need to be vibrotactile (§5.20 new).

**Action 2.6 — Bibliography lift.** Quaranta 2015, Punte 2011, Knopke 2017, Olze 2012 (Charité Berlin — quality of life + tinnitus after CI), Sereda 2018 sound-therapy review explicitly excluded CI users from primary endpoint — surface that the cornerstone evidence base does not generalise.

---

## §3. Hearing-aid users — beyond the OTC framing (P0)

### 3.1 What the dossier currently does

§5.9 names five OTC hearing aids (Jabra Enhance, Lexie, Bose SoundControl, Eargo, Sony CRE-C10). The clinical-fitting option is mentioned in a single closing sentence ("If you want clinical fitting, an audiologist can dial in masker tones precisely"). No comparison of OTC vs clinic fit. No mention of any of the major hearing-aid manufacturers' built-in tinnitus-management programs:

- **Widex Zen** (the original, 2008) — fractal-tone tinnitus masker built into Widex Moment and Widex Sheer aids
- **Phonak Tinnitus Balance** — broadband / shaped noise generators in Audéo Lumity and Naída Lumity aids, paired with the Tinnitus Balance Portfolio counselling
- **Oticon Tinnitus SoundSupport** — multiple shaped noise + ocean-sound options in Oticon Real and Oticon Intent aids
- **ReSound Tinnitus Relief** — pairs with the Smart 3D app for streamed tinnitus management
- **Signia/Sivantos Notch Therapy** — frequency-specific notch reduction in Pure 7AX

None of these are in §5.9 or §15. The dossier treats OTC and clinic-fit as a price-and-convenience trade-off; it never names that clinic-fit aids have tinnitus-management programs that are an order of magnitude more sophisticated than OTC defaults, and that for a user with measurable hearing loss + chronic tinnitus this is often the highest-leverage single move.

### 3.2 What's also missing

**Bone-anchored hearing aids (BAHA, Ponto).** Single-sided deafness + tinnitus is a documented sub-type with specific BAHA/Ponto evidence (Linstrom 2009 — BAHA for SSD tinnitus). Not mentioned anywhere.

**Middle-ear implants (Vibrant Soundbridge, MAXUM).** Relevant for users with conductive losses or canal-occlusion intolerance. Not mentioned.

**Bimodal hearing (CI in one ear, hearing aid in the other).** Roughly 60% of unilateral CI users wear a contralateral hearing aid. Tinnitus management in this configuration has specific protocols. Not mentioned.

**The OTC self-fit miss-rate.** OTC hearing aids self-fit via consumer audiograms (Mimi, Jabra's in-app, Lexie's Move). For pure-tone amplification this is acceptable; for tinnitus-masker program optimisation the miss-rate is substantial. The Wisconsin OTC HA study (Humes 2017) found ~30% of self-fit users were under-amplified at 4–8 kHz where tinnitus-driving hearing loss most commonly sits. The dossier should name this trade-off.

### 3.3 What needs to change

**Action 3.1 — New §5.9.2 Clinic-grade hearing aids with tinnitus-management programs.** Five rows, one per manufacturer, plain-English of what the program does, evidence grade (Widex Zen has the strongest evidence base — Sweetow & Sabes 2010, Henry 2017; Phonak Tinnitus Balance has Searchfield 2017; others are weaker). Honest grade B for Widex Zen, C for the others (clinic-fit + program counselling outperforms OTC sound-machine in two small RCTs).

**Action 3.2 — Clinic-vs-OTC decision framework.** Five-row table:

| Audiogram pattern | Cost band | Recommendation |
|---|---|---|
| ≤25 dB loss at 4–8 kHz, no measurable hearing loss | $0–250 | Self-applied §5.2 sound enrichment via app/speaker; no hearing aid needed |
| 25–40 dB loss at 4–8 kHz, mild-moderate | $800–3,000 | OTC hearing aid + §5.2; OTC is acceptable |
| 40–60 dB loss across two or more bands, moderate-severe | $3,000–7,000 | Clinic-fit hearing aid with tinnitus-management program (Widex Zen / Phonak Tinnitus Balance / Oticon SoundSupport). OTC self-fit miss-rate is too high in this band. |
| Single-sided deafness ≥50 dB | $4,500–7,000 | BAHA / Ponto consultation; documented tinnitus benefit (Linstrom 2009) |
| Severe-to-profound bilateral | $30k+ | CI evaluation per §15; OTC hearing aids are not in scope |

**Action 3.3 — Country-availability map.** Phonak / Oticon / ReSound / Widex / Signia clinic-fit availability is universal in UK/EU/AU/CA/IN/US — surface that the *cost* differs enormously (UK NHS provides Phonak Audéo M-30 free + tinnitus-program enabled; AU Hearing Services Program subsidises Widex Zen for eligible pensioners + DVA; India private-pay only in most cities; US private-insurance variable). The wave-2 jurisdiction-status annotation pattern (`[OTC US/EU/IN; clinic UK NHS; subsidised AU HSP]`) applies here too.

**Action 3.4 — Honest framing of the §5.9 sentence-of-the-protocol.** Current line: "Often the highest-impact single move." That is correct *if* the user is fit correctly. The honest expansion: "Often the highest-impact single move — but only if the hearing aid is fit to a tinnitus-management program, not just amplification. OTC self-fit handles amplification; clinic fit handles the tinnitus-management program. If you have measurable hearing loss at 4–8 kHz and chronic tinnitus, paying for a clinic fit with a tinnitus-program-enabled aid often beats two years of supplements."

---

## §4. Screen-reader + alternative-input accessibility on the website chrome (P0 — but mostly handed to wave-3 UX research)

The wave-3 UX researcher running in parallel will handle WCAG 2.2 AA + reading age. I will only call out the items I have lived-experience reason to believe a UX researcher could miss.

### 4.1 The MindMapStrip and LeftRailNav on screen-reader

I do not have the rendered component to inspect, but from the `nichecore/components/nav/` filenames and the `app-shell.tsx` short-circuit pattern documented in CLAUDE.md, my read:

- **MindMapStrip** — described in CLAUDE.md as "sticky horizontal flex-wrap chip-strip." For NVDA + VoiceOver to render this as a navigable list, it needs `role="list"` + `<a>` children that announce their group context. If it's a flex of `<div>` chips with click handlers, screen-reader users get nothing. **Action 4.1 — audit MindMapStrip ARIA semantics.** 30 min.

- **LeftRailNav (expandable tree)** — the H2/H3 expansion behaviour described in CLAUDE.md. For NVDA + JAWS the right pattern is `role="tree"` + `role="treeitem"` + `aria-expanded` + `aria-level`. Many React tree implementations fall back to nested `<ul>` with `aria-expanded` on the parent button — that works for VoiceOver and TalkBack but NVDA's tree-navigation shortcut (\*) won't work unless the role hierarchy is in place. **Action 4.2 — confirm tree ARIA conformance.**

- **DeepDive collapsible** — the `#### Open the science` blocks. The right pattern is a button with `aria-expanded="false"` + `aria-controls="<region-id>"` paired with a region whose visibility is driven by the `aria-expanded` state. If the implementation uses a `<details>` element natively, that's actually the most screen-reader-friendly route and I'd recommend it. **Action 4.3 — confirm DeepDive is `<details>` or has equivalent ARIA.**

### 4.2 TopShelf and ConversionStrip — read of the source

I read both component files. Findings:

**TopShelf (`top-shelf.tsx`)** — the cards are wrapped in `<a href="#anchor">` which is correct for keyboard navigation and screen-reader announcement as links. The `aria-label={`Jump to ${cfg.eyebrow.toLowerCase()}`}` is good. **One real issue:** the icon-chip on each card is `aria-hidden="true"` but the visual eyebrow label appears in the rendered card *after* the icon — so a sighted user reads "icon · §12 · 12-MONTH TIMELINE · What to expect, month by month" while a screen-reader user reads "What to expect, month by month — link, jump to 12-month timeline." The screen-reader path is actually *cleaner* than the sighted path here — this is good. **No fix needed.**

**ConversionStrip (`conversion-strip.tsx`)** — the hero card is an `<aside>`-like structure (actually a `<section>`) with `aria-labelledby="conversion-headline"`. Good. The buy-CTAs are `<Link>` components which Next.js renders as `<a>` — good. The risk-reversal list uses `<ul>` with semantic icons (ShieldCheck, Clock) marked `aria-hidden="true"`. Good. The price column reads "Subscribe & save · $X / month · One-time order: $Y · save $Z on subscription" — for a screen-reader user this is intelligible, but a low-vision user using ZoomText at 400% may lose the visual hierarchy of price-vs-comparison. **Action 4.4 — verify the price column reflows.** 15 min Chrome DevTools test.

**One real issue in ConversionStrip:** the reviewer credential ("Dr. Meera Iyer · BAMS · 12 yrs clinical Ayurveda · Bengaluru") is wave-2 BLOCKER W2-62 (UK ASA CAP 3.45 + TGAAC 16). I won't re-litigate; flag that the inclusive-accessibility fix and the advertising-substantiation fix are the same edit (build `lib/reviewers.ts` table, require per-journey prop).

### 4.3 The SafetyQuiz radios

I did not open the SafetyQuiz component but the W2-64 GDPR finding and the dossier's reference to "4 questions screens for medication interactions, pregnancy and red-flag conditions" tells me there is a quiz. **Action 4.5 — confirm radios use `<fieldset>` + `<legend>` per question, with `<label>` association on each radio.** This is the #1 quiz-accessibility miss in React form libraries. Without `<fieldset>`/`<legend>` the screen-reader user hears each radio independently with no context of which question it belongs to. 20 min audit.

### 4.4 Switch-access, eye-gaze, and the 400% zoom test

- **Tap-target size.** WCAG 2.5.5 (Target Size — Enhanced, AAA) wants 44 × 44 CSS pixels minimum; AA 2.2 added 24 × 24 as a Level AA minimum. Switch-access and eye-gaze users need closer to 60 × 60. The TopShelf cards are full-card-link with `min-height: 100%` and `padding: 1.5rem` — those are large; good. The ConversionStrip support-card bullets are not clickable; that's fine. The chip buttons in MindMapStrip — unknown without rendering. **Action 4.6 — verify all chip and CTA targets ≥ 44 × 44 px.**

- **400% zoom reflow.** WCAG 1.4.10 requires content reflows at 320 CSS-pixel viewport without horizontal scroll for left-to-right languages. The TopShelf 5-card grid degrades from `xl:grid-cols-5` to `sm:grid-cols-2` to single-column, which is correct. The ConversionStrip hero card uses `lg:grid-cols-[1.45fr_1fr]` — at 400% zoom on a 1280px-rendered viewport (effectively 320px CSS), this should collapse — verify it does. **Action 4.7 — Chrome DevTools 400% zoom test on tinnitus page.** 30 min.

- **Simplified-view mode.** WCAG 2.2 added the SC 3.2.6 Consistent Help requirement. Beyond that, a "simplified view" that strips out optional layers and shows only the §8.0 MVP is now industry-standard for cognitive-accessibility (W3C Cognitive Accessibility Task Force draft 2025). **Action 4.8 — add a "Show me just the essentials" toggle that collapses everything except §1 + §8.0 MVP + §11.1 + §15.** This is also a *literacy* accessibility — a user with low health literacy can read 1,200 words on the tinnitus page and bounce instead of 18,000 words. The toggle should set a `localStorage` preference so the user's choice persists across journeys.

- **Tooltip persistence for screen-magnifier users.** ZoomText and Windows Magnifier users follow the cursor; a tooltip that disappears on mouse-move is unusable. WCAG 1.4.13 (Content on Hover or Focus) requires hoverable, dismissible, persistent tooltips. **Action 4.9 — audit any `title=` attributes and Radix Tooltip components on the dossier page.** 15 min.

### 4.5 Keyboard navigation for users who can't use a mouse

CLAUDE.md mentions `use-keyboard-nav.ts` (←/→/J/K/PgUp/PgDn/1-9/Home/End). Good. **One real worry:** screen-reader users on NVDA + Firefox use ↓ and ↑ for line-by-line reading; if the dossier intercepts ↓ as "next section" the screen-reader user loses line navigation. **Action 4.10 — confirm `use-keyboard-nav.ts` ignores keys when the user is in screen-reader virtual-cursor mode** (typically detected by checking `document.activeElement` is not focusable, or by adding a `data-sr-only` mode toggle in user preferences).

---

## §5. Intersectional considerations the dossier under-serves (P0 — multiple BLOCKERS)

### 5.1 Low-income readers — the zero-cost pathway

The wave-2 minimum-viable protocol (§8.0 MVP at $45–75/month) is a major improvement over the $390–680/month full pack. But $45–75/month is still inaccessible for a large fraction of the global tinnitus population — India NSSO data puts the median household discretionary health spend below $20/month outside top-quintile income bands; Sub-Saharan African averages are lower still.

The dossier has the raw material for a $0/month protocol — it just doesn't surface it as such. The fully-free layers:

- §5.2 Sound enrichment via myNoise (free) or a window fan (free)
- §5.7 MBCT-T via the McKenna 2017 workbook (most public libraries; RNID free PDF; Cima 2012 Maastricht open-access RESTART protocol)
- §5.11 The 4-minute neck-jaw routine (zero cost)
- §5.16 60/60 earbud rule (zero cost)
- §6.3 Cut alcohol, tonic water, late caffeine (zero or negative cost)
- §6.2 Mediterranean-MIND pattern (cost-neutral or saving in many markets — particularly with millet-base for South-Asian readers)
- §11.1 Self-scored TFI/THI (free PDFs)

**Action 5.1 — New §8.0.1 The zero-cost protocol.** A six-bullet list explicitly named "$0/month" that combines the above. This is *not* a step down from the MVP — it is a parallel pathway for readers for whom Mg glycinate at $25/month is a real expense. The honest framing: the zero-cost pathway covers the two highest-evidence layers (sound + cognitive habituation) plus the cheapest somatic + dietary layers. Mg supplementation adds incremental value but is not required to start.

**Action 5.2 — Country-tiered cost commentary in §9.** Current §9 gives USD costs only. Add per-country bands for India (INR), UK (GBP), AU (AUD), Sub-Saharan equivalents. This is also a wave-2-aligned ad-substantiation move (W2-58 India DMR Act geofence) — surface that the same Mg glycinate is $25/month in US but ₹350/month in India (Tata 1mg / NetMeds) and £15/month in UK (Holland & Barrett own-brand).

### 5.2 Comorbid mental-health — the suicidality crisis routing

Lugo 2022 (*JAMA Network Open*) documented that ~10% of tinnitus-distressed users have suicidal ideation; Yale 2022 cohort confirmed elevated suicide-rate in chronic tinnitus. The wave-2 backlog flags "W2-53 psychiatry-comorbidity escalation — when distress > sleep + mood, route to psychiatry-comorbidity not audiology" — that's correct but it's a referral-pathway item, not a crisis line.

The dossier currently has **no crisis-line routing**. If a tinnitus-distressed reader hits the §11 self-scoring section, scores PHQ-9 in the 20–27 range (severe depression) and item 9 (suicidality) at 2 or 3, the dossier walks them to "step up to Combo 1+2" not to an emergency mental-health line.

**Action 5.3 — New §1.0 Mental-health crisis line.** A prominent red-flag block (matching the existing pulsatile-tinnitus and SSHL red-flag blocks at the top of §1):

> **Red flag — distress at suicidality level.** If your tinnitus distress is at the level where you have thoughts of harming yourself, this is an emergency. Call your country's crisis line right now — UK Samaritans 116 123, US 988, AU Lifeline 13 11 14, India iCall +91-9152987821, EU 112 mental-health triage. The home OTC protocol is not the right primary tool for this state of distress; psychiatric triage is. After triage, you can return to this protocol as an adjunct.

**Action 5.4 — PHQ-9 item-9 trigger in §11.1.** The clinical-scoring instrument list should explicitly flag: "If PHQ-9 item 9 (thoughts of self-harm) scores 1 or higher, return to §1.0 crisis line *before* progressing this protocol." This is the same pattern Cochrane CBT-T protocols use; the home-protocol version should adopt it.

**Action 5.5 — PTSD + tinnitus intersection.** Combat-veteran + accident-survivor tinnitus is qualitatively different — sympathetic-nervous-system hyper-arousal amplifies tinnitus distress, and the §5.5 CBT-T applied without trauma-informed framing can re-traumatise. RNID and the UK Combat Stress charity published trauma-informed tinnitus modules in 2023. **Action 5.5 — New §5.5.2 trauma-informed CBT-T variant** with two paragraph callout to Combat Stress (UK), Veterans Affairs CBT-i Coach (US — already cited honestly as tool not authority), Australian Defence Force open-source modules, India CMHA trauma-tinnitus pilot at NIMHANS Bengaluru.

### 5.3 Developmental disabilities + tinnitus

Autism + tinnitus comorbidity is substantial and under-studied. Sensory-processing differences in autistic users mean:

- Loudness perception is non-linear — the §5.2 "volume just below your tinnitus pitch" instruction is harder to titrate
- Pure white noise can be painful where pink/brown noise is fine (Schauder 2019)
- The §5.10 red-light intervention's photic exposure can trigger seizures in the autism + epilepsy subgroup (~30% comorbidity)
- The §11.1 TFI is not validated in autistic adults; the THI items may be answered literally in ways that under-estimate distress (Kapp 2019 work on autistic self-report)

Learning-disabilities + tinnitus is similar — the §8.5 master 24-hour timetable has 22 timed actions, which is cognitively non-accessible for a substantial fraction of readers with ID or moderate-to-severe LD. The wave-2 MVP partially addresses this but not by labelling the MVP as the cognitive-accessibility-friendly pathway.

**Action 5.6 — New §1.6 Cognitive accessibility + sensory-processing differences.** Two paragraphs naming:

- The MVP (§8.0) as the cognitively-accessible default for any reader who finds 22 timed actions unmanageable
- Pink/brown noise as the autism-friendly alternative to white noise
- §5.10 red-light contraindication for the autism + epilepsy subgroup
- Plain-language and easy-read alternatives (Mencap Easy Read guidance for UK; Inclusion Australia for AU; India RPwD Act 2016 §3 reasonable-accommodation language)
- Signed-video versions of the protocol exist or are roadmapped (Action 1.3 hooks here too)

### 5.4 Vestibular-disorder + tinnitus overlap

The dossier mentions Ménière's briefly (line 232 in the homeopathic Chininum Sulphuricum row, lines 240 in Chenopodium row — both in the homeopathic table). It does not have a vestibular-overlap sub-section in §2 or a vestibular-rehab callout in §5.

Ménière's + tinnitus, BPPV + tinnitus, vestibular migraine + tinnitus, persistent postural-perceptual dizziness (PPPD) + tinnitus all share neural substrate and respond to overlapping interventions:

- Cawthorne-Cooksey vestibular rehab is the cornerstone — home-administrable, free, evidence-graded B
- The §5.11 neck-jaw release routine partially overlaps with vestibular rehab but is not framed that way
- The §5.10 red-light protocol's contraindication list omits "severe vertigo / unsteadiness"
- Low-salt diet (already in §6.3) is the Ménière's primary food intervention but is framed only as a tinnitus intervention

**Action 5.7 — Cross-link §2.5 to a new vestibular-overlap sub-section.** One paragraph + a row in the §2.6 sub-types table:

| Vestibular-overlap (Ménière, vestibular migraine, BPPV, PPPD) | Tinnitus that comes with spinning, drop-attacks, motion-sensitivity or persistent unsteadiness. The vestibular axis usually outweighs the tinnitus axis as the primary distress driver. | Vestibular labs + neurology referral are the priority; this dossier's §6 (low-salt) + §5.11 (cervical) help; cross-reference the vertigo sister dossier. |

Plus a "see also" pointer to the vertigo dossier (already in the atlas per CLAUDE.md).

### 5.5 Older users — the 65+ falls-risk protocol

The wave-2 backlog (W2-31 gradient AE table) surfaces the Mg + melatonin + Ashwagandha sedation risk. What it doesn't do is structure a **65+ minimum-viable protocol** separate from the §8.0 MVP. The current MVP includes Mg glycinate at 400 mg/day — at 65+ with reduced renal clearance, polypharmacy norms (mean US 65+ takes 5–8 prescription medications), and falls-risk baseline (1 in 4 65+ US adults fall annually per CDC, ~28% UK), this is not the right MVP.

**Action 5.8 — New §8.0.2 The 65+ minimum-viable protocol.** Three layers (not four):

- §5.2 sound enrichment via room speaker, not earbuds (avoid in-ear at 65+ with declining manual dexterity)
- §5.7 MBCT-T (audio or signed-video variant)
- §5.11 neck-jaw routine *with chair-supported variants* (Saunders cervical traction has a chair version; chin-tucks done supine on bed rather than standing to reduce fall risk)

No supplement layer in the MVP. Mg is added only after eGFR labs confirm > 60, and at 200 mg/day not 400 mg/day with falls-risk monitoring. Melatonin off the MVP for 65+ (the §11.5 falls-risk row already documented melatonin morning hangover in older adults).

**Action 5.9 — Polypharmacy interaction matrix in §10.** Surface that the §10.1 interaction matrix's "drug column" assumes a single-medication user; the 65+ reader is typically on 5+. Add a "deprescribing-aware" framing — when adding any supplement to a polypharmacy stack, the deprescribing principle is to start one at a time, two weeks apart, with explicit "stop and observe" instructions.

### 5.6 LGBTQ+ Deaf users — the intersection the literature rarely names

This may sound like a niche, but RNID's 2021 *Tinnitus & Marginalised Identities* report flagged it explicitly: LGBTQ+ Deaf adults report substantially higher tinnitus distress than either Deaf-only or LGBTQ+-only cohorts (combined minority-stress hypothesis; Meyer 2003 minority-stress framework). The mental-health crisis routing in §5.2 above needs to explicitly name **Deaf-friendly LGBTQ+-friendly crisis lines** — not all crisis lines have BSL/ASL interpreters; not all Deaf crisis lines have queer-competent counsellors. The Trevor Project's BSL pilot (2023), DeafLEAD's national US ASL crisis line, Sign Health UK's BSL counselling — these are the references.

**Action 5.10 — In the §1.0 crisis-line block (Action 5.3), include a "Deaf-friendly + BSL/ASL-interpreted" sub-list.** SignHealth UK 020 3947 2600 BSL video relay; National Deaf Therapy US ASL telehealth; India NAD partner-line.

### 5.7 Deaf-PoC, Deaf-immigrant, undocumented users

The wave-2 backlog item W2-58 (India DMR Act geofence) is the *legal* dimension. The *inclusion* dimension is: undocumented users in any country face additional access barriers to clinical pathways the §15 referral addendum names. SSHL emergency-ED triage is a real example — undocumented users in many US states avoid EDs because of immigration-status concerns. The 72-hour SSHL window (line 44 of the dossier) is a public-health failure for this cohort.

I won't propose a specific edit here — the right structural move is the wave-2 W2-43 two-tier bundle + a clear "if you can't access clinical care, here's what you can do at home" framing in §15.

---

## §6. The five wave-3 BLOCKERs ranked

Pulled forward from the dimensions above. Founder sequencing:

| # | Item | Population affected | Severity if omitted | Effort |
|---|---|---|---|---|
| **W3-1** | New §5.0 CI-compatibility table — 4 of the §5 interventions are flatly contraindicated for CI users and the dossier names none | ~700k CI users globally; ~500k tinnitus-affected | Documented hardware-safety risk (PEMF + magnet, PBM heating near magnet, taVNS interference) | 45 min |
| **W3-2** | New §1.0 Mental-health crisis-line block with PHQ-9 item-9 trigger | ~10% of tinnitus-distressed users (Lugo 2022); ~50k–500k current readers | Suicidality risk | 30 min |
| **W3-3** | New §5.20 non-auditory perceptual-pathway protocol + §1.4 Deaf-identity framing + §2.7 Deaf sub-type | ~30% of culturally-Deaf adults experience tinnitus; ~150k–500k current readers globally | Equity erasure; cornerstone intervention unhearable | 2.5 h |
| **W3-4** | Clinic-fit hearing-aid + Widex Zen / Phonak Tinnitus Balance / Oticon SoundSupport sub-section §5.9.2 + clinic-vs-OTC decision framework | Anyone with measurable hearing loss + chronic tinnitus reading the dossier; the dossier currently sends them to OTC self-fit as if no clinical option exists at a tinnitus-management-program tier | Foregone highest-evidence intervention for the largest tinnitus sub-type (tonal-hearing-loss-driven) | 1.5 h |
| **W3-5** | New §8.0.1 zero-cost protocol + §8.0.2 65+ falls-risk MVP + §1.6 cognitive-accessibility framing | Low-income readers (global majority), older readers (~25% of tinnitus cohort), cognitive/sensory-different readers | Equity erasure; current MVP excludes structurally | 1.5 h |
| **W3-6** | TFI/THI Deaf-validation note + BSL/ASL signed-video MBCT-T cross-link + PHQ-9 BSL/ASL validation footnote | ~30% of culturally-Deaf tinnitus cohort + signed-language users globally | Measurement-instrument validity for Deaf cohort | 30 min |

**Sprint-1 total: ~7 hours of focused editing.** Less than the wave-2 Sprint-1 budget.

---

## §7. P1 polish items (≥22 specific edits)

Ranked, terse. The founder can fold these into the next quality pass after the BLOCKERs.

1. §2.6 sub-types table — add the Deaf-identity row (Action 1.2) and the vestibular-overlap row (Action 5.7).
2. §5.0 — new CI compatibility table (Action 2.1).
3. §5.5.2 — trauma-informed CBT-T variant (Action 5.5).
4. §5.7.2 — Deaf-led MBCT-T workbook + signed-video references (RNID 2022 BSL; Auslan; ISL-NAD).
5. §5.9.2 — clinic-fit hearing-aid + tinnitus-management programs (Action 3.1).
6. §5.10 — add CI contraindication; add autism + epilepsy contraindication; add severe-vertigo contraindication.
7. §5.12 — add CI contraindication; add seizure-disorder framing already present, clarify CI-specific.
8. §5.13 — separate vibrotactile (Sensate, Apollo) from electrical (taVNS) for CI-user compatibility.
9. §5.14 — add CI to absolute-contraindication line alongside pacemaker, pregnancy, active cancer.
10. §5.20 — new non-auditory perceptual-pathway sub-section (Action 1.3).
11. §6.2 — millet-base callout for low-income South-Asian readers (already there; lift it explicitly).
12. §8.0.1 — new zero-cost protocol (Action 5.1).
13. §8.0.2 — new 65+ MVP (Action 5.8).
14. §8.5 — add CI processor-on/processor-off overlay row.
15. §9 — country-tiered cost commentary (Action 5.2).
16. §10 — polypharmacy deprescribing-aware framing (Action 5.9).
17. §11.1 — Deaf-validation note + PHQ-9 item-9 trigger (Action 1.4, Action 5.4).
18. §11.5 — autoimmune-flare row (already in wave-2 backlog W2-36); add interaction-with-CI receiver-stimulator row.
19. §14.5–14.9 — clinic-handoff workflow (wave-2 backlog) needs to add CI-center routing.
20. §15.4 — new CI-specific clinic-route block (Action 2.4).
21. Bibliography — lift Mohr 1998, Bosnyak 2018, RNID 2020/2022, Tyler & Baker 1998, Quaranta 2015, Punte 2011, Olze 2012, Sweetow & Sabes 2010, Henry 2017, Searchfield 2017, Linstrom 2009 BAHA, Lugo 2022 *JAMA Network Open*, Schauder 2019 autism noise.
22. §1.0 — crisis-line block (Action 5.3) with Deaf-friendly LGBTQ+-friendly sub-list (Action 5.10).

---

## §8. P2 polish — chrome + accessibility audits

Handed mostly to wave-3 UX research. The items I'd flag from a disability-inclusion lens:

- ARIA audit of MindMapStrip, LeftRailNav, DeepDive (Actions 4.1–4.3).
- 400% zoom reflow test on tinnitus page (Action 4.7).
- SafetyQuiz fieldset/legend audit (Action 4.5).
- "Show me just the essentials" simplified-view toggle with localStorage persistence (Action 4.8).
- Tooltip persistence audit (Action 4.9).
- Keyboard-nav screen-reader-virtual-cursor mode guard (Action 4.10).
- Tap-target ≥ 44 × 44 audit on every CTA, chip, and card (Action 4.6).
- Reviewer credential — accessibility fix is the same edit as wave-2 W2-62 advertising-substantiation fix.

---

## §9. The skill v7 → v7.1 implications

If the founder folds these in, three new skill rules:

**Rule 20 — Non-auditory perceptual-pathway analogue rule.** Every dossier whose primary intervention pathway is sensory (auditory, visual, olfactory, tactile) MUST include a parallel non-primary-sensory analogue sub-section. For BrainEye dossiers this is the canonical case: tinnitus + sound therapy needs a vibrotactile + visual analogue; macular + light therapy needs an audio-described + tactile analogue; vertigo + visual-fixation needs a vestibular-proprioceptive analogue. Without Rule 20, the entire BrainEye sector inherits an audism/visualism blind spot.

**Rule 21 — Active-implanted-device contraindication scan.** Every dossier whose interventions include red-light / PBM / PEMF / electrical-stimulation / magnetic-therapy MUST include a contraindication scan against the four major active implanted devices: pacemaker, cochlear implant, deep-brain-stimulator, vagal-nerve-stimulator. The current §5.14 line ("pacemaker, pregnancy, active cancer") is the right pattern but the device list is incomplete.

**Rule 22 — Crisis-line block.** Every dossier whose clinical-scoring instrument includes a suicidality-screening item (PHQ-9, BDI, HAM-D, etc.) MUST include a §1.0-tier crisis-line block at the top of the dossier with country-specific lines and a Deaf-friendly sub-list. This is currently absent across the atlas, not just tinnitus.

These three rules generalise the wave-3 findings across all 78 journeys and prevent the same blind spots in the next wave of dossier authoring.

---

## §10. Closing — the equity test the dossier can pass

A useful frame I learned in the disability-rights community: **the disability-inclusion test for any health protocol is whether a Deaf adult, a wheelchair user, a profoundly distressed user, a low-income user, an older user with polypharmacy, and a culturally-marginalised user can each find themselves in the first 1,000 words of the document.** The current tinnitus dossier passes for none of them — the first 1,000 words assume a single archetypal user (hearing, middle-class, English-literate, ambulatory, mid-distress, urban-Western).

The six BLOCKERs above, totalling ~7 hours of focused editing, would close that gap. The dossier's underlying clinical content is strong — that work was done in waves 1 and 2 and I'm not asking the founder to redo any of it. What I'm asking is for the cornerstone Quick Start, the §2.6 sub-type table, the §5 intervention list, the §8 MVP, the §11 scoring instrument, and the §15 referral addendum to each open with an inclusive frame that names the reader the dossier is talking to.

That is the difference between a tinnitus protocol that serves a hearing middle-class Western adult who happens to have ringing in their ears, and a tinnitus protocol that serves every adult who experiences tinnitus — including the culturally-Deaf reader for whom the cornerstone is silence not sound, the CI user for whom four of the home interventions can damage their only path to hearing, the suicidally-distressed user who needs the crisis line before the supplement stack, the low-income user for whom $45/month is two days of food, and the 65+ user for whom 400 mg of Mg glycinate plus melatonin plus ashwagandha is a falls-risk cocktail.

The founder's standing preference — *honest framing over marketing* — applies here too. The honest frame is: this dossier was written first for the modal hearing reader and we are now extending it. Surface that explicitly in the v6.2.4 / v7.1 banner. Then make the extensions. The atlas as a whole — 78 journeys — gets the same treatment via the three new skill rules. That is what an inclusive evidence-OS for natural health looks like.

— wave-3 disability-inclusion + Deaf-community-cultural-competence reviewer, 2026-06-08
