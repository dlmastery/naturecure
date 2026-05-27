"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { journeys, DOMAIN_LABELS } from "@/lib/data";
import { Eyebrow, GradeBadge, FreshnessChip } from "@/components/ui";

const DOMAINS = ["All", ...Object.keys(DOMAIN_LABELS)] as const;

export default function Atlas() {
  const [domain, setDomain] = useState<string>("All");
  const list = domain === "All" ? journeys : journeys.filter((j) => j.domain === domain);

  return (
    <div className="grain relative pb-20">
      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        <Eyebrow>The journey atlas</Eyebrow>
        <h1 className="font-display mt-4 text-balance text-5xl leading-[1.0] sm:text-6xl">
          Fifty needs, one <span className="italic" style={{ color: "var(--color-forest)" }}>repeatable</span> factory.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          Every journey runs the same loop — evidence hub, graded protocol, quality package, companion —
          across ten domains. The five launch categories go deep first; the rest are the roadmap.
        </p>

        {/* Domain filter */}
        <div className="mt-8 flex flex-wrap gap-2">
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

      <section className="px-6 pt-10 sm:px-10 lg:px-14">
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
