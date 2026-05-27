import Link from "next/link";
import { ShieldCheck, Repeat, ArrowRight } from "lucide-react";
import type { Bundle } from "@/lib/types";
import { GradeBadge } from "@/components/ui";

export function QualityMeter({ score }: { score: number }) {
  return (
    <span className="inline-flex items-center gap-1.5" title={`Product quality score ${score}/100 — testing & sourcing, NOT efficacy`}>
      <span className="font-mono text-[0.62rem] uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>quality</span>
      <span className="relative h-1.5 w-12 overflow-hidden rounded-full" style={{ background: "var(--color-line-strong)" }}>
        <span className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${score}%`, background: "var(--color-forest-soft)" }} />
      </span>
      <span className="font-mono text-[0.68rem]" style={{ color: "var(--color-ink-soft)" }}>{score}</span>
    </span>
  );
}

export function BundleCard({ bundle, ctaHref }: { bundle: Bundle; ctaHref?: string }) {
  return (
    <div className="card-soft overflow-hidden">
      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          <p className="eyebrow">{bundle.duration} · curated package</p>
          <h3 className="font-display mt-2 text-2xl leading-tight">{bundle.name}</h3>
          <p className="mt-2 max-w-md text-[0.85rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{bundle.summary}</p>
        </div>
        <div className="text-right">
          <div className="font-display text-3xl leading-none" style={{ color: "var(--color-gold-deep)" }}>${bundle.price}</div>
          <div className="mt-1 inline-flex items-center gap-1 font-mono text-[0.62rem] uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>
            <Repeat size={11} /> ${bundle.subscriptionPrice}/refill
          </div>
        </div>
      </div>

      {/* Products — every item maps to a role, an evidence grade AND a separate quality score */}
      <div className="border-t" style={{ borderColor: "var(--color-line)" }}>
        {bundle.products.map((p) => (
          <div key={p.name} className="flex flex-wrap items-center justify-between gap-3 border-b px-6 py-3.5 last:border-b-0" style={{ borderColor: "var(--color-line)" }}>
            <div className="min-w-0">
              <div className="font-medium">{p.name}</div>
              <div className="text-[0.74rem]" style={{ color: "var(--color-ink-faint)" }}>{p.role} · {p.format} · ${p.price}</div>
            </div>
            <div className="flex items-center gap-3">
              <QualityMeter score={p.qualityScore} />
              <GradeBadge grade={p.evidenceGrade} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 p-6">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[0.74rem]" style={{ color: "var(--color-ink-soft)" }}>
          {bundle.includes.map((inc) => <span key={inc} className="flex items-center gap-1.5"><ShieldCheck size={13} style={{ color: "var(--color-forest-soft)" }} /> {inc}</span>)}
        </div>
        <Link href={ctaHref ?? "/companion"} className="btn-primary !py-2.5">Start the regime <ArrowRight size={15} /></Link>
      </div>
    </div>
  );
}
