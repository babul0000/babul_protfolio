"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Status Pill (NasirChy style) */}
        <div className="flex justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm text-xs font-medium text-themeText shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Full-Stack Roles &amp; Projects</span>
          </div>
        </div>

        {/* Main Grid: Typography Left + Monospace Sidebar & Avatar Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column (7 cols): Heading, Bio, Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold uppercase">
                PORTFOLIO / 2026
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-light tracking-tight text-themeText leading-[1.1]">
                Hi, I&apos;m <br />
                <span className="font-bold text-themeText">Babul Hossan</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-emerald-600 dark:text-emerald-400">
                Full-Stack MERN Developer
              </p>
            </div>

            <p className="text-base sm:text-lg text-themeTextSecondary leading-relaxed max-w-xl">
              I build fast, production-ready web applications using the{" "}
              <strong className="font-semibold text-themeText">MERN Stack</strong>,{" "}
              <strong className="font-semibold text-themeText">Next.js 14</strong>, and{" "}
              <strong className="font-semibold text-themeText">TypeScript</strong>. Expanding actively into relational database architecture with{" "}
              <strong className="font-semibold text-themeText">PostgreSQL &amp; Prisma ORM</strong>.
            </p>

            {/* Action Buttons (NasirChy + Shakeeb hybrid) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* GitHub Button with Avatar chip */}
              <a
                href="https://github.com/babul0000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md group"
              >
                <div className="w-5 h-5 rounded-full overflow-hidden shrink-0 ring-1 ring-white/40">
                  <Image
                    src="/my.webp"
                    alt="Babul"
                    width={20}
                    height={20}
                    className="object-cover w-full h-full"
                  />
                </div>
                <GithubIcon className="w-4 h-4" />
                <span>See My GitHub</span>
              </a>

              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm font-medium text-themeText hover:border-emerald-500/60 hover:text-emerald-500 transition-all shadow-xs group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Direct Contact */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-themeTextSecondary hover:text-themeText hover:bg-black/5 dark:hover:bg-white/5 transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>Contact</span>
              </a>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-themeTextMuted">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" /> Dhaka, Bangladesh
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Programming Hero Verified MERN
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Photo & Shakeeb-style Monospace Meta Box */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Profile Avatar Card */}
            <div className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-4 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden ring-2 ring-emerald-500/40 shrink-0 shadow-md">
                  <Image
                    src="/my.webp"
                    alt="Babul Hossan"
                    width={96}
                    height={96}
                    priority
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-mono text-themeTextMuted uppercase">DEVELOPER PROFILE</div>
                  <h3 className="text-base font-semibold text-themeText">Babul Hossan</h3>
                  <p className="text-xs text-themeTextSecondary">MERN • Next.js • PostgreSQL • Prisma</p>
                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href="https://www.linkedin.com/in/babul-hossan-09932837a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-zinc-200/70 dark:bg-zinc-800 text-themeText hover:text-emerald-500 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://github.com/babul0000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-zinc-200/70 dark:bg-zinc-800 text-themeText hover:text-emerald-500 transition-colors"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="mailto:babulhossan.dev@gmail.com"
                      className="p-1.5 rounded-lg bg-zinc-200/70 dark:bg-zinc-800 text-themeText hover:text-emerald-500 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Shakeeb-style Monospace Meta Info Box */}
            <div className="p-4 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/30 space-y-3 font-mono text-xs">
              <div>
                <span className="text-themeTextMuted block text-[11px] mb-1">CURRENTLY:</span>
                <span className="text-themeText font-semibold">Full Stack Developer</span>
                <span className="text-themeTextMuted block text-[11px]">Building scalable full-stack web apps</span>
              </div>
              <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
                <span className="text-themeTextMuted block text-[11px] mb-1.5">CORE FOCUS:</span>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "Next.js 14", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[11px] text-themeTextSecondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
