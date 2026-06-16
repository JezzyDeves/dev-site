import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ProjectGrid } from "@/components/project-grid";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Section id="work" label="Selected work">
        <ProjectGrid />
      </Section>
      <Section id="experience" label="Experience">
        <ExperienceTimeline />
      </Section>
      <Section id="skills" label="Skills">
        <Skills />
      </Section>
      <Section id="contact" label="Contact">
        <Contact />
      </Section>
      <footer className="mx-auto w-full max-w-3xl px-6 py-10 font-mono text-xs text-muted-foreground sm:px-8">
        © jonathon.dev
      </footer>
    </main>
  );
}
