"use client";

import { statistics } from "@/data/portfolio";
import { FadeUp } from "@/components/magic-ui/fade-up";
import { NumberTicker } from "@/components/magic-ui/number-ticker";
import { GlassCard } from "@/components/magic-ui/glass-card";

export function Statistics() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.1}>
              <GlassCard className="p-8 text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  <NumberTicker
                    value={stat.value}
                    suffix={stat.suffix}
                    className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  />
                </div>
                <p className="mt-3 text-sm text-zinc-500">{stat.label}</p>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
