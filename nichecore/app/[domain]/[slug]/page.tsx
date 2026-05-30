import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Sparkles, UserRound, ShieldCheck, FlaskConical } from "lucide-react";
import { journeys, DOMAIN_LABELS, getBundle } from "@/lib/data";
import { getCategory } from "@/lib/categories";
import type { Journey, JourneyDomain } from "@/lib/types";
import { Eyebrow, GradeBadge, FreshnessChip, RiskTag, SectionHeading, RuleCard, SafetyNote } from "@/components/ui";
import { BundleCard } from "@/components/bundle-card";
import { NextStep } from "@/components/next-step";
import { DossierRender } from "@/components/dossier";
import { readDossier } from "@/lib/research";
import { Footer } from "@/app/page";

// ── Each journey points to a parent category for the deep evidence hub.
//     Default by domain; specific journeys override where the natural parent differs.
const DOMAIN_TO_CATEGORY: Record<JourneyDomain, string | null> = {
  Skin: "skin-pigmentation",
  Hair: "hair-scalp",
  Metabolic: "weight-metabolism",
  Gut: "gut-bloating",
  StressSleep: "sleep-stress",
  BrainEye: "brain-focus",
  MobilityEnergy: "joints-mobility",
  HormoneVitality: "women-hormone",
  ImmuneOral: null,
  CardioLiverLongevity: null,
};

const PARENT_OVERRIDES: Record<string, string> = {
  // Metabolic
  "blood-sugar-support": "blood-sugar",
  "insulin-resistance-support": "blood-sugar",
  // StressSleep → mental wellbeing for mood/anxiety
  "anxiety-like-calm": "mental-wellbeing",
  "low-mood-support": "mental-wellbeing",
  "emotional-eating": "mental-wellbeing",
  // BrainEye → eye-screen for eye items
  "screen-eye-strain": "eye-screen",
  "dry-eye-comfort": "eye-screen",
  "macular-support": "eye-screen",
  // MobilityEnergy → energy-recovery for fatigue/sports
  "sports-recovery": "energy-recovery",
  "daily-energy-fatigue": "energy-recovery",
  // HormoneVitality → men's vitality for the men's journeys
  "mens-testosterone-vitality": "mens-vitality",
  "libido-stamina": "mens-vitality",
  "prostate-wellness": "mens-vitality",
};

function parentCategoryFor(j: Journey): string | null {
  return PARENT_OVERRIDES[j.id] ?? DOMAIN_TO_CATEGORY[j.domain];
}

function parseRoute(route: string): { domain: string; slug: string } | null {
  const m = route.match(/^\/([^/]+)\/([^/]+)$/);
  return m ? { domain: m[1], slug: m[2] } : null;
}

export function generateStaticParams() {
  return journeys
    // /skin/vitiligo has its own flagship page; Next prefers the specific route.
    .filter((j) => j.route !== "/skin/vitiligo")
    .map((j) => parseRoute(j.route))
    .filter((p): p is { domain: string; slug: string } => p !== null);
}

export default async function JourneyDetail({
  params,
}: {
  params: Promise<{ domain: string; slug: string }>;
}) {
  const { domain, slug } = await params;
  const route = `/${domain}/${slug}`;
  const j = journeys.find((x) => x.route === route);
  if (!j) notFound();

  const parentId = parentCategoryFor(j);
  const parent = parentId ? getCategory(parentId) : null;
  const bundle = parent ? getBundle(parent.bundleIds[0]) : null;
  const domainLabel = DOMAIN_LABELS[j.domain];
  const dossier = readDossier(j.id);

  return (
    <div className="grain relative pb-8">
      {/* Breadcrumb */}
      <section className="px-6 pt-12 sm:px-10 lg:px-14">
        <div className="flex items-center gap-2 text-[0.75rem]" style={{ color: "var(--color-ink-faint)" }}>
          <Link href="/" className="hover:underline">Needs</Link>
          <span>/</span>
          <Link href="/atlas" className="hover:underline">{domainLabel}</Link>
          <span>/</span>
          <span>{j.name}</span>
        </div>

        {/* Hero */}
        <div className="mt-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider"
              style={{ background: "var(--color-paper-deep)", color: "var(--color-ink-soft)" }}>
              {domainLabel}
            </span>
            <FreshnessChip status={j.freshness} />
            <RiskTag risk={j.risk} />
          </div>
          <h1 className="font-display mt-5 text-balance text-5xl leading-[1.0] sm:text-6xl">{j.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
            {j.consumerHook}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {j.gradeMix.map((g) => <GradeBadge key={g} grade={g} withLabel />)}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {parent && (
              <Link href={`/c/${parent.id}/package`} className="btn-primary">
                Build my regime <ArrowRight size={16} />
              </Link>
            )}
            {parent && (
              <Link href={`/c/${parent.id}`} className="btn-ghost">
                <FlaskConical size={15} /> Open the {parent.shortName} hub
              </Link>
            )}
            <Link href="/guru" className="btn-ghost"><Sparkles size={15} /> Ask the Guru</Link>
          </div>
        </div>
      </section>

      {/* The full research dossier — only present when we have one on disk */}
      {dossier && (
        <section className="px-6 pt-16 sm:px-10 lg:px-14">
          <SectionHeading
            kicker="The full research dossier"
            title={<>The 360° protocol — <span className="italic">global sources, OTC + home only</span>.</>}
            lead="Evidence-graded, AYUSH / TGA / EMA / NMPA / Health Canada anchored. Drugs only appear in §10.1 as 'if you are already on it' — never as recommendations. No clinic, no hospital, no prescription."
          />
          <div className="mt-8">
            <DossierRender dossier={dossier} />
          </div>
        </section>
      )}

      {/* Package concept teaser */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <SectionHeading
          kicker="The package concept"
          title={<>What a regime looks like for <span className="italic">{j.name.toLowerCase()}</span>.</>}
          lead={`Here's the curated package shape we'd assemble. Each item is mapped to a protocol role and carries an evidence grade and a separate quality score.`}
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <div className="card-soft p-6">
            <Eyebrow>Concept</Eyebrow>
            <p className="mt-3 text-[0.95rem] leading-relaxed">{j.packageConcept}</p>
            {parent && (
              <p className="mt-5 text-[0.85rem]" style={{ color: "var(--color-ink-soft)" }}>
                Full evidence, mechanism map, dose ranges and safety details live in the {" "}
                <Link href={`/c/${parent.id}`} className="font-medium" style={{ color: "var(--color-forest)" }}>{parent.name}</Link> hub.
              </p>
            )}
          </div>
          {bundle ? <BundleCard bundle={bundle} ctaHref={parent ? `/c/${parent.id}/package` : "/atlas"} /> : (
            <div className="card-soft flex items-center justify-center p-10 text-center">
              <p className="text-[0.9rem]" style={{ color: "var(--color-ink-soft)" }}>
                This journey is part of the roadmap. Browse the {" "}
                <Link href="/atlas" className="font-medium" style={{ color: "var(--color-forest)" }}>full atlas</Link> for related categories with shippable packages.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Safety + escalation */}
      <section className="px-6 pt-16 sm:px-10 lg:px-14">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <RuleCard title="Safety before commerce">
            A short intake runs the safety screen before any package is recommended. If a flag fires, we route you to
            an expert or clinician instead of selling. Risk tier: <strong className="uppercase">{j.risk}</strong>.
          </RuleCard>
          <div className="card-soft flex flex-col gap-3 p-6">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} style={{ color: "var(--color-forest-soft)" }} />
              <Eyebrow>What this journey is — and isn't</Eyebrow>
            </div>
            <p className="text-[0.92rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
              Educational natural-wellness support and commerce. Not medical advice, diagnosis or treatment.
              Always consult a qualified professional and check medication interactions.
            </p>
            <SafetyNote>No cure claims. We grade the evidence and show the uncertainty.</SafetyNote>
            <Link href="/expert" className="mt-1 inline-flex items-center gap-2 text-[0.88rem] font-medium" style={{ color: "var(--color-forest)" }}>
              <UserRound size={15} /> Want a human expert chart? →
            </Link>
          </div>
        </div>
      </section>

      <NextStep
        step={parent ? `04 · Personalise + safety screen` : `Browse related journeys`}
        title={parent ? "Build your reviewed regime" : "Explore the full 50-journey atlas"}
        body={parent
          ? `Answer four quick questions; if a flag fires we route you to a human instead of selling. Otherwise you'll see the ${parent.shortName.toLowerCase()} pack.`
          : `This journey is on the roadmap. The atlas shows every consumer need we track, with the evidence grade mix.`}
        href={parent ? `/c/${parent.id}/package` : "/atlas"}
        cta={parent ? "Personalise my regime" : "Open the atlas"}
      />

      <div className="pt-8"><Footer /></div>
    </div>
  );
}
