import type { Route } from "./+types/home";

import { useParams } from "react-router";

import WorkWithUsComponent from "../work-with-us/work-with-us";

import WorkWithUsDetails from "../work-with-us/work-with-us-details";

import data from "../../lib/data.json";

export function meta({ params }: Route.MetaArgs) {
  const id = (params as { id?: string } | undefined)?.id;
  const opening = id
    ? (data as WorkWithUsData).workWithUs.openings.find(
        (item) => item.id === id,
      )
    : undefined;

  return [
    {
      title: opening?.title
        ? `${opening.title} | Careers at Vertexa Strategy`
        : "Work With Us | Vertexa Strategy",
    },
    {
      name: "description",
      content: opening?.description
        ? opening.description
        : "Explore careers at Vertexa Strategy and join a global team shaping the future of consulting through strategic impact.",
    },
  ];
}

export default function WorkWithUsRoute() {
  const params = useParams();
  const id = (params as { id?: string }).id;

  if (id) return <WorkWithUsDetails openingId={id} />;
  return <WorkWithUsComponent />;
}
