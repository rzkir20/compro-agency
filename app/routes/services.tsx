import type { Route } from "./+types/home";

import ServicesComponent from "../services/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services | Nexus Strategy" },
    {
      name: "description",
      content:
        "Strategic planning and market leadership consulting—building data-driven roadmaps, competitive intelligence, and sustainable growth frameworks for global organizations.",
    },
  ];
}

export default function ServicesRoute() {
  return <ServicesComponent />;
}
