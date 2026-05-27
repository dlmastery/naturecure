# Ledger Fragment 05 — Catalog Data & Schema

Source files:
- `_snapshot/nichecore-app/src/types.ts` (schema)
- `_snapshot/nichecore-app/src/data/nichecoreData.ts` (13 launch categories, bundles, experts, factory jobs, sources, companion events)
- `_snapshot/nichecore-app/src/data/journeyAtlas.ts` (50-journey atlas + its own schema/sources)

Reuse note: this is the real structured content for the new site. Categories = operational launch SKUs with full protocols. Journey Atlas = the broader 50-route content map (lighter per-item schema).

---

## 1. Data Models / Interfaces (Schema)

### Enums / union types (`types.ts`)
| Type | Values |
|---|---|
| `EvidenceGrade` | `'A' \| 'B' \| 'C' \| 'D' \| 'T' \| 'H' \| 'X'` |
| `RiskLevel` | `'low' \| 'moderate' \| 'guarded' \| 'high'` |

Grade legend (`evidenceGrades` const): A = Strong human evidence; B = Moderate human evidence; C = Early or mixed human evidence; D = Mechanistic/animal/in-vitro; T = Traditional-use evidence; H = Hypothesis/emerging signal; X = Insufficient or rejected.

### `SourceRef`
| Field | Type |
|---|---|
| id | string |
| title | string |
| publisher | string |
| year | string |
| url | string |
| sourceType | `'market' \| 'research' \| 'traditional' \| 'quality' \| 'demand'` |

### `EvidenceClaim`
| Field | Type |
|---|---|
| id | string |
| intervention | string |
| claim | string |
| grade | EvidenceGrade |
| confidence | number |
| lastReviewed | string |
| sources | string[] (SourceRef ids) |
| safety | string |
| allowedWording | string |

### `Ingredient`
| Field | Type |
|---|---|
| name | string |
| role | string |
| dose | string |
| timing | string |
| grade | EvidenceGrade |
| cautions | string[] |
| qualityMarkers | string[] |

### `ProtocolLayer`
| Field | Type |
|---|---|
| name | string |
| mechanism | string |
| rationale | string |
| ingredients | Ingredient[] |
| lifestyle | string[] |

### `Product`
| Field | Type |
|---|---|
| name | string |
| supplier | string |
| role | string |
| format | string |
| price | number |
| qualityScore | number |
| qualitySignals | string[] |
| evidenceGrade | EvidenceGrade |

### `Bundle`
| Field | Type |
|---|---|
| id | string |
| name | string |
| duration | string |
| categoryId | string |
| price | number |
| subscriptionPrice | number |
| marginModel | string |
| summary | string |
| products | Product[] |
| includes | string[] |

### `Expert`
| Field | Type |
|---|---|
| name | string |
| role | string |
| location | string |
| credentials | string[] |
| specialties | string[] |
| price | number |
| turnaround | string |

### `TimelineStep`
| Field | Type |
|---|---|
| week | string |
| title | string |
| description | string |
| metric | string |

### `Category`
| Field | Type |
|---|---|
| id | string |
| name | string |
| shortName | string |
| marketSignal | string |
| marketSize | string |
| rank | number |
| score | number |
| risk | RiskLevel |
| color | string (hex) |
| icon | string |
| promise | string |
| consumerLanguage | string[] |
| mechanisms | string[] |
| latestFindings | string[] |
| claims | EvidenceClaim[] |
| protocol | ProtocolLayer[] |
| diet | string[] |
| dailySchedule | string[] |
| expectedTimeline | TimelineStep[] |
| safetyFlags | string[] |
| bundleIds | string[] |

### `FactoryJob`
| Field | Type |
|---|---|
| id | string |
| categoryId | string |
| status | `'fresh' \| 'current' \| 'aging' \| 'stale' \| 'review_required'` |
| cadence | string |
| lastRun | string |
| nextRun | string |
| sourcesScanned | number |
| claimsExtracted | number |
| safetyFlags | number |
| reviewer | string |

### `CompanionEvent`
| Field | Type |
|---|---|
| time | string |
| title | string |
| detail | string |
| type | `'supplement' \| 'diet' \| 'routine' \| 'checkin' \| 'refill' \| 'research'` |

### `IntakeState`
| Field | Type |
|---|---|
| stability | `'active' \| 'stable' \| 'unsure'` |
| medications | boolean |
| pregnant | boolean |
| sensitivity | boolean |
| budget | `'starter' \| 'core' \| 'premium'` |
| goals | string[] |

### `GuruMessage`
| Field | Type |
|---|---|
| role | `'user' \| 'guru'` |
| text | string |

### Journey Atlas schema (`journeyAtlas.ts`)
`JourneyDomain` (10): `Skin`, `Hair`, `Metabolic`, `Gut`, `StressSleep`, `BrainEye`, `MobilityEnergy`, `HormoneVitality`, `ImmuneOral`, `CardioLiverLongevity`.
`JourneyRisk`: `'low' \| 'moderate' \| 'guarded' \| 'specialist'` (note: differs from Category `RiskLevel` — uses `specialist` instead of `high`).

**`JourneyAtlasSource`**: id, title, publisher, year, url, use.

**`JourneyAtlasItem`**: id, name, domain (JourneyDomain), route, marketSignal, consumerHook, evidencePosture, whatChanged, mechanisms (string[]), protocol (string[]), dietLifestyle (string[]), packageConcept, safetyGate, expertEscalation, companionPlan, freshness (`'fresh' \| 'current' \| 'review_required'`), risk (JourneyRisk), gradeMix (string[]), sourceIds (string[]).

Other consts in `nichecoreData.ts`: `evidenceGrades` (grade legend object), `forbiddenSources` (`['FDA','FTC','US disease associations','US hospital systems','US insurance-aligned medical bodies','US pharma-funded advocacy groups']`).

---

## 2. The 13 Operational Launch Categories

Overview table (rank order in source is by `rank` field):

| id | name | rank | score | risk | bundleIds | marketSize |
|---|---|---|---|---|---|---|
| weight-metabolism | Weight and Metabolism | 1 | 47 | guarded | metabolic-starter-60, gut-reset-30 | $176.67B weight mgmt |
| hair-scalp | Hair and Scalp | 2 | 45 | moderate | hair-density-90, stress-shield-monthly | $88.20B hair/scalp |
| gut-bloating | Gut and Bloating | 3 | 44 | moderate | gut-reset-30 | $113.97B probiotics |
| sleep-stress | Sleep and Stress | 4 | 43 | moderate | stress-shield-monthly | $12.55B insomnia supps |
| skin-pigmentation | Skin and Pigmentation | 5 | 42 | moderate | skin-resilience-90, stress-shield-monthly | $202.77B skin care |
| mental-wellbeing | Mood and Mental Wellbeing | 6 | 41 | guarded | mental-calm-30 | $232.6B+ mental wellness |
| brain-focus | Brain and Focus | 7 | 40 | moderate | brain-focus-60 | $23.52B brain health |
| blood-sugar | Blood Sugar Support | 8 | 38 | high | glucose-steady-60 | $14.52B diabetes mgmt supps |
| joints-mobility | Joints and Mobility | 9 | 37 | moderate | mobility-core-90 | $32.3B bone/joint |
| eye-screen | Eye and Screen Health | 10 | 35 | guarded | screen-eye-60 | $4.23B eye health |
| women-hormone | Women's Hormone and Menopause | 11 | 34 | guarded | midlife-balance-60 | $8.58B US menopause |
| mens-vitality | Men's Vitality and Sexual Wellness | 12 | 33 | guarded | vitality-core-60 | $132.13B men's health |
| energy-recovery | Energy and Recovery | 13 | 32 | low | recovery-engine-60 | $138.48B sports nutrition |

Per-category detail below. (Each category also carries `consumerLanguage`, `mechanisms`, `diet`, `dailySchedule`, full `expectedTimeline` TimelineStep[] in source; key reusable content captured here.)

### 5. Skin and Pigmentation (`skin-pigmentation`)
- **Promise**: Stabilize skin stress loops with antioxidant, gut-skin, diet, and stress-shield protocols.
- **Evidence claims**:
  - C (conf 72) Sulforaphane-rich broccoli sprout extract — supports Nrf2-linked antioxidant defenses. Wording: "May support antioxidant defense; not a cure or repigmentation guarantee."
  - D (conf 62) Polyphenol layer (quercetin, luteolin, EGCG) — mechanistic antioxidant/anti-inflammatory plausibility.
  - B (conf 78) Gut-skin support (probiotics + diet) — may support systemic inflammation/barrier.
- **Protocol layers**: (1) Nrf2 & Antioxidant Layer [Broccoli sprout extract C; Amla T]; (2) Gut-Skin Reset [Multi-strain probiotic B, 10B-25B CFU]; (3) Stress-Shield Layer [Magnesium glycinate B 100-200mg; L-theanine C 100-200mg].
- **Safety flags**: pregnancy/lactation, autoimmune medication, immunocompromised, new rapidly spreading lesions, GI sensitivity.
- **Timeline** (commonSkinTimeline): Week1 tolerance/rhythm; Week4 stability check; Week8 protocol review; Day75 refill or expert review.
- **Bundle(s)**: skin-resilience-90, stress-shield-monthly.

### 1. Weight and Metabolism (`weight-metabolism`)
- **Promise**: Build metabolic consistency through protein, fiber, meal timing, walking, sleep, and carefully screened botanicals.
- **Evidence claims**:
  - A (conf 88) Protein-first meals — supports satiety and muscle maintenance.
  - B (conf 80) Soluble fiber — supports fullness, regularity, post-meal glucose.
  - B (conf 76) Berberine — metabolic markers; needs medication/pregnancy screen.
- **Protocol layers**: Protein and Fiber Anchor [Protein support A, 20-35g/meal; Psyllium or glucomannan B].
- **Safety flags**: glucose medication, pregnancy/lactation, kidney disease, eating disorder history, rapid unexplained weight loss.
- **Timeline**: Week1 appetite baseline; Week4 routine consolidation; Week8 metabolic review; Day75 maintenance decision.
- **Bundle(s)**: metabolic-starter-60, gut-reset-30.

### 2. Hair and Scalp (`hair-scalp`)
- **Promise**: Pair scalp care, nutrient sufficiency, stress control, and inflammation support for visible routine discipline.
- **Evidence claims**:
  - C (conf 68) Rosemary scalp topical — emerging interest for hair density.
  - C (conf 64) Pumpkin seed oil — may support hair wellness; not guaranteed.
- **Protocol layers**: Scalp + Nutrient Foundation [Rosemary scalp serum C; Protein/collagen support B].
- **Safety flags**: sudden patchy loss, postpartum, thyroid symptoms, scalp infection signs, pregnancy/lactation.
- **Timeline**: Week1 scalp tolerance; Week4 shedding log; Week12 cycle review; Month6 long-cycle decision.
- **Bundle(s)**: hair-density-90, stress-shield-monthly.

### 3. Gut and Bloating (`gut-bloating`)
- **Promise**: Structured gut reset with probiotics, fiber, enzymes, food tracking, gentle routine correction.
- **Evidence claims**:
  - B (conf 80) Multi-strain probiotic — supports digestive balance (strain/dose/person dependent).
  - B (conf 78) Peppermint oil (enteric-coated) — IBS-like symptom support.
- **Protocol layers**: Reset and Rebuild [Probiotic B 10B-25B CFU; Digestive enzyme C].
- **Safety flags**: blood in stool, severe pain, unexplained weight loss, immunocompromised, pregnancy/lactation.
- **Timeline**: Day3 bloating adjustment; Week2 fiber tolerance; Week4 trigger review; Day30 refill or rotate.
- **Bundle(s)**: gut-reset-30.

### 4. Sleep and Stress (`sleep-stress`)
- **Promise**: Calm the nervous system with sleep hygiene, magnesium/theanine routines, breathwork, refillable stress support.
- **Evidence claims**:
  - B (conf 78) Magnesium glycinate — relaxation/sleep quality.
  - C (conf 70) L-theanine — calm focus, reduced stress reactivity.
- **Protocol layers**: Nervous System Downshift [Magnesium glycinate B 100-200mg elemental; L-theanine C 100-200mg].
- **Safety flags**: crisis language, sedatives, bipolar/mania history, pregnancy/lactation, severe insomnia.
- **Timeline**: Night1 routine setup; Week1 tolerance; Week3 stress loop review; Day30 refill decision.
- **Bundle(s)**: stress-shield-monthly.

### 6. Mood and Mental Wellbeing (`mental-wellbeing`)
- **Promise**: Support calm, resilience, and daily functioning via sleep, magnesium, adaptogens, breathwork, red-flag routing.
- **Evidence claims**:
  - B (conf 78) Magnesium glycinate — relaxation/sleep, esp. low intake.
  - C (conf 68) Ashwagandha / adaptogen layer — perceived stress; quality+safety screening.
- **Protocol layers**: Calm Foundation [Magnesium glycinate B; L-theanine C].
- **Safety flags**: crisis language, sedatives, bipolar/mania history, thyroid medication, pregnancy/lactation.
- **Timeline**: Day1 safety/baseline; Week1 routine traction; Week3 adaptogen decision; Day30 continue or expert.
- **Bundle(s)**: mental-calm-30.

### 7. Brain and Focus (`brain-focus`)
- **Promise**: Support focus and cognitive energy with sleep, creatine, omega-3, bacopa-style botanicals, stimulant-light routines.
- **Evidence claims**:
  - B (conf 76) Creatine monohydrate — cellular energy/cognitive performance.
  - C (conf 70) Bacopa monnieri — memory support; slow onset, GI tolerance.
- **Protocol layers**: Cognitive Energy Base [Creatine monohydrate B 3-5g; Omega-3 algae/fish oil B].
- **Safety flags**: kidney disease, blood thinners, sedatives, thyroid medication, severe cognitive change.
- **Timeline**: Week1 energy baseline; Week4 botanical review; Week8 work output review; Day75 refill decision.
- **Bundle(s)**: brain-focus-60.

### 8. Blood Sugar Support (`blood-sugar`) — RISK: high
- **Promise**: Support glucose steadiness with fiber, meal sequencing, walking, magnesium, guarded botanicals.
- **Evidence claims**:
  - B (conf 80) Soluble fiber before meals — post-meal glucose response and fullness.
  - B (conf 76) Berberine — metabolic markers but material interaction risk; do not combine with glucose-lowering meds without professional review.
- **Protocol layers**: Meal Response Layer [Soluble fiber B; Magnesium B 100-200mg].
- **Safety flags**: diabetes medication, hypoglycemia, pregnancy/lactation, kidney disease, liver disease.
- **Timeline**: Week1 safety baseline; Week2 meal response; Week4 expert review point; Day60 maintenance decision.
- **Bundle(s)**: glucose-steady-60.

### 9. Joints and Mobility (`joints-mobility`)
- **Promise**: Support mobility with collagen, curcumin-style botanicals, omega-3, strength habits, inflammation-aware routines.
- **Evidence claims**:
  - B (conf 74) Collagen peptides — connective tissue nutrition/joint comfort.
  - B (conf 73) Curcumin phytosome — inflammatory balance; caution blood thinners/gallbladder/surgery/pregnancy.
- **Protocol layers**: Mobility Foundation [Collagen peptides B 10-15g; Curcumin phytosome B].
- **Safety flags**: joint swelling, recent injury, blood thinners, autoimmune disease, planned surgery.
- **Timeline**: Week1 load baseline; Week4 strength habit; Week8 comfort trend; Day75 refill decision.
- **Bundle(s)**: mobility-core-90.

### 10. Eye and Screen Health (`eye-screen`)
- **Promise**: Support screen-fatigue routines with lutein, zeaxanthin, omega-3, lighting hygiene, specialist red-flag routing.
- **Evidence claims**:
  - B (conf 77) Lutein and zeaxanthin — macular pigment/visual performance markers.
  - C (conf 68) Omega-3 — tear-film comfort in dry-eye routine.
- **Protocol layers**: Screen Resilience Layer [Lutein + zeaxanthin B; Omega-3 C].
- **Safety flags**: sudden vision change, eye pain, one-sided symptoms, diabetes medication/diagnosis, blood thinners.
- **Timeline**: Day1 red-flag screen; Week2 screen habit traction; Week6 nutrition consistency; Day60 refill or specialist.
- **Bundle(s)**: screen-eye-60.

### 11. Women's Hormone and Menopause (`women-hormone`)
- **Promise**: Support menopause-era sleep, heat, stress, digestion, strength routines with conservative botanicals and expert chart options.
- **Evidence claims**:
  - T (conf 61) Sage and sleep support layer — traditional/emerging menopause comfort.
  - B (conf 76) Protein, creatine, strength routine — muscle maintenance/energy.
- **Protocol layers**: Midlife Stability Layer [Magnesium glycinate B; Sage extract T].
- **Safety flags**: pregnancy/lactation, bleeding changes, hormone therapy, hormone-sensitive cancer history, seizure history.
- **Timeline**: Week1 safety intake; Week3 sleep/heat review; Week6 strength routine; Day75 expert chart point.
- **Bundle(s)**: midlife-balance-60.

### 12. Men's Vitality and Sexual Wellness (`mens-vitality`)
- **Promise**: Support energy, strength, stress, sleep, intimate wellness with quality-screened nutrients and firm red-flag routing.
- **Evidence claims**:
  - B (conf 74) Zinc and magnesium sufficiency — normal function when intake low.
  - T (conf 60) Ashwagandha / shilajit-style layer — vitality support; heavy-metal tested only.
- **Protocol layers**: Vitality Foundation [Zinc balance complex B; Magnesium glycinate B].
- **Safety flags**: erectile dysfunction, chest pain, hormone therapy, thyroid medication, liver disease.
- **Timeline**: Week1 red-flag screen; Week3 sleep/strength; Week6 botanical decision; Day75 refill or expert.
- **Bundle(s)**: vitality-core-60.

### 13. Energy and Recovery (`energy-recovery`) — RISK: low
- **Promise**: Turn fatigue, training recovery, daily energy into protein, creatine, electrolytes, sleep, refillable routines.
- **Evidence claims**:
  - A (conf 86) Protein and creatine stack — muscle maintenance, training output, recovery.
  - B (conf 78) Electrolytes — hydration routines (sweat/travel/low-carb).
- **Protocol layers**: Recovery Engine [Protein powder A 20-35g; Creatine monohydrate B 3-5g].
- **Safety flags**: kidney disease, blood pressure medication, sodium restriction, eating disorder history, unexplained fatigue.
- **Timeline**: Week1 energy baseline; Week3 recovery rhythm; Week6 routine upgrade; Day60 refill decision.
- **Bundle(s)**: recovery-engine-60.

---

## 3. The 50-Journey Atlas (grouped by 10 domains)

Total = **50 journeys** across 10 domains. Columns: id · name · route · consumer hook · package concept. (Each item also carries marketSignal, evidencePosture, whatChanged, mechanisms[], protocol[], dietLifestyle[], safetyGate, expertEscalation, companionPlan, freshness, risk, gradeMix[], sourceIds[].)

### Domain: Skin (6)
| id | name | route | consumer hook | package concept |
|---|---|---|---|---|
| vitiligo-support | Vitiligo Support | /skin/vitiligo | Honest vitiligo support, no snake-oil repigmentation | 90-day Skin Resilience Pack: COA antioxidants + gut + stress |
| acne-prone-skin | Acne-Prone Skin Routine | /skin/acne-prone | Fewer flare triggers, calm non-harsh routine | Clear Skin Foundations: probiotic + zinc-balanced + barrier |
| eczema-prone-skin | Eczema-Prone Skin Comfort | /skin/eczema-prone | Itch/dryness support without irritation | Barrier Calm Pack: gentle oils + probiotic option + barrier tools |
| psoriasis-prone-skin | Psoriasis-Prone Skin Support | /skin/psoriasis-prone | Inflammation-aware support, not a care replacement | Skin Inflammation Support: omega + curcumin-screened + stress shield |
| melasma-hyperpigmentation | Melasma & Hyperpigmentation Support | /skin/hyperpigmentation | Pigmentation routine explaining what's realistic | Pigment Balance Pack: antioxidant + topical compatibility checklist |
| skin-aging-collagen | Skin Aging & Collagen Routine | /skin/collagen-aging | Firmer-looking skin, fits daily life | Beauty From Within: collagen/protein + antioxidant foods + quality checks |

### Domain: Hair (4)
| id | name | route | consumer hook | package concept |
|---|---|---|---|---|
| hair-thinning-density | Hair Thinning & Density Routine | /hair/thinning | Reduce shedding anxiety, real scalp/nutrition routine | 90-day Hair Density Routine: topical scalp + nutrition |
| stress-shedding | Stress Shedding Support | /hair/stress-shedding | Shedding worse after stress, want calming routine | Stress Shedding Reset: calm stack + protein + scalp schedule |
| dandruff-scalp-comfort | Dandruff & Scalp Comfort | /hair/scalp-comfort | Less scalp irritation, simple routine | Scalp Calm Kit: topical routine + tested oils + nutrition |
| premature-greying | Premature Greying Support | /hair/premature-greying | Nutrient/stress factors, no fake reversal claims | Hair Vitality Foundations: antioxidant nutrition + testing checklist |

### Domain: Metabolic (5)
| id | name | route | consumer hook | package concept |
|---|---|---|---|---|
| weight-belly-fat | Weight & Belly Fat | /weight/belly-fat | Belly-fat support starting with protein/fiber/sleep/walking | 60-day Metabolic Starter: protein + fiber + electrolytes + coaching |
| glp1-maintenance | GLP-1 Maintenance Nutrition | /weight/glp1-maintenance | On/coming off GLP-1, protect muscle + routine | GLP-1 Nutrition Companion: protein + fiber + electrolytes + tolerance tracking |
| cravings-emotional-eating | Cravings & Emotional Eating | /weight/cravings | Fewer evening cravings, no stimulants/shame | Craving Reset Pack: protein/fiber + calm stack + coaching |
| blood-sugar-support | Blood Sugar Support | /metabolic/blood-sugar | Food-first glucose support, no unsafe med advice | 60-day Glucose Steady: fiber + magnesium + meal sequencing + expert gate |
| insulin-resistance-support | Insulin Resistance Support | /metabolic/insulin-resistance | Practical insulin-sensitivity support via habits | Insulin Rhythm Pack: food plan + fiber + magnesium + expert upgrade |

### Domain: Gut (5)
| id | name | route | consumer hook | package concept |
|---|---|---|---|---|
| gut-bloating | Gut Bloating | /gut/bloating | Calm stomach routine, no probiotic roulette | 30-day Gut Reset: probiotic + enzyme + ginger + trigger workflow |
| constipation-regularity | Constipation & Regularity | /gut/regularity | Gentle regularity without harsh-laxative dependence | Gentle Regularity Pack: fiber + magnesium + hydration prompts |
| reflux-support | Reflux Support | /gut/reflux | Meal/trigger support for reflux, no risky advice | Reflux Rhythm Pack: meal timing + trigger journal + comfort options |
| ibs-like-patterns | IBS-Like Pattern Support | /gut/ibs-like | Structured way to test foods and calm gut | IBS Pattern Kit: probiotic + fiber matching + reintroduction guide |
| microbiome-reset | Microbiome Reset | /gut/microbiome-reset | Rebuild gut after travel/diet chaos/antibiotics | 30-day Microbiome Reset: probiotic + prebiotic + diversity plan |

### Domain: StressSleep (7)
| id | name | route | consumer hook | package concept |
|---|---|---|---|---|
| sleep-onset | Sleep Onset Support | /sleep/onset | Can't fall asleep, non-hype wind-down protocol | Sleep Onset Pack: magnesium + glycine/theanine + circadian cards |
| night-waking | Night Waking Support | /sleep/night-waking | Wake 2-4 AM, understand patterns | Night Reset Pack: calm stack + evening nutrition prompts + check-ins |
| stress-cortisol-balance | Stress & Cortisol Balance | /stress/cortisol | Wired and tired, safer calm routine | Stress Shield Pack: calm nutrients + routine cards + weekly stress score |
| burnout-recovery | Burnout Recovery Routine | /stress/burnout | Energy back without stimulant stacking | Burnout Recovery Pack: energy nutrition + calm stack + workday pacing |
| anxiety-like-calm | Anxiety-Like Calm Support | /stress/calm | Feel calmer, no "supplement fixes anxiety" | Calm Foundation Pack: non-sedating calm support + crisis routing |
| low-mood-support | Low Mood Support | /mood/low-mood | Low-mood support with clear safety/escalation | Mood Foundation Pack: omega/calm support + wellbeing check-ins |
| emotional-eating | Emotional Eating Support | /mood/emotional-eating | Plan for stress eating, not blame | Emotional Eating Reset: meal anchors + calm stack + coaching |

### Domain: BrainEye (5)
| id | name | route | consumer hook | package concept |
|---|---|---|---|---|
| brain-fog-focus | Brain Fog & Focus | /brain/focus | Clearer focus without overdoing caffeine | 60-day Brain Focus Stack: creatine + omega-3 + stimulant discipline |
| memory-aging | Memory & Healthy Brain Aging | /brain/memory-aging | Support memory/aging brain realistically | Memory Aging Pack: omega-3 + creatine + habit tracking |
| screen-eye-strain | Screen Eye Strain | /eyes/screen-strain | Tired eyes from screens, daily support | 60-day Screen Eye Support: carotenoids + omega-3 + break reminders |
| dry-eye-comfort | Dry Eye Comfort | /eyes/dry-eye | Dry-eye comfort + better screen habits | Dry Eye Comfort Pack: omega support + screen routine |
| macular-support | Macular Support | /eyes/macular-support | Long-term eye nutrition, no eyesight reversal claims | Macular Nutrition Pack: carotenoids + tested omega support |

### Domain: MobilityEnergy (5)
| id | name | route | consumer hook | package concept |
|---|---|---|---|---|
| joint-stiffness | Joint Stiffness | /joints/stiffness | Less morning stiffness, followable mobility routine | 90-day Mobility Core: collagen + curcumin + omega + strength |
| knee-mobility | Knee Mobility Support | /joints/knee-mobility | Knee comfort + exercises + weight-aware habits | Knee Mobility Pack: collagen + comfort botanicals + exercise cards |
| tendon-recovery | Tendon Recovery Support | /recovery/tendon | Tendon support respecting healing time | Tendon Recovery Kit: collagen + protein + routine timing |
| sports-recovery | Sports Recovery | /recovery/sports | Recovery/performance without sketchy blends | 60-day Recovery Engine: protein + creatine + electrolytes + COAs |
| daily-energy-fatigue | Daily Energy & Fatigue | /energy/fatigue | Better daily energy without stimulant dependence | Daily Energy Pack: protein/creatine/electrolytes + testing checklist |

### Domain: HormoneVitality (7)
| id | name | route | consumer hook | package concept |
|---|---|---|---|---|
| pms-support | PMS Support | /women/pms | Cycle comfort without dismissive advice | Cycle Comfort Pack: magnesium + omega + cycle tracking |
| pcos-support | PCOS Support | /women/pcos | Insulin + cycle support with safety boundaries | PCOS Rhythm Pack: inositol + fiber/protein + expert chart |
| menopause-perimenopause | Perimenopause & Menopause Support | /women/menopause | Sleep/hot-flash/mood/strength support, not ignored | 60-day Midlife Balance: sleep + protein + guarded botanicals |
| fertility-readiness | Fertility Readiness | /fertility/readiness | Preconception nutrition that knows its limits | Fertility Readiness Pack: expert-reviewed nutrient + lifestyle chart |
| mens-testosterone-vitality | Men Testosterone & Vitality Support | /men/testosterone-vitality | Vitality without dangerous testosterone claims | 60-day Vitality Core: minerals + sleep support + expert escalation |
| libido-stamina | Libido & Stamina Support | /men/libido-stamina | Stamina support that screens red flags first | Stamina Foundations Pack: mineral + stress + fitness support |
| prostate-wellness | Prostate Wellness | /men/prostate-wellness | Urinary comfort support + clear red-flag routing | Prostate Comfort Pack: urinary botanicals + red-flag card |

### Domain: ImmuneOral (3)
| id | name | route | consumer hook | package concept |
|---|---|---|---|---|
| immune-allergy-comfort | Immune & Allergy Comfort | /immune/allergy-comfort | Seasonal comfort without drowsy chaos | Seasonal Comfort Pack: quercetin + nettle + probiotic + reminders |
| respiratory-seasonal | Respiratory Seasonal Support | /respiratory/seasonal | Seasonal breathing comfort + immune routine | Seasonal Respiratory Comfort: nutrient support + red-flag guide |
| oral-gum-breath | Oral, Gum & Breath Health | /oral/gum-breath | Fresher breath + gum support + better habits | Oral Microbiome Pack: oral probiotic + xylitol + habit tracker |

### Domain: CardioLiverLongevity (3)
| id | name | route | consumer hook | package concept |
|---|---|---|---|---|
| heart-cholesterol-bp | Heart, Cholesterol & Blood Pressure Support | /heart/cholesterol-bp | Food-first heart support, no risky med advice | Heart Rhythm Support: fiber + omega + food plan + expert gate |
| liver-alcohol-recovery | Liver & Alcohol Recovery Support | /liver/alcohol-recovery | Liver-support habits after alcohol, no fake detox | Liver Recovery Habits: hydration + nutrient + alcohol-reduction plan |
| longevity-healthy-aging | Longevity & Healthy Aging | /longevity/healthy-aging | Longevity routine based on basics, not exotic hype | Healthy Aging Core: protein/creatine + omega + fiber + habit dashboard |

Domain counts: Skin 6, Hair 4, Metabolic 5, Gut 5, StressSleep 7, BrainEye 5, MobilityEnergy 5, HormoneVitality 7, ImmuneOral 3, CardioLiverLongevity 3 = **50 total**.

---

## 4. Experts, Bundles, FactoryJobs

### Experts (3)
| name | role | location | credentials | specialties | price | turnaround |
|---|---|---|---|---|---|---|
| Dr. Meera Iyer | Ayurveda protocol reviewer | Bengaluru, India | BAMS; 12 yrs clinical Ayurveda; Skin & stress protocols | Prakriti-informed diet chart; skin & pigmentation; women wellness | $99 | 24-48 hours |
| Arjun Menon | Yoga & breathwork therapist | Kerala, India | RYT-500; Pranayama specialist; stress recovery coach | HPA-axis routines; sleep wind-down; mobile adherence plans | $69 | 24 hours |
| Nisha Rao | Holistic nutrition chart specialist | Mumbai, India | MSc Nutrition; Ayurveda diet integration; metabolic support | weight; blood sugar support; gut reset | $89 | 24-48 hours |

### Bundles (14)
| id | name | duration | categoryId | price | subPrice | marginModel | products (price/qual/grade) |
|---|---|---|---|---|---|---|---|
| skin-resilience-90 | 90-Day Skin Resilience Pack | 90d | skin-pigmentation | 229 | 189 | reseller 42% GM | Broccoli Sprout Nrf2 Complex ($42/91/C); Gut-Skin Probiotic ($38/88/B); Magnesium Glycinate Calm ($26/93/B) |
| metabolic-starter-60 | 60-Day Metabolic Starter Pack | 60d | weight-metabolism | 149 | 119 | mixed resale+affiliate 36% | Clean Protein Builder ($54/90/A); Soluble Fiber Meal Primer ($24/86/B) |
| hair-density-90 | 90-Day Hair Density Routine | 90d | hair-scalp | 199 | 169 | reseller 45% GM | Rosemary Scalp Serum ($36/87/C); Protein Collagen Builder ($46/89/B) |
| gut-reset-30 | 30-Day Gut Reset | 30d | gut-bloating | 89 | 69 | reseller 40% GM | Multi-Strain Gut Daily ($38/88/B); Meal Enzyme Complex ($29/82/C) |
| stress-shield-monthly | Monthly Stress Shield | 30d | sleep-stress | 74 | 59 | subscription 48% GM | Magnesium Glycinate Calm ($26/93/B); L-Theanine Calm Focus ($22/90/C) |
| glucose-steady-60 | 60-Day Glucose Steady Pack | 60d | blood-sugar | 129 | 99 | guarded 34% | Soluble Fiber Meal Primer ($24/86/B); Magnesium Glycinate Calm ($26/93/B) |
| mental-calm-30 | 30-Day Calm Foundation | 30d | mental-wellbeing | 79 | 59 | subscription 46% GM | Magnesium Glycinate Calm ($26/93/B); L-Theanine Calm Focus ($22/90/C) |
| brain-focus-60 | 60-Day Brain Focus Stack | 60d | brain-focus | 139 | 109 | reseller 39% GM | Creatine Monohydrate Pure ($29/92/B); Omega-3 Brain Oil ($42/88/B) |
| screen-eye-60 | 60-Day Screen Eye Support | 60d | eye-screen | 119 | 89 | reseller 37% GM | Lutein Zeaxanthin Vision Complex ($34/89/B); Omega-3 Eye Comfort Oil ($42/88/C) |
| mobility-core-90 | 90-Day Mobility Core | 90d | joints-mobility | 179 | 139 | reseller 41% GM | Collagen Peptide Builder ($45/88/B); Curcumin Phytosome Comfort ($39/86/B) |
| midlife-balance-60 | 60-Day Midlife Balance | 60d | women-hormone | 159 | 129 | expert-assisted 35% | Magnesium Glycinate Calm ($26/93/B); Sage Comfort Extract ($38/84/T) |
| vitality-core-60 | 60-Day Vitality Core | 60d | mens-vitality | 149 | 119 | guarded subscription 38% | Zinc Balance Complex ($24/87/B); Magnesium Glycinate Calm ($26/93/B) |
| recovery-engine-60 | 60-Day Recovery Engine | 60d | energy-recovery | 129 | 99 | high-retention subscription 43% GM | Clean Protein Builder ($54/90/A); Creatine Monohydrate Pure ($29/92/B) |

Note: the source `bundles` array contains **13 bundle objects** (one per category; `weight-metabolism` lists two bundleIds but `gut-reset-30` is shared, so 13 distinct bundles). Distinct products across bundles ≈ 15 SKUs (Magnesium Glycinate Calm, Clean Protein Builder, Soluble Fiber Meal Primer, Creatine Monohydrate Pure reused across multiple bundles).

### FactoryJobs (13 — one per category)
| id | categoryId | status | cadence | lastRun | nextRun | scanned | claims | safetyFlags | reviewer |
|---|---|---|---|---|---|---|---|---|---|
| job-skin | skin-pigmentation | fresh | monthly w/ expert review | 2026-05-03 | 2026-06-03 | 128 | 31 | 6 | Skin evidence reviewer |
| job-weight | weight-metabolism | current | weekly/monthly | 2026-04-27 | 2026-05-10 | 214 | 44 | 9 | Metabolic safety reviewer |
| job-hair | hair-scalp | fresh | monthly w/ scalp safety review | 2026-05-03 | 2026-06-03 | 104 | 23 | 6 | Hair and scalp evidence reviewer |
| job-gut | gut-bloating | fresh | monthly | 2026-05-02 | 2026-06-02 | 93 | 22 | 4 | Microbiome reviewer |
| job-sleep | sleep-stress | review_required | monthly | 2026-05-01 | 2026-05-08 | 101 | 28 | 11 | Mood/safety reviewer |
| job-sugar | blood-sugar | review_required | weekly safety scan, monthly refresh | 2026-05-03 | 2026-05-10 | 137 | 31 | 16 | Glucose and medication safety reviewer |
| job-mental | mental-wellbeing | review_required | weekly safety scan, monthly refresh | 2026-05-03 | 2026-05-10 | 146 | 33 | 15 | Mental wellbeing safety reviewer |
| job-brain | brain-focus | current | monthly | 2026-05-02 | 2026-06-02 | 118 | 27 | 7 | Cognition evidence reviewer |
| job-eye | eye-screen | current | monthly w/ red-flag review | 2026-05-02 | 2026-06-02 | 74 | 18 | 8 | Eye nutrition reviewer |
| job-joints | joints-mobility | fresh | monthly | 2026-05-03 | 2026-06-03 | 96 | 21 | 5 | Mobility evidence reviewer |
| job-hormone | women-hormone | review_required | weekly safety scan, monthly expert review | 2026-05-03 | 2026-05-10 | 132 | 29 | 14 | Women wellness safety reviewer |
| job-vitality | mens-vitality | review_required | weekly safety scan, monthly refresh | 2026-05-03 | 2026-05-10 | 121 | 25 | 12 | Men vitality safety reviewer |
| job-energy | energy-recovery | fresh | monthly | 2026-05-03 | 2026-06-03 | 109 | 24 | 4 | Sports nutrition reviewer |

### CompanionEvents (6 — daily companion timeline template)
| time | title | detail | type |
|---|---|---|---|
| 7:30 AM | Morning anchor | Antioxidant/protein layer after breakfast; log digestion if new | supplement |
| 12:30 PM | Meal intelligence | Protein/fiber first, colorful plants, trigger tracking | diet |
| 6:30 PM | Post-meal reset | Walk 10 min or two-minute breathing if stress high | routine |
| 8:45 PM | Evening support | Magnesium/theanine or gut support after dinner | supplement |
| Friday | Weekly check-in | Tolerance, adherence, symptom trend, expert review need | checkin |
| Day 75 | Refill decision | Continue/pause/adjust/ask expert before next cycle | refill |

---

## 5. Sources

### `sources` (nichecoreData.ts) — 15 entries
Publishers used: Global Wellness Institute (×2: gwi-2025, gwi-mental-wellness-2025), Euromonitor, Grand View Research (×7 incl. Horizon: dietary supplements, brain health, men's health, sports nutrition, menopause, sexual health), World Health Organization (TCIM), Central Council for Research in Ayurvedic Sciences (CCRAS), European Medicines Agency (EMA-HMPC), Therapeutic Goods Administration Australia (TGA), NSF, Market Data Forecast (eye health), Fact.MR (joint health).
sourceType breakdown: market (most), traditional (who-tcim, ccras, ema-hmpc, tga), quality (nsf).

### `journeyAtlasSources` (journeyAtlas.ts) — 12 entries
Publishers used: World Health Organization, Therapeutic Goods Administration Australia, European Medicines Agency HMPC, Health Canada (NHP), Central Council for Research in Ayurvedic Sciences, Pharmacopoeia Commission for Indian Medicine and Homoeopathy (PCIMH), Global Wellness Institute, Euromonitor, Grand View Research (×2: supplements, probiotics), NSF, Project memory (NicheCore category TAM/source ledger).

### `forbiddenSources` (explicitly excluded)
FDA, FTC, US disease associations, US hospital systems, US insurance-aligned medical bodies, US pharma-funded advocacy groups.
