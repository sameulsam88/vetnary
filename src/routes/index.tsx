import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Award,
  Clock,
  Heart,
  Quote,
  MapPin,
  CheckCircle2,
  Wind,
  Activity,
  Layers,
  PawPrint,
  HardHat,
} from "lucide-react";
import heroImg from "@/assets/hero-vet.jpg";
import projConstr from "@/assets/project-construction.jpg";
import projKitchen from "@/assets/project-kitchen.jpg";
import projVet from "@/assets/project-vet-exam.jpg";
import projBasement from "@/assets/project-basement.jpg";
import projBath from "@/assets/project-bathroom.jpg";
import blueprintImg from "@/assets/blueprint.jpg";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Haven M Construction — Veterinary Hospitals & Luxury Remodeling | NJ" },
      { name: "description", content: "Specialized veterinary hospital construction, commercial build-outs, and premium home remodeling throughout New Jersey. Licensed & insured." },
      { property: "og:title", content: "Haven M Construction — Veterinary Hospitals & Luxury Remodeling" },
      { property: "og:description", content: "Specialized veterinary facility construction and premium remodeling throughout New Jersey." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const TRUST = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Stethoscope, label: "Veterinary Construction Specialists" },
  { icon: Award, label: "Quality Craftsmanship" },
  { icon: Clock, label: "On-Time Delivery" },
  { icon: Heart, label: "Client Satisfaction" },
];

const STATS = [
  { v: "15+", l: "Years building in NJ" },
  { v: "40+", l: "Veterinary projects" },
  { v: "100%", l: "Licensed & insured" },
  { v: "A+", l: "Client satisfaction" },
];

const SPECS = [
  { icon: Activity, title: "Patient Flow", body: "Separation of healthy intake, sick patients, and surgical recovery with thoughtfully zoned circulation." },
  { icon: Layers, title: "Exam Room Layouts", body: "Modular exam rooms with integrated casework, sinks, and equipment for fast turnover between patients." },
  { icon: HardHat, title: "Surgical Areas", body: "Sterile-zone construction, medical gas, scrub rooms, and recovery suites built to clinical standards." },
  { icon: Wind, title: "HVAC Requirements", body: "Zoned ventilation, negative-pressure isolation, and odor control engineered for animal care environments." },
  { icon: CheckCircle2, title: "Durable Materials", body: "Antimicrobial flooring, sealed wall systems, and finishes that withstand cleaning chemicals and high traffic." },
  { icon: PawPrint, title: "Pet-Friendly Environments", body: "Acoustic treatment, calming finishes, and sight-line planning that reduce patient stress." },
];

const PROJECTS = [
  { img: projVet, tag: "Veterinary Hospital", title: "Cedar Grove Animal Hospital", desc: "Ground-up 8,400 sq ft hospital with surgical suite and boarding." },
  { img: projKitchen, tag: "Luxury Kitchen", title: "Montclair Chef's Kitchen", desc: "Custom white-oak cabinetry, marble waterfall island, brass detailing." },
  { img: projConstr, tag: "Whole Home", title: "Verona Estate Renovation", desc: "Whole-home rebuild including additions and exterior restoration." },
  { img: projBasement, tag: "Basement", title: "Livingston Lower Level", desc: "Theater, wet bar, guest suite, and full bath in 2,200 sq ft basement." },
];

const PROCESS = [
  { n: "01", title: "Consultation", body: "We listen, walk your site, and align on scope, schedule, and budget." },
  { n: "02", title: "Design & Planning", body: "Drawings, selections, permits, and detailed value engineering." },
  { n: "03", title: "Construction", body: "Senior PM on-site, weekly client updates, and uncompromising QC." },
  { n: "04", title: "Final Delivery", body: "Punch list, deep clean, walkthrough, and post-occupancy warranty." },
];

const TESTIMONIALS = [
  { name: "Dr. K. Patel, DVM", role: "Hospital Owner — Essex County", body: "Haven M delivered our 8,400 sq ft hospital on schedule and to a finish level we didn't think was possible. Their understanding of veterinary workflow is unmatched." },
  { name: "Sarah & David L.", role: "Whole-home renovation, Montclair", body: "Senior PM on-site every week, immaculate site, and a finished home that's better than we imagined. The craftsmanship speaks for itself." },
  { name: "Dr. M. Reyes, DVM", role: "Clinic Renovation — Bergen County", body: "They renovated three exam rooms while we stayed open. Containment was flawless and our staff barely knew construction was happening." },
];

const AREAS = ["Verona", "Montclair", "Livingston", "West Orange", "Cedar Grove", "Essex County", "Bergen County", "Passaic County", "Northern New Jersey"];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 overflow-hidden bg-[var(--navy-deep)] text-white">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Modern veterinary hospital interior"
            className="h-full w-full object-cover opacity-45"
            width={1600}
            height={1024}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, color-mix(in oklab, var(--navy-deep) 75%, transparent) 0%, color-mix(in oklab, var(--navy-deep) 65%, transparent) 40%, var(--navy-deep) 100%)" }}
          />
        </div>

        <div className="container-x relative grid min-h-[92vh] grid-rows-[1fr_auto] items-end pt-32 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="eyebrow text-[var(--gold)]">
              <span className="inline-block h-px w-10 bg-[var(--gold)]/70" />
              Verona, New Jersey · Est. Haven M Construction
            </p>
            <h1 className="mt-6 text-5xl leading-[1.02] text-white md:text-7xl lg:text-[5.5rem]">
              Building exceptional <span className="italic text-[var(--gold)]">veterinary hospitals</span> & luxury spaces.
            </h1>
            <p className="mt-7 max-w-2xl text-base text-white/75 md:text-lg">
              Specialized veterinary hospital construction, commercial build-outs, and premium home remodeling throughout New Jersey — engineered with healthcare-grade precision.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-4 text-sm font-semibold text-[var(--navy-deep)] shadow-elegant transition hover:brightness-110"
              >
                Get Free Estimate
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                View Projects
              </Link>
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur md:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.l} className="bg-[var(--navy-deep)]/40 px-6 py-7">
                <div className="text-3xl text-[var(--gold)] md:text-4xl">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/65">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-y border-border bg-card">
        <div className="container-x flex flex-wrap items-center justify-between gap-x-10 gap-y-6 py-8">
          {TRUST.map((t) => (
            <div key={t.label} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
              <t.icon className="h-5 w-5 text-[var(--gold)]" />
              {t.label}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-24 md:py-32">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Our Services</p>
            <h2 className="mt-3 text-4xl md:text-5xl">From animal hospitals to heirloom homes.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            One licensed team — eight specialized service lines built on the same standard of craftsmanship.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY VET */}
      <section className="bg-[var(--stone)]/60">
        <div className="container-x py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <Reveal>
              <p className="eyebrow">Veterinary Specialization</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Why veterinary facilities require specialized construction.</h2>
              <p className="mt-5 text-muted-foreground">
                A veterinary hospital isn't a typical commercial build. Patient flow, surgical sterility, HVAC zoning, and acoustic separation each demand healthcare-grade detailing. We've built our practice around the small decisions that make a facility succeed for decades.
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl">
                <img src={blueprintImg} alt="Architectural blueprint" loading="lazy" width={1280} height={800} className="h-full w-full object-cover" />
              </div>
            </Reveal>

            <div className="grid gap-4">
              {SPECS.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.05}>
                  <div className="group flex gap-5 rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30 hover:shadow-soft">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--navy)]/8 text-[var(--navy)] transition group-hover:bg-[var(--navy)] group-hover:text-[var(--gold)]">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg text-foreground">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container-x py-24 md:py-32">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured Projects</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Work we're proud to put our name on.</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-6">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.05}
              className={
                i === 0 ? "md:col-span-4" :
                i === 1 ? "md:col-span-2" :
                i === 2 ? "md:col-span-2" :
                "md:col-span-4"
              }
            >
              <div className="group relative h-80 overflow-hidden rounded-2xl md:h-96">
                <img src={p.img} alt={p.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/90 via-[var(--navy-deep)]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <span className="inline-flex rounded-full bg-[var(--gold)]/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--navy-deep)]">{p.tag}</span>
                  <h3 className="mt-3 text-2xl">{p.title}</h3>
                  <p className="mt-1 max-w-md text-sm text-white/75">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-[var(--navy-deep)] text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{ background: "radial-gradient(60% 60% at 100% 0%, color-mix(in oklab, var(--gold) 25%, transparent), transparent 70%)" }}
        />
        <div className="container-x relative py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-[var(--gold)]">Our Process</p>
            <h2 className="mt-3 text-4xl text-white md:text-5xl">A clear path from first call to final walkthrough.</h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
            {PROCESS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="group h-full bg-[var(--navy-deep)]/80 p-8 transition hover:bg-[var(--navy)]">
                  <div className="text-sm font-semibold text-[var(--gold)]">{step.n}</div>
                  <h3 className="mt-4 text-xl text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-24 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Client Voices</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Trusted by veterinarians and homeowners alike.</h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-soft">
                <Quote className="h-7 w-7 text-[var(--gold)]" />
                <blockquote className="mt-5 flex-1 text-foreground/85 leading-relaxed">"{t.body}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-[var(--stone)]/60">
        <div className="container-x py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <Reveal>
              <p className="eyebrow">Service Areas</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Building across Northern New Jersey.</h2>
              <p className="mt-5 text-muted-foreground">
                Headquartered in Verona, we serve veterinary clients and homeowners throughout Essex, Bergen, and Passaic counties.
              </p>
              <Link to="/service-areas" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                See all service areas <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {AREAS.map((a) => (
                <div key={a} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4">
                  <MapPin className="h-4 w-4 text-[var(--gold)]" />
                  <span className="text-sm font-medium text-foreground">{a}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
