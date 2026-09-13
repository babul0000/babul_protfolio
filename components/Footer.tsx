"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
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
    <footer className="w-full bg-black text-white pt-20 sm:pt-28 pb-12 relative overflow-hidden border-t border-zinc-900 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        {/* Dynamic Cycling Headline (Exact NasirChy style) */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[1.1] text-white">
          Lets{" "}
          <span className="inline-block relative overflow-hidden h-[1.15em] align-bottom font-medium text-emerald-400">
            <span
              key={ACTION_WORDS[wordIndex]}
              className="inline-block transition-all duration-500 animate-in fade-in slide-in-from-bottom-6"
            >
              {ACTION_WORDS[wordIndex]}
            </span>
          </span>{" "}
          <br />
          <span className="text-zinc-400 font-light">incredible work together.</span>
        </h2>
      </div>

      {/* Info Section Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 pb-14 mb-12 border-b border-zinc-800/90">
        {/* Email Column */}
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
            Email
          </p>
          <a
            href="mailto:babulhossan.dev@gmail.com"
            className="text-lg sm:text-xl md:text-2xl font-normal text-white hover:text-emerald-400 transition-colors underline-offset-4 hover:underline"
          >
            babulhossan.dev@gmail.com
          </a>
        </div>

        {/* Socials Column */}
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
            Socials
          </p>
          <div className="flex items-center gap-3">
            {socials.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={soc.name}
                className="w-11 h-11 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-sm"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation & Metadata Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-zinc-400 mb-12">
        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-6 font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Location & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-zinc-400">
          <span>
            Based in <strong className="text-zinc-200 font-semibold">Dhaka, Bangladesh</strong>
          </span>
          <span>© {new Date().getFullYear()} Babul Hossan. All rights reserved.</span>
        </div>
      </div>
      </div>

      {/* Giant Background Watermark Text (Exact NasirChy style) */}
      <div className="text-[13vw] font-bold tracking-tight text-white/[0.04] select-none pointer-events-none text-center leading-none mt-10 md:mt-16 uppercase">
        BABUL . HOSSAN
      </div>
    </footer>
  );
}
