"use client";
import React from "react";
import { useScrollReveal } from "./useScrollReveal";

interface StatItem {
  label: string;
  value: string;
  sub: string;
}

export default function About() {
  const ref = useScrollReveal<HTMLElement>();
  const resumeLink = "/resume.pdf";

  const stats: StatItem[] = [
    { label: "Core Specialization", value: "Full-Stack MERN", sub: "Next.js & Node.js" },
    { label: "Databases & ORM", value: "MongoDB & PostgreSQL", sub: "Prisma ORM" },
    { label: "Code Architecture", value: "Strict Type-Safety", sub: "TypeScript & REST" },
    { label: "Work Availability", value: "Ready to Join", sub: "Full-Time / Remote" }
  ];

  return (
    <section id="about" className="section-padding bg-themeBg border-b border-themeBorder relative font-sans antialiased text-themeText" ref={ref}>
      
      {/* Background glow orb */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-themeAccent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Biography */}
          <div className="lg:col-span-7 space-y-6 reveal">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1.5 h-4 rounded-full bg-themeAccent" />
                <span className="text-xs font-bold text-themeAccent uppercase tracking-widest">
                  Engineering Philosophy
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-themeText leading-tight uppercase tracking-tight">
                My Journey &amp; <span className="gradient-text">Core Expertise</span>
              </h2>
              <p className="text-xs font-bold uppercase text-themeAccent tracking-wider mt-2.5">
                Full Stack MERN Developer • TypeScript • PostgreSQL &amp; Prisma
              </p>
            </div>

            <div className="space-y-4 text-themeTextSecondary text-sm md:text-base leading-relaxed font-normal">
              <p>
                I am a dedicated Full-Stack Software Engineer who recently completed comprehensive engineering in the <strong>MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong> and <strong>Next.js 14 App Router</strong>. To expand my backend and data modeling capabilities, I am actively architecting projects with <strong>PostgreSQL</strong> and <strong>Prisma ORM</strong>, building type-safe relational schemas alongside NoSQL document databases.
              </p>
              <p>
                My professional background in technical operations and precision quality control gives me an exceptional <strong>engineering discipline</strong>: I approach software with a zero-defect mindset, deep root-cause troubleshooting, and a commitment to meeting production deadlines.
              </p>
              <p>
                My guiding mission is simple: <strong>to build reliable, high-performance software that solves real human problems</strong>. Whether designing clean user interfaces or engineering robust REST APIs, I focus on clean code, scalability, and measurable user impact.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-themeAccent hover:bg-themeAccentHover text-themeAccentText font-bold rounded-xl shadow-lg shadow-themeAccent/10 transition-all text-xs uppercase tracking-wider hover:scale-[1.02]"
              >
                <span>Download Resume</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
              </a>

              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-recruiter-snapshot"))}
                className="inline-flex items-center gap-2 px-5 py-3.5 border border-themeBorder bg-themeCard hover:border-themeAccent/40 text-themeText font-bold rounded-xl transition-all text-xs uppercase tracking-wider"
              >
                <span>Recruiter Snapshot</span>
              </button>
            </div>
          </div>

          {/* Right Column: Metric Stats */}
          <div className="lg:col-span-5 space-y-3.5 reveal" style={{ transitionDelay: "0.2s" }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 bg-themeCard border border-themeBorder rounded-2xl hover:border-themeAccent/20 hover:shadow-md transition-all duration-300 shadow-sm flex items-center justify-between"
              >
                <div>
                  <p className="text-[10px] text-themeTextMuted font-bold uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-base sm:text-lg font-black text-themeText mt-1">
                    {stat.value}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono font-bold px-2.5 py-1 bg-themeAccent/10 text-themeAccent border border-themeAccent/20 rounded-full uppercase tracking-wider">
                    {stat.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
