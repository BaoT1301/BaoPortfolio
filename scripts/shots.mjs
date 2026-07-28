import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "shots");
mkdirSync(outDir, { recursive: true });

const targets = [
  { slug: "orchestrator", url: "https://forge-landing-51871.web.app/" },
  { slug: "ai-hire", url: "https://ai-hire-ai.vercel.app" },
  { slug: "collabguard", url: "https://github.com/Nausmind/reddit-hackathon" },
  { slug: "crypto-pilot", url: "https://pocommunity.com/crypto-pilot/" },
  { slug: "crushie", url: "https://crushie.vercel.app" },
  { slug: "pathai", url: "https://path-ai-xi.vercel.app/" },
  { slug: "fusionai", url: "https://www.fusionai.studio" },
];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2 });

for (const t of targets) {
  const page = await ctx.newPage();
  try {
    await page.goto(t.url, { waitUntil: "networkidle", timeout: 45000 });
  } catch (e) {
    console.log(`  ${t.slug}: networkidle timed out, using domcontentloaded`);
    try { await page.goto(t.url, { waitUntil: "domcontentloaded", timeout: 30000 }); } catch {}
  }
  await page.waitForTimeout(3500);
  const out = join(outDir, `${t.slug}.png`);
  try {
    await page.screenshot({ path: out });
    console.log(`  ✔ ${t.slug} -> public/shots/${t.slug}.png`);
  } catch (e) {
    console.log(`  �’ ${t.slug} failed: ${e.message}`);
  }
  await page.close();
}

await browser.close();
console.log("done");
