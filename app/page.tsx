"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ecosystem from "../components/Ecosystem";
import Skills from "../components/Skills";
import Workflow from "../components/Workflow";
import Projects from "../components/Projects";
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
    // Determine initial theme
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

    // Custom event listener to open command palette from any button
    const handleOpenPalette = () => setIsPaletteOpen(true);
    window.addEventListener("open-command-palette", handleOpenPalette);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

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
    <main className="relative min-h-screen bg-themeBg overflow-hidden font-sans antialiased text-themeText">
      {/* Background glowing meshes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-themeAccent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[110px]" />
      </div>

      {/* Main Page Content */}
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <Ecosystem />
        <Skills />
        <Workflow />
        <Projects />
        <GithubActivity />
        <Experience />
        <Certificates />
        <About />
        <Contact />
        <Footer />
      </div>

      {/* Global Interactive Command Palette & Scroll to Top */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <ScrollToTop />
    </main>
  );
}
