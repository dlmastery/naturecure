import type { EvidenceGrade } from "./types";

// The flagship depth journey. Real protocol substance from the research,
// framed strictly as hypothetical adjunctive support — never a cure.

export const vitiligo = {
  id: "vitiligo-support",
  name: "Vitiligo Support",
  hero: "The vitiligo journey, without the snake oil.",
  promise:
    "An honest, evidence-graded natural support protocol for vitiligo — antioxidant, gut-skin and stress layers, quality-screened products, and a daily companion. Adjunctive only. Never a replacement for your dermatologist.",
  lastReviewed: "2026-05-03",
  nextRefresh: "2026-06-03",

  evidenceFeed: [
    { date: "2026-05", grade: "B" as EvidenceGrade, finding: "Topical Nigella sativa RCT — VASI improved 4.98 → 3.75 over 6 months (double-blind).", source: "vasi-nigella-rct" },
    { date: "2025", grade: "D" as EvidenceGrade, finding: "Nrf2 / GPX4 pathway review: ferroptosis as a shared melanocyte + β-cell stressor.", source: "nutrients-ferroptosis-2025" },
    { date: "2025", grade: "B" as EvidenceGrade, finding: "Gut-skin axis review: dysbiosis implicated; probiotics + diet may support tolerance.", source: "nutrients-ferroptosis-2025" },
    { date: "2026", grade: "T" as EvidenceGrade, finding: "AYUSH rasayana + pranayama protocols documented for stress-trigger reduction.", source: "ccras" },
  ],

  mechanisms: [
    { loop: "Oxidative / melanocyte stress", target: "Nrf2 / antioxidant support", action: "Antioxidant layer after meals" },
    { loop: "Gut-skin axis inflammation", target: "Probiotic + diet reset", action: "Probiotic + fermented foods" },
    { loop: "HPA / stress triggers", target: "Nervous-system routine", action: "Pranayama + magnesium PM" },
    { loop: "Pigment-support nutrition", target: "Polyphenol / nutrient layer", action: "Amla, polyphenols, diet" },
  ],

  // 3 unified daily combos — all post-meal.
  combos: [
    {
      name: "Nrf2-Ferroptosis & Melanocyte Shield",
      timing: "Morning · after breakfast",
      grade: "C" as EvidenceGrade,
      rationale: "Support the redox shield (Nrf2 / GPX4) where pigment cells face oxidative stress.",
      items: [
        { name: "Polydatin", dose: "200–400 mg", grade: "D" as EvidenceGrade, note: "Nrf2 / GPX4 support (mechanistic)" },
        { name: "Quercetin", dose: "500 mg", grade: "C" as EvidenceGrade, note: "Antioxidant; restores glutathione" },
        { name: "Amla (Phyllanthus emblica)", dose: "500 mg", grade: "T" as EvidenceGrade, note: "Polyphenol antioxidant (traditional)" },
        { name: "N-acetyl cysteine (NAC)", dose: "600 mg", grade: "C" as EvidenceGrade, note: "Glutathione precursor" },
      ],
    },
    {
      name: "Gut-Skin-Metabolic Axis Reset",
      timing: "Lunch · with food",
      grade: "B" as EvidenceGrade,
      rationale: "Rebuild microbiome tolerance and address the gut-skin axis.",
      items: [
        { name: "Nigella sativa (thymoquinone)", dose: "500 mg", grade: "B" as EvidenceGrade, note: "RCT VASI improvement (topical); oral adjunct" },
        { name: "Momordica charantia", dose: "500 mg", grade: "C" as EvidenceGrade, note: "Polysaccharide prebiotic" },
        { name: "Multi-strain probiotic", dose: "10–20B CFU", grade: "B" as EvidenceGrade, note: "L. rhamnosus GG, L. plantarum, B. bifidum" },
        { name: "Luteolin + EGCG", dose: "200 mg / 200–400 mg", grade: "D" as EvidenceGrade, note: "Polyphenol layer (mechanistic)" },
      ],
    },
    {
      name: "Rasayana Stress & Rejuvenation",
      timing: "Evening · after dinner",
      grade: "T" as EvidenceGrade,
      rationale: "Lower the HPA / stress trigger many protocols overlook.",
      items: [
        { name: "Triphala", dose: "500–1000 mg", grade: "T" as EvidenceGrade, note: "Ayurvedic rejuvenative" },
        { name: "Sugar-free Chyawanprash", dose: "5–10 g", grade: "T" as EvidenceGrade, note: "Polyphenol rasayana (sugar-free only)" },
        { name: "Ashwagandha (KSM-66)", dose: "300–600 mg", grade: "C" as EvidenceGrade, note: "Cortisol / perceived stress" },
        { name: "Magnesium glycinate", dose: "200–400 mg", grade: "B" as EvidenceGrade, note: "Relaxation / sleep" },
      ],
    },
  ],

  diet: {
    name: "Khadir diet — sprouted Siri Dhanyalu",
    nonNegotiable: [
      "60–80 g sprouted small millets daily (foxtail, barnyard, kodo, little, browntop)",
      "150–200 g bitter greens / methi daily",
      "100–150 g fermented foods daily",
      "5–10 g fenugreek seeds / tea daily",
    ],
    avoid: [
      "Gluten (8–12 week elimination trial)",
      "High-phenol trigger foods during trials",
      "Ultra-processed / high omega-6 foods",
      "Alcohol (depletes zinc, B12, folate)",
    ],
  },

  anchors: [
    { name: "Pranayama", detail: "Anulom Vilom 10 min + Bhramari 5 min, morning. HPA-axis cortisol reduction." },
    { name: "Red-light PBM (670 nm)", detail: "10–20 min, evening. Mitochondrial support. Avoid with photosensitising meds." },
  ],

  timeline: [
    { week: "Weeks 1–4", title: "Adaptation", description: "GI and energy stabilisation; set the daily rhythm.", metric: "Adherence + tolerance" },
    { week: "Weeks 5–8", title: "Noticeable", description: "Early stability; possible perifollicular freckling at margins.", metric: "Lesion-margin photos" },
    { week: "Weeks 9–12", title: "Meaningful shift", description: "VASI / HbA1c reviewed with a clinician.", metric: "VASI + labs" },
    { week: "Months 4–12", title: "Consolidation", description: "Sustained stability; slow repigmentation possible.", metric: "Long-cycle outcome" },
  ],

  interactions: [
    { combo: "Momordica / Nigella + metformin or insulin", risk: "Hypoglycemia", action: "Physician-supervised dose taper; daily glucose tracking." },
    { combo: "High-dose quercetin / polydatin + JAK inhibitors", risk: "CYP3A4 interaction", action: "Pharmacist review before combining." },
    { combo: "670 nm PBM + photosensitising meds", risk: "Phototoxicity", action: "Physician clearance (isotretinoin, tetracyclines)." },
  ],

  avoidList: ["Panax ginseng", "High-dose licorice", "St. John's Wort", "High-dose echinacea", "Ma Huang", "Senna"],
} as const;
