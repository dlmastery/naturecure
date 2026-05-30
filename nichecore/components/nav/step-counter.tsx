/**
 * Mono "Section NN / NN" pill — sits in the sticky top bar, updates via scroll-spy.
 */
export function StepCounter({ current, total }: { current: number; total: number }) {
  return (
    <span
      data-component="StepCounter"
      className="inline-flex items-center gap-1.5 font-mono"
      style={{
        fontSize: "11.5px",
        letterSpacing: "0.08em",
        padding: "5px 12px",
        borderRadius: "999px",
        border: "1px solid var(--color-line-strong)",
        color: "var(--color-ink-soft)",
        background: "#ffffff80",
      }}
    >
      <span style={{ color: "var(--color-ink-faint)" }}>Section</span>
      <span style={{ color: "var(--color-ink)" }}>
        {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </span>
  );
}
