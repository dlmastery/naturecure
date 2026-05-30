"use client";

import { Leaf } from "lucide-react";

export interface NavItemSpec {
  id: string;
  ordinal: string; // "01" .. "15" or "—"
  label: string;
}

export interface NavGroup {
  label: string; // mono uppercase header
  items: NavItemSpec[];
}

export interface LeftRailNavProps {
  brand?: {
    wordmark: string;
    line: string; // e.g. "evidence OS"
  };
  trackBadge?: React.ReactNode; // optional badge slot below brand
  groups: NavGroup[];
  activeId: string;
  onSelect: (id: string) => void;
  footerNote?: string;
}

/**
 * Persistent left rail (lg+). 280px, paper-deep background, right hairline.
 * Spec §2.5 + §3.1.
 */
export function LeftRailNav({
  brand = { wordmark: "NicheCore", line: "evidence OS" },
  trackBadge,
  groups,
  activeId,
  onSelect,
  footerNote = "Adjunctive natural support. Educational only — never a replacement for your clinician.",
}: LeftRailNavProps) {
  return (
    <aside
      data-component="DossierShell-rail"
      className="sticky top-0 hidden h-dvh w-[280px] flex-col overflow-y-auto px-[22px] py-7 lg:flex"
      style={{
        background: "var(--color-paper-deep)",
        borderRight: "1px solid var(--color-line)",
      }}
    >
      {/* Brand block */}
      <div className="mb-7 flex items-start gap-3">
        <span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
          style={{ background: "var(--color-forest)" }}
        >
          <Leaf size={17} style={{ color: "var(--color-paper)" }} />
        </span>
        <div>
          <div className="font-display text-[17px] leading-tight font-medium">{brand.wordmark}</div>
          <div
            className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.04em]"
            style={{ color: "var(--color-ink-faint)" }}
          >
            {brand.line}
          </div>
        </div>
      </div>

      {trackBadge && <div className="mb-5">{trackBadge}</div>}

      <nav aria-label="Section index" className="flex flex-1 flex-col">
        {groups.map((g) => (
          <div key={g.label} className="mb-[18px]">
            <div
              className="mx-2 mb-1.5 font-mono text-[10.5px] font-bold uppercase tracking-[0.12em]"
              style={{ color: "var(--color-ink-faint)" }}
            >
              {g.label}
            </div>
            <div className="flex flex-col gap-px">
              {g.items.map((item) => {
                const active = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelect(item.id)}
                    aria-current={active ? "location" : undefined}
                    className="flex w-full items-center gap-2.5 text-left transition-colors"
                    style={{
                      padding: "7px 10px",
                      fontSize: "13.5px",
                      lineHeight: 1.3,
                      borderRadius: "6px",
                      background: active ? "#ffffff" : "transparent",
                      color: active ? "var(--color-ink)" : "var(--color-ink-soft)",
                      fontWeight: active ? 500 : 400,
                      boxShadow: active ? "var(--shadow-sm)" : "none",
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: active ? "var(--color-forest)" : "currentColor",
                        opacity: active ? 1 : 0.4,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "10.5px",
                        letterSpacing: "0.06em",
                        color: active ? "var(--color-gold-deep)" : "var(--color-ink-faint)",
                        width: "18px",
                      }}
                    >
                      {item.ordinal}
                    </span>
                    <span className="flex-1">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div
        className="mt-4 rounded-[10px] border p-3.5 text-[11px] leading-relaxed"
        style={{
          borderColor: "var(--color-line-strong)",
          color: "var(--color-ink-faint)",
        }}
      >
        {footerNote}
      </div>
    </aside>
  );
}
