import React from "react";

import { Layers, Menu } from "lucide-react";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
      style={{ viewTransitionName: "main-nav" } as React.CSSProperties}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" id="nav-logo-link" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
            <Layers className="text-white text-2xl" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            NEXUS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            id="nav-home"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            id="nav-about"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            id="nav-services"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            id="nav-portfolio"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#team"
            id="nav-team"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Team
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            id="nav-cta-btn"
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all"
          >
            Work With Us
          </a>

          <button
            className="md:hidden text-slate-900"
            type="button"
            aria-label="Open menu"
          >
            <Menu className="text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
}
