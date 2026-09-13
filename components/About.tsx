"use client";
import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/30 dark:bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold uppercase mb-2">
            BIOGRAPHY &amp; PHILOSOPHY
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-themeText tracking-tight">
            About Babul Hossan
          </h2>
        </div>

        {/* NasirChy Editorial Layout: Photo Left + Philosophy Articles Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left Column (4 cols): Photo + Social Links Overlay */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4">
            <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg group">
              <Image
                src="/my.webp"
                alt="Babul Hossan"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/babul0000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/babul-hossan-09932837a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:babulhossan.dev@gmail.com"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 text-xs font-mono text-themeTextSecondary space-y-1.5">
              <div className="flex items-center justify-between">
                <span>Location:</span>
                <span className="text-themeText font-semibold">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Education:</span>
                <span className="text-themeText font-semibold">Programming Hero MERN</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Focus:</span>
                <span className="text-themeText font-semibold">Full-Stack Engineering</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Editorial Narrative */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6 text-base sm:text-lg text-themeTextSecondary leading-relaxed">
            <p>
              <strong className="font-semibold text-themeText">I build dependable, scalable web applications</strong> with a strong focus on clean architecture, responsive user interfaces, and robust backend services. My primary technical stack is the <strong className="font-semibold text-themeText">MERN Stack (MongoDB, Express, React, Node.js)</strong> and <strong className="font-semibold text-themeText">Next.js 14 App Router with TypeScript</strong>.
            </p>

            <p>
              <strong className="font-semibold text-themeText">Expanding into Relational Databases</strong>: Recognizing the importance of type-safe relational modeling in enterprise applications, I have actively expanded my toolkit to include <strong className="font-semibold text-themeText">PostgreSQL and Prisma ORM</strong>. I design structured database schemas, write efficient queries, and implement relational constraints alongside document databases.
            </p>

            <p>
              <strong className="font-semibold text-themeText">Industrial Quality Engineering Discipline</strong>: Before transitioning into full-time software development, I honed my skills in technical operations and quality assurance. This engineering background instills a relentless attention to detail, rigorous edge-case testing, and systematic problem-solving across every line of code I ship.
            </p>

            {/* Core Values / Philosophy Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="p-3.5 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/30">
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold block mb-1">01 / CLEAN CODE</span>
                <p className="text-xs text-themeTextSecondary">Modular components, explicit TypeScript types, and maintainable folder hierarchies.</p>
              </div>
              <div className="p-3.5 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/30">
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold block mb-1">02 / RELIABILITY</span>
                <p className="text-xs text-themeTextSecondary">Defensive backend validation, secure auth flows, and optimal database indexing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
