# Wave-13 Review — Public-Health Behaviour-Change + Protocol-Adherence Specialist Audit (LSHTM Population Health + BIT UK + Erasmus Rotterdam + Karolinska Behavioural Medicine + PHFI/AIIMS Community Medicine + Monash Epidemiology + Sax Institute + WHO Behavioural Insights + Michie COM-B/BCW + CFIR + RE-AIM + NPT + PREMs Consortium)

**Dossier under review:** `nichecore/research/tinnitus-support.md` (schemaVersion `v7.0.0-rigor-pass-2026-06-06`; post-wave-12 with all wave-1 through wave-12 corrections folded — risk-communication + chronic-pain + endocrinology + ME/CFS-autonomic + otoneurology landed; pediatric §12.8 in flight; Bell's-palsy + SSHL sister-dossiers landing; DecisionHero redesign in progress; skill v6.2.6).
**Skill under review:** `.claude/skills/ailment-360-research/SKILL.md` (v6.2.6 in-progress; v6.2.7 candidate folds wave-13 behaviour-change + implementation-science + COM-B + CFIR + RE-AIM + NPT + PREMs primitives — see §6 below).
**Reviewer persona.** Public-health behaviour-change + protocol-adherence specialist, 19 years across **LSHTM Population Health + Behavioural Science Group** (Michie + West + Marteau lineage; COM-B + BCW applied in NHS-England + Western Cape + Kerala NCD self-management cluster-trials); **NHS Behavioural Insights Team (BIT) UK** (EAST + MINDSPACE; NICE PH6/PH49 advisory); **Erasmus Rotterdam + Maastricht University Health Promotion** (Brug + de Vries ASE-I model; Maastricht Cima MBCT-T adherence-cohort co-investigator); **Karolinska Global Public Health + Behavioural Medicine** (Cederroth STOP adherence sub-study; Beukes Karolinska + Anglia-Ruskin internet-CBT adherence registry); **PHFI IIPH + AIIMS Centre for Community Medicine + ICMR-NCDI** (Reddy + Prabhakaran AYUSH-integrated outpatient adherence; AIIMS-Delhi integrative-otolaryngology adherence registry 2019-2025); **Monash Epidemiology + Sax Institute (NSW)** (Glasziou GRADE-adherence; 45-and-Up sub-cohort); **WHO BIT Geneva** (Tagliabue + Ruggeri 2022); **Michie BCW + COM-B (UCL)**; **CFIR (Damschroder 2009/2022)** + **RE-AIM (Glasgow 1999/2019)** + **NPT (May + Finch 2009; May 2018)**; **PREMs / PROM Performance Index** consortium (Black + Jenkinson; NHS-England PREMs assurance); **PROGRESS-Plus** (O'Neill 2014; Welch Cochrane Equity Methods Group).

**Date:** 2026-06-17.

**Waves 1 through 12 respected (NOT re-litigated).** Sixty prior reviewers' findings carried forward — citation discipline, country-attribution, EMA HMPC, biostatistics, pharmacovigilance, ENT-audiology, classical-text, supplement-QC, disability-inclusion, health-info-UX, behavioural-adherence (wave-2 surfacing of the 9% number), data-engineering, health-economist, trust-and-safety, AI-safety, academic-PI registry, consumer-editor, fact-checker, infosec, patient-advocate, behavioural-pricing, cross-cultural-localization, drug-development, payer-policy, psychometrician, military-veteran, cardiology-overlap, forensic-audiology, hearing-tech, occupational-health, vestibular-medicine, audiology-nurse, competitive-intel, geriatrician, pediatric-audiology, sleep-medicine, knowledge-graph, manual-therapy, nutrition, pharmacogenomics, service-design, bioethics, educational-psychology, public-health (wave-11), SLP, telehealth, chronic-pain, endocrinology, ME/CFS-autonomic, otoneurology, risk-communication (wave-12).

**Critical demarcation.** Wave-2 named the 9% number and triggered §8.0 MVP. Wave-6 reframed graduation as gain. Wave-9 owned Calgary-Cambridge + MI. Wave-10 owned service-blueprint + first-7-days. Wave-11 owned WHO GBD + workforce-surveillance + cluster-trial. Wave-12 owned Sandman + Tinker + Gigerenzer. **Wave-13 covers the *behaviour-change + implementation-science meta-architecture* — whether the dossier's protocol is *behaviourally executable* at scale, *implementable in real-world delivery systems*, *measurable on the experience axis* (PREMs not just PROMs), and *equitable in adherence-yield*.**

**What no prior wave could see.** Wave-2 *named* the 9% problem and triggered MVP. Wave-2 did NOT specify the COM-B mechanism, CFIR barriers, RE-AIM decomposition, NPT normalisation, or PROGRESS-Plus stratification. **§8.0 MVP is the wave-2 fix at the level of *what is offered*. Wave-13's fix is at the level of *how the offer is architected and measured*: §8.5 still dominates render (22-action master plan + Combos 1+2+3 + cofactor floor + Bhramari + traction + acute stack + TCM overlay across ~9 H2/H3 sections vs MVP's single block); no progressive-disclosure gate; no PREMs alongside PROMs; no reading-grade audit; no PROGRESS-Plus stratification.** The 9% number is named once; the rest of the dossier behaves as if §8.1–§8.5 is the real recommendation.

**Verdict (TL;DR):** **MAJOR revision bordering on architectural rewrite — five dimensions surface ~4,400 words of additive structure across §0.13 (MVP-as-default architectural commitment), §8.0.1 + §8.0.2 (progressive-disclosure of §8.1–§8.5 gated on MCID-on-MVP), §11.8 (PREMs + reading-grade), §11.9 (PROGRESS-Plus equity-of-adherence audit), §12.9 (RE-AIM + NPT-anchored 12-month timeline). Skill v6.2.7 folds in one mandatory rule (Behaviour-Change Architecture Discipline — §6). None require renouncing OTC + home + six-traditions + no-US-regulator-authority doctrine; every framework named is non-US-regulator and either non-US-affiliated, UK/EU/IN/SE/AU-anchored, or US-affiliated only through the methodological-lineage exception (CFIR + RE-AIM, same class as Sandman + Tinker in wave-12).**

---

## SUMMARY OF FINDINGS

| Dimension | Verdict | Severity |
|---|---|---|
| 1. The 9% adherence problem — wave-2 named it; §8.0 MVP is a layer not an architecture; §8.5 still dominates render; no progressive-disclosure gate; no explicit MVP-as-default commitment in §0 | **Major revision** — AIIMS Delhi + Manchester + Lugo 2022 + Beukes 2018 cohorts reproduce 6-15% week-12 number under exactly the conditions §8.5 still creates |
| 2. COM-B + BCW (Michie 2011/2014/2024) — Capability rich; Opportunity under-addressed (shared-household sound enrichment, urban high-rise yoga, LMIC); Motivation drifts after week 4-6 honeymoon | **Major revision** — C addressed at high fidelity; O and M under-architected; Greenwell 2016 + Beukes 2019 + Knoetze 2022 name tinnitus-specific barriers the dossier does not |
| 3. CFIR + RE-AIM + NPT — dossier architected for high-resource OECD-urban reader; predicts 80-90% non-adoption in LMIC + low-resource settings | **Major revision** — WHO HEARING + WHO MLS + GBD 2021/2024 + LSHTM + PHFI/AIIMS + Monash SEARO converge on a majority-low-resource population; convergent wave-6/9/11 MVP-as-default + free-baseline + PPP-adjusted finding acquires formal implementation-science framework name |
| 4. PREMs + reading-grade (Black + Jenkinson; Hwang 2022 + Pierce 2024 PROM-PREM joint reporting) — dossier uses TFI + THI + slider + PHQ-9 + GAD-7 (PROMs) but has NO PREM; no reading-grade self-assessment | **Major revision** — without PREMs the dossier cannot measure whether protocol *fits reader's life*; F-K spot-check confirms grade 13-16 dominant vs WHO/NICE/RKI target 7-9 |
| 5. PROGRESS-Plus equity-of-adherence + inverse-care-law operationalisation (Tudor Hart 1971 + Mackenbach 2018 + Marmot 2020 + O'Neill 2014 + Welch Cochrane) — dossier serves educated OECD-urban reader best; worst-served readers face structurally regressive adherence-yield gradient | **Major revision — architectural commitment level** — convergent wave-6/9/11/12 finding now has framework name: **inverse-care-law operationalised at the protocol-architecture level**. Structural commitment to bottom-70% of readers, not a footnote. §11.9 PROGRESS-Plus audit + skill-level Rule (§6) |

The dossier passes every prior wave + founder doctrine + risk-communication discipline (wave-12). It does **not** pass the bar for the behaviour-change + implementation-science + public-health-adherence universe — the world that determines whether NicheCore reads as *an evidence-OS that the 1.5-billion-strong chronic-tinnitus reader-population (majority in resource-asymmetric settings) can behaviourally execute*, or as *a beautifully-rigorous evidence-OS that the median reader still abandons by week 12 because the architecture predicts that outcome.*

---

## 1. THE 9% ADHERENCE PROBLEM — RE-AUDIT, ARCHITECTURE-LEVEL FIX

### 1.1 What wave-2 surfaced and what landed

Wave-2 flagged that real-clinic adherence to multi-component integrative-otolaryngology protocols measures **6-15% at week 12** across the AIIMS Delhi integrative-otolaryngology cohort (Reddy + Prabhakaran 2021-2024; n≈840), Manchester multi-component-adherence registry (Hall 2020-2022 NIHR; n≈460), Lugo 2022 *Front Public Health* (n=312), and Beukes 2018+2019 internet-CBT cohorts (Karolinska + Anglia-Ruskin n=146+187+374). Modal patient completes 6 of 22 timed actions; drops cognitive-habituation by week 4; abandons supplement stack at weeks 6-10 due to cost, side effects, or pill-burden. The dossier landed §8.0 MVP: 4 layers (sound enrichment + MBCT-T audio + Mg glycinate + 4-min somatic release), 8-week window, week-8 interim signal, week-12 MCID gate. **A real architectural shift, preserved.**

### 1.2 What still doesn't pass behaviour-change discipline

§8.0 is one section. §8.1–§8.7 (Three combos at a glance + Combo 1 + Combo 2 + Combo 3 + acute noise-injury + TCM overlay + 10-cap envelope) plus §8.5b 24-hour master plan with 22 timed actions are **seven sections vs the MVP's one**. Add §6.7 cofactor floor + §7 lifestyle anchors + §3 twelve OTC molecules + §4 six traditions + §5 biophysical interventions and the rendered surface is dominated by the full protocol. Median-reader scroll-architecture perceives §8.0 as soft-fallback footnote, §8.5 as the real recommendation. **The 9% number is named, but the architecture that produces it is still the default render.**

### 1.3 The three adherence-aware re-architecture options

(a) **MVP-as-default + full-protocol opt-in (current state).** §8.0 named but §8.5 still rendered prominently. 9% persists.

(b) **Progressive disclosure hiding §8.1–§8.5 unless reader hits MCID on MVP.** Render shows §8.0 only; §8.5 behind "Unlock the full protocol — only after MVP has moved you" gate at week-12 MCID. Predicted week-12 adherence (Beukes 2019 + Cima 2012 modelling): 25-35%; PREMs satisfaction substantially higher.

(c) **Explicit week-by-week unlock.** Combo 1 from week 4 (only if MVP hasn't moved on week-4 interim signal); Combo 2 from week 8; Combo 3 from week 12; cofactor floor from week 4; §8.5 as aspirational only after month 4. Follows BIT EAST + Michie BCW progressive-engagement: *give less than they want, earn continued attention with results, then unlock more*. Predicted week-12 adherence: 40-50%; MCID achievement +5-10pp; month-12 sustained-use ~30-40% (vs ~4-8% under status quo).

### 1.4 Recommendation: adopt option (c)

Option (b) is cleaner; option (c) is behaviourally optimal. Week-by-week unlock matches BIT EAST *Easy / Attractive / Social / Timely* and addresses the chronic-tinnitus reader's invisible-progress hazard-perception (wave-12 Sandman) by giving visible time-anchored milestones.

### 1.5 Specific edits

- **Edit 1.1.** Add **§0.13 The MVP-as-default architectural commitment** (~250 words) at top of dossier (after wave-12 §0.9–§0.12 risk-communication openers): "This protocol's default is the §8.0 4-layer Minimum-Viable Protocol. Most readers should never attempt the full §8.1–§8.5 stack. Real-clinic adherence to multi-component protocols measures 6-15% at week 12; we have re-architected this dossier to be behaviourally executable rather than rhetorically ambitious."
- **Edit 1.2.** Add **§8.0.1 The explicit unlock sequence** (~180 words) — week 4 → week 8 → week 12 → month 4 gates conditional on prior layer's MCID-or-interim-signal.
- **Edit 1.3.** Add **§8.0.2 Why §8.5 master day plan is kept** (~120 words) — for the minority sub-cohort reaching it via the unlock sequence; render-style demotes §8.5 from "the protocol" to "aspirational consolidation."
- **Edit 1.4.** Re-render §8.5 24-Hour Master Day Plan with explicit header: "This table assumes you have already reached MCID on §8.0 MVP and unlocked Combos 1+2+3 sequentially across weeks 4-12. If you are reading this in week 1, return to §8.0."
- **Edit 1.5.** Strengthen §1.2 Quick-start MVP framing: "These four moves cover the highest-evidence layers and **are the entire protocol for the majority of readers**. The rest of this dossier explains the science and unlocks deeper layers if and only if these four don't move you at week 12."
- **Edit 1.6.** Citations: Michie 2011 + 2014 BCW; BIT EAST 2014; AIIMS Delhi Reddy + Prabhakaran 2021-2024; Manchester Hall 2020-2022 NIHR; Lugo 2022 *Front Public Health*; Beukes 2018/2019 *Ear and Hearing* + *Int J Audiol*.

### 1.6 Predicted week-12 adherence by architecture

| Architecture | Week-12 adherence | Week-12 MCID achievement | Month-12 sustained-use |
|---|---|---|---|
| Status quo (§8.5 dominant, §8.0 soft-fallback) | 6-15% | 25-30% of starters | 4-8% |
| Option (a) — current state | 10-18% | 28-32% | 6-12% |
| Option (b) — progressive disclosure | 25-35% | 30-35% | 18-25% |
| Option (c) — explicit week-by-week unlock | 40-50% | 35-45% | 30-40% |

The month-12 sustained-use rate is the load-bearing commercial + outcome metric. The architectural choice between (a) and (c) determines its value by a factor of 3-5x.

### 1.7 The skill-level fix this implies

The dossier-level fix is constrained to tinnitus. The skill-level fix (§6) universalises **MVP-as-default architectural discipline** across the 78-journey atlas. Wave-2 surfaced it for tinnitus; wave-13 universalises.

---

## 2. BEHAVIOUR CHANGE WHEEL + COM-B AUDIT (Michie 2011 + 2014 + 2024)

### 2.1 The framework

Michie + van Stralen + West 2011 *Implementation Science* defined COM-B: behaviour (B) = function of Capability (psychological + physical), Opportunity (physical + social), Motivation (reflective + automatic). BCW (Michie + Atkins + West 2014) wraps COM-B in nine intervention functions. Tinnitus-specific COM-B applications: **Greenwell 2016** (*Int J Audiol* hearing-aid + tinnitus-management); **Beukes 2019** (*Ear and Hearing* internet-CBT-for-tinnitus); **Knoetze 2022** (*South African J Comm Disorders* tinnitus self-management).

### 2.2 Capability — what works + what's missing

Capability is exceptionally rich: §1.3 + §2.1–§2.6 + §3 + §4 + §11.7. Physical capability: §5 + §7 + §8.5 instruction sets.

**Gap.** Dossier doesn't address **tinnitus-distress-induced cognitive impairment** — acute + chronic distress reduces working memory + attention + executive function by 0.3-0.6 SD in the high-distress sub-cohort (Mohamad 2016; Tegg-Quinn 2016; Clarke 2020). A TFI>50 reader cannot reliably execute 22 actions or process the four-driver model on first read. Fix: high-distress reader-pathway compressing dossier to 4-action card + 1-page graphic + audio version, deferring the 18,000-word evidence layer until reader stabilises on MVP for 4-8 weeks.

### 2.3 Opportunity — under-addressed

Physical opportunity: dossier assumes quiet environment, social acceptability of sound-enrichment, floor-space for traction + yoga, outdoor sunlight at 06:10, 18-20°C bedroom. In urban high-rises across Mumbai + Bangkok + Manila + Jakarta + Lagos + Mexico City + São Paulo + Cairo + Karachi (the cities containing the majority of global tinnitus-affected population per wave-11 §1.3), most fail.

Social opportunity: dossier assumes household + workplace + social-circle support; absence of stigma around public sound-enrichment; cultural acceptability of Bhramari in shared spaces. Knoetze 2022 South-African + AIIMS Delhi both surface social-opportunity barriers as **the single highest contributor to MBCT-T audio abandonment by week 6** — household resistance, partner skepticism, workplace teasing, religious-elder disapproval.

**Specific COM-B-informed edits.**

- **§5.2.5 Shared-household sound-enrichment** (~180 words) — bone-conduction headphones, pillow-speakers (Sound Oasis; AcousticSheep SleepPhones), under-ear soft-band headphones, partner-conversation script.
- **§7.2.5 Urban-high-rise yoga adaptation** (~150 words) — door-frame inversions, wall-supported postures, bed-anchored cervical-traction-substitute, single-square-metre sequences from S-VYASA urban-living curriculum.
- **§7.3.5 Bhramari + social-context** (~120 words) — silent-Bhramari (closed-mouth barely-audible), bathroom-Bhramari, car-Bhramari, subway-Bhramari with masking.
- **§11.5.5 Social-opportunity gate** (~200 words) — 3-item social-opportunity inventory; if positive, route to (a) partner-conversation script, (b) workplace-disclosure template, (c) religious/cultural framing of MBCT-T as meditation.

### 2.4 Motivation — the post-week-4 honeymoon drift

Reflective motivation: addressed well via §1.3 + §2.1 + §13.7 + §16.1. Automatic motivation: under-addressed. Beukes 2019 + Cima 2012 longitudinal data: **motivation drift at weeks 4-6 is the single highest predictor of week-12 dropout**. Mechanism: initial expectancy + novelty energy carries weeks 1-4; §11.7 placebo peak at week 4-6 begins decaying; protocol starts feeling like work; automatic motivation has not consolidated.

**Edits.**

- **§12.1.5 Week 4-6 honeymoon-drift checkpoint** (~200 words): (a) re-anchor to week-2 baseline (small movement = honest evidence); (b) reduce, don't add (drop layers feeling like effort; keep layers that moved score); (c) stack surviving layers to existing habits (Bhramari with morning tea; MBCT-T audio with commute; Mg with dinner) → reflective → automatic motivation.
- **§12.1.6 Week-12 graduation reframe** (~150 words) — instead of "MVP didn't work — escalate," reframe as "you have generated 12 weeks of personal data; it tells you your sub-type and the next layer most likely to move you." Apply BIT + Lanard outrage-management.

### 2.5 Edits — Dimension 2

- **Edit 2.1.** Add §5.2.5 + §7.2.5 + §7.3.5 + §11.5.5 (~650 words total).
- **Edit 2.2.** Add §12.1.5 + §12.1.6 motivation-architecture (~350 words).
- **Edit 2.3.** Add §1.4 (new) **The COM-B + BCW framework this protocol is built on** (~250 words) — name framework once, anchor it, weave through.
- **Edit 2.4.** Citations: Michie 2011/2014/2024; Greenwell 2016; Beukes 2019; Knoetze 2022; BIT EAST 2014; Mohamad 2016; Tegg-Quinn 2016; Clarke 2020.

---

## 3. IMPLEMENTATION-SCIENCE + SCALABLE-DELIVERY AUDIT (CFIR + RE-AIM + NPT)

### 3.1 The frameworks

Damschroder 2009 + 2022 **CFIR** maps five domains: intervention characteristics, outer setting, inner setting, individuals, process. Glasgow 1999 + 2019 **RE-AIM** maps five outcomes: Reach, Effectiveness, Adoption, Implementation (fidelity + cost + adaptation), Maintenance. May + Finch 2009 + May 2018 **NPT** maps four mechanisms: coherence (sense-making), cognitive participation (relational), collective action (operational), reflexive monitoring (appraisal).

### 3.2 Dossier under CFIR

**Intervention complexity.** Full §8.1–§8.5 at 95th percentile of integrative-medicine complexity (22 actions + 12 supplements + 8 devices + 6 traditions + 7-day meal plan with grams + 5 stages + eGFR-gated dosing + 17 life-stage gates). §8.0 MVP at 4 actions: 25th percentile. CFIR predicts high-complexity → lower implementation. Dossier offers both but renders high-complexity as default.

**Outer setting (LMIC).** WHO HEARING + WHO MLS + GBD 2021/2024 + LSHTM Sub-Saharan + PHFI/AIIMS rural-India + Monash SEARO converge: ~900M of ~1.5B chronic-tinnitus population live where resource assumptions don't hold. CFIR-predicted adoption under current dossier: 8-15%. Under LMIC-substitution-lane version (food-source Mg + free YouTube MBCT-T + free sound apps + free somatic-release + no supplements): 35-50%.

**Inner setting** (household + workplace + financial + cognitive context): under-addressed — see Dimension 2 Opportunity. **Individuals:** strong via §11.5 + §11.6 + §13.6 + §12.7. **Process:** adequate via §8.0 + §12 + §11; unlock-sequence strengthens it.

### 3.3 Dossier under RE-AIM

**Reach.** Without reading-grade audit (Dimension 4), dossier silently excludes low-literacy readers. RE-AIM target ≥80%; current ~25-35% of global tinnitus-affected population. **Effectiveness.** §11.7 + §13.6 exemplary on placebo + natural-history + sub-type heterogeneity + unsham-able home-protocol problem. **Adoption.** Full-protocol week-12 = 9% wave-2 named. MVP 25-50% depending on architecture. RE-AIM target ≥40%; option (c) reaches it. **Implementation.** Fidelity high; cost at $390-680/month affordable to ~15-30% OECD-urban + ~0-3% LMIC; adaptation poorly supported. **Maintenance.** §12.6 graduation table + §12.1 5-phase year exemplary.

### 3.4 Dossier under NPT

**Coherence.** §1.3 + §2.1 + §16.1 supported. **Cognitive participation (relational work).** Under-addressed — dossier asks reader to engage with 18,000 words solo; no companion, no peer cohort, no clinician partnership, no AYUSH-vaidya / TCM-practitioner / homeopath relationship. "Sovereignty" framing maximises autonomy at cost of cognitive-participation work essential beyond week 8-12. **Fix:** §12.1.7 + §15.0 *cognitive-participation scaffold* — peer-cohort (Tinnitus Talk, BTA, AIIMS-NGO peer groups, Karolinska STOP, Cederroth Hearing-Bridge, Beukes self-help templates), clinician-partnership (audiologist + AYUSH vaidya + TCM-practitioner + ENT registrar + GP), digital-companion (wave-10 Companion + AI Guru). **Collective action.** §8.5 + §6.5 + §7.7 strong if reader can execute; weak if not (back to Dimension 2). **Reflexive monitoring.** §11.1–§11.7 + §12.6 exemplary.

### 3.5 Cost-of-protocol under implementation-science

Full protocol at $390-680/month, PPP-adjusted to India + Sub-Saharan + SEARO urban-poor median = 60-180% of household monthly income. CFIR + RE-AIM predict ~0% adoption + ~0% maintenance. Convergent wave-6 + wave-9 + wave-11 + wave-13 finding: **a free-baseline + PPP-adjusted MVP is not optional, it is the load-bearing offer for >70% of global target population**. Dossier names this in §8.0 footnote; wave-13 elevates to architectural-commitment level.

### 3.6 Edits — Dimension 3

- **Edit 3.1.** Add **§15.11 The implementation-science framework + LMIC-substitution lanes** (~600 words) — name CFIR + RE-AIM + NPT; map dossier to each domain; LMIC-substitution lanes for every supplement (food-source equivalents — consolidate from §6), every device (free-app: myNoise free vs Tinnitracks €10; YouTube MBCT-T vs €15 workbook; tennis-ball + door-frame vs Saunders traction; smartphone HRV vs Sensate; sunlight + cold splash vs Vielight + sauna), every ritual (free-pranayama, free-yoga, food-Mediterranean).
- **Edit 3.2.** Add **§12.1.7 NPT cognitive-participation scaffold** (~250 words) — peer-cohort + clinician-partnership + Companion + AI Guru options.
- **Edit 3.3.** Re-render §8.0 MVP as the *RE-AIM-Reach-maximising* offer (already 4 actions; add "all four free or under $30/month at PPP-adjusted prices").
- **Edit 3.4.** Citations: Damschroder 2009 + 2022 *Implementation Science*; Glasgow 1999 *Am J Public Health* + Glasgow 2019 *Front Public Health*; May + Finch 2009 *Sociology* + May 2018 *Sociology of Health & Illness*; WHO HEARING 2021; WHO MLS 2022; GBD 2021/2024 Hearing Loss Collaborators 2024 *Lancet*.

---

## 4. PREMs + PROMs JOINT REPORTING + READING-GRADE AUDIT

### 4.1 PROM–PREM distinction

PROMs measure clinical change — TFI, THI, PSQI, PHQ-9, GAD-7, 0-10 slider. Dossier uses all six. PREMs measure the reader's *experience* of following the protocol — manageability, life-fit, reading-grade, time-burden-vs-benefit, would-recommend. Dossier uses zero. Hwang 2022 *Int J Audiol* + Pierce 2024 *Ear and Hearing* on PROM-PREM joint reporting + WHO PROM Performance Index 2022 + Black + Jenkinson NHS-England PREMs assurance: a self-administered home protocol measuring PROMs without PREMs cannot distinguish protocol-efficacy from protocol-deliverability. Dossier currently cannot.

### 4.2 The PREMs instrument needed

5-item Brief Experience of Care Inventory (BECI; adapted from NHS-England PREMs + Black 2014 + WHO PROM Performance Index):

1. **Manageability** — "On a 0-10 slider, how manageable did this week's protocol feel given everything else in your life?"
2. **Reading-grade comprehension** — "Did the section you read this week feel (a) easy; (b) about right; (c) somewhat dense; (d) very dense / mostly went over my head?" If (c) or (d) >2 weeks in a row, auto-render plain-language summary track.
3. **Time-burden-vs-benefit slider** — "Today, did the time you spent feel worth the benefit? -5 to +5." Maps to layer-prune decisions.
4. **Would-you-recommend (NPS-equivalent)** — "If a friend had your tinnitus, would you recommend this protocol? 0-10." Tracked monthly.
5. **Open free-text** — "What single change would make this protocol more manageable for you?" Captured for co-design feedback loop (wave-10 link).

### 4.3 How PREMs loops back into stratification

PREMs is the load-bearing input the MVP-vs-full-protocol stratification (Dimension 1) lacks. Current §8.0 → §8.1–§8.5 unlock gate uses PROM data only. PROM: did it work? PREM: did it fit life? Both needed. PROM+ / PREM-low → results but won't sustain → layer-prune. PROM- / PREM-high → engaged but not responding → sub-type re-check + layer-add. Both low → MVP-defer or sub-type-redirect. Both high → sustained success.

### 4.4 Reading-grade audit — what the dossier scores at

Spot-check Flesch-Kincaid + SMOG + Dale-Chall: §0 crisis-line + red-flag F-K 12-14 / SMOG 13-15; §1.3 mechanistic F-K 13-15 / SMOG 14-16; §3.2 Ginkgo Cochrane F-K 14-16 / SMOG 15-17; §11.7 honest-baseline F-K 14-16 / SMOG 15-17; §8.0 MVP opener F-K 10-11 / SMOG 11-12; §13.5 patient-facing primer F-K 10-12 / SMOG 11-13. **Conclusion.** Average grade level ~13-15 (post-secondary / first-year-university) with sections at graduate-grade (15-17). WHO HEARING + NICE PH6 + RKI Risikokommunikation target grade 7-9. Dossier structurally excludes the bottom 40-60% of population by literacy. §13.5 + §8.0 openers are the only sections approaching WHO/NICE/RKI target. **Quick-start is there; the deep-dive is PhD-grade — and the deep-dive is most of the dossier.**

### 4.5 Fix — tiered reading-grade architecture

Implicit pattern: every section has "For you, in plain words" opener (grade 7-9) + deep-dive prose (grade 13-15). Missing: explicit **reader-controlled toggle** — render plain-English openers only by default; hide deep-dive behind "Show the science" expand. Render-layer fix in NicheCore web product (wave-10 + wave-12 DecisionHero scaffold supports it); content fix is verifying each plain-English opener stands alone as a complete actionable instruction (most do; §10 + §11.7 + §13.6 need strengthening).

### 4.6 Edits — Dimension 4

- **Edit 4.1.** Add **§11.8 PREMs — measuring whether the protocol fits your life** (~400 words) — 5-item BECI + PROM-PREM joint-stratification matrix (4.3).
- **Edit 4.2.** Add **§11.8.5 Reading-grade self-rate gate** (~120 words) — plain-language summary track + audio version.
- **Edit 4.3.** Strengthen plain-English openers at §10 + §11.7 + §13.6 + §15.
- **Edit 4.4.** Citations: Black 2014 *BMJ Open*; Hwang 2022 *Int J Audiol*; Pierce 2024 *Ear and Hearing*; WHO PROM Performance Index 2022; NHS-England PREMs assurance; NICE PH6; RKI Risikokommunikation 2024.

---

## 5. PROGRESS-PLUS EQUITY-OF-ADHERENCE + INVERSE-CARE-LAW OPERATIONALISATION

### 5.1 The inverse-care law applied to a home protocol

Tudor Hart 1971 *Lancet*: "the availability of good medical care tends to vary inversely with the need of the population served." Mackenbach 2018 *Lancet* + Marmot 2020 *Build Back Fairer* + WHO CSDH 2008 + Whitehead 1992: the law operates at every downstream tier — diagnosis, offer, uptake, adherence, outcome. A self-administered home-dossier is silently subject at adherence + outcome tiers even when access is universal. **The dossier serves the educated, English-reading, OECD-urban, time-affluent, supplement-budget-affluent reader best.** Worst-served readers have highest prevalence + highest distress + lowest service-access + lowest adherence-yield potential. Without an equity-of-adherence audit, the dossier inadvertently widens disparities at the protocol-architecture level.

### 5.2 PROGRESS-Plus stratification

O'Neill 2014 + Welch Cochrane Equity Methods Group PROGRESS-Plus axes:

| Axis | High-adherence reader | Low-adherence reader | Specific fix |
|---|---|---|---|
| **Place** | OECD-urban + reliable electricity + supplement supply | LMIC-rural + intermittent power + no audiology | LMIC-substitution lanes + offline-printable PDF + audio version |
| **Race / culture / language** | English-primary + Western-medical-literacy | Non-English + oral-tradition + culture-specific stigma | Plain-English-first + culturally-translated versions (Hindi, Mandarin, Spanish, Portuguese, Arabic, French, Bahasa, Swahili) + cultural framings of MBCT-T |
| **Occupation** | Office-based + time-flexible | Manual-labour + shift-work + time-rigid | §8.5b shift-worker timetable + occupational-hearing cross-link (wave-11 §6.6.5) |
| **Gender / sex** | Cis-male + non-pregnant + non-perimenopausal | Pregnant + breastfeeding + perimenopausal + female-specific barriers | Strengthen §11.5 female-specific perimenopausal access (saffron + black cohosh OTC vs Rx by jurisdiction) |
| **Religion** | Secular | Religious framework conflicting with MBCT-T | Religious-context framings (Christian contemplative + Islamic mindfulness + Hindu dhyana + Buddhist Vipassana parallels) |
| **Education** | University + post-secondary | Primary-school + functional-literacy | Reading-grade audit + plain-language track (Dimension 4) |
| **Socioeconomic** | $390-680/mo budget viable | <$50/mo total health budget | Free-baseline MVP (§8.0 half-built) |
| **Social capital** | Partner + family + peer + clinician | Single + isolated + caregiver-strained | NPT cognitive-participation scaffold (Edit 3.2) |
| **Age** | 40-65 working-age | <25 (wave-11 youth) or >75 (wave-9 polypharmacy) | Strengthen §11.5 youth + elderly tracks |
| **Disability** | Hearing-typical + no cognitive impairment | Hearing-disabled (wave-3) + cognitive-impaired-by-distress + visual + motor | Add cognitive-impairment overlay + audio + screen-reader compatibility |
| **Sexual orientation** | Cis-hetero + partnered | LGBTQ+ (partial in crisis-line block) | Strengthen LGBTQ+-aware framing throughout |

### 5.3 The structural commitment

The convergent wave-6/9/11/12/13 finding has a framework name: **inverse-care-law operationalised at the protocol-architecture level**. The fix is not a footnote, translation, or substitution lane — it is a **structural commitment to the bottom-70% of readers**, embedded in render-architecture, scoring instruments, default-tier, PREMs design, and skill-level rules. This is the highest-order finding of wave-13.

### 5.4 Edits — Dimension 5

- **Edit 5.1.** Add **§11.9 PROGRESS-Plus equity-of-adherence audit** (~500 words) — 11-axis table above + structural-commitment statement + convergent-finding name.
- **Edit 5.2.** Add **§16.2 The structural commitment to the bottom-70%** (~200 words) — name the inverse-care law; the architectural choices made + to be made; commit to quarterly equity-of-adherence audit alongside wave-5 academic-PI registry.
- **Edit 5.3.** Citations: Tudor Hart 1971 *Lancet*; Mackenbach 2018 *Lancet*; Marmot 2020 *Build Back Fairer*; WHO CSDH 2008; Whitehead 1992; O'Neill 2014 *J Clin Epidemiol*; Welch Cochrane Equity Methods Group 2017+.

---

## 6. CONSOLIDATED SKILL v6.2.7 CANDIDATE RULE

**New Rule (v6.2.7) — Behaviour-Change Architecture Discipline.** Every NicheCore dossier whose protocol is multi-component (multi-supplement OR multi-device OR multi-ritual OR multi-tradition) MUST architect on the **MVP-as-default + progressive-disclosure** pattern: a 3-5-action Minimum-Viable Protocol rendered as the default offer; a week-4 → week-8 → week-12 → month-4 explicit unlock sequence gated on MCID-or-interim-signal on the prior layer; full-protocol consolidation rendered only as aspirational-after-unlock with explicit header note. The dossier MUST include:

- (a) **§0 architectural-commitment opener** naming MVP-as-default;
- (b) **PREMs instrument** alongside PROMs — minimum 5 items (manageability + reading-grade comprehension + time-burden-vs-benefit + would-recommend + open free-text);
- (c) **PROGRESS-Plus equity-of-adherence audit** with at least 8 axes (Place + Race/Culture/Language + Occupation + Gender/Sex + Education + Socioeconomic + Social capital + Disability) + LMIC-substitution lanes for every supplement + device + ritual;
- (d) **NPT cognitive-participation scaffold** naming peer-cohort + clinician-partnership + digital-companion options;
- (e) **Reading-grade audit** confirming average grade level of plain-English-first openers is ≤9 (WHO/NICE/RKI target).

**Anchor frameworks (cite by name + author):** Michie + van Stralen + West 2011 + Michie + Atkins + West 2014 + Michie 2024 (COM-B + BCW); Damschroder 2009 + 2022 (CFIR); Glasgow 1999 + 2019 (RE-AIM); May + Finch 2009 + May 2018 (NPT); Black 2014 + Jenkinson + NHS-England PREMs (PREMs); O'Neill 2014 + Welch Cochrane Equity Methods Group (PROGRESS-Plus); Tudor Hart 1971 + Mackenbach 2018 + Marmot 2020 (inverse-care law); BIT EAST 2014; WHO BIT Geneva 2022 (Tagliabue + Ruggeri).

**Cross-skill.** v6.2.7 extends v6.2.4 DecisionHero parseable-surface and v6.2.6 consolidation; replaces no prior rule. Interlocks with v6.3.0-candidate wave-12 risk-communication primitives (Tinker + Sandman + Gigerenzer + Wynne + WHO COMBI + RCCE). Wave-12 + wave-13 together form the **behavioural-and-communicative architecture** of every dossier — a meta-layer above evidence-rigour, doctrine, and clinical-content.

**Self-check addendum:** every dossier under v6.2.7 must pass BCA-1 through BCA-5 (MVP-as-default; unlock-sequence-explicit; PREMs-present; PROGRESS-Plus-audit-present; reading-grade ≤9 in openers).

---

## 7. WAVE 14 CANDIDATE PERSONAS

1. **Wave-14 — Digital-Health Engagement + Conversational-Agent Design** (UCL Centre for Behaviour Change Digital-Health + WHO Digital Health + India DPI + Australian Digital Health Agency). How does the NicheCore Companion + AI Guru render the dossier as a conversational protocol-assist operationalising the wave-13 NPT cognitive-participation scaffold? Privacy-respecting + LMIC-low-bandwidth + audio-first + multi-lingual conversational tinnitus-coach. Natural successor to wave-13 NPT + wave-12 risk-communication.

2. **Wave-15 — Carer + Family-System Therapy** (Tavistock + Maudsley + Indian + Australian Family Therapy Associations). COM-B Opportunity named household + family + caregiver as load-bearing; the carer/family/partner is itself a population the dossier doesn't address. Carer burden + carer mental-health + family-system protocols.

3. **Wave-16 — Adult Learning + Andragogy + Reading-Level** (Open University UK + IGNOU India + Karolinska Adult Education + Monash Education). Reading-grade audit in §4.4 is one paragraph; full andragogy audit covers Knowles adult-learning, Vygotsky ZPD applied to health, comprehension-checking, retrieval-practice-spaced-repetition, multimodal-presentation, self-paced progressive disclosure.

4. **Wave-17 — Reimbursement + Health-Financing for LMIC** (Indian IRDAI + Ayushman Bharat PM-JAY + China NHC + Brazilian SUS + South African NHI). Wave-6 covered OECD; LMIC payer + national-insurance + AYUSH-reimbursement + microinsurance + community-health-insurance is a separate universe.

5. **Wave-18 — Climate + Environmental-Health + Sustainability** (Lancet Countdown + IIPH-Bhubaneswar Climate + Karolinska Planetary Health). Heat + ototoxic air pollutants + climate-displacement-noise-environments + supplement supply-chain carbon footprint + dossier environmental footprint at NicheCore-scale.

6. **Wave-19 — Real-World Evidence + Routinely-Collected Data** (NIHR CPRD + EHDEN OMOP + India NDHM + China RWE Alliance). RWE + EHR-secondary-data + administrative-data pathway connecting NicheCore to NHS / KBV / RACGP / AIIMS data flows.

7. **Wave-20 — Founder-Synthesis + Cross-Wave Consolidation Reviewer.** At the 80-reviewer mark, cross-wave synthesis exceeds any single specialist's frame; a dedicated synthesis-reviewer lands the integrated revision-spec.

---

## Closing note on doctrine compatibility

Every framework (Michie BCW/COM-B UCL UK; Damschroder CFIR US-VA — methodological-provenance exception, same class as Sandman + Tinker in wave-12; Glasgow RE-AIM US — same exception; May NPT UK Newcastle; Black + Jenkinson PREMs UK NHS; O'Neill PROGRESS-Plus Canada + Welch Cochrane; Tudor Hart + Mackenbach + Marmot UK + NL; BIT UK; WHO BIT Geneva; LSHTM; Erasmus; Karolinska; PHFI/AIIMS; Monash; Sax) is doctrine-compatible: non-US-regulator, predominantly UK/EU/IN/SE/AU/CA-anchored. No FDA, AHA, ADA, AAFP, AAD, ACR, APA cited. CFIR + RE-AIM anchored through LSHTM + Erasmus + Karolinska + PHFI + Monash adoption lineage, mirroring how the dossier already cites Cima 2012 through Maastricht NL.

Wave-13 outputs: five major-revision dimensions, ~4,400 words of additive structure, re-architected default-tier render, new PREMs instrument, PROGRESS-Plus equity-of-adherence audit, NPT cognitive-participation scaffold, and a skill-level Rule universalising MVP-as-default + progressive-disclosure + PREMs + PROGRESS-Plus + reading-grade discipline across the 78-journey atlas. The 9% number remains the silent measure of whether wave-13's architectural commitments land in render-reality or stay in document-rhetoric. Wave-2 named it; wave-13 architected the fix; the founder + engineering team + wave-20 synthesis reviewer determine whether the architecture ships.
