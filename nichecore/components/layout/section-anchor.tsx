import type { ReactNode } from "react";

export interface SectionAnchorProps {
  id: string;
  eyebrow: string; // mono ochre header text (the two-line "A patient-built reference · 360° protocol")
  ordinal?: string; // "01" .. "15" or "—"
  title: ReactNode; // serif headline; pass JSX with <em> for italic forest word
  italicWord?: string; // (informational — italic styling is rendered in the title JSX)
  lede?: ReactNode; // optional serif italic 19px lede paragraph
  children?: ReactNode; // body content for the section
}

/**
 * Anchored section opening — `<section id>` with scroll-margin-top: 80px
 * (set globally by `<DossierShell>`), two-line mono eyebrow, ordinal,
 * serif headline (italic word coloured forest via JSX), italic lede.
 */
export function SectionAnchor({
  id,
  eyebrow,
  ordinal,
  title,
  lede,
  children,
}: SectionAnchorProps) {
  return (
    <section
      id={id}
      data-section-anchor
      className="px-5 pt-14 sm:px-8 lg:px-14"
      aria-labelledby={`${id}-title`}
    >
      <div className="mx-auto max-w-[1080px]">
        <div className="flex items-baseline gap-3">
          {ordinal && (
            <span
              className="font-mono"
              style={{
                fontSize: "11px",
                letterSpacing: "0.16em",
                color: "var(--color-gold-deep)",
                fontWeight: 600,
              }}
            >
              {ordinal}
            </span>
          )}
          <span
            className="font-mono uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "0.16em",
              color: "var(--color-gold-deep)",
              fontWeight: 500,
            }}
          >
            ──── {eyebrow}
          </span>
        </div>
        <h2
          id={`${id}-title`}
          className="font-display mt-4 text-balance text-3xl leading-[1.05] sm:text-4xl lg:text-5xl"
          style={{ letterSpacing: "-0.018em", color: "var(--color-ink)" }}
        >
          {title}
        </h2>
        {lede && (
          <p
            className="font-display mt-5 max-w-[64ch] text-[19px] italic leading-[1.45]"
            style={{ color: "var(--color-ink-soft)" }}
          >
            {lede}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
