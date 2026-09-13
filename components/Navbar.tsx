"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Moon, Search, FileText } from "lucide-react";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <nav className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 flex w-fit justify-center text-sm">
      <div className="overflow-hidden rounded-full border border-gray-200/90 dark:border-zinc-800 bg-white/85 dark:bg-zinc-950/85 shadow-md backdrop-blur-md px-4 py-2 sm:py-2.5 flex items-center gap-4 sm:gap-6 transition-all duration-300">
        
        {/* Brand Link with Avatar */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-medium text-nowrap text-zinc-900 dark:text-white group"
        >
          <div className="relative w-6 h-6 rounded-full overflow-hidden ring-1 ring-zinc-300 dark:ring-zinc-700 shadow-sm shrink-0">
            <Image
              src="/my.webp"
              alt="Babul Hossan"
              width={24}
              height={24}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform"
            />
          </div>
          <span className="text-sm font-semibold tracking-tight">
            Babul Hossan <span className="text-emerald-500 font-mono">/&gt;</span>
          </span>
        </Link>

        {/* Center Nav Links */}
        <ul className="flex items-center gap-2 sm:gap-4 font-medium text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
          <li>
            <a
              href="#projects"
              className="px-2.5 py-1 rounded-full hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="px-2.5 py-1 rounded-full hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/Babul_Hossan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Babul_Hossan_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 font-semibold text-xs transition-all shadow-xs hover:scale-105 active:scale-95"
              title="Download Babul Hossan's Resume (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-500" />
              <span>Resume</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="rounded-full border border-gray-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-900 dark:text-white shadow-xs duration-300 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right Controls: Quick Search & Theme Switch */}
        <div className="flex items-center gap-1.5 pl-1 border-l border-zinc-200 dark:border-zinc-800">
          <button
            onClick={openPalette}
            className="p-1.5 rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            title="Search (⌘K)"
            aria-label="Open command search"
          >
            <Search className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-zinc-700" />
            )}
          </button>
        </div>

      </div>
    </nav>
  );
}
