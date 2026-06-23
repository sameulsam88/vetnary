import { createFileRoute } from "@tanstack/react-router";
import { ServicePageView, serviceHead } from "@/components/site/ServicePageView";
import { getService } from "@/lib/services";

const SLUG = "whole-home-remodeling";

export const Route = createFileRoute("/services/whole-home-remodeling")({
  head: () => serviceHead(SLUG),
  component: () => {
    const service = getService(SLUG)!;
    return <ServicePageView service={service} />;
  },
});
