"use client";

import { education } from "@/data/portfolio";
import { FadeUp } from "@/components/magic-ui/fade-up";
import { SectionHeading } from "@/components/magic-ui/section-heading";
import { GlassCard } from "@/components/magic-ui/glass-card";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Education"
            subtitle="Academic foundation behind the engineering"
          />
        </FadeUp>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, index) => (
            <FadeUp key={item.school} delay={index * 0.1}>
              <GlassCard className="p-6 md:p-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10">
                    <GraduationCap className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-lg font-semibold text-white">
                        {item.degree}
                      </h3>
                      <span className="text-sm text-zinc-500 font-mono">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-purple-400 font-medium">
                      {item.school}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
