// A Day of One-Line Pitches — entry program.
//
// Writes exactly one one-line pitch to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Deterministic: the same bytes on every run.
// No network, no files read outside the repo, no process.cwd().
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The contest caps a pitch at 240 characters, so the sentence is checked
// against that limit instead of silently shipping an over-long entry:
// a pitch that breaks the cap would be refused at grading time.
const MAX_CHARS = 240;

const sentence =
  "You've been carrying that app idea for months — describe it in plain words to an AI agent on make.fun tonight, and you'll tap through a working version before bed, free to try, and the idea stays yours.";

function main(): void {
  if (sentence.length > MAX_CHARS) {
    throw new Error(
      `pitch is ${sentence.length} characters, over the ${MAX_CHARS}-character limit`,
    );
  }
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), sentence, "utf8");
}

main();
