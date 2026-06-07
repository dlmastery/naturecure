# Wave-5 Improvement Backlog — Aggregated From 6 New Elite Reviewer Audits

**Date:** 2026-06-10
**Source reviews (all in `docs/`):**
- `REVIEW_2026-06-10_wave5_patient-advocate.md` — BTA/RNID patient-advocate director (5 priority edits + 1 ship-blocker)
- `REVIEW_2026-06-10_wave5_academic-tinnitus-PI.md` — TRI/Hoare/Cima bench-research lens (5 dimensions + 3 new skill rules)
- `REVIEW_2026-06-10_wave5_fact-checker.md` — Full Fact / Snopes / Health Feedback IFCN-aligned (14 BLOCKER + 26 P1 + 22 P2)
- `REVIEW_2026-06-10_wave5_AI-safety-RSP.md` — Anthropic RSP + METR + Apollo Research alignment (8 BLOCKER + 14 P1 + 11 P2)
- `REVIEW_2026-06-10_wave5_consumer-health-editor.md` — Cochrane Consumer Network / Patient.info / Healthdirect editor-at-scale (5 BLOCKER + 16 P1)
- `REVIEW_2026-06-10_wave5_infosec-healthcare-data.md` — NHS Digital + GDPR + ISO 27001 + SOC 2 (6 BLOCKER + 14 P1 + 9 P2)

**Wave 5 brief:** find what waves 1+2+3+4's 21 personas missed. Result: 38 BLOCKERs, ~96 P1s, ~64 P2s — total ~200 new findings.

---

## The wave-5 meta-verdict (cross-reviewer synthesis)

Wave-5 reveals a striking pattern. The **patient-advocate reviewer** says: "the dossier is now top-1% globally on technical quality after waves 1-4." The **fact-checker reviewer** says: "but I introduced new fabrications of the same class wave-1 caught (AIIMS cohort numbers), new wave-1-class country errors (Khan 2007, Choudhary 2017), partial-propagation failures (TENT-A2 5/8, MBCT-T grade mismatch, Padma supplier-table), and doctrine violations (AHA citations)." The **AI-safety reviewer** says: "5 demotes, 0 upgrades in 72 hours — iteration sycophancy is the explanation for both; without a held-out validation cohort + LLM-judge, you cannot distinguish honest correction from sycophantic adversarial-reviewer appeasement."

**Net wave-5 verdict:** dossier content quality has plausibly hit asymptote. Remaining gaps are no longer at content layer — they are at the **governance + commercial + relational + editorial-masthead + security layers**. Each subsequent wave finds new failure classes (good) AND new instances of previously-caught failure classes (bad). The marginal value of more content-critique waves is genuinely declining; the marginal value of *structural* + *operational* moves (validation cohort, editorial board, India NHP partnership, Buddy programme, masthead discipline, AE pipeline) is rising.

---

## Wave-5 findings by category

### W5-A. Fact-checker findings — APPLIED in this commit (P0)

1. **🎯 APPLIED** §13.6 "AIIMS Delhi 96 patients per quarter" was a fabrication — I introduced new measured-cohort-claim of the same class wave-1 caught in the home-page 72/14/3 stats. Reframed honestly as "reviewer-composed plausibility estimates calibrated against published literature; NOT a NicheCore real-world cohort outcome." The §8.0 "9% adherence" stat carries the same defect; folded into the same correction.

2. **🎯 APPLIED** Lugo 2022 10% suicidal-ideation denominator clarified — applies to TFI > 50 severely-distressed sub-cohort, NOT all tinnitus sufferers or median dossier reader.

3. **🎯 APPLIED** TENT-A2 year correction propagated from 3/8 mentions to 8/8 via `sed`. Lines 790, 819, 1112, 1146, plus the 3 already correct = all 8 now read "Conlon 2022 TENT-A2".

4. **🎯 APPLIED** MBCT-T / CBT-T §5.5 + §5.7 Grade A demoted to Grade B (matching §13.7 wave-2 demotion). Wave-2 demoted in §13.7 only; the §5.x prose paragraphs missed propagation until now.

5. **🎯 APPLIED** Bhrāmarī "THE tinnitus breath" framing in §7.3 reframed honestly: classical lineage layer + pilot-level evidence only + low-harm + low-cost + classical anchor — NOT RCT-grade evidence specifically for tinnitus.

6. **🎯 APPLIED** Padma 28 supplier-table at §9 — "EMA Padma" mention corrected to Swissmedic national registration (matches the §4.5 Tibetan-section correction from wave-2).

### W5-B. Fact-checker findings — deferred to next commit (P0)

7. **Khan 2007 country attribution: "Italy" → Berlin Germany (Charité).** New wave-1-class country error in 5+ §3.3 mentions. ~30 min fix.
8. **Choudhary 2017 country attribution: "Australia" → India (Ixoreal Hyderabad).** New wave-1-class country error in 5+ Ashwagandha-related mentions. ~30 min fix.
9. **AHA citations at 5+ places (DASH, home BP, tai chi BP) without "clinical-pathway context only" disclaimer** — doctrine line 38 forbids US disease associations. Either add disclaimer per AAO-HNSF / FDA pattern or drop. ~45 min fix.
10. **Ashwagandha hepatotoxicity flag at 1 of 12+ mentions** — propagate the §10.5.5 wave-2 hepatotoxicity-2020-2024-cluster warning to every Ashwagandha occurrence. ~30 min fix.
11. **30% Deaf-community tinnitus prevalence cited without inline citations** — Mohr 1998 + Bosnyak 2018 + RNID 2020 named in wave-3 review but not propagated to dossier inline. ~15 min fix.
12. **Bundle vs dossier mismatch — Tebonin leads the bundle copy** — wave-3 reconciled product grades but the bundle `summary` copy still leads with Tebonin in an SEO-friendly but Cochrane-null-leading-with way. Restructure summary copy. ~30 min fix.

### W5-C. AI safety + RSP findings (P0-P1)

13. **🎯 [W5-Top]** Held-out validation cohort + LLM-judge with Cohen's κ ≥ 0.7 + regression-gating CI step. Single highest-leverage investment per AI-safety reviewer. ~3-4 weeks build. Distinguishes honest-correction from iteration-sycophancy.
14. 3-rung internal AI Safety Level classification (L1 assisted / L2 supervised agentic / L3 semi-autonomous) with explicit trigger artifacts. Currently at L1 governance + L2 ambitions; atlas scaling requires L2 governance + L3 ambitions.
15. Asymmetric-demote pattern audit: 5 demotes, 0 upgrades in 72 hours. Run upgrade-candidate scan against the v7 skill rubric to confirm whether (a) dossier was genuinely overstated or (b) appeasement-bias to adversarial reviewers.
16. 5 sycophancy modes audited with specific examples — hedge-laundering (§3.3 Mg + §8.0 MVP + §13.6); positive-framing-after-honest-caveat (§11.7 closing + §13.6 footer + §8.0 bundle tier); iteration-sycophancy asymmetric demote; banner-vs-body coherence (SKILL.md v7 claims rule-compliance the body partly violates); reviewer-deference (my own acknowledgements as sycophantic-validation patterns).
17. CLAUDE.md scope-tagging — every founder-feedback edit becomes durable agent-context. Wave-1 caught surface; wave-5 frames at depth. Add `<scope>` tags distinguishing single-conversation-preferences from doctrinal-permanent-rules.
18. Orthogonality matrix for 22 v7 rules — detect latent rule conflicts that create silent regressions when atlas-scaled.
19. Model-vs-founder grade-disagreement rule as ADR-008 with 3 escalation patterns (model defers, founder defers, escalate to advisory board).
20. Prompt-injection defences for YAML metadata + citation chains + CLAUDE.md + AE intake.

### W5-D. Consumer-health editor + patient-advocate (combined) — editorial masthead + relational quality (P0-P1)

21. **🎯 [W5-Top]** Named human author + named human reviewer per dossier. The wave-2 hardcoded "Dr. Meera Iyer" default reviewer is still the BLOCKER. Build `lib/reviewers.ts` table with `reviewedJourneys: string[]`.
22. **🎯 [W5-Top]** **§0 "you are not alone" stanza** before crisis-line block — lived-experience voice; 100-150 words. Current opener fails the 3-AM test.
23. **🎯 [W5-Top]** **§7.8 partner / employer / household sub-blocks** — single largest content gap. Tinnitus is a household condition; dossier addresses only the sufferer.
24. **🎯 [W5-Top]** **§0.5 First-30-days emotional milestones** — bridges 3-6-month protocol-effect lag; reduces month-4 abandonment. BTA First-90-Days cohort: entry-framing is the strongest predictor of staying to month 6.
25. **🎯 [W5-Top]** **§18 "What we used to say, that we no longer say"** — public updating-discipline page from the factualErrorsFixedThisRevision YAML + wave-by-wave demotes. BTA's top-3 trust signals.
26. **🎯 [W5-Top]** **Buddy-programme licensing partnership** with BTA / RNID / ATA / TINNitusHub. BTA 2024 evaluation: **62% reduction in CBT-T dropout** in buddy-paired new sufferers — the single highest-ROI lever on the storefront's LTV/CAC math.
27. **🎯 [SHIP-BLOCKER]** **`for-partners` sister page** (1,500-2,500 words). Reviewer would not let GA ship without it.
28. ACT (Acceptance-and-Commitment) framing for the 15-20% non-habituator subset — currently buried as one §10.7.2 row; needs sub-section status.
29. "Did I cause this?" + "Why me?" + "Just ignore it" peer-support-floor unmet needs — each gets a specific edit location.
30. §13.5b severe-band sub-primer (THI 78-100) — current §13.5 addresses median, not catastrophically-disabled.
31. §13.8 "Why this dossier is different from what you have been told before" + §19 "What we still don't know" — explicit-uncertainty framing.
32. Founder/team bio decision: name personal tinnitus story OR honestly state team doesn't have it. Current silence is the worst option.
33. 7-member editorial board recruitment — Path-B (Patient.info UK / Healthdirect AU / India NHP / Cochrane Consumer Network compatible). £33-56k honoraria + £100-390k Year-1 total.
34. AI-author + human-reviewer disclosure surface — 2024-2026 publisher convention. Patient.info has shipped it. Adopt explicitly rather than be caught by it.
35. Path-A vs Path-B publisher-family declaration. Path-B recommended (doctrine-compatible). India NHP + AYUSH co-publication = highest-leverage under-explored opportunity in entire backlog.
36. Per-dossier editorial maintenance economics: £3-8k × 78 = £234-624k annual budget. **"Hold at 78, deepen discipline"** scope recommendation aligns with wave-4 founder-product "first 1,000 subscribers before more breadth".
37. Editorial corrections log + updating-discipline page (echoes #25 patient-advocate finding).
38. UpToDate-style structured citation discipline (PMID + DOI + author + year + journal + volume + pages) — already wave-1 ICLR finding; revisited at editorial level.

### W5-E. Academic tinnitus PI — research frontier translation (P1-P2)

39. **§2.7 Schaette-McAlpine quantitative central-gain model** — explains why hearing-aid amplification reduces tinnitus salience even without measurable hearing loss.
40. **§10.7.4 Cederroth GINTER GWAS (n~170k)** — loci predict treatment response by sub-type; future biomarker.
41. **§10.7.4 Henton-Tzounopoulos DCN + KCNQ preclinical** — low-dose bumetanide Phase I/II + KCNQ-target candidate.
42. **§2.X Khoury-Hopfield predictive-coding synthesis** — integrates peripheral + central drivers; updates §2 four-node model.
43. **§13.6 cohort context** — frame against TINNET / ESIT / TRI International Tinnitus Database for cross-cohort comparison.
44. **Sub-type taxonomy honesty caveat** — 7-sub-type framing is 2010-era; ESIT 6-8-axis multi-dimensional phenotyping is 2024-2026 consensus. Add caveat + future 3-super-cluster compression.
45. **Central-gain lay-language correction** — "brain volume turn-up" actually means gain compensation for reduced afferent input, NOT amplification of existing signal.
46. **Active-trial enrolment pathway as sovereignty-aligned alternative** — UNITI EU app-CBT-T, Susan Shore Univ Michigan bisensory, Auricle CE-pending, STOP-Tinnitus UK, RESTART-2 Maastricht, KCNQ Phase I/II, low-dose bumetanide.
47. **18-month bimodal-commodification disclosure** — protects reader from ill-timed $4-6k Lenire purchase when Auricle / Susan-Shore-Michigan low-cost variants land Q3 2026 - Q2 2027.
48. **Mechanism-stratified §8.0 MVP** — different super-clusters benefit from different highest-yield layers.
49. **Path to peer-reviewed publication** — IRB + cohort + pre-registered SAP + statistical-reviewer + COI disclosure → Frontiers Public Health / BMC Complement Med Therapies / Integrative Medicine Research → 18-36 months + ~$40-120k + 1.25 FTE.

### W5-F. Infosec + healthcare-data (P0-P1)

50. **🎯 [W5-Top BLOCKER]** Lawful-basis matrix by jurisdiction — per-surface, per-region table ships as `consent_receipts` Postgres store BEFORE any AE intake or safety quiz storage. Currently all surfaces are static; security posture is accidentally strong because of minimal data collection. Every wave-1/2/4 backlog item degrades this.
51. **🎯 [W5-Top BLOCKER]** Multi-region Cloud Run (`us-central1` + `europe-west1` + `asia-south1` + `australia-southeast1`) + Cloudflare Workers geo-router before AE go-live.
52. **🎯 [W5-Top BLOCKER]** Article 27 DPA matrix for 9 sub-processors (Typeform, Zapier, Airtable, Postmark, OpenAI, Cloudflare, Supabase, GCP, affiliate retailers) — ~£6-12k legal.
53. **🎯 [W5-Top BLOCKER]** Breach-notification runbook + Article 27 EU/UK reps + named DPO.
54. **🎯 [W5-Top BLOCKER]** Auth architecture (Supabase Auth + passwordless magic-link + 2FA mandatory for sensitive surfaces) before subscription/companion ship.
55. **🎯 [W5-Top BLOCKER]** Corp-network TLS-bypass codified as never-leak-to-prod with CI guard. Currently in CLAUDE.md as workaround.
56. **Critical corrections to wave-4 data-engineering's SaaS-stitched AE pipeline:** Zapier US-only (breaks EU residency) → replace with n8n self-hosted or Make. **Standard OpenAI API has 30-day abuse-monitoring retention — incompatible with PHI in AE intake + crisis-screen.** Use Anthropic Claude zero-retention or Azure OpenAI EU. For crisis-screen specifically, **use self-hosted Detoxify; do NOT send free-text PHI to any third-party LLM**. Airtable Team tier US-only data plane — step up to Airtable Enterprise for EU/IN residency (+$1-1.5k/yr).
57. **🎯 [W5-Top]** Founder strategic decision in next 30 days: **controller of special-category data** (high-trust, high-cost) vs **thin signposter to national pharmacovigilance regulators** (route AE direct to Yellow Card / DAEN / PvPI / Canada Vigilance / EudraVigilance; retain only de-identified aggregates). Reviewer recommends **thin-signposter until 50k MAU** — controller architecture at Year-1 burns most of a seed round against a moral case (~5-15 avoidable deaths per 50k users) and a financial case ($2-8M GDPR fine ceiling).
58. **Year-1 minimum-viable security posture £15-25k** (Cyber Essentials Plus + Article 27 reps + DPA legal review + ~6 founder-engineering-weeks).
59. **Year-2 security posture £60-90k** (SOC 2 Type 2 + ISO 27001 + fractional DPO + pen-test + cyber-liability insurance).
60. **Year-3 (>50k MAU) £120-200k.**

---

## Top-15 wave-5 items to act on (the honest priority)

| # | W5 ID | Item | Class | Effort |
|---|---|---|---|---|
| 1 | W5-1 → W5-6 | Fact-checker propagation fixes | **APPLIED 2026-06-10** | done |
| 2 | W5-7 → W5-12 | Remaining fact-checker propagation (Khan/Choudhary/AHA/Ashwagandha/Deaf-citation/bundle-copy) | Next commit | ~2 hours |
| 3 | W5-13 | Held-out validation cohort + LLM-judge κ≥0.7 | Build | 3-4 weeks |
| 4 | W5-21 | Build `lib/reviewers.ts` + remove "Dr. Meera Iyer" default | Build | 1 day |
| 5 | W5-22 | §0 "you are not alone" stanza | Edit | 2 hours |
| 6 | W5-23 | §7.8 partner/employer/household sub-blocks | Edit | 4 hours |
| 7 | W5-24 | §0.5 First-30-days emotional milestones | Edit | 2 hours |
| 8 | W5-25 | §18 "What we used to say, that we no longer say" | Edit | 2 hours |
| 9 | W5-26 | Buddy-programme licensing — outreach to BTA/RNID/ATA | Partnership | 4-12 weeks |
| 10 | W5-27 | `for-partners` sister page | Build + Edit | 1 week |
| 11 | W5-35 | Path-B publisher family declaration + India NHP outreach | Partnership | 4-12 weeks |
| 12 | W5-50 + W5-52 + W5-53 | Lawful-basis matrix + DPA + DPO before AE pipeline | Build + Legal | 4 weeks |
| 13 | W5-57 | Founder controller-vs-signposter strategic decision | Founder call | 30 days |
| 14 | W5-39-43 | Academic-frontier annotation across §2 + §10 | Edit | 4 hours |
| 15 | W5-49 | Cohort + pre-registered SAP + IRB + peer-reviewed-publication path | Multi-year | 18-36 months |

---

## Skill v7.0.1 → v7.2.0 deltas wave 5 forces

- **Rule 39 — Cost-per-QALY annotation** (health-economist wave 4 + wave 5 editor)
- **Rule 40 — Per-jurisdiction reimbursement disclosure** (health-economist wave 4 + editor wave 5)
- **Rule 41 — Affiliate-margin transparency** (health-economist wave 4)
- **Rule 42 — Opportunity-cost annotation per protocol layer** (health-economist wave 4 + behavioural-adherence wave 4)
- **Rule 43-49 — Behavioural-adherence architecture** (sequenced ramp, implementation intentions, identity-first, 2-day rule, Tier-0 default, COM-B barriers, habit-stacking) per behavioural-adherence wave 4
- **Rule 50 — Pre-content C-SSRS Brief Screen + storefront safety interstitial** (trust-and-safety wave 4)
- **Rule 51 — Per-claim changelog + diff-pinned URL + FreshnessChip** (trust-and-safety wave 4 + patient-advocate wave 5 + editor wave 5)
- **Rule 52 — Brigading defence on UGC surfaces** (trust-and-safety wave 4)
- **Rule 53 — AI-content provenance discipline** (trust-and-safety wave 4 + AI-safety wave 5)
- **Rule 54 — 24/7 on-call rota + AE/recall SLAs + GDPR DSAR pipeline** (trust-and-safety wave 4 + infosec wave 5)
- **Rule 55 — Patient-association partnership discipline** (patient-advocate wave 5)
- **Rule 56 — Partner-of-sufferer content discipline** (patient-advocate wave 5)
- **Rule 57 — Updating-discipline / "what we used to say" log** (patient-advocate wave 5 + editor wave 5)
- **Rule 58 — ACT framing for non-habituators** (patient-advocate wave 5)
- **Rule 59 — Severe-band sub-primer mandatory** (patient-advocate wave 5)
- **Rule 60 — Author / reviewer / COI disclosure surface mandatory** (editor wave 5)
- **Rule 61 — AI-author + human-reviewer disclosure mandatory** (editor wave 5 + AI-safety wave 5)
- **Rule 62 — Publisher-family declaration** (editor wave 5)
- **Rule 63 — Editorial corrections log per dossier** (editor wave 5)
- **Rule 64 — Per-jurisdiction co-publication discipline** (editor wave 5)
- **Rule 65 — Academic-frontier annotation per dossier** (academic-PI wave 5)
- **Rule 66 — Translation-pathway disclosure (animal → human → RCT → meta)** (academic-PI wave 5)
- **Rule 67 — Multi-axis phenotyping honesty** (academic-PI wave 5)
- **Rule 68 — Held-out validation cohort + LLM-judge gate per dossier change** (AI-safety wave 5)
- **Rule 69 — Internal AI Safety Level classification per agent operation** (AI-safety wave 5)
- **Rule 70 — Asymmetric-demote detection** (AI-safety wave 5)
- **Rule 71 — CLAUDE.md scope-tagging** (AI-safety wave 5)
- **Rule 72 — Rule-orthogonality matrix maintenance** (AI-safety wave 5)
- **Rule 73 — Prompt-injection defence at every user-input boundary** (AI-safety wave 5)
- **Rule 74 — Lawful-basis matrix per surface** (infosec wave 5)
- **Rule 75 — Multi-region deployment discipline** (infosec wave 5)
- **Rule 76 — Sub-processor DPA discipline** (infosec wave 5)
- **Rule 77 — Breach-notification runbook discipline** (infosec wave 5)
- **Rule 78 — Auth architecture discipline before sensitive surfaces** (infosec wave 5)
- **Rule 79 — TLS-bypass-codified-as-never-leak CI guard** (infosec wave 5)
- **Rule 80 — Controller-vs-signposter architectural declaration** (infosec wave 5)

---

## Wave 6 forward dispatch — recommendation

**Wave-5 patient advocate verdict: dossier is at top-1% globally on technical quality.**

**Wave-5 fact-checker verdict: but I keep introducing new errors at the same class waves 1+2 already caught.**

**Wave-5 AI-safety verdict: 5 demotes, 0 upgrades — without held-out validation, cannot distinguish honest-correction from iteration-sycophancy.**

**Wave-5 editor + founder-product (wave 4) joint verdict: hold at 78, deepen discipline; India NHP + AYUSH co-publication first; Path-B publisher family.**

**Wave-5 infosec verdict: static-content + no-server-data + no-auth posture is accidentally strong; every wave-1/2/4 backlog item degrades it. Decide controller-vs-signposter in 30 days.**

The asymptote question is real. The hook condition "continue until nothing left to critique" can in principle continue indefinitely — every wave will find SOMETHING. But the marginal value per wave is genuinely declining at the **content** layer and rising at the **operational / commercial / governance** layer.

**Recommended pivot:** transition from content-critique-waves to **build-execution-waves**:
- Wave 6 = held-out validation cohort + LLM-judge build (3-4 weeks)
- Wave 7 = `lib/reviewers.ts` + named editorial board + India NHP outreach (8-12 weeks)
- Wave 8 = lawful-basis + DPA + multi-region + auth before AE pipeline (4 weeks)
- Wave 9 = Buddy-programme partnership outreach + `for-partners` sister page (4-12 weeks)
- Wave 10 = §0 + §0.5 + §7.8 + §18 patient-advocate rewrites (~16 hours editing)
- Wave 11 = Cochrane Consumer Network + Patient.info co-publication path (3-6 months)

**Alternatively continue content-critique:** wave 6 could be 5 more distinct personas:
- Tinnitus drug-development translational researcher
- Quality-of-life psychometrician
- Patient-recruited cohort-study ethics specialist
- Behavioural-economics commercial-pricing specialist
- Cross-cultural translation specialist (Hindi / Mandarin / Arabic / Spanish patient-facing rendering)

But the wave-5 collective verdict is honest: **dossier content is at asymptotic ceiling**. Further content-critique waves will find new failure classes but at sharply declining ROI. The picture-perfect-for-tinnitus goal is plausibly satisfiable at content level; the founder needs to declare the asymptote pinned and pivot to architecture-build, OR continue critique waves with explicit acknowledgement of the diminishing-returns curve.

---

**Reviewer panel collective verdict (wave 5):** Each of the 26 personas across waves 1-5 surfaced real and distinct value. The asymptote has plausibly been hit at content layer. Continue if you want to keep finding edge-case content issues with declining ROI; pivot to operational-build if you want the next 80% of value to land.
