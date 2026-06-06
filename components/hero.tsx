import { intro } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.45 0.12 50 / 0.35) 0%, transparent 70%)",
        }}
      />
      <h1 className="ember font-heading text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
        jonathon.dev
      </h1>
      <p className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
        {intro}
      </p>
      <a
        href="#work"
        className="absolute bottom-10 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
      >
        ↓ scroll
      </a>
    </section>
  );
}
