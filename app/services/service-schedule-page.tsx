import React from "react";

import { FaArrowLeft } from "react-icons/fa";

import {
  FiCalendar,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiInfo,
} from "react-icons/fi";

import data from "../../lib/data.json";
import { slugifyServiceTitle } from "../../lib/service-slug";

type MeetingFormat = "virtual" | "in-person";

const TIMES = [
  "09:00 AM",
  "10:30 AM",
  "11:00 AM",
  "01:30 PM",
  "03:00 PM",
  "04:30 PM",
];

export default function ServiceSchedulePage({ slug }: { slug?: string }) {
  const homePageData = (data as HomePageData).homePage;
  const teamData = (data as TeamData).team;

  const service = slug
    ? homePageData.services.items.find(
        (s) => slugifyServiceTitle(s.title) === slug,
      )
    : undefined;

  if (!service) {
    throw new Response("Service not found", { status: 404 });
  }

  const consultants = teamData.leaders.slice(0, 2).map((c) => ({
    name: c.name,
    roleLabel: c.role,
    imageSrc: c.imageSrc,
    imageAlt: c.imageAlt,
  }));

  const [selectedConsultant, setSelectedConsultant] = React.useState(
    consultants[0]?.name,
  );
  const [selectedDay, setSelectedDay] = React.useState<number>(10);
  const [selectedTime, setSelectedTime] = React.useState<string>("10:30 AM");
  const [meetingFormat, setMeetingFormat] =
    React.useState<MeetingFormat>("virtual");
  const [notes, setNotes] = React.useState("");

  return (
    <main
      style={{ viewTransitionName: "main-content" } as React.CSSProperties}
      className="grow pt-32 pb-24 bg-slate-50"
    >
      <div className="max-w-full-sm xl:container mx-auto px-6">
        <div className="mb-12 text-center lg:text-left">
          <a
            href={`/services/${slugifyServiceTitle(service.title)}`}
            id="back-to-service-link"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-4"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Service Details
          </a>

          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Book Your Strategy Session
          </h1>
          <p className="text-slate-500 mt-4 max-w-2xl">
            Select your preferred consultant and a time slot that works for you.
            Our experts are ready to help you accelerate your business growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  1. Select Consultant
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {consultants.map((c) => {
                    const selected = selectedConsultant === c.name;
                    return (
                      <label
                        key={c.name}
                        className={[
                          "relative flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all",
                          selected
                            ? "border-blue-600 bg-blue-50/50"
                            : "border-slate-100 hover:border-slate-300",
                        ].join(" ")}
                      >
                        <input
                          type="radio"
                          name="consultant"
                          className="hidden"
                          checked={selected}
                          onChange={() => setSelectedConsultant(c.name)}
                        />
                        <img
                          src={c.imageSrc}
                          className="w-12 h-12 rounded-full object-cover"
                          alt={c.imageAlt}
                        />
                        <div className="flex-1">
                          <p className="font-bold text-slate-900">{c.name}</p>
                          <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                            {c.roleLabel}
                          </p>
                        </div>
                        {selected && (
                          <FiCheckCircle
                            className="text-blue-600 text-xl"
                            aria-hidden="true"
                          />
                        )}
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    2. Choose Date
                  </h3>
                  <div className="flex items-center gap-4 text-slate-900 font-bold">
                    <button
                      type="button"
                      className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                      aria-label="Previous month"
                    >
                      <FiChevronLeft />
                    </button>
                    <span>October 2024</span>
                    <button
                      type="button"
                      className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                      aria-label="Next month"
                    >
                      <FiChevronRight />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 text-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {[
                    30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
                  ].map((day, idx) => {
                    const isMuted = idx === 0;
                    const selected = day === selectedDay && !isMuted;
                    return (
                      <button
                        key={`${day}-${idx}`}
                        type="button"
                        className={[
                          "h-14 lg:h-20 rounded-xl flex items-center justify-center font-semibold transition-colors",
                          isMuted
                            ? "text-slate-300"
                            : "text-slate-900 hover:bg-slate-100",
                          selected
                            ? "bg-blue-600 text-white hover:bg-blue-600"
                            : "",
                        ].join(" ")}
                        onClick={() => {
                          if (isMuted) return;
                          setSelectedDay(day);
                        }}
                        aria-pressed={selected}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                3. Select Time
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {TIMES.map((t) => {
                  const selected = selectedTime === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      className={[
                        "py-3 px-4 rounded-xl border text-sm font-bold transition-all",
                        selected
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600",
                      ].join(" ")}
                      onClick={() => setSelectedTime(t)}
                      aria-pressed={selected}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Meeting Format
                  </label>
                  <div className="flex p-1 bg-slate-50 rounded-xl">
                    <button
                      type="button"
                      className={[
                        "flex-1 py-2 rounded-lg text-sm font-bold transition-all",
                        meetingFormat === "virtual"
                          ? "bg-white shadow-sm text-slate-900"
                          : "text-slate-500 hover:text-slate-700",
                      ].join(" ")}
                      onClick={() => setMeetingFormat("virtual")}
                    >
                      Virtual
                    </button>
                    <button
                      type="button"
                      className={[
                        "flex-1 py-2 rounded-lg text-sm font-bold transition-all",
                        meetingFormat === "in-person"
                          ? "bg-white shadow-sm text-slate-900"
                          : "text-slate-500 hover:text-slate-700",
                      ].join(" ")}
                      onClick={() => setMeetingFormat("in-person")}
                    >
                      In-Person
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    Additional Notes
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                    placeholder="Describe your business challenges..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <a
                  href="/#contact"
                  id="confirm-booking-btn"
                  className="w-full py-4 bg-slate-900 text-white text-center font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.assign("/#contact");
                  }}
                >
                  Confirm Appointment
                  <FiChevronRight className="w-5 h-5" aria-hidden="true" />
                </a>

                <p className="text-[10px] text-center text-slate-400 uppercase tracking-widest font-bold">
                  Free 30-minute discovery call
                </p>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-3xl text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                  <FiInfo aria-hidden="true" />
                </div>
                <h4 className="text-lg font-bold">Why book with us?</h4>
              </div>

              <ul className="space-y-4 text-sm text-blue-100">
                <li className="flex items-start gap-3">
                  <FiCheckCircle
                    className="text-blue-300 mt-1"
                    aria-hidden="true"
                  />
                  <span>
                    Immediate expert feedback on your current strategy.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle
                    className="text-blue-300 mt-1"
                    aria-hidden="true"
                  />
                  <span>
                    Personalized growth roadmap tailored to your industry.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle
                    className="text-blue-300 mt-1"
                    aria-hidden="true"
                  />
                  <span>
                    Access to our proprietary analytics dashboard demo.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sr-only" aria-hidden="true">
          {selectedConsultant} {selectedDay} {selectedTime} {meetingFormat}{" "}
          {notes}
        </div>
      </div>
    </main>
  );
}
