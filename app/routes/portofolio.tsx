import type { Route } from "./+types/home";

import PortofolioComponent from "../portofolio/portofolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | Nexus Strategy" },
    {
      name: "description",
      content:
        "Explore Nexus Strategy's portfolio of measurable outcomes—partnering with global leaders to navigate disruption and unlock sustainable growth.",
    },
  ];
}

export default function PortofolioRoute() {
  return <PortofolioComponent />;
}
