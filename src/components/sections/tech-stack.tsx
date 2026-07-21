"use client";

import { techCategories } from "@/data/portfolio";
import { FadeUp } from "@/components/magic-ui/fade-up";
import { SectionHeading } from "@/components/magic-ui/section-heading";
import { GlassCard } from "@/components/magic-ui/glass-card";
import { motion } from "framer-motion";

export function TechStack() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Tech Stack"
            subtitle="Technologies I use to build exceptional products"
          />
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, categoryIndex) => (
            <FadeUp key={category.name} delay={categoryIndex * 0.1}>
              <GlassCard className="p-6 h-full group">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300 transition-colors group-hover:border-purple-500/30 group-hover:text-white cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
