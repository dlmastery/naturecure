# NicheCore Mock UX Report — Blueprint for Journey-Page Redesign

Source mocks (all in `C:\Users\evija\Downloads\NatureNicheCure1\`):
- `Vitiligo Journey.html` — 13 slides, product walkthrough (the system at rest).
- `Customer Journey.html` — 15 slides, Anya's 90-day lived experience.
- `deck-stage.js` — the slide controller (web component `<deck-stage>`).
- `uploads/*.md` — 13 protocol/strategy notes (catalogued in §9).

The two decks teach the same brand, from two angles. The Vitiligo deck is the **product surface** (what the page shows). The Customer Journey deck is the **emotional clock** (what the user feels at minute 0, minute 47, day 23, day 90). Both must shape the redesign.

---

## 1. Inventory

### Deck A — `Vitiligo Journey.html` (the product walkthrough)

| # | data-label | One-sentence purpose |
|---|---|---|
| 01 | Cover | Wordmark + "vitiligo journey, *without the snake oil*" + four-pillar bedrock (Evidence first / Natural protocols / Recurring care / Honest boundaries). |
| 02 | Entry hook | The homepage is a **need catalog**, not a medical taxonomy — 6 need-cards; "Vitiligo / Skin & pigmentation" is the selected one. |
| 03 | Hub trust | Above-the-fold of an ailment hub: breadcrumb, ailment title, "*Refresh date / source count / no cure claims*" badges, primary+secondary CTAs, right-rail "hypothesis" card listing 5 mechanism layers with grade chips. |
| 04 | Evidence feed | Living RSS-style feed of 4 graded findings (B/C/H/T) with date, journal, claim, source line; forest band restating the **Update rule**. |
| 05 | Mechanism | Center planet (radial-gradient circle = "Melanocyte stress loop") with 4 dotted orbits + 4 satellite nodes, paired with a numbered 5-row mechanism list and an italic *Protocol output* callout. |
| 06 | Safety quiz | A 6-row Q&A panel (each row = question + sub-note + state chip "answer / review / noted") with a 2-card right rail: "Why this matters" + "Escalation path". |
| 07 | Regime recommendation | The 4-layer protocol shown as 4 numbered rows (L1–L4) with grade chips, plus right column = forest "Support goal" card + cream "Honest framing" card with a terracotta NOT. |
| 08 | Commerce | "$148 / 30 days" hero + 4-bottle product grid + bottom 4-cell strip (Quality / Verification / Sourcing / Cadence). |
| 09 | Mobile companion | Big serif headline, italic spoken-prompt quote, 3 stats; pixel-accurate iPhone screen with 4 dose items, refill window, "Day 12 of 90" progress bar. |
| 10 | AI guru honesty | 4-numbered "principles" list (No fake certainty / Mechanism in plain language / Clinician boundary / Routes to expert) + a working chat panel where the bot *refuses* to promise repigmentation. |
| 11 | Expert review | Dark ink card with "Certified Natural Healing" wax-seal + price tag "$89 / chart"; right column = 4 deliverables D1–D4 (Diet chart / Herb timing / Stress & sleep / Refill review). |
| 12 | Flywheel | A 6-node circle SVG ("Evidence hub → Fit quiz → Regime pack → Mobile routine → Refill loop → Expert review") with "RECURRING / *revenue*" at the center, mirrored as a numbered 6-row list with descriptions. |
| 13 | Closing | Dark-ink slide: "Not a chatbot. Not a blog. *The evidence OS* for natural health." + 4 pillar tokens + disclaimer. |

### Deck B — `Customer Journey.html` (Anya, 34 — 90-day experience)

| # | data-label | One-sentence purpose |
|---|---|---|
| 01 | Cover · Anya | Split cover: left = title "*told by Anya*" + 4-cell persona meta (Persona / Condition / Window / Outcome); right = forest band with circular portrait ring + 4-word strip (Trust earned / Adherence earned / Honesty as conversion / Refill shipped). |
| 02 | Day 0 · 23:47 · Doomscroll | Left = giant terracotta quote-mark + pull "*Same as last week. Same as last year.*"; right = dark phone mock scrolling Sponsored / Reddit / TikTok / YouTube spam — the emotional zero state. |
| 03 | Day 1 · 07:14 · Discovery | Browser-window mock with 4 search results (3 spammy, 1 ours highlighted in ochre) + side rail of 4 reasons ("Why this snippet / Specificity over aspiration", "Trust signal / Last refresh: 2 days"). |
| 04 | Day 1 · 07:18 · Hub | Page hub: breadcrumb, *"Support the **terrain**. We don't promise a cure."*, italic humility quote, 3-cell meta (Last refresh / Sources tracked / Update cadence), right-rail "What changed this fortnight" + feeling-quote callout. |
| 05 | Day 1 · 07:22 · Evidence | "A Bloomberg terminal *for her condition.*" — 4 graded feed rows (B/C/T/H) + the forest Update-rule band. |
| 06 | Day 1 · 07:31 · Mechanism | Twin diagram: SVG of melanocyte core with 4 orbital nodes (oxidative / immune / gut–skin / stress) + 4 mechanism cards on the right, each row = "01 → title → desc → product tag" (Antioxidant primer / Polyphenol shield / Gut balance / Stress calm). |
| 07 | Day 1 · 07:42 · Quiz | Quiz panel "Step 06 of 08" with progress bar, 5 radio options (one selected = Levothyroxine), and a terracotta safety-flag callout "Routed for pharmacist review · *No upcharge.*" |
| 08 | Day 1 · 07:48 · Protocol | The four layers as a 4-column grid (Layer 01–04), each card has: ordinal, title, why, grade row (B/B/C/C), compound list under dashed rule; bottom forest bar with closing italic. |
| 09 | Day 1 · 07:55 · Purchase | Left = pack-mockup of 4 bottles labeled "L01–L04" + 3-cell insert (Refresh date / Refill in / COA); right = paper receipt with line items, **$68** total, italic "*The receipt does not say miracle*" honesty quote. |
| 10 | Day 4 · 09:02 · Unboxing | Kraft-cardboard box with circular forest stamp + simulated QR; right = pull quote "Bottles labeled by *layer*, not by marketing name" + handwritten note insert. |
| 11 | Day 4 · 09:04 · App | iPhone with greeting, 7-pip streak bar, "Today's protocol 4/4" dose card (2 done / 2 pending with times), forest refill card showing 86 days; right side: 3-stat grid + headline "*The app earns the year.*" |
| 12 | Day 11 · 18:30 · Honesty | Chat panel with NicheCore guru avatar; user asks "Will this repigment my patches?", bot answers "*I cannot promise repigmentation*" with citation footer; right side states *"The refusal is the conversion."* |
| 13 | Day 23 · Expert review | Left side pulls + "$49 chart review + $29/mo expert tier" premium card (gold border); right = expert chart with circular "Certified Natural Healing — Verified" seal, 4 sec cards (Observation / Adjustments / External referral / Re-review) + 3-row timeline. |
| 14 | Day 90 · Refill morning | Loop closes: left pull "*the story is no longer about vitiligo*"; right = forest scoreboard card with 6 stats (Adherence 93% / Journal entries 12 / Expert revisions 1 / Referrals 2 / Refill #2 / LTV $214) and an italic ochre journal quote. |
| 15 | Closing | Night-ink slide "One customer. One category. *Ninety days.*" + 4-cell tally + small disclaimer. |

---

## 2. Recurring visual vocabulary

These show up so often they are effectively the design system. Catalogue them by name we will reuse in the React redesign.

| Token / Pattern | Spec |
|---|---|
| **Cream paper** | `--paper #F5F1EA` (page), `--paper-2 #EFE9DD` (side panels), `--paper-3 #E8E0CE` (deeper). White (`#fff`) is reserved for "interface" surfaces (cards, hub mock, receipt). |
| **Ink set** | `--ink #1A1A1A`, `--ink-2 #2C2C2C` body, `--muted #6B6356` meta. |
| **Forest** | `--forest #1F3A2E` (brand voice — manifesto bands, italic emphasis), `--forest-2 #2D5A3D`. Used for `<em>` words in serif headings. |
| **Ochre / ochre-deep** | `--ochre #C9A961` (highlights, seals), `--ochre-deep #A8884A` (mono eyebrows, bullets). |
| **Terracotta** | `--terracotta #A0411F` — used **only** for safety flags, H grade, doomscroll quote-mark, and the word "*not*" in honest-framing copy. Never decorative. |
| **Rule lines** | Hairlines `--rule #D9D0BF` between rows; 1-px borders on every card. No drop shadows except phone mocks. |
| **Fraunces… actually Instrument Serif** | `Instrument Serif` for every headline, every italic emphasis, every "humble" quote. `letter-spacing: -0.02em` on large titles. Italic version is the brand voice. |
| **Mono eyebrows (JetBrains Mono)** | Used for all labels, eyebrows, timestamps, breadcrumbs, "Step 06 of 08", "01 / 13", grade chips. Always `letter-spacing: 0.16–0.22em; text-transform: uppercase;`. Size 11–18px depending on context. |
| **`01 / 02 / 03` numerals** | Two-digit padded mono ordinals appear everywhere — layers, mechanism rows, principles, flywheel nodes, pillars, slide step. Always ochre-deep or paper-on-forest. |
| **04-pillar foundation row** | Bottom-of-slide 4-column grid of `n / l / d` (ordinal / label / description). Used on the cover, the closing, the scoreboard, the foundation-strip. |
| **Grade chips A/B/C/T/H** | Tiny mono squares: A=deep forest, B=mid green, C=ochre (dark text), T=brown, H=terracotta. Always visible next to any claim. There is also an X grade alluded to in the legend. |
| **Source-count strip** | Forest band with mono ochre key + serif italic body — restates the "Update rule" or the "no-cure" stance. Acts as a brand seal between section blocks. |
| **Hairline rules + dashed dividers** | 1-px solid `--rule` for section dividers; 1-px **dashed** `--rule` is used inside cards to separate the "compounds" list from the "why" text. |
| **Wax-seal circle** | 100–140px circle stamped on dark ink cards or expert chart cards, ochre border, mono uppercase content ("Certified / Natural / Healing / — / Verified"). Brand trust mark. |
| **Phone mock chrome** | Always 320–480px, `#1a1a1a` body, 40–50px corner radius, real notch, real status row at top. Paper background screen on app slides; dark `#0b0b0b` screen on doomscroll. |
| **Forest manifesto band** | Full-width `padding: 22px 36px` forest block, mono ochre eyebrow + serif body. Used to make a single claim feel like brand law. |
| **Pastel/cream card grid (`.need-card`, `.layer`, `.mech-card`)** | White cards on cream paper, 1-px rule border, 26–30px padding. The "active/selected" state inverts to forest-with-paper-text. |
| **Mechanism→action 3-column row** | `[ordinal | name + desc | tag]` grid — the most reusable row in the system. Repeats in mechanism cards, deliverables, flywheel list, principles, fly-items. |
| **Italic humility quote** | `border-left: 2px solid var(--ochre)` (or terracotta when emotional), 28px Instrument Serif italic, used to expose the human voice ("For the first time, an adult is talking to me"). |
| **Numbered foundation pillars** | 4-up grid that lives on covers and closings: ordinal eyebrow + serif title + muted description. |
| **Topbar / Footer** | Every interior slide has the same two lines: brand dot + step ordinal on top, emotional cue + chapter mono on bottom. This is the chrome that should wrap every journey page. |

---

## 3. Layout grammar

Every interior slide follows the same skeleton:

```
┌────────────────────────────────────────────────────┐
│ topbar:  ● BRAND                       NN / NN     │
│                                                    │
│ chapter eyebrow:  NN.  ────  CHAPTER LABEL         │
│                                                    │
│ serif headline (with italic forest emphasis word)  │
│                                                    │
│ ┌──────────── content stage ─────────────────┐     │
│ │  usually a 2-col split (1.1fr : 1fr)        │    │
│ │  or a 4-col card row                        │    │
│ │  or "left talk · right product surface"     │    │
│ └─────────────────────────────────────────────┘     │
│                                                    │
│ footer rule —— emotional cue          SC.NN · TAG  │
└────────────────────────────────────────────────────┘
```

Recurring stage compositions, named for re-use:

- **Split-talk-product** (slides A03, A05, A06, A07, A10, A11, A13, B03–B07, B09–B11): left = pull-quote + meta-grid; right = a literal-looking product surface (browser, chart, phone, chat, hub mock).
- **Foundation-pillar-row** (covers and closings): 4 evenly-spaced ordinal cards across the bottom.
- **Card-grid-4** (A08 protocol, B07 regime, B08 commerce): 4 equal columns with ordinal + title + body + grade chip.
- **Daily-action stack** (A11, B09 phone): vertical list of `[dot | meal-window mono | action] · time` rows.
- **Forest manifesto band** (A05 feed-foot, A08 protocol-foot, B04 feed-rule, B14 loop-card): full-width forest bar restating the rule of the section.
- **Safety call-out card** (A07 quiz-flag, B06 escalate panel): amber/terracotta tinted, left-bordered, with the warning glyph "!" and "*No upcharge*" reassurance.
- **Scoreboard / KPI tally** (A14 loop-card, A15 closing tally, B13 pillars-row): 2×3 or 4×1 stat grid against a dark forest or ink ground.
- **Revenue-flywheel circle** (B12): 6-node ring SVG with center label "RECURRING / *revenue*" mirrored by a numbered list. Distinctive enough to ship literally.
- **Mechanism→Action row** (A06 mech-card, B05 mech-item): `[ordinal | name + desc | tag/action]`.

Typography rule: every headline above the stage uses Instrument Serif, ~70–100px, with **one italic forest-coloured word** carrying the emotional weight (*terrain, refresh date, magic pill, snake oil, conversion, ninety days*). The italic word is the slide's verb.

---

## 4. Navigation pattern in the mocks

`deck-stage.js` is a custom-element web component (`<deck-stage>`) with this contract:

1. **Slides are hidden, not unmounted.** All sibling `<section>`s stay in the DOM with `visibility:hidden; opacity:0;` and only the active one gets `data-deck-active`. State (videos, forms, React state) is preserved across navigation.
2. **Navigation inputs supported, in priority order:**
   - Hash anchor: `#<1-based int>` deep-links to a slide (`#5` → slide 5).
   - Keyboard: ←/→/PgUp/PgDn/Space, Home/End, R = reset, digits 1–9 jump to slide.
   - Touch: left third = back, right third = forward (only on coarse pointers).
   - Click: overlay prev/next + reset buttons at bottom centre.
3. **Programmatic API:** `goTo(i) / next() / prev() / reset() / index / length`, and a bubbling `slidechange` CustomEvent with `{index, previousIndex, total, slide, previousSlide, reason}`.
4. **Auto-scaling:** the canvas is fixed at design size (1920×1080) and `transform: scale(fit)` to viewport. Optional `noscale` attribute for PPTX export.
5. **Print:** `@media print` lays every slide as its own page at design size — Save-as-PDF gives one slide per sheet.
6. **Speaker notes:** a `<script type="application/json" id="speaker-notes">` JSON array, one string per slide, posted to host via `postMessage({slideIndexChanged: N})`.

**Preferred user motion = sequential**, gated by an obvious overall progress count ("01 / 15"). Deep-linking via `#n` is the only random-access affordance; there is no visible TOC or tab strip in the mocks. **For the live journey pages we must convert this implicit linear order into a visible, persistent tab/anchor nav** — see §5.

---

## 5. Specific patterns to lift for journey pages

The live journey page must take a ~7K-word ailment dossier (15 sections, OTC + home-only) and make it feel like **the Vitiligo deck**, not a Medium article. Proposal:

### 5.1 Persistent navigation — `DossierShell`

A two-layer nav that is always visible:

- **Top sticky bar** (height ~64px, paper-2 ground, hairline bottom rule):
  - Brand dot + ailment name (e.g. "Vitiligo · Skin & Pigmentation").
  - Section step counter (mono): "Section 04 / 15" — updates on scroll.
  - Right-aligned mono badges: `42 sources`, `Refreshed 14d ago`, `No cure claims`. Lifted verbatim from B03.
- **Left-rail or sticky-strip tabs** (15 entries — one per dossier section):
  - 200-px sticky column on `lg+`, collapses to a horizontal scroll-snap chip strip on `<lg`.
  - Each entry = `[mono 01 / serif name / grade pill]`, current section highlighted as active need-card (forest fill, paper text), inactive in white with rule.
  - Click = scroll-to-section + replace URL hash (`#mechanism-triad` etc.) — same hash contract as `deck-stage`.
- **Bottom dock (mobile only)**: a `prev | NN/15 | next` strip that mimics the deck overlay; the keyboard ←/→ binding is preserved on desktop.
- **Keyboard parity**: ←/→/J/K to step, digits 1–9 to jump.

### 5.2 The "Today's actions" highlight surface — `DailyActionStack`

The single most powerful surface the customer journey shows is the iPhone (A11/B09). On the **live** journey page, the equivalent is a sticky right-rail card titled *"Today's actions"* that aggregates the dossier's day-plan into a same-shape stack:

- Greeting line + day-of-protocol pip strip (7 pips like A11).
- 4 dose-rows: `[checkbox | mono meal-window | serif action name | time]`.
- Forest refill micro-card at the bottom showing days-to-next-pack.
- Tapping a row scrolls the main column to the relevant supplement / phytochemical entry.
- This is rendered server-side from the 24h Day Plan section so it works without JS state for first paint.

### 5.3 Mapping the 15 dossier sections to visual components

| # | Dossier section | Visual treatment |
|---|---|---|
| 1 | **Executive Summary** | Hub-trust shell (B03): breadcrumb + ailment serif title + italic humility quote + 3-cell meta (Last refresh / Sources tracked / Update cadence) + 4 status badges + primary/secondary CTAs. |
| 2 | **Mechanism Triad** | Mechanism-diagram split (A06/B05): SVG core with orbital nodes on the left; 3–5 numbered mechanism rows on the right; bottom *Protocol output* italic callout. |
| 3 | **Sub-types** | 2- or 3-col `need-card` grid (B02), each sub-type a card with mono label + serif name + 19px description. Selected sub-type can pre-filter the rest of the page. |
| 4 | **OTC Phytochemicals** | The 4-column protocol grid (A08): ordinal · serif title · `why` body · grade-row · dashed compound list. Wraps to multi-row if >4 entries. |
| 5 | **Traditional Medicine** (Ayurveda / TCM / Unani / Siddha / Tibetan / Homeopathy) | Accordion of 6 tradition-cards. Each open card uses the *Mechanism→Action row* pattern: `[tradition mono | classical name | mechanism | modern crosswalk]` rows. Header is a `T`-grade chip + source line. |
| 6 | **Biophysical** (red-light PBM, PEMF, sauna, cold) | Card-grid-4 (B07 regime layer style), each card has device icon, dose protocol, evidence grade, contraindication chip. |
| 7 | **Diet — 7-day meal plan** | Two-pane: left = day-tab strip (Mon–Sun); right = three meal rows per day with gram quantities in mono and target nutrients as small chips. Reuse `<DailyActionStack>` shape. |
| 8 | **Lifestyle — Exercise, Yoga, Sleep** | Weekly periodisation grid (7 columns × 3 rows: AM / mid / PM) with serif activity name + mono mechanism tag. Below: yoga poses mapped to mechanism nodes (re-using the mech-card row). |
| 9 | **Combos / Stacks** | `ComboCard` — full-width "split-talk-product" rows where left is the rationale serif + grade, right is a 3-bottle micro-stack (lifted from A09) labelled L01/L02/L03. |
| 10 | **24-hour Day Plan** | Horizontal timeline: 24-hour rail with 6–10 ticks (wake, sun, breakfast, workout, lunch, light-stop, dinner, wind-down, sleep). Hovering a tick reveals the action card. This is the master surface — `<DailyActionStack>` is derived from it. |
| 11 | **Suppliers ecosystem** | A table card grid: brand · product · standardisation · price · COA-available chip · jurisdiction. Reuse the `com-strip` 4-cell foot pattern below. |
| 12 | **Interaction Matrix** (drug ↔ supplement ↔ food ↔ exercise ↔ sleep) | Heatmap matrix component: rows = supplements, columns = drug/food/exercise/sleep, cells = chip (✓ safe / ! caution / × avoid). Caption row mirrors the safety-flag callout from A07. |
| 13 | **Self-administered Scoring Instrument** | Quiz panel (A07/B06): step header, progress bar, 6-row Q&A with `answer / review / noted` chips, escalation panel on the right. Submit = scored card. |
| 14 | **12-month Timeline** | Loop scoreboard (A14): forest card with adherence/journal/expert-revision/referral stats + ochre journal pull-quote. Below, a 12-row timeline with `when / what` columns (lifted from A13 expert chart). |
| 15 | **Patient Primer + Closing Paradigm** | Cover/closing pattern: dark-ink section, big italic serif title with the brand's one-sentence boundary, 4 numbered pillar tokens, disclaimer in mono ochre-left-bar. |

### 5.4 Cross-cutting overlays

- **Evidence-feed band** appears once on the page as a horizontal RSS-style strip, then again as a per-section eyebrow widget showing the *N papers cited / last refreshed* for that section.
- **Safety call-out** components are emitted automatically whenever a section contains an interaction or contraindication.
- **Source-count strip** (mono on forest) repeats every 3 sections — brand seal between blocks.

---

## 6. Feature parity items — what the Vitiligo deck shows that other journeys are missing

These should each become a generic, prop-driven React component callable from every dossier:

1. **Living evidence-feed band** (B04, A05) — 2-col grid of graded findings with date + journal + claim + source.
2. **Mechanism→action 3-column row** (A06, B05) — numbered, with right-side "product tag" chip naming the action.
3. **Hub-trust above-the-fold** (B03, A04) — breadcrumb + serif title + humility quote + 3-cell meta + badges + CTAs.
4. **Need-catalog card** (B02) — for ailment sub-types or related-need switching.
5. **Layered protocol 4-card** (A08, B07) — ordinal · title · why · grade · compound list.
6. **Quality-strip 4-cell** (B08 com-strip) — Standardisation / Verification / Sourcing / Cadence.
7. **Combo / stack card** (lifted from A09 pack-mock) — 3–4 bottle visual with refresh / refill / COA insert.
8. **90-day-pack feature card** (B08 hero) — large serif "From $X / 30 days" with 4-bottle commerce grid.
9. **Companion mobile teaser** (A11, B09) — pixel-accurate iPhone showing `<DailyActionStack>` of the current dossier.
10. **AI-guru honesty chat** (A12, B10) — chat box with the platform's honest refusal canned for that ailment plus 4 numbered guru principles.
11. **Expert chart preview** (A13, B11) — dark ink card with wax-seal + "$X / chart" CTA + 4 deliverable rows D1–D4 + 3-row timeline.
12. **Revenue / outcome scoreboard** (A14, B12) — forest card with 6 stats; for non-revenue pages we reuse the shape for adherence/journal/score statistics.
13. **Revenue flywheel SVG** (B12) — 6-node ring with center "RECURRING revenue" + mirrored numbered list. On a dossier page this becomes the "Therapy flywheel": *Evidence → Protocol → Daily routine → Progress → Re-score → Expert review*.
14. **Forest manifesto band** (A05/A08 feet) — repeating brand seal that restates the rule of the section.
15. **Wax-seal circle** (A13, B11) — a literal certification mark for expert/clinical-grade content.

---

## 7. Concrete component list for the redesign

Numbered for sprint planning; each one has a 1-line spec.

1. **`<DossierShell tabs={Section[]}>`** — paper page chrome with sticky top bar, left tab rail, mobile bottom dock, hash-routing, keyboard ←/→.
2. **`<TopBar brand title step badges>`** — brand dot + ailment + "Section NN / 15" + right-aligned mono badges.
3. **`<SectionAnchor id eyebrow ordinal title italicWord>`** — renders the chapter-eyebrow + serif headline grammar.
4. **`<HubTrustHeader breadcrumb title humility meta[] badges[] ctas[]>`** — section #1 above-the-fold.
5. **`<EvidenceFeed items[]>`** — 2-col grid of `{grade, meta, claim, source}` rows + forest update-rule band.
6. **`<EvidenceFeedBand mode="band">`** — single-row strip variant for inter-section seals.
7. **`<GradeChip grade>`** — A/B/C/T/H/X chip with locked colours.
8. **`<ManifestoBand keyword body>`** — forest full-width band, mono ochre eyebrow + serif body.
9. **`<MechanismDiagram core nodes[]>`** — SVG core + orbital satellites.
10. **`<MechanismRow ordinal name desc tag>`** — the 3-col `[01 | name+desc | tag]` row.
11. **`<NeedCardGrid items[] selected>`** — 6-up sub-type cards with active-inverted state.
12. **`<ProtocolLayerGrid layers[]>`** — 4-up Layer 01–04 cards with grade row + compound list.
13. **`<ComboCard rationale stack[]>`** — split row with bottle micro-stack.
14. **`<NinetyDayPackCard price perDays bottles[] strip[]>`** — B08 commerce hero.
15. **`<BottleCard ordinal label sub name spec grade>`** — single bottle for grids.
16. **`<QualityStrip cells[]>`** — 4-cell mono-eyebrow + serif-value foot strip.
17. **`<DailyActionStack day pips[] doses[] refill>`** — the iPhone-style today panel, also the master surface.
18. **`<MealPlanWeek days[]>`** — 7-tab × 3-meal grid with gram quantities.
19. **`<DayTimelineRail ticks[]>`** — horizontal 24-hour rail with hover-to-reveal action cards.
20. **`<InteractionMatrix rows[] cols[]>`** — heat-grid with safe/caution/avoid chips.
21. **`<SafetyCallout severity title body>`** — terracotta-bordered amber-cream box.
22. **`<SafetyQuiz steps[]>`** — A07/B06 quiz panel with progress and escalation right-rail.
23. **`<TraditionAccordion traditions[]>`** — 6 tradition cards (Ayurveda/TCM/Unani/Siddha/Tibetan/Homeopathy).
24. **`<BiophysicalGrid items[]>`** — PBM/PEMF/sauna/cold cards with dose protocol.
25. **`<SupplierTable rows[]>`** — supplier ecosystem rows + COA chip.
26. **`<GuruHonestyChat principles[] dialogue[]>`** — A12/B10 split: 4 principles + canned-honest chat.
27. **`<ExpertChartPreview deliverables[] timeline[] sealText price>`** — A13/B11 dark ink chart card with wax-seal.
28. **`<RevenueFlywheel nodes[6] centerLabel>`** — SVG ring + mirrored numbered list.
29. **`<Scoreboard stats[]>`** — A14 forest stat-tally card.
30. **`<FoundationPillarRow pillars[4]>`** — cover/closing 4-up ordinal pillars.
31. **`<HumilityQuote>`** — ochre-left-bar Instrument Serif italic.
32. **`<WaxSeal text>`** — circular ochre-bordered cert mark.
33. **`<TwoColTalkProduct>`** — generic 1.1fr : 1fr split layout primitive.
34. **`<PhoneFrame variant="paper" | "dark">`** — reusable iPhone chrome.
35. **`<SectionFooter cue chapterTag>`** — emotional cue + `SC.NN · TAG` mono.

Tokens: `--paper`, `--paper-2`, `--paper-3`, `--ink`, `--ink-2`, `--muted`, `--rule`, `--forest`, `--forest-2`, `--ochre`, `--ochre-deep`, `--terracotta`, plus `--grade-a/b/c/t/h` — all already in the mocks, copy verbatim.

---

## 8. What the founder will measure (the "easy to navigate vs. Medium article" test)

The mocks define ease through **structural redundancy** — the user always knows where they are and what they can do next. We will measure / verify:

- **A persistent step counter is visible** (`Section 04 / 15`) — like the deck's `04 / 13` top-right ordinal.
- **Section-to-section motion is one input** — left-rail click, ←/→ key, swipe, or scroll-snap. Three orthogonal ways to move forward.
- **Every section ends with a forest manifesto band or a footer cue** so the user knows the section is over before they reach the next headline.
- **One italic forest word per headline** — the brand's verb. Hard rule.
- **No body copy block exceeds 5 lines of serif** before a chip, row, or grid breaks rhythm — Medium-density text is the anti-pattern.
- **Every claim is within 4 px of its grade chip** — no orphan claims.
- **"Refreshed N days ago" is visible above the fold** on every dossier (B03) — the brand's most-important micro-signal.
- **Safety is on the page, not in a tooltip** — every interaction matrix and safety callout is its own block, not a hover. The customer journey explicitly converts when the platform pauses, not when it sells.
- **The honest-refusal copy is the same copy on every dossier**: *"No honest platform can promise that."* The constancy is the brand.
- **Quotes from the mocks to keep in the live UI**: *"without the snake oil"*, *"evidence first"*, *"honest boundaries"*, *"support the terrain, do not promise a cure"*, *"A claim only enters the protocol once an evidence grade, a safety note, and a product-quality requirement are attached"*, *"the hesitation is the conversion"*, *"the refusal is the conversion"*, *"the website earns the sale; the app earns the year"*, *"recurring revenue, earned"*, *"educational wellness support only"*.

---

## 9. `uploads/*.md` — what each file is and whether it's fresh

13 files, ~2,700 lines total. They are the source-of-truth doctrine notes that pre-date the mocks. The decks are the visual *consequences* of these documents; the redesign should treat them as the spec.

| File | Lines | Role | Fresh vs. existing corpus? |
|---|---|---|---|
| `MEMORY_INDEX.md` | 45 | Index of the other 12 files. | Meta — covered by our existing memory index. |
| `01_dialog_and_user_intent.md` | 132 | Founder's verbatim corrections of early model behaviour, the "stop building, start understanding" pivot. | Mostly already encoded in `docs/CERTIFICATION.md` and project memory. Keep for tone reference. |
| `02_product_prd.md` | 221 | Working PRD: placeholder names, principles, MVP scope. | Largely covered in our PRD; reconfirms "consumer need-first, not medical taxonomy" — drives §5.1 and B02. |
| `03_existing_ayurveda_app_inspection.md` | 344 | Audit of an earlier Ayurveda app the founder pointed at as anti-pattern. | **Fresh-ish** — has explicit do-not-do list that we have not catalogued. Worth lifting "anti-patterns to avoid" into our design rules. |
| `04_viticore_reference_pattern.md` | 87 | The VitiCore reference: evidence-OS feel with no cure promise. | **Foundational** — every Vitiligo-deck choice traces here. Already reflected. |
| `05_categories_and_market_map.md` | 325 | The 40+ billion-dollar categories, need-first homepage philosophy. | **Fresh-relevant** — the "40+ categories" map shapes §3 sub-type catalogue + §5.3 line 3. |
| `06_monetization_and_business_model.md` | 212 | Pack pricing, refill cadence, premium tier economics. | Drives B08 + B11 + §7.14, §7.27. |
| `07_architecture_content_factory.md` | 231 | The factory: protocols are pre-baked, not generated on demand. | Drives why §5.2 can be SSR/static. |
| `08_safety_compliance_guardrails.md` | 195 | The screening logic, escalation paths, banned claims. | Drives §7.21–7.22 (SafetyCallout, SafetyQuiz, InteractionMatrix). |
| `09_tam_research_notes.md` | 154 | Market sizing notes (incomplete). | Not on the visual critical path. |
| `10_workspace_state_and_recovery.md` | 81 | Process retrospective. | Meta — skip for redesign. |
| `11_evidence_driven_doctrine.md` | 273 | The A/B/C/T/H grade rubric, refresh cadence, "update rule". | **Core spec** for §7.5–7.8. The "Update rule" wording in B04 / A05 is lifted directly from here. |
| `12_mobile_continuity_and_recurring_revenue.md` | 399 | The website-vs-app split: "website earns the sale, app earns the year." | **Core spec** for §7.17 (`DailyActionStack`) and the §5.2 highlight surface. |

Net: nothing in `uploads/` contradicts the mocks; together they make a coherent brief. Treat 04, 11, and 12 as the load-bearing trio for the redesign.

---

## Closing

The Vitiligo deck shows **the page at rest**; the Customer Journey deck shows **the same page seen by a human at minute 0, 47, day 23, and day 90**. The redesign must use the rest-state geometry (grades, manifesto bands, mechanism rows, 04-pillar foundations, wax seals) but inherit the emotional pacing of the customer journey — every section ends with either a forest manifesto seal or a humility quote, and the entire page is held together by a persistent step-counter + left-rail nav so the user never feels like they are reading a Medium article. Every component in §7 has direct CSS precedent in the mocks; build them as a small library and the 15-section dossier layout writes itself.
