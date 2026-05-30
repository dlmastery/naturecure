"use client";

import { use, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Repeat,
  TriangleAlert,
  ArrowRight,
  UserRound,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { getCategory } from "@/lib/categories";
import { getBundle } from "@/lib/data";
import { Eyebrow, SafetyNote } from "@/components/ui";
import { NextStep } from "@/components/next-step";
import { SafetyQuiz, type SafetyAnswers } from "@/components/safety-quiz";
import { NinetyDayPackCard } from "@/components/ninety-day-pack-card";
import { StepIndicator } from "@/components/step-indicator";

type Tier = "starter" | "core" | "premium";

const TIER_COPY: Record<Tier, { label: string; blurb: string }> = {
  starter: {
    label: "Starter",
    blurb: "One-time pack — pause anytime, no commitment.",
  },
  core: {
    label: "Core",
    blurb: "Subscription — refills before you run out, weekly check-ins.",
  },
  premium: {
    label: "Premium",
    blurb: "Subscription + an expert chart at week 4 ($89 add-on).",
  },
};

export default function PackagePage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: id } = use(params);
  const category = getCategory(id);
  const bundle = category ? getBundle(category.bundleIds[0]) : undefined;
  const router = useRouter();

  const [answers, setAnswers] = useState<SafetyAnswers | null>(null);
  const [tier, setTier] = useState<Tier>("core");
  const [ack, setAck] = useState(false);

  // Budget pills now influence: starter = one-time, core/premium = subscription
  const isSub: boolean = tier !== "starter";

  const flagged = useMemo(() => {
    if (!answers) return false;
    return (
      answers.meds === true ||
      answers.pregnant === true ||
      answers.organ === true ||
      answers.allergies === true
    );
  }, [answers]);

  if (!category || !bundle) {
    return (
      <div className="grain px-6 py-20 sm:px-10 lg:px-14">
        <h1 className="font-display text-3xl">Category not found.</h1>
        <Link href="/atlas" className="btn-primary mt-6 inline-flex">
          <ArrowLeft size={15} /> Back to atlas
        </Link>
      </div>
    );
  }

  const expertHref = answers
    ? `/expert?from=safety&category=${category.id}&meds=${answers.meds ? "yes" : "no"}&preg=${answers.pregnant ? "yes" : "no"}&organ=${answers.organ ? "yes" : "no"}&allergies=${answers.allergies ? "yes" : "no"}`
    : "/expert";

  // Three states: A = pre-screen, B = screened+flagged, C = screened+cleared
  const state: "A" | "B" | "C" = !answers ? "A" : flagged ? "B" : "C";
  const wizardStep = state === "A" ? 1 : state === "B" ? 2 : 3;

  const price = isSub ? bundle.subscriptionPrice : bundle.price;

  const startRegime = () => {
    if (!ack) return;
    router.push(
      `/checkout/confirm?bundle=${bundle.id}&tier=${tier}&sub=${isSub ? "true" : "false"}`
    );
  };

  return (
    <div className="grain relative pb-20">
      {/* Top crumb + step indicator */}
      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        <div
          className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.75rem]"
          style={{ color: "var(--color-ink-faint)" }}
        >
          <Link href="/atlas" className="hover:underline">
            Atlas
          </Link>
          <span>/</span>
          <Link href={`/c/${category.id}`} className="hover:underline">
            {category.shortName}
          </Link>
          <span>/</span>
          <span style={{ color: "var(--color-ink)" }}>Build my regime</span>
        </div>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-balance text-4xl leading-tight sm:text-5xl">
              Your {bundle.duration}{" "}
              <span
                className="italic"
                style={{ color: "var(--color-forest)" }}
              >
                {category.shortName.toLowerCase()}
              </span>{" "}
              pack
            </h1>
            <p
              className="mt-4 max-w-xl text-[0.95rem] leading-relaxed"
              style={{ color: "var(--color-ink-soft)" }}
            >
              A short safety screen runs first — products are only ever
              recommended once it clears. The refusal is the conversion.
            </p>
          </div>
          <StepIndicator
            current={wizardStep}
            total={3}
            label={
              wizardStep === 1
                ? "Safety screen"
                : wizardStep === 2
                  ? "Routing"
                  : "Personalise & confirm"
            }
          />
        </div>
      </section>

      <section className="grid gap-6 px-6 pt-10 sm:px-10 lg:grid-cols-[1fr_1fr] lg:px-14">
        {/* LEFT: the active step */}
        <div className="space-y-6">
          {state === "A" && (
            <SafetyQuiz
              onComplete={(a) => setAnswers(a)}
              onBack={() => router.push(`/c/${category.id}`)}
            />
          )}

          {state === "B" && (
            <div
              className="card-soft p-6 sm:p-7"
              style={{ background: "var(--color-terracotta-soft)" }}
              data-component="SafetyCallout"
            >
              <div
                className="flex items-center gap-2"
                style={{ color: "var(--color-terracotta-deep)" }}
              >
                <TriangleAlert size={18} />
                <span className="font-medium">
                  Let&rsquo;s route you to a human first.
                </span>
              </div>
              <p
                className="mt-3 text-[0.92rem] leading-relaxed"
                style={{ color: "var(--color-terracotta-deep)" }}
              >
                Because you flagged{" "}
                {[
                  answers?.meds && "medications",
                  answers?.pregnant && "pregnancy or lactation",
                  answers?.organ && "liver/kidney disease",
                  answers?.allergies && "allergies",
                ]
                  .filter(Boolean)
                  .join(", ")}
                , we won&rsquo;t sell a package directly. A credentialed expert
                will review interactions and build a safe chart.{" "}
                <em>No upcharge. The refusal is the conversion.</em>
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={expertHref} className="btn-primary !py-2">
                  <UserRound size={15} /> Request expert chart review · $89
                </Link>
                <Link href="/expert" className="btn-ghost !py-2">
                  Learn more about expert review
                </Link>
              </div>

              <button
                type="button"
                onClick={() => setAnswers(null)}
                className="mt-5 inline-flex items-center gap-1.5 text-[0.78rem] underline"
                style={{ color: "var(--color-terracotta-deep)" }}
              >
                <ArrowLeft size={13} /> Re-answer the safety screen
              </button>
            </div>
          )}

          {state === "C" && (
            <>
              <NinetyDayPackCard bundle={bundle} isSub={isSub} tier={tier} />

              {/* Budget pills — now functional */}
              <div className="card-soft p-6">
                <Eyebrow>Choose your tier</Eyebrow>
                <p
                  className="mt-2 text-[0.84rem] leading-relaxed"
                  style={{ color: "var(--color-ink-soft)" }}
                >
                  Starter is a one-time pack. Core adds a subscription with
                  refills + weekly check-ins. Premium layers in an expert chart
                  review at week 4.
                </p>
                <div
                  className="mt-4 flex flex-wrap gap-2"
                  role="radiogroup"
                  aria-label="Tier preference"
                >
                  {(Object.keys(TIER_COPY) as Tier[]).map((b) => {
                    const active = tier === b;
                    return (
                      <button
                        key={b}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => setTier(b)}
                        className="rounded-full border px-4 py-2 text-[0.85rem] font-medium capitalize transition-colors"
                        style={{
                          background: active
                            ? "var(--color-forest)"
                            : "var(--color-card)",
                          color: active
                            ? "var(--color-paper)"
                            : "var(--color-ink)",
                          borderColor: active
                            ? "var(--color-forest)"
                            : "var(--color-line-strong)",
                        }}
                      >
                        {TIER_COPY[b].label}
                      </button>
                    );
                  })}
                </div>
                <p
                  className="mt-3 text-[0.82rem]"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  {TIER_COPY[tier].blurb}
                </p>

                {tier === "premium" && (
                  <div
                    className="mt-4 rounded-[var(--radius-md)] border p-4 text-[0.84rem]"
                    style={{
                      background: "var(--color-forest-tint)",
                      borderColor: "var(--color-forest-soft)",
                      color: "var(--color-ink)",
                    }}
                  >
                    <p
                      className="font-mono text-[0.7rem] uppercase tracking-wider"
                      style={{ color: "var(--color-forest)" }}
                    >
                      Expert chart upsell · +$89
                    </p>
                    <p className="mt-1.5 leading-relaxed">
                      A credentialed reviewer maps the pack to your prakriti,
                      diet, and timing — delivered at week 4.
                    </p>
                  </div>
                )}
              </div>

              {/* Checkout / ack */}
              <div className="card-soft p-6">
                <div className="flex items-center justify-between">
                  <Eyebrow>Start the regime</Eyebrow>
                  <span
                    className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-wider"
                    style={{ color: "var(--color-ink-faint)" }}
                  >
                    <Repeat size={12} /> {isSub ? "Subscription" : "One-time"}
                  </span>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div
                    className="font-display text-4xl"
                    style={{ color: "var(--color-gold-deep)" }}
                  >
                    ${price}
                  </div>
                  <div
                    className="text-right text-[0.78rem]"
                    style={{ color: "var(--color-ink-faint)" }}
                  >
                    {isSub ? `refills every ${bundle.duration}` : "one-time"}
                    <br />
                    pause or cancel anytime
                  </div>
                </div>
                <label
                  className="mt-5 flex cursor-pointer items-start gap-2.5 text-[0.82rem]"
                  style={{ color: "var(--color-ink-soft)" }}
                >
                  <input
                    type="checkbox"
                    checked={ack}
                    onChange={(e) => setAck(e.target.checked)}
                    className="mt-0.5"
                  />
                  I understand this is adjunctive natural support, not medical
                  treatment, and I&rsquo;ll consult a professional about
                  interactions.
                </label>
                <button
                  type="button"
                  onClick={startRegime}
                  disabled={!ack}
                  aria-disabled={!ack}
                  className="btn-primary mt-5 w-full justify-center disabled:opacity-40"
                >
                  Start my {category.shortName.toLowerCase()} regime{" "}
                  <ArrowRight size={16} />
                </button>
                <p
                  className="mt-3 text-center font-mono text-[0.66rem] uppercase tracking-wider"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  test mode · no live payment
                </p>
                <button
                  type="button"
                  onClick={() => setAnswers(null)}
                  className="mt-3 inline-flex w-full items-center justify-center gap-1.5 text-[0.78rem] underline"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  <ArrowLeft size={13} /> Re-answer the safety screen
                </button>
              </div>

              <SafetyNote>
                Refill prompts will ask about tolerance and adherence before
                every reorder — never just charge you.
              </SafetyNote>
            </>
          )}
        </div>

        {/* RIGHT: persistent context column */}
        <aside className="space-y-5">
          {state === "A" && (
            <div className="card-soft p-6 sm:p-7">
              <Eyebrow>About this screen</Eyebrow>
              <h3 className="font-display mt-3 text-2xl leading-snug">
                Four questions. Two minutes.{" "}
                <span
                  className="italic"
                  style={{ color: "var(--color-forest)" }}
                >
                  No data leaves your device.
                </span>
              </h3>
              <p
                className="mt-3 text-[0.9rem] leading-relaxed"
                style={{ color: "var(--color-ink-soft)" }}
              >
                We screen for prescription interactions, pregnancy or lactation,
                liver or kidney disease, and known allergies. A single yes
                routes you to a human expert before any product is offered.
              </p>
              <div
                className="mt-5 rounded-[var(--radius-md)] p-4 text-[0.82rem]"
                style={{
                  background: "var(--color-paper-deep)",
                  color: "var(--color-ink-soft)",
                }}
              >
                <p
                  className="font-mono text-[0.68rem] uppercase tracking-wider"
                  style={{ color: "var(--color-gold-deep)" }}
                >
                  We screen for
                </p>
                <p className="mt-2 leading-relaxed">
                  {category.safetyFlags.join(" · ")}.
                </p>
              </div>

              <div className="mt-6 border-t pt-5" style={{ borderColor: "var(--color-line)" }}>
                <Eyebrow>If a flag fires</Eyebrow>
                <p
                  className="mt-2 text-[0.85rem] leading-relaxed"
                  style={{ color: "var(--color-ink-soft)" }}
                >
                  You can skip ahead to an expert review at any time —{" "}
                  <Link
                    href="/expert?from=safety-prescreen"
                    className="underline"
                    style={{ color: "var(--color-forest)" }}
                  >
                    schedule expert review
                  </Link>
                  .
                </p>
              </div>
            </div>
          )}

          {state === "B" && (
            <div className="card-soft p-6 sm:p-7">
              <div
                className="flex items-center gap-2"
                style={{ color: "var(--color-forest)" }}
              >
                <ShieldCheck size={18} />
                <Eyebrow className="!text-current">What happens next</Eyebrow>
              </div>
              <ol
                className="mt-4 space-y-3 text-[0.88rem] leading-relaxed"
                style={{ color: "var(--color-ink-soft)" }}
              >
                <li>
                  <strong>1.</strong> Submit your intake — we pass the safety
                  flags along so the expert sees them first.
                </li>
                <li>
                  <strong>2.</strong> Receive a chart within 24–48 hours mapping
                  interactions, doses, and substitutions.
                </li>
                <li>
                  <strong>3.</strong> If safe, the pack is unlocked with
                  expert-approved swaps. If not, you get refunded — no pressure.
                </li>
              </ol>
            </div>
          )}

          {state === "C" && (
            <div className="card-soft p-6 sm:p-7">
              <Eyebrow>What you&rsquo;re buying</Eyebrow>
              <h3 className="font-display mt-3 text-2xl leading-snug">
                Not a miracle. A{" "}
                <span
                  className="italic"
                  style={{ color: "var(--color-forest)" }}
                >
                  routine
                </span>
                .
              </h3>
              <p
                className="mt-3 text-[0.9rem] leading-relaxed"
                style={{ color: "var(--color-ink-soft)" }}
              >
                The pack is the on-ramp. The companion app is the year. After
                checkout, we open today&rsquo;s 4-dose stack, your 7-day streak,
                and a refill countdown.
              </p>

              <ul
                className="mt-5 space-y-2 text-[0.85rem]"
                style={{ color: "var(--color-ink-soft)" }}
              >
                {bundle.includes.map((inc) => (
                  <li key={inc} className="flex items-center gap-2">
                    <Sparkles size={13} style={{ color: "var(--color-forest-soft)" }} />{" "}
                    {inc}
                  </li>
                ))}
              </ul>

              <div
                className="mt-6 border-t pt-5 text-[0.82rem]"
                style={{ borderColor: "var(--color-line)", color: "var(--color-ink-faint)" }}
              >
                Want the expert chart anyway?{" "}
                <Link
                  href={`/expert?from=cleared&category=${category.id}`}
                  className="underline"
                  style={{ color: "var(--color-forest)" }}
                >
                  Add it on for $89
                </Link>
                .
              </div>
            </div>
          )}
        </aside>
      </section>

      {/* Conditional NextStep — different for each state */}
      {state !== "B" ? (
        <NextStep
          step={state === "C" ? "06 · Companion" : "—"}
          title={
            state === "C"
              ? "Turn the purchase into a routine"
              : "Need a human before any of this?"
          }
          body={
            state === "C"
              ? "Daily reminders, weekly check-ins, refill countdown, and evidence updates as protocols change. The relationship is where natural protocols actually work."
              : "If you'd prefer an expert eye before the screen — Ayurveda chart reviewers turnaround in 24–48 hours."
          }
          href={
            state === "C"
              ? `/companion?bundle=${bundle.id}`
              : "/expert?from=safety-prescreen"
          }
          cta={state === "C" ? "Activate the companion" : "Schedule expert review"}
          tone={state === "C" ? "forest" : "paper"}
        />
      ) : (
        <NextStep
          step="—"
          title="Schedule the expert review"
          body="Because you flagged a safety item, we route you to a credentialed reviewer before any product is offered. Turnaround 24–48 hours."
          href={expertHref}
          cta="Schedule expert review"
          tone="paper"
        />
      )}
    </div>
  );
}
