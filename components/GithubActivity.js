"use client";
import { useScrollReveal } from "./useScrollReveal";

// Seeded pseudorandom function to keep graph consistent
function getSeededRandom(seed) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export default function GithubActivity() {
  const ref = useScrollReveal();
  
  // Generating mock calendar contributions grid (36 columns x 7 days)
  const columns = 36;
  const days = 7;
  const gridCells = [];
  let seed = 12345;
  
  for (let c = 0; c < columns; c++) {
    const columnCells = [];
    for (let d = 0; d < days; d++) {
      const rand = getSeededRandom(seed++);
      let level = 0;
      if (rand > 0.4 && rand <= 0.75) level = 1;      
      else if (rand > 0.75 && rand <= 0.9) level = 2; 
      else if (rand > 0.9 && rand <= 0.97) level = 3; 
      else if (rand > 0.97) level = 4;                
      columnCells.push(level);
    }
    gridCells.push(columnCells);
  }

  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];

  return (
    <section id="github" className="section-padding bg-[#090d16] border-b border-white/5 relative" ref={ref}>
      
      {/* Background glowing orb */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 rounded-full bg-indigo-500" />
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
              Activity
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-1 uppercase tracking-tight">
            GitHub <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto font-normal">
            Consistency breeds excellence. An active logs index of my commits, repository pushes, and pull requests.
          </p>
        </div>

        {/* Contribution Calendar Wrapper */}
        <div className="bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl reveal" style={{ transitionDelay: "0.2s" }}>
          
          {/* Header metrics */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-none">babul0000</h3>
                <p className="text-xs text-gray-500 mt-1.5 font-normal">Contributions in the last year</p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-2xl font-black text-white leading-none">1,317</p>
              <p className="text-[9px] text-indigo-400 font-bold uppercase tracking-wider mt-1.5">Total Contributions</p>
            </div>
          </div>

          {/* Calendar Heat-Map Grid */}
          <div className="overflow-x-auto pb-2 scrollbar-thin">
            <div className="min-w-[620px] flex flex-col gap-1.5 pl-4 select-none">
              
              {/* Months labels */}
              <div className="flex text-[10px] text-gray-500 font-bold leading-none mb-1">
                {months.map((month, idx) => (
                  <span key={idx} className="w-[17%] text-left">
                    {month}
                  </span>
                ))}
              </div>

              {/* Grid content */}
              <div className="flex gap-1.5">
                {gridCells.map((week, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-1.5">
                    {week.map((level, rowIdx) => {
                      let bgClass = "bg-slate-950/60 border border-white/5";
                      if (level === 1) bgClass = "bg-indigo-950/40 border border-indigo-900/20";
                      else if (level === 2) bgClass = "bg-indigo-700/60";
                      else if (level === 3) bgClass = "bg-purple-600";
                      else if (level === 4) bgClass = "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]";
                      
                      return (
                        <div
                          key={rowIdx}
                          className={`w-3.5 h-3.5 rounded-[2px] ${bgClass} transition-all duration-300 hover:scale-125 cursor-pointer`}
                          title={`${level > 0 ? `${level * 2} commits` : "No commits"}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between text-[10px] text-gray-500 font-bold mt-4 pt-4 border-t border-white/5 select-none">
            <span>Learn how I code on GitHub</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-3 h-3 rounded-[2px] bg-slate-950/60 border border-white/5" />
              <div className="w-3 h-3 rounded-[2px] bg-indigo-950/40 border border-indigo-900/20" />
              <div className="w-3 h-3 rounded-[2px] bg-indigo-700/60" />
              <div className="w-3 h-3 rounded-[2px] bg-purple-600" />
              <div className="w-3 h-3 rounded-[2px] bg-cyan-400" />
              <span>More</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
