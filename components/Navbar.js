"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [active, setActive] = useState("#home");

  // navbar background scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ACTIVE SECTION (scroll spy)
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      sections.forEach((section, i) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(navLinks[i].href);
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen, showModal]);

  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1wVdSsXlzOlbM3FNlMGpkz8Djyvf1MyxB";

  const handleClick = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  const handleConfirmDownload = () => {
    setShowModal(false);
    window.open(resumeLink, "_blank");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-2 font-bold text-slate-900">
            <span className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold">
              BH
            </span>
            <span className="text-xl">
              Babul<span className="text-orange-600">.</span>
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-full border border-slate-200/60 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  active === link.href
                    ? "bg-orange-600 text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:babulhossan.info@gmail.com"
              className="hidden md:flex px-5 py-2 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold hover:scale-105 transition duration-300 text-sm shadow-sm"
            >
              Hire Me
            </a>

            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 text-sm font-medium text-slate-700 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
            >
              Resume
            </button>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        />

        {/* Drawer container */}
        <div
          className={`absolute top-20 left-4 right-4 rounded-2xl bg-white p-6 shadow-2xl border border-slate-200 transition-all duration-300 ${
            menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition ${
                  active === link.href
                    ? "text-orange-600 bg-orange-50"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:babulhossan.info@gmail.com"
              className="mt-4 px-4 py-3 rounded-xl text-sm font-semibold text-center text-white bg-orange-600 hover:bg-orange-700 transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          <div className="relative z-10 w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900">Download Resume</h2>

            <p className="mt-2 text-sm text-slate-500">
              Do you want to download my resume?
            </p>

            <div className="mt-5 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmDownload}
                className="px-4 py-2 text-sm font-semibold rounded-xl text-white bg-orange-600 hover:bg-orange-700 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}