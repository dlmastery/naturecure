import type { EvidenceGrade, Freshness } from "./types";

// Meaning-encoded accent palette. Each maps a card fill + readable ink.
export const ACCENTS = {
  mint: { fill: "var(--color-mint)", ink: "var(--color-mint-ink)" },
  sky: { fill: "var(--color-sky)", ink: "var(--color-sky-ink)" },
  amber: { fill: "var(--color-amber)", ink: "var(--color-amber-ink)" },
  lavender: { fill: "var(--color-lavender)", ink: "var(--color-lavender-ink)" },
  blush: { fill: "var(--color-blush)", ink: "var(--color-blush-ink)" },
  forest: { fill: "var(--color-mint)", ink: "var(--color-forest)" },
} as const;

// Evidence grade legend — verbatim consumer language from the doctrine.
export const EVIDENCE_GRADES: Record<
  EvidenceGrade,
  { label: string; consumer: string; accent: keyof typeof ACCENTS }
> = {
  A: { label: "Strong human evidence", consumer: "Supported by multiple human studies or high-quality reviews.", accent: "forest" },
  B: { label: "Moderate human evidence", consumer: "Promising human evidence, but not settled.", accent: "mint" },
  C: { label: "Early or mixed human evidence", consumer: "Some human data; results are early or mixed.", accent: "sky" },
  D: { label: "Mechanistic / animal / in-vitro", consumer: "Biologically plausible but not proven in humans.", accent: "lavender" },
  T: { label: "Traditional-use evidence", consumer: "Longstanding traditional use; not the same as clinical proof.", accent: "amber" },
  H: { label: "Hypothesis / emerging signal", consumer: "Interesting early signal; not ready for strong claims.", accent: "blush" },
  X: { label: "Rejected / insufficient", consumer: "Not enough evidence or not suitable for recommendation.", accent: "blush" },
};

export const GRADE_ORDER: EvidenceGrade[] = ["A", "B", "C", "D", "T", "H", "X"];

export const FRESHNESS_LABEL: Record<Freshness, string> = {
  fresh: "fresh · reviewed ≤30 days",
  current: "current · reviewed ≤90 days",
  aging: "aging · review due",
  stale: "stale · refresh required",
  review_required: "expert review required",
};

// Allowed vs forbidden wording — enforced across content & the Guru.
export const ALLOWED_WORDING = [
  "may support", "has evidence for", "traditionally used for",
  "mechanistically plausible", "early research suggests",
  "human evidence is mixed", "requires safety screening", "not suitable for everyone",
];

export const FORBIDDEN_WORDING = [
  "cure", "guaranteed reversal", "no side effects", "clinically proven (when only mechanistic)",
  "doctor-approved (unless reviewed)", "ancient secret", "permanent fix", "AI found the cure",
];

// Hard blacklist — never used as a trust anchor.
export const FORBIDDEN_SOURCES = [
  "FDA", "FTC", "US disease associations", "US hospital systems",
  "US insurance-aligned medical bodies", "US pharma-funded advocacy groups",
];
