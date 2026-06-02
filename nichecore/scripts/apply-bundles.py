#!/usr/bin/env python3
"""Splice generated bundles into lib/data.ts and JOURNEY_BUNDLE_OVERRIDES
into app/[domain]/[slug]/page.tsx.
"""
import os
import re
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding="utf-8")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = open(os.path.join(ROOT, "scripts", "bundles-output.txt"), encoding="utf-8").read()

MARKER = "// ─── JOURNEY_BUNDLE_OVERRIDES"
idx = OUT.find(MARKER)
if idx < 0:
    sys.exit("Marker not found in bundles-output.ts")
bundle_ts = OUT[:idx].rstrip()
override_block = OUT[idx:].rstrip()

# Strip the leading header comment from bundle_ts and trailing comma is OK
bundle_ts_lines = bundle_ts.split("\n")
# Drop first comment line
if bundle_ts_lines and bundle_ts_lines[0].startswith("//"):
    bundle_ts_lines = bundle_ts_lines[1:]
bundle_ts_clean = "\n".join(bundle_ts_lines).strip()

# Parse JOURNEY overrides — extract `  "jid": "bundle-id",` lines
override_lines = []
for ln in override_block.split("\n"):
    m = re.match(r'\s+("[a-z0-9-]+":\s*"[a-z0-9-]+",)', ln)
    if m:
        override_lines.append("  " + m.group(1))

# ─────────────────────────────────────────────────────────────────────
# 1. Patch lib/data.ts — insert bundle entries before the closing `];`
# ─────────────────────────────────────────────────────────────────────
data_path = os.path.join(ROOT, "lib", "data.ts")
src = open(data_path, encoding="utf-8").read()

# Find the bundles array
m = re.search(r"export const bundles: Bundle\[\] = \[", src)
if not m:
    sys.exit("Bundles array not found in data.ts")
start = m.end()
# Walk forward to find the matching `];`
depth = 1
i = start
while i < len(src) and depth > 0:
    if src[i] == "[":
        depth += 1
    elif src[i] == "]":
        depth -= 1
    i += 1
# i is now just past the closing `]`; the `;` follows immediately
close_bracket = i - 1  # index of `]`

# Idempotency: if our marker is already present, replace; else insert
INS_MARKER_HEAD = "  // ─── BEGIN PER-JOURNEY BUNDLES (auto-generated from §08 + §09) ───"
INS_MARKER_TAIL = "  // ─── END PER-JOURNEY BUNDLES ───"

new_block = "\n" + INS_MARKER_HEAD + "\n" + bundle_ts_clean.rstrip().rstrip(",") + ",\n" + INS_MARKER_TAIL + "\n"

if INS_MARKER_HEAD in src:
    # Replace existing block
    pat = re.compile(re.escape(INS_MARKER_HEAD) + r".*?" + re.escape(INS_MARKER_TAIL) + r"\n", re.S)
    src_new = pat.sub(new_block.lstrip("\n"), src)
else:
    # Insert before the closing `]`
    src_new = src[:close_bracket] + new_block + src[close_bracket:]

open(data_path, "w", encoding="utf-8").write(src_new)
print(f"Patched {data_path}: added {bundle_ts_clean.count('id:')} bundles", file=sys.stderr)

# ─────────────────────────────────────────────────────────────────────
# 2. Patch app/[domain]/[slug]/page.tsx — extend JOURNEY_BUNDLE_OVERRIDES
# ─────────────────────────────────────────────────────────────────────
page_path = os.path.join(ROOT, "app", "[domain]", "[slug]", "page.tsx")
src = open(page_path, encoding="utf-8").read()

# Find the JOURNEY_BUNDLE_OVERRIDES object
m = re.search(
    r"(const JOURNEY_BUNDLE_OVERRIDES: Record<string, string> = \{)([^}]*)(\})",
    src,
    re.S,
)
if not m:
    sys.exit("JOURNEY_BUNDLE_OVERRIDES not found in page.tsx")

# Build the new body
new_body = "\n" + "\n".join(override_lines) + "\n"

src_new = src[:m.start(2)] + new_body + src[m.end(2):]
open(page_path, "w", encoding="utf-8").write(src_new)
print(f"Patched {page_path}: extended overrides ({len(override_lines)} entries)", file=sys.stderr)

print("Done.", file=sys.stderr)
