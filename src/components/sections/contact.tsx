import { personalInfo } from "@/data/portfolio";
import { FadeUp } from "@/components/magic-ui/fade-up";
import { SectionHeading } from "@/components/magic-ui/section-heading";
import { GlassCard } from "@/components/magic-ui/glass-card";
import { Mail, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/social-icons";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\D/g, "")}`,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: personalInfo.linkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeUp>
          <SectionHeading
            title="Get in Touch"
            subtitle="Let's discuss your next project or opportunity"
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="mx-auto mb-12 max-w-2xl text-center text-zinc-500 leading-relaxed">
            Whether you have a project in mind, need technical consulting, or
            just want to connect—I&apos;d love to hear from you. I typically
            respond within 24 hours.
          </p>
        </FadeUp>

        <div className="grid sm:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <FadeUp key={method.label} delay={0.15 + index * 0.1}>
              <a
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                <GlassCard className="flex h-full flex-col items-center gap-4 p-8 text-center transition-all hover:border-purple-500/30 group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 group-hover:from-purple-500/30 group-hover:to-blue-500/30">
                    <method.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">{method.label}</p>
                    <p className="mt-1 text-white font-medium break-words">
                      {method.value}
                    </p>
                  </div>
                </GlassCard>
              </a>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
