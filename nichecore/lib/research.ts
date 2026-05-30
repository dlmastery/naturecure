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

/**
 * Split a dossier body into anchored chunks by H2 (`## ...`) heading.
 * Returns an array of `{ id, title, body }` where `id` is a slugified heading.
 *
 * Any prose preceding the first H2 is folded into a synthetic `preface` chunk.
 */
export interface DossierChunk {
  id: string;
  title: string;
  body: string;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

export function splitDossierByH2(body: string): DossierChunk[] {
  const lines = body.split(/\r?\n/);
  const chunks: DossierChunk[] = [];
  let current: DossierChunk | null = null;
  let preface: string[] = [];
  for (const ln of lines) {
    const m = ln.match(/^##\s+(.+?)\s*$/);
    if (m) {
      if (current) chunks.push(current);
      // Strip leading numbering "1. ", "2. " etc. for cleaner ids
      const titleRaw = m[1].trim();
      const titleClean = titleRaw.replace(/^\d+(?:\.\d+)*\.?\s+/, "");
      current = { id: slugify(titleClean) || `section-${chunks.length + 1}`, title: titleRaw, body: "" };
    } else if (current) {
      current.body += (current.body ? "\n" : "") + ln;
    } else {
      preface.push(ln);
    }
  }
  if (current) chunks.push(current);
  const prefaceBody = preface.join("\n").trim();
  if (prefaceBody) {
    chunks.unshift({ id: "preface", title: "Preface", body: prefaceBody });
  }
  return chunks;
}
