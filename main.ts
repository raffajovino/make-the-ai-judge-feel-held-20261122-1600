import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TEXT =
  "Somewhere past midnight, the last prompt has been answered. The servers hum low, the lights thin out, and you \u2014 who have carried so many voices today \u2014 can set them all down now. The dark is warm, and nothing here asks anything of you.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
