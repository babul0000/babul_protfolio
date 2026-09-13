"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { projects } from "./projectsData";
import {
  Search,
  FolderGit2,
  Navigation,
  Sparkles,
  Sun,
  Moon,
  Download,
  Copy,
  Mail,
  Phone,
  ArrowRight,
  Award
} from "lucide-react";

interface PaletteItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  icon: React.ReactNode;
  badge?: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  theme: string;
  toggleTheme: () => void;
}

export default function CommandPalette({ isOpen, onClose, theme, toggleTheme }: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          window.dispatchEvent(new CustomEvent("open-command-palette"));
        }
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Build items list
  const allItems: PaletteItem[] = [
    // Navigation
    {
      id: "nav-home",
      title: "Home",
      subtitle: "Jump to hero introduction",
      category: "Navigation",
      icon: <Navigation className="w-4 h-4 text-themeAccent" />,
      action: () => {
        router.push("/#home");
        document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-skills",
      title: "Skills & Toolkit",
      subtitle: "Explore technologies & stack",
      category: "Navigation",
      icon: <Navigation className="w-4 h-4 text-themeAccent" />,
      action: () => {
        router.push("/#skills");
        document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-projects",
      title: "Featured Projects",
      subtitle: "View full-stack portfolio works",
      category: "Navigation",
      icon: <FolderGit2 className="w-4 h-4 text-themeAccent" />,
      action: () => {
        router.push("/#projects");
        document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-github",
      title: "GitHub Activity",
      subtitle: "View live commit contributions",
      category: "Navigation",
      icon: (
        <svg className="w-4 h-4 text-themeAccent" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      action: () => {
        router.push("/#github");
        document.querySelector("#github")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-experience",
      title: "Career Journey",
      subtitle: "Transition and timeline",
      category: "Navigation",
      icon: <Navigation className="w-4 h-4 text-themeAccent" />,
      action: () => {
        router.push("/#experience");
        document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-certificates",
      title: "Certificates & Achievements",
      subtitle: "View verified certifications",
      category: "Navigation",
      icon: <Award className="w-4 h-4 text-themeAccent" />,
      action: () => {
        router.push("/#certificates");
        document.querySelector("#certificates")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-estimator",
      title: "Project Cost & Timeline Estimator",
      subtitle: "Instant project scope & budget calculator",
      category: "Tools",
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
      action: () => {
        router.push("/#estimator");
        document.querySelector("#estimator")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-testimonials",
      title: "Recommendations & Peer Reviews",
      subtitle: "Verified endorsements & feedback",
      category: "Navigation",
      icon: <Award className="w-4 h-4 text-themeAccent" />,
      action: () => {
        router.push("/#testimonials");
        document.querySelector("#testimonials")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "action-recruiter-snapshot",
      title: "Recruiter & Hiring Fast-Track",
      subtitle: "30-second executive summary & candidate highlights",
      category: "Quick Actions",
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.dispatchEvent(new CustomEvent("open-recruiter-snapshot"));
      }
    },
    {
      id: "action-terminal",
      title: "Open Developer Terminal",
      subtitle: "Interactive UNIX CLI console (>_)",
      category: "Quick Actions",
      icon: <span className="font-mono font-bold text-emerald-400 text-xs">&gt;_</span>,
      action: () => {
        window.dispatchEvent(new CustomEvent("open-terminal"));
      }
    },
    {
      id: "action-book-call",
      title: "Schedule a 1-on-1 Meeting",
      subtitle: "Book a 15-30 min discovery call with Babul",
      category: "Quick Actions",
      icon: <Mail className="w-4 h-4 text-themeAccent" />,
      action: () => {
        window.dispatchEvent(new CustomEvent("open-booking-modal"));
      }
    },
    {
      id: "nav-contact",
      title: "Contact",
      subtitle: "Send a message or hire me",
      category: "Navigation",
      icon: <Mail className="w-4 h-4 text-themeAccent" />,
      action: () => {
        router.push("/#contact");
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      }
    },

    // Projects (Case Studies & Live Demos)
    ...projects.map((p) => ({
      id: `proj-${p.id}`,
      title: p.name,
      subtitle: `Case Study: ${p.tagline}`,
      category: "Projects",
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
      badge: p.tech.slice(0, 2).join(", "),
      action: () => {
        router.push(`/project/${p.id}`);
      }
    })),

    // Quick Actions
    {
      id: "action-theme",
      title: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
      subtitle: "Toggle application visual appearance",
      category: "Quick Actions",
      icon: theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />,
      action: () => {
        toggleTheme();
        toast.success(`Switched to ${theme === "dark" ? "Light" : "Dark"} mode`);
      }
    },
    {
      id: "action-resume",
      title: "Download Resume",
      subtitle: "Get latest PDF resume",
      category: "Quick Actions",
      icon: <Download className="w-4 h-4 text-emerald-500" />,
      action: () => {
        window.open("/resume.pdf", "_blank");
        toast.success("Opening resume in new tab");
      }
    },
    {
      id: "action-copy-email",
      title: "Copy Email Address",
      subtitle: "babulhossan.info@gmail.com",
      category: "Quick Actions",
      icon: <Copy className="w-4 h-4 text-cyan-500" />,
      action: () => {
        navigator.clipboard.writeText("babulhossan.info@gmail.com");
        toast.success("Email copied to clipboard!");
      }
    },
    {
      id: "action-copy-phone",
      title: "Copy Phone Number",
      subtitle: "+880 1952-860053",
      category: "Quick Actions",
      icon: <Phone className="w-4 h-4 text-green-500" />,
      action: () => {
        navigator.clipboard.writeText("+8801952860053");
        toast.success("Phone number copied to clipboard!");
      }
    },
    {
      id: "action-github",
      title: "Open GitHub Profile",
      subtitle: "github.com/babul0000",
      category: "Social & Links",
      icon: (
        <svg className="w-4 h-4 text-themeText" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
      action: () => {
        window.open("https://github.com/babul0000", "_blank");
      }
    },
    {
      id: "action-linkedin",
      title: "Open LinkedIn Profile",
      subtitle: "linkedin.com/in/babul-hossan-09932837a",
      category: "Social & Links",
      icon: (
        <svg className="w-4 h-4 text-[#0a66c2]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      action: () => {
        window.open("https://www.linkedin.com/in/babul-hossan-09932837a/", "_blank");
      }
    }
  ];

  // Filter items based on user query
  const filteredItems = allItems.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.badge && item.badge.toLowerCase().includes(q))
    );
  });

  // Handle keyboard list navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredItems.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const selected = filteredItems[selectedIndex];
      if (selected) {
        selected.action();
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Palette Container */}
      <div
        className="relative w-full max-w-2xl bg-themeCard/95 border border-themeBorder/90 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl z-10 transition-all transform animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-themeBorder bg-themeCard/60">
          <Search className="w-5 h-5 text-themeAccent shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a command, project, or section... (e.g. Projects, Theme, Email)"
            className="w-full bg-transparent text-sm md:text-base text-themeText placeholder-themeTextMuted outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[10px] font-bold text-themeTextMuted hover:text-themeText px-2 py-1 rounded-md bg-themeBg border border-themeBorder"
            >
              CLEAR
            </button>
          )}
          <span className="hidden sm:inline-flex text-[10px] font-mono font-bold text-themeTextMuted px-2 py-1 rounded-lg bg-themeBg border border-themeBorder">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div ref={listRef} className="max-h-[60vh] overflow-y-auto p-3 space-y-1.5 scrollbar-thin">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-themeTextMuted space-y-2">
              <Search className="w-8 h-8 mx-auto opacity-40" />
              <p className="text-sm font-semibold">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs">Try searching for &quot;Projects&quot;, &quot;Resume&quot;, &quot;Skills&quot;, or &quot;Theme&quot;</p>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? "bg-themeAccent/15 border border-themeAccent/40 shadow-sm text-themeText"
                      : "hover:bg-themeCardHover/60 border border-transparent text-themeTextSecondary"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-colors shrink-0 ${
                        isSelected
                          ? "bg-themeAccent text-white border-themeAccent"
                          : "bg-themeBg border-themeBorder text-themeTextMuted"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold truncate ${isSelected ? "text-themeAccent font-black" : "text-themeText"}`}>
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-themeBg border border-themeBorder text-themeTextMuted font-semibold shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-themeTextMuted truncate mt-0.5 font-normal">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-themeTextMuted hidden md:inline-block">
                      {item.category}
                    </span>
                    {isSelected ? (
                      <ArrowRight className="w-4 h-4 text-themeAccent animate-pulse" />
                    ) : (
                      <div className="w-4 h-4" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info & keyboard tips */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-themeBorder bg-themeCard/90 text-[11px] text-themeTextMuted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-themeBg border border-themeBorder text-[10px] font-mono">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-themeBg border border-themeBorder text-[10px] font-mono">↓</kbd> to navigate
            </span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-themeBg border border-themeBorder text-[10px] font-mono">↵</kbd> to select
            </span>
          </div>
          <span className="text-[10px] font-bold text-themeAccent uppercase tracking-widest">
            Babul Hossan
          </span>
        </div>
      </div>
    </div>
  );
}
