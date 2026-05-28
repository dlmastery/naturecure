import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Linear journey footer — sits at the bottom of every consumer page so the
 * next step is always visible. The journey is:
 *   01 Need · 02 Atlas · 03 Journey · 04 Personalise · 05 Regime · 06 Companion · 07 Expert · 08 Progress
 */
export function NextStep({
  step,
  title,
  body,
  href,
  cta,
  tone = "forest",
}: {
  step: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  tone?: "forest" | "paper";
}) {
  const dark = tone === "forest";
  return (
    <section className="px-6 pt-16 sm:px-10 lg:px-14">
      <Link
        href={href}
        aria-label={`Up next: ${step} — ${cta}`}
        data-nextstep
        className="group flex flex-col items-start justify-between gap-4 rounded-[var(--radius-card)] p-6 transition-transform duration-500 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:gap-8 sm:p-8"
        style={{
          background: dark ? "var(--color-forest)" : "var(--color-paper-deep)",
          color: dark ? "var(--color-paper)" : "var(--color-ink)",
        }}
      >
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em]"
             style={{ color: dark ? "#ffffff80" : "var(--color-ink-faint)" }}>
            Up next · {step}
          </p>
          <h3 className="font-display mt-2 text-3xl leading-tight sm:text-4xl">{title}</h3>
          <p className="mt-2 max-w-md text-[0.92rem] leading-relaxed"
             style={{ color: dark ? "#ffffffcc" : "var(--color-ink-soft)" }}>
            {body}
          </p>
        </div>
        <span
          className="inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-[0.92rem] font-medium transition-transform duration-500 group-hover:translate-x-1"
          style={{
            background: dark ? "var(--color-paper)" : "var(--color-forest)",
            color: dark ? "var(--color-forest)" : "var(--color-paper)",
          }}
        >
          {cta} <ArrowRight size={16} />
        </span>
      </Link>
    </section>
  );
}
