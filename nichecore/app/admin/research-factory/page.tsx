import { factoryJobs } from "@/lib/data";
import { getCategory } from "@/lib/categories";
import { Eyebrow, FreshnessChip, Stat } from "@/components/ui";
import { Footer } from "@/app/page";

const STATES = ["draft", "evidence_extracted", "graded", "safety_screened", "expert_review", "approved", "published", "superseded", "withdrawn"];
const QUEUES = [
  { n: "Evidence upgrade / downgrade", c: 4 },
  { n: "Safety-sensitive recommendation", c: 7 },
  { n: "Product quality change", c: 2 },
  { n: "High-risk category review", c: 5 },
  { n: "Expert commentary", c: 3 },
];

export default function Factory() {
  const totals = factoryJobs.reduce(
    (a, j) => ({ src: a.src + j.sourcesScanned, claims: a.claims + j.claimsExtracted, flags: a.flags + j.safetyFlags }),
    { src: 0, claims: 0, flags: 0 },
  );
  const reviewCount = factoryJobs.filter((j) => j.status === "review_required").length;

  return (
    <div className="grain relative pb-8">
      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        <Eyebrow>Operator console · evidence factory</Eyebrow>
        <h1 className="font-display mt-4 text-balance text-4xl leading-tight sm:text-5xl">
          The backend that keeps every hub <span className="italic" style={{ color: "var(--color-forest)" }}>honest</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          Consumers never trigger raw research. A scheduled factory discovers sources, extracts and grades claims,
          screens safety, and routes sensitive changes to human review — then caches polished hubs.
        </p>
        <div className="mt-9 grid max-w-3xl grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4" style={{ borderColor: "var(--color-line-strong)" }}>
          <Stat value={String(factoryJobs.length)} label="categories tracked" />
          <Stat value={totals.src.toLocaleString()} label="sources scanned" />
          <Stat value={String(totals.claims)} label="claims extracted" />
          <Stat value={String(reviewCount)} label="awaiting review" />
        </div>
      </section>

      {/* Publication state machine */}
      <section className="px-6 pt-14 sm:px-10 lg:px-14">
        <Eyebrow>Publication state machine</Eyebrow>
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {STATES.map((s, i) => (
            <span key={s} className="flex items-center gap-1.5">
              <span className="rounded-full px-3 py-1.5 font-mono text-[0.7rem] lowercase" style={{ background: i >= 6 ? "var(--color-mint)" : "var(--color-paper-deep)", color: i >= 6 ? "var(--color-mint-ink)" : "var(--color-ink-soft)" }}>{s}</span>
              {i < STATES.length - 1 && <span style={{ color: "var(--color-ink-faint)" }}>→</span>}
            </span>
          ))}
        </div>
      </section>

      {/* Jobs table */}
      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        <Eyebrow>Refresh jobs</Eyebrow>
        <div className="card-soft mt-4 overflow-hidden">
          <div className="hidden grid-cols-[1.4fr_1fr_1.1fr_0.6fr_0.6fr_0.6fr_1.2fr] gap-3 border-b px-5 py-3 font-mono text-[0.62rem] uppercase tracking-wider sm:grid"
            style={{ borderColor: "var(--color-line)", color: "var(--color-ink-faint)" }}>
            <span>Category</span><span>Status</span><span>Cadence</span><span>Sources</span><span>Claims</span><span>Flags</span><span>Reviewer</span>
          </div>
          {factoryJobs.map((j) => {
            const cat = getCategory(j.categoryId);
            return (
              <div key={j.id} className="grid grid-cols-2 gap-3 border-b px-5 py-3.5 text-[0.82rem] sm:grid-cols-[1.4fr_1fr_1.1fr_0.6fr_0.6fr_0.6fr_1.2fr] sm:items-center"
                style={{ borderColor: "var(--color-line)" }}>
                <span className="font-medium">{cat?.name ?? j.categoryId}</span>
                <span><FreshnessChip status={j.status} /></span>
                <span className="hidden sm:block" style={{ color: "var(--color-ink-soft)" }}>{j.cadence}</span>
                <span className="hidden font-mono sm:block">{j.sourcesScanned}</span>
                <span className="hidden font-mono sm:block">{j.claimsExtracted}</span>
                <span className="hidden font-mono sm:block" style={{ color: j.safetyFlags > 10 ? "var(--color-blush-ink)" : "var(--color-ink-soft)" }}>{j.safetyFlags}</span>
                <span className="hidden text-[0.76rem] sm:block" style={{ color: "var(--color-ink-faint)" }}>{j.reviewer}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Review queues */}
      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        <Eyebrow>Human review queues</Eyebrow>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {QUEUES.map((q) => (
            <div key={q.n} className="card-soft flex items-center justify-between p-4">
              <span className="text-[0.86rem]">{q.n}</span>
              <span className="grid h-7 w-7 place-items-center rounded-full font-mono text-[0.72rem]" style={{ background: "var(--color-amber)", color: "var(--color-amber-ink)" }}>{q.c}</span>
            </div>
          ))}
        </div>
        <p className="mt-5 max-w-2xl text-[0.82rem] leading-relaxed" style={{ color: "var(--color-ink-faint)" }}>
          No consumer-facing core protocol is published from raw AI. The model drafts; humans approve. Forbidden
          trust anchors (FDA, FTC, US disease associations) are excluded by doctrine.
        </p>
      </section>

      <div className="pt-16"><Footer /></div>
    </div>
  );
}
