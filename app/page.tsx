"use client";
import React from "react";
import {
  Preloader,
  Navbar,
  Hero,
  Description,
  RecentWork,
  FooterContact,
  useLenis,
} from "../components/dennis";

export default function Home() {
  // Initialize Lenis smooth inertia scrolling
  useLenis();

  return (
    <div className="relative min-h-screen w-full bg-[#f4f4f4] text-[#1C1D20] font-['Dennis_Sans',sans-serif] antialiased selection:bg-[#455CE9] selection:text-white overflow-x-hidden">
      
      {/* Dennis Snellenberg Greeting Preloader with Curved SVG Exit */}
      <Preloader />

      {/* Dennis Snellenberg Navigation & Floating Magnetic Hamburger */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="w-full">
        {/* Hero Section with Infinite Marquee, 3D Globe & Cutout Portrait */}
        <Hero />

        {/* Editorial Intro & Core Technical Pillars */}
        <Description />

        {/* Recent Work with GSAP Floating Mouse Cursor Preview & View Pill */}
        <RecentWork />
      </main>

      {/* Signature Curved Top Footer & Magnetic Contact Experience */}
      <FooterContact />
    </div>
  );
}
