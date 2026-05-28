"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Compass, FlaskConical, Sparkles, CalendarHeart, UserRound,
  LineChart, Cpu, Menu, X, Search, Leaf,
} from "lucide-react";

const NAV = [
  { href: "/", label: "Needs", icon: Compass, hint: "Catalog" },
  { href: "/atlas", label: "Atlas", icon: FlaskConical, hint: "50 journeys" },
  { href: "/skin/vitiligo", label: "Vitiligo", icon: Leaf, hint: "Flagship" },
  { href: "/guru", label: "AI Guru", icon: Sparkles, hint: "Workspace" },
  { href: "/companion", label: "Companion", icon: CalendarHeart, hint: "Daily loop" },
  { href: "/expert", label: "Experts", icon: UserRound, hint: "Human charts" },
  { href: "/progress", label: "Progress", icon: LineChart, hint: "Outcomes" },
  { href: "/admin/research-factory", label: "Evidence Factory", icon: Cpu, hint: "Operator" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh lg:grid lg:grid-cols-[248px_1fr]">
      {/* Skip link — visible on keyboard focus only */}
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-[var(--color-forest)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--color-paper)]">
        Skip to content
      </a>
      {/* ── Mobile top bar ── */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b px-4 py-3 backdrop-blur-md lg:hidden"
        style={{ borderColor: "var(--color-line-strong)", background: "#f1ede3cc" }}>
        <Link href="/" className="flex items-center gap-2">
          <Mark />
          <span className="font-display text-lg">NicheCore</span>
        </Link>
        <button onClick={() => setOpen((v) => !v)} aria-label="Menu" className="rounded-full border p-2" style={{ borderColor: "var(--color-line-strong)" }}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {open && (
        <nav aria-label="Primary (mobile)" className="z-30 grid grid-cols-2 gap-2 border-b px-4 py-4 lg:hidden" style={{ borderColor: "var(--color-line-strong)" }}>
          {NAV.map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm"
                style={{
                  background: active ? "var(--color-forest)" : "#ffffff80",
                  color: active ? "var(--color-paper)" : "var(--color-ink)",
                }}>
                <n.icon size={16} aria-hidden="true" /> {n.label}
              </Link>
            );
          })}
        </nav>
      )}

      {/* ── Desktop journey rail ── */}
      <aside className="sticky top-0 hidden h-dvh flex-col border-r px-4 py-6 lg:flex" style={{ borderColor: "var(--color-line-strong)" }}>
        <Link href="/" className="flex items-center gap-2.5 px-2">
          <Mark />
          <div className="leading-tight">
            <div className="font-display text-xl">NicheCore</div>
            <div className="eyebrow !text-[0.6rem]">evidence OS</div>
          </div>
        </Link>

        <nav aria-label="Primary" className="mt-8 flex flex-1 flex-col gap-1">
          {NAV.map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link key={n.href} href={n.href}
                aria-current={active ? "page" : undefined}
                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors"
                style={{
                  background: active ? "var(--color-forest)" : "transparent",
                  color: active ? "var(--color-paper)" : "var(--color-ink-soft)",
                }}>
                <n.icon size={17} aria-hidden="true" className="shrink-0" />
                <span className="flex-1 font-medium">{n.label}</span>
                <span aria-hidden="true" className="font-mono text-[0.6rem] uppercase tracking-wider"
                  style={{ color: active ? "#ffffffb3" : "var(--color-ink-faint)" }}>{n.hint}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-4 rounded-2xl border p-3.5 text-[0.7rem] leading-relaxed" style={{ borderColor: "var(--color-line-strong)", color: "var(--color-ink-faint)" }}>
          Adjunctive natural support. Educational only — never a replacement for your clinician.
        </div>
      </aside>

      {/* ── Content ── */}
      <main id="main" className="relative min-w-0">
        {/* Desktop status bar */}
        <div className="sticky top-0 z-20 hidden items-center justify-between border-b px-8 py-3 backdrop-blur-md lg:flex"
          style={{ borderColor: "var(--color-line-strong)", background: "#f1ede3b3" }}>
          <label className="flex w-80 items-center gap-2 rounded-full border px-4 py-2 text-sm" style={{ borderColor: "var(--color-line-strong)", background: "#ffffff80" }}>
            <Search size={15} aria-hidden="true" style={{ color: "var(--color-ink-faint)" }} />
            <span className="sr-only">Search a need</span>
            <input type="search" placeholder="Search a need — “hair loss”, “my sugar is high”…" className="w-full bg-transparent outline-none placeholder:text-[var(--color-ink-faint)]" />
          </label>
          <div className="flex items-center gap-2">
            <span className="chip"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-mint-ink)" }} />evidence refreshed · may 2026</span>
            <Link href="/guru" className="btn-primary !py-2 !text-[0.82rem]"><Sparkles size={15} /> Ask the Guru</Link>
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}

function Mark() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: "var(--color-forest)" }}>
      <Leaf size={18} style={{ color: "var(--color-paper)" }} />
    </span>
  );
}
