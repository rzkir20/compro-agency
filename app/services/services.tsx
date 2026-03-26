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

        <div className="container mx-auto px-6 relative z-10 text-white">
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
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Overview</h2>
                <p className="text-lg leading-relaxed">
                  Our strategic planning service goes beyond traditional
                  consulting. We don't just hand you a deck; we partner with
                  your leadership to diagnose systemic challenges, identify
                  untapped market potential, and architect a future-proof
                  roadmap for your entire organization.
                </p>
                <p className="text-lg leading-relaxed">
                  By combining quantitative market research with qualitative
                  stakeholder alignment, we ensure your new strategy is not only
                  ambitious but practically executable within your current
                  cultural and operational context.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                    <FiTrendingUp className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    Growth Acceleration
                  </h4>
                  <p className="text-sm text-slate-600">
                    Unlock new revenue streams by identifying market gaps before
                    your competitors do.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                    <FiShield className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    Risk Mitigation
                  </h4>
                  <p className="text-sm text-slate-600">
                    Future-proof your business against economic shifts with
                    resilient operational models.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Key Deliverables
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-blue-600" aria-hidden="true">
                      ✓
                    </span>
                    <span className="text-slate-700">
                      3-Year Strategic Growth Roadmap
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-blue-600" aria-hidden="true">
                      ✓
                    </span>
                    <span className="text-slate-700">
                      Comprehensive Market Analysis Report
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-blue-600" aria-hidden="true">
                      ✓
                    </span>
                    <span className="text-slate-700">
                      Financial Projection &amp; ROI Models
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-blue-600" aria-hidden="true">
                      ✓
                    </span>
                    <span className="text-slate-700">
                      Competitor Benchmarking Matrix
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-blue-600" aria-hidden="true">
                      ✓
                    </span>
                    <span className="text-slate-700">
                      Change Management Playbook
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-blue-600" aria-hidden="true">
                      ✓
                    </span>
                    <span className="text-slate-700">
                      Executive Alignment Workshop
                    </span>
                  </div>
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
        <div className="container mx-auto px-6 text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            Engagement Packages
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 tracking-tight">
            Flexible Options for Every Stage
          </h2>
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Growth Diagnostic
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Best for SMBs looking for a strategic health check and quick wins.
            </p>
            <div className="text-4xl font-black text-slate-900 mb-8">
              $12,500
              <span className="text-lg font-normal text-slate-400">
                /project
              </span>
            </div>

            <ul className="space-y-4 mb-10 grow">
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <span className="text-green-500" aria-hidden="true">
                  ✓
                </span>
                4-Week Engagement
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <span className="text-green-500" aria-hidden="true">
                  ✓
                </span>
                SWOT Analysis
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <span className="text-green-500" aria-hidden="true">
                  ✓
                </span>
                Market Gap Analysis
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400 line-through">
                <span className="text-slate-300" aria-hidden="true">
                  ✕
                </span>
                Financial Projections
              </li>
            </ul>

            <a
              href="/#contact"
              id="price-btn-1"
              className="w-full py-4 text-center border border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-all"
            >
              Get Started
            </a>
          </div>

          <div className="bg-slate-900 p-10 rounded-3xl border border-blue-600/30 shadow-2xl flex flex-col transform lg:scale-105 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Standard Transformation
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Comprehensive 12-week program for scaling mid-market companies.
            </p>
            <div className="text-4xl font-black text-white mb-8">
              $35,000
              <span className="text-lg font-normal text-slate-500">
                /project
              </span>
            </div>

            <ul className="space-y-4 mb-10 grow">
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <span className="text-blue-400" aria-hidden="true">
                  ✓
                </span>
                10-Week Engagement
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <span className="text-blue-400" aria-hidden="true">
                  ✓
                </span>
                Full Market Modeling
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <span className="text-blue-400" aria-hidden="true">
                  ✓
                </span>
                3-Year Financials
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <span className="text-blue-400" aria-hidden="true">
                  ✓
                </span>
                Board Presentation Deck
              </li>
            </ul>

            <a
              href="/#contact"
              id="price-btn-2"
              className="w-full py-4 text-center bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all"
            >
              Schedule Call
            </a>
          </div>

          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Enterprise Strategy
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Tailored solutions for global organizations with complex
              multi-market needs.
            </p>
            <div className="text-4xl font-black text-slate-900 mb-8">
              Custom
              <span className="text-lg font-normal text-slate-400"> quote</span>
            </div>

            <ul className="space-y-4 mb-10 grow">
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <span className="text-green-500" aria-hidden="true">
                  ✓
                </span>
                Ongoing Retainer Options
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <span className="text-green-500" aria-hidden="true">
                  ✓
                </span>
                M&amp;A Advisory
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <span className="text-green-500" aria-hidden="true">
                  ✓
                </span>
                Global Expansion Strategy
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <span className="text-green-500" aria-hidden="true">
                  ✓
                </span>
                Dedicated Partner Support
              </li>
            </ul>

            <a
              href="/#contact"
              id="price-btn-3"
              className="w-full py-4 text-center border border-slate-900 text-slate-900 font-bold rounded-xl hover:bg-slate-900 hover:text-white transition-all"
            >
              Contact Enterprise
            </a>
          </div>
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
