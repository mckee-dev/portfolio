import { BackgroundEffects } from "@/components/background/background-effects";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Services } from "@/components/sections/services";
import { Statistics } from "@/components/sections/statistics";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
        <Services />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
