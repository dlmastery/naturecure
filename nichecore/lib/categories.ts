import type { Category } from "./types";

const skinTimeline = [
  { week: "Week 1", title: "Tolerance & rhythm", description: "Confirm products are tolerated; set the daily anchor.", metric: "Adherence ≥ 5/7 days" },
  { week: "Week 4", title: "Stability check", description: "Review skin stability and any new triggers.", metric: "Trigger log complete" },
  { week: "Week 8", title: "Protocol review", description: "Decide continue / adjust with evidence updates.", metric: "Symptom trend" },
  { week: "Day 75", title: "Refill or expert review", description: "Continue, pause, or request an expert chart.", metric: "Refill decision" },
];

export const categories: Category[] = [
  {
    id: "skin-pigmentation", name: "Skin and Pigmentation", shortName: "Skin", rank: 5, score: 42, risk: "moderate", accent: "mint",
    marketSignal: "Skin care + beauty-from-within demand", marketSize: "$202.77B skin care",
    promise: "Stabilise skin stress loops with antioxidant, gut-skin, diet and stress-shield protocols.",
    consumerLanguage: ["My skin has patches", "Pigmentation that comes and goes", "Calm, evidence-based skin support"],
    mechanisms: ["Oxidative / melanocyte stress", "Gut-skin axis inflammation", "HPA / stress signalling", "Pigment-support nutrition"],
    latestFindings: ["Nrf2-linked antioxidant pathways reviewed for pigment-cell protection (2025)", "Gut-skin axis evidence for probiotics + diet (2025)", "Topical Nigella sativa RCT: VASI 4.98 → 3.75"],
    claims: [
      { id: "skin-1", intervention: "Broccoli sprout extract (sulforaphane)", claim: "May support Nrf2-linked antioxidant defences in skin.", grade: "C", confidence: 72, lastReviewed: "2026-05-03", sources: ["nutrients-ferroptosis-2025", "ccras"], safety: "GI sensitivity; avoid with autoimmune medication without review.", allowedWording: "May support antioxidant defence; not a cure or repigmentation guarantee." },
      { id: "skin-2", intervention: "Polyphenol layer (quercetin, luteolin, EGCG)", claim: "Mechanistic antioxidant and anti-inflammatory plausibility.", grade: "D", confidence: 62, lastReviewed: "2026-05-03", sources: ["nutrients-ferroptosis-2025"], safety: "EGCG: avoid high doses with liver concerns.", allowedWording: "Mechanistically plausible; not proven in humans for repigmentation." },
      { id: "skin-3", intervention: "Gut-skin support (probiotics + diet)", claim: "May support systemic inflammation and barrier function.", grade: "B", confidence: 78, lastReviewed: "2026-05-03", sources: ["who-tcim-2025", "nsf"], safety: "Immunocompromised: choose strains with care.", allowedWording: "Promising human evidence for gut-skin support; not settled." },
    ],
    protocol: [
      { name: "Nrf2 & Antioxidant Layer", mechanism: "Antioxidant / ferroptosis defence", rationale: "Support the cell's redox shield where pigment cells are under oxidative stress.", ingredients: [
        { name: "Broccoli sprout extract", role: "Nrf2 support", dose: "10–20 mg sulforaphane", timing: "After breakfast", grade: "C", cautions: ["GI sensitivity"], qualityMarkers: ["Sulforaphane standardized", "Third-party tested"] },
        { name: "Amla (Phyllanthus emblica)", role: "Polyphenol antioxidant", dose: "500 mg", timing: "After breakfast", grade: "T", cautions: [], qualityMarkers: ["AYUSH-GMP", "Standardized"] },
      ], lifestyle: ["Daily antioxidant-rich plants", "Trigger tracking"] },
      { name: "Gut-Skin Reset", mechanism: "Gut-skin axis", rationale: "Microbiome support for systemic inflammation.", ingredients: [
        { name: "Multi-strain probiotic", role: "Microbiome", dose: "10B–25B CFU", timing: "After dinner", grade: "B", cautions: ["Immunocompromised"], qualityMarkers: ["Strain-verified", "CFU to expiry"] },
      ], lifestyle: ["Fermented foods", "Fiber diversity"] },
      { name: "Stress-Shield Layer", mechanism: "HPA / stress", rationale: "Stress is a common flare trigger many protocols overlook.", ingredients: [
        { name: "Magnesium glycinate", role: "Relaxation", dose: "100–200 mg elemental", timing: "Evening", grade: "B", cautions: ["Kidney disease"], qualityMarkers: ["Chelated", "USP-grade"] },
        { name: "L-theanine", role: "Calm focus", dose: "100–200 mg", timing: "Daytime", grade: "C", cautions: [], qualityMarkers: ["Single-ingredient"] },
      ], lifestyle: ["Pranayama (Anulom Vilom + Bhramari)", "Wind-down routine"] },
    ],
    diet: ["Antioxidant-rich plants daily", "Bitter greens and fermented foods", "Reduce high-phenol trigger foods during trials", "Consider a gluten-elimination trial (8–12 weeks) where appropriate"],
    dailySchedule: ["AM: antioxidant layer after breakfast", "Midday: colourful plants, trigger log", "PM: probiotic + magnesium after dinner", "Evening: breathwork + red-light (optional)"],
    expectedTimeline: skinTimeline,
    safetyFlags: ["pregnancy / lactation", "autoimmune medication", "immunocompromised", "rapidly spreading new lesions", "GI sensitivity"],
    bundleIds: ["skin-resilience-90", "stress-shield-monthly"], freshness: "fresh", lastReviewed: "2026-05-03", nextRefresh: "2026-06-03",
  },
  {
    id: "weight-metabolism", name: "Weight and Metabolism", shortName: "Weight", rank: 1, score: 47, risk: "guarded", accent: "amber",
    marketSignal: "Largest commercial wedge", marketSize: "$176.67B weight management",
    promise: "Build metabolic consistency through protein, fiber, meal timing, walking, sleep and carefully screened botanicals.",
    consumerLanguage: ["I want to lose belly fat", "Cravings control", "Protect muscle while losing weight"],
    mechanisms: ["Satiety & protein turnover", "Post-meal glucose response", "Sleep & stress eating", "Metabolic flexibility"],
    latestFindings: ["Protein-first meals support satiety and muscle (A-grade)", "Soluble fiber supports fullness and post-meal glucose", "Berberine reviewed with strict medication screening"],
    claims: [
      { id: "wt-1", intervention: "Protein-first meals", claim: "Supports satiety and muscle maintenance.", grade: "A", confidence: 88, lastReviewed: "2026-04-27", sources: ["gvr-supplements"], safety: "Kidney disease: review protein load.", allowedWording: "Supported by multiple human studies." },
      { id: "wt-2", intervention: "Soluble fiber", claim: "Supports fullness, regularity and post-meal glucose.", grade: "B", confidence: 80, lastReviewed: "2026-04-27", sources: ["gvr-supplements"], safety: "Take with water; separate from medications.", allowedWording: "Promising human evidence for fullness and glucose." },
      { id: "wt-3", intervention: "Berberine", claim: "May support metabolic markers; needs medication/pregnancy screen.", grade: "B", confidence: 76, lastReviewed: "2026-04-27", sources: ["ccras"], safety: "Do not combine with glucose-lowering meds without review.", allowedWording: "Promising but requires safety screening." },
    ],
    protocol: [
      { name: "Protein and Fiber Anchor", mechanism: "Satiety / glucose", rationale: "Anchor every meal to reduce cravings and protect muscle.", ingredients: [
        { name: "Protein support", role: "Satiety + muscle", dose: "20–35 g / meal", timing: "Meals", grade: "A", cautions: ["Kidney disease"], qualityMarkers: ["No proprietary blend", "Heavy-metal tested"] },
        { name: "Psyllium or glucomannan", role: "Fullness / glucose", dose: "As directed", timing: "Before meals", grade: "B", cautions: ["Take with water"], qualityMarkers: ["Single-ingredient"] },
      ], lifestyle: ["10-minute post-meal walks", "Consistent sleep window"] },
    ],
    diet: ["Protein and fiber first", "Whole-food carbohydrates", "Post-meal movement"],
    dailySchedule: ["AM: protein-first breakfast", "Midday: fiber before lunch", "PM: post-meal walk", "Evening: sleep-protective routine"],
    expectedTimeline: [
      { week: "Week 1", title: "Appetite baseline", description: "Establish protein/fiber anchors.", metric: "Meal anchors hit" },
      { week: "Week 4", title: "Routine consolidation", description: "Lock walking + sleep window.", metric: "Habit streak" },
      { week: "Week 8", title: "Metabolic review", description: "Review markers and adjust.", metric: "Waist / energy trend" },
      { week: "Day 75", title: "Maintenance decision", description: "Continue or step down.", metric: "Maintenance plan" },
    ],
    safetyFlags: ["glucose medication", "pregnancy / lactation", "kidney disease", "eating-disorder history", "rapid unexplained weight loss"],
    bundleIds: ["metabolic-starter-60", "gut-reset-30"], freshness: "current", lastReviewed: "2026-04-27", nextRefresh: "2026-05-10",
  },
  {
    id: "hair-scalp", name: "Hair and Scalp", shortName: "Hair", rank: 2, score: 45, risk: "moderate", accent: "lavender",
    marketSignal: "High intent, recurring", marketSize: "$88.20B hair & scalp",
    promise: "Pair scalp care, nutrient sufficiency, stress control and inflammation support for visible routine discipline.",
    consumerLanguage: ["My hair is thinning", "Shedding after stress", "Scalp irritation"],
    mechanisms: ["Scalp inflammation", "Nutrient sufficiency (iron / vitamin D)", "Stress-shedding (telogen)", "Hair cycle support"],
    latestFindings: ["Rosemary scalp topical: emerging interest for density", "Pumpkin seed oil: early human signal", "Micronutrient screening guidance refreshed"],
    claims: [
      { id: "hair-1", intervention: "Rosemary scalp topical", claim: "Emerging interest for hair density.", grade: "C", confidence: 68, lastReviewed: "2026-05-03", sources: ["ema-hmpc"], safety: "Patch-test; discontinue if irritation.", allowedWording: "Early research suggests; not guaranteed." },
      { id: "hair-2", intervention: "Pumpkin seed oil", claim: "May support hair wellness; not guaranteed.", grade: "C", confidence: 64, lastReviewed: "2026-05-03", sources: ["ccras"], safety: "GI tolerance.", allowedWording: "Some early human data; mixed." },
    ],
    protocol: [
      { name: "Scalp + Nutrient Foundation", mechanism: "Scalp + nutrition", rationale: "Combine topical scalp care with nutrient sufficiency.", ingredients: [
        { name: "Rosemary scalp serum", role: "Scalp topical", dose: "As directed", timing: "Evening", grade: "C", cautions: ["Patch-test"], qualityMarkers: ["Fragrance-light"] },
        { name: "Protein / collagen support", role: "Nutrient foundation", dose: "10–15 g", timing: "Daily", grade: "B", cautions: [], qualityMarkers: ["Tested for contaminants"] },
      ], lifestyle: ["Iron / vitamin D testing prompt", "Stress + sleep layer"] },
    ],
    diet: ["Protein sufficiency", "Iron-rich foods (test first)", "Whole-food micronutrients"],
    dailySchedule: ["AM: nutrient layer", "PM: scalp serum routine", "Weekly: shedding log"],
    expectedTimeline: [
      { week: "Week 1", title: "Scalp tolerance", description: "Confirm topical tolerance.", metric: "No irritation" },
      { week: "Week 4", title: "Shedding log", description: "Track shedding pattern.", metric: "Shedding trend" },
      { week: "Week 12", title: "Cycle review", description: "Hair cycle is slow; review.", metric: "Density photos" },
      { week: "Month 6", title: "Long-cycle decision", description: "Continue or escalate.", metric: "Outcome" },
    ],
    safetyFlags: ["sudden patchy loss", "postpartum", "thyroid symptoms", "scalp infection signs", "pregnancy / lactation"],
    bundleIds: ["hair-density-90", "stress-shield-monthly"], freshness: "fresh", lastReviewed: "2026-05-03", nextRefresh: "2026-06-03",
  },
  {
    id: "gut-bloating", name: "Gut and Bloating", shortName: "Gut", rank: 3, score: 44, risk: "moderate", accent: "sky",
    marketSignal: "Recurring, high-intent", marketSize: "$113.97B probiotics",
    promise: "A structured gut reset with probiotics, fiber, enzymes, food tracking and gentle routine correction.",
    consumerLanguage: ["My gut is bloated", "Reset after antibiotics", "Find my trigger foods"],
    mechanisms: ["Microbiome balance", "Digestive enzyme support", "Fiber matching", "Food-trigger mapping"],
    latestFindings: ["Multi-strain probiotic evidence is strain/dose/person dependent", "Enteric peppermint oil for IBS-like symptoms"],
    claims: [
      { id: "gut-1", intervention: "Multi-strain probiotic", claim: "Supports digestive balance (strain/dose/person dependent).", grade: "B", confidence: 80, lastReviewed: "2026-05-02", sources: ["nsf"], safety: "Immunocompromised: select strains carefully.", allowedWording: "Promising human evidence; person-dependent." },
      { id: "gut-2", intervention: "Peppermint oil (enteric-coated)", claim: "IBS-like symptom support.", grade: "B", confidence: 78, lastReviewed: "2026-05-02", sources: ["ema-hmpc"], safety: "Reflux can worsen; use enteric-coated.", allowedWording: "Promising human evidence for IBS-like symptoms." },
    ],
    protocol: [
      { name: "Reset and Rebuild", mechanism: "Microbiome + digestion", rationale: "Reseed and support, then map triggers.", ingredients: [
        { name: "Probiotic", role: "Microbiome", dose: "10B–25B CFU", timing: "After dinner", grade: "B", cautions: ["Immunocompromised"], qualityMarkers: ["Strain-verified"] },
        { name: "Digestive enzyme", role: "Digestion", dose: "With meals", timing: "Meals", grade: "C", cautions: [], qualityMarkers: ["Allergen-clear"] },
      ], lifestyle: ["Food reintroduction plan", "Gentle routine correction"] },
    ],
    diet: ["Fiber matching to tolerance", "Fermented foods", "Trigger elimination + reintroduction"],
    dailySchedule: ["AM: gentle fiber", "Meals: enzyme support", "PM: probiotic", "Daily: trigger log"],
    expectedTimeline: [
      { week: "Day 3", title: "Bloating adjustment", description: "Initial GI adaptation.", metric: "Bloating trend" },
      { week: "Week 2", title: "Fiber tolerance", description: "Match fiber to tolerance.", metric: "Tolerance" },
      { week: "Week 4", title: "Trigger review", description: "Review trigger map.", metric: "Triggers identified" },
      { week: "Day 30", title: "Refill or rotate", description: "Continue or rotate strains.", metric: "Decision" },
    ],
    safetyFlags: ["blood in stool", "severe pain", "unexplained weight loss", "immunocompromised", "pregnancy / lactation"],
    bundleIds: ["gut-reset-30"], freshness: "fresh", lastReviewed: "2026-05-02", nextRefresh: "2026-06-02",
  },
  {
    id: "sleep-stress", name: "Sleep and Stress", shortName: "Sleep & Stress", rank: 4, score: 43, risk: "moderate", accent: "lavender",
    marketSignal: "Daily, recurring", marketSize: "$12.55B insomnia supplements",
    promise: "Calm the nervous system with sleep hygiene, magnesium/theanine routines, breathwork and refillable stress support.",
    consumerLanguage: ["I can't sleep", "Wired and tired", "Calm my stress loop"],
    mechanisms: ["Nervous-system downshift", "Circadian routine", "Stress-sleep loop", "Magnesium sufficiency"],
    latestFindings: ["Magnesium glycinate for relaxation and sleep quality", "L-theanine for calm focus"],
    claims: [
      { id: "sl-1", intervention: "Magnesium glycinate", claim: "Relaxation and sleep quality, especially with low intake.", grade: "B", confidence: 78, lastReviewed: "2026-05-01", sources: ["nsf"], safety: "Kidney disease: review.", allowedWording: "Promising human evidence for sleep quality." },
      { id: "sl-2", intervention: "L-theanine", claim: "Calm focus and reduced stress reactivity.", grade: "C", confidence: 70, lastReviewed: "2026-05-01", sources: ["ema-hmpc"], safety: "Generally well tolerated.", allowedWording: "Some human data; calming support." },
    ],
    protocol: [
      { name: "Nervous System Downshift", mechanism: "Parasympathetic support", rationale: "Lower stress reactivity and support sleep onset.", ingredients: [
        { name: "Magnesium glycinate", role: "Relaxation", dose: "100–200 mg elemental", timing: "Evening", grade: "B", cautions: ["Kidney disease"], qualityMarkers: ["Chelated", "USP-grade"] },
        { name: "L-theanine", role: "Calm focus", dose: "100–200 mg", timing: "Evening", grade: "C", cautions: [], qualityMarkers: ["Single-ingredient"] },
      ], lifestyle: ["Circadian wind-down", "Breathwork before bed"] },
    ],
    diet: ["Caffeine cutoff", "Evening protein moderation", "Hydration timing"],
    dailySchedule: ["Evening: magnesium + theanine", "Wind-down: breathwork", "Night: dark, cool room"],
    expectedTimeline: [
      { week: "Night 1", title: "Routine setup", description: "Set the wind-down sequence.", metric: "Routine built" },
      { week: "Week 1", title: "Tolerance", description: "Confirm tolerance.", metric: "Sleep onset" },
      { week: "Week 3", title: "Stress-loop review", description: "Review stress patterns.", metric: "Stress score" },
      { week: "Day 30", title: "Refill decision", description: "Continue or adjust.", metric: "Decision" },
    ],
    safetyFlags: ["crisis language", "sedatives", "bipolar / mania history", "pregnancy / lactation", "severe insomnia"],
    bundleIds: ["stress-shield-monthly"], freshness: "review_required", lastReviewed: "2026-05-01", nextRefresh: "2026-05-08",
  },
  {
    id: "mental-wellbeing", name: "Mood and Mental Wellbeing", shortName: "Mood", rank: 6, score: 41, risk: "guarded", accent: "blush",
    marketSignal: "Large mental-wellness demand", marketSize: "$232.6B+ mental wellness",
    promise: "Support calm, resilience and daily functioning via sleep, magnesium, adaptogens, breathwork and red-flag routing.",
    consumerLanguage: ["I'm stressed and low", "Calm and resilience", "Daily functioning support"],
    mechanisms: ["Calm foundation", "Perceived-stress support", "Sleep–mood loop"],
    latestFindings: ["Magnesium glycinate for relaxation, especially low intake", "Adaptogen layer reviewed with quality + safety screening"],
    claims: [
      { id: "mw-1", intervention: "Magnesium glycinate", claim: "Relaxation and sleep, especially with low intake.", grade: "B", confidence: 78, lastReviewed: "2026-05-03", sources: ["nsf"], safety: "Kidney disease.", allowedWording: "Promising human evidence." },
      { id: "mw-2", intervention: "Ashwagandha / adaptogen layer", claim: "May support perceived stress; quality + safety screening required.", grade: "C", confidence: 68, lastReviewed: "2026-05-03", sources: ["ccras"], safety: "Thyroid medication; hepatic caution.", allowedWording: "Some human data; requires safety screening." },
    ],
    protocol: [
      { name: "Calm Foundation", mechanism: "Calm / sleep–mood", rationale: "Non-sedating calm support with crisis routing.", ingredients: [
        { name: "Magnesium glycinate", role: "Calm", dose: "100–200 mg", timing: "Evening", grade: "B", cautions: ["Kidney disease"], qualityMarkers: ["Chelated"] },
        { name: "L-theanine", role: "Stress reactivity", dose: "100–200 mg", timing: "Daytime", grade: "C", cautions: [], qualityMarkers: ["Single-ingredient"] },
      ], lifestyle: ["Breathwork", "Daily wellbeing check-in", "Crisis routing card"] },
    ],
    diet: ["Regular meals", "Omega-3-rich foods", "Caffeine awareness"],
    dailySchedule: ["AM: light + movement", "PM: calm layer", "Daily: wellbeing check-in"],
    expectedTimeline: [
      { week: "Day 1", title: "Safety / baseline", description: "Run the safety + crisis screen.", metric: "Safety cleared" },
      { week: "Week 1", title: "Routine traction", description: "Build the calm routine.", metric: "Routine streak" },
      { week: "Week 3", title: "Adaptogen decision", description: "Decide on adaptogen layer.", metric: "Tolerance" },
      { week: "Day 30", title: "Continue or expert", description: "Escalate if needed.", metric: "Decision" },
    ],
    safetyFlags: ["crisis language", "sedatives", "bipolar / mania history", "thyroid medication", "pregnancy / lactation"],
    bundleIds: ["mental-calm-30"], freshness: "review_required", lastReviewed: "2026-05-03", nextRefresh: "2026-05-10",
  },
  {
    id: "brain-focus", name: "Brain and Focus", shortName: "Brain", rank: 7, score: 40, risk: "moderate", accent: "sky",
    marketSignal: "Growing cognitive demand", marketSize: "$23.52B brain health",
    promise: "Support focus and cognitive energy with sleep, creatine, omega-3, bacopa-style botanicals and stimulant-light routines.",
    consumerLanguage: ["Brain fog", "Focus and mental energy", "Healthy brain aging"],
    mechanisms: ["Cellular energy (creatine)", "Omega-3 sufficiency", "Memory support botanicals"],
    latestFindings: ["Creatine reviewed for cognitive performance", "Bacopa for memory: slow onset, GI tolerance"],
    claims: [
      { id: "br-1", intervention: "Creatine monohydrate", claim: "Cellular energy and cognitive performance support.", grade: "B", confidence: 76, lastReviewed: "2026-05-02", sources: ["gvr-supplements"], safety: "Kidney disease: review.", allowedWording: "Promising human evidence for cognition." },
      { id: "br-2", intervention: "Bacopa monnieri", claim: "Memory support; slow onset, GI tolerance.", grade: "C", confidence: 70, lastReviewed: "2026-05-02", sources: ["ccras"], safety: "GI sensitivity.", allowedWording: "Some human data; slow onset." },
    ],
    protocol: [
      { name: "Cognitive Energy Base", mechanism: "Cellular energy + omega", rationale: "Energy substrate plus structural support.", ingredients: [
        { name: "Creatine monohydrate", role: "Cellular energy", dose: "3–5 g", timing: "Daily", grade: "B", cautions: ["Kidney disease"], qualityMarkers: ["Creapure-grade"] },
        { name: "Omega-3 (algae / fish)", role: "Structural", dose: "1–2 g EPA/DHA", timing: "With food", grade: "B", cautions: ["Blood thinners"], qualityMarkers: ["Oxidation-tested"] },
      ], lifestyle: ["Sleep first", "Caffeine timing discipline"] },
    ],
    diet: ["Omega-3-rich foods", "Stable glucose meals", "Hydration"],
    dailySchedule: ["AM: creatine + omega", "Work: focus blocks", "PM: sleep-protective routine"],
    expectedTimeline: [
      { week: "Week 1", title: "Energy baseline", description: "Set sleep + base stack.", metric: "Energy" },
      { week: "Week 4", title: "Botanical review", description: "Add botanical if tolerated.", metric: "Tolerance" },
      { week: "Week 8", title: "Work-output review", description: "Review focus output.", metric: "Output trend" },
      { week: "Day 75", title: "Refill decision", description: "Continue or adjust.", metric: "Decision" },
    ],
    safetyFlags: ["kidney disease", "blood thinners", "sedatives", "thyroid medication", "severe cognitive change"],
    bundleIds: ["brain-focus-60"], freshness: "current", lastReviewed: "2026-05-02", nextRefresh: "2026-06-02",
  },
  {
    id: "blood-sugar", name: "Blood Sugar Support", shortName: "Blood Sugar", rank: 8, score: 38, risk: "high", accent: "amber",
    marketSignal: "High value, guarded", marketSize: "$14.52B diabetes mgmt supplements",
    promise: "Support glucose steadiness with fiber, meal sequencing, walking, magnesium and guarded botanicals — behind a medication safety gate.",
    consumerLanguage: ["My sugar is high", "Prediabetes support", "Carb cravings"],
    mechanisms: ["Post-meal glucose response", "Insulin sensitivity habits", "Fiber + meal sequencing"],
    latestFindings: ["Soluble fiber before meals for post-meal glucose", "Berberine reviewed with material interaction risk"],
    claims: [
      { id: "bs-1", intervention: "Soluble fiber before meals", claim: "Supports post-meal glucose response and fullness.", grade: "B", confidence: 80, lastReviewed: "2026-05-03", sources: ["gvr-supplements"], safety: "Separate from medications; take with water.", allowedWording: "Promising human evidence for post-meal glucose." },
      { id: "bs-2", intervention: "Berberine", claim: "May support metabolic markers but material interaction risk.", grade: "B", confidence: 76, lastReviewed: "2026-05-03", sources: ["ccras"], safety: "Do NOT combine with glucose-lowering meds without professional review (hypoglycemia risk).", allowedWording: "Promising but requires professional medication review." },
    ],
    protocol: [
      { name: "Meal Response Layer", mechanism: "Glucose response", rationale: "Blunt post-meal spikes with food-first habits.", ingredients: [
        { name: "Soluble fiber", role: "Post-meal glucose", dose: "As directed", timing: "Before meals", grade: "B", cautions: ["Separate from meds"], qualityMarkers: ["Single-ingredient"] },
        { name: "Magnesium", role: "Insulin sensitivity", dose: "100–200 mg", timing: "Evening", grade: "B", cautions: ["Kidney disease"], qualityMarkers: ["Chelated"] },
      ], lifestyle: ["Meal sequencing (veg → protein → carb)", "Post-meal walking"] },
    ],
    diet: ["Meal sequencing", "Sprouted whole grains / millets", "Fiber before carbohydrates"],
    dailySchedule: ["Before meals: fiber", "After meals: 10-min walk", "Evening: magnesium", "Required: medication safety review"],
    expectedTimeline: [
      { week: "Week 1", title: "Safety baseline", description: "Medication + hypoglycemia screen.", metric: "Safety gate" },
      { week: "Week 2", title: "Meal response", description: "Apply meal sequencing.", metric: "Post-meal trend" },
      { week: "Week 4", title: "Expert review point", description: "Clinician/expert review.", metric: "Review done" },
      { week: "Day 60", title: "Maintenance decision", description: "Continue under review.", metric: "Decision" },
    ],
    safetyFlags: ["diabetes medication", "hypoglycemia", "pregnancy / lactation", "kidney disease", "liver disease"],
    bundleIds: ["glucose-steady-60"], freshness: "review_required", lastReviewed: "2026-05-03", nextRefresh: "2026-05-10",
  },
  {
    id: "joints-mobility", name: "Joints and Mobility", shortName: "Joints", rank: 9, score: 37, risk: "moderate", accent: "mint",
    marketSignal: "Aging-population demand", marketSize: "$32.3B bone & joint",
    promise: "Support mobility with collagen, curcumin-style botanicals, omega-3, strength habits and inflammation-aware routines.",
    consumerLanguage: ["Stiff joints", "Knee comfort", "Stay mobile"],
    mechanisms: ["Connective-tissue nutrition", "Inflammatory balance", "Strength + load habits"],
    latestFindings: ["Collagen peptides for joint comfort", "Curcumin phytosome for inflammatory balance"],
    claims: [
      { id: "jt-1", intervention: "Collagen peptides", claim: "Connective-tissue nutrition and joint comfort.", grade: "B", confidence: 74, lastReviewed: "2026-05-03", sources: ["gvr-supplements"], safety: "Generally well tolerated.", allowedWording: "Promising human evidence for joint comfort." },
      { id: "jt-2", intervention: "Curcumin phytosome", claim: "Inflammatory balance support.", grade: "B", confidence: 73, lastReviewed: "2026-05-03", sources: ["ema-hmpc"], safety: "Blood thinners, gallbladder, surgery, pregnancy.", allowedWording: "Promising human evidence; caution with blood thinners." },
    ],
    protocol: [
      { name: "Mobility Foundation", mechanism: "Tissue + inflammation", rationale: "Nourish tissue and support inflammatory balance alongside strength.", ingredients: [
        { name: "Collagen peptides", role: "Connective tissue", dose: "10–15 g", timing: "Daily", grade: "B", cautions: [], qualityMarkers: ["Hydrolyzed", "Tested"] },
        { name: "Curcumin phytosome", role: "Inflammatory balance", dose: "As directed", timing: "With food", grade: "B", cautions: ["Blood thinners", "Surgery"], qualityMarkers: ["Bioavailable phytosome"] },
      ], lifestyle: ["Progressive strength habit", "Inflammation-aware routine"] },
    ],
    diet: ["Protein sufficiency", "Omega-3-rich foods", "Anti-inflammatory plants"],
    dailySchedule: ["AM: collagen", "With food: curcumin", "Daily: strength habit"],
    expectedTimeline: [
      { week: "Week 1", title: "Load baseline", description: "Set strength baseline.", metric: "Baseline" },
      { week: "Week 4", title: "Strength habit", description: "Lock the habit.", metric: "Streak" },
      { week: "Week 8", title: "Comfort trend", description: "Review comfort.", metric: "Comfort" },
      { week: "Day 75", title: "Refill decision", description: "Continue or adjust.", metric: "Decision" },
    ],
    safetyFlags: ["joint swelling", "recent injury", "blood thinners", "autoimmune disease", "planned surgery"],
    bundleIds: ["mobility-core-90"], freshness: "fresh", lastReviewed: "2026-05-03", nextRefresh: "2026-06-03",
  },
  {
    id: "eye-screen", name: "Eye and Screen Health", shortName: "Eyes", rank: 10, score: 35, risk: "guarded", accent: "sky",
    marketSignal: "Screen-era demand", marketSize: "$4.23B eye health",
    promise: "Support screen-fatigue routines with lutein, zeaxanthin, omega-3, lighting hygiene and specialist red-flag routing.",
    consumerLanguage: ["Tired eyes from screens", "Dry eye comfort", "Long-term eye nutrition"],
    mechanisms: ["Macular pigment density", "Tear-film comfort", "Screen-habit hygiene"],
    latestFindings: ["Lutein + zeaxanthin for macular pigment and visual performance", "Omega-3 for tear-film comfort"],
    claims: [
      { id: "ey-1", intervention: "Lutein & zeaxanthin", claim: "Macular pigment and visual-performance markers.", grade: "B", confidence: 77, lastReviewed: "2026-05-02", sources: ["gvr-supplements"], safety: "No eyesight-reversal claims.", allowedWording: "Promising human evidence for macular markers." },
      { id: "ey-2", intervention: "Omega-3", claim: "Tear-film comfort in a dry-eye routine.", grade: "C", confidence: 68, lastReviewed: "2026-05-02", sources: ["nsf"], safety: "Blood thinners.", allowedWording: "Some human data for tear-film comfort." },
    ],
    protocol: [
      { name: "Screen Resilience Layer", mechanism: "Macular + tear-film", rationale: "Nutrient support paired with screen-habit hygiene.", ingredients: [
        { name: "Lutein + zeaxanthin", role: "Macular pigment", dose: "10 mg / 2 mg", timing: "With food", grade: "B", cautions: [], qualityMarkers: ["Standardized carotenoids"] },
        { name: "Omega-3", role: "Tear-film", dose: "1–2 g", timing: "With food", grade: "C", cautions: ["Blood thinners"], qualityMarkers: ["Oxidation-tested"] },
      ], lifestyle: ["20-20-20 breaks", "Lighting hygiene"] },
    ],
    diet: ["Carotenoid-rich greens", "Omega-3-rich foods", "Hydration"],
    dailySchedule: ["With food: carotenoids + omega", "Screen breaks: 20-20-20", "Evening: lighting hygiene"],
    expectedTimeline: [
      { week: "Day 1", title: "Red-flag screen", description: "Screen for urgent symptoms.", metric: "Safety cleared" },
      { week: "Week 2", title: "Screen habit traction", description: "Lock break habit.", metric: "Breaks/day" },
      { week: "Week 6", title: "Nutrition consistency", description: "Consistency review.", metric: "Adherence" },
      { week: "Day 60", title: "Refill or specialist", description: "Continue or refer.", metric: "Decision" },
    ],
    safetyFlags: ["sudden vision change", "eye pain", "one-sided symptoms", "diabetes diagnosis", "blood thinners"],
    bundleIds: ["screen-eye-60"], freshness: "current", lastReviewed: "2026-05-02", nextRefresh: "2026-06-02",
  },
  {
    id: "women-hormone", name: "Women's Hormone and Menopause", shortName: "Women's Hormones", rank: 11, score: 34, risk: "guarded", accent: "blush",
    marketSignal: "Underserved, high LTV", marketSize: "$8.58B US menopause",
    promise: "Support menopause-era sleep, heat, stress, digestion and strength with conservative botanicals and expert-chart options.",
    consumerLanguage: ["Menopause sleep and heat", "Mood and energy in midlife", "Strength and bone support"],
    mechanisms: ["Sleep / thermoregulation", "Stress + mood", "Muscle maintenance"],
    latestFindings: ["Sage layer: traditional / emerging menopause comfort", "Protein + creatine + strength for muscle maintenance"],
    claims: [
      { id: "wh-1", intervention: "Sage and sleep-support layer", claim: "Traditional / emerging menopause comfort.", grade: "T", confidence: 61, lastReviewed: "2026-05-03", sources: ["ema-hmpc"], safety: "Hormone-sensitive conditions: review.", allowedWording: "Traditionally used; not clinical proof." },
      { id: "wh-2", intervention: "Protein, creatine, strength routine", claim: "Muscle maintenance and energy.", grade: "B", confidence: 76, lastReviewed: "2026-05-03", sources: ["gvr-supplements"], safety: "Kidney disease.", allowedWording: "Promising human evidence for muscle maintenance." },
    ],
    protocol: [
      { name: "Midlife Stability Layer", mechanism: "Sleep + strength", rationale: "Stabilise sleep and protect muscle with conservative botanicals.", ingredients: [
        { name: "Magnesium glycinate", role: "Sleep / heat", dose: "100–200 mg", timing: "Evening", grade: "B", cautions: ["Kidney disease"], qualityMarkers: ["Chelated"] },
        { name: "Sage extract", role: "Menopause comfort", dose: "Standardized", timing: "Daily", grade: "T", cautions: ["Hormone-sensitive"], qualityMarkers: ["Standardized"] },
      ], lifestyle: ["Strength routine", "Sleep / heat tracking"] },
    ],
    diet: ["Protein sufficiency", "Calcium / vitamin D foods", "Phytoestrogen-aware choices"],
    dailySchedule: ["AM: protein", "Evening: magnesium + sage", "Weekly: strength"],
    expectedTimeline: [
      { week: "Week 1", title: "Safety intake", description: "Run hormone safety screen.", metric: "Safety cleared" },
      { week: "Week 3", title: "Sleep / heat review", description: "Review symptoms.", metric: "Symptom trend" },
      { week: "Week 6", title: "Strength routine", description: "Lock strength habit.", metric: "Streak" },
      { week: "Day 75", title: "Expert chart point", description: "Optional expert chart.", metric: "Decision" },
    ],
    safetyFlags: ["pregnancy / lactation", "bleeding changes", "hormone therapy", "hormone-sensitive cancer history", "seizure history"],
    bundleIds: ["midlife-balance-60"], freshness: "review_required", lastReviewed: "2026-05-03", nextRefresh: "2026-05-10",
  },
  {
    id: "mens-vitality", name: "Men's Vitality and Sexual Wellness", shortName: "Men's Vitality", rank: 12, score: 33, risk: "guarded", accent: "forest",
    marketSignal: "Large, high intent", marketSize: "$132.13B men's health",
    promise: "Support energy, strength, stress, sleep and intimate wellness with quality-screened nutrients and firm red-flag routing.",
    consumerLanguage: ["Low energy and drive", "Strength and stamina", "Intimate wellness support"],
    mechanisms: ["Mineral sufficiency (zinc / magnesium)", "Sleep + stress", "Strength habits"],
    latestFindings: ["Zinc / magnesium sufficiency supports normal function when intake is low", "Ashwagandha / shilajit layer: vitality support, heavy-metal tested only"],
    claims: [
      { id: "mv-1", intervention: "Zinc and magnesium sufficiency", claim: "Supports normal function when intake is low.", grade: "B", confidence: 74, lastReviewed: "2026-05-03", sources: ["nsf"], safety: "Balance zinc with copper.", allowedWording: "Promising human evidence when intake is low." },
      { id: "mv-2", intervention: "Ashwagandha / shilajit-style layer", claim: "Vitality support; heavy-metal tested only.", grade: "T", confidence: 60, lastReviewed: "2026-05-03", sources: ["ccras"], safety: "Liver disease; heavy-metal contamination risk if untested.", allowedWording: "Traditionally used; use only heavy-metal-tested products." },
    ],
    protocol: [
      { name: "Vitality Foundation", mechanism: "Minerals + sleep", rationale: "Cover mineral sufficiency and sleep before any botanical.", ingredients: [
        { name: "Zinc balance complex", role: "Mineral sufficiency", dose: "As directed", timing: "With food", grade: "B", cautions: ["Copper balance"], qualityMarkers: ["Chelated", "Copper-balanced"] },
        { name: "Magnesium glycinate", role: "Sleep / stress", dose: "100–200 mg", timing: "Evening", grade: "B", cautions: ["Kidney disease"], qualityMarkers: ["Chelated"] },
      ], lifestyle: ["Red-flag screen first", "Strength routine"] },
    ],
    diet: ["Protein sufficiency", "Zinc-rich foods", "Whole-food minerals"],
    dailySchedule: ["With food: zinc", "Evening: magnesium", "Weekly: strength"],
    expectedTimeline: [
      { week: "Week 1", title: "Red-flag screen", description: "Screen for ED / cardiac red flags.", metric: "Safety cleared" },
      { week: "Week 3", title: "Sleep / strength", description: "Lock sleep + strength.", metric: "Streak" },
      { week: "Week 6", title: "Botanical decision", description: "Decide botanical layer.", metric: "Tolerance" },
      { week: "Day 75", title: "Refill or expert", description: "Continue or escalate.", metric: "Decision" },
    ],
    safetyFlags: ["erectile dysfunction (cardiac red flag)", "chest pain", "hormone therapy", "thyroid medication", "liver disease"],
    bundleIds: ["vitality-core-60"], freshness: "review_required", lastReviewed: "2026-05-03", nextRefresh: "2026-05-10",
  },
  {
    id: "energy-recovery", name: "Energy and Recovery", shortName: "Energy", rank: 13, score: 32, risk: "low", accent: "mint",
    marketSignal: "Broad, low-risk", marketSize: "$138.48B sports nutrition",
    promise: "Turn fatigue, training recovery and daily energy into protein, creatine, electrolytes, sleep and refillable routines.",
    consumerLanguage: ["Daily energy", "Training recovery", "Beat afternoon fatigue"],
    mechanisms: ["Muscle maintenance + recovery", "Hydration / electrolytes", "Sleep-led energy"],
    latestFindings: ["Protein + creatine for muscle maintenance and training output", "Electrolytes for hydration routines"],
    claims: [
      { id: "en-1", intervention: "Protein and creatine stack", claim: "Muscle maintenance, training output and recovery.", grade: "A", confidence: 86, lastReviewed: "2026-05-03", sources: ["gvr-supplements"], safety: "Kidney disease: review.", allowedWording: "Supported by multiple human studies." },
      { id: "en-2", intervention: "Electrolytes", claim: "Hydration routines (sweat / travel / low-carb).", grade: "B", confidence: 78, lastReviewed: "2026-05-03", sources: ["nsf"], safety: "Sodium restriction / BP medication.", allowedWording: "Promising human evidence for hydration." },
    ],
    protocol: [
      { name: "Recovery Engine", mechanism: "Muscle + hydration", rationale: "Cover protein, creatine and hydration with sleep first.", ingredients: [
        { name: "Protein powder", role: "Recovery", dose: "20–35 g", timing: "Post-training", grade: "A", cautions: ["Kidney disease"], qualityMarkers: ["No proprietary blend"] },
        { name: "Creatine monohydrate", role: "Training output", dose: "3–5 g", timing: "Daily", grade: "B", cautions: [], qualityMarkers: ["Creapure-grade"] },
      ], lifestyle: ["Sleep first", "Hydration routine"] },
    ],
    diet: ["Protein sufficiency", "Carbohydrate timing around training", "Hydration"],
    dailySchedule: ["AM: protein + creatine", "Training: electrolytes", "PM: sleep-protective routine"],
    expectedTimeline: [
      { week: "Week 1", title: "Energy baseline", description: "Set sleep + base stack.", metric: "Energy" },
      { week: "Week 3", title: "Recovery rhythm", description: "Lock recovery routine.", metric: "Recovery" },
      { week: "Week 6", title: "Routine upgrade", description: "Upgrade as tolerated.", metric: "Output" },
      { week: "Day 60", title: "Refill decision", description: "Continue or adjust.", metric: "Decision" },
    ],
    safetyFlags: ["kidney disease", "blood pressure medication", "sodium restriction", "eating-disorder history", "unexplained fatigue"],
    bundleIds: ["recovery-engine-60"], freshness: "fresh", lastReviewed: "2026-05-03", nextRefresh: "2026-06-03",
  },
];

export const getCategory = (id: string) => categories.find((c) => c.id === id);
export const categoriesByRank = [...categories].sort((a, b) => a.rank - b.rank);
