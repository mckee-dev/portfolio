"use client";

import { AuroraBackground } from "./aurora-background";
import { GridBackground } from "./grid-background";
import { NoiseOverlay } from "./noise-overlay";
import { FloatingParticles } from "./floating-particles";

export function BackgroundEffects() {
  return (
    <>
      <GridBackground />
      <AuroraBackground />
      <FloatingParticles />
      <NoiseOverlay />
    </>
  );
}
