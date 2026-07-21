"use client";

import { experience } from "@/data/portfolio";
import { FadeUp } from "@/components/magic-ui/fade-up";
import { SectionHeading } from "@/components/magic-ui/section-heading";
import { GlassCard } from "@/components/magic-ui/glass-card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Experience"
            subtitle="A journey of growth, leadership, and impactful engineering"
          />
        </FadeUp>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-transparent" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <FadeUp key={item.company} delay={index * 0.15}>
                <div className="relative pl-8 md:pl-20">
                  <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2 flex h-4 w-4 items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 ring-4 ring-[#09090B]" />
                  </div>

                  <GlassCard className="p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="text-purple-400 font-medium">
                          {item.company}
                        </p>
                      </div>
                      <span className="text-sm text-zinc-500 font-mono">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-zinc-400 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
