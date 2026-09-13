"use client";
import React from "react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export default function Skills() {
  const technologies: TechItem[] = [
    {
      name: "HTML",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <path d="M4 3l1.5 15.5L12 21l6.5-2.5L20 3H4z" fill="#E34F26" />
          <path d="M12 4.5v14.5l5-2 1-12.5H12z" fill="#EF652A" />
          <path d="M7.5 7.5h9l-.4 3.5H8l.2 3 3.8 1 3.8-1 .3-3.5h2.2l-.5 5.5L12 18.5 7 17l-.5-6h10.5l.2-1.5H6.5L7.5 7.5z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "CSS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <path d="M4 3l1.5 15.5L12 21l6.5-2.5L20 3H4z" fill="#1572B6" />
          <path d="M12 4.5v14.5l5-2 1-12.5H12z" fill="#33A9DC" />
          <path d="M7.5 7.5h9l-.4 3.5H8l.2 3 3.8 1 3.8-1 .3-3.5h2.2l-.5 5.5L12 18.5 7 17l-.5-6h10.5l.2-1.5H6.5L7.5 7.5z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 rounded-lg overflow-hidden" fill="none">
          <rect width="24" height="24" fill="#F7DF1E" />
          <path d="M7 11v6.5c0 1.2-.6 1.8-1.7 1.8s-1.6-.6-1.6-1.5m14.3-6.8h-3.8c-.8 0-1.4.5-1.4 1.3 0 1 .8 1.4 1.7 1.7l1.2.5c1.2.5 1.8 1.1 1.8 2.2 0 1.5-1.2 2.3-2.6 2.3-1.6 0-2.4-.8-2.6-2" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 rounded-lg overflow-hidden" fill="none">
          <rect width="24" height="24" fill="#3178C6" />
          <path d="M5 9h6m-3 0v9m5-9h4c1.2 0 2 .7 2 1.8s-.8 1.8-2 1.8h-2v3.5m0-7.1h4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" />
          <path d="M7 7.5v9m0 0l10-10m-3 4.5v5.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <path d="M12 2C8.5 7 5 11.5 5 15.5c0 3.8 3.1 6.5 7 7 3.9-.5 7-3.2 7-7C19 11.5 15.5 7 12 2z" fill="#47A248" />
          <path d="M12 2.5v19.8" stroke="#13AA52" strokeWidth="1.5" />
          <path d="M12 22.5c-.2 0-.4-.1-.5-.2-2.5-1.5-4.5-4-4.5-6.8 0-3.5 2.5-7.5 5-11.5v18.5z" fill="#13AA52" opacity="0.6" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <circle cx="12" cy="12" r="10" fill="#336791" />
          <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4c0 3-2 5-4 5s-3-1-3-2" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="10" cy="10" r="1" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "Prisma",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-slate-900 dark:text-white" fill="currentColor">
          <path d="M11.5 2.5l9 17a1 1 0 01-.8 1.5H4.3a1 1 0 01-.9-1.4l7.2-17a1 1 0 011.8 0zm.5 4.5L6.5 18h11L12 7z" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z" fill="#5FA04E" />
          <path d="M12 6.5v11M7.5 9l9 5.5M16.5 9l-9 5.5" stroke="#FFFFFF" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Express.js",
      icon: (
        <div className="w-10 h-10 rounded-full border-2 border-slate-900 dark:border-white flex items-center justify-center font-mono font-bold text-base text-slate-900 dark:text-white">
          ex
        </div>
      ),
    },

    // Row 2
    {
      name: "Tailwind CSS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="#38BDF8">
          <path d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 3-2.3 5-2 1.1.2 2 1.1 2.9 2 1.5 1.5 3.2 3.3 6.1 3.3 3.3 0 5.3-1.7 6-5-1.3 1.7-3 2.3-5 2-1.1-.2-2-1.1-2.9-2-1.5-1.5-3.2-3.3-6.1-3.3zm-6 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 3-2.3 5-2 1.1.2 2 1.1 2.9 2 1.5 1.5 3.2 3.3 6.1 3.3 3.3 0 5.3-1.7 6-5-1.3 1.7-3 2.3-5 2-1.1-.2-2-1.1-2.9-2-1.5-1.5-3.2-3.3-6.1-3.3z" />
        </svg>
      ),
    },
    {
      name: "Redux",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <circle cx="12" cy="12" r="3" fill="#764ABC" />
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#764ABC" strokeWidth="1.7" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#764ABC" strokeWidth="1.7" transform="rotate(-30 12 12)" />
        </svg>
      ),
    },
    {
      name: "Git",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <rect width="18" height="18" x="3" y="3" rx="4" transform="rotate(45 12 12)" fill="#F05032" />
          <circle cx="9" cy="15" r="1.8" fill="#FFFFFF" />
          <circle cx="15" cy="9" r="1.8" fill="#FFFFFF" />
          <circle cx="9" cy="9" r="1.8" fill="#FFFFFF" />
          <path d="M9 10.8v2.4M10.8 9h2.4" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-slate-900 dark:text-white" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10 text-slate-900 dark:text-white" fill="currentColor">
          <path d="M12 2L24 22H0L12 2z" />
        </svg>
      ),
    },
    {
      name: "Postman",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path d="M7 14l5-5 5 2-3 4-7-1z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      name: "VS Code",
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none">
          <path d="M17 2l-7 6.5L4 4.5 2 6l5 6-5 6 2 1.5 6-4 7 6.5V2z" fill="#007ACC" />
          <path d="M17 2v20l4.5-2.5V4.5L17 2z" fill="#1F9CF0" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#09090b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 text-center">
        
        {/* Header with Subtle Giant Watermark & Underline Accent (Exact Image Style) */}
        <div className="relative mb-14 sm:mb-16">
          {/* Giant Translucent Background Watermark */}
          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-slate-900/[0.03] dark:text-white/[0.04] tracking-[0.25em] select-none pointer-events-none uppercase absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap">
            TECHNOLOGIES
          </div>

          {/* Foreground Heading: TECHNO + LOGIES */}
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            TECHNO<span className="text-emerald-500">LOGIES</span>
          </h2>

          {/* Small Center Underline Bar */}
          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-2.5" />

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-xl mx-auto">
            Technologies I use to build fast, scalable, and user-friendly web applications.
          </p>
        </div>

        {/* Circular Pods Icon Grid (Exact Image Layout) */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center justify-center cursor-pointer"
            >
              {/* Circular Bubble / Pod */}
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-white dark:bg-zinc-800/90 border border-zinc-200/90 dark:border-zinc-700/80 flex items-center justify-center shadow-md hover:shadow-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105">
                {tech.icon}
              </div>

              {/* Technology Name Label */}
              <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mt-3 text-center">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
