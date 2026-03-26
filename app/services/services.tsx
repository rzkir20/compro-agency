import React from "react";

import { FaArrowRight } from "react-icons/fa";

import {
  FiCalendar,
  FiChevronRight,
  FiClock,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

import { IoSparkles } from "react-icons/io5";

import data from "../../lib/data.json";

const servicesData = (data as ServicesData).services;

const overview = servicesData.overview;

const engagementPackages = servicesData.engagementPackages;

const overviewIcons: Record<
  OverviewHighlightIcon,
  React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  trendingUp: FiTrendingUp,
  shield: FiShield,
};

export default function services() {
  return (
    <main
      style={{ viewTransitionName: "main-content" } as React.CSSProperties}
      className="pt-20"
    >
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] -mr-48 -mt-48" />
        </div>

        <div className="max-w-full-sm xl:container mx-auto px-6 relative z-10 text-white">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <a href="/" className="hover:text-white" id="breadcrumb-home">
              Home
            </a>
            <FiChevronRight className="w-4 h-4" aria-hidden="true" />
            <a
              href="/#services"
              className="hover:text-white"
              id="breadcrumb-services"
            >
              Services
            </a>
            <FiChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-blue-400">Strategic Planning</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Strategic Planning &amp; Market Leadership
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Empowering organizations to navigate market complexities with
              data-driven roadmaps, competitive intelligence, and sustainable
              growth frameworks.
            </p>

            <div className="flex items-center gap-6 pt-4 flex-wrap">
              <a
                href="/#contact"
                id="hero-book-btn"
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
              >
                Start Your Strategy Session
              </a>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <FiClock className="w-5 h-5 text-blue-400" aria-hidden="true" />
                <span>Average duration: 8-12 weeks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-full-sm xl:container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Overview</h2>
                {overview.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {overview.highlights.map((highlight) => {
                  const Icon = overviewIcons[highlight.icon];
                  return (
                    <div
                      key={highlight.title}
                      className="p-6 bg-slate-50 rounded-2xl border border-slate-100"
                    >
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" aria-hidden={true} />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {highlight.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Key Deliverables
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {overview.deliverables.map((deliverable) => (
                    <div key={deliverable} className="flex items-start gap-3">
                      <span className="mt-1 text-blue-600" aria-hidden="true">
                        ✓
                      </span>
                      <span className="text-slate-700">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="p-8 bg-slate-900 rounded-3xl text-white">
                <h4 className="text-xl font-bold mb-6">Engagement Timeline</h4>

                <div className="space-y-8 relative">
                  <div className="flex gap-4 relative">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold shrink-0 z-10">
                      01
                    </div>
                    <div>
                      <h5 className="font-bold">Discovery &amp; Audit</h5>
                      <p className="text-xs text-slate-400 mt-1">
                        Weeks 1-2: Internal assessment &amp; stakeholder
                        interviews.
                      </p>
                    </div>
                    <div className="absolute left-4 top-8 w-px h-8 bg-slate-700" />
                  </div>

                  <div className="flex gap-4 relative">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold shrink-0 z-10">
                      02
                    </div>
                    <div>
                      <h5 className="font-bold">Strategy Synthesis</h5>
                      <p className="text-xs text-slate-400 mt-1">
                        Weeks 3-6: Market research and roadmap development.
                      </p>
                    </div>
                    <div className="absolute left-4 top-8 w-px h-8 bg-slate-700" />
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold shrink-0 z-10">
                      03
                    </div>
                    <div>
                      <h5 className="font-bold">Final Implementation</h5>
                      <p className="text-xs text-slate-400 mt-1">
                        Weeks 7-10: Handover and execution training.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-slate-200 rounded-3xl space-y-6">
                <h4 className="text-xl font-bold text-slate-900">
                  Specialized Consultant
                </h4>

                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/150?u=a1"
                    alt="Elena Vance"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="text-sm">
                    <h5 className="font-bold text-slate-900">
                      Dr. Elena Vance
                    </h5>
                    <p className="text-slate-500">
                      Managing Director, Strategy
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 italic">
                  "We don't just look at the numbers; we look at the culture and
                  the capability to ensure every strategy we build can actually
                  cross the finish line."
                </p>

                <a
                  href="/#team"
                  id="sidebar-team-link"
                  className="text-blue-600 text-sm font-bold flex items-center gap-2"
                >
                  View full team{" "}
                  <FaArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-full-sm xl:container mx-auto px-6 text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            Engagement Packages
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 tracking-tight">
            {engagementPackages.heading}
          </h2>
        </div>

        <div className="max-w-full-sm xl:container mx-auto px-6 grid lg:grid-cols-3 gap-8">
          {engagementPackages.items.map((pkg) => (
            <div
              key={pkg.id}
              className={
                pkg.isFeatured
                  ? "bg-slate-900 p-10 rounded-3xl border border-blue-600/30 shadow-2xl flex flex-col transform lg:scale-105 relative"
                  : "bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col"
              }
            >
              {pkg.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  {pkg.badgeText}
                </div>
              )}
              <h3
                className={`text-xl font-bold mb-2 ${
                  pkg.isFeatured ? "text-white" : "text-slate-900"
                }`}
              >
                {pkg.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  pkg.isFeatured ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {pkg.description}
              </p>
              <div
                className={`text-4xl font-black mb-8 ${
                  pkg.isFeatured ? "text-white" : "text-slate-900"
                }`}
              >
                {pkg.priceMain}
                <span
                  className={`text-lg font-normal ${
                    pkg.isFeatured ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {pkg.priceSuffix}
                </span>
              </div>

              <ul className="space-y-4 mb-10 grow">
                {pkg.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={`flex items-center gap-3 text-sm ${
                      feature.included
                        ? pkg.isFeatured
                          ? "text-slate-300"
                          : "text-slate-600"
                        : "text-slate-400 line-through"
                    }`}
                  >
                    <span
                      className={
                        feature.included
                          ? pkg.isFeatured
                            ? "text-blue-400"
                            : "text-green-500"
                          : "text-slate-300"
                      }
                      aria-hidden="true"
                    >
                      {feature.included ? "✓" : "✕"}
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul>

              <a
                href="/#contact"
                id={pkg.id}
                className={
                  pkg.isFeatured
                    ? "w-full py-4 text-center bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
                    : "w-full py-4 text-center border border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-all"
                }
              >
                {pkg.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-10">
            <IoSparkles className="w-10 h-10" aria-hidden="true" />
          </div>

          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
            Ready to architect your market dominance?
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Join 500+ global leaders who have transformed their business
            outcomes through the Nexus strategy framework.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <a
              href="/#contact"
              id="cta-bottom-btn"
              className="px-10 py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-3 justify-center"
            >
              Book Strategy Workshop{" "}
              <FiCalendar className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
