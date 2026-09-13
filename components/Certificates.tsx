"use client";
import React from "react";
import { Award, CheckCircle2, ExternalLink, BookOpen, GraduationCap } from "lucide-react";

export default function Certificates() {
  const credentials = [
    {
      title: "Complete Web Development (MERN Stack)",
      issuer: "Programming Hero",
      status: "Verified Completion",
      date: "2024",
      desc: "Intensive 6-month full-stack development program covering React.js, Next.js, Node.js, Express.js, MongoDB, REST APIs, Tailwind CSS, and full-stack software lifecycle.",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase", "REST APIs"],
      verified: true,
      badgeColor: "#10b981"
    },
    {
      title: "PostgreSQL & Prisma ORM Relational Engineering",
      issuer: "Active Practical Specialization",
      status: "Active Project Practice",
      date: "2024 — Present",
      desc: "Hands-on implementation of relational database schemas, complex SQL queries, type-safe migrations, relational modeling, and full-stack integration with TypeScript.",
      skills: ["PostgreSQL", "Prisma ORM", "Relational Modeling", "Type Safety", "SQL Queries"],
      verified: true,
      badgeColor: "#6366f1"
    }
  ];

  return (
    <section id="certificates" className="py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold uppercase mb-2">
            CREDENTIALS & TRAINING
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-themeText tracking-tight">
            Verified Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-themeTextSecondary max-w-2xl">
            Formal technical education, MERN stack accreditation, and database specialization.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="bento-crosshair p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {cred.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-themeText mb-1">
                  {cred.title}
                </h3>
                <div className="text-xs font-mono text-themeTextMuted mb-3">
                  {cred.issuer} • {cred.date}
                </div>
                <p className="text-sm text-themeTextSecondary leading-relaxed mb-6">
                  {cred.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-800">
                  {cred.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-themeTextSecondary font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
