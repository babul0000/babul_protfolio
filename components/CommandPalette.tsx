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
  Award,
  Layers,
  GraduationCap
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

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

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

  const allItems: PaletteItem[] = [
    // Navigation
    {
      id: "nav-home",
      title: "Hero & Introduction",
      subtitle: "Jump to top introduction & developer bio",
      category: "Navigation",
      icon: <Navigation className="w-4 h-4 text-emerald-500" />,
      action: () => {
        router.push("/#home");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    {
      id: "nav-specialties",
      title: "Engineering Specialties",
      subtitle: "Frontend architecture, APIs & database design",
      category: "Navigation",
      icon: <Layers className="w-4 h-4 text-emerald-500" />,
      action: () => {
        router.push("/#specialties");
        document.querySelector("#specialties")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-projects",
      title: "Featured Projects",
      subtitle: "View production web applications & case studies",
      category: "Navigation",
      icon: <FolderGit2 className="w-4 h-4 text-emerald-500" />,
      action: () => {
        router.push("/#projects");
        document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-skills",
      title: "Skills & Toolkit",
      subtitle: "Explore MERN, TypeScript, PostgreSQL & Prisma",
      category: "Navigation",
      icon: <Navigation className="w-4 h-4 text-emerald-500" />,
      action: () => {
        router.push("/#skills");
        document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-experience",
      title: "Career & Experience",
      subtitle: "Technical background and track record",
      category: "Navigation",
      icon: <Navigation className="w-4 h-4 text-emerald-500" />,
      action: () => {
        router.push("/#experience");
        document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-certificates",
      title: "Certifications & Credentials",
      subtitle: "Verified Programming Hero MERN certificate",
      category: "Navigation",
      icon: <GraduationCap className="w-4 h-4 text-emerald-500" />,
      action: () => {
        router.push("/#certificates");
        document.querySelector("#certificates")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-about",
      title: "About Babul",
      subtitle: "Background story, philosophy & values",
      category: "Navigation",
      icon: <Navigation className="w-4 h-4 text-emerald-500" />,
      action: () => {
        router.push("/#about");
        document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "nav-contact",
      title: "Contact",
      subtitle: "Direct email, WhatsApp and inquiry form",
      category: "Navigation",
      icon: <Mail className="w-4 h-4 text-emerald-500" />,
      action: () => {
        router.push("/#contact");
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
      }
    },

    // Projects (Case Studies)
    ...projects.map((p) => ({
      id: `proj-${p.id}`,
      title: p.name,
      subtitle: `Case Study: ${p.tagline}`,
      category: "Projects",
      icon: <Sparkles className="w-4 h-4 text-emerald-500" />,
      badge: p.tech.slice(0, 2).join(", "),
      action: () => {
        router.push(`/project/${p.id}`);
      }
    })),

    // Quick Actions
    {
      id: "action-theme",
      title: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
      subtitle: "Toggle color theme appearance",
      category: "Quick Actions",
      icon: theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />,
      action: () => {
        toggleTheme();
        toast.success(`Switched to ${theme === "dark" ? "Light" : "Dark"} mode`);
      }
    },
    {
      id: "action-resume",
      title: "Download Resume",
      subtitle: "Get latest PDF resume document",
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
      subtitle: "babulhossan.dev@gmail.com",
      category: "Quick Actions",
      icon: <Copy className="w-4 h-4 text-emerald-500" />,
      action: () => {
        navigator.clipboard.writeText("babulhossan.dev@gmail.com");
        toast.success("Email copied to clipboard!");
      }
    },
    {
      id: "action-github",
      title: "Open GitHub Profile",
      subtitle: "github.com/babul0000",
      category: "Social & Links",
      icon: <Navigation className="w-4 h-4 text-themeText" />,
      action: () => {
        window.open("https://github.com/babul0000", "_blank");
      }
    },
    {
      id: "action-linkedin",
      title: "Open LinkedIn Profile",
      subtitle: "linkedin.com/in/babul-hossan-09932837a",
      category: "Social & Links",
      icon: <Navigation className="w-4 h-4 text-[#0a66c2]" />,
      action: () => {
        window.open("https://www.linkedin.com/in/babul-hossan-09932837a/", "_blank");
      }
    }
  ];

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
        className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
          <Search className="w-5 h-5 text-emerald-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search sections or projects... (e.g. Projects, Skills, Resume)"
            className="w-full bg-transparent text-sm md:text-base text-themeText placeholder-themeTextMuted outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-[10px] font-mono text-themeTextMuted hover:text-themeText px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
            >
              CLEAR
            </button>
          )}
          <span className="hidden sm:inline-flex text-[10px] font-mono text-themeTextMuted px-2 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            ESC
          </span>
        </div>

        {/* Results List */}
        <div ref={listRef} className="max-h-[55vh] overflow-y-auto p-3 space-y-1">
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
                      ? "bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-themeText"
                      : "hover:bg-zinc-100 dark:hover:bg-zinc-800/60 border border-transparent text-themeTextSecondary"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center border transition-colors shrink-0 ${
                        isSelected
                          ? "bg-emerald-500 text-white border-emerald-500"
                          : "bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-themeTextMuted"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold truncate ${isSelected ? "text-emerald-600 dark:text-emerald-400 font-bold" : "text-themeText"}`}>
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-themeTextMuted shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-themeTextMuted truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-[9px] font-mono uppercase text-themeTextMuted hidden md:inline-block">
                      {item.category}
                    </span>
                    {isSelected ? (
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <div className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info & keyboard tips */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80 text-[11px] text-themeTextMuted font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px]">↓</kbd> to navigate
            </span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px]">↵</kbd> to select
            </span>
          </div>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
            Babul Hossan
          </span>
        </div>
      </div>
    </div>
  );
}
