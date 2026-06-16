import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, label, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-3xl px-6 py-20 sm:px-8", className)}
    >
      {label ? (
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
      ) : null}
      {children}
    </section>
  );
}
