import React from "react";

import { FiLayers, FiMenu } from "react-icons/fi";

import { Link } from "react-router";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
      style={{ viewTransitionName: "main-nav" } as React.CSSProperties}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" id="nav-logo-link" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
            <FiLayers className="text-white text-2xl" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            NEXUS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            id="nav-home"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            id="nav-about"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            About
          </Link>
          <Link
            to="/services"
            id="nav-services"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            id="nav-portfolio"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            to="/team"
            id="nav-team"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Team
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="#contact"
            id="nav-cta-btn"
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all"
          >
            Work With Us
          </Link>

          <button
            className="md:hidden text-slate-900"
            type="button"
            aria-label="Open menu"
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
}
