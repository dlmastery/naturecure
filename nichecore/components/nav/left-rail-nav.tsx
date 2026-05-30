"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronRight, Leaf } from "lucide-react";

export interface NavItemSpec {
  id: string;
  ordinal: string; // "01" .. "15" or "—"
  label: string;
  /** Optional H3 sub-items rendered as expandable tree children. */
  children?: NavItemSpec[];
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
 *
 * v6.2 tree-expansion: any item with `children` is rendered with a
 * chevron toggle. The parent containing the active child is
 * auto-expanded. Click parent → navigate AND toggle expanded.
 */
export function LeftRailNav({
  brand = { wordmark: "NicheCore", line: "evidence OS" },
  trackBadge,
  groups,
  activeId,
  onSelect,
  footerNote = "Adjunctive natural support. Educational only — never a replacement for your clinician.",
}: LeftRailNavProps) {
  // Track which parent items the user has manually toggled. Parents whose
  // active descendant is the current section are ALWAYS rendered expanded
  // regardless of user toggle state, so the active row stays visible.
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});

  const activeParentId = useMemo(() => {
    for (const g of groups) {
      for (const it of g.items) {
        if (it.id === activeId) return it.id;
        if (it.children?.some((c) => c.id === activeId)) return it.id;
      }
    }
    return null;
  }, [groups, activeId]);

  // Auto-open the parent of the active child the first time it appears.
  useEffect(() => {
    if (activeParentId) {
      setOpenMap((prev) => (prev[activeParentId] ? prev : { ...prev, [activeParentId]: true }));
    }
  }, [activeParentId]);

  const isOpen = (id: string) => openMap[id] === true || id === activeParentId;
  const toggle = (id: string) =>
    setOpenMap((prev) => ({ ...prev, [id]: !isOpen(id) }));

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
                const hasChildren = (item.children?.length ?? 0) > 0;
                const open = hasChildren && isOpen(item.id);
                return (
                  <div key={item.id} className="flex flex-col">
                    <div className="flex items-stretch">
                      <button
                        type="button"
                        onClick={() => onSelect(item.id)}
                        aria-current={active ? "location" : undefined}
                        className="flex flex-1 items-center gap-2.5 text-left transition-colors"
                        style={{
                          padding: "7px 10px",
                          fontSize: "13.5px",
                          lineHeight: 1.3,
                          borderRadius: "6px 0 0 6px",
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
                      {hasChildren && (
                        <button
                          type="button"
                          onClick={() => toggle(item.id)}
                          aria-expanded={open}
                          aria-label={open ? `Collapse ${item.label}` : `Expand ${item.label}`}
                          className="grid w-7 place-items-center transition-colors"
                          style={{
                            borderRadius: "0 6px 6px 0",
                            background: active ? "#ffffff" : "transparent",
                            color: "var(--color-ink-faint)",
                            boxShadow: active ? "var(--shadow-sm)" : "none",
                          }}
                        >
                          <ChevronRight
                            size={13}
                            style={{
                              transform: open ? "rotate(90deg)" : "rotate(0deg)",
                              transition: "transform 160ms",
                            }}
                          />
                        </button>
                      )}
                    </div>
                    {hasChildren && open && (
                      <ul
                        className="ml-3 mt-1 mb-1 flex flex-col gap-px border-l pl-2"
                        style={{ borderColor: "var(--color-line-strong)" }}
                      >
                        {item.children!.map((c) => {
                          const cActive = c.id === activeId;
                          return (
                            <li key={c.id}>
                              <button
                                type="button"
                                onClick={() => onSelect(c.id)}
                                aria-current={cActive ? "location" : undefined}
                                className="flex w-full items-start gap-2 text-left transition-colors"
                                style={{
                                  padding: "5px 8px",
                                  fontSize: "12px",
                                  lineHeight: 1.3,
                                  borderRadius: "5px",
                                  background: cActive ? "#ffffff" : "transparent",
                                  color: cActive ? "var(--color-ink)" : "var(--color-ink-soft)",
                                  fontWeight: cActive ? 500 : 400,
                                  boxShadow: cActive ? "var(--shadow-sm)" : "none",
                                  opacity: cActive ? 1 : 0.85,
                                }}
                              >
                                <span
                                  aria-hidden="true"
                                  style={{
                                    width: "3px",
                                    height: "3px",
                                    borderRadius: "50%",
                                    background: cActive ? "var(--color-forest)" : "currentColor",
                                    opacity: cActive ? 1 : 0.4,
                                    marginTop: "8px",
                                    flexShrink: 0,
                                  }}
                                />
                                <span className="flex-1">{c.label}</span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
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
