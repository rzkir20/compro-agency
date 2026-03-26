import type { Route } from "./+types/home";

import { useParams } from "react-router";

import TeamComponent from "../team/team";

import TeamProfileComponent from "../team/team-profile";

import data from "../../lib/data.json";

export function meta({ params }: Route.MetaArgs) {
  const id = (params as { id?: string } | undefined)?.id;

  const team = (data as TeamData).team;
  const leaders = team.leaders;
  const specialists = team.specialists;

  const member = id
    ? leaders.find((m) => m.slug === id) ??
      specialists.find((m) => m.slug === id)
    : undefined;

  return [
    {
      title: member?.name
        ? `${member.name} - Vertexa Strategy`
        : "Vertexa Strategy",
    },
    {
      name: "description",
      content: member?.role
        ? `Learn more about ${member.name}, ${member.role}.`
        : "Meet the Vertexa Strategy team of senior experts—driving strategic clarity and measurable outcomes for global organizations.",
    },
  ];
}

export default function TeamRoute() {
  const params = useParams();
  const id = (params as { id?: string }).id;

  if (id) return <TeamProfileComponent memberId={id} />;
  return <TeamComponent />;
}
