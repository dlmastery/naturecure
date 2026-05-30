import { CircleCheck, Repeat } from "lucide-react";
import type { Bundle } from "@/lib/types";
import { GradeBadge } from "@/components/ui";
import { QualityStrip, type QualityCell } from "@/components/quality-strip";

/**
 * NinetyDayPackCard — replaces the editorial BundleCard inside the package
 * wizard. Giant serif "$229 / 90 days" + bottle grid + 4-cell quality strip.
 *
 * Props:
 *  - bundle: the curated pack
 *  - isSub: whether the subscription price is shown
 *  - tier: optional tier label (Starter / Core / Premium) appended to header
 *  - strip: optional override; defaults to a sensible 4-cell quality strip
 */
export function NinetyDayPackCard({
  bundle,
  isSub,
  tier,
  strip,
}: {
  bundle: Bundle;
  isSub: boolean;
  tier?: "starter" | "core" | "premium";
  strip?: QualityCell[];
}) {
  const price = isSub ? bundle.subscriptionPrice : bundle.price;
  const cells: QualityCell[] = strip ?? [
    {
      eyebrow: "Standardisation",
      value: "Active compound %",
    },
    {
      eyebrow: "Third-party tested",
      value: "Heavy metals · microbes",
    },
    {
      eyebrow: "Sourcing",
      value: bundle.products[0]?.supplier ?? "Verified reseller",
    },
    {
      eyebrow: "Refill cadence",
      value: isSub ? `Every ${bundle.duration}` : "One-time",
    },
  ];

  return (
    <article
      className="card-soft overflow-hidden"
      data-component="NinetyDayPackCard"
      data-bundle={bundle.id}
    >
      <header className="grid gap-5 p-6 sm:grid-cols-[1.1fr_1fr] sm:gap-6 sm:p-7">
        <div>
          <p className="eyebrow">
            {bundle.duration} pack
            {tier ? <> · {tier} tier</> : null}
          </p>
          <h3 className="font-display mt-2 text-3xl leading-[1.05] sm:text-4xl">
            {bundle.name}
          </h3>
          <p
            className="mt-3 max-w-md text-[0.92rem] leading-relaxed"
            style={{ color: "var(--color-ink-soft)" }}
          >
            {bundle.summary}
          </p>
          <span
            className="chip mt-4"
            style={{ color: "var(--color-mint-ink)" }}
          >
            <CircleCheck size={13} /> safety cleared
          </span>
        </div>

        <div className="flex flex-col items-start sm:items-end">
          <div
            className="font-display text-5xl leading-none sm:text-6xl"
            style={{ color: "var(--color-gold-deep)" }}
          >
            ${price}
          </div>
          <div
            className="mt-2 inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-wider"
            style={{ color: "var(--color-ink-faint)" }}
          >
            <Repeat size={11} /> {isSub ? "subscription · pause anytime" : "one-time"}
          </div>
          {isSub && bundle.price > bundle.subscriptionPrice && (
            <p
              className="mt-1 text-[0.78rem]"
              style={{ color: "var(--color-ok)" }}
            >
              Save ${bundle.price - bundle.subscriptionPrice}/cycle vs one-time
            </p>
          )}
        </div>
      </header>

      {/* 2-up bottle grid */}
      <div
        className="grid border-t sm:grid-cols-2"
        style={{ borderColor: "var(--color-line)" }}
      >
        {bundle.products.map((p, i) => (
          <BottleCell
            key={p.name}
            ordinal={`L${String(i + 1).padStart(2, "0")}`}
            label={p.role}
            name={p.name}
            spec={`${p.format} · $${p.price}`}
            grade={p.evidenceGrade}
          />
        ))}
      </div>

      <QualityStrip cells={cells} />
    </article>
  );
}

function BottleCell({
  ordinal,
  label,
  name,
  spec,
  grade,
}: {
  ordinal: string;
  label: string;
  name: string;
  spec: string;
  grade: import("@/lib/types").EvidenceGrade;
}) {
  return (
    <div
      className="flex flex-col gap-2 border-t border-l-0 px-5 py-4 sm:border-t-0 sm:border-l"
      style={{ borderColor: "var(--color-line)" }}
    >
      <div className="flex items-center justify-between">
        <span
          className="font-mono text-[0.7rem] uppercase tracking-wider"
          style={{ color: "var(--color-gold-deep)" }}
        >
          {ordinal} · {label}
        </span>
        <GradeBadge grade={grade} />
      </div>
      <h4 className="font-display text-[1.05rem] leading-tight">{name}</h4>
      <p
        className="font-mono text-[0.7rem] uppercase tracking-wider"
        style={{ color: "var(--color-ink-faint)" }}
      >
        {spec}
      </p>
    </div>
  );
}
