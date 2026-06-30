"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Active section highlight
      const sections = navLinks.map(l => document.querySelector(l.href));
      const scrollPos = window.scrollY + 200;
      
      sections.forEach((sec, idx) => {
        if (sec) {
          const top = sec.offsetTop;
          const height = sec.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActive(navLinks[idx].href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href) => {
    setActive(href);
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConfirmDownload = () => {
    setShowModal(false);
    const resumeLink =
      "https://drive.google.com/uc?export=download&id=1wVdSsXlzOlbM3FNlMGpkz8Djyvf1MyxB";
    window.open(resumeLink, "_blank");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-gray-950/75 backdrop-blur-md border-b border-white/5"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-2 font-bold text-white tracking-tight">
            <span className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-600 text-white rounded-lg flex items-center justify-center font-black">
              BH
            </span>
            <span className="text-xl">
              Babul<span className="text-indigo-400">.</span>
            </span>
          </a>

          {/* DESKTOP NAV PILL */}
          <div className="hidden md:flex items-center gap-1.5 bg-slate-900/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  active === link.href
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/10"
                    : "text-gray-400 hover:text-white"
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
              className="hidden md:flex px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold tracking-wide transition duration-300 text-xs shadow-md shadow-indigo-500/10 hover:scale-[1.02]"
            >
              HIRE ME
            </a>

            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 text-xs font-bold text-gray-300 rounded-xl bg-slate-900/60 border border-white/5 hover:border-indigo-500/30 hover:text-white transition duration-300 shadow-sm"
            >
              RESUME
            </button>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-300 p-2 hover:bg-slate-900/60 rounded-lg border border-white/5 transition"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
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
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Drawer container */}
        <div
          className={`absolute top-24 left-4 right-4 rounded-2xl bg-gray-900/90 border border-white/10 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 ${
            menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                  active === link.href
                    ? "text-indigo-400 bg-indigo-500/10"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:babulhossan.info@gmail.com"
              className="mt-4 px-4 py-3 rounded-xl text-xs font-bold text-center text-white bg-gradient-to-r from-indigo-600 to-purple-600 transition"
            >
              HIRE ME
            </a>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <div className="relative z-10 w-[90%] max-w-sm rounded-3xl bg-gray-900 border border-white/10 p-6 shadow-2xl text-left">
            <h2 className="text-lg font-bold text-white">Download Resume</h2>
            <p className="mt-2 text-xs text-gray-400 leading-relaxed font-normal">
              Do you want to download my resume containing details of my transition and MERN stack certifications?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-xs font-bold rounded-xl text-gray-400 bg-slate-800 hover:bg-slate-700 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDownload}
                className="px-4 py-2 text-xs font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-md shadow-indigo-500/10"
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