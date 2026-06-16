import { experience } from "@/lib/content";

export function ExperienceTimeline() {
  if (experience.length === 0) return null;
  return (
    <ol className="relative ml-2 border-l border-border">
      {experience.map((role) => (
        <li
          key={`${role.company}-${role.period}`}
          className="relative pb-10 pl-6 last:pb-0"
        >
          <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
          <div className="flex flex-wrap items-baseline justify-between gap-x-3">
            <h3 className="font-heading text-base font-semibold text-foreground">
              {role.title} · {role.company}
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              {role.period}
            </span>
          </div>
          {role.summary ? (
            <p className="mt-1 text-sm text-muted-foreground">{role.summary}</p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
