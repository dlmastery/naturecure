# 03 — UX & Agentic AI Specs (Mental Model Ledger)

Source: NicheCore / nature_cure project-book snapshot (BUILD_HANDOFF, PRD gap audit, agentic UX research records, competitor research, recovery plans, full-stack record, context packs, README, TASKS).

Purpose: build-relevant extraction for rebuilding the platform as a beautiful new site with best-in-class agentic AI UX. Net-new build target — reuse the *concepts*, not the legacy long-scroll/console UI.

Stack of record (legacy): Vite + React + TypeScript front end; native Node HTTP API (`server/api.mjs`); local JSON DB (`server/db/nichecore-db.json`); Gemini boundary (`gemini-3-flash-preview`) with reviewed-content fallback. Verified at `http://127.0.0.1:5184`.

---

## 1. Full App Surface / Route Map

### 1a. Route-based Vitiligo golden journey (primary product spine)
| Route | Purpose |
|---|---|
| `/` | Consumer need catalog (choose a health need; first action) |
| `/skin` | Skin concern selector (drilldown into pigmentation/skin) |
| `/skin/vitiligo` | Dedicated Vitiligo trust hub (fresh date, source count, humility framing, protocol CTA) |
| `/skin/vitiligo/evidence` | Living evidence feed (grades, latest findings, source freshness, "what changed") |
| `/skin/vitiligo/mechanism` | Mechanism map — biology-to-action (stress loop → intervention layers) |
| `/skin/vitiligo/intake` | Safety-first intake quiz BEFORE commerce (trust/conversion event) |
| `/skin/vitiligo/regime` | Named core regime ("Cellular Resilience"): layers, grades, support-not-cure language |
| `/skin/vitiligo/package` | 90-day Vitiligo Support Pack decision (roles, doses, quality scores, COA, subscription) |
| `/checkout` | One-time vs recurring/subscription decision |
| `/companion` | Daily reminder & adherence path (mobile companion routine) |
| `/expert` | Human expert chart offer (premium trust layer) |
| `/progress` | Month-one tolerance, stability, refill/adjust/pause decision |
| `/admin/research-factory` | Evidence refresh, draft → review → publish workflow |

### 1b. Top-level surfaces / sections (beyond the golden journey)
- **Agentic operating surface** (the new first screen / hero) — prompt-first task workspace (see §2).
- **50-journey atlas** — filterable catalog; Vitiligo is 1 of 50 consumer-need journeys across 10 domains (skin, hair, metabolic, gut, stress/sleep, brain/eyes, mobility/energy, hormone/vitality, immune/oral, cardio/liver/longevity).
- **Category catalog** — 13 launch categories (skin/pigmentation, weight/metabolism, hair/scalp, gut, sleep/stress, blood sugar, mood, brain, eyes, joints, hormones, vitality, recovery).
- **Category hub** — mechanisms, evidence claims, latest findings, timelines, safety rails.
- **Protocol builder** — intake toggles + guardrail filtering.
- **Commerce bundles** — subscription pricing, quality scores, margin model, sticky checkout summary.
- **AI Guru chat surface** — reviewed-content fallback + Gemini boundary, bounded/escalating.
- **Human expert layer** — chart preview + review packages.
- **Mobile companion** — reminders, adherence, refills, outcome tracking.
- **Research factory / admin console** — periodic ingestion, scoring, review, publish.
- **Member dashboard** — evidence plan, proof packet, mobile continuity, revenue/subscription engine.
- **Registry & disclosure** — honest positioning surfaces.
- **Proof Lab (operational console)** — demoted below the buying story; verifies the visible product is backed by persisted workflows.

Navigation language (deliberately journey-oriented, not internal): Journey, Needs, Evidence, Plan, Packages, Guru, Experts.

---

## 2. Agentic AI UX Requirements ("best in class")

The product MUST open as an AI-agent task workspace, not a passive research website and not a generic chatbot. Skeptical users must still be able to browse evidence/packages/expert review without running the agent.

### Eight product criteria (from the agentic UX research record)
1. **Prompt-first outcome entry** — describe the desired health journey in plain language (e.g. "Help me stabilize vitiligo and build a credible natural plan I can follow").
2. **Transparent work trace** — show task state, service/tool invocations, event stream, verification gates.
3. **Human steering** — redirect the task mid-run while preserving task state.
4. **Human approval** — risky moments visibly route to expert review/approval before conversion.
5. **Verified result** — evidence-backed, safety-aware outcome, not raw supplement advice.
6. **Traditional fallback** — first-class, side-by-side path to browse atlas/evidence/packages without the agent.
7. **End-to-end consumer loop** — evidence → safety intake → package → checkout → subscription → reminders → expert chart → registry → revenue all connected.
8. **Mobile resilience** — agentic and fallback paths render with no horizontal overflow on phone viewport.

### The agentic operating surface (what to render on screen)
- **User task prompt** — primary input (`agent-prompt`).
- **Steering prompt** — refine priorities while the task is alive.
- **Mode switch** — explicit "Agent guided" vs "Browse instead" (`agentic-mode-switch` / `traditional-fallback`).
- **Best-journey loop** — four hero cards making the winning model instantly legible: **Ask or browse → Verify → Convert safely → Keep learning**.
- **Agent roster** — named specialist agents showing responsibility & coordination.
- **Service map** — backend tools shown as agent-invoked work.
- **Event log** — AG-UI / MCP / A2A / A2UI / verification events.
- **Trace lane** (`agent-trace-lane`) — recent agent/tool activity surfaced outside the raw event log; shows standby events by default.
- **Human approval gate** (`agent-human-approval`) — states checkout is held until evidence & risk gates pass.
- **Verified result panel** — page ends in an explicit outcome (verified bundle cards, evidence packets, reminder plans).
- **Next action** — package start, expert review, registry, reminders, recurring commerce wired to the product loop.

### Protocol concepts cited (translate the behavior, not the branding)
- **AG-UI** (user-facing agent interaction layer): event-based, bidirectional. Show run status, event stream, tool events, interrupts, steering, verification. Event names used: `AG_UI_RUN_STARTED`, `A2UI_SURFACE_UPDATE`, `VERIFICATION_GATE_PASSED`, `AG_UI_STEERING_APPLIED`.
- **MCP / MCP Apps** (tools/data/workflow access layer): expose evidence provenance, plan generation, checkout, mobile reminders, expert review, registry, supplier workflows as invoked tool calls.
- **A2A** (agent-to-agent coordination): discoverable agents, task/message methods, streaming task ops, cancellation, subscription, agent cards. Delegate to specialist agents.
- **A2UI** (declarative UI surface layer, CrewAI): agents emit structured JSON → client-rendered forms, cards, lists, modals (e.g. evidence cards, bundle cards, safety gates, regimen timelines, reminder plans).
- Also referenced for doctrine: OpenAI Apps SDK preview, Microsoft Human-AI Interaction (HAX) Guidelines (transparency, feedback, control).

### Agent roster (A2A-style delegation)
- **Outcome Orchestrator** (coordinates the run)
- **Evidence Agent** (evidence retrieval / source provenance)
- **Safety Agent** (safety screening / risk gates)
- **Commerce Agent** (package synthesis / checkout)
- **Companion Agent** (reminders / adherence)
- **Human Expert Router** (escalation to certified experts)

---

## 3. Competitor Patterns Worth Copying

| Pattern | Competitor signal | What the rebuild must do |
|---|---|---|
| Own the data loop | Function Health — user-owned longitudinal data, labs, clinician notes, repeat action | Not a one-off answer: persist evidence + package + reminder + registry + research-refresh state as an ongoing relationship |
| Measure / observe | Levels — biosensors connect behavior to outcomes | Capture concern, evidence fit, safety status, plan status, adherence, outcome events |
| Instant feedback | ZOE — barcode/photo scoring, daily food feedback | Make the agent result immediate, inspectable, action-oriented; no hiding behind long copy |
| Commerce with plan context | Fullscript — catalog + practitioner plans + direct fulfillment | Packages tied to evidence, safety, source quality, expert escalation — never random supplements |
| Patient logistics | Rupa Health — instructions, reminders, release timing, dashboards | Both agent and fallback paths need clear next steps, reminders, human-controlled release/escalation |
| Coaching + recurring plan | Noom Med, Ro Body, Hims & Hers — recurring programs, tracking, care-team access | Make subscription, progress, reminders, expert handoff visible from the start (front-screen concepts) |
| Biomarker-to-action | InsideTracker — science-backed action plans | Evidence-backed protocols read as action plans with confidence/safety context |
| Human control | HAX guidelines + agentic UX research | Show task state, trace, tool calls, steering, approval gates, fallback navigation |

**Best UX doctrine (the closed loop):** 1) Ask or browse → 2) Verify (claims, source posture, safety fit, supplier quality, confidence) → 3) Convert safely (safety gates, quality-screened bundles, expert triggers, recurring-plan choice) → 4) Keep learning (reminders, progress, registry outcomes, periodic research refresh). This is the core distinction from a VitiCore-style research site: NicheCore is an outcome + revenue product, not a research hub.

---

## 4. Vitiligo "Golden Journey" Route Flow (every step)

Component-named sequence from the PRD gap audit (build this as the route spine):
1. `HomeNeedCatalog` — `/` need catalog (premium cover; "the vitiligo journey, without the snake oil"; evidence-first, honest boundaries).
2. `SkinPigmentationHub` — `/skin` skin concern selector.
3. `VitiligoEvidenceHub` — `/skin/vitiligo` dedicated hub above the fold (fresh date, source count, humility, protocol CTA) → `/skin/vitiligo/evidence` living evidence feed (A/B/C/T/H-style grade rhythm, latest findings, source freshness, "what changed recently", "what we know / emerging / uncertain").
4. `VitiligoMechanismMap` — `/skin/vitiligo/mechanism` strong visual biology-to-action map (stress loop → intervention layers).
5. `VitiligoRegime` — `/skin/vitiligo/regime` named "Cellular Resilience" regime (stability/resilience, layers, grades, support-not-cure language).
6. `VitiligoPersonalizationQuiz` — `/skin/vitiligo/intake` safety quiz as the conversion event before selling; stepper state; "filtered before commerce" framing.
7. `GuruFitExplanation` — AI as bounded interpreter; structured "what I filtered out" reasoning, evidence, escalation (refuses to overpromise).
8. `VitiligoSupportPack` — `/skin/vitiligo/package` 90-day pack: product roles, doses, quality scores, COA, substitutions/options, subscription.
9. `CheckoutSubscription` — `/checkout` one-time vs recurring; COA/testing badges; safety acknowledgement; expert-review upsell inside checkout.
10. `CompanionActivation` — `/companion` daily routine: timeline, taken/skipped, day count, tolerance checks, refill countdown.
11. `ExpertChartOffer` — `/expert` rich personalized expert chart deliverable (India/Ayurveda/nutrition/yoga emphasis).
12. `MonthOneProgress` — `/progress` adherence, tolerance, symptom journal, optional photo tracking, new evidence, adjust/pause/continue controls.
13. `RevenueFlywheel` — the company-level thesis surface: evidence hub → fit quiz → package → app → refill → expert → registry; closes on "Evidence OS for natural health, not a chatbot, not a blog."

Backend persistence: each started/completed step logs to `POST /api/journey/events` (with current legal action + evidence summary).

---

## 5. Component Inventory (named UI components / modules to build)

### Golden-journey route components
`HomeNeedCatalog`, `SkinPigmentationHub`, `VitiligoEvidenceHub`, `VitiligoMechanismMap`, `VitiligoRegime`, `VitiligoPersonalizationQuiz`, `GuruFitExplanation`, `VitiligoSupportPack`, `CheckoutSubscription`, `CompanionActivation`, `ExpertChartOffer`, `MonthOneProgress`, `RevenueFlywheel`.

### Named surfaces / test-id'd modules (legacy build, to re-create better)
- Agentic: `agent-workspace`, `agent-prompt`, `agent-run-task`, `agent-steer-task`, `agent-event-log`, `agent-trace-lane`, `agent-human-approval`, `agentic-mode-switch`, `traditional-fallback`, `fallback-browse-*`, `best-journey-loop`.
- Journey UI: `journey-cockpit`, `workflow-stepper`, active-need decision panel, `vitiligo-golden-journey`, route tabs (need/skin/vitiligo/evidence/mechanism/intake/regime/package/checkout/companion/expert/progress/factory), `vitiligo-evidence-feed`, `vitiligo-mechanism-map`, `vitiligo-safety-quiz`, `vitiligo-support-pack`, `month-one-progress`.
- Atlas: `JourneyAtlas50`, `journey-atlas`, `journey-card`, `journey-detail`, domain filters.
- Catalog: category cards with stable selectors `category-card-{id}` (13 categories).
- Member/commerce: `MemberDashboard`, commerce bundle cards, sticky checkout summary, consumer CTAs `consumer-start-package`, `consumer-expert-review`, `consumer-join-registry`.
- Status badges (Playwright-asserted state): `session-status`, `plan-status`, `reminders-status`, `provenance-status`, `coa-status`, `appointment-status`, `commission-status`, `revenue-status`, order/subscription/expert/reminder/revenue statuses.
- Other: AI Guru chat surface, ResearchFactory/admin console, OperationalConsole (Proof Lab), registry & disclosure surfaces.

### Code modules (legacy file map — reference for what each layer owns)
- `src/types.ts` — domain model (evidence, protocols, products, bundles, experts, factory jobs, companion events).
- `src/data/nichecoreData.ts` — reviewed product/category data (13 categories, 13 bundles, 13 factory jobs, 16 sources).
- `src/data/journeyAtlas.ts` — 50 journeys, 12 source records, 10 domains.
- `src/services/geminiGuru.ts` — Gemini boundary + local fallback.
- `src/services/api.ts` — frontend API client (`runAgentTask`, `steerAgentTask`, etc.).
- `src/App.tsx` — full surface composition + interactive state.
- `src/styles.css` — responsive visual system.
- `server/api.mjs` — backend API + test-mode state machine.
- `server/db/nichecore-db.json` — persisted JSON DB.

---

## 6. Backend API Endpoints (method + purpose)

### Core / bootstrap
- `GET /api/health` — health check.
- `POST /api/test/reset` — reset local DB (test mode).
- `GET /api/bootstrap` — initial app/catalog data.
- `GET /api/admin/state` — persisted operational counters (incl. `agentTasks`, `journeyEvents`).

### Users / auth / intake
- `POST /api/users` — create consumer profile.
- `POST /api/auth/session` — session/auth boundary; create active local session.
- `PUT /api/users/:id/intake` — save intake; compute safety route.

### Plans / evidence / reminders
- `POST /api/plans/generate` — generate member evidence plan.
- `POST /api/plans/:id/activate` — activate evidence plan.
- `POST /api/mobile/reminders` — schedule mobile reminders.
- `GET /api/evidence/provenance/:categoryId` — generate evidence provenance packet.

### Commerce / payments / fulfillment / revenue
- `POST /api/cart` — create cart.
- `POST /api/checkout` — checkout (test mode); enforces safety gate (blocks unsafe).
- `POST /api/payments/authorize` — authorize payment (test adapter).
- `POST /api/fulfillment/shipments` — create shipment (test adapter).
- `POST /api/partners/commissions` — accrue partner/affiliate commission.
- `GET /api/revenue/ledger` — compute revenue ledger.

### AI Guru
- `POST /api/guru` — Guru answer bounded to reviewed content; escalates unsafe prompts.

### Research factory
- `POST /api/research/jobs/:categoryId/run` — run evidence factory for a category → draft claims.
- `POST /api/research/claims/:id/review` — approve/reject a drafted claim → publish.
- `POST /api/research/schedules` — create scheduled research refresh.
- `POST /api/research/schedules/:id/tick` — run scheduled tick → persist scheduled draft.

### Experts / practitioners / suppliers
- `POST /api/experts/requests` — request expert chart.
- `POST /api/practitioners/appointments` — schedule practitioner appointment (test adapter).
- `POST /api/suppliers/coa` — verify supplier COA → persist certificate.

### Registry / companion
- `POST /api/registry/outcomes` — save registry outcome.
- `POST /api/companion/adherence` — log companion adherence.

### Ops / admin
- `POST /api/admin/backup` — create backup.
- `POST /api/admin/export` — create redacted export.
- `GET /api/ops/readiness` — local readiness gate.

### Agentic + journey + atlas
- `POST /api/agent/tasks` — create persisted agent task (prompt, steering, protocol markers, agent roster, service invocations, A2UI surface manifest, verification gates, final outcome).
- `POST /api/agent/tasks/:id/steer` — record user steering; append to task event stream.
- `POST /api/journey/events` — record started/completed golden-journey route activity (legal action + evidence summary).
- `GET /api/journeys` — expose all 50 journeys (backend catalog).
- `POST /api/journeys/:id/research/run` — reviewed-draft test-mode research run for any journey.

---

## 7. Data Entities / State (what gets persisted)

Persisted in `server/db/nichecore-db.json` (target Postgres in production per the plan):
- **Users / sessions / intakes** — accounts, auth sessions, intake history.
- **Categories / claims / sources** — evidence corpus, source records, evidence grades, safety flags, confidence, reviewer notes, publish versions.
- **Protocols / regimes** — named protocols with layers, grades.
- **Products / bundles / suppliers / COAs** — product-lot tracking, quality scores, COA certificates, supplier scores.
- **Evidence plans + provenance packets** — generated/activated member plans, provenance packets.
- **Carts / orders / checkouts** — incl. safety-blocked states.
- **Subscriptions / refill state** — recurring plans, refill cadence.
- **Payments / fulfillments / shipments** — test-mode adapters.
- **Partner commissions / revenue snapshots / revenue ledger** — affiliate/private-label fields, margin model.
- **Research runs / schedules / claims** — research jobs, draft→review→publish states, scheduled ticks, `journeyResearchRuns`.
- **Guru responses** — bounded answers + escalations.
- **Expert requests / practitioner appointments** — chart requests, chart-delivery records, scheduling.
- **Companion adherence / reminders** — adherence logs, tolerance/stability checks, reminder schedules.
- **Registry outcomes** — outcome tracking.
- **Agent tasks** — prompt, steering, event stream, services invoked, A2UI manifest, verification gates, outcome.
- **Journey events** — golden-journey route started/completed activity.
- **Catalog snapshot** — `catalogSnapshot.journeyAtlas`, `catalogSnapshot.journeyAtlasSources`.
- **Backups / exports / readiness checks / audit events** — ops state.
- Dashboard counters: `agentTasks`, `journeyEvents`, `journeys`.

---

## 8. Outstanding Gaps / Weak Spots (do these better in the rebuild)

### Design / experience gaps (the most important miss)
- Legacy app was **product-SaaS-like, broad-category, long-scroll** — many modules competing for attention. The deck is **editorial, premium, confident, vitiligo-specific, one job per screen**, showing skepticism → trust as an emotional arc. The rebuild must hit that visual standard.
- Hero/positioning was generic NicheCore, not vitiligo-specific or premium enough.
- Need catalog existed below the hero but didn't behave like a first-viewport need-selection surface.
- No real Skin → Vitiligo drilldown / dedicated hub originally.
- Evidence feed not "living" enough (no polished A/B/C/T/H grade rhythm + source freshness).
- Mechanism map lacked the strong visual stress-loop → intervention-layer explanation.
- Commerce moment not polished; missing substitute/options/checkout decision flow.
- AI Guru still felt chat-like; lacked structured "what I filtered out" reasoning.
- Expert chart deliverable not rich enough; expert support not integrated into the journey.
- Revenue flywheel + "Evidence OS" company thesis not landed visually.

### Agentic UX gaps (already partly repaired; keep strong)
- Agentic-vs-traditional choice was not explicit enough; fallback wasn't a first-class side-by-side path.
- Agent trace + human approval were present but not prominent as product promises.
- The first screen didn't summarize the competitor-grade closed loop (ask/browse → verify → convert safely → keep learning) clearly — fixed by `best-journey-loop`, must remain.
- Mobile horizontal overflow bug existed in hidden grade tooltips and compact horizontal rails — fix display-on-hover, wrap tabs/filters.

### Depth gaps required by PRD (build to depth)
- **Rich personalization intake**: age range, condition stability, face/body involvement, new vs stable patches, diet restrictions, medication flags, pregnancy/lactation, supplement sensitivity, budget, capsule/powder/topical/diet preference.
- **Evidence hub depth**: latest 2024-2026 findings, source freshness, what changed, what we know / emerging / uncertain, grade near every claim, source list visible at decision points.
- **Commerce depth**: one-time vs subscription toggle, substitutions, COA/testing badges at decision, safety acknowledgement, refill cadence, expert upsell in checkout.
- **Companion depth**: daily timeline, taken/skipped, week-1 tolerance, week-4 stability, week-8 review, day-75 refill/adjust, evidence update feed.
- **Month-one progress**: adherence, tolerance, symptom journal, optional photo tracking, new evidence, adjust/pause/continue.
- **True periodic research factory**: RSS/search/video/source ingestion, Gemini Flash + Search-grounded draft extraction, claim grading, contradiction detection, human review, cached publishing + version rollback.

### Production boundaries NOT yet real (legacy stubbed as test-mode adapters)
Live supplier/private-label catalog APIs & COA ingestion; real payments/subscriptions/tax/shipping/fulfillment; partner revenue accounting; certified expert network (OpenLoop-style) scheduling/payment; production Gemini credentials; live scheduled research crawler (incl. video/social ingestion); deployed real AG-UI/A2A/MCP SDK runtime (legacy was a local simulation); auth/privacy/security hardening; observability, audit logs, backups, runbooks, rollback; CI pipeline; staging deploy; clinical/legal review of claims/contraindications/compliance. There was also no real mobile app — only a mobile-looking section (target: Expo app or responsive PWA with push abstraction).

### Build-direction directive (carried from the gap audit)
Do NOT keep polishing the long page. Rebuild around the route-based golden path (the 13 named components in §4), reuse backend/test machinery, but make the UX shell follow the deck's actual journey. Strategy: build Vitiligo to production depth first, then use a **category factory** to scale to all 13 categories / 50 journeys.

---

### Cross-cutting product thesis (preserve)
NicheCore is **not** a research blog or chatbot. It is a consumer need-market commerce + guidance platform that (1) hooks via recent, evidence-graded natural-health research, (2) converts protocols into curated packages + recurring revenue, (3) retains via reminders/adherence/outcomes/AI/expert support, (4) refreshes content via a periodic backend research factory (not ad-hoc generation). VitiCore was inspiration for credibility/tone only, not the business model.
