"use client";

import { personalInfo } from "@/data/portfolio";
import { FadeUp } from "@/components/magic-ui/fade-up";
import { SectionHeading } from "@/components/magic-ui/section-heading";
import { GlassCard } from "@/components/magic-ui/glass-card";
import { Target, Users, Zap } from "lucide-react";

const philosophy = [
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Every line of code is intentional. I build systems that are maintainable, testable, and designed to scale.",
  },
  {
    icon: Users,
    title: "Collaborative Leadership",
    description:
      "Great software is built by great teams. I mentor, document, and foster environments where engineers thrive.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description:
      "Speed is a feature. I optimize at every layer—from database queries to bundle sizes—to deliver snappy experiences.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="About Me"
            subtitle="Crafting digital experiences with engineering excellence"
          />
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <FadeUp delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                {personalInfo.summary}
              </p>
              <p className="text-base text-zinc-500 leading-relaxed">
                Over the past six years, I&apos;ve had the privilege of working
                with startups and enterprise teams, shipping products that serve
                millions of users. From architecting microservices on AWS to
                crafting pixel-perfect React interfaces, I bring a holistic
                approach to software development.
              </p>
              <p className="text-base text-zinc-500 leading-relaxed">
                My expertise spans the full development lifecycle—from initial
                system design and database modeling to deployment pipelines and
                production monitoring. I believe in writing clean, documented
                code and building systems that teams can confidently extend.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["MERN Stack", "Ruby on Rails", "Cloud Native", "TypeScript"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-sm text-purple-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="space-y-4">
              {philosophy.map((item) => (
                <GlassCard key={item.title} className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10">
                      <item.icon className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
