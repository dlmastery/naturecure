// ── Core domain model (carried forward from the snapshot, streamlined) ──

export type EvidenceGrade = "A" | "B" | "C" | "D" | "T" | "H" | "X";
export type RiskLevel = "low" | "moderate" | "guarded" | "high";
export type Freshness = "fresh" | "current" | "aging" | "stale" | "review_required";

export interface SourceRef {
  id: string;
  title: string;
  publisher: string;
  year: string;
  url: string;
  sourceType: "market" | "research" | "traditional" | "quality" | "demand";
}

export interface EvidenceClaim {
  id: string;
  intervention: string;
  claim: string;
  grade: EvidenceGrade;
  confidence: number; // 0-100
  lastReviewed: string;
  sources: string[]; // SourceRef ids
  safety: string;
  allowedWording: string;
}

export interface Ingredient {
  name: string;
  role: string;
  dose: string;
  timing: string;
  grade: EvidenceGrade;
  cautions: string[];
  qualityMarkers: string[];
}

export interface ProtocolLayer {
  name: string;
  mechanism: string;
  rationale: string;
  ingredients: Ingredient[];
  lifestyle: string[];
}

export interface Product {
  name: string;
  supplier: string;
  role: string;
  format: string;
  price: number;
  qualityScore: number; // 0-100, SEPARATE from efficacy grade
  qualitySignals: string[];
  evidenceGrade: EvidenceGrade;
}

export interface Bundle {
  id: string;
  name: string;
  duration: string;
  categoryId: string;
  price: number;
  subscriptionPrice: number;
  marginModel: string;
  summary: string;
  products: Product[];
  includes: string[];
}

export interface Expert {
  id: string;
  name: string;
  role: string;
  location: string;
  credentials: string[];
  specialties: string[];
  price: number;
  turnaround: string;
}

export interface TimelineStep {
  week: string;
  title: string;
  description: string;
  metric: string;
}

export interface Category {
  id: string;
  name: string;
  shortName: string;
  marketSignal: string;
  marketSize: string;
  rank: number;
  score: number;
  risk: RiskLevel;
  accent: keyof typeof import("./evidence").ACCENTS;
  promise: string;
  consumerLanguage: string[];
  mechanisms: string[];
  latestFindings: string[];
  claims: EvidenceClaim[];
  protocol: ProtocolLayer[];
  diet: string[];
  dailySchedule: string[];
  expectedTimeline: TimelineStep[];
  safetyFlags: string[];
  bundleIds: string[];
  freshness: Freshness;
  lastReviewed: string;
  nextRefresh: string;
}

export type JourneyDomain =
  | "Skin" | "Hair" | "Metabolic" | "Gut" | "StressSleep"
  | "BrainEye" | "MobilityEnergy" | "HormoneVitality" | "ImmuneOral" | "CardioLiverLongevity";

export interface Journey {
  id: string;
  name: string;
  domain: JourneyDomain;
  route: string;
  consumerHook: string;
  packageConcept: string;
  gradeMix: EvidenceGrade[];
  freshness: Freshness;
  risk: "low" | "moderate" | "guarded" | "specialist";
}

export interface FactoryJob {
  id: string;
  categoryId: string;
  status: Freshness;
  cadence: string;
  lastRun: string;
  nextRun: string;
  sourcesScanned: number;
  claimsExtracted: number;
  safetyFlags: number;
  reviewer: string;
}

export interface CompanionEvent {
  time: string;
  title: string;
  detail: string;
  type: "supplement" | "diet" | "routine" | "checkin" | "refill" | "research";
}
