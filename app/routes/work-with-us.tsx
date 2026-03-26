import type { Route } from "./+types/home";

import WorkWithUsComponent from "../work-with-us/work-with-us";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Work With Us | Vertexa Strategy" },
    {
      name: "description",
      content:
        "Explore careers at Vertexa Strategy and join a global team shaping the future of consulting through strategic impact.",
    },
  ];
}

export default function WorkWithUsRoute() {
  return <WorkWithUsComponent />;
}
