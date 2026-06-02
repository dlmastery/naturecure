import Link from "next/link";
import { ArrowRight, ShieldCheck, FlaskConical, RefreshCw, Sparkles, CircleCheck } from "lucide-react";
import { categoriesByRank } from "@/lib/categories";
import { journeys } from "@/lib/data";
import { EVIDENCE_GRADES, GRADE_ORDER } from "@/lib/evidence";
import { CategoryCard } from "@/components/category-card";
import { Eyebrow, GradeBadge, SectionHeading, Stat } from "@/components/ui";
import { NextStep } from "@/components/next-step";
import { JourneySearch } from "@/components/journey-search";

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
          {/* Prominent search — fuzzy across every journey with
              nearest-match fallback and a suggest-for-future form. */}
          <div className="mt-8">
            <JourneySearch />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link href="/atlas" className="btn-primary">
              Browse journeys <ArrowRight size={16} />
            </Link>
            <Link href="/skin/vitiligo" className="btn-ghost">See a full journey</Link>
          </div>
          <div className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.22em]" style={{ color: "var(--color-ink-faint)" }}>
            01 Need · 02 Atlas · 03 Journey · 04 Personalise · 05 Regime · 06 Companion · 07 Expert · 08 Progress
          </div>

          {/* Trust strip — drop the count, surface the doctrine instead */}
          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 border-t pt-8 sm:grid-cols-4" style={{ borderColor: "var(--color-line-strong)" }}>
            <Stat value="A–X" label="evidence grades" />
            <Stat value="OTC" label="strict, home-only" />
            <Stat value="6" label="traditional systems" />
            <Stat value="Jun ’26" label="last refresh" />
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

      {/* ───────────────── Weekly research refresh — selling point ───────────────── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <div className="rounded-[var(--radius-lg)] border bg-white/70 px-6 py-8 sm:px-10 sm:py-10"
          style={{ borderColor: "var(--color-line-strong)" }}>
          <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow eyebrow--gold">A living protocol — not a static blog</p>
              <h2 className="font-display mt-3 text-balance text-3xl leading-tight sm:text-4xl">
                Every regime refreshed{" "}
                <span className="italic" style={{ color: "var(--color-forest)" }}>weekly</span> with the newest research.
              </h2>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                A backend factory sweeps Cochrane, EMA HMPC, AYUSH councils, TGA, NMPA, Health Canada NHP and the
                classical Ayurveda / TCM / Unani / Siddha / Tibetan / Homeopathy corpus every week. New trials get
                graded. Null findings get surfaced. Weak interventions get downgraded honestly. Your protocol stays
                current — without you having to read another paper.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[0.85rem]" style={{ color: "var(--color-ink-soft)" }}>
                <span className="flex items-center gap-1.5">
                  <RefreshCw size={14} style={{ color: "var(--color-forest)" }} />
                  Weekly evidence sweep
                </span>
                <span className="flex items-center gap-1.5">
                  <FlaskConical size={14} style={{ color: "var(--color-forest)" }} />
                  Cochrane · EMA · AYUSH · TGA · NMPA
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={14} style={{ color: "var(--color-forest)" }} />
                  Honest downgrades when evidence shifts
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl border p-5"
                style={{ background: "var(--color-paper-deep)", borderColor: "var(--color-line-strong)" }}>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em]" style={{ color: "var(--color-ink-faint)" }}>
                  Last evidence sweep
                </p>
                <p className="font-display mt-1.5 text-2xl leading-tight">June 1, 2026</p>
                <p className="mt-2 text-[0.78rem]" style={{ color: "var(--color-ink-soft)" }}>
                  Next sweep: every Monday · Friday digest emailed if you subscribe
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-xl border p-3 text-center"
                  style={{ background: "#ffffff80", borderColor: "var(--color-line)" }}>
                  <p className="font-display text-xl" style={{ color: "var(--color-forest)" }}>72</p>
                  <p className="font-mono text-[0.6rem] uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>new sources this month</p>
                </div>
                <div className="rounded-xl border p-3 text-center"
                  style={{ background: "#ffffff80", borderColor: "var(--color-line)" }}>
                  <p className="font-display text-xl" style={{ color: "var(--color-forest)" }}>14</p>
                  <p className="font-mono text-[0.6rem] uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>dossiers updated</p>
                </div>
                <div className="rounded-xl border p-3 text-center"
                  style={{ background: "#ffffff80", borderColor: "var(--color-line)" }}>
                  <p className="font-display text-xl" style={{ color: "var(--color-forest)" }}>3</p>
                  <p className="font-mono text-[0.6rem] uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>honest downgrades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── Featured deep journeys ───────────────── */}
      <section className="px-6 pt-20 sm:px-10 lg:px-14">
        <SectionHeading
          kicker="The protocol, in full depth"
          title={<>Four real journeys. <span className="italic" style={{ color: "var(--color-forest)" }}>Click to enter.</span></>}
          lead="Every featured journey is a navigable 15-section dossier — evidence, mechanism, OTC phytochemicals, six traditions, biophysical, diet, lifestyle, combos, master 24-hour plan, interactions, scoring, 12-month timeline. No long Medium article. A real reference you walk through."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {FEATURED_JOURNEYS.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="card-soft group flex flex-col gap-4 overflow-hidden p-6 transition-transform hover:-translate-y-1 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow eyebrow--gold">{f.eyebrow}</span>
                <span className="chip">{f.tag}</span>
              </div>
              <h3 className="font-display text-balance text-3xl leading-tight sm:text-4xl">
                {f.titlePrefix}{" "}
                <span className="italic" style={{ color: "var(--color-forest)" }}>{f.italicWord}</span>{f.titleSuffix}
              </h3>
              <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                {f.lede}
              </p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {f.grades.map((g) => <GradeBadge key={g} grade={g as "A" | "B" | "C" | "D" | "T" | "H"} />)}
              </div>
              <div className="mt-auto flex items-center justify-between border-t pt-4" style={{ borderColor: "var(--color-line)" }}>
                <span className="font-mono text-[0.7rem] uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>
                  {f.sections} sections · {f.words.toLocaleString()} words · refreshed {f.refreshedLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[0.88rem] font-medium" style={{ color: "var(--color-forest)" }}>
                  Enter the journey
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ───────────────── How the regime is built (8-stage flow) ───────────────── */}
      <section className="px-6 pt-20 sm:px-10 lg:px-14">
        <SectionHeading
          kicker="How the regime is built"
          title={<>Eight stages, end to end. <span className="italic" style={{ color: "var(--color-forest)" }}>Jump to any.</span></>}
          lead="Need → Atlas → Journey → Personalise → Regime → Companion → Expert → Progress. Click a stage to open the live surface — no guesswork."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {REGIME_STAGES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="card-soft group flex flex-col gap-2 p-5 transition-transform hover:-translate-y-0.5"
            >
              <span className="font-mono text-[0.7rem]" style={{ color: "var(--color-gold-deep)" }}>{s.ordinal}</span>
              <h4 className="font-display text-xl leading-tight">{s.title}</h4>
              <p className="text-[0.84rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{s.body}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[0.78rem] font-medium" style={{ color: "var(--color-forest)" }}>
                Open
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
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
              <h3 className="mt-2 font-medium">{step.title}</h3>
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

      <NextStep
        step="03 · The flagship journey"
        title="See how a full journey actually feels"
        body="Vitiligo is the depth proof — three graded combos, a diet anchor, flagged interactions, and a 90-day pack you can start tomorrow."
        href="/skin/vitiligo"
        cta="Open the vitiligo journey"
      />
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

const FEATURED_JOURNEYS = [
  {
    href: "/skin/vitiligo",
    eyebrow: "Skin · 360° protocol",
    tag: "fresh",
    titlePrefix: "The vitiligo journey,",
    italicWord: "without the snake oil",
    titleSuffix: ".",
    lede: "Antioxidant + gut-skin + stress layers, sprouted-millet diet, red-light + breathwork anchors. Every interaction flagged. Adjunctive to your dermatologist — never a cure.",
    grades: ["B", "C", "D", "T"],
    sections: 15,
    words: 7352,
    refreshedLabel: "14d ago",
  },
  {
    href: "/ears/tinnitus",
    eyebrow: "Brain & Ear · 360° protocol",
    tag: "fresh",
    titlePrefix: "Quieter ears,",
    italicWord: "no false promises",
    titleSuffix: ".",
    lede: "Tebonin Ginkgo (EMA-monograph) + magnesium NMDA-protection + zinc-balance + Bhramari breath + sound-therapy notch tones. Pulsatile tinnitus pulled out as a red-flag exception.",
    grades: ["B", "C", "T", "H"],
    sections: 13,
    words: 9260,
    refreshedLabel: "today",
  },
  {
    href: "/metabolic/blood-sugar",
    eyebrow: "Metabolic · 360° protocol",
    tag: "review required",
    titlePrefix: "Blood sugar,",
    italicWord: "without snake-oil panic",
    titleSuffix: ".",
    lede: "Ferroptosis / Nrf2 / GPX4 + Khadir sprouted millets + Yu Quan Wan + Polydatin + Quercetin + Nigella + Momordica. Metformin / insulin interactions framed strictly as 'if already on'.",
    grades: ["B", "C", "D", "T"],
    sections: 15,
    words: 11859,
    refreshedLabel: "7d ago",
  },
  {
    href: "/women/pcos",
    eyebrow: "Hormones · 360° protocol",
    tag: "fresh",
    titlePrefix: "PCOS,",
    italicWord: "support, not symptom-chase",
    titleSuffix: ".",
    lede: "Myo + d-chiro inositol (40:1) + berberine + NAC + spearmint + cinnamon. Insulin-androgen axis + gut. Hormonal-contraceptive interactions framed honestly.",
    grades: ["B", "C", "T"],
    sections: 15,
    words: 9244,
    refreshedLabel: "21d ago",
  },
] as const;

const REGIME_STAGES = [
  { ordinal: "01", title: "Need", body: "Arrive with what's bothering you, not a specialty.", href: "/" },
  { ordinal: "02", title: "Atlas", body: "Browse all journeys, filter by domain.", href: "/atlas" },
  { ordinal: "03", title: "Journey", body: "Open the 15-section evidence dossier.", href: "/skin/vitiligo" },
  { ordinal: "04", title: "Personalise", body: "4-question safety quiz; routes to expert on flag.", href: "/c/skin-pigmentation/package" },
  { ordinal: "05", title: "Regime", body: "Quality-screened 90-day pack with COA-backed bottles.", href: "/c/skin-pigmentation/package" },
  { ordinal: "06", title: "Companion", body: "Daily reminders, weekly check-ins, refill countdown.", href: "/companion" },
  { ordinal: "07", title: "Expert", body: "Optional credentialed Ayurveda / TCM chart review.", href: "/expert" },
  { ordinal: "08", title: "Progress", body: "Trends, photos, lab uploads — honest signals, not diagnoses.", href: "/progress" },
] as const;

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
