"use client";
import React, { useState } from "react";
import {
  ShoppingBag,
  Wrench,
  Sparkles,
  CheckCircle2,
  Calendar,
  MapPin,
  ExternalLink,
  ArrowUpRight,
  GitBranch,
  ShieldCheck,
  Zap,
  Layers,
  Laptop,
  Flame,
  Check,
  Copy,
  Cpu,
  Scissors
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"software" | "garments">("software");
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <section
      id="experience"
      className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-[#08080b] relative overflow-hidden transition-colors"
    >
      {/* Ambient Cyber Grid & Glow Effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center relative mb-12 sm:mb-16">
          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900/[0.03] dark:text-white/[0.03] tracking-[0.2em] select-none pointer-events-none uppercase absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono">
            EXPERIENCE
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>AUTHENTIC CAREER TRACK RECORD</span>
          </div>

          <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            PROFE<span className="text-emerald-500">SSIONAL</span> JOURNEY
          </h2>

          <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-3" />

          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Self-taught full-stack web development specializing in e-commerce architectures, backed by 8 years of industrial technical discipline.
          </p>
        </div>

        {/* Dual Pillar Switcher Toolbar */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs backdrop-blur-md">
            
            <button
              onClick={() => setActiveTab("software")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "software"
                  ? "bg-slate-900 text-white dark:bg-emerald-500 dark:text-zinc-950 shadow-sm"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Full-Stack &amp; E-Commerce (Self-Learned)</span>
            </button>

            <button
              onClick={() => setActiveTab("garments")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "garments"
                  ? "bg-slate-900 text-white dark:bg-amber-500 dark:text-zinc-950 shadow-sm"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Garments Technician (8 Years)</span>
            </button>

          </div>
        </div>

        {/* ================================================================ */}
        {/* PILLAR 1: Self-Learned Full-Stack & E-Commerce Developer        */}
        {/* ================================================================ */}
        {activeTab === "software" && (
          <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
            
            {/* Main Software Card */}
            <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-md backdrop-blur-md relative overflow-hidden">
              
              {/* Card Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 shadow-xs">
                    <ShoppingBag className="w-7 h-7" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
                        </span>
                        <span>PRIMARY FOCUS // SELF-TAUGHT</span>
                      </span>

                      <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                        Independent Full-Stack Engineering
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Full-Stack &amp; E-Commerce Web Developer
                    </h3>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-1 text-xs font-mono text-slate-500 dark:text-zinc-400 shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    2024 — Present
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    Dhaka, Bangladesh • Remote / On-Site
                  </span>
                </div>
              </div>

              {/* Narrative Summary */}
              <div className="mt-6 space-y-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  Dedicated <strong className="text-slate-900 dark:text-white">self-taught full-stack developer</strong> who transitioned into software engineering through rigorous daily practice, hands-on building, and deep experimentation with modern web technologies.
                </p>
                <p>
                  Focused primarily on building and shipping <strong className="text-slate-900 dark:text-white">production-ready E-Commerce platforms</strong> and interactive web applications utilizing <strong className="text-slate-900 dark:text-white">Next.js 14 App Router, TypeScript, React, Node.js, Express.js, MongoDB, and PostgreSQL (Prisma ORM)</strong>.
                </p>
              </div>

              {/* Numeric Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-7">
                {[
                  { value: "2+", label: "E-Commerce Systems" },
                  { value: "69+", label: "GitHub Public Repos" },
                  { value: "Next.js 14", label: "Core Web Stack" },
                  { value: "100%", label: "Self-Driven Learning" },
                ].map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800/80 text-center"
                  >
                    <div className="text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Real E-Commerce Projects Built (Live Deliverables) */}
              <div className="space-y-4 pt-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                  <Laptop className="w-4 h-4 text-emerald-500" />
                  <span>Verified E-Commerce Platforms Built Through Self-Learning</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Project 1: OnWear */}
                  <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-xs">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          OnWear Menswear E-Commerce
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          Live E-Commerce
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed mb-3">
                        Full-featured clothing store featuring custom <strong>Smart Fit &amp; Size Calculator algorithm</strong>, dynamic shopping cart drawer, multi-category filtering, and live order tracking.
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {["Next.js 14", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind"].map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/80">
                      <a
                        href="https://onwear.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        <span>Visit Live Store</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="https://github.com/babul0000/onwear"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white ml-auto"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Project 2: Tiles Gallery & Visual Catalog */}
                  <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all shadow-xs">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          Tiles Gallery Visual Catalog
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                          Showcase Platform
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed mb-3">
                        High-performance visual catalog for architectural design tiles with multi-criteria dynamic filtering, responsive grid layouts, and lazy-loaded image optimization.
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {["React", "Next.js 14", "Tailwind CSS", "CSS Grid", "Vercel"].map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/80">
                      <a
                        href="https://tiles-galary-a-8.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                      >
                        <span>View Live Catalog</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="https://github.com/babul0000/tiles-galary-a-8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white ml-auto"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* What I Mastered Through Self-Learning */}
              <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span>Key Engineering Milestones Achieved Through Self-Learning</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Architected full-stack Next.js 14 App Router applications with Server & Client components.",
                    "Engineered custom sizing recommendation algorithm based on user chest and length inputs in OnWear.",
                    "Built secure RESTful APIs with Node.js & Express, JWT authentication, and request sanitization.",
                    "Implemented dual-database persistence: PostgreSQL with Prisma ORM and MongoDB document storage.",
                    "Created 69+ public repositories on GitHub demonstrating consistent daily development.",
                    "Designed accessible, mobile-first responsive user interfaces with zero layout shifts.",
                  ].map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-800 text-xs text-slate-700 dark:text-zinc-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ================================================================ */}
        {/* PILLAR 2: Garments Technician (8 Years Additional Experience)     */}
        {/* ================================================================ */}
        {activeTab === "garments" && (
          <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-300">
            
            {/* Main Garments Card */}
            <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-white dark:bg-zinc-900 border border-amber-500/30 shadow-md backdrop-blur-md relative overflow-hidden">
              
              {/* Card Top Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center shrink-0 shadow-xs">
                    <Wrench className="w-7 h-7" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/30">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>ADDITIONAL EXPERIENCE // 8 YEARS TRACK RECORD</span>
                      </span>

                      <span className="text-xs font-mono text-slate-500 dark:text-zinc-400">
                        Garments &amp; Industrial Technical Operations
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Garments Technical Specialist &amp; Quality Technician
                    </h3>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-1 text-xs font-mono text-slate-500 dark:text-zinc-400 shrink-0">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    8 Years Experience
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    Industrial Operations • Bangladesh
                  </span>
                </div>
              </div>

              {/* Narrative Summary */}
              <div className="mt-6 space-y-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
                <p>
                  Possess an extensive <strong className="text-slate-900 dark:text-white">8-year career background as a technical specialist and quality technician in the garments and apparel manufacturing industry</strong> in Bangladesh.
                </p>
                <p>
                  Responsible for precision technical equipment operations, rigorous quality assurance inspection protocols, root-cause defect analysis, standard operating procedures (SOP) compliance, and production line optimization.
                </p>
              </div>

              {/* Numeric Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-7">
                {[
                  { value: "8 Years", label: "Industrial Experience" },
                  { value: "100%", label: "SOP & Quality Control" },
                  { value: "Zero-Defect", label: "Inspection Standard" },
                  { value: "Technical", label: "Process Optimization" },
                ].map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/10 border border-amber-200/60 dark:border-amber-900/30 text-center"
                  >
                    <div className="text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-zinc-400 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Transferable Strengths to Software Development */}
              <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-4">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-amber-500" />
                  <span>How 8 Years of Garments Technical Experience Transfers to Software Engineering</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      title: "Relentless Attention to Detail",
                      desc: "8 years of zero-defect quality inspection translates directly into spotting UI discrepancies, CSS layout shifts, and subtle logic bugs before shipping.",
                    },
                    {
                      title: "Root-Cause Defect Analysis",
                      desc: "Trained to isolate the exact cause of process failures, which supercharges fast and systematic debugging of complex frontend and backend errors.",
                    },
                    {
                      title: "Defensive & Edge-Case Testing",
                      desc: "Instinctively tests edge-case scenarios and validates all user inputs, ensuring crash-resistant APIs and resilient web systems.",
                    },
                    {
                      title: "Discipline & Work Ethic",
                      desc: "High endurance, strong accountability, and strict standard operating procedure (SOP) documentation mindset across every software project.",
                    },
                  ].map((strength, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between shadow-xs"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {strength.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed pl-6">
                        {strength.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industrial Core Competencies */}
              <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    "Technical Operations",
                    "Quality Assurance (QA)",
                    "Defect Analysis",
                    "SOP Compliance",
                    "Precision Inspection",
                    "Process Optimization",
                    "Industrial Discipline",
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 font-mono text-[11px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-500">
                  8 Years Track Record
                </span>
              </div>

            </div>

          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Looking for a Driven Full-Stack Engineer?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-0.5">
                Ready for full-time engineering roles, remote teams, and high-impact web development.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-emerald-500 text-white dark:text-slate-950 text-xs sm:text-sm font-semibold hover:opacity-90 transition-all shadow-md shrink-0 hover:scale-105 active:scale-95 cursor-pointer font-mono"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
