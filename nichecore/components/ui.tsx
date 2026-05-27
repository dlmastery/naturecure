import { EVIDENCE_GRADES, ACCENTS, FRESHNESS_LABEL } from "@/lib/evidence";
import type { EvidenceGrade, Freshness } from "@/lib/types";

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

/** Evidence grade badge — colour encodes confidence tier. Always visible near a claim. */
export function GradeBadge({ grade, withLabel = false }: { grade: EvidenceGrade; withLabel?: boolean }) {
  const g = EVIDENCE_GRADES[grade];
  const accent = ACCENTS[g.accent];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full pl-1 pr-2.5 py-0.5 text-[0.7rem] font-medium"
      style={{ background: accent.fill, color: accent.ink }}
      title={`Grade ${grade} — ${g.label}: ${g.consumer}`}
    >
      <span
        className="grid h-5 w-5 place-items-center rounded-full font-mono text-[0.7rem] font-semibold"
        style={{ background: accent.ink, color: "var(--color-paper)" }}
      >
        {grade}
      </span>
      {withLabel ? g.label : `Grade ${grade}`}
    </span>
  );
}

export function FreshnessChip({ status }: { status: Freshness }) {
  const dot =
    status === "fresh" ? "var(--color-mint-ink)"
    : status === "current" ? "var(--color-sky-ink)"
    : status === "review_required" ? "var(--color-blush-ink)"
    : "var(--color-amber-ink)";
  return (
    <span className="chip">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: dot }} />
      {FRESHNESS_LABEL[status]}
    </span>
  );
}

export function RiskTag({ risk }: { risk: string }) {
  const map: Record<string, keyof typeof ACCENTS> = {
    low: "mint", moderate: "sky", guarded: "amber", high: "blush", specialist: "blush",
  };
  const a = ACCENTS[map[risk] ?? "sky"];
  return (
    <span className="rounded-full px-2.5 py-0.5 font-mono text-[0.65rem] lowercase tracking-wide"
      style={{ background: a.fill, color: a.ink }}>
      {risk} screen
    </span>
  );
}

/** Big editorial numeral, gold. */
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-4xl leading-none" style={{ color: "var(--color-gold-deep)" }}>{value}</div>
      <div className="mt-1.5 text-xs text-ink-soft" style={{ color: "var(--color-ink-soft)" }}>{label}</div>
    </div>
  );
}

/** Forest "governance / rule" card — products gated behind evidence + safety + sourcing. */
export function RuleCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[var(--radius-card)] p-6" style={{ background: "var(--color-forest)", color: "var(--color-paper)" }}>
      <p className="eyebrow" style={{ color: "#ffffff70" }}>{title}</p>
      <div className="mt-3 text-sm leading-relaxed" style={{ color: "#ffffffe0" }}>{children}</div>
    </div>
  );
}

export function SafetyNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-4 text-sm leading-relaxed"
      style={{ background: "var(--color-amber)", color: "var(--color-amber-ink)" }}>
      {children}
    </div>
  );
}

export function SectionHeading({ kicker, title, lead }: { kicker: string; title: React.ReactNode; lead?: string }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{kicker}</Eyebrow>
      <h2 className="font-display mt-3 text-balance text-3xl leading-[1.1] sm:text-4xl">{title}</h2>
      {lead && <p className="mt-3 text-[0.95rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{lead}</p>}
    </div>
  );
}
