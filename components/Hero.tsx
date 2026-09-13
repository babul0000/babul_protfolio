"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Download, Search, Mail, ExternalLink, Sparkles } from "lucide-react";

export default function Hero() {
  const resumeLink = "/resume.pdf";
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        }).format(new Date());
        setCurrentTime(timeStr);
      } catch {
        setCurrentTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const openPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-themeBg text-themeText font-sans antialiased"
    >
      {/* Dynamic ambient background glow meshes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-20 w-[480px] h-[480px] bg-cyan-500/10 rounded-full blur-[130px]" />
        <div className="absolute -bottom-20 left-10 w-[420px] h-[420px] bg-themeAccent/5 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Live Status & Location Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-full bg-themeCard/80 border border-themeBorder shadow-sm backdrop-blur-md">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Available for hire
              </span>
              
              <span className="text-xs text-themeTextSecondary font-medium flex items-center gap-1.5">
                <span>Dhaka, BD</span>
                {currentTime && (
                  <>
                    <span className="text-themeBorder">•</span>
                    <span className="text-[11px] font-mono text-themeTextMuted">{currentTime}</span>
                  </>
                )}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-themeText leading-[1.1]">
                Full Stack Developer <br />
                <span className="gradient-text">
                  Crafting Scalable Web Solutions
                </span>
              </h1>

              {/* Bio description */}
              <p className="text-themeTextSecondary text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
                Hi, I&apos;m <span className="text-themeText font-semibold">Babul Hossan</span>. I build modern, high-performance web applications using <span className="text-themeText font-semibold">Next.js, React, Node.js, Express, MongoDB</span>, and <span className="text-themeText font-semibold">TypeScript</span>. Focused on clean architecture, intuitive UX, and robust APIs.
              </p>
            </div>

            {/* Action Buttons & Quick Search */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#projects"
                className="px-6 py-3.5 bg-themeAccent hover:bg-themeAccentHover text-themeAccentText font-bold rounded-2xl shadow-lg shadow-themeAccent/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm tracking-wide flex items-center gap-2"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-themeCard/90 hover:bg-themeCard border border-themeBorder hover:border-themeAccent/40 text-themeText font-semibold rounded-2xl shadow-sm hover:shadow-md transition-all text-sm flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm"
              >
                <span>Resume</span>
                <Download className="w-4 h-4 text-themeTextSecondary" />
              </a>

              {/* Spotlight Palette Button */}
              <button
                onClick={openPalette}
                className="px-4 py-3 bg-themeCard/60 hover:bg-themeCard border border-themeBorder hover:border-themeAccent/40 text-themeTextSecondary hover:text-themeText rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all shadow-sm group backdrop-blur-sm"
                title="Search (Ctrl+K)"
              >
                <Search className="w-4 h-4 text-themeAccent group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Commands</span>
                <kbd className="px-1.5 py-0.5 rounded bg-themeBg border border-themeBorder text-[10px] font-mono font-bold text-themeTextMuted">
                  ⌘K
                </kbd>
              </button>
            </div>

            {/* Social Links & Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-3 border-t border-themeBorder/60">
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/babul0000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-themeBorder bg-themeCard/80 hover:bg-themeCard hover:border-themeAccent/40 flex items-center justify-center text-themeTextSecondary hover:text-themeAccent transition-all shadow-sm hover:scale-105"
                  title="GitHub Profile"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/babul-hossan-09932837a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-themeBorder bg-themeCard/80 hover:bg-themeCard hover:border-themeAccent/40 flex items-center justify-center text-themeTextSecondary hover:text-themeAccent transition-all shadow-sm hover:scale-105"
                  title="LinkedIn Profile"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 1 0 1.63 1.63c0-.9-.73-1.63-1.63-1.63z" />
                  </svg>
                </a>

                <a
                  href="mailto:babulhossan.info@gmail.com"
                  className="w-10 h-10 rounded-xl border border-themeBorder bg-themeCard/80 hover:bg-themeCard hover:border-themeAccent/40 flex items-center justify-center text-themeTextSecondary hover:text-themeAccent transition-all shadow-sm hover:scale-105"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-px bg-themeBorder hidden sm:block" />

              {/* Quick Tech Highlights */}
              <div className="flex items-center gap-2 text-xs font-medium text-themeTextMuted">
                <Sparkles className="w-3.5 h-3.5 text-themeAccent" />
                <span>Specialized in MERN &amp; Next.js Ecosystem</span>
              </div>
            </div>

          </div>

          {/* Right Column: Ultra-Modern Avatar Showcase with Floating Tech Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              
              {/* Outer Radiant Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-cyan-500/20 to-teal-500/20 rounded-[2.5rem] blur-2xl -z-10 transform scale-95" />

              {/* Profile Card Container */}
              <div className="relative rounded-[2.5rem] p-2 bg-gradient-to-b from-themeBorder via-themeBorder/40 to-transparent shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[4/5] w-full rounded-[2.2rem] overflow-hidden bg-themeCard border border-themeBorder/80">
                  <Image
                    alt="Babul Hossan"
                    fill
                    priority
                    quality={85}
                    sizes="(max-width: 640px) 340px, 370px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                    src="/my.webp"
                  />

                  {/* Modern Subtle Bottom Gradient */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px]">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-white font-bold text-base block tracking-wide">
                          Babul Hossan
                        </span>
                        <span className="text-emerald-400 font-mono text-xs font-semibold block">
                          Full-Stack Engineer
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Next.js + React (Top Right) */}
              <div className="absolute -top-3 -right-3 sm:-right-4 px-3.5 py-2 rounded-2xl bg-themeCard/90 border border-themeBorder shadow-xl backdrop-blur-md flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <div className="w-6 h-6 rounded-lg bg-black text-white flex items-center justify-center font-black text-[10px]">
                  N
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-bold text-themeText block leading-tight">Next.js &amp; React</span>
                  <span className="text-[9px] text-themeTextMuted block font-mono">Modern Frontend</span>
                </div>
              </div>

              {/* Floating Badge 2: Node.js & MongoDB (Bottom Left) */}
              <div className="absolute -bottom-3 -left-3 sm:-left-4 px-3.5 py-2 rounded-2xl bg-themeCard/90 border border-themeBorder shadow-xl backdrop-blur-md flex items-center gap-2 hover:scale-105 transition-all duration-300">
                <div className="w-6 h-6 rounded-lg bg-[#339933]/15 text-[#339933] flex items-center justify-center font-bold text-xs">
                  JS
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-bold text-themeText block leading-tight">Node &amp; MongoDB</span>
                  <span className="text-[9px] text-themeTextMuted block font-mono">Full-Stack Backend</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
