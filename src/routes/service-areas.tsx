import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: "Service Areas — Haven M Construction | Northern New Jersey" },
      { name: "description", content: "Haven M Construction serves Verona, Montclair, Livingston, West Orange, Cedar Grove, and Essex, Bergen, and Passaic counties." },
      { property: "og:title", content: "Haven M Construction Service Areas" },
      { property: "og:description", content: "Veterinary and luxury construction across Northern New Jersey." },
      { property: "og:url", content: "/service-areas" },
    ],
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: AreasPage,
});

const TOWNS = ["Verona", "Montclair", "Livingston", "West Orange", "Cedar Grove", "Caldwell", "Glen Ridge", "Bloomfield", "Nutley", "Wayne", "Little Falls", "Fairfield"];
const COUNTIES = ["Essex County", "Bergen County", "Passaic County", "Morris County", "Union County", "Hudson County"];

function AreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service Areas"
        title="Building across Northern New Jersey."
        description="Headquartered in Verona, we serve veterinary clients and homeowners throughout Essex, Bergen, Passaic, and surrounding counties."
      />

      <section className="container-x py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl">Towns we frequently build in</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {TOWNS.map((t) => (
                <div key={t} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4">
                  <MapPin className="h-4 w-4 text-[var(--gold)]" />
                  <span className="text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl">Counties we serve</h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {COUNTIES.map((c) => (
                <div key={c} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-4">
                  <MapPin className="h-4 w-4 text-[var(--gold)]" />
                  <span className="text-sm font-medium">{c}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Don't see your town? Veterinary and large remodel projects are considered statewide — call us at (201) 264-3506.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
