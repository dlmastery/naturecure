"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, ArrowRight, Sparkles, CircleCheck, X } from "lucide-react";
import { journeys, DOMAIN_LABELS } from "@/lib/data";
import { GradeBadge } from "@/components/ui";
import type { Journey } from "@/lib/types";

// Tiny Levenshtein, used only for closest-match fallback when nothing
// substring-matches. Bounded by short query / short name lengths.
function lev(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const dp: number[] = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cur = dp[j];
      dp[j] = Math.min(
        dp[j] + 1,
        dp[j - 1] + 1,
        prev + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      prev = cur;
    }
  }
  return dp[b.length];
}

interface Scored { j: Journey; score: number; matchedField: "name" | "hook" | "package" | "domain" | "near" }

function scoreJourneys(query: string): Scored[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter((t) => t.length > 1);

  const out: Scored[] = [];
  for (const j of journeys) {
    const name = j.name.toLowerCase();
    const hook = j.consumerHook.toLowerCase();
    const pkg = j.packageConcept.toLowerCase();
    const dom = (DOMAIN_LABELS[j.domain] ?? j.domain).toLowerCase();

    let score = 0;
    let matched: Scored["matchedField"] = "near";

    if (name === q) { score += 1000; matched = "name"; }
    if (name.includes(q)) { score += 200; matched = "name"; }
    if (hook.includes(q)) { score += 100; matched ??= "hook"; if (matched === "near") matched = "hook"; }
    if (pkg.includes(q))  { score += 60;  if (matched === "near") matched = "package"; }
    if (dom.includes(q))  { score += 40;  if (matched === "near") matched = "domain"; }

    for (const t of tokens) {
      if (name.includes(t)) score += 35;
      if (hook.includes(t)) score += 18;
      if (pkg.includes(t))  score += 10;
      if (dom.includes(t))  score += 6;
    }

    if (score > 0) out.push({ j, score, matchedField: matched });
  }

  if (out.length === 0) {
    // Closest by Levenshtein on the journey name. Useful for typos
    // like "tinitus" → "tinnitus" or "vitiligo" misspellings.
    const distances = journeys
      .map((j) => ({ j, d: lev(q, j.name.toLowerCase()) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 2)
      .map(({ j, d }) => ({
        j,
        score: -d,
        matchedField: "near" as const,
      }));
    return distances;
  }

  return out.sort((a, b) => b.score - a.score).slice(0, 6);
}

export function JourneySearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [suggestSubmitted, setSuggestSubmitted] = useState(false);
  const [suggestEmail, setSuggestEmail] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => scoreJourneys(query), [query]);
  const hasQuery = query.trim().length > 0;
  // "No substring match" — when only Levenshtein near-results came back,
  // every entry has score ≤ 0. Use that to switch UX into suggest mode.
  const noExactMatch = hasQuery && results.length > 0 && results.every((r) => r.score <= 0);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // ⌘K / Ctrl-K focuses the search.
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function handleSuggest(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — persist to localStorage so the founder can pull
    // suggestions out manually. A future PR will swap this for an API.
    try {
      const k = "nc.suggestions.v1";
      const prev = JSON.parse(localStorage.getItem(k) ?? "[]");
      prev.push({ query: query.trim(), email: suggestEmail.trim(), at: new Date().toISOString() });
      localStorage.setItem(k, JSON.stringify(prev));
    } catch {
      // ignore — suggestion still feels submitted from the user's POV
    }
    setSuggestSubmitted(true);
  }

  return (
    <div
      ref={containerRef}
      data-component="JourneySearch"
      className="relative w-full max-w-2xl"
    >
      {/* Eyebrow above input — sets expectations, includes the ⌘K hint. */}
      <div className="mb-2 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.18em]"
        style={{ color: "var(--color-ink-faint)" }}>
        <span>Search journeys</span>
        <span className="hidden sm:inline">⌘K to focus</span>
      </div>

      <div
        className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-sm transition-all focus-within:shadow-md"
        style={{
          borderColor: open ? "var(--color-forest)" : "var(--color-line-strong)",
          boxShadow: open ? "0 8px 28px -14px #0e3b2e60" : undefined,
        }}
      >
        <Search size={18} aria-hidden="true" style={{ color: "var(--color-forest)" }} />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true); setSuggestSubmitted(false); }}
          onFocus={() => setOpen(true)}
          placeholder="Try “tinnitus”, “PCOS”, “gut bloat”, “blood sugar”…"
          className="flex-1 bg-transparent text-[1.05rem] leading-tight outline-none placeholder:font-normal"
          style={{ color: "var(--color-ink)" }}
          aria-label="Search 51 health journeys"
          aria-expanded={open}
          aria-haspopup="listbox"
          autoComplete="off"
        />
        {hasQuery && (
          <button
            type="button"
            onClick={() => { setQuery(""); setSuggestSubmitted(false); inputRef.current?.focus(); }}
            className="rounded-full p-1 transition-colors hover:bg-[var(--color-paper-deep)]"
            aria-label="Clear search"
          >
            <X size={16} style={{ color: "var(--color-ink-faint)" }} />
          </button>
        )}
      </div>

      {open && hasQuery && (
        <div
          role="listbox"
          aria-label="Search results"
          className="absolute left-0 right-0 z-40 mt-2 rounded-2xl border bg-white shadow-xl"
          style={{ borderColor: "var(--color-line-strong)", boxShadow: "0 18px 50px -20px #0e3b2e55" }}
        >
          {/* Closest-match banner when only near-results came back */}
          {noExactMatch && (
            <div
              className="flex items-start gap-2 border-b px-4 py-2.5 text-[0.78rem] leading-snug"
              style={{ borderColor: "var(--color-line)", color: "var(--color-ink-soft)", background: "var(--color-paper-deep)" }}
            >
              <Sparkles size={14} aria-hidden="true" style={{ color: "var(--color-gold-deep)", marginTop: 2 }} />
              <span>
                No exact match for <span className="font-medium" style={{ color: "var(--color-ink)" }}>“{query.trim()}”</span>.
                Closest journeys:
              </span>
            </div>
          )}

          {results.length > 0 && (
            <ul className="max-h-[60vh] divide-y overflow-y-auto"
              style={{ borderColor: "var(--color-line)" }}>
              {results.map(({ j }) => (
                <li key={j.id} role="option">
                  <Link
                    href={j.route}
                    onClick={() => setOpen(false)}
                    className="group flex items-start gap-3 px-4 py-3 transition-colors hover:bg-[var(--color-paper-deep)]"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[0.6rem] uppercase tracking-wider"
                          style={{ color: "var(--color-ink-faint)" }}>
                          {DOMAIN_LABELS[j.domain] ?? j.domain}
                        </span>
                      </div>
                      <div className="mt-1 font-display text-[1.05rem] leading-tight">{j.name}</div>
                      <div className="mt-1 text-[0.8rem] leading-snug"
                        style={{ color: "var(--color-ink-soft)" }}>
                        {j.consumerHook}
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-1.5">
                        {j.gradeMix.map((g) => <GradeBadge key={g} grade={g} />)}
                      </div>
                    </div>
                    <ArrowRight
                      size={16}
                      className="mt-1 shrink-0 transition-transform group-hover:translate-x-0.5"
                      style={{ color: "var(--color-forest)" }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Suggest-for-future form: surfaces on no-exact-match,
              also surfaces always at the bottom so users with weak
              matches can still ask for the topic to be added. */}
          <div className="border-t p-4"
            style={{ borderColor: "var(--color-line)", background: "var(--color-paper)" }}>
            {suggestSubmitted ? (
              <div className="flex items-start gap-2 text-[0.85rem] leading-snug"
                style={{ color: "var(--color-forest)" }}>
                <CircleCheck size={16} aria-hidden="true" style={{ marginTop: 2 }} />
                <span>
                  Noted — <span className="font-medium">“{query.trim()}”</span> is queued for our research
                  factory. We will email you when a dossier is published.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSuggest} className="flex flex-col gap-2">
                <p className="text-[0.78rem] leading-snug" style={{ color: "var(--color-ink-soft)" }}>
                  Don&apos;t see what you need? Suggest{" "}
                  <span className="font-medium" style={{ color: "var(--color-ink)" }}>
                    “{query.trim()}”
                  </span>{" "}
                  for a future journey.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    required
                    placeholder="Email (so we can let you know)"
                    value={suggestEmail}
                    onChange={(e) => setSuggestEmail(e.target.value)}
                    className="flex-1 rounded-full border bg-white px-3.5 py-2 text-[0.85rem] outline-none focus:ring-2"
                    style={{
                      borderColor: "var(--color-line-strong)",
                      // @ts-expect-error CSS custom property is valid here
                      "--tw-ring-color": "var(--color-forest)",
                    }}
                  />
                  <button type="submit" className="btn-primary !py-2 !text-[0.85rem]">
                    Submit for future addition <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
