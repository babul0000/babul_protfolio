"use client";
import React from "react";
import { Layout, Server, Database, Sparkles, Cpu, ShieldCheck, GitBranch } from "lucide-react";

export default function BentoSpecialties() {
  const Crosshairs = () => (
    <>
      <span className="absolute -top-2 -left-2 text-zinc-400 dark:text-zinc-600 font-mono text-sm select-none pointer-events-none">+</span>
      <span className="absolute -top-2 -right-2 text-zinc-400 dark:text-zinc-600 font-mono text-sm select-none pointer-events-none">+</span>
      <span className="absolute -bottom-2 -left-2 text-zinc-400 dark:text-zinc-600 font-mono text-sm select-none pointer-events-none">+</span>
      <span className="absolute -bottom-2 -right-2 text-zinc-400 dark:text-zinc-600 font-mono text-sm select-none pointer-events-none">+</span>
    </>
  );

  return (
    <section className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold uppercase mb-2">
            ENGINEERING SPECIALTIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-themeText tracking-tight">
            Building Robust, Production-Ready Systems
          </h2>
          <p className="mt-2 text-sm sm:text-base text-themeTextSecondary max-w-2xl">
            A breakdown of my core technical competencies and software engineering discipline.
          </p>
        </div>

        {/* Bento Grid (Shakeeb Style Crosshair Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Frontend Architecture */}
          <div className="bento-crosshair p-6 flex flex-col justify-between lg:col-span-2">
            <Crosshairs />
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-themeText mb-2">Frontend Architecture & UI Engineering</h3>
              <p className="text-sm text-themeTextSecondary leading-relaxed">
                Expertise in building modular, accessible, and high-performance user interfaces using{" "}
                <span className="text-themeText font-medium">React, Next.js 14 (App Router), TypeScript</span>, and{" "}
                <span className="text-themeText font-medium">Tailwind CSS</span>. Focused on zero layout shifts, responsive viewport scaling, and optimal UX workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-800">
              {["React 18/19", "Next.js 14", "TypeScript", "Tailwind CSS", "Responsive UI", "Client/Server Components"].map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-themeTextSecondary font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Backend & REST APIs */}
          <div className="bento-crosshair p-6 flex flex-col justify-between">
            <Crosshairs />
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-themeText mb-2">Backend & RESTful APIs</h3>
              <p className="text-sm text-themeTextSecondary leading-relaxed">
                Designing scalable backend microservices and REST APIs using{" "}
                <span className="text-themeText font-medium">Node.js & Express.js</span> with JWT authentication, rate limiting, and structured error handling.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-800">
              {["Node.js", "Express.js", "REST APIs", "JWT Auth", "Error Handling"].map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-themeTextSecondary font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Databases (MongoDB + PostgreSQL & Prisma) */}
          <div className="bento-crosshair p-6 flex flex-col justify-between">
            <Crosshairs />
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-themeText mb-2">Relational & Document Databases</h3>
              <p className="text-sm text-themeTextSecondary leading-relaxed">
                Skilled in document-oriented modeling with <span className="text-themeText font-medium">MongoDB & Mongoose</span>, and actively engineering relational database schemas with{" "}
                <span className="text-themeText font-medium">PostgreSQL & Prisma ORM</span>.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-800">
              {["MongoDB", "PostgreSQL", "Prisma ORM", "Schema Design", "Data Validation"].map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-themeTextSecondary font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Industrial Quality Discipline & Precision */}
          <div className="bento-crosshair p-6 flex flex-col justify-between lg:col-span-2">
            <Crosshairs />
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-themeText mb-2">Quality Discipline & Operational Precision</h3>
              <p className="text-sm text-themeTextSecondary leading-relaxed">
                Leveraging a background in industrial quality engineering and technical operations to write dependable, bug-free software. Applying rigorous standards, root cause analysis, and systematic verification across every feature.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-800">
              {["Clean Architecture", "Rigorous Testing", "Process Optimization", "Git Flow", "Type Safety"].map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-themeTextSecondary font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
