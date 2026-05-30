import { CircleCheck, Repeat } from "lucide-react";
import type { Bundle } from "@/lib/types";
import { GradeBadge } from "@/components/ui";

/**
 * ConfirmCard — used by /checkout/confirm to surface the chosen pack,
 * the cadence, and a line-by-line item list. No payment is taken; this
 * is a soft-confirmation that prepares the companion onboarding.
 */
export function ConfirmCard({
  bundle,
  isSub,
  tier,
}: {
  bundle: Bundle;
  isSub: boolean;
  tier?: string;
}) {
  const price = isSub ? bundle.subscriptionPrice : bundle.price;
  const savings = isSub ? bundle.price - bundle.subscriptionPrice : 0;

  return (
    <article
      className="card-soft overflow-hidden"
      data-component="ConfirmCard"
      data-bundle={bundle.id}
    >
      <header className="flex flex-wrap items-start justify-between gap-4 p-6 sm:p-7">
        <div>
          <p className="eyebrow">Order summary</p>
          <h2 className="font-display mt-2 text-3xl leading-tight sm:text-4xl">
            {bundle.name}
          </h2>
          <p
            className="mt-3 max-w-md text-[0.9rem] leading-relaxed"
            style={{ color: "var(--color-ink-soft)" }}
          >
            {bundle.summary}
          </p>
          <div
            className="mt-3 flex flex-wrap items-center gap-3 text-[0.78rem]"
            style={{ color: "var(--color-ink-faint)" }}
          >
            <span>{bundle.duration} pack</span>
            {tier && <span>· {tier} tier</span>}
            <span className="inline-flex items-center gap-1">
              <Repeat size={11} />{" "}
              {isSub ? `subscription · refills every ${bundle.duration}` : "one-time order"}
            </span>
          </div>
        </div>

        <div className="text-right">
          <div
            className="font-display text-5xl leading-none"
            style={{ color: "var(--color-gold-deep)" }}
          >
            ${price}
          </div>
          {savings > 0 && (
            <p
              className="mt-2 text-[0.78rem]"
              style={{ color: "var(--color-ok)" }}
            >
              Save ${savings}/cycle vs one-time
            </p>
          )}
        </div>
      </header>

      <div className="border-t" style={{ borderColor: "var(--color-line)" }}>
        {bundle.products.map((p) => (
          <div
            key={p.name}
            className="flex flex-wrap items-center justify-between gap-3 border-b px-6 py-3.5 last:border-b-0"
            style={{ borderColor: "var(--color-line)" }}
          >
            <div className="min-w-0">
              <div className="font-medium">{p.name}</div>
              <div
                className="text-[0.74rem]"
                style={{ color: "var(--color-ink-faint)" }}
              >
                {p.role} · {p.format} · ${p.price}
              </div>
            </div>
            <GradeBadge grade={p.evidenceGrade} />
          </div>
        ))}
      </div>

      <div
        className="flex flex-wrap items-center gap-x-4 gap-y-1 px-6 py-4 text-[0.78rem]"
        style={{
          background: "var(--color-paper-deep)",
          color: "var(--color-ink-soft)",
        }}
      >
        {bundle.includes.map((inc) => (
          <span key={inc} className="inline-flex items-center gap-1.5">
            <CircleCheck size={12} style={{ color: "var(--color-forest-soft)" }} /> {inc}
          </span>
        ))}
      </div>
    </article>
  );
}
