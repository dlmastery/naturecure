"use client";

import { useEffect, useRef } from "react";

export interface MobileTabSpec {
  id: string;
  ordinal: string;
  label: string;
}

/**
 * Horizontal scroll-snap chip strip for `<lg` viewports. Active chip
 * auto-scrolls into the center.
 */
export function MobileTabStrip({
  sections,
  active,
  onSelect,
}: {
  sections: MobileTabSpec[];
  active: string;
  onSelect: (id: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const el = activeRef.current;
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    }
  }, [active]);

  return (
    <div
      ref={containerRef}
      role="tablist"
      aria-label="Section index (mobile)"
      className="sticky z-30 flex gap-2 overflow-x-auto px-4 py-2.5 lg:hidden"
      style={{
        top: "64px",
        scrollSnapType: "x mandatory",
        background: "var(--color-paper-deep)",
        borderBottom: "1px solid var(--color-line-strong)",
      }}
    >
      {sections.map((s) => {
        const isActive = s.id === active;
        return (
          <button
            key={s.id}
            ref={isActive ? activeRef : undefined}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-current={isActive ? "location" : undefined}
            onClick={() => onSelect(s.id)}
            className="inline-flex shrink-0 items-center gap-2 transition-colors"
            style={{
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "12.5px",
              scrollSnapAlign: "center",
              background: isActive ? "var(--color-forest)" : "#ffffff",
              color: isActive ? "var(--color-paper)" : "var(--color-ink-soft)",
              border: "1px solid var(--color-line-strong)",
              whiteSpace: "nowrap",
            }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: "10px",
                letterSpacing: "0.06em",
                opacity: isActive ? 0.8 : 1,
                color: isActive ? "var(--color-paper)" : "var(--color-gold-deep)",
              }}
            >
              {s.ordinal}
            </span>
            <span>{s.label}</span>
          </button>
        );
      })}
    </div>
  );
}
