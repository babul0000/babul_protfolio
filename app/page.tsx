"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ecosystem from "../components/Ecosystem";
import BentoSpecialties from "../components/BentoSpecialties";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import GithubActivity from "../components/GithubActivity";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SkeletonLoader from "../components/SkeletonLoader";
import CommandPalette from "../components/CommandPalette";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  const [theme, setTheme] = useState<string>("dark");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPaletteOpen, setIsPaletteOpen] = useState<boolean>(false);

  useEffect(() => {
    // Determine initial theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }

    // Command palette custom event listener
    const handleOpenPalette = () => setIsPaletteOpen(true);
    window.addEventListener("open-command-palette", handleOpenPalette);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-command-palette", handleOpenPalette);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-black font-sans antialiased text-themeText selection:bg-emerald-500/20 selection:text-emerald-500">
      {/* Outer Framed Canvas with NasirChy style side border guidelines */}
      <div className="max-w-6xl mx-auto border-x border-zinc-200/80 dark:border-zinc-800/80 min-h-screen bg-white dark:bg-[#09090b] relative shadow-2xl">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          <Projects />
          <About />
          <Experience />
          <Skills />
          <Certificates />
          <GithubActivity />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Command Palette & Scroll to Top */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <ScrollToTop />
    </div>
  );
}
