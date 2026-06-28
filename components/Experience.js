"use client";
import { useScrollReveal } from "./useScrollReveal";

const experiences = [
  {
    role: "Mern Stack Developer (Programming Hero Level 1 + Self Learning)",
    company: "Programming Hero & Personal Projects",
    period: "2025 — Present",
    desc: "Currently learning full stack web development through Programming Hero Level 1 course while building real-world projects. Working with frontend and backend technologies including React, Next.js, Node.js, Express.js, and MongoDB. Focused on UI/UX, API development, authentication, and performance optimization.",
    skills: ["JavaScript", "React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    color: "#2563eb",
    glow: "rgba(37,99,235,0.15)"
  },
  {
    role: "Sample Technician",
    company: "Buying House (Garments Industry)",
    period: "2018 — Present",
    desc: "8 years of experience in the garments industry, including 5 years in production units and 3 years in a buying house. Currently handling sample development, quality control, and coordination between buyers and production teams. Strong focus on meeting buyer requirements, ensuring product quality, and maintaining smooth workflow communication.",
    skills: [
      "Communication",
      "Buyer Requirement Analysis",
      "Problem Solving",
      "Attention to Detail",
      "Workflow Management",
      "Understanding Requirements"
    ],
    color: "#16a34a",
    glow: "rgba(22,163,74,0.15)"
  }
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-4 rounded-full bg-blue-600" />
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest" style={{ letterSpacing: "0.12em" }}>
              Career Path
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            My <span className="gradient-text">Experience</span>
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-200/80 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-8 reveal"
              style={{ transitionDelay: `${0.15 * (idx + 1)}s` }}
            >
              {/* Bullet node on timeline */}
              <div
                className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full border-4 border-white z-10"
                style={{
                  backgroundColor: exp.color,
                  width: "18px",
                  height: "18px",
                  boxShadow: `0 0 0 4px ${exp.glow}`
                }}
              />

              {/* Experience Card */}
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg md:text-xl leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className="inline-block px-3 py-1.5 rounded-full text-xs font-mono font-medium self-start md:self-center"
                    style={{
                      backgroundColor: `${exp.color}10`,
                      color: exp.color,
                      border: `1px solid ${exp.color}20`
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {exp.desc}
                </p>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full border border-slate-200/60 bg-slate-50 text-slate-600"
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
