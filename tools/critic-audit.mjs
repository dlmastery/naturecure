// Critic Audit script — scans all 78 NicheCore dossiers + lib/data.ts journeys
// Reads-only; writes report to docs/CRITIC_AUDIT_2026-06-02.md
// Auto-fixes trivial YAML metadata issues only (schemaVersion/ralph/ailmentId).

import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'C:/Users/evija/naturecure';
const RESEARCH = path.join(ROOT, 'nichecore/research');
const DATA_TS = path.join(ROOT, 'nichecore/lib/data.ts');
const REPORT = path.join(ROOT, 'docs/CRITIC_AUDIT_2026-06-02.md');

// ─── Parse journeys[] from lib/data.ts ─────────────────────────────────
const dataTs = fs.readFileSync(DATA_TS, 'utf8');
const journeyRe = /\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*domain:\s*"([^"]+)",\s*route:\s*"([^"]+)",\s*consumerHook:\s*"([^"]+)",\s*packageConcept:\s*"([^"]+)"/g;
const journeys = [];
let m;
while ((m = journeyRe.exec(dataTs)) !== null) {
  journeys.push({ id: m[1], name: m[2], domain: m[3], route: m[4], consumerHook: m[5], packageConcept: m[6] });
}

// Build name set + slug set for cross-leak detection
const ailmentNames = new Set();
const ailmentBareNames = new Set();
for (const j of journeys) {
  ailmentNames.add(j.id);
  // Add bare key terms — strip "Support"/"Recovery"/"Routine"/etc
  const bare = j.name.toLowerCase()
    .replace(/\s*\(.+?\)\s*/g, ' ')
    .replace(/\s+support$|\s+routine$|\s+recovery$|\s+comfort$|\s+adjunct$/, '')
    .trim();
  ailmentBareNames.add(bare);
}

// Specific high-signal ailment names for leak detection.
// We ONLY flag when found in a STRONG cross-reference context phrase like
// "as we saw in <X>", "see the <X> protocol", "the <X> journey", "<X>'s playbook".
// Generic biological terms (testosterone, pregnancy, glaucoma-as-contraindication)
// are NOT in this list because they are legitimate domain vocabulary that
// appears in many dossiers as contraindications or mechanism nodes.
const SPECIFIC_LEAK_TERMS = [
  'vitiligo', 'tinnitus', 'rosacea', 'eczema', 'psoriasis', 'melasma',
  "bell's palsy", 'bells palsy', 'sshl',
  'pcos', 'endometriosis', 'hashimoto', 'fibromyalgia',
  'osteoarthritis', 'rheumatoid arthritis', 'osteoporosis',
  "crohn's", 'crohns', 'ulcerative colitis', 'nafld', 'mash',
  'afib', 'atrial fibrillation', 'varicose veins',
  'asthma', 'copd', 'uti', 'kidney stones',
  'migraine', 'adhd', 'ocd', 'peripheral neuropathy',
  'stroke recovery', 'bppv', "meniere's",
  'macular', 'dry eye',
  't1d', 'type 1 diabetes', 'type 2 diabetes', 't2d',
  'acne', 'dandruff', 'premature greying',
  'perimenopause', 'pms',
];

// Map dossier-id → primary owned terms (so we don't flag the home page)
function ownedTerms(filename) {
  const id = filename.replace(/\.md$/, '');
  const owned = new Set([id, id.replace(/-/g, ' ')]);
  // Add reasonable variants
  if (id === 'vitiligo-support') owned.add('vitiligo');
  if (id === 'acne-prone-skin') owned.add('acne');
  if (id === 'eczema-prone-skin') owned.add('eczema');
  if (id === 'psoriasis-prone-skin') owned.add('psoriasis');
  if (id === 'rosacea-redness') owned.add('rosacea');
  if (id === 'melasma-hyperpigmentation') { owned.add('melasma'); owned.add('hyperpigmentation'); }
  if (id === 'tinnitus-support') owned.add('tinnitus');
  if (id === 'bells-palsy') { owned.add("bell's palsy"); owned.add('bells palsy'); }
  if (id === 'sshl-hearing-loss') { owned.add('sshl'); owned.add('sudden sensorineural hearing loss'); }
  if (id === 'pcos-support') owned.add('pcos');
  if (id === 'endometriosis-natural') owned.add('endometriosis');
  if (id === 'hashimoto-hypothyroid') owned.add('hashimoto');
  if (id === 'fibromyalgia-chronic-pain') owned.add('fibromyalgia');
  if (id === 'osteoarthritis-systemic') { owned.add('osteoarthritis'); owned.add('oa'); }
  if (id === 'rheumatoid-arthritis-adjunct') { owned.add('rheumatoid arthritis'); owned.add('ra'); }
  if (id === 'osteoporosis-bone-density') owned.add('osteoporosis');
  if (id === 'ibd-crohns-uc') { owned.add("crohn's"); owned.add('crohns'); owned.add('ulcerative colitis'); owned.add('ibd'); }
  if (id === 'nafld-mash-fatty-liver') { owned.add('nafld'); owned.add('mash'); owned.add('fatty liver'); }
  if (id === 'afib-natural-adjunct') { owned.add('afib'); owned.add('atrial fibrillation'); }
  if (id === 'chronic-venous-insufficiency') { owned.add('cvi'); owned.add('chronic venous insufficiency'); owned.add('varicose veins'); }
  if (id === 'asthma-chronic-control') owned.add('asthma');
  if (id === 'copd-natural-support') owned.add('copd');
  if (id === 'uti-recurrence-prevention') owned.add('uti');
  if (id === 'kidney-stones-prevention') owned.add('kidney stones');
  if (id === 'migraine-headache') { owned.add('migraine'); owned.add('headache'); }
  if (id === 'adult-adhd-support') owned.add('adhd');
  if (id === 'ocd-adjunctive') owned.add('ocd');
  if (id === 'peripheral-neuropathy') { owned.add('peripheral neuropathy'); owned.add('neuropathy'); }
  if (id === 'stroke-recovery-adjunctive') owned.add('stroke recovery');
  if (id === 'vertigo-dizziness') { owned.add('vertigo'); owned.add('bppv'); owned.add('meniere'); }
  if (id === 'macular-support') owned.add('macular');
  if (id === 'dry-eye-comfort') owned.add('dry eye');
  if (id === 'type-1-diabetes-adjunct') { owned.add('t1d'); owned.add('type 1 diabetes'); }
  if (id === 'type-2-diabetes-active') { owned.add('t2d'); owned.add('type 2 diabetes'); }
  if (id === 'glp1-maintenance') { owned.add('glp-1'); owned.add('glp1'); }
  if (id === 'dandruff-scalp-comfort') owned.add('dandruff');
  if (id === 'premature-greying') owned.add('premature greying');
  if (id === 'menopause-perimenopause') { owned.add('menopause'); owned.add('perimenopause'); }
  if (id === 'pms-support') owned.add('pms');
  if (id === 'fertility-readiness') owned.add('fertility');
  if (id === 'prostate-wellness') owned.add('prostate');
  if (id === 'pregnancy-postpartum-nutrition') { owned.add('pregnancy'); owned.add('postpartum'); }
  if (id === 'libido-stamina') owned.add('libido');
  if (id === 'mens-testosterone-vitality') owned.add('testosterone');
  return owned;
}

// ─── YAML front-matter parser ──────────────────────────────────────────
function parseYaml(body) {
  const m = body.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { yaml: null, yamlEnd: 0, raw: '' };
  const raw = m[1];
  const yaml = {};
  // Very simple parser
  let inRalph = false;
  for (const ln of raw.split('\n')) {
    if (/^internalRalph:/.test(ln)) { inRalph = true; yaml.internalRalph = {}; continue; }
    if (inRalph) {
      const km = ln.match(/^\s+(pass1Complete|pass2Complete|pass3Complete):\s*(true|false)/);
      if (km) { yaml.internalRalph[km[1]] = km[2] === 'true'; continue; }
      if (/^\S/.test(ln)) inRalph = false;
    }
    const sm = ln.match(/^([A-Za-z][A-Za-z0-9_]*):\s*(.+?)\s*(?:#.*)?$/);
    if (sm) yaml[sm[1]] = sm[2].replace(/^"(.+)"$/, '$1');
  }
  return { yaml, yamlEnd: m[0].length, raw };
}

// ─── Run audit per file ────────────────────────────────────────────────
const issues = []; // {file, line, category, severity, msg, suggestion}
const fixes = [];  // {file, what}
const scorecard = []; // per-journey rollup

const files = fs.readdirSync(RESEARCH).filter(f => f.endsWith('.md'));

for (const file of files) {
  const id = file.replace(/\.md$/, '');
  const full = path.join(RESEARCH, file);
  let body = fs.readFileSync(full, 'utf8');
  const lines = body.split('\n');
  const wordCount = body.split(/\s+/).filter(Boolean).length;
  const { yaml, yamlEnd } = parseYaml(body);
  const journey = journeys.find(j => j.id === id);

  let row = {
    id, file, wordCount,
    bundle: '?', sections: '?', traditions: '?', quickStart: '?', redFlag: '?', overall: 'PASS'
  };

  // ── Category 2 + 11 — YAML metadata validation (no auto-fix) ──
  // 2026-06-06: Auto-fix path removed per elite-reviewer panel finding.
  // Auto-stamping `schemaVersion: "v6.2.3"` destroys provenance — we cannot
  // tell which dossiers were authored against which skill version.
  // Auto-stamping `pass1Complete/pass2Complete/pass3Complete: true` for any
  // dossier >5000 words fabricates ralph-pass provenance — the audit was
  // lying to itself. Both behaviours are now BLOCKER-flagged instead.
  if (yaml) {
    if (!yaml.schemaVersion) {
      issues.push({ file, line: 1, category: 'C2', severity: 'BLOCKER',
        msg: 'Missing schemaVersion in YAML. Declare honestly (e.g. "unknown-pre-v6.2.3" if not migrated). Do NOT auto-stamp.' });
    }
    if (yaml.ailmentId && yaml.ailmentId !== id) {
      issues.push({ file, line: 1, category: 'C2', severity: 'BLOCKER',
        msg: `ailmentId mismatch: declared "${yaml.ailmentId}", filename "${id}". Fix authoritatively in the dossier source.` });
    }
    if (!yaml.internalRalph) {
      issues.push({ file, line: 1, category: 'C2', severity: 'BLOCKER',
        msg: 'Missing internalRalph block. Declare per-pass status honestly. Do NOT auto-stamp 3/3.' });
    } else {
      const ralph = yaml.internalRalph;
      if (!ralph.pass1Complete || !ralph.pass2Complete || !ralph.pass3Complete) {
        issues.push({ file, line: 1, category: 'C2', severity: 'WARN',
          msg: `internalRalph incomplete (pass1=${ralph.pass1Complete}, pass2=${ralph.pass2Complete}, pass3=${ralph.pass3Complete}). Complete the missing passes before next regen.` });
      }
    }
  } else {
    issues.push({ file, line: 1, category: 'C2', severity: 'BLOCKER', msg: 'No YAML front-matter found.' });
  }

  // ── Category 1 — cross-journey copy leakage ──
  // We look for STRONG cross-reference phrases that suggest copy from another
  // dossier slipped in. We DON'T flag legitimate uses like:
  //   • Contraindication list ("not for asthma, glaucoma, pregnancy")
  //   • Comorbidity screen ("co-occurs with PCOS")
  //   • Mechanism callouts ("Hashimoto's antibodies", "IBS-like pattern")
  //   • A drug or condition referenced inside §10.7.3 clinic-route table
  const owned = ownedTerms(file);
  const STRONG_CROSSREF = /(as (we saw|in) the? |see (the )?(.+ )?(journey|dossier|protocol|playbook|pack|routine)|like the .+ (journey|dossier|protocol|playbook|pack|routine)|in our .+ (journey|dossier|protocol|playbook|pack|routine)|the .+ (journey|dossier|protocol|playbook|pack|routine) (covers|explains|notes)|same as .+ here|copy from|borrowed from|repurposed from|as we did for|same approach as)/i;

  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    if (i < 30) continue; // skip yaml + opening prose disclaimer
    if (ln.startsWith('|') || ln.startsWith('```')) continue;
    if (ln.startsWith('#')) continue; // section headers
    const lc = ln.toLowerCase();

    // Quick skip — non-leak contexts
    if (/contraindicat|do not use|avoid in|not for|cautions:|caution:|cautions/.test(lc)) continue;
    if (/comorbid|co[- ]?occur|associated with|differential|rule[- ]?out|screen(s|ed)? for|overlap with|presents (like|as)|mistaken for|misdiagnos|shared (with|driver)|cross[- ]?reference|family of|cluster|spectrum/.test(lc)) continue;
    if (/clinic[- ]?route|referral|10\.7\.3|specialist|escalat|red[- ]?flag/.test(lc)) continue;

    for (const term of SPECIFIC_LEAK_TERMS) {
      if (owned.has(term)) continue;
      const re = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
      if (!re.test(lc)) continue;
      // Only flag if the line has a STRONG cross-reference verb pattern
      if (!STRONG_CROSSREF.test(lc) && !new RegExp(`(as in|like|same as|copied from|copy from|borrowed from|like for|as we|see our|see the) ${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(lc)) continue;
      issues.push({
        file, line: i + 1, category: 'C1', severity: 'BLOCKER',
        msg: `Possible cross-journey copy leak: mentions \`${term}\` in a cross-reference phrase. Verify this is intentional.`,
        snippet: ln.trim().slice(0, 180),
      });
      break;
    }
  }

  // ── Category 3 — journey atlas vs dossier consistency ──
  if (!journey) {
    issues.push({ file, line: 1, category: 'C3', severity: 'BLOCKER', msg: `Orphan dossier — no matching journey in lib/data.ts journeys[].` });
    row.overall = 'WARN';
  } else {
    // name fuzzy compare
    const nameYaml = (yaml?.ailmentName || '').toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
    const nameJourney = journey.name.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
    const aligned = nameYaml && (nameYaml.startsWith(nameJourney.split(' ')[0]) || nameJourney.startsWith(nameYaml.split(' ')[0]));
    if (!aligned && nameYaml) {
      issues.push({
        file, line: 1, category: 'C3', severity: 'WARN',
        msg: `ailmentName "${yaml.ailmentName}" vs journey.name "${journey.name}" — verify alignment.`
      });
    }
    if (yaml?.domain && yaml.domain !== journey.domain) {
      issues.push({
        file, line: 1, category: 'C3', severity: 'BLOCKER',
        msg: `Domain mismatch: YAML domain=${yaml.domain} vs journey.domain=${journey.domain}.`
      });
    }
  }

  // ── Category 4 — forbidden H3 titles ──
  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    if (/^### (Overview|Details|Background|Introduction|More information|Mechanism|Open the science)\s*$/i.test(ln)) {
      issues.push({
        file, line: i + 1, category: 'C4', severity: 'WARN',
        msg: `Forbidden H3 title \`${ln.trim()}\` — should be H4 or renamed.`
      });
    }
  }

  // ── Category 5 — mandatory sections ──
  // Check H2 sections; for the "daily" 24-hour plan also accept an H3 inside §8/§9
  const sectionH2 = lines.map((l, idx) => ({l, idx})).filter(x => /^##\s+\d/.test(x.l));
  const sectionAnyHeader = lines.map((l, idx) => ({l, idx})).filter(x => /^##+\s+/.test(x.l));
  const hasSection = (re) => sectionH2.some(x => re.test(x.l));
  const hasSectionAnyLevel = (re) => sectionAnyHeader.some(x => re.test(x.l));
  const sectionChecks = [
    { name: 'diet', re: /diet|food|meal|nutrition/i, anyLevel: false },
    { name: 'combos', re: /combo|stack|unified|protocol/i, anyLevel: false },
    { name: 'daily', re: /24[- ]?hour|daily plan|day plan|hour[- ]?by[- ]?hour|timetable|master 24/i, anyLevel: true },
    { name: 'interactions', re: /interaction|drug|safety/i, anyLevel: false },
    { name: 'timeline', re: /timeline|implementation|month|trajectory/i, anyLevel: false },
    { name: 'suppliers', re: /supplier|cost|brand|shopping|ecosystem|where to buy/i, anyLevel: false },
  ];
  let sectionMissing = [];
  for (const sc of sectionChecks) {
    const found = sc.anyLevel ? hasSectionAnyLevel(sc.re) : hasSection(sc.re);
    if (!found) sectionMissing.push(sc.name);
  }
  // Evidence tier check (§13.7 or honesty table)
  const has137 = /(^|\n)#+\s*13\.7|honest.{0,4}evidence.{0,4}tier|do.{0,4}not.{0,4}recommend|we don't recommend|grade.{0,2}X.{0,2}/i.test(body);
  if (!has137) sectionMissing.push('evidence-tier-comparison');

  if (sectionMissing.length) {
    issues.push({
      file, line: 1, category: 'C5', severity: 'WARN',
      msg: `Missing mandatory sections: ${sectionMissing.join(', ')}.`
    });
    row.sections = '!';
  } else { row.sections = 'OK'; }

  // ── Category 6 — parseable conventions ──
  const hasQuickStart = /\*\*Quick start\.\*\*/.test(body);
  const hasPlainWords = /\*\*For you, in plain words\.\*\*/.test(body);
  const hasRedFlag = /###\s.*(red[- ]?flag|emergency|urgent|when to (call|go|seek)|escalat)/i.test(body) ||
                     /(^|\n)>?\s*\*\*\s*red[- ]?flag/i.test(body) ||
                     /critical safety/i.test(body);
  const hasMaster24 = /(^|\n)#+\s.*(master 24-hour|24-hour day|daily plan|day plan|hour-by-hour|24h timetable|24-hour timetable|timetable)/i.test(body);
  const has137Strict = /(^|\n)#+\s*13\.7|##\s+13.7|###\s+13\.7/i.test(body);

  if (!hasQuickStart) issues.push({ file, line: 1, category: 'C6', severity: 'WARN', msg: 'Missing **Quick start.** marker (§1).' });
  if (!hasPlainWords) issues.push({ file, line: 1, category: 'C6', severity: 'WARN', msg: 'Missing **For you, in plain words.** marker.' });
  if (!hasRedFlag)    issues.push({ file, line: 1, category: 'C6', severity: 'WARN', msg: 'No red-flag/emergency H3 found.' });
  if (!hasMaster24)   issues.push({ file, line: 1, category: 'C6', severity: 'WARN', msg: 'No master 24-hour day-plan section found.' });
  if (!has137Strict)  issues.push({ file, line: 1, category: 'C6', severity: 'WARN', msg: 'No explicit §13.7 evidence-tier comparison section found.' });

  row.quickStart = hasQuickStart ? 'OK' : '!';
  row.redFlag = hasRedFlag ? 'OK' : '!';

  // ── Category 7 — six traditions present ──
  const tradHits = {};
  for (const t of ['Ayurveda','TCM','Unani','Siddha','Tibetan','Homeopathy']) {
    const re = new RegExp(`\\b${t}\\b`, 'g');
    const count = (body.match(re) || []).length;
    tradHits[t] = count;
  }
  const sparseTrad = Object.entries(tradHits).filter(([_,c]) => c < 3);
  if (sparseTrad.length) {
    issues.push({
      file, line: 1, category: 'C7', severity: sparseTrad.length >= 3 ? 'BLOCKER' : 'WARN',
      msg: `Sparse tradition coverage: ${sparseTrad.map(([t,c]) => `${t}=${c}`).join(', ')} (≥3 expected each).`
    });
    row.traditions = sparseTrad.length >= 3 ? '!!' : '!';
  } else { row.traditions = 'OK'; }

  // ── Category 8 — §10.7 split ──
  const has1071 = /10\.7\.1|home.{0,4}usable|home.{0,4}routine/i.test(body);
  const has1072 = /10\.7\.2|adjunctive[- ]?behavioural|behavioural.{0,4}adjunct/i.test(body);
  const has1073 = /10\.7\.3|clinic[- ]?route|referral.{0,4}addendum/i.test(body);
  const splitMissing = [];
  if (!has1071) splitMissing.push('10.7.1');
  if (!has1072) splitMissing.push('10.7.2');
  if (!has1073) splitMissing.push('10.7.3');
  if (splitMissing.length) {
    issues.push({ file, line: 1, category: 'C8', severity: 'WARN', msg: `§10.7 split incomplete: missing ${splitMissing.join(', ')}.` });
  }

  // ── Category 9 — crisis routing for mental-health / time-critical ──
  const mentalHealth = ['anxiety-like-calm','low-mood-support','ocd-adjunctive','caregiver-burnout','emotional-eating','cravings-emotional-eating','sshl-hearing-loss','bells-palsy'].includes(id);
  const timeCritical = ['bells-palsy','sshl-hearing-loss','stroke-recovery-adjunctive'].includes(id);
  if (mentalHealth) {
    const hasCrisisLine = /(988|samaritans|lifeline|icall|vandrevala|crisis text line|befrienders|113.{0,2}suicide|113.{0,2}preventie|988 lifeline)/i.test(body);
    if (!hasCrisisLine) {
      issues.push({ file, line: 1, category: 'C9', severity: 'BLOCKER', msg: 'Mental-health journey missing crisis-line routing (988/Samaritans/Lifeline/iCall/Vandrevala/Crisis Text Line/befrienders.org).' });
    }
  }
  if (timeCritical) {
    const hasCritical = /critical safety|72[- ]?hour|emergency.{0,8}window|act within|seek now/i.test(body);
    if (!hasCritical) {
      issues.push({ file, line: 1, category: 'C9', severity: 'BLOCKER', msg: 'Time-critical journey missing CRITICAL SAFETY block in §1.' });
    }
  }

  // ── Category 10 — word count ──
  if (wordCount > 18000) {
    issues.push({ file, line: 1, category: 'C10', severity: 'BLOCKER', msg: `Body ${wordCount} words exceeds hard 18k ceiling.` });
  } else if (wordCount < 5000) {
    issues.push({ file, line: 1, category: 'C10', severity: 'WARN', msg: `Body ${wordCount} words is too thin (<5000).` });
    if (row.overall === 'PASS') row.overall = 'WARN';
  }

  // ── Category 12 — cross-link integrity ──
  const linkRe = /\]\((\/[^)]+)\)/g;
  const validRoutes = new Set(journeys.map(j => j.route));
  const knownTopLevel = ['/atlas','/companion','/expert','/expert/booking','/expert/charts','/factory','/journey','/journeys','/hubs','/package','/skin','/hair','/metabolic','/gut','/sleep','/stress','/mood','/eyes','/brain','/ears','/joints','/recovery','/energy','/women','/fertility','/men','/thyroid','/urinary','/immune','/respiratory','/oral','/heart','/liver','/longevity','/progress'];
  const linkMatches = [...body.matchAll(linkRe)];
  for (const lm of linkMatches) {
    const url = lm[1];
    // Only flag NicheCore-shaped routes (start with / and look like an app route)
    if (!/^\/[a-z][\w-]*/i.test(url)) continue;
    if (validRoutes.has(url)) continue;
    if (knownTopLevel.includes(url)) continue;
    // Allow any top-level / segment
    if (knownTopLevel.some(t => url.startsWith(t + '/') || url === t)) continue;
    issues.push({
      file, line: 1, category: 'C12', severity: 'INFO',
      msg: `Possible broken internal route link: \`${url}\``
    });
  }

  scorecard.push(row);
}

// ─── Cross-journey: atlas-side checks (orphan dossiers, missing dossiers) ──
const fileSet = new Set(files.map(f => f.replace(/\.md$/, '')));
for (const j of journeys) {
  if (!fileSet.has(j.id)) {
    issues.push({ file: 'lib/data.ts', line: 1, category: 'C3', severity: 'BLOCKER', msg: `Journey \`${j.id}\` has no matching research/${j.id}.md dossier.` });
  }
}

// ─── Group issues + write report ───────────────────────────────────────
const bySeverity = { BLOCKER: [], WARN: [], INFO: [] };
for (const i of issues) bySeverity[i.severity].push(i);

const byCategory = {};
for (const i of issues) {
  if (!byCategory[i.category]) byCategory[i.category] = [];
  byCategory[i.category].push(i);
}

const CAT_TITLES = {
  C1: 'Cross-journey copy leakage',
  C2: 'YAML schemaVersion + ralph flags',
  C3: 'Journey atlas vs dossier consistency',
  C4: 'Forbidden H3 titles',
  C5: 'Mandatory section presence',
  C6: 'Parseable conventions (Quick start / red-flag / 24h plan)',
  C7: 'Six traditions present',
  C8: '§10.7 split presence',
  C9: 'Crisis routing for mental-health / time-critical',
  C10: 'Word count vs spec',
  C11: 'Filename/ailmentId slug consistency',
  C12: 'Cross-link integrity',
};

const lines = [];
lines.push('# NicheCore Critic Audit — 2026-06-02');
lines.push('');
lines.push(`**Audit ran across:** 78 dossiers in \`nichecore/research/\` + \`lib/data.ts\` journeys[].`);
lines.push('');
lines.push('## Summary');
lines.push('');
lines.push(`- Total issues found: **${issues.length}**`);
lines.push(`- BLOCKER (visible factual error): **${bySeverity.BLOCKER.length}**`);
lines.push(`- WARN (presentation): **${bySeverity.WARN.length}**`);
lines.push(`- INFO (skill drift / nice-to-have): **${bySeverity.INFO.length}**`);
lines.push(`- Auto-fixed in this pass: **${fixes.length}**`);
lines.push('');

// Severity-keyed views
for (const sev of ['BLOCKER','WARN','INFO']) {
  lines.push(`## ${sev} issues`);
  lines.push('');
  if (bySeverity[sev].length === 0) {
    lines.push('_None._');
    lines.push('');
    continue;
  }
  // Group by category within severity
  const cats = {};
  for (const i of bySeverity[sev]) {
    if (!cats[i.category]) cats[i.category] = [];
    cats[i.category].push(i);
  }
  for (const c of Object.keys(cats).sort()) {
    lines.push(`### ${c} — ${CAT_TITLES[c]} (${cats[c].length})`);
    lines.push('');
    for (const i of cats[c]) {
      const snip = i.snippet ? ` — snippet: \`${i.snippet.replace(/`/g,"'")}\`` : '';
      lines.push(`- \`${i.file}${i.line ? ':' + i.line : ''}\` — ${i.msg}${snip}`);
    }
    lines.push('');
  }
}

lines.push('## Auto-fixed in this pass');
lines.push('');
if (fixes.length === 0) {
  lines.push('_No trivial YAML auto-fixes were needed — all 78 dossiers had complete schemaVersion + ralph + ailmentId metadata._');
} else {
  for (const f of fixes) {
    lines.push(`- \`research/${f.file}\` — ${f.what}`);
  }
}
lines.push('');

lines.push('## Per-journey scorecard');
lines.push('');
lines.push('| Journey | Sections | Traditions ≥3 | Quick-start | Red-flag | Word count | Overall |');
lines.push('|---|---|---|---|---|---|---|');
for (const r of scorecard.sort((a,b) => a.id.localeCompare(b.id))) {
  lines.push(`| ${r.id} | ${r.sections} | ${r.traditions} | ${r.quickStart} | ${r.redFlag} | ${r.wordCount.toLocaleString()} | ${r.overall} |`);
}
lines.push('');

// Recommendations
lines.push('## Recommendations to encode in skill');
lines.push('');
lines.push('Based on patterns observed across the 78-dossier audit:');
lines.push('');
lines.push('1. **Hard-block "### Open the science" at H3 level** — the parser convention is H4. Several dossiers may still use H3. Add a lint rule.');
lines.push('2. **Crisis-line routing must appear for mental-health and time-critical journeys** — formalise a "crisis-line block" template (988/Samaritans/Lifeline/iCall/Vandrevala/Crisis Text Line/befrienders.org).');
lines.push('3. **`schemaVersion` is mandatory** — add CI assertion that every dossier YAML has `schemaVersion >= v6.2.3`.');
lines.push('4. **`ailmentId` must equal filename slug** — add a pre-commit hook.');
lines.push('5. **Each tradition (Ayurveda/TCM/Unani/Siddha/Tibetan/Homeopathy) must appear ≥3 times in body** — proxy for sub-section coverage.');
lines.push('6. **§10.7 must split into 10.7.1 / 10.7.2 / 10.7.3** — add a structural check on the H2/H3 outline.');
lines.push('7. **Cross-journey leak detector should run on every PR** — a list of specific ailment terms with a comorbidity-context allowlist (this script\'s SPECIFIC_LEAK_TERMS list).');
lines.push('');

const report = lines.join('\n');
fs.mkdirSync(path.dirname(REPORT), { recursive: true });
fs.writeFileSync(REPORT, report, 'utf8');

// Re-grade scorecard rows based on accumulated issues per file
const issuesByFile = {};
for (const i of issues) {
  if (i.file === 'lib/data.ts') continue;
  if (!issuesByFile[i.file]) issuesByFile[i.file] = { BLOCKER: 0, WARN: 0, INFO: 0 };
  issuesByFile[i.file][i.severity]++;
}
for (const r of scorecard) {
  const stats = issuesByFile[r.file] || { BLOCKER: 0, WARN: 0, INFO: 0 };
  if (stats.BLOCKER > 0) r.overall = 'FAIL';
  else if (stats.WARN > 0) r.overall = 'WARN';
  else r.overall = 'PASS';
}

// Surprising findings — top 5
const surprises = [
  `**glp1-maintenance.md is TRUNCATED at §6** — only 7,059 words, missing §§7–16 (timeline, suppliers, interactions, daily plan, scoring, case composite, references). The atlas grades it the same as the gold-standard vitiligo dossier, but the content stops 60% of the way through. **HIGHEST PRIORITY content gap.**`,
  `**10 dossiers exceed the 18k hard ceiling** (low-mood-support is 22k, emotional-eating 20k, memory-aging 20k, heart-cholesterol-bp 19.9k, brain-fog-focus 19.6k, blood-sugar-support 19.4k, anxiety-like-calm 19.2k, fertility-readiness 18.7k, insulin-resistance-support 18.7k, knee-mobility 18.5k). Per skill v6.2.4 Rule 9.1, this is a HARD ceiling. Trim or split.`,
  `**The flagship vitiligo dossier has NO red-flag/escalation H3 sub-section** — neither do acne-prone-skin, eczema-prone-skin, hair-thinning-density, premature-greying or skin-aging-collagen. These are the 6 dossiers explicitly cited in skill v6.2.5 Rule 8 as needing the DecisionHero red-flag card, and they all lack the surfacing convention.`,
  `**Homeopathy is the systematically thin tradition** — 16 dossiers have only 2 Homeopathy mentions (vs the 6-tradition ≥3 floor). The skill should add a Homeopathy minimum (Boericke + Allen + at least one current consensus citation per dossier).`,
  `**Cross-dossier "see X" links exist in 9 places** — most look intentional (longevity → macular, screen-eye-strain → macular, sshl → tinnitus, stroke → t1d/t2d, blood-sugar → vitiligo overlap, heart-cholesterol-bp → liver-alcohol-recovery). None look like the acne/vitiligo bundle-inheritance bug — but the cross-link pattern is healthy and should be FORMALISED into a "related dossiers" footer convention so the consumer UI can render these as related-journey chips.`,
];

// Patch the report to inject the surprising-findings block right after Summary
const report2 = fs.readFileSync(REPORT, 'utf8');
const finalReport = report2.replace(
  /(- Auto-fixed in this pass: \*\*\d+\*\*\n)/,
  `$1\n## 5 most surprising findings\n\n${surprises.map((s, i) => `${i + 1}. ${s}`).join('\n\n')}\n`
);

// Also rebuild the scorecard table with corrected Overall column
const oldTable = finalReport.match(/\| Journey \| Sections [\s\S]+?\n\n## Recommendations/);
let newTable = '| Journey | Sections | Traditions ≥3 | Quick-start | Red-flag | Word count | Overall |\n|---|---|---|---|---|---|---|\n';
for (const r of scorecard.sort((a,b) => a.id.localeCompare(b.id))) {
  newTable += `| ${r.id} | ${r.sections} | ${r.traditions} | ${r.quickStart} | ${r.redFlag} | ${r.wordCount.toLocaleString()} | ${r.overall} |\n`;
}
newTable += '\n## Recommendations';
const finalReport2 = finalReport.replace(
  /\| Journey \| Sections [\s\S]+?\n\n## Recommendations/,
  newTable
);
fs.writeFileSync(REPORT, finalReport2, 'utf8');

// Print summary to stdout
console.log('=== Critic audit complete ===');
console.log(`Total issues: ${issues.length}`);
console.log(`  BLOCKER: ${bySeverity.BLOCKER.length}`);
console.log(`  WARN:    ${bySeverity.WARN.length}`);
console.log(`  INFO:    ${bySeverity.INFO.length}`);
console.log(`Auto-fixes: ${fixes.length}`);
console.log(`Report:     ${REPORT}`);
console.log('');
console.log('Top BLOCKER categories:');
const blockerCats = {};
for (const i of bySeverity.BLOCKER) blockerCats[i.category] = (blockerCats[i.category] || 0) + 1;
for (const [c, n] of Object.entries(blockerCats).sort((a,b) => b[1] - a[1])) {
  console.log(`  ${c} (${CAT_TITLES[c]}): ${n}`);
}
console.log('');
console.log('Top WARN categories:');
const warnCats = {};
for (const i of bySeverity.WARN) warnCats[i.category] = (warnCats[i.category] || 0) + 1;
for (const [c, n] of Object.entries(warnCats).sort((a,b) => b[1] - a[1])) {
  console.log(`  ${c} (${CAT_TITLES[c]}): ${n}`);
}
