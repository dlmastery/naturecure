import Link from "next/link";
import { Pill, Salad, Wind, ClipboardCheck, Repeat, FlaskConical, Bell, ArrowRight } from "lucide-react";
import { companionEvents } from "@/lib/data";
import { Eyebrow, SectionHeading, Stat } from "@/components/ui";
import { Footer } from "@/app/page";

const ICONS = { supplement: Pill, diet: Salad, routine: Wind, checkin: ClipboardCheck, refill: Repeat, research: FlaskConical } as const;
const TINT: Record<string, string> = { supplement: "var(--color-mint)", diet: "var(--color-amber)", routine: "var(--color-sky)", checkin: "var(--color-lavender)", refill: "var(--color-blush)", research: "var(--color-sky)" };

export default function Companion() {
  return (
    <div className="grain relative pb-8">
      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        <Eyebrow>The companion</Eyebrow>
        <h1 className="font-display mt-4 text-balance text-5xl leading-[1.0] sm:text-6xl">
          The companion turns purchase into a <span className="italic" style={{ color: "var(--color-forest)" }}>routine</span>.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          The website earns the first purchase. The companion earns the relationship — daily reminders,
          weekly check-ins, refills before you run out, and evidence updates as protocols change.
        </p>
        <div className="mt-10 grid max-w-2xl grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4" style={{ borderColor: "var(--color-line-strong)" }}>
          <Stat value="Day 23" label="of 90-day protocol" />
          <Stat value="86%" label="7-day adherence" />
          <Stat value="7 days" label="until refill" />
          <Stat value="2" label="evidence updates" />
        </div>
      </section>

      <section className="grid gap-6 px-6 pt-14 sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:px-14">
        {/* Daily timeline */}
        <div className="card-soft p-6">
          <Eyebrow>Today's timeline</Eyebrow>
          <div className="mt-5 space-y-3">
            {companionEvents.map((e) => {
              const Icon = ICONS[e.type];
              return (
                <div key={e.time} className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl" style={{ background: TINT[e.type] }}>
                    <Icon size={17} style={{ color: "var(--color-ink)" }} />
                  </div>
                  <div className="flex-1 border-b pb-3" style={{ borderColor: "var(--color-line)" }}>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{e.title}</span>
                      <span className="font-mono text-[0.7rem]" style={{ color: "var(--color-ink-faint)" }}>{e.time}</span>
                    </div>
                    <p className="mt-0.5 text-[0.82rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{e.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Retention loops */}
        <div className="space-y-5">
          <div className="rounded-[var(--radius-card)] p-6" style={{ background: "var(--color-forest)", color: "var(--color-paper)" }}>
            <Eyebrow><span style={{ color: "#ffffff80" }}>Refill decision · day 75</span></Eyebrow>
            <p className="mt-3 text-[0.92rem] leading-relaxed" style={{ color: "#ffffffe0" }}>
              "Your 90-day pack has ~7 days left. Are you tolerating it? Any product bother your stomach or sleep?"
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Continue", "Pause", "Adjust", "Ask expert"].map((o) => (
                <span key={o} className="rounded-full px-3 py-1.5 text-[0.78rem]" style={{ background: "#ffffff1f", color: "var(--color-paper)" }}>{o}</span>
              ))}
            </div>
          </div>

          <div className="card-soft p-6">
            <Eyebrow>Evidence update feed</Eyebrow>
            <ul className="mt-3 space-y-2.5 text-[0.85rem]">
              {[
                { i: FlaskConical, t: "New finding added to your skin hub (graded C)." },
                { i: Bell, t: "Protocol updated — magnesium timing moved to evening." },
              ].map((u, k) => <li key={k} className="flex items-center gap-2.5"><u.i size={15} style={{ color: "var(--color-forest-soft)" }} /> {u.t}</li>)}
            </ul>
          </div>

          <div className="card-soft p-6">
            <Eyebrow>Smart reminders</Eyebrow>
            <p className="mt-2 text-[0.84rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
              Personal, not spammy: supplement timing, post-meal walk, wind-down, refill countdown, expert follow-up.
            </p>
            <Link href="/progress" className="mt-3 inline-flex items-center gap-2 text-[0.85rem] font-medium" style={{ color: "var(--color-forest)" }}>
              See month-one progress <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <div className="pt-16"><Footer /></div>
    </div>
  );
}
