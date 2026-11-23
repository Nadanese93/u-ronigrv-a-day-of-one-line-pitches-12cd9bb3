import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "You've been carrying that app idea for months — describe it in plain words to an AI agent on make.fun tonight, and you'll tap through a working version before bed, free to try, and the idea stays yours.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), sentence, "utf8");
