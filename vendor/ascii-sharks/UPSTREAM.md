# ascii-sharks

Vendored from [stackedlol/ascii-sharks](https://github.com/stackedlol/ascii-sharks) at commit `a0074c16a106f0abc665fe9712ca445f8f98ad8e` (2026-10-24, “add MIT license”).

- License: MIT. Copyright (c) 2026 drewdi. See `LICENSE`.
- Included: `src/engine.ts`, `src/renderer.ts`, `src/world.ts`, `src/species.ts`, `src/math.ts`, `src/index.ts`, `README.md`.
- Omitted: `src/react.tsx` (the site does not use React) and the upstream Vite demo.
- Local change: `OceanEngine` also pauses while `document.visibilityState === "hidden"`. Marked in `src/engine.ts`.

Do not replace this tree with Scrolltide or any other paywalled ocean. Rebuild the page bundle from `hero/main.ts` with `npm run build`.
