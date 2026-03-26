import React from "react";

import {
  FaArrowRight,
  FaLinkedin,
  FaQuoteLeft,
  FaTwitter,
  FaBriefcase,
  FaRegCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaGlobe,
} from "react-icons/fa";

import { IoBarChart, IoLayers } from "react-icons/io5";

import {
  FiMapPin,
  FiMail,
  FiMonitor,
  FiPhone,
  FiSend,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";

export default function Home() {
  return (
    <main style={{ viewTransitionName: "main-content" } as React.CSSProperties}>
      <section
        id="home"
        className="pt-20 lg:h-screen flex items-center hero-gradient relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px] -mr-96 -mt-96" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-400 rounded-full blur-[100px] -ml-48 -mb-48" />
        </div>

        <div className="container mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Global Strategy Experts
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Accelerating Growth for Forward Thinkers.
            </h1>

            <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
              We combine deep industry expertise with cutting-edge analytical
              tools to transform your business vision into measurable reality.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                id="hero-primary-cta"
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2"
              >
                Book a Consultation
                <FaArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                id="hero-secondary-cta"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all"
              >
                View Case Studies
              </a>
            </div>

            <div className="pt-8 flex items-center gap-8 border-t border-white/10 w-fit">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-slate-400 uppercase tracking-tighter">
                  Clients Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">$2B+</div>
                <div className="text-xs text-slate-400 uppercase tracking-tighter">
                  Revenue Growth
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs text-slate-400 uppercase tracking-tighter">
                  Global Offices
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="aspect-square w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform rotate-3">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                alt="Professional Team"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl transform -rotate-2">
              <div className="flex items-center gap-4 text-slate-900">
                <div className="flex -space-x-3">
                  <img
                    src="https://i.pravatar.cc/150?u=1"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Team"
                  />
                  <img
                    src="https://i.pravatar.cc/150?u=2"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Team"
                  />
                  <img
                    src="https://i.pravatar.cc/150?u=3"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Team"
                  />
                </div>
                <div className="text-sm font-bold">
                  Trusted by 50+ <br />
                  Fortune 500
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                  Our Story
                </span>
                <h2 className="text-4xl font-bold text-slate-900 mt-2 tracking-tight">
                  Pioneering Excellence Since 2008
                </h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                Nexus Strategy was founded on a simple principle: complexity
                shouldn't hinder progress. We help organizations navigate the
                shifting tides of the global economy through data-driven
                insights and human-centric strategy.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <FiTarget className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Mission-Driven</h4>
                    <p className="text-sm text-slate-500">
                      Empowering leaders with actionable clarity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <FiZap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Impact-First</h4>
                    <p className="text-sm text-slate-500">
                      Measuring success by your tangible growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-xl flex items-center gap-6 shadow-sm">
                <div className="text-4xl font-black text-blue-600">98%</div>
                <div className="text-slate-600">
                  Client retention rate over the last decade. We build
                  partnerships, not just projects.
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    alt="Consulting 1"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                    alt="Consulting 2"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                    alt="Consulting 3"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    alt="Consulting 4"
                  />
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            What We Do
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 tracking-tight">
            Tailored Solutions for Complex Challenges
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4">
            We provide comprehensive consulting services that cover every aspect
            of your business lifecycle.
          </p>
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl card-hover group">
            <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FiTrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Strategic Planning
            </h3>
            <p className="text-slate-600">
              Defining long-term roadmaps and identifying high-value
              opportunities in competitive markets.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="w-4 h-4 text-blue-500" />
                Market Analysis
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="w-4 h-4 text-blue-500" />
                Competitor Research
              </li>
            </ul>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl card-hover group">
            <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <IoBarChart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Financial Advisory
            </h3>
            <p className="text-slate-600">
              Optimizing capital structures and providing rigorous financial
              oversight for sustainable growth.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="w-4 h-4 text-blue-500" />
                Mergers &amp; Acquisitions
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="w-4 h-4 text-blue-500" />
                Risk Management
              </li>
            </ul>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl card-hover group">
            <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FiMonitor className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Digital Transformation
            </h3>
            <p className="text-slate-600">
              Integrating modern technology into all areas of business to
              improve operations and value.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="w-4 h-4 text-blue-500" />
                Cloud Infrastructure
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="w-4 h-4 text-blue-500" />
                AI Integration
              </li>
            </ul>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl card-hover group">
            <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FiUsers className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Operations Excellence
            </h3>
            <p className="text-slate-600">
              Streamlining workflows and supply chains to enhance efficiency and
              reduce overhead.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="w-4 h-4 text-blue-500" />
                Lean Management
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="w-4 h-4 text-blue-500" />
                Performance Audits
              </li>
            </ul>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl card-hover group">
            <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FaGlobe className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Sustainability Strategy
            </h3>
            <p className="text-slate-600">
              Helping firms transition to greener practices while maintaining
              profitability and compliance.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="w-4 h-4 text-blue-500" />
                ESG Reporting
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="w-4 h-4 text-blue-500" />
                Carbon Footprint
              </li>
            </ul>
          </div>

          <div className="p-8 bg-slate-50 border border-slate-100 rounded-2xl card-hover group">
            <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FaBriefcase className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Human Capital
            </h3>
            <p className="text-slate-600">
              Developing talent management systems and leadership programs for
              the modern workforce.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="w-4 h-4 text-blue-500" />
                Talent Acquisition
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="w-4 h-4 text-blue-500" />
                Corporate Culture
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">
              Success Stories
            </span>
            <h2 className="text-4xl font-bold mt-2 tracking-tight">
              Case Studies of Impact
            </h2>
            <p className="text-slate-400 mt-4">
              Discover how we've helped leading global organizations achieve
              their most ambitious goals.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all"
              type="button"
              aria-label="Previous"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all"
              type="button"
              aria-label="Next"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="container mx-auto px-6 overflow-x-auto pb-8 scrollbar-hide">
          <div className="flex gap-8 w-max">
            <div className="w-[500px] group cursor-pointer">
              <div className="aspect-4/5 rounded-3xl overflow-hidden mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Case Study 1"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold">
                    Fintech Integration
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Reimagining Retail Banking
              </h3>
              <p className="text-slate-400">
                A 35% increase in digital adoption for a leading European bank
                through strategic UX overhaul.
              </p>
            </div>

            <div className="w-[400px] group cursor-pointer">
              <div className="aspect-4/5 rounded-3xl overflow-hidden mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Case Study 2"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold">
                    Operations
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Sustainable Supply Chain
              </h3>
              <p className="text-slate-400">
                Reducing carbon footprint by 22% while increasing net margins
                for a global logistics provider.
              </p>
            </div>

            <div className="w-[400px] group cursor-pointer">
              <div className="aspect-4/5 rounded-3xl overflow-hidden mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Case Study 3"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold">
                    Scaling
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Global Market Entry</h3>
              <p className="text-slate-400">
                Scaling a tech unicorn from local presence to 15 international
                markets in under 24 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                The Minds Behind Nexus
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 tracking-tight">
                World-Class Experts Dedicated to Your Vision
              </h2>
            </div>
            <a
              href="#"
              id="team-all-link"
              className="text-blue-600 font-bold flex items-center gap-2 group"
            >
              Join our leadership team
              <FaChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  src="https://i.pravatar.cc/400?u=a1"
                  className="w-full h-full object-cover"
                  alt="Team Member"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Dr. Elena Vance
              </h4>
              <p className="text-slate-500 text-sm mb-4">
                Managing Director, Strategy
              </p>
              <div className="flex justify-center gap-4 text-slate-400">
                <a
                  href="#"
                  id="social-1-li"
                  className="hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  id="social-1-tw"
                  className="hover:text-blue-400 transition-colors"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="group text-center">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  src="https://i.pravatar.cc/400?u=a2"
                  className="w-full h-full object-cover"
                  alt="Team Member"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Marcus Thorne
              </h4>
              <p className="text-slate-500 text-sm mb-4">
                Head of Digital Advisory
              </p>
              <div className="flex justify-center gap-4 text-slate-400">
                <a
                  href="#"
                  id="social-2-li"
                  className="hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  id="social-2-tw"
                  className="hover:text-blue-400 transition-colors"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="group text-center">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  src="https://i.pravatar.cc/400?u=a3"
                  className="w-full h-full object-cover"
                  alt="Team Member"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Sarah Jenkins
              </h4>
              <p className="text-slate-500 text-sm mb-4">
                Financial Risk Partner
              </p>
              <div className="flex justify-center gap-4 text-slate-400">
                <a
                  href="#"
                  id="social-3-li"
                  className="hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  id="social-3-tw"
                  className="hover:text-blue-400 transition-colors"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="group text-center">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  src="https://i.pravatar.cc/400?u=a4"
                  className="w-full h-full object-cover"
                  alt="Team Member"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900">David Chen</h4>
              <p className="text-slate-500 text-sm mb-4">
                Sustainability Consultant
              </p>
              <div className="flex justify-center gap-4 text-slate-400">
                <a
                  href="#"
                  id="social-4-li"
                  className="hover:text-blue-600 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  id="social-4-tw"
                  className="hover:text-blue-400 transition-colors"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <FaQuoteLeft className="w-12 h-12 text-blue-200" />
          </div>
          <blockquote className="text-3xl font-medium text-slate-900 italic leading-snug mb-10">
            "Nexus didn't just give us a report; they stayed with us through the
            execution. Our transformation journey was seamless because of their
            deep industry insights and hands-on approach."
          </blockquote>
          <div className="flex flex-col items-center">
            <img
              src="https://i.pravatar.cc/100?u=client"
              className="w-16 h-16 rounded-full mb-4 ring-4 ring-white shadow-lg"
              alt="Client Portrait"
            />
            <h5 className="font-bold text-slate-900">Alexandra Dupont</h5>
            <p className="text-slate-500 text-sm">CEO, Global Retail Systems</p>
            <div className="mt-8 flex gap-12 grayscale opacity-50">
              <IoLayers className="w-9 h-9" />
              <FaGlobe className="w-9 h-9" />
              <FaBriefcase className="w-9 h-9" />
              <FiTrendingUp className="w-9 h-9" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight">
                  Ready to Redefine Your Future?
                </h2>
                <p className="text-slate-400">
                  Fill out the form and a senior consultant will reach out to
                  schedule a discovery call within 24 hours.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email Us</h4>
                    <p className="text-slate-400">hello@nexus-strategy.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Call Us</h4>
                    <p className="text-slate-400">+1 (555) 902-1234</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Office</h4>
                    <p className="text-slate-400">
                      1221 Avenue of the Americas, NY 10020
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                    <option>Strategic Planning</option>
                    <option>Financial Advisory</option>
                    <option>Digital Transformation</option>
                    <option>Sustainability Strategy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <FiSend className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
