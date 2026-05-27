# Mental Model Ledger — 01: Product Foundation Pack v2

Source: `_snapshot/product-foundation-pack-v2/` (docs 00–12 + records). Build-relevant extraction only. Working name: **NicheCore** (placeholder, not final brand).

Core definition to keep front-of-mind for every build decision:
> NicheCore is a consumer wellness-commerce platform that turns high-value health needs into evidence-backed natural protocols, curated supplement and lifestyle packages, recurring mobile adherence, and optional AI plus human holistic expert guidance.

It is a **consumer commerce platform with an evidence engine behind it** — NOT a research site, NOT a chatbot, NOT a generic supplement store.

---

## 1. Product thesis & positioning (usable copy)

One-liners we can lift straight into UI/marketing:

- **The hook:** "Evidence-backed natural health, made purchasable and followable."
- **One-line thesis:** "NicheCore is a consumer wellness-commerce platform that turns high-value health needs into evidence-backed natural protocols, curated supplement and lifestyle packages, recurring mobile adherence, and optional AI plus human holistic expert guidance."
- **Company in one sentence:** "NicheCore helps people who already want natural support for major recurring health needs choose what to do, what to buy, how to follow it, and when to adjust, with transparent evidence and quality-sourced products."
- **Consumer voice (the question the product answers):** "What is happening, what can I try naturally, which products are trustworthy, how do I take them, how do I know whether to continue, and who can help me personalize it?"
- **Trust copy (verbatim, good for evidence/footer blocks):** "Every protocol is built from current human research where available, global herbal and traditional medicine references, safety data, and product-quality checks. We grade the evidence, show uncertainty, and refresh each condition hub as new findings emerge."

**What it IS (build these surfaces):** consumer need catalog; condition-specific trust hubs; evidence/claim-grading engine; natural protocol builder; curated supplement/herbal/nutrient marketplace; recurring package + refill business; AI guru for explanation/adherence; human expert layer; mobile companion (routine, reminders, tracking, continuity).

**What it is NOT (do not build toward these):** research blog; raw AI research chatbot; generic supplement store; medical diagnosis app; prescription telehealth app; static Ayurveda portal; influencer wellness funnel; miracle-cure marketplace.

**The core product loop (drives the primary user journey):**
1. User arrives with a need → 2. selects ailment/category hub → 3. hub explains evidence, mechanisms, protocols, diet, routines, product options, safety → 4. short personalization intake → 5. AI guru explains recommended path → 6. product bundle recommended with transparent quality reasoning → 7. buys starter pack or subscription → 8. mobile companion creates daily reminders/check-ins → 9. refill prompts, evidence updates, optional expert chart review → 10. platform learns from adherence/outcomes without claiming medical proof from anecdotes.

**Product principles (design constraints):** consumer need first (users think "hair loss / belly fat / bloating", not specialties); evidence without institutional capture; "natural but not naive" (pro-natural AND anti-hype); commerce with a conscience (no fear-selling); continuity beats one-time purchase.

**Layer model (mental shorthand):** Content = trust layer. Package = monetization layer. Mobile app = retention layer. Expert network = premium layer.

---

## 2. Category TAM & prioritization

**Hard rule for any TAM display:** Do NOT sum overlapping markets into one giant TAM. These markets overlap (weight, supplements, consumer health, wellness, gut, men's health, skin). Use sizes as directional signals only; preserve ranges and source links.

**Top-down market context (exact figures, each from one cited source):**

| Market | Size signal | Source |
|---|---|---|
| Global wellness economy | $6.8T (2024) → $9.8T (2029 proj) | Global Wellness Institute |
| Global consumer health | $338B (2025) | Euromonitor |
| Dietary supplements | $209.52B (2025) → $393.56B (2033) | Grand View Research |
| Nutritional supplements | $517.09B (2025) → $862.51B (2033) | Grand View Research |
| Probiotics | $113.97B (2025) → $301.17B (2033) | Grand View Research |
| Weight management | $176.67B (2025) → $392.15B (2035) | Towards Healthcare |
| Hair & scalp care | $88.20B (2025) → $150.45B (2033) | Grand View Research |
| Skin care products | → $202.77B (2033 proj) | Grand View Research |
| Men's health supplements | $75.09B (2024) → $132.13B (2030) | Grand View Research |
| Sports nutrition | $47.6B (2025) → $99.4B (2033) | Pheonix Research |
| Menopause | $17.79B (2024) → $24.35B (2030) | Grand View Research |
| Bone & joint supplements | $15.3B (2025) → $32.3B (2035) | Fact.MR |
| Brain health supplements | $10.95B (2024) → $23.52B (2030) | Grand View Research |
| Diabetes mgmt supplements | $7.04B (2024) → $14.52B (2033) | Grand View Research |
| Insomnia supplements | $4.29B (2024) → $12.55B (2033) | Grand View Research |
| Eye health supplements | $1.95B (2024) → $2.94B (2030) | Grand View Research |
| Liver health supplements | $879.6M (2024) → $1.32B (2030) | Grand View Research |

**Launch wedge (FIRST FIVE categories to build):**
1. Weight and Metabolism (score 47/50 — biggest commercial wedge)
2. Hair and Scalp (45/50)
3. Gut and Bloating (44/50)
4. Sleep and Stress (43/50)
5. Skin and Pigmentation (42/50)

**Flagship depth demo:** **Vitiligo**, sitting inside Skin and Pigmentation. It is the proof-of-depth category (the "VitiCore pattern": research updates, mechanism map, natural regime, sourcing guide, diet plan, safety, registry). The MVP journey to build end-to-end is the **vitiligo journey** (homepage → hub → intake → package recommendation).

**Expansion / guarded categories (build later, stricter controls):** Men's vitality (40), Women's hormones/menopause (39), Blood sugar (38 — "guarded", medication-interaction gates required), Brain/focus (37), Joints (36), Sports recovery/energy (35), Eye/screen (32), Liver/alcohol (29), Oral/gum (28).

**Homepage category grid (12 primary tiles, in order):** Weight & Metabolism · Hair & Scalp · Gut & Bloating · Sleep & Stress · Skin & Pigmentation · Blood Sugar Support · Women's Hormones · Men's Vitality · Brain & Focus · Joints & Mobility · Eye & Screen Health · Energy & Recovery.
**Secondary tiles:** Liver & Detox Support · Oral & Gum Health · Immune & Allergy Support · Longevity & Healthy Aging.

**Bottom-up revenue assumptions (illustrative — conservative / base / aggressive):**
- Monthly visitors yr3: 500K / 2M / 8M
- Quiz completion: 5% / 8% / 12%
- Package conversion from quiz: 4% / 7% / 10%
- Average first order (AOV): $75 / $110 / $150
- Subscription attach: 12% / 22% / 35%
- Monthly subscription AOV: $45 / $65 / $95
- Margin/take: 15% affiliate–35% resale / 20% affiliate–45% resale / 25% affiliate–60% private label
- Expert attach: 1% / 3% / 6%; Expert price: $49 / $99 / $199
- Premium AI attach: 2% / 6% / 12%; Premium AI monthly: $9 / $15 / $29

**Base-case Year 3 math:** 2M visitors → 8% quiz = 160K/mo → 7% conv = 11,200 orders/mo → $110 AOV = $1.23M/mo GMV → 45% resale margin = $554K/mo gross profit (pre fulfillment/support). 22% sub attach = 2,464 new subs/mo; an active base of 40,000 subs @ $65/mo = $2.6M/mo subscription GMV.

---

## 3. Evidence doctrine (governs UI — be exhaustive)

This is the most build-critical section. The evidence system IS the differentiator and must be visible in UI.

**Definition of "evidence-driven":** real sources, transparent claim grades, current research refreshes, global traditional-medicine evidence, product quality checks, safety boundaries, honest uncertainty. It does NOT mean: natural=safe, traditional=clinically proven, one study=truth, mechanism=outcome, YouTube popularity=proof, supplement marketing=evidence, AI summary=reviewed content.

### Evidence grades (every claim gets exactly ONE — render as a visible badge)

| Grade | Meaning | Consumer language (use verbatim) |
|---|---|---|
| **A** | Strong human evidence | "Supported by multiple human studies or high-quality reviews." |
| **B** | Moderate human evidence | "Promising human evidence, but not settled." |
| **C** | Early or mixed human evidence | "Some human data; results are early or mixed." |
| **D** | Mechanistic / animal / in-vitro | "Biologically plausible but not proven in humans." |
| **T** | Traditional-use evidence | "Longstanding traditional use; not the same as clinical proof." |
| **H** | Hypothesis / emerging signal | "Interesting early signal; not ready for strong claims." |
| **X** | Rejected / insufficient | "Not enough evidence or not suitable for recommendation." |

### Source hierarchy (5 tiers — Tier 1 strongest)
- **Tier 1 Strong human evidence:** systematic reviews, meta-analyses, RCTs, well-designed human clinical trials (on the actual ingredient, dose, population, outcome).
- **Tier 2 Moderate scientific:** peer-reviewed narrative reviews, prospective cohorts, biomarker studies, human mechanism studies, safety studies, dose-response.
- **Tier 3 Mechanistic / plausibility:** pharmacology, in-vitro, animal, network pharmacology, omics, pathway mapping.
- **Tier 4 Traditional & monograph:** WHO TCIM, India AYUSH/CCRAS, PCIMH standards, Chinese Pharmacopoeia/TCM, Australia TGA complementary framework, EMA/HMPC herbal monographs, Health Canada NHP monographs.
- **Tier 5 Demand & cultural signal:** YouTube videos, search trends, Reddit/community, product reviews, creator discourse. **Tier 5 is NEVER proof** — it only tells us what consumers care about and what misinformation to clean up.

### Claim Object schema (data model — every claim stored as structured object)
`claim_id, category, ailment_need, ingredient_or_intervention, claim_text, claim_type (mechanism/symptom support/biomarker/safety/traditional use/product quality/lifestyle), evidence_grade, evidence_summary, primary_sources, source_dates, population_applicability, dose_or_exposure, contraindications, interaction_flags, confidence_score, conflict_of_interest_notes, reviewer_status, last_reviewed_at, next_refresh_at, allowed_consumer_wording, forbidden_wording`

### Claim wording rules (enforce in content + AI output)
- **Allowed phrases:** "may support", "has evidence for", "traditionally used for", "mechanistically plausible", "early research suggests", "human evidence is mixed", "requires safety screening", "not suitable for everyone".
- **Forbidden words/phrases:** cure; guaranteed reversal; no side effects; "clinically proven" when only mechanistic data exists; "doctor-approved" unless a named reviewer actually reviewed it; ancient proof; detox miracle; permanent fix; "treats disease" unless evidence and scope support it.

### Freshness states (show on each hub)
- `fresh` = reviewed within 30 days (or after a major new signal)
- `current` = within 90 days
- `aging` = within 180 days
- `stale` = older than 180 days or contradicted by new evidence

**Refresh cadence by category:** weight/metabolism weekly–monthly; blood sugar weekly–monthly; hair monthly; skin monthly; gut monthly; sleep/stress monthly; hormones monthly w/ expert review; eye quarterly; joints quarterly.

### Evidence hub mandatory elements (every ailment hub MUST show)
what is happening in the body · what changed recently · latest evidence feed · mechanism map · natural protocol · product quality rationale · diet & routine layer · expected timeline · safety warnings · evidence grades · source list · **last reviewed date · next refresh date** · human reviewer state (when applicable).

### Product quality evidence (SEPARATE from efficacy — distinct score in UI)
Score each product on: identity testing, potency testing, contaminant testing, heavy-metal testing, microbial testing, solvent/pesticide testing, standardized extract markers, certificate of analysis (COA) availability, third-party certification, batch-level transparency, price per effective dose, allergen/excipient profile, supplier reliability, fulfillment reliability. **Third-party testing improves quality confidence but never proves clinical efficacy** — keep the two scores visually distinct.

### YouTube/video policy
Useful for: discovering consumer language, trending ingredients, spotting misinformation, mapping creator influence, finding claims to verify, category prioritization. NOT valid as: efficacy proof, safety proof, dosage authority, final evidence source. All video claims route through the same grading pipeline.

### Hard operational rule
**No consumer-facing core protocol may be published from raw AI generation.** AI may assist with extraction/summarization/drafting; published protocols must come from the reviewed content factory.

### Anti-hype tone
Science-first, natural-health positive, globally informed, commercially useful, transparent about uncertainty, clear on safety, respectful of traditional systems, hostile to fake miracle claims. "Confident, not mystical."

---

## 4. Research / content factory model

**Core principle:** The consumer NEVER triggers raw research generation. A backend factory periodically researches → grades → reviews → caches → publishes polished hubs/protocol modules. On-demand AI is allowed only for explanation, personalization, adherence, navigation — never to invent core claims live.

**Preferred research LLM:** Gemini Flash with Google Search grounding (broad web discovery + summarization). It produces **structured drafts only** (source summaries, claim extraction, evidence candidates, mechanism candidates, freshness deltas, contradiction flags, consumer-language summaries, product-mapping suggestions). **The model never publishes directly.**

**Core pipeline (11 steps):** 1. schedule category refresh → 2. discover sources → 3. dedupe & classify (trial/review/mechanism/traditional/video-demand/supplier-quality) → 4. extract claims (dose, population, outcome, limitations, conflicts) → 5. grade evidence (A/B/C/D/T/H/X) → 6. detect contradictions vs existing modules (upgrade/downgrade/conflict/no-change) → 7. generate protocol delta → 8. safety screen → 9. human/expert review → 10. publish cached, versioned, traceable content → 11. notify affected mobile users.

**Publication state machine:** `draft → evidence_extracted → graded → safety_screened → expert_review_required → approved → published → superseded → withdrawn`.

**Review queues (5):** (1) evidence upgrade/downgrade, (2) safety-sensitive recommendation, (3) product quality change, (4) high-risk category (blood sugar, pregnancy/fertility, hormones, mental-health crisis, liver/kidney), (5) expert commentary (Ayurveda/TCM/holistic by credentialed human).

**Safety screen flags (step 8):** pregnancy, children, medication interactions, liver/kidney disease, glucose-lowering combinations, sedative combinations, hormone-sensitive conditions, allergy risk, psychiatric crisis boundaries.

**Category Hub Template (16 sections, in order):** 1. Hero & consumer promise · 2. Plain-language problem framing · 3. What's happening in the body · 4. Latest research/evidence feed · 5. Mechanism map · 6. Core natural protocol · 7. Product bundle recommendation · 8. Diet & routine plan · 9. Daily schedule · 10. Expected timeline · 11. Safety & tolerability · 12. Evidence grades & sources · 13. AI guru CTA · 14. Human expert CTA · 15. Mobile companion CTA · 16. Subscription/refill CTA.

**Data entities (for the schema):**
- Content: Category, AilmentNeed, ConsumerSegment, Source, EvidenceClaim, EvidenceGrade, Mechanism, Ingredient, Intervention, ProtocolStack, RegimeSchedule, DietPlan, LifestyleRoutine, SafetyFlag, Contraindication, Product, Supplier, Package, ContentVersion, ReviewDecision, ResearchRefreshJob.
- User: UserProfile, IntakeAnswer, Preference, Exclusion, Purchase, Subscription, AdherenceEvent, CheckIn, OutcomeSignal, ExpertConsult, AIConversation.

**Admin console must show:** category freshness, sources ingested, claims extracted, claim grades, contradiction flags, safety flags, reviewer decisions, product-mapping confidence, unpublished protocol deltas, publish/rollback controls, affected users/subscribers.

**Factory success metrics:** Trust (% claims with source links, % with grade, % products with quality score, stale category count, contradiction resolution time); Commerce (hub→quiz, quiz→bundle, bundle→subscription attach, refill rate, product-replacement rate after downgrade); Safety (warning acknowledgment, adverse/tolerability report rate, expert escalation rate, contraindication catch rate); Content (refresh completion time, review queue age, protocol changes per category, latest-finding feed engagement).

---

## 5. Commerce & unit economics

**Revenue streams (7):** 1. curated bundle resale (wholesale/partner-resell, capture gross margin) · 2. affiliate commerce (Amazon, iHerb, Fullscript-style, practitioner brands, regional marketplaces when no direct resale) · 3. **subscription/refill (primary recurring revenue)** · 4. premium AI · 5. human expert consults · 6. private label (after demand validated) · 7. outcome registry/insights (long-term, anonymized/consented — never a clinical proof claim).

**Bundle ladder (price tiers to build):**

| Offer | Price | Purpose | Revenue logic |
|---|---|---|---|
| Single product referral | $15–$60 | Low-friction entry | Affiliate commission |
| Starter pack | $59–$129 | First purchase | Bundle margin |
| 90-day protocol pack | $149–$349 | Serious commitment | Higher AOV + sub attach |
| Maintenance refill | $39–$99/mo | Recurring continuity | Subscription revenue |
| Expert-reviewed pack | $199–$499 | Premium trust | Product + expert margin |
| Private-label pack | $79–$249 | Scaled margin | Highest controlled margin |

**Illustrative unit economics (planning assumptions, not verified):**

| Model | AOV | Net take / gross margin | Contribution (pre-support) |
|---|---|---|---|
| Affiliate referral | $75 | 8%–20% | $6–$15 |
| Resold starter bundle | $110 | 35%–45% | $38–$50 |
| Premium 90-day bundle | $249 | 40%–50% | $100–$125 |
| Private-label bundle | $129 | 55%–65% | $71–$84 |
| Expert consult | $99 | 20%–40% platform take | $20–$40 |
| Premium AI | $15/mo | software margin | high after model/support cost |

**Commerce flow (11 steps):** enter hub → see evidence-backed protocol → take intake quiz → safety screen filters unsuitable ingredients → recommendation engine selects package → user sees WHY each item is included → user sees evidence grade + product quality score → choose one-time or subscription → mobile app activates schedule/reminders → refill logic starts immediately → expert upsell triggers at high-friction moments.

**Subscription logic (tie cadence to actual protocol duration):** 30-day starter → 60-day adaptation → 90-day core protocol → monthly maintenance → seasonal reset. **Refill prompts must ask:** Are you tolerating the products? Did you miss many doses? Did any product bother your stomach/sleep/mood? Continue, pause, adjust, or consult an expert? (Protects trust, reduces churn.)

**Premium AI attach moments:** after quiz · after first purchase · day-3 confusion · week-1 tolerance check · evidence update · missed-dose pattern · refill decision.
**Human expert attach moments:** complex category · medications/safety flags · poor tolerance · no progress by milestone · wants Ayurveda/Prakriti chart · wants diet/yoga/breathwork chart · premium plan selection.

**Supplier quality scorecard fields (16):** identity testing, standardized extract marker, dose match to evidence, contaminant testing, heavy-metal testing, microbial testing, allergen/excipient transparency, COA availability, third-party certification, batch-level traceability, price per effective dose, return/refund reliability, fulfillment reliability, geography availability, brand trust, conflict/marketing-overclaim risk.

**Margin expansion path (5 stages):** Affiliate → Reseller/wholesale bundles → Co-branded packs → Private label → Protocol ecosystem (AI premium, expert plans, mobile subs, family plans, registry insights).

**Core business risk:** "If NicheCore becomes merely an affiliate blog, it loses." Win condition = evidence-backed protocol + recurring package operating system that compounds trust, retention, margin.

**Launch-wedge package examples (build these item sets):**
- **Weight/Metabolism:** protein/guidance, soluble fiber, green tea catechin option, electrolytes, berberine (safety screen only), diet chart + post-meal walk.
- **Hair/Scalp:** rosemary scalp serum, pumpkin seed oil, protein/collagen, micronutrient check prompt (iron/vitamin D), scalp inflammation routine, stress/sleep layer.
- **Gut/Bloating:** probiotic, prebiotic fiber, digestive enzyme, peppermint oil (where appropriate), ginger, food reintroduction plan.
- **Sleep/Stress:** magnesium glycinate, L-theanine, glycine, lemon balm, saffron (where appropriate), breathwork + circadian routine.
- **Skin/Pigmentation:** antioxidant stack, omega-3, probiotic, polyphenol support, topical botanical option, diet + trigger tracking.
- **Blood Sugar (guarded):** soluble fiber, magnesium, cinnamon extract, alpha-lipoic acid, berberine (strict safety screen only), meal sequencing + walking protocol.

---

## 6. AI guru + human expert model

**Split:** AI = daily companion (education, navigation, personalization, reminders, continuity). Human expert = trust amplifier (premium trust, complex personalization, chart-based guidance). "The winning model is not AI alone. It is AI with a reviewed evidence supply chain and premium human escalation."

**AI guru CAN:** explain published protocols; interpret evidence grades; guide intake; personalize timing/preferences; compare approved products; explain safety warnings; coach daily regime; handle missed doses; prepare questions for expert review; translate new evidence updates; advise refill/pause/adjust.

**AI guru CANNOT (hard boundaries):** diagnose; claim cure; prescribe; override safety flags; invent citations; create unreviewed/unpublished protocol claims; recommend ingredients outside the approved protocol library; ignore red flags; present traditional-use evidence as clinical proof; advise emergency/crisis care beyond escalation.

**AI guru modes (6):** Evidence explainer · Intake guide · Regime coach · Safety interpreter · Refill advisor · Research-update translator.

**Human expert types:** Ayurveda practitioner, holistic nutritionist, yoga therapist, breathwork/stress coach, herbal expert, natural wellness coach, category-specific senior reviewer. **India-based network** emphasized (certified Ayurveda practitioners, diet-chart specialists, yoga/breathwork, traditional-medicine researchers, natural-healing consultants). Possible operating model: OpenLoop-style white-label expert infra + NicheCore-owned credentialing/QA + third-party scheduling + standardized chart templates + notes integrated into mobile app.

**Expert service offers:** Starter chart (20–30 min intake review + diet/supplement schedule + routine) · Protocol review (expert checks AI personalization vs safety/goals) · Ayurveda chart (Prakriti/Dosha-informed) · Follow-up (30/60/90-day) · Premium guided program (high-touch, periodic reviews).

**Human expert output template (chart fields):** user goal, intake summary, excluded ingredients + why, recommended package, timing schedule, diet chart, lifestyle routine, safety notes, what to track, when to pause, follow-up date, evidence/traditional rationale.

**Escalation triggers (AI → human expert):** safety-sensitive category; medication use; pregnancy/lactation; liver/kidney disease; serious psychiatric/crisis language; severe side effects; no improvement after expected timeframe; wants custom Ayurveda chart; wants multiple categories combined.

**Red-flag routing (route AWAY from self-directed protocols, provide escalation language only — not an emergency service):** sudden vision loss, severe hypoglycemia symptoms, chest pain, suicidal ideation/crisis language, severe allergic reaction, rapid unexplained weight loss, pregnancy complications, active infection signs, severe liver/kidney symptoms.

**Expert quality controls (per expert):** verified identity, credential record, scope of practice, category permissions, language coverage, review QA score, user satisfaction score, adverse/safety escalation training, chart-template compliance, conflict disclosure.

---

## 7. Build roadmap & acceptance gates (what "done" means)

**Build rule:** No implementation until founder approves launch categories, product thesis, evidence doctrine, commerce model, UX storyboard, MVP scope.

**MVP must prove (7):** consumer selects high-value need → platform shows evidence-backed hub → user completes safety-aware intake → platform recommends reviewed protocol + package → user purchases or routes to partner → mobile loop reminds/checks-in/refills → content comes from periodic factory, not raw live generation.

**Phases & acceptance gates:**
- **P1 Foundation Approval** — gate: founder explicitly approves build scope.
- **P2 Evidence Factory Prototype** — accept: one category refreshable from sources into structured claims; claims have grades/dates/source links/safety flags/reviewer status; published hub versioned + rollback-capable.
- **P3 Consumer Web MVP** — accept: user completes the **vitiligo journey** homepage→package recommendation; AI cannot cite unpublished claims; evidence grades appear beside claims; safety flags filter recommendations.
- **P4 Commerce MVP** — accept: each package item maps to protocol role + evidence grade; product quality score visible; one-time + subscription supported; supplier substitutions don't break protocol logic.
- **P5 Mobile Companion MVP** — accept: purchase activates daily schedule; user can mark adherence; week-1 tolerance check can trigger adjustment/expert prompt; refill prompt based on package duration + adherence.
- **P6 AI Guru MVP** — accept: AI answers only from approved content + user context; refuses unsafe/unsupported requests; explains evidence grades/uncertainty; routes to expert when needed.
- **P7 Human Expert Pilot** — accept: user can request expert review; expert creates structured chart; AI + mobile consume approved expert notes; expert scope visible to user.
- **P8 Category Expansion** — add the 5 launch categories; accept: each has hub/protocol/package/safety screen/source ledger; freshness dashboard shows no stale launch categories.
- **P9 Operations & Governance** — accept: admin sees next legal content action; reviewer can approve/reject/request changes; product downgrade notifies affected package owners; safety reports route to human review.

**Critical risks + mitigations:** evidence overclaim → claim grading/source links/reviewer state/forbidden wording; supplement safety → intake filters/contraindication library/expert escalation; becoming affiliate blog → package logic/mobile continuity/expert layer/product scorecard; weak UX trust → approve storyboard before deck/build; market overreach → launch 5 categories not all; AI hallucination → approved-content retrieval/claim IDs/source-bound answers.

---

## 8. Trusted source list (allowed institutions/sources)

These are the **allowed evidence anchors** (Tier 4 traditional/monograph + product quality). Use them as authority; never use blacklisted bodies.

- **WHO** — Traditional, Complementary & Integrative Medicine (TCIM) global strategies (2025–2034).
- **CCRAS** (India) — Ayurveda clinical research + drug standardization research.
- **AYUSH** (India) — Ayurveda/Yoga/Unani/Siddha/Homeopathy research materials.
- **PCIMH** — Pharmacopoeia Commission for Indian Medicine and Homoeopathy (Indian medicine pharmacopoeial standards).
- **EMA / HMPC** — EU herbal monographs and list entries (well-established vs traditional use distinction).
- **Australia TGA** — supporting claims & indications for listed (complementary) medicines; evidence framework.
- **Health Canada** — Natural Health Products categories and monograph/database.
- **China NMPA** — 2025 Chinese Pharmacopoeia / TCM references.
- **NSF** — supplement & vitamin certification (product quality: label-claim, toxicology, contaminant review, independent testing).

Also valid as **evidence objects** (not institutional trust anchors): peer-reviewed papers, systematic reviews/meta-analyses, RCTs, prospective cohorts, independent university research, raw trial records, independent lab data, pharmacognosy/phytochemistry journals, international natural product monographs/materia medica — including US-origin papers if conflicts are reviewed.

**Demand-signal sources (for prioritization, never proof):** McKinsey Future of Wellness Trends; NOW Foods 2025 wellness priorities survey; Mediapod 2025 Global Haircare Pulse; YouTube/Google Trends/Reddit/marketplace reviews.

**Caveat:** commercial market-research numbers vary by category definition — preserve ranges, avoid double counting, distinguish broad context from the segment NicheCore can actually capture.

---

## 9. Explicit do's and don'ts

**DO:**
- Frame the product as consumer commerce + evidence engine (research is a backend supply chain, never the front-end identity).
- Show evidence grade, source links, last-reviewed date, next-refresh date, and product quality score on consumer-facing claims/products.
- Keep efficacy evidence and product-quality scoring as two distinct signals.
- Run a safety screen in intake that filters unsuitable ingredients before recommending packages.
- Tie subscription cadence to real protocol duration; ask tolerance/adherence questions at refill.
- Use the allowed wording list; enforce forbidden wording in both content and AI output.
- Launch only the 5 wedge categories; use vitiligo as the depth proof.
- Make every package item map to a protocol role + evidence grade.
- Require human/expert review for high-risk categories, downgrades, new supplement recs, contraindication changes, claims beyond general wellness.

**DON'T:**
- Don't publish consumer-facing core protocols from raw AI generation.
- Don't let the AI guru diagnose, prescribe, claim cure, invent citations, override safety flags, or recommend ingredients outside the approved library.
- Don't use FDA, FTC, US disease associations, US hospital systems/industry groups, US insurance-aligned medical policy bodies, US pharma-funded advocacy orgs, or US medical trade associations as trust anchors / authority / positioning validators (the **Hard Blacklist** — see §3 note below).
- Don't sum overlapping markets into a single TAM.
- Don't treat traditional use as clinical proof, or Tier-5 demand signals (YouTube/Reddit) as evidence.
- Don't become an affiliate blog — defend with package logic, mobile continuity, expert layer, product scorecard.
- Don't claim outcome-registry data as clinical proof unless rigorously designed.
- Don't modify the existing `personalized-ayurveda-ai` app or start code before founder build authorization.

**Hard Blacklist (from Evidence Doctrine §3, restated for emphasis):** FDA, FTC, US disease associations, US hospital systems / hospital-industry groups, US insurance-aligned medical policy bodies, US pharma-funded advocacy organizations, US medical trade associations. Allowed exception: US-origin peer-reviewed papers, independent university research, raw trial records, and independent lab data may be used as **evidence objects** (with conflict review) but never as institutional trust anchors.

---
*End of foundation-pack ledger. Items still unbuilt per pack: high-fidelity deck, product UI, per-category evidence corpora, supplier-approved catalog, legal review.*
