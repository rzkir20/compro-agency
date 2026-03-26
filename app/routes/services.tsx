import type { Route } from "./+types/home";

import ServicesComponent from "../services/services";

export function meta({ params }: Route.MetaArgs) {
  return [
    {
      title: "Services | Vertexa Strategy",
    },
    {
      name: "description",
      content:
        "Explore our consulting services across strategy, finance, digital transformation, operations, sustainability, and human capital.",
    },
  ];
}

export default function ServicesRoute() {
  return <ServicesComponent />;
}
