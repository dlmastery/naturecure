import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const RESEARCH_DIR = path.join(process.cwd(), "research");

export interface DossierMeta {
  ailmentId: string;
  ailmentName: string;
  domain: string;
  lastUpdated?: string;
  gradeMix?: string[];
  clinicalScoringInstrument?: string;
  subTypes?: string[];
  comorbidityScreen?: string[];
  authorAgent?: string;
  internalRalph?: { pass1Complete?: boolean; pass2Complete?: boolean; pass3Complete?: boolean };
}

export interface Dossier {
  meta: DossierMeta;
  body: string;
  wordCount: number;
}

export function dossierExists(ailmentId: string): boolean {
  return fs.existsSync(path.join(RESEARCH_DIR, `${ailmentId}.md`));
}

export function readDossier(ailmentId: string): Dossier | null {
  const file = path.join(RESEARCH_DIR, `${ailmentId}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const parsed = matter(raw);
  return {
    meta: parsed.data as DossierMeta,
    body: parsed.content,
    wordCount: parsed.content.split(/\s+/).filter(Boolean).length,
  };
}

export function listDossierIds(): string[] {
  if (!fs.existsSync(RESEARCH_DIR)) return [];
  return fs.readdirSync(RESEARCH_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
