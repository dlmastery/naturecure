export interface FoundationPillar {
  ordinal: string; // "01" .. "04"
  title: string;
  desc: string;
}

/**
 * 4-up grid — mono ordinal (gold-deep) + serif title + muted description.
 * Spec §2.7 / §4.2.
 */
export function FoundationPillarRow({
  pillars,
  tone = "paper",
}: {
  pillars: FoundationPillar[];
  tone?: "paper" | "ink";
}) {
  const onInk = tone === "ink";
  return (
    <div
      data-component="FoundationPillarRow"
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {pillars.map((p) => (
        <div
          key={p.ordinal}
          className="flex flex-col gap-1.5 rounded-[10px] p-5"
          style={{
            background: onInk ? "#ffffff10" : "#ffffff80",
            border: `1px solid ${onInk ? "#ffffff20" : "var(--color-line)"}`,
          }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: onInk ? "var(--color-gold)" : "var(--color-gold-deep)",
              fontWeight: 600,
            }}
          >
            {p.ordinal}
          </span>
          <h3
            className="font-display"
            style={{
              fontSize: "20px",
              lineHeight: 1.15,
              letterSpacing: "-0.012em",
              color: onInk ? "var(--color-paper)" : "var(--color-ink)",
            }}
          >
            {p.title}
          </h3>
          <p
            style={{
              fontSize: "13.5px",
              lineHeight: 1.5,
              color: onInk ? "#ffffffb0" : "var(--color-ink-soft)",
            }}
          >
            {p.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
