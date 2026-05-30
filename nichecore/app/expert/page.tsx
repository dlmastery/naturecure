import Link from "next/link";
import { MapPin, Clock, ArrowRight, FileText, ShieldAlert, TriangleAlert } from "lucide-react";
import { experts } from "@/lib/data";
import { Eyebrow } from "@/components/ui";
import { Footer } from "@/app/page";

const CHART_FIELDS = ["Your goal", "Intake summary", "Excluded ingredients + why", "Recommended package", "Timing schedule", "Diet chart", "Lifestyle routine", "Safety notes", "What to track", "Follow-up date"];
const ESCALATION = ["Safety-sensitive category", "On medications", "Pregnancy / lactation", "Liver / kidney disease", "No improvement by milestone", "Wants an Ayurveda chart", "Multiple categories combined"];

const FLAG_LABEL: Record<string, string> = {
  meds: "prescription medications",
  preg: "pregnancy / lactation",
  organ: "liver or kidney disease",
  allergies: "allergies / sensitivities",
};

export default async function Experts({
  searchParams,
}: {
  searchParams: Promise<{
    from?: string;
    category?: string;
    reason?: string;
    meds?: string;
    preg?: string;
    organ?: string;
    allergies?: string;
  }>;
}) {
  const sp = await searchParams;
  const fromSafety = sp.from === "safety" || sp.from === "safety-prescreen";
  const flags = ["meds", "preg", "organ", "allergies"].filter(
    (k) => sp[k as keyof typeof sp] === "yes"
  );

  return (
    <div className="grain relative pb-8">
      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        {fromSafety && (
          <div
            className="mb-8 rounded-[var(--radius-card)] border p-5 sm:p-6"
            style={{
              background: "var(--color-terracotta-soft)",
              borderColor: "var(--color-terracotta)",
              color: "var(--color-terracotta-deep)",
            }}
            role="status"
            aria-live="polite"
            data-component="ExpertRoutedFromSafety"
          >
            <div className="flex items-center gap-2">
              <TriangleAlert size={18} />
              <span
                className="font-mono text-[0.7rem] uppercase tracking-[0.18em]"
              >
                Routed from safety screen
              </span>
            </div>
            <p className="mt-3 text-[0.92rem] leading-relaxed">
              <strong>Your interaction concerns are flagged for the expert.</strong>{" "}
              {flags.length > 0 ? (
                <>
                  You answered yes to{" "}
                  {flags
                    .map((f) => FLAG_LABEL[f] ?? f)
                    .join(", ")}{" "}
                  — the chart reviewer will see this on intake.
                </>
              ) : (
                <>
                  We&rsquo;re routing you here before any product is offered.
                  The chart reviewer will see your safety-screen note on intake.
                </>
              )}
              {sp.category && (
                <>
                  {" "}Context:{" "}
                  <Link
                    href={`/c/${sp.category}`}
                    className="underline"
                    style={{ color: "var(--color-terracotta-deep)" }}
                  >
                    {sp.category.replace(/-/g, " ")}
                  </Link>
                  .
                </>
              )}
            </p>
            <p className="mt-2 text-[0.85rem]">
              <em>No upcharge. The refusal is the conversion.</em>
            </p>
          </div>
        )}

        <Eyebrow>Human expert layer</Eyebrow>
        <h1 className="font-display mt-4 text-balance text-5xl leading-[1.0] sm:text-6xl">
          When trust needs a <span className="italic" style={{ color: "var(--color-forest)" }}>human</span>.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
          Credentialed Ayurveda practitioners, nutritionists and yoga therapists — mostly India-based —
          review your plan, screen interactions, and build a personalised chart. Scope is explicit; they
          never diagnose or prescribe outside their license.
        </p>
      </section>

      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        <div className="grid gap-5 lg:grid-cols-3">
          {experts.map((e) => (
            <div key={e.id} className="card-soft flex flex-col p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-xl">{e.name}</h3>
                  <p className="text-[0.82rem]" style={{ color: "var(--color-ink-soft)" }}>{e.role}</p>
                </div>
                <span className="font-display text-2xl" style={{ color: "var(--color-gold-deep)" }}>${e.price}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.74rem]" style={{ color: "var(--color-ink-faint)" }}>
                <span className="flex items-center gap-1"><MapPin size={12} /> {e.location}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {e.turnaround}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {e.credentials.map((c) => <span key={c} className="chip">{c}</span>)}
              </div>
              <ul className="mt-4 space-y-1.5 text-[0.82rem]" style={{ color: "var(--color-ink-soft)" }}>
                {e.specialties.map((s) => <li key={s}>· {s}</li>)}
              </ul>
              <button className="btn-primary mt-auto !mt-6 w-full justify-center !py-2.5">Request a chart <ArrowRight size={15} /></button>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-5 px-6 pt-16 sm:px-10 lg:grid-cols-2 lg:px-14">
        <div className="card-soft p-6">
          <div className="flex items-center gap-2"><FileText size={18} style={{ color: "var(--color-forest)" }} /><Eyebrow>What the expert chart includes</Eyebrow></div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {CHART_FIELDS.map((f) => <span key={f} className="rounded-xl px-3 py-2 text-[0.8rem]" style={{ background: "var(--color-paper-deep)" }}>{f}</span>)}
          </div>
        </div>
        <div className="card-soft p-6">
          <div className="flex items-center gap-2"><ShieldAlert size={18} style={{ color: "var(--color-blush-ink)" }} /><Eyebrow>The Guru escalates to a human when</Eyebrow></div>
          <ul className="mt-4 space-y-2 text-[0.86rem]">
            {ESCALATION.map((s) => <li key={s} className="flex items-center gap-2.5"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-blush-ink)" }} /> {s}</li>)}
          </ul>
          <Link href="/guru" className="mt-5 inline-flex items-center gap-2 text-[0.85rem] font-medium" style={{ color: "var(--color-forest)" }}>Back to the Guru <ArrowRight size={15} /></Link>
        </div>
      </section>

      <div className="pt-16"><Footer /></div>
    </div>
  );
}
