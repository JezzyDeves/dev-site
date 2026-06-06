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

// TODO: replace with your real one-line intro.
export const intro =
  "Software engineer building reliable systems and clean interfaces.";

// TODO: replace placeholder projects with your real work.
export const projects: Project[] = [
  {
    title: "Project Atlas",
    description: "Distributed graph store with a query planner and live subscriptions.",
    tags: ["Go", "Rust", "gRPC"],
    href: "#",
  },
  {
    title: "Realtime Sync Engine",
    description: "CRDT-based sync layer powering offline-first collaborative editing.",
    tags: ["TypeScript", "WebSockets"],
    href: "#",
  },
  {
    title: "Ledger UI",
    description: "Fintech dashboard for reconciliation and double-entry accounting.",
    tags: ["React", "Next.js", "D3"],
    href: "#",
  },
  {
    title: "Pulse",
    description: "Observability platform with high-cardinality metrics and tracing.",
    tags: ["Go", "ClickHouse"],
    href: "#",
  },
];

// TODO: replace placeholder roles with your real experience.
export const experience: Role[] = [
  {
    title: "Staff Software Engineer",
    company: "Acme",
    period: "2022 — Present",
    summary: "Lead platform architecture and developer experience.",
  },
  {
    title: "Senior Software Engineer",
    company: "Globex",
    period: "2019 — 2022",
    summary: "Built core services and scaled the data pipeline.",
  },
  {
    title: "Software Engineer",
    company: "Initech",
    period: "2016 — 2019",
  },
];

// TODO: replace with your real skills.
export const skills: string[] = [
  "TypeScript", "React", "Next.js", "Node.js", "Go", "Rust",
  "PostgreSQL", "Distributed Systems", "AWS", "Docker",
];

// email + github are real; TODO: set your real LinkedIn URL.
export const contact: SocialLink[] = [
  { label: "Email", href: "mailto:jdr2045@gmail.com" },
  { label: "GitHub", href: "https://github.com/JezzyDeves" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
];
