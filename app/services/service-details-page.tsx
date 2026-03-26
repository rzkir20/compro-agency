import React from "react";

import { FaRegCheckCircle } from "react-icons/fa";

import { FiChevronRight } from "react-icons/fi";

import data from "../../lib/data.json";
import { slugifyServiceTitle } from "../../lib/service-slug";

export default function ServiceDetailsPage({ slug }: { slug?: string }) {
  const homePageData = (data as HomePageData).homePage;
  const service = slug
    ? homePageData.services.items.find(
        (s) => slugifyServiceTitle(s.title) === slug,
      )
    : undefined;

  if (!service) {
    throw new Response("Service not found", { status: 404 });
  }

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
            <FiChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-blue-400">{service.title}</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {service.description}
            </p>

            <div className="flex items-center gap-6 pt-4 flex-wrap">
              <a
                href={`/services/${slugifyServiceTitle(service.title)}/pricing`}
                id="hero-view-pricing"
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
              >
                View Price List
              </a>
              <a
                href={`/services/${slugifyServiceTitle(service.title)}/schedule`}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-full-sm xl:container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-slate-900">
                  What you get
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  A focused engagement designed to produce clear outcomes,
                  practical next steps, and measurable progress.
                </p>
              </div>

              <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Included highlights
                </h3>
                <ul className="space-y-3 text-slate-600">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <FaRegCheckCircle className="w-5 h-5 text-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="p-8 border border-slate-200 rounded-3xl">
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Next step
                </h4>
                <p className="text-slate-600 mb-6">
                  See pricing and package options for this service.
                </p>
                <a
                  href={`/services/${slugifyServiceTitle(service.title)}/pricing`}
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl font-bold transition-all bg-slate-900 text-white hover:bg-slate-800"
                >
                  Open Price List
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
