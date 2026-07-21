"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { FadeUp } from "@/components/magic-ui/fade-up";
import { SectionHeading } from "@/components/magic-ui/section-heading";
import { GlassCard } from "@/components/magic-ui/glass-card";
import { ShimmerButton } from "@/components/magic-ui/shimmer-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/social-icons";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formState.name}&body=${encodeURIComponent(formState.message)}`;
    window.location.href = mailtoLink;
  };

  const socialLinks = [
    { icon: GithubIcon, href: personalInfo.github, label: "GitHub" },
    { icon: LinkedinIcon, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: TwitterIcon, href: personalInfo.twitter, label: "Twitter" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Get in Touch"
            subtitle="Let's discuss your next project or opportunity"
          />
        </FadeUp>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <FadeUp delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Let&apos;s build something great together
                </h3>
                <p className="text-zinc-500 leading-relaxed">
                  Whether you have a project in mind, need technical consulting,
                  or just want to connect—I&apos;d love to hear from you. I
                  typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-purple-500/30 hover:bg-white/[0.07] group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 group-hover:from-purple-500/30 group-hover:to-blue-500/30">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Email</p>
                    <p className="text-white font-medium">{personalInfo.email}</p>
                  </div>
                </a>
              </div>

              <div>
                <p className="text-sm text-zinc-500 mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition-all hover:border-white/20 hover:text-white hover:bg-white/5"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <GlassCard className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-400 mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-400 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-400 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                  />
                </div>
                <ShimmerButton type="submit" className="w-full">
                  <Send className="h-4 w-4" />
                  Send Message
                </ShimmerButton>
              </form>
            </GlassCard>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
