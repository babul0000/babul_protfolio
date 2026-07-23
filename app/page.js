"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Workflow from "../components/Workflow";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SkeletonLoader from "../components/SkeletonLoader";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(true);

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

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => clearTimeout(timer);
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
    <main className="relative min-h-screen bg-themeBg overflow-hidden font-sans antialiased text-themeText transition-colors duration-300">
      {/* Dark background glowing meshes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-themeAccent/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[110px]" />
      </div>

      {/* Main Sections */}
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <Skills />
        <Workflow />
        <Projects />
        <Experience />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
