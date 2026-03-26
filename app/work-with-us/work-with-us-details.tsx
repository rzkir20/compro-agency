import React from "react";

import { Link, useParams } from "react-router";

import { FaArrowRight } from "react-icons/fa";

import { FiArrowLeft, FiBriefcase, FiMapPin } from "react-icons/fi";

import data from "../../lib/data.json";

const workWithUsData = (data as unknown as WorkWithUsData).workWithUs;
const OPENINGS = workWithUsData.openings;
const OPENING_CONTENT = workWithUsData.openingDetails;

export default function WorkWithUsDetails({
  openingId,
}: {
  openingId?: string;
}) {
  const params = useParams();
  const id = openingId ?? (params as { id?: string }).id;

  const opening = OPENINGS.find((item) => item.id === id);
  if (!opening) {
    throw new Response("Opening not found", { status: 404 });
  }

  const openingContent =
    OPENING_CONTENT[opening.category] ?? OPENING_CONTENT.Strategy;

  return (
    <main
      style={{ viewTransitionName: "main-content" } as React.CSSProperties}
      className="flex-1 pt-20"
    >
      <section className="pt-14 pb-24 hero-gradient relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] -mr-48 -mt-48" />
        </div>

        <div className="max-w-full-sm xl:container mx-auto px-6 relative z-10">
          <Link
            to="/work-With-us"
            id="back-to-openings"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 mb-10 hover:text-white transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Current Openings
          </Link>

          <div className="max-w-4xl space-y-6">
            <span
              className={`inline-flex px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${opening.categoryColor}`}
            >
              {opening.category}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              {opening.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-300">
              <div className="inline-flex items-center gap-2">
                <FiBriefcase className="w-4 h-4" />
                <span className="text-sm">{opening.details}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <FiMapPin className="w-4 h-4" />
                <span className="text-sm">Global Team Collaboration</span>
              </div>
            </div>

            <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
              {opening.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white">
        <div className="max-w-full-sm xl:container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 md:p-10 bg-slate-50 rounded-3xl border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                  Role Overview
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {opening.description}
                </p>
              </div>

              <div className="p-8 md:p-10 bg-white rounded-3xl border border-slate-200">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                  Kualifikasi
                </h2>
                <ul className="space-y-3">
                  {openingContent.qualifications.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 md:p-10 bg-white rounded-3xl border border-slate-200">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                  Jobdesk
                </h2>
                <ul className="space-y-3">
                  {openingContent.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-2 h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="p-8 bg-slate-900 text-white rounded-3xl space-y-5 h-fit">
              <h3 className="text-xl font-bold">Cara Melamar</h3>
              <ul className="space-y-3">
                {openingContent.applicationSteps.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-400 shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-300 text-sm pt-2">
                Kirim ke careers team dan sertakan role code:{" "}
                <span className="font-bold text-white">{opening.id}</span>.
              </p>

              <a
                href={`mailto:careers@nexus-strategy.com?subject=Application%20for%20${encodeURIComponent(opening.title)}`}
                id="apply-mail-link"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
              >
                Apply via Email <FaArrowRight className="w-4 h-4" />
              </a>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
