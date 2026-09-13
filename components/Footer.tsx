"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LinkedinIcon, FacebookIcon, GithubIcon, WhatsAppIcon } from "./Icons";

const ACTION_WORDS = ["build", "engineer", "scale", "design"];

export default function Footer() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ACTION_WORDS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/babul-hossan-09932837a/",
      icon: <LinkedinIcon className="w-4 h-4" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/babul.hossan.1",
      icon: <FacebookIcon className="w-4 h-4" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/babul0000",
      icon: <GithubIcon className="w-4 h-4" />,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/8801934825500",
      icon: <WhatsAppIcon className="w-4 h-4" />,
    },
  ];

  return (
    <footer className="w-full bg-zinc-50 dark:bg-[#070709] text-slate-800 dark:text-zinc-200 pt-12 sm:pt-14 pb-8 border-t border-zinc-200/90 dark:border-zinc-800/90 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 relative z-10">
        
        {/* Dynamic Cycling Headline (Compact & Elegant) */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight leading-snug text-slate-900 dark:text-white">
            Let&apos;s{" "}
            <span className="inline-block relative overflow-hidden h-[1.2em] align-bottom font-semibold text-emerald-600 dark:text-emerald-400">
              <span
                key={ACTION_WORDS[wordIndex]}
                className="inline-block transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
              >
                {ACTION_WORDS[wordIndex]}
              </span>
            </span>{" "}
            <span className="text-slate-500 dark:text-zinc-400 font-light">incredible work together.</span>
          </h2>
        </div>

        {/* Info Grid (Email + Socials) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 mb-8 border-b border-zinc-200 dark:border-zinc-800/80">
          {/* Email Column */}
          <div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-zinc-400 mb-2 font-semibold">
              Email Directly
            </p>
            <a
              href="mailto:babulhossan.dev@gmail.com"
              className="group inline-flex items-center gap-1.5 text-base sm:text-lg font-medium text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <span className="underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 group-hover:decoration-emerald-500">
                babulhossan.dev@gmail.com
              </span>
              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>

          {/* Socials Column */}
          <div>
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-zinc-400 mb-2 font-semibold">
              Connect &amp; Follow
            </p>
            <div className="flex items-center gap-2.5">
              {socials.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.name}
                  className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation & Metadata Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-slate-600 dark:text-zinc-400">
          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-5 font-medium">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Projects
            </a>
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Location & Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 font-mono text-[11px]">
            <span>
              Based in <strong className="text-slate-900 dark:text-zinc-200 font-semibold">Dhaka, Bangladesh</strong>
            </span>
            <span>© {new Date().getFullYear()} Babul Hossan. All rights reserved.</span>
          </div>
        </div>

      </div>

      {/* Subtly Visible Watermark Text (Harmonized with Theme) */}
      <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[0.2em] text-slate-900/[0.05] dark:text-white/[0.06] select-none pointer-events-none text-center leading-none mt-8 sm:mt-10 uppercase font-mono">
        BABUL HOSSAN
      </div>
    </footer>
  );
}
