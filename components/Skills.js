"use client";
import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const skillGroups = [
  {
    category: "Frontend",
    icon: "💻",
    skills: [
      { name: "JavaScript", icon: "🟨", level: "Advanced" },
      { name: "React", icon: "⚛️", level: "Advanced" },
      { name: "Next.js", icon: "▲", level: "Intermediate" },
      { name: "Tailwind CSS", icon: "🎨", level: "Advanced" },
      { name: "HTML5 & CSS3", icon: "🌐", level: "Advanced" }
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "🟢", level: "Intermediate" },
      { name: "Express.js", icon: "🚀", level: "Intermediate" },
      { name: "REST APIs", icon: "🔗", level: "Advanced" }
    ]
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", icon: "🍃", level: "Intermediate" },
      { name: "Mongoose", icon: "🐍", level: "Intermediate" }
    ]
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: "📦", level: "Advanced" },
      { name: "GitHub", icon: "🐙", level: "Advanced" },
      { name: "Vercel", icon: "▲", level: "Advanced" },
      { name: "Netlify", icon: "🌐", level: "Advanced" },
      { name: "Figma", icon: "🎯", level: "Intermediate" }
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
    <section id="skills" className="section-padding bg-[#090d16] border-b border-white/5 relative" ref={ref}>
      
      {/* Background glow orb */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 rounded-full bg-indigo-500" />
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
              Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight">
            My <span className="gradient-text">Skills</span> &amp; Toolkit
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto font-normal">
            A filtered overview of the technologies and frameworks I use to build scalable web applications.
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 reveal" style={{ transitionDelay: "0.1s" }}>
          {skillGroups.map((group) => (
            <button
              key={group.category}
              onClick={() => setSelectedCategory(group.category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm flex items-center gap-2 uppercase tracking-wider ${
                selectedCategory === group.category
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                  : "bg-slate-900/60 border border-white/5 hover:border-indigo-500/30 text-gray-400 hover:text-white"
              }`}
            >
              <span>{group.icon}</span>
              {group.category}
            </button>
          ))}
        </div>

        {/* Active Skills Grid */}
        <div className="max-w-3xl mx-auto reveal" style={{ transitionDelay: "0.2s" }}>
          <div className="bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-wider">
              <span className="p-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-sm shrink-0">
                {activeGroup?.icon}
              </span>
              {activeGroup?.category} Technologies
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeGroup?.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 bg-slate-950/40 border border-white/5 hover:border-indigo-500/20 rounded-2xl flex items-center justify-between gap-3 transition-all duration-300 group hover:translate-x-1"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl shrink-0">{skill.icon}</span>
                    <span className="text-xs font-bold text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                  
                  {/* Skill level tags */}
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                    {skill.level}
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
