"use client";

import { useRef, useState } from "react";
import {
  Compass, FlaskConical, Pill, BookOpen, Sun, Salad, Wind, Layers3,
  CalendarHeart, ShieldAlert, LineChart, TimerReset, ShoppingBag,
  Quote, BookMarked, ChevronDown, ChevronUp, type LucideIcon,
} from "lucide-react";

export interface MindMapSection {
  id: string;
  ordinal: string;
  label: string;
  group?: string;
}

type Tier = "action" | "safety" | "context" | "ref";

interface SectionMeta { icon: LucideIcon; tier: Tier; subtitle?: string }

/**
 * Section-id → icon + tier mapping. The tier drives the chip tint:
 * - action  (mint)   — what the user DOES today: take, eat, breathe, buy
 * - safety  (blush)  — what to watch for / track
 * - context (paper)  — background / framing
 * - ref     (muted)  — closing / references
 *
 * Unknown ids fall back to a neutral context chip.
 */
const SECTION_META: Record<string, SectionMeta> = {
  overview:     { icon: Compass,        tier: "context", subtitle: "What this is" },
  science:      { icon: FlaskConical,   tier: "context", subtitle: "Why it works" },
  phyto:        { icon: Pill,           tier: "action",  subtitle: "What to take" },
  traditions:   { icon: BookOpen,       tier: "context", subtitle: "6 lineages" },
  biophysical:  { icon: Sun,            tier: "action",  subtitle: "Light · heat · cold" },
  diet:         { icon: Salad,          tier: "action",  subtitle: "What to eat" },
  lifestyle:    { icon: Wind,           tier: "action",  subtitle: "Yoga · breath · sleep" },
  combos:       { icon: Layers3,        tier: "action",  subtitle: "Daily stack" },
  daily:        { icon: CalendarHeart,  tier: "action",  subtitle: "Hour-by-hour" },
  interactions: { icon: ShieldAlert,    tier: "safety",  subtitle: "Avoid combining" },
  scoring:      { icon: LineChart,      tier: "safety",  subtitle: "Track progress" },
  timeline:     { icon: TimerReset,     tier: "context", subtitle: "12-month arc" },
  suppliers:    { icon: ShoppingBag,    tier: "action",  subtitle: "Where to buy" },
  closing:      { icon: Quote,          tier: "ref",     subtitle: "Sovereignty" },
  references:   { icon: BookMarked,     tier: "ref",     subtitle: "All sources" },
};

const TIER_STYLE: Record<Tier, { bg: string; ink: string; ringActive: string }> = {
  action:  { bg: "var(--color-mint)",       ink: "var(--color-mint-ink)",   ringActive: "var(--color-forest)" },
  safety:  { bg: "var(--color-warn-soft)",  ink: "var(--color-warn)",       ringActive: "var(--color-terracotta)" },
  context: { bg: "var(--color-paper-deep)", ink: "var(--color-ink-soft)",   ringActive: "var(--color-forest)" },
  ref:     { bg: "#ffffff70",               ink: "var(--color-ink-faint)",  ringActive: "var(--color-forest)" },
};

const GROUP_LABEL: Record<string, string> = {
  "START HERE":          "Start",
  "YOUR PROTOCOL":       "Your protocol",
  "SAFETY & TRACKING":   "Safety & tracking",
  "REFERENCE & CARE":    "Reference",
};

/**
 * Sticky horizontal mind-map navigation — sits just below the top bar at all
 * viewports. Every section is an icon + label chip. Tier-tinted (action /
 * safety / context / ref). Active section is a striking forest-filled chip
 * with shadow. Group labels separate the four section families.
 */
export function MindMapStrip({
  sections,
  active,
  onSelect,
  topOffset = 64,
}: {
  sections: MindMapSection[];
  active: string;
  onSelect: (id: string) => void;
  topOffset?: number;
}) {
  const stripRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  // Mobile collapse state — on viewports <lg (1024px), the wrap-strip
  // can stack 4-5 rows of chips and eat the entire viewport. Default
  // collapsed: show only the active section + an "Expand" toggle. Open
  // by default on lg+ via CSS (the wrapper hides toggle + reveals all
  // chips at lg breakpoint).
  const [mobileOpen, setMobileOpen] = useState(false);

  // No scroll-into-view: with wrap layout every chip is already visible.

  // Walk sections in order; insert a thin group divider when group changes.
  const rendered: React.ReactNode[] = [];
  let lastGroup: string | undefined;
  sections.forEach((s, i) => {
    const meta = SECTION_META[s.id] ?? { icon: Compass, tier: "context" as Tier };
    const tier = TIER_STYLE[meta.tier];
    const isActive = s.id === active;
    const Icon = meta.icon;

    if (s.group && s.group !== lastGroup) {
      const label = GROUP_LABEL[s.group] ?? s.group;
      rendered.push(
        <div
          key={`g-${s.group}-${i}`}
          aria-hidden="true"
          className="flex shrink-0 items-center gap-1.5 px-1"
        >
          {lastGroup && (
            <span
              className="h-4 w-px"
              style={{ background: "var(--color-line-strong)" }}
            />
          )}
          <span
            className="font-mono text-[0.62rem] uppercase tracking-[0.16em]"
            style={{ color: "var(--color-ink-faint)" }}
          >
            {label}
          </span>
        </div>
      );
      lastGroup = s.group;
    }

    rendered.push(
      <button
        key={s.id}
        ref={isActive ? activeRef : null}
        type="button"
        onClick={() => onSelect(s.id)}
        aria-current={isActive ? "location" : undefined}
        aria-label={`Section ${s.ordinal}: ${s.label}${meta.subtitle ? ` — ${meta.subtitle}` : ""}`}
        title={meta.subtitle ? `${s.label} — ${meta.subtitle}` : s.label}
        className="group relative flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 transition-all"
        style={{
          scrollSnapAlign: "center",
          background: isActive ? "var(--color-forest)" : tier.bg,
          color: isActive ? "var(--color-paper)" : tier.ink,
          border: isActive
            ? `1.5px solid ${tier.ringActive}`
            : `1px solid ${meta.tier === "ref" ? "var(--color-line-strong)" : "transparent"}`,
          boxShadow: isActive
            ? "0 1px 0 #20171210, 0 8px 22px -10px #0e3b2e80"
            : "none",
          transform: isActive ? "translateY(-1px)" : undefined,
        }}
      >
        {/* Ordinal badge */}
        <span
          className="grid h-5 w-5 place-items-center rounded-full font-mono text-[0.62rem] font-semibold tabular-nums"
          style={{
            background: isActive ? "var(--color-paper)" : "#ffffffcc",
            color: isActive ? "var(--color-forest)" : tier.ink,
          }}
        >
          {s.ordinal}
        </span>
        {/* Tier icon */}
        <Icon
          size={14}
          aria-hidden="true"
          style={{ color: isActive ? "var(--color-paper)" : tier.ink, opacity: 0.85 }}
        />
        {/* Label + subtitle */}
        <span className="flex flex-col items-start leading-none">
          <span className="whitespace-nowrap text-[0.78rem] font-medium leading-tight">
            {s.label}
          </span>
          {meta.subtitle && (
            <span
              className="hidden whitespace-nowrap font-mono text-[0.58rem] uppercase tracking-[0.1em] sm:block"
              style={{
                color: isActive ? "#ffffffb0" : tier.ink,
                opacity: isActive ? 0.85 : 0.6,
                marginTop: 1,
              }}
            >
              {meta.subtitle}
            </span>
          )}
        </span>
      </button>
    );
  });

  return (
    <nav
      data-component="MindMapStrip"
      aria-label="Mind-map section navigation"
      className="sticky z-20"
      style={{
        top: topOffset,
        background: "color-mix(in oklab, var(--color-paper) 92%, transparent)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--color-line-strong)",
      }}
    >
      {/* Mobile-only collapsed view (<lg): a thin row showing the
          active section + a toggle. Hidden on lg+ via CSS. */}
      <div className="flex items-center justify-between gap-2 px-3 py-2 lg:hidden">
        <span
          aria-hidden="true"
          className="flex min-w-0 items-center gap-2 text-[0.78rem] font-medium"
          style={{ color: "var(--color-ink)" }}
        >
          <span
            className="font-mono text-[0.62rem] uppercase tracking-[0.18em] shrink-0"
            style={{ color: "var(--color-ink-faint)" }}
          >
            Section
          </span>
          <span className="truncate">
            {sections.find((s) => s.id === active)?.ordinal}
            {sections.find((s) => s.id === active) ? " · " : ""}
            {sections.find((s) => s.id === active)?.label ?? "—"}
          </span>
        </span>
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Hide all sections" : "Show all sections"}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider transition-colors"
          style={{
            borderColor: "var(--color-line-strong)",
            color: "var(--color-ink-soft)",
            background: "#ffffff80",
          }}
        >
          {mobileOpen ? "Hide" : `All ${sections.length}`}
          {mobileOpen ? <ChevronUp size={12} aria-hidden="true" /> : <ChevronDown size={12} aria-hidden="true" />}
        </button>
      </div>

      {/* Full chip wrap — always visible on lg+; on mobile only when
          mobileOpen is true. */}
      <div
        ref={stripRef}
        className={`${mobileOpen ? "flex" : "hidden"} flex-wrap items-center gap-2 gap-y-2 px-3 py-2.5 sm:px-6 lg:flex lg:px-8`}
      >
        {rendered}
      </div>

      {/* Legend (small print, hidden on narrow viewports). Sets reader
          expectation for the tier-tinted chips above. */}
      <div
        aria-hidden="true"
        className="hidden items-center justify-end gap-3 border-t px-6 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] lg:flex"
        style={{ borderColor: "var(--color-line)", color: "var(--color-ink-faint)" }}
      >
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: TIER_STYLE.action.bg, border: "1px solid var(--color-forest-soft)" }} />
          do today
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: TIER_STYLE.safety.bg, border: "1px solid var(--color-warn)" }} />
          watch for
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: TIER_STYLE.context.bg, border: "1px solid var(--color-line-strong)" }} />
          context
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: TIER_STYLE.ref.bg, border: "1px solid var(--color-line-strong)" }} />
          reference
        </span>
      </div>
    </nav>
  );
}
