"use client";
import { useScrollReveal } from "./useScrollReveal";

// Seeded pseudorandom function to keep graph consistent
function getSeededRandom(seed) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export default function GithubActivity() {
  const ref = useScrollReveal();
  
  // Generating mock calendar contributions grid (53 columns x 7 days)
  const columns = 36; // Show 36 weeks (~8 months) to fit nicely on mobile screens
  const days = 7;
  const gridCells = [];
  let seed = 12345;
  
  for (let c = 0; c < columns; c++) {
    const columnCells = [];
    for (let d = 0; d < days; d++) {
      const rand = getSeededRandom(seed++);
      let level = 0;
      if (rand > 0.4 && rand <= 0.75) level = 1;      // light orange
      else if (rand > 0.75 && rand <= 0.9) level = 2; // medium orange
      else if (rand > 0.9 && rand <= 0.97) level = 3; // strong orange
      else if (rand > 0.97) level = 4;                // deep orange
      columnCells.push(level);
    }
    gridCells.push(columnCells);
  }

  const months = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];

  return (
    <section id="github" className="section-padding bg-slate-50 border-b border-slate-200/50" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 rounded-full bg-orange-600" />
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
              Activity
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-1">
            GitHub <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto font-normal">
            Consistency breeds excellence. An active logs index of my commits, repository pushes, and pull requests.
          </p>
        </div>

        {/* Contribution Calendar Wrapper */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-sm reveal" style={{ transitionDelay: "0.2s" }}>
          
          {/* Header metrics */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700">
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
                <h3 className="text-sm font-bold text-slate-900 leading-none">babul0000</h3>
                <p className="text-xs text-slate-400 mt-1 font-normal">Contributions in the last year</p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-2xl font-black text-slate-900 leading-none">1,317</p>
              <p className="text-[10px] text-orange-600 font-bold uppercase tracking-wider mt-1">Total Contributions</p>
            </div>
          </div>

          {/* Calendar Heat-Map Grid */}
          <div className="overflow-x-auto pb-2 scrollbar-thin">
            <div className="min-w-[620px] flex flex-col gap-1.5 pl-4 select-none">
              
              {/* Months labels */}
              <div className="flex text-[10px] text-slate-400 font-bold leading-none mb-1">
                {months.map((month, idx) => (
                  <span key={idx} className="w-[17%] text-left">
                    {month}
                  </span>
                ))}
              </div>

              {/* Grid content */}
              <div className="flex gap-1">
                {gridCells.map((week, colIdx) => (
                  <div key={colIdx} className="flex flex-col gap-1">
                    {week.map((level, rowIdx) => {
                      let bgClass = "bg-slate-100";
                      if (level === 1) bgClass = "bg-orange-200/50";
                      else if (level === 2) bgClass = "bg-orange-350";
                      else if (level === 3) bgClass = "bg-orange-500";
                      else if (level === 4) bgClass = "bg-orange-650";
                      
                      return (
                        <div
                          key={rowIdx}
                          className={`w-3 h-3 rounded-[2px] ${bgClass} transition-colors duration-300 hover:scale-125 cursor-pointer`}
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
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mt-4 pt-4 border-t border-slate-200/50 select-none">
            <span>Learn how I code on GitHub</span>
            <div className="flex items-center gap-1">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-[1px] bg-slate-100" />
              <div className="w-2.5 h-2.5 rounded-[1px] bg-orange-200/50" />
              <div className="w-2.5 h-2.5 rounded-[1px] bg-orange-350" />
              <div className="w-2.5 h-2.5 rounded-[1px] bg-orange-500" />
              <div className="w-2.5 h-2.5 rounded-[1px] bg-orange-650" />
              <span>More</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
