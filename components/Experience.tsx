"use client";
import React, { useState } from "react";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  GraduationCap, 
  Sparkles,
  Layers,
  ChevronRight
} from "lucide-react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const experiences = [
    {
      id: "fullstack",
      badge: "CURRENT FOCUS",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      dotPulse: true,
      role: "Full-Stack MERN & Next.js Developer",
      company: "Independent & Open-Source Engineering",
      period: "2024 — Present",
      location: "Dhaka, Bangladesh",
      icon: <Code2 className="w-5 h-5 text-emerald-500" />,
      stats: [
        { label: "Public Repos", value: "69+" },
        { label: "Core Stack", value: "Next.js / TS" },
        { label: "Databases", value: "Postgres & Mongo" },
      ],
      description:
        "Architecting production-ready full-stack applications with Next.js 14 App Router, strict TypeScript type safety, scalable REST APIs, and dual database systems (PostgreSQL via Prisma ORM and MongoDB).",
      achievements: [
        "Architected end-to-end full-stack web applications including OnWear (E-Commerce Platform), BloodConnect, and Tiles Gallery utilizing Next.js 14 and TypeScript.",
        "Built modular backend RESTful APIs with Node.js and Express.js, implementing secure JWT authentication, HTTP-only cookies, and defensive request validation.",
        "Engineered structured relational database schemas in PostgreSQL using Prisma ORM alongside document aggregations in MongoDB.",
        "Delivered pixel-perfect, responsive UI experiences optimized for zero layout shifts and high Lighthouse audit scores.",
      ],
      technologies: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "MongoDB",
        "Tailwind CSS",
      ],
    },
    {
      id: "education",
      badge: "ACCREDITED GRADUATION",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
      dotPulse: false,
      role: "Complete Web Development (MERN Stack)",
      company: "Programming Hero",
      period: "2024",
      location: "Online / Verified Accreditation",
      icon: <GraduationCap className="w-5 h-5 text-blue-500" />,
      stats: [
        { label: "Duration", value: "6 Months" },
        { label: "Projects Built", value: "10+ Apps" },
        { label: "Grade", value: "Top Performer" },
      ],
      description:
        "Completed rigorous 6-month intensive training program focusing on modern full-stack web architecture, React component lifecycles, backend server pipelines, and database modeling.",
      achievements: [
        "Mastered advanced React concepts: Custom Hooks, Context API, state management, and optimized render cycles.",
        "Built and deployed over 10 full-stack projects adhering to clean architecture, modular folder structures, and industry standards.",
        "Collaborated on practical sprint milestones, code reviews, and Git branching workflows.",
      ],
      technologies: [
        "React.js",
        "JavaScript (ES6+)",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase Auth",
        "REST APIs",
      ],
    },
    {
      id: "operations",
      badge: "SYSTEMATIC DISCIPLINE",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
      dotPulse: false,
      role: "Quality Assurance & Technical Operations",
      company: "Industrial Operations",
      period: "Prior Experience",
      location: "Bangladesh",
      icon: <Cpu className="w-5 h-5 text-purple-500" />,
      stats: [
        { label: "Focus", value: "Quality Control" },
        { label: "Mindset", value: "Root Cause" },
        { label: "Discipline", value: "Zero Defect" },
      ],
      description:
        "Applied rigorous quality assurance workflows, root-cause defect analysis, and systematic process optimization in technical industrial environments.",
      achievements: [
        "Executed systematic quality inspection protocols, identifying operational bottlenecks and streamlining procedural efficiency.",
        "Developed rigorous attention to detail and defensive testing mindset, directly transferring to building resilient, bug-free web systems.",
        "Fostered cross-functional collaboration, technical documentation discipline, and continuous process optimization.",
      ],
      technologies: [
        "Quality Assurance",
        "Root Cause Analysis",
        "Process Optimization",
        "Technical Documentation",
        "Operational Discipline",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-[#070709] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 text-center">
        
        {/* Header with Background Watermark & Underline Bar */}
        <div className="relative mb-14 sm:mb-16">
          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-slate-900/[0.03] dark:text-white/[0.04] tracking-[0.25em] select-none pointer-events-none uppercase absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap">
            EXPERIENCE
          </div>

          <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            PROFE<span className="text-emerald-500">SSIONAL</span> JOURNEY
          </h2>

          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-2.5" />

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-xl mx-auto">
            My development evolution, engineering milestones, and systematic discipline.
          </p>
        </div>

        {/* Unique Interactive Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Milestone Tabs (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {experiences.map((exp, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(idx)}
                  className={`group relative rounded-2xl p-5 text-left transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? "bg-white dark:bg-zinc-900 border-emerald-500 shadow-lg scale-[1.02]"
                      : "bg-white/60 dark:bg-zinc-900/40 border-zinc-200/80 dark:border-zinc-800/80 hover:bg-white dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-emerald-500 rounded-r-full" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border ${exp.badgeColor}`}>
                      {exp.dotPulse && (
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                        </span>
                      )}
                      {exp.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-zinc-500">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className={`text-base font-bold transition-colors ${isActive ? "text-emerald-600 dark:text-emerald-400" : "text-slate-900 dark:text-white"}`}>
                    {exp.role}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    {exp.company}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Showcase Card (8 Cols) */}
          <div className="lg:col-span-8">
            {(() => {
              const current = experiences[activeTab];
              return (
                <div className="rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900 p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-right-4">
                  
                  {/* Top Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shadow-xs">
                        {current.icon}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                          {current.role}
                        </h3>
                        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                          {current.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {current.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {current.location}
                      </span>
                    </div>
                  </div>

                  {/* Tactile Mini Stat Chips */}
                  <div className="grid grid-cols-3 gap-3 my-6">
                    {current.stats.map((st, i) => (
                      <div key={i} className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 text-center">
                        <div className="text-sm sm:text-base font-bold font-mono text-slate-900 dark:text-white">
                          {st.value}
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-zinc-400 mt-0.5">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Narrative Summary */}
                  <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed mb-6">
                    {current.description}
                  </p>

                  {/* Key Highlights Bullet Points */}
                  <div className="space-y-3 mb-8">
                    <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      Key Highlights &amp; Accomplishments
                    </h4>
                    {current.achievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Pills Bar */}
                  <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex flex-wrap gap-2">
                      {current.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 font-mono text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                Interested in working together or hiring?
              </h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Open for full-time frontend/full-stack engineering roles and freelance contracts.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:opacity-90 transition-all shadow-md shrink-0 hover:scale-105 active:scale-95"
          >
            <span>Get in Touch</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
