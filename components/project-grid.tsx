import { projects } from "@/lib/content";
import { ProjectCard } from "./project-card";

export function ProjectGrid() {
  if (projects.length === 0) return null;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
