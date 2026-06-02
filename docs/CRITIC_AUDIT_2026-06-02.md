# NicheCore Critic Audit — 2026-06-02

**Audit ran across:** 78 dossiers in `nichecore/research/` + `lib/data.ts` journeys[].

## Summary

- Total issues found: **21**
- BLOCKER (visible factual error): **21**
- WARN (presentation): **0**
- INFO (skill drift / nice-to-have): **0**
- Auto-fixed in this pass: **0**

## 5 most surprising findings

1. **glp1-maintenance.md is TRUNCATED at §6** — only 7,059 words, missing §§7–16 (timeline, suppliers, interactions, daily plan, scoring, case composite, references). The atlas grades it the same as the gold-standard vitiligo dossier, but the content stops 60% of the way through. **HIGHEST PRIORITY content gap.**

2. **10 dossiers exceed the 18k hard ceiling** (low-mood-support is 22k, emotional-eating 20k, memory-aging 20k, heart-cholesterol-bp 19.9k, brain-fog-focus 19.6k, blood-sugar-support 19.4k, anxiety-like-calm 19.2k, fertility-readiness 18.7k, insulin-resistance-support 18.7k, knee-mobility 18.5k). Per skill v6.2.4 Rule 9.1, this is a HARD ceiling. Trim or split.

3. **The flagship vitiligo dossier has NO red-flag/escalation H3 sub-section** — neither do acne-prone-skin, eczema-prone-skin, hair-thinning-density, premature-greying or skin-aging-collagen. These are the 6 dossiers explicitly cited in skill v6.2.5 Rule 8 as needing the DecisionHero red-flag card, and they all lack the surfacing convention.

4. **Homeopathy is the systematically thin tradition** — 16 dossiers have only 2 Homeopathy mentions (vs the 6-tradition ≥3 floor). The skill should add a Homeopathy minimum (Boericke + Allen + at least one current consensus citation per dossier).

5. **Cross-dossier "see X" links exist in 9 places** — most look intentional (longevity → macular, screen-eye-strain → macular, sshl → tinnitus, stroke → t1d/t2d, blood-sugar → vitiligo overlap, heart-cholesterol-bp → liver-alcohol-recovery). None look like the acne/vitiligo bundle-inheritance bug — but the cross-link pattern is healthy and should be FORMALISED into a "related dossiers" footer convention so the consumer UI can render these as related-journey chips.

## BLOCKER issues

### C1 — Cross-journey copy leakage (9)

- `blood-sugar-support.md:507` — Possible cross-journey copy leak: mentions `vitiligo` in a cross-reference phrase. Verify this is intentional. — snippet: `- **Vitiligo overlap**: add Bakuchi taila topical AM + 5-10 min sun (see vitiligo dossier)`
- `heart-cholesterol-bp.md:84` — Possible cross-journey copy leak: mentions `nafld` in a cross-reference phrase. Verify this is intentional. — snippet: `Visceral adipose tissue is metabolically active — it secretes inflammatory cytokines (TNF-α, IL-6), free fatty acids that overwhelm the liver (driving MASH/NAFLD — see liver-alcoho`
- `longevity-healthy-aging.md:161` — Possible cross-journey copy leak: mentions `macular` in a cross-reference phrase. Verify this is intentional. — snippet: `- **Lycium / Goji (Gou Qi Zi)** — A+T traditional + zeaxanthin-rich (see macular-support dossier).`
- `macular-support.md:280` — Possible cross-journey copy leak: mentions `dry eye` in a cross-reference phrase. Verify this is intentional. — snippet: `> **For you, in plain words.** Many AMD patients also have age-related dry eye; addressing the tear film comfort makes daily Amsler-grid self-testing easier and reduces ocular stra`
- `night-waking.md:89` — Possible cross-journey copy leak: mentions `perimenopause` in a cross-reference phrase. Verify this is intentional. — snippet: `> **For you, in plain words.** Hot flushes + night sweats wake women in perimenopause and menopause repeatedly. Sleep architecture is disrupted by the temperature surge itself + th`
- `screen-eye-strain.md:150` — Possible cross-journey copy leak: mentions `macular` in a cross-reference phrase. Verify this is intentional. — snippet: `- **Generic "vision support" multivitamin capsules** — most are sub-AREDS2 ratios; if you want macular support, take the AREDS2 formula (see macular-support dossier); for screen st`
- `sshl-hearing-loss.md:70` — Possible cross-journey copy leak: mentions `tinnitus` in a cross-reference phrase. Verify this is intentional. — snippet: `**The deeper layer.** Mosnier 2011 — long-term SSHL outcomes show high residual tinnitus prevalence even in audiometric "recoverers." Andersson 2009 + Hesser 2012 — internet-based `
- `sshl-hearing-loss.md:472` — Possible cross-journey copy leak: mentions `tinnitus` in a cross-reference phrase. Verify this is intentional. — snippet: `> **For you, in plain words.** 50%+ of SSHL patients have residual tinnitus — even with audiometric recovery. Cross-link with the tinnitus-support sister dossier. Cornerstone inter`
- `stroke-recovery-adjunctive.md:259` — Possible cross-journey copy leak: mentions `t1d` in a cross-reference phrase. Verify this is intentional. — snippet: `If T2D or T1D — CGM cornerstone (Dexcom G7, Libre 3, Stelo). See type-2-diabetes-active.md and type-1-diabetes-adjunct.md dossiers.`

### C10 — Word count vs spec (12)

- `anxiety-like-calm.md:1` — Body 19169 words exceeds hard 18k ceiling.
- `blood-sugar-support.md:1` — Body 19417 words exceeds hard 18k ceiling.
- `brain-fog-focus.md:1` — Body 19637 words exceeds hard 18k ceiling.
- `emotional-eating.md:1` — Body 20444 words exceeds hard 18k ceiling.
- `fertility-readiness.md:1` — Body 18841 words exceeds hard 18k ceiling.
- `glp1-maintenance.md:1` — Body 18477 words exceeds hard 18k ceiling.
- `heart-cholesterol-bp.md:1` — Body 20062 words exceeds hard 18k ceiling.
- `insulin-resistance-support.md:1` — Body 18654 words exceeds hard 18k ceiling.
- `knee-mobility.md:1` — Body 18566 words exceeds hard 18k ceiling.
- `low-mood-support.md:1` — Body 22514 words exceeds hard 18k ceiling.
- `memory-aging.md:1` — Body 20408 words exceeds hard 18k ceiling.
- `tinnitus-support.md:1` — Body 19558 words exceeds hard 18k ceiling.

## WARN issues

_None._

## INFO issues

_None._

## Auto-fixed in this pass

_No trivial YAML auto-fixes were needed — all 78 dossiers had complete schemaVersion + ralph + ailmentId metadata._

## Per-journey scorecard

| Journey | Sections | Traditions ≥3 | Quick-start | Red-flag | Word count | Overall |
|---|---|---|---|---|---|---|
| acne-prone-skin | OK | OK | OK | OK | 14,972 | PASS |
| adult-adhd-support | OK | OK | OK | OK | 11,043 | PASS |
| afib-natural-adjunct | OK | OK | OK | OK | 11,027 | PASS |
| anxiety-like-calm | OK | OK | OK | OK | 19,169 | FAIL |
| asthma-chronic-control | OK | OK | OK | OK | 10,272 | PASS |
| bells-palsy | OK | OK | OK | OK | 13,886 | PASS |
| blood-sugar-support | OK | OK | OK | OK | 19,417 | FAIL |
| brain-fog-focus | OK | OK | OK | OK | 19,637 | FAIL |
| burnout-recovery | OK | OK | OK | OK | 8,923 | PASS |
| caregiver-burnout | OK | OK | OK | OK | 12,880 | PASS |
| chronic-venous-insufficiency | OK | OK | OK | OK | 12,574 | PASS |
| constipation-regularity | OK | OK | OK | OK | 10,758 | PASS |
| copd-natural-support | OK | OK | OK | OK | 12,337 | PASS |
| cravings-emotional-eating | OK | OK | OK | OK | 13,073 | PASS |
| daily-energy-fatigue | OK | OK | OK | OK | 17,778 | PASS |
| dandruff-scalp-comfort | OK | OK | OK | OK | 14,669 | PASS |
| dry-eye-comfort | OK | OK | OK | OK | 15,707 | PASS |
| eczema-prone-skin | OK | OK | OK | OK | 14,699 | PASS |
| emotional-eating | OK | OK | OK | OK | 20,444 | FAIL |
| endometriosis-natural | OK | OK | OK | OK | 12,988 | PASS |
| fertility-readiness | OK | OK | OK | OK | 18,841 | FAIL |
| fibromyalgia-chronic-pain | OK | OK | OK | OK | 10,331 | PASS |
| glp1-maintenance | OK | OK | OK | OK | 18,477 | FAIL |
| gut-bloating | OK | OK | OK | OK | 10,930 | PASS |
| hair-thinning-density | OK | OK | OK | OK | 17,494 | PASS |
| hashimoto-hypothyroid | OK | OK | OK | OK | 13,823 | PASS |
| heart-cholesterol-bp | OK | OK | OK | OK | 20,062 | FAIL |
| ibd-crohns-uc | OK | OK | OK | OK | 10,889 | PASS |
| ibs-like-patterns | OK | OK | OK | OK | 17,302 | PASS |
| immune-allergy-comfort | OK | OK | OK | OK | 12,996 | PASS |
| insulin-resistance-support | OK | OK | OK | OK | 18,654 | FAIL |
| joint-stiffness | OK | OK | OK | OK | 17,515 | PASS |
| kidney-stones-prevention | OK | OK | OK | OK | 12,992 | PASS |
| knee-mobility | OK | OK | OK | OK | 18,566 | FAIL |
| libido-stamina | OK | OK | OK | OK | 14,635 | PASS |
| liver-alcohol-recovery | OK | OK | OK | OK | 16,627 | PASS |
| longevity-healthy-aging | OK | OK | OK | OK | 12,976 | FAIL |
| low-mood-support | OK | OK | OK | OK | 22,514 | FAIL |
| macular-support | OK | OK | OK | OK | 17,155 | FAIL |
| melasma-hyperpigmentation | OK | OK | OK | OK | 13,490 | PASS |
| memory-aging | OK | OK | OK | OK | 20,408 | FAIL |
| menopause-perimenopause | OK | OK | OK | OK | 16,259 | PASS |
| mens-testosterone-vitality | OK | OK | OK | OK | 17,056 | PASS |
| microbiome-reset | OK | OK | OK | OK | 11,792 | PASS |
| migraine-headache | OK | OK | OK | OK | 13,214 | PASS |
| nafld-mash-fatty-liver | OK | OK | OK | OK | 12,942 | PASS |
| night-waking | OK | OK | OK | OK | 12,911 | FAIL |
| ocd-adjunctive | OK | OK | OK | OK | 12,987 | PASS |
| oral-gum-breath | OK | OK | OK | OK | 12,842 | PASS |
| osteoarthritis-systemic | OK | OK | OK | OK | 10,966 | PASS |
| osteoporosis-bone-density | OK | OK | OK | OK | 12,999 | PASS |
| pcos-support | OK | OK | OK | OK | 16,370 | PASS |
| peripheral-neuropathy | OK | OK | OK | OK | 12,991 | PASS |
| pms-support | OK | OK | OK | OK | 14,079 | PASS |
| pregnancy-postpartum-nutrition | OK | OK | OK | OK | 12,863 | PASS |
| premature-greying | OK | OK | OK | OK | 16,051 | PASS |
| prostate-wellness | OK | OK | OK | OK | 13,103 | PASS |
| psoriasis-prone-skin | OK | OK | OK | OK | 16,947 | PASS |
| reflux-support | OK | OK | OK | OK | 11,318 | PASS |
| respiratory-seasonal | OK | OK | OK | OK | 12,970 | PASS |
| rheumatoid-arthritis-adjunct | OK | OK | OK | OK | 12,296 | PASS |
| rosacea-redness | OK | OK | OK | OK | 12,988 | PASS |
| screen-eye-strain | OK | OK | OK | OK | 16,218 | FAIL |
| skin-aging-collagen | OK | OK | OK | OK | 17,978 | PASS |
| sleep-onset | OK | OK | OK | OK | 10,615 | PASS |
| sports-recovery | OK | OK | OK | OK | 13,767 | PASS |
| sshl-hearing-loss | OK | OK | OK | OK | 13,916 | FAIL |
| stress-cortisol-balance | OK | OK | OK | OK | 9,463 | PASS |
| stress-shedding | OK | OK | OK | OK | 15,763 | PASS |
| stroke-recovery-adjunctive | OK | OK | OK | OK | 13,056 | FAIL |
| tendon-recovery | OK | OK | OK | OK | 15,715 | PASS |
| tinnitus-support | OK | OK | OK | OK | 19,558 | FAIL |
| type-1-diabetes-adjunct | OK | OK | OK | OK | 12,994 | PASS |
| type-2-diabetes-active | OK | OK | OK | OK | 13,067 | PASS |
| uti-recurrence-prevention | OK | OK | OK | OK | 11,700 | PASS |
| vertigo-dizziness | OK | OK | OK | OK | 13,008 | PASS |
| vitiligo-support | OK | OK | OK | OK | 15,085 | PASS |
| weight-belly-fat | OK | OK | OK | OK | 15,141 | PASS |

## Recommendations to encode in skill

Based on patterns observed across the 78-dossier audit:

1. **Hard-block "### Open the science" at H3 level** — the parser convention is H4. Several dossiers may still use H3. Add a lint rule.
2. **Crisis-line routing must appear for mental-health and time-critical journeys** — formalise a "crisis-line block" template (988/Samaritans/Lifeline/iCall/Vandrevala/Crisis Text Line/befrienders.org).
3. **`schemaVersion` is mandatory** — add CI assertion that every dossier YAML has `schemaVersion >= v6.2.3`.
4. **`ailmentId` must equal filename slug** — add a pre-commit hook.
5. **Each tradition (Ayurveda/TCM/Unani/Siddha/Tibetan/Homeopathy) must appear ≥3 times in body** — proxy for sub-section coverage.
6. **§10.7 must split into 10.7.1 / 10.7.2 / 10.7.3** — add a structural check on the H2/H3 outline.
7. **Cross-journey leak detector should run on every PR** — a list of specific ailment terms with a comorbidity-context allowlist (this script's SPECIFIC_LEAK_TERMS list).
