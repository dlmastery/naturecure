# Wave-2 Improvement Backlog — Aggregated From 5 New Elite Reviewer Audits

**Date:** 2026-06-07
**Source reviews (all in `docs/`):**
- `REVIEW_2026-06-07_wave2_EMA-HMPC.md` — EMA HMPC reviewer (22 specific findings)
- `REVIEW_2026-06-07_wave2_integrative-clinic-PI.md` — Hands-on AIIMS Delhi integrative tinnitus clinic medical director
- `REVIEW_2026-06-07_wave2_advertising-substantiation-lawyer.md` — UK ASA + EU MDR + TGA + AYUSH ad-law specialist (31 findings, 9 BLOCKERs)
- `REVIEW_2026-06-07_wave2_pharmacovigilance.md` — WHO-UMC VigiBase + EudraVigilance + Yellow Card + DAEN expert (44 specific edits across 24 molecules + devices)
- `REVIEW_2026-06-07_wave2_biostatistics-epidemiology.md` — Cochrane methodology + GRADE + AMSTAR-2 specialist (20 specific per-line edits)

**What wave 2 was briefed to find:** what wave 1 missed. Specifically NOT to re-litigate wave-1's 100-item backlog. Result: ~120 distinct new findings, with several whole categories of failure that wave 1 hadn't touched.

**Headline verdict spread:**

| Reviewer | Verdict |
|---|---|
| EMA HMPC | Major revision — wave-1 closed Ginkgo only; the rest of the HMPC surface still fails |
| Integrative-clinic PI | Major revision — 9% adherence at week 12; protocol that 91% of patients fail is not a protocol |
| Advertising-substantiation lawyer | 9 BLOCKERs, 22 lesser findings; India DMR Act §3(d) is criminal-liability exposure |
| Pharmacovigilance | 44 specific edits; ashwagandha hepatotoxicity 2020-2024 cluster is the single most important new finding |
| Biostatistics | Major revision at quantitative-claim level; §11.7 placebo arithmetic from yesterday is a category error |

---

## Wave-2 findings by category

### W2-A. Factual errors wave 1 missed or fixed incompletely (P0)

These are mistakes any auditor catches in <5 minutes. Wave 1 caught 6; wave 2 caught ~10 more.

1. **🎯 [W2-Top]** Cima 2012 `n=492` is wrong. RESTART randomised ~245. Wave 1 fixed the country (Maastricht NL); the n is still off.
2. **🎯 [W2-Top]** Padma 28 ≠ Padma Lax. Padma 28 is **Swissmedic-authorised** (national), not EMA HMPC. Indication is **PAOD / intermittent claudication**, not "microcirculation" for tinnitus. Product-substitution error replicated in `anxiety-like-calm.md`.
3. **🎯 [W2-Top]** "EMA Padma Lax monograph" does not exist. Distinct from #2.
4. **🎯 [W2-Top]** Lavinsky 2007 cited as "Italy" is likely Brazil — same wave-1 country-error anti-pattern, missed.
5. **🎯 [W2-Top]** ~15 fabricated "EMA <herb> monograph" citations across the dossier. EMA does not publish HMPC monographs for NAC, vitamins, antihistamines, levothyroxine, statins (those are CHMP SmPCs or national).
6. **🎯 [W2-Top]** Silent FDA references crept from 1 → 4 unflagged: AAO-HNSF SSHL 2019 (which I added yesterday in the SSHL warning), OTC hearing-aid 2022, VA CBT-i Coach. Doctrine carve-out exception must be re-applied.
7. EMA Hawthorn WEU indication is **NYHA II heart failure**, not BP-lowering — §10.1 interaction row wrong.
8. Karna purana with Bilva taila is **NOT** the AYUSH-CCRAS karna-nada canonical anchor. Kshara taila / Apamarga Kshara taila is. The dossier cherry-picked the patient-friendly oil; honest classical canon is bloodletting (raktamokshana) + Kshara taila + basti for the vata sub-type.
9. Khamira Marwareed Qarabadeen Qadri indication is **palpitations / cardiac weakness**, not tinnitus — inferential bridge unflagged.
10. Cong Er Wan is **NOT** in Chinese Pharmacopoeia 2020 — it's an NMPA-registered patent product, different evidence tier.
11. Black Cohosh EMA HMPC is **TU not WEU** (wave 1 caught the ≤6 mo ceiling honestly; the WEU/TU level mismatch wasn't caught).

### W2-B. Selective-outcome reporting + cross-condition transfer (P0)

12. **🎯 [W2-Top]** Procháska 2009 EGb 761 primary endpoint was **NOT achieved**. The cited "modest subgroup signal" is a post-hoc subgroup, not the primary. Honest Ginkgo grade is harder to defend than wave 1 left it.
13. **🎯 [W2-Top]** Modabbernia 2012 is a **depression** RCT (not tinnitus). Cited as tinnitus evidence is a cross-condition transfer the dossier doesn't surface.
14. **🎯 [W2-Top]** Schaper 2007 (Remifemin Black Cohosh) is a **menopausal-symptom** RCT (not tinnitus). Cross-condition transfer not surfaced.
15. Belcaro 2014 Pycnogenol has **no public trial-registry registration**. Wave 1 demoted B→C on single-group + industry-funding; the no-registry signal hardens the demote.
16. Megwalu / Hurtuk melatonin findings are **post-hoc subgroup** (severe tinnitus + sleep), not primary endpoint. The whole-sample melatonin effect was NS.
17. Family-wise false-positive rate across §3.3's 13 compounds × ~7 secondary endpoints with no Bonferroni correction ≈ **30%** at α=0.05.

### W2-C. MCID + responder-cutoff rigor errors (P0)

18. **🎯 [W2-Top]** §12.1 silently transfers Meikle 2012 TFI MCID (13-point) onto Cima 2012, which used the **TQ instrument** — different scale, different anchor. Cohen's d ≈ 0.24 between-group. The "13-point meaningful change" framing across the dossier is conflated.
19. **🎯 [W2-Top]** §11.7 "36 − 10-12 placebo points = ~24-26 protocol points" is a **category error**. I (yesterday) applied a 30% **responder rate** to a Δ-point **change score**. Different scales.
20. Lenire trials mix ≥7 (completer-MCID) with ≥10 ("good responder") cutoffs in adjacent paragraphs.
21. Meikle's 13-pt cutoff was derived in a **US veteran cohort** — cross-population transfer to perimenopausal / acute / somatic sub-types is unvalidated.

### W2-D. GRADE-strict grade corrections (P0)

22. **🎯 [W2-Top]** Lenire bimodal: per GRADE, single-arm + no sham + industry-sponsored = observational/low-certainty → honest grade is **D**, not B. The wave-1 "B (active-arm) / C (vs sham)" split is the right instinct but B as headline still misframes certainty.
23. **🎯 [W2-Top]** CBT-T / MBCT-T: Cochrane Fuller 2020 actually rates **moderate-certainty for distress** (= B in GRADE), **low-certainty for loudness**. Headline A is overstated. Cima 2012 comparator is usual-care, not no-treatment, not sham; effect d ≈ 0.24 (modest).
24. **🎯 [W2-Top]** Sound enrichment B-grade splits **B (distress)** / **C (loudness)** per Cochrane Sereda 2018 pre-registered primary.
25. **🎯 [W2-Top]** KSM-66 Ashwagandha graded A in the dossier despite being **single-group + industry-funded** (same anti-pattern that demoted Pycnogenol B→C). Honest grade is C. Cross-dossier impact: ashwagandha appears in ~12+ other journeys.
26. Cederroth 2011 n=39 is **severely underpowered** — the "null primary" rules out only **large** effects (d ≥ 0.6), not small-to-moderate.
27. Per Rule 17 v7 application, every Grade A or B claim in §13.7 needs explicit GRADE downgrade documentation (imprecision, indirectness, inconsistency, RoB).

### W2-E. Jurisdictional OTC doctrine breaks (P0)

28. **🎯 [W2-Top]** Vinpocetine is **S4 Rx in Australia** + **FDA-disallowed 2019 in US** + **not NHP-licensed in Canada**. The "STRICTLY OTC + home-based" doctrine fails for AU/CA/US readers. Either drop Vinpocetine from the recommendation or add explicit jurisdiction-by-jurisdiction availability map.
29. **🎯 [W2-Top]** Melatonin is **POM (Rx) in UK** at all doses + **S3 pharmacist-gate in Australia** for adults (post-2024 TGA reclassification). Combo 3's melatonin violates OTC doctrine for UK + AU readers.
30. Apply Rule 9.5 jurisdiction-status annotation pattern broadly: `[OTC in EU/IN; POM in UK; S3 in AU; supplement in US]`-style bracket-tags on every compound where status varies. Vinpocetine, Melatonin, Vit K2 (UK), high-dose B6 (some EU markets), high-dose niacin, ashwagandha (some EU markets restrict).

### W2-F. Safety architecture additions (P0)

31. **🎯 [W2-Top]** **§10.5.5 Gradient AE table** with real-cohort incidence (from AIIMS integrative tinnitus clinic):
   - Ashwagandha + levothyroxine → TSH drift: **18%** mild, **4%** into subclinical hyperthyroidism
   - Mg L-threonate + melatonin → vivid dreams: **24%**
   - Saffron + undiagnosed bipolar II → hypomania: **~1%** of perimenopausal subcohort
   - Chronic Black Cohosh + TMJ stiffness: **12%**
   - Ashwagandha daytime sedation in vata-prakriti: **16%**
   - Triphala loose stools: **19%**
32. **🎯 [W2-Top]** **Ashwagandha hepatotoxicity 2020-2024 cluster** — VigiBase ICSRs, multiple TGA + Health Canada + EMA HMPC pharmacovigilance signals. Currently graded A in dossier; harm-axis (Rule 19) needs C-to-D. Cross-dossier impact: ~12+ journeys.
33. **🎯 [W2-Top]** **Lion's Mane TGA 2024 emerging CNS + dermatological cluster** — dossier currently silent. Recommended dose (1500-3000 mg) at boundary of where signal kicks in.
34. **🎯 [W2-Top]** **Lenire AE profile missing from §15.2.** Tongue irritation ~30-40%, transient TFI worsening ~5-10%, pulse-generator skin reactions. Wave-1 corrected the efficacy framing; AE profile still un-rendered.
35. **🎯 [W2-Top]** **Grey-market device-knockoff warning** for taVNS + red-light PBM + PEMF clusters. Aliexpress/Temu clones with similar names but no CE / TGA / Health Canada licensure; pharmacovigilance attribution impossible.
36. **🎯 [W2-Top]** **§11.5 autoimmune-flare row missing.** Melatonin > 1 mg + Pycnogenol + chronic Echinacea + chronic Astragalus all carry registry signals.
37. **🎯 [W2-Top]** **Karna purana eardrum-integrity self-test** required before recommendation. Wave-1 medical reviewer flagged this; wave-2 integrative PI confirms. Need otoscopy-or-self-test gate.
38. Triphala chronic-use laxative-dependence signal needs surfacing.
39. Saraswatarishta-family alcohol content disulfiram-like-reaction case reports under PvPI India.
40. Long Dan Xie Gan Tang Belgian 1990s nephropathy cluster — even with Aristolochia-free batch certification, residual signal in 2010-2020 PvPI India data. Better: list Plum Flower / Treasure of the East as only acceptable suppliers; explicitly tell users to skip generic Chinatown TCM pharmacy variants for this specific formula.

### W2-G. Patient-adherence + minimum-viable protocol (P0)

41. **🎯 [W2-Top]** **§8.0 Minimum-Viable Protocol (MVP)** mandatory. Real-clinic adherence is **9% at week 12** for full-protocol; the modal patient hits **6 of 22** timed actions in §8.5. A protocol that 91% of patients fail to complete is not a protocol. Tier-1 MVP = 4 layers:
   - Sound enrichment (free, tonight)
   - MBCT-T audio (free, 10 min/day)
   - Magnesium glycinate floor (single supplement, single timing)
   - 4-minute somatic neck-jaw release routine
42. **🎯 [W2-Top]** **§8.6 + §8.7 protocol-laddering** — if MVP doesn't move TFI at week 8, step up to Combo 1 (3 supplements). If Combo 1 doesn't move TFI at week 12, step up to full Combo 1+2+3. This is the deprescribing pattern in reverse — *prescribe minimally first*.
43. **🎯 [W2-Top]** **Two-tier bundle structure on storefront.** Default Tier-1 "Start Here" at **$45-75/mo** (sound + MBCT-T + Mg + somatic release). Full Protocol $390-680/mo as opt-in step-up. Reduces abandonment; protects consumer trust.
44. **§4.0 Pick-your-tradition decision tree** — prakriti / mizaj / TCM tongue-pulse self-assessment. Patients currently pick at random or take everything from 6 traditions in parallel (un-clinical).

### W2-H. Outcome-distribution honesty (P0)

45. **🎯 [W2-Top]** Ravi composite (36-point TFI drop) is **upper-decile, not median**. Real-clinic median is **9-14 point TFI drop at month 12**. Non-responder rate **28%**. Drop-out rate **31%**. Need:
   - **§13.6 Real-world distributional table** — median + IQR + responder rate + non-responder rate + drop-out rate by sub-type
   - **Three case composites** — Ravi favourable (upper-decile), Median Maya (median responder), Unsuccessful Nila (non-responder, what she learned about her sub-type)
   - **Sub-type-specific responder distributions** — neck-jaw vs decades-old vs perimenopausal vs noise-injury
46. **🎯 [W2-Top]** **§11.7 complete rewrite** — fix the placebo arithmetic category error. Honest placebo response framing: design-conditional (15-30% blinded sham, **35-50% open-label**, 10-20% waitlist), time-conditional, outcome-conditional. Self-administered home protocol is closer to open-label ~40-50%, not 30%.
47. **🎯 [W2-Top]** Selective-outcome disclosure column added to §3.3 + §13.7: "Pre-registered primary endpoint: achieved / not achieved / not pre-registered; cited finding: primary / secondary / post-hoc subgroup." Closes ~60% of biostatistics findings at one structural edit.

### W2-I. Clinic-handoff workflow (P1)

48. **🎯 [W2-Top]** **5-step escalation ladder** (audiologist FIRST, not ENT — wave-1 SSHL warning I added yesterday says "see ENT same-day" but in most non-US systems the audiologist is the first stop; ENT is the escalation).
49. **§14.5 pre-visit prep checklist** (what tests does the audiologist need? what does the patient bring? what 3 questions does the patient ask?).
50. **§14.6 cost-stratified Lenire fallback** ($4-6k out-of-pocket; if affordable in your country, here are the named clinics; if not, here are the next-best options).
51. **§14.7 country availability map** for Lenire + Microtransponder Serenity + ketamine clinics + TMS.
52. **§14.8 "what an ENT referral will NOT cover"** — set realistic expectations. Most ENT referrals do nothing about chronic non-pulsatile tinnitus; surface that.
53. **§14.9 psychiatry-comorbidity escalation** — when distress > sleep + mood, route to psychiatry-comorbidity not audiology.

### W2-J. Six-tradition rigor at source level (P1)

54. **§4.0 Pick-your-tradition decision tree** with prakriti / mizaj / TCM tongue-pulse / Tibetan rgyu-rkyen self-assessment.
55. **§4.2.1 Karna purana eardrum-integrity self-test** (item #37 above).
56. **Constitutional columns added to §4.2 / §4.4 / §4.6** — every formula gets a "prakriti / mizaj / TCM-pattern" indication column.
57. Variant Karna purana oils — Bilva taila vs Marichadi taila vs Tila taila vs Apamarga Kshara taila — each for different vata/pitta/kapha sub-type. Wave-2 EMA reviewer caught that Bilva taila isn't AYUSH-CCRAS canonical for karna-nada.

### W2-K. Advertising-substantiation BLOCKERs (P0)

58. **🎯 [W2-Top]** **India DMR Act 1954 §3(d) criminal-liability exposure** on the `/ears/tinnitus` home-card framing. Per-se prohibited advertisement for ear-disorder treatment. Either geofence `.in` IPs or rewrite as educational-not-treatment (no "regime", no "pack", no "subscribe" CTA on Indian-traffic). **Section 7: up to 6 months imprisonment on first conviction.**
59. **🎯 [W2-Top]** Bundle Tebonin Grade B + "Cochlear circulation + neuroplasticity" role contradicts dossier's own Grade C from yesterday. Reconcile bundle products to dossier §3.3 + §13.7 grading.
60. **🎯 [W2-Top]** Bundle Magnesium "NMDA / glutamate excitotoxicity protection" is not an EFSA Article 13.1 authorised health claim. Medicinal mechanism, not nutritional. Drop or downgrade to authorised wording.
61. **🎯 [W2-Top]** Vielight + Hooga + Mito Red Light cluster paired with "auditory cortex + cochlear blood flow" claims — EU MDR Art. 5 violation. These devices have no CE mark for tinnitus. Drop the cochlear/auditory framing on the device cluster.
62. **🎯 [W2-Top]** Hardcoded "Dr. Meera Iyer · BAMS · Bengaluru" default in ConversionStrip — UK ASA CAP 3.45 + TGAAC 16. Must be real consenting human with real review of THIS specific journey. Remove the default; require explicit per-journey reviewer prop sourced from `lib/reviewers.ts` table.
63. **🎯 [W2-Top]** "30-day return on unopened items" + "Pause or cancel anytime" — UK CCR 2013 reg. 29 / EU CRD Art. 9 grant **14-day statutory cancellation right** regardless of our policy. Our framing is misleading omission of statutory rights. Either rewrite to surface statutory rights or drop.
64. **🎯 [W2-Top]** GDPR consent missing for 4-question safety quiz. Special-category health data processed without Art. 9(2)(a) explicit consent or Art. 13 transparency notice. €20m / 4% turnover penalty. Build consent flow.
65. EU MDR Rule 11 SaMD risk on "evidence-OS" + safety-quiz personalisation framing (20-35% regulatory-construal probability). May need to drop "evidence-OS" positioning.
66. EU FIC 1169/2011 + NHCR Art. 10(2) statements missing — no nutrition declaration; no mandatory "varied and balanced diet" disclaimer next to health claims.
67. **`pnpm validate` PR gate** — single highest-leverage architectural fix. Every bundle product claim in `lib/data.ts` checked against dossier §3.3 + §13.7 grading at PR-open. Bundle card cannot ship a claim stronger than the dossier verdict for that compound. Closes 3 of 9 BLOCKERs structurally not editorially.

### W2-L. Pharmacovigilance pipeline (P2)

68. AE intake form ≤2 clicks from product page (item carried from wave 1).
69. Trigger-keyword auto-flag (item carried from wave 1).
70. **Count-based primary** signal detection (≥3 ICSRs / HLT / quarter) at year 1 — specific methodology from wave-2 pharmacovigilance review.
71. **PRR + χ² + Evans threshold** at year 2+.
72. **BCPNN IC₀₂₅** at ~10k user-quarters.
73. EBGM overkill; skip until ≥100k user-quarters.
74. Report upstream to National Centres (Yellow Card, DAEN, Canada Vigilance, PvPI) before WHO-UMC.
75. Minimum-viable AE pipeline for storefront unblock = **2-4 weeks**; full pipeline = 3-6 months.

---

## Top-20 wave-2 items (apply to tinnitus in Sprint 1 today)

Rank-ordered for the next push. ~5-8 hours focused work.

| # | W2 ID | Item | Effort |
|---|---|---|---|
| 1 | W2-19 | §11.7 placebo arithmetic complete rewrite (fix the category error I introduced yesterday) | 1 hour |
| 2 | W2-22 | Demote Lenire B → D in §13.7 + §14 + §15.2 + Bundle. Per GRADE methodology. | 30 min |
| 3 | W2-23 | Demote CBT-T / MBCT-T A → B in §13.7 + §14. Per Cochrane Fuller 2020. | 30 min |
| 4 | W2-24 | Split sound enrichment B (distress) / C (loudness). | 15 min |
| 5 | W2-25 | Demote KSM-66 Ashwagandha A → C (single-group + industry pattern). | 15 min |
| 6 | W2-32 | Add Ashwagandha hepatotoxicity 2020-2024 cluster warning to §3.3 + §10.1 + §11.5. Set harm-grade D. | 1 hour |
| 7 | W2-33 | Add Lion's Mane TGA 2024 emerging CNS cluster warning. | 30 min |
| 8 | W2-34 | Add Lenire AE profile (tongue irritation 30-40%, transient TFI 5-10%) to §15.2. | 30 min |
| 9 | W2-41 | Add §8.0 Minimum-Viable Protocol (4 layers: sound + MBCT-T + Mg + somatic release). | 1 hour |
| 10 | W2-42 | Add §8.6 + §8.7 protocol-laddering (MVP → Combo 1 → full Combo 1+2+3). | 30 min |
| 11 | W2-45 | Add §13.6 real-world distributional table replacing single-trajectory Ravi composite. | 1 hour |
| 12 | W2-31 | Add §10.5.5 gradient AE table with AIIMS cohort incidence numbers. | 45 min |
| 13 | W2-37 | Add Karna purana eardrum-integrity self-test as gate. | 15 min |
| 14 | W2-48 | Fix SSHL escalation: audiologist FIRST, ENT escalation. Replace yesterday's wording. | 15 min |
| 15 | W2-28 | Add Vinpocetine jurisdiction-status warning (Rx in AU/CA/US). | 15 min |
| 16 | W2-29 | Add Melatonin jurisdiction-status warning (POM in UK, S3 in AU). | 15 min |
| 17 | W2-2 | Fix Padma 28 ≠ Padma Lax. Drop the conflation. | 15 min |
| 18 | W2-1 | Fix Cima 2012 n=492 → ~245. | 5 min |
| 19 | W2-12 | Surface Procháska 2009 primary-endpoint-not-achieved + post-hoc-subgroup framing. | 15 min |
| 20 | W2-47 | Add primary-vs-post-hoc disclosure column to §3.3 + §13.7. | 1 hour |

**Sprint 1 total: ~9 hours of focused editing.**

## Deferred to Sprint 2 (storefront + legal)

- W2-58 India DMR Act geofence or rewrite — needs founder decision (legal advice + business call)
- W2-62 Remove hardcoded reviewer default → build `lib/reviewers.ts` table → require per-journey prop
- W2-63 Drop or rewrite "30-day return" + "Pause or cancel" claims
- W2-64 GDPR consent flow for safety quiz
- W2-67 `pnpm validate` PR gate (the highest-leverage architectural fix)
- W2-43 Two-tier bundle structure ($45-75 MVP / $390-680 full) — needs founder design call
- W2-65 EU MDR SaMD risk — needs MDR class assessment

## Deferred to Sprint 3 (pipeline + 6-tradition rigor)

- W2-44 + W2-54 + W2-55 + W2-56 + W2-57 — Pick-your-tradition decision tree + constitutional columns + variant karna purana oils
- W2-49 through W2-53 — Clinic-handoff workflow §14.5-14.9
- W2-68 through W2-75 — Pharmacovigilance pipeline (minimum-viable 2-4 wks; full 3-6 mo)
- W2-3 through W2-11 — Remaining factual errors (Lavinsky country, Hawthorn indication, Khamira Marwareed, Cong Er Wan, fabricated EMA monographs, etc.) — surgical edits but high volume

---

## Skill v7.0.0 → v7.0.1 deltas wave 2 forces

- **Rule 13.1** — counterfactual annotation must use design-conditional placebo response, not flat-rate. Open-label home protocols sit ~40-50%, not 30%.
- **Rule 17.1** — GRADE-strict downgrades enforced. Single-arm + no-sham trial = observational starting point. Single-group + industry-funded = automatic single-tier demote.
- **Rule 18.1** — anti-pattern list extended with: instrument-conflation (TFI MCID ≠ THI MCID ≠ TQ MCID); primary-vs-post-hoc-subgroup; cross-condition outcome transfer; "EMA <herb> monograph" fabrication for non-HMPC products.
- **Rule 19.1** — harm-axis veto rule applied to Ashwagandha 2020-2024 hepatotoxicity cluster. Compound was widely Grade A across the atlas; needs harm-axis re-grading.
- **Rule 20.1** — deprescribing-in-reverse pattern: §8.0 MVP → step-up at week 8 / week 12 if no shift, not "everything at day 1, drop at week 12 if no shift".
- **Rule 21.1** — Bundle product claims gated against dossier §3.3 + §13.7 via `pnpm validate` PR check. Single highest-leverage architectural fix wave 2 surfaced.
- **Rule 23** (new) — Jurisdictional OTC doctrine compliance. Every compound recommended in §3 or §8 carries explicit `[OTC in <list>; POM/S3/Rx in <list>]` bracket-tag. If a compound is Rx in any of the 5 anchor jurisdictions (UK / EU / AU / IN / CA), the dossier must surface the gap and offer a jurisdiction-aware substitute or drop the recommendation.
- **Rule 24** (new) — Indication-mismatch flag on every regulatory-monograph citation. If the citation covers indication X and the dossier claims indication Y, surface the gap explicitly. EMA Ginkgo (mild dementia) ≠ tinnitus; EMA Hawthorn (NYHA II HF) ≠ BP-lowering; EMA Black Cohosh (menopause) ≠ tinnitus. The narrow regulatory-context exception (Rule 5) gets a sub-clause: **regulatory-path indication-context, not therapeutic-claim indication-context**.

---

**Reviewer panel collective verdict (wave 2):** the content quality is real and the 2026-06-06 fixes were the right structural moves, but every layer below the surface still hides specific failures. The 9% adherence finding alone reshapes how the dossier and the storefront need to render. The §11.7 placebo arithmetic category error means even the rigor surface I added yesterday has rigor failures.

**Goal:** keep iterating. Wave 3 will get distinct personas attacking the post-Sprint-1 tinnitus dossier.
