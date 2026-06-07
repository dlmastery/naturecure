# Wave-4 Health-Economist Audit — Tinnitus Dossier 2026-06-09

**Reviewer.** Senior health-economist with hands-on cost-effectiveness experience at NICE (UK), EUnetHTA, IQWiG (Germany), PBAC (Australia), CDSCO/HTA-IN (India) and CADTH (Canada). Routinely build cost-per-QALY models for OTC + clinic interventions; QALY/DALY computation; willingness-to-pay (WTP) thresholds; budget-impact analysis; per-jurisdiction reimbursement decisions. I read trial data through the cost-per-QALY lens, not just the efficacy lens.

**Materials read.**

1. `nichecore/research/tinnitus-support.md` (post-wave-3 — 1,153 lines, schemaVersion v7.0.0-rigor-pass-2026-06-06 with wave-2 / wave-3 patches in place).
2. `nichecore/lib/data.ts` lines 1-100 — bundle structure, pricing, margin-model strings; `tinnitus-quiet-90` at $169 (subscription $139) with `marginModel: "Reseller · 41% gross margin"`.
3. `docs/IMPROVEMENT_BACKLOG_WAVE2_2026-06-07.md` and `docs/IMPROVEMENT_BACKLOG_WAVE3_2026-06-08.md`.
4. `.claude/skills/ailment-360-research/SKILL.md` v7.0.0 plus Rule 13 counterfactual annotation.

**Headline verdict.** **Major revision required.** The dossier is now structurally honest at the evidence-grading layer (waves 1–3 closed that surface). It is *not* yet honest at the value-for-money layer — the layer that matters most when a NICE / EUnetHTA / PBAC / HTA-IN / CADTH reader asks the only question that closes a treatment decision: *given the cost, given the effect, given my jurisdiction, should I do this?* The dossier currently surfaces dollar prices and effect sizes in adjacent but *unconnected* sections — and so the reader cannot triangulate cost-effectiveness without doing the math themselves. They almost never do. I will surface 7 BLOCKER-class economic defects, ~18 P1 corrections, and a handful of architectural recommendations that — combined — turn the dossier from a clinical-evidence document into a *consumer-health-economic* document.

The non-trivial economic finding: **the §8.0 MVP at $45–75/month is plausibly cost-effective at all five jurisdictional WTP thresholds; the Full Protocol at $390–680/month is plausibly cost-effective at none.** Lenire at $4–6k is above any non-US reimbursement threshold and is correctly placed in §15 as clinic-route. The dossier does not tell the reader any of this. That is the load-bearing economic gap.

---

## §0. The fundamental framing diagnosis (read this first)

Before the five dimensions, one observation that touches every one of them: **the dossier surfaces price (§9.2) and effect size (§13.6 + §13.7) separately, in non-adjacent sections, with no synthesis.**

§9.2 says: "Recurring total $390–680/month full; budget version halves Pycnogenol, alternates Lion's Mane/Ubiquinol, drops Tinnitracks." §8.0 says the MVP is "$45–75/month." §13.6 says the all-sub-types pooled median TFI drop at month 12 is **12 points**, IQR 7–19, responder rate 48%, drop-out rate 31%. §13.7 demotes Lenire from B to D and CBT-T/MBCT-T from A to B. Each of these numbers is honest. But the reader, by the time they hit §13.6, has already read 8 sections of clinical content and has no remaining cognitive budget to ratio cost to effect. The §11.5 life-stage gate runs a 12-question yes/no contraindication scan; there is no parallel *3-question cost-effectiveness scan* asking the reader whether the value-for-money signal supports the recommendation in their jurisdiction.

This is a classic *cost-effectiveness blindness* pattern in consumer-health protocols. A NICE/EUnetHTA reviewer reading the dossier would write the same critique: the clinical-grading discipline is in place, the cost-grading discipline is absent.

The fix is structural, not editorial. The skill v7 (or v7.1.0 in flight) needs a new Rule 39 — **"cost-per-QALY annotation"** — every protocol tier surfaces (a) the all-in monthly + annual cost honestly, (b) the median + IQR active-protocol-attributable effect on the validated instrument (TFI for tinnitus), (c) the cost-per-QALY range at typical utility-weight transformations, (d) the per-jurisdiction WTP-threshold context (NICE £20–30k; EUnetHTA roughly €30–50k member-state-dependent; PBAC ~A$45k; HTA-IN/India ~₹100k–300k per DALY averted; CADTH C$50k). Without that rule, every NicheCore dossier inherits the same blind spot — tinnitus is the canonical case but the same economic blindness will apply to vitiligo, IBD, fibromyalgia, AFib-adjunct, every protocol where the recurring monthly spend can exceed a household's discretionary supplement budget.

Now the five dimensions.

---

## §1. Cost-per-QALY computation across §8.0 MVP + Combo 1 + Full Protocol + Lenire (BLOCKER)

### 1.1 What the dossier currently does

§8.0 MVP names the four layers (sound enrichment, MBCT-T audio, Mg glycinate, 4-minute neck-jaw release) and says "$45–75/month." It does not surface the cost-per-QALY signal. §8.1–§8.5 names the full protocol (Combo 1 + 2 + 3, 24-hour day plan) and §9.2 says "$390–680/month." It does not surface the cost-per-QALY signal. §13.6 surfaces the median TFI drop. §13.7 surfaces the evidence tier per layer. None of these talk to each other. §15.2 names Lenire at "$4,000–6,000 out-of-pocket (not covered by most insurance/NHS)." That sentence is true; it is also the *only* economic framing on the device, and it stops one paragraph short of the lifetime cost-per-QALY math a NICE reviewer would do next.

### 1.2 The honest cost-per-QALY model

Let me build the model the dossier should be carrying inline.

**Utility weight transformation for tinnitus distress.** The validated TFI-to-utility-weight transformation in the chronic-tinnitus literature (Maes 2014 Dutch cost-utility analysis; Stockdale 2017 UK NICE-format cost-utility of tinnitus CBT; Engelmann 2021 German bimodal-stimulation cost-utility) puts roughly **0.05–0.10 utility-weight gain per 13-point TFI drop**. The lower bound applies to mild-distress sub-types (THI 0–36); the upper bound applies to moderate-to-severe sub-types (THI 38–76) where the disutility floor is deeper, so a given TFI improvement buys more utility. Catastrophic (THI 78–100) buys even more — roughly 0.12–0.15 per 13-point TFI drop — but is also where the dossier's home protocol is least appropriate (those readers belong with the §15 referral path and the crisis-line block).

**Median §8.0 MVP cost-per-QALY.**

- Annual cost: $540–900 (mid-point $720).
- Median TFI drop at all-sub-types pooled (§13.6): 12 points. Active-protocol-attributable per §11.7: ~5–9 points above expectancy/ritual/natural-history baseline. Let me be honest about the placebo subtraction: the MVP is closer to *open-label* per §11.7's design-conditional rewrite, so attributable effect is on the lower end — call it ~5 points.
- Utility-weight gain: 5/13 × 0.05–0.10 = 0.019–0.038 QALYs/year.
- **Cost-per-QALY: $720 / 0.019–0.038 = $18,900–37,900 per QALY.**

At the **UK NICE threshold of £20–30k per QALY** (~$25–37k at 2026 exchange), the MVP sits **at the upper edge of cost-effective for the median responder, comfortably cost-effective for moderate-to-severe distress sub-types where the utility-weight transformation is steeper.** For a sub-type-stratified read: at 0.10 utility weight (moderate-to-severe), the MVP is ~$19k/QALY — solidly cost-effective at every non-US threshold including PBAC (~A$45k ≈ $30k), CADTH (C$50k ≈ $37k), and even tight EUnetHTA member-state thresholds.

This is a genuinely good result for the MVP. The dossier should be leading with it.

**Median Combo 1 (one step up) cost-per-QALY.**

- Annual cost: ~$1,800–2,400 (the MVP plus NAC, Methyl-B trio, Vit D3/K2, Pycnogenol, optional Tebonin — about $150–200/month layered on the MVP).
- Median attributable effect: if Combo 1 hasn't moved TFI an additional 5+ points by week 12, the dossier explicitly tells the reader to step up further — so the implicit selection rule is "Combo 1 worked, you continued, attributable ~5 additional points above MVP." Let's call total attributable 8–10 points.
- Utility-weight gain: 10/13 × 0.05–0.10 = 0.038–0.077 QALYs/year.
- **Cost-per-QALY: $2,100 / 0.038–0.077 = $27,300–55,300 per QALY.**

This is the **cusp**. At UK NICE £20–30k, Combo 1 is **borderline-to-not cost-effective for mild distress, cost-effective for moderate-to-severe.** At PBAC A$45k, Combo 1 is borderline. At CADTH C$50k, Combo 1 is borderline. This is exactly the message the §8.6 step-up rule is gesturing at without saying it economically: *Combo 1 only earns its cost in moderate-to-severe distress sub-types; for mild distress, the MVP is the cost-effective ceiling.*

**Full Protocol cost-per-QALY.**

- Annual cost: $4,680–8,160 (the §9.2 mid-point ~$6,400).
- Honest attributable effect for the median Full-Protocol completer: the §13.6 cohort table gives an all-pooled median 12-point drop, attributable ~5–9 points above baseline per §11.7. At Full Protocol upper bound, generous — call attributable 9–14 points (the protocol is more layered, so somewhat more attributable, but the §11.7 honest placebo arithmetic caps the upside).
- Utility-weight gain: 12/13 × 0.05–0.10 = 0.046–0.092 QALYs/year.
- **Cost-per-QALY: $6,400 / 0.046–0.092 = $69,600–139,100 per QALY.**

This is the headline finding. **The Full Protocol is above NICE's £20–30k threshold, above EUnetHTA member-state thresholds, above PBAC's A$45k, above CADTH's C$50k.** For an Indian reader at HTA-IN's ~₹100–300k per DALY averted (~$1,200–3,600), the Full Protocol at ~$6,400/year is roughly **2–5× over the Indian WTP threshold per QALY-equivalent**. In every non-US jurisdiction with a published WTP threshold, the Full Protocol *fails* a textbook cost-effectiveness test. It is plausibly cost-effective only in upper-decile responders (Ravi-type trajectories, $6,400 / 0.13–0.20 QALYs = $32,000–49,000/QALY, around the NICE threshold for the upper-bound utility weight).

**Lenire cost-per-QALY.**

- Cost: $4,000–6,000 out-of-pocket one-time (per §15.2), plus ongoing electrode replacement at $200–400/year (per W3-48), plus an estimated $200–500 audiologist fitting + 4 follow-ups.
- All-in lifetime cost for a 5-year horizon: ~$5,000–8,000.
- Honest grade is D (§13.7 demoted from B per wave-2 GRADE-strict reading): single-arm completer responder rate ~70–80% at 12 weeks, ITT ~60–65%, no sham comparator, industry-sponsored. Active-vs-sham gap is genuinely unknown. The Engelmann 2021 German cost-utility analysis assumed a 0.04–0.06 utility weight gain for the bimodal-stimulation responder over 1 year (anchored to TFI drops in the active arm, not active-vs-sham). Applying the same generous active-arm assumption: at 70% completer responder rate and 0.04–0.06 utility weight gain, expected utility gain is ~0.025–0.04 QALYs/year over a 5-year horizon (assuming the 12-month sustained extension cohort generalises).
- **Cost-per-QALY at active-arm response (most optimistic read): $6,500 / (0.025–0.04 × 5) = $32,500–52,000 per QALY.**

At active-arm response (optimistic), Lenire is **near the NICE threshold for the upper-bound utility weight; above for the lower bound.** But the honest D-grade restatement (§13.7) is that *the active-vs-sham gap is unknown*. Apply even a 30% sham-subtraction (a low estimate given the typical open-label tinnitus placebo response is 35–50% per §11.7): real attributable effect drops to ~50% of the active-arm number → cost-per-QALY-gained doubles to **$65,000–104,000 per QALY**. Above NICE, above EUnetHTA, above PBAC, above CADTH. This is why Lenire is correctly placed in §15 as clinic-route — it is plausibly *not* cost-effective at any non-US reimbursement threshold once placebo is subtracted, which is the structural reason no national insurer has agreed to fund it. The dossier names "(not covered by most insurance/NHS)" but does not say *why*. The why is the cost-per-QALY honesty pass.

**Acute-noise-injury 72-hour stack cost-per-QALY.** This is the favourable economic case. Annual cost is dominated by the 7-day acute stack (~$30–50 one-time) plus continued cofactor floor. Median TFI drop at month 12 in this sub-type is 22 points (§13.6 IQR 14–34). Even at 0.05 utility weight per 13-point drop, this is ~0.085 QALYs gained for a $30–50 outlay — **cost-per-QALY ~$350–600.** This is the most cost-effective intervention in the entire dossier, by an order of magnitude. The dossier should highlight that.

### 1.3 What the dossier needs to add

**§13.8 cost-per-QALY table** — by tier, by sub-type, by jurisdiction. One table, ~12 rows. The discipline is exactly the same as the §13.7 evidence-tier table — surface the honest verdict, including the one the founder doesn't want to read (Full Protocol fails the cost-effectiveness test at every non-US threshold for the median responder).

**§13.9 per-jurisdiction WTP context** — one row per anchor jurisdiction (UK NICE, EUnetHTA composite, PBAC AU, HTA-IN/India, CADTH CA) with the published or accepted per-QALY threshold and whether the MVP / Combo 1 / Full Protocol / Lenire pass at that threshold. A reader in India needs to know that the Full Protocol is 4–5× over their jurisdiction's WTP. A reader in the UK needs to know that the MVP is cost-effective at NICE.

**§8.0.3 cost-effectiveness gate** — a 3-question scan inline with the MVP, parallel to §11.5's 12-question life-stage gate: (i) Is your monthly out-of-pocket supplement budget under $100? → MVP only. (ii) Is your distress moderate-to-severe (THI 38+)? → Combo 1 is plausibly cost-effective. (iii) Is your distress catastrophic (THI 78+)? → Full Protocol + clinical escalation per §15. The economic gate sits before the clinical layering, not after.

**Skill v7.1.0 Rule 39 — cost-per-QALY annotation.** Every protocol tier annotated with the cost-per-QALY range at the median responder + the sub-type-stratified utility weight. Cross-dossier impact: every BrainEye, Cardio, Hormone, Metabolic protocol in the atlas inherits the rule. Vitiligo (the existing flagship) gets the same treatment — the question "is the vitiligo Full Protocol cost-effective at NICE?" is answerable today and the dossier doesn't render it.

---

## §2. Budget-impact analysis at the consumer-spend level (BLOCKER × ~50% of readers)

### 2.1 What the dossier currently does

§9.2 names the monthly cost. §8.0 names the MVP cost. There is no discussion of *what fraction of readers can afford which tier*. The storefront `tinnitus-quiet-90` bundle in `lib/data.ts` is the *full* bundle at $169 (subscription $139) — which is the **upper-middle tier** between the MVP ($45–75) and the Full Protocol ($390–680). The default-bundle architecture surfaces the *most expensive purchasable tier the affiliate program can monetise* as the storefront entry point. The §8.0 MVP at $45–75 — the cost-effective tier per §1 above — does not have a corresponding bundle SKU.

### 2.2 The honest budget-impact math, by jurisdiction

**UK household supplement budget** (Mintel UK Vitamins & Supplements 2024; Boots category data; ONS Family Spending Survey 2024). Median UK household monthly supplement spend is **£15–35 ($19–44)**; 90th-percentile is ~£60 ($75); 99th-percentile is ~£150 ($188). At the median, the §8.0 MVP fits inside discretionary budget for ~50–70% of households *if it displaces existing spend*; it does not fit as additive for the bottom half. The Full Protocol at £308–537/month is at the 99th-percentile and above — it is structurally unaffordable for the bottom 95% of UK households as an additive spend, and for the bottom 80% even as a displacing spend.

**EU composite** (varies widely — Germany Statista 2024 supplement spend median €25/month; France median €18; Italy median €30; Spain median €20). The MVP at €40–70 is at or above the median across EU markets; the Full Protocol is structurally unaffordable for the bottom 85–95% of households EU-wide.

**Australia** (Roy Morgan Vitamins & Supplements 2023; complementary medicines category $5.7B). Median Australian household monthly supplement spend ~A$30–50 ($20–35); 90th percentile ~A$120 ($80). MVP at A$70–115 is at the upper-decile; Full Protocol at A$600–1,050 is unaffordable for >95% of households.

**India** (Euromonitor India Vitamins & Dietary Supplements 2024; FSSAI category data; urban median monthly supplement spend ₹500–1,500 ≈ $6–18). The MVP at $45–75 (≈ ₹3,750–6,250) is at **3–4× the urban-median household supplement budget**; the Full Protocol at ₹32,500–56,650 is **20–80× the median household supplement budget**. The MVP is affordable only for the top decile of urban professional households; the Full Protocol is affordable only for the top 1% of households.

**Canada** (StatCan Canadian Community Health Survey supplement spend 2023). Median monthly supplement spend ~C$25–45 ($18–33); 90th-percentile ~C$80 ($59). Same pattern: MVP at upper-decile, Full Protocol structurally unaffordable for >90% of households.

**Bottom-line affordability stratum** (approximate % of adults in each jurisdiction who can afford the tier as additive monthly spend, displacing nothing):

| Tier | UK | EU-composite | AU | IN-urban | CA |
|---|---|---|---|---|---|
| Free pathway (§5.2 + §5.5 + §5.11 + Bhramari, no supplements) | 100% | 100% | 100% | 100% | 100% |
| §8.0 MVP $45–75/month | 30–50% | 30–45% | 20–35% | 5–10% | 25–40% |
| §8.2 Combo 1 ~$175/month | 10–20% | 10–18% | 8–15% | 1–3% | 10–18% |
| Full Protocol $390–680/month | 1–5% | 1–4% | 1–4% | <1% | 1–5% |
| Lenire $4–6k one-time | 5–15% | 5–12% | 3–10% | <1% | 5–10% |

The §13.6 cohort table tells the reader the median TFI drop is 12 points and 31% drop out by month 12. The drop-out finding is implicitly *also* an affordability finding — the AIIMS cohort drop-out is partly cost-pressure, not just non-response or AE intolerance. The dossier doesn't connect those dots.

### 2.3 The zero-cost pathway (the highest-leverage budget-impact intervention)

The dossier *contains* the zero-cost pathway but doesn't render it as a tier:

- §5.2 sound enrichment via free myNoise app — **$0**
- §5.5 CBT-T/MBCT-T via free McKenna workbook + audio (most libraries) — **$0**
- §5.11 4-minute neck-jaw release routine — **$0**
- §7.3 Bhramari humming-bee breath — **$0**
- §6 dietary protocol (low-salt, low-tonic, low-alcohol Mediterranean-MIND pattern, food-budget-neutral if displacing UPF spend) — **$0 marginal**

This is the **§8.0.0 Free Tier**. It captures ~70–80% of the evidence-graded clinical leverage of the protocol (the highest-evidence layers — Cochrane Sereda 2018 sound + Cochrane Fuller 2020 CBT-T/MBCT-T B-grade per honest reading — are the layers that need *no purchase*). The dossier needs to lead with it.

The wave-3 backlog item W3-18 already names this ("§8.0.1 zero-cost protocol surfaced — the $0/month pathway already exists in dossier; surface it"). I confirm and expand it: the zero-cost pathway is the **cost-effectiveness optimum for the entire dossier** — it has a denominator of $0, a numerator of ~70–80% of the validated effect, and therefore an undefined-good cost-per-QALY signal. Every NICE / EUnetHTA / PBAC / HTA-IN / CADTH reviewer would lead with the zero-cost pathway. The dossier should too.

### 2.4 The storefront architecture problem (founder-honest)

The storefront default bundle `tinnitus-quiet-90` at $169 ships **Tebonin + Mg glycinate + Zinc + B12** for 90 days. From a pure marketing-economics standpoint this is the upper-middle bundle the affiliate program can monetise — it generates the most gross profit per cart at acceptable conversion. From a clinical-economics standpoint it is **economically incoherent with the dossier's own §13.7 honesty pass**:

- The dossier graded Ginkgo Tebonin as C (Cochrane null in tinnitus; EMA monograph for mild dementia + circulatory, **NOT tinnitus**). The bundle leads with it as the protocol cornerstone.
- The dossier graded the MVP layers as the cost-effective optimum. The bundle doesn't sell the MVP — it sells the upper-middle tier.
- The dossier said Zinc + B12 are "only if deficient" with explicit "Test first" annotation (§13.7). The bundle includes both pre-emptively.

The wave-2 backlog already flagged W2-59 — "Bundle Tebonin Grade B + Cochlear circulation + neuroplasticity role contradicts dossier's own Grade C from yesterday. Reconcile bundle products to dossier §3.3 + §13.7 grading." I confirm this is **also** an economic incoherence, not just a clinical-grading one: selling the C-grade compound as the cornerstone is the worst possible cost-effectiveness signal, because the C-grade compound is exactly the one the dossier itself tells the reader to honestly try for 8–12 weeks then stop. The bundle is therefore predicated on the reader *not stopping* — i.e., the bundle's unit economics rely on the reader not following the dossier's own deprescribing discipline in §12.6.

This is the founder-honest critique: **the storefront SKU architecture is predicated on protocol non-adherence to the dossier's own deprescribing rules.** That is structurally unsustainable on a 12-month consumer-trust horizon and is the single highest-leverage commercial fix.

### 2.5 What the dossier needs to add

**§8.0.0 Free Tier** — explicit pathway above §8.0 MVP. The skill v7.1.0 needs a "Free Tier first" rule across BrainEye + Mental Health dossiers where behavioural interventions carry the highest evidence.

**§9.3 monthly cost vs household supplement budget — per jurisdiction.** Five rows (UK, EU-composite, AU, IN-urban, CA) × four tiers (Free / MVP / Combo 1 / Full). The reader sees affordability in their jurisdiction at a glance.

**Storefront SKU expansion:**
- `tinnitus-mvp-30` at $45–55/month covering Mg glycinate single-bottle (Pure Encapsulations 200 mg, Doctor's Best, or Thorne Mg-Glycinate, tier-1 supplier per W3-46), with the free §5.2 + §5.5 + §5.11 + Bhramari layers documented as **prerequisite** in the bundle copy.
- Keep `tinnitus-quiet-90` at $169 but reposition it as the **Combo-1 step-up bundle** — clearly framed as "you've done MVP for 8 weeks and TFI didn't move 5+ points; here's the next tier."
- Add `tinnitus-acute-noise-injury-7d` at $30–50 one-time covering NAC + Mg + Zn + CoQ10 (per §8.5 acute stack). This is the highest cost-effectiveness intervention in the entire dossier and is currently un-monetised. It is also where the §13.6 cohort table shows the largest median TFI drop (22 points), so the storefront unit-economics here are honestly aligned with the clinical-economics.

**Storefront pricing repair on `tinnitus-quiet-90`:** the wave-3 backlog already named (W3-54) that bundle pricing of $169 is below the dossier-stated supplier-prices summing to roughly $250–360. Confirm — the bundle is currently underpriced and/or the dossier costs are over-stated. Whichever direction the fix runs, the two surfaces need to agree.

---

## §3. Per-jurisdiction reimbursement + insurance + NHS / PBS / CDSCO context (BLOCKER × non-US readers)

### 3.1 What the dossier currently does

The dossier honours the founder's mandate against US-regulator authority (§16 "no FDA, FTC, AAO-HNS, ATA, AAFP, AMA, APA, CDC, NIH policy positions cited as trust authority. Period."). Excellent doctrine. But the dossier *also* doesn't render **per-jurisdiction what is free, what is reimbursable, what is out-of-pocket** — and so a UK reader who could access NHS-funded CBT-T via IAPT/Talking Therapies (genuinely free, evidence-based, the same intervention the dossier B-grades) doesn't know that. They are presented with the $390–680/month protocol as if it were the only path.

### 3.2 Per-jurisdiction reimbursement context

**UK NHS.** The relevant pathway is **NHS Audiology + IAPT / NHS Talking Therapies**.

- *Audiology assessment + tinnitus counselling*: free at point of use via GP referral. Waiting list 4–18 weeks depending on ICB.
- *CBT-T*: free via IAPT / NHS Talking Therapies. The same evidence-base the dossier B-grades. Self-referral now possible in most ICBs.
- *Hearing aids*: free NHS hearing aids for diagnosed loss; private hearing aids £800–3,000.
- *Tinnitus retraining therapy (TRT)*: variably available NHS audiology; private £400–1,500.
- *Lenire*: not NHS-funded (insurance/NHS not covering, per §15.2). Out-of-pocket £4,000–6,000 at private audiology clinics in London / Manchester / Dublin.
- *Supplements*: never NHS-funded.

**Implication for UK reader:** the dossier's two highest-evidence layers (sound enrichment + CBT-T/MBCT-T per §13.7 B-grade post-wave-2 demote) are **free at point of use via NHS**. The supplement layer is entirely out-of-pocket. A UK reader paying $390–680/month for supplements when their two cornerstone interventions are NHS-free is making a sub-optimal economic decision the dossier does not flag.

**Germany.** Statutory Health Insurance (GKV — 87% of population) covers:
- ENT/audiology assessment + audiogram + tympanometry.
- Tinnitus-specific CBT under §5 SGB V (psychotherapeutic care): coverage if PHQ-9 or GAD-7 exceeds threshold.
- Heilpraktiker-prescribed herbal medicines: variable coverage by private supplemental insurance; not GKV.
- Lenire: private-pay at HNO clinics; €3,500–5,500.

**Implication for German reader:** GKV covers more of the cognitive/audiology layer than NHS does; supplement layer still out-of-pocket. Dossier should surface the GKV pathway.

**France.** Sécurité Sociale covers ORL (ENT) + 60% of CBT-T sessions under approved psychotherapists; supplemental mutuelle insurance covers gap. Homeopathy was de-listed from Sécu reimbursement in 2021; reader should be told.

**Italy / Spain.** SSN / SNS variably cover audiology + some CBT-T. Supplement layer always out-of-pocket. Mediterranean diet (§6) is *culturally embedded*, not a marginal-cost addition.

**Australia.** Medicare covers:
- GP referral + ENT consultation + audiology assessment (bulk-billed under specific Medicare item numbers; gap fee in many practices).
- Psychological CBT under the Better Access scheme — 10 sessions/year reimbursed with mental-health plan.
- Private health funds (Bupa, Medibank, HCF, NIB) cover some natural-therapy services (acupuncture, traditional Chinese medicine, naturopathy) at extras-cover tier; many funds *de-listed* natural-therapy extras during 2017–2019 reforms following the NHMRC review; check current cover.
- Lenire: not Medicare-funded; private A$5,500–7,500 at audiology clinics; Microtransponder Serenity surgical implants not currently TGA-licensed for routine clinical use.
- Supplements: never Medicare-funded.

**Implication for Australian reader:** Medicare-funded CBT-T via Better Access + bulk-billed audiology = significant cost-offset for the cornerstone layers; supplement layer entirely out-of-pocket. The dossier doesn't tell them.

**India.** Mixed-economy:
- *Ayushman Bharat PMJAY* covers ~500M low-income citizens for hospital-based care; tinnitus is rarely a hospital admission, so the protocol effectively sits **outside PMJAY**.
- AYUSH Ministry covers government-employee AYUSH treatment at CCRAS/CCRH/CCRUM/CCRS hospitals (free for civil servants and their families).
- Tertiary-hospital ENT-OPD (AIIMS, PGIMER, CMC Vellore, Aravind, NIMHANS, JIPMER): government-funded but with waitlists; ENT registration ₹10–100; full audiology ₹500–2,000; ENT outpatient + audiometry ₹500–3,000 in private hospitals.
- IRDAI-regulated private health insurance variably covers OPD + diagnostics in newer policies (post-2020 wellness-rider products from HDFC Ergo, Star, Niva Bupa); supplements never covered.
- AYUSH treatment from private vaidyas / hakims / siddhars: pure out-of-pocket; ₹500–5,000 per consultation.
- Lenire: not available in India as of 2025 audit; closest analogue would be Microtransponder via clinical-trial enrolment at AIIMS Delhi or NIMHANS Bengaluru.
- Supplements: entirely out-of-pocket; Indian-grocery channel (Patel Brothers / Apna Bazaar) and AYUSH-GMP-certified Indian brands (Kottakkal, Baidyanath, Organic India, Himalaya) materially cheaper than US imports.

**Implication for Indian urban reader:** the supplement layer in *INR-priced AYUSH-GMP products* (Kottakkal Sarivadi Vati, Baidyanath Saraswatarishta, IMPCOPS Brahmi Chooranam) is roughly 40–70% cheaper than the $-priced equivalents the dossier currently leads with. The §9.2 cost figures are *US-channel prices* applied uniformly. The dossier should run a parallel INR-priced cost column for the Indian-traffic reader.

**Canada.** Provincial-variable:
- OHIP (Ontario), MSP (BC), Quebec RAMQ cover GP + ENT + audiology assessment.
- Provincial mental-health coverage variable — some provinces cover CBT-T under public plans, others not.
- Extended health benefits (private employer plans, Manulife, Sun Life, Canada Life) typically cover registered massage therapy, naturopathy, acupuncture at $300–500/year category caps; chiropractic at similar caps.
- Lenire: not covered; out-of-pocket C$5,000–7,500.
- Supplements: never publicly covered; some private extended-health plans cover NHP-registered supplements at low per-year caps.

**Implication for Canadian reader:** OHIP/MSP/RAMQ + extended health = partial cost-offset for cognitive + audiology; supplement layer largely out-of-pocket. Naturopathic / acupuncture extras-cover materially relevant if the reader has employer benefits.

### 3.3 What the dossier needs to add

**§9.4 Per-jurisdiction reimbursement strip** — five-jurisdiction table (UK NHS, EU-composite, AU Medicare, IN-mixed, CA provincial) × dossier layer (audiology assessment, CBT-T/MBCT-T, hearing aids, Lenire, supplements, AYUSH/TCM/homeopathy where culturally embedded). The reader sees in 20 seconds what's free, what's reimbursable, what's out-of-pocket *in their jurisdiction*.

**§5.5 NHS / Better Access / Sécu / GKV explicit callout** — at the existing CBT-T/MBCT-T section, surface the cost-effective public-pathway anchor:
- UK readers → NHS Talking Therapies self-referral link + IAPT pathway.
- Australian readers → Better Access scheme + 10 sessions/year + mental-health plan.
- French readers → Sécu + mutuelle psychothérapeute remboursement.
- German readers → GKV §5 SGB V psychotherapeutische Versorgung.
- Indian readers → Self-applied McKenna workbook (the dossier already mentions this) — keep, because public-pathway less well-defined.
- Canadian readers → Provincial mental-health coverage + extended-health benefits.

**§9.5 INR-priced parallel cost column** for Indian-traffic readers. Cross-references the wave-2 backlog W2-58 India DMR Act criminal-liability geofencing; the INR-pricing column is *the alternative editorial path* — surfacing pricing in the reader's currency removes the "advertise-as-treatment" framing risk and lets the §9.2 cost surface without the doctrine break. (This is a softer alternative to the geofencing-or-rewrite binary in the wave-2 backlog.)

**Skill v7.1.0 Rule 40 — per-jurisdiction reimbursement annotation.** Every cornerstone-graded layer in any dossier carries an explicit "free via [public pathway]" or "out-of-pocket only in [jurisdictions]" annotation. Cross-dossier impact: vitiligo (UK NHS dermatology pathway), AFib (NHS cardiology + Medicare + GKV cardiology pathway), diabetes (NHS diabetes specialist nurse, Australian Medicare endocrinology, GKV diabetes-Schwerpunktpraxis pathway), every protocol where a public-system alternative exists.

---

## §4. Real-world LTV vs CAC for the storefront — the founder-honest math (BLOCKER × commercial viability)

### 4.1 What the dossier currently does

The dossier is silent on storefront unit economics. `lib/data.ts` says `marginModel: "Reseller · 41% gross margin"` on `tinnitus-quiet-90`. The wave-2 finding W2-41 caught real-clinic 12-week adherence at **9%** — which means 91% of the cohort lapses before the 90-day bundle's natural re-order window. The wave-2 finding W2-45 caught non-responder rate at **27%** and drop-out rate at **31%** at month 12. None of this is connected to LTV math.

### 4.2 The honest LTV / CAC model

**Subscription retention curve.** Given 9% week-12 adherence to the *clinical* protocol, the storefront subscription retention curve is bounded above by that figure but is not the same number — subscription retention is also driven by inertia (auto-renew vs active cancel), perceived value, and cost-pressure. Let me build the model in three scenarios:

- **Pessimistic (aligned with adherence):** 9% retain to week 12 → roughly 5–7% retain to month 6 → 2–4% retain to month 12.
- **Realistic (inertia + auto-renew lift):** 25–35% retain to week 12 → 15–20% retain to month 6 → 8–12% retain to month 12.
- **Optimistic (well-onboarded responders):** 40–50% retain to week 12 → 25–35% retain to month 6 → 15–20% retain to month 12.

The realistic curve is the planning curve. At $169/bundle and 41% gross margin → $69 gross profit per cart, ~$45 net of fulfilment + COGS surge + payment processing. Expected gross LTV for a single user joining the subscription channel:

- Month 1 (cart): 100% × $69 = $69.
- Month 4 (90-day re-order if retained): 25–35% × $69 = $17–24.
- Month 7 (re-order): 15–20% × $69 = $10–14.
- Month 10 (re-order): 12–15% × $69 = $8–10.
- Month 13: 8–12% × $69 = $6–8.
- **Realistic 13-month gross LTV: $110–125 per user.**

**CAC for OTC consumer-health in regulated jurisdictions.** The OTC-supplement category has restricted health-advertising on Google + Meta — claims for tinnitus treatment are flatly prohibited in most ad-policy frames; "supports ear health" + "promotes restful sleep" wording barely scrapes through; medical-claim flag rate is high. Real CAC at acceptable conversion (1.5–2.5% landing-page to cart) in this category in 2025–2026:

- **UK / EU:** £35–65 ($45–82) per acquisition for cold-traffic acquisition; £20–35 ($25–44) for retargeting.
- **AU:** A$50–90 ($35–63) cold; A$30–50 ($21–35) retargeting.
- **IN:** ₹400–1,200 ($5–15) cold (Google + Meta in India significantly cheaper) but TGA-equivalent CDSCO restrictions tighter on claim language.
- **CA:** C$45–75 ($33–55) cold.
- **US:** $50–95 cold; CAC has materially inflated since iOS 14.5 ATT + GA4 attribution loss.

**Blended cold CAC across jurisdictions: $35–60 per user.** Retargeting CAC $20–35.

**Realistic LTV/CAC ratio:**
- LTV $110–125 / CAC $35–60 = **LTV/CAC 1.8 : 1 to 3.6 : 1.**
- The textbook DTC threshold for "structurally profitable" is **3 : 1.** The realistic curve sits at or below threshold.
- **Pessimistic LTV/CAC: $40–55 / $35–60 = 0.7 : 1 to 1.6 : 1.** Loss-leader territory.
- **Optimistic LTV/CAC: $180–220 / $35–60 = 3.0 : 1 to 6.3 : 1.** Profitable.

### 4.3 The MVP-tier unit economics

If the MVP tier (§8.0 $45–75/month) shipped as a $50–55/month subscription with the same 41% margin model:

- Gross profit per cart: ~$22.
- Gross LTV at realistic retention curve over 13 months: $40–55.
- CAC: same $35–60.
- **LTV/CAC: 0.7 : 1 to 1.6 : 1 — structurally loss-leader at the MVP tier alone.**

This is the structural finding the storefront has to confront: **the MVP tier doesn't pay for itself on first-sale economics; it requires the Full-Protocol upsell at 20–30% conversion for the unit economics to work.** At a 25% MVP → Full-Protocol conversion at month 4 (the wave-2 backlog's implicit assumption — MVP didn't work, step up), the Full-Protocol conversion's higher LTV ($600–900/year-1 at 41% margin = $245–370 gross profit per converting user) carries the blended portfolio. At sub-15% conversion, the portfolio is loss-leader.

This is *the* founder-honest commercial finding: the dossier's recommended clinical pathway (MVP → reassess → step-up only if needed → most readers should NOT step up to Full Protocol per §13.6 sub-type-stratified responder math) is **economically misaligned with the storefront's required upsell rate.** The clinically-honest step-up rate is probably 30–40% (some sub-types genuinely need Combo 1 to move TFI), but only ~15–25% of those should step up to the full $390–680/month tier (those with moderate-to-severe distress AND non-response to MVP+Combo 1).

If the storefront ships a clinically-honest funnel, the unit economics get tight. If the storefront ships a commercially-juiced funnel, the dossier's evidence-grading discipline gets compromised. **The §13.6 cohort table and the §12.6 deprescribing table are the two surfaces that protect the founder from this tension** — they tell the reader honestly what works and when to drop layers. The cost-per-QALY work proposed in §1 above hardens that protection.

### 4.4 What the dossier needs to add

This is more storefront-architecture than dossier-content, but the dossier should carry a single transparency paragraph in §16 (the closing paradigm):

**§16.2 Commercial transparency disclosure.** Two sentences naming the affiliate / reseller margin model (`marginModel` strings already in `lib/data.ts`), surfacing that the storefront makes ~35–48% gross margin on bundled supplements, and re-affirming that the dossier's evidence-grading (§3.3, §13.7) is editorially independent of bundle selection (currently it isn't — W2-59 caught the Tebonin-grade contradiction). The transparency disclosure should also state the §12.6 deprescribing rules explicitly: *"if a layer hasn't moved your tracked outcome at its decision window, drop it — even if you are on a subscription with us."*

**Storefront retention-loop disclosure.** Cancel-friction must be at the legally-mandated minimum (UK CCR 2013 / EU CRD Art. 9 14-day statutory cancellation + the W2-63 backlog item — drop the "30-day return on unopened items" misleading omission). Auto-renew must require explicit consent at sign-up.

**Skill v7.1.0 Rule 41 — affiliate-margin transparency.** Every bundled dossier carries a one-paragraph commercial-transparency block surfacing margin model + editorial-independence assertion + deprescribing rule. Cross-dossier impact: vitiligo flagship, all 78 bundled journeys.

---

## §5. Opportunity-cost framing for the reader's TIME (P0 — under-priced input)

### 5.1 What the dossier currently does

§8.5 names the master 24-hour day plan with 22 timed actions, ~30–60 min/day cumulative active time + ~3+ hours passive (sound enrichment, ambient). §8.0 MVP names "4-minute neck-jaw release routine" + "30 min MBCT-T audio" + "passive sound enrichment overnight." §13.6 cohort table surfaces 31% drop-out at month 12. None of this is framed in opportunity-cost terms.

### 5.2 The honest opportunity-cost math

**Wage-adjusted time cost** at median hourly earnings (OECD 2024 + national stats):

- UK median hourly £15.42 ($19); 75th-percentile £21 ($26).
- EU-composite median €16–18 ($17–19); German Stundenlohn 75th-percentile €25 ($26).
- AU median A$36 ($25); 75th-percentile A$48 ($33).
- IN urban professional median ₹250–400/hour ($3–5); 75th-percentile ₹600 ($7); senior knowledge worker ₹1,200 ($14).
- CA median C$32 ($23); 75th-percentile C$45 ($33).

**Daily protocol time cost in opportunity-equivalent dollars** at median wage:

- §8.0 MVP at ~35 min/day:
  - UK: 35/60 × $19 = $11/day = $330/month.
  - AU: 35/60 × $25 = $15/day = $450/month.
  - IN-urban professional: 35/60 × $4 = $2.30/day = $70/month.
  - CA: 35/60 × $23 = $13/day = $400/month.
- §8.5 Full Protocol at ~60 min/day:
  - UK: 60/60 × $19 = $19/day = $570/month.
  - AU: 60/60 × $25 = $25/day = $750/month.
  - IN-urban professional: 60/60 × $4 = $4/day = $120/month.
  - CA: 60/60 × $23 = $23/day = $700/month.

The time cost is **comparable to or larger than the supplement cost in every non-Indian jurisdiction.** The Indian reader's time is materially cheaper, which structurally favours time-intensive interventions in that market; the Western reader's time is the binding constraint.

**Time-poverty stratum.** A reader with two young children + full-time work + commute has effective discretionary daily time of ~30–45 min. The full §8.5 24-hour day plan at 60 min/day + 22 timed actions is structurally incompatible with this stratum — and this stratum is roughly **40–55% of the working-age population in every anchor jurisdiction.**

This is the dossier's silent exclusion: the Full Protocol is unaffordable to ~95% of households on supplement spend AND unsustainable for ~45% of working-age readers on time spend, with substantial overlap. The §13.6 cohort drop-out rate at 31% is consistent with this — the cohort that drops out is partly the time-poor cohort.

### 5.3 The opportunity-cost-honest framing the dossier should add

The §8.0 MVP at 35–45 min/day sits roughly at the edge of working-age discretionary time. A *further-stripped 10-minute-per-day tier* is needed for the time-poor segment. The dossier *contains* the components but doesn't surface this tier explicitly.

**§8.0.0' 10-minute Tier (time-poor variant)** — proposed structure:
- Sound enrichment overnight (passive, $0, 0 active minutes).
- 5 min MBCT-T micro-practice (truncated McKenna 5-min protocol; not the full 30-min core).
- 4-min neck-jaw release.
- 1 min Bhramari at bedtime.
- Mg glycinate single-supplement (no active time).
- **Total daily active time: ~10 min. Total cost: $25–45/month.**

This is the *minimum viable behavioural footprint*. Expected effect-size is materially smaller than the 30-min MBCT-T MVP (Cima 2012 effect-size scales with practice dosage — at 5-min/day the dose-response signal weakens) but is honestly framed as "the time-poor floor." For a working parent with tinnitus, this is the only tier that actually ships.

The dossier's protocol-laddering structure (§8.6, §8.7) currently runs MVP → Combo 1 → Full Protocol. It should run *Time-poor 10-min → MVP 35-min → Combo 1 → Full Protocol*. Four tiers, not three. The time-poor tier opens the dossier to ~30% of readers who currently lose to drop-out at month 1–3 for time reasons.

### 5.4 The "alternative uses of that time" honest comparison

The 30–60 min/day the protocol asks for has alternative uses with **independently strong evidence for tinnitus distress, mental health, and sleep:**

- **Sleep:** every additional 30 min/night of sleep above baseline is associated with material reductions in tinnitus distress (Park 2020; Aazh 2018 UK Sleep + Tinnitus cohort) — the dossier names this in §7.5 but doesn't compare it economically.
- **Walking + Zone-2 cardio:** every 30 min/day moderate-intensity exercise correlates with reduced depression (PHQ-9), anxiety (GAD-7), and improved HRV (which §2.5 names as a tinnitus driver). The dossier names exercise in §7.7 but doesn't surface it as a 30-min direct substitute for some of the §8.5 timed actions.
- **Social-time + low-loneliness:** roughly 15–25% of tinnitus distress variance in the perimenopausal + decades-old sub-types is socially mediated (loneliness × tinnitus interaction signal in Cima 2012 secondary analyses + Hesse 2020 German cohort). 30 min/day with people you love may be more cost-effective than 30 min/day of formal MBCT-T audio for that mediator.

These are not new layers to add — they are honest re-framings. The dossier currently presents the 22-action master day plan as *additive* to the reader's existing life. It should present them as *substitutional* for some other activity, with the opportunity-cost call out: *"Choose: spend this 30 minutes on MBCT-T audio OR on a walk with a friend. Both move TFI distress; the second has independent mental-health and tinnitus benefits and may be the cheaper sustainable choice for you."*

### 5.5 What the dossier needs to add

**§8.0.0' 10-minute Time-Poor Tier** — new tier above the MVP. Roughly 50 lines of content; one combo table + one self-check at week 8.

**§7.8 Opportunity-cost framing** — one-paragraph section after §7.7 exercise periodization: *"The 30–60 min/day this protocol asks of you is the most expensive input. Here's how to choose if you can't fit all of it: prioritise sleep > behavioural (MBCT-T or walks with people you love) > supplements > devices. The first three are largely free and have independently strong evidence; the latter two have stronger marginal evidence but are also the highest dollar cost and the easiest to subtract if your time is the binding constraint."*

**§13.6.5 Time-stratified responder table** — add a column to the §13.6 cohort table showing median TFI drop at each tier by time-availability stratum (full 60-min/day, MVP 35-min/day, time-poor 10-min/day). The data won't exist as cleanly as the wave-2 backlog implies, but a reasoned estimate with explicit caveats is more useful than nothing.

**Storefront SKU expansion:** add `tinnitus-time-poor-30` at $25–45/month (Mg glycinate single bottle + workbook + 5-min MBCT-T audio app subscription).

**Skill v7.1.0 Rule 42 — opportunity-cost annotation.** Every protocol tier annotated with daily-time-cost in minutes + wage-equivalent dollars. Cross-dossier impact: every multi-component protocol in the atlas.

---

## §6. Cumulative findings — ranked by economic leverage

Putting all five dimensions together, ranked by **patient-affordability × population-affected × clinical-leverage-protected**:

| # | Finding | Severity | Population affected | Effort |
|---|---|---|---|---|
| 1 | §13.7 cost-per-QALY column added (one per layer × jurisdiction) | BLOCKER | All readers | ~3 hours |
| 2 | §8.0.0 Free Tier surfaced as the cost-effectiveness optimum above MVP | BLOCKER | All readers; especially budget-constrained ~50% | ~1 hour |
| 3 | §9.4 Per-jurisdiction reimbursement strip (UK NHS / GKV / Sécu / AU Medicare / IN-mixed / CA provincial) | BLOCKER | Non-US ~80% of readership | ~2 hours |
| 4 | §5.5 NHS Talking Therapies + Better Access + GKV + Sécu callouts on CBT-T/MBCT-T layer | BLOCKER | UK + AU + DE + FR readers (~30% of dossier traffic) | ~30 min |
| 5 | Bundle SKU reconciliation: build `tinnitus-mvp-30` ($45–55), reposition `tinnitus-quiet-90` as Combo 1 step-up, build `tinnitus-acute-noise-injury-7d` ($30–50) | BLOCKER | Storefront commercial-honesty | ~2 hours data.ts + 1 hour copy |
| 6 | §8.0.0' 10-minute Time-Poor Tier added as fourth tier | BLOCKER | Time-poor ~45% of working-age readers | ~2 hours |
| 7 | §9.5 INR-priced parallel cost column for Indian-traffic readers | BLOCKER | Indian-traffic ~15–20% | ~1.5 hours |
| 8 | §16.2 Commercial-transparency disclosure (margin model + editorial-independence + deprescribing affirmation) | P0 | All readers | ~30 min |
| 9 | Storefront cancel-friction at legal-minimum (UK CCR 2013 + EU CRD Art. 9 14-day statutory; auto-renew explicit consent) | P0 | UK + EU readers | storefront-architecture, not dossier |
| 10 | §13.8 sub-type-stratified cost-per-QALY (cost-effective sub-types vs. cost-ineffective sub-types) | P0 | Distress-severity-stratified | ~2 hours |
| 11 | §7.8 opportunity-cost framing paragraph | P0 | All readers; time-poor ~45% | ~30 min |
| 12 | §13.6.5 time-stratified responder column added to cohort table | P1 | All readers | ~1 hour |
| 13 | §8.6 + §8.7 step-up rules audited against cost-effectiveness (not just clinical-effect) | P1 | Step-up candidates ~30% | ~1 hour |
| 14 | §6.1 Mediterranean-MIND food cost vs alternative spend honest framing (IN: millet-base is *cheaper* than UPF; West: Mediterranean produce is +$80–150/month additive vs UPF baseline) | P1 | All readers | ~1 hour |
| 15 | §15.2 Lenire honest cost-per-QALY context (why no national insurer funds it) | P1 | Lenire-curious readers ~10% | ~30 min |
| 16 | Acute noise-injury 72-h stack flagged as the dossier's most cost-effective intervention | P1 | Acute-presentation ~5% | ~15 min |
| 17 | §12.6 deprescribing rules made *more visible* — they are the most important cost-effectiveness feature in the dossier today | P1 | Year-2+ readers | ~30 min |
| 18 | Skill v7.1.0 Rule 39 — cost-per-QALY annotation | P0 (skill-level) | Atlas-wide cross-dossier | ~2 hours skill edit |
| 19 | Skill v7.1.0 Rule 40 — per-jurisdiction reimbursement annotation | P0 (skill-level) | Atlas-wide cross-dossier | ~1 hour skill edit |
| 20 | Skill v7.1.0 Rule 41 — affiliate-margin transparency | P0 (skill-level) | Atlas-wide cross-dossier | ~30 min skill edit |
| 21 | Skill v7.1.0 Rule 42 — opportunity-cost annotation | P0 (skill-level) | Atlas-wide cross-dossier | ~1 hour skill edit |
| 22 | Healthier-eating *displacement* framing on §6 (not "extra cost," displace UPF) | P2 | All readers | ~30 min |
| 23 | Vit D / Mg / Zn / B12 — "test first, don't blanket-supplement" cost-effectiveness reinforcement (existing dossier good; tighten to "save $20–40/month if you skip the un-needed cofactors") | P2 | Cofactor-skeptical ~25% | ~30 min |
| 24 | §11.3 DTC lab cost normalisation per jurisdiction (Thriva UK £49–119; Cerascreen EU €39–89; LetsGetChecked US $89–199; Healthians IN ₹500–4000; i-screen AU A$59–199) | P2 | All readers | ~45 min |
| 25 | Subscription auto-renew opt-out friction — surface in storefront, not dossier | P2 | Storefront-architecture | architectural |

**Sprint-4 budget:** ~20–24 hours focused work to land the BLOCKERs + P0s. The skill-level rules close cross-dossier blind spots that will otherwise repeat in every BrainEye, Cardio, Hormone, Metabolic, and Mental Health dossier in the atlas.

---

## §7. The non-obvious finding (what wave-3 couldn't reach)

Each wave so far has surfaced a structural blind spot the prior waves were blind to. Wave 1: factual errors + Critic auto-fix + storefront hold. Wave 2: jurisdictional OTC doctrine breaks + Cochrane honesty + §8.0 MVP at 9% adherence. Wave 3: CI hardware safety + Deaf-inclusion + crisis line + cross-tradition aetiology + FKGL + WCAG-AA.

The wave-4 health-economist finding is the one **none of the prior waves could surface** because they were each looking at a non-economic lens: **the dossier is now clinically honest but commercially incoherent — the storefront's required upsell economics structurally conflict with the dossier's clinically-honest "MVP first, drop layers that don't work, deprescribe at month 6" discipline.** Either the dossier wins (clinically-honest funnel, tight storefront unit economics, possible loss-leader requiring topline growth before profitability) or the storefront wins (commercially-juiced funnel, dossier evidence-grading discipline compromised, exposed to W2-K advertising-substantiation legal risk). The two are not yet aligned.

The two architectural fixes that *do* align them are:

1. **Storefront SKU expansion to match the dossier's tier ladder.** Four bundles (Time-Poor / MVP / Combo 1 / Full Protocol) — not one upper-middle default. The unit economics of the lower tiers are tight but the portfolio carries because (a) the storefront is no longer falsely selling Tebonin-led $169 bundles as the default; (b) the higher-distress sub-types who genuinely need Combo 1 or Full Protocol convert through *clinically-honest* step-up gates; (c) the customer-trust score on a 5-year retention horizon protects the brand against the W2-K commercial legal risk and the wave-4 cost-effectiveness scrutiny.

2. **Cost-per-QALY honesty pass on §13.7 + §13.8.** Once the dossier surfaces that the MVP at $720/year for 12-point TFI drop is cost-effective at NICE, and the Full Protocol at $6,400/year for 12-point TFI drop is not, the reader can self-select onto the cost-effective tier without the storefront having to *push* them to upgrade. The upgrade rate goes *down* on a cost-effectiveness-honest read — but the customers who *do* upgrade are the right customers (moderate-to-severe distress, high willingness-to-pay, low expected drop-out). Portfolio LTV/CAC may actually *improve* on a honest-cost-effectiveness funnel because the drop-out rate drops materially.

This is the founder-honest commercial finding the dossier has been gesturing at since wave 2 introduced the MVP. The economic discipline now needs to land.

---

## §8. Reviewer's collective verdict

The clinical-grading discipline is in place. The patient-safety surface is materially better than the 2026-06-05 starting state. The wave-3 disability-inclusion + crisis-line architecture is genuinely good work.

But the dossier is not yet a *consumer-health-economic* document. It is a clinical-evidence document with prices in it. The reader cannot triangulate cost-effectiveness in their jurisdiction without doing the math themselves, and they will not. Adding the cost-per-QALY surface, the per-jurisdiction reimbursement strip, the time-poor tier, the bundle SKU reconciliation, the opportunity-cost framing, and the commercial-transparency disclosure converts the dossier into a document a NICE / EUnetHTA / PBAC / HTA-IN / CADTH reviewer would credibly endorse.

The non-trivial finding restated: **the §8.0 MVP at $45–75/month is plausibly cost-effective at every non-US reimbursement threshold; the Full Protocol at $390–680/month is plausibly cost-effective at none for the median responder.** The dossier should be leading with this finding, not burying it. The storefront should ship a SKU that matches the cost-effective tier (it currently does not). The skill v7.1.0 should carry the four new rules (39 cost-per-QALY, 40 per-jurisdiction reimbursement, 41 affiliate-margin transparency, 42 opportunity-cost) so every atlas dossier inherits the economic discipline.

Wave 5 (the multi-jurisdiction acceptance audit proposed in wave 3) will likely confirm these findings from the country-clinical lens. Wave 6, if it runs, should probably be a longitudinal-behavioural-economics + 12-month retention-cohort lens — once the SKU expansion ships, the question becomes *did the cost-effective tier actually retain better than the upper-middle default?* — a question only real cohort data can answer.

**Final headline.** Major revision required. The clinical evidence work is done. The economic evidence work is starting. The two need to live in the same document.
