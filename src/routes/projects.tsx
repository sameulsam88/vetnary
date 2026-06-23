import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import projVet from "@/assets/project-vet-exam.jpg";
import projKitchen from "@/assets/project-kitchen.jpg";
import projConstr from "@/assets/project-construction.jpg";
import projBasement from "@/assets/project-basement.jpg";
import projBath from "@/assets/project-bathroom.jpg";
import projHero from "@/assets/hero-vet.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Haven M Construction | Veterinary & Luxury NJ" },
      { name: "description", content: "Selected veterinary hospitals, clinic build-outs, and luxury remodels by Haven M Construction in New Jersey." },
      { property: "og:title", content: "Haven M Construction Project Portfolio" },
      { property: "og:description", content: "Veterinary hospitals, clinic build-outs, and luxury remodels across New Jersey." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const PROJECTS = [
  { img: projHero, tag: "Veterinary Hospital", title: "Essex Animal Hospital", desc: "9,200 sq ft ground-up hospital with surgical suite, isolation, and boarding wing." },
  { img: projVet, tag: "Clinic Renovation", title: "Bergen Veterinary Clinic", desc: "Three exam rooms and surgical prep renovated while the clinic stayed open." },
  { img: projKitchen, tag: "Luxury Kitchen", title: "Montclair Chef's Kitchen", desc: "Custom white-oak millwork, marble waterfall island, integrated appliance package." },
  { img: projConstr, tag: "Whole Home", title: "Verona Estate Rebuild", desc: "Full interior renovation with second-story addition and exterior restoration." },
  { img: projBasement, tag: "Basement", title: "Livingston Lower Level", desc: "Home theater, wet bar, full bath, and guest suite across 2,200 sq ft." },
  { img: projBath, tag: "Bathroom", title: "Cedar Grove Primary Suite", desc: "Marble walk-in shower, freestanding tub, heated floors, brass fixtures." },
];

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title="A portfolio of veterinary facilities and luxury remodels."
        description="A sample of recent Haven M projects across Northern New Jersey."
      />

      <section className="container-x py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="relative h-72 overflow-hidden md:h-96">
                  <img src={p.img} alt={p.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-5 top-5 rounded-full bg-[var(--gold)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--navy-deep)]">{p.tag}</span>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
