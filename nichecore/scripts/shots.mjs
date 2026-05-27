import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE || "http://localhost:3000";
const OUT = "shots";
mkdirSync(OUT, { recursive: true });

// route -> filename
const routes = process.argv[2]
  ? [[process.argv[2], process.argv[2].replace(/[\/]/g, "_").replace(/^_/, "") || "home"]]
  : [
      ["/", "home"],
      ["/c/skin-pigmentation", "hub-skin"],
      ["/skin/vitiligo", "vitiligo"],
      ["/atlas", "atlas"],
      ["/guru", "guru"],
      ["/c/skin-pigmentation/package", "package"],
      ["/companion", "companion"],
      ["/expert", "expert"],
      ["/progress", "progress"],
      ["/admin/research-factory", "factory"],
    ];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1024 }, deviceScaleFactor: 2 });

for (const [route, name] of routes) {
  const errors = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  try {
    const res = await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(700);
    await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
    console.log(`✓ ${route} → ${name}.png  [${res?.status()}]${errors.length ? "  errors: " + errors.length : ""}`);
    errors.slice(0, 3).forEach((e) => console.log("   ! " + e.slice(0, 140)));
  } catch (e) {
    console.log(`✗ ${route}  ${String(e).slice(0, 160)}`);
  }
  errors.length = 0;
}

await browser.close();
