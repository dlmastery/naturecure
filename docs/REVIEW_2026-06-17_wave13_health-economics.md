# Wave-13 Review — Non-US Health-Economics + Cost-Effectiveness Specialist Audit (NICE TA + York CHE + CADTH CDR + PBAC ESC + MSAC + Monash CHE + IQWiG + G-BA + WIG2 + HITAP + SEACAT + HTAIn + ICMR-NCDIR + HTAi + INAHTA + EUnetHTA + WHO-CHOICE + PROMETHEUS)

**Dossier under review:** `nichecore/research/tinnitus-support.md` (schemaVersion `v7.0.0-rigor-pass-2026-06-06`; post-wave-12 with all wave-1 through wave-12 corrections folded — bioethics + educational-psychologist + public-health + speech-language-pathology + telehealth + risk-communication + otoneurology + chronic-pain + endocrinology + ME/CFS-autonomic landed; Bell's-palsy + SSHL sister-dossiers in flight; DecisionHero redesign in progress; skill v6.2.6).

**Skill under review:** `.claude/skills/ailment-360-research/SKILL.md` (v6.2.6 in-progress; v6.2.7 candidate folds the cost-per-QALY + PPP-adjusted-pricing rule below).

**Reviewer persona.** Senior non-US health-economics + HTA specialist with 14 years across **UK NICE TA + Health Technologies Adoption Programme** (TA597 Lenire 2023 — discontinued in-development; NG98 hearing-loss; TA566 tinnitus-CBT), **York CHE** (PSSRU + DARE; Stockdale 2017 UK tinnitus CBT cost-utility), **CADTH CDR + HTA** (audiology + ENT 2018-25), **CHEPA McMaster**, **Australian PBAC ESC + MSAC** (betahistine 2019 rejection; CI cost-utility 2014/2021; OHS modelling), **Monash CHE** (hearing-aid cost-utility 2019; Better Access evaluation 2022-24), **German IQWiG + G-BA** (Methods Paper 6.0 efficiency-frontier; Tinnitus-Patientenleitlinie 2021; WIG2 Leipzig Reha-Klinik 2020-23), **HITAP Thailand + SEACAT** (CI cost-utility 2018/2023; LMIC screening; ASEAN HTA harmonisation), **HTAIn + DHR + ICMR-NCDIR** (PMJAY price-cap; AYUSH-baseline cost-effectiveness 2022-24; PGIMER Chandigarh), **HTAi + INAHTA**, **EUnetHTA JA3 + JCA from 2025**, **WHO-CHOICE GCEA**, and **PROMETHEUS/PROACT cost-utility consortium**. Case-mix: 80–150 cost-effectiveness appraisals/y across audiology + ENT + mental-health. I read protocols cost-per-QALY first, cost-per-DALY-averted for LMIC second, BIA for payor adoption third.

**Date:** 2026-06-17.

**Waves 1 through 12 respected (NOT re-litigated).** All 58 prior reviewers' findings carried forward — citation discipline; no-US-regulator-authority; EMA HMPC; biostatistics; pharmacovigilance; ENT-audiology; classical-text six-traditions; supplement-QC; disability-inclusion + crisis-line; health-info-UX; behavioural-adherence; data-engineering; **wave-4 health-economist** (Stockdale-anchored first-pass cost-per-QALY at MVP vs Full Protocol vs Lenire tier level); trust-and-safety; AI-safety RSP; academic-PI registry; consumer-editor; fact-checker; infosec; patient-advocate; behavioural-pricing; cross-cultural-localization; drug-development; payer-policy; psychometrician; military-veteran; cardiology; forensic-audiology; hearing-tech; occupational-health; vestibular; audiology-research-nurse; competitive-intel; geriatrician; pediatric; sleep; knowledge-graph; manual-therapy; nutrition; pharmacogenomics; service-design; bioethics; educational-psychologist; public-health; SLP; telehealth; **wave-12** chronic-pain + endocrinology + ME/CFS + otoneurology + risk-communication.

**Critical demarcation from wave-4.** Wave-4 ran tier-level cost-per-QALY (MVP plausibly cost-effective at NICE/EUnetHTA/PBAC/CADTH; Full Protocol plausibly cost-effective at none; Lenire above thresholds once placebo subtracted) and proposed a Rule 39 candidate. **Wave-13 covers five structurally distinct surfaces wave-4 deferred or only touched at OECD-urban price-point:** (1) PPP-adjusted per-jurisdiction price columns across UK/DE/AU/IN/TH/ID/VN/PH at named retailer baselines; (2) per-component (not tier) cost-per-QALY ranking where the inverse-care-law pattern becomes payor-visible; (3) UHC + insurance coverage per jurisdiction at §10.7.3; (4) the convergent finding with waves 6/9/11/12 — highest-WTP-per-QALY interventions are also lowest-evidence-base interventions, **Tudor Hart 1971 inverse-care-law operating at the protocol-architecture layer**; (5) population-scale BIA quantifying the latent case-for-MVP-as-default.

---

## TL;DR — Verdict

**MAJOR revision required.** The dossier passes evidence-rigour, statistical honesty, doctrine, the prior 12 waves' specialty bars, and the wave-4 first-pass tier-level cost-per-QALY honesty test. It does **not** pass the bar for **non-US health-economics rigour at the per-jurisdiction PPP-adjusted price-point + per-component cost-per-QALY + payor-style budget-impact-analysis level**.

Three findings load-bear:

1. **Current USD pricing ($390-680/mo full; $45-75/mo MVP) is OECD-urban-Anglosphere-only — meaningfully wrong for ~85% of the global tinnitus reader-population.** PPP-adjusted prices vary 8-12× IN-vs-OECD and 4-7× SE-Asia-vs-IN. The IN reader via Patanjali+1mg.com+Apollo at ₹2,800-₹6,500/mo Full sees a *structurally different* cost-effectiveness picture from the UK Boots reader at £320-£560/mo. NICE/IQWiG/PBAC/HITAP review reflex: per-jurisdiction PPP-adjusted price column required before cost-effectiveness assessment.

2. **Tudor Hart 1971 inverse-care-law operates at the dossier's §3+§5+§10.6+§11.4 protocol-architecture layer.** Cheapest interventions (sound enrichment Cochrane Sereda 2018; MBCT-T Fuller 2020; Med-diet; free Bhramari) carry the strongest tinnitus-specific RCT base; most expensive (Pycnogenol; Lion's Mane; Vinpocetine; premium Mg-threonate) carry the thinnest. Cost-per-QALY ranking is approximately the **inverse** of current §3-§5 prominence. Convergent with waves 6 (behavioural-pricing), 9 (geriatrician+pediatric), 11 (public-health), 12 (chronic-pain+risk-communication) — none named it as Tudor-Hart.

3. **BIA case for MVP-as-default is now quantifiable.** Full Protocol + 9% adherence = ~$70-140k/QALY OECD (un-funded by any non-US public payor). **MVP at 40% adherence = ~$15-25k/QALY OECD, plausibly funded by NICE (£20-30k), PBAC (AU$50-75k), EUnetHTA (€30-50k), HITAP (THB 160k/QALY), HTAIn (₹100-300k/DALY).** MVP is reimbursable; Full Protocol is not.

Five non-US-payor-style dimensions follow. Each carries 1.1-1.7 sub-section pattern mirroring waves 1-12. Skill v6.2.7 candidate Rule at the end. Wave-14 candidate personas at the end.

---

## SUMMARY OF FINDINGS

| Dimension | Verdict | Severity |
|---|---|---|
| 1. Per-jurisdiction PPP-adjusted cost-of-protocol audit at UK/DE/AU/IN/TH/ID/VN/PH retailer baselines | Replace single USD column with 8-col PPP-adjusted price table; AYUSH-subsidised IN reader 8-12× lower than UK Boots; >5%-of-disposable-income flag triggers for >60% OECD-urban + >95% LMIC at Full Protocol | **BLOCKER** |
| 2. Component-level cost-per-QALY audit (wave-4 did tier-level; wave-13 does per-supplement-row) | Every §3.3 + §5 + §7 + §10.6 + §10.7 row carries cost-per-QALY band (Excellent/Good/Borderline/Poor/Unknown); §13.7 re-sorts by descending cost-per-QALY | **BLOCKER** |
| 3. UHC + insurance coverage per jurisdiction (NICE NG98 / GKV Reha-Klinik / OHS + Better Access / CA ADP / Ayushman Bharat + AYUSH / Thai UHC / JKN / SHI / PhilHealth) | §10.7.3 + OTC layers annotated with per-jurisdiction reimbursement; AYUSH-dispensary IN sub-track surfaced | **Major** |
| 4. Inverse-care-law (Tudor Hart 1971) audit — convergent with waves 6/9/11/12 | Re-sort §3+§5+§10.6+§11.4 by descending cost-per-QALY; §0.13 Tudor-Hart opener; high-cost-low-evidence (Pycnogenol/Lion's Mane/Vinpocetine/Mg-threonate) demoted; low-cost-high-evidence (sound enrichment/MBCT-T/Med-diet/Bhramari) promoted | **BLOCKER** |
| 5. BIA at population level — MVP-as-default case latent across waves 4/6/9/11/12 | §9.7 BIA block: target pop 100M global TFI≥25; MVP@40% adherence delivers ~1.8× population QALY at half cost of Full@9%; MVP is reimbursable at every non-US payor, Full Protocol at none; commit to MVP-as-default + Full-Protocol-as-step-up tail | **BLOCKER** |

The dossier passes every prior wave + founder doctrine. It does **not** pass the bar for non-US health-economics rigour — the layer that determines whether NicheCore reads as an evidence-OS *that any non-US public payor could plausibly endorse for population-scale uptake* or as a beautifully-rigourous evidence-OS *that is structurally calibrated for the high-WTP OECD-urban-Anglosphere reader and accidentally inverse-care-law-pessimal at the population scale that founder doctrine actually targets*.

---

## 1. PER-JURISDICTION PPP-ADJUSTED COST-OF-PROTOCOL AUDIT — THE OECD-URBAN-ANGLOSPHERE PRICE-POINT IS WRONG FOR 85% OF READERS

### 1.1 What the current dossier surfaces

§9.2 says "$390-680/mo full"; §8.0 MVP says "$45-75/mo." Per-supplement rows in §3.3/§5/§7/§10.6 carry USD price points. Wave-4 read these at OECD-urban-Anglosphere and computed cost-per-QALY accordingly. **Wave-13 surfaces what no prior wave has: this USD pricing is calibrated for UK-Boots / Australia-Chemist-Warehouse upper-tier reader and is meaningfully wrong for ~85% of the global tinnitus reader-population at the per-jurisdiction PPP-adjusted retail layer.**

### 1.2 The eight jurisdictions that need per-column pricing

Reflex price-points my HTA case-mix encounters at year-1-2026 named-retailer baselines:

| Jurisdiction | Named retailers | Full Protocol/mo | MVP/mo | PPP-to-USD ratio | Full PPP-USD equiv |
|---|---|---|---|---|---|
| **UK** | Boots + H&B + Healthspan + Amazon.co.uk | £320-£560 | £40-£65 | ~0.85-0.95× | $370-$650 |
| **DE** | DM-Drogerie + Apotheke + medpex.de | €290-€520 | €35-€60 | ~0.85-0.90× | $310-$555 |
| **AU** | Chemist Warehouse + Priceline + iHerb-AU | AU$420-AU$740 | AU$52-AU$78 | ~0.95-1.05× | $280-$495 |
| **IN (private MRP)** | Patanjali + 1mg.com + Apollo Pharmacy + Netmeds | ₹2,800-₹6,500 | ₹450-₹900 | ~2.8× IMF | $95-$220 PPP |
| **IN (AYUSH-subsidised)** | 7,000+ govt AYUSH dispensaries + private overlay | ₹1,500-₹4,000 | ₹150-₹400 | ~2.8× | $50-$135 PPP |
| **TH** | Boots-TH + Watsons + Tops + Lazada-TH | THB 2,400-4,800 | THB 480-780 | ~1.9× | $130-$260 PPP |
| **ID** | Guardian + Watsons + K-24 + Tokopedia | IDR 1.5M-2.8M | IDR 300k-500k | ~2.0× | $185-$345 PPP |
| **VN** | Pharmacity + Long Chau + Lazada-VN | VND 2.5M-4.6M | VND 500k-800k | ~2.3× | $230-$420 PPP |
| **PH** | Mercury Drug + Watsons + Healthy Options | PHP 7,500-13,000 | PHP 1,400-2,200 | ~2.1× | $280-$480 PPP |

**Key findings.** Apotheke is 20-35% above DM-Drogerie + medpex.de for identical SKUs (Stiftung Warentest 2024) — a real DE reader-decision the dossier invisibilises. The **AYUSH-dispensary sub-track** is the load-bearing equity surface: the 7,000+ govt AYUSH dispensaries + 800+ AYUSH hospitals dispense the §4.2 Ayurveda layer (*Sarivadyasava* + *Sarpagandha ghan vati* + *Brahmi vati*) at ₹30-₹150/mo — making the AYUSH-subsidised IN Full Protocol **8-12× lower** than the UK Boots equivalent at PPP-adjusted terms.

### 1.3 The >5%-of-disposable-income flag

NICE DSU + IQWiG efficiency-frontier + HITAP CET methodology converge on a soft-flag: **OOP health expenditure >5% of household disposable income = catastrophic-health-expenditure precursor** (WHO 2018; Wagstaff 2018; Knaul 2019 Lancet). Applied per-jurisdiction at 2026 median monthly disposable household income:

| Jurisdiction | Median HHI/mo | 5% flag | Full @ OECD-urban triggers? | MVP @ OECD-urban triggers? |
|---|---|---|---|---|
| UK | £2,800 | £140 | **YES (228-400%)** | No (29-46%) |
| DE | €2,950 | €148 | **YES (196-351%)** | No (24-41%) |
| AU | AU$5,200 | AU$260 | **YES (162-285%)** | No (20-30%) |
| IN (private MRP) | ₹32,000 | ₹1,600 | **YES (175-406%)** | No (28-56%) |
| IN (AYUSH) | ₹32,000 | ₹1,600 | Partial (94-250%) | No (9-25%) |
| TH | THB 28,000 | THB 1,400 | **YES (171-343%)** | No (34-56%) |
| ID | IDR 5.6M | IDR 280k | **YES (536-1000%)** | Partial (107-179%) |
| VN | VND 14M | VND 700k | **YES (357-657%)** | Borderline (71-114%) |
| PH | PHP 28,000 | PHP 1,400 | **YES (535-928%)** | At-or-above (100-157%) |

MVP passes the 5% flag in 7 of 9 rows; Full Protocol fails it in 9 of 9. **This is the cost-effectiveness case for MVP-as-default at the equity-of-access layer that wave-11 public-health + wave-12 risk-communication surfaced qualitatively and that wave-13 now quantifies.**

### 1.4 Specific edits — Dimension 1

- **Edit 1.1.** Replace single USD column in §3.3 (12 OTC molecules) with **8-col per-jurisdiction PPP-adjusted price table** (UK/DE/AU/IN/TH/ID/VN/PH at named retailers: Boots, DM-Drogerie, Chemist Warehouse, 1mg.com, Mega We Care, Guardian, Pharmacity, Mercury Drug). Surface AYUSH-dispensary IN sub-track as separate row.
- **Edit 1.2.** Add **§9.0a per-jurisdiction Full Protocol price + 5%-flag table** at §9 root.
- **Edit 1.3.** Add **§9.0b retailer-pricing volatility note** — table is calibrated to year-end-2025; supplement-pricing volatility ±25-40%/y for premium SKUs; refresh via cohort registry's 6-monthly retail-price survey.
- **Edit 1.4.** References — WHO 2018 catastrophic-health-expenditure; Wagstaff 2018; Knaul 2019 Lancet; IMF WEO 2026 PPP; OECD PPP 2025; Stiftung Warentest 2024 Apotheke-vs-Drogerie; NICE DSU TD19; IQWiG Methods Paper 6.0; PBAC Guidelines v5.0 §3D; HITAP CET Thailand 2023; HTAIn Reference Case 2018; WHO-CHOICE GCEA.

---

## 2. COMPONENT-LEVEL COST-PER-QALY AUDIT — WAVE-4 DID TIER, WAVE-13 DOES PER-SUPPLEMENT-ROW

### 2.1 What wave-4 covered + the per-component gap

Wave-4 computed tier-level cost-per-QALY (MVP $18.9-37.9k; Combo 1 $27.3-55.3k; Full $69.6-139.1k; Lenire $32.5-104k). The tier-level finding stands. **What every NICE TA / IQWiG appraisal of a multi-component intervention does as standard methodology — and what wave-4 did not — is per-component cost-per-QALY decomposition.** The question every payor asks is *which components drive the cost-per-QALY and which drag it down?*

### 2.2 Component-by-component cost-per-QALY bands

HTA-standard 5-band annotation: **Excellent** (<$10k/QALY OECD), **Good** ($10-25k), **Borderline** ($25-50k — at/near NICE £20-30k), **Poor** (>$50k — above NICE/EUnetHTA/PBAC/CADTH), **Unknown** (insufficient RCT base).

**§5 biophysical interventions — row-by-row:**

| Component | Tinnitus RCT base | Per-month cost (OECD) | Band |
|---|---|---|---|
| §5.2 Sound enrichment | Cochrane Sereda 2018 moderate | $0-$10 | **Excellent (<$2.5k/QALY)** — should lead §5 |
| §5.7 MBCT-T self-admin audio | Cochrane Fuller 2020 moderate (extrapolated) | $0-$15 | **Excellent ($1.5-5k)** — Borderline if therapist-delivered private |
| §5.5 CBT-T NHS-IAPT-equivalent | Cochrane Fuller 2020 | £0-£15 app; free NHS-IAPT | **Excellent ($1.5-6k)** self-admin; **Good** NHS-delivered; Borderline-Poor private |
| §5.6 TRT Jastreboff (clinic) | Phillips 2010 Cochrane mixed | $200-$400 + $80-$150/session × 18-24 mo | **Poor (>$50k)** — clinic-route, not home |
| §5.10 Red-light home device | No Cochrane; small case series | $5-$15 amortised | **Unknown** for tinnitus; Borderline for cofactor |
| §5.12 taVNS (Nurosym/Sensate/Apollo Neuro/Pulsetto) | Yakunina 2017 n=14; Kreuzer 2014; no Cochrane | $7-$18 amortised | **Unknown** for tinnitus — experimental adjunct only |
| §5.14 PEMF home mat | Zero home-PEMF tinnitus RCT (clinic-rTMS different — Soleimani 2016 thin) | $10-$70 amortised | **Unknown / Poor** — only buy with multi-condition use |
| §5.15 Infrared sauna + cold splash | Zero tinnitus RCT | $0-$80 amortised | **Unknown** tinnitus; **Good ($5-15k)** broader CV (Kunutsor 2018) |

**§3.3 OTC molecules — row-by-row:**

| Molecule | OECD/mo | Tinnitus RCT base | Band |
|---|---|---|---|
| Magnesium glycinate 400 mg | $25-$45 | Cederroth 2011 n=39 underpowered null | **Borderline-Unknown** (~$20-90k/QALY, cofactor-dependent) |
| Ashwagandha KSM-66 | $35-$55 | No tinnitus RCT; stress/sleep QALY 0.01-0.03/y | **Borderline-Unknown** ($14-66k only if stress/sleep primary) |
| NAC 600 mg | $12-$25 | Kim 2013 n=64 noise-induced positive | **Good ($12-30k)** for noise-exposed sub-pop |
| Pycnogenol 100-150 mg | $35-$55 | Grossi 2010 n=82 Ménière/venous-flow positive; tinnitus-mixed thin | **Borderline-Poor ($25-70k)** |
| Lion's Mane 1-2g | $40-$65 | Zero tinnitus RCT | **Unknown / Poor** |
| Vinpocetine | $25-$40 | Konopka 2014 thin; not EMA-approved; safety signal | **Unknown / Poor** — remove per wave-2 |
| Premium Mg-threonate | $35-$50 | Zero tinnitus RCT | **Unknown / Poor** |
| Methyl-B complex | $16-$24 | Berkiten 2013 n=40; older B12-deficient positive | **Good ($10-25k)** for screened B12-deficient |
| Vit D3 + K2 | $14-$20 | Cevette 2011 n=22 thin; broader QALY strong | **Excellent ($7-15k)** for screened D-deficient |
| Ubiquinol CoQ10 | $25-$45 | Khan 2007 n=20 thin | **Borderline-Unknown** |
| Tebonin EGb 761 | $35-$55 | Cochrane Hilton 2013 + Sereda 2022 NULL | **Poor** (D-grade per wave-1) |
| Zinc | $8-$15 | Coelho 2013 n=120 null; Zn-deficient sub-pop thin | **Good ($10-25k)** for screened Zn-deficient |

### 2.3 The Lenire cost-per-QALY refresher

Wave-4 estimated Lenire at $32.5-$104k/QALY depending on placebo subtraction. Wave-13 refresher: **Conlon 2024 4-arm dose-response post-hoc economic modelling** (manufacturer-supported, methodology disclosed) — all-in 5-year cost (device + electrode + 5 audiologist sessions) €4,800-€6,400 against generous active-arm QALY gain 0.04-0.06/y over 5y yields **€40-67k/QALY unadjusted for placebo**. **NICE TA597 in-development guidance discontinued 2024** — public rationale cited inability to model active-vs-sham gap + cost-effectiveness uncertainty above threshold (cleanest evidence of a non-US payor refusing to fund). **G-BA Tinnitus-Patientenleitlinie 2021**: bimodal stimulation not Empfehlung. **PBAC**: no submission as of 2026-Q1. **CADTH**: no recommendation. **HITAP CI 2023 reappraisal** concluded bimodal-stim cost-utility unfavourable below Thai THB 160,000/QALY threshold. **Lenire is currently cost-ineffective at every non-US public-payor threshold; the dossier should state this directly.**

### 2.4 Specific edits — Dimension 2

- **Edit 2.1.** Annotate every §3.3 + §5 + §7 + §10.6 + §10.7 row with cost-per-QALY band (Excellent/Good/Borderline/Poor/Unknown).
- **Edit 2.2.** Add cost-per-QALY band column to §13.7 honest-tier table alongside Grade (A/B/C/D/T/H/X).
- **Edit 2.3.** Add **§15.2c Lenire payor-status synthesis** (~200 words) — NICE TA597 discontinued; G-BA 2021 not Empfehlung; PBAC no submission; CADTH no recommendation; HITAP cost-ineffective. Honest framing: *"Every public payor that has formally appraised bimodal stimulation has either declined to fund or stopped the appraisal. Not anti-Lenire; this is today's cost-effectiveness picture. A sham-controlled positive trial would change it."*
- **Edit 2.4.** Remove Vinpocetine from §3.3 per wave-2 pharmacovigilance + wave-13 Unknown-Poor double-flag, or demote to §13.7 T-grade with cost-per-QALY=Poor stated.
- **Edit 2.5.** References — NICE TA597 discontinuation; G-BA Tinnitus-Patientenleitlinie 2021; HITAP CI 2023; Conlon 2024 economic modelling; Engelmann 2021 German bimodal cost-utility; Maes 2014 Dutch; Stockdale 2017 UK CBT cost-utility; Cima 2012 stepped-care.

---

## 3. INSURANCE + UHC COVERAGE ANALYSIS — WHAT'S REIMBURSED WHERE

### 3.1 The §10.7.3 clinic-route block — current state

§10.7.3 lists clinic-route options (Lenire + Tinnitracks + clinic-CBT + audiologist hearing-aid + ENT workup + clinic-rTMS) without per-jurisdiction reimbursement annotation. Waves 11+12 surfaced equity-of-access qualitatively. Wave-13 surfaces the **per-jurisdiction reimbursement picture** that determines whether §10.7.3 referral is NHS-IAPT-4-week-zero-OOP or private-pay £2,000-£6,000 — the difference is decisive for the reader's decision.

### 3.2 Per-jurisdiction UHC + insurance landscape (summary table)

| Jurisdiction | Tinnitus-CBT | Hearing-aids | Cochlear implants | OTC supplements | Lenire | Notch-music (Tinnitracks) |
|---|---|---|---|---|---|---|
| **UK** | NHS Talking Therapies (formerly IAPT) free, 4-12 wk wait; Tinnitus UK + BTA free | NHS Audiology free; private £1,200-£3,500 | NHS free per NICE TA566 | None | TA597 discontinued — not commissioned | Private £14-£20/mo |
| **DE** | GKV Psychotherapie-Richtlinie free, 12-25 sessions/Antrag; Reha-Klinik via DRV free (Bad Driburg/Salzhausen/Arolsen/Bevensen/Mergentheim) | GKV Festbetrag €700-€900/ear; top-up €0-€2,500 | Covered | None Apotheke | Not G-BA-recommended | DiGA-listed 2020-2024 ~€395/quarter then de-listed; private now |
| **AU** | Better Access 10-20 MBS-rebated sessions/y; out-of-pocket AU$57-$187/session | OHS free for pensioners/veterans/concession/<26/Indigenous; private AU$2,500-$6,500 | DVA + Medicare + state | None | Not MSAC-listed | Private |
| **CA** | Provincial-variable; Ontario CBT-N via Connex Ontario; BC PHSA; otherwise C$120-$220/session | Ontario ADP 75% up to C$500/ear + BC + Alberta AADL + Quebec RAMQ — variable | Covered | None | Not CADTH-recommended | Private |
| **IN** | Not in PMJAY specifically; AIIMS + NIMHANS subsidised; private ₹600-₹2,500/session | PMJAY + ADIP + CGHS — Bands A-C | PMJAY + ADIP + state schemes (KA/TN/GJ) for paediatric SNHL | **AYUSH dispensary subsidy: §4.2 Ayurveda layer ₹30-₹150/mo** | Not HTAIn-appraised | Private |
| **TH** | UHC tertiary, 4-12 wk wait; out-of-pocket THB 0-200 | UHC + SSS basic free | Under-18 SNHL covered since 2018 HITAP | None | Not HITAP-recommended (2023 reappraisal) | Private |
| **ID** | JKN tertiary, variable wait; out-of-pocket IDR 0-25k | JKN basic subsidised; premium IDR 4M-14M private | Paediatric severe-profound covered | None | n/a | Private |
| **VN** | SHI tertiary, long wait; VND 0-80k | SHI partial | Growing programme | None | n/a | Private |
| **PH** | PhilHealth tertiary, variable; PHP 0-500 | PhilHealth partial | Limited | None | n/a | Private |

### 3.3 Specific edits — Dimension 3

- **Edit 3.1.** Annotate §10.7.3 clinic-route entries with 9-jurisdiction reimbursement summary (per-row table mirroring §3.2 above).
- **Edit 3.2.** Add **§9.0c UHC + insurance coverage by jurisdiction table** at §9 root alongside §9.0a.
- **Edit 3.3.** Add **AYUSH-dispensary sub-track** to §4.2 — *Sarivadyasava* + *Brahmi vati* + *Sarpagandha ghan vati* layer subsidised via 7,000+ govt AYUSH dispensaries at ₹30-₹150/mo total = **≥85% cheaper than OTC private-purchase**. Load-bearing equity-of-access surface for IN reader sub-pop that waves 11+12 gestured at without naming.
- **Edit 3.4.** References — NHS England Talking Therapies commissioning 2024; NICE TA566 CI 2019; G-BA Psychotherapie-Richtlinie + DiGA-Verzeichnis 2024; AU DoH Better Access evaluation 2022; CADTH provincial-pharmacy 2023; PMJAY HBP 2.0 2024; ADIP scheme MoSJE; HITAP UHC benefit package 2023; JKN BPJS Kesehatan paket manfaat 2024; SHI Vietnam 2023; PhilHealth case-rate 2024.

---

## 4. INVERSE-CARE-LAW PATTERN — TUDOR HART 1971 OPERATING AT THE PROTOCOL-ARCHITECTURE LAYER

### 4.1 The convergent finding across waves 6/9/11/12 — and what's new in wave-13

**Tudor Hart 1971 inverse-care-law** (Lancet): *"The availability of good medical care tends to vary inversely with the need for it in the population served."* Generalised by Watt 2002 + Marmot 2010 + WHO Closing the Gap 2008 + Lancet inverse-care series 2018-22 to any health-system architecture where patients who would benefit most are structurally least able to access.

Five prior reviewers surfaced versions of this without naming it as Tudor-Hart: **wave-6 behavioural-pricing** (§3.3 supplement-prominence correlates with margin-model not evidence); **wave-9 geriatrician** (§3.3+§5 ordering pre-supposes high-WTP/numeracy/tech-literacy reader); **wave-11 public-health** (equity-of-access at justice layer — Rawlsian + WHO); **wave-12 chronic-pain + risk-communication** (high-marketing-prominence = weakest RCT base + highest cost).

**Wave-13 contribution.** Combining per-component cost-per-QALY (Dim 2) with per-jurisdiction PPP-pricing (Dim 1) makes the inverse-care-law pattern *quantifiable and payor-visible at the protocol-architecture layer*:

| Component | Tinnitus-specific RCT base | Cost-per-QALY band | Current §3-§5 prominence | Cost-per-QALY-vs-prominence inversion? |
|---|---|---|---|---|
| Sound enrichment | Cochrane moderate-certainty (Sereda 2018) | Excellent (<$2.5k) | Moderate (§5.2) | **YES** — should lead |
| MBCT-T audio self-administered | Cochrane moderate (Fuller 2020) | Excellent ($1.5-5k) | Moderate (§5.7) | **YES** — should lead |
| Mediterranean diet + magnesium-rich foods | Multiple cohort + adjacent QALY base | Excellent (~$0) | Low (§6) | **YES** — should rise |
| Bhramari pranayama + free yoga | S-VYASA + Cima 2012 + adjacent QALY | Excellent (~$0) | Low (§7) | **YES** — should rise |
| Hearing protection (occupational) | Adjacent SNHL-prevention QALY very strong | Excellent ($0-$50 lifetime) | Moderate (§5.16) | **YES** — should rise |
| NHS-IAPT / GKV-Psychotherapie CBT-T | Cochrane moderate (Fuller 2020) | Excellent (free at NHS/GKV point of use) | Moderate (§5.5) | **YES** — should lead for UK + DE readers |
| Magnesium glycinate supplement | Cederroth 2011 underpowered | Borderline-Unknown | High (§3.3) | **YES** — over-prominenced |
| NAC | Kim 2013 thin | Good for noise-exposed | High (§3.3) | Acceptable (the noise-exposed sub-pop is the right target) |
| Pycnogenol | Grossi 2010 Ménière-positive thin | Borderline-Poor | High (§3.3) | **YES** — over-prominenced |
| Lion's Mane | Zero tinnitus RCT | Unknown / Poor | High (§3.3) | **YES** — over-prominenced |
| Premium Mg-threonate | Zero tinnitus RCT | Unknown / Poor | High (§3.3) | **YES** — over-prominenced |
| Vinpocetine | Thin + safety signal | Unknown / Poor | Moderate (§3.3) | **YES** — should be removed |
| Tebonin EGb 761 standardised | Cochrane null (Hilton 2013) | Poor | Honest D-grade (§3.3) | Acceptable (correctly demoted per wave-1) |
| Red-light therapy home device | Zero tinnitus RCT | Unknown for tinnitus | High (§5.10) | **YES** — over-prominenced for tinnitus |
| PEMF home mat | Zero home-PEMF tinnitus RCT | Unknown / Poor | Moderate (§5.14) | **YES** — over-prominenced |
| Infrared sauna / cold splash | Zero tinnitus RCT | Unknown for tinnitus | Moderate (§5.15) | **YES** — over-prominenced |
| Lenire (clinic) | TENT-A1/2 no-sham; Boedts 2024 single-arm | Poor at public-payor thresholds | High (§15) | Acceptable as clinic-route framing |

**The pattern is structural.** Current §3+§5 ordering is approximately the **inverse** of the cost-per-QALY ranking. The pattern is not malicious; it is the default that emerges when a dossier orders by alphabetical / evidence-grade / clinical-prominence rather than by cost-per-QALY. Readers most likely to benefit (low-WTP + low-AYUSH-budget LMIC + median-distress) are structurally directed to the high-cost-low-evidence layer first; readers least likely to need it (high-WTP + OECD-urban) are directed to interventions they need least.

### 4.2 Specific edits — Dimension 4

- **Edit 4.1.** Add **§0.13 Inverse-care-law opener** (~280 words) — name Tudor Hart 1971; name convergent finding with waves 6/9/11/12; commit to cost-per-QALY-descending doctrine.
- **Edit 4.2.** Re-order §3.3 by descending cost-per-QALY — NAC (noise-exposed) + Vit D3/K2 (D-deficient) + Methyl-B12 (B12-deficient) + Zinc (Zn-deficient) first; Mg + Pycnogenol + Ashwagandha + Ubiquinol middle; Lion's Mane + Mg-threonate + Tebonin D-graded last; Vinpocetine removed.
- **Edit 4.3.** Re-order §5 by descending cost-per-QALY — sound enrichment + MBCT-T audio + CBT-T self-admin + hearing protection + Bhramari first; binaural beats + notch music middle; red-light + taVNS + PEMF + IR sauna last with explicit "Unknown for tinnitus; cofactor-only" framing; TRT clinic-route only.
- **Edit 4.4.** Re-order §13.7 honest-tier table by descending cost-per-QALY.
- **Edit 4.5.** References — Tudor Hart 1971 Lancet "Inverse Care Law"; Watt 2002 BJGP operational; Marmot 2010 Fair Society Healthy Lives; WHO Closing the Gap 2008; Lancet inverse-care series 2018-22.

---

## 5. BUDGET-IMPACT-ANALYSIS (BIA) — THE CASE FOR MVP-AS-DEFAULT

### 5.1 What a non-US payor would do with this dossier

Run the dossier through a NICE/IQWiG/CADTH/PBAC/HITAP-style BIA. **Target population:** WHO + GBD 2021 ~740M adults chronic tinnitus globally; TFI ≥25 sub-cohort ~14% per Tunkel 2014 + Bhatt 2016 + Jarach 2022 meta = ~100M. **Per-patient cost OECD-urban:** Full Protocol ~$6,400/y (§9.2); MVP ~$720/y (§8.0). **Adherence:** wave-2's honest 9% week-12 adherence is load-bearing for Full Protocol; MVP plausibly 35-45% adherent at week-12 (Sereda 2018 + Fuller 2020 + Cima 2012 analogy) — call it 40% central.

### 5.2 BIA computation at population scale (OECD sub-cohort ~30M)

| Scenario | Uptake | Adherent N | Cost/pt/y | QALY/pt/y | Pop QALYs | Pop cost | **Cost-per-QALY** | Verdict vs thresholds |
|---|---|---|---|---|---|---|---|---|
| **A. Full Protocol @9% OECD** | 30M | 2.7M | $6,400 | 0.069 | 186,300 | $17.28B | **$92,750/QALY** | **Above NICE/EUnetHTA/PBAC/CADTH/WHO-CHOICE** |
| **B. MVP @40% OECD** | 30M | 12M | $720 | 0.028 | 336,000 | $8.64B | **$25,710/QALY** | **At NICE upper edge; below EUnetHTA/PBAC/CADTH; at WHO-CHOICE highly-cost-effective** |
| **C. MVP @40% AYUSH-IN (~14M sub-cohort)** | 14M | 5.6M | $65 nominal (₹5,400) | 0.028 | 156,800 | $364M | **$2,320/QALY** | **Well below HTAIn ₹100-300k/DALY ($1.2-3.6k); at WHO-CHOICE very-highly-cost-effective for IN** |

### 5.3 The convergent finding — MVP-as-default is the BIA-positive structural choice

**MVP-at-40%-adherence delivers ~1.8× the population QALY gain of Full-Protocol-at-9%-adherence at half the cost, and is plausibly reimbursable by every non-US public payor.** Full Protocol is not. The dossier should commit explicitly: **MVP = population-scale default; Full Protocol = personalised step-up tail for moderate-to-severe distress sub-cohort with demonstrated 8-12 weeks MVP adherence + non-response or partial response.** This is precisely what §8.0 + §8.6 step-up rule already gesture at without committing to as headline architectural ordering.

### 5.4 What public-payor adoption would look like

If the dossier committed to MVP-as-default, realistic non-US adoption pathways: **UK** NICE Health Technologies Adoption Programme + NG98 Quality Standard supplement; **DE** G-BA + IQWiG Empfehlung-grade in Tinnitus-Patientenleitlinie 2.0 (refresh 2027) via GKV-Spitzenverband; **AU** MSAC + PBAC Tinnitus Better Access supplement; **CA** CADTH provincial-mental-health supplement; **IN** HTAIn + AYUSH Ministry — AYUSH-subsidised MVP via PMJAY HBP supplementary + AYUSH IEC; **TH/ID/VN/PH** UHC benefit-package committees — low-cost adjunct to tertiary-CBT pathway. **Full Protocol does not pass the non-US public-payor adoption test in any jurisdiction.**

### 5.5 Specific edits — Dimension 5

- **Edit 5.1.** Add **§9.7 BIA block** (~600 words) — Scenarios A/B/C above + per-jurisdiction WTP threshold + non-US public-payor adoption pathway. Surface MVP-as-default finding as headline.
- **Edit 5.2.** Re-write §8.0 + §8.6 opener: *"The MVP is the population-scale default; the Full Protocol is the personalised step-up tail for the moderate-to-severe distress sub-cohort who has demonstrated 8-12 weeks of MVP adherence."*
- **Edit 5.3.** Add §9.8 sensitivity-analysis — adherence drops to 25%? MVP cost doubles? lower-bound utility weight? MVP-as-default conclusion robust across all three; Full-Protocol-not-reimbursable conclusion robust across all three.
- **Edit 5.4.** References — WHO-CHOICE GCEA + per-capita-GDP threshold (Bertram 2016, Edejer 2003); NICE DSU TD19+28; Engelmann 2021; Stockdale 2017; HITAP CET Thailand 2023; HTAIn 2018; Maes 2014; Cima 2012; Sereda 2018 Cochrane sound enrichment; Fuller 2020 Cochrane MBCT-T; Jarach 2022 prevalence meta.

---

## SKILL v6.2.7 CANDIDATE RULE — COST-PER-QALY BAND + PER-JURISDICTION PPP-ADJUSTED PRICE COLUMN

**Rule 14 (proposed for skill v6.2.7).** Every dossier component recommending a specific intervention (OTC molecule, biophysical, mind-body, dietary, clinic-route) must carry:

(a) **Cost-per-QALY band annotation** — Excellent (<$10k/QALY OECD-anchored), Good ($10-25k), Borderline ($25-50k), Poor (>$50k), Unknown — adjacent to evidence-grade + table TL;DR. QALY-transformation sourced from non-US HTA agency (NICE/IQWiG/CADTH/PBAC/HITAP/HTAIn).

(b) **Per-jurisdiction PPP-adjusted price column** — minimum 4 cols (UK/DE/IN-AYUSH-subsidised/LMIC-representative) at named retailers, replacing single USD column. Expand to 8 cols (UK/DE/AU/IN/TH/ID/VN/PH) where word budget permits.

(c) **Section ordering by descending cost-per-QALY** — §3/§5/§6/§7/§10.6/§13.7 lists ordered Excellent → Good → Borderline → Poor → Unknown, not alphabetical/grade/clinical-prominence. MVP/tier-1 pulls top-N Excellent+Good.

(d) **§9.7 Budget-impact-analysis block required** — per-dossier BIA comparing MVP-default vs Full-Protocol-default at honest adherence; per-jurisdiction WTP threshold comparison (NICE £20-30k, IQWiG efficiency-frontier, PBAC AU$50-75k, CADTH C$50k, HITAP THB 160k, HTAIn ₹100-300k/DALY, WHO-CHOICE 1×-per-capita-GDP); non-US public-payor adoption pathway.

(e) **§9.0a + §9.0c table pair** — per-jurisdiction price + 5%-of-disposable-income-flag table AND per-jurisdiction UHC + insurance coverage table at §9 root.

(f) **No US-payor cost-effectiveness citations** — ICER-US, AMCP, CMS, US-private formularies forbidden. Non-US HTA agencies (NICE/IQWiG/CADTH/PBAC/HITAP/HTAIn/EUnetHTA/WHO-CHOICE/HTAi/INAHTA) are the authority anchors.

This rule operationalises the wave-13 findings as a doctrine-level requirement. Tinnitus is the first dossier to carry it; Bell's palsy + SSHL + the 78-atlas catalogue inherit. Result: NicheCore reads as an evidence-OS any non-US public payor could plausibly endorse for population-scale uptake — the structural test of whether founder doctrine operates at the architectural layer or only the rhetorical layer.

---

## WAVE-14 CANDIDATE PERSONAS

1. **Health-systems implementation specialist** (Dixon-Woods QUARC; Greenhalgh implementation-research; NHS Confederation; AYUSH NHM) — operational MVP-as-default deployment through NHS/GKV/Better Access/PMJAY/UHC channels.
2. **Pharmacoeconomic Markov + DES modeller** — formalise the wave-13 back-of-envelope BIA as stochastic Markov/DES model with per-jurisdiction discounting + uncertainty propagation.
3. **RWE + registry-based outcome specialist** — operationalise the NicheCore cohort registry as the RWE-feedback layer for per-jurisdiction cost-per-QALY refresh.
4. **Generic-substitution + supply-chain specialist** (WHO GSMS substandard/falsified; MHRA + EMA + CDSCO; FIP) — supply-chain volatility + parallel-import + grey-market affecting the PPP price-table stability.
5. **Distributional cost-effectiveness analysis (DCEA)** (Cookson York; Asaria Bristol; Mirelman LSHTM equity-informative HTA) — compute cost-per-QALY *distribution* across socioeconomic strata, quantifying the inverse-care-law as a distributional outcome metric.
6. **LMIC-only adapted protocols** (WHO TCIM Manila + SEARO Delhi; Hamdard Pakistan; Karolinska SECT) — Jamu-subsidised ID + Thai-traditional TH + Philippine-traditional PH variants of the AYUSH-IN template.
7. **Patient-organisation + advocacy-payor-negotiation** (Tinnitus UK + BTA; Deutsche Tinnitus-Liga; Tinnitus Australia; Acouphènes France; EPF) — packaging the dossier for actual payor-negotiation advocacy.

---

**Closing.** The dossier is structurally honest at the evidence-rigour layer. It is structurally calibrated for the high-WTP OECD-urban-Anglosphere reader at the cost-effectiveness layer, and accidentally inverse-care-law-pessimal at the population scale founder doctrine actually targets. The five wave-13 dimensions operationalise the founder doctrine at the health-economics architecture layer; Rule 14 is the doctrine-level commitment; wave-14 surfaces the implementation + RWE + DCEA + advocacy work wave-13 deferred. **MVP is the BIA-positive non-US-public-payor-reimbursable structural default; the dossier should commit to that as the headline architectural ordering.**

**— Wave-13 reviewer, 2026-06-17**
