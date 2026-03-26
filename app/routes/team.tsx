import type { Route } from "./+types/home";

import TeamComponent from "../team/team";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Team | Vertexa Strategy" },
    {
      name: "description",
      content:
        "Meet the Vertexa Strategy team of senior experts—driving strategic clarity and measurable outcomes for global organizations.",
    },
  ];
}

export default function TeamRoute() {
  return <TeamComponent />;
}
