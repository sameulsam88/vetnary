import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import { ServiceCard } from "@/components/site/ServiceCard";
import { services, type Service } from "@/lib/services";
import heroImg from "@/assets/hero-vet.jpg";

export function ServicePageView({ service }: { service: Service }) {
  const related = services
    .filter((s) => s.slug !== service.slug && s.category === service.category)
    .slice(0, 3);
  const Icon = service.icon;
  return (
    <>
      <PageHeader
        eyebrow={
          service.category === "veterinary" ? "Veterinary Construction" : "Residential Remodeling"
        }
        title={service.title}
        description={service.hero}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--navy-deep)]"
          >
            Get Free Estimate
          </Link>
          <a
            href="tel:+12012643506"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" /> (201) 264-3506
          </a>
        </div>
      </PageHeader>

      <section className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <Reveal>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--navy)]/8 text-[var(--navy)]">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl">{service.tagline}</h2>
            <p className="mt-5 text-muted-foreground">{service.description}</p>

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--gold)]">
                What's included
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--gold)]">
                Our process
              </h3>
              <div className="mt-5 space-y-4">
                {service.process.map((p, i) => (
                  <div
                    key={p.title}
                    className="flex gap-5 rounded-xl border border-border bg-card p-5"
                  >
                    <div className="text-[var(--gold)] text-sm font-bold">0{i + 1}</div>
                    <div>
                      <div className="font-semibold text-foreground">{p.title}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--gold)]">
                Frequently asked
              </h3>
              <div className="mt-5 divide-y divide-border rounded-xl border border-border bg-card">
                {service.faqs.map((f) => (
                  <details key={f.q} className="group p-5">
                    <summary className="cursor-pointer list-none font-semibold text-foreground flex justify-between items-center">
                      {f.q}
                      <span className="text-[var(--gold)] transition group-open:rotate-45 text-xl leading-none">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={heroImg}
                alt=""
                loading="lazy"
                width={1600}
                height={1024}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="mt-5 rounded-2xl border border-border bg-card p-7 shadow-soft">
              <p className="eyebrow">Start your project</p>
              <h3 className="mt-3 text-xl">Free, no-pressure consultation.</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your project — we'll respond within one business day with next steps.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground w-full justify-center"
              >
                Request estimate <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-x pb-24">
          <h2 className="text-3xl">Related services</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}

export function serviceHead(slug: string) {
  const s = services.find((x) => x.slug === slug)!;
  return {
    meta: [
      { title: `${s.title} — Haven M Construction NJ` },
      { name: "description", content: s.description },
      { property: "og:title", content: `${s.title} — Haven M Construction` },
      { property: "og:description", content: s.description },
      { property: "og:url", content: `/services/${s.slug}` },
    ],
    links: [{ rel: "canonical", href: `/services/${s.slug}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          provider: { "@type": "GeneralContractor", name: "Haven M Construction, LLC" },
          areaServed: "New Jersey",
          description: s.description,
        }),
      },
    ],
  };
}
