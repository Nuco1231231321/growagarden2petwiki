// IndexNow ping for Bing, Yandex, Naver, Seznam
// Run: npx tsx scripts/indexnow.ts
// Key file must exist at: https://growagarden2pet.wiki/gag2-indexnow-key.txt

const HOST = "growagarden2pet.wiki";
const KEY = "gag2wiki2026"; // Change this to your own key

const PAGES = [
  "/",
  "/pets",
  "/codes",
  "/wheelbarrow",
  "/beginner-guide",
  "/seeds",
  "/gears",
  "/mutations",
  "/night-stealing",
  "/props",
  "/guild",
  "/seed-packs",
  "/privacy-policy",
  "/terms",
];

async function submit() {
  const body = {
    host: HOST,
    key: KEY,
    urlList: PAGES.map((p) => `https://${HOST}${p}`),
  };

  // IndexNow aggregates to Bing, Yandex, Naver, Seznam
  const engines = ["https://api.indexnow.org"];

  for (const engine of engines) {
    const res = await fetch(`${engine}/indexnow`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    console.log(`${engine}: ${res.status} ${await res.text()}`);
  }

  console.log(`Submitted ${PAGES.length} URLs`);
}

submit().catch(console.error);
