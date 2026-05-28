import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Sparkles, UserRound, CalendarHeart, Leaf, Quote, FlaskConical } from "lucide-react";
import { categories, getCategory } from "@/lib/categories";
import { getBundle, sources } from "@/lib/data";
import { ACCENTS } from "@/lib/evidence";
import { Eyebrow, GradeBadge, FreshnessChip, RiskTag, SectionHeading, RuleCard, SafetyNote } from "@/components/ui";
import { BundleCard } from "@/components/bundle-card";
import { Footer } from "@/app/page";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export default async function CategoryHub({ params }: { params: Promise<{ category: string }> }) {
  const { category: id } = await params;
  const category = getCategory(id);
  if (!category) notFound();

  const accent = ACCENTS[category.accent];
  const grades = Array.from(new Set(category.claims.map((c) => c.grade)));
  const srcMap = new Map(sources.map((s) => [s.id, s]));

  return (
    <div className="grain relative pb-8">
      {/* ── Hero ── */}
      <section className="px-6 pt-10 sm:px-10 lg:px-14">
        <div className="rise flex items-center gap-2 text-[0.75rem]" style={{ color: "var(--color-ink-faint)" }}>
          <Link href="/" className="hover:underline">Needs</Link><span>/</span><span>{category.shortName}</span>
        </div>
        <div className="rise mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider" style={{ background: accent.fill, color: accent.ink }}>{category.shortName}</span>
              <FreshnessChip status={category.freshness} />
              <RiskTag risk={category.risk} />
            </div>
            <h1 className="font-display mt-5 text-balance text-5xl leading-[1.0] sm:text-6xl">{category.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{category.promise}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href={`/c/${category.id}/package`} className="btn-primary">Build my regime <ArrowRight size={16} /></Link>
              <Link href="/guru" className="btn-ghost"><Sparkles size={15} /> Ask the Guru</Link>
            </div>
          </div>
          <div className="card-soft p-6">
            <Eyebrow>Evidence at a glance</Eyebrow>
            <div className="mt-4 flex flex-wrap gap-2">{grades.map((g) => <GradeBadge key={g} grade={g} withLabel />)}</div>
            <dl className="mt-5 grid grid-cols-2 gap-4 border-t pt-5 text-sm" style={{ borderColor: "var(--color-line)" }}>
              <div><dt className="eyebrow">Market signal</dt><dd className="mt-1">{category.marketSignal}</dd></div>
              <div><dt className="eyebrow">Size</dt><dd className="mt-1 font-display text-lg" style={{ color: "var(--color-gold-deep)" }}>{category.marketSize}</dd></div>
              <div><dt className="eyebrow">Last reviewed</dt><dd className="mt-1 font-mono text-[0.8rem]">{category.lastReviewed}</dd></div>
              <div><dt className="eyebrow">Next refresh</dt><dd className="mt-1 font-mono text-[0.8rem]">{category.nextRefresh}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* Vitiligo flagship callout for skin */}
      {category.id === "skin-pigmentation" && (
        <section className="px-6 pt-10 sm:px-10 lg:px-14">
          <Link href="/skin/vitiligo" className="card-soft flex items-center justify-between gap-4 p-5 transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--color-mint)" }}>
            <div className="flex items-center gap-3">
              <Leaf size={20} style={{ color: "var(--color-forest)" }} />
              <div><div className="font-medium">Vitiligo — the flagship depth journey</div>
                <div className="text-[0.8rem]" style={{ color: "var(--color-mint-ink)" }}>Full graded protocol: antioxidant, gut-skin, stress, diet, PBM, breathwork.</div></div>
            </div>
            <ArrowRight size={18} style={{ color: "var(--color-forest)" }} />
          </Link>
        </section>
      )}

      {/* ── Consumer language ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <Eyebrow>People arrive saying</Eyebrow>
        <div className="mt-4 flex flex-wrap gap-3">
          {category.consumerLanguage.map((c) => (
            <span key={c} className="card-soft flex items-center gap-2 px-4 py-2.5 text-sm">
              <Quote size={14} style={{ color: "var(--color-ink-faint)" }} /> {c}
            </span>
          ))}
        </div>
      </section>

      {/* ── Mechanisms ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <SectionHeading kicker="What's happening in the body" title={<>The stress loops we map to <span className="italic">daily actions</span>.</>} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {category.mechanisms.map((m, i) => {
            const a = Object.values(ACCENTS)[i % 5];
            return (
              <div key={m} className="rounded-[var(--radius-card)] p-5" style={{ background: a.fill }}>
                <span className="font-mono text-[0.7rem]" style={{ color: a.ink }}>0{i + 1}</span>
                <p className="mt-3 font-medium leading-snug" style={{ color: a.ink }}>{m}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Latest evidence feed ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <SectionHeading kicker="A living evidence feed" title="What changed recently" />
        <ul className="mt-8 divide-y" style={{ borderColor: "var(--color-line)" }}>
          {category.latestFindings.map((f) => (
            <li key={f} className="flex items-start gap-4 border-b py-4 first:border-t" style={{ borderColor: "var(--color-line)" }}>
              <FlaskConical size={16} className="mt-1 shrink-0" style={{ color: "var(--color-forest-soft)" }} />
              <span className="text-[0.95rem] leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Graded claims ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <SectionHeading kicker="Graded claims" title={<>Each claim, its <span className="italic">grade</span>, and its limits.</>}
          lead="One grade per claim. Allowed wording is shown. Safety notes and sources sit beside the claim, never in a footnote." />
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {category.claims.map((c) => (
            <div key={c.id} className="card-soft p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-medium">{c.intervention}</div>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{c.claim}</p>
                </div>
                <GradeBadge grade={c.grade} />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="font-mono text-[0.62rem] uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }} aria-hidden="true">confidence</span>
                <span className="relative h-1.5 flex-1 overflow-hidden rounded-full"
                  role="progressbar" aria-label={`Confidence in this claim`} aria-valuenow={c.confidence} aria-valuemin={0} aria-valuemax={100}
                  style={{ background: "var(--color-line-strong)" }}>
                  <span className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${c.confidence}%`, background: "var(--color-forest-soft)" }} />
                </span>
                <span className="font-mono text-[0.7rem]" aria-hidden="true">{c.confidence}</span>
              </div>
              <p className="mt-4 rounded-xl px-3 py-2 text-[0.78rem] italic" style={{ background: "var(--color-paper-deep)", color: "var(--color-ink-soft)" }}>“{c.allowedWording}”</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[0.72rem]" style={{ color: "var(--color-ink-faint)" }}>
                <span style={{ color: "var(--color-blush-ink)" }}>⚠ {c.safety}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.sources.map((s) => {
                  const src = srcMap.get(s);
                  return <a key={s} href={src?.url ?? "#"} target="_blank" rel="noreferrer" className="chip hover:underline">{src?.publisher ?? s}</a>;
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Protocol layers ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <SectionHeading kicker="The core protocol" title={<>Layered support, <span className="italic">not</span> a pile of pills.</>} />
        <div className="mt-8 space-y-5">
          {category.protocol.map((layer) => (
            <div key={layer.name} className="card-soft overflow-hidden">
              <div className="flex flex-wrap items-baseline justify-between gap-2 px-6 pt-5">
                <h3 className="font-display text-xl">{layer.name}</h3>
                <span className="font-mono text-[0.7rem] uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>{layer.mechanism}</span>
              </div>
              <p className="px-6 pt-2 text-[0.88rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{layer.rationale}</p>
              <div className="mt-4 border-t" style={{ borderColor: "var(--color-line)" }}>
                {layer.ingredients.map((ing) => (
                  <div key={ing.name} className="flex flex-wrap items-center justify-between gap-3 border-b px-6 py-3 last:border-b-0" style={{ borderColor: "var(--color-line)" }}>
                    <div><span className="font-medium">{ing.name}</span> <span className="text-[0.78rem]" style={{ color: "var(--color-ink-faint)" }}>· {ing.role}</span></div>
                    <div className="flex items-center gap-3 text-[0.78rem]" style={{ color: "var(--color-ink-soft)" }}>
                      <span className="font-mono">{ing.dose}</span><span className="hidden sm:inline">· {ing.timing}</span>
                      <GradeBadge grade={ing.grade} />
                    </div>
                  </div>
                ))}
              </div>
              {layer.lifestyle.length > 0 && (
                <div className="flex flex-wrap gap-2 px-6 py-4">
                  {layer.lifestyle.map((l) => <span key={l} className="chip">{l}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Diet & schedule ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="card-soft p-6">
            <Eyebrow>Diet & routine layer</Eyebrow>
            <ul className="mt-4 space-y-2.5">{category.diet.map((d) => <li key={d} className="flex gap-2.5 text-[0.9rem]"><Leaf size={15} className="mt-0.5 shrink-0" style={{ color: "var(--color-forest-soft)" }} />{d}</li>)}</ul>
          </div>
          <div className="card-soft p-6">
            <Eyebrow>Daily schedule</Eyebrow>
            <ul className="mt-4 space-y-2.5">{category.dailySchedule.map((d, i) => <li key={d} className="flex gap-3 text-[0.9rem]"><span className="font-mono text-[0.7rem]" style={{ color: "var(--color-gold-deep)" }}>{String(i + 1).padStart(2, "0")}</span>{d}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <SectionHeading kicker="What to expect" title="An honest timeline" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {category.expectedTimeline.map((t) => (
            <div key={t.week} className="card-soft p-5">
              <span className="font-mono text-[0.7rem] uppercase tracking-wider" style={{ color: "var(--color-gold-deep)" }}>{t.week}</span>
              <h3 className="mt-2 font-medium">{t.title}</h3>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{t.description}</p>
              <p className="mt-3 chip">{t.metric}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Safety screen ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <RuleCard title="Safety before commerce">
            A short intake runs a safety screen <strong>before</strong> any package is recommended. Products are
            gated behind evidence, safety and sourcing — if a flag fires, we route you to an expert or clinician
            instead of selling you pills.
          </RuleCard>
          <div className="card-soft p-6">
            <Eyebrow>The intake screens for</Eyebrow>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.safetyFlags.map((f) => <span key={f} className="rounded-full px-3 py-1.5 text-[0.78rem]" style={{ background: "var(--color-blush)", color: "var(--color-blush-ink)" }}>{f}</span>)}
            </div>
            <SafetyNote><strong>No cure claims.</strong> This is adjunctive natural support — educational only, never a replacement for your clinician.</SafetyNote>
          </div>
        </div>
      </section>

      {/* ── Package ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <SectionHeading kicker="Curated package" title={<>Trust, turned into a <span className="italic">followable</span> regime.</>}
          lead="Each item maps to a protocol role, an evidence grade and a separate product-quality score. One-time or subscription." />
        <div className="mt-8 space-y-5">
          {category.bundleIds.map((bid) => { const b = getBundle(bid); return b ? <BundleCard key={bid} bundle={b} ctaHref={`/c/${category.id}/package`} /> : null; })}
        </div>
      </section>

      {/* ── CTA row ── */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { href: "/guru", icon: Sparkles, title: "Ask the AI Guru", body: "Explains the reviewed protocol and evidence grades — never invents claims." },
            { href: "/expert", icon: UserRound, title: "Add an expert chart", body: "A credentialed Ayurveda or nutrition expert reviews and personalises your plan." },
            { href: "/companion", icon: CalendarHeart, title: "Activate the companion", body: "Daily reminders, weekly check-ins, refills and adherence." },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="card-soft p-6 transition-transform hover:-translate-y-1">
              <c.icon size={20} style={{ color: "var(--color-forest)" }} />
              <h3 className="mt-3 font-medium">{c.title}</h3>
              <p className="mt-1.5 text-[0.82rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>{c.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="pt-16"><Footer /></div>
    </div>
  );
}
