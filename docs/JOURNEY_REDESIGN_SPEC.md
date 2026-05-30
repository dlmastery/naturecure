# NicheCore Journey Redesign Spec — Prescriptive, Build-Against-Verbatim

**Scope.** Faithful reproduction of the OTC Protocol React mock (`Downloads/otc1/`) and the Vitiligo / Customer-Journey decks (`Downloads/NatureNicheCure1/`) into the live Next 16 app at `nichecore/`. Founder mandate: *"faithful and clear reproduction of mocks to website with proper fidelity"* and *"easy to navigate vs. Medium article"*.

**Two mock systems, one product.**

- **otc1/** = the *long-form, navigable* reference site — sticky left rail nav, track-aware filtering, ten section pages, 4 OTC stacks, 24-week journey, recipes, PBM, safety, references. This is the page-architecture spec.
- **NatureNicheCure1/** = the *brand emotional pace* — split-talk-product layouts, manifesto bands, wax seals, expert chart preview, mobile companion, "the refusal is the conversion." This is the voice and ornament spec.

**Brand verbatim phrases to preserve in UI copy.** *"without the snake oil"*, *"support the **terrain**. We don't promise a cure."*, *"the refusal is the conversion"*, *"the hesitation is the conversion"*, *"the receipt does not say miracle"*, *"the website earns the sale; the app earns the year"*, *"one protocol, two diseases, same molecular engine"*, *"A patient-built reference"*, *"evidence first"*, *"honest boundaries"*, *"natural protocols"*, *"recurring care"*, *"recurring revenue, earned"*, *"educational wellness support only"*, *"escalation is not failure"*, *"No honest platform can promise that."*, *"Reset → Build → Compound"*.

---

## 1. Design System Audit

The mock uses a **cream-paper editorial / forest-teal governance / terracotta-emphasis** system. We are aligned in spirit with our current `globals.css` but the mock is **deeper, more colour-encoded, and uses oklch tokens** that we should adopt to unify hue math across grade chips, callouts, week-strip phases, and triad SVG.

### 1.1 Variable-by-variable diff (otc1/styles.css → nichecore/app/globals.css)

| Token | otc1 mock | Current nichecore | Action |
|---|---|---|---|
| `--bg` / `--color-paper` | `oklch(98% 0.008 90)` | `#f1ede3` | **Keep ours** (`#f1ede3` is warmer, more "paper"). |
| `--bg-2` / `--color-paper-deep` | `oklch(96% 0.012 85)` | `#e9e3d5` | Keep ours. |
| `--bg-card` / `--color-card` | `oklch(99.5% 0.005 90)` | `#ffffff` | Keep ours. |
| `--ink` / `--color-ink` | `oklch(22% 0.02 230)` cool | `#201c17` warm | Keep ours. |
| `--ink-2` / `--color-ink-soft` | `oklch(38% 0.02 230)` | `#4b463e` | Keep ours. |
| `--muted` / `--color-ink-faint` | `oklch(55% 0.015 90)` | `#6b6557` | Keep ours. |
| `--line` | `oklch(88% 0.012 85)` | `#2017120f` | Keep ours. |
| `--line-2` / `--color-line-strong` | `oklch(82% 0.015 85)` | `#20171221` | Keep ours. |
| `--primary` / `--color-forest` | `oklch(38% 0.07 165)` teal-forest | `#0e3b2e` true forest | **Keep ours** — branded forest is sharper. |
| `--primary-2` / `--color-forest-soft` | `oklch(48% 0.08 165)` | `#1c5a46` | Keep ours. |
| `--primary-soft` (callout fill) | `oklch(94% 0.025 165)` | — | **ADD** — used for "note" callouts, mech-card bg, mint phase-pill bg. |
| `--accent` (terracotta) / `--color-gold-deep` | `oklch(60% 0.13 50)` terracotta | `#8f6e2c` ochre | **ADD `--color-terracotta: #a0411f`** — the mock uses terracotta exclusively for safety-flag / H grade / emotional emphasis. Ochre stays for editorial highlights (seals, mono eyebrows). |
| `--accent-soft` | `oklch(95% 0.03 50)` | — | **ADD `--color-terracotta-soft: #f8e0d6`** for safety-callout bg. |
| `--warn` / `--warn-soft` | `oklch(58% 0.15 30)` / `oklch(95% 0.04 30)` | reuses `--color-blush` | **ADD distinct `--color-warn` + `--color-warn-soft`** — blush is already in use for "sensitive". |
| `--ok` | `oklch(55% 0.12 145)` | — | **ADD `--color-ok: #1d5b41`** — green for "safety cleared", time-in-range, post-prandial under target. |

Grade chip palette is not in our globals; the deck and otc1 use exact named colours:

| Grade | Colour | Use |
|---|---|---|
| A | `--color-forest` (deep forest #0e3b2e) on paper | "Tier 1 — Human RCTs" |
| B | `--color-forest-soft` (mid green #1c5a46) on paper | "Strong mechanism + limited human" |
| C | `--color-gold-deep` (#8f6e2c) on paper | "Network pharmacology inference" |
| D | `#6b5a3a` (warm brown) on paper | demand signal |
| T | `#7a5630` (deeper brown) on paper | traditional only |
| H | `--color-terracotta` (#a0411f) on paper | hypothesis only |
| X | `--color-ink` on paper | excluded / blacklisted |

### 1.2 Typography

| Property | otc1 | Current | Action |
|---|---|---|---|
| Serif | Newsreader | Fraunces | **Keep Fraunces** (already loaded via next/font; matches deck-mock "Instrument Serif" voice better). |
| Sans | Geist | Hanken Grotesk | Keep Hanken. |
| Mono | JetBrains Mono | IBM Plex Mono | Keep Plex Mono. |
| h1 size | 44px page / 56px hero | exists | Keep ours (5xl–7xl tailwind). |
| h2 | 30px | 1.9rem (~30px) | Keep. |
| h3 | 21px | 1.35rem | Keep. |
| Body | 15.5px / 1.55 | 16px / 1.7 | Keep ours. |
| Eyebrow | mono uppercase, 11px, 0.14em tracking, **accent colour** | mono uppercase, 0.6875rem, 0.22em, `--color-ink-faint` | **ADJUST eyebrow colour** — when on a cream page the mock makes eyebrow terracotta / gold-deep; we currently render ink-faint which reads as label. Add `eyebrow--accent` variant. |

### 1.3 Radii / Shadows / Motion

| Token | otc1 | Current | Action |
|---|---|---|---|
| `--r-sm` | 6px | — | **ADD** `--radius-sm: 6px` (used by tags, vendor pills, nav-items). |
| `--r-md` | 10px | — | **ADD** `--radius-md: 10px` (cards, accordion, callouts). |
| `--r-lg` | 16px | `--radius-card: 1.25rem` (20px) | Map our `--radius-card` to ~16px-ish for editorial calm; keep existing. |
| `--r-xl` | 24px | `--radius-lg: 1.5rem` (24px) | OK as-is. |
| `--r-pill` | 999px | `--radius-pill: 999px` | OK. |
| `--shadow-sm` | `0 1px 0 ink/0.05` | implicit | **ADD** for sidebar nav-item active. |
| `--shadow-md` | `0 1px 2px + 0 4px 12px` | `0 1px 2px + 0 18px 40px -32px` (already in `.card-soft`) | Keep ours. |
| `--shadow-lg` | `0 2px 4px + 0 12px 32px` | — | **ADD** for ref-popover, mobile-companion phone frame. |
| `--ease-out-soft` | implicit `0.15s ease` on track-card | `cubic-bezier(0.22, 1, 0.36, 1)` | Keep ours. |
| Track-card hover | `transform: translateY(-1px)` + shadow + border-color | already on `.btn-primary` | Apply same pattern to all selectable cards (`NeedCard`, `TrackCard`, `SubTypeCard`). |
| `.rise` animation | — | `from { opacity: 0; transform: translateY(14px); } to { ... }` 0.7s | Keep. |

### 1.4 Gradients

The mock uses **exactly two gradients**:

1. `linear-gradient(180deg, var(--bg-2), white)` on `.protocol-head` and `.week-block .wb-head` — a soft top-to-bottom from paper-deep to white. **Adopt for `ProtocolCard` header and `WeekBlock` header.**
2. Radial dot/gradient on **mechanism core circle** in the deck (`--core-loop-glow`). Use SVG `<radialGradient>` from `--color-terracotta` (centre, 0.55 stop) to transparent.

### 1.5 The verbatim `@theme` block we adopt

Paste this **whole block** into `nichecore/app/globals.css` (replaces lines 9–52):

```css
@theme {
  /* ── Surfaces (warm cream editorial) ── */
  --color-paper: #f1ede3;
  --color-paper-deep: #e9e3d5;
  --color-paper-deeper: #ddd5c1;
  --color-canvas: #fbfbf7;
  --color-card: #ffffff;
  --color-ink: #201c17;
  --color-ink-soft: #4b463e;
  --color-ink-faint: #6b6557;
  --color-line: #20171210;
  --color-line-strong: #20171224;

  /* ── Brand ── */
  --color-forest: #0e3b2e;
  --color-forest-deep: #0a2c22;
  --color-forest-soft: #1c5a46;
  --color-forest-tint: #e3ede8;       /* paper-on-forest soft fill (callouts) */
  --color-gold: #b08a3e;
  --color-gold-deep: #8f6e2c;

  /* ── Emphasis (terracotta is SAFETY/H-grade only; ochre is editorial) ── */
  --color-terracotta: #a0411f;
  --color-terracotta-deep: #823418;
  --color-terracotta-soft: #f8e0d6;
  --color-warn: #b8541f;
  --color-warn-soft: #fbe3a6;
  --color-ok: #1d5b41;
  --color-ok-soft: #d8efe0;

  /* ── Evidence pastels (existing — kept) ── */
  --color-mint: #d8efe0;
  --color-sky: #d6e9f5;
  --color-amber: #fbe3a6;
  --color-lavender: #e7dbf7;
  --color-blush: #f8ddd8;
  --color-mint-ink: #1d5b41;
  --color-sky-ink: #245b7a;
  --color-amber-ink: #8a6313;
  --color-lavender-ink: #5b3d86;
  --color-blush-ink: #9a463a;

  /* ── Grade-chip palette (locked) ── */
  --color-grade-a: #0a2c22;
  --color-grade-b: #1c5a46;
  --color-grade-c: #8f6e2c;
  --color-grade-d: #6b5a3a;
  --color-grade-t: #7a5630;
  --color-grade-h: #a0411f;
  --color-grade-x: #201c17;

  /* ── Track / phase tints (used by week-strip, track-card) ── */
  --color-phase-1: #cfe1d6;   /* Reset — light teal-paper */
  --color-phase-2: #87b09c;   /* Build — mid forest */
  --color-phase-3: #2f6a52;   /* Compound — deep forest */

  /* ── Fonts ── */
  --font-display: var(--font-fraunces), "Newsreader", "Source Serif Pro", Georgia, serif;
  --font-sans: var(--font-hanken), "Geist", "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-plex-mono), "JetBrains Mono", ui-monospace, monospace;

  /* ── Radii ── */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-card: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  /* ── Shadows ── */
  --shadow-sm: 0 1px 0 #20171208;
  --shadow-md: 0 1px 2px #20171208, 0 18px 40px -32px #20171230;
  --shadow-lg: 0 2px 4px #20171210, 0 12px 32px #20171218;

  /* ── Motion ── */
  --ease-out-soft: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --dur-fast: 150ms;
  --dur-base: 280ms;
  --dur-slow: 600ms;
}
```

Plus, **inside `@layer components`** add these utility classes (referenced by all journey components):

```css
.eyebrow--accent { color: var(--color-terracotta); }
.eyebrow--gold   { color: var(--color-gold-deep); }
.rule-line       { border-color: var(--color-line-strong); }
.card-tinted     { background: var(--color-forest-tint); }
.card-warn       { background: var(--color-warn-soft); border-color: var(--color-warn); }
.callout         { border-left: 3px solid var(--color-terracotta); background: var(--color-terracotta-soft); padding: 14px 16px 14px 18px; border-radius: 0 var(--radius-md) var(--radius-md) 0; }
.callout--note   { border-left-color: var(--color-forest); background: var(--color-forest-tint); }
.callout--warn   { border-left-color: var(--color-warn); background: var(--color-warn-soft); }
.callout--ok     { border-left-color: var(--color-ok); background: var(--color-ok-soft); }
```

---

## 2. Component Catalogue

Naming convention: **PascalCase component name** matching the JSX/deck pattern it lifts. Group = directory we will create under `nichecore/components/`.

### 2.1 Layout primitives (`components/layout/`)

| Component | Props | When used | Visual |
|---|---|---|---|
| `<DossierShell tabs={Section[]} activeId>` | sticky top bar, sticky left rail (lg+), bottom mobile dock, paper canvas, hash sync | Every journey page (top-level wrapper). | Two-column app shell — left rail 280px (sticky, scroll-y), main 1080-max with 56/64 px padding. Replaces today's vertical scroll. |
| `<TopBar brand title step badges[]>` | brand wordmark + ailment + "Section NN/15" + right badges | Inside `DossierShell` | Height 64px, paper-deep bg, hairline bottom, mono ordinal right-aligned. |
| `<TwoColTalkProduct>` | `left` (talk) + `right` (product surface) slots, ratio `1.1fr : 1fr` | Hero, mechanism, expert preview, companion preview | Grid: serif headline + 3-cell meta on left, literal mock surface on right (browser, phone, chart). |
| `<SectionAnchor id eyebrow ordinal title italicWord lede>` | renders `01 ──── CHAPTER LABEL` + serif headline with one italic forest word | All 15 section openings | Two-line eyebrow (mono ochre, 0.16em tracking), then 4xl serif headline. |
| `<SectionFooter cue chapter>` | mono cue left, `SC.NN · TAG` right | End of every section | Hairline rule + 12px mono row. |
| `<ManifestoBand keyword body>` | full-width forest bar, mono ochre keyword + serif italic body | Between section blocks (every 3rd section) | `padding: 22px 36px`, forest bg, paper text. The brand "seal" between blocks. |
| `<PageHead eyebrow title lede>` | identical to mock `<PageHead>` | Sub-views inside a section (Tabs panes) | Eyebrow + 4xl serif + 19px italic serif lede. |

### 2.2 Cards (`components/cards/`)

| Component | Props | Visual |
|---|---|---|
| `<NeedCard ordinal label name desc selected?>` | the "need-card" — 6-up grid for ailment sub-types. Active state = forest fill + paper text. | ASCII:<br/>`┌───────────┐`<br/>`│ 01        │`<br/>`│ NSV       │`<br/>`│ desc text │`<br/>`└───────────┘` |
| `<TrackCard track active onSelect>` | 3-up track picker (vitiligo / diabetes / both) | t-mark square + serif name + italic headline + blurb + 2 tags. Hover: `translateY(-1px)` + shadow + ink-2 border. Active: forest border + primary-soft bg. |
| `<ProtocolCard protocol idx>` | Full mock spec — 1.1fr:1fr inside; gradient `bg-2→white` head; ordinal num "PROTOCOL · 01"; serif headline; NoveltyScore right; pathway tags row; body has 2-col grid "Why this combo" + "Stack". | Used by §4 Phytochemicals AND §9 Combos. |
| `<IngredientCard item>` | tight row inside a protocol stack: name (bold) + dose mono (terracotta) right + role line + `<Cite>` | 12×14 padding, 1px border, paper bg. |
| `<ProductCard p>` | `<p-top> name · ingredient · category-tag`, then dose row, then vendor pill row | Used in §11 Supplier ecosystem. |
| `<RecipeCard r>` | recipe-head (paper-deep bg) with name + meta line, then 1:1.5 body with Ingredients list left / Method+Why right | §7 Diet recipes. |
| `<IngredientDive ing track>` | name + binomial italic + summary italic + mechanism panel (forest-tint) + 2-col evidence cells + 3-col meta (Dose / Bioavailability / Caution) + references row | Inside §4 expanded view. |
| `<BundleHeroCard bundle>` | giant serif "$148 / 30 days" + 4-bottle grid below + 4-cell quality strip | §15 commerce / package. |
| `<BottleCard ordinal label name spec grade>` | mini bottle with L01–L04 ordinal, label, evidence grade chip | Used in `BundleHeroCard` and combo cards. |
| `<WaxSeal text price?>` | 120px circle, ochre border, mono uppercase content "Certified / Natural / Healing / — / Verified" | Inside `ExpertChartPreview`. |

### 2.3 Callouts (`components/callouts/`)

| Component | Props | Visual |
|---|---|---|
| `<Callout tone="warn" \| "note" \| "ok">` | left-bordered (3px) + soft bg, body wraps strong-prefixed lead | All inline notes ("⚠ Medication interactions", "Evidence:", "Read me first"). |
| `<SafetyCallout severity title body>` | terracotta border + warn-soft bg + Triangle icon + "*No upcharge*" tail | A07 quiz-flag pattern; auto-emitted under interaction matrices. |
| `<Disclaimer>` | warn-soft bg + 1px warn-tinted border, leads with bold `Read me first.` | Above-the-fold of dossier (Welcome). |
| `<HumilityQuote>` | ochre left bar (2px) + 28px Instrument-Serif italic | Used 4–6× across page; cut-line that exposes the human voice. |
| `<NextStepCard step title body href cta tone?>` | (already exists as `<NextStep>`) — keep but ensure it's pinned at every section's end like the deck's footer cue. | |

### 2.4 Forms / Interactive (`components/forms/`)

| Component | Props | Visual |
|---|---|---|
| `<SafetyQuiz steps[] onComplete>` | step 06/08 progress bar at top, radio rows, terracotta safety-flag tail. **Critical: when meds=true OR pregnant=true → route to expert.** | Lifted directly from `/c/[cat]/package`. |
| `<Segmented label value yes/no>` | (exists). Make it accessible (radio role, keyboard). | |
| `<FilterSelect label options value onChange>` | mono small label + 13px select, `padding 7×11`, `border-radius: 6px` | §3 phyto filter, §11 supplier filter. |
| `<TrackBadge track onSwap>` | pill button with coloured mark + label + "switch" suffix | Top of every page in track-aware mode. |
| `<TrackPicker current onSelect>` | 3-up `TrackCard` grid | Section #1 overview. |
| `<JournalTemplate track>` | mono pre-formatted text block (looks like a code block) | §11 daily journal. |

### 2.5 Navigation (`components/nav/`)

| Component | Props | Visual |
|---|---|---|
| `<LeftRailNav groups={NavGroup[]} activeId onSelect>` | exact mock `aside.sidebar` — brand block, track badge, group labels (mono uppercase 10.5px), nav-items with dot + label, footer disclaimer line | The persistent rail. |
| `<NavGroup label items[]>` | inner of the rail | |
| `<NavItem id label active dot>` | 7px×10px padding, 13.5px font, `border-radius: 6px`, active = white bg + ink + `shadow-sm`, dot turns forest. | |
| `<MobileTabStrip sections active>` | horizontal scroll-snap chip strip, only on `<lg` | replaces left rail. |
| `<MobileDock prev next current total>` | bottom-fixed `[<] 04/15 [>]` | matches deck overlay. |
| `<StepCounter current total>` | mono "Section NN / 15" pill in top bar; updates via scroll-spy. | |
| `<Breadcrumb crumbs[]>` | (current pattern) — keep. | |
| `<Tabs tabs={{id,label}[]} active onChange>` | mock `.tabs` — flex row with bottom-rule and active-tab forest underline | Inside section views (e.g., Tracking has 5 tabs). |

### 2.6 Evidence (`components/evidence/`)

| Component | Props | Visual |
|---|---|---|
| `<Cite ids[]>` | `<sup>` superscript, click opens popover with `[id] title / source / topic` | Used inline in dossier text + protocol stacks. **Must work without JS** (fallback = link to `#ref-{id}`). |
| `<GradeBadge grade withLabel?>` | (exists) | OK as-is, just colour-bound via §1.5 grade tokens. |
| `<NoveltyScore value max=10>` | 10 pip squares, `on` ones are terracotta | On `ProtocolCard` header, optional. |
| `<EvidenceFeed items[]>` | 2-col grid of `{grade, claim, date, source}` rows + closing `<ManifestoBand>` "Update rule" | Section #1 (hero) and inline. |
| `<EvidenceFeedBand items[3]>` | single-row strip variant (3 max-visible findings + "see all") | Inter-section seal between blocks. |
| `<TraditionAccordion traditions[]>` | 6 stacked `<Accordion>`s for Ayurveda / TCM / Unani / Siddha / Tibetan / Homeopathy. Each open card uses `MechanismRow`-style rows: `[tradition mono | classical formula | dose | grade chip | source]`. | §5 Traditional Medicine. |
| `<MechanismDiagram core nodes[]>` | SVG (mock's `TriadDiagram` is the canonical) — centre circle "Shared root" + 3 satellite nodes + arrows + downstream labels. Use `--color-forest` strokes, `--color-forest-tint` centre fill, `--color-terracotta` downstream labels. | §2 Mechanism Triad. |
| `<MechanismRow ordinal name desc tag>` | the 3-col `[01 | name+desc | tag]` row — the most reusable row in the system. | §2, §5, §8.5, §10. |
| `<ReferencesList refs[] activeTopic? onTopic>` | mock `<SectionReferences>` — filter by topic + numbered list with `[id]` mono + title + source + topic chip | Always at bottom of dossier. |

### 2.7 Timeline (`components/timeline/`)

| Component | Props | Visual |
|---|---|---|
| `<WeekStrip phases[] currentWeek?>` | 24-cell grid (3px gap), each cell coloured by phase (`p1` light teal / `p2` mid / `p3` deep forest), active cell has terracotta outline | §12 12-month timeline. |
| `<WeekBlock block>` | full mock spec — phase pill, serif title, italic focus line, then sections "Actions this phase" / "What to expect" / "Monitor" / "Red flags" | §12 expanded. |
| `<TwelveMonthArc steps[]>` | 4-card horizontal scroll OR 12-row vertical (depends on viewport). Each card: `mono week` + serif title + 14px desc + `chip` metric. | §12. |
| `<ScheduleTimeline items[]>` | mock `.timeline` pattern — left vertical 2px rule with primary-bordered dots, each item: mono time (12px terracotta) + serif block title + bulleted actions | §8 lifestyle / §8.5 24-hour. |
| `<DailyActionStack day pips[] doses[] refill>` | iPhone-format card — greeting, 7-pip streak strip, 4 dose rows (`checkbox · mono meal-window · serif action · time`), forest refill micro-card at bottom | §10 24-hour as right-rail sticky surface. |
| `<DayTimelineRail ticks[]>` | horizontal 24h rail (06:00 → 02:00 next day), 10-ish ticks; hover/tap reveals action card. | §8.5 master plan. |
| `<MealPlanWeek days[] activeDay?>` | 7 day-tabs (Mon–Sun) over 3-row meal grid (Breakfast 07:30 / Lunch 13:00 / Dinner 19:30) with gram quantities in mono. | §6 / §7 diet. |

### 2.8 Commerce (`components/commerce/`)

| Component | Props | Visual |
|---|---|---|
| `<NinetyDayPackCard price perDays bottles[] strip[]>` | mock B08 hero — giant serif "$148 / 30 days" left, 4-bottle grid right, bottom 4-cell quality strip (Standardisation / Verification / Sourcing / Cadence). | Replaces today's `BundleCard` on package surface. |
| `<QualityStrip cells[4]>` | 4-cell foot strip, each cell: mono eyebrow + serif value | Below `NinetyDayPackCard`. |
| `<SupplierTable rows[]>` | table card grid: brand · product · standardisation · price · COA chip · jurisdiction | §11 supplier ecosystem. |
| `<CostBreakdownAccordion tier="min"|"core"|"full">` | mock `<Accordion>` revealing annual cost table | Inside Shopping section. |
| `<VendorPill store price note?>` | inline pill: `[store · $price · note]` | Inside `ProductCard`. |
| `<RefillCard daysLeft nextRefill cta>` | forest micro-card, "86 days · refill in 18d" mono | Inside `DailyActionStack` and on top-bar in companion mode. |
| `<InteractionMatrix rows[] cols[] cells>` | heat-grid component: rows = supplements, cols = drug / food / exercise / sleep, cell chip is `safe` (mint), `caution` (amber), `avoid` (blush/terracotta) | §10. |
| `<ScoringInstrument items[]>` | quiz panel for VASI / HbA1c-self-track; produces a score card | §11 scoring. |
| `<ExpertChartPreview deliverables[] timeline[] sealText price>` | dark-ink (`#0b0b0b`) card, wax-seal top-left, "$89 / chart" serif price, 4 deliverable rows + 3-row timeline | Always present at end of every journey. |
| `<MobileCompanionMockup>` | iPhone frame 320–480 wide, paper screen showing greeting + 7-pip streak + `DailyActionStack` + refill card | Always above expert preview. |
| `<RevenueFlywheel nodes[6] center>` | SVG ring "Evidence → Quiz → Pack → Routine → Refill → Expert" with "RECURRING / *revenue*" centre | Closing block. |
| `<FoundationPillarRow pillars[4]>` | cover/closing 4-up grid, mono ordinal + serif title + muted description | §1 above-the-fold AND §15 closing. |
| `<Scoreboard stats[6]>` | forest stat tally card (Adherence 93% / Journal 12 / Refill #2 / LTV $214 / Stability / Repigment %) | §12 close. |

---

## 3. Persistent Navigation

The founder's #1 ask: *"currently appears like a long medium article."* The OTC mock answers this with a **two-axis sidebar + scroll-spy + keyboard + URL hash**. We adopt the same model.

### 3.1 The persistent chrome

1. **Sticky left rail (lg+)**, **horizontal chip strip (<lg)**, identical content. Width 260–280px. Background `--color-paper-deep`. Right hairline border.
2. **Sticky top bar** (height 64px). Contents left-to-right:
   - Brand dot + ailment name in serif (e.g. *Vitiligo · Skin & pigmentation*).
   - `Section 04 / 15` mono counter (centre, updates on scroll-spy).
   - Right cluster: `42 sources` · `Refreshed 14d ago` · `No cure claims` · `Build my regime` (btn-primary).
3. **Bottom mobile dock** (`<lg` only). Fixed `[<] 04 / 15 [>]` strip, 56px tall.

### 3.2 Tab order (the canonical 15 entries that mirror the dossier)

Group them in the rail exactly like the OTC mock groups its 10 tabs:

```
START HERE
01  Overview                  (Executive summary + foundation pillars)
02  The science               (Mechanism triad + sub-types)

YOUR PROTOCOL
03  OTC phytochemicals        (the 8–12 ingredients)
04  Traditional systems       (Ayurveda / TCM / Unani / Siddha / Tibetan / Homeopathy)
05  Biophysical interventions (PBM / sauna / cold / PEMF)
06  Diet & meal plan          (7-day rotation + gram quantities)
07  Lifestyle anchors         (Exercise / yoga / pranayama / sleep)
08  Daily combos              (Combo 1 / 2 / 3)
09  Master 24-hour plan       (the §8.5 timetable)

SAFETY & TRACKING
10  Interaction matrix        (drug × supplement × food × exercise × sleep)
11  Scoring instrument        (VASI / self-tracked)
12  12-month timeline         (week-strip + week-blocks)

REFERENCE & CARE
13  Supplier ecosystem        (brands · prices · COA)
14  Closing paradigm          (sovereignty + manifesto)
15  References                (numbered, filterable)
```

(For non-360-protocol journeys that lack a 15-section dossier, the rail trims to whichever sections are present — see §5 for required minima.)

### 3.3 Interaction model (prescriptive)

- **Click in rail** → smooth-scroll the section into view (`scroll-margin-top: 80px` on `<section id>`). Hash updates to `#<sectionId>`. Section becomes "active" in rail.
- **Scroll** → scroll-spy with `IntersectionObserver({ rootMargin: "-30% 0px -60% 0px" })` sets active rail item + step counter.
- **Keyboard**:
  - `←` / `→` / `J` / `K` / `PgUp` / `PgDn` — prev/next section
  - `1`–`9` — jump to that section (mirrors `deck-stage.js`)
  - `Home` — Overview; `End` — Closing
  - All of the above call `goTo(i)` which scrolls + updates hash.
- **Touch (`<lg`)**: chip strip is `overflow-x: auto; scroll-snap-type: x mandatory;` and the active chip auto-scrolls into view.
- **Hover**: rail item gets `background: var(--color-paper); color: var(--color-ink)`. Mobile chip gets a 1px ink-soft underline.
- **Focus-visible**: 2px forest outline at 3px offset (matches our existing `:focus-visible` rule). Tab order must traverse rail → top bar → main content → next-step → footer.

### 3.4 Library choice

Use a **plain React + IntersectionObserver** implementation. **Do not adopt** an external scroll-spy library — the spec is small enough (≈ 80 LoC for the hook) and the existing codebase avoids extra deps. Reference implementation: `useActiveSection(ids: string[]): activeId`.

For URL hash sync, mirror the otc1 `readHash()` pattern:

```ts
const [active, setActive] = useState(() => readHash() || ids[0]);
useEffect(() => { history.replaceState(null, "", `#${active}`); }, [active]);
useEffect(() => {
  const onHash = () => setActive(window.location.hash.slice(1) || ids[0]);
  window.addEventListener("hashchange", onHash);
  return () => window.removeEventListener("hashchange", onHash);
}, [ids]);
```

### 3.5 Becomes-the-persistent-top-bar checklist

The top bar **replaces** the today's editorial hero crop. After redesign, the hero of `/skin/vitiligo` is **inside `Section 01 — Overview`**, not above the rail.

---

## 4. The Complete Vitiligo Journey, End-to-End

This is the prescriptive walk-through — the implementer treats every line as a build instruction. Component names refer to §2.

### 4.1 Entry surface (atlas card)

User arrives via `/atlas` → finds **"Skin & Pigmentation"** card → sees `<NeedCard>` with `01 / Vitiligo / Stop the spread. Then repigment.`. Click navigates to `/skin/vitiligo`.

**Card composition**: `<NeedCard ordinal="01" label="Vitiligo (non-segmental)" name="The vitiligo journey" desc="Without the snake oil. Support the terrain." gradeMix=["A","B","C","T","H"] href="/skin/vitiligo">`.

### 4.2 Landing on `/skin/vitiligo` — above the fold

The page **mounts inside `<DossierShell>`**. Above-the-fold is **Section 01 (Overview)** — not a separate hero.

Section 01 composition (top-to-bottom in main column):

1. `<Breadcrumb crumbs={["Needs", "Skin", "Vitiligo"]}>`
2. `<SectionAnchor id="overview" eyebrow="A patient-built reference · 360° protocol" ordinal="01" title={<>The vitiligo journey,<br/><em>without the snake oil.</em></>} italicWord="snake oil">`
3. `<p className="lede">` — verbatim: *"A natural, OTC, home-based protocol for vitiligo. Reset (weeks 1–4) → Build (5–12) → Compound (13–24). 360° coverage: NRF2 botanicals, gut healing, traditional systems, photobiomodulation, diet, lifestyle. No prescription, no clinic, no hospital."*
4. `<FoundationPillarRow pillars=[
     { ordinal: "01", title: "Evidence first", desc: "Every claim graded, dated, sourced." },
     { ordinal: "02", title: "Natural protocols", desc: "OTC + home-administered only." },
     { ordinal: "03", title: "Recurring care", desc: "Refills + app companion." },
     { ordinal: "04", title: "Honest boundaries", desc: "No cure claims. The refusal is the conversion." },
   ]>`
5. CTA row: `<Link href="/c/skin-pigmentation/package" className="btn-primary">Build my 90-day regime <ArrowRight/></Link>` + `<Link href="/guru" className="btn-ghost">Ask the Guru</Link>` + `<Link href="#science" className="btn-ghost">Read the science</Link>`
6. `<EvidenceFeedBand items={vitiligo.evidenceFeed.slice(0,3)}>` — 3-finding strip.
7. `<HumilityQuote>` — *"Support the **terrain**. We don't promise a cure."*
8. `<Disclaimer>` — verbatim safety lead (mock §1).
9. `<SectionFooter cue="The honest opening" chapter="SC.01 · OVERVIEW">`

### 4.3 Section 02 — Mitigations / mechanism

Two-column `TwoColTalkProduct`:

- **Left (talk)**: `<SectionAnchor id="science" eyebrow="The science" ordinal="02" title={<>Four mechanisms, <em>one engine</em>.</>}>`, then 4 `<MechanismRow>` (Ferroptosis / Leaky gut / Dysbiosis / HPA-axis) — each row is `[ordinal | mechanism + plain-English desc | terracotta action tag]`.
- **Right (product surface)**: `<MechanismDiagram core="Melanocyte stress loop" nodes={[ferroptosis, leakyGut, dysbiosis, hpa]}>` — SVG with 4 satellites + centre.

Below: `<NeedCardGrid items=[NSV, segmental, acral, mucosal, mixed]>` (§2.5 of dossier — sub-types). Selecting a sub-type filters subsequent sections.

`<ManifestoBand keyword="THE TRIAD RULE" body="Fix the upstream and both downstream symptoms ease.">`

### 4.4 The mitigations / actions surface — what is pinned, what is collapsed

**Pinned (sticky right-rail on lg+, sticky top on <lg)** throughout the journey page:

- `<DailyActionStack>` showing today's 4 dose times + refill countdown + "Build my regime" mini-cta.
- This is the master quick-action surface. Tapping a dose row scrolls main column to the relevant phytochemical entry.

**Quick-action mitigations card (Section 03 head)**: 3-up grid with **three CTAs**:

| Card | CTA | Lands on |
|---|---|---|
| `01 / Read the protocol` | "Open Section 03 →" | scrolls to §03 phytochemicals |
| `02 / Build the pack` | "Build my regime →" | `/c/skin-pigmentation/package` |
| `03 / Companion app` | "Activate companion →" | `/companion` |

**Collapsed (accordion / deep-dive)**: each phytochemical/herb in §03 is wrapped in `<Accordion>` showing dose+timing+grade in the header and full mechanism + evidence + bioavailability + cautions inside. Default open: top 4 by grade.

### 4.5 The 90-day regime click-through (the dead-end fix)

Today's flow: `/skin/vitiligo` → click "Build my 90-day regime" → `/c/skin-pigmentation/package` → safety screen → "Start my regime" button (`disabled` until `ack` checkbox) → **dead-end (no handler)**.

Prescribed flow (verbatim against the mock's "the refusal is the conversion" doctrine):

**Step 1 — Build my regime CTA on `/skin/vitiligo`** (lives in top bar + multiple sections + sticky DailyActionStack).
- `<Link href="/c/skin-pigmentation/package" className="btn-primary">Build my 90-day regime <ArrowRight/></Link>`

**Step 2 — `/c/skin-pigmentation/package` screen 1: Safety screen**
- `<SafetyQuiz>` 4 questions (mock B06 / A07 spec):
  1. Are you on any prescription medications? (yes/no) — if yes, secondary chips: `JAK inhibitor` / `methotrexate` / `levothyroxine` / `warfarin` / `SSRI` / `statin` / `other`.
  2. Are you pregnant or planning pregnancy? (yes/no)
  3. Photosensitising drug (isotretinoin, tetracyclines, amiodarone, voriconazole)? (yes/no)
  4. Active spread in the last 4 weeks? (yes/no — for triage; never blocks).
- Step header: `Step 02 of 04 · Safety screen` mono.
- Progress bar (mono `12px` rule).
- Button row at bottom: `< Back` ghost + `Continue →` primary (disabled until all answered).

**Step 3 — Screen 2: Routing decision**
- **If any safety flag fires**: `<SafetyCallout severity="warn" title="Let's route you to a human first." body="...">` with `<Link href="/expert" className="btn-primary">Request an expert chart review · $89</Link>`. **No checkout shown.** Verbatim brand copy: *"The refusal is the conversion."*
- **If clear**: `<NinetyDayPackCard>` shows the curated pack (`getBundle("skin-resilience-90")` — 4 bottles labelled L01–L04 — with `<QualityStrip>` foot).

**Step 4 — Screen 3: Personalise**
- Three-tier picker: Starter / Core / Premium (`Segmented`). Updates the bundle products and price reactively.
- Subscription toggle: pill button "Subscription · refills every 90 days" / "One-time".
- Acknowledgement checkbox: *"I understand this is adjunctive natural support, not medical treatment, and I'll consult a professional about interactions."*

**Step 5 — Screen 4: Checkout**
- Forest "Start the regime" full-width button — `disabled` only on missing ack, **otherwise functional**. Onclick: `router.push('/checkout/confirm?bundle=skin-resilience-90&tier=' + tier + '&sub=' + sub)` (a new route to build).
- Below: ochre micro-copy: `test mode · no live payment`.

**Step 6 — `/checkout/confirm`** (new route — fixes the current dead-end)
- Order summary (cost breakdown table from `<CostBreakdownAccordion>`).
- "Confirm & activate companion" primary button → `router.push('/companion?onboarded=true&bundle=skin-resilience-90')`.

**Step 7 — `/companion?onboarded=true`** (existing route, but needs onboarding state)
- Greeting card: *"You're in. The website earned the sale; the app earns the year."*
- 7-pip streak strip starting at day 1.
- Today's 4-dose `DailyActionStack`.
- "Schedule expert review at week 4" forest card.

Every step has Back nav. Every step has a visible Step `NN/04` counter. **No screen ends without an explicit CTA.**

### 4.6 Companion mobile preview (always on journey page)

Section 13.5 (or wherever Patient Primer ends), insert `<TwoColTalkProduct>`:

- Left talk: `<SectionAnchor id="companion" eyebrow="The relationship" ordinal="—" title={<>The website earns the sale, <em>the app earns the year</em>.</>}>` + 3 stat cells (Adherence 93% / Journal entries 47 / Refill prompts 4).
- Right product: `<MobileCompanionMockup>` — iPhone frame, paper screen, greeting + 7-pip + DailyActionStack + refill card "86 days remaining".

### 4.7 Expert chart preview (always present)

Section 14 (after Closing paradigm), `<TwoColTalkProduct>`:

- Left: italic pull *"For when natural alone isn't enough."* + 3-row deliverable list.
- Right: `<ExpertChartPreview deliverables=[
    { d: "D1", title: "Diet chart", body: "South-Asian-adapted millet + amla + bitter-greens map" },
    { d: "D2", title: "Herb timing", body: "Conflict matrix with your meds resolved" },
    { d: "D3", title: "Stress & sleep", body: "Pranayama + Yoga Nidra cadence" },
    { d: "D4", title: "Refill review", body: "Quarterly chart re-review at week 13" },
  ] timeline=[{ wk: "W1", note: "Baseline + photos" }, { wk: "W4", note: "Chart delivered" }, { wk: "W13", note: "Re-review" }] sealText="Certified / Natural / Healing / — / Verified" price={89}>`

### 4.8 Closing trust band

Last block: dark-ink `<section style={{background: "var(--color-ink)", color: "var(--color-paper)"}}>` containing:

- Big serif: *"Not a chatbot. Not a blog. **The evidence OS** for natural health."*
- `<FoundationPillarRow>` (same 4 pillars as opener, paper-on-ink variant).
- Mono `<small>` disclaimer line.
- `<SectionFooter cue="End of journey" chapter="SC.15 · CLOSING">`

---

## 5. Section-by-Section Rendering Spec for the 15-Section Dossier

Every dossier section gets an entry. The `<DossierRender>` component must dispatch on heading text and produce the right composite — **markdown alone is no longer sufficient**, the prose is decorative, the components are load-bearing.

| Dossier section | Components composing the visual |
|---|---|
| **§1 Executive Summary** | `<SectionAnchor id="overview" ordinal="01">` + `<HubTrustHeader>` (breadcrumb, serif title, humility quote, meta-grid `Last refresh / Sources tracked / Update cadence`, badges, CTAs) + `<FoundationPillarRow pillars={4}>` (the 01/02/03/04 row) + `<EvidenceFeedBand>` + `<Disclaimer>`. |
| **§2 Mechanism Triad (4-node)** | `<SectionAnchor id="science" ordinal="02">` + `<TwoColTalkProduct>` with `<MechanismDiagram>` left and 4× `<MechanismRow ordinal name desc tag>` right (3-col grid: `[ordinal | mechanism+desc | terracotta action tag]`). Tail: `<ManifestoBand keyword="THE TRIAD RULE">`. |
| **§2.5 Sub-types & differential prognosis** | `<NeedCardGrid items={5}>` (NSV / Segmental / Acral / Mucosal / Mixed) — each `<NeedCard>` shows `[clinical features / dominant node / expected response]`. Selected sub-type sets a context that biases later filters. |
| **§3 OTC Phytochemicals** | `<SectionAnchor id="phyto" ordinal="03">` + intro paragraph + **`<PhytoTable>`** — a new component: rows = compounds; cols = Compound, Mechanism, Dose, Timing, **Take WITH** (mint chips), **Avoid WITH ≥2 h** (blush chips), Grade chip, Brand list, $/mo, Evidence cite. Below the table: 8–12 `<Accordion>` per ingredient using `<IngredientDive>` shape. |
| **§4 Traditional Medicine** | `<SectionAnchor id="traditions" ordinal="04">` + `<TraditionAccordion traditions={[Ayurveda, TCM, Unani, Siddha, Tibetan, Homeopathy]}>` — one accordion per tradition. Each open: header line (lineage + classical text), then a table of formulations using `<MechanismRow>` shape. Homeopathy gets the special italic preface ("*Homeopathy is honoured under the founder's mandate to explore all directions of alternative medicine. Modern evidence is contested; entries are presented as a documented tradition (Tier 3).*"). |
| **§5 Biophysical Interventions** | `<SectionAnchor id="biophysical" ordinal="05">` + `<BiophysicalGrid items={5}>` — 4-up card grid (PBM / Sun / Sauna / Cold / PEMF). Each card: device icon, dose protocol, frequency, evidence grade, contraindication chip. Below: `<Callout tone="warn" body="Pregnancy / pacemaker / photosensitising-drug-class contraindications">`. |
| **§6 Dietary Protocol** | `<SectionAnchor id="diet" ordinal="06">` + 3 sub-views via `<Tabs>`: (a) `<DietPrinciplesGrid>` (8 principle cards), (b) `<AvoidTable>` (food + severity tag + molecular reason + swap), (c) `<MealPlanWeek>` (7 day-tabs × 3 meal rows with gram quantities mono). Also §6.5 Environmental triggers → `<Callout tone="warn">` strip. §6.6 Cofactor floor → standard `table.data` (`<CofactorTable>`). |
| **§7 Lifestyle / Mind-Body Anchors** | `<SectionAnchor id="lifestyle" ordinal="07">` + 5 sub-cards (Yoga / Pranayama / Meditation / Sleep / NS-reset) each shown as `<MechanismRow>` rows (`[asana | §2 mechanism node targeted | duration | time of day]`). Below: `<WeekPeriodisation>` Mon–Sun × AM/mid/PM grid for §7.6 exercise. |
| **§8 Daily Unified Combos** | `<SectionAnchor id="combos" ordinal="08">` + 3 `<ProtocolCard>` (Combo 1 NRF2 / Combo 2 Gut-Skin / Combo 3 Rasayana) — one per row, full-width. Each card: ordinal "COMBO · 01", serif title, italic timing ("AM 08:00 / midday 13:00 / PM 19:00"), pathway tags, "Why this combo" + "Stack" 2-col body. TCM cycling note as `<Callout tone="note">`. |
| **§8.5 Master 24-Hour Day Plan** | `<SectionAnchor id="daily" ordinal="09">` + `<DayTimelineRail ticks={28}>` (horizontal 24-hour rail) + `<ScheduleTimeline items={28}>` vertical mock-pattern below. The right-rail sticky `<DailyActionStack>` is **derived from this section** (server-rendered). |
| **§9 Supplier Ecosystem + Monthly Cost** | `<SectionAnchor id="suppliers" ordinal="13">` + `<SupplierTable rows={11}>` (channel / sources / brands) + `<CostBreakdownAccordion>` table. Below: `<QualityStrip cells={["Standardisation", "Verification", "Sourcing", "Cadence"]}>`. Region toggle (US / IN / UK / EU / AU) filters brands. |
| **§10 Interaction Matrix** | `<SectionAnchor id="interactions" ordinal="10">` + a top `<Tabs>` choosing 10.1 Drug↔Supp / 10.2 Drug↔Food / 10.3 Supp↔Food / 10.4 Supp↔Supp / 10.5 Timing rules / 10.6 Strictly avoid. Each pane renders `<InteractionMatrix>` heat-grid (rows × cols with safe/caution/avoid chips). Pane footer: auto-emitted `<SafetyCallout severity="warn">` summarising the most dangerous row of that pane. |
| **§11 Clinical Scoring + Comorbidity** | `<SectionAnchor id="scoring" ordinal="11">` + `<ScoringInstrument>` card (VASI self-photographed cadence: baseline / Wk4 / Wk8 / Wk12 / Mo3 / Mo6 / Mo12) + below `<ComorbidityTable>` (autoimmune-thyroid / T2D / B12-deficit / celiac / Addison) with DTC provider chips. Also `<PhotosView>` and `<JournalView>` patterns from otc1 are folded in. |
| **§12 12-month Timeline** | `<SectionAnchor id="timeline" ordinal="12">` + `<WeekStrip phases={journey}>` (24 or 52 cells) + `<TwelveMonthArc steps={6}>` (Wk1–4 / Wk5–8 / Wk9–12 / Mo4–6 / Mo6–12 cards) + each segment expandable to a `<WeekBlock>` with Actions / Expect / Monitor / Red-flags. Closing `<Scoreboard stats={6}>` (Adherence / Spread arrest / Perifoll. dots / Repigment % / DTC labs / Cost saved). |
| **§13 Illustrative Case Composite** | `<SectionAnchor id="case" ordinal="—">` (sub-section under §12) + `<CaseStudyCard name="Anita, 34" baseline rows[]>` — 4-row vertical timeline (W4 / W12 / Mo6 / Mo12) with VASI + lab deltas + plain-English narrative. |
| **§13.5 Patient Primer** | `<SectionAnchor id="primer" ordinal="13">` rendered inside a warm tinted band: `background: var(--color-forest-tint); padding: 32px;`. Lay-language voice. Reuses `<MechanismRow>` for the 4-node recap. Ends with `<HumilityQuote>` *"You are sovereign over your own body."* |
| **§14 Independent Healing Paradigm + Closing** | `<SectionAnchor id="closing" ordinal="14">` rendered inside a dark-ink section (`background: var(--color-ink); color: var(--color-paper)`). Big italic serif: *"No prescription. No clinic. No hospital. No surgery."* + `<FoundationPillarRow paper-on-ink variant>` + `<ManifestoBand keyword="SOVEREIGNTY" body="The user owns their body and their healing path.">`. |
| **§15 References** | `<SectionAnchor id="references" ordinal="15">` + `<ReferencesList refs={dossier.references} filterByTopic>` numbered list with `[id]` mono + title + source + topic chip. Hash anchors `#ref-{id}` resolve from inline `<Cite>` popovers. Footer `<Callout tone="note">` about evidence quality. |

**Rendering pipeline.** `DossierRender` becomes a structured-parser: instead of one ReactMarkdown call, the source markdown's heading hierarchy is parsed into a `{id, ordinal, title, body, tables, lists}` AST and dispatched to the components above. Markdown body within each section still renders as `dossier-prose` for narrative paragraphs, but tables are extracted and bound to the named component (e.g. `## 3. OTC Phytochemicals` followed by a markdown table = mounts `<PhytoTable>` with the parsed rows).

---

## 6. Feature parity — every non-vitiligo journey needs these (checklist)

The implementer ticks these off per journey page. Source = the OTC mock + the deck reports.

1. [ ] `<DossierShell>` wrapper (sticky rail + top bar + mobile dock + hash + keyboard).
2. [ ] Section 01 Overview = `<HubTrustHeader>` + `<FoundationPillarRow>` + `<EvidenceFeedBand>` + `<Disclaimer>` (not the editorial hero we ship today).
3. [ ] `<MechanismDiagram>` SVG with **at least 3** satellite nodes — auto-generated from dossier §2.
4. [ ] `<MechanismRow>` 3-col rows for every mechanism / tradition / asana / scoring item.
5. [ ] `<NeedCardGrid>` for sub-types (sub-type filter must propagate).
6. [ ] `<TraditionAccordion>` for all 6 traditions even when empty (placeholder = "Tradition not yet researched for this ailment").
7. [ ] `<BiophysicalGrid>` if §5 exists in dossier.
8. [ ] `<MealPlanWeek>` 7-day grid + `<AvoidTable>` + `<CofactorTable>` for §6.
9. [ ] `<ProtocolCard>` × N for §8 combos (always at least 3 cards).
10. [ ] `<DayTimelineRail>` horizontal + `<ScheduleTimeline>` vertical for §8.5.
11. [ ] `<DailyActionStack>` sticky right-rail surface, derived from §8.5.
12. [ ] `<SupplierTable>` + `<CostBreakdownAccordion>` for §9.
13. [ ] `<InteractionMatrix>` per pane in §10.
14. [ ] `<ScoringInstrument>` card for §11 (instrument from dossier `meta.clinicalScoringInstrument`).
15. [ ] `<WeekStrip>` + `<TwelveMonthArc>` for §12 (lifted-without-modification from otc1).
16. [ ] `<CaseStudyCard>` in §13.
17. [ ] `<PatientPrimer>` band (forest-tint) for §13.5 — always written in lay language.
18. [ ] Dark-ink closing band with manifesto + pillars for §14.
19. [ ] `<ReferencesList>` filterable for §15, with `<Cite>` popovers wired across the page.
20. [ ] `<NinetyDayPackCard>` (one) + `<MobileCompanionMockup>` (one) + `<ExpertChartPreview>` (one) before footer — non-negotiable trinity.
21. [ ] `<ManifestoBand>` every 3rd section (3 / 6 / 9 / 12) — brand seal.
22. [ ] `<HumilityQuote>` at least 3× per journey page.
23. [ ] Build-my-regime CTA in top bar **and** in 3 other locations on the page.
24. [ ] All 15 sections **must have unique URL hash** matching the rail entries.
25. [ ] Step counter visible at all times.
26. [ ] Keyboard `←/→/J/K/1–9/Home/End` operational.
27. [ ] Refresh-date + sources-count + "no cure claims" badges visible above the fold.
28. [ ] Evidence grade chip within 4px of every claim.
29. [ ] **Zero dead-end CTAs** — every button either navigates or shows a confirmation state.

---

## 7. Dead-end audit of `/c/[category]/package`

Read against `nichecore/app/c/[category]/package/page.tsx` (lines 1–153) and the mock B07 / B09 flow.

| # | Symptom | Line(s) | Fix |
|---|---|---|---|
| **D1** | "Start my … regime" button is `disabled={!ack}` but has **no onClick** — even when enabled, clicking does nothing. | line 115 | Add `onClick={() => router.push(\`/checkout/confirm?bundle=${bundle.id}&tier=${budget}&sub=${sub}\`)}` (requires `import { useRouter } from "next/navigation"`). Create new route `/checkout/confirm` per §4.5 step 6. |
| **D2** | "test mode · no live payment" copy implies confirmation but **no confirmation screen exists**. | line 118 | Build `/checkout/confirm/page.tsx` — order summary + `<CostBreakdownAccordion>` + "Confirm & activate companion" primary → `/companion?onboarded=true&bundle=…`. |
| **D3** | NextStep at the bottom routes to `/companion` but `/companion` has no onboarded-from-purchase state. | line 126 | Read `?onboarded=true&bundle=…` in `/companion/page.tsx` and render a 7-pip streak strip starting at day 1 + greeting card *"You're in. The website earned the sale; the app earns the year."* |
| **D4** | Safety screen only asks 2 questions (`meds`, `pregnant`); mock B06 specifies 4 (also photosensitising drug + spread-in-last-4-weeks). | lines 45–46 | Add `photo` and `spread` to state. `flagged = meds === true || pregnant === true || photo === true;` (`spread` is informational only — never blocks checkout). |
| **D5** | Safety flag routes to `/expert` which is a generic page — should be deep-linked with intake. | line 78 | Change to `<Link href={\`/expert?from=${category.id}&reason=safety-flag\`}>` and pass through to expert page so the chart-request form pre-fills. |
| **D6** | The "Request expert review" CTA in `flagged` state is the **only CTA** — user can't proceed to learn more about expert. | line 78 | Add secondary `<Link href="/expert" className="btn-ghost">Learn more about expert review</Link>` below. |
| **D7** | Budget pills update `budget` state but **products/price are not recomputed** from tier. | lines 49–55 | Build `getBundleForTier(categoryId, tier)` selector that returns Starter (3-bottle) / Core (4-bottle) / Premium (4-bottle + PBM). Re-render `bundle.products` and `price` from this. |
| **D8** | Subscription toggle saves to `sub` but no copy explains the price delta. | lines 102–105 | Add line: `<span className="small">Save ${bundle.price - bundle.subscriptionPrice}/cycle with subscription</span>`. |
| **D9** | No Back / progress-step affordance — user has no idea this is step N of K. | top of page | Add `<StepIndicator current={2} total={4} labels={["Choose pack", "Safety screen", "Personalise", "Confirm"]}>` at top of section. |
| **D10** | `<NextStep>` after checkout assumes purchase completed; if user bounces back before clicking start, the "06 · Companion" copy is wrong. | lines 126–133 | Conditionally render: if `ack` and `screened && !flagged` → "Activate the companion"; otherwise → "Build my regime" routing back to start of safety screen. |
| **D11** | No "remove from cart / start over" affordance. | global | Add `<Link href={`/c/${category.id}`} className="btn-ghost">< Back to category hub</Link>` at top-left. |
| **D12** | No feedback that the bundle is "for vitiligo" specifically — generic title "Your personalised regime" loses context. | line 34 | Show `<Breadcrumb crumbs={["Skin", "Vitiligo journey", "Build my regime"]}>` and switch title to `Your 90-day {journey.name} pack`. |

**Net rewrite of `/c/[category]/package/page.tsx`**: split into 4 steps using `useState<"pack"|"screen"|"tier"|"confirm">("pack")` plus visible `<StepIndicator>`. Every step has both `Back` (ghost) and `Continue` (primary). The page only navigates **off** to either `/expert` (safety flag) or `/checkout/confirm` (clear).

---

## 8. Playwright Fidelity Tests

Each test gets a title, route, action, assertion. Add to `tests/journey/`.

1. **Rail is sticky on scroll.** Route `/skin/vitiligo`. Scroll `window` by 1200px. Assert: `[data-component=DossierShell-rail]` still has `bbox.top <= 0` and remains visible in viewport.

2. **Top bar appears after 800px scroll.** Route `/skin/vitiligo`. Scroll 800px. Assert: `[data-component=TopBar]` is visible AND its child `Section NN / 15` reads `Section 02 / 15` (or higher) — i.e. scroll-spy advanced.

3. **Build my regime navigates within 2s.** Route `/skin/vitiligo`. Click `text=Build my 90-day regime`. Assert: URL becomes `/c/skin-pigmentation/package` within 2000ms AND `[data-component=SafetyQuiz]` is visible.

4. **Safety screen flags pregnancy → routes to expert, no checkout.** Route `/c/skin-pigmentation/package`. Answer Q1 No, Q2 Yes (pregnant), Q3 No, Q4 No. Click Continue. Assert: `text=Let's route you to a human first.` is visible AND `text=Start my regime` is **not** in the DOM AND `[href^="/expert"]` is visible.

5. **Safety-cleared → reaches checkout-confirm.** Route `/c/skin-pigmentation/package`. Answer all four No. Click Continue → tier=Core → check ack → click `Start my … regime`. Assert: URL becomes `/checkout/confirm?bundle=skin-resilience-90&tier=core&sub=true` AND `text=Order summary` is visible.

6. **Checkout-confirm → companion onboarded.** Route `/checkout/confirm?bundle=skin-resilience-90&tier=core&sub=true`. Click `Confirm & activate companion`. Assert: URL becomes `/companion?onboarded=true&bundle=skin-resilience-90` AND `text=You're in.` is visible AND `[data-component=StreakStrip]` shows 7 pips with pip 1 active.

7. **Mitigation row shows 3 quick-actions.** Route `/skin/vitiligo`. Scroll to `#mitigations` (Section 03 head). Assert: 3 `<NeedCard>` are visible — `Read the protocol`, `Build the pack`, `Activate companion`. Each has a non-empty `href`.

8. **Mechanism row → action tag.** Route `/skin/vitiligo`. Inside `#science`, assert: `<MechanismRow>` count >= 4, each contains an ordinal AND a tag whose text matches one of `["NRF2 botanicals","Gut healing","SCFA recovery","HPA reset"]`.

9. **Tradition accordion has 6 traditions.** Route `/skin/vitiligo`. Scroll to `#traditions`. Assert: 6 accordion headers visible — `Ayurveda`, `TCM`, `Unani`, `Siddha`, `Tibetan`, `Homeopathy`. Click `TCM`: body becomes visible AND contains text `Bai Dian Feng Wan` (the formula from dossier §4.2).

10. **Keyboard ←/→ advances sections.** Route `/skin/vitiligo`. Focus `body`. Press `ArrowRight`. Assert: URL hash becomes `#science`. Press `ArrowRight` 13 more times. Assert: hash becomes `#references`.

11. **Digit key jump.** Route `/skin/vitiligo`. Press `5`. Assert: URL hash becomes `#biophysical` (section 05) AND that section is in viewport.

12. **Step counter updates on scroll.** Route `/skin/vitiligo`. Scroll to `#diet` (~section 06). Assert: `[data-component=StepCounter]` reads `Section 06 / 15`.

13. **DailyActionStack is sticky.** Route `/skin/vitiligo`. Scroll 2000px. Assert: `[data-component=DailyActionStack]` has `bbox.top >= 0 && bbox.top < 200`. Click first dose row. Assert: URL hash becomes the matching phyto entry id (e.g. `#phyto-polydatin`).

14. **Evidence feed has at least 3 graded findings.** Route `/skin/vitiligo`. Within `[data-component=EvidenceFeedBand]`, assert: >=3 `<GradeBadge>` rendered AND each has a `[role=img][aria-label*="Evidence grade"]`.

15. **All 50 atlas journeys have a 360° dossier or a placeholder.** For each `j` in `journeys`: navigate to `j.route`. Assert: either `[data-component=DossierRender]` is visible OR a placeholder card with `text=This journey is on the roadmap.` is visible. **No 404, no blank page.**

16. **Expert chart preview is present on every journey.** For each `j` in `journeys`: navigate. Assert: `[data-component=ExpertChartPreview]` is visible AND contains `text=Certified Natural Healing`.

17. **Mobile companion preview is present.** For each `j`: assert `[data-component=MobileCompanionMockup]` is visible.

18. **No dead-end CTAs.** For each `<button>` and `<a>` on `/skin/vitiligo` (and 10 random other journeys): assert either it has an `href` resolving to a 2xx route OR it has an `onClick` handler attached (DOM property test). Fails if any button has neither.

19. **Refresh + source-count badges above the fold.** Route `/skin/vitiligo`. Within first viewport (`y < window.innerHeight`), assert: `text=/Refreshed \d+d ago/` AND `text=/\d+ sources/` AND `text=No cure claims` are all visible.

20. **Manifesto band every 3rd section.** Route `/skin/vitiligo`. Count `[data-component=ManifestoBand]` after `#science`, `#diet`, `#daily`, `#timeline` — expected 4 or 5.

---

## 9. `data.js` / `data-extra.js` Schema Mapping

The mock's mini-database vs. our `lib/types.ts`. **Net: our schema is 60% there. Below are the gaps.**

| Mock entity | Mock shape (data.js / data-extra.js) | Our schema | Gap / migration |
|---|---|---|---|
| `tracks` (vitiligo / diabetes / both) | `{ id, label, headline, blurb, color, mark, priority_protocols[], primary_metrics[], monthly_cost_low/high, timeline }` | — | **ADD** `Track` interface. Live for journeys that have multi-track filtering (diabetes-only / vitiligo-only / both). |
| `triad` (the shared mechanism nodes) | `{ id, name, one_liner, plain, deeper, targets[], botanicals[], refs[] }` | `Category.mechanisms` is `string[]` — too thin | **EXTEND** `Mechanism` interface with `oneLiner, plain, deeper, targets, botanicals, refs`. Required for `<MechanismDiagram>` + `<MechanismRow>`. |
| `protocols` (the 4 OTC stacks) | `{ id, name, novelty, headline, targets[], pathways[], why, ingredients[{name, dose, role, refs[]}], benefits[], confidence, pairs_with[] }` | `ProtocolLayer` is similar but lacks `novelty, pathways, confidence, pairs_with` | **EXTEND** `ProtocolLayer` with these fields. Map `ingredients` 1:1 to existing `Ingredient`. |
| `diabetes_addons` / `vitiligo_addons` | `[{ name, dose, why, refs[] }]` | — | **ADD** `Addon` interface. Each `Category` has `addons: Addon[]`. |
| `schedule` (24-hour day plan) | `[{ time, block, actions[] }]` | `Category.dailySchedule: string[]` — too thin | **EXTEND** `ScheduleSlot { time, block, actions[], track? }`. The track filter excludes diabetes-only actions on vitiligo track and vice-versa. |
| `rotation` (28-day weekly rotation) | `[{ week, focus, am, pm }]` | — | **ADD** `RotationWeek` interface. Per-category. |
| `diet_principles` | `[{ title, detail, refs[] }]` | — | **ADD** `DietPrinciple`. |
| `diet_days` (7-day meal plan) | `[{ day, focus, meals: { breakfast, lunch, dinner } }]` | — | **ADD** `MealDay { day, focus, meals }`. |
| `foods_to_avoid` | `[{ food, severity, why, refs[], swap }]` | — | **ADD** `AvoidItem` with `severity: "absolute"|"high"|"moderate"|"trial"`. |
| `pbm` (photobiomodulation) | `{ intro, protocol[], cautions[], devices[{name, price, leds, use}], refs[] }` | — | **ADD** `Biophysical { kind: "pbm"|"sauna"|"cold"|"pemf", intro, protocol[], cautions[], devices[], refs[] }`. |
| `shopping` (cross-vendor) | `[{ id, name, category, ingredient, dose, priority, vendors[{store, price, note}] }]` | `Product { name, supplier, role, format, price, qualityScore, qualitySignals[], evidenceGrade }` — single vendor only | **EXTEND** `Product` with `vendors: Vendor[]` and `priority`. Migrate existing single-vendor data by wrapping into a 1-elt array. |
| `case_study` | `{ name, baseline, weeks[{range, change}] }` | — | **ADD** `CaseStudy` interface. Per-journey. |
| `journey` (per-track 24-week phases) | `{ vitiligo: WeekBlock[], diabetes: WeekBlock[], both: WeekBlock[] }` where `WeekBlock = { phase, weeks, title, focus, actions[], expect, monitor[], red_flags[] }` | `Category.expectedTimeline: TimelineStep[{week, title, description, metric}]` — too thin and not track-aware | **EXTEND** `TimelineStep` with `phase, focus, actions, expect, monitor, redFlags`. **OR** add separate `journeyByTrack: Record<TrackId, WeekBlock[]>`. |
| `recipes` | `[{ id, name, track, time, category, ingredients[], method, why, notes }]` | — | **ADD** `Recipe`. |
| `ingredients` (deep-dives) | `[{ id, name, binomial, track, summary, mechanism, evidence_T2D, evidence_vitiligo, dose, bioavail, caution, refs[] }]` | `Ingredient { name, role, dose, timing, grade, cautions[], qualityMarkers[] }` | **EXTEND** existing `Ingredient` with `binomial, summary, mechanism, evidenceByAilment: Record<ailmentId,string>, bioavailability`. |
| `labs.baseline` | `[{ name, who, normal, target_t2d?, note, priority }]` | — | **ADD** `Lab` interface. |
| `faqs.{track}` | `[{ q, a }]` | — | **ADD** `FAQ` interface (track-aware optional). |
| `troubleshooting.{track}` | `[{ symptom, check[], fix }]` | — | **ADD** `TroubleItem`. |
| `references` (master bibliography) | `[{ id, title, source, topic }]` | `SourceRef { id, title, publisher, year, url, sourceType }` | Schemas are compatible. Mock `source` → our `publisher` + `year` (parse). Mock `topic` → our `sourceType` (mapping). Migrate the 50+ refs across. |
| Mock interactions (drug × supp × food × exercise × sleep matrices) | implicit in `safety` page tables | — | **ADD** `Interaction { domain: "drug"|"food"|"supplement"|"exercise"|"sleep", a, b, mechanism, risk: "avoid"|"caution"|"safe", action }`. Build heatmap from this. |

**Action items for `lib/types.ts`**: add ~15 new interfaces above and extend 6 existing ones. Then add `lib/seed/{vitiligo,diabetes,...}.ts` files mirroring the mock's `data.js` shape but per-ailment (not multi-track unless a journey is truly dual like vitiligo+diabetes).

For now, the **dossier markdown remains the source of truth** for prose, but **structured data lives in seed files** and the dossier-render dispatcher reads both.

---

## 10. `uploads/*.md` Content — What's New Beyond Dossiers

### otc1/uploads/

| File | Lines | Adds |
|---|---|---|
| `vitiligo and diabetis research.md` | 603 | The **complete cross-protocol evidence package** that the otc1 site renders. Adds: (a) full **Polydatin GPX4 binding affinity −7.8 kcal/mol** number that's missing from our `vitiligo-support.md` §3; (b) **MCPS-3 monosaccharide ratio** `10.66 : 3.66 : 258.0 : 1.0 : 51.0 : 9.338` (our dossier has the polysaccharide but not the ratio); (c) the **β-cell viability >90% with polydatin** stat; (d) **HbA1c −0.71% + FBS −17.84 mg/dL** meta-analysis for Nigella oral, cited verbatim by the mock; (e) the **TCM × microbiome butyrate 2.5×** finding; (f) the **Khadir diet** branding lift and explicit "sprouted ancient millets" framing; (g) detailed mention of `Akkermansia / Faecalibacterium / Blautia` species. → **Update `vitiligo-support.md` §3 phyto table** with the missing numbers; add a **`blood-sugar-support.md` companion §3** with the Nigella stats. |
| `grok-vitiligo-diabetes-full-transcript.md` | 2,634 | Drug-repurposing thought stream: PPARγ agonists (pioglitazone), Metformin AMPK→Treg pivot, Fibrates (PPARα), Phenome AI Platform reference, NCT05607316 trial. Adds: (a) **out-of-the-box existing-drug combo candidates** ranked by impact — useful for §10.1 expanded interaction matrix; (b) **kaempferide as multi-target AI-discovered candidate** (we already have kaempferol — extend with kaempferide variant note); (c) the **UK NHS Opzelura approval Feb 2026** date stamp; (d) **AbbVie upadacitinib RINVOQ submission Feb 2026** — for evidence-feed currency. → **Add to `vitiligo-support.md` §10.1** a one-line note that PPARγ/metformin/fibrates are AI-flagged repurposing candidates the user "may already be on for comorbidities" with the standard `if you are already on it` framing. |

### NatureNicheCure1/uploads/

(Already audited in `MOCK_UX_REPORT.md` §9.) Net for this redesign:

| File | Load-bearing contribution |
|---|---|
| `02_product_prd.md` | Confirms "consumer need-first, not medical taxonomy" — drives §3 sub-types and §5.3 `<NeedCardGrid>`. |
| `04_viticore_reference_pattern.md` | The visual reference for every above-the-fold pattern. |
| `06_monetization_and_business_model.md` | Pricing tiers ($89/$148/etc) baked into `<NinetyDayPackCard>` and `<ExpertChartPreview>`. |
| `08_safety_compliance_guardrails.md` | The 4-question safety screen and the routing logic. |
| `11_evidence_driven_doctrine.md` | The grade rubric (A/B/C/D/T/H/X) and the **US blacklist** (no FDA / FTC / ADA / AHA / AAD / AMA / CDC as authority). |
| `12_mobile_continuity_and_recurring_revenue.md` | The "website earns the sale, app earns the year" framing for `<MobileCompanionMockup>`. |

Everything else in `NatureNicheCure1/uploads/` is meta or covered by current corpus.

---

## 11. Implementation Phasing

Six phases. Each phase has a definition-of-done. Phases run roughly 1–2 weeks each.

### Phase 1 — Design system + shell (verifies on `/skin/vitiligo`)

Build:
- Replace `@theme` block in `globals.css` with §1.5 verbatim.
- Add `eyebrow--accent`, `eyebrow--gold`, `callout`, `callout--note`, `callout--warn`, `callout--ok`, `card-tinted`, `card-warn`, `rule-line` utilities.
- Build `<DossierShell>`, `<TopBar>`, `<LeftRailNav>`, `<NavGroup>`, `<NavItem>`, `<MobileTabStrip>`, `<MobileDock>`, `<StepCounter>`, `useActiveSection` hook (scroll-spy with IntersectionObserver), keyboard listener (`←/→/J/K/1–9/Home/End`).
- Wrap `/skin/vitiligo` in `<DossierShell>` with 15 placeholder section anchors.

DoD: Playwright tests #1, #2, #10, #11, #12 pass. Lighthouse a11y ≥ 95 on the new shell.

### Phase 2 — Section primitives + dossier dispatcher

Build:
- `<SectionAnchor>`, `<SectionFooter>`, `<ManifestoBand>`, `<HumilityQuote>`, `<PageHead>`, `<Callout>`, `<Disclaimer>`, `<FoundationPillarRow>`, `<TwoColTalkProduct>`.
- `<MechanismDiagram>` SVG (copy from otc1 `<TriadDiagram>` with our token bindings).
- `<MechanismRow>`, `<NeedCardGrid>`, `<NeedCard>`.
- `<EvidenceFeed>`, `<EvidenceFeedBand>`, `<Cite>` popover (works without JS via `#ref-{id}` fallback).
- Refactor `<DossierRender>` to parse markdown headings → AST → dispatch to components.

DoD: Section 01 (Overview) + Section 02 (Mechanism) + Section 14 (Closing) of vitiligo render entirely from components, not raw prose. Playwright tests #7, #8, #14, #19, #20 pass.

### Phase 3 — Protocols, traditions, biophysical, diet

Build:
- `<ProtocolCard>`, `<IngredientCard>`, `<IngredientDive>`, `<NoveltyScore>`.
- `<TraditionAccordion>`, `<Accordion>`, `<Tabs>`.
- `<BiophysicalGrid>`.
- `<MealPlanWeek>`, `<DietPrinciplesGrid>`, `<AvoidTable>`, `<CofactorTable>`.
- `<RecipeCard>`.
- Schema migration step 1: add `Track`, `Mechanism`, extended `ProtocolLayer`, `Addon`, `ScheduleSlot`, `Biophysical`, `Recipe`, extended `Ingredient`, `Lab`, `FAQ`, `TroubleItem`, `AvoidItem`, `MealDay`, `DietPrinciple`, `Interaction`, `CaseStudy` to `lib/types.ts`.

DoD: Sections 03–07 of vitiligo render from components. Playwright test #9 passes. Build is clean.

### Phase 4 — Daily plan, scoring, timeline, primer

Build:
- `<ScheduleTimeline>`, `<DayTimelineRail>`, `<DailyActionStack>` (sticky right-rail).
- `<WeekStrip>`, `<WeekBlock>`, `<TwelveMonthArc>`.
- `<ScoringInstrument>`, `<ComorbidityTable>`, `<JournalView>`, `<PhotosView>`.
- `<InteractionMatrix>` heat-grid + `<SafetyCallout>` auto-emit.
- `<CaseStudyCard>`, `<PatientPrimer>` band.
- `<RefillCard>` + `<MobileCompanionMockup>` (iPhone frame).

DoD: Sections 08–13.5 render. Playwright test #13 passes. The right-rail `DailyActionStack` is functional on vitiligo journey.

### Phase 5 — Package flow rebuild + commerce + expert preview

Build:
- New components: `<NinetyDayPackCard>`, `<BottleCard>`, `<QualityStrip>`, `<SupplierTable>`, `<CostBreakdownAccordion>`, `<VendorPill>`, `<ExpertChartPreview>`, `<WaxSeal>`, `<RevenueFlywheel>`, `<Scoreboard>`.
- Rebuild `/c/[category]/package/page.tsx` per §7 dead-end audit — 4-step wizard with `<StepIndicator>`.
- Build `/checkout/confirm/page.tsx` (new route).
- Wire `/companion/page.tsx` to handle `?onboarded=true&bundle=…` query.
- Build `<SafetyQuiz>` 4-question component.
- Update `<NextStep>` to conditionally render based on completion state.

DoD: Playwright tests #3, #4, #5, #6, #18 pass. No dead-end CTAs on `/skin/vitiligo` or `/c/skin-pigmentation/package`. The full Atlas → journey → package → confirm → companion flow succeeds in <15s end-to-end.

### Phase 6 — Generalisation to all 50 journeys + content sync

Build:
- Apply `<DossierShell>` + section dispatcher to every `/[domain]/[slug]` page.
- For each journey lacking a 15-section dossier, render a "roadmap placeholder" inside the shell so navigation is identical.
- Sync `vitiligo-support.md` with `otc1/uploads/vitiligo and diabetis research.md` numerical additions (polydatin binding, MCPS-3 ratio, β-cell viability, Nigella meta-analysis stats).
- Add the §10.1 PPARγ / metformin / fibrate AI-repurposing note from grok transcript.
- Build the Playwright fidelity suite (§8 tests 1–20) and wire it into `package.json` test script.
- Run Lighthouse on 4 reference journeys; achieve 100/100 on Performance, A11y, Best-Practices, SEO.

DoD: All 20 Playwright tests pass. Test #15 (no 404s, no blank pages across all 50 journeys) is green. Test #16 + #17 (expert preview + companion mockup on every journey) green. Founder ISO certification target re-achieves 149/149 + 100×4 Lighthouse.

---

## 12. Closing — non-negotiables

- **Every italic word in a serif headline must be forest-coloured.** Hard rule. (Mock: "*Two diseases*", "*without the snake oil*", "*terrain*", "*ninety days*", "*the refusal is the conversion*".)
- **Every claim sits within 4px of its `<GradeBadge>`.** No orphan claims, no decorative grades.
- **The honest-refusal copy is the same on every dossier**: *"No honest platform can promise that."* The constancy is the brand.
- **Terracotta is reserved for safety + H-grade + emotional zero-state**. Never decorative.
- **Ochre is reserved for editorial highlight + mono eyebrows + wax seal**. Never status.
- **Every section ends with either a `<ManifestoBand>` or a `<SectionFooter>` cue.** No section ends mid-paragraph.
- **The persistent step counter (`Section NN / 15`) is visible at all times.** This is the single most important affordance separating us from "a long Medium article".

Built straight against this spec, the implementer never re-interprets — every component, every prop, every dead-end fix, every test, every CSS variable is in scope above.
