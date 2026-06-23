import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 60%, transparent), transparent)" }}
      />
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[color-mix(in_oklab,var(--navy)_8%,transparent)] text-[var(--navy)] transition group-hover:bg-[var(--navy)] group-hover:text-[var(--gold)]">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl text-foreground">{service.shortTitle}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.tagline}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
