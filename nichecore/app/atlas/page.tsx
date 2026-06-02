"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { journeys, DOMAIN_LABELS } from "@/lib/data";
import { Eyebrow, GradeBadge, FreshnessChip } from "@/components/ui";
import { EVIDENCE_GRADES, GRADE_ORDER } from "@/lib/evidence";

const DOMAINS = ["All", ...Object.keys(DOMAIN_LABELS)] as const;

export default function Atlas() {
  const [domain, setDomain] = useState<string>("All");
  const [legendOpen, setLegendOpen] = useState<boolean>(false);
  const list = domain === "All" ? journeys : journeys.filter((j) => j.domain === domain);

  return (
    <div className="grain relative pb-20">
      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        <Eyebrow>The journey atlas</Eyebrow>
        <h1 className="font-display mt-4 text-balance text-5xl leading-[1.0] sm:text-6xl">
          Every need, one <span className="italic" style={{ color: "var(--color-forest)" }}>repeatable</span> factory.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          Every journey runs the same loop — evidence hub, graded protocol, quality package, companion —
          across ten domains. The five launch categories go deep first; the rest are the roadmap.
        </p>

        {/* What do the colored grade pills on each card mean? Always-visible
            one-line legend with a click-to-expand details panel. Lives here
            at the point of use so users don't have to hunt for it. */}
        <div className="mt-8 rounded-2xl border bg-white/70 p-4"
          style={{ borderColor: "var(--color-line-strong)" }}>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em]"
              style={{ color: "var(--color-ink-faint)" }}>
              Evidence grades on each card
            </span>
            <div className="flex flex-wrap gap-1.5">
              {GRADE_ORDER.map((g) => <GradeBadge key={g} grade={g} withLabel />)}
            </div>
            <button
              type="button"
              onClick={() => setLegendOpen((v) => !v)}
              className="ml-auto rounded-full border px-3 py-1 text-[0.75rem] transition-colors hover:bg-[var(--color-paper-deep)]"
              style={{ borderColor: "var(--color-line-strong)", color: "var(--color-ink-soft)" }}
              aria-expanded={legendOpen}
            >
              {legendOpen ? "Hide details" : "What do these mean?"}
            </button>
          </div>
          {legendOpen && (
            <dl className="mt-4 grid gap-2 sm:grid-cols-2">
              {GRADE_ORDER.map((g) => (
                <div key={g} className="flex items-start gap-2.5">
                  <dt className="shrink-0"><GradeBadge grade={g} /></dt>
                  <dd className="text-[0.82rem] leading-snug" style={{ color: "var(--color-ink-soft)" }}>
                    <span className="font-medium" style={{ color: "var(--color-ink)" }}>
                      {EVIDENCE_GRADES[g].label}.
                    </span>{" "}
                    {EVIDENCE_GRADES[g].consumer}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {/* Domain filter */}
        <div className="mt-6 flex flex-wrap gap-2">
          {DOMAINS.map((d) => {
            const active = domain === d;
            const count = d === "All" ? journeys.length : journeys.filter((j) => j.domain === d).length;
            return (
              <button key={d} onClick={() => setDomain(d)}
                className="rounded-full border px-3.5 py-1.5 text-[0.82rem] transition-colors"
                style={{
                  background: active ? "var(--color-forest)" : "#ffffff80",
                  color: active ? "var(--color-paper)" : "var(--color-ink)",
                  borderColor: active ? "var(--color-forest)" : "var(--color-line-strong)",
                }}>
                {d === "All" ? "All" : DOMAIN_LABELS[d]} <span className="font-mono text-[0.7rem] opacity-60">{count}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="atlas-results" className="px-6 pt-10 sm:px-10 lg:px-14">
        <h2 id="atlas-results" className="sr-only">
          {domain === "All" ? "All journeys" : `${DOMAIN_LABELS[domain]} journeys`} — {list.length} result{list.length === 1 ? "" : "s"}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((j) => (
            <Link key={j.id} href={j.route} className="card-soft group flex flex-col p-5 transition-transform duration-500 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[0.62rem] uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>{DOMAIN_LABELS[j.domain]}</span>
                <FreshnessChip status={j.freshness} />
              </div>
              <h3 className="font-display mt-3 text-xl leading-tight">{j.name}</h3>
              <p className="mt-2 text-[0.84rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{j.consumerHook}</p>
              <p className="mt-3 text-[0.78rem] leading-relaxed" style={{ color: "var(--color-ink-faint)" }}>{j.packageConcept}</p>
              <div className="mt-auto flex items-center justify-between gap-2 border-t pt-3.5" style={{ borderColor: "var(--color-line)" }}>
                <div className="flex gap-1.5">{j.gradeMix.map((g) => <GradeBadge key={g} grade={g} />)}</div>
                <ArrowUpRight size={15} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
