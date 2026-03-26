import React from "react";

import { Link, useParams } from "react-router";

import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";

import { FiChevronRight } from "react-icons/fi";

import data from "../../lib/data.json";

const CASE_STUDIES = (data as PortfolioData).portfolio.caseStudies;

const teamData = (data as TeamData).team;
const TEAM_LEADERS = teamData.leaders;
const TEAM_SPECIALISTS = teamData.specialists;

function getTeamMemberSlug(name: string): string | undefined {
  return (
    TEAM_LEADERS.find((m) => m.name === name)?.slug ??
    TEAM_SPECIALISTS.find((m) => m.name === name)?.slug
  );
}

function makeFallbackDetails(caseStudy: CaseStudy): CaseStudyDetails {
  return {
    breadcrumbLabel: caseStudy.title,
    categoryLabel: `${caseStudy.industry} Transformation`,
    pageTitle: caseStudy.title,
    engagementBadges: [
      { text: "14 Months Engagement" },
      { text: "Global European Bank" },
      { text: "FastCompany Design Award 2023" },
    ],
    challenge: {
      title: "Legacy Barriers to Growth",
      description:
        "Our client faced legacy constraints that slowed delivery, increased operational overhead, and reduced the user experience. We identified the highest-impact friction points and rebuilt the journey end-to-end.",
      bullets: [
        "Declining NPS scores among priority customer segments.",
        "High operational costs due to legacy, branch-heavy processing.",
        "Technical debt preventing rapid iteration and deployment.",
      ],
    },
    solution: {
      title: "A Radical UX Pivot",
      description:
        "Nexus implemented a design-led transformation framework that bypassed traditional bottlenecks and rebuilt the core experience from the user's perspective.",
      features: [
        {
          title: "Instant KYC",
          description:
            "Automated workflows reduced onboarding friction dramatically.",
        },
        {
          title: "Predictive Spend",
          description:
            "AI-driven insights to help users save more effectively.",
        },
      ],
    },
    metrics: [
      { value: "+35%", label: "Digital Adoption" },
      { value: "-85%", label: "Onboarding Time" },
      { value: "$42M", label: "Annual Ops Savings" },
      { value: "4.8 Star", label: "App Store Rating" },
    ],
    timeline: [
      {
        step: "01",
        title: "Discovery & Audit",
        description:
          "Week 1-4: Stakeholder interviews and tech stack evaluation.",
      },
      {
        step: "02",
        title: "Prototype & Design",
        description:
          "Week 5-12: High-fidelity prototypes and user testing cycles.",
      },
      {
        step: "03",
        title: "Core Engineering",
        description:
          "Week 13-40: Agile development of the microservices layer.",
      },
      {
        step: "04",
        title: "Pilot & Global Scale",
        description: "Week 41-60: Staged rollout to scale across markets.",
      },
    ],
    teamInvolved: [
      {
        name: "Dr. Elena Vance",
        role: "Lead Strategic Partner",
        imageSrc: "https://i.pravatar.cc/150?u=a1",
        imageAlt: "Elena Vance",
        href: "#",
      },
      {
        name: "Marcus Thorne",
        role: "UX/Product Director",
        imageSrc: "https://i.pravatar.cc/150?u=a2",
        imageAlt: "Marcus Thorne",
        href: "#",
      },
      {
        name: "Julian Voss",
        role: "Systems Architect",
        imageSrc: "https://i.pravatar.cc/150?u=a6",
        imageAlt: "Julian Voss",
        href: "#",
      },
      {
        name: "Sofia Martinez",
        role: "Data Scientist",
        imageSrc: "https://i.pravatar.cc/150?u=a7",
        imageAlt: "Sofia Martinez",
        href: "#",
      },
    ],
    testimonial: {
      quote:
        "Nexus didn't just design a new app; they transformed our internal culture to be digital-first.",
      name: "Jean-Pierre Rossi",
      role: "Chief Digital Officer, European Global Bank",
    },
    gallery: [
      {
        label: "Legacy Platform (2021)",
        imageSrc:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
        imageAlt: "Legacy Banking",
      },
      {
        label: "Nexus Experience (2023)",
        imageSrc:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        imageAlt: "Modern Banking UX",
      },
    ],
    keyLearnings: [
      {
        title: "Trust is Mobile-First",
        description:
          "Modern banking trust isn't built in marble branches; it's built in the reliability and speed of the mobile app interface.",
      },
      {
        title: "Data as a Service",
        description:
          "Users don't want spreadsheets; they want actionable intelligence on their spending patterns delivered in real-time.",
      },
    ],
    bottomCta: {
      title: "Start Your Transformation Today",
      description:
        "Whether it's UX overhaul or a total strategic pivot, our team is ready to deliver measurable growth for your organization.",
      buttonLabel: "Book a Deep-Dive",
      href: "/#contact",
    },
  };
}

export default function CaseStudyDetailsPage() {
  const params = useParams();
  const slug =
    (params as { id?: string; slug?: string }).slug ??
    (params as { id?: string; slug?: string }).id;

  const caseStudy = CASE_STUDIES.find((c) => c.slug === slug);
  if (!caseStudy) {
    throw new Response("Case study not found", { status: 404 });
  }

  const details = caseStudy.details ?? makeFallbackDetails(caseStudy);
  const related = CASE_STUDIES.filter((c) => c.slug !== caseStudy.slug).slice(
    0,
    2,
  );

  return (
    <main
      style={{ viewTransitionName: "main-content" } as React.CSSProperties}
      className="flex-1 pt-20"
    >
      <section className="hero-gradient text-white pt-12 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px] -mr-96 -mt-96" />
        </div>

        <div className="max-w-full-sm xl:container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-3 text-sm text-slate-400 mb-12">
            <Link
              to="/"
              id="breadcrumb-home"
              className="hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <FiChevronRight className="text-xs" />
            <Link
              to="/portfolio"
              id="breadcrumb-portfolio"
              className="hover:text-blue-400 transition-colors"
            >
              Portfolio
            </Link>
            <FiChevronRight className="text-xs" />
            <span className="text-slate-200">{details.breadcrumbLabel}</span>
          </nav>

          <div className="max-w-4xl">
            <span className="px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 block w-fit italic">
              {details.categoryLabel}
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
              {details.pageTitle}
            </h1>
            <div className="flex flex-wrap items-center gap-8 text-slate-300">
              {details.engagementBadges.map((b) => (
                <div key={b.text} className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-white -mt-16 relative z-20">
        <div className="max-w-full-sm xl:container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="p-12 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">
                  The Challenge
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                  {details.challenge.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {details.challenge.description}
                </p>
                <ul className="space-y-4">
                  {details.challenge.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-slate-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-12 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl shadow-slate-900/20">
                <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">
                  The Nexus Solution
                </span>
                <h2 className="text-3xl font-bold mb-6 tracking-tight">
                  {details.solution.title}
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  {details.solution.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {details.solution.features.map((f) => (
                    <div key={f.title} className="space-y-2">
                      <h4 className="font-bold text-white">{f.title}</h4>
                      <p className="text-sm text-slate-400">{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-slate-50">
        <div className="max-w-full-sm xl:container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
              Measurable Impact
            </h2>
            <p className="text-slate-500 mt-4">
              Data-driven results that transformed the organization's bottom
              line and market perception.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {details.metrics.map((m) => (
              <div
                key={m.label}
                className="metric-card bg-white p-10 rounded-3xl border border-slate-200 text-center"
              >
                <div className="text-5xl font-black text-blue-600 mb-2">
                  {m.value}
                </div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-white overflow-hidden">
        <div className="max-w-full-sm xl:container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-16 tracking-tight">
            Phase-by-Phase Execution
          </h2>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="absolute hidden md:block top-8 left-0 right-0 h-0.5 bg-slate-100" />

            {details.timeline.map((t) => (
              <div key={t.step} className="relative space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 text-slate-900 flex items-center justify-center font-bold text-xl relative z-10 shadow-sm">
                  {t.step}
                </div>
                <h4 className="font-bold text-slate-900 pt-2">{t.title}</h4>
                <p className="text-sm text-slate-500">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-full-sm xl:container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Team Involved
              </h2>
              <p className="text-slate-500 mt-2">
                The experts behind the transformation.
              </p>
            </div>
            <a
              href="#team"
              className="text-blue-600 font-bold flex items-center gap-2 group mt-4 md:mt-0"
            >
              View Full Team{" "}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {details.teamInvolved.map((m) => {
              const slug = getTeamMemberSlug(m.name);

              const card = (
                <div className="p-6 bg-white rounded-3xl border border-slate-200 group-hover:border-blue-400 transition-all">
                  <img
                    src={m.imageSrc}
                    alt={m.imageAlt}
                    className="w-20 h-20 rounded-2xl object-cover mb-4 grayscale group-hover:grayscale-0 transition-all"
                  />
                  <h4 className="font-bold text-slate-900">{m.name}</h4>
                  <p className="text-sm text-slate-500">{m.role}</p>
                </div>
              );

              return slug ? (
                <Link
                  key={m.name}
                  to={`/team/${slug}`}
                  className="block group"
                >
                  {card}
                </Link>
              ) : (
                <a
                  key={m.name}
                  href={m.href ?? "#"}
                  className="block group"
                >
                  {card}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-white">
        <div className="max-w-full-sm xl:container mx-auto px-6 text-center">
          <FaQuoteLeft className="text-6xl text-blue-100 mb-8 mx-auto" />
          <blockquote className="text-3xl font-medium text-slate-900 italic leading-snug mb-10">
            &quot;{details.testimonial.quote}&quot;
          </blockquote>
          <div className="flex flex-col items-center">
            <h5 className="font-bold text-slate-900">
              {details.testimonial.name}
            </h5>
            <p className="text-slate-500 text-sm uppercase tracking-widest">
              {details.testimonial.role}
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-slate-900 overflow-hidden">
        <div className="max-w-full-sm xl:container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 tracking-tight text-center">
            Interface Evolution
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {details.gallery.slice(0, 2).map((g) => (
              <div key={g.label} className="flex flex-col gap-4">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                  {g.label}
                </span>
                <div
                  className={
                    g.label.toLowerCase().includes("legacy")
                      ? "aspect-video rounded-3xl overflow-hidden grayscale opacity-50 border border-white/10"
                      : "aspect-video rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-500/20"
                  }
                >
                  <img
                    src={g.imageSrc}
                    alt={g.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-white">
        <div className="max-w-full-sm xl:container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Key Strategic Learnings
              </h2>
              <p className="text-slate-500 mt-4 leading-relaxed">
                Three fundamental insights we gained that now inform our broader
                practice.
              </p>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {details.keyLearnings.map((k) => (
                <div
                  key={k.title}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-100"
                >
                  <h4 className="font-bold text-slate-900 mb-2">{k.title}</h4>
                  <p className="text-sm text-slate-600">{k.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-white">
        <div className="max-w-full-sm xl:container mx-auto px-6">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                {details.bottomCta.title}
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {details.bottomCta.description}
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href={details.bottomCta.href}
                  className="px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center gap-3 shadow-xl"
                >
                  {details.bottomCta.buttonLabel}
                  <FaArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mt-32" />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-full-sm xl:container mx-auto px-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-12">
            More Success Stories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/portfolio/${p.slug}`}
                className="group block"
              >
                <div className="aspect-video rounded-3xl overflow-hidden mb-4 relative">
                  <img
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-slate-900/20" />
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {p.title}
                </h4>
                <p className="text-sm text-slate-500 mt-1 italic">
                  {p.outcomeLabel}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
