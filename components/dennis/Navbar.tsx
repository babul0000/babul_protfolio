"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";
import OffcanvasMenu from "./OffcanvasMenu";
import { personalInfo } from "./data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Check if current page has light background (e.g. /work, /about)
  const isLightPage = pathname === "/work" || pathname === "/about";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();

    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowHamburger(true);
      } else {
        setShowHamburger(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Main Navbar Bar */}
      <header
        className={`absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 sm:px-12 md:px-16 py-6 sm:py-8 select-none ${
          isLightPage ? "text-[#1C1D20]" : "text-white"
        }`}
      >
        {/* Brand Credit */}
        <Magnetic strength={0.25}>
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm sm:text-base md:text-lg tracking-tight hover:opacity-80 transition-opacity"
          >
            <span
              className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                isLightPage ? "border-[#1C1D20]/40 text-[#1C1D20]" : "border-white/40 text-white"
              }`}
            >
              ©
            </span>
            <span className="flex items-center gap-1 font-['Dennis_Sans',sans-serif]">
              <span className={isLightPage ? "text-[#1C1D20]/65" : "text-white/70"}>Code by</span>
              <span className={`font-medium ${isLightPage ? "text-[#1C1D20]" : "text-white"}`}>
                {personalInfo.brandName}
              </span>
            </span>
          </Link>
        </Magnetic>

        {/* Desktop-Only Nav Links (Dennis Snellenberg hides these on mobile in favor of the persistent hamburger) */}
        <nav className="hidden md:flex items-center gap-2 sm:gap-4">
          <Magnetic strength={0.2}>
            <Link
              href="/work"
              className={`relative px-4 py-2 text-sm sm:text-base font-['Dennis_Sans',sans-serif] transition-colors ${
                pathname === "/work"
                  ? "font-medium opacity-100"
                  : isLightPage
                  ? "text-[#1C1D20]/80 hover:text-[#1C1D20]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Work
              {pathname === "/work" && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current" />
              )}
            </Link>
          </Magnetic>

          <Magnetic strength={0.2}>
            <Link
              href="/about"
              className={`relative px-4 py-2 text-sm sm:text-base font-['Dennis_Sans',sans-serif] transition-colors ${
                pathname === "/about"
                  ? "font-medium opacity-100"
                  : isLightPage
                  ? "text-[#1C1D20]/80 hover:text-[#1C1D20]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              About
              {pathname === "/about" && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current" />
              )}
            </Link>
          </Magnetic>

          <Magnetic strength={0.2}>
            <Link
              href="/contact"
              className={`relative px-4 py-2 text-sm sm:text-base font-['Dennis_Sans',sans-serif] transition-colors ${
                pathname === "/contact"
                  ? "font-medium opacity-100"
                  : isLightPage
                  ? "text-[#1C1D20]/80 hover:text-[#1C1D20]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Contact
              {pathname === "/contact" && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current" />
              )}
            </Link>
          </Magnetic>
        </nav>
      </header>

      {/* Floating Magnetic Hamburger Button (Dennis Signature: Always on Mobile, Scroll-activated on Desktop) */}
      <AnimatePresence>
        {(isMobile || showHamburger || isMenuOpen) && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-5 right-5 sm:top-8 sm:right-10 z-[100]"
          >
            <Magnetic strength={0.35}>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center gap-1.5 transition-colors duration-300 shadow-2xl cursor-pointer ${
                  isMenuOpen
                    ? "bg-white text-[#1C1D20]"
                    : "bg-[#1C1D20] text-white border border-white/10"
                }`}
              >
                <span
                  className={`w-5 sm:w-6 md:w-7 h-[2px] transition-all duration-300 ${
                    isMenuOpen ? "bg-[#1C1D20] rotate-45 translate-y-[3.5px] sm:translate-y-[4px]" : "bg-white"
                  }`}
                />
                <span
                  className={`w-5 sm:w-6 md:w-7 h-[2px] transition-all duration-300 ${
                    isMenuOpen ? "bg-[#1C1D20] -rotate-45 -translate-y-[3.5px] sm:-translate-y-[4px]" : "bg-white"
                  }`}
                />
              </button>
            </Magnetic>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide-out Curved Drawer */}
      <OffcanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
