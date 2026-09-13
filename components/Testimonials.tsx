"use client";
import React from "react";
import { useScrollReveal } from "./useScrollReveal";
import { Star, Quote, CheckCircle2 } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  avatarBg: string;
  content: string;
  rating: number;
  date: string;
  verified: boolean;
  linkedin?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "mentor-1",
    name: "Tanvir Ahmed",
    role: "Senior Full-Stack Engineer & Mentor",
    company: "Programming Hero Community",
    avatarText: "TA",
    avatarBg: "#10b981",
    content: "Babul demonstrates exceptional problem-solving agility and deep dedication to modern JavaScript architecture. His ability to translate complex business logic into clean, modular React and Node.js code is remarkable.",
    rating: 5,
    date: "2025",
    verified: true,
    linkedin: "https://linkedin.com"
  },
  {
    id: "colleague-1",
    name: "Rakib Hassan",
    role: "Software QA & Collaborator",
    company: "Full-Stack Project Partner",
    avatarText: "RH",
    avatarBg: "#38bdf8",
    content: "Collaborating with Babul on full-stack MERN projects has been seamless. He pays meticulous attention to responsive UI details, edge-case validations, and scalable MongoDB schemas under tight project deadlines.",
    rating: 5,
    date: "2025",
    verified: true,
    linkedin: "https://linkedin.com"
  },
  {
    id: "client-1",
    name: "S. M. Mahfuz",
    role: "Product Lead & Business Client",
    company: "Digital Solutions BD",
    avatarText: "SM",
    avatarBg: "#a855f7",
    content: "Delivered our Next.js web application with 100% Lighthouse performance score and incredible user experience. High communication standards, fast iterations, and dependable support.",
    rating: 5,
    date: "2024",
    verified: true,
    linkedin: "https://linkedin.com"
  }
];

export default function Testimonials() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="testimonials" className="section-padding bg-themeBg border-b border-themeBorder relative font-sans antialiased text-themeText" ref={ref}>
      
      {/* Background glow */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-themeAccent/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 rounded-full bg-themeAccent" />
            <span className="text-xs font-bold text-themeAccent uppercase tracking-widest">
              Endorsements
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-themeText mt-1 uppercase tracking-tight">
            Peer Reviews &amp; <span className="gradient-text">Recommendations</span>
          </h2>
          <p className="text-themeTextMuted text-sm mt-3 max-w-md mx-auto font-normal">
            Direct feedback from mentors, engineering peers, and project collaborators.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              className="bg-themeCard rounded-3xl border border-themeBorder p-6 md:p-7 flex flex-col justify-between hover:border-themeAccent/30 hover:shadow-lg transition-all duration-300 group reveal relative"
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              <div className="space-y-4">
                
                {/* Header: Avatar, Info, and Quote icon */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-xs text-white shadow-sm"
                      style={{ backgroundColor: item.avatarBg }}
                    >
                      {item.avatarText}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-themeText flex items-center gap-1.5">
                        {item.name}
                        {item.verified && (
                          <span title="Verified Collaborator">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          </span>
                        )}
                      </h3>
                      <p className="text-[11px] text-themeTextMuted font-medium leading-tight">
                        {item.role}
                      </p>
                      <p className="text-[10px] text-themeAccent font-semibold mt-0.5">
                        {item.company}
                      </p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-themeBorder group-hover:text-themeAccent/40 transition-colors" />
                </div>

                {/* Star rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xs text-themeTextSecondary leading-relaxed font-normal">
                  “{item.content}”
                </p>
              </div>

              {/* Footer info */}
              <div className="pt-5 mt-4 border-t border-themeBorder flex items-center justify-between text-[11px] text-themeTextMuted">
                <span>{item.date} Verified Collaboration</span>
                <span className="font-mono text-themeAccent text-[10px] uppercase font-bold">5.0 / 5.0</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
