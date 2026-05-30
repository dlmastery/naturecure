"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Fixed bottom dock for `<lg`. `[<] 04 / 15 [>]` — 56px tall.
 */
export function MobileDock({
  prev,
  next,
  current,
  total,
}: {
  prev: () => void;
  next: () => void;
  current: number; // 1-based
  total: number;
}) {
  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between px-4 lg:hidden"
      style={{
        height: "56px",
        background: "var(--color-paper-deep)",
        borderTop: "1px solid var(--color-line-strong)",
      }}
    >
      <button
        type="button"
        onClick={prev}
        aria-label="Previous section"
        disabled={current <= 1}
        className="inline-flex items-center gap-1 rounded-full px-4 py-2"
        style={{
          background: "#ffffff",
          border: "1px solid var(--color-line-strong)",
          color: "var(--color-ink)",
          opacity: current <= 1 ? 0.4 : 1,
        }}
      >
        <ChevronLeft size={16} />
      </button>
      <div
        className="font-mono"
        style={{
          fontSize: "13px",
          letterSpacing: "0.08em",
          color: "var(--color-ink-soft)",
        }}
      >
        {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
      <button
        type="button"
        onClick={next}
        aria-label="Next section"
        disabled={current >= total}
        className="inline-flex items-center gap-1 rounded-full px-4 py-2"
        style={{
          background: "var(--color-forest)",
          color: "var(--color-paper)",
          opacity: current >= total ? 0.4 : 1,
        }}
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
