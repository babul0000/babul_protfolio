"use client";
import { useScrollReveal } from "./useScrollReveal";

const skillGroups = [
  {
    category: "Frontend",
    icon: "💻",
    gradient: "from-blue-600 to-indigo-600",
    borderClass: "border-blue-100 bg-blue-50/20",
    skills: [
      { name: "JavaScript", icon: "🟨" },
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "Tailwind CSS", icon: "🎨" }
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    gradient: "from-green-600 to-teal-600",
    borderClass: "border-green-100 bg-green-50/20",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "REST APIs", icon: "🔗" }
    ]
  },
  {
    category: "Database",
    icon: "🗄️",
    gradient: "from-purple-600 to-pink-600",
    borderClass: "border-purple-100 bg-purple-50/20",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "Mongoose", icon: "🐍" }
    ]
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    gradient: "from-orange-600 to-red-600",
    borderClass: "border-orange-100 bg-orange-50/20",
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

  return (
    <section id="skills" className="section-padding pt-10" ref={ref}>
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1 h-4 rounded-full bg-blue-600" />
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest" style={{ letterSpacing: "0.12em" }}>
              Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={group.category}
              className={`rounded-3xl p-6 flex flex-col gap-4 border shadow-sm ${group.borderClass} reveal`}
              style={{ transitionDelay: `${0.1 * (idx + 1)}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <span className="text-xl p-2 bg-white rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-center">
                  {group.icon}
                </span>
                <h3 className={`text-transparent bg-clip-text bg-gradient-to-r ${group.gradient} font-bold text-lg`}>
                  {group.category}
                </h3>
              </div>

              {/* Skills Grid inside Category */}
              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white border border-slate-200/60 rounded-xl p-3 flex items-center gap-2 hover:border-slate-300 transition-colors shadow-sm"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span className="text-xs font-semibold text-slate-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
