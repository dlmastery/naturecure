# Wave 13 improvement backlog — 2026-06-07

Five wave-13 reviewers landed. **All 5 independently converged on the inverse-care-law architectural finding** via different framework anchors. This is wave 13's load-bearing surfacing: the convergent finding now has the multi-framework operational scaffolding (NICE-cost-per-QALY + CFIR + UN-CRPD + AYJNISHD + WHO-Health-Literacy) needed to actually ship.

## Reviewer roster

| # | Persona | File | Verdict |
|---|---|---|---|
| 1 | Paediatric audiology + adolescent tinnitus | `docs/REVIEW_2026-06-17_wave13_paeds-audiology.md` | Major revision (§12.8 from wave-9 never landed — wave-13 expands ~3k → ~5.5-6k words) |
| 2 | Disability justice + accessibility | `docs/REVIEW_2026-06-17_wave13_disability-justice.md` | Major revision |
| 3 | Public-health behaviour-change | `docs/REVIEW_2026-06-17_wave13_public-health-behaviour.md` | Major revision (3 BLOCKER/Major findings) |
| 4 | Non-US health-economics + cost-effectiveness | `docs/REVIEW_2026-06-17_wave13_health-economics.md` | Major revision (3 BLOCKER/Major findings — MVP fundable, Full Protocol un-fundable) |
| 5 | Migration + diaspora + multilingual | `docs/REVIEW_2026-06-17_wave13_diaspora-multilingual.md` | Major revision |

## Quintuple-convergent load-bearing finding

| Wave 13 # | Framework anchor for inverse-care-law |
|---|---|
| 1. Paeds-audiology | Mills & Cherry pre-verbal + AYJNISHD Mumbai cohort + Smith 2024 Born-in-Bradford |
| 2. Disability-justice | UN-CRPD + EAA 2025 + Sins Invalid + Mingus access-intimacy + Bauman/Lane audism |
| 3. Behaviour-change | PROGRESS-Plus + CFIR + COM-B + NPT + Michie 2011/2014/2024 |
| 4. Health-economics | **Quantified BIA: MVP @40% AYUSH-IN = $2,320/QALY; MVP @40% OECD = $25,710/QALY; Full @9% OECD = $92,750/QALY un-fundable** |
| 5. Diaspora-multilingual | WHO Health Literacy + NHS PIL + NSW MHCS + EMZ/MiMi + transcreation-not-translation |

## Deferred to next batch (structural, large in scope)

### From paediatric audiology (Reviewer #1)
- **§12.8 paeds-specific sub-section** — wave-9's never-landed ~3k-word ask, expanded by wave-13 to ~5.5-6k words. Includes pre-verbal Mills & Cherry framework + CTI/CTSQ + paeds-screening battery
- **Adolescent LAeq8h dose calculus** — actual math + EU PAS directive + AYJNISHD compensatory-volume-boost + Beach 2023 + Lee 2024 esports cohort
- **Across-section paeds-safety matrix** — Ayurveda *mātrā kālpana* + TCM CFDA paeds GMP + Unani *tibb-e-aṭfāl* + Siddha *bāla maruthuvam* + Tibetan Men-Tsee-Khang paeds + biophysical exclusion lattice
- **Adolescent MH triad** — PHQ-A + GAD-7 + PSQI-paeds + C-SSRS Junior battery + safeguarding-routing
- **Cross-jurisdictional consent framework** — Gillick (UK) + Marion's case (AU) + §1626 BGB (DE) + MCI/POCSO (IN)

### From disability-justice (Reviewer #2)
- **WCAG 2.2 AA + EAA 2025 axe-core CI gate + screen-reader walkthrough** — DeepDive collapsibles + LeftRailNav tree + MindMapStrip + DecisionHero + GradeBadge colour-only + tables + skip-links + tel: links
- **Plain-language F-K Grade 12 ceiling + Easy-Read DIN 8581-1 variant + audio + signed-video + pictograms + 3-min exec summary**
- **§1.5 goal-choice frame + §15.4b Deaf Gain perspective** — beyond wave-3's content-level audism fix
- **Sustainability operationalisation: §8.5b three-tier protocol** — folds wave-12 pacing into the architecture
- **§5.21 communal-living access + §16.2 movement-pointer**
- **§15.11 per-jurisdiction disability-benefit + accommodation-pathway addendum** + **PDF export "bring this dossier to your assessment"** + reasonable-adjustments request-letter template

### From behaviour-change (Reviewer #3)
- **Re-architecture option (c)**: explicit week-by-week unlock (Combo 1 from week 4; Combo 2 from week 8; etc.) — predicts week-12 adherence 40-50% vs status quo 6-15%
- **COM-B operationalisation**: address shared-household sound enrichment + urban-high-rise yoga + social acceptability of Bhrāmarī
- **NPT cognitive-participation scaffold** — currently entirely absent; "sovereignty" framing maximises autonomy at cost of relational work essential beyond week 8-12
- **5-item BECI PREMs** — manageability + reading-grade comprehension + time-burden-vs-benefit + NPS + free-text
- **11-axis PROGRESS-Plus equity-of-adherence stratification table**

### From health-economics (Reviewer #4)
- **8-col PPP-adjusted per-jurisdiction price column**: UK Boots + DE DM-Drogerie + AU Chemist Warehouse + IN 1mg.com + TH Mega We Care + ID Guardian + VN Pharmacity + PH Mercury Drug
- **Per-component cost-per-QALY bands**: Excellent / Good / Borderline / Poor / Unknown for every §3.3 + §5 + §10.7
- **Per-jurisdiction UHC + insurance coverage table**: NHS Talking Therapies + GKV-Psychotherapie/Reha-Klinik + OHS/Better Access + provincial ADP + AYUSH dispensary + PMJAY + Thai UHC + JKN + SHI + PhilHealth
- **§3 + §5 re-sort by descending cost-per-QALY** (currently approx INVERSE of optimal ranking)
- **§9.7 BIA + §9.0a + §9.0c table pair**

### From diaspora-multilingual (Reviewer #5)
- **§0.13 + §1-end glossary + §2 SVG pictogram + per-block companion-PIL pointers**
- **7 diaspora-cuisine §6 adaptations + 5 fasting-protocol modifications + folk-medicine bridge** (susto/nervios/jinn/'ayn/nazar/kemasukan/bisaya)
- **10 diaspora-cluster supplier lattices** + named chains (VB & Sons + Patel Brothers + Mustafa Centre + Lulu + Loon Fung + Wing Yip + H Mart + Carrefour Gulf + Sedano's + Northgate Market + 99 Ranch + botánicas) + **6-step counterfeit verification + halal/kosher/vegetarian/vegan-capsule certification**
- **16-corridor cross-jurisdictional clinician-routing table** + AYUSH-OCI Bridge Programme + telehealth legal-status notes
- **Transcreation roadmap (Tier 1/2/3) + Next.js i18n + Cloud Run multi-region web-rendering contract**

## Skill v6.2.7 candidate rules (5 new from wave 13)

- **Rule 13** (paeds-safety overlay): Every dossier MUST audit against the 8-component paeds-safety overlay (pre-verbal articulation framework + CTI/CTSQ/CHQ-CF87 + Mills & Cherry + adolescent LAeq8h + across-section paeds-safety matrix + safeguarding-routing + cross-jurisdictional consent + family-system + school-accommodation legislative anchors)
- **Rule 14** (cost-per-QALY + per-jurisdiction PPP): Every dossier component MUST carry cost-per-QALY band annotation + per-jurisdiction PPP-adjusted price column + section ordering by descending cost-per-QALY + mandatory BIA + no US-payor citations
- **Rule 24** (disability-justice quintet): Every dossier MUST audit against WCAG 2.2 AA + plain-language grade + audism + Sins Invalid 10 principles + per-jurisdiction disability-benefit pathway
- **Rule 24b** (diaspora-multilingual): Every dossier MUST carry tier-1 transcreation roadmap + per-diaspora-corridor clinician-routing + diaspora supplier-ecosystem
- **Rule 25** (reading-grade + behaviour-change architecture): MVP-as-default + progressive-disclosure + PREMs instrument + PROGRESS-Plus audit + NPT cognitive-participation scaffold + reading-grade ≤9 in openers + Easy-Read DIN 8581-1 variant

(Conflict resolution needed across waves 12 + 13's Rule 24 — wave 12 has disability-justice as Rule 24; wave 13 has both disability-justice and diaspora-multilingual claiming 24/24b. Will reconcile in v6.2.7 commit. Tentatively: 13 paeds + 14 health-econ + 24 DJ + 24b diaspora + 25 behaviour-change.)

## Wave 14 candidate personas (next 5)

Compiled across all 5 wave-13 reviewers' nominations + the convergent finding:

1. **Lactation-medicine + perinatal-pharmacology** (highest priority — structural parallel to wave-9; named by paeds reviewer)
2. **Digital-Health Engagement + Conversational-Agent + chatbot UX** (named by behaviour-change reviewer — the storefront + AI-Guru UX needs its own elite audit)
3. **Indigenous-health knowledge-holders + First-Nations medical sovereignty** (named by DJ + diaspora reviewers — Native American + Aboriginal + Māori + Sámi + Inuit + Adivasi + Dalit + Ainu)
4. **Founder-Synthesis Cross-Wave Consolidation** (named by behaviour-change reviewer — the meta-reviewer that integrates 13 waves into a single architectural commit)
5. **Climate + sustainability + supply-chain resilience** (named by behaviour-change + diaspora reviewers — Nagoya Protocol compliance + low-carbon supplement supply + climate-displaced reader access)

## Architectural commitment (deferred to wave-14 founder-synthesis)

The convergent inverse-care-law finding across waves 6/9/11/12/13 now has 5 independent framework anchors. The architectural commitment options:

- **Option A (status quo)**: Leave §8.5 as primary surface. Predicted week-12 adherence 6-15%. Not reimbursable. Audism + accessibility + disability-justice critique persists.
- **Option B (current MVP-as-warning)**: §8.0 MVP present but §8.5 dominates 7-to-1. Predicted week-12 adherence 15-25%. Marginally reimbursable for sub-cohort.
- **Option C (progressive-disclosure week-by-week unlock + cost-per-QALY re-sort)**: §8.0 MVP as default; §8.1-§8.5 unlocks gradually; §3 + §5 re-sorted by cost-per-QALY; WCAG 2.2 AA + EAA + plain-language F-K Grade ≤9 + Easy-Read variant; per-jurisdiction PPP price + UHC coverage + disability-benefit pathway. **Predicted week-12 adherence 40-50% + reimbursable BIA + accessible to bottom-70%-of-OECD-urban + 100%-AYUSH-IN-readers.**

Wave-14 founder-synthesis should make the C-vs-B-vs-A architectural commitment explicit and named in the dossier opener.
