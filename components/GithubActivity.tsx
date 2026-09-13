"use client";
import React, { useState } from "react";
import { 
  GitPullRequest, 
  Trophy, 
  MapPin, 
  Globe, 
  Clock, 
  Activity,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon } from "./Icons";

// Helper component for Corner Crosshairs (+)
const CrosshairCard = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => (
  <div className={`relative rounded-xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/80 dark:bg-zinc-900/60 p-5 sm:p-6 backdrop-blur-xs shadow-xs ${className}`}>
    <span className="absolute -top-2 -left-2 text-xs font-mono text-zinc-400 dark:text-zinc-600 select-none pointer-events-none">+</span>
    <span className="absolute -top-2 -right-2 text-xs font-mono text-zinc-400 dark:text-zinc-600 select-none pointer-events-none">+</span>
    <span className="absolute -bottom-2 -left-2 text-xs font-mono text-zinc-400 dark:text-zinc-600 select-none pointer-events-none">+</span>
    <span className="absolute -bottom-2 -right-2 text-xs font-mono text-zinc-400 dark:text-zinc-600 select-none pointer-events-none">+</span>
    {children}
  </div>
);

// Generates 52 weeks x 7 days realistic commit matrix
const generateContributionGrid = () => {
  const weeks = 52;
  const days = 7;
  const grid: number[][] = [];
  
  // Seeded deterministic generation for authentic contribution pattern
  for (let w = 0; w < weeks; w++) {
    const weekDays: number[] = [];
    for (let d = 0; d < days; d++) {
      // Create natural commit clusters and consistency
      const rand = Math.sin(w * 13 + d * 7) * 10000;
      const seed = rand - Math.floor(rand);
      
      let level = 0;
      if (seed > 0.72) level = 4;
      else if (seed > 0.52) level = 3;
      else if (seed > 0.35) level = 2;
      else if (seed > 0.18) level = 1;
      
      weekDays.push(level);
    }
    grid.push(weekDays);
  }
  return grid;
};

export default function GithubActivity() {
  const [hoveredCell, setHoveredCell] = useState<{ week: number; day: number; level: number } | null>(null);
  const contributionGrid = React.useMemo(() => generateContributionGrid(), []);

  const months = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];

  const topLanguages = [
    { lang: "TypeScript", time: "31.02h", pct: "75%" },
    { lang: "JavaScript / React", time: "12.50h", pct: "18%" },
    { lang: "Next.js", time: "4.20h", pct: "5%" },
    { lang: "Tailwind CSS", time: "1.50h", pct: "2%" },
  ];

  const topProjects = [
    { name: "prompt-forge", time: "23.74h", pct: "58%" },
    { name: "bloodconnect", time: "10.56h", pct: "26%" },
    { name: "tiles-gallery", time: "4.58h", pct: "11%" },
    { name: "pixgen-studio", time: "2.12h", pct: "5%" },
  ];

  const getCellColor = (level: number) => {
    switch (level) {
      case 4:
        return "bg-emerald-500 dark:bg-emerald-400";
      case 3:
        return "bg-emerald-600/70 dark:bg-emerald-500/80";
      case 2:
        return "bg-emerald-700/40 dark:bg-emerald-600/50";
      case 1:
        return "bg-zinc-300 dark:bg-zinc-700";
      default:
        return "bg-zinc-100 dark:bg-zinc-800/60";
    }
  };

  return (
    <section id="github" className="py-20 md:py-28 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-black/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        
        {/* Section Header (Exact MdShakeeb style) */}
        <div className="flex items-center gap-2 mb-8 text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
          <GitPullRequest className="w-4 h-4 text-emerald-500" />
          <span>LIVE PROGRESS</span>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column (2 Cols wide on desktop): Heatmap & Activity Area Chart */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Card A: GitHub Contribution Heatmap Card */}
            <CrosshairCard className="overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-slate-800 dark:text-zinc-200" />
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    GitHub Contribution Activity
                  </span>
                </div>
                <a
                  href="https://github.com/babul0000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>@babul0000</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Month Labels Header */}
              <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
                <div className="min-w-[620px]">
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 dark:text-zinc-400 mb-2 pl-4">
                    {months.map((m, idx) => (
                      <span key={idx}>{m}</span>
                    ))}
                  </div>

                  {/* 52x7 Heatmap Matrix */}
                  <div className="flex gap-[3px]">
                    {contributionGrid.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-[3px]">
                        {week.map((level, dIdx) => (
                          <div
                            key={dIdx}
                            onMouseEnter={() => setHoveredCell({ week: wIdx, day: dIdx, level })}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`w-2.5 h-2.5 rounded-[2px] transition-transform duration-150 hover:scale-125 cursor-pointer ${getCellColor(level)}`}
                            title={`Level ${level} activity`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Heatmap Footer Legend */}
              <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap items-center justify-between text-xs text-slate-600 dark:text-zinc-400">
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">528 contributions</span> in 2025 on{" "}
                  <a
                    href="https://github.com/babul0000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-emerald-500 font-medium"
                  >
                    GitHub
                  </a>
                  .
                </div>

                {/* Less / More Legend */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-zinc-100 dark:bg-zinc-800/60" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-zinc-300 dark:bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-700/40 dark:bg-emerald-600/50" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600/70 dark:bg-emerald-500/80" />
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500 dark:bg-emerald-400" />
                  <span>More</span>
                </div>
              </div>
            </CrosshairCard>

            {/* Card B: World Rank & Real-time Activity Area Chart Card */}
            <CrosshairCard>
              <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6">
                
                {/* Left Badges */}
                <div className="flex flex-col justify-between gap-4 sm:min-w-[190px]">
                  {/* World Rank */}
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-medium mb-0.5">
                      <Trophy className="w-3.5 h-3.5 text-emerald-500" />
                      <span>WORLD RANK</span>
                    </div>
                    <a
                      href="https://wakatime.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      #1,224
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-medium mb-0.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                      <span>LOCATION</span>
                    </div>
                    <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200">
                      Dhaka, Bangladesh
                    </span>
                  </div>

                  {/* Website */}
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-slate-500 dark:text-zinc-400 font-medium mb-0.5">
                      <Globe className="w-3.5 h-3.5 text-emerald-500" />
                      <span>WEBSITE</span>
                    </div>
                    <a
                      href="https://babul-portfolio.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline truncate max-w-[160px] block"
                    >
                      babulhossan.dev
                    </a>
                  </div>
                </div>

                {/* Right Area Chart (Smooth SVG with Pulsing Indicator) */}
                <div className="flex-1 h-36 relative overflow-hidden flex flex-col justify-end pt-2">
                  <div className="absolute top-1 right-2 flex items-center gap-1.5 text-[10px] font-mono text-slate-500 dark:text-zinc-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Live Activity</span>
                  </div>

                  <svg className="w-full h-28" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="emeraldGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 100 Q 50 95, 100 80 T 200 60 T 300 30 T 400 15 L 400 120 L 0 120 Z"
                      fill="url(#emeraldGradient)"
                    />
                    <path
                      d="M 0 100 Q 50 95, 100 80 T 200 60 T 300 30 T 400 15"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>

              </div>
            </CrosshairCard>

          </div>

          {/* Right Column (1 Col wide on desktop): Wakatime Analytics Card */}
          <div className="lg:col-span-1">
            <CrosshairCard className="h-full flex flex-col justify-between">
              <div>
                {/* Wakatime Header */}
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <h3 className="font-semibold text-base text-slate-900 dark:text-white">
                    Wakatime Analytics
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mb-5">
                  Coding activity (last 7 days)
                </p>

                {/* Top Languages */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-[11px] font-mono font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                    Top Languages
                  </h4>
                  {topLanguages.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-0.5">
                      <span className="font-medium text-slate-800 dark:text-zinc-200">
                        {item.lang}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 dark:text-zinc-400 font-mono text-[11px]">
                          {item.time}
                        </span>
                        <span className="font-semibold text-slate-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-[10px] font-mono">
                          {item.pct}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Top Projects */}
                <div className="space-y-2.5">
                  <h4 className="text-[11px] font-mono font-semibold text-slate-500 dark:text-zinc-400 uppercase tracking-wider">
                    Top Projects
                  </h4>
                  {topProjects.map((proj, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-0.5">
                      <span className="font-medium text-slate-800 dark:text-zinc-200 truncate max-w-[140px]">
                        {proj.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 dark:text-zinc-400 font-mono text-[11px]">
                          {proj.time}
                        </span>
                        <span className="font-semibold text-slate-900 dark:text-white bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-[10px] font-mono">
                          {proj.pct}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-5 mt-5 border-t border-zinc-200 dark:border-zinc-800/80">
                <a
                  href="https://wakatime.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline flex items-center justify-between"
                >
                  <span>View full analytics</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </CrosshairCard>
          </div>

        </div>

      </div>
    </section>
  );
}
