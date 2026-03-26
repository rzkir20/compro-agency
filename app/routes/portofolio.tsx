import type { Route } from "./+types/home";

import data from "../../lib/data.json";

import { useParams } from "react-router";

import PortofolioComponent from "../portofolio/portofolio";

import CaseStudyDetailsPage from "../portofolio/case-study-details";

export function meta({ params }: Route.MetaArgs) {
  const id = (params as { id?: string } | undefined)?.id;

  const caseStudy = id
    ? (data as PortfolioData).portfolio.caseStudies.find((c) => c.slug === id)
    : undefined;

  return [
    {
      title: caseStudy?.title
        ? `${caseStudy.title} - Vertexa Strategy`
        : "Portfolio | Vertexa Strategy",
    },
    {
      name: "description",
      content: caseStudy?.description
        ? caseStudy.description
        : "Explore Vertexa Strategy's portfolio of measurable outcomes—partnering with global leaders to navigate disruption and unlock sustainable growth.",
    },
  ];
}

export default function PortofolioRoute() {
  const params = useParams();
  const id = (params as { id?: string }).id;

  if (id) return <CaseStudyDetailsPage />;
  return <PortofolioComponent />;
}
