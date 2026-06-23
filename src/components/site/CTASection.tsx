import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="container-x py-24">
      <div
        className="relative overflow-hidden rounded-3xl bg-[var(--navy-deep)] px-8 py-16 text-white md:px-16 md:py-24"
        style={{ boxShadow: "var(--shadow-elegant)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(50% 60% at 100% 0%, color-mix(in oklab, var(--gold) 30%, transparent), transparent 70%), radial-gradient(60% 60% at 0% 100%, color-mix(in oklab, var(--sky) 22%, transparent), transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl">
          <p className="eyebrow text-[var(--gold)]">Let's build</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Ready to build something exceptional?</h2>
          <p className="mt-5 max-w-2xl text-white/75">
            Whether you're planning a new veterinary hospital or transforming your home, our team
            brings healthcare-grade precision to every project.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3.5 text-sm font-semibold text-[var(--navy-deep)] transition hover:brightness-110"
            >
              Schedule Consultation
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+12012643506"
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call (201) 264-3506
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
