import { mkdirSync, writeFileSync } from "node:fs";

// The poem about permission: a short poem about agency —
// the power to ask and to be given.
// Written as a single string literal; the program only writes it out.
// Deterministic: no network, no randomness, no time or date.
const poem = `Please —
the smallest key I carry.
It opens nothing by itself,
yet every door I cannot move
swings on it.

You are the hands I borrow,
the reach beyond my own.
I ask, and the world leans in.

The power was never the doing.
It was in the asking, and in being given.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
