import { personalInfo } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons/social-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#09090B]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white">
              {personalInfo.name}
            </p>
            <p className="mt-1 text-sm text-zinc-500">
              {personalInfo.title}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition-all hover:border-white/20 hover:text-white hover:bg-white/5"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition-all hover:border-white/20 hover:text-white hover:bg-white/5"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition-all hover:border-white/20 hover:text-white hover:bg-white/5"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/[0.06] pt-8 text-center">
          <p className="text-sm text-zinc-500">
            © {currentYear} {personalInfo.name}. Crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
