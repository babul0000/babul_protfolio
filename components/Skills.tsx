"use client";
import React from "react";
import { Sparkles } from "lucide-react";

interface TechSkill {
  name: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  borderHover: string;
}

export default function Skills() {
  const techSkills: TechSkill[] = [
    // Frontend
    {
      name: "React.js",
      category: "Frontend",
      color: "#61DAFB",
      borderHover: "hover:border-[#61DAFB]/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
        </svg>
      ),
    },
    {
      name: "Next.js 14",
      category: "Full Stack",
      color: "#000000",
      borderHover: "hover:border-zinc-400 dark:hover:border-white/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-900 dark:text-white" fill="currentColor">
          <path d="M12 2L2 19.5h20L12 2zm0 4.5l6.5 11.5h-13L12 6.5z" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      category: "Language",
      color: "#3178C6",
      borderHover: "hover:border-[#3178C6]/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <rect width="22" height="22" x="1" y="1" rx="4" fill="#3178C6" />
          <path d="M5 8.5h6m-3 0v9m5-9h4c1 0 2 .5 2 1.5s-.5 1.5-1.5 1.5H15v3h3.5" stroke="#FFFFFF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      category: "Language",
      color: "#F7DF1E",
      borderHover: "hover:border-[#F7DF1E]/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <rect width="22" height="22" x="1" y="1" rx="4" fill="#F7DF1E" />
          <path d="M8 11.5v5c0 1-.5 1.5-1.5 1.5s-1.5-.5-1.5-1m9-5.5h3c.8 0 1.5.5 1.5 1.2s-.5 1.3-1.5 1.3h-1.5c-1 0-1.5.5-1.5 1.5s.5 1.5 1.5 1.5h3" stroke="#000000" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      color: "#38BDF8",
      borderHover: "hover:border-[#38BDF8]/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#38BDF8">
          <path d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 3-2.3 5-2 1.1.2 2 1.1 2.9 2 1.5 1.5 3.2 3.3 6.1 3.3 3.3 0 5.3-1.7 6-5-1.3 1.7-3 2.3-5 2-1.1-.2-2-1.1-2.9-2-1.5-1.5-3.2-3.3-6.1-3.3zm-6 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 3-2.3 5-2 1.1.2 2 1.1 2.9 2 1.5 1.5 3.2 3.3 6.1 3.3 3.3 0 5.3-1.7 6-5-1.3 1.7-3 2.3-5 2-1.1-.2-2-1.1-2.9-2-1.5-1.5-3.2-3.3-6.1-3.3z" />
        </svg>
      ),
    },
    {
      name: "HTML5 & CSS3",
      category: "Frontend",
      color: "#E34F26",
      borderHover: "hover:border-[#E34F26]/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor">
          <path d="M4 3l1.5 15.5L12 21l6.5-2.5L20 3H4z" stroke="#E34F26" strokeWidth="1.5" />
          <path d="M7.5 7.5h9l-.5 4.5H8l.3 3.5 3.7 1 3.7-1 .3-3" stroke="#E34F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },

    // Backend
    {
      name: "Node.js",
      category: "Backend",
      color: "#5FA04E",
      borderHover: "hover:border-[#5FA04E]/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z" stroke="#5FA04E" strokeWidth="1.7" />
          <path d="M12 6.5v11M7.5 9l9 5.5M16.5 9l-9 5.5" stroke="#5FA04E" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      name: "Express.js",
      category: "Backend API",
      color: "#000000",
      borderHover: "hover:border-zinc-400 dark:hover:border-zinc-500",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-800 dark:text-zinc-200" fill="none" stroke="currentColor">
          <rect x="3" y="4" width="18" height="16" rx="3" strokeWidth="1.5" />
          <path d="M7 12h3m4 0h3m-7-3v6" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "REST APIs",
      category: "Backend",
      color: "#10B981",
      borderHover: "hover:border-emerald-500/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M4 12h16m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },

    // Databases
    {
      name: "PostgreSQL",
      category: "Database",
      color: "#336791",
      borderHover: "hover:border-[#336791]/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <circle cx="12" cy="12" r="9.5" stroke="#336791" strokeWidth="1.5" />
          <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4c0 3-2 5-4 5s-3-1-3-2" stroke="#336791" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Prisma ORM",
      category: "ORM & SQL",
      color: "#2D3748",
      borderHover: "hover:border-indigo-400/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-indigo-500 dark:text-indigo-400" fill="currentColor">
          <path d="M11.5 2.5l9 17a1 1 0 01-.8 1.5H4.3a1 1 0 01-.9-1.4l7.2-17a1 1 0 011.8 0zm.5 4.5L6.5 18h11L12 7z" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      category: "Database",
      color: "#47A248",
      borderHover: "hover:border-[#47A248]/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path d="M12 2C9 7 6 11 6 15c0 3.5 2.5 6 6 7 3.5-1 6-3.5 6-7 0-4-3-8-6-13z" stroke="#47A248" strokeWidth="1.5" />
          <path d="M12 2v20" stroke="#47A248" strokeWidth="1.5" />
        </svg>
      ),
    },

    // Tools & Ecosystem
    {
      name: "Redux Toolkit",
      category: "State Mgmt",
      color: "#764ABC",
      borderHover: "hover:border-[#764ABC]/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <circle cx="12" cy="12" r="3" fill="#764ABC" />
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#764ABC" strokeWidth="1.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#764ABC" strokeWidth="1.5" transform="rotate(-30 12 12)" />
        </svg>
      ),
    },
    {
      name: "Git & GitHub",
      category: "Version Control",
      color: "#F05032",
      borderHover: "hover:border-[#F05032]/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-800 dark:text-zinc-200" fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="9" r="3" />
          <path d="M6 9v6M9 6h6a3 3 0 013 3" />
        </svg>
      ),
    },
    {
      name: "Postman",
      category: "API Testing",
      color: "#FF6C37",
      borderHover: "hover:border-[#FF6C37]/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#FF6C37]" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      category: "Deployment",
      color: "#000000",
      borderHover: "hover:border-zinc-400 dark:hover:border-white/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-slate-900 dark:text-white" fill="currentColor">
          <path d="M12 2L24 22H0L12 2z" />
        </svg>
      ),
    },
    {
      name: "VS Code",
      category: "IDE",
      color: "#007ACC",
      borderHover: "hover:border-[#007ACC]/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#007ACC]" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M16.5 3.5L8 10l-4-3.5L2 8l4 4-4 4 2 1.5 4-3.5 8.5 6.5 5.5-2.5V6z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "JWT & Auth",
      category: "Security",
      color: "#10B981",
      borderHover: "hover:border-emerald-500/50",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 018 0v4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        
        {/* Clean Minimal Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Technologies &amp; Skills
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-xl">
            My primary stack for engineering responsive frontend interfaces, type-safe databases, and scalable backend APIs.
          </p>
        </div>

        {/* Clean, Tactile Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {techSkills.map((tech) => (
            <div
              key={tech.name}
              className={`group relative rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/60 dark:bg-zinc-900/50 p-4 flex flex-col items-center justify-center text-center gap-2.5 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${tech.borderHover} cursor-pointer`}
            >
              {/* Icon Container with subtle hover zoom */}
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800/90 border border-zinc-200/80 dark:border-zinc-700/60 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>

              {/* Technology Title */}
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {tech.name}
                </h3>
                <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 block mt-0.5">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
