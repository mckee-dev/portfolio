"use client";

import { projects } from "@/data/portfolio";
import { FadeUp } from "@/components/magic-ui/fade-up";
import { SectionHeading } from "@/components/magic-ui/section-heading";
import { GlassCard } from "@/components/magic-ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/social-icons";
import { CardSpotlight } from "@/components/aceternity/card-spotlight";
import { motion } from "framer-motion";

function ProjectCard({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) {
  return (
    <FadeUp delay={index * 0.1}>
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
        <CardSpotlight>
          <GlassCard className="overflow-hidden group">
          <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                {project.title.charAt(0)}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
            <div className="absolute top-4 right-4">
              {project.featured && (
                <Badge className="bg-purple-500/20 border-purple-500/30 text-purple-300">
                  Featured
                </Badge>
              )}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>

            {(project.github || project.live) && (
              <div className="mt-6 flex gap-3">
                {project.github && (
                  <Button variant="secondary" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </GlassCard>
        </CardSpotlight>
      </motion.div>
    </FadeUp>
  );
}

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Featured Projects"
            subtitle="Selected work showcasing technical depth and design excellence"
          />
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
