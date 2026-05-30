/**
 * StepIndicator — small mono pill used by the package wizard and quizzes
 * to show "Step N of M" with an accessible progressbar role.
 */
export function StepIndicator({
  current,
  total,
  label,
}: {
  current: number;
  total: number;
  label?: string;
}) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="inline-flex flex-col gap-2" data-component="StepIndicator">
      <div className="flex items-center gap-3">
        <span
          className="font-mono text-[0.7rem] uppercase tracking-[0.18em]"
          style={{ color: "var(--color-ink-faint)" }}
        >
          Step {String(current).padStart(2, "0")} of {String(total).padStart(2, "0")}
          {label ? <> · {label}</> : null}
        </span>
        <span
          className="font-mono text-[0.7rem]"
          style={{ color: "var(--color-gold-deep)" }}
        >
          {pct}%
        </span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuetext={`Step ${current} of ${total}`}
        className="relative h-1.5 w-44 overflow-hidden rounded-full"
        style={{ background: "var(--color-line-strong)" }}
      >
        <span
          className="absolute inset-y-0 left-0 rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: "var(--color-forest)" }}
        />
      </div>
    </div>
  );
}
