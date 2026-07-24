"use client";
import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const skillGroups = [
  {
    category: "Frontend",
    icon: "💻",
    skills: [
      {
        name: "TypeScript",
        icon: (
          <svg className="w-5 h-5 text-[#3178c6] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0zm22.034 18.995c-.073-.668-.387-1.226-.889-1.57-.497-.343-1.183-.556-2.072-.647-1.127-.114-1.923-.332-2.39-.63-.467-.3-.687-.73-.687-1.272 0-.365.118-.68.355-.95.236-.272.564-.476.985-.615.42-.137.915-.207 1.482-.207.726 0 1.298.15 1.714.444.417.297.685.748.817 1.344l2.138-.85c-.274-1.002-.79-1.748-1.547-2.222-.756-.474-1.762-.714-3.003-.714-1.077 0-1.996.223-2.738.666-.74.444-1.29 1.042-1.637 1.785-.347.74-.52 1.56-.52 2.443 0 1.393.393 2.463 1.176 3.19.782.727 1.91 1.14 3.37 1.233 1.15.082 1.968.22 2.45.412.48.19.82.467 1.018.82.2.353.3.774.3 1.264 0 .546-.206 1.006-.615 1.373-.41.367-.98.55-1.706.55-.77 0-1.395-.218-1.874-.652-.48-.435-.776-1.037-.887-1.802l-2.16.732c.245 1.2.798 2.128 1.655 2.766.858.636 1.99.957 3.398.957 1.218 0 2.247-.25 3.078-.75.83-.5 1.442-1.17 1.83-2.013.39-.844.584-1.78.584-2.807 0-1.25-.332-2.262-.997-3.025zM12 4.302H2.016v2.098h3.873V20h2.24V6.4h3.87v-2.1z"/>
          </svg>
        ),
        highlight: true
      },
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
                  className={`p-4 rounded-2xl flex items-center gap-3 transition-all duration-300 group hover:translate-x-1 relative overflow-hidden ${
                    skill.highlight
                      ? "bg-themeAccent/10 border border-themeAccent shadow-[0_0_15px_rgba(16,185,129,0.15)] dark:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                      : "bg-themeCardHover/40 border border-themeBorder hover:border-themeAccent/20"
                  }`}
                >
                  {skill.highlight && (
                    <div className="absolute top-0 right-0 bg-themeAccent text-themeAccentText text-[8px] font-black uppercase px-2 py-0.5 rounded-bl-lg tracking-wider animate-pulse">
                      Featured
                    </div>
                  )}
                  <span className="text-xl shrink-0 flex items-center justify-center">{skill.icon}</span>
                  <span className={`text-xs font-bold ${skill.highlight ? "text-themeAccent font-black" : "text-themeTextSecondary"}`}>
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
