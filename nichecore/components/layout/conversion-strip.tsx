import Link from "next/link";
import {
  ArrowRight, ShoppingBag, ShieldCheck, RefreshCw, UserRound,
  Calendar, ListChecks, Clock, Sparkles, Package, BadgeCheck,
} from "lucide-react";
import type { Bundle, Journey } from "@/lib/types";
import { GradeBadge } from "@/components/ui";

/**
 * ConversionStrip — the buy-decision surface that sits below the
 * TopShelf and above the full dossier sections. Designed to convert a
 * "reading the protocol" reader into a "buying the regime" customer
 * without forcing them to scroll three viewports to find the buy CTA.
 *
 * Layout: one prominent "Get the pack" hero card (forest/gold accent)
 * + a 2x3 grid of supporting cards that pre-empt the friction points
 * most likely to kill the sale (Amazon leakage, risk-fear, credibility
 * gap, outcomes anxiety, fit uncertainty, doctor-approval anxiety).
 *
 * The strip is intentionally bundle-aware: if the journey has no
 * bundle (e.g., a journey on the roadmap), the whole strip is
 * suppressed and the reader sees the next-step CTA at the bottom
 * of the page as before.
 */

export interface ConversionStripProps {
  journey: Journey;
  bundle: Bundle;
  packageHref: string;
  reviewer?: { name: string; role: string; credential: string };
  lastRefresh?: string;
}

export function ConversionStrip({
  journey,
  bundle,
  packageHref,
  reviewer = {
    name: "Dr. Meera Iyer",
    role: "Ayurveda protocol reviewer",
    credential: "BAMS · 12 yrs clinical Ayurveda · Bengaluru",
  },
  lastRefresh = "June 1, 2026",
}: ConversionStripProps) {
  const monthlyPrice = bundle.subscriptionPrice;
  const oneTimePrice = bundle.price;
  const productCount = bundle.products.length;
  // Quick aggregate signal: grade mix across products in this bundle.
  const gradeBuckets = new Map<string, number>();
  for (const p of bundle.products) {
    gradeBuckets.set(p.evidenceGrade, (gradeBuckets.get(p.evidenceGrade) ?? 0) + 1);
  }
  const gradeChips = Array.from(gradeBuckets.entries())
    .sort(([a], [b]) => a.localeCompare(b));

  return (
    <section
      data-component="ConversionStrip"
      aria-labelledby="conversion-headline"
      className="px-5 pt-8 sm:px-8 lg:px-14"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-5 flex items-center justify-between">
          <p
            className="font-mono text-[0.62rem] uppercase tracking-[0.18em]"
            style={{ color: "var(--color-ink-faint)" }}
          >
            Decision point · ready when you are
          </p>
          <span
            className="inline-flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-wider"
            style={{ color: "var(--color-ink-faint)" }}
          >
            <RefreshCw size={11} aria-hidden="true" />
            Refreshed {lastRefresh}
          </span>
        </div>

        {/* ───────── Hero buy card (full-width) ───────── */}
        <div
          id="conversion-headline"
          data-conversion-card="hero"
          className="overflow-hidden rounded-3xl border"
          style={{
            background: "linear-gradient(135deg, var(--color-paper) 0%, var(--color-paper-deep) 100%)",
            borderColor: "var(--color-line-strong)",
            boxShadow: "0 18px 48px -22px #0e3b2e30",
          }}
        >
          <div className="grid items-stretch lg:grid-cols-[1.45fr_1fr]">
            {/* Left: pack name + pitch + products + buy CTAs */}
            <div className="px-7 py-7 sm:px-10 sm:py-9">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 place-items-center rounded-xl"
                  style={{ background: "var(--color-forest)", color: "var(--color-paper)" }}
                >
                  <Package size={17} />
                </span>
                <p
                  className="font-mono text-[0.7rem] uppercase tracking-[0.18em]"
                  style={{ color: "var(--color-gold-deep)" }}
                >
                  Your regime · {bundle.duration}
                </p>
              </div>
              <h3 className="font-display mt-3 text-balance text-3xl leading-tight sm:text-4xl">
                {bundle.name}
              </h3>
              <p className="mt-3 max-w-xl text-[0.94rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                {bundle.summary}
              </p>

              {/* Mini product list with brand + grade */}
              <ul className="mt-5 flex flex-col gap-1.5">
                {bundle.products.slice(0, 5).map((p) => (
                  <li
                    key={p.name}
                    className="flex items-start gap-2.5 text-[0.85rem]"
                    style={{ color: "var(--color-ink)" }}
                  >
                    <BadgeCheck
                      size={14}
                      aria-hidden="true"
                      className="mt-[3px] shrink-0"
                      style={{ color: "var(--color-forest)" }}
                    />
                    <span className="flex-1">
                      <span className="font-medium">{p.name}</span>{" "}
                      <span style={{ color: "var(--color-ink-faint)" }}>·</span>{" "}
                      <span style={{ color: "var(--color-ink-faint)" }}>{p.role}</span>
                    </span>
                    <GradeBadge grade={p.evidenceGrade} />
                  </li>
                ))}
              </ul>

              {/* Buy CTAs */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href={packageHref} className="btn-primary">
                  Get the pack <ArrowRight size={16} />
                </Link>
                <Link
                  href={packageHref}
                  className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[0.86rem] font-medium transition-colors hover:bg-white"
                  style={{ borderColor: "var(--color-line-strong)", color: "var(--color-ink)" }}
                >
                  <ListChecks size={14} aria-hidden="true" />
                  90-second safety check
                </Link>
              </div>
              <p className="mt-3 text-[0.74rem]" style={{ color: "var(--color-ink-faint)" }}>
                4 questions screens for medication interactions, pregnancy and red-flag conditions before checkout.
              </p>
            </div>

            {/* Right: price column + risk reversal */}
            <div
              className="flex flex-col justify-between gap-5 border-t px-7 py-7 sm:px-9 sm:py-9 lg:border-l lg:border-t-0"
              style={{
                background: "#ffffff80",
                borderColor: "var(--color-line-strong)",
              }}
            >
              <div>
                <p
                  className="font-mono text-[0.62rem] uppercase tracking-[0.18em]"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  Subscribe & save
                </p>
                <p className="font-display mt-1.5 text-5xl leading-none" style={{ color: "var(--color-forest)" }}>
                  ${monthlyPrice}
                  <span className="text-base font-normal" style={{ color: "var(--color-ink-faint)" }}>
                    {" "}/ {bundle.duration}
                  </span>
                </p>
                <p className="mt-2 text-[0.78rem]" style={{ color: "var(--color-ink-soft)" }}>
                  One-time order: <span className="font-medium" style={{ color: "var(--color-ink)" }}>${oneTimePrice}</span> ·{" "}
                  <span className="font-medium" style={{ color: "var(--color-forest)" }}>
                    save ${oneTimePrice - monthlyPrice}
                  </span>{" "}
                  on subscription
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {gradeChips.map(([grade, count]) => (
                    <span
                      key={grade}
                      className="font-mono text-[0.65rem]"
                      style={{ color: "var(--color-ink-faint)" }}
                    >
                      <GradeBadge grade={grade as "A" | "B" | "C" | "D" | "T" | "H" | "X"} />
                      <span className="ml-1">× {count}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Risk reversal mini-list */}
              <ul className="flex flex-col gap-2 text-[0.78rem]" style={{ color: "var(--color-ink)" }}>
                <li className="flex items-start gap-2">
                  <ShieldCheck size={13} aria-hidden="true" className="mt-[3px] shrink-0" style={{ color: "var(--color-forest)" }} />
                  <span>
                    <span className="font-medium">30-day return</span> on unopened items
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock size={13} aria-hidden="true" className="mt-[3px] shrink-0" style={{ color: "var(--color-forest)" }} />
                  <span>
                    <span className="font-medium">Pause or cancel</span> anytime · no contract
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ───────── Supporting card grid ───────── */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* First 30 days expectation */}
          <SupportCard
            tone="amber"
            icon={Sparkles}
            eyebrow="Honest outcomes"
            title="What to expect — first 30 days"
            bullets={[
              "Days 1–7: half-dose ramp + baseline self-scoring on your tracked metric. First protocol habit tonight.",
              "Week 2–4: early signals usually appear (sleep, mood, energy, comfort — what surfaces first depends on your condition).",
              "Day 30: meaningful change in your tracked metric. If not, the safety check routes you to a credentialed expert before refills.",
            ]}
          />

          {/* What you actually do each day */}
          <SupportCard
            tone="sky"
            icon={Clock}
            eyebrow="Habit feasibility"
            title="~10–15 minutes of effort a day"
            bullets={[
              `Morning: ${Math.min(2, Math.ceil(productCount / 2))} supplements with breakfast. About 30 seconds.`,
              `Evening: ${Math.min(2, Math.floor(productCount / 2))} supplements after dinner + the protocol's breath or movement practice. 5–7 minutes.`,
              "Night: the wind-down routine specific to your condition (sound, stretch, lighting, or breath). 5 minutes.",
            ]}
          />

          {/* Talk to your doctor */}
          <SupportCard
            tone="paper"
            icon={UserRound}
            eyebrow="Coordination"
            title="A 3-line script for your clinician"
            bullets={[
              `"I'm starting an evidence-graded adjunct protocol for ${journey.name.toLowerCase()}."`,
              `"It's OTC-only and includes ${productCount} supplements. Here's the interaction matrix."`,
              `"It's an adjunct to anything you prescribe, not a replacement. May I share the dossier with you?"`,
            ]}
          />
        </div>
      </div>
    </section>
  );
}

interface SupportCardProps {
  tone: "ok" | "forest" | "amber" | "sky" | "paper" | "mint";
  icon: React.ComponentType<{ size?: number; "aria-hidden"?: boolean; style?: React.CSSProperties }>;
  eyebrow: string;
  title: string;
  bullets: string[];
}

const TONE_STYLE: Record<
  SupportCardProps["tone"],
  { accent: string; iconBg: string; iconInk: string; bg: string }
> = {
  ok: {
    accent: "var(--color-mint-ink)",
    iconBg: "var(--color-mint)",
    iconInk: "var(--color-mint-ink)",
    bg: "var(--color-paper)",
  },
  forest: {
    accent: "var(--color-forest)",
    iconBg: "var(--color-forest)",
    iconInk: "var(--color-paper)",
    bg: "var(--color-paper)",
  },
  amber: {
    accent: "var(--color-amber-ink)",
    iconBg: "var(--color-amber)",
    iconInk: "var(--color-amber-ink)",
    bg: "var(--color-paper)",
  },
  sky: {
    accent: "var(--color-sky-ink)",
    iconBg: "var(--color-sky)",
    iconInk: "var(--color-sky-ink)",
    bg: "var(--color-paper)",
  },
  paper: {
    accent: "var(--color-ink-faint)",
    iconBg: "var(--color-paper-deep)",
    iconInk: "var(--color-ink-soft)",
    bg: "var(--color-paper)",
  },
  mint: {
    accent: "var(--color-mint-ink)",
    iconBg: "var(--color-mint)",
    iconInk: "var(--color-mint-ink)",
    bg: "var(--color-paper)",
  },
};

function SupportCard({ tone, icon: Icon, eyebrow, title, bullets }: SupportCardProps) {
  const t = TONE_STYLE[tone];
  return (
    <article
      data-conversion-card={tone}
      className="rounded-2xl border p-5 transition-shadow hover:shadow-md"
      style={{
        background: t.bg,
        borderColor: "var(--color-line-strong)",
        borderTop: `3px solid ${t.accent}`,
      }}
    >
      <div className="flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className="grid h-8 w-8 place-items-center rounded-lg"
          style={{ background: t.iconBg, color: t.iconInk }}
        >
          <Icon size={15} aria-hidden={true} />
        </span>
        <p
          className="font-mono text-[0.6rem] uppercase tracking-[0.16em]"
          style={{ color: "var(--color-ink-faint)" }}
        >
          {eyebrow}
        </p>
      </div>
      <h4 className="font-display mt-2.5 text-[1.02rem] leading-snug">{title}</h4>
      <ul className="mt-2.5 flex flex-col gap-1.5">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="text-[0.83rem] leading-snug"
            style={{ color: "var(--color-ink-soft)" }}
          >
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}
