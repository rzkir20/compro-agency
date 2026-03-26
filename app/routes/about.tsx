import type { Route } from "./+types/home";

import AboutComponent from "../about/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us | Nexus Strategy" },
    {
      name: "description",
      content:
        "Nexus Strategy is a global consulting powerhouse guiding leaders through critical organizational transitions—transforming complexity into competitive advantage.",
    },
  ];
}

export default function AboutRoute() {
  return <AboutComponent />;
}
