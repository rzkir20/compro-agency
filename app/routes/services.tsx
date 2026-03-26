import type { Route } from "./+types/home";

import { useParams } from "react-router";

import ServicesComponent from "../services/services";

import ServicesDetailsComponent from "../services/services-details";

import data from "../../lib/data.json";

export function meta({ params }: Route.MetaArgs) {
  const id = (params as { id?: string } | undefined)?.id;
  const servicesData = (data as ServicesData).services;
  const pkg = id
    ? servicesData.engagementPackages.items.find((p) => p.id === id)
    : undefined;

  return [
    {
      title: pkg?.name ? `${pkg.name} - Vertexa Strategy` : "Services | Vertexa Strategy",
    },
    {
      name: "description",
      content: pkg?.description
        ? pkg.description
        : "Strategic planning and market leadership consulting—building data-driven roadmaps, competitive intelligence, and sustainable growth frameworks for global organizations.",
    },
  ];
}

export default function ServicesRoute() {
  const params = useParams();
  const id = (params as { id?: string }).id;

  if (id) return <ServicesDetailsComponent packageId={id} />;
  return <ServicesComponent />;
}
