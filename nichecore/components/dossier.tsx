import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Dossier } from "@/lib/research";
import { Eyebrow } from "@/components/ui";

/**
 * Renders a research dossier (markdown body) with on-brand prose styles.
 * Tables, evidence-grade letters, dosing rows etc. all get our cream-paper
 * editorial treatment via CSS in the .dossier-prose scope.
 */
/** Coerce any front-matter value to a printable string. YAML dates parse to JS Date. */
function fmt(v: unknown): string | undefined {
  if (v == null) return undefined;
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  if (Array.isArray(v)) return v.map(fmt).join(", ");
  if (typeof v === "object") return JSON.stringify(v);
  return String(v);
}

export function DossierRender({ dossier }: { dossier: Dossier }) {
  const ralph = dossier.meta.internalRalph;
  const passes = [ralph?.pass1Complete, ralph?.pass2Complete, ralph?.pass3Complete].filter(Boolean).length;
  const lastUpdated = fmt(dossier.meta.lastUpdated);
  const scoring = fmt(dossier.meta.clinicalScoringInstrument);
  const domain = fmt(dossier.meta.domain);
  return (
    <article className="dossier-prose">
      <div className="not-prose mb-8 flex flex-wrap items-center gap-3 rounded-2xl border p-4 text-[0.78rem]"
        style={{ borderColor: "var(--color-line-strong)", background: "#ffffff80", color: "var(--color-ink-soft)" }}>
        <Eyebrow>Dossier metadata</Eyebrow>
        {domain && <span className="chip">{domain}</span>}
        {lastUpdated && <span className="chip">updated {lastUpdated}</span>}
        {scoring && <span className="chip">tracked by {scoring}</span>}
        <span className="chip" style={{ color: "var(--color-mint-ink)" }}>internal ralph {passes}/3</span>
        <span className="chip">{dossier.wordCount.toLocaleString()} words</span>
      </div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{dossier.body}</ReactMarkdown>
    </article>
  );
}
