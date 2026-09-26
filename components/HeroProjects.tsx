"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  FileText,
  Lock,
  Sparkles,
  Layers,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Code2
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "./Icons";
import { projects, Project } from "./projectsData";

export default function HeroProjects() {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects: Project[] = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "flagship") return p.isFlagship;
    if (filter === "nextjs") return p.tech.some((t) => t.toLowerCase().includes("next.js"));
    if (filter === "ecommerce") return p.id === "onwear";
    return true;
  });

  return (
    <div id="home" className="w-full">
      {/* =================================================================== */}
      {/* HERO SECTION (Balanced 2-Column Desktop Grid)                      */}
      {/* =================================================================== */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 border-b border-gray-200/90 dark:border-zinc-800/80 overflow-hidden bg-white dark:bg-[#09090b]">
        {/* Ambient Subtle Radial Glow */}
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-emerald-500/[0.05] blur-3xl rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column (7 cols): Hero Content & Direct Resume Copy */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              
              {/* Availability Status Badge */}
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-gray-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 px-4 py-1.5 text-xs font-medium text-slate-800 dark:text-zinc-200 shadow-xs backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open for Full-Time Roles &amp; Freelance Contracts</span>
              </span>

              {/* Main Headline */}
              <div>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold mb-2 block">
                  MERN Stack &amp; Next.js Developer
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08]">
                  MD Babul Hossan
                </h1>
              </div>

              {/* Exact Resume Summary */}
              <p className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
                Hands-on experience building scalable, responsive web applications using{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Next.js, React.js, Express.js, and MongoDB
                </strong>
                . Passionate about modern web technologies, clean code best practices, and production-grade architectures.
              </p>

              {/* Action Buttons: Projects, Resume, GitHub */}
              <div className="pt-2 flex flex-wrap items-center gap-3 w-full">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 text-sm font-semibold tracking-tight shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="/Babul_Hossan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Babul_Hossan_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-slate-900 dark:text-white px-5 py-3 text-sm font-medium tracking-tight hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  title="Download MD Babul Hossan's Resume PDF"
                >
                  <FileText className="w-4 h-4 text-emerald-500" />
                  <span>Download Resume</span>
                </a>

                <a
                  href="https://github.com/babul0000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/80 text-slate-800 dark:text-zinc-200 px-4 py-3 text-sm font-medium hover:border-emerald-500 transition-all shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Direct Resume Contact Strip */}
              <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 w-full flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-mono text-slate-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                  Dhaka, Bangladesh
                </span>
                <a
                  href="mailto:babulhossan.info@gmail.com"
                  className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-500" />
                  babulhossan.info@gmail.com
                </a>
                <a
                  href="https://wa.me/8801952860053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-emerald-500 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-500" />
                  +8801952860053
                </a>
              </div>

            </div>

            {/* Right Column (5 cols): Editorial Style Hero Poster Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[420px] group">
                
                {/* Ambient Decorative Backlight Glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-emerald-500/20 to-orange-500/20 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 -z-10" />

                {/* Outer Glass Card Container */}
                <div className="w-full rounded-[2rem] border border-zinc-200/90 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 p-3.5 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:border-zinc-300 dark:group-hover:border-zinc-700">
                  
                  {/* Poster Showcase Container */}
                  <div className="relative aspect-[3/4] w-full rounded-[1.6rem] overflow-hidden bg-[#F0EEEB] shadow-inner border border-stone-200/60 dark:border-zinc-800/80">
                    <Image
                      src="/hero-poster.webp"
                      alt="MD Babul Hossan - Creative Developer Showcase Poster"
                      fill
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Subtle Top Floating Status Chip */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 dark:bg-zinc-900/85 backdrop-blur-md border border-white/40 dark:border-zinc-700/50 text-[11px] font-mono font-medium text-slate-800 dark:text-zinc-200 shadow-sm pointer-events-auto">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        Available for Hire
                      </span>

                      <span className="px-2.5 py-1 rounded-full bg-stone-900/80 text-white text-[10px] font-mono tracking-wider backdrop-blur-md uppercase">
                        2024 Edition
                      </span>
                    </div>

                    {/* Subtle Bottom Floating Info Bar */}
                    <div className="absolute inset-x-0 bottom-0 p-3.5 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent flex items-end justify-between text-white backdrop-blur-[2px]">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-amber-300 font-semibold">
                          Developer Showcase
                        </p>
                        <p className="text-sm font-bold tracking-tight text-white drop-shadow-sm">
                          MD Babul Hossan
                        </p>
                      </div>

                      {/* Quick Social Buttons */}
                      <div className="flex items-center gap-1.5 pointer-events-auto">
                        <a
                          href="https://github.com/babul0000"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-white/20 hover:bg-white/35 text-white backdrop-blur-md transition-all shadow-xs hover:scale-105"
                          title="GitHub Profile"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/babul-hossan-09932837a/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-white/20 hover:bg-white/35 text-white backdrop-blur-md transition-all shadow-xs hover:scale-105"
                          title="LinkedIn Profile"
                        >
                          <LinkedinIcon className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href="https://wa.me/8801952860053"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl bg-white/20 hover:bg-white/35 text-white backdrop-blur-md transition-all shadow-xs hover:scale-105"
                          title="WhatsApp Direct"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Quick Info Strip */}
                  <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs text-slate-600 dark:text-zinc-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#c77336]" />
                      <span className="font-mono text-[11px]">Full Stack &amp; Next.js</span>
                    </div>
                    <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                      Dhaka, BD
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* FEATURED PROJECTS SECTION (Clean, Authentic, Real Images)          */}
      {/* =================================================================== */}
      <section
        id="projects"
        className="py-20 md:py-28 border-b border-gray-200/90 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-[#070709] relative"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold uppercase mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-500" />
                <span>AUTHENTIC RESUME PROJECTS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                Featured Deliverables
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-xl">
                Real-world web applications built with production-grade architecture, responsive design, and authentic live deployments.
              </p>
            </div>

            {/* Filter Category Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xs self-start md:self-end">
              {[
                { id: "all", label: "All Systems (6)" },
                { id: "flagship", label: "Resume Flagships (3)" },
                { id: "nextjs", label: "Next.js" },
                { id: "ecommerce", label: "E-Commerce" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    filter === tab.id
                      ? "bg-slate-900 text-white dark:bg-emerald-500 dark:text-zinc-950 shadow-2xs"
                      : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2-Column Clean Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-[#0f0f13] shadow-sm hover:shadow-2xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* 1. Sleek Window Header Bar */}
                <div className="px-5 py-3 bg-zinc-100/90 dark:bg-zinc-900/90 border-b border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between gap-3 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/90 inline-block" />
                  </div>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60 text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-2xs max-w-[220px] sm:max-w-xs truncate"
                    title={`Open ${project.displayUrl}`}
                  >
                    <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span className="truncate">{project.displayUrl}</span>
                  </a>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Demo</span>
                  </div>
                </div>

                {/* 2. Padded Inset Image Viewport (100% Real Image, ZERO Dark Gradients) */}
                <div className="p-4 sm:p-5 bg-zinc-50/80 dark:bg-zinc-950/60 border-b border-zinc-100 dark:border-zinc-800/80">
                  <div className="relative w-full aspect-[16/10] min-h-[220px] sm:min-h-[280px] rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800 bg-black shadow-md">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* 3. Card Meta Content Body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 gap-5">
                  <div>
                    {/* Title + Tagline Badge */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {project.name}
                      </h3>
                      {project.isFlagship && (
                        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold shrink-0">
                          Resume Flagship
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium mb-3.5">
                      {project.tagline}
                    </p>

                    {/* Exact Resume Bullet Points */}
                    <ul className="space-y-2 mb-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                      {project.bulletPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills from Resume */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60 text-slate-700 dark:text-zinc-300 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 4. Action Buttons Bar */}
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      {/* Primary Live Site Button */}
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      {/* Secondary GitHub Repo Button */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white text-xs font-medium hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all shadow-2xs"
                        title="View Source Code on GitHub"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    </div>

                    {/* Details Link to Dynamic Case Study */}
                    <Link
                      href={`/project/${project.id}`}
                      className="text-xs font-mono font-bold text-slate-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Footer Note */}
          <div className="mt-14 text-center">
            <a
              href="https://github.com/babul0000"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium tracking-tight text-slate-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <span className="underline decoration-slate-400 dark:decoration-zinc-600 underline-offset-4">
                Explore More Public Repositories on GitHub (@babul0000)
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
