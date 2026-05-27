import Link from "next/link";
import { ArrowRight, ShieldCheck, FlaskConical, RefreshCw, Sparkles, CircleCheck } from "lucide-react";
import { categoriesByRank } from "@/lib/categories";
import { journeys } from "@/lib/data";
import { EVIDENCE_GRADES, GRADE_ORDER } from "@/lib/evidence";
import { CategoryCard } from "@/components/category-card";
import { Eyebrow, GradeBadge, SectionHeading, Stat } from "@/components/ui";

export default function Home() {
  return (
    <div className="grain relative">
      {/* ───────────────── Editorial hero ───────────────── */}
      <section className="relative px-6 pb-16 pt-14 sm:px-10 lg:px-14 lg:pb-24 lg:pt-20">
        <div className="rise max-w-4xl">
          <Eyebrow>Evidence-backed natural health</Eyebrow>
          <h1 className="font-display mt-5 text-balance text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            Natural regimes for the needs people actually{" "}
            <span className="italic" style={{ color: "var(--color-forest)" }}>search for</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
            NicheCore turns high-value health needs into graded protocols, quality-screened
            packages, a daily companion and optional human experts. We grade the evidence,
            show the uncertainty, and refresh every hub as new findings emerge.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/c/skin-pigmentation" className="btn-primary">
              Explore Skin &amp; Pigmentation <ArrowRight size={16} />
            </Link>
            <Link href="/skin/vitiligo" className="btn-ghost">See the vitiligo journey</Link>
          </div>

          {/* Trust strip */}
          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 border-t pt-8 sm:grid-cols-4" style={{ borderColor: "var(--color-line-strong)" }}>
            <Stat value="13" label="launch categories" />
            <Stat value="50" label="need journeys" />
            <Stat value="A–X" label="evidence grades" />
            <Stat value="May ’26" label="last refresh" />
          </div>
        </div>
      </section>

      {/* ───────────────── Manifesto band ───────────────── */}
      <section className="px-6 sm:px-10 lg:px-14">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] px-8 py-12 sm:px-14 sm:py-16"
          style={{ background: "var(--color-forest)", color: "var(--color-paper)" }}>
          <p className="eyebrow" style={{ color: "#ffffff70" }}>The thesis</p>
          <p className="font-display mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl">
            Not a chatbot. Not a blog. The <span className="italic" style={{ color: "var(--color-amber)" }}>evidence OS</span> for natural health.
          </p>
          <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed" style={{ color: "#ffffffcc" }}>
            A backend factory researches, grades and reviews every protocol on a schedule, then
            caches polished hubs. The AI explains reviewed content — it never invents claims, never
            diagnoses, never promises a cure. Commerce only ever follows evidence and safety.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm" style={{ color: "#ffffffdd" }}>
            {["Real sources, graded", "Safety before commerce", "Honest uncertainty", "No miracle claims"].map((t) => (
              <span key={t} className="flex items-center gap-2"><CircleCheck size={16} style={{ color: "var(--color-amber)" }} /> {t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Category catalog ───────────────── */}
      <section className="px-6 pt-20 sm:px-10 lg:px-14">
        <SectionHeading
          kicker="Need-first catalog"
          title={<>Pick your need. Get a regime you can <span className="italic">actually follow</span>.</>}
          lead="Ranked by commercial wedge and consumer pain. Every card opens an evidence hub, a personalised intake, a quality-screened package and a daily companion."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoriesByRank.map((c, i) => <CategoryCard key={c.id} category={c} index={i} />)}
        </div>
      </section>

      {/* ───────────────── How it works ───────────────── */}
      <section className="px-6 pt-24 sm:px-10 lg:px-14">
        <SectionHeading kicker="The core loop" title={<>From a need to a routine, <span className="italic">without the noise</span>.</>} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {LOOP.map((step, i) => (
            <div key={step.title} className="card-soft p-5">
              <span className="font-display text-2xl" style={{ color: "var(--color-gold-deep)" }}>{i + 1}</span>
              <h4 className="mt-2 font-medium">{step.title}</h4>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────── Evidence doctrine ───────────────── */}
      <section className="px-6 pt-24 sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            kicker="Evidence doctrine"
            title={<>Every claim wears its <span className="italic">grade</span>.</>}
            lead="One grade per claim, the source, the last-reviewed date, and a separate product-quality score. Traditional use is honoured — and never disguised as clinical proof."
          />
          <div className="grid gap-2.5 sm:grid-cols-2">
            {GRADE_ORDER.map((g) => (
              <div key={g} className="card-soft flex items-start gap-3 p-4">
                <GradeBadge grade={g} />
                <p className="text-[0.8rem] leading-snug" style={{ color: "var(--color-ink-soft)" }}>
                  {EVIDENCE_GRADES[g].consumer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── Flagship vitiligo ───────────────── */}
      <section className="px-6 py-24 sm:px-10 lg:px-14">
        <div className="card-soft grid items-center gap-8 overflow-hidden p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <Eyebrow>Flagship depth journey</Eyebrow>
            <h2 className="font-display mt-4 text-4xl leading-[1.05]">The vitiligo journey,<br /><span className="italic">without the snake oil.</span></h2>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
              Antioxidant, gut-skin and stress layers. A sprouted-millet diet. Red-light and breathwork
              anchors. Every item graded, every interaction flagged — strictly adjunctive to your dermatologist.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {(["B", "C", "D", "T"] as const).map((g) => <GradeBadge key={g} grade={g} withLabel />)}
            </div>
            <Link href="/skin/vitiligo" className="btn-primary mt-7"><Sparkles size={16} /> Open the protocol</Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {journeys.filter((j) => j.domain === "Skin").slice(0, 6).map((j) => (
              <Link key={j.id} href={j.route} className="rounded-2xl border p-4 text-[0.78rem] leading-snug transition-colors hover:bg-white"
                style={{ borderColor: "var(--color-line-strong)" }}>
                <span className="font-medium">{j.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const LOOP = [
  { title: "Arrive with a need", body: "“My skin has patches.” “My sugar is high.” Need-first, not specialties." },
  { title: "Read the evidence hub", body: "Mechanisms, graded claims, sources, freshness — what we know and don’t." },
  { title: "Personalise & screen", body: "A short intake runs a safety screen before anything is recommended." },
  { title: "Get a quality package", body: "Each item maps to a protocol role, an evidence grade and a quality score." },
  { title: "Keep the routine", body: "A companion handles reminders, check-ins, refills and expert escalation." },
];

export function Footer() {
  return (
    <footer className="border-t px-6 py-10 sm:px-10 lg:px-14" style={{ borderColor: "var(--color-line-strong)" }}>
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
        <div className="max-w-md">
          <div className="font-display text-xl">NicheCore</div>
          <p className="mt-2 text-[0.8rem] leading-relaxed" style={{ color: "var(--color-ink-faint)" }}>
            Educational natural-wellness guidance and commerce. Not medical advice, diagnosis or treatment.
            Always consult a qualified professional and check medication interactions.
          </p>
        </div>
        <div className="flex gap-3 text-[0.7rem]" style={{ color: "var(--color-ink-faint)" }}>
          <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> Safety-gated</span>
          <span className="flex items-center gap-1.5"><FlaskConical size={14} /> Source-traced</span>
          <span className="flex items-center gap-1.5"><RefreshCw size={14} /> Refreshed monthly</span>
        </div>
      </div>
    </footer>
  );
}
