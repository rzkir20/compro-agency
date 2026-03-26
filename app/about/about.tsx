import React from "react";

import {
  FiAward,
  FiClock,
  FiGlobe,
  FiPhone,
  FiShield,
  FiTarget,
  FiZap,
  FiUsers,
} from "react-icons/fi";

export default function About() {
  return (
    <main
      style={{ viewTransitionName: "main-content" } as React.CSSProperties}
      className="pt-20"
    >
      <section className="hero-gradient py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] -mr-48 -mt-48" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white text-center">
          <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">
            Our Identity
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Transforming Complexity into <br />
            Competitive Advantage.
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            Nexus Strategy is a global consulting powerhouse dedicated to
            guiding leaders through their most critical organizational
            transitions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full text-blue-600 font-bold text-sm tracking-wide">
                <FiClock className="w-5 h-5" aria-hidden="true" />
                Established in 2008
              </div>

              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Driven by a Passion for <br />
                Strategic Clarity.
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                Founded in New York by a collective of former partners from
                top-tier global firms, Nexus Strategy was born out of a desire
                to provide more hands-on, agile, and result-oriented consulting
                than the traditional industry giants.
              </p>

              <div className="p-8 bg-slate-900 rounded-3xl text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">
                    Our Mission
                  </h4>
                  <p className="text-2xl font-medium leading-snug">
                    "To empower institutional leaders with the actionable
                    clarity needed to navigate a rapidly shifting global economy
                    and achieve sustainable growth."
                  </p>
                </div>
                <FiTarget
                  className="absolute -right-6 -bottom-6 text-9xl text-white/5"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600"
                    className="w-full h-full object-cover"
                    alt="Modern Office"
                  />
                </div>

                <div className="p-6 bg-blue-600 rounded-2xl text-white text-center">
                  <div className="text-4xl font-black">16+</div>
                  <div className="text-xs uppercase font-bold mt-1 opacity-80">
                    Years of Impact
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="aspect-square bg-slate-100 rounded-2xl flex items-center justify-center p-8">
                  <FiGlobe
                    className="w-full h-full text-6xl text-slate-300"
                    aria-hidden="true"
                  />
                </div>

                <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600"
                    className="w-full h-full object-cover"
                    alt="Team Collaboration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Our Values
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">
              The Pillars of Our Success
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white border border-slate-200 rounded-3xl card-hover">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FiAward className="text-3xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Relentless Excellence
              </h3>
              <p className="text-slate-500 text-sm">
                We hold ourselves to the highest standards, ensuring every
                deliverable exceeds expectations.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-3xl card-hover">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FiShield className="text-3xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Radical Candor
              </h3>
              <p className="text-slate-500 text-sm">
                Honesty is our policy. We tell our clients what they need to
                hear, not just what they want to hear.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-3xl card-hover">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FiZap className="text-3xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Agile Innovation
              </h3>
              <p className="text-slate-500 text-sm">
                The world changes fast; so do we. We adapt our strategies to the
                latest market signals.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-200 rounded-3xl card-hover">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FiUsers className="text-3xl" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Collective Impact
              </h3>
              <p className="text-slate-500 text-sm">
                We believe in the power of diverse perspectives coming together
                to solve complex problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2">
              Milestones of Growth
            </h2>
          </div>

          <div className="relative px-4">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-100 hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
              <div className="bg-white p-8 lg:p-0">
                <div className="hidden lg:block timeline-dot absolute top-1/2 -translate-y-1/2" />
                <div className="lg:mb-12">
                  <span className="text-3xl font-black text-slate-200 block mb-2">
                    2008
                  </span>
                  <h4 className="font-bold text-slate-900 mb-2">
                    The Foundation
                  </h4>
                  <p className="text-sm text-slate-500">
                    Nexus launched in NYC with a small team focused on financial
                    restructuring.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 lg:p-0">
                <div className="hidden lg:block timeline-dot absolute top-1/2 -translate-y-1/2" />
                <div className="lg:mt-12">
                  <span className="text-3xl font-black text-slate-200 block mb-2">
                    2013
                  </span>
                  <h4 className="font-bold text-slate-900 mb-2">
                    Going Global
                  </h4>
                  <p className="text-sm text-slate-500">
                    Opened the London office and expanded into European market
                    strategy.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 lg:p-0">
                <div className="hidden lg:block timeline-dot absolute top-1/2 -translate-y-1/2" />
                <div className="lg:mb-12">
                  <span className="text-3xl font-black text-slate-200 block mb-2">
                    2018
                  </span>
                  <h4 className="font-bold text-slate-900 mb-2">
                    Tech Evolution
                  </h4>
                  <p className="text-sm text-slate-500">
                    Launched our Digital Transformation wing to address the
                    shift to cloud and AI.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 lg:p-0">
                <div className="hidden lg:block timeline-dot absolute top-1/2 -translate-y-1/2" />
                <div className="lg:mt-12">
                  <span className="text-3xl font-black text-slate-200 block mb-2">
                    2024
                  </span>
                  <h4 className="font-bold text-slate-900 mb-2">The Future</h4>
                  <p className="text-sm text-slate-500">
                    Reached the milestone of $2B in client revenue growth
                    generated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-black text-blue-500">500+</div>
              <div className="text-sm uppercase tracking-widest font-bold opacity-60">
                Clients Worldwide
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-blue-500">15+</div>
              <div className="text-sm uppercase tracking-widest font-bold opacity-60">
                Global Offices
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-blue-500">200+</div>
              <div className="text-sm uppercase tracking-widest font-bold opacity-60">
                Senior Experts
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-black text-blue-500">$2B+</div>
              <div className="text-sm uppercase tracking-widest font-bold opacity-60">
                Revenue Impact
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                Our Presence
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2">
                Strategically Located for Global Reach
              </h2>
            </div>

            <a
              href="/#contact"
              id="about-locations-cta"
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
            >
              Contact Regional HQ
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50 space-y-4">
              <h4 className="text-xl font-bold text-slate-900">New York</h4>
              <p className="text-sm text-slate-500">
                Global Headquarters
                <br />
                1221 Avenue of the Americas
              </p>
              <div className="pt-4 flex items-center gap-2 text-blue-600 text-xs font-bold">
                <FiPhone className="w-4 h-4" aria-hidden="true" />
                +1 (212) 555-0123
              </div>
            </div>

            <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50 space-y-4">
              <h4 className="text-xl font-bold text-slate-900">London</h4>
              <p className="text-sm text-slate-500">
                EMEA Hub
                <br />
                30 St Mary Axe, Canary Wharf
              </p>
              <div className="pt-4 flex items-center gap-2 text-blue-600 text-xs font-bold">
                <FiPhone className="w-4 h-4" aria-hidden="true" />
                +44 (20) 7946 0123
              </div>
            </div>

            <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50 space-y-4">
              <h4 className="text-xl font-bold text-slate-900">Singapore</h4>
              <p className="text-sm text-slate-500">
                APAC Regional Office
                <br />8 Marina Blvd, Financial Center
              </p>
              <div className="pt-4 flex items-center gap-2 text-blue-600 text-xs font-bold">
                <FiPhone className="w-4 h-4" aria-hidden="true" />
                +65 6789 0123
              </div>
            </div>

            <div className="p-6 border border-slate-100 rounded-3xl bg-slate-50 space-y-4">
              <h4 className="text-xl font-bold text-slate-900">Dubai</h4>
              <p className="text-sm text-slate-500">
                Middle East HQ
                <br />
                DIFC Precinct Building 4
              </p>
              <div className="pt-4 flex items-center gap-2 text-blue-600 text-xs font-bold">
                <FiPhone className="w-4 h-4" aria-hidden="true" />
                +971 4 123 4567
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-12">
            Recognized for Operational Excellence
          </h4>

          <div className="flex flex-wrap justify-center items-center gap-16 grayscale opacity-40">
            <div className="flex flex-col items-center gap-2">
              <FiAward className="text-5xl text-slate-400" aria-hidden="true" />
              <span className="text-[10px] font-bold">
                Best Consultancies 2023
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FiShield
                className="text-5xl text-slate-400"
                aria-hidden="true"
              />
              <span className="text-[10px] font-bold">
                Strategic Partner Award
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FiTarget
                className="text-5xl text-slate-400"
                aria-hidden="true"
              />
              <span className="text-[10px] font-bold">Case Study of Year</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FiZap className="text-5xl text-slate-400" aria-hidden="true" />
              <span className="text-[10px] font-bold">Top 50 Innovators</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
