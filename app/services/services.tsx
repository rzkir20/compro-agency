import React from "react";

import {
  FaArrowRight,
  FaBriefcase,
  FaGlobe,
  FaRegCheckCircle,
} from "react-icons/fa";

import {
  FiCalendar,
  FiChevronRight,
  FiClock,
  FiMonitor,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import { IoBarChart } from "react-icons/io5";

import data from "../../lib/data.json";

import { slugifyServiceTitle } from "../../lib/service-slug";

const homePageData = (data as HomePageData).homePage;

const servicesIcons: Record<
  HomeService["icon"],
  React.ComponentType<{ className?: string }>
> = {
  trendingUp: FiTrendingUp,
  barChart: IoBarChart,
  monitor: FiMonitor,
  users: FiUsers,
  globe: FaGlobe,
  briefcase: FaBriefcase,
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
              href="/services"
              className="hover:text-white"
              id="breadcrumb-services"
            >
              Services
            </a>
          </nav>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-400 text-xs font-bold uppercase tracking-widest w-fit">
              {homePageData.services.badge}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              {homePageData.services.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {homePageData.services.description}
            </p>

            <div className="flex items-center gap-6 pt-4 flex-wrap">
              <a
                href="/#contact"
                id="hero-book-btn"
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
              >
                Book a Consultation
              </a>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <FiClock className="w-5 h-5 text-blue-400" aria-hidden="true" />
                <span>Explore all service offerings</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-full-sm xl:container mx-auto px-6 text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            {homePageData.services.badge}
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 tracking-tight">
            {homePageData.services.title}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4">
            {homePageData.services.description}
          </p>
        </div>

        <div className="max-w-full-sm xl:container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homePageData.services.items.map((service) => {
            const Icon = servicesIcons[service.icon];
            const slug = slugifyServiceTitle(service.title);

            return (
              <a
                key={service.title}
                href={`/services/${slug}`}
                className="p-8 bg-slate-50 border border-slate-100 rounded-2xl card-hover group"
              >
                <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-500">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <FaRegCheckCircle className="w-4 h-4 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </a>
            );
          })}
        </div>
      </section>
    </main>
  );
}
