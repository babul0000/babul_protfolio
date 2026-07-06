"use client";
import { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "./useScrollReveal";

const projects = [
  {
    name: "WanderLust",
    tagline: "A full-stack travel accommodation platform inspired by Airbnb.",
    desc: "Built with authentication, property listings, and CRUD features for users to explore and manage places easily. Features BetterAuth for secure login and a seamless booking experience.",
    tech: ["Next.js", "Tailwind CSS", "BetterAuth", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/babul0000/wander-lust",
    live: "https://wander-lust-phi-lyart.vercel.app/",
    image: "/wanderlust.webp",
    glow: "rgba(99,102,241,0.15)",
    color: "#6366f1",
    features: [
      "Secure user sessions & sign-ins via BetterAuth.",
      "Complete property listings CRUD with file upload attachments.",
      "Interactive booking schedule calendar with client triggers."
    ],
    challenge: "Handling dynamic mapping of user session parameters in SSR pages without rendering lags. Solved by middleware request intercepts."
  },
  {
    name: "Tiles Galary",
    tagline: "Developed a fully functional tiles gallery application with interactive UI.",
    desc: "Developed a responsive tiles gallery with interactive UI and smooth navigation to showcase tile products effectively. Implemented clean product browsing and dynamic filtering.",
    tech: ["Next.js", "Tailwind CSS", "JavaScript", "MongoDB"],
    github: "https://github.com/babul0000/tiles-galary-a-8",
    live: "https://tiles-galary-a-8.vercel.app/",
    image: "/tiles.webp",
    glow: "rgba(16,185,129,0.15)",
    color: "#10b981",
    features: [
      "Dynamic filtering by size, type, and color categories.",
      "Meticulous high-resolution thumbnail rendering with zoom grids.",
      "Smooth layout transitions between desktop and mobile formats."
    ],
    challenge: "Managing image arrays loading without degrading LCP scores. Solved via lazy loading tags and WebP file transformations."
  },
  {
    name: "Pixgen",
    tagline: "AI-powered creative image generator tool with a modern glassmorphism UI.",
    desc: "An AI-powered creative image generator tool with a modern glassmorphism UI, offering dynamic tools for creative professionals.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/babul0000/pixgen-s-8-2",
    live: "https://pixgen-b.vercel.app/",
    image: "/pixgen.webp",
    glow: "rgba(168,85,247,0.15)",
    color: "#a855f7",
    features: [
      "AI creative prompt parser engine integration.",
      "Sleek glassmorphism details cards overlay with glowing meshes.",
      "Clean user gallery page fetching generative history."
    ],
    challenge: "Styling translucent background blur filters that remain compatible across mobile platforms. Solved using optimized backdrop CSS attributes."
  },
  {
    name: "The Dragon News",
    tagline: "A full-stack dynamic news portal application with auth.",
    desc: "A full-stack dynamic news portal application. Features category-wise news rendering, user authentication, and responsive layout for a smooth reading experience.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/babul0000/The-dragan-news-m-46",
    live: "https://the-dragan-news-b.vercel.app/category/01",
    image: "/dragon-news.webp",
    glow: "rgba(249,115,22,0.15)",
    color: "#f97316",
    features: [
      "Real-time news feeds filtering by category tabs.",
      "Firebase auth integration (social and email login).",
      "Clean responsive article grid matching dashboard templates."
    ],
    challenge: "Mitigating excessive Firebase fetches during route swapping. Solved using React local state persistence layers."
  },
  {
    name: "DigiTools Platform",
    tagline: "A comprehensive digital tools platform featuring an interactive dashboard.",
    desc: "A comprehensive digital tools platform featuring an interactive dashboard, diverse utility applications, and a smooth user experience designed for productivity.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/babul0000/B13-A6-DigiTools-Platform-6",
    live: "https://digitools-platform-assignment-babul.netlify.app/",
    image: "/digitools.webp",
    glow: "rgba(56,189,248,0.15)",
    color: "#38bdf8",
    features: [
      "Interactive data widget dashboards displaying clean data curves.",
      "Modular calculators and conversion utilities in single cards.",
      "Sleek custom dashboard configuration sidebar."
    ],
    challenge: "Integrating telemetry charts that adapt correctly to parent width adjustments. Solved using responsive canvas wrapper containers."
  },
  {
    name: "GitHub Issue Tracker",
    tagline: "A dedicated issue tracking interface for GitHub repositories.",
    desc: "Streamlines bug reporting, task tracking, and developer workflows efficiently. Built with clean vanilla JavaScript for fast performance.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/babul0000/assingment-5--Issues-Tracker",
    live: "https://github-issue-tracker-babul.netlify.app/home.html",
    image: "/issue-tracker.webp",
    glow: "rgba(148,163,184,0.15)",
    color: "#94a3b8",
    features: [
      "Pure vanilla ES6 module structure with DOM render logic.",
      "Local storage data sync capturing active tickets.",
      "Simple bug tracking filter by tags."
    ],
    challenge: "Structuring complex CRUD loops without a framework. Solved by designing a clean, centralized store class pattern in native JS."
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
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
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
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-20">
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
