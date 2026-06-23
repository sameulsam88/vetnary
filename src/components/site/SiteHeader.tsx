import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/contact", label: "Contact" },
];

const SERVICES = [
  { to: "/services/veterinary-hospital-construction", label: "Veterinary Hospital Construction" },
  { to: "/services/veterinary-clinic-renovation", label: "Veterinary Clinic Renovation" },
  { to: "/services/animal-hospital-buildout", label: "Animal Hospital Build-Outs" },
  { to: "/services/kitchen-remodeling", label: "Kitchen Remodeling" },
  { to: "/services/bathroom-remodeling", label: "Bathroom Remodeling" },
  { to: "/services/basement-remodeling", label: "Basement Remodeling" },
  { to: "/services/home-additions", label: "Home Additions" },
  { to: "/services/whole-home-remodeling", label: "Whole Home Remodeling" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white`}>
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Logo className="h-10 w-auto sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.slice(0, 2).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-sm font-medium text-foreground/80 transition hover:text-primary">
              Services
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[28rem] -translate-x-1/2 pt-3">
                <div className="glass rounded-xl p-3 shadow-elegant">
                  <div className="grid grid-cols-1 gap-1">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className="rounded-lg px-3 py-2 text-sm text-foreground/85 transition hover:bg-primary/5 hover:text-primary"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {NAV.slice(2).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+12012643506"
            className="flex items-center gap-2 rounded-full border border-primary/15 bg-white/60 px-4 py-2 text-sm font-medium text-primary transition hover:border-primary/40"
          >
            <Phone className="h-4 w-4" /> (201) 264-3506
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-navy-deep"
          >
            Free Estimate
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/85 hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Services
            </div>
            {SERVICES.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted"
              >
                {s.label}
              </Link>
            ))}
            <a
              href="tel:+12012643506"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call (201) 264-3506
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
