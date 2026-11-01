import { build } from "esbuild";

await build({
  entryPoints: ["hero/main.ts"],
  bundle: true,
  format: "iife",
  target: "es2022",
  outfile: "assets/ocean.js",
  legalComments: "none",
  banner: {
    js: "/* ASCII ocean vendored from https://github.com/stackedlol/ascii-sharks (MIT). Copyright (c) 2026 drewdi. */",
  },
});
