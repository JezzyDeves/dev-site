import type { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target={project.href.startsWith("http") ? "_blank" : undefined}
      rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-accent"
    >
      <h3 className="font-heading text-lg font-semibold text-foreground">
        {project.title}
        <span className="ml-1 text-primary opacity-0 transition-opacity group-hover:opacity-100">
          →
        </span>
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>
    </a>
  );
}
