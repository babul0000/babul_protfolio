"use client";
import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const skillGroups = [
  {
    category: "Frontend",
    icon: "💻",
    skills: [
      { name: "JavaScript", icon: "🟨" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML5 & CSS3", icon: "🌐" }
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "REST APIs", icon: "🔗" }
    ]
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "Mongoose", icon: "🐍" }
    ]
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: "📦" },
      { name: "GitHub", icon: "🐙" },
      { name: "Vercel", icon: "▲" },
      { name: "Netlify", icon: "🌐" },
      { name: "Figma", icon: "🎯" }
    ]
  }
];

export default function Skills() {
  const ref = useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState("Frontend");

  // Get active skills
  const activeGroup = skillGroups.find(
    (group) => group.category === selectedCategory
  );

  return (
    <section id="skills" className="section-padding bg-slate-50 border-b border-slate-200/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 rounded-full bg-orange-600" />
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
              Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            My <span className="gradient-text">Skills</span> &amp; Toolkit
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto font-normal">
            A filtered overview of the technologies and frameworks I use to build scalable web applications.
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 reveal" style={{ transitionDelay: "0.1s" }}>
          {skillGroups.map((group) => (
            <button
              key={group.category}
              onClick={() => setSelectedCategory(group.category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm flex items-center gap-2 ${
                selectedCategory === group.category
                  ? "bg-orange-600 text-white"
                  : "bg-white border border-slate-200 hover:border-orange-500/20 text-slate-600 hover:text-orange-600"
              }`}
            >
              <span>{group.icon}</span>
              {group.category}
            </button>
          ))}
        </div>

        {/* Active Skills Grid */}
        <div className="max-w-3xl mx-auto reveal" style={{ transitionDelay: "0.2s" }}>
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="p-1.5 bg-orange-50 border border-orange-100 rounded-lg text-sm shrink-0">
                {activeGroup?.icon}
              </span>
              {activeGroup?.category} Technologies
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {activeGroup?.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 bg-slate-50/50 border border-slate-200/60 hover:border-orange-500/20 rounded-2xl flex items-center gap-3 transition-colors shadow-sm"
                >
                  <span className="text-xl shrink-0">{skill.icon}</span>
                  <span className="text-xs font-bold text-slate-700">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
