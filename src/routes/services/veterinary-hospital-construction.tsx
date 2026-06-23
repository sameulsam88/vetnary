import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView, serviceHead } from "@/components/site/ServicePageView";
import { getService } from "@/lib/services";

const SLUG = "veterinary-hospital-construction";

export const Route = createFileRoute("/services/veterinary-hospital-construction")({
  head: () => serviceHead(SLUG),
  component: () => {
    const service = getService(SLUG)!;
    return <ServicePageView service={service} />;
  },
});
