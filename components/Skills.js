"use client";
import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const skillGroups = [
  {
    category: "Frontend",
    icon: "💻",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "JavaScript (ES6+)", icon: "🟨" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML5 & CSS3", icon: "🌐" },
      { name: "DaisyUI", icon: "🌼" },
      { name: "HeroUI", icon: "🛡️" }
    ]
  },
  {
    category: "Backend & DB",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "MongoDB", icon: "🍃" },
      { name: "REST APIs", icon: "🔗" }
    ]
  },
  {
    category: "Auth & Tools",
    icon: "🛠️",
    skills: [
      { name: "Better Auth", icon: "🔒" },
      { name: "JWT", icon: "🔑" },
      { name: "Git & GitHub", icon: "🐙" },
      { name: "Vercel", icon: "▲" },
      { name: "VS Code", icon: "📝" },
      { name: "Context API", icon: "🧩" }
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
    <section id="skills" className="section-padding bg-themeBg border-b border-themeBorder relative transition-colors duration-300" ref={ref}>
      
      {/* Background glow orb */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-themeAccent/5 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 rounded-full bg-themeAccent" />
            <span className="text-xs font-bold text-themeAccent uppercase tracking-widest">
              Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-themeText leading-tight uppercase tracking-tight">
            My <span className="gradient-text">Skills</span> &amp; Toolkit
          </h2>
          <p className="text-themeTextMuted text-sm mt-3 max-w-md mx-auto font-normal">
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
                  ? "bg-themeAccent text-white"
                  : "bg-themeCard border border-themeBorder hover:border-themeAccent/30 text-themeTextMuted hover:text-themeText"
              }`}
            >
              <span>{group.icon}</span>
              {group.category}
            </button>
          ))}
        </div>

        {/* Active Skills Grid */}
        <div className="max-w-3xl mx-auto reveal" style={{ transitionDelay: "0.2s" }}>
          <div className="bg-themeCard border border-themeBorder rounded-3xl p-6 md:p-8 shadow-md">
            <h3 className="text-sm font-bold text-themeText mb-6 flex items-center gap-2 uppercase tracking-wider">
              <span className="p-1.5 bg-themeAccent/10 border border-themeAccent/20 rounded-lg text-sm shrink-0">
                {activeGroup?.icon}
              </span>
              {activeGroup?.category} Technologies
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeGroup?.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 bg-themeCardHover/40 border border-themeBorder hover:border-themeAccent/20 rounded-2xl flex items-center gap-3 transition-all duration-300 group hover:translate-x-1"
                >
                  <span className="text-xl shrink-0">{skill.icon}</span>
                  <span className="text-xs font-bold text-themeTextSecondary">
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
