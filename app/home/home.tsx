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

import data from "../../lib/data.json";

const homePageData = (data as HomePageData).homePage;

const aboutHighlightIcons: Record<
  HomeAboutHighlight["icon"],
  React.ComponentType<{ className?: string }>
> = {
  target: FiTarget,
  zap: FiZap,
};

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

export default function Home() {
  return (
    <main style={{ viewTransitionName: "main-content" } as React.CSSProperties}>
      <section
        id="home"
        className="lg:pt-24 pt-32 pb-10 min-h-full lg:min-h-screen flex items-center hero-gradient relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px] -mr-96 -mt-96" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-400 rounded-full blur-[100px] -ml-48 -mb-48" />
        </div>

        <div className="max-w-full-sm xl:container mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              {homePageData.home.badge}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              {homePageData.home.title}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-lg leading-relaxed">
              {homePageData.home.description}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href={homePageData.home.primaryCta.href}
                id="hero-primary-cta"
                className="w-full sm:w-auto justify-center px-6 sm:px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2"
              >
                {homePageData.home.primaryCta.label}
                <FaArrowRight className="w-4 h-4" />
              </a>
              <a
                href={homePageData.home.secondaryCta.href}
                id="hero-secondary-cta"
                className="w-full sm:w-auto text-center px-6 sm:px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all"
              >
                {homePageData.home.secondaryCta.label}
              </a>
            </div>

            <div className="pt-8 flex items-center justify-between sm:justify-start gap-4 sm:gap-8 border-t border-white/10 w-full sm:w-fit">
              {homePageData.home.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-tighter">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="aspect-square w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl transform rotate-3">
              <img
                src={homePageData.home.heroImage.src}
                alt={homePageData.home.heroImage.alt}
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl transform -rotate-2">
              <div className="flex items-center gap-4 text-slate-900">
                <div className="flex -space-x-3">
                  {homePageData.home.trustedBy.avatars.map((avatar, index) => (
                    <img
                      key={avatar}
                      src={avatar}
                      className="w-10 h-10 rounded-full border-2 border-white"
                      alt={`Team ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="text-sm font-bold">
                  {homePageData.home.trustedBy.text}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-10 sm:py-20 bg-slate-50 overflow-hidden"
      >
        <div className="max-w-full-sm xl:container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                  {homePageData.about.badge}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
                  {homePageData.about.title}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {homePageData.about.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {homePageData.about.highlights.map((highlight) => {
                  const Icon = aboutHighlightIcons[highlight.icon];

                  return (
                    <div key={highlight.title} className="flex gap-4">
                      <div className="w-12 h-12 shrink-0 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-slate-500">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-6 bg-white border border-slate-200 rounded-xl flex items-center gap-6 shadow-sm">
                <div className="text-4xl font-black text-blue-600">
                  {homePageData.about.retention.value}
                </div>
                <div className="text-slate-600">
                  {homePageData.about.retention.description}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  {homePageData.about.images.slice(0, 2).map((image) => (
                    <img
                      key={image.alt}
                      src={image.src}
                      className={image.className}
                      alt={image.alt}
                    />
                  ))}
                </div>
                <div className="space-y-4 pt-8">
                  {homePageData.about.images.slice(2, 4).map((image) => (
                    <img
                      key={image.alt}
                      src={image.src}
                      className={image.className}
                      alt={image.alt}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-10 sm:py-20 bg-white">
        <div className="max-w-full-sm xl:container mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            {homePageData.services.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
            {homePageData.services.title}
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4">
            {homePageData.services.description}
          </p>
        </div>

        <div className="max-w-full-sm xl:container mx-auto px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {homePageData.services.items.map((service) => {
            const Icon = servicesIcons[service.icon];

            return (
              <div
                key={service.title}
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
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="portfolio"
        className="py-10 sm:py-20 bg-slate-900 text-white"
      >
        <div className="max-w-full-sm xl:container mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">
              {homePageData.portfolio.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight">
              {homePageData.portfolio.title}
            </h2>
            <p className="text-slate-400 mt-4">
              {homePageData.portfolio.description}
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

        <div className="max-w-full-sm xl:container mx-auto px-4 sm:px-6 overflow-x-auto pb-8 scrollbar-hide">
          <div className="flex gap-6 sm:gap-8 w-max">
            {homePageData.portfolio.items.map((item) => (
              <div
                key={item.title}
                className="w-[280px] sm:w-[360px] lg:w-[400px] group cursor-pointer"
              >
                <div className="aspect-4/5 rounded-3xl overflow-hidden mb-6 relative">
                  <img
                    src={item.imageSrc}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt={item.imageAlt}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-10 sm:py-20 bg-white">
        <div className="max-w-full-sm xl:container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                {homePageData.team.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
                {homePageData.team.title}
              </h2>
            </div>
            <a
              href="#"
              id="team-all-link"
              className="text-blue-600 font-bold flex items-center gap-2 group"
            >
              {homePageData.team.joinLabel}
              <FaChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {homePageData.team.members.map((member, index) => (
              <div key={member.name} className="group text-center">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                  <img
                    src={member.imageSrc}
                    className="w-full h-full object-cover"
                    alt={member.imageAlt}
                  />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{member.name}</h4>
                <p className="text-slate-500 text-sm mb-4">{member.role}</p>
                <div className="flex justify-center gap-4 text-slate-400">
                  <a
                    href="#"
                    id={`social-${index + 1}-li`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    id={`social-${index + 1}-tw`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-20 bg-slate-50">
        <div className="max-w-full-sm xl:container mx-auto px-4 sm:px-6 text-center">
          <div className="mb-8">
            <FaQuoteLeft className="w-12 h-12 text-blue-200" />
          </div>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-900 italic leading-snug mb-10">
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
            <div className="mt-8 flex gap-6 sm:gap-12 grayscale opacity-50">
              <IoLayers className="w-7 h-7 sm:w-9 sm:h-9" />
              <FaGlobe className="w-7 h-7 sm:w-9 sm:h-9" />
              <FaBriefcase className="w-7 h-7 sm:w-9 sm:h-9" />
              <FiTrendingUp className="w-7 h-7 sm:w-9 sm:h-9" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-10 sm:py-20 bg-white">
        <div className="max-w-full-sm xl:container mx-auto px-4 sm:px-6">
          <div className="bg-slate-900 rounded-3xl sm:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 sm:p-12 lg:p-20 text-white space-y-10 sm:space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
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

            <div className="lg:w-1/2 bg-white p-8 sm:p-12 lg:p-20">
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
