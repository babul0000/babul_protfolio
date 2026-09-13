"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import HeroProjectStack from "./HeroProjectStack";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-grid-pattern overflow-hidden">
      {/* Background ambient lighting & radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

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

        {/* Main Grid: Typography Left (6 cols) + Animated 3D Projects Stack Right (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (6 cols): Heading, Bio, Actions */}
          <div className="lg:col-span-6 space-y-6">
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

            <p className="text-base sm:text-lg text-themeTextSecondary leading-relaxed">
              I build fast, production-ready web applications using the{" "}
              <strong className="font-semibold text-themeText">MERN Stack</strong>,{" "}
              <strong className="font-semibold text-themeText">Next.js 14</strong>, and{" "}
              <strong className="font-semibold text-themeText">TypeScript</strong>. Expanding actively into relational database architecture with{" "}
              <strong className="font-semibold text-themeText">PostgreSQL &amp; Prisma ORM</strong>.
            </p>

            {/* Action Buttons (NasirChy style) */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
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

            {/* Quick Badges & Profile details */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-themeTextMuted">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" /> Dhaka, Bangladesh
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Programming Hero Verified MERN
              </span>
            </div>
          </div>

          {/* Right Column (6 cols): NasirChy-style 3D Animated Project Stack Deck */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <HeroProjectStack />
          </div>

        </div>
      </div>
    </section>
  );
}
