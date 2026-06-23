import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView, serviceHead } from "@/components/site/ServicePageView";
import { getService } from "@/lib/services";

const SLUG = "kitchen-remodeling";

export const Route = createFileRoute("/services/kitchen-remodeling")({
  head: () => serviceHead(SLUG),
  component: () => {
    const service = getService(SLUG)!;
    return <ServicePageView service={service} />;
  },
});
