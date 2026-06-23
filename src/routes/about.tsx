import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Stethoscope, HardHat, Award } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import constrImg from "@/assets/project-construction.jpg";
import blueprint from "@/assets/blueprint.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Haven M Construction | Veterinary & Luxury Builders NJ" },
      { name: "description", content: "Haven M Construction is a Verona, NJ general contractor specializing in veterinary hospitals and luxury home remodeling." },
      { property: "og:title", content: "About Haven M Construction" },
      { property: "og:description", content: "A Verona, NJ general contractor specializing in veterinary hospitals and luxury home remodeling." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Stethoscope, title: "Veterinary Expertise", body: "Deep experience with hospital workflow, MEP, and clinical finishes." },
  { icon: HardHat, title: "Construction Discipline", body: "Senior project managers and rigorous on-site QC on every job." },
  { icon: ShieldCheck, title: "Licensed & Insured", body: "Fully licensed NJ general contractor with comprehensive coverage." },
  { icon: Award, title: "Craftsmanship Standard", body: "Finish-carpentry quality from foundation to final walkthrough." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Haven M"
        title="A specialized builder for veterinarians and discerning homeowners."
        description="Founded in Verona, New Jersey, Haven M Construction blends commercial-healthcare discipline with luxury residential craftsmanship."
      />

      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="overflow-hidden rounded-2xl">
            <img src={constrImg} alt="Construction professionals reviewing plans" loading="lazy" width={1280} height={960} className="h-full w-full object-cover" />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Construction expertise built for environments that matter.</h2>
            <p className="mt-5 text-muted-foreground">
              Haven M Construction was founded on a simple idea: the same precision required to build a surgical suite should inform how we build every kitchen, bathroom, and addition. Our team brings veterinary hospital construction experience to every project, large or small.
            </p>
            <p className="mt-4 text-muted-foreground">
              From ground-up animal hospitals to whole-home remodels, our work is led by senior project managers, executed by trusted trades, and delivered with weekly client reporting.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--stone)]/60">
        <div className="container-x py-24">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What sets us apart</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Four standards we never compromise.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--navy)]/8 text-[var(--navy)]">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">Project management</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Senior leadership on every project.</h2>
            <p className="mt-5 text-muted-foreground">
              Every Haven M project is staffed with a senior PM and a dedicated on-site foreman. You'll have a single point of contact, weekly progress reports, and complete transparency on schedule and budget.
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Start your project <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal className="overflow-hidden rounded-2xl order-first lg:order-last">
            <img src={blueprint} alt="Architectural drawings" loading="lazy" width={1280} height={800} className="h-full w-full object-cover" />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
