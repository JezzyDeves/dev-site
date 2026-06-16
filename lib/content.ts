export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export interface Role {
  title: string;
  company: string;
  period: string;
  summary?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export const intro =
  "Software engineer building reliable systems. Augmented with AI.";

// TODO: replace placeholder projects with your real work.
export const projects: Project[] = [];

export const experience: Role[] = [
  {
    title: "Software Engineer",
    company: "Seven Corners Inc.",
    period: "2021 — Present",
    summary:
      "Build and maintain core applications across the travel insurance business — the customer-facing purchase funnel for insurance products, the backend APIs powering it, and claims processing systems including BOP claims. Led large-scale migrations of legacy sites onto modern stacks and drove innovation by introducing new technologies that improved reliability and developer velocity.",
  },
];

export const skills: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Go",
  "Rust",
  "PostgreSQL",
  "AWS",
  "Docker",
  "SvelteKit",
  "Redis",
  "Bun",
];

export const contact: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/JezzyDeves" },
];
