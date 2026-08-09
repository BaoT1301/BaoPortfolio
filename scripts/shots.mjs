// Regenerate project screenshots in public/shots.
// Captured at a tablet width (760px) so each site's hero stacks text-first
// at a comfortable scale — matching how the project stage frames them.
// Usage: npm i -D playwright && npx playwright install chromium && node scripts/shots.mjs
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
mkdirSync("public/shots", { recursive: true });

const targets = [
  { slug: "orchestrator", url: "https://workflow.chuchube.co/" },
  { slug: "ai-hire", url: "https://ai-hire-ai.vercel.app" },
  { slug: "crushie", url: "https://crushie.up.railway.app/" },
  { slug: "pathai", url: "https://usepathai.vercel.app/" },
  { slug: "fusionai", url: "https://www.fusionai.studio" },
  { slug: "prism", url: "https://prism-gray-gamma.vercel.app/" },
  { slug: "crypto-pilot", url: "https://cryptopilot.up.railway.app/" },
];

const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 760, height: 900 }, deviceScaleFactor: 2 });
for (const t of targets) {
  const p = await ctx.newPage();
  try { await p.goto(t.url, { waitUntil: "networkidle", timeout: 45000 }); }
  catch (e) { console.log(t.slug, "networkidle timed out; retrying"); try { await p.goto(t.url, { waitUntil: "domcontentloaded", timeout: 30000 }); } catch {} }
  await p.waitForTimeout(4500);
  await p.screenshot({ path: `public/shots/${t.slug}.jpg`, type: "jpeg", quality: 92 });
  console.log("saved", t.slug);
  await p.close();
}
await b.close();
console.log("done");
