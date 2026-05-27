# 02 — Project Memory (Build-Relevant Mental Model Ledger)

Working name: **NicheCore / nature_cure**. Companion app working name: **NicheCore Companion**.

One-sentence product: *A consumer holistic-health commerce platform for billion-dollar ailment categories, where periodically refreshed evidence engines generate VitiCore-style natural regime hubs, AI gurus guide consumers, certified human natural-healing experts can validate plans, and curated herbal/nutrient/diet packages are sold through vetted provider partnerships.*

---

## 1. User Intent & Explicit Founder Corrections

### What the founder DOES want
- Build a **full consumer natural-health commerce platform** inspired by the VitiCore concept, generalized across high-economic-value ailment categories: balding/hair loss, weight loss, diabetes/blood sugar, eyesight/eye health, "other extremely prevalent, billion-dollar ailments."
- **Science-based, recent-research-based, evidence-based** natural/herbal/nutrient/diet regimes.
- A **consumer-driven ailment/need catalog** + **commerce platform**. Consumers arrive with needs ("I am losing hair", "I want to lose belly fat", "My sugar is high", "I cannot sleep", "I am stressed", "My skin has patches", "My gut is bloated", "My eyesight is strained").
- **Holistic natural healing**, not just OTC drugs: herbs, nutrients, diet, lifestyle, Ayurveda, yoga/breathwork, routines, certified human expert charts.
- An **AI guru layer** (personalized guidance, education, safety-aware recs, product/package guidance) PLUS a **human expert layer** (certified natural-healing experts from India, Ayurveda practitioners, nutritionists/yoga therapists/herbal experts; can create additional charts/plans; possible OpenLoop-style white-label provider model).
- **Well-being and mental health** coverage: mood, stress, burnout, emotional well-being, nervous system support, sleep-stress loop — but must NOT claim to treat psychiatric illness.
- **The product must make money** — revenue from reselling packages of high-quality sourced natural OTC supplements; partnerships, reseller margin, affiliate margin, subscriptions, future private-label.
- **Persist everything** to Markdown so context is not lost.
- Founder wants to be treated to **"Martin Fowler-level"** product/architecture judgment: understand domain → define product → map architecture → implement only after approval.

### What the founder does NOT want (verbatim-strong corrections)
1. **"Do not jump into implementation."** Wanted understanding, PRD, product architecture, and meta-factory thinking first.
2. **VitiCore is an inspiration, not the product to clone.** "VitiCore is an example application concept and inspiration. It is not to be copied literally and not limited to vitiligo."
3. **"This is not a research platform."** Correct framing = consumer ailment catalog + commerce platform; the backend research engine is "a supply chain, not the consumer-facing value proposition."
4. **Content should NOT be generated on demand for every consumer interaction.** Correct model: backend periodically researches → generates/refreshes → caches → human/expert review when needed → frontend serves polished trusted pages.
5. Product is **not** just OTC drugs (holistic), **not** just Ayurveda education, **not** just an affiliate list.
6. **No code until approved**: PRD accepted, product architecture accepted, monetization model accepted, safety/compliance boundaries accepted, implementation plan explicitly approved.

### Workspace-state warning (recovery memory)
- The assistant previously **prematurely started implementation** (created PROJECT_BOOK, altered `App.tsx`, `services/geminiService.ts`, `types.ts`, `index.css`, `index.html`, README/metadata/env). User objected strongly. `npm install` was started then aborted; **no build passed**. That modified app copy is **NOT accepted product work** and must not be treated as such.

### Correct product loop (canonical)
`Consumer need → VitiCore-style hub → AI guru intake → personalized natural regime → curated product package → optional certified human expert chart → subscription/refill → progress tracking → protocol updates.`

---

## 2. PRD Essentials (Must-Have Product Surfaces/Features)

**Product type:** Consumer-facing holistic natural-health commerce platform serving billion-dollar ailment/need categories.

**Consumer promise:** *"Pick your need. Get a trusted natural regime, personalized guidance, and a curated package of high-quality herbs/nutrients/diet actions."*

**Product IS:** consumer need catalog · condition-specific authority hubs · evidence-backed natural regime engine · holistic supplement/herbal/diet package marketplace · AI guru + optional human expert platform · backend evidence/content factory.

**Product IS NOT:** medical diagnosis app · prescription treatment app · emergency care app · raw AI research chatbot · static blog · just Ayurveda education · just an affiliate list.

### Core user journey (10 steps)
1. Select a need category. 2. See polished VitiCore-style hub. 3. Read simple science + natural protocol. 4. Take short personalization quiz. 5. AI guru recommends a regime path. 6. Platform recommends a curated package. 7. See safety warnings + contraindication checks. 8. Buy one-time package or subscription. 9. Optional certified expert creates additional chart/plan. 10. Track progress + get follow-up guidance.

### Must-have consumer surfaces
- Homepage category catalog (need-first)
- Category hub pages (VitiCore template — see §3)
- Personalization quiz
- AI guru chat
- Package recommendation
- Safety screen (pre-purchase)
- Checkout / referral
- Registry / outcome tracking
- Expert booking
- Admin review console (internal — approve content, resolve safety flags, manage products, review adverse reports)

### Success metrics (build telemetry around these)
- **Consumer:** category page conversion, quiz completion, package conversion, subscription attach, repeat/refill, AI guru engagement, expert consult conversion, safety-warning acknowledgment rate.
- **Content:** freshness score by category, claim-to-source coverage, evidence-level distribution, review queue completion time.
- **Commerce:** AOV, gross margin, affiliate EPC, subscription LTV, refund rate, adverse/safety complaint rate.
- **Trust:** source transparency, no unsupported medical claims, user-reported confidence, expert review coverage.

---

## 3. VitiCore Reference Pattern (Repeatable Hub Template — Every Section/Module)

VitiCore = the **feel** of a high-trust, condition-specific consumer health hub. Borrow structure/tone, not literal vitiligo content.

### Hub sections/modules to borrow (full list)
- Branded condition hub + **hero section**
- Consumer problem framing
- Market/need signal (where useful)
- **Medical disclaimer** (repeated throughout)
- "What is happening in the body" / mechanism map
- Latest research / breakthroughs / milestones ("what changed recently")
- Science-backed natural regime + scientific reasoning
- Herbs and nutrients
- Diet plan
- Lifestyle / routine layer
- **Daily schedule** (herbal/nutrient dosage/schedule table)
- Expected timeline / "what to expect" (staged expectations)
- Sourcing / product guide ("full sourcing list", verified brands)
- Protocol stacks
- Natural protocols / herbal safe regime
- Safety and contraindications + tolerability/mitigation + side-effect discussion
- Stress / well-being layer
- "When to see a clinician" red flags ("consult physician")
- Package recommendation (commerce)
- AI guru CTA
- Human expert CTA
- Registry / outcome tracking / community CTA
- Footer resources

### Tone
Confident · science-aware · consumer-readable · structured · visually polished. NOT a raw chatbot, NOT a generic blog.

### Generalized per-category pattern
`Need/Ailment → Mechanism → Evidence → Natural Regime → Product Package → Safety → Diet/Lifestyle → AI Guru → Human Expert → Subscription/Outcome Tracking.`

### What NOT to borrow blindly
Exact vitiligo content · disease-treatment claims · unsupported "latest 2026" claims without verification · exact UI only · exact protocols for every category · "no side effects" framing.

### Example branded hub translations
HairCore (hair loss) · MetaboCore (weight/belly fat) · GlucoCore (blood sugar) · SkinCore (skin/pigmentation) · GutCore (bloating/microbiome) · CalmCore (stress/mood) · SleepCore (sleep/recovery) · VisionCore (eye health) · HormoneCore (women's/men's hormones).

---

## 4. Categories & Market Map (Every Category Named)

Homepage is **need-first** (problems, not medical specialties).

### MVP / Top-tier categories (12)
1. **Weight and Belly Fat** — belly fat, cravings, appetite, GLP-1 support/maintenance, metabolic flexibility, emotional eating, muscle-preserving weight loss. Commerce: protein, fiber, electrolytes, berberine (safety screen), green tea/catechin, meal plans, coaching sub.
2. **Hair Loss and Scalp** — thinning, shedding, male pattern, female thinning, dandruff/scalp inflammation, premature greying. Commerce: rosemary scalp serum, pumpkin seed oil, saw palmetto, collagen/protein, vit D/iron testing guidance, hair/scalp bundles.
3. **Skin and Pigmentation** — vitiligo, acne, eczema-prone, psoriasis-prone, hyperpigmentation, anti-aging, glow/beauty-from-within. Commerce: antioxidant stacks, collagen, omega-3, probiotics, topical botanicals, diet plans.
4. **Gut and Bloating** — bloating, constipation, reflux, IBS-like, microbiome reset, food intolerance. Commerce: probiotics, prebiotics, fiber, enzymes, peppermint oil, ginger, gut reset package.
5. **Mood, Stress, and Emotional Well-being** — stress, burnout, anxiety-like calm, low mood, emotional eating, social confidence, nervous system regulation, cortisol balance. Commerce: magnesium glycinate, L-theanine, saffron, lemon balm, omega-3, adaptogens (cautions), breathwork/meditation plans, expert wellness consult.
6. **Sleep and Recovery** — sleep onset, night waking, stress-sleep loop, recovery, circadian routine. Commerce: magnesium, glycine, theanine, lemon balm, low-dose melatonin option, sleep routine plan.
7. **Blood Sugar and Insulin Support** — glucose spikes, prediabetes, insulin resistance, carb cravings, neuropathy-adjacent wellness. Commerce: berberine, cinnamon extract, magnesium, alpha-lipoic acid, fiber, CGM-adjacent diet coaching. **Guardrail: strict medication/hypoglycemia warning, clinician consult required.**
8. **Joint Pain and Mobility** — stiffness, knee pain, arthritis-adjacent, tendon recovery, inflammation. Commerce: curcumin, boswellia, collagen peptides, MSM, omega-3, mobility routines.
9. **Women's Hormones** — PMS, PCOS, fertility, perimenopause, menopause, cycle health. Commerce: inositol, magnesium, omega-3, spearmint, vitex (caution), menopause bundles, expert charts. **Guardrail: pregnancy/fertility/medication caution; clinician review for complex.**
10. **Men's Vitality** — testosterone support, libido, stamina, fertility, prostate wellness, energy. Commerce: zinc, vit D, ashwagandha (cautions), tongkat ali (cautions), maca, prostate-support ingredients.
11. **Brain, Focus, and Memory** — brain fog, focus, memory, mental energy, aging brain. Commerce: creatine, citicoline, bacopa, omega-3, rhodiola (cautions), caffeine/theanine.
12. **Eye Health and Screen Strain** — screen strain, dry eye, macular support, eye fatigue, night vision. Commerce: lutein, zeaxanthin, omega-3, saffron, astaxanthin. **Guardrail: no "eyesight reversal" claims; urgent referral for sudden vision changes.**

### Secondary categories (6)
13. Sports Recovery, Muscle, and Energy
14. Immune, Allergy, and Respiratory Support
15. Oral, Gum, and Breath Health
16. Heart, Cholesterol, and Blood Pressure Support
17. Liver, Detox, and Alcohol Recovery
18. Healthy Aging and Longevity

### Category priority logic
- **Commerce-first:** weight, hair, skin, gut, sleep/stress, sexual wellness/vitality.
- **Clinician-guarded:** blood sugar, heart/cholesterol/BP, fertility, pregnancy, mental health crisis, kidney/liver disease.

### YouTube = demand signal only (NOT proof)
High-demand themes: belly fat, weight loss, insulin resistance, hair loss, gut health, bloating, stress/cortisol, sleep, menopause, testosterone, eye health, skin & collagen. Opportunity = convert noisy YouTube demand into evidence-graded, safety-filtered regimes.

---

## 5. Monetization & Business Model (Every Revenue Stream)

**Thesis:** Content is the trust layer; commerce is the business engine. Every high-demand ailment category is an intent-rich, near-purchase commerce market.

### Revenue streams (8)
1. **Reseller margin** — partner with high-quality supplement/herbal providers, resell bundles. Named packs: Hair Density Pack, Belly Fat and Metabolism Pack, Blood Sugar Support Pack, Stress Shield Pack, Sleep Recovery Pack, Gut Reset Pack, Vision Support Pack, Joint Mobility Pack.
2. **Affiliate commission** — where direct reselling unavailable: Amazon, iHerb, Fullscript-style, practitioner brands, regional marketplaces.
3. **Subscription refills** — 30-day regime, 60-day protocol, 90-day transformation bundle, monthly maintenance stack.
4. **Premium AI plan** — deeper intake, personal daily chart, diet plan, timing schedule, bundle refinement, follow-up messages.
5. **Certified human expert consultation** — Ayurveda practitioner (India), naturopathic-style expert, nutritionist, yoga therapist, herbal expert, holistic coach. Outputs: personalized chart, supplement schedule, diet chart, yoga/breathwork plan, follow-up adjustments.
6. **White-label expert network** — OpenLoop-like infra: expert verification, scheduling, chart creation, teleconsult, follow-up, compliance/scope management. *(If clinical diagnosis/treatment/prescription enters flow → regulated telehealth requirements apply; even wellness coaching needs credentialing + scope boundaries.)*
7. **Private label later** — once demand validated: private-label stacks, proprietary blends (only if ethical/transparent), regional sourcing, branded packs.
8. **(PRD also lists)** practitioner/partner marketplace take-rate; email/SMS coaching subscription.

### Example pack compositions
- **Hair Loss:** rosemary scalp serum, pumpkin seed oil, saw palmetto (where appropriate), collagen/protein, vit D/iron testing guidance, scalp routine.
- **Weight/Belly Fat:** protein, psyllium/glucomannan, green tea catechins, electrolytes, berberine (safety screen only), diet chart.
- **Blood Sugar:** berberine, cinnamon extract, magnesium, alpha-lipoic acid, soluble fiber. *Requires strong medication warning + clinician consult language.*
- **Stress/Mood:** magnesium glycinate, L-theanine, saffron, lemon balm, omega-3, breathwork routine.
- **Sleep:** magnesium, glycine, theanine, lemon balm, low-dose melatonin option, circadian plan.
- **Gut Reset:** probiotic, prebiotic fiber, digestive enzyme, peppermint oil, ginger, elimination/reintroduction guide.
- **Vision:** lutein, zeaxanthin, omega-3, saffron, astaxanthin.
- **Joint:** curcumin, boswellia, collagen peptides, omega-3, MSM.

### Product/provider quality ranking criteria (12)
Third-party testing · standardization level · extract potency · dosage match to evidence · heavy metal testing · contamination testing · allergen profile · price per effective dose · brand reputation · geography availability · refund/fulfillment reliability · certificate of analysis availability.

### Core funnel
`Need → category hub → trust/science → quiz → recommended package → safety screen → purchase → subscription/refill → progress tracking → upsell to AI/human expert.`

---

## 6. Architecture / Content Factory (Backend Research Engine)

**Core principle:** Consumer app is NOT a raw on-demand research chatbot. The **backend is the research/content factory**; the **frontend serves polished, cached, reviewed hubs.**

### High-level components (9)
1. **Consumer Frontend** — surfaces in §2.
2. **Content Factory Backend** — jobs: scheduled research refresh, source ingestion, claim extraction, evidence grading, protocol generation, product mapping, safety review, content versioning, publication.
3. **Evidence Store** — sources, claims, evidence level, freshness, source URLs, citation snippets/metadata, confidence, reviewer status.
4. **Protocol Library** — herbs, nutrients, diet rules, routines, yoga/breathwork, sleep/stress practices, contraindications, common dose ranges, quality markers.
5. **Product Catalog** — provider products, ingredient mapping, quality ranking, price, margin, geography, affiliate/reseller metadata, inventory/availability.
6. **Recommendation Engine** — inputs: user need, quiz profile, exclusions, medications, pregnancy/lactation, geography, dietary restrictions, price sensitivity. Outputs: regime, package, safety warnings, escalation recommendation.
7. **AI Guru** — explain content, guide quiz, personalize regime, answer product questions, explain safety warnings, recommend expert escalation, follow up. Boundaries: no diagnosis, no prescription advice, no emergency advice beyond redirect, no cure claims.
8. **Human Expert Layer** — certified consult, personalized chart, review AI recs, diet/routine chart, follow-up plan. Provider model: OpenLoop-style white-label / practitioner marketplace / India-based certified experts.
9. **Admin Review Console** — approve generated content, resolve safety flags, check source quality, manage products, edit protocol pages, review adverse reports.

### Content refresh workflow (10 steps)
1. Scheduler triggers category refresh → 2. Source crawler queries approved sources → 3. LLM summarizes sources into structured evidence → 4. Claim extractor creates claim records → 5. Evidence grader assigns levels → 6. Protocol generator updates regime modules → 7. Product mapper maps ingredients to approved products → 8. Safety engine flags interactions/red flags → 9. Human review queue catches sensitive/high-risk changes → 10. Approved content cached and published.

### Content types
Category overview · mechanism map · latest science/milestones · core regime · protocol stacks · daily schedule · sourcing guide · diet plan · safety guide · FAQ · product package · expert chart template.

### Data entities (the domain model)
Category · AilmentNeed · ConsumerSegment · Source · EvidenceClaim · EvidenceGrade · Mechanism · Ingredient · ProtocolStack · RegimeSchedule · DietPlan · SafetyFlag · Contraindication · Product · Provider · Package · ResearchRefreshJob · ContentVersion · ReviewerDecision · UserProfile · QuizResult · AIConversation · ExpertConsult · RegistryEntry · OutcomeCheckIn.

### On-demand vs cached
- **Allowed on-demand:** personalization, AI guru explanation, quiz interpretation, product comparison, follow-up coaching.
- **NOT preferred on-demand (must be cached/reviewed):** core claims, safety-sensitive recommendations, newly generated protocols without review, product claims.
- **Why periodic cache beats pure on-demand:** safer, more reviewable, better SEO, lower latency, lower AI cost, easier source traceability, avoids hallucination in live flow, supports product/package QA, supports editorial polish.

### Reusable from existing Ayurveda app (React 19 / Vite / TS / Tailwind / @google/genai)
Useful: React/Vite shell, Gemini structured-JSON generation, multilingual selection pattern, AI guide/persona UX, catalog browsing, content page pattern, download/export pattern, voice tutor foundation, practice/feedback loop, live camera/mic foundation, Prakriti/personalization quiz pattern.
Needs replacement: domain model, content schema, safety model, evidence model, product/commerce layer, backend periodic content pipeline, admin review workflow, source/citation handling, package recommendation logic.
**Risks in old app to avoid:** client-side API key, `BLOCK_NONE` safety thresholds, no medical compliance layer, no citations/traceability, no backend review, "Live consultation" wording risky for health product.

---

## 7. Safety & Compliance Guardrails (EXHAUSTIVE — Governs UI Behavior)

**Core position:** This is **educational natural wellness guidance and commerce**. It must NOT present as: medical diagnosis, medical treatment, emergency care, prescription advice, cure, or disease-reversal guarantee.

### Claim language — USE
"supports" · "may help" · "evidence suggests" · "associated with" · "traditionally used for" · "mechanistic evidence suggests" · "clinical evidence is limited".

### Claim language — AVOID (blocked claims)
"cures" · "treats" · "reverses" · "guaranteed" · "no side effects" · "doctor-approved" (unless actually reviewed by credentialed professionals) · "clinically proven" (unless the exact product/claim has evidence).

### Mandatory disclaimers (every category page AND package page)
- educational only
- not medical advice
- consult physician/qualified professional
- check medication interactions
- pregnancy/lactation warning
- stop and seek help for adverse reactions

### Safety screen before purchase — must ask about
pregnancy/lactation · age under 18 · liver disease · kidney disease · anticoagulants · diabetes medications · blood pressure medications · SSRIs/SNRIs/psychiatric medications · immunosuppressants · surgery planned · allergies · serious symptoms/red flags.

### Category-specific guardrails
- **Blood Sugar** — risks: hypoglycemia with diabetes meds, delaying care. Required: medication warning, clinician consult, no diabetes treatment replacement.
- **Heart/BP/Cholesterol** — risks: drug interactions, serious cardiovascular events. Required: strict red flags, clinician involvement.
- **Mental Well-being** — safe framing: mood/stress/emotional well-being/nervous system support. Avoid: treating depression, treating anxiety disorders, medication replacement. **Red flags:** suicidal thoughts, self-harm, psychosis, mania/bipolar symptoms, severe panic, substance withdrawal, postpartum depression, eating disorder symptoms.
- **Hormones/Fertility** — risks: pregnancy, fertility-treatment conflicts, endocrine conditions. Required: clinician consult, stronger expert escalation.
- **Eye Health** — avoid: "eyesight improvement" as refractive reversal, disease-cure claims. **Red flags:** sudden vision loss, eye pain, flashes/floaters, neurological symptoms.
- **Liver/Detox** — avoid: fake detox claims, curing liver disease. Required: liver-disease warning, alcohol-withdrawal warning.

### Product quality safety (require or prefer)
third-party testing · certificate of analysis · heavy metal testing · standardized extracts · clear ingredient labels · allergen disclosure · no hidden pharmaceuticals.

### Human expert scope
**May provide:** wellness education, diet charts, herbal/nutrient regime suggestions, yoga/breathwork plans, lifestyle coaching.
**Must NOT provide:** diagnosis (unless appropriately licensed), prescription medication advice (unless appropriately licensed), emergency care, medical treatment plans outside scope.

### Escalation triggers — AI guru MUST escalate to human expert or clinician when
- user has red flags
- user reports serious disease
- user takes high-risk medications
- pregnancy/lactation
- minors
- complex multi-condition cases
- request is outside wellness scope

---

## 8. Mobile Continuity & Recurring Revenue (Companion App)

**Working name:** NicheCore Companion. **Promise:** *"Your natural health regime, remembered for you, adjusted with you, and refilled before you run out."*

**Key insight:** *The website earns the first purchase. The mobile app earns the relationship. The relationship earns recurring revenue.*

Full loop: `Need → Evidence Hub → Personalized Regime → Package Purchase → Mobile Routine → Reminders → Check-ins → Refill → Expert Adjustment → Long-Term Subscription.`

### Core mobile features (9)
1. **Daily Regime Timeline** — morning supplements, post-meal herbs, evening routine, breathwork/yoga, diet action, hydration, sunlight/walk/sleep cue. Each item: why it matters, how to take, safety note, skip button, taken button.
2. **Smart Reminders** — supplement, meal-timing, fasting/protein/fiber, water, sleep wind-down, stress reset, yoga/breathwork, refill, expert follow-up, evidence-update. Personal not spammy. (e.g. *"Your 30-day pack has about 7 days left. Refill?"*)
3. **Auto-Recurring Package Subscription** — controls recurring revenue. Models: 30-day starter, 90-day protocol, monthly maintenance, seasonal reset, family pack, expert-reviewed premium. **Refill logic:** app knows package start date → estimates remaining supply → asks for tolerance feedback → suggests continue/pause/adjust → triggers reorder/subscription.
4. **Regime Check-Ins (weekly)** — did you take it, side effects, digestion, sleep/stress change, symptom/need tracking; optional photos (skin/hair), weight/waist (metabolism), glucose logs (blood sugar), mood/sleep score (well-being). **Never overclaim causality — "This is a trend signal, not a diagnosis."**
5. **AI Guru Continuity** — knows category, protocol, products purchased, adherence, check-in results, safety flags, expert notes. Can explain today's regime, answer ingredient Qs, help with missed doses, suggest food swaps, prep expert questions, explain evidence updates, encourage consistency. Must NOT diagnose / replace clinician / make emergency decisions / ignore red flags.
6. **Human Expert Touchpoints** — first plan review, 30-day chart, diet chart, supplement-timing review, stress/sleep chart, Ayurveda Prakriti plan, video consult, follow-up every 30/60/90 days. **Upsell triggers:** side effects reported, poor adherence, no progress after expected period, complex category, pregnancy/medication/medical condition flagged, user wants deeper personalization.
7. **Evidence Update Feed** — "New finding added", "Protocol updated", "Ingredient downgraded", "Safety warning added", "New product passed quality screen", "Expert commentary available".
8. **Personal Health Journal** — symptoms, photos, stress, sleep, digestion, diet compliance, cycle data, hair shedding, skin patches, waist/weight, glucose. Drives personalization, retention, expert review, outcome research, better bundles.
9. **Community and Registry (optional)** — join category registry, anonymous outcome tracking, aggregated adherence stats, cohort insights, contribute to real-world evidence (data moat).

### Recurring revenue architecture
- **Revenue events:** first package purchase · subscription conversion · refill · premium AI plan · human expert consult · expert follow-up · seasonal protocol upgrade · family member add-on · category expansion.
- **Retention loops:** daily reminders · weekly check-ins · progress visualization · evidence updates · refill countdown · expert touchpoints · personalized chart updates · streaks (without childish gamification) · "your protocol has been updated" notifications.
- **Revenue metrics:** package conversion, app activation after purchase, day-7 adherence, day-30 retention, subscription attach, refill rate, expert consult attach, AOV, gross margin, churn reason, safety complaint rate.

### Six product streams
1. Evidence Hub (acquire/trust/route) · 2. Regime Commerce (sell bundles, subs, match products) · 3. Mobile Companion (adherence, personalization, refills, relationship) · 4. AI Guru (daily support, explanation, habit, safety) · 5. Human Expert Network (premium trust, complex charting, higher LTV, safe escalation) · 6. Evidence Factory (refresh content, news/RSS, trust moat).

---

## 9. Strong Opinions / Anti-Establishment Evidence Stance

**Product hook (verbatim):** *"Not hocus pocus. Not influencer wellness. Not supplement snake oil. Real science, latest findings, global natural-medicine evidence, transparent grading, and consumer-safe natural regimes."*

### HARD BLACKLIST — US health-establishment sources (governs content sourcing AND trust copy)
The product must NOT use US health-establishment orgs as evidence authorities, trust anchors, content sources, product-positioning validators, or credibility signals. Specifically:
- No FDA/FTC citations as scientific proof; no FDA/FTC language as evidence philosophy; no FDA/FTC framing in consumer trust copy; no "because the regulator says so" logic; no FDA/FTC as default compliance/health authority in doctrine.
- No US disease associations (diabetes, heart, cancer, dermatology, obesity, psychiatry, etc.) as trust anchors.
- No US hospital-industry, US insurance-aligned medical policy bodies, US pharma-funded advocacy/professional orgs, or US medical trade associations as trust anchors.
- A future US legal-risk appendix, if ever needed, must be a **separate owner-approved legal document** and must NOT pollute the product's evidence doctrine or consumer trust narrative.

**US source exception:** US-origin material allowed only with explicit labeling + conflict review when NOT acting as establishment authority — individual peer-reviewed papers by US scientists, independent university research (conflicts disclosed), raw clinical trial records as data only, independent lab testing, consumer demand signals (YouTube/search/social). Treat these as *evidence objects to evaluate, not institutions to trust.*

### "Evidence-driven" means / does NOT mean
- **Does NOT mean:** ancient = proven · natural = safe · mechanism = clinical outcome · influencer popularity = evidence · supplement marketing = science · one study = truth · pharma-regulatory approval = the only valid evidence.
- **Does mean:** cite real sources · grade claims · show uncertainty · separate human vs mechanistic evidence · show contraindications · update pages on new findings · flag conflicts of interest · distinguish tradition / plausibility / clinical proof.

### Preferred evidence source hierarchy (non-US-pluralist)
- **Tier 1 (strongest):** systematic reviews, meta-analyses, RCTs, large prospective cohorts (when RCTs impractical), well-designed human trials on the ingredient/dose/outcome.
- **Tier 2 (high-quality context):** peer-reviewed reviews, human mechanism papers, biomarker studies, pharmacognosy, ethnobotany/traditional-medicine reviews, safety reviews, trial-registry results.
- **Tier 3 (global natural/traditional authorities — prioritized over US):** WHO traditional/complementary medicine, India Ministry of AYUSH, CCRAS & Indian traditional-medicine research bodies, classical Ayurveda texts w/ modern commentary, Pharmacopoeia Commission for Indian Medicine & Homoeopathy, ICMR (Indian biomedical context), Chinese Pharmacopoeia & TCM institutions, China NMPA, Australia TGA/NHMRC, EMA/HMPC herbal monographs, EFSA nutrient opinions, Health Canada natural product references, university research centers, independent labs.
- **Tier 4 (traditional use — labeled, never as clinical proof):** Ayurveda/TCM/Siddha/Unani classical use, ethnobotanical use, practitioner consensus, human expert charts.
- **Tier 5 (demand/trend signals — not proof):** YouTube science channels, podcasts, search trends, social questions, review mining, community reports.

### Evidence grades (per claim)
`A: strong human evidence` · `B: moderate human` · `C: early human/mixed` · `D: mechanistic/animal/in-vitro` · `T: traditional-use` · `H: hypothesis/emerging` · `X: insufficient/rejected`.

### Freshness states + cadence
States: `fresh` (≤30 days) · `current` (≤90) · `aging` (≤180) · `stale` (>180 or major new evidence). Cadence: weight/metabolism & blood sugar = weekly–monthly; hair, skin, gut, mood/stress/sleep = monthly; hormones = monthly with expert review.

### Per-category RSS/news feed monitor (output fields)
Feeds: PubMed query RSS, clinical-trial-registry updates, journal RSS, university research news, WHO/traditional-medicine, AYUSH/CCRAS, Chinese medicine/pharmacopoeia, Australia/Canada/Europe natural-product updates, expert YouTube/podcast watchlist, independent-lab safety/quality alerts. Each feed produces: latest findings, source link, claim extracted, relevance score, evidence grade, safety impact, page-update-needed (y/n), human-review-needed (y/n).

### Anti-hype rejection rules (content the system must REJECT)
claims cure · claims guaranteed reversal · says "no side effects" · mystical claims as proof · single animal/in-vitro study as consumer promise · hides contraindications · hides conflicts of interest · treats YouTube popularity as proof · recommends products without quality checks · disease-treatment claims without strong evidence + proper boundaries.

### Product voice
Confident · science-first · pro-natural · anti-hype · globally informed · respectful of Ayurveda/TCM/traditional healing · transparent about uncertainty · consumer-friendly · commercially useful without manipulation.

**Bottom line:** *"Evidence-driven means the platform earns trust by showing its work. It is not pharma-regulatory worship, and it is not mystical marketing."*
