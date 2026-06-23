import { Stethoscope, Building2, HardHat, ChefHat, Bath, Home, Layers, Hammer } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  category: "veterinary" | "residential";
  icon: LucideIcon;
  tagline: string;
  description: string;
  hero: string;
  features: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "veterinary-hospital-construction",
    shortTitle: "Veterinary Hospital Construction",
    title: "Veterinary Hospital Construction",
    category: "veterinary",
    icon: Stethoscope,
    tagline: "Ground-up veterinary facilities engineered for clinical workflow.",
    description:
      "We design and build veterinary hospitals from foundation to finishes — coordinating surgical suites, isolation wards, imaging rooms, and HVAC systems that meet the demands of modern animal medicine.",
    hero: "Purpose-built hospitals that elevate patient outcomes and staff workflow.",
    features: [
      "Surgical suite construction with medical-grade finishes",
      "Isolation and quarantine ward separation",
      "Negative-pressure rooms and zoned HVAC",
      "Radiology and imaging suite shielding",
      "Acoustic separation for boarding and exam areas",
      "Durable antimicrobial flooring & wall systems",
    ],
    process: [
      {
        title: "Pre-construction",
        body: "Programming, permitting, value engineering, and trade coordination.",
      },
      {
        title: "Build phase",
        body: "On-site project management, weekly client updates, and milestone reviews.",
      },
      {
        title: "Commissioning",
        body: "Systems validation, finishes punch list, and clinical hand-off.",
      },
    ],
    faqs: [
      {
        q: "How long does a veterinary hospital build take?",
        a: "Typical ground-up hospitals run 9–14 months depending on size and site conditions.",
      },
      {
        q: "Can you work with our architect?",
        a: "Yes. We collaborate with healthcare architects and equipment vendors throughout design.",
      },
    ],
  },
  {
    slug: "veterinary-clinic-renovation",
    shortTitle: "Veterinary Clinic Renovation",
    title: "Veterinary Clinic Renovation",
    category: "veterinary",
    icon: Building2,
    tagline: "Modernize an operating clinic with minimal disruption.",
    description:
      "Renovate exam rooms, surgical suites, and reception while keeping your practice open. We phase the work, contain dust, and protect patients throughout.",
    hero: "Refresh, expand, and upgrade — without losing operating days.",
    features: [
      "Phased construction around clinical hours",
      "Negative-pressure dust containment",
      "After-hours and weekend work options",
      "Upgrades to flooring, casework, plumbing & power",
      "Veterinary-grade finish selection guidance",
      "ADA and code compliance updates",
    ],
    process: [
      { title: "Site assessment", body: "Walk-through, scope alignment, and phasing plan." },
      { title: "Phased build", body: "Controlled work zones with daily protective cleanup." },
      { title: "Reopen", body: "Final inspections, deep clean, and turnover." },
    ],
    faqs: [
      {
        q: "Can you renovate while we stay open?",
        a: "Yes. Most renovations are phased so the clinic continues to operate.",
      },
    ],
  },
  {
    slug: "animal-hospital-buildout",
    shortTitle: "Animal Hospital Build-Outs",
    title: "Animal Hospital Build-Outs",
    category: "veterinary",
    icon: HardHat,
    tagline: "Turn shell space into a fully-operational animal hospital.",
    description:
      "From a vanilla-box lease space to a turnkey hospital — interior partitions, MEP, finishes, equipment rough-ins, and signage coordination.",
    hero: "Tenant build-outs delivered on schedule and on budget.",
    features: [
      "Full MEP design coordination",
      "Medical gas and vacuum rough-ins",
      "Custom casework and reception design",
      "Landlord work-letter compliance",
      "Equipment vendor scheduling",
      "Final inspections and certificate of occupancy",
    ],
    process: [
      {
        title: "Lease coordination",
        body: "Align landlord requirements and tenant improvement allowances.",
      },
      { title: "Permitting", body: "Drawings, submissions, and inspections handled in-house." },
      { title: "Turnkey delivery", body: "Move-in ready with equipment vendors coordinated." },
    ],
    faqs: [
      {
        q: "Do you coordinate with our equipment vendors?",
        a: "Yes. We schedule cage, surgical, dental, and imaging installers as part of the build.",
      },
    ],
  },
  {
    slug: "kitchen-remodeling",
    shortTitle: "Kitchen Remodeling",
    title: "Luxury Kitchen Remodeling",
    category: "residential",
    icon: ChefHat,
    tagline: "Heirloom-quality kitchens designed around how you live.",
    description:
      "Custom cabinetry, stone surfaces, integrated appliances, and lighting that transforms the heart of your home.",
    hero: "Architectural kitchens with finish-carpentry precision.",
    features: [
      "Custom and semi-custom cabinetry",
      "Quartz, marble, and natural stone surfaces",
      "Integrated appliance packages",
      "Layered lighting design",
      "Hardwood and large-format tile flooring",
      "Plumbing and electrical relocation",
    ],
    process: [
      { title: "Design", body: "Layouts, selections, and 3D visualization." },
      { title: "Build", body: "Demolition, MEP, framing, finishes." },
      { title: "Reveal", body: "Punch list and final styling." },
    ],
    faqs: [
      {
        q: "How long does a kitchen remodel take?",
        a: "Most full kitchen remodels run 8–14 weeks once materials are on site.",
      },
    ],
  },
  {
    slug: "bathroom-remodeling",
    shortTitle: "Bathroom Remodeling",
    title: "Luxury Bathroom Remodeling",
    category: "residential",
    icon: Bath,
    tagline: "Spa-grade bathrooms with hotel-level detailing.",
    description:
      "Marble walk-in showers, freestanding tubs, heated floors, and lighting that turns a daily routine into a ritual.",
    hero: "Bathrooms engineered for waterproofing and crafted for calm.",
    features: [
      "Full waterproofing systems",
      "Frameless glass enclosures",
      "Heated tile floors and towel warmers",
      "Custom vanities and stone tops",
      "Brass, nickel, and matte black fixture packages",
      "Statement lighting and mirrors",
    ],
    process: [
      { title: "Selections", body: "Tile, stone, plumbing, and lighting curated together." },
      { title: "Waterproofing", body: "Industry-leading membranes and detailing." },
      { title: "Finish", body: "Final tile, glass, and fixtures installed by specialists." },
    ],
    faqs: [
      {
        q: "Do you handle permits?",
        a: "Yes — plumbing and electrical permits are pulled and inspected by our team.",
      },
    ],
  },
  {
    slug: "basement-remodeling",
    shortTitle: "Basement Remodeling",
    title: "Basement Remodeling",
    category: "residential",
    icon: Layers,
    tagline: "Transform raw lower levels into refined living space.",
    description:
      "Theater rooms, gyms, wet bars, guest suites, and wine cellars — engineered for moisture, sound, and comfort.",
    hero: "Lower-level transformations with main-floor finish quality.",
    features: [
      "Moisture mitigation and waterproofing",
      "Egress windows and bedroom build-outs",
      "Wet bars and wine rooms",
      "Home theaters and acoustic treatment",
      "Full bathrooms and guest suites",
      "Heating, cooling, and ventilation upgrades",
    ],
    process: [
      { title: "Assessment", body: "Moisture, structure, and code review." },
      { title: "Framing", body: "Insulation, MEP, and partition work." },
      { title: "Finish", body: "Flooring, millwork, paint, and styling." },
    ],
    faqs: [
      {
        q: "Do you handle waterproofing?",
        a: "Yes — moisture mitigation is integrated into every basement build.",
      },
    ],
  },
  {
    slug: "home-additions",
    shortTitle: "Home Additions",
    title: "Home Additions",
    category: "residential",
    icon: Home,
    tagline: "Add space that looks like it was always there.",
    description:
      "Family rooms, primary suites, second-story additions, and dormers detailed to match your existing architecture.",
    hero: "Additions designed for seamless architectural continuity.",
    features: [
      "Architectural design and engineering",
      "Foundation and structural framing",
      "Roof tie-ins and exterior matching",
      "Full MEP integration",
      "Window and door packages",
      "Interior finish carpentry",
    ],
    process: [
      { title: "Design", body: "Architecture and structural engineering." },
      { title: "Permits", body: "Township submissions and approvals." },
      { title: "Build", body: "Foundation, framing, and finishes." },
    ],
    faqs: [
      {
        q: "Do you provide architectural drawings?",
        a: "Yes — design-build is our preferred delivery method.",
      },
    ],
  },
  {
    slug: "whole-home-remodeling",
    shortTitle: "Whole Home Remodeling",
    title: "Whole Home Remodeling",
    category: "residential",
    icon: Hammer,
    tagline: "Reimagine an entire home with one accountable team.",
    description:
      "Floor-plan reworks, kitchens, baths, mechanicals, finishes — managed end-to-end with weekly progress reporting.",
    hero: "Full renovations led by senior project managers.",
    features: [
      "Open-concept floor plan reworks",
      "Kitchen and multi-bath packages",
      "HVAC, electrical, and plumbing upgrades",
      "Exterior and curb-appeal work",
      "Interior design coordination",
      "Smart-home wiring",
    ],
    process: [
      { title: "Pre-construction", body: "Scope, selections, schedule, and budget." },
      { title: "Build", body: "Senior PM, dedicated foreman, weekly updates." },
      { title: "Move-in", body: "Punch list, deep clean, and warranty walk-through." },
    ],
    faqs: [
      {
        q: "Can we live in the home during construction?",
        a: "Sometimes — most clients move out for whole-home projects for safety and speed.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
