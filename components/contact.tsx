import { contact } from "@/lib/content";

export function Contact() {
  if (contact.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-3">
      {contact.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="font-mono text-sm text-primary transition-colors hover:text-foreground"
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}
