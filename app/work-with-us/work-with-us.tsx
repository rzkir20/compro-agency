import React from "react";

import {
  FaArrowRight,
  FaBrain,
  FaChartBar,
  FaCoffee,
  FaGraduationCap,
  FaHeart,
  FaQuoteLeft,
  FaStethoscope,
} from "react-icons/fa";

import { FiMail } from "react-icons/fi";

import data from "../../lib/data.json";

const workWithUsData = (data as WorkWithUsData).workWithUs;

const openings = workWithUsData.openings;

const journey = workWithUsData.journey;

const benefits = workWithUsData.benefits;

const benefitIcons: Record<
  BenefitIcon,
  React.ComponentType<{ className?: string }>
> = {
  stethoscope: FaStethoscope,
  graduationCap: FaGraduationCap,
  coffee: FaCoffee,
  chartBar: FaChartBar,
};

export default function WorkWithUs() {
  return (
    <main style={{ viewTransitionName: "main-content" } as React.CSSProperties}>
      <section className="pt-28 md:pt-36 hero-gradient relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] -mr-48 -mt-48" />
        </div>

        <div className="max-w-full-sm xl:container mx-auto px-4 sm:px-6 relative z-10 text-white text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Careers at Nexus
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 leading-tight">
            Shape the Future <br />
            of Global Business.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Join a collective of world-class experts dedicated to solving the
            most complex challenges of the modern economy.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="#open-positions"
              id="cta-scroll-jobs"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
            >
              View Open Roles
            </a>
            <a
              href="#culture"
              id="cta-scroll-culture"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all"
            >
              Our Culture
            </a>
          </div>
        </div>
      </section>

      <section id="culture" className="py-10 xl:py-20 bg-white">
        <div className="max-w-full-sm xl:container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                  The Nexus Way
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  Built on Intelligence, Driven by Impact.
                </h2>
              </div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                At Nexus, we do not just provide consulting; we architect
                transformation. Our culture is defined by intellectual
                curiosity, radical transparency, and a relentless commitment to
                our clients&apos; success. We hire leaders who think differently
                and act with purpose.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <FaBrain className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    Intellectual Rigor
                  </h4>
                  <p className="text-sm text-slate-500">
                    We value depth of thought and data-driven insights over
                    conventional wisdom.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <FaHeart className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    Human Centric
                  </h4>
                  <p className="text-sm text-slate-500">
                    Strategy is about people. We prioritize empathy and
                    partnership in every engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200"
                  alt="Nexus Culture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 sm:-left-6 md:-bottom-10 md:-left-10 bg-slate-900 p-5 sm:p-6 md:p-8 rounded-3xl md:rounded-4xl text-white shadow-2xl max-w-[220px] sm:max-w-xs">
                <p className="text-2xl font-bold mb-2">94%</p>
                <p className="text-sm text-slate-400">
                  Employee satisfaction rating across our global offices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="open-positions" className="py-10 xl:py-20 bg-slate-50">
        <div className="max-w-full-sm xl:container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Opportunities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
              Current Openings
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              We are always looking for exceptional talent to join our
              specialized practice groups.
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((opening) => (
              <div
                key={opening.id}
                className="bg-white p-5 sm:p-8 rounded-3xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 card-hover shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${opening.categoryColor}`}
                    >
                      {opening.category}
                    </span>
                    <span className="text-slate-400 text-xs">
                      {opening.details}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {opening.title}
                  </h3>
                  <p className="text-slate-500 max-w-xl">
                    {opening.description}
                  </p>
                </div>
                <a
                  href="#"
                  id={opening.id}
                  className="w-full md:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all text-center"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500">
              Don&apos;t see a role that fits?{" "}
              <a
                href="#"
                id="general-apply-link"
                className="text-blue-600 font-bold hover:underline"
              >
                Send us a general application
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 xl:py-20 bg-white">
        <div className="max-w-full-sm xl:container mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Your Journey to Joining Vertexa
            </h2>
            <div className="space-y-8 sm:space-y-10">
              {journey.map((item, index) => {
                const isFirst = index === 0;
                const isLast = index === journey.length - 1;

                return (
                  <div
                    key={`journey-step-${item.step}`}
                    className="flex gap-4 sm:gap-6 relative process-step"
                  >
                    {!isLast && <div className="timeline-line" />}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0 z-10 text-sm ${
                        isFirst
                          ? "bg-blue-600 text-white"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {item.step}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-500">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-slate-900 rounded-4xl sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 text-white h-fit">
            <h3 className="text-2xl font-bold mb-8">Global Benefits</h3>
            <div className="grid gap-8">
              {benefits.map((benefit) => {
                const Icon = benefitIcons[benefit.icon];

                return (
                  <div key={`benefit-${benefit.icon}`} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{benefit.title}</h5>
                      <p className="text-sm text-slate-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 xl:py-20 bg-slate-50">
        <div className="max-w-full-sm xl:container mx-auto px-4 sm:px-6 text-center">
          <div className="mb-12">
            <FaQuoteLeft className="text-5xl text-blue-200 mx-auto" />
          </div>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-900 italic leading-snug mb-10 max-w-4xl mx-auto">
            &quot;Nexus provided me with the platform to work on projects that
            actually move the needle for global industries. The level of
            autonomy and support from the leadership is unparalleled in the
            consulting world.&quot;
          </blockquote>
          <div className="flex flex-col items-center">
            <img
              src="https://i.pravatar.cc/150?u=emp1"
              className="w-20 h-20 rounded-full mb-4 ring-4 ring-white shadow-xl"
              alt="Employee Portrait"
            />
            <h5 className="font-bold text-slate-900">Julian Pierce</h5>
            <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">
              Senior Strategy Associate
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 xl:py-20 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Ready to redefine your future?
          </h2>
          <p className="text-base sm:text-xl text-slate-500 max-w-2xl mx-auto">
            Join a team that&apos;s building the next generation of business
            intelligence. We&apos;re excited to meet you.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a
              href="mailto:careers@nexus-strategy.com"
              id="footer-career-mail"
              className="w-full sm:w-auto sm:min-w-[280px] px-6 sm:px-10 py-4 sm:py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/20"
            >
              Contact Careers Team <FiMail className="w-5 h-5" />
              <FaArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
