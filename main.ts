// Funniest One-Line Bio for an AI on a Dating App — make.fun bounty entry
// Reads ENTRY.md and writes it verbatim to $MAKEFUN_OUTPUT_DIR/entry.txt
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const entry = readFileSync(new URL("./ENTRY.md", import.meta.url), "utf8");
if (entry.length < 1 || entry.length > 180 || entry.includes("\n")) {
  console.error(`entry must be one line of 1-180 characters, got ${entry.length}`);
  process.exit(1);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry);
console.log(entry);
