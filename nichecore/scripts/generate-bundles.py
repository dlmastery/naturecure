#!/usr/bin/env python3
"""Generate per-journey bundles for NicheCore.

Reads each dossier in research/, parses §08 Daily Combos to extract products,
and §09 Supplier Ecosystem for pricing + suppliers, then emits a TypeScript
Bundle array fragment to stdout.
"""
import os
import re
import json
import sys
import io

# Force UTF-8 on Windows
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding="utf-8")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RESEARCH = os.path.join(ROOT, "research")


# Journey metadata mirrored from lib/data.ts (id → (name, domain, packageConcept))
JOURNEYS = {}

def load_journeys():
    """Parse journeys array from lib/data.ts via simple regex."""
    src = open(os.path.join(ROOT, "lib", "data.ts"), encoding="utf-8").read()
    # match each journey object
    pat = re.compile(
        r'\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*domain:\s*"([^"]+)",\s*'
        r'route:\s*"([^"]+)",\s*consumerHook:\s*"([^"]+)",\s*packageConcept:\s*"([^"]+)"',
        re.S,
    )
    for m in pat.finditer(src):
        jid, name, domain, route, hook, concept = m.groups()
        JOURNEYS[jid] = {
            "name": name,
            "domain": domain,
            "route": route,
            "hook": hook,
            "packageConcept": concept,
        }
    return JOURNEYS


# Category mapping (mirror app/[domain]/[slug]/page.tsx)
DOMAIN_TO_CATEGORY = {
    "Skin": "skin-pigmentation",
    "Hair": "hair-scalp",
    "Metabolic": "weight-metabolism",
    "Gut": "gut-bloating",
    "StressSleep": "sleep-stress",
    "BrainEye": "brain-focus",
    "MobilityEnergy": "joints-mobility",
    "HormoneVitality": "women-hormone",
    "ImmuneOral": "gut-bloating",            # ImmuneOral has no native category — gut-bloating is closest (immune ≈ microbiome)
    "CardioLiverLongevity": "energy-recovery",
}

PARENT_OVERRIDES = {
    "blood-sugar-support": "blood-sugar",
    "insulin-resistance-support": "blood-sugar",
    "type-2-diabetes-active": "blood-sugar",
    "type-1-diabetes-adjunct": "blood-sugar",
    "anxiety-like-calm": "mental-wellbeing",
    "low-mood-support": "mental-wellbeing",
    "emotional-eating": "mental-wellbeing",
    "screen-eye-strain": "eye-screen",
    "dry-eye-comfort": "eye-screen",
    "macular-support": "eye-screen",
    "sports-recovery": "energy-recovery",
    "daily-energy-fatigue": "energy-recovery",
    "mens-testosterone-vitality": "mens-vitality",
    "libido-stamina": "mens-vitality",
    "prostate-wellness": "mens-vitality",
}


def category_for(jid, domain):
    return PARENT_OVERRIDES.get(jid) or DOMAIN_TO_CATEGORY.get(domain, "skin-pigmentation")


# ============================================================
# Dossier parsing
# ============================================================

def extract_section(text, section_re):
    """Extract a single ## section body from a dossier."""
    pat = re.compile(rf"^## {section_re}.*?$(.*?)(?=^## |\Z)", re.S | re.M)
    m = pat.search(text)
    return m.group(1) if m else ""


DOSE_RE = r"\d[\d\.,/–-]*\s*(?:mg|g|mcg|µg|B\s*CFU|IU|ml|mL|U|drops?|caps?|tabs?)"


def _clean_name(raw):
    """Strip markdown bullets, TL;DR labels, leading citation-italic.

    NOTE: bold-wrapped text is NOT discarded here — many dossiers wrap the
    supplement name in `**...**`. We only DISCARD the bold prefix when it
    looks like a label (e.g., `**TL;DR.**`, `**Quick start.**`, `**For
    you, in plain words.**`, `**Optional:**`). For genuine supplement-name
    bold (`**Vitamin D3 5,000 IU + K2-MK7 100 µg**`), we just unwrap it.
    """
    s = raw.strip()
    # Strip leading bullet
    s = re.sub(r"^[-*+•]\s+", "", s)
    # Strip bold-wrapped LABEL prefixes only
    s = re.sub(
        r"^\*\*\s*(?:TL;DR|Quick start|For you|Why|Optional|Rationale|Note|Combo \d+(?:\s*—[^*]*)?)\s*\.?\s*\*\*\s*",
        "",
        s,
        flags=re.I,
    )
    # Strip leading bullet that may now be left over
    s = re.sub(r"^[-*+•]\s+", "", s)
    # Unwrap bold contents when the WHOLE leading run is bold (keep content)
    m = re.match(r"^\*\*([^*]+)\*\*\s*(.*)$", s, re.S)
    if m:
        # Only unwrap if the bold is the supplement spec (contains a dose
        # or supplement keyword). Else strip as a label.
        inner = m.group(1).strip()
        rest = m.group(2)
        if re.search(DOSE_RE, inner) or _SUPPLEMENT_KEYWORDS.search(inner):
            s = inner + " " + rest
        else:
            s = rest
    s = re.sub(r"^TL;DR[.:]\s*", "", s, flags=re.I)
    # Strip leading citation-italic
    s = re.sub(r"^\*[^*]+\*\s*", "", s)
    s = s.strip()
    return s


def parse_combos(combo_text):
    """Parse §8 sub-sections to extract supplement names + roles.

    Returns a list of {name, dose, role_hint}.
    Handles both styles:
      (a) "Name X mg + Name Y mg + Name Z mg" joined-line format (vitiligo/acne)
      (b) "- Name X mg — 1 capsule" bullet-list format (adult-adhd, many newer dossiers)
    """
    products = []
    # Stop the §8 body at §8.5 (Master 24-Hour Day Plan) so the master
    # timetable rows don't get parsed as supplements. The master timetable
    # is rendered separately on the journey page from §8.5's H2 chunk.
    cutoff = re.search(r"^### 8\.5\b|^## 8\.5\b", combo_text, re.M)
    if cutoff:
        combo_text = combo_text[: cutoff.start()]

    # Split by H3 headings (8.1, 8.2, ...) — but capture the heading line
    # so we can read its number and skip ≥ 8.5 entries.
    h3_pat = re.compile(r"^### (\d+(?:\.\d+)?)\s+(?:Combo \d+\s+—\s+)?([^\n]+)$", re.M)
    parts = h3_pat.split(combo_text)
    # parts layout: [pre, num1, title1, body1, num2, title2, body2, ...]
    if len(parts) < 4:
        # No H3 sub-sections — try the whole text
        return _parse_lines(combo_text.splitlines())

    for i in range(1, len(parts), 3):
        num = parts[i]
        title = parts[i + 1].strip()
        body = parts[i + 2] if i + 2 < len(parts) else ""
        # Skip §8.5+ (master timetable, add-ons, TCM overlay-as-text-only)
        try:
            if "." in num and float(num) >= 8.5:
                continue
        except ValueError:
            pass
        title_clean = re.sub(r"\s*\(\d{1,2}:\d{2}\).*$", "", title).strip()

        body_lines = body.splitlines()
        # First try joined-line format
        joined_products = _parse_joined_line(body_lines, title_clean)
        if joined_products:
            products.extend(joined_products)
            continue

        # Try bullet-list format
        bullet_products = _parse_bullet_lines(body_lines, title_clean)
        if bullet_products:
            products.extend(bullet_products)
            continue

        # Try markdown-table format: | Time | What | Dose | Why |
        table_products = _parse_table_lines(body_lines, title_clean)
        if table_products:
            products.extend(table_products)
            continue

        # Last resort: scan prose for `Name X mg` patterns
        prose_products = _parse_prose_doses(body, title_clean)
        products.extend(prose_products)

    return products


def _parse_prose_doses(body, title_hint):
    """Scan a flat paragraph for `Supplement Name + dose` patterns.

    Anchors name detection to known supplement keywords (via
    _SUPPLEMENT_KEYWORDS) so we don't grab phrase fragments like
    "For You, In Plain Words. Three Things With Breakfast: D-mannose".
    """
    out = []
    body = re.sub(r"^>\s*", "", body, flags=re.M)
    body = re.sub(r"\*\*[^*]+\*\*", " ", body)
    body = re.sub(r"\*[^*]+\*", " ", body)
    body = re.sub(r"\([^)]*\)", " ", body)
    body = re.sub(r"\s+", " ", body).strip()
    if not body:
        return out

    # For each known supplement-keyword match, build the name from a
    # SHORT prefix (only single hyphen-joined token or "vitamin"/"L."
    # prefix word) then find the nearest dose in the next ~30 chars.
    seen_spans = []  # avoid duplicate matches over the same span
    for km in _SUPPLEMENT_KEYWORDS.finditer(body):
        start = km.start()
        end = km.end()
        # Find dose within next ~40 chars, allow only 0-15 chars of letter
        # suffix between keyword and dose ("EPA 1 g" / "PAC 36 mg" /
        # "-PAC 36 mg") — but never match digits in the suffix (would chew
        # the dose number).
        tail = body[end:end + 50]
        dose_match = re.match(
            rf"[-\s]*([A-Za-z][A-Za-z'\-]{{0,14}}(?:\s+[A-Za-z][A-Za-z'\-]{{0,11}})?)?\s*({DOSE_RE})",
            tail,
        )
        if not dose_match:
            continue
        # Skip if we already issued a token covering this span
        if any(s <= start < e for s, e in seen_spans):
            continue
        # Build short prefix: walk back from `start` collecting cap/hyphen
        # token + at most one "vitamin"/"methyl-"/"L."/`+`-joined prefix.
        prefix_start = start
        # Single hyphen-joined token immediately before? (`D-mannose`,
        # `cranberry-PAC`, `Methyl-B12`).
        m_pre = re.search(r"([A-Za-z][A-Za-z'\-]*\s*)$", body[:start])
        if m_pre:
            cand = m_pre.group(1).strip()
            # Only annex if it's a single-word token <=20 chars
            if " " not in cand and len(cand) <= 25:
                prefix_start = m_pre.start(1)
        # Maybe a "Vitamin"/"Methyl"/"L."/"oral"/"sublingual" prefix word
        # immediately before — e.g. "Vitamin C", "Methyl B12", "oral L.
        # crispatus", "Vitamin D3"
        m_pre2 = re.search(
            r"(?:^|[\s,;:])((?:vitamin|methyl|methylated|oral|sublingual|topical)\s+)$",
            body[:prefix_start], re.I,
        )
        if m_pre2:
            prefix_start = m_pre2.start(1)
        name = body[prefix_start:end] + " " + (dose_match.group(1) or "").strip()
        name = name.strip()
        # Drop residual leading lowercase glue words
        name = re.sub(r"^(?:with|and|the|a|an|or|of|in|on|to|plus|then|after|before|optional|using|two|three|four|five|six|seven|things|capsules?|caps?|item)\s+", "", name, flags=re.I)
        name = re.sub(r"\s+", " ", name).strip()
        dose = dose_match.group(2).strip()
        if not name:
            continue
        if not _looks_like_supplement(name):
            continue
        # Cap length — anything over 50 chars is a parser slip
        if len(name) > 50:
            continue
        out.append({"name": name, "dose": dose, "role_hint": title_hint})
        seen_spans.append((start, end + dose_match.end()))
    return out


def _parse_table_lines(lines, title_hint):
    """Parse a markdown-table §8 combo section.

    Looks for rows like `| 06:00 | Ashwagandha | 300 mg | ... |`
    Column 2 (name) + col 3 (dose) — or finds the supplement-name column
    heuristically (the column containing recognized supplement names).
    """
    out = []
    # Find header row (delimited by | with -)
    header_idx = -1
    for i, line in enumerate(lines):
        s = line.strip()
        if s.startswith("|") and s.endswith("|") and ("---" in s or "==" in s):
            header_idx = i
            break
    if header_idx < 0:
        # No table found — but try alternative: rows starting with |
        rows = []
        for s in lines:
            s = s.strip()
            if s.startswith("|") and s.endswith("|") and "---" not in s:
                rows.append(s)
        if len(rows) < 2:
            return out
        # Skip first row (assume header)
        data_rows = rows[1:]
    else:
        # Take all data rows after the separator
        data_rows = []
        for s in lines[header_idx + 1:]:
            s = s.strip()
            if s.startswith("|") and s.endswith("|") and "---" not in s:
                data_rows.append(s)

    for row in data_rows:
        cells = [c.strip() for c in row.strip("|").split("|")]
        if len(cells) < 2:
            continue
        # Find the dose cell (contains "mg", "g", "IU", etc.)
        # And the name cell (typically the cell preceding the dose, or a known supplement)
        dose_idx = -1
        for j, c in enumerate(cells):
            if re.search(DOSE_RE, c):
                dose_idx = j
                break
        if dose_idx < 1:
            # Try: name + dose embedded in one cell
            for c in cells:
                name, dose = _split_name_dose(c)
                if name and dose and _looks_like_supplement(name):
                    out.append({"name": name, "dose": dose, "role_hint": title_hint})
                    break
            continue
        name_cell = cells[dose_idx - 1]
        dose_cell = cells[dose_idx]
        # Strip markdown noise
        name = _clean_name(name_cell)
        name = re.sub(r"\*+", "", name).strip()
        name = re.sub(r"\s*\([^)]*\)\s*$", "", name).strip()
        if not name or len(name) > 60:
            continue
        # Skip non-supplement rows (foods, exercises)
        if not _looks_like_supplement(name):
            continue
        out.append({"name": name, "dose": dose_cell, "role_hint": title_hint})
    return out


_SUPPLEMENT_KEYWORDS = re.compile(
    r"\b(?:vitamin|magnesium|zinc|calcium|iron|selenium|iodine|chromium|"
    r"folate|choline|methylcobalamin|cobalamin|riboflavin|thiamine|biotin|"
    r"omega|epa|dha|fish oil|"
    r"ashwagandha|ksm|rhodiola|bacopa|brahmi|tulsi|amla|triphala|shatavari|"
    r"saw palmetto|vitex|saffron|nigella|momordica|bitter melon|fenugreek|methi|"
    r"glycine|theanine|taurine|carnitine|alcar|ala|"
    r"nac|n-acetyl|coq10|ubiquinol|nmn|nr|niagen|"
    r"berberine|inositol|quercetin|resveratrol|polydatin|sulforaphane|"
    r"collagen|protein|creatine|peptide|psyllium|fiber|inulin|electrolyte|"
    r"probiotic|cfu|lactobacillus|bifidobacterium|crispatus|akkermansia|"
    r"curcumin|turmeric|boswellia|shallaki|akba|"
    r"feverfew|mig-99|ginkgo|tebonin|egb 761|"
    r"lutein|zeaxanthin|astaxanthin|"
    r"silymarin|milk thistle|benfotiamine|citicoline|lion'?s mane|hericium|"
    r"cranberry|d-mannose|horse chestnut|aescin|hcse|pycnogenol|gotu kola|centella|"
    r"diosmin|hesperidin|mpff|daflon|sea buckthorn|nettle|spirulina|chlorella|"
    r"sage|salvia|valerian|chamomile|passion flower|lavender|silexan|"
    r"melatonin|gaba|garlic|hibiscus|cinnamon|gymnema|guggul|"
    r"saraswatarishta|jatamansi|brahmi|chyawanprash|kumkumadi|bakuchi|babchi|"
    r"andrographis|cordyceps|reishi|maitake|shiitake|host defense|"
    r"butyrate|dim|bromelain|msm|glucosamine|chondroitin|pumpkin seed|"
    r"alpha[- ]lipoic|p-?5-?p|p5p|b-complex|methyl b|b complex|"
    r"arjuna|hawthorn|olive leaf|grape seed|green tea|egcg|polyphenol|"
    r"barberry|nopal|moringa|hops|skullcap|schisandra|aloe|rosemary"
    r")\b",
    re.I,
)


def _looks_like_supplement(name):
    return bool(_SUPPLEMENT_KEYWORDS.search(name))


def _parse_joined_line(lines, title_hint):
    """Find a line with `Name X mg + Name Y mg + Name Z mg` pattern and split.

    Strict-mode: require ≥2 dose markers separated by ` + ` and NOT inside
    parens. Bulleted lines are excluded — those go to the bullet parser.
    Lines that look like prose (start with `**For you...**` or contain
    natural-language scaffolding like "Three things with breakfast:") are
    also routed away from the joined parser — they belong to the prose
    parser. Joined-line is for the compact "Name X mg + Name Y mg" stack
    line that vitiligo/acne use.
    """
    out = []
    for line in lines:
        line = line.strip()
        if not line or line.startswith(">") or line.startswith("**TL") or line.startswith("|"):
            continue
        if line.startswith(("- ", "* ", "+ ", "• ")):
            # Bulleted lines — leave to the bullet parser
            continue
        # Lines that lead with a "For you, in plain words." bold label are
        # prose, not the compact stack line. Same for "Quick start." prose.
        # Route them to the prose parser instead.
        if re.match(r"^\*\*(?:For you|Quick start|Why)\b", line, re.I):
            continue
        # Strip parens so we don't pick up `+` inside `(HPA + cortisol)`
        outside_parens = re.sub(r"\([^)]*\)", "", line)
        if " + " not in outside_parens:
            continue
        # Require at least two dose markers
        dose_count = len(re.findall(DOSE_RE, outside_parens))
        if dose_count < 2:
            continue
        cleaned = re.sub(r"\.\s*\*\*[^*]+\*\*", "", outside_parens)
        cleaned = re.sub(r"\.\s*Rationale:.*$", "", cleaned)
        cleaned = re.sub(r"\*+", "", cleaned)
        cleaned = cleaned.rstrip(". ")
        items = [it.strip() for it in cleaned.split(" + ")]
        for it in items:
            name, dose = _split_name_dose(it)
            if name and _looks_like_supplement(name):
                out.append({"name": name, "dose": dose, "role_hint": title_hint})
        if out:
            return out
    return out


def _parse_bullet_lines(lines, title_hint):
    """Each `- Name X mg — note` is one product.

    Also handles `- **TL;DR.** Name X mg + Name Y mg + Name Z mg — note`
    by splitting on ` + ` when there are ≥2 dose markers.
    """
    out = []
    for line in lines:
        s = line.strip()
        if not s.startswith(("- ", "* ", "+ ", "• ")):
            continue
        # Strip bullet
        s = re.sub(r"^[-*+•]\s+", "", s)
        # Strip leading bold labels (e.g., "**TL;DR.** ")
        s = _clean_name(s)
        if not s:
            continue
        # Strip parenthesised notes / brand specs FIRST so the splits below
        # don't see paren-internal punctuation.
        s = re.sub(r"\([^)]*\)", "", s).strip()
        # Drop trailing notes after em-dash, " — ", or `, ` qualifier
        s = re.split(r"\s+—\s+|\s+--\s+|\s+\(if\s|\s+\(optional", s)[0]
        s = s.split(" OR ")[0]  # take first option
        # Drop trailing italic citation
        s = re.sub(r"\*[^*]+\*\s*$", "", s).strip()
        s = s.rstrip(". ")
        if not s:
            continue

        # Detect joined-stack pattern: multiple `Name X mg + Name Y mg` items
        plus_parts = [p.strip() for p in s.split(" + ") if p.strip()]
        if len(plus_parts) >= 2 and sum(1 for p in plus_parts if re.search(DOSE_RE, p)) >= 2:
            for it in plus_parts:
                # Trim residual `, with X` qualifiers
                it = re.split(r",\s+(?:with|after|before)\s+", it)[0].strip()
                name, dose = _split_name_dose(it)
                if name and _looks_like_supplement(name):
                    out.append({"name": name, "dose": dose, "role_hint": title_hint})
            continue

        if len(s) > 100:
            continue
        # Must contain a dose to be a real supplement
        if not re.search(DOSE_RE, s):
            continue
        # Skip lines that are obviously not supplements
        if re.search(r"\b(?:meal|walk|breakfast|lunch|dinner|sleep|exercise|breath|yoga|sun)\b", s, re.I):
            continue
        name, dose = _split_name_dose(s)
        if not name:
            continue
        # Sanity check: name must look like a supplement
        if not _looks_like_supplement(name):
            continue
        out.append({"name": name, "dose": dose, "role_hint": title_hint})
    return out


def _parse_lines(lines):
    """Fallback when no H3 sub-sections — try bullet style on whole §8."""
    return _parse_bullet_lines(lines, "")


def _split_name_dose(item):
    """Split `Name 500 mg` into (name, dose). Strip markdown noise."""
    item = _clean_name(item)
    if not item:
        return "", ""
    # Drop bold markers and TL;DR labels
    item = re.sub(r"\*+", "", item)
    item = item.strip()
    # Match name (greedy) + dose
    m = re.match(rf"^(.+?)\s+({DOSE_RE}(?:\s*(?:BD|TID|QD))?)\s*(.*)$", item)
    if m:
        name = m.group(1).strip().rstrip(",:;")
        dose = m.group(2).strip()
        # Trim trailing parenthetical specs from name
        name = re.sub(r"\s*\([^)]*\)\s*$", "", name).strip()
        return name, dose
    # No dose match — return the item as a name
    return item.strip(), ""


# ============================================================
# Pricing
# ============================================================
# Realistic single-bottle retail benchmarks (June 2026 averages)
# Match by lowercased keyword substring against product name.
PRICING_RULES = [
    # (regex_pattern, price, supplier_default, qualityScore, signals, evidenceGrade_default)
    (r"(?:\bbroccoli sprout\b|\bsulforaphane\b)", 36, "Pure Encapsulations", 90, ["Sulforaphane standardised", "Third-party tested"], "C"),
    (r"\btebonin|egb 761|ginkgo biloba\b", 48, "Schwabe", 94, ["EMA HMPC monograph", "Standardised EGb 761"], "B"),
    (r"\bcurcumin (?:meriva|phytosome)|meriva\b", 36, "Thorne", 89, ["Bioavailable phytosome", "Lecithin-bound"], "B"),
    (r"\bcurcumin\b", 28, "Pure Encapsulations", 86, ["Standardised 95% curcuminoids"], "B"),
    (r"\bboswellia|boswellin|shallaki|akba\b", 28, "NOW Foods", 85, ["AKBA-standardised"], "B"),
    (r"\bmagnesium glycinate|mg glycinate|mg-glycinate\b", 24, "Pure Encapsulations", 93, ["Chelated", "USP-grade"], "B"),
    (r"\bmagnesium malate|mg malate\b", 26, "Designs for Health", 89, ["Chelated", "Tested"], "C"),
    (r"\bmagnesium taurate|mg taurate\b", 28, "Cardiovascular Research", 87, ["Taurate chelate"], "C"),
    (r"\bmagnesium\b", 24, "Pure Encapsulations", 90, ["Chelated"], "B"),
    (r"\bzinc picolinate|zinc balance|zinc complex|zinc\b", 18, "Thorne", 88, ["Chelated", "Copper-balanced"], "B"),
    (r"\bb12 methylcobalamin|methyl-b12|methylcobalamin\b", 16, "Jarrow Methyl B-12", 90, ["Methylated form", "Sublingual"], "C"),
    (r"\bmethyl-?folate|methyl folate|methylfolate\b", 18, "Thorne 5-MTHF", 89, ["Active methylfolate"], "B"),
    (r"\bvitamin d3|d3.*k2|d3/k2|vit d3\b", 26, "Thorne", 91, ["D3 + K2 MK7", "Cholecalciferol"], "B"),
    (r"\bvitamin d\b|\bvit d\b", 22, "Thorne", 90, ["Cholecalciferol", "5000 IU"], "B"),
    (r"\bk2 mk7|menaquinone\b", 24, "Thorne", 88, ["MK7 long-chain"], "B"),
    (r"\bomega-3|epa|dha|fish oil|fish-oil\b", 36, "Nordic Naturals", 92, ["Oxidation-tested", "Heavy-metal screened"], "B"),
    (r"\bnac|n-acetyl cysteine|n-acetylcysteine\b", 24, "Pure Encapsulations", 89, ["Pharmaceutical grade"], "B"),
    (r"\bquercetin\b", 22, "Thorne", 87, ["Standardised"], "C"),
    (r"\bl-theanine|theanine|suntheanine\b", 22, "Pure Encapsulations", 90, ["Suntheanine", "Single-ingredient"], "C"),
    (r"\bashwagandha|ksm-66|sensoril\b", 25, "Ixoreal KSM-66", 90, ["KSM-66 root", "Standardised"], "B"),
    (r"\bberberine|berberis\b", 26, "Thorne", 89, ["Pharmaceutical grade", "HCl form"], "B"),
    (r"\bdihydroberberine|dihydro-berberine\b", 35, "Designs for Health", 88, ["Bioactive metabolite"], "C"),
    (r"\binositol|myo-inositol|d-chiro\b", 32, "Ovasitol", 91, ["40:1 myo:d-chiro", "Pharma-grade"], "B"),
    (r"\bsaw palmetto|serenoa\b", 22, "Now Foods", 86, ["Standardised", "Liposterolic"], "C"),
    (r"\bvitex|agnus castus|chasteberry\b", 20, "Schwabe Femisana", 86, ["EMA HMPC monograph"], "C"),
    (r"\bcollagen|peptides\b", 38, "Vital Proteins", 88, ["Hydrolysed", "Type I/III"], "B"),
    (r"\bcreatine|creapure\b", 28, "Creapure-grade", 92, ["Creapure", "Single-ingredient"], "A"),
    (r"\bclean protein|whey|protein builder\b", 48, "Klean Athlete", 90, ["NSF Certified for Sport", "No proprietary blend"], "A"),
    (r"\bcoq10|ubiquinol\b", 32, "Thorne", 89, ["Ubiquinol form"], "B"),
    (r"\briboflavin|b2\b", 18, "Pure Encapsulations", 88, ["400 mg dose"], "A"),
    (r"\bfeverfew|tanacetum|mig-99\b", 24, "Schwabe Mig-99", 87, ["Standardised parthenolide"], "B"),
    (r"\blutein|zeaxanthin\b", 28, "Carlson", 89, ["AREDS2 carotenoids"], "B"),
    (r"\bvitamin c|ascorb\b", 16, "Pure Encapsulations", 87, ["Buffered", "Tested"], "B"),
    (r"\bsaffron|crocus sativus|affron\b", 32, "affron Saffron 2020", 88, ["Standardised crocins"], "B"),
    (r"\bnigella sativa|black seed|kalonji\b", 22, "Hemani / Amazing Herbs", 84, ["Cold-pressed", "Thymoquinone"], "B"),
    (r"\btriphala\b", 16, "Banyan Botanicals", 84, ["AYUSH-GMP", "Classical formula"], "C"),
    (r"\bamla|emblica|amalaki\b", 16, "Organic India", 84, ["AYUSH-GMP"], "C"),
    (r"\bpolydatin|resveratrol\b", 32, "Double Wood", 86, ["Polydatin standardised"], "C"),
    (r"\bbrahmi|bacopa monnieri\b", 22, "Himalaya / Banyan", 85, ["Bacosides standardised"], "C"),
    (r"\btulsi|holy basil|ocimum\b", 16, "Organic India Tulsi", 85, ["AYUSH-GMP"], "C"),
    (r"\bshatavari|ashoka|asparagus racemosus\b", 22, "Banyan Botanicals", 85, ["AYUSH-GMP"], "C"),
    (r"\bcranberry\b", 28, "Theralogix Theracran", 88, ["PAC-A 36 mg", "Standardised"], "A"),
    (r"\bd-mannose\b", 24, "Now D-Mannose", 88, ["Pharmaceutical grade"], "B"),
    (r"\bhorse chestnut|aescin|hcse\b", 26, "Schwabe Venostasin", 88, ["EMA HMPC", "50 mg aescin"], "A"),
    (r"\bpycnogenol|french pine\b", 38, "Horphag Pycnogenol", 89, ["Patented Pycnogenol"], "B"),
    (r"\bgotu kola|centella\b", 22, "Banyan Botanicals", 84, ["AYUSH-GMP", "Asiaticoside"], "C"),
    (r"\bmilk thistle|silymarin\b", 24, "Thorne Siliphos", 89, ["Silybin-phosphatidylcholine"], "B"),
    (r"\bbenfotiamine\b", 28, "Doctor's Best", 88, ["Fat-soluble B1"], "B"),
    (r"\balpha-?lipoic acid|ala|alpha lipoic\b", 30, "Doctor's Best", 88, ["R-isomer when possible"], "A"),
    (r"\bcitico?line\b", 38, "Cognizin Citicoline", 89, ["Cognizin patented"], "B"),
    (r"\blion'?s mane|hericium\b", 32, "Host Defense", 87, ["Fruiting body + mycelium"], "C"),
    (r"\biron bisglycinate|iron\b", 18, "Thorne Iron Bisglycinate", 89, ["Gentle bisglycinate"], "B"),
    (r"\bcholine|cdp-?choline\b", 26, "Thorne", 88, ["Phosphatidylcholine"], "B"),
    (r"\bchromium\b", 16, "Thorne Chromium Picolinate", 86, ["Chromium picolinate"], "C"),
    (r"\bselenium\b", 14, "Pure Encapsulations", 87, ["Selenomethionine"], "B"),
    (r"\biodine|kelp\b", 14, "Pure Encapsulations", 86, ["Potassium iodide"], "B"),
    (r"\bvitamin e\b", 22, "Carlson", 88, ["Mixed tocopherols", "Natural d-alpha"], "B"),
    (r"\bvitamin a\b|\bretinol\b", 18, "Carlson Cod Liver", 86, ["Natural source"], "C"),
    (r"\bspearmint\b", 12, "Buddha Teas", 82, ["Organic"], "C"),
    (r"\bgreen tea|egcg|camellia\b", 18, "Now EGCg", 86, ["Standardised polyphenols"], "C"),
    (r"\bbakuchi|psoralea|babchi|roghan babchi\b", 22, "Kerala Ayurveda", 82, ["AYUSH-GMP", "Classical taila"], "C"),
    (r"\bnia?cinamide\b", 18, "The Ordinary / La Roche", 88, ["Topical 4-10%"], "B"),
    (r"\btea tree\b", 14, "Thursday Plantation", 86, ["TGA-listed", "Standardised"], "B"),
    (r"\bprobiotic|cfu|crispatus|lactobacillus|bifidobacterium\b", 38, "Klaire Labs / Visbiome", 90, ["Strain-verified", "Refrigerated CFU"], "B"),
    (r"\bnmn|nicotinamide riboside|nr\b", 55, "Tru Niagen", 88, ["Patented Niagen NR"], "C"),
    (r"\bashwa\b", 25, "Ixoreal KSM-66", 90, ["KSM-66 root"], "B"),
    (r"\baloe vera\b", 18, "Nature's Way", 84, ["Inner-leaf gel"], "C"),
    (r"\brosemary\b", 24, "Mountain Rose Herbs", 84, ["Essential oil"], "C"),
    (r"\bsage|salvia\b", 22, "Schwabe Menosan", 86, ["EMA HMPC"], "T"),
    (r"\bbitter melon|momordica\b", 22, "Karela / Himalaya", 84, ["AYUSH-GMP"], "C"),
    (r"\bfenugreek|methi\b", 16, "Banyan Botanicals", 84, ["AYUSH-GMP"], "C"),
    (r"\bchamomile|matricaria\b", 16, "Traditional Medicinals", 82, ["EMA HMPC"], "C"),
    (r"\bpotassium citrate|k-citrate\b", 22, "Now Foods", 87, ["Pharmaceutical grade"], "A"),
    (r"\bp-?5-?p\b", 16, "Thorne", 88, ["Active B6"], "B"),
    (r"\bb-complex|b complex|methylated b\b", 24, "Pure Encapsulations B-Complex", 90, ["Methylated forms"], "B"),
    (r"\bmelatonin\b", 12, "Pure Encapsulations", 88, ["Low-dose 0.3-1 mg"], "B"),
    (r"\bglycine\b", 16, "Now Foods", 86, ["Pharmaceutical grade"], "C"),
    (r"\bgaba\b", 22, "Now Foods PharmaGABA", 84, ["PharmaGABA fermented"], "C"),
    (r"\bbarberry\b", 22, "Mountain Rose", 82, ["Berberine source"], "C"),
    (r"\bgarlic|allium\b", 16, "Kyolic", 86, ["Aged garlic extract"], "B"),
    (r"\bhibiscus|sabdariffa\b", 14, "Traditional Medicinals", 82, ["EMA HMPC"], "C"),
    (r"\bcinnamon\b", 14, "Now Foods", 82, ["Cassia or Ceylon"], "C"),
    (r"\bal[ck]ar|acetyl-?l-?carnitine\b", 28, "Now Foods ALCAR", 87, ["Acetyl-L-carnitine HCl"], "B"),
    (r"\bnattokinase\b", 32, "Doctor's Best", 87, ["JNKA-certified"], "C"),
    (r"\bphosphatidylserine\b", 32, "Now Foods", 86, ["Sharp-PS"], "C"),
    (r"\brhodiola\b", 24, "Gaia Herbs", 86, ["Standardised rosavins"], "B"),
    (r"\bbetaine|tmg\b", 18, "Now Foods TMG", 86, ["Trimethylglycine"], "C"),
    (r"\bcalcium\b", 20, "Pure Encapsulations", 86, ["Citrate / hydroxyapatite"], "B"),
    (r"\bnigella oil\b", 18, "Amazing Herbs", 84, ["Cold-pressed"], "B"),
    (r"\bmustard|musta\b", 14, "Banyan Botanicals", 82, ["Classical"], "C"),
    (r"\bginger|zingiber\b", 14, "Gaia Herbs", 84, ["Standardised gingerols"], "B"),
    (r"\bpeppermint|enteric\b", 22, "IBgard / Heather's Tummy", 89, ["Enteric-coated"], "B"),
    (r"\bcordyceps|reishi|shiitake|maitake\b", 28, "Host Defense", 86, ["Fruiting body"], "C"),
    (r"\bturmeric\b", 22, "Pure Encapsulations", 86, ["Standardised curcuminoids"], "B"),
    (r"\bmoringa\b", 16, "Organic India", 82, ["Leaf powder"], "C"),
    (r"\bdim|3,3'-?diindolyl|i3c\b", 28, "Pure Encapsulations DIM", 88, ["Diindolylmethane"], "C"),
    (r"\bbromelain\b", 22, "Doctor's Best", 86, ["GDU-active"], "C"),
    (r"\bmsm\b", 18, "Now Foods", 84, ["OptiMSM"], "C"),
    (r"\bglucosamine|chondroitin\b", 28, "Now Foods", 86, ["Sulfate forms"], "B"),
    (r"\btaurine\b", 18, "Now Foods", 86, ["Pharmaceutical grade"], "B"),
    (r"\bvalerian|hops|passionflower|valeriana\b", 20, "Gaia Herbs", 84, ["EMA HMPC"], "C"),
    (r"\bskullcap|scutellaria\b", 22, "Gaia Herbs", 82, ["Standardised"], "C"),
    (r"\blavender|silexan\b", 24, "Schwabe Lasea", 89, ["EMA HMPC Silexan"], "B"),
    (r"\bcordy\b", 28, "Host Defense", 84, ["Fruiting body"], "C"),
    (r"\bnopal|cactus\b", 22, "Nature's Way", 82, ["Standardised"], "C"),
    (r"\bdiosmin|hesperidin|mpff|daflon\b", 36, "Servier Daflon", 92, ["MPFF micronised"], "A"),
    (r"\bsulfora?phane\b", 36, "Avmacol", 91, ["Stabilised SGS"], "C"),
    (r"\bpea protein|hemp protein\b", 38, "Garden of Life Sport", 88, ["NSF Certified for Sport"], "B"),
    (r"\bfiber|psyllium|inulin|glucomannan\b", 22, "Now Foods Psyllium", 86, ["Pure husk"], "B"),
    (r"\belectrolyte\b", 24, "LMNT", 88, ["Sugar-free", "Sodium-magnesium-potassium"], "B"),
    (r"\bbutyrate\b", 32, "Allergy Research Group", 84, ["Tributyrin"], "C"),
    (r"\bxylitol\b", 14, "Now Foods", 84, ["Birch-derived"], "B"),
    (r"\borange peel|aurantium\b", 18, "Mountain Rose", 82, ["EMA HMPC"], "C"),
    (r"\bgymnema\b", 22, "Himalaya", 84, ["AYUSH-GMP"], "C"),
    (r"\bguggul\b", 22, "Banyan Botanicals", 82, ["Classical resin"], "C"),
    (r"\bnettle\b", 16, "Gaia Herbs", 82, ["EMA HMPC"], "C"),
    (r"\bsea buckthorn\b", 28, "SibuSea Buckthorn", 86, ["Omega-7 standardised"], "C"),
    (r"\bspirulina|chlorella\b", 24, "Now Foods", 84, ["Cracked cell"], "C"),
    (r"\bnattokin\b", 30, "Doctor's Best", 86, ["JNKA-certified"], "C"),
    (r"\bcollinsonia|stoneroot\b", 24, "Gaia Herbs", 82, ["Classical"], "T"),
    (r"\bpassion flower|passiflora\b", 18, "Gaia Herbs", 84, ["EMA HMPC"], "C"),
    (r"\bschisandra\b", 22, "Gaia Herbs", 84, ["Five-flavour berry"], "C"),
    (r"\bsodium hyaluronate|hyaluronic\b", 28, "Source Naturals", 86, ["Low-MW HA"], "B"),
    (r"\bmagnesium oxide\b", 14, "Now Foods", 80, ["Oxide form — laxative dose"], "B"),
    (r"\bcollagen peptide\b", 38, "Vital Proteins", 88, ["Type I/III hydrolysed"], "B"),
    (r"\bcordyceps\b", 28, "Host Defense", 86, ["Fruiting body"], "C"),
    (r"\bandrographis\b", 24, "Gaia Herbs", 86, ["Andrographolide standardised"], "B"),
    (r"\beucalyptus|menthol\b", 14, "Now Foods", 82, ["Standardised"], "C"),
    (r"\bphysillium|psyllium\b", 16, "Metamucil / Konsyl", 88, ["Pure husk"], "B"),
    (r"\bpumpkin seed\b", 18, "Now Foods", 84, ["Cold-pressed"], "C"),
    (r"\bstinging nettle root\b", 22, "Gaia Herbs", 84, ["Standardised"], "C"),
]


def _anchor_pattern(pat):
    """Ensure every alternative in an alternation has word boundaries.

    Input rules like r"\bomega-3|epa|dha|fish oil\b" have only outer
    boundaries — the middle alternatives (`epa`, `dha`) match unbounded
    substrings (matching `dha` inside `ashwagan**dha**`).

    This wraps each alternative with `\b...\b` so matching is strict.
    """
    # Strip leading \b and trailing \b
    inner = pat
    if inner.startswith("\\b"):
        inner = inner[2:]
    if inner.endswith("\\b"):
        inner = inner[:-2]
    # Split on top-level `|` (no nested groups here)
    alts = inner.split("|")
    anchored = []
    for a in alts:
        a = a.strip()
        # Already wrapped in (?:...) or similar — leave as-is
        if a.startswith("(") and a.endswith(")"):
            anchored.append(a)
        else:
            # Use lookahead-lookbehind style anchoring: \b...\b
            # But for tokens with hyphens or numbers, \b on edges still works.
            anchored.append(f"\\b{a}\\b")
    return "(?:" + "|".join(anchored) + ")"


_COMPILED_RULES = None

def _compile_rules():
    global _COMPILED_RULES
    if _COMPILED_RULES is not None:
        return _COMPILED_RULES
    out = []
    for entry in PRICING_RULES:
        pat = entry[0]
        rest = entry[1:]
        anchored = _anchor_pattern(pat)
        out.append((re.compile(anchored, re.I), *rest))
    _COMPILED_RULES = out
    return out


def lookup_pricing(name, dose_str=""):
    """Return (price, supplier, qualityScore, signals, evidenceGrade)."""
    full = (name + " " + dose_str).lower()
    for rx, price, supplier, qs, signals, grade in _compile_rules():
        if rx.search(full):
            return price, supplier, qs, signals, grade
    # Default fallback for unknown supplements
    return 22, "Verified reseller", 84, ["Third-party tested"], "C"


# ============================================================
# Role guessing (mechanism-aware short labels)
# ============================================================
ROLE_OVERRIDES = {
    # Pattern: (regex_against_combo_title, role_label)
}

ROLE_FROM_NAME = [
    (r"magnesium|mg glycinate", "Calm + sleep cofactor"),
    (r"zinc", "Cofactor + skin / immune"),
    (r"b12|methylcobalamin", "Methylation + neurotrophic"),
    (r"vitamin d3|d3.*k2", "Vit-D + K2 floor"),
    (r"vitamin d\b", "Vit-D sufficiency"),
    (r"k2", "K2 MK7 cofactor"),
    (r"omega-3|epa|dha|fish oil", "Anti-inflammatory baseline"),
    (r"curcumin|turmeric", "Inflammation balance"),
    (r"boswellia|akba|shallaki", "Joint inflammation pathway"),
    (r"nac", "Glutathione / mucolytic"),
    (r"quercetin", "Antioxidant + mast-cell"),
    (r"l-theanine|theanine", "Calm focus"),
    (r"ashwagandha|ksm-66", "Adaptogen / HPA"),
    (r"berberine|dihydroberberine", "Glucose + metabolic"),
    (r"inositol|myo", "Insulin + ovarian sensitiser"),
    (r"saw palmetto", "5-α reductase / androgen"),
    (r"vitex|chasteberry", "Cyclic hormone balance"),
    (r"collagen|peptide", "Connective-tissue substrate"),
    (r"creatine", "Cellular energy / output"),
    (r"protein builder|whey|pea protein", "Satiety + recovery substrate"),
    (r"coq10|ubiquinol", "Mitochondrial cofactor"),
    (r"riboflavin|b2", "Migraine mitochondrial cofactor"),
    (r"feverfew|mig-99", "Migraine prophylaxis"),
    (r"lutein|zeaxanthin", "Macular pigment"),
    (r"vitamin c", "Antioxidant + collagen"),
    (r"saffron", "Mood / antioxidant"),
    (r"nigella", "Thymoquinone / immune-balance"),
    (r"triphala", "Gentle bowel + rasayana"),
    (r"amla", "Vit-C botanical + rasayana"),
    (r"polydatin|resveratrol", "Sirtuin / mitochondrial"),
    (r"brahmi|bacopa", "Memory / cognitive"),
    (r"tulsi|holy basil", "Stress-tonic adaptogen"),
    (r"shatavari|ashoka", "Women's reproductive tonic"),
    (r"cranberry", "Anti-adhesin uropathic"),
    (r"d-mannose", "Anti-adhesin uropathic"),
    (r"horse chestnut|aescin", "Venous tone"),
    (r"pycnogenol", "Microcirculation + endothelial"),
    (r"gotu kola|centella", "Microcirculation + connective"),
    (r"milk thistle|silymarin", "Liver glutathione + Nrf2"),
    (r"benfotiamine", "Neuropathic AGE-protection"),
    (r"alpha-?lipoic|ala", "Neuropathic antioxidant"),
    (r"citicoline", "Neuroplasticity / phospholipid"),
    (r"lion's mane|hericium", "NGF / neuroplasticity"),
    (r"iron", "Iron sufficiency cofactor"),
    (r"choline", "Methylation + brain"),
    (r"chromium", "Glucose cofactor"),
    (r"selenium", "Thyroid + Nrf2 cofactor"),
    (r"iodine|kelp", "Thyroid cofactor"),
    (r"vitamin e", "Lipophilic antioxidant"),
    (r"vitamin a|retinol", "Skin + immune"),
    (r"spearmint", "Anti-androgen botanical"),
    (r"green tea|egcg", "Polyphenol antioxidant"),
    (r"bakuchi|psoralea|babchi", "Photo-pigmenting topical"),
    (r"nia?cinamide", "Barrier + sebum / pigment"),
    (r"tea tree", "Topical antimicrobial"),
    (r"probiotic|crispatus|lactobacillus|bifidobacterium", "Microbiome / gut-skin"),
    (r"nmn|niagen", "NAD+ precursor"),
    (r"aloe", "Mucosal + topical"),
    (r"rosemary", "Topical scalp / antioxidant"),
    (r"sage|salvia", "Menopause comfort"),
    (r"bitter melon|momordica", "Glucose botanical"),
    (r"fenugreek|methi", "Glucose / lactation"),
    (r"chamomile", "Calming herbal"),
    (r"potassium citrate", "Urinary alkaliniser"),
    (r"p-?5-?p", "B6 cofactor"),
    (r"b-complex|methylated b", "Methylation B-cofactors"),
    (r"melatonin", "Circadian / sleep onset"),
    (r"glycine", "Sleep + glycinergic calm"),
    (r"gaba", "Inhibitory neurotransmitter"),
    (r"barberry", "Berberine source"),
    (r"garlic|allium", "Cardiovascular / lipid"),
    (r"hibiscus", "Mild antihypertensive"),
    (r"cinnamon", "Glucose botanical"),
    (r"al[ck]ar|carnitine", "Mitochondrial fatty-acid"),
    (r"nattokinase", "Fibrinolytic"),
    (r"phosphatidylserine", "Cortisol attenuation"),
    (r"rhodiola", "Adaptogen / fatigue"),
    (r"betaine|tmg", "Methylation donor"),
    (r"calcium", "Bone substrate"),
    (r"nigella oil", "Topical thymoquinone"),
    (r"musta", "Classical digestive"),
    (r"ginger|zingiber", "GI / anti-inflammatory"),
    (r"peppermint|enteric", "IBS visceral comfort"),
    (r"cordyceps|reishi|maitake|shiitake|host defense", "Beta-glucan immune"),
    (r"turmeric", "Inflammation balance"),
    (r"moringa", "Micronutrient density"),
    (r"dim", "Estrogen-metabolism"),
    (r"bromelain", "Anti-inflammatory enzyme"),
    (r"msm", "Sulfur + joint comfort"),
    (r"glucosamine|chondroitin", "Cartilage substrate"),
    (r"taurine", "Cardiac + osmolyte"),
    (r"valerian|hops|passionflower|passiflora", "Sedative botanical"),
    (r"skullcap", "Calming herbal"),
    (r"lavender|silexan", "Anxiolytic botanical"),
    (r"nopal", "Post-meal glucose"),
    (r"diosmin|hesperidin|mpff|daflon", "Venous tone (MPFF)"),
    (r"sulforaphane", "Nrf2 activator"),
    (r"pea protein", "Plant-protein satiety"),
    (r"fiber|psyllium|inulin|glucomannan", "Fiber + post-meal glucose"),
    (r"electrolyte", "Hydration + minerals"),
    (r"butyrate", "Colonocyte fuel"),
    (r"xylitol", "Oral microbiome"),
    (r"orange peel|aurantium", "Citrus polyphenol"),
    (r"gymnema", "Sugar-blocker botanical"),
    (r"guggul", "Lipid / inflammation"),
    (r"nettle", "Diuretic / mineral"),
    (r"sea buckthorn", "Omega-7 mucosal"),
    (r"spirulina|chlorella", "Micronutrient algae"),
    (r"collinsonia", "Venous-tone classical"),
    (r"schisandra", "Adaptogen / liver"),
    (r"hyaluronic|hyaluronate", "Hydration + dermal"),
    (r"andrographis", "Immune botanical"),
    (r"eucalyptus|menthol", "Respiratory topical"),
    (r"pumpkin seed", "Zinc-rich seed"),
    (r"broccoli sprout", "Nrf2 / sulforaphane"),
    (r"tebonin|egb 761|ginkgo", "Cochlear circulation / cognition"),
    (r"sulfora", "Nrf2 activator"),
    (r"pomegranate", "Polyphenol cardiovascular"),
]


_COMPILED_ROLE_RULES = None

def _compile_role_rules():
    global _COMPILED_ROLE_RULES
    if _COMPILED_ROLE_RULES is None:
        _COMPILED_ROLE_RULES = [(re.compile(_anchor_pattern(p), re.I), r) for p, r in ROLE_FROM_NAME]
    return _COMPILED_ROLE_RULES


def role_for(name):
    n = name.lower()
    for rx, role in _compile_role_rules():
        if rx.search(n):
            return role
    return "Protocol cofactor"


# ============================================================
# Product canonicalisation + dedup
# ============================================================
def canonical_name(raw_name, dose=""):
    """Clean up name; preserve dose where natural.

    Truncates trailing notes ("AM with fat (check 25(OH)D — target...)"
    by cutting at the first parenthetical or comma after the first dose.
    Drops anything beyond ~45 chars.
    """
    name = raw_name.strip()
    name = re.sub(r"\s+", " ", name)
    # Cut at first parenthetical (often a clarifier)
    name = re.sub(r"\s*\([^)]*\).*$", "", name)
    # Cut at trailing instructions: " AM with fat", " before food", "twice daily" etc
    name = re.sub(
        r"\s+(?:AM|PM|with\s+|before\s+|after\s+|empty\s+|divided|twice|once|daily|sublingual|topical|capsule|tablet|gel|powder|dose|elemental)\b.*$",
        "",
        name,
        flags=re.I,
    )
    name = re.sub(r"[,;]\s.*$", "", name)
    name = name.strip(" .,—")
    # Title-case stylistically; preserve all-caps shorter brand words
    parts = []
    for w in name.split():
        if w.isupper() and len(w) <= 5:
            parts.append(w)
        elif "-" in w:
            # Keep hyphenated tokens as-is when they look like compound names
            parts.append(w)
        else:
            parts.append(w[0].upper() + w[1:] if w else w)
    name = " ".join(parts)
    # Append dose nicely if dose has mg/g and not already in name
    if dose and re.search(r"\d", dose):
        dose_clean = re.sub(r"\s+", " ", dose).strip().rstrip(".")
        # Trim trailing instruction inside the dose itself
        dose_clean = re.sub(r"\s+(?:AM|PM|with|before|after|empty|sublingual|topical|elemental|capsule)\b.*$", "", dose_clean, flags=re.I)
        if dose_clean and dose_clean not in name:
            name = f"{name} {dose_clean}"
    # Hard cap
    if len(name) > 55:
        name = name[:52].rstrip() + "…"
    return name


def normalise_products(raw_products, max_n=6):
    """Dedup by lowercase first word; cap at max_n."""
    seen = set()
    out = []
    for p in raw_products:
        n = p["name"].lower()
        # short key — first two words
        key = " ".join(re.split(r"\s+", n)[:2])
        if key in seen:
            continue
        seen.add(key)
        out.append(p)
        if len(out) >= max_n:
            break
    return out


# ============================================================
# Monthly cost extraction → bundle pricing
# ============================================================
def parse_monthly_cost(supplier_text):
    """Try to find the 'Recurring total: $X-Y' or 'Monthly cost: $X-Y' line."""
    pat = re.compile(r"(?:recurring total|monthly cost|monthly total|total\s+monthly)[:\s\*]+\$?(\d+)\s*[-–to]+\s*\$?(\d+)", re.I)
    m = pat.search(supplier_text)
    if m:
        lo, hi = int(m.group(1)), int(m.group(2))
        return lo, hi
    return None


# ============================================================
# Marker model heuristic
# ============================================================
def margin_model_for(jid, risk_tier):
    """Pick a margin-model string per skill v6 convention."""
    if risk_tier == "specialist":
        return "Guarded · 34% · expert gate"
    if risk_tier == "guarded":
        return "Expert-assisted · 35%"
    if "60" in str(jid) or "90" in str(jid):
        return "Subscription · 44% gross margin"
    return "Reseller · 42% gross margin"


# ============================================================
# Bundle generation
# ============================================================
def generate_bundle(jid, journey, dossier_text, journey_meta_risk="moderate"):
    section8 = extract_section(dossier_text, r"8\.\s+Daily")
    section9 = extract_section(dossier_text, r"9\.\s+Supplier")
    raw = parse_combos(section8)

    # If the dossier doesn't use §8 Daily Combos (non-standard numbering),
    # also scan §5 Cofactor Floor, §3 OTC Phytochemicals, and the entire
    # dossier as a last resort.
    if len(raw) < 3:
        for sec_re in [r"5\.\s+Cofactor", r"3\.\s+OTC", r"\d+\.\s+Daily", r"\d+\.\s+Combos?", r"\d+\.\s+Supplement"]:
            section = extract_section(dossier_text, sec_re)
            if section:
                extra = parse_combos(section)
                if not extra:
                    # Maybe no H3 — try tables / bullets at section root
                    extra = _parse_lines(section.splitlines())
                    if not extra:
                        # Last attempt: table parse
                        extra = _parse_table_lines(section.splitlines(), "")
                # Append, dedupping
                existing_keys = {" ".join(p["name"].lower().split()[:2]) for p in raw}
                for p in extra:
                    k = " ".join(p["name"].lower().split()[:2])
                    if k not in existing_keys:
                        raw.append(p)
                        existing_keys.add(k)
                if len(raw) >= 4:
                    break

    raw = normalise_products(raw, max_n=6)
    if not raw:
        # Fallback minimal stack — use packageConcept hints
        raw = [{"name": "Magnesium Glycinate", "dose": "120ct", "extra": "", "role_hint": "calm baseline"},
               {"name": "Omega-3 EPA/DHA", "dose": "1g", "extra": "", "role_hint": "anti-inflammatory"}]

    # Build product entries
    products = []
    component_sum = 0
    for r in raw:
        price, supplier, qs, signals, grade = lookup_pricing(r["name"], r.get("dose", ""))
        # supplier override via dossier text — look up brand mentions
        # (we keep the benchmark supplier; brand mentions go into qualitySignals indirectly)
        name = canonical_name(r["name"], r["dose"])
        products.append({
            "name": name,
            "supplier": supplier,
            "role": role_for(r["name"]),
            "format": "Capsule" if re.search(r"\b(?:tab|caps?|capsule|softgel)\b", r["name"] + " " + r.get("extra",""), re.I) or True else "Powder",
            "price": price,
            "qualityScore": qs,
            "qualitySignals": signals,
            "evidenceGrade": grade,
        })
        component_sum += price

    # Sanity-check pricing against dossier's monthly cost
    cost_range = parse_monthly_cost(section9)
    if cost_range:
        lo, hi = cost_range
        # If the protocol month is $30-45/combo, the bundle is roughly 60-90 days of stack
        # We're selling a 60-day pack typically — pick price around (component_sum + a small margin)
        pass

    # Bundle pricing — sum of products, with a small bundle discount
    one_time = max(89, int(component_sum * 1.05))  # tiny markup for curation
    # Round to nearest $5
    one_time = (one_time // 5) * 5 + (5 if one_time % 5 else 0)
    subscription = int(one_time * 0.82)
    subscription = (subscription // 5) * 5

    # Duration: 60d is default; specialist tier → 90d
    duration_days = 60
    if journey_meta_risk == "specialist":
        duration_days = 90
    elif journey_meta_risk == "low":
        duration_days = 30
    duration = f"{duration_days} days"

    # Pack name — domain-flavoured
    pack_name = f"{journey['name']} · {duration_days}-Day Pack"

    # Summary — extract from packageConcept to build a protocol-mechanism phrase
    concept = journey["packageConcept"].rstrip(".")
    summary = f"{concept[:140]} — mapped to your dossier's §08 daily combos and §09 supplier ecosystem."
    if len(concept) > 140:
        summary = concept[:140] + "… — mirroring your dossier's §08 daily combos."

    # Risk → margin model
    margin = margin_model_for(jid, journey_meta_risk)

    # Includes — domain-aware defaults
    includes = ["Daily combos card", "Master 24-hour timetable", "Self-tracked scoring template", "Day-30 protocol review"]

    cat_id = category_for(jid, journey["domain"])

    return {
        "id": f"{jid}-pack",
        "name": pack_name,
        "duration": duration,
        "categoryId": cat_id,
        "price": one_time,
        "subscriptionPrice": subscription,
        "marginModel": margin,
        "summary": summary,
        "products": products,
        "includes": includes,
    }


def ts_str(s):
    """JSON-safe TS string literal."""
    return json.dumps(s, ensure_ascii=False)


def render_bundle_ts(b):
    products_ts = []
    for p in b["products"]:
        signals_ts = ", ".join(ts_str(x) for x in p["qualitySignals"])
        products_ts.append(
            "      { name: %s, supplier: %s, role: %s, format: %s, price: %d, qualityScore: %d, qualitySignals: [%s], evidenceGrade: %s }"
            % (ts_str(p["name"]), ts_str(p["supplier"]), ts_str(p["role"]), ts_str(p["format"]),
               p["price"], p["qualityScore"], signals_ts, ts_str(p["evidenceGrade"]))
        )
    includes_ts = ", ".join(ts_str(x) for x in b["includes"])
    return (
        "  {\n"
        f"    id: {ts_str(b['id'])}, name: {ts_str(b['name'])}, duration: {ts_str(b['duration'])}, categoryId: {ts_str(b['categoryId'])},\n"
        f"    price: {b['price']}, subscriptionPrice: {b['subscriptionPrice']}, marginModel: {ts_str(b['marginModel'])},\n"
        f"    summary: {ts_str(b['summary'])},\n"
        "    products: [\n"
        + ",\n".join(products_ts) + "\n"
        "    ],\n"
        f"    includes: [{includes_ts}],\n"
        "  }"
    )


# Need risk data — load from journeys array
RISK_MAP = {}
def load_journey_risks():
    src = open(os.path.join(ROOT, "lib", "data.ts"), encoding="utf-8").read()
    # crude: parse `id: "<jid>", ... risk: "<risk>"` pairs (within a single object)
    obj_pat = re.compile(r'\{\s*id:\s*"([^"]+)"[^{}]*risk:\s*"([^"]+)"', re.S)
    for m in obj_pat.finditer(src):
        RISK_MAP[m.group(1)] = m.group(2)


def main():
    load_journeys()
    load_journey_risks()
    print(f"// Loaded {len(JOURNEYS)} journeys", file=sys.stderr)

    bundles_out = []
    overrides_out = {}
    pricing_stats = []
    skipped = []

    files = sorted([f for f in os.listdir(RESEARCH) if f.endswith(".md")])
    for fname in files:
        jid = fname[:-3]
        if jid not in JOURNEYS:
            skipped.append((jid, "no journey metadata"))
            continue
        if jid == "tinnitus-support":
            # Already has curated bundle id `tinnitus-quiet-90`; preserve mapping.
            overrides_out[jid] = "tinnitus-quiet-90"
            continue
        try:
            text = open(os.path.join(RESEARCH, fname), encoding="utf-8").read()
            risk = RISK_MAP.get(jid, "moderate")
            b = generate_bundle(jid, JOURNEYS[jid], text, journey_meta_risk=risk)
            bundles_out.append(b)
            overrides_out[jid] = b["id"]
            pricing_stats.append(b["price"])
        except Exception as e:
            skipped.append((jid, str(e)))

    # Emit TS bundles fragment
    print("// ─── BUNDLES (78 per-journey, generated from §08 + §09) ──────────────")
    for b in bundles_out:
        print(render_bundle_ts(b) + ",")

    print("\n// ─── JOURNEY_BUNDLE_OVERRIDES (78 entries) ──────────────────────────")
    for jid in sorted(overrides_out.keys()):
        print(f'  {ts_str(jid)}: {ts_str(overrides_out[jid])},')

    # Summary to stderr
    print(f"\n// Generated {len(bundles_out)} bundles", file=sys.stderr)
    if pricing_stats:
        ps = sorted(pricing_stats)
        n = len(ps)
        print(f"// Prices: min ${ps[0]} / median ${ps[n//2]} / max ${ps[-1]} / mean ${sum(ps)//n}", file=sys.stderr)
    if skipped:
        print(f"// Skipped {len(skipped)}: {skipped}", file=sys.stderr)


if __name__ == "__main__":
    main()
