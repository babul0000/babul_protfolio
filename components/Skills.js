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
      {
        name: "React.js",
        icon: (
          <svg className="w-5 h-5 text-[#61dafb] shrink-0 animate-[spin_20s_linear_infinite]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb" strokeWidth="1">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        )
      },
      {
        name: "Next.js",
        icon: (
          <svg className="w-5 h-5 text-themeText shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M16.5 17.5L9.5 8.5V17H8V7H9.5L16.5 16V7H18V17.5H16.5Z" fill="currentColor"/>
          </svg>
        )
      },
      {
        name: "JavaScript (ES6+)",
        icon: (
          <svg className="w-5 h-5 text-[#f7df1e] bg-black rounded-md shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0zm22.034 18.995c-.073-.668-.387-1.226-.889-1.57-.497-.343-1.183-.556-2.072-.647-1.127-.114-1.923-.332-2.39-.63-.467-.3-.687-.73-.687-1.272 0-.365.118-.68.355-.95.236-.272.564-.476.985-.615.42-.137.915-.207 1.482-.207.726 0 1.298.15 1.714.444.417.297.685.748.817 1.344l2.138-.85c-.274-1.002-.79-1.748-1.547-2.222-.756-.474-1.762-.714-3.003-.714-1.077 0-1.996.223-2.738.666-.74.444-1.29 1.042-1.637 1.785-.347.74-.52 1.56-.52 2.443 0 1.393.393 2.463 1.176 3.19.782.727 1.91 1.14 3.37 1.233 1.15.082 1.968.22 2.45.412.48.19.82.467 1.018.82.2.353.3.774.3 1.264 0 .546-.206 1.006-.615 1.373-.41.367-.98.55-1.706.55-.77 0-1.395-.218-1.874-.652-.48-.435-.776-1.037-.887-1.802l-2.16.732c.245 1.2.798 2.128 1.655 2.766.858.636 1.99.957 3.398.957 1.218 0 2.247-.25 3.078-.75.83-.5 1.442-1.17 1.83-2.013.39-.844.584-1.78.584-2.807 0-1.25-.332-2.262-.997-3.025zM12 4.302H2.016v2.098h3.873V20h2.24V6.4h3.87v-2.1z"/>
          </svg>
        )
      },
      {
        name: "Tailwind CSS",
        icon: (
          <svg className="w-5 h-5 text-[#38bdf8] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.567.89 2.29 1.629C13.682 10.666 15.007 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.567-.89-2.29-1.63C16.32 6.133 14.995 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.567.89 2.29 1.628C8.082 17.866 9.407 19 12.401 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.567-.89-2.29-1.63-1.191-1.2-2.515-2.52-5.51-2.52z"/>
          </svg>
        )
      },
      {
        name: "HTML5 & CSS3",
        icon: (
          <svg className="w-5 h-5 text-[#e34f26] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.042 5.75H5.458l.417 4.708h10.963l-.438 4.937L12 16.646l-4.385-1.25-.28-3.146H5.167l.5 5.625L12 20.083l6.333-2.208.667-8.125H7.792l-.188-2.125h11.167l-.23-1.875z"/>
          </svg>
        )
      },
      {
        name: "DaisyUI & HeroUI",
        icon: (
          <svg className="w-5 h-5 text-themeAccent shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        )
      }
    ]
  },
  {
    category: "Backend & DB",
    icon: "⚙️",
    skills: [
      {
        name: "Node.js",
        icon: (
          <svg className="w-5 h-5 text-[#339933] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L3.105 5.14v10.28L12 20.56l8.895-5.14V5.14L12 0zm5.836 14.331l-5.836 3.37-5.836-3.37V7.67l5.836-3.37 5.836 3.37v6.661zm-5.836.568l3.664-2.115V9.458l-3.664 2.115-3.664-2.115v3.211l3.664 2.115z"/>
          </svg>
        )
      },
      {
        name: "Express.js",
        icon: (
          <svg className="w-5 h-5 text-themeText shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        )
      },
      {
        name: "MongoDB",
        icon: (
          <svg className="w-5 h-5 text-[#47a248] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C7.2 0 6 3.6 6 6c0 4.2 4.2 9.6 6 12 1.8-2.4 6-7.8 6-12 0-2.4-1.2-6-6-6zm0 15c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
          </svg>
        )
      },
      {
        name: "REST APIs",
        icon: (
          <svg className="w-5 h-5 text-cyan-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="3" x2="6" y2="15"></line>
            <circle cx="18" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M18 9a9 9 0 0 1-9 9"></path>
          </svg>
        )
      }
    ]
  },
  {
    category: "Auth & Tools",
    icon: "🛠️",
    skills: [
      {
        name: "Better Auth & JWT",
        icon: (
          <svg className="w-5 h-5 text-red-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        )
      },
      {
        name: "Git & GitHub",
        icon: (
          <svg className="w-5 h-5 text-themeText shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        )
      },
      {
        name: "Vercel",
        icon: (
          <svg className="w-5 h-5 text-themeText shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 22.525H0L12 1.475l12 21.05z"/>
          </svg>
        )
      },
      {
        name: "VS Code",
        icon: (
          <svg className="w-5 h-5 text-[#007acc] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.98 6.3l-3.32-3.29c-.19-.19-.44-.29-.71-.29s-.52.1-.71.29l-9.45 9.38-4.08-3.04c-.16-.12-.35-.18-.55-.18s-.4.06-.55.18L.71 12.39c-.39.39-.39 1.02 0 1.41l3.92 3.91c.15.15.35.23.55.23s.4-.08.55-.23l4.08-3.04 9.45 9.38c.19.19.44.29.71.29s.52-.1.71-.29l3.32-3.29c.39-.39.39-1.02 0-1.41l-7.33-7.27 7.33-7.27c.39-.39.39-1.02 0-1.41z"/>
          </svg>
        )
      }
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
