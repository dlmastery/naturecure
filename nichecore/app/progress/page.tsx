import Link from "next/link";
import { TrendingUp, Camera, FlaskConical, Repeat, Users, ArrowRight } from "lucide-react";
import { Eyebrow, SectionHeading, Stat, SafetyNote } from "@/components/ui";
import { Footer } from "@/app/page";

function Ring({ pct, label }: { pct: number; label: string }) {
  const r = 34, c = 2 * Math.PI * r;
  return (
    <div className="flex flex-col items-center">
      <svg width="92" height="92" viewBox="0 0 92 92" className="-rotate-90">
        <circle cx="46" cy="46" r={r} fill="none" stroke="var(--color-line-strong)" strokeWidth="7" />
        <circle cx="46" cy="46" r={r} fill="none" stroke="var(--color-forest)" strokeWidth="7" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c - (pct / 100) * c} />
      </svg>
      <div className="-mt-[58px] font-display text-2xl" style={{ color: "var(--color-forest)" }}>{pct}%</div>
      <div className="mt-9 text-[0.75rem]" style={{ color: "var(--color-ink-faint)" }}>{label}</div>
    </div>
  );
}

export default function Progress() {
  return (
    <div className="grain relative pb-8">
      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        <Eyebrow>Month-one progress</Eyebrow>
        <h1 className="font-display mt-4 text-balance text-5xl leading-[1.0] sm:text-6xl">
          Trends you can <span className="italic" style={{ color: "var(--color-forest)" }}>see</span> — honestly labelled.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          Adherence, tolerance and a symptom journal — visualised as trends. We never claim causality from
          anecdotes: this is a trend signal, not a diagnosis.
        </p>
      </section>

      <section className="grid gap-5 px-6 pt-12 sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:px-14">
        <div className="card-soft p-6">
          <Eyebrow>Adherence & tolerance</Eyebrow>
          <div className="mt-6 flex flex-wrap justify-around gap-6">
            <Ring pct={86} label="Doses taken" />
            <Ring pct={92} label="Tolerance" />
            <Ring pct={74} label="Diet actions" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 border-t pt-6" style={{ borderColor: "var(--color-line)" }}>
            <Stat value="Day 28" label="of 90" />
            <Stat value="0" label="side effects" />
            <Stat value="3/3" label="weekly check-ins" />
          </div>
        </div>

        <div className="space-y-5">
          <div className="card-soft p-5">
            <div className="flex items-center gap-2"><TrendingUp size={16} style={{ color: "var(--color-forest-soft)" }} /><Eyebrow>Symptom journal</Eyebrow></div>
            <div className="mt-4 flex items-end gap-1.5" style={{ height: 64 }}>
              {[40, 44, 38, 50, 46, 58, 54, 62, 60, 68, 66, 72].map((h, i) => (
                <span key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i > 8 ? "var(--color-forest)" : "var(--color-mint)" }} />
              ))}
            </div>
            <p className="mt-3 text-[0.78rem]" style={{ color: "var(--color-ink-faint)" }}>Stability self-score trending up — <span style={{ color: "var(--color-forest)" }}>trend signal, not a clinical outcome.</span></p>
          </div>
          <div className="card-soft flex items-center gap-3 p-5">
            <Camera size={18} style={{ color: "var(--color-forest-soft)" }} />
            <div className="text-[0.84rem]"><span className="font-medium">Photo tracking</span><div style={{ color: "var(--color-ink-faint)" }}>Lesion-margin photos, consistent lighting.</div></div>
          </div>
          <div className="card-soft flex items-center gap-3 p-5">
            <FlaskConical size={18} style={{ color: "var(--color-forest-soft)" }} />
            <div className="text-[0.84rem]"><span className="font-medium">New evidence added</span><div style={{ color: "var(--color-ink-faint)" }}>Your hub refreshed — magnesium timing updated.</div></div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 px-6 pt-12 sm:px-10 lg:grid-cols-2 lg:px-14">
        <div className="rounded-[var(--radius-card)] p-6" style={{ background: "var(--color-forest)", color: "var(--color-paper)" }}>
          <div className="flex items-center gap-2"><Repeat size={18} style={{ color: "var(--color-amber)" }} /><Eyebrow><span style={{ color: "#ffffff80" }}>Refill recommendation</span></Eyebrow></div>
          <p className="mt-3 text-[0.92rem] leading-relaxed" style={{ color: "#ffffffe0" }}>
            Adherence is strong and tolerance is clean. Continue with a small adjustment — move magnesium to evening.
          </p>
          <Link href="/c/skin-pigmentation/package" className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.85rem] font-medium" style={{ background: "var(--color-paper)", color: "var(--color-forest)" }}>Continue with adjustments <ArrowRight size={15} /></Link>
        </div>
        <div className="card-soft p-6">
          <div className="flex items-center gap-2"><Users size={18} style={{ color: "var(--color-forest)" }} /><Eyebrow>Outcome registry (optional)</Eyebrow></div>
          <p className="mt-3 text-[0.88rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
            Contribute anonymised adherence and outcomes to a category registry. Aggregated cohort insights — never
            presented as clinical proof.
          </p>
          <SafetyNote>Consented, anonymised, and never a clinical claim. You can leave anytime.</SafetyNote>
        </div>
      </section>

      <div className="pt-16"><Footer /></div>
    </div>
  );
}
