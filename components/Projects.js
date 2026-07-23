"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "./useScrollReveal";

const projects = [
  {
    name: "PromptForge",
    tagline: "AI Prompt Marketplace.",
    desc: "Built a full-stack marketplace where creators publish, discover, and monetize AI prompts for ChatGPT, Midjourney, Claude, and Gemini, with authentication and a subscription-based premium content model. Designed the database structure, API integration, and user dashboards.",
    tech: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/babul0000/prompt-forge",
    live: "https://prompt-forge-babul.vercel.app/",
    image: "/pixgen.webp",
    glow: "rgba(168,85,247,0.15)",
    color: "#a855f7",
    features: [
      "Secure user sessions & sign-ins via BetterAuth.",
      "Complete prompt marketplace listings CRUD with attachment tags.",
      "AI creative prompt parser engine integration."
    ],
    challenge: "Architected the platform end-to-end — frontend, backend, API integration, and database schema design."
  },
  {
    name: "MediQueue",
    tagline: "Tutor/Doctor Booking Platform.",
    desc: "Built a production-ready appointment booking platform with secure authentication, payment integration, and SSR/ISR for fast loads and strong SEO. Supports dynamic slots management.",
    tech: ["Next.js", "Tailwind CSS", "HeroUI", "Express.js", "BetterAuth", "MongoDB"],
    github: "https://github.com/babul0000/mediqueue-client",
    live: "https://mediqueue-babul.vercel.app/",
    image: "/wanderlust.webp",
    glow: "rgba(56,189,248,0.15)",
    color: "#38bdf8",
    features: [
      "Tutor and doctor slot availability scheduler.",
      "Secure gateway checkout transaction setups.",
      "BetterAuth authentication middleware hooks."
    ],
    challenge: "Designed optimized SSR & ISR page setups to boost SEO parameters and load speeds."
  },
  {
    name: "BloodConnect",
    tagline: "TypeScript MERN Blood Donation App.",
    desc: "A full-stack blood donation platform connecting volunteers and donors. Built with React, Next.js, Node.js, Express, MongoDB, and TypeScript, featuring custom location sorting and notifications.",
    tech: ["TypeScript", "Next.js", "React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/babul0000/bloodconnect",
    live: "https://bloodconnect-babul.vercel.app/",
    image: "/dragon-news.webp",
    glow: "rgba(239,68,68,0.15)",
    color: "#ef4444",
    features: [
      "Secure donor profile creation and availability status toggles.",
      "TypeScript type-safety implemented across API parameters.",
      "Real-time search filters matching donor blood groups."
    ],
    challenge: "Enforcing complex database schemas and type safety in high-frequency data states. Resolved by deploying strict TypeScript interfaces."
  }
];

export default function Projects() {
  const ref = useScrollReveal();
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDetails = (name) => {
    setExpandedProject(expandedProject === name ? null : name);
  };

  return (
    <section id="projects" className="section-padding bg-themeBg border-b border-themeBorder relative transition-colors duration-300" ref={ref}>
      
      {/* Background glowing orb */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-themeAccent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 reveal">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-1.5 h-4 rounded-full bg-themeAccent" />
              <span className="text-xs font-bold text-themeAccent uppercase tracking-widest">
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-themeText mt-1 uppercase tracking-tight">
              Featured <span className="gradient-text font-extrabold">Projects</span>
            </h2>
          </div>
          <p className="text-themeTextMuted text-sm max-w-xs font-normal">
            Real-world applications built with clean code and verified user workflows.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.name}
              className="bg-themeCard rounded-3xl border border-themeBorder overflow-hidden group transition-all duration-500 hover:border-themeAccent/20 flex flex-col reveal"
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              {/* Banner with wallpaper image */}
              <div className="h-44 relative overflow-hidden flex items-center justify-center bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                
                {/* Overlay layer */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                
                {/* Glow highlights */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                  style={{
                    background: `radial-gradient(ellipse at center, ${project.glow} 0%, transparent 70%)`
                  }}
                />

                {/* External Action Links (Live & Code) */}
                <div className="absolute top-4 right-4 flex gap-2 md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-all duration-300 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 z-20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-themeCard/90 border border-themeBorder flex items-center justify-center text-themeTextSecondary hover:text-themeAccent hover:border-themeAccent/30 transition"
                    title="View Source Code"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-themeCard/90 border border-themeBorder flex items-center justify-center text-themeTextSecondary hover:text-themeAccent hover:border-themeAccent/30 transition"
                    title="View Live Site"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4 flex-grow justify-between">
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h3 className="text-themeText font-bold text-base leading-tight group-hover:text-themeAccent transition-colors">
                      {project.name}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-themeTextMuted group-hover:text-themeAccent transition-colors shrink-0 mt-0.5"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </div>

                  <p className="text-themeTextMuted text-xs leading-relaxed font-normal">
                    {project.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono px-2.5 py-0.5 rounded-full border border-themeBorder bg-themeCardHover/60 text-themeTextMuted font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Details Action */}
                  <div>
                    <button
                      onClick={() => toggleDetails(project.name)}
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-themeBorder hover:border-themeAccent/20 text-themeTextSecondary hover:text-themeAccent bg-themeCardHover/40 hover:bg-themeCard text-xs font-bold transition-all"
                    >
                      {expandedProject === project.name ? "Hide Details" : "Show Details"}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          expandedProject === project.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Expandable Drawer Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      expandedProject === project.name
                        ? "max-h-[300px] opacity-100 border-t border-themeBorder pt-4 mt-2"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="space-y-3.5 text-left font-normal">
                      <div>
                        <h4 className="text-[10px] font-bold text-themeAccent uppercase tracking-widest">
                          Key Features
                        </h4>
                        <ul className="list-disc pl-4 text-[11px] text-themeTextMuted mt-1 space-y-1 leading-relaxed">
                          {project.features.map((feature, fIdx) => (
                            <li key={fIdx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-bold text-themeAccent uppercase tracking-widest">
                          Tech Highlight
                        </h4>
                        <p className="text-[11px] text-themeTextMuted mt-1 leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View all on Github button */}
        <div className="text-center mt-14 reveal">
          <a
            href="https://github.com/babul0000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-themeBorder text-themeTextSecondary text-xs font-bold bg-themeCard hover:bg-themeCardHover hover:border-themeAccent/30 hover:text-themeAccent transition-colors tracking-wide uppercase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
