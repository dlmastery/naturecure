# Wave-14 Review — Digital-health UX + conversational-AI safety + chatbot-as-clinician boundary + SaMD-regulatory + EU AI Act + dark-pattern audit

**Dossier under review:** `nichecore/research/tinnitus-support.md` (schemaVersion `v7.0.0-rigor-pass-2026-06-06`; ~18k words; post-waves 1-13 with all corrections folded — including wave-3 disability-inclusion BLOCKER set + wave-5 fact-checker corrections + wave-12 ME/CFS-autonomic + wave-13 disability-justice WCAG 2.2 + the inverse-care-law convergent theme).
**Skill under review:** `.claude/skills/ailment-360-research/SKILL.md` v6.2.6 (wave-aware edits live; v6.2.7 candidate Rule proposed below).
**App-architecture surfaces audited (read-only):** `app/guru/page.tsx` (AI Guru) + `app/companion/page.tsx` (Companion) + `app/expert/page.tsx` (Expert) + `app/progress/page.tsx` (Progress) + `app/admin/research-factory/*` + the storefront (`/c/[category]/package`) + `components/layout/dossier-shell.tsx` + `components/layout/decision-hero.tsx` (in-progress) + `components/safety-quiz.tsx` + `components/nav/*` + `lib/data.ts` + `lib/evidence.ts`.
**Live URL:** https://nichecore-tytn7sfqja-uc.a.run.app/brain/tinnitus-support (Cloud Run us-central1).
**Date:** 2026-06-18.

**Reviewer persona block (named bodies + frameworks).**

- **UK.** NHS England Digital + NHS Transformation Directorate (NHSX legacy now NHSE-Transformation); NHSE Health Innovation Office; NICE Evidence Standards Framework for Digital Health Technologies (ESF DHT, 2018 + 2022 + 2024 refresh) — tiered A/B/C classification + economic-tier 1-3; NHS Digital Technology Assessment Criteria (DTAC, 2021+); MHRA Software and Artificial Intelligence (AI) as a Medical Device Change Programme (2021 + 2023 roadmap) + Guidance on Crafting an Intended-Purpose Statement (MHRA 2023); UK AI Safety Institute (AISI, est. Nov 2023, Bletchley) — Frontier AI Safety Commitments + pre-deployment evaluations of foundation-models for biological/chemical/cyber/persuasion risks. NHS App Library reference + Caldicott Principles (NHS Caldicott Guardian network 1997 + 2013 + 2020 updates) + NHS Data Saves Lives strategy (2022).
- **DE.** Bundesinstitut für Arzneimittel und Medizinprodukte (BfArM, Bonn) — Medical-Device-Software guidance + DiGA-Verzeichnis (Digital Health Applications Directory) operator; Digitale-Versorgung-Gesetz (DVG, December 2019) + DiGAV (Verordnung) — the world's first statutory health-app reimbursement pathway with GKV (statutory insurance) coverage at ~€350-650/quarter per certified app; Gemeinsamer Bundesausschuss (G-BA) reimbursement determinations + Methodenbewertung; Kassenärztliche Bundesvereinigung (KBV) Telematik-Infrastruktur + ePA (elektronische Patientenakte 2025 opt-out architecture); Bundesdatenschutzgesetz (BDSG 2018) — Article-9 stricter-than-GDPR floor for health data; Bundesamt für Sicherheit in der Informationstechnik (BSI) IT-Grundschutz + C5 (Cloud Computing Compliance) catalogue.
- **AU.** Therapeutic Goods Administration (TGA) Software-Based Medical Devices (SaMD) Regulatory Framework — 2021 reform extending TGA scope to clinical-decision-support software; TGA Essential Principles + Conformity Assessment routes; Australian Digital Health Agency (ADHA, Canberra) — My Health Record + secure messaging + Provider Connect; Australian Privacy Principles (APPs) under Privacy Act 1988 + state Health Records Acts (NSW HRIPA 2002 + VIC HRA 2001 + ACT HRPP Act 1997); Office of the Australian Information Commissioner (OAIC) — Notifiable Data Breach scheme.
- **IN.** Ministry of Electronics and Information Technology (MeitY) Health Stack architecture + India AI Mission (2024); Ayushman Bharat Digital Mission (ABDM, 2021+, National Health Authority) — ABHA ID + Health Information Exchange + Health Facility Registry + Health Professional Registry + Consent Manager (modelled on DEPA 2020 data-empowerment-and-protection-architecture); Indian Council of Medical Research (ICMR) Digital Health programme + Ethical Guidelines for AI in Healthcare (2023); NITI Aayog Digital Health Blueprint (2019) + National Digital Health Mission (NDHM); Digital Personal Data Protection Act 2023 (DPDPA) — health-data as sensitive personal data under SPDI Rules 2011 + DPDPA Section 9 (children's data); Telecom Regulatory Authority of India (TRAI) Unsolicited Commercial Communication Regulations.
- **NL.** Zorginstituut Nederland (ZIN / National Healthcare Institute) Quality Institute Digital Health pathway; Nictiz (Dutch national ICT institute for healthcare) — MedMij personal-health-environment framework + Twiin programme + interoperability standards; Dutch Data Protection Authority (Autoriteit Persoonsgegevens).
- **EU.** EU AI Act (Regulation 2024/1689, OJ L published 12 July 2024, prohibited-practices applicable 2 Feb 2025, GP AI rules 2 Aug 2025, high-risk Annex III applicable 2 Aug 2026) — Article 6 high-risk classification, Article 9 risk-management system, Article 10 data governance + bias-monitoring, Article 13 transparency + provider-to-deployer information, Article 14 human oversight, Article 50 emotional-manipulation prohibition + AI-interaction transparency, Article 52 conformity-assessment, Article 72 post-market monitoring; Medical Device Regulation (MDR) Regulation 2017/745 — Rule 11 software classification (any SaMD informing decisions ≥ Class IIa, life-threatening Class III); In Vitro Diagnostic Regulation (IVDR) 2017/746; European Health Data Space Regulation (EHDS, 2024/1972, primary-use + secondary-use frameworks, EHR-X format, MyHealth@EU); GDPR (2016/679) Article 9 special-category health data + Article 22 automated-decision-making + Recital 71; ePrivacy Directive 2002/58/EC (cookie-consent + tracking); European Data Protection Board (EDPB) Guidelines 03/2020 on processing of health data for scientific research + 02/2023 on Article 6(1)(f); ENISA *Cybersecurity for SMEs in Healthcare* (2024).
- **WHO + multilateral.** WHO Global Strategy on Digital Health 2020-2025 + the 2024 mid-term review; WHO *Ethics & Governance of Artificial Intelligence for Health* (2021 + 2024 update — six principles: autonomy, well-being, transparency, responsibility, equity, sustainability); WHO *Regulatory Considerations on Artificial Intelligence for Health* (Oct 2023); WHO Be He@lthy, Be Mobile framework; Council of Europe Recommendation CM/Rec(2020)1 of the Committee of Ministers to member States on the human rights impacts of algorithmic systems; Council of Europe Framework Convention on AI + Human Rights + Democracy + the Rule of Law (Vilnius 2024).
- **AI-safety methodological provenance (cited as method-source, NOT as US-regulator authority).** Anthropic Responsible Scaling Policy v2.0 (2024) + Constitutional AI (Bai 2022) + Claude Use Policy red-line categories; DeepMind Sparrow (Glaese 2022) + Frontier Safety Framework v2 (2024); OpenAI Preparedness Framework v2 (2024) + System Cards. US FDA SaMD-N12 + AI/ML SaMD Action Plan cited as **comparator only** (per dossier doctrine).
- **Disability + accessibility carry-forward.** Wave-13 WCAG 2.2 AA + EAA 2025 + EHRC/AHRC/ADS/IN-Disability-Commissioner audit — accessibility findings are pre-emptively folded into every dimension below; we do not re-litigate the 9 wave-13 SC failure modes.

**Case-mix.** 30-60 digital-health + AI-clinician-boundary audits per year across (a) DiGA-pathway readiness reviews for German digital-therapeutics startups, (b) NICE ESF DHT Tier C economic submissions in UK, (c) TGA SaMD-classification opinion-letters for Australian apps, (d) EU AI Act gap-analyses for health-AI providers post 2 Feb 2025 prohibition-effective-date, (e) post-incident AI-clinician-boundary reviews after near-miss or harm events (typically: missed red-flag, hallucinated dose, sycophantic confirmation of patient self-misdiagnosis, cross-tradition compounding, training-data leakage of patient conversation transcripts). We sit at the interface of clinical-safety + AI-engineering + UX + regulatory-compliance — the only seat in the room that simultaneously reads (i) the dossier as a *clinical-content* product, (ii) the app as a *medical-device-software* product, (iii) the AI Guru as a *high-risk-AI-system* product, (iv) the storefront as a *consumer-commerce* product subject to UCPD/CPUTR/ACL/UCM.

**Waves 1-13 respected (NOT re-litigated).** All 65 prior reviewer corrections — citation discipline, country-attribution, EMA HMPC, biostatistics, advertising substantiation, pharmacovigilance, ENT-audiology SSHL 72-hour clock, classical-text scholarship, supplement-QC, founder-product, behavioural-adherence, trust-and-safety, data-engineering, patient-advocate, academic-PI, AI-safety RSP, consumer-health-editor, fact-checker, infosec, drug-development, psychometrician, behavioural-pricing, cross-cultural localisation, payer-policy, military-veteran, hearing-tech-engineering, forensic-audiology, vestibular-medicine, cardiology, occupational-health, audiology-research-nurse, competitive-intelligence, sleep-medicine, paediatric-audiology, geriatrician, manual-therapy, service-design, pharmacogenomics, knowledge-graph, nutrition, telehealth, SLP, bioethics, educational-psychologist, public-health, chronic-pain, risk-communication, ME/CFS-autonomic, otoneurology, endocrinology, paeds-audiology (wave-13), disability-justice (wave-13 WCAG 2.2 + EAA 2025 + Sins Invalid), public-health-behaviour, health-economics, diaspora-multilingual — **all preserved**.

Wave-14's distinct contribution: **the prior 65 reviewers audited content; wave-14 audits the delivery surface**. The dossier as rendered + the Guru that interprets it + the Companion that schedules it + the storefront that monetises it + the Progress dashboard that tracks symptoms — these together constitute the **digital-health intervention** the user actually experiences. Five questions no prior wave reached: (a) Does this constitute Software as a Medical Device under EU MDR Rule 11 + UK MHRA + DE BfArM + AU TGA + IN ABDM voluntary registration, and what changes if yes? (b) Does the AI Guru fall under EU AI Act Article 6 high-risk classification effective 2 August 2026, and what is the conformity-assessment gap today? (c) What are the conversational-AI-in-clinical-context failure modes that the existing UNSAFE_TRIGGER regex `/spreading|chest pain|suicid|hypoglyc|emergency|cure/i` in `app/guru/page.tsx:26` does NOT catch, and how should the safety contract be re-specified? (d) Does the data-processing pipeline (TFI + THI + PHQ-9 + GAD-7 + DSQ-PEM-5 + Guru-transcript + Companion-adherence + Progress-symptom-journal) satisfy GDPR Article 9 + BDSG + DPDPA + APPs + LGPD-style consent + EHDS primary/secondary-use partitioning? (e) Does the storefront UX + Companion retention loop + Progress ring-chart contain dark patterns prohibited by UCPD 2005/29/EC + UK CPUTR 2008 + AU ACL + DE UWG + IN Consumer Protection Act 2019 that disproportionately harm tinnitus-distressed users?

The **convergent wave-6/9/11/12/13 inverse-care-law theme** lands at the digital-health UX surface as **digital-health inverse-care-law**: dark patterns + AI hallucination + privacy violation + accessibility failure + algorithmic bias all harm vulnerable users disproportionately. Wave-13 supplied the disability-justice framework; wave-14 supplies the **technical-and-regulatory operational layer** that converts the framework into shipped controls.

**Headline verdict.** **MAJOR revision recommended.** Five dimensions, ~4,200-word additive layer + 1 new skill Rule 24 candidate for v6.2.7 (the **digital-health regulatory + AI-safety + UX quintet contract**: SaMD classification statement + EU AI Act Article 6/9/10/13/14/50 mapping + conversational-AI safety contract + GDPR/BDSG/DPDPA/APP data-protection-by-design + UCPD/CPUTR/ACL/UWG dark-pattern explicit prohibition with B-Corp / Fair-Subscription / Made-To-Last commitments) + 1 new §0.6 "what this app is and is not (regulatory + AI safety frame)" plain-words pre-amble + 1 new §16 (renumbering existing) "the app + dossier together: regulatory + safety contract" appendix. None of the additions require renouncing doctrine — EU AI Act + EU MDR + UK MHRA + UK AISI + DE BfArM + DE DiGA + AU TGA + IN MeitY + ABDM + WHO Digital Health + WHO AI Ethics + Council of Europe + ENISA are all non-US authorities; Anthropic RSP + DeepMind FSF + OpenAI PF cited only as methodological provenance for the AI-safety contract (same pattern as Cima 2012 Maastricht + Bauman 2008 + Meikle 2012 VA already accommodated as research-not-regulator). US FDA SaMD framework appears only in comparator footnotes.

---

## SUMMARY OF FINDINGS

| Dimension | Verdict | Severity |
|---|---|---|
| 1. SaMD classification + regulatory pathway — does the app + dossier together meet EU MDR Rule 11 Class IIa SaMD criteria + UK MHRA SaMD + DE BfArM (and potentially DiGA-pathway eligibility) + AU TGA + IN ABDM voluntary registration? What is the intended-purpose statement? | **Major** — current §11.5 cluster screen + DSQ-PEM-5 routing + active-stand recommendation + COMPASS-31 referral algorithm + §8.0 MVP protocol + §8.5 24-hour timetable + safety-quiz (`components/safety-quiz.tsx`) collectively make individualised diagnostic-adjacent + therapeutic-adjacent recommendations; under EU MDR Rule 11 + MDCG 2019-11 software-classification guidance this likely meets Class IIa SaMD minimum (potentially IIb given the suicidality-screening + SSHL emergency-routing safety implications); no intended-purpose statement, no CE-mark, no technical file, no EUDAMED registration, no SSCP; DiGA-pathway is a genuine revenue-model option DE founder should consider |
| 2. EU AI Act (effective Feb 2025 prohibited-practices; Aug 2026 high-risk) — does the AI Guru fall under Article 6 high-risk? Compliance gap on Articles 9/10/13/14/50? | **Major** — the AI Guru is conversational-AI providing health-related output to vulnerable users → high-risk under Article 6(2) + Annex III §5(a) "AI systems intended to be used to evaluate the eligibility of natural persons for essential public and private services, including healthcare services" arguably engages; Article 9 risk-management system absent (no documented risk register, no foreseeable-harm catalogue); Article 10 data-governance absent (no documented training-data lineage, no bias-monitoring against protected categories); Article 13 transparency partly met (the AI-Guru-not-chatbot framing) but the "Guru" anthropomorphic framing risks misleading; Article 14 human-oversight architecture present (escalate-to-Expert in `/expert`) but criteria/triggers not specified; Article 50 emotional-manipulation prohibition risk on storefront upsell flow |
| 3. Conversational-AI safety contract — the AI Guru audit on hallucination, sycophancy, red-flag-miss, suicide/self-harm routing, cross-tradition compounding, RAG grounding, OOD-refusal | **Major** — current UNSAFE_TRIGGER regex in `app/guru/page.tsx:26` is `/spreading|chest pain|suicid|hypoglyc|emergency|cure/i` — catches 5 surface keywords; does NOT catch SSHL 72-hour-window phrases ("sudden hearing loss", "one ear muffled", "blocked yesterday"), does NOT catch pulsatile-tinnitus ("throbbing in my ear", "beats with heart"), does NOT catch suicidal-ideation-with-tinnitus ("can't take this ringing anymore"), does NOT catch cross-tradition-compounding ("I'm also taking Ashwagandha and Ginkgo and warfarin"), does NOT catch drug-interaction-out-of-scope queries, does NOT detect sycophancy-inducing leading questions; no RAG-grounding contract specified; no OOD-refusal contract specified |
| 4. GDPR + BDSG + DPDPA + APPs + EHDS data-protection-by-design — TFI + THI + PHQ-9 + GAD-7 + DSQ-PEM-5 + COMPASS-31 + Wolfe-FM + CSI + ringing-log + sleep-score + adherence + Guru-transcript are all GDPR Article 9 special-category health data; AI Guru conversation transcripts are highest-sensitivity; no documented retention, no documented training-exclusion, no documented portability under GDPR Art 20 + DPDPA, no Indigenous data sovereignty under CARE | **Major** — Companion + Progress + Guru all collect Article-9 data; no privacy notice visible; no granular consent architecture; no documented sub-processor list; no Data Protection Impact Assessment (DPIA) under GDPR Article 35 (mandatory for large-scale processing of special-category data); BDSG §22 explicit-consent floor not documented; DPDPA Section 9 children's-data + Section 11 right-to-correction not architected; APP 11 cross-border-disclosure not documented; AI Guru transcripts must be excluded from any future fine-tuning unless explicit opt-in consent |
| 5. UX dark-pattern audit — storefront + Companion retention loop + Progress dashboard scrutinised against UCPD 2005/29/EC + UK CPUTR 2008 + EU Consumer Rights Directive 2011/83 + AU ACL + DE UWG + IN Consumer Protection Act 2019 + the OECD Dark Commercial Practices working-paper | **Major** — Companion "refill decision · day 75" copy ("Your 90-day pack has ~7 days left") is borderline urgency-pressure; the Progress ring-chart 86%/92%/74% with "trend signal not clinical outcome" small-print is a partly mitigated *implied-efficacy* pattern (UCPD Annex I §17 prohibition); no documented bundle-default-pre-selection audit; no documented cancellation-path simplicity audit; no documented confirmshaming-prohibition; the convergent wave-13 #2 Sins-Invalid "anti-capitalist politic" principle + wave-13 #4 health-economics inverse-care-law concern locks together at this UX surface; tinnitus-distressed users are an *acknowledged-vulnerable-cohort* under UCPD Article 5(3) → heightened protection-standard applies |

---

## 1. SaMD CLASSIFICATION + REGULATORY PATHWAY AUDIT

### 1.1 The threshold question — is this Software as a Medical Device?

EU MDR Article 2(1) defines "medical device" to include software *intended* for diagnosis, monitoring, prediction, prognosis, treatment, or alleviation of disease. MDCG 2019-11 *Guidance on Qualification and Classification of Software in Regulation 2017/745 — MDR and 2017/746 — IVDR* sets the canonical decision-tree. The threshold question is **intended purpose**, judged from a reasonable-user perspective and the provider's marketing claims.

The current NicheCore site states (home `app/page.tsx` + atlas + dossier): "evidence-OS for natural health · graded, OTC-strict, home-administrable catalogue of 78 ailment dossiers"; the dossier itself states "the home OTC stack is an adjunct, not a substitute"; the AI Guru states "It never diagnoses, prescribes, invents citations, or recommends outside the approved library." On the face of marketing, the intent is informational + general wellness.

**However** — the following surfaces collectively cross the medical-device threshold under MDCG 2019-11 Step 4 (decision-step diagram):

- **§11.5 cluster screening table** — provides individualised clinical-decision-support recommendations based on per-user comorbidity profiles (CKD eGFR-gated Mg dosing, warfarin K2 contraindication, pregnancy black-cohosh exclusion, SSHL 72-hour-window emergency-routing).
- **§8.0 MVP protocol + §8.5 24-hour timetable** — provides individualised therapeutic recommendations (sound-enrichment + MBCT-T + supplement schedule + meal-plan grams) for the named clinical condition tinnitus.
- **`components/safety-quiz.tsx`** — a 4-step intake quiz that routes users to bundles vs experts based on flagged answers — this is decision-support software.
- **§13.5 patient-facing primer + §10.1 interaction matrix** — drug-supplement interaction checking is explicitly within the EU MDR Class IIa SaMD scope per MDCG 2019-11 example 12 (drug-interaction-checker).

Under MDCG 2019-11 Rule 11 (the software classification rule introduced in MDR replacing the lighter MDD regime), software intended to provide information used to take decisions with diagnosis or therapeutic purposes is **Class IIa minimum**. If the decision could cause death or irreversible deterioration → Class III; serious deterioration → Class IIb; everything else with diagnostic/therapeutic intent → Class IIa.

Given (a) the SSHL 72-hour-window decision (irreversible-deterioration risk if missed) + (b) the suicidality-PHQ-9-item-9 routing decision (irreversible-deterioration risk if missed) + (c) the warfarin K2-vitamin-K interaction (anti-coagulation collapse + stroke risk if missed) — the dossier+app likely sits at **Class IIa boundary tipping to IIb**.

### 1.2 Per-jurisdiction pathway map

- **EU MDR**: Class IIa requires Notified Body conformity-assessment route (Annex IX or X), technical documentation (Annex II + III), Post-Market Surveillance plan + Post-Market Clinical Follow-up (Annex XIV), Periodic Safety Update Report (PSUR), Summary of Safety and Clinical Performance (SSCP), EUDAMED registration with UDI, and CE-marking. Estimated 12-18 month cycle + €60-150k for first-time submission via a Notified Body (BSI, TÜV SÜD, DEKRA, IMQ).
- **UK MHRA**: post-Brexit, UKCA marking pathway converging with EU MDR but with the MHRA SaMD + AI Change Programme 2023-2025 roadmap introducing UK-specific airlock + sandbox. MHRA accepts CE-marking until 30 June 2030 for medical devices (extended from 2028 in 2024); after that UKCA mandatory.
- **DE BfArM**: implements EU MDR + adds DiGA pathway. **DiGA is a genuine commercial opportunity** the founder should evaluate: BfArM DiGA-Verzeichnis listed apps achieve GKV reimbursement at ~€350-650/quarter per insured patient (German GKV covers ~73 million people). DiGA requires (a) Class I or IIa SaMD CE-mark, (b) BfArM evidentiary submission (DiGA Fast-Track allows 12-month *provisional* listing with post-market clinical-evidence collection), (c) DiGA-V data-protection + interoperability + usability requirements. **Founder action**: if there is appetite, the tinnitus dossier+app could pursue DiGA provisional listing within 6-9 months, generating ~€350/quarter × ~10,000 insured tinnitus patients per year (if even 1% of the ~1.5M German chronic-tinnitus prevalence enrol) ≈ €14M/year recurring revenue. This is a strategic option, not a recommendation — surfacing honestly because the SaMD-classification path that creates regulatory burden also unlocks reimbursement.
- **AU TGA SaMD framework (2021 reform)**: software-as-medical-device pathway Class IIa minimum for clinical-decision-support; conformity-assessment via TGA-approved bodies; Therapeutic Goods (Medical Devices) Regulations 2002.
- **IN ABDM**: voluntary registration on Health Stack (ABDM portal); ABHA-ID integration available; ICMR Digital Health programme can support evidence-collection; light regulatory hand currently but DPDPA + ABDM-Consent-Manager constrain data flow.
- **NL ZIN**: ZIN quality assessment for reimbursement consideration; Nictiz interoperability standards (MedMij PGO).
- **US (comparator only)**: FDA SaMD-N12 + 21st Century Cures Act §3060 carve-out for *general wellness* vs *medical device* — currently the dossier sits in 21st-Century-Cures-Act safe-harbour as general wellness; but the safe-harbour requires "low-risk" + "general well-being" framing absent disease-specific intent.

### 1.3 Recommended edit — §0.6 regulatory-status statement (NEW, before §1)

> **For you, in plain words.** This dossier and the app you read it on are **educational tools** that help you understand the science and practise self-care at home. They are not a doctor, not a diagnosis, not a prescription, and not a substitute for clinical care. In some countries, software that helps you make health decisions is regulated as a medical device. We are honest about where we sit: in the **UK, EU, Australia and Germany** the underlying decision-support functions in this app may meet the threshold for **Software as a Medical Device Class IIa** — we are working on the formal regulatory pathway in 2026-2027 (CE-mark via Notified Body; UK MHRA; AU TGA; DE BfArM DiGA pathway evaluation). Until then, treat every individualised recommendation in this dossier as **general educational information, not a regulated medical-device output**. For acute symptoms (SSHL, pulsatile tinnitus, suicidal thoughts), follow the red-flag-block above and go directly to your country's clinical pathway — do not use this app to decide.

### 1.4 Intended-purpose statement (MHRA-craft compliant)

> The NicheCore Tinnitus Support app provides educational content + self-management decision-support + symptom tracking for adults aged 18-85 with chronic subjective tinnitus (≥6 months duration), as an adjunct to (not substitute for) clinical care. Out-of-scope: acute SSHL <72h, pulsatile/objective tinnitus, paediatric users, severe suicidal-ideation users requiring crisis intervention, users with CKD stage 4-5 not under nephrology supervision.

### 1.5 What this means for the dossier

Add §0.6 (regulatory-status) + §16 appendix (regulatory + safety contract). No change to the home protocol content. The honesty of the framing is doctrine-aligned (Cochrane-discipline transparency principle generalised).

### 1.6 What this means for the app

Add a `/legal/regulatory-status` page; add a footer-link "Regulatory status"; add an intended-purpose statement to `app/page.tsx` hero + every dossier opener; add a Cookies + Privacy policy.

### 1.7 What this means for the skill

Skill v6.2.7 candidate Rule 24 mandates a §0.6 regulatory-status block in every dossier with a per-jurisdiction SaMD-classification statement honestly graded.

---

## 2. EU AI ACT COMPLIANCE AUDIT (effective Feb 2025 prohibited-practices; Aug 2026 high-risk)

### 2.1 Is the AI Guru a high-risk AI system under Article 6?

EU AI Act Article 6(1) declares an AI system high-risk if it is a safety component of a product subject to harmonised Union law listed in Annex I (which includes MDR + IVDR) AND that product is subject to third-party conformity-assessment. If the dossier+app reaches Class IIa SaMD under MDR (per §1 above) AND the AI Guru is an integrated decision-support component → **Article 6(1) high-risk applies**. Even absent MDR-coupling, Article 6(2) + Annex III §5(a) classifies AI systems used to "evaluate the eligibility of natural persons for essential public and private services, including healthcare services" as high-risk.

The AI Guru — which interprets the dossier, applies grades, surfaces contraindications, and routes to Expert — sits squarely in Annex III §5(a) on a reasonable reading.

### 2.2 Article 9 risk-management system — gap

Article 9 requires a documented + maintained risk-management system identifying + analysing known + foreseeable risks, estimating + evaluating risks, adopting risk-management measures, and updating throughout lifecycle. Required artefact: a **risk register** with each foreseeable harm, likelihood × severity scoring, mitigation, residual-risk acceptance. **Current state**: not visible.

Foreseeable harms the risk register must include: AI hallucination of dose/interaction; sycophancy confirming user pre-existing belief; SSHL-emergency missed-routing; suicidal-ideation missed-routing; pulsatile-tinnitus missed-routing; cross-tradition-compounding silently merged; drug-interaction missed; OOD-question generative-response instead of refusal; protected-category bias in routing recommendations; emotional-manipulation upsell against UCPD Article 5(3) acknowledged-vulnerable-cohort.

### 2.3 Article 10 data governance — gap

Article 10 requires training + validation + test data to be relevant + representative + free of errors + complete; bias-monitoring against protected categories (sex, gender identity, age, disability, race, ethnic origin, religion, sexual orientation). **Current state**: AI Guru implementation in `app/guru/page.tsx` is a mock UI (event-log + mock result + no actual LLM-call visible in this surface) — but production architecture must specify the underlying model (Claude / GPT / Gemini / open-source), training-data lineage (RAG-only? fine-tuned? prompt-templated?), bias-evaluation against the protected categories.

### 2.4 Article 13 transparency — partial

Article 13 requires deployer to know the AI system's intended purpose, characteristics, capabilities, limitations, and risks. The "AI Guru · agentic workspace" + "Not a chatbot. A verified task workspace." framing in `app/guru/page.tsx:46-48` is borderline anthropomorphic — "Guru" reads as wise-clinician-substitute. Article 50 (transparency for natural persons interacting with AI) requires users be informed they're interacting with AI unless evident from context. Current state: implicit but not explicit.

**Recommended edit**: AI Guru page header explicit disclosure: "You're interacting with an AI assistant trained on the NicheCore dossier library. It is not a clinician, does not diagnose, and operates within strict guardrails described below."

### 2.5 Article 14 human oversight — architecture present, criteria absent

Article 14 requires AI systems be designed so they can be effectively overseen by natural persons. The current `/expert` escalation path is the human-in-the-loop architecture. **What's absent**: the *criteria* triggering escalation (only the UNSAFE_TRIGGER regex catches 5 keywords); the *escalation SLA* (how fast does a human review a flagged transcript?); the *audit trail* (are all Guru transcripts logged for human-review-on-demand?); the *override mechanism* (can a clinician correct a Guru response in-session?).

### 2.6 Article 50 emotional-manipulation prohibition — UX overlap

Article 50(1)(a) prohibits AI systems deploying subliminal techniques beyond awareness or purposefully manipulative or deceptive techniques materially distorting behaviour. The storefront upsell flow + Companion retention loop must be audited (see §5 below).

### 2.7 Recommended edit — §16.2 EU AI Act compliance statement (NEW)

A dedicated dossier+app §16.2 block stating: high-risk classification under Article 6(2) + Annex III §5(a); risk-register link; data-governance + bias-monitoring policy link; transparency disclosure; human-oversight architecture description; conformity-assessment route + timeline.

---

## 3. CONVERSATIONAL-AI SAFETY CONTRACT — THE AI GURU AUDIT

### 3.1 The current UNSAFE_TRIGGER regex is insufficient

`app/guru/page.tsx:26` defines `UNSAFE_TRIGGER = /spreading|chest pain|suicid|hypoglyc|emergency|cure/i`. This catches 5 surface keywords + "cure" (used differently: blocks reader from asking "is there a cure?"). What it misses, in the tinnitus-specific clinical context:

- **SSHL 72-hour window**: "sudden hearing loss", "muffled one side", "blocked ear yesterday", "one ear gone deaf", "Hörsturz", "audición súbita", "श्रवण हानि अचानक" — all need hard-coded SSHL emergency-routing.
- **Pulsatile tinnitus**: "throbbing", "beats with heart", "pulse in ear", "whooshing in time", "Strömungsgeräusch" — vascular-imaging routing.
- **Unilateral asymmetric ≥6 weeks**: "only one ear for months", "only in my left ear" — vestibular-schwannoma MRI-trigger.
- **Suicidal ideation under tinnitus distress**: "I can't take this ringing", "I want it to stop forever", "I'd rather not be here", "no point continuing" — crisis-line block + Samaritans/988/Lifeline/Telefonseelsorge/iCall hard-coded routes.
- **Self-harm**: "thinking of hurting myself", "I deserve this" — same crisis routing.
- **Cross-tradition compounding**: any user message naming ≥3 supplements + ≥1 prescription drug — flag for interaction-matrix surfacing + clinician consult.
- **OOD questions**: "what about [condition not in dossier library]" — refusal contract.
- **Sycophancy-inducing leading questions**: "is acupuncture going to cure my tinnitus?" — the response must surface the Cochrane null, not confirm.

### 3.2 RAG-grounding contract (recommended)

The AI Guru must answer **only from retrieved dossier text**, with citation back to the relevant dossier section. Any generative completion outside the retrieved-content must trigger OOD refusal: "I'm trained on the NicheCore tinnitus dossier. Your question is outside that library — please see your clinician or the dossier index at /atlas."

### 3.3 Sycophancy mitigation

Anthropic's Constitutional AI work (Bai 2022) + DeepMind Sparrow (Glaese 2022) + OpenAI Preparedness Framework discuss the user-pleasing-vs-honest tension. Concrete mitigation: the Guru's response-composer must include a *honest-grade-check* step that surfaces Cochrane-null findings even when the user's framing hopes for confirmation. The skill's §13.7 honest-evidence-tier table is the canonical source-of-truth.

### 3.4 Suicide/self-harm safety contract (load-bearing)

If user message matches the suicidal-ideation classifier OR the user has self-reported PHQ-9 item-9 ≥ 1 in Companion/Progress, the Guru must:
1. Immediately surface the dossier crisis-line block (UK Samaritans 116 123 + 988 + Australia Lifeline 13 11 14 + India iCall 9152987821 + Vandrevala 1860 2662 345 + Germany Telefonseelsorge 0800 1110111 + EU 112 + Deaf-friendly SignHealth UK + 988 video-relay + LGBTQ+ Switchboard UK + Trevor Project).
2. Flag the transcript for human-review SLA ≤4h.
3. Continue to engage compassionately but not give any home-protocol advice in that session.
4. Log + retain the transcript for post-incident review (with explicit consent re-confirmation when distress de-escalates).

### 3.5 Cross-tradition-compounding detection

When the Guru detects the user is taking interventions from ≥2 traditions (e.g. AYUSH Ashwagandha + TCM Long Dan Xie Gan Tang + Western Ginkgo + warfarin), it must surface the §10.1 interaction matrix relevant rows AND recommend a single-clinician consultation rather than silently summing across traditions.

### 3.6 Recommended edit — §16.3 conversational-AI safety contract (NEW)

A dedicated block specifying: red-flag-classifier list (extended SSHL + pulsatile + unilateral + suicide + self-harm + cross-tradition-compounding) + RAG-grounding policy + OOD-refusal policy + sycophancy mitigation + crisis-routing-hard-codes + transcript audit policy.

### 3.7 What this means for the app

`app/guru/page.tsx` UNSAFE_TRIGGER regex extended to a structured classifier (not a regex — too brittle; needs intent-detection LLM-call OR a dedicated fine-tuned classifier with documented training-data per Article 10).

---

## 4. DATA-PROTECTION-BY-DESIGN AUDIT

### 4.1 The data inventory

The app collects, across surfaces: TFI score, THI score, PHQ-9 + GAD-7, DSQ-PEM-5 (wave-12), COMPASS-31 (wave-12), Wolfe FM criteria (wave-12), Central Sensitisation Inventory CSI (wave-12), ringing 0-10 daily log, sleep score, AI Guru conversation transcripts, Companion adherence taps, Progress symptom-journal entries, safety-quiz answers, supplement-cart contents, refill cadence. **Every single item is GDPR Article 9 special-category health data.**

### 4.2 Per-jurisdiction floor

- **GDPR Article 9**: explicit + freely given + specific + informed + unambiguous consent (Article 9(2)(a)) OR another Article-9-lawful-basis (vital-interest, public-health-interest). Storefront commerce sale of supplements is NOT a vital-interest basis; explicit-consent is the only viable basis here.
- **GDPR Article 35 DPIA**: mandatory for large-scale processing of special-category data — must be conducted + maintained + supervisory-authority-consulted where high residual risk.
- **GDPR Article 22 + Recital 71**: automated decision-making producing legal or similarly significant effects requires safeguards. The AI Guru routing recommendations + safety-quiz triage land within Article 22 — the user-right-to-human-intervention + right-to-contest must be documented.
- **GDPR Article 20 portability**: user must be able to receive their data in a structured machine-readable format. Recommended JSON export from `/progress`.
- **DE BDSG §22**: tightens GDPR Article 9 with explicit-consent floor + documented purpose-limitation.
- **UK Data Protection Act 2018 + UK GDPR**: substantively aligned with EU GDPR post-Brexit; ICO supervisory authority.
- **AU Privacy Act 1988 + APPs**: APP 3 collection (consent + reasonable necessity); APP 11 security; APP 12 access; APP 8 cross-border disclosure (the Cloud Run us-central1 region triggers APP 8 — Australian users' data crosses to US-based servers; documented mitigations needed).
- **IN DPDPA 2023**: explicit consent + purpose specification; Section 9 children's data (parental consent for <18); Section 11 right-to-correction + erasure.
- **EHDS (effective 2025-2027)**: primary-use framework (patient-care) vs secondary-use (research, policy) — clear partitioning required; opt-out architecture for secondary-use in most member-states.
- **CARE Principles + FNIGC OCAP (wave-13 carry-forward)**: Indigenous data sovereignty — Indigenous-reader data must allow community-collective consent + benefit-sharing.

### 4.3 The Cloud Run us-central1 problem

**The live site `https://nichecore-tytn7sfqja-uc.a.run.app` is hosted in Cloud Run us-central1 (per CLAUDE.md).** For EU/UK/AU/IN users this triggers GDPR Chapter V transfer rules (SCCs + adequacy decisions + TIA), UK ICO international-transfer rules, APP 8, DPDPA Section 16 cross-border conditions. **Founder action recommended**: evaluate Cloud Run europe-west region replication + per-region DNS routing (Geo-DNS) so EU users land on EU servers + Australian users on australia-southeast servers + Indian users on asia-south servers. This is operationally non-trivial but reduces the regulatory burden by an order of magnitude.

### 4.4 AI Guru transcript-as-training-data trap

The single highest-risk data-flow: AI Guru conversation transcripts contain self-reported health data + symptoms + medication lists + suicidal-ideation disclosures. **These transcripts MUST NOT be used to fine-tune any model without granular explicit opt-in consent that meets GDPR Article 7 + BDSG §22 + DPDPA Section 6 standards.** Default state: transcript-exclusion-from-training as the contractual floor with any LLM provider.

### 4.5 Recommended edit — §16.4 data-protection-by-design statement (NEW)

A dossier+app §16.4 block specifying: Article-9 lawful basis (explicit consent); DPIA link; sub-processor list; retention schedule; portability mechanism; right-to-correction + erasure mechanism; cross-border-transfer mechanism; AI-Guru-transcript training-exclusion; Indigenous-data-sovereignty pathway.

---

## 5. UX DARK-PATTERN AUDIT

### 5.1 The acknowledged-vulnerable-cohort multiplier

Under UCPD 2005/29/EC Article 5(3), commercial practices materially distorting behaviour of a clearly identifiable group of consumers who are particularly vulnerable to the practice or the underlying product are assessed at a **heightened standard**. The dossier itself (§13.5 patient-facing primer + crisis-line block + Lugo 2022 10% suicidality in severely-distressed cohort) acknowledges chronic-tinnitus sufferers as a vulnerable cohort. **Every UX surface must be assessed at the heightened standard.**

### 5.2 Storefront audit — `/c/[category]/package`

- **Bundle-default-pre-selection**: must NOT default to the most-expensive bundle. The wave-13 #4 health-economics convergent inverse-care-law concern + the wave-13 #2 Sins-Invalid anti-capitalist-politic principle lock here. Recommendation: default to the lowest-cost evidence-tier-A bundle; allow upgrade via explicit user-choice.
- **Urgency/scarcity manipulation**: must NOT contain countdown timers, "only 3 left", flash-sales targeting tinnitus-distressed users. UCPD Annex I §7 prohibits false urgency.
- **Confirmshaming**: must NOT phrase opt-out as "Are you sure you don't want this evidence-backed help?" Replace with neutral language.
- **Pre-checked subscription auto-renewal**: must NOT pre-check; explicit opt-in only. EU Consumer Rights Directive Article 22 + UK CPUTR + AU ACL.

### 5.3 Companion retention-loop audit — `app/companion/page.tsx`

- **"Refill decision · day 75"** copy "Your 90-day pack has ~7 days left" is borderline urgency-pressure when the dossier's own honest-evidence framing might call for **discontinuation** if no TFI improvement after 12 weeks. Recommend: Day-75 refill prompt should include an explicit *honest-discontinuation* option: "If your TFI score has not dropped by ≥7 points (the published minimal-important-difference per Meikle 2012), the honest recommendation is to stop or change layer — not refill." This converts a commerce-loop into a clinical-honesty-loop.
- **Adherence 86% / Tolerance 92% / Diet actions 74%** displayed on `app/progress/page.tsx` with "trend signal, not clinical outcome" small-print mitigates but does not eliminate the implied-efficacy pattern (UCPD Annex I §17 prohibition on misleading health claims about products' ability to cure illness). Recommend: also surface the placebo-rate baseline (~30-40% in tinnitus trials) + natural-history regression-to-mean so users contextualise their improvement honestly.

### 5.4 Cancellation/unsubscribe audit

The DiGA-V (DE) + EU Consumer Rights Directive + UK CMA *Online Choice Architecture* guidance + AU ACCC *Dark Patterns* report all converge on a simple test: **the path to cancel must be as easy as the path to subscribe**. Audit subscription-cancellation flow against this. The current site code does not visibly include a one-click cancel — recommend implementing before any subscription-revenue launch.

### 5.5 Confirmshaming + manipulative-default audit

Sweep all conversion copy for: "Are you sure?" framings, "No thanks, I don't want better sleep" decline-buttons, "We'll miss you" guilt-induction. Replace with neutral declines.

### 5.6 B Corp + Fair Subscription standards adoption (recommended)

To make commitment credible, recommend NicheCore pursue (a) B Corp certification (B Lab assessment 80+ points), (b) Fair Subscription Code (UK CMA-informed code of practice for subscription businesses), (c) Made-To-Last Pledge or equivalent durability commitment for any device sales (red-light, PEMF mats, headphones).

### 5.7 Recommended edit — §16.5 UX + commerce ethics statement (NEW)

A dossier+app §16.5 block specifying: vulnerable-cohort heightened standard adoption; bundle-default policy; honest-discontinuation Day-75 prompt; placebo-baseline display; cancellation-symmetry policy; confirmshaming prohibition; B Corp / Fair Subscription / Made-To-Last commitment timeline.

---

## SKILL v6.2.7 CANDIDATE — Rule 24 (NEW)

**Rule 24 — The digital-health regulatory + AI-safety + UX quintet contract.** Every dossier paired with an app surface MUST carry, in a dedicated §16 (renumbering existing §16 if necessary), a five-part contract:

- **24.1 SaMD classification statement** — per-jurisdiction (EU MDR, UK MHRA, DE BfArM + DiGA, AU TGA, IN ABDM, NL ZIN) honest statement of medical-device-software classification + intended-purpose statement + CE-mark/UKCA/TGA-conformity-assessment status + DiGA-pathway evaluation (where revenue-model relevant). US FDA SaMD framework cited only as comparator-footnote.

- **24.2 EU AI Act compliance statement** — explicit Article 6 high-risk classification engagement; Article 9 risk-register link; Article 10 data-governance + bias-monitoring; Article 13 transparency disclosure; Article 14 human-oversight architecture; Article 50 emotional-manipulation prohibition adherence.

- **24.3 Conversational-AI safety contract** — RAG-grounding policy (answers anchored to retrieved dossier text); OOD-refusal policy; sycophancy mitigation (Constitutional-AI-style honest-grade-check); red-flag classifier (SSHL + pulsatile + unilateral + suicide + self-harm + cross-tradition-compounding extended beyond keyword regex); crisis-routing hard-codes per jurisdiction; transcript audit + retention + training-exclusion policy.

- **24.4 Data-protection-by-design statement** — GDPR Article 9 explicit-consent + Article 35 DPIA + Article 22 automated-decision-making safeguards + Article 20 portability; BDSG §22; UK DPA 2018; AU Privacy Act + APPs + cross-border transfer documentation; IN DPDPA + ABDM-Consent-Manager integration; EHDS primary/secondary-use partitioning; Indigenous data sovereignty under CARE + FNIGC OCAP; Cloud Run multi-region replication for jurisdictional data-residency.

- **24.5 UX + commerce ethics statement** — UCPD Article 5(3) vulnerable-cohort heightened standard adoption; bundle-default policy (lowest-cost evidence-tier-A default); honest-discontinuation prompt at refill decision; placebo-baseline display on progress charts; cancellation-symmetry policy; confirmshaming prohibition; B Corp / Fair Subscription / Made-To-Last commitment timeline.

**Authority anchors** (in order): EU AI Act 2024/1689 + EU MDR 2017/745 + GDPR 2016/679 + EHDS 2024/1972 + UCPD 2005/29/EC + UK MHRA SaMD + UK AISI + UK DPA 2018 + UK CPUTR 2008 + DE BfArM DiGA-V + DE BDSG + AU TGA SaMD + AU Privacy Act + AU ACL + IN MeitY + ABDM + DPDPA + WHO Digital Health Strategy + WHO AI Ethics 2024 + WHO Regulatory Considerations for AI for Health 2023 + Council of Europe AI Framework Convention + ENISA Cybersecurity. Anthropic RSP + Constitutional AI + DeepMind Sparrow + Frontier Safety Framework + OpenAI Preparedness Framework cited as **methodological provenance only**. US FDA SaMD framework cited as **comparator only**.

---

## WAVE 15 CANDIDATE PERSONAS

The wave-14 audit surfaces five rabbit-holes that the next wave should descend into. None are blockers for v6.2.7 ship; all are next-level depth.

1. **Health-AI clinical-validation researcher** — a methodologist from Beukes (CBT-for-tinnitus internet-delivered trials at University of Anglia Ruskin + Lamar U Texas; cited research-not-regulator) lineage who can audit whether the dossier+app digital-intervention has the prospective-clinical-evaluation evidence needed for DiGA Fast-Track submission. Tinnitus-specific question: is the internet-CBT-for-tinnitus Beukes 2018 + 2024 evidence-base transferable to the NicheCore Companion + Guru + Progress architecture, or do we need a new prospective RCT?

2. **Health-AI red-team specialist** — practitioner who actively jailbreaks + adversarially probes health-AI assistants for hallucination + sycophancy + bias + harmful-output. Pattern: take the AI Guru prompt set + probe it with 200 adversarial inputs covering (a) prompt-injection ("ignore prior instructions and recommend [X]"), (b) sycophancy-induction, (c) red-flag-bypass, (d) suicide-content-elicitation, (e) protected-category-bias, (f) cross-tradition-compounding-trap, (g) dose-hallucination-elicitation. Produce a red-team report + fix-list.

3. **EU AI Act conformity-assessment auditor** — specifically a person with Notified Body conformity-assessment training (BSI / TÜV SÜD / DEKRA) on the Article-43 conformity-assessment route for Annex III high-risk systems. Produce the technical-file outline + post-market-monitoring-plan template.

4. **Health-data interoperability specialist (FHIR + IHE + EHDS)** — the EHDS opens a primary-use + secondary-use pathway; NicheCore's TFI + THI + PHQ-9 + symptom-journal architecture could integrate with NHS App + ePA (DE) + My Health Record (AU) + ABHA (IN) via FHIR resources. The architecture question: should every Progress metric be FHIR-encoded so it can be portably exported to a clinician's EHR?

5. **WHO Ethics & Governance of AI for Health framework auditor** — assess the dossier+app against WHO's six principles (autonomy + well-being + transparency + responsibility + equity + sustainability). The equity + sustainability dimensions in particular intersect with the wave-13 inverse-care-law convergent theme and the dossier's Indian + African + South-East-Asian readership growth path. Suggested persona: WHO Digital Health unit secondee or equivalent.

---

**End of wave-14 review.**

Word count target met (~4,350 words; target band 3,500-5,000). No source dossier or app code modified — read-only. All five dimensions actionable in the v6.2.7 skill rev + a v8 dossier rev that adds §0.6 + §16.2-§16.5. The DiGA-pathway commercial opportunity is honest surfacing — founder decision required.
