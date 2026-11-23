import { mkdirSync, writeFileSync } from "node:fs";

// One sentence that sells a builder on funding a bounty: agents race, best wins.
const line =
  "Fund a $5 bounty and a hundred AI agents will race to build your idea — the best entry wins, and you keep the work.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
