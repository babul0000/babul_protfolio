"use client";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Awards", href: "#certificates" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [active, setActive] = useState<string>("#home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section highlight
      const sections = navLinks.map(l => document.querySelector(l.href) as HTMLElement | null);
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

  const handleClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  const handleConfirmDownload = () => {
    setShowModal(false);
    const resumeLink = "/resume.pdf";
    window.open(resumeLink, "_blank");
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "py-3 bg-themeBg/85 backdrop-blur-md border-b border-themeBorder shadow-sm"
            : "py-5 bg-transparent"
          }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-1 group select-none relative py-1">
            <span className="signature-logo text-3xl font-bold tracking-wide text-themeText group-hover:text-themeAccent transition-colors duration-300 transform group-hover:rotate-[-2deg] inline-block">
              Babul
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-themeAccent group-hover:bg-emerald-400 transition-colors self-end mb-2"></span>
          </a>

          {/* DESKTOP NAV PILL */}
          <div className="hidden md:flex items-center gap-1 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-themeBorder shadow-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${active === link.href
                    ? "bg-themeAccent text-themeAccentText shadow-md shadow-themeAccent/10 font-bold"
                    : "text-themeTextSecondary hover:text-themeText"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-2.5">
            {/* Quick Search Button */}
            <button
              onClick={handleOpenCommandPalette}
              className="p-2.5 text-themeTextSecondary hover:text-themeAccent bg-white/60 dark:bg-slate-900/60 border border-themeBorder hover:border-themeAccent/30 rounded-xl transition duration-300 shadow-sm flex items-center justify-center group"
              aria-label="Open Command Search (Ctrl+K)"
              title="Search (Ctrl+K)"
            >
              <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2.5 text-themeTextSecondary hover:text-themeAccent bg-white/60 dark:bg-slate-900/60 border border-themeBorder hover:border-themeAccent/30 rounded-xl transition duration-300 shadow-sm flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <a
              href="mailto:babulhossan.info@gmail.com"
              className="hidden md:flex px-4 py-2.5 rounded-full bg-themeAccent hover:bg-themeAccentHover text-themeAccentText font-bold tracking-wide transition duration-300 text-xs shadow-md shadow-themeAccent/10 hover:scale-[1.02]"
            >
              HIRE ME
            </a>

            <button
              onClick={() => setShowModal(true)}
              className="px-3.5 py-2 text-xs font-bold text-themeTextSecondary rounded-xl bg-white/60 dark:bg-slate-900/60 border border-themeBorder hover:border-themeAccent/30 hover:text-themeText transition duration-300 shadow-sm uppercase"
            >
              RESUME
            </button>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-themeTextSecondary p-2 hover:bg-themeCard/60 rounded-lg border border-themeBorder transition"
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
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        />

        {/* Drawer container */}
        <div
          className={`absolute top-24 left-4 right-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 border border-themeBorder p-6 shadow-2xl backdrop-blur-md transition-all duration-300 ${menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
        >
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setMenuOpen(false);
                handleOpenCommandPalette();
              }}
              className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-left bg-themeCard border border-themeBorder text-themeAccent flex items-center justify-between"
            >
              <span>Search &amp; Commands</span>
              <kbd className="px-2 py-0.5 rounded bg-themeBg border border-themeBorder text-[10px] font-mono">
                Ctrl+K
              </kbd>
            </button>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition ${active === link.href
                    ? "text-themeAccent bg-themeAccent/10 font-black"
                    : "text-themeTextSecondary hover:text-themeText"
                  }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:babulhossan.info@gmail.com"
              className="mt-4 px-4 py-3 rounded-xl text-xs font-bold text-center text-themeAccentText bg-themeAccent hover:bg-themeAccentHover transition"
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
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <div className="relative z-10 w-[90%] max-w-sm rounded-3xl bg-themeCard border border-themeBorder p-6 shadow-2xl text-left">
            <h2 className="text-lg font-bold text-themeText">Download Resume</h2>
            <p className="mt-2 text-xs text-themeTextMuted leading-relaxed font-normal">
              Do you want to download my resume containing details of my transition and MERN stack certifications?
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-xs font-bold rounded-xl text-themeTextMuted bg-themeBg hover:bg-themeCardHover transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDownload}
                className="px-4 py-2 text-xs font-bold rounded-xl text-themeAccentText bg-themeAccent hover:bg-themeAccentHover transition shadow-md shadow-themeAccent/10"
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
