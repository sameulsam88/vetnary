import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Haven M Construction | Verona, NJ" },
      { name: "description", content: "Contact Haven M Construction in Verona, NJ for veterinary hospital construction or luxury home remodeling estimates." },
      { property: "og:title", content: "Contact Haven M Construction" },
      { property: "og:description", content: "Get a free estimate for veterinary or residential construction in New Jersey." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about your project."
        description="Free estimates for veterinary construction and luxury remodeling throughout New Jersey."
      />

      <section className="container-x py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-soft"
            >
              <h2 className="text-3xl">Request a free estimate</h2>
              <p className="mt-2 text-sm text-muted-foreground">We typically respond within one business day.</p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Project type</label>
                  <select className="rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none">
                    <option>Veterinary Hospital Construction</option>
                    <option>Veterinary Clinic Renovation</option>
                    <option>Animal Hospital Build-Out</option>
                    <option>Kitchen Remodeling</option>
                    <option>Bathroom Remodeling</option>
                    <option>Basement Remodeling</option>
                    <option>Home Additions</option>
                    <option>Whole Home Remodeling</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2 flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tell us about your project</label>
                  <textarea
                    rows={5}
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
                    placeholder="Scope, timeline, location..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-[var(--navy-deep)]"
              >
                {sent ? "Thank you — we'll be in touch" : "Send message"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5">
            <a href="tel:+12012643506" className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--navy)]/8 text-[var(--navy)] group-hover:bg-[var(--navy)] group-hover:text-[var(--gold)]">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call us</div>
                <div className="text-lg font-semibold text-foreground">(201) 264-3506</div>
              </div>
            </a>
            <a href="mailto:info@havenmconstruction.com" className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--navy)]/8 text-[var(--navy)] group-hover:bg-[var(--navy)] group-hover:text-[var(--gold)]">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="text-base font-semibold text-foreground break-all">info@havenmconstruction.com</div>
              </div>
            </a>
            <div className="flex items-center gap-5 rounded-2xl border border-border bg-card p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--navy)]/8 text-[var(--navy)]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Office</div>
                <div className="text-base font-semibold text-foreground">Verona, New Jersey</div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Verona, NJ map"
                src="https://www.google.com/maps?q=Verona,NJ&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
