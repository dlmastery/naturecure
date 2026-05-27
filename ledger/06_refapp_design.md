# 06 — Reference App & Design Language Ledger

Sources read: `_snapshot/status.md`, `INSTALL_GUIDE.md`, `CODEX_RESUME.md`,
`personalized-ayurveda-ai/README.md` + `PROJECT_BOOK/{README,TASKS,evidence-ledger}.md`,
`zip-inspection-original/README.md`, plus six design images from
`journey-deck/output/` and `deck-inspection/Vitiligo_Journey_pptx_media/`.

This fragment captures (1) the prior build's tech/run model, (2) the
personalized-ayurveda-ai reference app, (3) the DESIGN LANGUAGE (primary focus),
and (4) production boundary reminders.

---

## 1. Tech Stack & Run Model (Prior Build)

The shipped prototype is `nichecore-app/`, a full-stack local product.

- **Frontend:** React 19 + TypeScript + Vite. Styling is hand-written CSS in
  `src/styles.css` (no framework). Icons via `lucide-react`.
- **API:** Native Node HTTP server, `server/api.mjs` (no Express). REST-ish
  endpoints under `/api/...` (agent tasks, journeys, evidence, cart/checkout,
  payments, fulfillment, suppliers/COA, guru, experts, companion, admin/ops).
- **Persistence:** A single JSON file, `server/db/nichecore-db.json` — local
  test-mode state only. Reset via `POST /api/test/reset`.
- **AI boundary:** `@google/genai` (`gemini-3-flash-preview` pattern) in
  `src/services/geminiGuru.ts`, with a reviewed-content local fallback when no
  key is present. Key var: `VITE_GEMINI_API_KEY`.
- **Testing/QA:** Playwright (`scripts/full-e2e.mjs`) + custom "RALPH" audit and
  goal scripts under `scripts/`.

**Ports / URLs (local):**
- Web (Vite): `http://127.0.0.1:5184`
- API (Node): `http://127.0.0.1:4184`
- Health: `http://127.0.0.1:4184/api/health` → `{ "ok": true, "db": "..." }`

**Key npm scripts:** `dev` (Vite), `api` (Node API), `build`, `lint`
(`tsc --noEmit`), `verify:agentic-ux`, `test:e2e` (Playwright), and audit
scripts (`audit:ralph`, `audit:ops`, `audit:agentic`, `audit:prd-goal`,
`audit:journeys`, `audit:full-product`). Run model: start `api` in one terminal,
`dev` in another; Node 20+, `npx playwright install chromium` for E2E.

**Last known-good gate (2026-05-17):** lint pass, build pass,
`verify:agentic-ux` 42/0, `test:e2e` 101/0, `audit:full-product` local gate
passed (100 loops: 88 achieved, 6 blocked, 6 human-approval).

---

## 2. The personalized-ayurveda-ai Reference App

**What it was:** The seed/inspiration. Originally a Google **AI Studio** starter
("Run and deploy your AI Studio app"), a minimal Vite/React + Gemini scaffold.
It was inspected and refactored into an early **"NicheCore Protocol Factory"** —
a VitiCore-style research hub for high-value natural-wellness niches (hair loss,
weight, glucose, eyesight). The directory name is a historical artifact; the app
is not Ayurveda-specific.

**What it provided / structure:**
- A VitiCore-style **research-hub UI** (research controls first, not a marketing
  page) with static protocol "seed cards" for big markets.
- **Gemini-powered on-demand research briefs** with Google Search grounding and
  public **YouTube URL digestion** (video understanding).
- **Medical-disclaimer-first** safety/contraindication sections.
- Local-only registry and recent-report storage.
- A `PROJECT_BOOK/` governance trail (README/TASKS/evidence-ledger) using a
  "meta-factory" model with explicit gates: implementation gate (`npm run build`
  passes), AI gate (must use `@google/genai`, search grounding, YouTube parts),
  safety gate (every output carries disclaimer + contraindications + evidence
  limits + physician-consult language), UI gate (usable controls on first
  screen), traceability gate (project book records scope/tasks/evidence).

**What to BORROW:**
- Research-first / outcome-first UI posture over passive browsing.
- Evidence discipline: every AI/research output carries citations, confidence,
  contraindication flags, and explicit evidence gaps (graded claims).
- Safety-first framing (educational positioning, no cures, no "no side effects").
- The seed-card pattern for quickly populating niches.
- Gemini-with-graceful-fallback boundary.

**What to AVOID:**
- The legacy/misleading directory name (`personalized-ayurveda-ai`).
- Treating AI/YouTube/social as evidence — they map demand/misinformation only.
- Hard dependence on a live Gemini key for the app to be usable (keep fallback).
- Shipping any clinical/diagnostic/treatment claim — it is educational only.

---

## 3. DESIGN LANGUAGE (primary)

The snapshot contains **two coexisting visual systems**. Both share the same
brand DNA (deep forest green, warm off-white paper, evidence-graded color
coding, anti-hype tone) but express it differently. A rebuild should treat the
**editorial serif system as the brand/marketing voice** and the **material card
system as the product/app UI**, unified by one palette.

### 3A. Material / Product-UI system (`journey-deck/output/desktop-material-*`)
Slides 01 (Consumer Catalog), 04 (Mechanism Map), 08 (Member Regime Dashboard).

**Color palette (approx hex):**
- Page background: warm near-white / bone, ~`#FBFBF7`–`#F7F8F3`.
- Brand green (primary, logo tile, active nav, dark cards): deep forest
  ~`#0E3B2E` / `#0F3D2E`, near-black-green.
- Mint / green tint card (Layer 01, "complete", positive): ~`#D8EFE0` fill,
  text ~`#1B5E43`.
- Sky-blue tint card (Layer 02, "evidence", info/up-next): ~`#D6E9F5` fill,
  text ~`#1F4E6B`.
- Amber/butter tint card (Layer 03, caution / "no cure claims" / refill):
  ~`#FBE3A6` fill, text ~`#8A6516`.
- Lavender/violet tint card (Layer 04, gut/dinner): ~`#E7DBF7` fill, text
  ~`#5B3E8F`.
- Blush/rose tint card (Layer 05, stress/supportive): ~`#F8DDD8` fill, text
  ~`#9B4A3F`.
- Neutral grays for nav rail dots and secondary text: ~`#6B6B6B` on a faint gray
  sidebar ~`#ECEDE7`.
- Pill "agree/save" buttons sit as small light-gray/green capsules.

**Typography feel:** Clean humanist **sans-serif** (Inter/Helvetica-Now
feel). Big bold headline question ("What do you want support with?",
"From biology to support layers", "Day 12 of 90"). Tiny ALL-CAPS letterspaced
eyebrow labels ("LAYER 01", "BREAKFAST", "ADHERENCE", "REFILL WINDOW"). Large
numeric KPIs (86%, 12 days, 1 new, Day 12 of 90) in heavy weight for instant
scanning. Body is calm gray, comfortable line length.

**Layout structure:**
- Thin **left vertical nav rail** with a green NC logo tile at top, then a
  stacked icon+label menu: Needs → Evidence → Hub → Fit → Regime → Store → Guru
  → Expert → Member. Active item gets a soft green rounded highlight. This is the
  product spine — the customer journey expressed as navigation.
- Top bar: page title + one-line subtitle on the left; a **rounded search pill**
  ("Search evidence, herbs, nutrients, routines") centered; small status chips
  on the right ("04 / 12" progress chip in green, "May 2026" date chip, a round
  blue avatar dot).
- Body is a **two-zone grid**: a tall white "hero/primary" rounded card on the
  left, and a **2×N grid of soft pastel tinted cards** on the right (or a flat
  catalog grid of white cards as on slide 01).

**Component styling:**
- **Cards:** Generously **rounded corners (~16–24px)**, soft, mostly flat with
  faint shadow; large internal padding. Each card = one concept. The pastel fill
  encodes meaning (green=positive/evidence-backed, blue=info, amber=caution,
  violet/rose=supportive layers).
- **Dark green "Rule"/"Output"/CTA cards:** deep-green near-black blocks with
  white text used for governance statements ("A mechanism does not become a
  product until evidence grade, safety note... attached") and primary actions
  (a mint "Build Regime" pill button on dark green).
- **Badges/chips:** small, lowercase or sentence-case status words colored to
  match their card ("complete", "up next", "reminder", "A/B evidence",
  "B/C evidence", "C evidence", "supportive", "B support"). Evidence grade is a
  first-class badge.
- **Buttons:** pill-shaped; primary = solid dark green or mint-on-green;
  secondary = light gray capsule.
- **Spacing:** airy, lots of whitespace, consistent gutters; nothing dense.

**Mood:** Calm, clinical-but-warm, trustworthy SaaS health dashboard. Reads like
a well-designed habit/health app, not a supplement store.

### 3B. Editorial / Brand system (`deck-inspection/image-1-1, 5-1, 10-1`)
Slide-1 cover ("The vitiligo journey, without the snake oil."), Mechanism Map
("Each mechanism maps to a daily action."), Guru ("The guru wins by refusing to
overpromise.").

**Color palette (approx hex):**
- Background: warm cream / **paper** ~`#F1EDE3` / `#EFEAE0`.
- Ink: near-black charcoal ~`#1A1A17` for body and most headline glyphs.
- Brand green accent: same forest ~`#0E3B2E`, used for the italic emphasis words
  and the logo dot, and for the dark mechanism "hypothesis" disc.
- **Gold / brass accent:** ~`#B08A3E` / `#A9852E` for eyebrow rules, numerals
  ("01 02 03 04"), small "•" bullets, and tick-marks on the diagram — the
  "evidence/premium" highlight color.
- Muted gray-brown for secondary captions.

**Typography feel:** **High-contrast editorial serif** (Didone/Tiempos-like
display) for headlines, with **italic serif used for the emotional emphasis
word** in each title ("*without* the snake oil", "Each *mechanism* maps",
"refusing to *overpromise*"). Eyebrows and metadata are **monospaced /
letterspaced ALL-CAPS** ("PRODUCT WALKTHROUGH — ONE AILMENT, END TO END",
"MAY 2026 / VITILIGO JOURNEY", "04 / MECHANISM MAP"). This serif+mono pairing is
the signature look: literary authority + lab-notebook precision.

**Layout structure:**
- Magazine/whitepaper layout. Top-left wordmark ("• NICHECORE" or
  "NicheCore / Evidence OS"), top-right running header (section number + date).
- A gold horizontal **eyebrow rule** introduces a kicker line, then a huge serif
  headline, then a serif-italic standfirst paragraph.
- **Numbered horizontal lists** ("01 Evidence first / 02 Natural protocols /
  03 Recurring care / 04 Honest boundaries") with gold numerals, separated by
  thin hairline rules.
- Diagrams are minimal and elegant: a **concentric-circle "stress loop"** with a
  dark green center disc labeled "Melanocyte stress loop" and gold/black orbit
  dots; mechanisms listed beside it as a clean numbered ledger.

**Component styling (editorial):**
- **Hairline dividers** (thin 1px) instead of boxes; whitespace does the
  separating.
- **Guru chat module** rendered tastefully: user bubble = solid dark
  charcoal/green pill with white text ("Will this regime repigment my patches?");
  assistant answer = soft paper card labeled "HONEST ANSWER · EVIDENCE-AWARE"
  with serif body and italic emphasis on biology terms; a small "• ONLINE"
  status and a dark "Prepare those questions →" CTA pill.
- Tone of copy is itself part of the design: medical trust is shown by
  **refusing to overpromise** ("No honest platform can promise that",
  "Never diagnosis or cure", "Clinician boundary respected, always").

**Mood:** Premium, editorial, founder/investor-grade. Feels like a serious
science publication or a high-end wellness brand manifesto — the antidote to
"influencer wellness."

### 3C. Unified design guidance for the rebuild
A designer can recreate the look with:
- **Palette:** paper/bone backgrounds (`#F1EDE3` editorial, `#FBFBF7` app);
  forest green `#0E3B2E` primary + near-black green dark cards; gold/brass
  `#B08A3E` premium accent; and a 5-hue **evidence/layer pastel set** — mint
  `#D8EFE0`, sky `#D6E9F5`, amber `#FBE3A6`, lavender `#E7DBF7`, blush `#F8DDD8`.
- **Type system:** display **serif with italic emphasis** for brand/marketing +
  **letterspaced mono/caps** eyebrows; **humanist sans** + big numeric KPIs for
  the product UI.
- **Components:** large soft-rounded cards (16–24px) with color-coded fills,
  pill buttons/badges, dark-green "rule/output" governance cards, left journey
  nav rail, rounded search pill, hairline dividers in editorial contexts.
- **How evidence / commerce / medical-trust is expressed visually:**
  - *Evidence:* color-coded grade badges (A/B, B/C, C) and a green "EVIDENCE
    SNAPSHOT / Live trust before sale" panel; gold numerals signal rigor.
  - *Commerce:* understated — "Store"/"package"/"refill window" presented as
    calm dashboard cards, never loud retail. Recurring care (Day X of 90,
    adherence %, refill days) is framed as a relationship, not a checkout.
  - *Medical trust:* amber caution cards literally say "No cure claims";
    dark-green Rule cards gate products behind "evidence grade, safety note,
    sourcing requirement, fit question"; the Guru visibly refuses to overpromise.
    Trust is communicated through restraint, honesty copy, and graded transparency.

---

## 4. Production Boundary Reminders (what is NOT real yet)

The build is a **local / test-mode prototype**. It proves workflow,
architecture, UX, state, and integration seams — not live business operations.

NOT real / blocked outside the workspace:
- No live payment processor, tax engine, real shipping/fulfillment account.
- No live supplement supplier API, real inventory/lot feeds, or actual COA
  document ingestion (COA is seeded test data).
- No real consumer auth provider; persistence is a single JSON file, not a
  production DB.
- No live expert/practitioner network (e.g. OpenLoop) — expert & appointment
  flows are test adapters.
- No confirmed production Gemini key and no production Search/YouTube research
  ingestion; Guru falls back to reviewed local content.
- No deployed production URL, no scheduled cloud jobs, no monitoring/observability.

Human-approval gates still open: native mobile release, medical/legal review,
founder/design taste gate, security & privacy review, clinical suitability
policy, final commercial terms/pricing.

Doctrine to preserve: real sources, transparent claim grades, current research
refresh, product quality checks, safety boundaries, honest uncertainty, **no
miracle claims**, AI is not treated as reviewed content, and social/YouTube
informs demand/misinformation only — never proof.
