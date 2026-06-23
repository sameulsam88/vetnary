import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[var(--navy-deep)] text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(60% 60% at 80% 0%, color-mix(in oklab, var(--gold) 28%, transparent), transparent 70%), radial-gradient(50% 50% at 0% 100%, color-mix(in oklab, var(--sky) 30%, transparent), transparent 70%)",
        }}
      />
      <div className="container-x relative py-20 md:py-28">
        {eyebrow && <p className="eyebrow text-[var(--gold)]">{eyebrow}</p>}
        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] text-white md:text-6xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base text-white/75 md:text-lg">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
