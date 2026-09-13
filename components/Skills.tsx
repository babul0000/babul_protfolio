"use client";
import React, { useState } from "react";
import { 
  Code2, 
  Layers, 
  FileCode2, 
  Server, 
  Database, 
  Cpu, 
  GitBranch, 
  Terminal, 
  Globe, 
  Workflow, 
  ShieldCheck,
  Check
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
  level: string;
  highlight?: boolean;
  desc: string;
  icon: string;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skills: SkillItem[] = [
    { name: "React.js", category: "frontend", level: "Advanced", highlight: true, desc: "Components, Hooks, Context, Virtual DOM", icon: "⚛️" },
    { name: "Next.js 14", category: "frontend", level: "Advanced", highlight: true, desc: "App Router, SSR, SSG, Server Actions", icon: "▲" },
    { name: "TypeScript", category: "frontend", level: "Proficient", highlight: true, desc: "Strict Types, Generics, Interfaces", icon: "TS" },
    { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced", desc: "Async/Await, Closures, DOM, Fetch API", icon: "JS" },
    { name: "Tailwind CSS", category: "frontend", level: "Advanced", highlight: true, desc: "Utility-First, Responsive Design, Dark Mode", icon: "🎨" },
    { name: "HTML5 & CSS3", category: "frontend", level: "Advanced", desc: "Semantic HTML, Flexbox, CSS Grid, Media Queries", icon: "🌐" },
    
    { name: "Node.js", category: "backend", level: "Proficient", highlight: true, desc: "Event Loop, Async I/O, NPM Ecosystem", icon: "🟢" },
    { name: "Express.js", category: "backend", level: "Proficient", highlight: true, desc: "Middleware, RESTful Endpoints, Routing", icon: "⚡" },
    { name: "RESTful APIs", category: "backend", level: "Proficient", desc: "API Architecture, JSON, HTTP Methods & Statuses", icon: "🔄" },
    { name: "Authentication", category: "backend", level: "Proficient", desc: "JWT Tokens, Cookies, NextAuth, Firebase Auth", icon: "🔒" },

    { name: "MongoDB", category: "database", level: "Proficient", highlight: true, desc: "Mongoose ODM, Document Schemas, Aggregations", icon: "🍃" },
    { name: "PostgreSQL", category: "database", level: "Intermediate", highlight: true, desc: "Relational Tables, Foreign Keys, SQL Queries", icon: "🐘" },
    { name: "Prisma ORM", category: "database", level: "Intermediate", highlight: true, desc: "Type-safe Schema Modeling, Migrations, CRUD", icon: "◬" },

    { name: "Git & GitHub", category: "tools", level: "Proficient", highlight: true, desc: "Version Control, Branching, Pull Requests", icon: "🐙" },
    { name: "Postman", category: "tools", level: "Proficient", desc: "API Testing, Collections, Environment Variables", icon: "🚀" },
    { name: "Vercel", category: "tools", level: "Proficient", desc: "CI/CD Deployment, Edge Functions, Environment Config", icon: "▲" },
    { name: "VS Code", category: "tools", level: "Proficient", desc: "Debugging, Extensions, Linting, Productivity", icon: "💻" },
  ];

  const categories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database & ORM" },
    { id: "tools", label: "Tools & DevOps" },
  ];

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold uppercase mb-2">
              ENGINEERING TOOLKIT
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-themeText tracking-tight">
              Technologies & Skills
            </h2>
            <p className="mt-2 text-sm sm:text-base text-themeTextSecondary">
              My core full-stack stack, databases, and development tooling.
            </p>
          </div>

          {/* Category Filter Pills (Shakeeb style) */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-white dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 shadow-xs"
                    : "text-themeTextMuted hover:text-themeText"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tactile Skills Grid (NasirChy + Shakeeb hybrid) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="tech-tile p-4 flex flex-col justify-between group hover:border-emerald-500/50"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-center text-base font-mono font-bold text-themeText group-hover:scale-105 transition-transform">
                  {skill.icon}
                </div>
                {skill.highlight && (
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                    Core
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-themeText group-hover:text-emerald-500 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-[11px] text-themeTextMuted leading-tight mt-1 line-clamp-2">
                  {skill.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-themeTextMuted">
                <span className="capitalize">{skill.category}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
