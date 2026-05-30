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

// ─────────────── Sub-section + deep-dive splitting ───────────────
//
// Skill v6.2 introduces two markdown conventions that the website
// renders specially:
//   1. H3 (`### …`) inside a section body becomes a tree-expandable
//      sub-section in the left-rail and gets its own scroll-spy id.
//   2. H4 with the exact label `Open the science` (case-insensitive)
//      starts a deep-dive block — everything until the next H2/H3
//      collapses behind a "Open the science" toggle so the
//      non-technical opener stays the first thing readers see.

export interface DossierSubChunk {
  /** Stable id derived from the H3 title, prefixed with parent id. */
  id: string;
  /** Raw H3 title text. */
  title: string;
  /** Body BEFORE any `#### Open the science` H4 (always visible). */
  visibleBody: string;
  /** Body AFTER the deep-dive H4 (collapsed in UI), or empty. */
  deepDiveBody: string;
}

const DEEP_DIVE_H4_RE = /^####\s+open\s+the\s+science\b/i;

/**
 * Split a single H2 chunk body into H3 sub-chunks. Each sub-chunk is
 * further split at the deep-dive H4 marker.
 *
 * Returns an EMPTY array if the H2 body has no H3 headers at all —
 * the renderer falls back to inline rendering and the left-rail tree
 * shows no children for that section. We never invent a synthetic
 * "Overview" sub-section, because that would produce multiple
 * misleadingly-named tree rows when several chunks roll up into the
 * same tab. The H2 itself remains the navigable anchor.
 */
export function splitChunkByH3(parent: DossierChunk): DossierSubChunk[] {
  const lines = parent.body.split(/\r?\n/);

  // First pass: any H3 in this body at all?
  const hasAnyH3 = lines.some((ln) => /^###\s+\S/.test(ln));
  if (!hasAnyH3) return [];

  const subs: DossierSubChunk[] = [];

  // Buffer everything before the first H3 as a synthetic preamble
  // attached to the FIRST real sub-chunk (so leading prose under
  // the H2 isn't lost). We never expose this preamble as its own
  // tree row.
  let preambleBuf: string[] = [];
  let currentTitle: string | null = null;
  let currentBuf: string[] = [];

  const flush = () => {
    if (currentTitle === null) return;
    const title = currentTitle;
    const cleanedTitle = title.replace(/^\d+(?:\.\d+)*\.?\s+/, "").trim();
    const id = parent.id + "--" + (slugify(cleanedTitle) || `sub-${subs.length + 1}`);
    let buf = currentBuf;
    if (subs.length === 0 && preambleBuf.length > 0) {
      buf = [...preambleBuf, ...currentBuf];
      preambleBuf = [];
    }
    const { visible, deepDive } = splitDeepDive(buf);
    subs.push({ id, title, visibleBody: visible, deepDiveBody: deepDive });
    currentTitle = null;
    currentBuf = [];
  };

  for (const ln of lines) {
    const m = ln.match(/^###\s+(.+?)\s*$/);
    if (m) {
      flush();
      currentTitle = m[1].trim();
    } else if (currentTitle === null) {
      preambleBuf.push(ln);
    } else {
      currentBuf.push(ln);
    }
  }
  flush();
  return subs;
}

function splitDeepDive(bufLines: string[]): { visible: string; deepDive: string } {
  const idx = bufLines.findIndex((ln) => DEEP_DIVE_H4_RE.test(ln));
  if (idx === -1) return { visible: bufLines.join("\n").trim(), deepDive: "" };
  const visible = bufLines.slice(0, idx).join("\n").trim();
  // Drop the marker line itself; the UI provides the "Open the science" affordance.
  const deepDive = bufLines.slice(idx + 1).join("\n").trim();
  return { visible, deepDive };
}
