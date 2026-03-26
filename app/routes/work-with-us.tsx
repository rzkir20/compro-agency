import type { Route } from "./+types/home";

import WorkWithUsComponent from "../work-with-us/work-with-us";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Team | Nexus Strategy" },
    {
      name: "description",
      content:
        "Meet the Nexus Strategy team of senior experts—driving strategic clarity and measurable outcomes for global organizations.",
    },
  ];
}

export default function WorkWithUsRoute() {
  return <WorkWithUsComponent />;
}
