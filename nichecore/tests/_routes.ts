/** Routes manifest used by the audit suite. Mirrors lib/data.ts + lib/categories.ts. */

export const CATEGORY_IDS = [
  "skin-pigmentation", "weight-metabolism", "hair-scalp", "gut-bloating",
  "sleep-stress", "mental-wellbeing", "brain-focus", "blood-sugar",
  "joints-mobility", "eye-screen", "women-hormone", "mens-vitality", "energy-recovery",
] as const;

export const JOURNEY_ROUTES = [
  // Skin (6)
  "/skin/vitiligo", "/skin/acne-prone", "/skin/eczema-prone", "/skin/psoriasis-prone",
  "/skin/hyperpigmentation", "/skin/collagen-aging",
  // Hair (4)
  "/hair/thinning", "/hair/stress-shedding", "/hair/scalp-comfort", "/hair/premature-greying",
  // Metabolic (5)
  "/weight/belly-fat", "/weight/glp1-maintenance", "/weight/cravings",
  "/metabolic/blood-sugar", "/metabolic/insulin-resistance",
  // Gut (5)
  "/gut/bloating", "/gut/regularity", "/gut/reflux", "/gut/ibs-like", "/gut/microbiome-reset",
  // StressSleep (7)
  "/sleep/onset", "/sleep/night-waking", "/stress/cortisol", "/stress/burnout",
  "/stress/calm", "/mood/low-mood", "/mood/emotional-eating",
  // BrainEye (5)
  "/brain/focus", "/brain/memory-aging", "/eyes/screen-strain", "/eyes/dry-eye", "/eyes/macular-support",
  // MobilityEnergy (5)
  "/joints/stiffness", "/joints/knee-mobility", "/recovery/tendon", "/recovery/sports", "/energy/fatigue",
  // HormoneVitality (7)
  "/women/pms", "/women/pcos", "/women/menopause", "/fertility/readiness",
  "/men/testosterone-vitality", "/men/libido-stamina", "/men/prostate-wellness",
  // ImmuneOral (3)
  "/immune/allergy-comfort", "/respiratory/seasonal", "/oral/gum-breath",
  // CardioLiverLongevity (3)
  "/heart/cholesterol-bp", "/liver/alcohol-recovery", "/longevity/healthy-aging",
] as const;

export const CONSUMER_TOP_ROUTES = [
  "/", "/atlas", "/guru", "/companion", "/expert", "/progress",
] as const;

export const OPERATOR_ROUTES = [
  "/admin/research-factory",
] as const;

export const CATEGORY_HUB_ROUTES = CATEGORY_IDS.map((id) => `/c/${id}`);
export const PACKAGE_ROUTES = CATEGORY_IDS.map((id) => `/c/${id}/package`);

export const ALL_ROUTES = [
  ...CONSUMER_TOP_ROUTES,
  ...CATEGORY_HUB_ROUTES,
  ...PACKAGE_ROUTES,
  ...JOURNEY_ROUTES,
  ...OPERATOR_ROUTES,
];
