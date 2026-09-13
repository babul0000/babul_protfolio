"use client";
import React from "react";

export default function Ecosystem() {
  const techStack = [
    { name: "MERN Stack", icon: "🚀" },
    { name: "React 18/19", icon: "⚛️" },
    { name: "Next.js 14", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "⚡" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Prisma ORM", icon: "◬" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "REST APIs", icon: "🔄" },
    { name: "Git & GitHub", icon: "🐙" },
  ];

  return (
    <div className="border-b border-zinc-200/80 dark:border-zinc-800/80 py-4 bg-zinc-50/50 dark:bg-zinc-950/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative w-full overflow-hidden mask-linear-marquee">
          <div className="animate-marquee-smooth flex items-center gap-6 text-xs font-mono font-medium text-themeTextSecondary">
            {/* First sequence */}
            {techStack.map((tech, idx) => (
              <div
                key={`tech-1-${idx}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shrink-0 shadow-2xs hover:border-emerald-500/40 transition-colors"
              >
                <span className="text-sm">{tech.icon}</span>
                <span className="text-themeText font-sans">{tech.name}</span>
              </div>
            ))}
            {/* Duplicated sequence for infinite loop */}
            {techStack.map((tech, idx) => (
              <div
                key={`tech-2-${idx}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shrink-0 shadow-2xs hover:border-emerald-500/40 transition-colors"
              >
                <span className="text-sm">{tech.icon}</span>
                <span className="text-themeText font-sans">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
