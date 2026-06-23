import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView, serviceHead } from "@/components/site/ServicePageView";
import { getService } from "@/lib/services";

const SLUG = "bathroom-remodeling";

export const Route = createFileRoute("/services/bathroom-remodeling")({
  head: () => serviceHead(SLUG),
  component: () => {
    const service = getService(SLUG)!;
    return <ServicePageView service={service} />;
  },
});
