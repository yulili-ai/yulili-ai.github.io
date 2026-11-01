import { OceanEngine } from "../vendor/ascii-sharks/src/index";

const canvas = document.getElementById("ocean");
if (canvas instanceof HTMLCanvasElement) {
  // Biggest first. Hammerhead leads; classics sit further back in the same water.
  new OceanEngine(canvas, [
    { kind: "hammerhead", size: 1 },
    { kind: "classic", size: 0.84 },
    { kind: "classic", size: 0.7 },
    { kind: "hammerhead", size: 0.6 },
  ]);
}
