/**
 * QualityStrip — 4-cell foot strip used inside the NinetyDayPackCard.
 * Each cell: mono eyebrow + serif value.
 */
export type QualityCell = { eyebrow: string; value: string };

export function QualityStrip({ cells }: { cells: QualityCell[] }) {
  return (
    <div
      className="grid divide-y border-t sm:grid-cols-4 sm:divide-x sm:divide-y-0"
      style={{ borderColor: "var(--color-line)", color: "var(--color-ink)" }}
      data-component="QualityStrip"
    >
      {cells.map((c) => (
        <div
          key={c.eyebrow}
          className="px-5 py-4"
          style={{ borderColor: "var(--color-line)" }}
        >
          <p className="eyebrow">{c.eyebrow}</p>
          <p className="font-display mt-1 text-[1.05rem] leading-tight">
            {c.value}
          </p>
        </div>
      ))}
    </div>
  );
}
