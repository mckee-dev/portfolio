"use client";

import { services } from "@/data/portfolio";
import { FadeUp } from "@/components/magic-ui/fade-up";
import { SectionHeading } from "@/components/magic-ui/section-heading";
import { GlassCard } from "@/components/magic-ui/glass-card";
import {
  Layers,
  Server,
  Monitor,
  Code,
  Cloud,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  layers: Layers,
  server: Server,
  monitor: Monitor,
  code: Code,
  cloud: Cloud,
  lightbulb: Lightbulb,
};

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Services"
            subtitle="End-to-end engineering solutions for ambitious products"
          />
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <FadeUp key={service.title} delay={index * 0.1}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                  <GlassCard className="p-6 h-full group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 mb-5 transition-all group-hover:from-purple-500/30 group-hover:to-blue-500/30 group-hover:shadow-lg group-hover:shadow-purple-500/10">
                      <Icon className="h-5 w-5 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {service.description}
                    </p>
                  </GlassCard>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
