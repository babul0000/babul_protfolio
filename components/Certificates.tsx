"use client";
import React from "react";
import { useScrollReveal } from "./useScrollReveal";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  desc: string;
  skills: string[];
  badge: string;
  color: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    id: "ph-mern",
    title: "Complete Web Development (MERN Stack)",
    issuer: "Programming Hero",
    year: "2025",
    desc: "Comprehensive training covering full-stack web engineering: React, Next.js, Node.js, Express.js, MongoDB, TypeScript, REST APIs, and Secure Authentication.",
    skills: ["Next.js", "React.js", "Node.js", "MongoDB", "Express.js", "TypeScript"],
    badge: "Verified Credential",
    color: "#10b981",
    link: "https://programming-hero.com"
  },
  {
    id: "tech-ops",
    title: "Technical Operations & Process Optimization",
    issuer: "Industrial & Manufacturing Operations",
    year: "2018 — Present",
    desc: "Analytical troubleshooting, precision quality control, and cross-functional technical management under demanding client production deadlines.",
    skills: ["Quality Control", "Technical Troubleshooting", "Root Cause Analysis", "Project Delivery"],
    badge: "Professional Experience",
    color: "#38bdf8",
    link: "#experience"
  },
  {
    id: "js-mastery",
    title: "Modern JavaScript & Full-Stack Architecture",
    issuer: "Self-Directed & Project Mastery",
    year: "2024 — Present",
    desc: "Deep dive into ES6+, asynchronous JavaScript, RESTful architectural design patterns, database indexing, and responsive UI engineering.",
    skills: ["JavaScript ES6+", "REST APIs", "Tailwind CSS", "Clean Code Architecture"],
    badge: "Continuous Learning",
    color: "#a855f7",
    link: "https://github.com/babul0000"
  }
];

export default function Certificates() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="certificates" className="section-padding bg-themeBg border-b border-themeBorder relative font-sans antialiased text-themeText" ref={ref}>
      
      {/* Ambient background glow */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-themeAccent/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 rounded-full bg-themeAccent" />
            <span className="text-xs font-bold text-themeAccent uppercase tracking-widest">
              Achievements
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-themeText mt-1 uppercase tracking-tight">
            Certifications &amp; <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-themeTextMuted text-sm mt-3 max-w-md mx-auto font-normal">
            Verified qualifications and recognized expertise demonstrating rigorous technical competencies.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={cert.id}
              className="bg-themeCard rounded-3xl border border-themeBorder p-6 md:p-7 flex flex-col justify-between hover:border-themeAccent/30 hover:shadow-lg transition-all duration-300 group reveal relative overflow-hidden"
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              {/* Top ambient highlight on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: cert.color }}
              />

              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[9px] font-mono font-bold px-2.5 py-1 bg-themeAccent/10 text-themeAccent border border-themeAccent/20 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-themeAccent" />
                    {cert.badge}
                  </span>
                  <span className="text-xs font-bold text-themeTextMuted">
                    {cert.year}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="text-base font-bold text-themeText group-hover:text-themeAccent transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-bold text-themeTextMuted mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-themeTextMuted leading-relaxed font-normal">
                  {cert.desc}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-themeCardHover border border-themeBorder text-themeTextMuted font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-4 border-t border-themeBorder flex items-center justify-between">
                <a
                  href={cert.link}
                  target={cert.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-themeTextSecondary hover:text-themeAccent inline-flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                >
                  <span>Verify / Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Award className="w-5 h-5 text-themeTextMuted group-hover:text-themeAccent transition-colors" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
