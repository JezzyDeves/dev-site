import { skills } from "@/lib/content";

export function Skills() {
  if (skills.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li
          key={skill}
          className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
