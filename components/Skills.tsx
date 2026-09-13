"use client";
import React, { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";
import { Sparkles, Layers, Server, Wrench } from "lucide-react";

type SkillCategory = "all" | "frontend" | "backend" | "tools";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "tools";
  color: string;
  glow: string;
  icon: React.ReactNode;
}

const categories: { id: SkillCategory; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "All Skills", icon: <Sparkles className="w-3.5 h-3.5" /> },
  { id: "frontend", label: "Frontend", icon: <Layers className="w-3.5 h-3.5" /> },
  { id: "backend", label: "Backend & DB", icon: <Server className="w-3.5 h-3.5" /> },
  { id: "tools", label: "Tools & Deploy", icon: <Wrench className="w-3.5 h-3.5" /> },
];

const skills: SkillItem[] = [
  {
    name: "React.js",
    category: "frontend",
    color: "#61dafb",
    glow: "rgba(97, 218, 251, 0.25)",
    icon: (
      <svg className="w-6 h-6 text-[#61dafb] shrink-0" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  },
  {
    name: "Next.js",
    category: "frontend",
    color: "#ffffff",
    glow: "rgba(255, 255, 255, 0.2)",
    icon: (
      <svg className="w-6 h-6 text-themeText shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 6.63 0 12-5.37 12-12C24 5.37 18.63 0 12 0zm5.82 17.5l-6.8-9.33v9.33H9.27V6.5h1.75l6.8 9.33V6.5h1.75v11h-1.75z" />
      </svg>
    )
  },
  {
    name: "TypeScript",
    category: "frontend",
    color: "#3178c6",
    glow: "rgba(49, 120, 198, 0.25)",
    icon: (
      <svg className="w-6 h-6 text-[#3178c6] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.536 14.851c-.13-.772-.47-1.385-1.02-1.838-.55-.454-1.343-.761-2.38-.921-1.037-.16-1.782-.44-2.235-.841-.453-.4-.68-.962-.68-1.684 0-.494.133-.92.4-1.278.267-.358.64-.626 1.12-.804.48-.178 1.05-.267 1.71-.267.85 0 1.54.167 2.07.5.53.334.87.82 1.02 1.458l2.08-.66c-.3-1.08-.88-1.89-1.74-2.43-.86-.54-1.99-.81-3.39-.81-1.22 0-2.26.24-3.12.72-.86.48-1.5 1.14-1.92 1.98-.42.84-.63 1.8-.63 2.88 0 1.54.43 2.73 1.29 3.57.86.84 2.1 1.33 3.72 1.47 1.28.1 2.19.26 2.73.48.54.22.92.53 1.14.93.22.4.33.88.33 1.44 0 .62-.23 1.14-.69 1.56-.46.42-1.11.63-1.95.63-.88 0-1.59-.25-2.13-.75-.54-.5-.87-1.19-.99-2.07l-2.1.66c.24 1.32.85 2.34 1.83 3.06.98.72 2.27 1.08 3.87 1.08 1.38 0 2.55-.28 3.51-.84.96-.56 1.67-1.32 2.13-2.28.46-.96.69-2.04.69-3.24 0-1.42-.37-2.57-1.11-3.45zM22 6.5h-5.46v2.16H18.9v11.84h2.46V8.66H22V6.5z" />
      </svg>
    )
  },
  {
    name: "JavaScript",
    category: "frontend",
    color: "#f7df1e",
    glow: "rgba(247, 223, 30, 0.25)",
    icon: (
      <svg className="w-6 h-6 text-[#f7df1e] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.995c-.073-.668-.387-1.226-.889-1.57-.497-.343-1.183-.556-2.072-.647-1.127-.114-1.923-.332-2.39-.63-.467-.3-.687-.73-.687-1.272 0-.365.118-.68.355-.95.236-.272.564-.476.985-.615.42-.137.915-.207 1.482-.207.726 0 1.298.15 1.714.444.417.297.685.748.817 1.344l2.138-.85c-.274-1.002-.79-1.748-1.547-2.222-.756-.474-1.762-.714-3.003-.714-1.077 0-1.996.223-2.738.666-.74.444-1.29 1.042-1.637 1.785-.347.74-.52 1.56-.52 2.443 0 1.393.393 2.463 1.176 3.19.782.727 1.91 1.14 3.37 1.233 1.15.082 1.968.22 2.45.412.48.19.82.467 1.018.82.2.353.3.774.3 1.264 0 .546-.206 1.006-.615 1.373-.41.367-.98.55-1.706.55-.77 0-1.395-.218-1.874-.652-.48-.435-.776-1.037-.887-1.802l-2.16.732c.245 1.2.798 2.128 1.655 2.766.858.636 1.99.957 3.398.957 1.218 0 2.247-.25 3.078-.75.83-.5 1.442-1.17 1.83-2.013.39-.844.584-1.78.584-2.807 0-1.25-.332-2.262-.997-3.025zM12 4.302H2.016v2.098h3.873V20h2.24V6.4h3.87v-2.1z" />
      </svg>
    )
  },
  {
    name: "Node.js",
    category: "backend",
    color: "#339933",
    glow: "rgba(51, 153, 51, 0.25)",
    icon: (
      <svg className="w-6 h-6 text-[#339933] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L3.105 5.14v10.28L12 20.56l8.895-5.14V5.14L12 0zm5.836 14.331l-5.836 3.37-5.836-3.37V7.67l5.836-3.37 5.836 3.37v6.661zm-5.836.568l3.664-2.115V9.458l-3.664 2.115-3.664-2.115v3.211l3.664 2.115z" />
      </svg>
    )
  },
  {
    name: "Express.js",
    category: "backend",
    color: "#94a3b8",
    glow: "rgba(148, 163, 184, 0.25)",
    icon: (
      <svg className="w-6 h-6 text-themeText shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  {
    name: "MongoDB",
    category: "backend",
    color: "#47a248",
    glow: "rgba(71, 162, 72, 0.25)",
    icon: (
      <svg className="w-6 h-6 text-[#47a248] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C7.2 0 6 3.6 6 6c0 4.2 4.2 9.6 6 12 1.8-2.4 6-7.8 6-12 0-2.4-1.2-6-6-6zm0 15c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.25)",
    icon: (
      <svg className="w-6 h-6 text-[#38bdf8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.567.89 2.29 1.629C13.682 10.666 15.007 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.567-.89-2.29-1.63C16.32 6.133 14.995 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.567.89 2.29 1.628C8.082 17.866 9.407 19 12.401 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.567-.89-2.29-1.63-1.191-1.2-2.515-2.52-5.51-2.52z" />
      </svg>
    )
  },
  {
    name: "REST APIs",
    category: "backend",
    color: "#06b6d4",
    glow: "rgba(6, 182, 212, 0.25)",
    icon: (
      <svg className="w-6 h-6 text-cyan-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    )
  },
  {
    name: "BetterAuth & JWT",
    category: "backend",
    color: "#ef4444",
    glow: "rgba(239, 68, 68, 0.25)",
    icon: (
      <svg className="w-6 h-6 text-red-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  },
  {
    name: "Git & GitHub",
    category: "tools",
    color: "#f05032",
    glow: "rgba(240, 80, 50, 0.25)",
    icon: (
      <svg className="w-6 h-6 text-orange-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    )
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    color: "#e34f26",
    glow: "rgba(227, 79, 38, 0.25)",
    icon: (
      <svg className="w-6 h-6 text-[#e34f26] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.042 5.75H5.458l.417 4.708h10.963l-.438 4.937L12 16.646l-4.385-1.25-.28-3.146H5.167l.5 5.625L12 20.083l6.333-2.208.667-8.125H7.792l-.188-2.125h11.167l-.23-1.875z" />
      </svg>
    )
  },
  {
    name: "Vercel",
    category: "tools",
    color: "#ffffff",
    glow: "rgba(255, 255, 255, 0.2)",
    icon: (
      <svg className="w-6 h-6 text-themeText shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 22.525H0L12 1.475l12 21.05z" />
      </svg>
    )
  },
  {
    name: "VS Code",
    category: "tools",
    color: "#007acc",
    glow: "rgba(0, 122, 204, 0.25)",
    icon: (
      <svg className="w-6 h-6 text-[#007acc] shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.98 6.3l-3.32-3.29c-.19-.19-.44-.29-.71-.29s-.52.1-.71.29l-9.45 9.38-4.08-3.04c-.16-.12-.35-.18-.55-.18s-.4.06-.55.18L.71 12.39c-.39.39-.39 1.02 0 1.41l3.92 3.91c.15.15.35.23.55.23s.4-.08.55-.23l4.08-3.04 9.45 9.38c.19.19.44.29.71.29s.52-.1.71-.29l3.32-3.29c.39-.39.39-1.02 0-1.41l-7.33-7.27 7.33-7.27c.39-.39.39-1.02 0-1.41z" />
      </svg>
    )
  }
];

export default function Skills() {
  const ref = useScrollReveal<HTMLElement>();
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="section-padding bg-themeBg border-b border-themeBorder relative font-sans antialiased text-themeText" ref={ref}>
      
      {/* Dynamic Background glowing meshes */}
      <div className="absolute top-[20%] left-[-10%] w-[380px] h-[380px] bg-themeAccent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[380px] h-[380px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10 reveal">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-1.5 h-4 rounded-full bg-themeAccent" />
            <span className="text-xs font-bold text-themeAccent uppercase tracking-widest">
              Tech Stack
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-themeText leading-tight tracking-tight">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-themeTextSecondary text-sm sm:text-base mt-2.5 max-w-lg mx-auto font-normal">
            Core technologies and tools I utilize to craft scalable, responsive, and secure web applications.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border shadow-sm ${
                activeCategory === cat.id
                  ? "bg-themeAccent text-themeAccentText border-themeAccent shadow-md shadow-themeAccent/15 font-bold scale-105"
                  : "bg-themeCard/80 hover:bg-themeCard border-themeBorder text-themeTextSecondary hover:text-themeText"
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Minimalist, Interactive Brand Pills */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-3.5 max-w-4xl mx-auto">
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-themeCard/80 hover:bg-themeCard border border-themeBorder hover:border-themeAccent/40 shadow-sm hover:shadow-md transition-all duration-200 group cursor-default backdrop-blur-sm reveal hover:-translate-y-0.5 relative overflow-hidden"
              style={{ transitionDelay: `${0.02 * (idx + 1)}s` }}
            >
              {/* Subtle hover color accent glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 20% 50%, ${skill.glow} 0%, transparent 60%)`
                }}
              />

              <div className="w-6 h-6 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform relative z-10">
                {skill.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-themeTextSecondary group-hover:text-themeText transition-colors whitespace-nowrap relative z-10">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
