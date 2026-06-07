# Wave-3 Improvement Backlog — Aggregated From 5 New Elite Reviewer Audits

**Date:** 2026-06-08
**Source reviews (all in `docs/`):**
- `REVIEW_2026-06-08_wave3_ENT-audiology.md` — Senior ENT + audiology specialist (20 specific edits, hardware-safety-adjacent findings)
- `REVIEW_2026-06-08_wave3_health-info-UX.md` — Health-information UX researcher (47 findings; FKGL + WCAG-AA + cognitive load + translation-readiness)
- `REVIEW_2026-06-08_wave3_classical-text-scholar.md` — Senior multi-tradition classical scholar (38 findings, 5 scripts × 6 traditions)
- `REVIEW_2026-06-08_wave3_supplement-QC.md` — Analytical chemist + COA specialist (per-brand chemistry + Saper paradigm + device QC + recall pipeline)
- `REVIEW_2026-06-08_wave3_disability-inclusion.md` — Disability-inclusion + Deaf-community + accessibility specialist (6 BLOCKERs + ~22 P1)

**Wave 3 brief:** find what waves 1+2 missed. Result: ~140 new findings, with several new failure classes that previous waves couldn't reach.

**Headline verdict spread:**

| Reviewer | Verdict |
|---|---|
| ENT / audiology | Major revision — my wave-2 SSHL audiologist-first routing is partly wrong; 7 major comorbidities under-covered |
| Health-info UX | Major revision — FKGL 14.6 (US college-graduate) vs NHS bar 6-7; 19 WCAG-AA violations; cognitive load 120 vs capacity 7 |
| Classical-text scholar | Major revision — cross-tradition aetiology incoherence; transliteration absent across 5 scripts; verse-level rigor missing |
| Supplement QC | Major revision — score 4/2/3/3/1; no lot traceability; "Verified reseller" cipher in bundle data |
| Disability-inclusion | Major revision — 4 §5 interventions flatly contraindicated for CI users + no crisis-line routing despite Lugo 2022 10% suicidal ideation rate |

**Total wave-3 BLOCKERs:** ~10 new, plus 2 safety-critical (CI hardware + crisis-line) already applied in this same commit.

---

## Wave-3 findings by category

### W3-A. Safety-critical BLOCKERs (applied in commit alongside this backlog)

1. **🎯 [W3-Top, APPLIED]** **Cochlear-implant hardware-safety BLOCKER.** Four §5 interventions flatly contraindicated for CI users — none flagged. Damage to receiver-stimulator costs $30-50k. Fixed: added CI red-flag block to top of dossier; CI + active middle-ear implant rows added to §11.5; §5.10 / §5.12 / §5.14 contraindications updated.
2. **🎯 [W3-Top, APPLIED]** **Mental-health crisis-line BLOCKER.** Lugo 2022 — ~10% of tinnitus-distressed users carry suicidal ideation. No crisis routing despite §11 using PHQ-9. Fixed: added crisis-line block at top with country lines (Samaritans / 988 / Lifeline / iCall / Vandrevala / 112) + Deaf-friendly (SignHealth, 988 video relay, National Deaf Therapy) + LGBTQ+-friendly (Switchboard UK, Trevor Project); added PHQ-9 item-9 positive screen to §11.6 exclusions.

### W3-B. Clinical-workflow precision (P0)

3. **🎯 [W3-Top]** SSHL audiologist-first routing is partly wrong. UK NHS audiology cannot prescribe corticosteroids (actual route is GP → A&E → ENT on-call); Germany is HNO-direct; India is tertiary-hospital ENT-OPD with audiology embedded. Tighten the 14-day → 72-hour optimal framing.
4. **🎯 [W3-Top]** OTC hearing aids are US-only regulatory category 2026 — same regulatory error as wave-2 Vinpocetine + Melatonin. Add **Apple AirPods Pro 2 hearing-aid mode (iOS 18.1+, ~$249)** as the global equivalent.
5. **🎯 [W3-Top]** Smartphone audiograms (Mimi, EarTrumpet, SonicCloud) miss mid-frequency notch loss 30-50% and cannot distinguish conductive from sensorineural. Reframe as "screening tool only", not "baseline hearing test".
6. **🎯 [W3-Top]** Clinic-grade tinnitus-specific maskers missing — name **Widex Zen, Phonak Tinnitus Balance, Oticon Tinnitus SoundSupport, ReSound Tinnitus Relief, Starkey Multiflex, Signia Notch** as the highest-impact intervention for tonal-HL sub-type (~40-60% of presentations).
7. Audiology assessment battery omits ~70% of standard test set — add bone-conduction, tympanometry, acoustic reflex thresholds, DPOAEs, speech-in-noise (QuickSIN / LiSN-S), residual inhibition, LDLs, HHIA.
8. Pulsatile workup currently unsafe. Add structured ladder: MRI+MRA+MRV first-line → HRCT temporal bone second-line → DSA third-line + IIH workup; pulse-synchronous vs non-pulse-synchronous distinction (palatal myoclonus, stapedial myoclonus, patulous eustachian tube → ENT nasendoscopy, NOT vascular imaging).

### W3-C. Seven tinnitus comorbidities under-covered (P0)

9. **🎯 [W3-Top]** **Hyperacusis** — 1-in-3 chronic tinnitus has co-hyperacusis. Needs Loudness Discomfort Levels + TRT — NOT earplug protection (counterintuitive but load-bearing).
10. **Misophonia** — different mechanism (limbic-system), different treatment.
11. **Musical ear syndrome** (Charles-Bonnet-of-the-ear in elderly hearing loss).
12. **Ménière diagnostic pathway** — Bárány criteria + betahistine as EU/AU/IN first-line + tighter <1500 mg sodium target (dossier mentions Ménière briefly but doesn't surface diagnostic pathway).
13. **Vestibular schwannoma MRI-trigger** for chronic asymmetric tinnitus — delayed-diagnosis risk if patient follows home protocol for 6 months without MRI.
14. **Conductive vs sensorineural tinnitus distinction** — otosclerosis, OME, perforation, cholesteatoma — §8 antioxidant stack does nothing.
15. **Perilymph fistula + superior semicircular canal dehiscence** as post-trauma / barotrauma red flags.

### W3-D. Deaf-community / CI / accessibility (P0)

16. **🎯 [W3-Top]** §1 framing presupposes hearing reader. ~30% of culturally-Deaf adults have tinnitus. Add **§5.20 non-auditory perceptual-pathway protocol** (vibrotactile via Lechal/Buzzclip/Subpac; visual via fractal-pattern displays; Sensate cervical-vagal away from CI) + new **§2.7 Deaf sub-type** + Deaf-led MBCT-T (RNID BSL 2022, Auslan, ISL-NAD) + TFI/THI Deaf-validation note.
17. CI-specific protocol — sound therapy delivered via CI processor itself (Cochlear Custom Sound / Advanced Bionics Target / MED-EL Maestro have built-in tinnitus-modulation programs).
18. §8.0.1 zero-cost protocol surfaced (the $0/month pathway already exists in dossier; surface it).
19. §8.0.2 65+ falls-risk MVP — Mg + melatonin + Ashwagandha stack at 65+ is documented falls-risk; need a dedicated minimum-viable version.
20. §1.6 cognitive-accessibility framing (autism + pink/brown noise vs white; §5.10 epilepsy contraindication; learning-disability + 22-action master timetable mismatch).

### W3-E. Reading age + UX + WCAG-AA (P0-P1)

21. **🎯 [W3-Top]** **FKGL 14.6 (US college-graduate)** vs NHS bar 6-7. Even "For you, in plain words" paragraphs sit at FKGL 13. The "9th-grade" mandate has been failing at empirical measurement since v6.1.
22. My §8.0 MVP has internal contradiction: "5+ point TFI drop at week 8" vs §11.2's 13-point MCID. Fix: align to 7-point completer-MCID or restate as Δ-on-self-rating.
23. **🎯 [W3-Top]** 19 specific WCAG 2.2 AA violations with component:line + success criterion. Contrast fails on `--color-warn` (3.92:1) + `--color-ink-faint`/`--color-paper-deep` (3.95:1). Tab traversal ~30 stops. Tap targets 32px below 44px EAA bar. No `lang=` on Sanskrit/Mandarin/Arabic/Tibetan/Tamil transliterations.
24. **🎯 [W3-Top]** Cognitive load 120 safety constraints vs working-memory ~7. Build per-compound "safety registry" so each compound's safety shows once not 4×; build dynamic exclusion filtering.
25. **🎯 [W3-Top]** No 90-second read-mode. Full dossier 52 min. Build "read in 90s" tile for stressed-mobile readers.
26. USD-only pricing; US street addresses. Add €/£/₹/A$/C$ render + UK / EU / AU / IN supplier addresses.
27. Idiom-translation loss ~15-20% on Hindi round-trip. "Snake oil" and "kitchen table" don't translate. Localise.
28. Six-traditions read as if peaked centuries ago. Add "Living lineage" annotation showing contemporary practitioners.

### W3-F. Classical-text source-rigor (P0-P1)

29. **🎯 [W3-Top]** Cross-tradition aetiology incoherence — the deepest critique. The 6 traditions assert MUTUALLY EXCLUSIVE aetiology frameworks (vāta-pradhāna vs kidney-yin-deficiency vs damawī vs rlung vs muppiṇi vs simillimum). Dossier presents as additive. Doctrinally incoherent. Need **§4.0 pick-your-tradition decision tree** — flagged by reviewer as single highest-leverage fix to ship if only one wave-3 change lands.
30. **🎯 [W3-Top]** Transliteration consistency missing across 5 scripts. Add IAST for Sanskrit, Hanyu Pinyin (with tone marks) + traditional characters for Mandarin, DIN 31635 / ISO 233 for Arabic, Wylie for Tibetan, ISO 15919 for Tamil. Add `lang=` HTML attribute parallel to W3-23.
31. Bhrāmarī mis-attributed to S-VYASA Pandey 2014 — classical source is Haṭha-pradīpikā. Bhrāmarī vs bhramara (humming-bee vs bee species) grammatical distinction.
32. Tibetan rGyud bzhi Book III vs Book IV citation error — Book III is ear-disease diagnosis, Book IV is pharmacopoeia.
33. Caraka Cikitsā 1.3.30 — Bacopa vs Centella species-attribution cherry-pick.
34. Khamīrā Marwārīd indication mismatch (wave-2 caught) — closer ṭanīn al-udhun anchors per CCRUM NFUM are **Khamīrā Abresham + Ḥabb al-Sammār**.
35. Suśruta Uttara-tantra ch. 20 vs 21 split for nidāna (diagnosis) vs cikitsā (treatment) — wave-1 EMA reviewer caught the cherry-picking on karṇa-pūraṇa; wave-3 names the chapter precisely.
36. Cherry-picking — raktamokṣaṇa silently excluded for raktaja karṇa-nāda; rasaśāstra bhasmas silently excluded; Siddha cēndūram / paṟpam / mezhugu lumped under one mercury-handwave; Tirumantiram name-dropped as if it were a clinical materia medica (it is yogic-philosophical).
37. TCM classical acupuncture relegated to a footnote — no GB-2 / TB-21 / SI-19 / TB-17 / GB-20 / KI-3 point specificity.
38. Manufacturer-vs-lineage distinction — Plum Flower / Mayway / Min Tong are manufacturers, NOT the Hú Xī-shū / Liú Dù-zhōu / Wēn Bìng / Mèng Hé clinical lineages.

### W3-G. Per-brand QC + analytical chemistry (P1-P2)

39. Melatonin retail-variance Erland 2017 measured **-83% to +478% from label-claim** across 25 brands. Pure Encapsulations Ph.Eur. + Life Extension are reliable; generic Amazon brands are not. Annotate per-brand reliability explicitly.
40. Pycnogenol = Horphag French maritime pine bark standardised extract only. Generic "pine bark extract" is NOT the same; the Belcaro trials are Pycnogenol-specific.
41. Lion's Mane — fruiting-body vs mycelium-on-grain matters; beta-glucan / alpha-glucan ratio (Real Mushrooms fruiting-body only; Host Defense mycelium-on-grain).
42. KSM-66 vs Sensoril — different extracts, different evidence base, different harm profiles. KSM-66 is alkaloid-rich (more thyrotropic per wave-2 finding); Sensoril is withanolide-rich (more sedating).
43. Saffron — adulteration with safflower + calendula + turmeric is the most-common global adulteration. Need ISO 3632 + DNA verification. Iranian Saffron Council certification is the trust anchor.
44. Black Cohosh — supply-chain adulteration with other Cimicifuga / Actaea spp. Remifemin standardisation matters specifically; generic Black Cohosh often substituted.

### W3-H. Saper 2008 heavy-metal paradigm + supplier tiering (P1)

45. **§9.0.5 Saper honesty paragraph** — 21% of imported Ayurvedic products in 2008 Boston-sample had Pb/As/Hg/Cd > reference. Repeat findings 2010s + 2020s confirm pattern in unregulated supply chains.
46. Per-supplier tiering table:
   - **Tier 1 (third-party tested):** Kottakkal, Baidyanath, Patanjali (AYUSH-GMP), Plum Flower (Mayway), Treasure of the East, Men-Tsee-Khang Dharamsala, Padma AG, Schwabe
   - **Tier 2 (manufacturer-tested):** Hamdard, Ajmal, Saif Pharmaceuticals, IMPCOPS, SKM Siddha, Banyan Botanicals, Organic India, Himalaya
   - **Tier 3 (variable, buyer beware):** Patel Brothers, Apna Bazaar, generic Chinatown TCM, Aliexpress / Temu / Alibaba botanicals, generic Amazon supplements
47. Per-formula heavy-metal risk class — Saraswatarishta (low, fermented) vs traditional rasashastra bhasmas (intentional mineral content, high) vs random Chinatown TCM (variable, historically aristolochia + heavy-metal cluster).

### W3-I. Device QC + grey-market depth (P1-P2)

48. Per-device verification spec:
   - Vielight: wavelength (810 nm) + pulse rate (40 Hz) + irradiance (J/cm² per session)
   - Mito Red Light / Joov / Hooga: spectrum + irradiance verification (wattage rating ≠ therapeutic dose)
   - Bemer / Healthy Wave PEMF: magnetic field strength + waveform via gaussmeter
   - Pulsetto / Truvaga / Parasym / Xen / Nurosym taVNS: current calibration + impedance + DC-burn risk on clones
   - Lenire: 12-month electrode replacement + DIY-substitution warning
49. 14-row regulatory-status table for each device class (EU MDR Class IIa post-market surveillance; TGA AUST L requirements; Health Canada MDEL; UK MHRA UKCA).

### W3-J. Lot traceability + recall pipeline (P2-P3)

50. 3-phase pipeline:
   - **Phase 1 (2-3 weeks):** EMA EUDAMED + MHRA Yellow Card + TGA recall + Health Canada Canada Vigilance + AYUSH Pharmacopoeia Committee + UK MHRA recall ingestion
   - **Phase 2 (4-8 weeks):** Manufacturer-direct API for Schwabe, Pure Encapsulations, Thorne, Nordic Naturals, MediHerb, Padma AG
   - **Phase 3 (12-24 weeks):** Quarterly ICP-MS sampling on Tier-3 supplier products + COA public board
51. Cost estimate: ~$50-80k Year-1 (lab sampling + API integration + storefront UI).
52. Lot-number capture on every shipment + storefront affordance ("here's your lot number, save it").

### W3-K. Bundle data.ts audit (P0-P1)

53. "Verified reseller" opaque cipher in `lib/data.ts` bundle product entries — replace with named brands explicitly (Schwabe Tebonin, Pure Encapsulations Mg glycinate 200mg, etc.) so the user sees what they're buying.
54. Bundle pricing $169 vs dossier-stated supplier prices ($20-45 Tebonin × 3 + $25-45 Mg × 3 + $10-20 zinc + $10-20 B12) — reconcile.

---

## Skill v7.0.1 → v7.1.0 deltas wave 3 forces

- **Rule 25 — non-auditory perceptual analogue** (generalises Deaf-inclusion across BrainEye atlas + other auditory-dependent journeys).
- **Rule 26 — active-implanted-device contraindication scan** (CI + pacemaker + ICD + Inspire + DBS + spinal-cord-stim across all device-touching dossiers).
- **Rule 27 — crisis-line block** (mandatory in any PHQ-9-using dossier; country-stratified; Deaf-friendly + LGBTQ+-friendly + youth-friendly sub-lists).
- **Rule 28 — clinical-workflow integration layer** (any dossier where home OTC intersects with a clinical workup must have a workflow section naming the pathway, the imaging, the specialty routing, the country variants).
- **Rule 29 — OTC-device jurisdiction strip** (parallel to OTC-supplement Rule 9.5 jurisdiction strip; AppArde AirPods Pro 2 as global hearing-aid example).
- **Rule 30 — comorbidity vs sub-type distinction** (sub-types are aetiological variants of the same condition; comorbidities are separate conditions co-presenting; the §11.5 life-stage gate covers comorbidities; sub-types need separate §2.X).
- **Rule 31 — imaging-trigger / MRI-trigger requirement** for any dossier with treatable structural pathology on differential (vestibular schwannoma + acoustic neuroma + dehiscence for tinnitus; carotid stenosis for stroke recovery; etc.).
- **Rule 32 — reading-age budget per paragraph** — FKGL ≤ 8 mandatory for `For you, in plain words` paragraphs; ≤ 12 for the deep-dive technical body.
- **Rule 33 — WCAG 2.2 AA + EN 301 549 compliance** at the component level — every interactive component ships with focus-visible + ARIA-labels + keyboard nav + tap-target sizing + contrast 4.5:1.
- **Rule 34 — translation-readiness** — currency localisation, supplier-address localisation, idiom avoidance, `lang=` attribute discipline on non-English transliterations.
- **Rule 35 — cross-tradition aetiology coherence** — when 6 traditions appear in §4, the dossier must surface that they assert mutually-exclusive aetiology models + provide a pick-your-tradition decision tree at §4.0.
- **Rule 36 — classical-text transliteration discipline** — IAST / Hanyu Pinyin / DIN 31635 / Wylie / ISO 15919 mandatory; lineage vs manufacturer distinction in citations.
- **Rule 37 — per-brand QC tier annotation** — every named brand carries a tier annotation (Tier 1 / 2 / 3) per the Saper-paradigm supplier-trust hierarchy.
- **Rule 38 — 90-second read-mode** — every dossier ships with an above-the-fold "read in 90s" tile pulling the MVP + the red-flag block + the crisis-line + the decision-anchor.

---

## Top-15 wave-3 items (Sprint 2 priority, 3 already applied)

| # | W3 ID | Item | Status | Effort |
|---|---|---|---|---|
| 1 | W3-1 CI hardware-safety BLOCKER | Add CI red-flag block + §11.5 row + §5.10/§5.12/§5.14 contras | **APPLIED 2026-06-08** | done |
| 2 | W3-2 Crisis-line BLOCKER | §1.0 crisis block with country lines + PHQ-9 item-9 exclusion | **APPLIED 2026-06-08** | done |
| 3 | W3-3 SSHL country-routing correction | Fix UK NHS audiology vs ENT-on-call; tighten 72-h optimal | TODO Sprint 2 | 30 min |
| 4 | W3-4 OTC hearing-aid jurisdiction | Add AirPods Pro 2 + jurisdiction strip on hearing aids | TODO Sprint 2 | 30 min |
| 5 | W3-21 FKGL 14.6 → ≤ 8 | Rewrite §1, §8.0, §11.7, §13.5 paragraphs to FKGL ≤ 8 | TODO Sprint 2 | 4 hours |
| 6 | W3-22 §8.0 internal contradiction | Reconcile 5-point step-up rule vs 13-point MCID | TODO Sprint 2 | 15 min |
| 7 | W3-29 §4.0 pick-your-tradition decision tree | Add cross-tradition aetiology decision flow | TODO Sprint 2 | 2 hours |
| 8 | W3-23 WCAG-AA violations | Fix 19 specific violations | TODO Sprint 2 | 4 hours |
| 9 | W3-24 Cognitive-load safety registry | Per-compound safety surface | TODO Sprint 3 | 1 day |
| 10 | W3-25 90-second read-mode | Above-the-fold tile | TODO Sprint 2 | 2 hours |
| 11 | W3-9 Hyperacusis sub-section | Add with LDL + TRT framing | TODO Sprint 2 | 1 hour |
| 12 | W3-13 Vestibular-schwannoma MRI-trigger | Asymmetric-tinnitus MRI rule | TODO Sprint 2 | 30 min |
| 13 | W3-30 Transliteration policy + lang attrs | IAST/Pinyin/DIN/Wylie/ISO 15919 across §4 | TODO Sprint 2 | 1 hour |
| 14 | W3-16 Deaf §5.20 non-auditory pathway | New section + §2.7 sub-type | TODO Sprint 2 | 1 hour |
| 15 | W3-39 Brand QC annotations | Tier 1/2/3 supplier marks | TODO Sprint 2 | 2 hours |

**Sprint 2 budget: ~20 hours focused editing (16 hours pending after the 2 BLOCKERs already shipped).**

---

## Wave 4 forward dispatch (5 new personas — once wave 3 sprint-2 fixes ship)

Distinct from waves 1+2+3 (which together cover: ICLR/NeurIPS/ICML/biomedical/medical-safety/AI-lab/EMA-HMPC/integrative-PI/ad-law/pharmacovigilance/biostatistics/ENT-audiology/UX/classical-text/QC/disability-inclusion = 16 personas).

Proposed wave 4:
1. **Health-economist / cost-effectiveness analyst** (QALY / DALY / NICE-style; what does the protocol cost per QALY gained?)
2. **Data engineer / observability architect** (the AE pipeline + audit-pipeline + lot-traceability infrastructure — build vs buy decisions)
3. **Behavioural-science / adherence expert** (BJ Fogg + COM-B + nudge-theory; how to lift 9% adherence to 30-40%)
4. **Trust + Safety + content-moderation specialist** (what does the safety surface need to look like for moderation at scale; how to detect users in crisis at registration time)
5. **Founder-product lens / commercial strategy** (the storefront architecture + bundle structure + retention curves + LTV vs CAC math)

Then wave 5: focused stress-test on what's now picture-perfect: a multi-jurisdiction acceptance audit (UK + EU + AU + IN + CA + US) by 5 country-specialist clinical reviewers.

---

**Reviewer panel collective verdict (wave 3):** the layered fixes are real and the safety architecture is meaningfully better than the 2026-06-05 start. But each wave keeps surfacing new failure classes — particularly when a wave's distinct lens reveals what the prior waves were structurally blind to (Deaf-community lens caught CI hardware safety + crisis-line; classical-text scholar caught cross-tradition aetiology incoherence; UX researcher caught FKGL 14.6 + 19 WCAG-AA + 120-constraint cognitive load). Wave 4 will continue. Wave 5 may find diminishing returns — at which point the picture-perfect goal is satisfiable.
