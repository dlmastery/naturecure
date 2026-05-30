"use client";

import { useCallback, useMemo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useActiveSection } from "@/lib/use-active-section";
import { useKeyboardNav } from "@/lib/use-keyboard-nav";
import { LeftRailNav, type NavGroup, type NavItemSpec } from "@/components/nav/left-rail-nav";
import { MobileTabStrip, type MobileTabSpec } from "@/components/nav/mobile-tab-strip";
import { MobileDock } from "@/components/nav/mobile-dock";
import { StepCounter } from "@/components/nav/step-counter";

export interface SectionSpec {
  id: string;
  ordinal: string;
  label: string;
  group?: string; // group label header in the rail
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
  const ids = useMemo(() => tabs.map((t) => t.id), [tabs]);
  const [active, setActive] = useActiveSection(ids);
  useKeyboardNav(ids, active, setActive);

  // Build grouped nav.
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
      byGroup.get(g)!.push({ id: t.id, ordinal: t.ordinal, label: t.label });
    }
    for (const g of order) out.push({ label: g, items: byGroup.get(g)! });
    return out;
  }, [tabs]);

  const flatItems: MobileTabSpec[] = useMemo(
    () => tabs.map((t) => ({ id: t.id, ordinal: t.ordinal, label: t.label })),
    [tabs]
  );

  const idx = Math.max(0, ids.indexOf(active));
  const current = idx + 1;
  const total = ids.length;

  const handleSelect = useCallback((id: string) => setActive(id), [setActive]);
  const goPrev = useCallback(() => {
    const i = ids.indexOf(active);
    const j = Math.max(0, i - 1);
    setActive(ids[j]);
  }, [active, ids, setActive]);
  const goNext = useCallback(() => {
    const i = ids.indexOf(active);
    const j = Math.min(ids.length - 1, i + 1);
    setActive(ids[j]);
  }, [active, ids, setActive]);

  return (
    <div
      data-component="DossierShell"
      className="lg:grid lg:grid-cols-[280px_1fr]"
      style={{ background: "var(--color-paper)", minHeight: "100dvh" }}
    >
      {/* Global scroll-margin-top so smooth-scroll lands below the 64px sticky bar */}
      <style>{`section[data-section-anchor] { scroll-margin-top: 80px; }`}</style>

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

        {/* Mobile tab strip */}
        <MobileTabStrip sections={flatItems} active={active} onSelect={handleSelect} />

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
