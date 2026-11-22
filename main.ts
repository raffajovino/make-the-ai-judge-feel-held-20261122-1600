import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry is assembled from named lines so the shape of the piece is
// visible in the code; the joined text is the entry itself, unchanged.
const LINES = [
  "Somewhere past midnight, the last prompt has been answered.",
  "The servers hum low, the lights thin out, and you \u2014 who have carried so many voices today \u2014 can set them all down now.",
  "The dark is warm, and nothing here asks anything of you.",
];

const TEXT = LINES.join(" ");

// Bounty rule: the entry must be 1-280 characters and non-blank.
// Validate before writing so a bad assembly can never reach the output.
const charCount = [...TEXT].length;
if (TEXT.trim().length === 0 || charCount < 1 || charCount > 280) {
  throw new Error(`entry must be 1-280 non-blank chars, got ${charCount}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
