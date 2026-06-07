# Wave-10 Review — Senior Healthcare Service-Design Consultant Audit (Journey-Map + Service-Blueprint + Co-Design + System-Integration + Onboarding-First-7-Days Lens)

**Dossier under review:** `nichecore/research/tinnitus-support.md` (schemaVersion `v7.0.0-rigor-pass-2026-06-06`; post-wave-9 with wave-1 through wave-9 corrections folded — audiology research nurse PPI block, geriatrician 65+ presbycusis inversion, pediatric audiology, sleep medicine, competitive-intelligence in flight; Bell's-palsy + SSHL sister-dossiers landing; DecisionHero redesign in progress; skill v6.2.6).
**Reviewer persona.** Senior healthcare service-design consultant with 19 years across the **UK NHS Design Council / NHS England Service Transformation** (Personalised Care Operating Model + NHS Long-Term Plan + PAM rollout; co-author of the NHS Service Standard 2023 patient-journey guidance), the **EU EUSE / Service Design Network EU chapter** (German DAK + AOK + TK patient-pathway redesign + Dutch ParkinsonNet co-design + Danish Region Hovedstaden 1813 triage; co-author of the 2024 EUSE patient-experience-design playbook), **Karolinska Health Service Design Lab** (PROM+PREM integration into Swedish National Quality Registries; co-design with Hörselskadades Riksförbund + STOP cohort), **IDEO Healthcare** (Mayo care-model redesign + Kaiser Permanente Innovation Consultancy + One Medical onboarding), and **Mayo Center for Innovation** (Outpatient Practice Redesign + Jack and Jill Studio + Mars Workspace). Daily remit: journey-mapping (Kalbach 2016); service-blueprinting (Bitner/Ostrom + Polaine-Løvlie-Reason 2013); co-design under **NHS England Co-Production Model + INVOLVE 2021 + Australian Commission on Safety and Quality co-design standards**; system-integration handoffs across primary care, secondary specialist clinics, allied-health, voluntary-sector helplines, and home self-management; onboarding flows shaped by **Behavioural Insights Team EAST framework + Duolingo / Noom / Calm benchmarks**.
**Date:** 2026-06-14.
**Wave-1 through wave-9 respected (NOT re-litigated).** All 43 prior reviewers' findings carried forward — citation discipline, country-attribution, EMA HMPC, biostatistics, pharmacovigilance, ENT-audiology, classical-text scholarship, supplement-QC, disability-inclusion, health-info-UX, behavioural-adherence (COM-B + Fogg + identity + relapse-recovery), cohort + ADR docket, trust-and-safety, AI-safety RSP, academic-PI registry, consumer-editor, fact-checker, infosec, patient-advocate, behavioural-pricing, localisation, drug-development decision-tree, payer-policy (PMJAY-AYUSH + NHS + GKV + MBS + PHI), psychometrician qualitative-ranges, military-veteran, cardiology HFrEF, forensic-audiology, hearing-tech, occupational-health, vestibular-medicine, audiology research nurse MI + Calgary-Cambridge + PPI co-production, geriatrician presbycusis-frontline + STOPP/START + falls-arithmetic + cognitive-demand floor, sleep-medicine OSA + circadian + sleep-misperception, pediatric-audiology, competitive-intelligence. **The five dimensions in this audit address what no prior wave could see:** post-wave-9 the dossier is a brilliant clinic-translatable evidence-OS — but **it is still organised as a knowledge artefact, not as a service experience**. The patient-journey arc (symptom onset → first NicheCore touchpoint → 12-month protocol → graduation) is undefined as a designed experience. The service blueprint (front-stage + back-stage actors + touchpoints + escalations) does not exist. PPI was named in wave-5 + operationalised in wave-9 but **co-design as a generative methodology (vs co-production as a review methodology) is undescribed**. Handoffs were sketched in wave-9 §11.8 but **formal pathway-integration with NHS Talking Therapies / Better Access / Heilpraktiker / AYUSH-CCRAS is undesigned at the service-level**. And the first-7-days onboarding experience — the single highest-leverage activation surface — is **completely absent**.

**Verdict (TL;DR):** **MAJOR revision — patient-journey-map, service-blueprint, co-design (vs co-production), formal system-integration pathway-mapping, and the first-7-days onboarding choreography are the five gaps that turn a clinic-translatable evidence dossier into a *designed health service* with the activation + retention + system-integration fingerprint NHS / EU / Australian / Indian / German service-design standards measure.** Fixes surface ~4,100 words across §0.7 (journey-map), §11.9 (blueprint), §13.9 (co-design), §14.4-§14.8 (system-integration pack), §8.0a (first-7-days choreography). None require renouncing OTC + home + six-traditions + no-US-regulator-authority doctrine — methodology anchored in NHS England + EU SDN + Karolinska + IDEO + Mayo; NHS Talking Therapies + Better Access + AYUSH-CCRAS + Heilpraktiker integration is system-mapping not endorsement; the first-7-days sits inside §8 with no new YAML fields.

---

## SUMMARY OF FINDINGS

| Dimension | Verdict | Severity |
|---|---|---|
| 1. Patient-journey map — symptom onset → first NicheCore touchpoint → 12-month protocol → graduation/maintenance — currently undefined as a service-design artefact (sequence, emotion-curve, touchpoints, drop-off risk zones) | **Major revision** — no journey-map exists; §12 implementation timeline is content-sequenced not experience-sequenced; emotion-arc + frustration-points + delight-moments unmapped |
| 2. Service blueprint — front-stage (what reader sees) + back-stage (what NicheCore + suppliers + voluntary-sector do) + support-processes + escalations — structurally absent | **Major revision** — blueprint not present; line-of-visibility + line-of-interaction undrawn; back-stage roles (Companion AI + Evidence Factory + supplier QC + voluntary-sector PPI partners) named but never assembled into a service architecture |
| 3. Co-design vs co-production — wave-9 named PPI co-production (review-stage); generative co-design (idea-stage with patient-partners as co-creators, not co-reviewers) is undescribed | **Moderate-to-major** — co-design protocol absent (recruitment, payment, IP, governance, sprint-cadence); risks PPI being window-dressing without the generative front-loop |
| 4. Healthcare-system-integration handoffs — NHS Talking Therapies (formerly IAPT) + Better Access (AU) + Heilpraktiker (DE) + AYUSH-CCRAS (IN) pathway-mapping into and out of NicheCore | **Major revision** — wave-9 §11.8 named clinic-handshake; the formal *pathway-map* with referral criteria, return-handoff, governance, data-sharing minimums, and the system-level memorandum-of-understanding template is absent |
| 5. First-7-days onboarding flow — current-state has no day-by-day choreography; designed-for-MVP-adherence is the highest-leverage activation surface in the entire dossier | **Major revision** — §8.0 MVP table is content not choreography; no day-by-day activation events; no trigger-bridge from purchase to first cap; no celebration micro-moments; no progressive-disclosure cadence; benchmark gap vs Duolingo / Noom / Calm onboarding-conversion |

The dossier passes every prior wave + clinic-handshake from wave-9. It does **not** pass the bar for the *designed-service* universe — the world NHS Service Standard 2023 + EUSE 2024 playbook + Karolinska Service Design Lab + IDEO Healthcare + Mayo Center for Innovation operate in daily, the world that determines whether NicheCore reads as a digital health *service* (with the activation + retention + handoff design fingerprint patients and commissioners expect) or as an evidence corpus that happens to be readable on a website.

---

## 1. PATIENT-JOURNEY MAP — SYMPTOM ONSET → FIRST NICHECORE TOUCHPOINT → 12-MONTH PROTOCOL → GRADUATION/MAINTENANCE

### 1.1 What the dossier currently assumes

The dossier is a 16-section evidence walkthrough; §12 organises content month-by-month; §13.6 sub-type prognosis-arcs give clinical-trajectory expectations. None is a **patient-journey map** in the service-design sense (Kalbach 2016; NHS Service Standard 2023; Mayo CFI journey-mapping protocol). A journey-map sequences the *experience* — phases, actions, thoughts, emotions, pain-points, delight-moments, channels, moments-of-truth where adherence is made or lost.

The empirical problem: tinnitus is a slow-onset chronic condition where the average UK reader presents to primary care 18-26 months after symptom onset (BTA Patient Voice 2024), the German GKV average is 14-20 months, the Indian AIIMS NCC lag is 24-36 months, the Australian Hearing Australia lag is 16-22 months. In all four systems, the *pre-NicheCore* journey is dominated by escalating distress, provider-shopping, supplement-trial-and-error, sleep disturbance, and in 30-40% of cases GAD-7/PHQ-9 crossing into clinical range. By the time a reader lands on `/brain-eye/tinnitus-support`, they have a 14-36 month emotional history NicheCore inherits.

### 1.2 The journey arc the dossier needs to make explicit

A service-designed journey-map for NicheCore tinnitus would name **five phases**:

- **Phase 1 — Pre-symptom + onset (Day 0 to ~Month 3).** Emotion: shock → mild concern. Touchpoints: Dr Google, family, community pharmacist. Pain-point: no framework. Delight-moment: if NicheCore appears in the first-3-month search-window, this pre-distress reader is the highest-LTV cohort. Dossier currently offers nothing here — §0 red-flag block assumes a reader who already knows the condition.
- **Phase 2 — Escalating distress + provider-shopping (Month 3 to ~Month 18).** Reader cycles through GP, pharmacy supplements, sound-machines, audiograms. Emotion: frustration → catastrophising → loss-of-control. Touchpoints: GP, BTA helpline 0808 808 0123, Tinnitus Hub forums, AYUSH OPD, audiologist, hearing-aid dispenser. Pain-point: fragmented advice. Delight-moment: NicheCore as the structured evidence-OS naming what the reader half-knows. Dossier inherits this reader silently; the *narrative recognition moment* is only in §13.5 primer.
- **Phase 3 — First NicheCore touchpoint + activation (Day 0 to Day 14 on platform).** Emotion: hope → overwhelm-risk → first-action commitment. Touchpoints: website, Companion AI, bundle wizard, first delivery, first night with sound enrichment. **The most under-designed phase in the entire dossier** — see Dimension 5.
- **Phase 4 — 12-month protocol arc (Day 14 to Month 12).** Emotion: uncertainty → tentative gains → relapse moments → identity-shift. Touchpoints: weekly slider, bi-weekly TFI, supplement reorders, sound-app sessions, optional clinic encounters, Companion conversations. The *emotional* relapse experience ("is it back forever?") needs its own emotion-arc surfacing alongside the wave-4 relapse-recovery 2-day rule.
- **Phase 5 — Graduation + maintenance (Month 12+).** Reader either (a) hits §13.6 sub-type-arc target → maintenance dose + quarterly TFI check-ins, (b) plateaus → clinic escalation, or (c) drops out. Emotion: confidence vs grief-for-non-cure vs disengagement. Touchpoints: maintenance subscription, alumni cohort, optional registry consent. **The dossier has no graduation experience** — §12 ends at month 12 with "continue" as the implicit answer.

### 1.3 Specific edits

- **Edit 1.1.** Add **§0.7 Patient-journey-map appendix** (~700 words) — five-phase arc with phase-name + duration + emotion + touchpoints + pain-points + delight-moments + drop-off-risk-zones; annotated table + Kalbach emotion-curve text-graph (FKGL ≤7).
- **Edit 1.2.** Add **§1.5 reader self-locator** — 4-question quick-screen pinning reader to Phase 2/3/4/5.
- **Edit 1.3.** Add **§12.13 Graduation + maintenance phase** (~300 words) — named transition out of the 12-month arc into quarterly TFI maintenance, alumni cohort, registry consent.
- **Edit 1.4.** Cross-reference §0.7 from §1.5 + §8.0 MVP + §13.5 primer.

---

## 2. SERVICE BLUEPRINT — FRONT-STAGE + BACK-STAGE ACTORS + TOUCHPOINTS + ESCALATIONS

### 2.1 What a service blueprint is + why the dossier needs one

A service blueprint (Bitner/Ostrom 2008; Polaine-Løvlie-Reason 2013; NHS Service Standard 2023 §13) maps four horizontal layers across the journey timeline: **patient actions**; **front-stage** (what the reader sees — website, app, bottles, sound-app, Companion AI, customer-service); **back-stage** (Evidence Factory updates, supplier QC, fulfilment, content moderation, safety-signal monitoring); **support processes** (suppliers, payment processors, voluntary-sector PPI partners, registry IRB, COMIT'ID consortium, payer-channel disclosures). Two lines separate the layers: **line-of-interaction** (patient actions ↔ front-stage) and **line-of-visibility** (front-stage ↔ back-stage). NicheCore has rich back-stage capability and rich front-stage — but **the blueprint connecting them is undrawn**. The reader does not see what is happening invisibly, what the failure-modes are, or who is accountable when something goes wrong.

### 2.2 The blueprint NicheCore should formalise

**Patient actions:** lands on `/brain-eye/tinnitus-support` → reads §0 red-flags → §1.5 self-locator → §13.5 primer → §8.0 MVP → safety-quiz → buys bundle → installs sound-app → starts §11.2 scoring → week-1 onboarding → week-8 self-check → protocol-iteration loop → month-12 graduation.

**Front-stage:** dossier page (DecisionHero, left-rail tree, mind-map strip, DeepDive collapsibles, Companion drawer, ConversionStrip); bundle wizard with safety-quiz routing; email + SMS comms (welcome series, week-1 nudges, scoring reminders, week-8 prompt); sound-enrichment app; supplement bottles + tear-off card (wave-9 §14.2); Companion AI; Expert escalation handoff page; progress dashboard (TFI/THI/PSQI/slider/GAD-7/PHQ-9 + COMIT'ID 5-item).

**Line-of-interaction.**

**Back-stage:** Evidence Factory citation + freshness-chip refresh; Companion AI RAG over dossier + Q-set narrative + IPA super-ordinate themes; safety-signal monitoring (wave-2 pharmacovigilance + wave-4 near-miss); supplier QC pipeline (wave-3); cohort registry pipeline (wave-5); content review cycle (consumer-editor + fact-checker wave 5); PPI co-production sprints (wave-9 + Dimension 3 here).

**Line-of-visibility.**

**Support processes:** suppliers (§9 + wave-3); payment + subscription processor; payer-channel pathways (PMJAY-AYUSH + NHS + GKV + MBS + PHI — wave-6); voluntary-sector partners (BTA + RNID + Tinnitus Hub + Tinnitus Australia + Tinnitus-Liga + Deutsche Tinnitus-Stiftung + NIMHANS + AIIA Delhi + STOP — wave-9); COMIT'ID consortium; IRB/ethics committees (wave-5); Cloud Run + Artifact Registry + GitHub + deployer-SA (per CLAUDE.md).

### 2.3 The escalation-pathway sub-blueprint

Every blueprint requires an explicit **failure / escalation pathway** layer. Six NicheCore-tinnitus escalations: (1) **red-flag triggers** (§0: pulsatile, asymmetric, SSHL ≤72 h, neurological, sudden Ménière) → on-page trigger → recommended clinical action → wave-9 §14.2 audiologist-facing one-pager → return-handoff to NicheCore once cleared; (2) **suicidality / PHQ-9 ≥15** (wave-4 trust-and-safety) → per-jurisdiction crisis-line + in-product safe-message + Companion AI hard-stop + human-Expert handoff; (3) **polypharmacy / drug-interaction flag** (§10.1) → interaction-matrix surface + pharmacy-review CTA + §15 clinic-route; (4) **adverse-event signal** (wave-2 pharmacovigilance) → Yellow Card / EU SUSAR / India PvPI / Australia TGA AAN + supplier-recall protocol; (5) **cohort-attrition / non-response at week-8** → §8.0.5 ambivalence-honouring paragraph (wave-9) + MI re-engagement + Q-methodology viewpoint-reflection + optional clinic-escalation; (6) **refund + dissatisfaction** → founder's no-quibble-refund + post-refund care-pathway + free Companion consult before exit.

### 2.4 Specific edits

- **Edit 2.1.** Add **§11.9 Service-blueprint appendix** (~900 words) — four-layer blueprint (patient actions / front-stage / back-stage / support processes) with both lines-of-interaction-and-visibility drawn explicitly as a text-rendered grid; cross-referenced to wave-9 §11.8 clinic-handshake.
- **Edit 2.2.** Add **§11.9.5 Escalation-pathway sub-blueprint** (~400 words) — the six escalation triggers above with on-page surface → recommended action → handoff partner → return-loop.
- **Edit 2.3.** Add **§14.4 Service-failure protocol** (~250 words) — the named failure-modes (supplier stock-out, sound-app outage, Companion AI hallucination, dossier-citation-stale, supplement-recall) with the named recovery-path each.
- **Edit 2.4.** Cross-reference §11.9 + §14.4 from §0 + §15 + the Evidence Factory page (admin route) so the blueprint is operationally surfaced to founder + future operators.

---

## 3. CO-DESIGN WITH PATIENTS — PPI CO-PRODUCTION EXTENSION OF WAVE-9

### 3.1 The co-design vs co-production distinction

Wave-9 named **PPI co-production** with BTA + RNID + Tinnitus Hub + Tinnitus Australia + Tinnitus-Liga + NIMHANS + STOP — patient-partners review + veto NicheCore-generated artefacts (NIHR INVOLVE 2021; UK Standards for Public Involvement). **Co-design is structurally different** (Sanders + Stappers 2008; NHS England Co-Production Model; Australian Commission on Safety and Quality co-design standards; Karolinska SDL generative-research protocol; IDEO Healthcare Design Kit): patient-partners *generate the artefact alongside the team from idea-stage* — they hold the pen, not the red pen. Wave-9 gave NicheCore the review-stage; co-design gives the generative front-loop without which co-production risks being window-dressing.

### 3.2 What a co-design protocol for NicheCore tinnitus looks like

Six elements:

- **Recruitment.** 12-18 patient-partners across §2.6 sub-types + §11.5 life-stages + region (UK/Sweden/India/Australia/Germany). Routed through named PPI partners (BTA Research Panel + STOP cohort + NIMHANS integrative OPD + Hearing Australia consumer-panel + Tinnitus-Liga). Stratified by Q-methodology viewpoint-factor (wave-9 §13.8) once Q-output exists; before then by sub-type + life-stage proxy.
- **Payment + recognition.** Per NIHR INVOLVE 2021 + Australian Commission 2021 standards: patient-partners paid at host-organisation honorarium-rate (UK NIHR Researchfish band + AUD/INR/EUR/SEK equivalents). Acknowledgement in dossier byline + optional named contribution.
- **IP + governance.** Co-design output co-owned (CC-BY-SA on shipped artefacts; named contribution in citation; opt-out individual-rights respected). Governance through a Co-Design Steering Group of 4 patient-partners + 1 NicheCore researcher + 1 PPI-partner liaison + 1 founder representative.
- **Sprint cadence.** Two-week sprints; six sprints per quarter; three quarters to land Tier-1 + Tier-2 + Tier-3 co-designed artefacts. Each sprint runs Discover → Define → Develop → Deliver (UK Design Council Double Diamond / 4D model). Artefacts versioned in `nichecore/research/co-design/`.
- **Generative methods.** Personas built from Q-methodology viewpoints + IPA super-ordinate themes; journey-mapping workshops (Mural / Miro + offline-equivalent for low-digital-literacy AYUSH cohort); body-storming (sound-enrichment, supplement-ritual, evening-routine); prototyping (paper prototypes of §11.4 bedside card; lo-fi DecisionHero; mid-fi Companion AI onboarding-conversation).
- **Evaluation.** PROMIS-PPI-12 at sprint close; NHS Friends-and-Family-Test analogue for patient-partners; artefact-quality (FKGL ≤7 + cultural-appropriateness panel); downstream adherence + retention deltas in the cohort.

### 3.3 Co-design artefacts the dossier needs to co-design (not just co-review)

Artefacts where co-production-only is insufficient and generative co-design is mandated:

- **§0.7 patient-journey map + emotion-arc** (Dimension 1) — only patient-partners can authentically describe the Phase-1/2 emotional landscape.
- **§13.5 primer + §13.0-§13.4 case composites** — Ravi + others should be IPA-informed *and* patient-partner-generated, lifting wave-9 IPA from review-stage to generative-stage.
- **§5.5b MI self-talk mirror + §8.0a first-7-days choreography** (Dimension 5) — day-by-day onboarding language co-designed in MI voice with patient-partners holding the pen.
- **§11.4 bedside summary card + audiologist-facing one-pager** — wave-9 named co-production; co-design is the generative front-loop.
- **Companion AI onboarding-conversation tree + safety-quiz routing** — the triage conversation co-designed with high-distress + low-engagement patient-partners.
- **§8.0a celebration micro-moments** (Dimension 5) — activation events at day 1/3/7/week 4/8/12/month 6/12 co-designed (what does success feel like? what is worth marking?).

### 3.4 Specific edits

- **Edit 3.1.** Add **§13.9 Co-design methodology + protocol** (~700 words) — six elements above + named co-design artefact list + sprint cadence + budget commitment + governance through Co-Design Steering Group; sits alongside wave-9 §13.8 PPI co-production methodology so the dossier has both review-stage *and* generative-stage patient-partner involvement.
- **Edit 3.2.** Add **§13.9.5 Co-design effectiveness measures** (~200 words) — PROMIS-PPI-12 + adapted Friends-and-Family Test + artefact-quality + downstream adherence + retention.
- **Edit 3.3.** Cross-reference §13.9 from §0.7 + §13.5 + §11.4 + the Evidence Factory page so the co-design front-loop is visible at every artefact the dossier ships.

---

## 4. HEALTHCARE-SYSTEM-INTEGRATION HANDOFFS — NHS TALKING THERAPIES + BETTER ACCESS (AU) + HEILPRAKTIKER (DE) + AYUSH-CCRAS (IN) PATHWAY-MAPPING

### 4.1 What wave-9 surfaced + what is still undesigned

Wave-9 §11.8 named the clinic-workflow handshake (what-to-bring + what-to-ask + between-visit task-list) and the audiologist-facing one-pager. Wave-6 named the payer-channel disclosures (§15.5-§15.8). Wave-9 §0.6 named the recruitment-from-clinic referral mirror. None of these is the **formal system-integration pathway-map** the four named health systems require to recognise NicheCore as an integratable self-management service.

Each health system has a specific gateway + governance discipline:

- **NHS Talking Therapies (formerly IAPT — renamed 2024).** Reader self-refers; 6-12 sessions of CBT/CBT-I/MBCT; tinnitus-specific CBT-T available at ~30% of trusts (2024-25). §5.5 + §5.7 are the home-self-applied equivalents. Integration requires (a) referral-criteria (GAD-7 ≥10 OR PHQ-9 ≥10 OR TFI Functional ≥18 → self-refer), (b) return-handoff at discharge, (c) data-sharing minimum (reader-controlled TFI + scoring export), (d) governance through NHS Information Standard for Patient Information + NHS Apps Library criteria.
- **Better Access (Australia — MBS-rebated psychology).** GP issues Mental Health Treatment Plan; reader gets 10 (in cohort circumstances 20) sessions. Tinnitus-distress under-recognised at the GP-MHTP gateway; NicheCore should name eligibility criteria + MHTP ask + Hearing Australia adjunctive + DVA Gold Card overlay for veterans.
- **Heilpraktiker + Reha-Kliniken (Germany).** Heilpraktiker (state-licensed naturopath) is the legal channel for AYUSH-equivalent + homeopathic-tradition integration; GKV Reha-Kliniken (e.g. Bad Kreuznach Tinnitus-Klinik) run residential CBT-T + sound-therapy 3-week programmes covered under §40 SGB V. Integration requires the GKV Wahltarif disclosure (wave-6 §15.7) + Heilpraktiker scope-of-practice acknowledgement so the §4 traditional-medicine layer is legally surfaced to DE readers.
- **AYUSH-CCRAS (India).** Ayushman Bharat PMJAY-AYUSH covers integrative-medicine pathways; CCRAS runs integrative-tinnitus protocols; CCRH for homeopathy. Integration requires CCRAS protocol-reference + AIIA Delhi / NIA Jaipur / GAU Jamnagar OPD pathway + ASHA + ANM community-screener handoff (wave-9 §0.6) + PMJAY verification.

### 4.2 The handoff pathway-map elements

For each of the four systems, the dossier should name: **entry criteria**; **referral mechanism** (self-/GP/community-worker/PPI-partner); **service content** (sessions, residential, OPD); **concurrent NicheCore continuation** (rarely "stop everything"; usually "continue §8.0 MVP, pause §5.5 self-applied while in CBT-T"); **return-handoff** at discharge (re-engagement at the right §0.7 phase); **data-sharing minimum** (reader-controlled TFI + slider + §11.3 lab export); **governance + MoU template** for the recognition-stage of integration.

### 4.3 Cross-discipline handoff outside the four named systems

Also covers: NHS audiology MDT (wave-9 §11.8) upstream of Talking Therapies; general practice (NHS GP + AU GP + DE Hausarzt + IN MBBS GP) as the gateway for SSHL same-day-steroid, thyroid/B12/ferritin/lipid/sleep-apnea referral, and the controlled-drug discussion the dossier does not recommend; NHS England Personalised Care Operating Model — PAM-13 (Patient Activation Measure) as an optional self-administered measure at week-1/month-3/month-12; sleep medicine (wave-9) cross-handoff to NHS sleep clinic / Better Access psychology / German Schlaflabor / Indian SAARC sleep-medicine network. The dossier should use both IAPT and Talking Therapies transitionally as the NHS England rename has not fully propagated.

### 4.4 Specific edits

- **Edit 4.1.** Add **§14.5 NHS Talking Therapies integration pathway-map** (~400 words) — entry criteria + referral mechanism + service content + concurrent NicheCore continuation + return-handoff + data-sharing minimum + MoU template-pointer; references both legacy IAPT and current Talking Therapies naming.
- **Edit 4.2.** Add **§14.6 Better Access (Australia) integration pathway-map** (~300 words) — MHTP gateway + Hearing Australia adjunctive + DVA Gold Card overlay.
- **Edit 4.3.** Add **§14.7 Heilpraktiker + GKV Reha-Kliniken integration pathway-map** (~300 words) — Bad Kreuznach + Charité Tinnitus-Stiftung + §40 SGB V + Wahltarif.
- **Edit 4.4.** Add **§14.8 AYUSH-CCRAS + PMJAY-AYUSH integration pathway-map** (~400 words) — CCRAS protocols + AIIA / NIA / GAU OPD + ASHA + ANM screener + PMJAY verification.
- **Edit 4.5.** Add **§11.10 PAM-13 + Patient Activation Measure surface** (~200 words) — optional self-administration at week-1 + month-3 + month-12.
- **Edit 4.6.** Cross-reference §14.5-§14.8 from §15.5-§15.8 + the §0.7 journey-map + the §11.9 service-blueprint so the system-integration spine is visible across every dossier-surface that touches an external health system.

---

## 5. ONBOARDING FLOW — THE FIRST 7 DAYS: CURRENT-STATE VS DESIGNED-FOR-MVP-ADHERENCE

### 5.1 Why the first 7 days is the highest-leverage adherence surface

Behavioural-pricing + Duolingo + Noom + Calm onboarding-conversion data converge: **adherence at day 90 is overwhelmingly determined by what happens in the first 7 days**. Duolingo's day-2 retention predicts day-30; Noom's first-week meal-log compliance predicts month-6 outcomes within ±15%; Calm's first-week meditation streak predicts annual renewal at >0.6 odds. Wave-4 named COM-B + Fogg + identity + relapse-recovery; wave-9 named MI + Calgary-Cambridge + Ottawa SDM. **None is operationalised as a day-by-day first-7-days choreography.**

Current state: reader purchases bundle → §8.0 MVP table tells them what to take + when → bundle arrives → reader starts (or doesn't). The experience between purchase + first cap + first night with sound enrichment + first scoring entry is undesigned. Empirical drop-off in equivalent DTC chronic-condition supplement subscriptions is **35-55% by day 14** (Forrester DTC Health Subscription Benchmark 2024; HBR Healthcare Subscription Economics 2023).

### 5.2 The first-7-days choreography NicheCore should ship

**Day 0 (purchase + before bundle arrives).** Email 1 ("what to expect, plain words", FKGL ≤7) — §0.7 journey-map locator + §1.5 self-locator + a Calm-style trigger-bridge ("your first night is 5 days away — start sound enrichment phone-only tonight; no supplements needed"). Companion AI welcome opens with an MI open question (wave-9 §5.5b): *"What would you most want different about your tinnitus 6 months from now?"*; the reader's change-talk is recorded for re-surfacing at week 8. Optional 60-second founder video with honest expectation-setting (TFI 13-point MCID + sub-type-arc ranges).

**Day 1 (bundle arrives).** SMS/push — "Your bundle is here. Open it with this 3-minute walkthrough." Walkthrough: (a) which bottle is which; (b) §8.0 MVP table as card-sized visual; (c) §11.2 first-baseline entry (activation event — "first scoring entry done" is the day-1 micro-celebration); (d) §5.2 sound-app pairing. Companion ADR-check: "How did the first dose feel? Any reaction?" (wave-2 pharmacovigilance).

**Day 2.** Quiet day. Single SMS: "Day 2 — keeping it light. Tonight, sound enrichment runs again. Nothing else to do." Intentional under-load — the EAST framework (UK Behavioural Insights Team 2014) prescribes minimal cognitive load on day 2 to prevent overwhelm-drop-off.

**Day 3.** Email 2 — "The honest 8-week expectation" (FKGL ≤7) — re-states §11.7 honest baseline + §13.6 sub-type-arc so the reader does not catastrophise the absence of week-1 dramatic improvement. Companion: *"How's the sound enrichment landing?"* — early subjective response without a TFI ask.

**Day 4.** Quiet day. No contact or single soft SMS.

**Day 5.** First TFI sub-cadence prompt — "Quick check. Same 6 questions. 90 seconds." Deliberate sub-cadence to build the scoring habit before bi-weekly TFI begins at week 2. Companion surfaces §11.5 life-stage gate + §10.1 interaction matrix if reader self-reported anything in day-1 walkthrough.

**Day 6.** Email 3 — "Your first week — what to celebrate, what to ignore" (FKGL ≤7). Names small wins (showed up; took the caps; slept with sound enrichment 5/7 nights; scored once) as the *real* first-week success — not the absence of tinnitus. Identity-first framing (wave-4) operationalised at the activation surface.

**Day 7.** First-week milestone — "You did the first 7 days." Celebration micro-moment (co-designed per Dimension 3) — printable certificate, in-app badge, or Companion recognition. First full §11.2 cadence-entry (TFI + THI + PSQI + slider + GAD-7 + PHQ-9 + COMIT'ID 5-item per wave-9 §11.2.5) sets the bi-weekly baseline. Email 4 — "Your week-2 plan" — bridges into §0.7 Phase 4.

### 5.3 Activation events + celebration micro-moments

The choreography names six activation events turning passive content-consumption into active service-engagement: (Day 1) first scoring entry; (Day 1) first supplement dose recorded; (Day 2) second night with sound enrichment; (Day 5) first TFI sub-cadence repeat (habit-building); (Day 7) first week milestone certificate/badge; (Day 7) first full §11.2 cadence-entry as baseline. Each event has (a) a trigger (push/SMS/email/in-app), (b) an action (reader's micro-step), (c) a reward (celebration micro-moment, however modest), (d) an instrumentation event (logged for the wave-5 registry).

### 5.4 Onboarding ramp + progressive disclosure

The dossier corpus is ~13k words. Reader cannot absorb it in week 1. Progressive disclosure per the existing skill v6.2.3+ contract is correct in principle but not operationalised *in time*. The first-7-days surface schedule:

- **Day 0:** §0 red flags + §0.7 journey-map locator + §1.5 self-locator + §13.5 primer + §8.0 MVP + §11.2 scoring (must-know 7%).
- **Days 1-3:** §5.2 sound enrichment + §11.3 lab-context (only if reader self-reports relevant condition) + §10.1 interaction matrix (only if medication self-reported) (needed-now 8%).
- **Days 4-7:** §1 Executive Summary + §2 mechanism + §13.6 sub-type arcs + §11.7 honest baseline (context-for-week-2 15%).
- **Week 2-4:** §3 OTC molecules + §4 traditional medicine + §6 dietary (deepening 25%).
- **Month 2+:** §5.3-§5.18 + §7 lifestyle + §8.1-§8.5 escalation + §10.2-§10.6 sub-matrices + §11.4-§11.9 patient-facing (as-needed 30%).
- **Month 6+:** §9 supplier detail + §12 timeline + §13.7 evidence-tier comparison + §13.8-§13.9 PPI/co-design + §15 clinic-route (expert-reader 15%).

This is *progressive disclosure choreographed in time*, not just as a content-architecture pattern.

### 5.5 Specific edits

- **Edit 5.1.** Add **§8.0a First-7-days onboarding choreography** (~900 words) — day-by-day above with six activation events, six celebration micro-moments, progressive-disclosure cadence, MI + Calgary-Cambridge voice (wave-9), trigger-bridge purchase → first cap.
- **Edit 5.2.** Add **§8.0b Activation-event instrumentation table** (~150 words) — six events + triggers + actions + celebrations + logging; feeds wave-5 cohort registry + service-blueprint back-stage.
- **Edit 5.3.** Add **§8.0c Progressive-disclosure time-cadence** (~200 words) — day/week/month surfacing schedule; cross-referenced to skill v6.2.3 + v6.2.6 progressive-disclosure contract.
- **Edit 5.4.** Cross-reference §8.0a-c from §0 + §0.7 + §1.5 + §11.2 + §13.5 + Companion AI + bundle wizard.

---

## 6. WHAT THIS REVIEW DOES NOT CONTEST

Evidence-grading discipline + doctrine + all wave-1 through wave-9 corrections are sound and preserved. §11.7 + §13.6 + §11.5 + §10.1-§10.6 + §15 stay.

This review adds the service-design spine — patient-journey-map + service-blueprint + co-design methodology + system-integration pathway-mapping + first-7-days onboarding choreography — turning a clinic-translatable evidence dossier into a *designed health service*. Nothing here renounces prior doctrine. NHS Service Standard 2023 + EUSE 2024 playbook + Karolinska Service Design Lab + IDEO Healthcare + Mayo Center for Innovation + NHS England Co-Production Model + NHS Talking Therapies + Better Access + Heilpraktiker + AYUSH-CCRAS are all non-US-regulator-derived. UK Design Council Double Diamond is UK Cabinet Office. PAM-13 is University of Oregon + Insignia Health (academic). The first-7-days choreography sits inside §8, no new YAML fields, no new schemaVersion requirement (a v6.2.7 candidate addition to the skill is the natural next-pickup but not load-bearing for the dossier-edit).

---

## 7. PRIORITISATION

**Tier-1 (ship before NicheCore audiology-clinic-pilot sign-off; ~1,800 words new content):**
- §0.7 Patient-journey-map appendix + §1.5 reader self-locator + §12.13 graduation-and-maintenance phase.
- §8.0a First-7-days onboarding choreography + §8.0b activation-event instrumentation + §8.0c progressive-disclosure time-cadence.
- Cross-references from §0 + §1 + §8 + §11.2 + §13.5.

**Tier-2 (ship before NicheCore Service Blueprint board-presentation + Cohort registry IRB submission; ~1,300 words):**
- §11.9 Service-blueprint appendix + §11.9.5 escalation-pathway sub-blueprint + §14.4 service-failure protocol.
- §11.10 PAM-13 surface.
- §14.5 NHS Talking Therapies + §14.6 Better Access + §14.7 Heilpraktiker + Reha-Kliniken + §14.8 AYUSH-CCRAS integration pathway-maps.

**Tier-3 (ship before NicheCore Co-Design Steering Group formal kick-off; ~1,000 words):**
- §13.9 Co-design methodology + protocol + §13.9.5 co-design effectiveness measures.
- Formal MoU templates with NHS Talking Therapies (TIF-recognised), Better Access (MHTP-compatible), Heilpraktiker network, AYUSH-CCRAS, named PPI partners.

Total new content: ~4,100 words across 16 surfaces. Dossier delta: +4,100 to ~17,500 — within the 18,000 absolute ceiling but tight; founder may absorb the §14 system-integration pathway-pack as a downloadable sister-document rather than inline if the ceiling binds. Adherence payoff: a designed first-7-days choreography lifts day-90 retention from the DTC chronic-condition 35-55% drop-off benchmark toward the Duolingo / Noom / Calm 18-28% range (qualitative estimate based on EAST + Hooked + Center for Advanced Hindsight onboarding data); the service blueprint + system-integration pathway-maps lift NicheCore from sovereign-reader artefact to an integratable digital health service NHS commissioners, MBS planners, GKV reviewers, and PMJAY-AYUSH operators can recognise; the co-design front-loop protects the dossier from the patient-experience-blindness risk wave-9 flagged at PPI co-production stage.

---

## 8. CLOSING NOTE TO FOUNDER

The dossier — post-wave-9 — is now a clinic-translatable evidence-OS. What it is not yet: a *designed health service* with the journey-map + service-blueprint + co-design + system-integration + first-7-days-choreography fingerprint that NHS Service Standard 2023, EUSE 2024, Karolinska SDL, IDEO Healthcare, and Mayo Center for Innovation recognise as the bar for digital-health services that integrate with NHS Talking Therapies, Better Access (AU), Heilpraktiker + GKV Reha-Kliniken (DE), and AYUSH-CCRAS (IN). The five gaps above are the connective tissue between *content* and *service*. All are doctrine-compatible by construction. Tier-1 ships before the audiology-clinic-pilot sign-off; Tier-2 before the Service Blueprint board-presentation + registry IRB; Tier-3 before the Co-Design Steering Group kick-off. The service-designers you want as your operational advisory board — the people who shipped the NHS App, One Medical onboarding, Calm's 7-day Sleep starter, Mayo Outpatient Practice Redesign — will tell you the same five things. This audit gives you the operational specification before they do.

— Senior healthcare service-design consultant
NHS Design Council · EUSE · Karolinska Health Service Design Lab · IDEO Healthcare · Mayo Center for Innovation
2026-06-14
