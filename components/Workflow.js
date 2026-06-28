"use client";
import { useScrollReveal } from "./useScrollReveal";

const steps = [
  {
    num: "01",
    emoji: "🧠",
    title: "Research",
    desc: "Understand the problem deeply, analyze requirements, and identify user needs before starting any solution.",
    color: "#2563eb",
    glow: "rgba(37,99,235,0.05)"
  },
  {
    num: "02",
    emoji: "🏗️",
    title: "Architect",
    desc: "Plan system structure, database schema, components, and overall application architecture for scalability.",
    color: "#6366f1",
    glow: "rgba(99,102,241,0.05)"
  },
  {
    num: "03",
    emoji: "⚡",
    title: "Develop",
    desc: "Build clean, reusable, and scalable code using modern frameworks and best practices.",
    color: "#ea580c",
    glow: "rgba(234,88,12,0.05)"
  },
  {
    num: "04",
    emoji: "🚀",
    title: "Optimize",
    desc: "Improve performance, fix issues, and ensure the application is fast, stable, and production-ready.",
    color: "#f43f5e",
    glow: "rgba(244,63,94,0.05)"
  }
];

export default function Workflow() {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-[#f8fafc] border-y border-slate-200/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-4 rounded-full bg-blue-600" />
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest" style={{ letterSpacing: "0.12em" }}>
              Workflow
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-1">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-slate-500 text-sm mt-4 max-w-md mx-auto">
            A systematic approach refined from both laboratory science and software engineering.
          </p>
        </div>

        {/* Grid of Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden reveal"
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              {/* Step Number Background Indicator */}
              <div
                className="absolute -top-4 -right-2 text-7xl font-black opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
                style={{ color: step.color }}
              >
                {step.num}
              </div>

              {/* Hover Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 20% 20%, ${step.glow} 0%, transparent 60%)`
                }}
              />

              {/* Card Content */}
              <div className="relative z-10 flex flex-col gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border transition-all duration-300 shadow-sm"
                  style={{
                    background: `${step.color}10`,
                    borderColor: `${step.color}30`
                  }}
                >
                  {step.emoji}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: step.color }}>
                    Step {step.num}
                  </span>
                  <h3 className="text-slate-900 font-bold text-xl mt-1">{step.title}</h3>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                <div
                  className="h-px w-0 hover:w-full transition-all duration-500 rounded-full mt-2"
                  style={{
                    background: `linear-gradient(90deg, ${step.color}, transparent)`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
