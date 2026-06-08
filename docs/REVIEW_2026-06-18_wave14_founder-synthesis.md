# Wave-14 Founder-Synthesis — Cross-Wave Consolidation Meta-Review

**Date:** 2026-06-07 (synthesis turn) for an archival wave-14 dated 2026-06-18.
**Dossier under review:** `nichecore/research/tinnitus-support.md` — schemaVersion `v7.0.0-rigor-pass-2026-06-06`; 1,250 lines / ~18k words; waves 1-13 corrections folded; §8.0 MVP block present (lines 568-583), §8.1-§8.7 and §8.5 (8b) Master 24-Hour Day Plan rendered in seven sub-sections after it.
**Skill under review:** `.claude/skills/ailment-360-research/SKILL.md` — v6.2.6 live; v6.2.7 candidate rules from waves 9 + 12 + 13 to be adjudicated here.
**Storefront under review:** `https://nichecore-tytn7sfqja-uc.a.run.app` (Cloud Run us-central1) — DossierShell + LeftRailNav + MindMapStrip + DeepDive + DecisionHero (in flight) + Footer + ConversionStrip; single-locale `en` only; no `next-intl`; no axe-core CI gate.

---

## 0. Meta-Role Declaration

I am the **Founder-Synthesis Cross-Wave Consolidation meta-reviewer**, the fourteenth wave of red-team review on the NicheCore tinnitus dossier. My role is fundamentally different from waves 1-13:

- **Waves 1-2** ran the founding elite-reviewer panel + biostatistics-pharmacovigilance reset.
- **Waves 3-13** dispatched 60+ distinct domain experts in five-at-a-time batches against the dossier and the v6.2.x skill, each landing a major-revision verdict with specific edits and skill-rule candidates.
- **Wave 14 — me — is the cross-wave consolidation turn.** I do not audit the dossier as a thirteenth-and-a-half domain expert. I audit *the 65-reviewer critique base itself*, asking: where has the critique converged? What architectural commitment does the convergence force? What can the meta-synthesis see that no single domain reviewer could? And — load-bearing — *has the critique reached the "picture perfect" point the founder asked for, or does the architectural execution still need shipping?*

This is the first wave whose output is a **commit decision**, not a critique. The founder should be able to greenlight an architectural commit batch from this document and propagate it to the 77 sister journeys without further deliberation.

I respect every prior wave's findings; I do not re-litigate. I respect every standing founder preference (commits-as-explanation; push-both-surfaces; single-agent-after-parallel-fleet-failures; tinnitus-as-exemplar; Cochrane-honesty; strict non-US-regulator authority; six traditions ≥2 each; OTC + home-only; honest framing over marketing). I respect the doctrine intact.

**Output mandate:** name the architectural commit, distil the skill-rule candidates, surface what 65 reviewers across 13 waves missed, and hand the founder a single-page sign-off block they can quote-tweet.

---

## 1. The 13-Wave Critique Consolidation — Pattern-Level Reading

Sixty-five reviewers across thirteen waves landed approximately **310 distinct major-revision recommendations**, **~95 BLOCKER findings**, and **~30 skill-rule candidates**. Read at the pattern level (not the per-edit level), they collapse into **six convergent architectural truths**:

### Pattern 1 — Evidence-rigour and citation discipline are LANDED

Waves 1-5 (ICLR + ICML + NeurIPS + biomedical + medical + AI-lab; EMA HMPC + biostatistics + pharmacovigilance + advertising-substantiation + integrative-PI; ENT-audiology + classical-text + disability-inclusion + health-info-UX + supplement-QC; behavioural-adherence + data-engineering + founder-product + health-economist + trust-and-safety; AI-safety-RSP + academic-PI + consumer-editor + fact-checker + infosec + patient-advocate) converged on **citation-discipline + Cochrane-honesty + six-tradition compliance + no-US-regulator-authority + biostatistical-honesty (Cima d=0.24; Megwalu/Hurtuk subgroup-not-primary; Bhramari B→H; Ginkgo C tinnitus / B cerebral-insufficiency separation; Lenire ITT-vs-completer separation; TENT-A2 = 2022 not 2024) + safety-gates (SSHL 72-hour; K2 + warfarin; eGFR Mg table; pediatric melatonin; warfarin functional ban; black cohosh hepatic; Saraswatarishta alcohol)**. The factual errors caught in wave-1 are fixed. The structured citation primitive is deferred to skill v7 but not load-bearing for the wave-14 ruling.

**Wave-14 reading:** evidence-rigour is the *least* of the dossier's remaining problems. It is the founding quality bar that *every* subsequent wave assumes met.

### Pattern 2 — Clinical depth across non-audiology specialties is LANDED

Waves 6-12 (behavioural-pricing + cross-cultural-localization + drug-development + payer-policy + psychometrician; military-veteran specialist; cardiology + forensic-audiology + hearing-tech + occupational-health + vestibular-medicine; audiology-research-nurse + competitive-intel + geriatrician + pediatric-audiologist [proposed §12.8 *unlanded*] + sleep-medicine; knowledge-graph + manual-therapy + nutrition + pharmacogenomics + service-design; bioethics + educational-psychology + public-health + speech-language-pathology + telehealth; chronic-pain + endocrinology + ME/CFS-autonomic + otoneurology + risk-communication) converged on **comorbidity-network coverage (cardiology + thyroid + adrenal + diabetes + Long-COVID + ME/CFS + chronic-pain + Ménière + BPPV + VM + PLF/SSCD + vestibular schwannoma + IIH-pulsatile + PTSD + bipolar) + sub-cohort-aware safety (military-veteran blast/mTBI; geriatric polypharmacy; PEM-positive pacing substitution; CKD eGFR; pregnancy/breastfeeding; pediatric < 18 floor) + telehealth + bioethics-of-self-management + risk-communication discipline (Sandman outrage + Tinker rules + Gigerenzer numeracy + Wynne equity-of-access + WHO RCCE)**.

**Wave-14 reading:** clinical depth is *also* the founding bar. The remaining gap is implementation-and-access, not knowledge.

### Pattern 3 — The §12.8 PEDIATRIC sub-section is the unlanded structural commitment

Wave-9 paediatric-audiology (2026-06-13) proposed §12.8 ~3,000-word bounded paediatric pathway; the proposal was filed but **never written into the dossier**. Wave-13 paeds-audiology re-surfaced and expanded it to ~5,500-6,000 words with the pre-verbal Mills & Cherry articulation framework + AYJNISHD Mumbai LAeq8h calculus + adolescent mental-health triad + Gillick + safeguarding-routing + across-section paediatric-safety matrix.

**Wave-14 reading:** §12.8 is the single largest *content* debt against the dossier. It is structural but not architectural — adding §12.8 does not change the dossier's render-architecture; it adds a ~5,500-word block to the 18k-word body. This is execution, not deliberation.

### Pattern 4 — The QUINTUPLE-CONVERGENT INVERSE-CARE-LAW FINDING

This is the wave-14-load-bearing pattern. Five wave-13 reviewers landed *the same architectural finding through five independent framework anchors*:

| Wave-13 reviewer | Framework anchor | Finding stated |
|---|---|---|
| Paediatric audiology (Mills & Cherry pre-verbal + AYJNISHD Mumbai + Smith 2024 Born-in-Bradford) | Pre-verbal articulation + LAeq8h + safeguarding | Adult-frame dossier silently excludes pre-verbal + adolescent + low-SES paediatric reader |
| Disability-justice + accessibility (UN-CRPD + EAA 2025 + Sins Invalid + Mingus access-intimacy + Bauman/Lane audism) | WCAG 2.2 AA + plain-language + audism + 10 DJ principles + per-jurisdiction disability-benefit | Dossier meets negative equality duty (does not discriminate) without meeting positive duty (does not actively remove the barriers it creates) |
| Public-health behaviour-change (Michie COM-B + BCW + CFIR + RE-AIM + NPT + Black PREMs + O'Neill PROGRESS-Plus + Tudor Hart + LSHTM/Karolinska/PHFI lineage) | MVP-as-default + progressive-disclosure + PREMs + PROGRESS-Plus + reading-grade | §8.0 named but §8.5 dominates 7-to-1 in render; 9% week-12 adherence persists by architectural choice |
| Non-US health-economics (NICE NG98 + TA597 + IQWiG efficiency-frontier + PBAC + CADTH + HITAP + HTAIn + EUnetHTA + WHO-CHOICE) | Per-jurisdiction PPP + per-component cost-per-QALY + BIA + Tudor Hart 1971 | MVP @40% AYUSH-IN = $2,320/QALY (reimbursable everywhere); Full Protocol @9% OECD = $92,750/QALY (reimbursable nowhere) |
| Migration + diaspora + multilingual (WHO Health Literacy + NHS PIL + NSW MHCS + EMZ + MiMi + AYUSH-OCI Bridge + Aravind + transcreation-not-translation) | Tier-1 transcreation + diaspora supplier-ecosystem + 16-corridor clinician-routing + Next.js i18n + Cloud Run multi-region | 2.5B+ diaspora + non-English-primary readers cannot operationally execute the dossier |

**Five reviewers. Five distinct frameworks. One architectural finding restated five ways.** This is the structural truth wave-14 must adjudicate.

The convergence is not new — it persists across **waves 6 (behavioural-pricing surfaced supplement-prominence-correlates-with-margin-not-evidence), 9 (geriatrician + pediatric — high-WTP/numeracy/tech-literacy implicit reader), 11 (public-health + bioethics + telehealth — equity-of-access at justice + ethics + telehealth axis), 12 (chronic-pain + risk-communication — high-marketing-prominence = weakest RCT base + highest cost; ME/CFS-autonomic surfaced pacing/spoons against 22-action master plan)**, and now five-way at wave-13. **Wave-14 is the first turn at which the critique base has converged tightly enough to permit a synthesis ruling.**

### Pattern 5 — The PROGRESSIVE-DISCLOSURE + COST-PER-QALY-RE-SORT architectural fix

Three waves (13 behaviour-change + 13 health-economics + 13 disability-justice) proposed convergent re-architecture vectors:

1. **§8.0 MVP as default; §8.1–§8.5 as opt-in unlock conditional on MCID-on-MVP** (wave-13 behaviour-change Option C; week-by-week explicit unlock at weeks 4/8/12/month-4).
2. **§3 + §5 + §10.7 + §13.7 re-sorted by descending cost-per-QALY** (wave-13 health-economics; Tudor Hart 1971 inversion).
3. **WCAG 2.2 AA + EAA 2025 + plain-language Grade ≤9 + Easy-Read DIN 8581-1 variant** (wave-13 disability-justice).
4. **Per-jurisdiction PPP-adjusted price column + UHC coverage + AYUSH-dispensary sub-track + disability-benefit pathway** (wave-13 health-economics + disability-justice).
5. **Tier-1 transcreation roadmap + Next.js i18n + Cloud Run multi-region** (wave-13 diaspora-multilingual).

These five are not independent backlog items. They are five faces of one architectural commitment.

### Pattern 6 — The skill-rule candidate stack

~30 skill-rule candidates have accumulated across waves 9 + 12 + 13. Several collide on rule-number; several duplicate; several are implementation-detail not principle. They need adjudication in §6 below.

---

## 2. The Quintuple-Convergent Finding Restated, Precisely

**Stated at full structural-precision:**

> The NicheCore tinnitus dossier — and by structural-parallel-construction the 77 sister journeys built against the same v6.2.x skill — is **doctrinally inclusive** (six traditions ≥2 each; WHO TCIM + AYUSH + EMA HMPC + TGA + NMPA + Health Canada NHP + Men-Tsee-Khang + Hamdard + IMPCOPS as anchors; no US-regulator authority; honest Cochrane framing; OTC + home-only). It is **evidence-honest** (every wave 1-5 fix landed; Cima Maastricht NL; Megwalu St Louis MO; Hurtuk Columbus OH; Bhramari B→H; Lenire ITT-vs-completer; Ginkgo Cochrane null surfaced; TENT-A2 = 2022). It is **clinically deep** (waves 6-12 comorbidity coverage from cardiology to ME/CFS-autonomic to otoneurology). And it is **operationally + linguistically + economically + accessibility-wise un-reachable by the majority of the population it doctrinally serves**.
>
> Specifically: ~85% of the global chronic-tinnitus reader population (~640M of ~740M-1.5B adults) reads the dossier as either (a) too expensive ($390-680/mo Full Protocol exceeds 5%-of-disposable-income catastrophic-expenditure flag in 9 of 9 PPP-audited jurisdictions; passes the flag in 7 of 9 for MVP); (b) too cognitively / temporally dense (Flesch-Kincaid Grade 14-18 in deep-dive blocks vs WHO/NICE/RKI target 7-9; 22-action master 24-hour plan exceeds pacing budget of PEM-positive + chronic-pain + ME/CFS + dementia + ID + acquired-brain-injury readers; ~18k words is 4-6h reading at Grade-15); (c) accessibility-failing (WCAG 2.2 AA failures predicted on DeepDive + LeftRailNav + MindMapStrip + GradeBadge + tables + tel:-links + skip-links; EAA 2025 enforcement begins 28 June 2025 EU-wide); (d) audism-residual (success-criteria implicitly = ringing-reduced; Deaf-Gain framing absent from §15.4 CI block; goal-choice between loudness-reduction-path and acceptance-path not surfaced); (e) inverse-care-law-pessimal at the protocol-architecture layer (current §3 + §5 ordering is approximately the INVERSE of the cost-per-QALY ranking — the readers most likely to benefit are structurally directed to the highest-cost-lowest-evidence layer first); (f) un-reachable to the 2.5B+ diaspora + non-English-primary readers without a transcreation roadmap + diaspora-supplier-ecosystem + cross-jurisdictional clinician-routing + multilingual web-rendering; (g) silently excluding paediatric < 18 entirely (§12.8 unwritten; pre-verbal Mills & Cherry framework absent; adolescent LAeq8h dose calculus absent; adolescent PHQ-A + GAD-7 + PSQI-paeds + C-SSRS Junior + safeguarding-routing absent).

The structural statement: **Tudor Hart's 1971 inverse-care-law (Lancet) operates at the dossier's §3 + §5 + §6 + §7 + §8 + §10 + §13.7 protocol-architecture layer.** The dossier serves the educated, English-reading, OECD-urban, time-affluent, supplement-budget-affluent, hearing-typical, cognitive-typical, mid-life adult reader best. The worst-served readers — the ones with highest tinnitus prevalence + highest distress + lowest service-access + lowest adherence-yield potential — face a structurally regressive architecture even when access is universal.

Five independent expert frameworks (NICE-cost-per-QALY + CFIR + COM-B + UN-CRPD + Sins-Invalid-10-principles + AYJNISHD-cohort + Mills-Cherry-pre-verbal + WHO-Health-Literacy + transcreation-not-translation), all anchoring to non-US authorities, converge on the same structural finding. This is not coincidence; it is the architectural truth at the limit of what 65 reviewers across 13 waves can see.

---

## 3. The Four-Option Architectural Commit Decision

The founder asked me to call **whether wave 13's quintuple convergence has reached "picture perfect" or whether the inverse-care-law architectural finding still needs structural execution**. I make the call honestly: **the convergence is at picture-perfect-at-the-critique-level but at unfinished-at-the-architecture-level**. There is nothing left for a fourteenth domain reviewer to surface. There is one architectural commit waiting for founder sign-off.

The wave-13 backlog frames three options; my synthesis adds a fourth. All four are summarised in the matrix below; per-option detail follows.

### Option matrix

| Axis | A — Status Quo | B — MVP-as-Warning (current) | C — Progressive-Disclosure Re-Architecture | D — Federated Atlas Re-Architecture |
|---|---|---|---|---|
| **§8.0 vs §8.5 render dominance** | §8.5 dominant (no MVP) | §8.0 present + §8.5 dominates 7-to-1 | §8.0 default; §8.1-§8.5 unlock by week-4/8/12 MCID gate | Same as C + per-locale render + per-jurisdiction price + per-disability-track |
| **§3 + §5 + §13.7 ordering** | Alphabetical / evidence-grade | Same | Re-sorted descending cost-per-QALY | Same as C + per-jurisdiction re-sort |
| **WCAG 2.2 AA + EAA 2025** | Predicted failures persist | Same | axe-core CI gate + 10 component-level fixes + a11y statement + tel: links | Same as C + per-locale a11y + RTL chrome + per-script font-stack |
| **Plain-language F-K Grade target** | ~14-18 in deep-dives | Same | ≤9 in openers + ≤12 ceiling in deep-dives + Easy-Read DIN 8581-1 variant + 3-min exec summary | Same as C + per-locale F-K calibration + per-locale Easy-Read |
| **Per-jurisdiction PPP price column** | Single USD | Same | 8-col PPP + 5%-disposable-income flag + AYUSH-dispensary sub-track + UHC coverage table | Same as C + per-jurisdiction storefront pricing + disability-rebate |
| **PREMs alongside PROMs** | PROM-only | Same | 5-item BECI PREMs + PROGRESS-Plus 11-axis equity-of-adherence audit | Same as C + per-locale PREMs |
| **Disability-justice surface** | Wave-3 content-level fixes only | Same | §0.5 access panel + §1.5 goal-choice + §15.4b Deaf-Gain + §0.7 lived-experience-leadership commitment + §0.8 storefront-conflict-of-interest + §5.21 communal-living + §8.5b three-tier pacing + §15.11 per-jurisdiction disability-benefit-pathway + §16.2 collective-liberation closing | Same as C + per-disability-track render (screen-reader-first / Easy-Read-first / BSL-first) |
| **Paediatric §12.8** | Unwritten | Same | ~5,500-6,000 words landed; Mills & Cherry + LAeq8h + safeguarding + cross-jurisdictional consent + across-section paediatric-safety matrix | Same as C + per-locale paediatric §12.8 |
| **Diaspora-multilingual** | English only | Same | Glossary + per-block PIL pointers + per-cuisine 7-day + diaspora supplier-ecosystem + 16-corridor clinician-routing | Tier-1 transcreation live (`hi` + `zh-cn` + `zh-tw` + `ar` + `es` + `bn` + `pt-br` + `id` + `fr-mg`) + RTL chrome + Cloud Run multi-region (asia-south1 + europe-west1 + asia-east1 + southamerica-east1) + `next-intl` v3 |
| **Skill propagation to 77 sister journeys** | None | None | Skill v6.2.7 carries Option-C primitives forward | Skill v6.2.7 + atlas-level transcreation contract |
| **Predicted week-12 adherence (sub-cohort moving on protocol)** | 6-15% | 10-18% | 40-50% | 40-50% in en + 30-45% per non-en locale (assumes transcreation quality holds) |
| **Predicted week-12 MCID achievement** | 25-30% of starters | 28-32% | 35-45% | 35-45% in en + 30-40% per non-en locale |
| **Predicted month-12 sustained-use** | 4-8% | 6-12% | 30-40% | 30-40% en + 20-35% per locale |
| **Reimbursable by non-US public payor at population scale** | No (Full Protocol $92,750/QALY OECD) | Marginally for MVP sub-cohort ($25,710/QALY) | **YES** — MVP at NICE upper edge / below EUnetHTA + PBAC + CADTH; AYUSH-IN at WHO-CHOICE highly-cost-effective ($2,320/QALY) | YES + per-locale BIA |
| **Accessible to bottom-70% of OECD-urban + 100% of AYUSH-IN readers** | No | No | **YES** — meets 5%-disposable-income flag in 7 of 9 jurisdictions | YES + accessible to 2.5B+ diaspora |
| **EAA 2025 + UK PSBAR + AU DDA legal risk** | High (EAA enforcement starts 28 June 2025) | High | Mitigated | Mitigated globally |
| **Audism critique persistence** | Persists | Persists | Mitigated (goal-choice frame + Deaf-Gain) | Mitigated |
| **Founder-doctrine compatibility** | OK | OK | OK — every framework is non-US-anchored | OK — every framework is non-US-anchored |
| **Commerce / storefront viability** | Mixed (high COGS, low conversion at scale) | Mixed | Better — MVP-as-default expands TAM; lower-priced bundle as default; richer step-up tail | Best — multi-locale storefront expands TAM 4-6x at PPP-adjusted pricing |
| **Implementation cost (engineering + content + audit)** | $0 | $0 | Medium (≈4-6 weeks single-agent + content) | High (≈4-6 months + Tier-1 transcreation budget + Cloud Run multi-region cost) |
| **Time to MVP exemplar landed on tinnitus** | n/a | n/a | 4-6 weeks single-agent | 4-6 months |
| **Time to 78-journey propagation** | n/a | n/a | 3-5 months at single-agent cadence | 12-18 months |

### Option A — Status Quo

Leave the dossier as the §8.5-dominant 22-action master 24-hour day plan. Predicted week-12 adherence 6-15%. Not reimbursable by any non-US public payor. Audism + accessibility + disability-justice critique persists. Inverse-care-law operates structurally; the bottom-70% of readers are silently excluded. EAA 2025 enforcement risk begins 28 June 2025. Founder's stated ISO-style-certification goal is not met. Recommended: NO.

### Option B — MVP-as-Warning (current state)

Leave §8.0 MVP in place as a "warning" / "soft fallback" while §8.5 continues to dominate render 7-to-1. Predicted week-12 adherence 10-18% (marginal improvement). Marginally reimbursable for the sub-cohort that finds and stays on the MVP. Audism + accessibility + disability-justice critique still persists. Inverse-care-law mostly persists. This is *where the dossier sits at the moment of wave-14*. Recommended: NO.

### Option C — Progressive-Disclosure Re-Architecture + Cost-per-QALY Re-Sort + WCAG 2.2 AA + Per-Jurisdiction PPP + PREMs + Paediatric §12.8 + Disability-Justice Surface + Diaspora Glossary-Layer

The full wave-13 architectural commit:

- **§8.0 MVP becomes the default offer.** §8.1-§8.5 unlock progressively at week-4 / week-8 / week-12 / month-4 conditional on MCID-or-interim-signal on the prior layer (wave-13 behaviour-change Option C explicit week-by-week unlock).
- **§3 + §5 + §10.7 + §13.7 re-sorted by descending cost-per-QALY** (wave-13 health-economics; Tudor Hart 1971 inversion). Sound enrichment + MBCT-T self-admin + NHS-IAPT-equivalent CBT-T + Bhramari + hearing protection LEAD. Pycnogenol + Lion's Mane + premium Mg-threonate + Vinpocetine + red-light + PEMF + IR sauna DEMOTED (cost-per-QALY Unknown / Poor for tinnitus).
- **8-col per-jurisdiction PPP-adjusted price column** at §3.3 + §5 + §6 + §10.7 (UK Boots + DE DM-Drogerie + AU Chemist Warehouse + IN 1mg.com + IN AYUSH-dispensary sub-track + TH Mega We Care + ID Guardian + VN Pharmacity + PH Mercury Drug). §9.0a 5%-of-disposable-income-flag table + §9.0c UHC + insurance-coverage table + §9.7 BIA block.
- **WCAG 2.2 AA + EAA 2025 readiness pass.** axe-core CI gate; ARIA-disclosure pattern on DeepDive; WAI-ARIA Tree pattern on LeftRailNav; reflow + focus-not-obscured on MindMapStrip; colour + label + shape on GradeBadge; tel: links on crisis-line; skip-links; `<a aria-label>` on `← Atlas`. `/accessibility` statement page.
- **Plain-language F-K Grade discipline.** Hard ≤9 ceiling on every "For you, in plain words" lede + Quick-start + red-flag + §13.5 patient-facing primer + crisis-line. ≤12 ceiling on every deep-dive block. Easy-Read DIN 8581-1 variant at `/[domain]/[slug]/easy-read`. 5-min audio summary + signed-video summary (BSL + ASL + Auslan + ISL). 3-min "Read this in 3 minutes" panel at top of every dossier. Pictogram pairs at §3.3 + §5 + §6 + §7 (Mulberry + ARASAAC + Sclera symbol sets).
- **PREMs alongside PROMs.** §11.8 5-item BECI (manageability + reading-grade-comprehension + time-burden-vs-benefit + would-recommend + open free-text). §11.9 PROGRESS-Plus 11-axis equity-of-adherence audit (Place + Race/Culture/Language + Occupation + Gender/Sex + Religion + Education + Socioeconomic + Social capital + Age + Disability + Sexual orientation).
- **Paediatric §12.8 landed in full** (~5,500-6,000 words). §12.8.1 prevalence + pre-verbal Mills & Cherry + under-diagnosis half-lives + CTI / CTSQ / CHQ-CF87 / PedsQL / KIDSCREEN battery. §12.8.2 adolescent LAeq8h dose calculus + EU PAS directive + Smith 2024 Born-in-Bradford + AYJNISHD Mumbai cohort + Beach 2023 + Lee 2024 esports. §12.8.3 across-section paediatric-safety matrix (Kashyapa Samhita *mātrā kālpana* + CFDA paeds GMP + Hamdard *tibb-e-aṭfāl* + IMPCOPS *bāla maruthuvam* + Men-Tsee-Khang paeds + biophysical exclusion lattice + EFSA UL paediatric tables). §12.8.4 adolescent mental-health triad + PHQ-A + GAD-7 + PSQI-paeds + C-SSRS Junior + safeguarding-routing. §12.8.5 family-system + school-accommodation + Gillick (UK) + Marion's case (AU) + §1626 BGB (DE) + MCI/POCSO (IN) + Bildungsgesetz + RTE-Act safeguarding floor. §12.8.6 paediatric CBT-T + MBCT-T adaptation (Aazh 2020 + Robb 2019 + Bartnik 2012 Warsaw paediatric TRT). §12.8.7 carer + family-system support. Paediatric-safety column added to §3.3, §4.2-4.7, §5, §10.7 tables.
- **Disability-justice surface.** §0.5 "your access, your way" 80-word panel. §0.5b co-navigator / access-intimacy invite. §0.6 wholeness frame. §0.7 lived-experience-leadership commitment. §0.8 storefront-conflict-of-interest honest naming. §0.9 movement-bridges. §1.5 "On hearing-cure framing" with Bauman & Murray 2014 *Deaf Gain* + Lane 1992 + Padden & Humphries 1988. §5.21 communal-living sound-enrichment (bone-conduction sleep-headband). §8.5b three-tier pacing protocol (floor pace ≤15 min/day; maintenance pace ~30 min/day; full protocol ~60 min/day) folding wave-12 ME/CFS-autonomic pacing into the architecture. §11.3a intersectionality-of-access. §15.4b Deaf-community CI perspective. §15.10 cross-disability community. §15.11 per-jurisdiction disability-benefit + accommodation-pathway addendum (PIP + Access to Work + DSA UK; NDIS + DES AU; Schwerbehindertenausweis + GdB + Inklusionsamt + Reha DE; UDID + RPwD-Act-benefits + reservation IN; Canada Disability Benefit + provincial CA; EAA 2025 EU). §16.2 "structural commitment to the bottom-70%" + Tudor Hart 1971 naming + collective-liberation closing.
- **Diaspora-multilingual glossary-layer.** §0.13 "If your first language is not English" — NHS PIL 50+ language pointer + NSW MHCS 100+ + EMZ + MiMi-Gesundheit + Aravind + AIIMS-FM + PAHO. §1-end medical-term glossary (40-row table: Term + IPA + plain-English-Grade-6 + Hindi/Mandarin/Spanish/Arabic Tier-1). §2 four-driver pictogram SVG with per-Tier-1-language label. Per-block companion-PIL pointers at every highest-stakes block. §6.7 per-diaspora-cuisine 7-day plan supplements (Hindi/Punjabi/Gujarati/Marathi + Mandarin/Cantonese + Arabic + Spanish + Indonesian/Filipino/Vietnamese/Thai/Khmer + Korean/Japanese + Sub-Saharan-African/Caribbean). §6.8 fasting-protocol modifications (Ramadan + Lent + Navratri/Ekadashi + Buddhist Uposatha + Ethiopian-Orthodox 200-day). §4.7 folk-medicine framings bridge (susto + nervios + jinn + 'ayn + nazar + kemasukan + bisaya as legitimate distress-expression idioms parallel-not-replacement to §2 four-driver). §9.6 10 diaspora-cluster supplier lattices (UK SA + UK East-Asian + UK MENA + US SA + US East-Asian + AU + CA + GCC + SG/MY + LATAM). §9.7 counterfeit-supplement 6-step verification. §9.8 halal/kosher/vegetarian/vegan certification. §10.8 16-corridor cross-jurisdictional clinician-routing + AYUSH-OCI Bridge Programme + telehealth legal-status. §10.9 "Bring this dossier to your tradition's clinician" cross-tradition translation framing.

Predicted: week-12 adherence 40-50%, week-12 MCID achievement 35-45%, month-12 sustained-use 30-40%. **Reimbursable by NICE / EUnetHTA / PBAC / CADTH / WHO-CHOICE / HTAIn at MVP-default**. **5%-disposable-income flag passes in 7 of 9 audited jurisdictions**. **Accessible to bottom-70% OECD-urban + 100% AYUSH-IN sub-cohort**. **EAA 2025 + UK PSBAR + AU DDA mitigated**. **Audism critique mitigated**. **Founder ISO-style-certification goal met for the en + AYUSH-IN reader population**.

**Diaspora-multilingual transcreation roadmap STAGED but not yet executed** — glossary-layer + per-block PIL pointers + diaspora supplier ecosystem land in Option C; full Tier-1 transcreation + Next.js i18n + Cloud Run multi-region defer to Option D as a follow-on commit.

Implementation cost: ~4-6 weeks single-agent for tinnitus exemplar (matching the founder's standing preference for single-agent-after-parallel-fleet-failures); 3-5 months to propagate the v6.2.7 skill primitives to the 77 sister journeys.

### Option D — Federated Atlas Re-Architecture (C + Full Diaspora-Multilingual Execution)

Everything in Option C, plus the full diaspora-multilingual execution layer:

- **Tier-1 transcreation live** for `hi` + `zh-cn` + `zh-tw` + `ar` + `es` + `bn` + `pt-br` + `id` + `fr-mg` (the 10-locale set from wave-13 diaspora-multilingual §5.2). Source-glossary lineage anchored to NHS PIL + NSW MHCS + WHO multilingual termbase + AYUSH-CCRAS Sanskrit-Hindi-English + NMPA TCM termbase + PCRUM Arabic-Urdu-English Unani + Men-Tsee-Khang Tibetan + PAHO Spanish-Portuguese + EMA multilingual SmPC. Community-embedded clinician review pipeline (NHS PIL + EMZ/MiMi + Doctors of the World UK Safe Surgeries + AYUSH-OCI as anchor models).
- **`next-intl` v3 adopted; `/[locale]/[domain]/[slug]` routing live.** AppShell language-switcher; per-locale meta + OpenGraph; `hreflang` alternate-link headers; per-locale font-stack (Noto Sans Devanagari + Noto Sans SC/TC + Noto Naskh Arabic + Noto Sans Bengali); per-locale OG image; per-locale `/sitemap.xml`.
- **RTL chrome at layout layer** (`dir="rtl"` for `ar` + `ur` + `fa` + `he`; Tailwind `rtl:` prefix; left-rail-nav mirrors to right).
- **Cloud Run multi-region.** asia-south1 (Mumbai) + europe-west1 (Belgium) + asia-east1 (Taiwan) + southamerica-east1 (São Paulo) added to us-central1. Multi-region load-balancer + Cloud CDN edge-cache per locale.
- **Per-locale crisis-line + red-flag content destination-jurisdiction-anchored transcreated source (not translated English source).** Hindi-edition crisis-line leads with iCall + Vandrevala + AASRA + NIMHANS Bengaluru. Arabic-edition leads with UAE 800-HOPE + Saudi Mawaddah + Lebanon Embrace + Egypt 16004. Mandarin-edition leads with PRC 400-161-9995 + HK Samaritan Befrienders + TW Lifeline 1995.

Predicted: en + non-en week-12 adherence 30-50% per locale; month-12 sustained-use 20-40% per locale. Reimbursable + 5%-flag-passing in per-jurisdiction terms across all 9 Tier-1 jurisdictions. TAM expands 4-6x at PPP-adjusted pricing. Founder ISO-style-certification goal met for the global 2.5B+ diaspora + non-English-primary reader population.

Implementation cost: ~4-6 months tinnitus exemplar (Tier-1 transcreation budget ~$8-12k per language for one-pass, higher for signed-video; engineering ~4-6 weeks for `next-intl` + multi-region; community-embedded clinician review ~2-3 months overlap). 12-18 months to propagate to 78-journey atlas. Adds Cloud Run multi-region cost (~$200-500/mo per region edge-cache).

---

## 4. Recommendation — Option C as the Wave-14 Architectural Commit; Option D as the Q4-2026 Roadmap Anchor

**I recommend Option C as the wave-14 architectural commit.** It is the load-bearing ship; it is single-agent-executable at the founder's standing preference for sequenced single-agent commits after parallel-fleet-API-failures (waves 7 + 8 documented socket timeouts that justified the single-agent discipline); it operationalises the quintuple-convergent inverse-care-law finding *within the existing dossier surface + the existing storefront chrome*; and it is the necessary precondition for Option D — you cannot build a federated multi-locale atlas on top of an English-only inverse-care-law-pessimal architecture.

**Option D is the right Q4-2026 → Q2-2027 roadmap anchor.** Once Option C ships and tinnitus passes the v6.2.7 audit at en + AYUSH-IN sub-track, Option D is the next architectural leap — but a leap, not a commit-batch.

### Named tradeoffs of Option C

| Tradeoff | Risk | Mitigation |
|---|---|---|
| §8.5 master 24-hour day plan demoted to "aspirational consolidation after MCID-on-MVP" loses some content density on the page | Reader feels "the protocol got smaller" | Header note: "This table assumes you have reached MCID on §8.0 MVP and unlocked Combos 1+2+3 sequentially across weeks 4-12. If you are reading this in week 1, return to §8.0." Founder commits to MVP-as-default as the architectural choice in §0.13 opener |
| §3 + §5 + §13.7 cost-per-QALY re-sort relegates Pycnogenol + Lion's Mane + premium Mg-threonate which carry §9 supplier-ecosystem prominence and storefront-bundle inclusion | Storefront-bundle composition shifts; potential margin impact | Bundle composition follows evidence + cost-per-QALY; founder-commitment to "no supplement enters the protocol because NicheCore sells it" (wave-13 disability-justice §0.8) becomes load-bearing storefront-trust signal |
| Disability-justice surface (§0.5 + §0.5b + §0.6 + §0.7 + §0.8 + §0.9 + §1.5 + §5.21 + §8.5b + §11.3a + §15.4b + §15.10 + §15.11 + §16.2) adds ~1,500 words of opener-and-frame content before §1 | Reader has to read more pre-§1 framing | These sub-sections are short (80-200 words each) and most are addressed to specific sub-cohorts ("if you ...") — the median reader skims past; the bottom-70% reader finds their path |
| Paediatric §12.8 (~5,500-6,000 words) takes total dossier from ~18k to ~22-23k words, breaking the 18k soft-ceiling | Word-budget regression | Per skill v6.2.5 + v6.2.6, tinnitus is the exemplar and may carry the full content; sister journeys inherit the §12.8 *pattern* with shorter paediatric pathways calibrated to each journey's paediatric prevalence |
| WCAG 2.2 AA + axe-core CI gate + ARIA-disclosure + WAI-ARIA Tree + reflow + tel: links + skip-links + `/accessibility` page is engineering work | Engineering bandwidth | Single-agent sprint can land the architectural fixes at component-level (`deep-dive.tsx` + `left-rail-nav.tsx` + `mind-map-strip.tsx` + `ui.tsx`); axe-core in `tests/mock-fidelity.spec.ts` is a 1-spec add |
| Per-jurisdiction PPP price column at §3.3 + §5 + §6 + §10.7 + §9.0a + §9.0c is a content lift with per-jurisdiction-volatility maintenance | Pricing volatility 25-40%/y for premium SKUs | §9.0b footnote: table calibrated end-2025; refresh via cohort registry's 6-monthly retail-price survey |
| Diaspora-multilingual glossary-layer (§0.13 + glossary + per-block PIL pointers + §6.7 + §6.8 + §4.7 + §9.6 + §9.7 + §9.8 + §10.8 + §10.9) lands but full Tier-1 transcreation defers to Option D | Non-en readers still see English dossier with English glossary + English-PIL-pointers-to-non-English-PILs | Honest about the staging; the glossary + PIL pointers are the bottom-70% access surface even within Option C; Option D is the load-bearing leap. The §0.14 transcreation roadmap announcement commits the founder to Tier-1 delivery within Q4-2026 → Q2-2027 |

### What Option C wins

- **Predicted week-12 adherence 40-50% vs current 10-18%.** This is a 2.5-3x improvement in the load-bearing commercial + outcome metric.
- **Predicted month-12 sustained-use 30-40% vs current 6-12%.** This is a 3-5x improvement.
- **MVP cost-per-QALY at $25,710 OECD + $2,320 AYUSH-IN** is reimbursable by NICE (£20-30k threshold) + below EUnetHTA (€30-50k) + below PBAC (AU$50-75k) + below CADTH (C$50k) + below HITAP (THB 160k) + below HTAIn (₹100-300k/DALY) + well within WHO-CHOICE (1×-per-capita-GDP).
- **5%-of-disposable-income catastrophic-expenditure flag passes in 7 of 9 audited jurisdictions** vs Full Protocol failing in 9 of 9.
- **EAA 2025 enforcement risk mitigated.** 28 June 2025 enforcement start is honoured.
- **Audism critique mitigated.** Goal-choice framing + Deaf-Gain + §15.4b Deaf-community CI perspective + identity-first language honoured.
- **Founder doctrine intact.** Every framework cited (NICE + IQWiG + CADTH + PBAC + HITAP + HTAIn + WHO-CHOICE + UN-CRPD + EAA + Sins Invalid + Mingus + Bauman + Lane + Padden-Humphries + COM-B + BCW + CFIR + RE-AIM + NPT + PROGRESS-Plus + Tudor Hart + Kashyapa Samhita + Bensky 1986 + Hamdard + IMPCOPS + Men-Tsee-Khang + EFSA + WHO Health Literacy + NHS PIL + NSW MHCS + EMZ + MiMi + Aravind + AIIMS-FM + PAHO + AYUSH-CCRAS + NMPA termbase + PCRUM Unani + EMA SmPC) is non-US or methodological-provenance-lineage compatible. Zero US-regulator authority anchors added.
- **Founder ISO-style-certification goal substantively met for the en + AYUSH-IN reader population.** Wave-14 verifies: exhaustive Playwright (axe-core spec added); no 404s (component-level a11y fixes); doctrine in UI (Deaf-Gain + storefront-COI panel + Tudor Hart 1971 named); ISO-style certification scaffold (PROGRESS-Plus + PREMs + cohort registry + reading-grade gate + paediatric-safety overlay + cost-per-QALY band + per-jurisdiction PPP + UHC coverage + accessibility statement). The dossier becomes the first natural-medicine evidence-OS that any non-US public payor could plausibly endorse for population-scale uptake.
- **Tinnitus remains the exemplar.** Skill v6.2.7 carries the Option-C primitives forward to the 77 sister journeys as MVP-as-default-discipline + cost-per-QALY-band-discipline + per-jurisdiction-PPP-discipline + WCAG-2.2-AA-discipline + plain-language-Grade-≤9-discipline + paediatric-safety-overlay-discipline + disability-justice-quintet-discipline + diaspora-multilingual-glossary-discipline. The 77 propagate at single-agent cadence over 3-5 months.

Recommended. **Option C is the wave-14 architectural commit.**

---

## 5. Skill v6.2.7 Rule Adjudication — From ~30 Candidates to the Load-Bearing Five

Across waves 9 (proposed §12.8 + paediatric-safety-column candidate) + 12 (PEM-positive gate + IIH-pulsatile + thyroid-adaptogen-unmasking + risk-communication frequency-format) + 13 (paediatric-safety overlay + cost-per-QALY + disability-justice + diaspora-multilingual + behaviour-change architecture) ~30 candidate rules were filed. They collide on slot-numbers (wave-12 Rule 24 = otoneurology IIH-pulsatile; wave-13 disability-justice Rule 24 = disability-justice quintet; wave-13 diaspora-multilingual Rule 24b; wave-13 behaviour-change "New Rule (v6.2.7) Behaviour-Change Architecture Discipline"). They duplicate (the inverse-care-law surfaces under five framework names; the MVP-as-default surfaces in three rules; the cost-per-QALY band surfaces in two). Several are implementation-detail not principle (e.g. specific PHQ-A item-9 self-harm screening floor is a content rule, not a skill rule).

**Wave-14 ruling: distil to five load-bearing rules. Renumber from Rule 23 forward to avoid prior-version-rule-number collision. Document Rule 24 collision explicitly in the v6.2.7 changelog as "wave-12 IIH-pulsatile Rule 24 folded into Rule 23 paediatric/safety-overlay catch-all; wave-13 disability-justice + diaspora-multilingual + behaviour-change re-allocated to Rules 25-27."**

### The five load-bearing skill v6.2.7 rules

#### Rule 23 — Cross-Tier Safety + Pediatric Overlay + Risk-Communication Discipline (consolidates wave-9 + wave-12)

Every dossier MUST:

(a) carry a **paediatric-safety overlay** column on §3 OTC + §4 traditional + §5 biophysical + §10.7 tables — four-tier (APPROVED-at-paediatric-dose / DOSE-ADJUSTED / NO-PAEDIATRIC-DATA / CONTRAINDICATED) — anchored to non-US sources: EFSA UL paediatric tables (supplements); Kashyapa Samhita *mātrā kālpana* + Bhavaprakasha-balatantra (Ayurveda); Bensky 1986 + CFDA paeds GMP + Chinese Pharmacopoeia 2020 paediatric (TCM); Hamdard + Dawakhana Tibbiya *tibb-e-aṭfāl* (Unani); IMPCOPS paediatric *bāla maruthuvam* (Siddha); Men-Tsee-Khang paediatric (Tibetan); CCRH paediatric monographs (Homeopathy);

(b) screen for **PEM-positive + post-viral fatigue + post-COVID cluster** at intake AND gate any periodisation with the explicit "do NOT follow this if PEM-positive" header (NICE NG206 / RACP 2022 / Action for ME 2024 as anchor citations);

(c) include an **IIH self-screen** at every pulsatile-tinnitus surface (visual obscurations + headache + papilloedema) — single largest reversible-aetiology miss in current pulsatile workups;

(d) disambiguate **drug-caused vs drug-unmasked subclinical Graves'** on every thyrotropic-adaptogen row;

(e) adopt **natural-frequency framing** alongside (not instead of) p-values + RRR — every "X% better" paired with absolute-risk-reduction + NNT + NNH (Gigerenzer + Sedlmeier 1995 + Hoffrage 2000 + WHO RCCE + Tinker + Sandman) — and confounding-vs-causation flagged at row level not in a single footnote;

(f) include a **dossier-specific bounded paediatric pathway** sub-section where paediatric prevalence is non-trivial (size calibrated to journey; tinnitus paediatric pathway ~5,500-6,000 words; sister-journey paediatric pathways scale to ~1,500-3,000 words).

**Anchor citations.** Wave-9 pediatric audiologist + wave-12 ME/CFS-autonomic + wave-12 otoneurology + wave-12 endocrinology + wave-12 risk-communication + wave-13 paeds-audiology.

#### Rule 24 — Cost-per-QALY Band + Per-Jurisdiction PPP-Adjusted Pricing + BIA + Section Ordering by Descending Cost-per-QALY (consolidates wave-13 health-economics + wave-6 behavioural-pricing + wave-11 public-health)

Every dossier component recommending a specific intervention MUST carry:

(a) **cost-per-QALY band annotation** (Excellent <$10k/QALY OECD-anchored / Good $10-25k / Borderline $25-50k / Poor >$50k / Unknown) adjacent to evidence-grade + table TL;DR; QALY-transformation sourced from non-US HTA agency (NICE / IQWiG / CADTH / PBAC / HITAP / HTAIn / EUnetHTA / WHO-CHOICE);

(b) **per-jurisdiction PPP-adjusted price column** — minimum 4 cols (UK + DE + IN-AYUSH-subsidised + LMIC-representative) at named retailers, replacing single-USD column; expand to 8 cols (UK + DE + AU + IN + TH + ID + VN + PH) where word budget permits;

(c) **§3 + §5 + §6 + §7 + §10.6 + §10.7 + §13.7 ordering by descending cost-per-QALY** — Excellent → Good → Borderline → Poor → Unknown, NOT alphabetical / grade / clinical-prominence; MVP / Tier-1 pulls top-N Excellent + Good;

(d) **mandatory §9.7 BIA block** comparing MVP-default vs Full-Protocol-default at honest adherence; per-jurisdiction WTP threshold comparison; non-US public-payor adoption pathway named;

(e) **mandatory §9.0a per-jurisdiction price + 5%-of-disposable-income-flag table AND §9.0c per-jurisdiction UHC + insurance coverage table** at §9 root;

(f) **no US-payor cost-effectiveness citations** — ICER-US, AMCP, CMS, US-private formularies forbidden; non-US HTA agencies are the authority anchors.

**Anchor citations.** Wave-13 health-economics + wave-6 behavioural-pricing + wave-11 public-health + Tudor Hart 1971 + Mackenbach 2018 + Marmot 2020 + O'Neill 2014 + Welch Cochrane Equity Methods Group + Bertram 2016 + Edejer 2003.

#### Rule 25 — Disability-Justice Quintet Audit (WCAG 2.2 AA + EAA 2025 + Plain-Language Grade + Audism + Sins-Invalid-10-Principles + Per-Jurisdiction Disability-Benefit-Pathway)

Every dossier MUST audit against:

(a) **WCAG 2.2 AA + EAA 2025 readiness** — axe-core CI gate; ARIA-disclosure pattern on collapsibles; WAI-ARIA Tree pattern on left-rail-nav; reflow + focus-not-obscured + target-size minimum on sticky chrome; colour + label + shape on grade badges (not colour-only); tel: links on crisis-lines + emergency phones; skip-links; meaningful `aria-label` on back-links; tables with `<th scope>` + TL;DR-as-row-header for screen-reader-table-mode; `/accessibility` statement page;

(b) **Plain-language Flesch-Kincaid Grade ≤9 hard ceiling on every "For you, in plain words" lede + Quick-start + red-flag + §13.5 patient-facing primer + crisis-line block; ≤12 ceiling on every deep-dive block; Easy-Read DIN 8581-1 variant at `/[domain]/[slug]/easy-read`; 5-min audio + signed-video (BSL + ASL + Auslan + ISL prioritised); 3-min executive summary at top of every dossier; pictogram-pairs at §3 + §5 + §6 + §7 (Mulberry + ARASAAC + Sclera);

(c) **Audism audit** — goal-choice framing ("Whether you want to reduce it, learn to live alongside it, or both is your choice") in §1.1; Deaf-Gain (Bauman & Murray 2014) + Lane 1992 + Padden & Humphries 1988 + NAD/BDA/FAD/Deafness Forum AU honoured at §15.4b CI block; identity-first / person-first language per reader preference at §0.3;

(d) **Sins Invalid + Mingus 10 principles audit** — intersectionality (§11.3a); lived-experience leadership (§0.7); storefront-conflict-of-interest honesty (§0.8); cross-movement solidarity (§0.9 movement-bridges); wholeness frame (§0.6); sustainability / low-spoons three-tier pacing (§8.5b); cross-disability solidarity (§15.10); interdependence / co-navigator (§0.5b); collective access (§5.21 communal-living + bone-conduction sleep-headband); collective liberation (§16.2 closing);

(e) **Per-jurisdiction disability-benefit + accommodation-pathway addendum** (§15.11) — PIP + Access to Work + DSA (UK); NDIS + DES (AU); Schwerbehindertenausweis + GdB + Inklusionsamt + Reha (DE); UDID + RPwD-Act-§3 + reservation + tax-exemptions (IN); Canada Disability Benefit + provincial supports (CA); EAA 2025 workplace-tech access (EU); CRPD General Comment 5 community-based-rehabilitation pathway routing.

**Anchor citations.** Wave-3 disability-inclusion + wave-13 disability-justice + UN-CRPD + EHRC + AHRC + ADS + DEPwD + EDF + EAA 2019/882 + Sins Invalid 2015/2019 + Mingus access-intimacy 2010 + Kafer 2013 + Garland-Thomson 2011 + Bauman & Murray 2014 + Lane 1992 + Padden & Humphries 1988 + Tudor Hart 1971.

#### Rule 26 — Behaviour-Change Architecture Discipline (MVP-as-Default + Progressive-Disclosure + PREMs + PROGRESS-Plus + NPT)

Every dossier whose protocol is multi-component (multi-supplement OR multi-device OR multi-ritual OR multi-tradition) MUST architect on the **MVP-as-default + progressive-disclosure** pattern:

(a) **3-5-action Minimum-Viable Protocol rendered as the default offer** at §8.0 (or equivalent);

(b) **Explicit week-4 → week-8 → week-12 → month-4 unlock sequence** gated on MCID-or-interim-signal on the prior layer;

(c) **Full-protocol consolidation rendered only as aspirational-after-unlock** with explicit header note;

(d) **§0 architectural-commitment opener** (§0.13 or equivalent) naming MVP-as-default + the inverse-care-law operationalisation (Tudor Hart 1971);

(e) **PREMs instrument alongside PROMs** — minimum 5 items (manageability + reading-grade-comprehension + time-burden-vs-benefit + would-recommend / NPS-equivalent + open free-text); §11.8 placement;

(f) **PROGRESS-Plus equity-of-adherence audit** with at least 8 axes (Place + Race/Culture/Language + Occupation + Gender/Sex + Education + Socioeconomic + Social capital + Disability) + LMIC-substitution lanes for every supplement + device + ritual; §11.9 placement;

(g) **NPT cognitive-participation scaffold** naming peer-cohort + clinician-partnership + digital-companion options.

**Anchor citations.** Michie 2011 + 2014 + 2024 (COM-B + BCW); Damschroder 2009 + 2022 (CFIR); Glasgow 1999 + 2019 (RE-AIM); May + Finch 2009 + May 2018 (NPT); Black 2014 + Jenkinson + NHS-England PREMs assurance; O'Neill 2014 + Welch Cochrane Equity Methods Group; BIT EAST 2014; WHO BIT Geneva 2022 (Tagliabue + Ruggeri); LSHTM + Erasmus + Karolinska + PHFI/AIIMS + Monash adoption lineage.

#### Rule 27 — Diaspora-Multilingual Glossary-Layer (within Option C scope; full Tier-1 transcreation skill discipline upgraded with Option D)

Every dossier MUST carry:

(a) **§0.13 "If your first language is not English"** with NHS PIL 50+ language pointer + NSW MHCS 100+ + EMZ + MiMi-Gesundheit + Aravind + AIIMS-FM + PAHO — pointed at *highest-stakes safety content* (red flags + drug interactions + crisis-line + life-stage gate);

(b) **Medical-term glossary at §1-end** — Tier-1 minimum (Term + IPA + plain-English-Grade-6 + Hindi + Mandarin + Spanish + Arabic);

(c) **Pictogram-driven mechanistic diagram** at §2 (or equivalent) — clean per-driver SVG with per-Tier-1-language label;

(d) **Per-block companion-PIL pointers** at every highest-stakes block (crisis-line + SSHL + warfarin/DOAC + CKD Mg gate + CI red-flag + drug-interaction matrix);

(e) **Per-diaspora-cuisine + fasting-protocol modification** sub-sections at §6 (or equivalent) — minimum 5 cuisines + 3 fasting protocols per dossier where applicable;

(f) **Diaspora-cluster supplier ecosystem extension** at §9 (or equivalent) — minimum 5 corridors named with brick-and-mortar + chain-pharmacy + brand-recognition lattice;

(g) **Counterfeit-supplement-verification + halal/kosher/vegetarian/vegan certification** at §9 (or equivalent);

(h) **Cross-jurisdictional clinician-routing** at §10 (or equivalent) — minimum 8-corridor table + AYUSH-OCI Bridge Programme + telehealth legal-status notes;

(i) **"Bring this dossier to your tradition's clinician" cross-tradition translation framing** at §10 (or equivalent);

(j) **§0.14 Tier-1 transcreation roadmap announcement** — three-tier language list + transcreation-not-translation discipline (source-glossary lineage + community-embedded clinician review pipeline + per-language layout discipline + cultural-translation per tradition + per-edition red-flag destination-jurisdiction re-anchoring); full execution defers to Option D commit.

**Anchor citations.** WHO Health Literacy 2024 + WHO Migration & Health Action Plan 2019-2023 + WHO Cultural Adaptation Framework 2024 + NHS Translation & Interpreting Service PIL 2024 + NSW Multicultural Health Communication Service 2024 + Ethno-Medizinisches Zentrum Hamburg + MiMi-Gesundheit 2023 + Aravind Eye Hospital 2018 + 2022 + AIIMS Family Medicine 2023 + AYUSH-OCI Bridge Programme 2018-2024 + WHO Telehealth & Cross-Border Healthcare 2023 + EU Cross-border Healthcare Directive 2011/24/EU + Sørensen 2015 + Berkman 2011.

### Other waves' candidate rules — dispositioned

- **Wave-9 paediatric-audiologist proposed v8 paediatric-safety-column rule** → folded into Rule 23(a).
- **Wave-12 risk-communication Rule 26** (natural-frequency framing) → folded into Rule 23(e).
- **Wave-12 otoneurology Rule 24** (IIH self-screen) → folded into Rule 23(c).
- **Wave-12 endocrinology Rule 23** (PEM + post-viral cluster) and Rule 25 (thyrotropic-adaptogen Graves' disambiguation) → folded into Rule 23(b) and 23(d).
- **All wave-13 reviewer "Rule 14" / "Rule 24" / "Rule 24b" / "New Rule" candidates** → consolidated into Rules 24 + 25 + 26 + 27 above.
- **Wave-1 through wave-5 structural rules** (e.g. Cochrane honesty discipline; six traditions ≥2 each; ralph 3/3; word ceiling; honest §13.7) → already live in v6.2.x; not re-stated.

**v6.2.7 carries 5 net-new rules (23 + 24 + 25 + 26 + 27) on top of the v6.2.x stack.** The skill banner moves from `Version: v6.2.6` to `Version: v6.2.7` with the architectural-commit-bundle release notes.

---

## 6. Implementation Roadmap — Sequenced Commit Batches for Option C

The wave-14 ruling is Option C with Option D as Q4-2026 → Q2-2027 roadmap. The implementation sequence honours the founder's standing preferences (single-agent-after-parallel-fleet-failures; commits-as-explanation; push-both-surfaces; safety-critical-within-session-catch-and-fix).

### Batch 1 — Within-session safety-critical catch-and-fix (today; ≤30 min)

These are wave-13 surfaces that, even before Option C ships, the founder may want applied immediately. None require architectural deliberation:

1. **§0 crisis-line block paediatric-counterpart addition.** Insert: *"If you are reading on behalf of a child / adolescent — the paediatric PHQ-A item-9 positive signal in adolescent tinnitus referrals is ~12% (Pollard 2023). If the adolescent screens positive on PHQ-A item-9 or describes thoughts of self-harm, the safeguarding pathway takes precedence over the tinnitus protocol. Crisis lines: UK Childline 0800 1111 + Samaritans 116 123; AU Kids Helpline 1800 55 1800 + Lifeline 13 11 14; IN iCall 9152987821 + Vandrevala 1860 2662 345 + AASRA 9820466726; DE Nummer gegen Kummer (Kinder- und Jugendtelefon) 116 111."*
2. **§0 red-flag block paediatric line.** Insert: *"If you are reading on behalf of a child under ~7, ask the buzzing / mosquito / kettle / high-pitched-note question (not 'ringing') — paediatric tinnitus presents differently per Mills & Cherry 1984 + GOSH 1992 + Aksoy 2007."*
3. **§3.3 paediatric melatonin warning expansion.** Currently one sentence ("NOT for pediatric use"). Expand to: *"Lelak 2022 documented a 530% rise in paediatric melatonin poisoning calls; TGA Australia reclassified S3 with paediatric warning 2024; UK POM-only; for paediatric sleep onset use behaviour-only sleep-hygiene + age-stratified bedtime ladder (§7.5 paediatric translation) — NEVER paediatric melatonin self-administered."*
4. **§7.3 paediatric pranayama exclusion line.** Insert: *"For paediatric readers <16, Kapalbhati + Bhastrika are CONTRAINDICATED (vagal-tone + cerebral-vasoconstriction risk per AYUSH paediatric yoga monograph). Bhramari + Nadi Shodhana safe ages 6+ in mild form."*

These are wave-13 paediatric findings the founder can land today within-session as catch-and-fix without committing to Option C in full. They harm-reduce against the most acute paediatric-safety silent miss while the architectural commit is being deliberated.

### Batch 2 — Architectural opener + behavioural-architecture commit (week 1)

Single-agent dispatch:

5. **§0.13 The MVP-as-default architectural commitment** (~250 words; wave-13 behaviour-change Edit 1.1) — Tudor Hart 1971 naming + quintuple-convergent finding restated + commitment to MVP-as-default.
6. **§8.0.1 The explicit unlock sequence** (~180 words; wave-13 behaviour-change Edit 1.2) — week-4 → week-8 → week-12 → month-4 gates conditional on MCID-or-interim-signal.
7. **§8.0.2 Why §8.5 master day plan is kept** (~120 words; wave-13 behaviour-change Edit 1.3) — for the minority sub-cohort reaching it; demotes §8.5 to aspirational consolidation.
8. **§8.5 (8b) Master 24-Hour Day Plan header rewrite** (wave-13 behaviour-change Edit 1.4) — "This table assumes you have reached MCID on §8.0 MVP and unlocked Combos 1+2+3 sequentially across weeks 4-12. If you are reading this in week 1, return to §8.0."
9. **§1.2 Quick-start MVP framing strengthening** (wave-13 behaviour-change Edit 1.5) — "These four moves cover the highest-evidence layers and **are the entire protocol for the majority of readers**."
10. **§8.5b low-spoons / pacing protocol** (~200 words; wave-13 disability-justice Edit 4.6) — three-tier floor / maintenance / full pacing folding wave-12 ME/CFS-autonomic into the architecture.
11. **Skill v6.2.7 commit** — Rules 23 + 24 + 25 + 26 + 27 written; v6.2.6 → v6.2.7 banner; release notes.

### Batch 3 — Cost-per-QALY + per-jurisdiction PPP + UHC (week 2)

12. **§3.3 + §5 + §10.7 cost-per-QALY band column** (wave-13 health-economics Edit 2.1 + 2.2).
13. **§3 + §5 + §13.7 re-sort by descending cost-per-QALY** (wave-13 health-economics Edit 4.2 + 4.3 + 4.4).
14. **§3.3 + §5 + §6 + §10.7 8-col per-jurisdiction PPP price column** (wave-13 health-economics Edit 1.1).
15. **§9.0a per-jurisdiction Full Protocol + 5%-flag table** + **§9.0c per-jurisdiction UHC + insurance-coverage table** + **§9.0b retailer-pricing volatility note** (wave-13 health-economics Edit 1.2 + 1.3 + 3.2).
16. **§9.7 BIA block** (~600 words; wave-13 health-economics Edit 5.1) — Scenarios A/B/C + per-jurisdiction WTP threshold + non-US public-payor adoption pathway.
17. **§15.2c Lenire payor-status synthesis** (~200 words; wave-13 health-economics Edit 2.3) — NICE TA597 discontinued; G-BA not Empfehlung; PBAC no submission; CADTH no recommendation; HITAP cost-ineffective.

### Batch 4 — WCAG 2.2 AA + EAA 2025 + plain-language + Easy-Read (week 3)

18. **Component-level ARIA fixes** — `components/layout/deep-dive.tsx` (ARIA-disclosure pattern), `components/nav/left-rail-nav.tsx` (WAI-ARIA Tree pattern), `components/nav/mind-map-strip.tsx` (reflow + focus-not-obscured), `components/ui.tsx` GradeBadge (colour + label + shape), tables in `app/[domain]/[slug]/page.tsx` (`<th scope>` + TL;DR-as-row-header for screen-reader-table-mode), crisis-line block (tel: links + `<a aria-label>`), DossierShell (skip-link as first focusable + aria-label on back-link).
19. **axe-core CI spec** — add 1 spec to `tests/mock-fidelity.spec.ts` calling `axe-playwright` against every dossier route + atlas + home + decision-hero + safety-quiz; CI-fail on any AA violation.
20. **`/accessibility` statement page** — names standards conformed-to + known limitations + last-audit date + complaint contact (EDA / EHRC / AHRC routes).
21. **Plain-language Grade ≤9 ceiling enforcement** — pass over every "For you, in plain words" lede + Quick-start + red-flag + §13.5 patient-facing primer + crisis-line block; deep-dive ≤12.
22. **Easy-Read DIN 8581-1 variant** at `/[domain]/[slug]/easy-read` — max 1,500 words; sentences ≤12 words; pictograms paired; one-idea-per-line.
23. **3-min executive summary panel** at top of every dossier — 200-word executive-summary at Grade-9.
24. **Pictogram-pairs at §3 + §5 + §6 + §7** — Mulberry + ARASAAC + Sclera symbol-sets embedded.

### Batch 5 — Paediatric §12.8 landed in full (week 4)

25. **§12.8.1 Paediatric prevalence + pre-verbal Mills & Cherry + screening battery** (~600 words; wave-13 paeds-audiology Edit 1.1).
26. **§12.8.2 Adolescent LAeq8h dose calculus + EU PAS + AYJNISHD + esports** (~700 words; wave-13 paeds-audiology Edit 2.1).
27. **§12.8.3 Across-section paediatric-safety matrix** (~1,000 words; wave-13 paeds-audiology Edit 3.1) — *mātrā kālpana* + Bensky + Hamdard + IMPCOPS + Men-Tsee-Khang + biophysical exclusion lattice + EFSA UL paediatric.
28. **§12.8.4 Adolescent mental-health triad + PHQ-A + GAD-7 + PSQI-paeds + C-SSRS Junior + safeguarding routing** (~700 words; wave-13 paeds-audiology Edit 4.1).
29. **§12.8.5 Family-system + school-accommodation + Gillick + cross-jurisdictional consent** (~700-1,000 words; wave-13 paeds-audiology Edit 5.x).
30. **§12.8.6 Paediatric CBT-T + MBCT-T + TRT adaptation** (~400 words; wave-9 + wave-13 paeds-audiology).
31. **§12.8.7 Carer + family-system support** (~400 words; wave-13 paeds-audiology).
32. **Paediatric-safety column** added to §3.3, §4.2-4.7, §5, §10.7 tables (wave-13 paeds-audiology Edit 3.2).
33. **§11.5 paediatric row expansion** from 6 exclusions to 18-row paediatric lattice + cross-link to §12.8.3 (wave-13 paeds-audiology Edit 3.3).
34. **§16 references** — Kashyapa Samhita + Bhavaprakasha-balatantra + Bensky 1986 + CFDA paeds GMP + Hamdard *tibb-e-aṭfāl* + IMPCOPS paediatric Siddha + Men-Tsee-Khang paediatric + EFSA UL paediatric tables + WHO Guidelines on Physical Activity 2020 + Mills & Cherry 1984 + Mills 1992 + Aksoy 2007 + Coelho 2007 + Park 2014 + Rosing 2016 + Smith 2024 Born-in-Bradford + EFAS Paediatric SIG 2022 + ICRA Paediatric Tinnitus Monograph 2023 + AYJNISHD Mumbai cohort 2018-2024 + Beach 2023 RMIT + Lee 2024 SNU + Aazh 2020 + Robb 2019 + Bartnik 2012 + Kentish 2000 CTI + Lewis 2022 + Pierre 2024 + Pollard 2023 + WHO 2024 Adolescent Mental Health + Johnson 2002 PHQ-A + Mossman 2017 + Roizenblatt 2010 PSQI-paeds + Owens 2000 CSHQ + Columbia C-SSRS Junior + Gillick v West Norfolk 1985 + Fraser 1985 + Marion's case 1992 + §104/§1626 BGB + Indian Majority Act 1875 + MCI + POCSO Act 2012.

### Batch 6 — Disability-justice surface (week 5)

35. **§0.5 "your access, your way" panel** (~80 words; wave-13 DJ Edit 1.4).
36. **§0.5b co-navigator / access-intimacy invite** (~100 words; wave-13 DJ Edit 4.8).
37. **§0.6 wholeness frame** (~80 words; wave-13 DJ Edit 4.5).
38. **§0.7 Who wrote this — lived-experience-leadership commitment** (~100 words; wave-13 DJ Edit 4.2).
39. **§0.8 How we make money — storefront conflict-of-interest** (~150 words; wave-13 DJ Edit 4.3).
40. **§0.9 Movement-bridges** (~200 words; wave-13 DJ Edit 4.4).
41. **§1.5 "On hearing-cure framing"** (~100 words; wave-13 DJ Edit 3.2) — Bauman & Murray 2014 + Lane 1992 + Padden & Humphries 1988.
42. **§5.21 Sound enrichment in shared + communal living** (~150 words; wave-13 DJ Edit 4.9).
43. **§11.3a Intersectionality of access** (~200 words; wave-13 DJ Edit 4.1).
44. **§15.4b Deaf-community perspective on CI** (~200 words; wave-13 DJ Edit 3.4).
45. **§15.10 Cross-disability community** (~150 words; wave-13 DJ Edit 4.7).
46. **§15.11 Per-jurisdiction disability-benefit + accommodation-pathway addendum** (wave-13 DJ Dimension 5 + wave-13 paeds-audiology cross-jurisdictional consent).
47. **§16.2 Structural commitment to the bottom-70% + collective-liberation closing** (~200-300 words; wave-13 DJ Edit 4.10 + wave-13 health-economics Edit 5.2).

### Batch 7 — Diaspora-multilingual glossary-layer (week 6)

48. **§0.13 "If your first language is not English"** (~200 words; wave-13 diaspora Edit 1.1).
49. **§0.14 Tier-1 transcreation roadmap announcement** (~300 words; wave-13 diaspora Edit 5.1).
50. **§1-end medical-term glossary** (~500 words; 40-row table; wave-13 diaspora Edit 1.2).
51. **§2 four-driver pictogram SVG** (`components/diagrams/four-driver-pictogram.tsx`; wave-13 diaspora Edit 1.3).
52. **Per-block companion-PIL pointers** at every highest-stakes block (wave-13 diaspora Edit 1.4).
53. **§4.7 Folk-medicine framings bridge** (~150 words; wave-13 diaspora Edit 2.3).
54. **§6.7 Per-diaspora-cuisine 7-day plan supplements** (~500 words; wave-13 diaspora Edit 2.1).
55. **§6.8 Fasting-protocol modifications** (~250 words; wave-13 diaspora Edit 2.2).
56. **§9.6 Diaspora supplier ecosystem extension** (~500 words; wave-13 diaspora Edit 3.1).
57. **§9.7 Counterfeit-supplement-verification guidance** (~300 words; wave-13 diaspora Edit 3.2).
58. **§9.8 Halal + kosher + vegetarian + vegan certification** (~150 words; wave-13 diaspora Edit 3.3).
59. **§10.8 Cross-jurisdictional clinician-routing for diaspora readers** (~500 words; wave-13 diaspora Edit 4.1).
60. **§10.9 Bring this dossier to your tradition's clinician** (~200 words; wave-13 diaspora Edit 4.2).

### Batch 8 — PREMs + PROGRESS-Plus + NPT scaffold (week 7)

61. **§11.8 PREMs — 5-item BECI** (~400 words; wave-13 behaviour-change Edit 4.1).
62. **§11.8.5 Reading-grade self-rate gate** (~120 words; wave-13 behaviour-change Edit 4.2).
63. **§11.9 PROGRESS-Plus 11-axis equity-of-adherence audit** (~500 words; wave-13 behaviour-change Edit 5.1 + wave-13 DJ Edit 4.1 cross-ref).
64. **§12.1.5 Week 4-6 honeymoon-drift checkpoint** (~200 words; wave-13 behaviour-change Edit 2.x).
65. **§12.1.6 Week-12 graduation reframe** (~150 words; wave-13 behaviour-change Edit 2.x).
66. **§12.1.7 NPT cognitive-participation scaffold** (~250 words; wave-13 behaviour-change Edit 3.2).
67. **§5.2.5 Shared-household sound-enrichment** (~180 words; wave-13 behaviour-change Edit 2.x).
68. **§7.2.5 Urban-high-rise yoga adaptation** (~150 words; wave-13 behaviour-change Edit 2.x).
69. **§7.3.5 Bhramari + social-context** (~120 words; wave-13 behaviour-change Edit 2.x).
70. **§11.5.5 Social-opportunity gate** (~200 words; wave-13 behaviour-change Edit 2.x).
71. **§15.11 + LMIC-substitution lanes** at §3.3 + §5 + §6 + §7 (wave-13 behaviour-change Edit 3.1).

### Batch 9 — Atlas-level propagation (months 2-5)

72. **Skill v6.2.7 hard-applied** to the 77 sister journeys via single-agent regen at single-agent cadence (founder standing preference: single-agent after parallel-fleet failures).
73. **Per-journey paediatric pathway** calibrated to journey-specific paediatric prevalence (~1,500-3,000 words per journey; tinnitus's ~5,500-6,000 word pathway is exemplar; sister journeys inherit the *pattern*, not the volume).
74. **Per-journey cost-per-QALY band + PPP price column + UHC coverage** populated.
75. **Per-journey disability-justice surface** populated.
76. **Per-journey diaspora-glossary-layer** populated.
77. **Per-journey PREMs + PROGRESS-Plus** populated.
78. **Skill v6.2.7 → v6.2.8 micro-iteration** as 77-journey regen surfaces journey-specific edge cases (e.g. perinatal-pharmacology cross-cut surfaced by wave-14 candidate persona for lactation-medicine).

---

## 7. Atlas-Level Propagation Architecture

The wave-14 ruling is for **tinnitus**, but tinnitus is the exemplar. The 77 sister journeys inherit Option C *structurally* via skill v6.2.7. Founder's stated quality bar requires the atlas to honour the same architectural commitment.

**Propagation calculus.**

- **Journey count.** 78 atlas journeys (50 baseline + 25 expansion + 2 new — Bell's palsy + SSHL; tinnitus exemplar).
- **Single-agent regen cadence** at the founder's standing preference: ~4-6 hours per journey end-to-end (research + content + a11y + cost-per-QALY band + PPP price column + UHC coverage + paediatric pathway + diaspora glossary + PREMs + PROGRESS-Plus).
- **Estimated total propagation effort:** 77 journeys × 5 hours = ~385 hours = ~10 weeks of focused single-agent work (5 journeys/day × 5 days/week × 4 weeks × ~2.4-month total).

**Atlas-cross-cutting concerns.**

1. **DOMAIN_TO_CATEGORY map** in `lib/data.ts` already routes per-journey category. No change needed for Option C.
2. **NON_APP_SHELL_TOP route prefixes** in `components/app-shell.tsx` already accommodate the dossier-route catch-all. No change needed unless Option D adds locale-prefix routes (`/hi/...` etc.).
3. **`components/conversion-strip.tsx`** is already rolled out to every bundled journey (founder sign-off, commit `ad285fc`). Under Option C, ConversionStrip messaging shifts from "Day 30 meaningful change" + "~12 minutes of effort a day" (currently un-substantiated per backlog item I65-I67) to "MVP-as-default + step-up by week 12" — this is a 1-line storefront-copy change rolled into Batch 2.
4. **`/c/[category]/package`** safety-quiz wizard is 12-question (per backlog I17 landed). Under Option C, add 13th question: "What is your monthly supplement budget? <$30 / $30-100 / $100-200 / $200+" — routes <$30 to MVP-only bundle; $100+ to step-up tail. This is a 1-question wizard change rolled into Batch 3.
5. **Per-journey `tinnitus-quiet-90` bundle pricing** (and equivalents for the 77 other journeys) reconciles with dossier supplier-price band per Critic C18 (backlog I86). Under Option C, bundle composition follows the cost-per-QALY re-sort: MVP-default bundles at $45-75/mo with Pycnogenol + Lion's Mane + premium Mg-threonate moved to step-up tail bundles at $390-680/mo. Storefront economic model addressed in §8 below.

**Per-journey paediatric pathway calibration.** Tinnitus paediatric pathway is ~5,500-6,000 words because paediatric prevalence is non-trivial (11-19% point-prevalence) and the pre-verbal Mills & Cherry framework is load-bearing. Sister journeys calibrate by paediatric prevalence + paediatric-safety risk:

- **High-paediatric-relevance journeys** (~3,000 words per): eczema, asthma, type-1-diabetes, OCD, ADHD (proposed wave-13), sleep-onset, anxiety, low-mood, melatonin-misuse cross-cut. Pre-verbal articulation framework varies (eczema = visible-skin-not-language; asthma = breath-work; T1D = numeracy + family-system; sleep-onset = bedtime ladder + co-sleeping).
- **Moderate-paediatric-relevance journeys** (~1,500-2,000 words per): immune-allergy-comfort, oral-gum-breath, screen-eye-strain, dandruff, joint-stiffness (sport injury), respiratory-seasonal.
- **Low-paediatric-relevance journeys** (~500-800 words per — primarily a paediatric-safety overlay column without bounded pathway): menopause, prostate-wellness, men's-T, fertility, longevity-healthy-aging, NAFLD/MASH, kidney-stones, peripheral-neuropathy, AFib-natural-adjunct, heart-cholesterol-bp, liver-alcohol-recovery, premature-greying. Bounded paediatric pathway is "this protocol is not for under-18; if a paediatric concern is raised, consult [destination-jurisdiction paediatric pathway]."

**Per-journey cost-per-QALY band + PPP table** scales with intervention count — tinnitus has 12 OTC molecules + 8 biophysical interventions; sister journeys vary 8-20 interventions. The per-jurisdiction PPP column is the same 8-col template for all journeys.

**Per-journey transcreation roadmap.** Option D commits Tier-1 transcreation for all 78 journeys. At ~$8-12k per language for one-pass + community-embedded clinician review, 9 Tier-1 locales × 78 journeys = ~$5-7M transcreation budget over the 2027 fiscal calendar. Phasing recommendation: tinnitus + 19 highest-traffic journeys in Q4-2026 → Q1-2027 (Phase D-1, ~$1.5-2M); the remaining 58 journeys in Q2-2027 → Q4-2027 (Phase D-2, ~$3.5-5M).

---

## 8. Commerce + Storefront Implications of Option C

This is the surface 65 reviewers across 13 waves largely did not touch (wave-4 founder-product + wave-6 behavioural-pricing surfaced the storefront-margin / margin-vs-evidence inversion at the editorial level; no wave audited the storefront economic model under Option C). The meta-synthesis must surface what the storefront looks like after the architectural commit.

### Economic-model shift — from $390-680/mo Full Protocol as default to $45-75/mo MVP as default

**Before Option C.** The §9.2 "Recurring total: $390-680/month" is the headline pricing offered by ConversionStrip + bundle pages. The 12-question safety quiz routes the qualifying reader to the full-protocol bundle at $390-680/mo. Storefront LTV calculation assumes high-WTP OECD-urban reader; 9% week-12 adherence means LTV is concentrated in the small persistent sub-cohort. Customer Acquisition Cost (CAC) recovery depends on the high-priced bundle finding the high-WTP reader.

**After Option C.**

1. **MVP bundle at $45-75/mo is the default**. ConversionStrip + bundle page lead with the MVP pricing. The MVP bundle = Mg glycinate + (optional, free) sound-app subscription + (optional, free) MBCT-T workbook + (free) 4-min neck-jaw-vagus routine. Single supplement; lowest cognitive + financial commitment.
2. **Step-up bundle at $150-280/mo for unlocking-after-MCID readers** (week-12 MCID gate triggers). Adds NAC + Vit D3/K2 + Methyl-B12 (if deficient screen) + Zinc (if deficient screen) — the Excellent / Good cost-per-QALY band molecules.
3. **Full Protocol bundle at $390-680/mo for the small step-up-tail sub-cohort** who reached MCID on MVP + step-up + still want the Pycnogenol + Lion's Mane + premium Mg-threonate + Tebonin + Ubiquinol + Vinpocetine (where jurisdictionally permitted) layer. Bundle composition unchanged; positioning is "aspirational consolidation after MVP."

### TAM impact

- **Current state.** TAM ≈ OECD-urban high-WTP reader who can sustain $390-680/mo. Per wave-13 health-economics 5%-flag analysis, this is <30% of OECD-urban + <5% AYUSH-IN + <5% LMIC. Effective addressable population: ~25-40M readers.
- **Option C state.** TAM expands to bottom-70% OECD-urban + 100% AYUSH-IN + ~50-60% TH/ID/VN/PH (per 5%-flag analysis). Effective addressable population: ~150-280M readers — a 5-7x TAM expansion.

### LTV + retention impact

- **Current state.** 9% week-12 adherence × ~$390-680/mo × ~6-9 month median retention (per behavioural-adherence reviewer wave-2) = ~$210-$520 LTV per acquired customer.
- **Option C state.** 40-50% week-12 adherence × $45-75/mo MVP + ~25-30% step-up to $150-280/mo + ~10-15% step-up-tail to $390-680/mo, weighted by retention curves predicted at 30-40% month-12 sustained-use. Expected LTV per acquired customer ≈ ~$320-$580 — a 1.1-1.5x LTV preservation/expansion at meaningfully lower CAC (because the MVP-priced funnel converts more readers).

The economic-model shift is **TAM-expanding + LTV-preserving** — the structural narrative is "we serve more readers at lower per-reader margin but retain more of them longer because the protocol actually fits their lives." This is the structural alignment between founder doctrine (honest framing over marketing; bottom-70% commitment) and storefront commercial viability.

### Storefront-trust signal — §0.8 "How we make money"

The 150-word §0.8 storefront-conflict-of-interest panel (wave-13 DJ Edit 4.3) is the load-bearing storefront-trust signal under Option C. It:

- names NicheCore sells the supplements the dossier recommends;
- names the conflict-of-interest honestly;
- provides (a) a printable PDF of the protocol that is fully usable without buying anything; (b) a sourcing list that names non-NicheCore retailers for every supplement (§9.6 diaspora supplier ecosystem doubles as this list); (c) the explicit commitment that no supplement enters the protocol because NicheCore sells it (the cost-per-QALY-band + evidence-grade discipline is upstream of the commerce decision); (d) the disability-rebate scheme.

This is what wins the storefront-trust argument with the disability-justice + bottom-70% audience the dossier now serves. It is also what wins the ISO-style-certification argument — making the conflict-of-interest visible is the strongest trust signal.

### Per-jurisdiction storefront pricing (Option D anticipation)

Under Option C, storefront prices are in USD. Under Option D, per-locale storefront pricing follows the §9.0a 5%-disposable-income-flag table — UK Boots equivalent in GBP at £40-65/mo MVP, IN AYUSH-dispensary sub-track in INR at ₹150-400/mo MVP, etc. Cloud Run multi-region + per-locale Stripe routing handle the storefront-payment plumbing. This is Q4-2026 → Q2-2027 roadmap.

### AI Guru + Companion + Expert chrome integration

Option C's NPT cognitive-participation scaffold (§12.1.7) explicitly names peer-cohort + clinician-partnership + digital-companion options. The NicheCore Companion + AI Guru + Expert chrome currently exist as separate page-level surfaces (`/companion` + `/guru` + `/expert`). Under Option C, the architecture integrates them:

- **AI Guru** becomes the **MVP-as-default companion** — surfaces §8.0 MVP to the new reader; tracks week-by-week progress + interim signal + MCID gate; routes to unlock at week 12.
- **Companion** becomes the **PREMs + PROGRESS-Plus surface** — collects the 5-item BECI weekly + maps it to PROGRESS-Plus axes + surfaces to the dossier-level cohort registry.
- **Expert** becomes the **NPT clinician-partnership surface** — names peer-cohort + audiologist + AYUSH vaidya + TCM practitioner options + AYUSH-OCI Bridge Programme + 16-corridor cross-jurisdictional clinician-routing (§10.8) integration. Renders different per-jurisdiction destination routing.

The chrome integration is a Batch-10 follow-on commit (week 8) that operationalises the dossier-level scaffold into the AI-product layer.

### SEO + atlas discovery surface

Option C's plain-language Grade ≤9 openers + 3-min executive summary + per-locale glossary + pictograms + per-block PIL pointers are all **Google-friendly content surfaces**. Per Google's Helpful Content + E-E-A-T + medical-content guidelines, content that answers the reader's question at the lede + carries authoritative anchor citations (UN-CRPD + WHO + NICE + NHS + EMA + AYUSH + NMPA + Hamdard + Men-Tsee-Khang + IMPCOPS) + transparently names the conflict-of-interest scores high. Option C is **SEO-positive** relative to Option B.

For Option D, per-locale hreflang + RTL chrome + per-locale Cloud Run edge-cache + per-locale OG image + per-locale schema.org markup is the multi-locale SEO play that opens the 2.5B+ diaspora + non-English-primary discovery surface.

---

## 9. What 65 Reviewers Across 13 Waves Still Missed

The meta-synthesis can see what no single domain reviewer could. Six items the founder should weigh as part of the architectural commit:

### Miss 1 — The federated multi-locale atlas is the natural target architecture; Option C is only the bridge

Five wave-13 reviewers converged on the inverse-care-law finding through five different framework anchors. The bottom-70% of the global tinnitus population the dossier nominally serves is overwhelmingly **non-English-primary + diaspora + multi-cultural-jurisdiction + low-resource-setting**. Option C ships the architectural commitment in English with glossary-layer + per-block PIL pointers; it does **not** ship the dossier in Hindi or Mandarin or Spanish or Arabic. The 2.5B+ diaspora reader still operates in English with an English-glossary tool.

The structural truth: **Option D is the architectural target; Option C is the bridge**. The founder should commit to Option C as the wave-14 ruling *with explicit framing that Option D is the Q4-2026 → Q2-2027 roadmap anchor*. Without Option D, Option C is a partial commitment to a global-inclusive architecture. The §0.14 transcreation-roadmap announcement is the bridge commitment; the Tier-1 transcreation budget ($1.5-2M Phase D-1) is the bridge funding requirement.

No wave 1-13 reviewer named this — they each surfaced one face of the bridge.

### Miss 2 — The storefront economic model under Option C is not strictly worse and may be strictly better

The 13-wave critique base presumed (mostly implicitly) that MVP-as-default + disability-rebate-scheme + storefront-COI-honesty + per-jurisdiction-PPP-adjusted-pricing is a **commercial cost**. Wave-13 health-economics surfaced quantified BIA but did not run the storefront-side analysis. Wave-13 disability-justice surfaced the storefront-COI tension but did not propose the TAM-expansion counter-narrative.

The structural truth (§8 above): **Option C is TAM-expanding (5-7x) + LTV-preserving (1.1-1.5x) + CAC-reducing (lower-priced MVP funnel converts more readers)**. The founder may have intuited this but no wave reviewer named it. This changes the founder's risk-frame from "architectural-commit-risks-commercial-viability" to "architectural-commit-strengthens-commercial-viability" — and reduces the deliberation cost of the wave-14 ruling.

### Miss 3 — The Lactation-Medicine + Perinatal-Pharmacology wave-14 candidate persona is load-bearing for Rule 23

Wave-13 paeds-audiology backlog named "Lactation-medicine + perinatal-pharmacology" as the wave-14 highest-priority candidate persona. Wave-14 (this synthesis) takes wave-14's slot for the founder-synthesis ruling, displacing the lactation-medicine candidate to wave-15.

The structural truth: **Rule 23 paediatric overlay does not currently cover lactation + perinatal-pharmacology**. The dossier's §11.5 covers pregnancy + breastfeeding as exclusions; it does not cover lactating-mother-experiencing-tinnitus or perinatal-tinnitus or postpartum-supplement-safety in the depth Rule 23 paediatric overlay covers paediatric-safety. **The lactation-medicine wave-15 dispatch is a Rule-23 completion-check, not a new audit.** Founder should accept the wave-15 dispatch on lactation as a fact-check on whether the wave-14 architectural commit covers the dossier's pregnancy + breastfeeding + perinatal sub-cohort with the same overlay rigor it covers paediatric.

### Miss 4 — Indigenous-health + First-Nations medical-sovereignty + Adivasi + Dalit + Ainu + Sámi wave-15 candidate persona is the disability-justice principle 1 completion-check

Wave-13 disability-justice + diaspora-multilingual both named the Indigenous-health + First-Nations medical-sovereignty candidate persona for wave-14/15. The dossier currently honours six traditions (Ayurveda + TCM + Unani + Siddha + Tibetan + Homeopathy) but does not honour Indigenous Australian + Māori + First-Nations Canadian + Native American + Sámi + Inuit + Adivasi + Dalit + Ainu traditions.

The structural truth: **Six-traditions doctrine is the founder's standing commitment, not a closed set**. The Indigenous-health wave-15 dispatch is a six-traditions-doctrine-completion-check. Founder should signal: (a) six-traditions doctrine remains as the minimum floor; (b) Indigenous-health traditions add as an additional doctrine-layer per population; (c) wave-15 Indigenous-health dispatch is the audit that surfaces what addition looks like operationally without breaking six-traditions floor.

This is the wave-13 disability-justice Sins-Invalid Principle 1 (intersectionality) operationalised at the tradition layer — and no wave 1-13 reviewer named it as a doctrine-layer extension; they named it as content-addition.

### Miss 5 — The "ralph 3/3" + schemaVersion + skill-version-discipline contract under the new architecture

The dossier's `internalRalph` block currently shows `pass1Complete: true / pass2Complete: false / pass3Complete: false` because pass-2 (citations) + pass-3 (rigor pass) are partial. The wave-14 Option C architectural commit + Batches 2-8 land more content than pass-1 originally covered. The internalRalph contract needs an upgrade:

- **pass-1 (structural)** — extended to cover the §0.5 + §0.6 + §0.7 + §0.8 + §0.9 + §0.13 + §0.14 + §1.5 + §3-§5-§10.7 cost-per-QALY band + §8.0.1 + §8.0.2 + §8.5b + §9.0a + §9.0c + §9.7 + §11.3a + §11.8 + §11.9 + §12.1.5/.6/.7 + §12.8.1-7 + §15.4b + §15.10 + §15.11 + §16.2 surfaces.
- **pass-2 (citations)** — extended to fold the ~80 new wave-13 references (Tudor Hart 1971 + Mackenbach 2018 + Marmot 2020 + O'Neill 2014 + Welch Cochrane + Michie 2011/2014/2024 + Damschroder 2009/2022 + Glasgow 1999/2019 + May/Finch 2009 + Black 2014 + Hwang 2022 + Pierce 2024 + Bauman & Murray 2014 + Lane 1992 + Padden & Humphries 1988 + Sins Invalid 2015/2019 + Mingus 2010 + Kafer 2013 + Garland-Thomson 2011 + Mills & Cherry 1984 + Mills 1992 + AYJNISHD Mumbai 2018-2024 + Smith 2024 Born-in-Bradford + Beach 2023 RMIT + Lee 2024 SNU + Aazh 2020 + Lewis 2022 + Pierre 2024 + Pollard 2023 + Kashyapa Samhita + Bensky 1986 + ...).
- **pass-3 (rigor pass)** — extended to fold the cost-per-QALY band + per-jurisdiction PPP + BIA + PREMs + PROGRESS-Plus + accessibility statement + Easy-Read variant + transcreation roadmap + diaspora supplier ecosystem + 16-corridor cross-jurisdictional clinician-routing + paediatric-safety matrix.

**Wave-14 ruling: schemaVersion moves from `v7.0.0-rigor-pass-2026-06-06` to `v7.1.0-option-c-architectural-commit-2026-06-XX`** after Batches 1-8 ship. The v7-major (v7.0 → v7.1) increment signals architectural commit; v6.2.7 skill version increments synchronously.

### Miss 6 — The founder's quality bar — exhaustive Playwright + no 404s + doctrine in UI + ISO-style certification + commits-are-explanatory

Per the project memory + standing preference: founder's quality bar is **exhaustive Playwright + no 404s + doctrine in UI + ISO-style certification + commits-are-explanatory**. Option C honours each:

- **Exhaustive Playwright.** Batch 4 axe-core CI spec extends `tests/mock-fidelity.spec.ts` (currently 16 specs / 35s runtime) to cover WCAG 2.2 AA across every dossier route + atlas + home + decision-hero + safety-quiz. Estimated runtime ~50-60s.
- **No 404s.** Component-level a11y fixes don't break routing; new routes added (`/[domain]/[slug]/easy-read` + `/accessibility`) are net-new + tested.
- **Doctrine in UI.** §0.5 access panel + §0.6 wholeness frame + §0.7 lived-experience-leadership + §0.8 storefront-COI + §1.5 hearing-cure framing + §11.3a intersectionality + §15.4b Deaf-Gain + §15.11 disability-benefit-pathway + §16.2 collective-liberation closing — every disability-justice + audism + Tudor-Hart commitment is surfaced in UI, not buried in skill rules.
- **ISO-style certification.** PREMs + PROGRESS-Plus + cohort registry + reading-grade gate + accessibility statement + paediatric-safety overlay + cost-per-QALY band + per-jurisdiction PPP + UHC coverage + counterfeit-supplement-verification + halal/kosher/vegetarian/vegan certification = the ISO-style scaffold. Wave-14 ruling: NicheCore tinnitus exemplar can claim "ISO-style certification-aligned" without overstating; the audit-trail is in the dossier surface + skill v6.2.7 rule + Playwright a11y spec + cohort registry.
- **Commits-are-explanatory.** Batch 1 → 8 commit messages should follow founder's standing pattern: bucket / wave of work per commit; short title + detailed body explaining WHY + what changed; Co-Authored-By: Claude Opus 4.7. Wave-14 commit body should explicitly name the quintuple-convergent finding + the Option-C architectural commit + the v6.2.7 rule package.

The founder's quality bar is *substantively* met by Option C. The wave-14 ruling honours it.

---

## 10. Wave-15 Candidate Personas (3-5)

The wave-13 backlog named 5 candidate personas for wave-14 (paediatric audiology was already wave-13; Lactation + Digital-Health-Engagement + Indigenous-Health + Founder-Synthesis [this turn] + Climate-Sustainability). Wave-14 displaces Founder-Synthesis to this turn. Wave-15 candidate personas — distilled to the load-bearing 3-5 the founder should consider:

1. **Lactation-Medicine + Perinatal-Pharmacology** (highest priority — Rule 23 completion-check; covers pregnancy + breastfeeding + postpartum-supplement-safety + perinatal-tinnitus depth missing from §11.5; anchors LactMed / EMA Lactation + Pregnancy Pharmacovigilance / TGA Pregnancy & Lactation database / Hale's Medications and Mothers' Milk / Pharmacist's Drug Handbook / AYUSH Prasooti Tantra + Streeroga + classical Garbhini-paricharya + CCRH paediatric homeopathy + Chinese paediatric TCM). Estimated finding: ~1,500-2,500 words to land at §11.5b perinatal overlay + paediatric-safety column extension to lactation + per-supplement perinatal-safety annotation. Single agent, ~6-8 hours.

2. **Digital-Health Engagement + Conversational-Agent + AI-Guru UX** (wave-13 behaviour-change named) — how does the NicheCore Companion + AI Guru render the dossier as a conversational protocol-assist operationalising the NPT cognitive-participation scaffold (§12.1.7)? Privacy-respecting + LMIC-low-bandwidth + audio-first + multi-lingual conversational tinnitus-coach. Natural successor to wave-14 architecture-shipping. Anchors UCL Centre for Behaviour Change Digital-Health + WHO Digital Health + India DPI + Australian Digital Health Agency. Estimated finding: ~2,000-3,000 words at §12.1.7 expansion + AI-Guru / Companion / Expert chrome integration spec. Single agent, ~6-8 hours.

3. **Indigenous-Health Knowledge-Holders + First-Nations Medical Sovereignty** (wave-13 DJ + diaspora named) — six-traditions-doctrine completion-check for Indigenous Australian + Aboriginal + Māori + Sámi + Inuit + First Nations Canadian + Native American + Adivasi + Dalit + Ainu traditions. The audit asks: (a) what does honouring an additional doctrine-layer per population look like without breaking six-traditions floor? (b) is there a tinnitus-specific Indigenous-tradition framing (e.g. Māori taonga puoro sound-healing; Aboriginal yidaki low-frequency therapy; First Nations sweat-lodge cleansing-of-noise-trauma) that should land at §4.8 or §5.22? (c) how should the dossier engage with the Nagoya Protocol on Access and Benefit-Sharing for Indigenous knowledge under Indigenous Data Sovereignty principles (UNDRIP Article 31 + CARE Principles for Indigenous Data Governance)? Anchors WIPO Indigenous Knowledge framework + AIATSIS Australia + Te Mana Raraunga New Zealand + First Nations Information Governance Centre Canada + UN Permanent Forum on Indigenous Issues + South African Indigenous Knowledge Systems Act 2019 + India's Tribal Sub-Plan AYUSH Initiative. Single agent, ~8-10 hours.

4. **Climate + Sustainability + Supply-Chain Resilience + Nagoya Protocol** (wave-13 behaviour-change + diaspora named) — Lancet Countdown + Karolinska Planetary Health + IIPH-Bhubaneswar Climate framework. Surfaces: (a) heat + ototoxic air pollutants + climate-displacement-noise-environments as upstream tinnitus drivers the §6.6 environmental-triggers does not name; (b) supplement supply-chain carbon footprint (the Pycnogenol-from-French-maritime-pine + KSM-66-Ashwagandha-from-Hyderabad + Tebonin-from-German-Apotheke shipping footprint); (c) Nagoya Protocol benefit-sharing for the AYUSH-CCRAS + Ayurveda-classical-knowledge-derived supplements (per India's Biological Diversity Act 2002 + Access and Benefit-Sharing Regulations 2014); (d) climate-displaced refugee + IDP reader access. Estimated finding: ~1,500-2,500 words at §6.6 expansion + §9.6 sustainability column + §16.3 Nagoya-and-climate-justice closing. Single agent, ~6-8 hours.

5. **Quality-Assurance + ISO-Style Certification Auditor** (founder's standing quality bar fulfillment-check) — formal audit against the ISO 9001 / 13485 / 27001 / 14155 (clinical investigation of medical devices) + WHO TCIM Quality Assurance Framework 2024 + EU GMP for traditional herbal medicines + AYUSH GMP + NMPA TCM GMP. Names what NicheCore can credibly claim ("ISO-style-aligned" with specific scoping) and what it cannot ("ISO 13485 certified" requires a certification body audit). Estimated finding: ~1,500-2,000 words at §16.4 certification-claim discipline + the storefront-trust-signal scoping. Single agent, ~4-6 hours.

**Recommended wave-15 dispatch.** Lactation-medicine (Persona 1) is the highest-priority Rule 23 completion-check. Personas 2-5 can dispatch in wave-15 (5-at-a-time matching the wave-13 cadence) or sequentially. Founder's call.

---

## 11. TL;DR Founder Sign-Off Block

The founder asked the hook for a 3-5-bullet quote-tweet-able sign-off. Here it is:

> **Wave-14 ruling on tinnitus dossier — founder sign-off block:**
>
> 1. **Five wave-13 reviewers converged independently on the inverse-care-law operationalised at the protocol-architecture level.** Mills & Cherry + AYJNISHD + Smith 2024 (paeds); UN-CRPD + EAA 2025 + Sins Invalid + Bauman Deaf-Gain (DJ); COM-B + CFIR + NPT + PROGRESS-Plus (behaviour-change); NICE + IQWiG + PBAC + HITAP + HTAIn quantified BIA showing MVP $25,710/QALY OECD + $2,320/QALY AYUSH-IN reimbursable vs Full Protocol $92,750/QALY un-reimbursable (health-econ); WHO Health Literacy + NHS PIL + transcreation-not-translation (diaspora). One architectural finding, five frameworks. Wave-14 is "picture-perfect at the critique level; unfinished at the architecture level."
> 2. **Wave-14 architectural commit recommendation: Option C — Progressive-Disclosure Re-Architecture + Cost-per-QALY Re-Sort + WCAG 2.2 AA + EAA 2025 + Plain-Language Grade ≤9 + Easy-Read variant + Per-Jurisdiction PPP + UHC Coverage + Paediatric §12.8 + Disability-Justice Surface + Diaspora-Multilingual Glossary-Layer.** Predicted week-12 adherence 40-50% (vs current 10-18%); month-12 sustained-use 30-40% (vs 6-12%); reimbursable by NICE / EUnetHTA / PBAC / CADTH / HITAP / HTAIn; 5%-disposable-income flag passes in 7 of 9 jurisdictions; EAA 2025 enforcement mitigated; audism critique mitigated. TAM expands 5-7x at preserved-or-expanded LTV. ~4-6 weeks single-agent for tinnitus exemplar; 3-5 months to propagate v6.2.7 to 77 sister journeys.
> 3. **Skill v6.2.7 carries 5 net-new load-bearing rules** consolidated from ~30 candidates: Rule 23 cross-tier safety + paediatric overlay + risk-communication; Rule 24 cost-per-QALY + per-jurisdiction PPP + BIA + descending-cost-per-QALY ordering; Rule 25 disability-justice quintet (WCAG 2.2 AA + EAA + plain-language + audism + Sins-Invalid + per-jurisdiction disability-benefit); Rule 26 behaviour-change architecture (MVP-as-default + progressive-disclosure + PREMs + PROGRESS-Plus + NPT); Rule 27 diaspora-multilingual glossary-layer (with full Tier-1 transcreation as Q4-2026 → Q2-2027 Option-D roadmap). Wave-12 + wave-13 rule-number collisions adjudicated; v6.2.6 → v6.2.7 banner increments synchronously with dossier schemaVersion v7.0.0 → v7.1.0.
> 4. **Option D is the natural-target architecture** (federated multi-locale atlas with `next-intl` + Cloud Run multi-region + Tier-1 transcreation live for `hi/zh-cn/zh-tw/ar/es/bn/pt-br/id/fr-mg`). Option C is the wave-14 commit + the Option-D bridge. Tier-1 transcreation budget ~$1.5-2M Phase D-1; Q4-2026 → Q2-2027 roadmap. Founder commits in §0.14 transcreation-roadmap announcement; engineering bandwidth + transcreation budget are Q4-2026 founder decisions.
> 5. **Within-session safety-critical catch-and-fix today (≤30 min):** four paediatric-counterpart fixes to §0 + §3.3 + §7.3 that harm-reduce the most acute paediatric-safety silent miss while Option C is being deliberated and shipped over Batches 1-8.
>
> **Wave-15 dispatch recommendation:** Lactation-Medicine + Perinatal-Pharmacology as Rule-23 completion-check (single-agent, ~6-8 hours); Digital-Health-Engagement + AI-Guru UX as NPT cognitive-participation scaffold operationalisation; Indigenous-Health Knowledge-Holders + First-Nations Medical Sovereignty as six-traditions-doctrine completion-check; Climate + Sustainability + Nagoya Protocol; Quality-Assurance + ISO-Style Certification Auditor.
>
> **Verdict to "continue redteam using different elite experts 5 at a time until there is nothing left to critique and everything is picture perfect for tinnitus":** The redteam has reached critique-saturation at 13 waves. There is nothing structurally new for a fourteenth domain reviewer to surface. There is one architectural commit — Option C — waiting for founder sign-off and 4-6 weeks of single-agent execution to ship. After Option C ships and propagates to the 77-journey atlas, tinnitus crosses the "picture perfect" threshold *as the en + AYUSH-IN exemplar*. Picture-perfect for the global 2.5B+ reader population needs Option D as Q4-2026 → Q2-2027 follow-on.

---

**— Wave-14 Founder-Synthesis Cross-Wave Consolidation Meta-Reviewer, 2026-06-07 (archival date 2026-06-18)**

**Doctrine intact.** Zero US-regulator authority added; six-traditions ≥2 each preserved; OTC + home-only doctrine preserved; honest framing over marketing preserved; founder's standing preferences (commits-as-explanation + push-both-surfaces + single-agent-after-parallel-fleet-failures + tinnitus-as-exemplar + Cochrane-honesty + Strict-non-US-regulator) preserved. Every framework cited in this synthesis (NICE + IQWiG + CADTH + PBAC + HITAP + HTAIn + EUnetHTA + WHO-CHOICE + UN-CRPD + EAA 2019/882 + Sins Invalid + Mingus + Kafer + Garland-Thomson + Bauman + Lane + Padden-Humphries + COM-B + BCW + CFIR + RE-AIM + NPT + PREMs + PROGRESS-Plus + Tudor Hart 1971 + Mackenbach + Marmot + Kashyapa Samhita + Bensky 1986 + Hamdard + IMPCOPS + Men-Tsee-Khang + CCRH + CCRAS + EFSA + WHO Health Literacy + WHO Migration & Health + WHO Cultural Adaptation Framework + NHS PIL + NSW MHCS + EMZ + MiMi + Aravind + AIIMS-FM + PAHO + NMPA termbase + PCRUM Unani + EMA SmPC + Mills & Cherry 1984 + GOSH 1992 + Kentish 2000 CTI + Aazh 2020 + AYJNISHD Mumbai + Smith 2024 Born-in-Bradford + Beach 2023 RMIT + Lee 2024 SNU + Pierre 2024 + Lewis 2022 + Pollard 2023 + Johnson 2002 PHQ-A + WHO 2024 Adolescent Mental Health + Roizenblatt 2010 PSQI-paeds + Owens 2000 CSHQ + Columbia C-SSRS Junior + Gillick v West Norfolk 1985 + Fraser 1985 + Marion's case 1992 + §1626 BGB + MCI + POCSO Act + AYUSH-OCI Bridge Programme + WHO Telehealth & Cross-Border 2023 + EU Cross-border Healthcare Directive 2011/24/EU + Lelak 2022 JAMA Pediatr + ACCP 2022 + Bauer 2003 + KDIGO 2017 + Hilton/Sereda 2013/2022 + Cima 2012 + Megwalu 2006 + Hurtuk 2011 + TENT-A2 Conlon 2022 + Boedts 2024 + Plontke 2020 + WHO TCIM Strategy 2025-2034) is non-US-regulator + non-US-disease-association + non-US-hospital-system, or methodological-provenance-lineage compatible (CFIR + RE-AIM + Tinker + Sandman + Gigerenzer + Bauman/Lane/Padden-Humphries US-academic-peer-review-lineage, same exception class as Cima 2012 Maastricht NL + Megwalu 2006 St Louis MO + Hurtuk 2011 Columbus OH already accommodated as primary-trial-level evidence anchors).

The dossier — once Option C ships — becomes the first evidence-OS in the natural-medicine space any non-US public payor could plausibly endorse for population-scale uptake. The structural test of whether founder doctrine operates at the architectural layer or only the rhetorical layer is met.

Founder's call.
