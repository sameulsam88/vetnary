import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView, serviceHead } from "@/components/site/ServicePageView";
import { getService } from "@/lib/services";

const SLUG = "animal-hospital-buildout";

export const Route = createFileRoute("/services/animal-hospital-buildout")({
  head: () => serviceHead(SLUG),
  component: () => {
    const service = getService(SLUG)!;
    return <ServicePageView service={service} />;
  },
});
