import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StepCounter } from "./step-counter";

export interface TopBarProps {
  brand?: string; // wordmark dot label
  title: React.ReactNode; // ailment serif name + italic domain hint
  step: { current: number; total: number };
  rightBadges?: React.ReactNode[];
  primaryCta?: { label: string; href: string };
}

/**
 * Sticky top bar — 64px tall, paper-deep, hairline bottom.
 * Left: brand dot + serif ailment + italic domain hint.
 * Centre: <StepCounter>.
 * Right: badges + optional primary CTA.
 */
export function TopBar({
  brand = "NC",
  title,
  step,
  rightBadges = [],
  primaryCta,
}: TopBarProps) {
  return (
    <header
      data-component="TopBar"
      className="sticky top-0 z-30 flex items-center gap-3 px-4 sm:px-6 lg:px-8"
      style={{
        height: "64px",
        background: "var(--color-paper-deep)",
        borderBottom: "1px solid var(--color-line-strong)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <span
          aria-hidden="true"
          className="grid h-7 w-7 shrink-0 place-items-center rounded-md font-display"
          style={{
            background: "var(--color-forest)",
            color: "var(--color-paper)",
            fontSize: "13px",
            fontWeight: 500,
          }}
        >
          {brand.slice(0, 2)}
        </span>
        <div className="min-w-0 truncate font-display text-[16px] leading-tight">
          {title}
        </div>
      </div>
      <div className="hidden shrink-0 sm:block">
        <StepCounter current={step.current} total={step.total} />
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {rightBadges.map((b, i) => (
          <span key={i} className="hidden md:inline-flex">
            {b}
          </span>
        ))}
        {primaryCta && (
          <Link
            href={primaryCta.href}
            className="btn-primary !py-2 !text-[12.5px]"
          >
            {primaryCta.label} <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </header>
  );
}
