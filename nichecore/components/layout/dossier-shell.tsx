"use client";

import { useCallback, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useActiveSection } from "@/lib/use-active-section";
import { useKeyboardNav } from "@/lib/use-keyboard-nav";
import { LeftRailNav, type NavGroup, type NavItemSpec } from "@/components/nav/left-rail-nav";
import type { MobileTabSpec } from "@/components/nav/mobile-tab-strip";
import { MobileDock } from "@/components/nav/mobile-dock";
import { StepCounter } from "@/components/nav/step-counter";
import { MindMapStrip } from "@/components/nav/mind-map-strip";

export interface SectionSubSpec {
  id: string;
  label: string;
}

export interface SectionSpec {
  id: string;
  ordinal: string;
  label: string;
  group?: string; // group label header in the rail
  /** Optional H3 sub-sections for tree-expansion in the left rail. */
  children?: SectionSubSpec[];
}

export interface DossierShellProps {
  tabs: SectionSpec[];
  brand?: { wordmark: string; line: string; mark?: string };
  title: React.ReactNode;
  primaryCta?: { label: string; href: string };
  rightBadges?: React.ReactNode[];
  trackBadge?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Master journey shell — two-column on lg+, single-column on `<lg` with
 * mobile tab strip below the sticky top bar and a fixed bottom dock.
 *
 * Wires `useActiveSection` (scroll-spy + hash sync) and `useKeyboardNav`
 * (←/→/K/J/PgUp/PgDn/1-9/Home/End). Adds a global `scroll-margin-top` rule
 * so smooth-scroll lands below the sticky top bar.
 */
export function DossierShell({
  tabs,
  brand = { wordmark: "NicheCore", line: "evidence OS", mark: "NC" },
  title,
  primaryCta,
  rightBadges,
  trackBadge,
  children,
}: DossierShellProps) {
  // Scroll-spy across BOTH parent H2 ids and child H3 sub-section ids
  // (skill v6.2). Keyboard nav still steps only through the parent H2
  // tabs — sub-sections are scroll-spy and click targets, not part of
  // the J/K stepper rotation.
  const ids = useMemo(() => tabs.map((t) => t.id), [tabs]);
  const subIds = useMemo(
    () => tabs.flatMap((t) => t.children?.map((c) => c.id) ?? []),
    [tabs]
  );
  const allObservedIds = useMemo(() => [...ids, ...subIds], [ids, subIds]);
  const [active, setActive] = useActiveSection(allObservedIds);
  useKeyboardNav(ids, active, setActive);

  // Build grouped nav, preserving children so the rail can render
  // an expandable tree per H2.
  const groups: NavGroup[] = useMemo(() => {
    const out: NavGroup[] = [];
    const byGroup = new Map<string, NavItemSpec[]>();
    const order: string[] = [];
    for (const t of tabs) {
      const g = t.group ?? "SECTIONS";
      if (!byGroup.has(g)) {
        byGroup.set(g, []);
        order.push(g);
      }
      byGroup.get(g)!.push({
        id: t.id,
        ordinal: t.ordinal,
        label: t.label,
        children: t.children?.map((c) => ({ id: c.id, ordinal: "·", label: c.label })),
      });
    }
    for (const g of order) out.push({ label: g, items: byGroup.get(g)! });
    return out;
  }, [tabs]);

  const flatItems: MobileTabSpec[] = useMemo(
    () => tabs.map((t) => ({ id: t.id, ordinal: t.ordinal, label: t.label })),
    [tabs]
  );

  // Step counter follows the top-level H2 only, not the sub-sections.
  // Resolve the active parent: if `active` is a sub-section id, find
  // its parent in `tabs`; otherwise use `active` directly.
  const activeParentId = useMemo(() => {
    if (ids.includes(active)) return active;
    const parent = tabs.find((t) => t.children?.some((c) => c.id === active));
    return parent?.id ?? ids[0] ?? "";
  }, [active, ids, tabs]);
  const idx = Math.max(0, ids.indexOf(activeParentId));
  const current = idx + 1;
  const total = ids.length;

  const handleSelect = useCallback((id: string) => setActive(id), [setActive]);
  // prev/next step through parent H2 tabs, treating any active sub-section
  // as belonging to its parent for the purpose of stepping.
  const goPrev = useCallback(() => {
    const i = ids.indexOf(activeParentId);
    const j = Math.max(0, i - 1);
    setActive(ids[j]);
  }, [activeParentId, ids, setActive]);
  const goNext = useCallback(() => {
    const i = ids.indexOf(activeParentId);
    const j = Math.min(ids.length - 1, i + 1);
    setActive(ids[j]);
  }, [activeParentId, ids, setActive]);

  return (
    <div
      data-component="DossierShell"
      className="lg:grid lg:grid-cols-[280px_1fr]"
      style={{ background: "var(--color-paper)", minHeight: "100dvh" }}
    >
      {/* Global scroll-margin-top so smooth-scroll lands below the
          64px top bar + ~46px mind-map strip = 110px sticky chrome.
          Also targets H3 sub-section anchors (skill v6.2 tree nav). */}
      <style>{`
        section[data-section-anchor],
        [data-sub-anchor] {
          scroll-margin-top: 120px;
        }
      `}</style>

      <LeftRailNav
        brand={brand}
        trackBadge={trackBadge}
        groups={groups}
        activeId={active}
        onSelect={handleSelect}
      />

      <div className="min-w-0">
        {/* Sticky top bar */}
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
              className="grid h-7 w-7 shrink-0 place-items-center rounded-md font-display lg:hidden"
              style={{
                background: "var(--color-forest)",
                color: "var(--color-paper)",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              {(brand.mark ?? brand.wordmark).slice(0, 2)}
            </span>
            <div className="min-w-0 truncate font-display text-[16px] leading-tight">
              {title}
            </div>
          </div>
          <div className="hidden shrink-0 sm:block">
            <StepCounter current={current} total={total} />
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {(rightBadges ?? []).map((b, i) => (
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

        {/* Sticky horizontal mind-map (subway-style) — all viewports.
            Replaces the older MobileTabStrip; the mind-map already handles
            both desktop & mobile section navigation. */}
        <MindMapStrip sections={flatItems} active={active} onSelect={handleSelect} />

        {/* Main content */}
        <main id="main" className="relative min-w-0 pb-24 lg:pb-12">
          {children}
        </main>

        {/* Mobile dock */}
        <MobileDock prev={goPrev} next={goNext} current={current} total={total} />
      </div>
    </div>
  );
}
