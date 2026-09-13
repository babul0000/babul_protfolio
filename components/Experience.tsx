"use client";
import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Independent / Open-Source Projects",
      role: "Full-Stack MERN Developer",
      period: "2024 — Present",
      location: "Dhaka, Bangladesh",
      accent: "#10b981",
      achievements: [
        "Architected full-stack web applications like PromptForge, BloodConnect, and Tiles Gallery utilizing Next.js 14 App Router and TypeScript.",
        "Built scalable RESTful APIs with Node.js and Express.js, implementing JWT authentication, secure cookies, and input validation.",
        "Engineered document schemas in MongoDB and relational database tables using PostgreSQL with Prisma ORM.",
        "Optimized frontend performance, delivering zero layout shifts and high Lighthouse audit scores."
      ],
      tags: ["Next.js 14", "React", "TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma ORM"]
    },
    {
      company: "Industrial & Technical Operations",
      role: "Quality Assurance & Production Engineering",
      period: "Prior Experience",
      location: "Bangladesh",
      accent: "#0284c7",
      achievements: [
        "Executed systematic quality control processes, rigorous inspection workflows, and operational root-cause analysis.",
        "Maintained high precision production standards, directly influencing my disciplined approach to clean, bug-free software engineering.",
        "Collaborated with cross-functional technical teams to identify workflow bottlenecks and streamline procedural efficiency."
      ],
      tags: ["Quality Control", "Root Cause Analysis", "Process Optimization", "Systematic Workflow"]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold uppercase mb-2">
            CAREER & TRACK RECORD
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-themeText tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-themeTextSecondary max-w-2xl">
            My development journey, practical engineering milestones, and operational discipline.
          </p>
        </div>

        {/* Experience Cards (NasirChy style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 sm:p-8 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg flex flex-col justify-between"
            >
              {/* Top Accent Strip */}
              <div
                className="absolute left-0 top-0 h-1 w-full"
                style={{ backgroundColor: exp.accent }}
              />

              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-themeText group-hover:text-emerald-500 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-themeTextMuted mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>

                {/* Key Achievements */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-themeTextSecondary leading-relaxed">
                      <div
                        className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: exp.accent }}
                      />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-themeTextSecondary font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
