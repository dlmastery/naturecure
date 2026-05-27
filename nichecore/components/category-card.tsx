import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ACCENTS } from "@/lib/evidence";
import { GradeBadge, RiskTag } from "@/components/ui";
import type { Category } from "@/lib/types";

export function CategoryCard({ category, index = 0 }: { category: Category; index?: number }) {
  const accent = ACCENTS[category.accent];
  const grades = Array.from(new Set(category.claims.map((c) => c.grade)));
  return (
    <Link
      href={`/c/${category.id}`}
      className="card-soft rise group relative flex flex-col overflow-hidden p-0 transition-transform duration-500 hover:-translate-y-1"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <div className="flex items-start justify-between px-5 pt-5">
        <div className="rounded-full px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider"
          style={{ background: accent.fill, color: accent.ink }}>
          {category.shortName}
        </div>
        <span className="font-display text-2xl leading-none" style={{ color: "var(--color-gold-deep)" }}>
          {String(category.rank).padStart(2, "0")}
        </span>
      </div>

      <div className="px-5 pb-5 pt-4">
        <h3 className="font-display text-xl leading-tight">{category.name}</h3>
        <p className="mt-2 text-[0.85rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          {category.promise}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 border-t px-5 py-3.5"
        style={{ borderColor: "var(--color-line)" }}>
        <div className="flex items-center gap-1.5">
          {grades.slice(0, 3).map((g) => <GradeBadge key={g} grade={g} />)}
        </div>
        <RiskTag risk={category.risk} />
      </div>

      <div className="flex items-center justify-between border-t px-5 py-3 text-[0.7rem]"
        style={{ borderColor: "var(--color-line)", color: "var(--color-ink-faint)" }}>
        <span className="font-mono">protocol · package · companion</span>
        <ArrowUpRight size={15} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
