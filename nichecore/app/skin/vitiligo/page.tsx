import Link from "next/link";
import { ArrowRight, Sparkles, Sun, Wind, FlaskConical, Leaf, TriangleAlert, CircleX } from "lucide-react";
import { vitiligo } from "@/lib/vitiligo";
import { getBundle } from "@/lib/data";
import { ACCENTS } from "@/lib/evidence";
import { Eyebrow, GradeBadge, FreshnessChip, SectionHeading, RuleCard, SafetyNote } from "@/components/ui";
import { BundleCard } from "@/components/bundle-card";
import { Footer } from "@/app/page";

export const metadata = { title: "Vitiligo support — NicheCore", description: vitiligo.promise };

export default function VitiligoJourney() {
  const bundle = getBundle("skin-resilience-90");
  return (
    <div className="grain relative pb-8">
      {/* ── Editorial hero ── */}
      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        <div className="rise flex items-center gap-2 text-[0.75rem]" style={{ color: "var(--color-ink-faint)" }}>
          <Link href="/" className="hover:underline">Needs</Link><span>/</span>
          <Link href="/c/skin-pigmentation" className="hover:underline">Skin</Link><span>/</span><span>Vitiligo</span>
        </div>
        <div className="rise mt-6 max-w-4xl">
          <div className="flex items-center gap-2">
            <FreshnessChip status="fresh" />
            <span className="chip">adjunctive only</span>
          </div>
          <h1 className="font-display mt-5 text-balance text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            The vitiligo journey,<br /><span className="italic" style={{ color: "var(--color-forest)" }}>without the snake oil.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{vitiligo.promise}</p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/c/skin-pigmentation/package" className="btn-primary">Build my 90-day regime <ArrowRight size={16} /></Link>
            <Link href="/guru" className="btn-ghost"><Sparkles size={15} /> Ask the Guru</Link>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">{(["B", "C", "D", "T"] as const).map((g) => <GradeBadge key={g} grade={g} withLabel />)}</div>
        </div>
      </section>

      {/* ── Evidence feed ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <SectionHeading kicker="A living evidence feed" title="What the research actually says" />
        <ul className="mt-8 space-y-3">
          {vitiligo.evidenceFeed.map((e, i) => (
            <li key={i} className="card-soft flex items-start gap-4 p-4">
              <GradeBadge grade={e.grade} />
              <div className="flex-1">
                <span className="text-[0.95rem] leading-relaxed">{e.finding}</span>
                <span className="ml-2 font-mono text-[0.68rem]" style={{ color: "var(--color-ink-faint)" }}>· {e.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Mechanism → action ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <SectionHeading kicker="Each mechanism maps to a daily action" title={<>From a stress loop to <span className="italic">something you do today</span>.</>} />
        <div className="mt-8 space-y-3">
          {vitiligo.mechanisms.map((m, i) => {
            const a = Object.values(ACCENTS)[i % 5];
            return (
              <div key={m.loop} className="card-soft grid items-center gap-3 p-4 sm:grid-cols-[1.1fr_auto_1fr_auto_1.1fr]">
                <div className="rounded-xl px-3 py-2 text-sm font-medium" style={{ background: a.fill, color: a.ink }}>{m.loop}</div>
                <ArrowRight size={16} className="hidden justify-self-center sm:block" style={{ color: "var(--color-ink-faint)" }} />
                <div className="text-sm">{m.target}</div>
                <ArrowRight size={16} className="hidden justify-self-center sm:block" style={{ color: "var(--color-ink-faint)" }} />
                <div className="text-sm font-medium" style={{ color: "var(--color-forest)" }}>{m.action}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── The 3 combos ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <SectionHeading kicker="The cellular resilience regime" title={<>Three daily combos, <span className="italic">all post-meal</span>.</>}
          lead="Novel, untested combinations grounded in mechanism and traditional use — framed honestly as hypothetical adjunctive support, never proven cures." />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {vitiligo.combos.map((combo) => (
            <div key={combo.name} className="card-soft flex flex-col overflow-hidden">
              <div className="px-5 pt-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.66rem] uppercase tracking-wider" style={{ color: "var(--color-gold-deep)" }}>{combo.timing}</span>
                  <GradeBadge grade={combo.grade} />
                </div>
                <h3 className="font-display mt-3 text-xl leading-tight">{combo.name}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{combo.rationale}</p>
              </div>
              <div className="mt-4 border-t" style={{ borderColor: "var(--color-line)" }}>
                {combo.items.map((it) => (
                  <div key={it.name} className="flex items-center justify-between gap-2 border-b px-5 py-2.5 last:border-b-0" style={{ borderColor: "var(--color-line)" }}>
                    <div className="min-w-0"><div className="text-[0.86rem] font-medium">{it.name}</div><div className="text-[0.72rem]" style={{ color: "var(--color-ink-faint)" }}>{it.note}</div></div>
                    <div className="flex shrink-0 items-center gap-2"><span className="font-mono text-[0.72rem]" style={{ color: "var(--color-ink-soft)" }}>{it.dose}</span><GradeBadge grade={it.grade} /></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Diet + anchors ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="card-soft p-6">
            <Eyebrow>The non-negotiable diet</Eyebrow>
            <h3 className="font-display mt-2 text-2xl">{vitiligo.diet.name}</h3>
            <ul className="mt-4 space-y-2">{vitiligo.diet.nonNegotiable.map((d) => <li key={d} className="flex gap-2.5 text-[0.88rem]"><Leaf size={15} className="mt-0.5 shrink-0" style={{ color: "var(--color-forest-soft)" }} />{d}</li>)}</ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {vitiligo.diet.avoid.map((a) => <span key={a} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.76rem]" style={{ background: "var(--color-blush)", color: "var(--color-blush-ink)" }}><CircleX size={12} /> {a}</span>)}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {vitiligo.anchors.map((a) => (
              <div key={a.name} className="card-soft flex items-start gap-4 p-6">
                {a.name === "Pranayama" ? <Wind size={22} style={{ color: "var(--color-forest)" }} /> : <Sun size={22} style={{ color: "var(--color-gold-deep)" }} />}
                <div><h3 className="font-medium">{a.name}</h3><p className="mt-1 text-[0.86rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{a.detail}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <SectionHeading kicker="What to expect" title="An honest 12-month arc" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {vitiligo.timeline.map((t) => (
            <div key={t.week} className="card-soft p-5">
              <span className="font-mono text-[0.7rem] uppercase tracking-wider" style={{ color: "var(--color-gold-deep)" }}>{t.week}</span>
              <h3 className="mt-2 font-medium">{t.title}</h3>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{t.description}</p>
              <p className="mt-3 chip">{t.metric}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Interactions & safety ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <SectionHeading kicker="Safety before commerce" title={<>Every interaction, <span className="italic">flagged</span>.</>} />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-3">
            {vitiligo.interactions.map((it) => (
              <div key={it.combo} className="card-soft flex items-start gap-3 p-4">
                <TriangleAlert size={18} className="mt-0.5 shrink-0" style={{ color: "var(--color-amber-ink)" }} />
                <div>
                  <div className="text-[0.9rem] font-medium">{it.combo}</div>
                  <div className="mt-0.5 text-[0.82rem]" style={{ color: "var(--color-blush-ink)" }}>Risk: {it.risk}</div>
                  <div className="mt-1 text-[0.82rem]" style={{ color: "var(--color-ink-soft)" }}>→ {it.action}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <RuleCard title="Strictly avoid">
              <div className="flex flex-wrap gap-2">{vitiligo.avoidList.map((a) => <span key={a} className="rounded-full px-2.5 py-1 text-[0.76rem]" style={{ background: "#ffffff22" }}>{a}</span>)}</div>
            </RuleCard>
            <SafetyNote><strong>Adjunctive only.</strong> Never replaces phototherapy or JAK inhibitors for active disease. Get baseline labs, track with photos, and run an 8–12 week trial under your dermatologist.</SafetyNote>
          </div>
        </div>
      </section>

      {/* ── Package ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <SectionHeading kicker="The 90-day Vitiligo Support Pack" title={<>Quality-screened, <span className="italic">COA-backed</span>.</>} />
        <div className="mt-8">{bundle && <BundleCard bundle={bundle} ctaHref="/c/skin-pigmentation/package" />}</div>
      </section>

      <div className="pt-16"><Footer /></div>
    </div>
  );
}
