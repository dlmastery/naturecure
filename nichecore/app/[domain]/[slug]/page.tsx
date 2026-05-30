import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Sparkles, UserRound, ShieldCheck } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { journeys, DOMAIN_LABELS, getBundle } from "@/lib/data";
import { getCategory } from "@/lib/categories";
import type { Journey, JourneyDomain } from "@/lib/types";
import { Eyebrow, GradeBadge, FreshnessChip, RiskTag, RuleCard, SafetyNote } from "@/components/ui";
import { BundleCard } from "@/components/bundle-card";
import { NextStep } from "@/components/next-step";
import { readDossier, splitDossierByH2 } from "@/lib/research";
import { Footer } from "@/app/page";
import { DossierShell, type SectionSpec } from "@/components/layout/dossier-shell";
import { SectionAnchor } from "@/components/layout/section-anchor";
import { SectionFooter } from "@/components/layout/section-footer";
import { ManifestoBand } from "@/components/layout/manifesto-band";
import { FoundationPillarRow } from "@/components/layout/foundation-pillar-row";
import { Callout } from "@/components/callouts/callout";

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

/** Heuristic mapper from any H2 slug → one of the 15 canonical tab ids. */
function tabFor(slug: string): string {
  if (/exec|summary|overview|primer/i.test(slug)) return "overview";
  if (/mechan|triad|science|sub-type/i.test(slug)) return "science";
  if (/phyto|otc|pharma|botanical/i.test(slug)) return "phyto";
  if (/tradition|ayurveda|tcm|unani|siddha|tibetan|homeopathy/i.test(slug)) return "traditions";
  if (/biophysical|pbm|sauna|cold|pemf|light/i.test(slug)) return "biophysical";
  if (/diet|food|meal|nutrition/i.test(slug)) return "diet";
  if (/lifestyle|yoga|breath|sleep|stress|exercise|anchor/i.test(slug)) return "lifestyle";
  if (/combo|stack|protocol/i.test(slug)) return "combos";
  if (/24-hour|daily-plan|day-plan|schedule|day/i.test(slug)) return "daily";
  if (/interaction|drug|safety/i.test(slug)) return "interactions";
  if (/scoring|score|comorbid|tracking/i.test(slug)) return "scoring";
  if (/timeline|implementation|months/i.test(slug)) return "timeline";
  if (/supplier|cost|brand|shopping|ecosystem/i.test(slug)) return "suppliers";
  if (/closing|paradigm|sovereign|patient/i.test(slug)) return "closing";
  if (/reference|biblio/i.test(slug)) return "references";
  return "overview";
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
  const chunks = dossier ? splitDossierByH2(dossier.body) : [];

  // Bucket chunks by canonical tab id.
  const chunksByTab: Record<string, { id: string; title: string; body: string }[]> = {};
  for (const c of chunks) {
    const tabId = tabFor(c.id);
    if (!chunksByTab[tabId]) chunksByTab[tabId] = [];
    chunksByTab[tabId].push(c);
  }
  const present = (id: string) => (chunksByTab[id]?.length ?? 0) > 0;

  // Build the rail manifest: always include overview + closing + (commerce) ;
  // include other sections only when the dossier has matching prose.
  const ALL_TABS: SectionSpec[] = [
    { id: "overview",     ordinal: "01", label: "Overview",           group: "START HERE" },
    { id: "science",      ordinal: "02", label: "The science",        group: "START HERE" },
    { id: "phyto",        ordinal: "03", label: "OTC phytochemicals", group: "YOUR PROTOCOL" },
    { id: "traditions",   ordinal: "04", label: "Traditional systems", group: "YOUR PROTOCOL" },
    { id: "biophysical",  ordinal: "05", label: "Biophysical",        group: "YOUR PROTOCOL" },
    { id: "diet",         ordinal: "06", label: "Diet & meal plan",   group: "YOUR PROTOCOL" },
    { id: "lifestyle",    ordinal: "07", label: "Lifestyle anchors",  group: "YOUR PROTOCOL" },
    { id: "combos",       ordinal: "08", label: "Daily combos",       group: "YOUR PROTOCOL" },
    { id: "daily",        ordinal: "09", label: "Master 24-hour plan", group: "YOUR PROTOCOL" },
    { id: "interactions", ordinal: "10", label: "Interaction matrix", group: "SAFETY & TRACKING" },
    { id: "scoring",      ordinal: "11", label: "Scoring instrument", group: "SAFETY & TRACKING" },
    { id: "timeline",     ordinal: "12", label: "12-month timeline",  group: "SAFETY & TRACKING" },
    { id: "suppliers",    ordinal: "13", label: "Package",            group: "REFERENCE & CARE" },
    { id: "closing",      ordinal: "14", label: "Closing paradigm",   group: "REFERENCE & CARE" },
    { id: "references",   ordinal: "15", label: "References",         group: "REFERENCE & CARE" },
  ];
  const tabs: SectionSpec[] = ALL_TABS.filter((t) => {
    if (t.id === "overview") return true;
    if (t.id === "closing") return true;
    if (t.id === "suppliers") return true; // package surface
    return present(t.id);
  });

  // If there's no dossier on disk, fall back to a minimal shell with overview + suppliers + closing.
  if (!dossier) {
    return (
      <DossierShell
        tabs={[
          { id: "overview",   ordinal: "01", label: "Overview",         group: "START HERE" },
          { id: "suppliers",  ordinal: "02", label: "Package",          group: "YOUR PROTOCOL" },
          { id: "closing",    ordinal: "03", label: "Safety & escalation", group: "REFERENCE & CARE" },
        ]}
        title={
          <span>
            {j.name}
            <span className="italic" style={{ color: "var(--color-forest)", marginLeft: "0.4em" }}>
              · {domainLabel}
            </span>
          </span>
        }
        primaryCta={parent ? { label: "Build my regime", href: `/c/${parent.id}/package` } : undefined}
        rightBadges={[<span key="adj" className="chip">adjunctive only</span>]}
      >
        <SectionAnchor
          id="overview"
          eyebrow="A patient-built reference"
          ordinal="01"
          title={
            <>
              {j.name},{" "}
              <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>without the snake oil.</em>
            </>
          }
          lede={j.consumerHook}
        >
          <div className="mx-auto max-w-[1080px]">
            <div className="mb-6 flex items-center gap-2 text-[0.75rem]" style={{ color: "var(--color-ink-faint)" }}>
              <Link href="/" className="hover:underline">Needs</Link>
              <span>/</span>
              <Link href="/atlas" className="hover:underline">{domainLabel}</Link>
              <span>/</span>
              <span style={{ color: "var(--color-ink)" }}>{j.name}</span>
            </div>
            <div className="mb-7 flex flex-wrap items-center gap-2">
              <FreshnessChip status={j.freshness} />
              <RiskTag risk={j.risk} />
              {j.gradeMix.map((g) => <GradeBadge key={g} grade={g} withLabel />)}
            </div>
            <div className="mb-9 flex flex-wrap items-center gap-3">
              {parent && (
                <Link href={`/c/${parent.id}/package`} className="btn-primary">
                  Build my regime <ArrowRight size={16} />
                </Link>
              )}
              <Link href="/guru" className="btn-ghost"><Sparkles size={15} /> Ask the Guru</Link>
            </div>
            <FoundationPillarRow
              pillars={[
                { ordinal: "01", title: "Evidence first",   desc: "Every claim graded, dated, sourced." },
                { ordinal: "02", title: "Natural protocols", desc: "OTC + home-administered only." },
                { ordinal: "03", title: "Recurring care",    desc: "Refills + app companion." },
                { ordinal: "04", title: "Honest boundaries", desc: "No cure claims." },
              ]}
            />
            <div className="mt-8">
              <Callout tone="note" title="A note on this journey.">
                A deep 360° dossier is on the roadmap. The package shape below shows what a regime looks like — full evidence will land in a forthcoming refresh.
              </Callout>
            </div>
          </div>
        </SectionAnchor>
        <SectionFooter cue="Roadmap" chapter="SC.01 · OVERVIEW" />

        <SectionAnchor
          id="suppliers"
          eyebrow="The package concept"
          ordinal="02"
          title={
            <>
              What a regime looks like for{" "}
              <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>{j.name.toLowerCase()}.</em>
            </>
          }
          lede="Here's the curated package shape we'd assemble. Each item is mapped to a protocol role and carries an evidence grade and a separate quality score."
        >
          <div className="mx-auto max-w-[1080px] grid gap-5 lg:grid-cols-[1fr_1.2fr]">
            <div className="card-soft p-6">
              <Eyebrow>Concept</Eyebrow>
              <p className="mt-3 text-[0.95rem] leading-relaxed">{j.packageConcept}</p>
              {parent && (
                <p className="mt-5 text-[0.85rem]" style={{ color: "var(--color-ink-soft)" }}>
                  Full evidence, mechanism map, dose ranges and safety details live in the{" "}
                  <Link href={`/c/${parent.id}`} className="font-medium" style={{ color: "var(--color-forest)" }}>{parent.name}</Link> hub.
                </p>
              )}
            </div>
            {bundle ? <BundleCard bundle={bundle} ctaHref={parent ? `/c/${parent.id}/package` : "/atlas"} /> : (
              <div className="card-soft flex items-center justify-center p-10 text-center">
                <p className="text-[0.9rem]" style={{ color: "var(--color-ink-soft)" }}>
                  This journey is part of the roadmap. Browse the{" "}
                  <Link href="/atlas" className="font-medium" style={{ color: "var(--color-forest)" }}>full atlas</Link> for related categories with shippable packages.
                </p>
              </div>
            )}
          </div>
        </SectionAnchor>
        <SectionFooter cue="The package shape" chapter="SC.02 · PACKAGE" />

        <SectionAnchor
          id="closing"
          eyebrow="Safety before commerce"
          ordinal="03"
          title={
            <>
              We route before we sell. <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>Always.</em>
            </>
          }
        >
          <div className="mx-auto max-w-[1080px] grid gap-5 lg:grid-cols-[1fr_1.2fr]">
            <RuleCard title="Safety before commerce">
              A short intake runs the safety screen before any package is recommended. If a flag fires, we route you to an expert or clinician instead of selling. Risk tier: <strong className="uppercase">{j.risk}</strong>.
            </RuleCard>
            <div className="card-soft flex flex-col gap-3 p-6">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} style={{ color: "var(--color-forest-soft)" }} />
                <Eyebrow>What this journey is — and isn&rsquo;t</Eyebrow>
              </div>
              <p className="text-[0.92rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
                Educational natural-wellness support and commerce. Not medical advice, diagnosis or treatment. Always consult a qualified professional and check medication interactions.
              </p>
              <SafetyNote>No cure claims. We grade the evidence and show the uncertainty.</SafetyNote>
              <Link href="/expert" className="mt-1 inline-flex items-center gap-2 text-[0.88rem] font-medium" style={{ color: "var(--color-forest)" }}>
                <UserRound size={15} /> Want a human expert chart? →
              </Link>
            </div>
          </div>
        </SectionAnchor>
        <SectionFooter cue="End of journey" chapter="SC.03 · CLOSING" />

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
      </DossierShell>
    );
  }

  // Dossier-backed render
  const dossierFor = (tabId: string) => chunksByTab[tabId] ?? [];
  return (
    <DossierShell
      tabs={tabs}
      title={
        <span>
          {j.name}
          <span className="italic" style={{ color: "var(--color-forest)", marginLeft: "0.4em" }}>
            · {domainLabel}
          </span>
        </span>
      }
      primaryCta={parent ? { label: "Build my regime", href: `/c/${parent.id}/package` } : undefined}
      rightBadges={[
        <span key="adj" className="chip">adjunctive only</span>,
        <span key="no-cure" className="chip">no cure claims</span>,
      ]}
    >
      {/* 01 · Overview */}
      <SectionAnchor
        id="overview"
        eyebrow="A patient-built reference · 360° protocol"
        ordinal="01"
        title={
          <>
            {j.name},{" "}
            <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>without the snake oil.</em>
          </>
        }
        lede={j.consumerHook}
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-6 flex items-center gap-2 text-[0.75rem]" style={{ color: "var(--color-ink-faint)" }}>
            <Link href="/" className="hover:underline">Needs</Link>
            <span>/</span>
            <Link href="/atlas" className="hover:underline">{domainLabel}</Link>
            <span>/</span>
            <span style={{ color: "var(--color-ink)" }}>{j.name}</span>
          </div>
          <div className="mb-7 flex flex-wrap items-center gap-2">
            <FreshnessChip status={j.freshness} />
            <RiskTag risk={j.risk} />
            {j.gradeMix.map((g) => <GradeBadge key={g} grade={g} withLabel />)}
          </div>
          <div className="mb-9 flex flex-wrap items-center gap-3">
            {parent && (
              <Link href={`/c/${parent.id}/package`} className="btn-primary">
                Build my regime <ArrowRight size={16} />
              </Link>
            )}
            <Link href="/guru" className="btn-ghost"><Sparkles size={15} /> Ask the Guru</Link>
          </div>
          <FoundationPillarRow
            pillars={[
              { ordinal: "01", title: "Evidence first",   desc: "Every claim graded, dated, sourced." },
              { ordinal: "02", title: "Natural protocols", desc: "OTC + home-administered only." },
              { ordinal: "03", title: "Recurring care",    desc: "Refills + app companion." },
              { ordinal: "04", title: "Honest boundaries", desc: "No cure claims. The refusal is the conversion." },
            ]}
          />
          <div className="mt-8">
            <Callout tone="note" title="Support the terrain.">
              We don&rsquo;t promise a cure. Adjunctive natural support, educational only — never a replacement for your clinician.
            </Callout>
          </div>
          <DossierChunks chunks={dossierFor("overview")} />
        </div>
      </SectionAnchor>
      <SectionFooter cue="The honest opening" chapter="SC.01 · OVERVIEW" />

      {/* Inner dossier-backed sections */}
      {tabs
        .filter((t) => !["overview", "suppliers", "closing", "references"].includes(t.id))
        .map((t) => (
          <SectionContent key={t.id} tab={t} chunks={dossierFor(t.id)} />
        ))}

      {/* 13 · Suppliers / Package */}
      <SectionAnchor
        id="suppliers"
        eyebrow="The package shape"
        ordinal="13"
        title={
          <>
            Quality-screened, <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>COA-backed.</em>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px] grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <div className="card-soft p-6">
            <Eyebrow>Concept</Eyebrow>
            <p className="mt-3 text-[0.95rem] leading-relaxed">{j.packageConcept}</p>
          </div>
          {bundle ? (
            <BundleCard bundle={bundle} ctaHref={parent ? `/c/${parent.id}/package` : "/atlas"} />
          ) : (
            <div className="card-soft flex items-center justify-center p-10 text-center">
              <p className="text-[0.9rem]" style={{ color: "var(--color-ink-soft)" }}>
                Browse the{" "}
                <Link href="/atlas" className="font-medium" style={{ color: "var(--color-forest)" }}>full atlas</Link>{" "}
                for related categories with shippable packages.
              </p>
            </div>
          )}
        </div>
        <div className="mx-auto mt-8 max-w-[1080px]">
          <DossierChunks chunks={dossierFor("suppliers")} />
        </div>
      </SectionAnchor>
      <SectionFooter cue="Quality is the moat" chapter="SC.13 · PACKAGE" />

      {/* 14 · Closing */}
      <SectionAnchor
        id="closing"
        eyebrow="The independent healing paradigm"
        ordinal="14"
        title={
          <>
            No prescription. No clinic. <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>No hospital.</em>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px]">
          <FoundationPillarRow
            pillars={[
              { ordinal: "01", title: "Evidence first",   desc: "Every claim graded, dated, sourced." },
              { ordinal: "02", title: "Natural protocols", desc: "OTC + home-administered only." },
              { ordinal: "03", title: "Recurring care",    desc: "Refills + app companion." },
              { ordinal: "04", title: "Honest boundaries", desc: "No cure claims." },
            ]}
          />
          <div className="mt-8">
            <DossierChunks chunks={dossierFor("closing")} />
          </div>
        </div>
      </SectionAnchor>
      <ManifestoBand keyword="SOVEREIGNTY" body={<>The user owns their body and their healing path.</>} />
      <SectionFooter cue="End of journey" chapter="SC.14 · CLOSING" />

      {/* 15 · References */}
      {present("references") && (
        <>
          <SectionAnchor
            id="references"
            eyebrow="References"
            ordinal="15"
            title={
              <>
                The numbered <em style={{ color: "var(--color-forest)", fontStyle: "italic" }}>bibliography.</em>
              </>
            }
          >
            <div className="mx-auto max-w-[1080px]">
              <DossierChunks chunks={dossierFor("references")} />
            </div>
          </SectionAnchor>
          <SectionFooter cue="Honour the sources" chapter="SC.15 · REFERENCES" />
        </>
      )}

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
    </DossierShell>
  );
}

/** Render one of the inner-protocol sections (science → timeline). */
function SectionContent({
  tab,
  chunks,
}: {
  tab: SectionSpec;
  chunks: { id: string; title: string; body: string }[];
}) {
  return (
    <>
      <SectionAnchor
        id={tab.id}
        eyebrow={tab.label}
        ordinal={tab.ordinal}
        title={
          <>
            {tab.label}
            <span style={{ color: "var(--color-ink-faint)" }}>.</span>
          </>
        }
      >
        <div className="mx-auto max-w-[1080px]">
          <DossierChunks chunks={chunks} />
        </div>
      </SectionAnchor>
      <SectionFooter cue={`Section ${tab.ordinal}`} chapter={`SC.${tab.ordinal} · ${tab.label.toUpperCase()}`} />
    </>
  );
}

function DossierChunks({
  chunks,
}: {
  chunks: { id: string; title: string; body: string }[];
}) {
  if (!chunks || chunks.length === 0) return null;
  return (
    <div className="mt-8 space-y-10">
      {chunks.map((c) => (
        <article key={c.id} className="dossier-prose" id={`chunk-${c.id}`}>
          <h3 className="font-display" style={{ fontSize: "1.35rem", color: "var(--color-forest)", marginTop: 0 }}>{c.title}</h3>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{c.body}</ReactMarkdown>
        </article>
      ))}
    </div>
  );
}
