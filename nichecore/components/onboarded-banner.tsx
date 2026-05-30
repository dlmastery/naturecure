import Link from "next/link";
import { CircleCheck, ArrowRight } from "lucide-react";
import type { Bundle } from "@/lib/types";

/**
 * OnboardedBanner — appears on /companion when ?onboarded=true.
 * Mirrors the spec's "You're in. The website earned the sale, the app earns the year."
 * Includes a 7-pip streak strip starting at day 1 (active) for instant feedback.
 */
export function OnboardedBanner({ bundle }: { bundle?: Bundle }) {
  return (
    <section
      className="rounded-[var(--radius-card)] border p-6 sm:p-7"
      style={{
        background: "var(--color-ok-soft)",
        borderColor: "var(--color-ok)",
        color: "var(--color-ink)",
      }}
      data-component="OnboardedBanner"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-2">
        <CircleCheck size={18} style={{ color: "var(--color-ok)" }} />
        <span
          className="font-mono text-[0.7rem] uppercase tracking-[0.18em]"
          style={{ color: "var(--color-ok)" }}
        >
          You're in · day 01 of {bundle?.duration ?? "the journey"}
        </span>
      </div>
      <h2 className="font-display mt-3 text-3xl leading-tight sm:text-4xl">
        You&rsquo;re in. The website earned the sale,{" "}
        <span className="italic" style={{ color: "var(--color-forest)" }}>
          the app earns the year
        </span>
        .
      </h2>
      {bundle && (
        <p
          className="mt-3 max-w-xl text-[0.92rem] leading-relaxed"
          style={{ color: "var(--color-ink-soft)" }}
        >
          Your <strong>{bundle.name}</strong> is queued. Tomorrow morning&rsquo;s
          first dose is the first pip of your 7-day streak. We&rsquo;ll check in
          at week 4 with an optional expert chart.
        </p>
      )}

      <div
        className="mt-5 inline-flex items-center gap-1.5"
        data-component="StreakStrip"
        role="group"
        aria-label="7-day adherence streak strip"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <span
            key={i}
            className="h-2.5 w-2.5 rounded-full"
            style={{
              background:
                i === 0 ? "var(--color-ok)" : "var(--color-line-strong)",
            }}
            aria-label={`Day ${i + 1}${i === 0 ? " (today)" : ""}`}
          />
        ))}
        <span
          className="ml-3 font-mono text-[0.72rem] uppercase tracking-wider"
          style={{ color: "var(--color-ink-faint)" }}
        >
          1 of 7 — today
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/progress"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.85rem] font-medium"
          style={{
            background: "var(--color-forest)",
            color: "var(--color-paper)",
          }}
        >
          See month-one plan <ArrowRight size={15} />
        </Link>
        <Link
          href="/expert?from=onboarded&reason=week-4-chart"
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.85rem] font-medium"
          style={{
            borderColor: "var(--color-line-strong)",
            color: "var(--color-ink)",
          }}
        >
          Schedule week-4 expert review
        </Link>
      </div>
    </section>
  );
}
