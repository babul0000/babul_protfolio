"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Moon, Search, FileText, Menu, X } from "lucide-react";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

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

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-4xl pointer-events-auto">
        <nav className="floating-navbar rounded-full px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-300 flex items-center justify-between shadow-lg">
          {/* Brand with Avatar */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group pr-2"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1.5 ring-emerald-500/60 shadow-sm shrink-0">
              <Image
                src="/my.webp"
                alt="Babul Hossan"
                width={32}
                height={32}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-themeText flex items-center gap-1.5">
                Babul Hossan
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </span>
              <span className="text-[10px] text-themeTextMuted font-mono leading-none hidden sm:inline">
                Full Stack MERN
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 text-xs font-medium text-themeTextSecondary">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-full hover:text-themeText hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Controls: Search, Resume, Theme & Mobile Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Quick Search Palette Trigger */}
            <button
              onClick={openPalette}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs text-themeTextMuted bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 hover:text-themeText hover:border-emerald-500/50 transition-all cursor-pointer"
              title="Quick Search (Ctrl + K)"
              aria-label="Open search command palette"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-[11px] font-mono">⌘K</span>
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-themeText bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 hover:border-emerald-500/60 hover:text-emerald-500 transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-500" />
              <span>Resume</span>
            </a>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-full flex items-center justify-center text-themeTextSecondary hover:text-themeText bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 transition-colors cursor-pointer"
              aria-label="Toggle theme mode"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-zinc-700" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-themeText bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-3 rounded-2xl floating-navbar shadow-xl flex flex-col gap-1 text-sm font-medium animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl text-themeTextSecondary hover:text-themeText hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-themeBorder flex items-center justify-between px-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-emerald-500"
              >
                <FileText className="w-3.5 h-3.5" />
                Download Resume PDF
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
