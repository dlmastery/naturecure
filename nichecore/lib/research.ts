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

// ─────────────── TopShelf (above-the-fold 5-card row) ───────────────
//
// Walks the dossier chunks already bucketed by canonical tab id and
// extracts a 3-bullet decision-quality preview for each of the five
// founder-promoted sections: 12-month timeline, daily combos,
// strictly-avoid, diet & meal plan, supplier ecosystem.
//
// The parser is intentionally lenient — dossiers are markdown-prose
// authored by hand with varying conventions across v6.x revisions. If
// a section's chunk is missing or the heuristics find nothing usable
// we mark the card `available: false` and the renderer shows a
// graceful placeholder rather than crashing the page.

export interface TopShelfCard {
  /** 3 short bullets (≤~80 chars each), plain-text, no markdown markers. */
  bullets: string[];
  /** Anchor id to scroll to (canonical tab id), e.g. "timeline" / "combos". */
  anchor: string;
  /** False when the source chunk is missing in this dossier. */
  available: boolean;
}

export interface TopShelfPreview {
  timeline: TopShelfCard;
  combos: TopShelfCard;
  strictlyAvoid: TopShelfCard;
  diet: TopShelfCard;
  suppliers: TopShelfCard;
}

const MAX_BULLET_LEN = 80;

/** Strip markdown emphasis, links, code-spans, italics-citations. */
function plainText(s: string): string {
  return s
    // bold + italic (greedy-safe)
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    // any leftover stray `**` or `*` markers (unbalanced from regex captures)
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    // links → label
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    // inline code
    .replace(/`([^`]+)`/g, "$1")
    // collapse whitespace
    .replace(/\s+/g, " ")
    .trim();
}

/** Truncate to MAX_BULLET_LEN at a word boundary, append ellipsis. */
function clampBullet(s: string): string {
  const t = stripTldr(plainText(s));
  if (t.length <= MAX_BULLET_LEN) return t;
  const cut = t.slice(0, MAX_BULLET_LEN);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).replace(/[,;:.\s]+$/, "") + "…";
}

/** Pull bullet-like lines from a markdown body. Returns the raw line text minus the bullet marker. */
function extractBulletLines(body: string): string[] {
  const out: string[] = [];
  for (const rawLn of body.split(/\r?\n/)) {
    const ln = rawLn.trim();
    // - foo / * foo / + foo / 1. foo
    const m = ln.match(/^(?:[-*+]|\d+\.)\s+(.+)$/);
    if (m) out.push(m[1]);
  }
  return out;
}

/** Strip the "TL;DR (label)." or "TL;DR." lead from a bullet body.
 *  Runs on plain-text *or* on bullets that still carry markdown emphasis
 *  (so we strip `**` first, then the prefix). */
function stripTldr(s: string): string {
  return s
    .replace(/^\*\*\s*/, "")
    .replace(/^TL;DR(?:\s*\([^)]+\))?\.?\s*\*?\*?\s*/i, "");
}

/** Strip leading "*(For you, in plain words.)*" callout language if present. */
function stripCalloutLead(s: string): string {
  return s.replace(/^For you,\s+in plain words\.?\s*/i, "");
}

function nonEmpty(arr: string[]): string[] {
  return arr.map((s) => s.trim()).filter(Boolean);
}

// ── Per-card parsers ──────────────────────────────────────────────

function parseTimeline(chunk: DossierChunk | undefined): TopShelfCard {
  if (!chunk) {
    return { bullets: ["Section not available in this dossier yet."], anchor: "timeline", available: false };
  }
  const bullets = extractBulletLines(chunk.body);
  const monthMarker = /(\*\*)?(?:Months?\s+\d|Month\s+\d|Weeks?\s+\d|Week\s+\d|Phase\s+\d|Year\s+\d)/i;
  const withMarker = bullets.filter((b) => monthMarker.test(b));
  const picked = (withMarker.length >= 3 ? withMarker : bullets).slice(0, 3);
  const out = nonEmpty(picked.map((b) => clampBullet(stripTldr(b))));
  return {
    bullets: out.length > 0 ? out : ["12-month protocol — see full timeline."],
    anchor: "timeline",
    available: out.length > 0,
  };
}

function parseCombos(chunk: DossierChunk | undefined): TopShelfCard {
  if (!chunk) {
    return { bullets: ["Section not available in this dossier yet."], anchor: "combos", available: false };
  }
  // Strategy A: H3 sub-sections — pick titles that look like "Combo N — …"
  const subs = splitChunkByH3(chunk);
  const comboSubs = subs.filter((s) => /combo\s*\d/i.test(s.title));
  if (comboSubs.length >= 3) {
    const out = nonEmpty(
      comboSubs.slice(0, 3).map((s) => {
        // Use the H3 title itself, e.g. "8.2 Combo 1 — Hair-cell + circulation (08:00)"
        const title = s.title.replace(/^\d+(?:\.\d+)*\.?\s+/, "").trim();
        // Optionally pull first bullet for richer text
        const firstBullet = extractBulletLines(s.visibleBody)[0];
        const teaser = firstBullet ? plainText(stripTldr(firstBullet)) : "";
        const combined = teaser ? `${title} — ${teaser}` : title;
        return clampBullet(combined);
      })
    );
    if (out.length > 0) return { bullets: out, anchor: "combos", available: true };
  }
  // Strategy B: bullet-prefixed combos in the body
  const bullets = extractBulletLines(chunk.body);
  const comboBullets = bullets.filter((b) => /combo\s*\d/i.test(b));
  const picked = (comboBullets.length >= 3 ? comboBullets : bullets).slice(0, 3);
  const out = nonEmpty(picked.map((b) => clampBullet(stripTldr(b))));
  return {
    bullets: out.length > 0 ? out : ["Three timed daily combos — see full regimen."],
    anchor: "combos",
    available: out.length > 0,
  };
}

function parseStrictlyAvoid(chunk: DossierChunk | undefined): TopShelfCard {
  if (!chunk) {
    return { bullets: ["Section not available in this dossier yet."], anchor: "interactions", available: false };
  }
  // Strategy A: find H3 sub-chunk whose title matches strict-avoid intent
  const subs = splitChunkByH3(chunk);
  const matchRe = /strict(?:ly)?\s*avoid|do\s*not|forbidden|never\b|absolutely\s*avoid/i;
  const target = subs.find((s) => matchRe.test(s.title));
  if (target) {
    const subBullets = extractBulletLines(target.visibleBody);
    if (subBullets.length >= 1) {
      const out = nonEmpty(subBullets.slice(0, 3).map((b) => clampBullet(stripTldr(b))));
      if (out.length > 0) return { bullets: out, anchor: "interactions", available: true };
    }
    // No bullets — try splitting the visibleBody by ;
    const paragraphs = target.visibleBody
      .split(/\r?\n+/)
      .map((p) => p.trim())
      .filter((p) => p && !p.startsWith(">") && !p.startsWith("|") && !p.startsWith("#"));
    const joined = paragraphs.join(" ");
    if (joined) {
      const parts = joined.split(/\s*;\s*/).filter(Boolean).slice(0, 3);
      const out = nonEmpty(parts.map((p) => clampBullet(p)));
      if (out.length > 0) return { bullets: out, anchor: "interactions", available: true };
    }
  }
  // Strategy B: scan whole chunk for lines starting "Do not", "Never", "Avoid"
  const bullets = extractBulletLines(chunk.body);
  const avoidRe = /^(?:do\s*not|never|avoid|don['']t|eliminate)\b/i;
  const matches = bullets.filter((b) => avoidRe.test(stripTldr(b)));
  const out = nonEmpty(matches.slice(0, 3).map((b) => clampBullet(stripTldr(b))));
  return {
    bullets: out.length > 0 ? out : ["Red-flag interactions — see safety matrix."],
    anchor: "interactions",
    available: out.length > 0,
  };
}

function parseDiet(chunk: DossierChunk | undefined): TopShelfCard {
  if (!chunk) {
    return { bullets: ["Section not available in this dossier yet."], anchor: "diet", available: false };
  }
  // Strategy A: find day-headers — bold like "**Day 1**" or "**Monday**"
  const dayRe = /\*\*\s*(Day\s*\d+[^*]*|Mon(?:day)?|Tue(?:sday)?|Wed(?:nesday)?|Thu(?:rsday)?|Fri(?:day)?|Sat(?:urday)?|Sun(?:day)?)\s*\*\*\s*[—:\-]?\s*(.{0,180})/gi;
  const days: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = dayRe.exec(chunk.body)) !== null) {
    const label = m[1].trim();
    const teaser = plainText(m[2] || "").replace(/[.!?].*$/, "").trim();
    const combined = teaser ? `${label} — ${teaser}` : label;
    days.push(clampBullet(combined));
    if (days.length >= 3) break;
  }
  if (days.length >= 3) return { bullets: days, anchor: "diet", available: true };

  // Strategy A2: 7-day-meal-plan tables — pull the first 3 table rows with Day-cells.
  const tableRowRe = /^\|\s*([0-9]+(?:\s+\w+)?)\s*\|\s*([^|]+)\s*\|/gim;
  const rowMatches: string[] = [];
  let rm: RegExpExecArray | null;
  while ((rm = tableRowRe.exec(chunk.body)) !== null) {
    const dayCell = rm[1].trim();
    const tldrCell = plainText(stripTldr(rm[2])).replace(/[.!?].*$/, "").trim();
    if (/^\d+/.test(dayCell)) {
      const label = `Day ${dayCell}`;
      const combined = tldrCell ? `${label} — ${tldrCell}` : label;
      rowMatches.push(clampBullet(combined));
      if (rowMatches.length >= 3) break;
    }
  }
  if (rowMatches.length >= 3) return { bullets: rowMatches, anchor: "diet", available: true };

  // Strategy B: bullets describing dietary moves
  const bullets = extractBulletLines(chunk.body);
  const out = nonEmpty(bullets.slice(0, 3).map((b) => clampBullet(stripTldr(b))));
  return {
    bullets: out.length > 0 ? out : ["Mediterranean-MIND base + 7-day meal anchor."],
    anchor: "diet",
    available: out.length > 0,
  };
}

function parseSuppliers(chunk: DossierChunk | undefined): TopShelfCard {
  if (!chunk) {
    return { bullets: ["Section not available in this dossier yet."], anchor: "suppliers", available: false };
  }
  const out: string[] = [];

  // Lead bullet: monthly cost — try several phrasings.
  const costRe =
    /(?:\*\*\s*)?(?:Recurring\s+total|Total\s+monthly|Monthly\s+(?:cost|total)|Recurring)[^.\n]{0,40}\$[\d,]+(?:\s*[-–]\s*\$?[\d,]+)?(?:\s*\/?\s*month)?/i;
  const costMatch = chunk.body.match(costRe);
  if (costMatch) {
    out.push(clampBullet(plainText(costMatch[0])));
  } else {
    // Fallback: any "$X-Y/month" pattern
    const fallback = chunk.body.match(/\$[\d,]+\s*[-–]\s*\$?[\d,]+\s*\/?\s*month/i);
    if (fallback) out.push(clampBullet("Monthly total " + fallback[0]));
  }

  // Try to pull 2 supplier/brand bullets from §X.1 / table channel column.
  // First scan markdown table rows of the form `| Channel | TL;DR ... |`
  const supplierLines: string[] = [];
  const lines = chunk.body.split(/\r?\n/);
  for (const ln of lines) {
    const t = ln.trim();
    if (!t.startsWith("|")) continue;
    if (/^\|\s*[-:]+\s*\|/.test(t)) continue; // separator
    if (/^\|\s*Channel\s*\|/i.test(t)) continue; // header
    // Extract first cell
    const cells = t.split("|").map((c) => c.trim()).filter(Boolean);
    if (cells.length < 2) continue;
    const channel = cells[0];
    const tldr = plainText(stripTldr(cells[1])).replace(/[.!?].*$/, "").trim();
    if (channel && !/^TL;DR/i.test(channel)) {
      const combined = tldr ? `${channel} — ${tldr}` : channel;
      supplierLines.push(clampBullet(combined));
    }
    if (supplierLines.length >= 2) break;
  }

  // If no table, fall back to bullets with brand-like proper nouns
  if (supplierLines.length === 0) {
    const bullets = extractBulletLines(chunk.body);
    const brandRe = /iHerb|Amazon|Thorne|Schwabe|Pure Encapsulations|Boots|Hamdard|IMPCOPS|Whole Foods|Apotheke|Jarrow|Patel Brothers|Kamwo|Plum Flower|Boiron|SBL|Nordic Naturals/i;
    const brandBullets = bullets.filter((b) => brandRe.test(b));
    const picked = (brandBullets.length > 0 ? brandBullets : bullets).slice(0, 2);
    for (const b of picked) supplierLines.push(clampBullet(stripTldr(b)));
  }

  for (const s of supplierLines) {
    if (out.length >= 3) break;
    out.push(s);
  }

  // Top up with cost-breakdown bullets if we still have <3
  if (out.length < 3) {
    const bullets = extractBulletLines(chunk.body);
    for (const b of bullets) {
      if (out.length >= 3) break;
      const t = clampBullet(stripTldr(b));
      if (t && !out.includes(t)) out.push(t);
    }
  }

  const final = nonEmpty(out.slice(0, 3));
  return {
    bullets: final.length > 0 ? final : ["Curated supplier ecosystem — see channels + brands."],
    anchor: "suppliers",
    available: final.length > 0,
  };
}

/**
 * Extract the 5-card TopShelf preview from a tab-bucketed dossier.
 * Always returns all 5 cards; missing source chunks land as `available: false`
 * placeholders so the renderer keeps a stable 5-card grid.
 */
export function extractTopShelf(
  chunksByTab: Record<string, DossierChunk[]>
): TopShelfPreview {
  const first = (tabId: string): DossierChunk | undefined => chunksByTab[tabId]?.[0];
  return {
    timeline: parseTimeline(first("timeline")),
    combos: parseCombos(first("combos")),
    strictlyAvoid: parseStrictlyAvoid(first("interactions")),
    diet: parseDiet(first("diet")),
    suppliers: parseSuppliers(first("suppliers")),
  };
}
