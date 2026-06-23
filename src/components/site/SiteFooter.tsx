import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[var(--navy-deep)] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, color-mix(in oklab, var(--gold) 30%, transparent), transparent 70%), radial-gradient(50% 40% at 0% 100%, color-mix(in oklab, var(--sky) 25%, transparent), transparent 70%)",
        }}
      />
      <div className="container-x relative py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="h-12 w-auto" invert />
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Specialized veterinary hospital construction and luxury remodeling throughout New
              Jersey since day one.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--gold)]">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {[
                ["/services/veterinary-hospital-construction", "Veterinary Hospitals"],
                ["/services/veterinary-clinic-renovation", "Clinic Renovations"],
                ["/services/animal-hospital-buildout", "Hospital Build-Outs"],
                ["/services/kitchen-remodeling", "Kitchen Remodeling"],
                ["/services/bathroom-remodeling", "Bathroom Remodeling"],
                ["/services/home-additions", "Home Additions"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--gold)]">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <Link to="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/service-areas" className="hover:text-white">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--gold)]">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[var(--gold)] shrink-0" />
                <a href="tel:+12012643506" className="hover:text-white">
                  (201) 264-3506
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[var(--gold)] shrink-0" />
                <a href="mailto:info@havenmconstruction.com" className="hover:text-white break-all">
                  info@havenmconstruction.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--gold)] shrink-0" />
                <span>Verona, New Jersey</span>
              </li>
            </ul>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-white/70">
              Licensed & Insured General Contractor — NJ
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Haven M Construction, LLC. All rights reserved.</p>
          <p>Verona · Montclair · Livingston · West Orange · Cedar Grove · Northern NJ</p>
        </div>
      </div>
    </footer>
  );
}
