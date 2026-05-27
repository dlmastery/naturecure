# NicheCore / nature_cure — Master Mental-Model Ledger

> Single source of truth for the full reboot. Synthesizes **3 sources**: the portable snapshot ZIP (requirements + specs), the Grok transcript (vision + end-user experience), and the OTC research directory (medical/protocol substance). Detail fragments live alongside this file (`01`–`06`).

Generated: 2026-05-26.

---

## 0. The three sources and what each governs

| Source | Role (per founder) | What we took from it |
|---|---|---|
| **ZIP snapshot** (`nature-cure-portable-snapshot`) | **Requirements & specifications** | Product thesis, evidence doctrine, 13 categories + 50-journey atlas, commerce model, safety gates, agentic UX spec, the **design decks** (`journey-deck/`, `deck-inspection/`) |
| **`grok-vitiligo-diabetes-full-transcript.md`** | **Vision & end-user experience (high level)** | Founder's soul: anti-establishment, evidence-based natural health "made accessible today", warm-expert tone, the Ralph-loop discovery feel, real protocols |
| **`otc alternative medicines/`** dir | **Real protocol substance** | Concrete supplements/herbs/doses/mechanisms/timelines for vitiligo + diabetes, supplier & quality standards, contraindications |

---

## 1. What we are building (one paragraph)

**NicheCore** is a consumer wellness-commerce platform that turns high-value health needs into **evidence-backed natural protocols, curated supplement/lifestyle packages, recurring mobile adherence, and optional AI + human holistic expert guidance.** It is a *commerce platform with an evidence engine behind it* — **not** a research blog, **not** a raw AI chatbot, **not** a generic supplement store, **not** a medical/diagnosis app, **not** an influencer funnel, **not** a miracle-cure marketplace.

**Tagline lock (from the deck):** *"Not a chatbot. Not a blog. The evidence OS for natural health."*
**Hook:** *"Evidence-backed natural health, made purchasable and followable."*

**Layer model:** Content = trust layer · Package = monetization layer · Mobile app = retention layer · Expert = premium layer.

---

## 2. The core product loop (the spine of the site)

`Need → Evidence Hub → Mechanism→Protocol map → Personalization intake (safety screen) → AI Guru explanation → Curated package (evidence grade + quality score) → Checkout/subscription → Mobile companion (reminders/adherence/refill) → Optional human expert chart → Progress/registry → Protocol refresh feed.`

The MVP depth demo to build end-to-end is the **Vitiligo golden journey**.

---

## 3. Design language (LOCKED — from the actual decks)

Two coexisting systems, one brand DNA:

**A. Editorial / marketing voice** (hero & narrative surfaces)
- Cream paper background `#F1EDE3`.
- High-contrast **Didone/serif display headlines**, with *italic emphasis words* ("…without *the snake oil*").
- Letterspaced **mono caps eyebrows**; **gold/brass numerals** `#B08A3E`; hairline rules.
- Generous whitespace, magazine cadence, one idea per screen.

**B. Material product UI** (the app)
- Bone/off-white canvas `#FBFBF7`; humanist sans body.
- **Left journey nav rail**: Needs → Evidence → Hub → Fit → Regime → Store → Guru → Expert → Member.
- Top bar: rounded **search pill** + status chips.
- Airy grid of soft **rounded cards (16–24px radius)**, big numeric KPIs, lowercase status badges, pill buttons.
- **Color encodes meaning** — evidence/layer pastels: mint `#D8EFE0` (positive), sky `#D6E9F5` (info), amber `#FBE3A6` (caution), lavender `#E7DBF7` (supportive), blush `#F8DDD8`.
- **Deep forest green `#0E3B2E`** = brand/active nav + dark "governance/Rule" cards (where products are gated behind evidence + safety + sourcing).

**Mood:** premium, clinical-but-warm, calm scientific trust, anti-influencer. Restraint = trust. Evidence grades and safety are *visible near claims, never hidden*.

**Claude-design overlay (per user request):** clean, content-first, accessible, tasteful motion, strong type hierarchy, no generic-AI gradient soup.

---

## 4. Evidence doctrine (governs the whole UI)

- **Every claim gets ONE visible grade badge:** `A` strong human · `B` moderate human · `C` early/mixed human · `D` mechanistic/animal/in-vitro · `T` traditional-use · `H` hypothesis/emerging · `X` rejected/insufficient.
- **5-tier source hierarchy.** Tier 4 trusted anchors = WHO TCIM, India CCRAS/AYUSH, PCIMH, EMA/HMPC, Australia TGA, Health Canada NHP, China NMPA, NSF (quality). Tier 5 (YouTube/Reddit/trends) = demand signal, **never proof**.
- **Freshness states on every hub:** `fresh` ≤30d · `current` ≤90d · `aging` ≤180d · `stale` >180d. Show **last-reviewed + next-refresh** dates.
- **Product quality score is SEPARATE from efficacy grade** — render as two distinct signals (COA, third-party testing, heavy-metal/contaminant, standardized markers, price-per-effective-dose).
- **Allowed wording:** "may support", "traditionally used for", "early research suggests", "human evidence is mixed", "requires safety screening".
- **Forbidden wording:** cure, treats, reverses, guaranteed, "no side effects", "doctor-approved" (unless a named reviewer did), "clinically proven" (when only mechanistic), "ancient secret", "AI found the cure".
- **HARD RULE:** no consumer-facing core protocol is published from raw AI. AI explains reviewed content only.
- **HARD BLACKLIST (trust anchors):** FDA, FTC, US disease associations, US hospital/insurance/pharma-advocacy/medical-trade bodies. US-origin peer-reviewed papers allowed as *evidence objects* with conflict review, never as institutional authority.

---

## 5. AI Guru + Human Expert (boundaries)

**AI Guru CAN:** explain published protocols, interpret evidence grades, guide intake, personalize timing, compare approved products, explain safety, coach the daily regime, handle missed doses, prep expert questions, translate evidence updates, advise refill/pause/adjust. 6 modes: Evidence explainer · Intake guide · Regime coach · Safety interpreter · Refill advisor · Research-update translator.

**AI Guru CANNOT:** diagnose, claim cure, prescribe, override safety flags, invent citations, create unreviewed claims, recommend outside the approved library, ignore red flags.

**Human experts** (India-emphasized): Ayurveda practitioner, holistic nutritionist, yoga/breathwork therapist, herbal expert, senior reviewer. Output = structured chart (goal, intake summary, excluded ingredients + why, package, timing, diet chart, lifestyle, safety notes, what to track, follow-up). OpenLoop-style white-label possible.

**Escalation triggers → human/clinician:** safety-sensitive category, meds, pregnancy/lactation, liver/kidney disease, psychiatric crisis language, severe side effects, no improvement by milestone, wants Ayurveda chart, multi-category. **Red-flag routing** (escalate, not treat): sudden vision loss, severe hypoglycemia, chest pain, suicidal ideation, severe allergic reaction.

---

## 6. Catalog (real seeded content — see `05_catalog_data.md`)

- **13 launch categories** (ranked): Weight & Metabolism · Hair & Scalp · Gut & Bloating · Sleep & Stress · Skin & Pigmentation · Blood Sugar (guarded) · Mood/Mental Wellbeing · Brain & Focus · Eye & Screen · Joints & Mobility · Women's Hormones · Men's Vitality · Energy & Recovery.
- **Launch wedge (first 5):** Weight, Hair, Gut, Sleep/Stress, Skin — with **Vitiligo as flagship depth demo** inside Skin.
- **50-journey atlas** across 10 domains (Skin 6, Hair 4, Metabolic 5, Gut 5, StressSleep 7, BrainEye 5, MobilityEnergy 5, HormoneVitality 7, ImmuneOral 3, CardioLiver 3).
- **~15 product SKUs, 13 bundles ($74–$229 / ladder $15–$499), 3 experts ($69–$99), 27 sources.**

**Bundle ladder:** single referral $15–60 · starter pack $59–129 · 90-day protocol $149–349 · maintenance refill $39–99/mo · expert-reviewed $199–499 · private-label $79–249.

---

## 7. Vitiligo golden journey — real protocol substance (see source extractions)

Hero: *"The vitiligo journey, without the snake oil."* Flagship 90-day **Cellular Resilience / Vitiligo Support Pack.**

**3 unified daily combos** (all post-meal):
1. **Nrf2-Ferroptosis & Melanocyte Shield** (AM): Polydatin 200–400mg · Quercetin 500mg · Amla 500mg · NAC 600mg — grade D/C, ferroptosis/GPx4 protection.
2. **Gut-Skin-Metabolic Reset** (lunch): Nigella sativa (thymoquinone) 500mg [B — VASI 4.98→3.75 in RCT] · Momordica 500mg · multi-strain probiotic 10–20B CFU · Luteolin · EGCG.
3. **Rasayana Stress & Rejuvenation** (PM): Triphala 500–1000mg · sugar-free Chyawanprash 5–10g · Ashwagandha KSM-66 300–600mg · Magnesium glycinate.

Plus: **Khadir sprouted-millet diet** (60–80g sprouted millets, 150–200g bitter greens, 100–150g fermented, gluten elimination), **670nm red-light PBM** 10–20min, **pranayama** (Anulom Vilom + Bhramari). Timeline: wks 1–4 adapt → 5–8 noticeable → 9–12 VASI/HbA1c shift.

**Safety:** Momordica/Nigella + metformin/insulin → hypoglycemia (physician taper). High-dose quercetin/polydatin + JAK inhibitors → CYP3A4 interaction. Avoid high-phenol foods, Panax ginseng, St. John's Wort, high-dose echinacea. Diabetes is the sibling journey (shared ferroptosis/gut-axis mechanism).

---

## 8. Surfaces / routes to build

Consumer: `/` (home catalog) · `/c/[category]` (hub, 16-section template) · `/c/skin/vitiligo` (+ `/evidence /mechanism /intake /regime /package`) · `/atlas` (50 journeys, domain filter) · `/guru` (AI workspace) · `/checkout` · `/companion` · `/expert` · `/progress` · `/admin/research-factory` (operator console).

**Agentic UX** (best-in-class target, AG-UI/MCP/A2A-inspired): prompt-first task workspace, verified result, event log, service/tool invocation map, human steering, agent roster — with a first-class **traditional fallback** browse path. Opens as a task workspace, not a chatbot.

16-section category hub template: hero · problem framing · what's happening in body · latest evidence feed · mechanism map · core protocol · bundle · diet/routine · daily schedule · timeline · safety/tolerability · evidence grades & sources · AI guru CTA · expert CTA · companion CTA · subscription CTA.

---

## 9. Build decisions (chosen for the reboot)

- **Brand:** keep **NicheCore** (consistent with all design decks); dir = nature_cure.
- **Stack:** **Next.js (App Router) + TypeScript + Tailwind CSS**, tasteful motion (Framer Motion), Vercel-deployable. Seeded real data (no live backend required for the beautiful product experience); evidence/safety/grades modeled as data.
- **Design system first**, then pages, leading with the Vitiligo golden journey + home catalog + atlas + guru + package + companion.
- **frontend-design skill** drives the visual craft.

---

## 10. Do / Don't (load-bearing)

**DO:** show grade + source + last-reviewed + next-refresh + quality score on claims/products; keep efficacy vs quality distinct; run a real safety screen in intake; tie subscription to protocol duration; map every package item to a protocol role + grade; launch 5 wedge categories with vitiligo depth; honest uncertainty everywhere.

**DON'T:** publish core protocols from raw AI; let the Guru diagnose/prescribe/cure/invent citations; use blacklisted US bodies as trust anchors; sum overlapping markets into one TAM; treat traditional use or YouTube as proof; become an affiliate blog; mix mobile + desktop without intent; use generic wellness-SaaS gradient aesthetics.

---

### Fragment index
- `01_foundation_pack.md` — thesis, TAM, evidence doctrine, factory, commerce, expert model, roadmap, sources.
- `02_project_memory.md` — founder intent/corrections, PRD, VitiCore template, categories, monetization, architecture, safety, companion.
- `03_specs_ux_agentic.md` — route map, agentic AI UX, competitor patterns, component inventory, API endpoints, gaps.
- `04_verification_features.md` — verified feature checklist (parity target), atlas structure, quality bars, achieved/blocked.
- `05_catalog_data.md` — schema + all 13 categories + 50 journeys + products + bundles + experts (reusable data).
- `06_refapp_design.md` — tech stack, reference app, **detailed design language**, production boundaries.
