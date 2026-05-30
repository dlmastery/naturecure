"use client";

import { Suspense, useMemo } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { getBundle } from "@/lib/data";
import { Eyebrow } from "@/components/ui";
import { ConfirmCard } from "@/components/confirm-card";
import { StepIndicator } from "@/components/step-indicator";
import { NextStep } from "@/components/next-step";

export default function CheckoutConfirmRoute() {
  return (
    <Suspense
      fallback={
        <div className="grain px-6 py-20 sm:px-10 lg:px-14">
          <p
            className="font-mono text-[0.78rem] uppercase tracking-wider"
            style={{ color: "var(--color-ink-faint)" }}
          >
            Loading your order summary…
          </p>
        </div>
      }
    >
      <CheckoutConfirmInner />
    </Suspense>
  );
}

function CheckoutConfirmInner() {
  const router = useRouter();
  const params = useSearchParams();

  const bundleId = params.get("bundle") ?? "";
  const tier = (params.get("tier") ?? "core") as "starter" | "core" | "premium";
  const isSub = (params.get("sub") ?? "true") === "true";

  const bundle = useMemo(() => getBundle(bundleId), [bundleId]);

  if (!bundle) {
    return (
      <div className="grain px-6 py-20 sm:px-10 lg:px-14">
        <Eyebrow>Order summary</Eyebrow>
        <h1 className="font-display mt-3 text-3xl">No bundle selected.</h1>
        <p
          className="mt-3 max-w-md text-[0.92rem] leading-relaxed"
          style={{ color: "var(--color-ink-soft)" }}
        >
          The bundle id was missing or unknown. Head back to the atlas to pick a
          journey and re-run the safety screen.
        </p>
        <Link href="/atlas" className="btn-primary mt-6 inline-flex">
          <ArrowLeft size={15} /> Back to atlas
        </Link>
      </div>
    );
  }

  const activate = () => {
    router.push(`/companion?onboarded=true&bundle=${bundle.id}`);
  };

  return (
    <div className="grain relative pb-20">
      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        <div
          className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.75rem]"
          style={{ color: "var(--color-ink-faint)" }}
        >
          <Link href="/atlas" className="hover:underline">
            Atlas
          </Link>
          <span>/</span>
          <Link
            href={`/c/${bundle.categoryId}`}
            className="hover:underline"
          >
            {bundle.categoryId.replace(/-/g, " ")}
          </Link>
          <span>/</span>
          <Link
            href={`/c/${bundle.categoryId}/package`}
            className="hover:underline"
          >
            Build my regime
          </Link>
          <span>/</span>
          <span style={{ color: "var(--color-ink)" }}>Confirm</span>
        </div>

        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Confirm &amp; activate companion</Eyebrow>
            <h1 className="font-display mt-3 text-balance text-4xl leading-tight sm:text-5xl">
              One last look,{" "}
              <span
                className="italic"
                style={{ color: "var(--color-forest)" }}
              >
                then it's a routine
              </span>
              .
            </h1>
            <p
              className="mt-4 max-w-xl text-[0.95rem] leading-relaxed"
              style={{ color: "var(--color-ink-soft)" }}
            >
              We&rsquo;re in test mode — no live payment is taken. Activating
              the companion opens day 1 of your protocol, today&rsquo;s 4-dose
              timeline, and a refill countdown.
            </p>
          </div>
          <StepIndicator current={3} total={3} label="Confirm" />
        </div>
      </section>

      <section className="grid gap-6 px-6 pt-10 sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:px-14">
        <ConfirmCard bundle={bundle} isSub={isSub} tier={tier} />

        <aside className="space-y-5">
          <div
            className="rounded-[var(--radius-card)] p-6 sm:p-7"
            style={{
              background: "var(--color-forest)",
              color: "var(--color-paper)",
            }}
          >
            <span
              className="font-mono text-[0.7rem] uppercase tracking-[0.18em]"
              style={{ color: "#ffffff80" }}
            >
              What activating does
            </span>
            <h2 className="font-display mt-3 text-2xl leading-tight">
              Day 1 unlocks now.
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.88rem] leading-relaxed">
              <li className="flex items-start gap-2">
                <ShieldCheck size={15} style={{ color: "#ffffffcc" }} className="mt-0.5" />
                4-dose stack with timing reminders
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck size={15} style={{ color: "#ffffffcc" }} className="mt-0.5" />
                7-day adherence streak strip
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck size={15} style={{ color: "#ffffffcc" }} className="mt-0.5" />
                Weekly tolerance check-in
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck size={15} style={{ color: "#ffffffcc" }} className="mt-0.5" />
                Refill countdown — never auto-billed without asking
              </li>
            </ul>

            <button
              type="button"
              onClick={activate}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.92rem] font-medium"
              style={{
                background: "var(--color-paper)",
                color: "var(--color-forest)",
              }}
            >
              Activate companion <ArrowRight size={16} />
            </button>

            <p
              className="mt-3 text-center font-mono text-[0.66rem] uppercase tracking-wider"
              style={{ color: "#ffffff90" }}
            >
              test mode · no live payment
            </p>
          </div>

          <Link
            href={`/c/${bundle.categoryId}/package`}
            className="inline-flex items-center gap-2 text-[0.85rem] font-medium"
            style={{ color: "var(--color-ink-soft)" }}
          >
            <ArrowLeft size={14} /> Back to personalise
          </Link>
        </aside>
      </section>

      <NextStep
        step="06 · Companion"
        title="The website earned the sale. The app earns the year."
        body="Daily reminders, weekly check-ins, refill countdown, and evidence updates as protocols change."
        href={`/companion?onboarded=true&bundle=${bundle.id}`}
        cta="Activate the companion"
        tone="forest"
      />
    </div>
  );
}
