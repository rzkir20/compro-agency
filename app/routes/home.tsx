import type { Route } from "./+types/home";

import Welcome from "../home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Vertexa Strategy | Premium Business Consulting" },
    {
      name: "description",
      content:
        "Premium business consulting with global strategy expertise—turning complex challenges into measurable growth.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
