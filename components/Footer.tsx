"use client";
import React from "react";
import Image from "next/image";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-white dark:bg-[#09090b] border-t border-zinc-200/80 dark:border-zinc-800/80 text-xs text-themeTextSecondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-200/80 dark:border-zinc-800/80">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full overflow-hidden ring-1 ring-emerald-500/50">
              <Image
                src="/my.webp"
                alt="Babul Hossan"
                width={28}
                height={28}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <span className="font-semibold text-themeText block">Babul Hossan</span>
              <span className="text-[11px] font-mono text-themeTextMuted">Full-Stack MERN Developer</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-themeTextSecondary">
            <a href="#projects" className="hover:text-themeText transition-colors">Projects</a>
            <a href="#skills" className="hover:text-themeText transition-colors">Skills</a>
            <a href="#experience" className="hover:text-themeText transition-colors">Experience</a>
            <a href="#certificates" className="hover:text-themeText transition-colors">Certifications</a>
            <a href="#about" className="hover:text-themeText transition-colors">About</a>
            <a href="#contact" className="hover:text-themeText transition-colors">Contact</a>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/babul0000"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-themeTextSecondary hover:text-themeText transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/babul-hossan-09932837a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-themeTextSecondary hover:text-themeText transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:babulhossan.dev@gmail.com"
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-themeTextSecondary hover:text-themeText transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-themeTextSecondary hover:text-themeText transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-themeTextMuted font-mono">
          <p>© {new Date().getFullYear()} Babul Hossan. All rights reserved.</p>
          <p>Built with Next.js 14, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
