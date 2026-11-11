// ব্যবহার: npm run check:images
// src/data/images.ts এ যেসব লোকাল পাথ আছে, সেগুলো public/ এ আছে কিনা দেখায়।
import { readFileSync, existsSync } from "node:fs";

const src = readFileSync("src/data/images.ts", "utf8");
const paths = [...src.matchAll(/^\s*[a-zA-Z]+:\s*"(\/[^"]+)"/gm)].map((m) => m[1]);
const empty = [...src.matchAll(/^\s*([a-zA-Z]+):\s*"",/gm)].map((m) => m[1]);

let missing = 0;
for (const p of paths) {
  const ok = existsSync("public" + p);
  if (!ok) missing++;
  console.log(`${ok ? "✔" : "✘ MISSING"}  ${p}`);
}
if (empty.length) console.log(`\nফাঁকা (প্লেসহোল্ডার/বিল্ট-ইন দেখাবে): ${empty.join(", ")}`);
console.log(missing ? `\n${missing}টি ফাইল পাওয়া যায়নি` : "\nসব ফাইল ঠিক আছে");
process.exit(missing ? 1 : 0);
