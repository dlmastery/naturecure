# 04 — Verification & Feature Parity Ledger

Source: prior NicheCore / nature_cure build quality + verification ledgers (`_snapshot/nichecore-app/project-book/`).
Purpose: a build-relevant "mental model" extract so the rebuild has a concrete feature-parity target, the journey/domain structure, the quality bars that were enforced, the real achieved/blocked boundary, and the proven critical paths.

Top-line truth from the prior build:
- Full-product RALPH 100: 88 achieved, 6 blocked (external deps), 6 require human approval. Local gate PASS, production "partially achieved."
- Operational RALPH 100: PASS, 0 failures. Product Quality RALPH 100: PASS, 0 failures. Agentic RALPH 20: PASS. Journey Atlas 50: PASS. PRD Goal (17 rows): PASS.
- Architecture proven: Vite + React + TypeScript frontend, Node API (`server/api.mjs`), persistent JSON DB (`server/db/nichecore-db.json`), Playwright E2E.

---

## 1. Complete Feature Checklist (verified-to-exist = parity target)

Every item below was certified PASS/achieved in at least one ledger. This is the parity list.

### Frontend / UX surfaces
- Prompt-first agentic journey cockpit as the FIRST screen (outcome task prompt, not a passive catalog).
- Workflow stepper + primary package CTA ("Start Package" / hero-start-package).
- Agent workspace: run panel, service/tool map, live event log, verified-result panel, human steering controls.
- Agentic mode switch + a Traditional fallback panel (routes to atlas, evidence, commerce).
- Route-based Vitiligo "golden journey": need discovery → evidence → mechanism map → safety-first intake → core regime → support pack/checkout decision → companion → expert → progress → research factory.
- 50-journey atlas: renders all 50 cards, domain filtering, detailed journey inspector (source/evidence/protocol/package/safety).
- Need catalog + skin-concern selector; dedicated Vitiligo hub.
- Living evidence feed.
- Member product-loop dashboard (active plan, proof packet, mobile continuity, revenue engine cards).
- Operations/admin console (operator + admin-style controls and counters).
- Launch category cards covering every operational category (13 categories).
- Commerce, Guru, expert, and registry CTAs (all clickable and state-mutating).
- Responsive/mobile companion surface (mobile operations console, reminder flow), with sticky-header scroll-offset fix.
- Title: "NicheCore | Evidence-Backed Natural Regimes"; H1: "From health concern to evidence packet to recurring natural regime."

### Backend API (server/api.mjs) endpoints / capabilities
- Health, reset, bootstrap (bootstrap exposes 13 operational categories + 50 journeys).
- User, session/auth, intake, plan, reminder endpoints.
- `POST /api/plans/generate` and `POST /api/plans/:id/activate` (plan = first-class object: safety route, evidence-packet link, protocol layers, daily schedule, expected timeline).
- `POST /api/mobile/reminders` (persisted push/in-app reminder schedule).
- Evidence, Guru, and research endpoints.
- `GET /api/evidence/provenance/:categoryId` (evidence packet: reviewed claims, grades, source counts, forbidden anchors).
- Journey catalog `/api/journeys` (all 50) + journey research factory `POST /api/journeys/:id/research/run`.
- Commerce: cart, checkout, payment, fulfillment, commission, revenue endpoints.
- `POST /api/partners/commissions` + `GET /api/revenue/ledger` (partner payout, contribution, gross + recurring revenue signal).
- Supplier COA endpoint.
- Expert chart request + practitioner appointment endpoints.
- Registry / adherence (outcome registry, adherence logging).
- Ops: backup, export, readiness, admin-state endpoints.
- Audit log (persisted, non-trivial — ~233-237 events in a run).
- Forbidden-source doctrine encoded in catalog (6 forbidden anchors).
- Frontend API client (`src/services/api.ts`) binds journey + agent task + steering endpoints.

### Evidence factory (research/content operations)
- Published claims for every operational category (~29 published claims).
- Research runs persisted (incl. scheduled `scheduled_tick_completed` run); draft claim generation (≥3 drafts).
- Draft review → approve → publish (versioned republish).
- Scheduled research refresh (schedules persisted).
- Journey-level research runs.
- Evidence grading schema: grades A, B, C, D, T, H, X.
- Evidence packet provenance proof (~34-36 packets).
- Category claims reviewed in 2026 (freshness enforced); anti-hype wording standard persisted.

### Commerce / recurring revenue (test mode)
- Every category → ≥1 bundle (13 bundles, all category ids covered).
- Products carry quality scores (82-93 range) and quality signals.
- Paid test orders, active subscriptions, refill review dates persisted.
- Unsafe checkout is SERVER-blocked (`blocked_expert_required` / `expert_review_required`).
- Payment authorization (test mode), fulfillment shipment (test mode).
- Partner commission ledger + revenue snapshots persisted.
- Supplier COA status persisted (27 suppliers; verified COA rows).
- One-time + subscription pricing per bundle with explicit gross-margin / contribution targets.

### AI agent (agentic protocol layer)
- Prompt-first agent workspace (outcome-first).
- Agent tasks persist with verified-result state (`verified_result_ready`).
- AG-UI event stream: run start, tool visibility, verification, steering (`AG_UI_STEERING_APPLIED`).
- A2UI: structured UI surface manifest (`uiSurface`), not just text.
- MCP-style service invocation as first-class artifacts (`servicesInvoked`, `MCP_TOOL_CALL`).
- A2A delegation: task decomposed into named coordinating agents (agent roster).
- Human steering of an active task without restarting the journey.

### AI Guru
- Reviewed-content safe route (bounded to reviewed evidence; local fallback + Gemini-key boundary in `src/services/geminiGuru.ts`).
- Unsafe Guru question escalates instead of self-guided supplement instructions.

### Human expert layer
- Expert chart request workflow.
- Practitioner appointment scheduling (test mode).

### Companion / registry
- Mobile reminders persisted (96-102 in a run).
- Adherence logs.
- Outcome registry (2 outcomes in a run).

### Ops / verification tooling
- Package scripts (deterministic gates): `dev`, `api`, `build`, `preview`, `lint`, `verify:agentic-ux`, `audit:ralph`, `test:e2e`, `audit:ops`, `audit:agentic`, `audit:prd-goal`, `audit:journeys`, `audit:full-product`.
- Production build artifact (`dist/index.html`).
- Browser-verified screenshots (desktop + mobile + per-surface).
- Handoff docs: README, TASKS, build handoff, verification record, project-book index.

---

## 2. The 50-Journey Atlas Structure (10 domains)

The atlas is the product's content backbone: exactly 50 journeys, unique ids, unique routes, spread across 10 domains. Vitiligo is ONE journey (the golden/demo route), not the whole product.

The 10 domains and their journeys (from the research record):

1. **Skin** — vitiligo, acne-prone, eczema-prone, psoriasis-prone, melasma/hyperpigmentation, collagen/skin aging.
2. **Hair** — thinning, stress shedding, scalp comfort, premature greying.
3. **Metabolic** — belly fat, GLP-1 maintenance, cravings, blood sugar, insulin resistance.
4. **Gut** — bloating, constipation, reflux, IBS-like patterns, microbiome reset.
5. **Stress & Sleep** — sleep onset, night waking, cortisol/stress, burnout, anxiety-like calm, low mood, emotional eating.
6. **Brain & Eyes** — brain fog, memory aging, screen eye strain, dry eye, macular support.
7. **Mobility & Energy** — joint stiffness, knee mobility, tendon recovery, sports recovery, daily energy/fatigue.
8. **Hormone & Vitality** — PMS, PCOS, menopause, fertility readiness, men's testosterone/vitality, libido/stamina, prostate wellness.
9. **Immune & Oral** — allergy comfort, respiratory seasonal support, oral/gum/breath.
10. **Cardio, Liver, Longevity** — heart/cholesterol/BP support, liver/alcohol recovery, longevity/healthy aging.

Per-journey content contract (every journey record MUST contain): consumer hook, market signal, evidence posture, 2025-2026 change signal ("whatChanged"), mechanism map, natural protocol candidates, diet/lifestyle actions, package concept, safety gate, human-expert escalation, companion loop, freshness state, risk level, evidence grade mix, source IDs.

Note on the parallel "13 operational categories": the commerce/operational layer organizes around 13 launch categories (Skin/Pigmentation, Weight/Metabolism, Hair/Scalp, Gut/Bloating, Sleep/Stress, Blood Sugar, Mood/Mental Wellbeing, Brain/Focus, Eye/Screen Health, Joints/Mobility, Women's Hormone/Menopause, Men's Vitality, Energy/Recovery). The 50 journeys roll up into / sit alongside these 13 categories. Each category maps to ≥1 commerce bundle and 1 research factory job.

---

## 3. Quality Bars / Acceptance Criteria Enforced

### Evidence integrity
- Evidence grading schema required: A, B, C, D, T, H, X.
- Every published claim has a `lastReviewed` date in 2026 (freshness gate).
- Every journey states evidence posture + grade mix + risk + freshness.
- Evidence packet (provenance) must exist with reviewed claims, grades, source counts.
- Anti-hype wording standard persisted and enforced.
- **Forbidden trust-anchor doctrine (hard blacklist)** — these MUST NOT appear in atlas/catalog payloads: FDA, FTC, US disease associations (American Diabetes Association, American Heart Association, American Cancer Society), US hospital systems (Mayo Clinic, Cleveland Clinic), CDC, NIH, US insurance-aligned medical bodies, US pharma-funded advocacy groups.
- **Approved/required trust anchors instead:** WHO TCIM, CCRAS, EMA HMPC, TGA, NSF (and Health Canada NHP, Global Wellness Institute, Euromonitor, Grand View Research as market/research basis).
- Source registry must be expanded and unique (16 sources).

### Journey atlas gates
- Exactly 50 journey records; ids unique; routes unique.
- All 10 transcript domains covered.
- Every journey: market signal + consumer hook + full consumer content populated.
- Every journey source id resolves (12 atlas source records).
- Vitiligo present as one journey among the fifty.

### Commerce / product quality gates
- Every operational category maps to ≥1 checkout-capable bundle.
- Products carry quality scores (observed bar: 82-93) and quality signals.
- Each bundle has explicit one-time price, subscription/refill price, and a gross-margin or contribution target.
- Demand-market identity per category: market size signal + rank + priority score (out of 50).
- Protocol-to-routine integrity: layers + ingredient count per protocol.
- Safety/escalation: 5 safety flags + 4 timeline checkpoints per category (consistent bar across all categories).

### Safety gates (non-negotiable)
- Unsafe checkout (e.g. blood-sugar high-risk) blocked server-side with `expert_review_required`.
- Unsafe AI Guru prompts escalate to expert review instead of giving self-guided supplement instructions.
- High-risk personalization paths route to human expert review.

### Engineering gates
- `npm run lint` (tsc --noEmit) passes — 0 type errors.
- `npm run build` (Vite production) produces `dist/index.html`.
- Playwright E2E passes with broad assertion coverage (101-106 checks, 0 failures).
- 0 browser console errors.
- Sticky header must not cover selected section heading (layout correctness assertion).
- All RALPH audits pass with 0 failures (100 / 100 / 20 / 12 / 17 loops).
- `npm install` reports 0 vulnerabilities.

---

## 4. Achieved vs Blocked vs Needs-Human-Approval (real boundaries)

### Achieved (locally buildable & verified) — 88 items
Everything in Section 1 is achieved in local/test mode. Local product gate = PASS. The full product workflow is proven end-to-end in test mode.

### Blocked — external dependencies (6) — cannot be honestly "done" locally
1. **Live research ingestion** — Gemini/Search/YouTube workers need credentials, provider terms, production jobs. (Local adapter implemented + tested; `.env.example` has placeholders.)
2. **Supplier operations** — real suppliers, reseller contracts, inventory, lot/COA feeds need commercial agreements. (Local supplier/COA workflow in test mode.)
3. **Payments & fulfillment** — live gateway, tax, shipping, fulfillment need merchant credentials. (Local test-mode adapters.)
4. **Human expert network** — OpenLoop-equivalent operations need a signed vendor path + credentialed practitioners. (Local request/appointment adapters.)
5. **Production deployment** — staging/prod deploy, domains, secrets, monitoring, rollback need infra access. (Verified on localhost only.)
6. **Real COA artifacts** — actual batch-level COA documents need supplier-provided files. (Simulated in test mode.)

### Requires human approval (6) — gated by people, not code
1. **Native mobile release** — app-store builds, push credentials, release accounts. (Responsive companion + reminders implemented; mobile-rendered in Playwright.)
2. **Medical/legal review** — published protocols + safety language need qualified human review before consumer launch.
3. **Taste gate** — investor-grade final UX/design approval cannot be self-certified by code. (Screenshots exist; founder/design signoff required.)
4. **Security & privacy** — formal privacy review, threat model, pen testing, data retention approval. (Local export/backup/audit/readiness adapters exist.)
5. **Clinical suitability** — personalized clinical suitability policy needs expert review + operating policy. (Safety gates route high-risk to expert review.)
6. **Commercial terms** — final pricing, margins, partner payouts, subscription terms need business-owner approval. (Local revenue/commission ledger estimates the flow.)

Key boundary statement to carry forward: *"The remaining work is not code hiding in the repository; it is commercial, operational, credential, legal, expert, supplier, and deployment work."* The rebuild should treat all six blocked + six approval items as adapter seams, not features to fake.

---

## 5. Test / Verification Coverage (proven critical paths)

Proven by Playwright E2E (101-106 checks) + browser-extension walkthroughs (41 + 38 + 25 checks) + RALPH audits. These imply the critical user paths to preserve:

### Agentic path
- Prompt-first agent workspace renders, runs a task to `verified_result_ready`.
- Event log shows `MCP_TOOL_CALL` (tool visibility) and `AG_UI_STEERING_APPLIED` (steering mutates the event stream).
- Human approval gate visible.

### Vitiligo golden journey (route walkthrough)
- Navigates evidence → safety intake → package → month-one progress; golden path completes with status `completed`; persists journey-event state.
- `POST /api/journeys/vitiligo-support/research/run` creates a draft-ready, review-required research run.

### 50-journey atlas
- Renders all 50 cards; Hair filter narrows to 4 then restores to 50 via "All"; journey inspector renders source/evidence/protocol/package/safety.
- Backend `/api/journeys` returns all 50 and confirms Vitiligo is one among many.

### Full commerce + member loop (one walkthrough mutates real state)
- Creates persisted: user, intake, research draft, approved claim, paid test order, active subscription, expert chart request, adherence log, registry outcome, reviewed-content Guru response.
- Hardened variant: session, scheduled research refresh, scheduled draft, COA verification, payment authorization, shipment, practitioner appointment, backup, export, readiness gate.
- Member-product variant: activated evidence plan, generated provenance packet, scheduled mobile reminders, partner commission, computed revenue ledger, member dashboard render.

### Customer CTA proofs (each must increase persisted state)
- "Start Package" → order + active plan + reminders + commission + revenue snapshot.
- "Ask Expert To Review" → practitioner appointment.
- "Join Outcome Registry" → registry outcome.
- **Category-matrix proof:** select EVERY one of the 13 launch categories and confirm "Start Package" creates a persisted package path for all 13.

### Safety proofs
- Unsafe blood-sugar checkout blocked server-side (`expert_review_required`).
- Unsafe Guru prompt escalates.

### Admin/ops proofs
- Admin state reports persisted users, orders, subscriptions, sessions, plans, reminders, research schedules, payments, fulfillments, commissions, revenue snapshots, appointments, backups, registry outcomes, adherence logs, audit trail.
- Readiness gate returns `local_operational_ready`.
- Mobile operations console renders.

### Visual evidence
Desktop + mobile screenshots for: fullstack, UX cockpit, agentic workspace, Vitiligo golden journey, 50-journey atlas.

---

## 6. Concrete UX / Product Quality Lessons Learned

These are the hard-won corrections from the prior build — bake them in from the start:

1. **Product-object fidelity beats smoke tests.** The app passed technical tests while still "feeling unlike the full product" because core business concepts existed only as UI copy, not as persisted first-class objects. Make these real objects from day one: member **plan**, **mobile reminders**, **evidence packet** (provenance), **partner commission + revenue ledger**. "Implied by a UI section" is not enough.

2. **CTAs must mutate persisted state, and tests must assert the state delta.** "Start Package", "Ask Expert To Review", "Join Outcome Registry" each have to increase persisted counts. Audits should FAIL if customer-CTA proof disappears.

3. **Prompt-first, outcome-first — not a passive catalog.** The first screen begins with an outcome task prompt; agent completion surfaces a verified result + summary, with visible services/tools and steerable mid-run. A landing page / catalog as the entry point was explicitly a regression to avoid.

4. **Breadth must be real and audited.** Early build shipped only 6 categories (later 13) and was missing factory jobs (Hair, Blood Sugar) and had thin quality markers (Gut, Sleep, Blood Sugar, Men's Vitality). The audit must enforce full breadth (all 13 categories / all 50 journeys) or it drifts.

5. **Mobile layout correctness is a gate, not a nicety.** A sticky header overlapped the selected section heading on mobile category-jump; fixed with a scroll offset and browser-verified. Add an explicit assertion that the sticky header never covers the active section heading.

6. **Evidence trust positioning is a product differentiator AND a constraint.** Deliberately exclude US health-establishment anchors (FDA/FTC/CDC/NIH/Mayo/Cleveland/disease associations) and lean on global/traditional anchors (WHO TCIM, CCRAS, EMA HMPC, TGA, NSF, Health Canada). Enforce anti-hype wording. This is encoded as a hard blacklist that the audit checks.

7. **Vitiligo is the demo depth, not the product.** Keep one fully-built "golden journey" (route-deep, every screen) as the proof of depth, while the other 49 ride the structured atlas contract. Don't let the demo condition become the whole product.

8. **Separate consumer dashboard from operator console.** The consumer product loop was initially hidden inside an operational/admin console. Give members their own dashboard (plan, proof packet, mobile continuity, revenue/engine cards) and keep the ops console for verification/admin only.

9. **Be honest about boundaries in the product surface.** Live external integrations (suppliers, payments, expert network, production research ingestion, deployed SDK wiring) are documented as production boundaries and must not be falsely claimed as live (PRD-17 gate). Build them as clearly-labeled test-mode adapters with credential seams.

10. **Determinism via scripted gates.** Every quality dimension has a named `audit:*` script (ralph, ops, agentic, prd-goal, journeys, full-product) plus lint/build/e2e. Reproducible, 0-failure gates are how "done" was defined — replicate this gate harness.
