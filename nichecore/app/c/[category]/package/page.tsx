"use client";

import { use, useState } from "react";
import Link from "next/link";
import { ShieldCheck, Repeat, CircleCheck, TriangleAlert, ArrowRight, UserRound } from "lucide-react";
import { getCategory } from "@/lib/categories";
import { getBundle } from "@/lib/data";
import { Eyebrow, GradeBadge, SafetyNote } from "@/components/ui";
import { QualityMeter } from "@/components/bundle-card";
import { NextStep } from "@/components/next-step";

export default function PackagePage({ params }: { params: Promise<{ category: string }> }) {
  const { category: id } = use(params);
  const category = getCategory(id);
  const bundle = category ? getBundle(category.bundleIds[0]) : undefined;

  const [meds, setMeds] = useState<boolean | null>(null);
  const [pregnant, setPregnant] = useState<boolean | null>(null);
  const [budget, setBudget] = useState<"starter" | "core" | "premium">("core");
  const [sub, setSub] = useState(true);
  const [ack, setAck] = useState(false);

  if (!category || !bundle) return <div className="p-14">Not found.</div>;
  const screened = meds !== null && pregnant !== null;
  const flagged = meds === true || pregnant === true;
  const price = sub ? bundle.subscriptionPrice : bundle.price;

  return (
    <div className="grain relative pb-20">
      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        <div className="flex items-center gap-2 text-[0.75rem]" style={{ color: "var(--color-ink-faint)" }}>
          <Link href={`/c/${category.id}`} className="hover:underline">{category.shortName}</Link><span>/</span><span>Personalise</span>
        </div>
        <h1 className="font-display mt-5 text-balance text-4xl leading-tight sm:text-5xl">Your personalised regime</h1>
        <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          A short safety screen runs first — products are only ever recommended after it clears.
        </p>
      </section>

      <section className="grid gap-6 px-6 pt-10 sm:px-10 lg:grid-cols-[1fr_1fr] lg:px-14">
        {/* Intake / safety screen */}
        <div className="card-soft p-6">
          <Eyebrow>Safety screen</Eyebrow>
          <div className="mt-5 space-y-5">
            <Segmented label="Are you taking any prescription medications?" value={meds} onYes={() => setMeds(true)} onNo={() => setMeds(false)} />
            <Segmented label="Are you pregnant or breastfeeding?" value={pregnant} onYes={() => setPregnant(true)} onNo={() => setPregnant(false)} />
            <div>
              <p className="text-sm font-medium">Budget preference</p>
              <div className="mt-2 flex gap-2">
                {(["starter", "core", "premium"] as const).map((b) => (
                  <button key={b} onClick={() => setBudget(b)} className="flex-1 rounded-full border px-3 py-2 text-[0.82rem] capitalize transition-colors"
                    style={{ background: budget === b ? "var(--color-forest)" : "#ffffff80", color: budget === b ? "var(--color-paper)" : "var(--color-ink)", borderColor: budget === b ? "var(--color-forest)" : "var(--color-line-strong)" }}>{b}</button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-xl p-3 text-[0.78rem]" style={{ background: "var(--color-paper-deep)", color: "var(--color-ink-soft)" }}>
            We screen for: {category.safetyFlags.join(" · ")}.
          </div>
        </div>

        {/* Result: package OR expert routing */}
        <div className="space-y-5">
          {!screened && (
            <div className="card-soft flex h-full flex-col items-center justify-center p-10 text-center">
              <ShieldCheck size={28} style={{ color: "var(--color-forest-soft)" }} />
              <p className="mt-3 text-[0.9rem]" style={{ color: "var(--color-ink-soft)" }}>Answer the safety screen to generate your reviewed regime.</p>
            </div>
          )}

          {screened && flagged && (
            <div className="card-soft p-6" style={{ background: "var(--color-blush)" }}>
              <div className="flex items-center gap-2" style={{ color: "var(--color-blush-ink)" }}><TriangleAlert size={18} /><span className="font-medium">Let's route you to a human first.</span></div>
              <p className="mt-3 text-[0.9rem] leading-relaxed" style={{ color: "var(--color-blush-ink)" }}>
                Because you flagged {meds ? "medications" : ""}{meds && pregnant ? " and " : ""}{pregnant ? "pregnancy/lactation" : ""},
                we won't sell a package directly. A credentialed expert will review interactions and build a safe chart.
              </p>
              <Link href="/expert" className="btn-primary mt-4 !py-2"><UserRound size={15} /> Request expert review</Link>
            </div>
          )}

          {screened && !flagged && (
            <>
              <div className="card-soft overflow-hidden">
                <div className="flex items-center justify-between p-5">
                  <div><p className="eyebrow">{bundle.duration} pack</p><h3 className="font-display mt-1 text-xl">{bundle.name}</h3></div>
                  <span className="chip" style={{ color: "var(--color-mint-ink)" }}><CircleCheck size={13} /> safety cleared</span>
                </div>
                <div className="border-t" style={{ borderColor: "var(--color-line)" }}>
                  {bundle.products.map((p) => (
                    <div key={p.name} className="flex items-center justify-between gap-2 border-b px-5 py-3 last:border-b-0" style={{ borderColor: "var(--color-line)" }}>
                      <div><div className="text-[0.88rem] font-medium">{p.name}</div><div className="text-[0.72rem]" style={{ color: "var(--color-ink-faint)" }}>{p.role}</div></div>
                      <div className="flex items-center gap-3"><QualityMeter score={p.qualityScore} /><GradeBadge grade={p.evidenceGrade} /></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Checkout */}
              <div className="card-soft p-6">
                <div className="flex items-center justify-between">
                  <Eyebrow>Start the regime</Eyebrow>
                  <button onClick={() => setSub((v) => !v)} className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.78rem]" style={{ borderColor: "var(--color-line-strong)" }}>
                    <Repeat size={13} /> {sub ? "Subscription" : "One-time"} · tap to switch
                  </button>
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div className="font-display text-4xl" style={{ color: "var(--color-gold-deep)" }}>${price}</div>
                  <div className="text-right text-[0.78rem]" style={{ color: "var(--color-ink-faint)" }}>{sub ? `refills every ${bundle.duration}` : "one-time"}<br />pause or cancel anytime</div>
                </div>
                <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-[0.82rem]" style={{ color: "var(--color-ink-soft)" }}>
                  <input type="checkbox" checked={ack} onChange={(e) => setAck(e.target.checked)} className="mt-0.5" />
                  I understand this is adjunctive natural support, not medical treatment, and I'll consult a professional about interactions.
                </label>
                <button disabled={!ack} className="btn-primary mt-5 w-full justify-center disabled:opacity-40">
                  Start my {category.shortName.toLowerCase()} regime <ArrowRight size={16} />
                </button>
                <p className="mt-3 text-center font-mono text-[0.66rem] uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>test mode · no live payment</p>
              </div>
              <SafetyNote>Refill prompts will ask about tolerance and adherence before every reorder — never just charge you.</SafetyNote>
            </>
          )}
        </div>
      </section>

      <NextStep
        step="06 · Companion"
        title="Turn purchase into a routine"
        body="Daily reminders, weekly check-ins, refill countdown, and evidence updates as protocols change. The relationship is where natural protocols actually work."
        href="/companion"
        cta="Activate the companion"
        tone="paper"
      />
    </div>
  );
}

function Segmented({ label, value, onYes, onNo }: { label: string; value: boolean | null; onYes: () => void; onNo: () => void }) {
  const Btn = ({ on, active, children }: { on: () => void; active: boolean; children: React.ReactNode }) => (
    <button onClick={on} className="flex-1 rounded-full border px-3 py-2 text-[0.82rem] transition-colors"
      style={{ background: active ? "var(--color-forest)" : "#ffffff80", color: active ? "var(--color-paper)" : "var(--color-ink)", borderColor: active ? "var(--color-forest)" : "var(--color-line-strong)" }}>{children}</button>
  );
  return (
    <div>
      <p className="text-sm font-medium">{label}</p>
      <div className="mt-2 flex gap-2">
        <Btn on={onYes} active={value === true}>Yes</Btn>
        <Btn on={onNo} active={value === false}>No</Btn>
      </div>
    </div>
  );
}
