import {
  FaArrowRight,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { FiLayers } from "react-icons/fi";

import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-full-sm xl:container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link
              to="/"
              id="footer-logo-link"
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <FiLayers className="text-white text-lg" />
              </div>
              <span className="text-lg font-bold text-slate-900">Vertexa</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              The global standard in strategic business consulting. Transforming
              complex challenges into sustainable growth since 2008.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                id="foot-soc-1"
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                id="foot-soc-2"
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                id="foot-soc-3"
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-blue-600 transition-colors">
                <a href="#" id="f-serv-1">
                  Strategic Planning
                </a>
              </li>
              <li className="hover:text-blue-600 transition-colors">
                <a href="#" id="f-serv-2">
                  Financial Advisory
                </a>
              </li>
              <li className="hover:text-blue-600 transition-colors">
                <a href="#" id="f-serv-3">
                  Digital Transformation
                </a>
              </li>
              <li className="hover:text-blue-600 transition-colors">
                <a href="#" id="f-serv-4">
                  Operations Excellence
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="hover:text-blue-600 transition-colors">
                <Link to="/about" id="f-comp-1">
                  About Us
                </Link>
              </li>
              <li className="hover:text-blue-600 transition-colors">
                <Link to="/portofolio" id="f-comp-2">
                  Our Portfolio
                </Link>
              </li>
              <li className="hover:text-blue-600 transition-colors">
                <Link to="/team" id="f-comp-3">
                  Leadership Team
                </Link>
              </li>
              <li className="hover:text-blue-600 transition-colors">
                <Link to="/work-with-us" id="f-comp-4">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">
              Get the latest business insights delivered weekly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                placeholder="Enter email"
              />
              <button className="bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-800 transition-colors">
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 Space Digitalia. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" id="f-legal-1" className="hover:text-slate-900">
              Privacy Policy
            </a>
            <a href="#" id="f-legal-2" className="hover:text-slate-900">
              Terms of Service
            </a>
            <a href="#" id="f-legal-3" className="hover:text-slate-900">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
