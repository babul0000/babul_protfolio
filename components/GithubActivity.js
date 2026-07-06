"use client";
import { useState, useEffect } from "react";
import { useScrollReveal } from "./useScrollReveal";

// Seeded pseudorandom function to keep graph consistent (Fallback)
function getSeededRandom(seed) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export default function GithubActivity() {
  const ref = useScrollReveal();
  const [gridCells, setGridCells] = useState([]);
  const [totalContributions, setTotalContributions] = useState("Loading...");
  const [months, setMonths] = useState(["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"]);

  useEffect(() => {
    // Generate fallback mock grid initially
    const columns = 36;
    const days = 7;
    const fallbackGrid = [];
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
        columnCells.push({ level, count: level * 2, date: "Mock Date" });
      }
      fallbackGrid.push(columnCells);
    }
    
    setGridCells(fallbackGrid);

    // Fetch live contributions
    fetch("https://github-contributions-api.jogruber.de/v4/babul0000")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        if (data && data.contributions && data.contributions.length > 0) {
          // Sort contributions chronologically because API returns descending years
          const sortedContribs = data.contributions.sort((a, b) => a.date.localeCompare(b.date));

          // Filter out future dates to only show actual past/present activity
          const localDate = new Date();
          const year = localDate.getFullYear();
          const month = String(localDate.getMonth() + 1).padStart(2, '0');
          const day = String(localDate.getDate()).padStart(2, '0');
          const todayStr = `${year}-${month}-${day}`;

          const pastContribs = sortedContribs.filter((item) => item.date <= todayStr);
          // Take the last 252 days (36 weeks * 7 days) of active history
          const recentContribs = pastContribs.slice(-252);
          const liveGrid = [];
          for (let c = 0; c < 36; c++) {
            const columnCells = [];
            for (let d = 0; d < 7; d++) {
              const index = c * 7 + d;
              const item = recentContribs[index];
              columnCells.push({
                level: item ? item.level : 0,
                count: item ? item.count : 0,
                date: item ? item.date : ""
              });
            }
            liveGrid.push(columnCells);
          }
          setGridCells(liveGrid);
          
          // Calculate dynamic months labels based on retrieved dates
          const uniqueMonths = [];
          const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          recentContribs.forEach((item, index) => {
            if (index % 30 === 0) {
              const dateObj = new Date(item.date);
              const mName = monthNames[dateObj.getMonth()];
              if (!uniqueMonths.includes(mName)) {
                uniqueMonths.push(mName);
              }
            }
          });
          if (uniqueMonths.length > 0) {
            setMonths(uniqueMonths.slice(0, 8));
          }

          // Calculate dynamic total contributions across all years
          const sumTotal = Object.values(data.total).reduce((a, b) => a + b, 0);
          setTotalContributions(sumTotal.toLocaleString());
        } else {
          setTotalContributions("1,317");
        }
      })
      .catch((err) => {
        console.error("Live GitHub fetch error, using fallback data:", err);
        setTotalContributions("1,317");
      });
  }, []);

  return (
    <section id="github" className="section-padding bg-themeBg border-b border-themeBorder relative transition-colors duration-300" ref={ref}>
      
      {/* Background glowing orb */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-themeAccent/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 rounded-full bg-themeAccent" />
            <span className="text-xs font-bold text-themeAccent uppercase tracking-widest">
              Activity
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-themeText mt-1 uppercase tracking-tight">
            GitHub <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-themeTextMuted text-sm mt-3 max-w-md mx-auto font-normal">
            Consistency breeds excellence. An active logs index of my commits, repository pushes, and pull requests.
          </p>
        </div>

        {/* Contribution Calendar Wrapper */}
        <div className="bg-themeCard border border-themeBorder rounded-3xl p-6 md:p-8 shadow-sm reveal" style={{ transitionDelay: "0.2s" }}>
          
          {/* Header metrics */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-themeBorder">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-themeCardHover border border-themeBorder flex items-center justify-center text-themeTextSecondary">
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
                <a
                  href="https://github.com/babul0000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-themeText hover:text-themeAccent transition-colors leading-none block"
                >
                  babul0000
                </a>
                <p className="text-xs text-themeTextMuted mt-1.5 font-normal">Contributions in the last year</p>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-2xl font-black text-themeText leading-none">{totalContributions}</p>
              <p className="text-[9px] text-themeAccent font-bold uppercase tracking-wider mt-1.5">Total Contributions</p>
            </div>
          </div>

          {/* Calendar Heat-Map Grid */}
          <div className="overflow-x-auto pb-2 scrollbar-thin">
            <div className="min-w-[620px] flex flex-col gap-1.5 pl-4 select-none">
              
              {/* Months labels */}
              <div className="flex text-[10px] text-themeTextMuted font-bold leading-none mb-1">
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
                    {week.map((cell, rowIdx) => {
                      let bgClass = "bg-themeCardHover border border-themeBorder";
                      if (cell.level === 1) bgClass = "bg-emerald-500/20 border border-emerald-500/10";
                      else if (cell.level === 2) bgClass = "bg-emerald-500/40";
                      else if (cell.level === 3) bgClass = "bg-emerald-500/70";
                      else if (cell.level === 4) bgClass = "bg-emerald-500 shadow-[0_0_8px_rgba(46,204,113,0.5)]";
                      
                      return (
                        <div
                          key={rowIdx}
                          className={`w-3.5 h-3.5 rounded-[2px] ${bgClass} transition-all duration-300 hover:scale-125 cursor-pointer`}
                          title={cell.date === "Mock Date" ? "Loading contributions..." : `${cell.count} contributions on ${cell.date}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between text-[10px] text-themeTextMuted font-bold mt-4 pt-4 border-t border-themeBorder select-none">
            <span>Learn how I code on GitHub</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-3 h-3 rounded-[2px] bg-themeCardHover border border-themeBorder" />
              <div className="w-3 h-3 rounded-[2px] bg-emerald-500/20 border border-emerald-500/10" />
              <div className="w-3 h-3 rounded-[2px] bg-emerald-500/40" />
              <div className="w-3 h-3 rounded-[2px] bg-emerald-500/70" />
              <div className="w-3 h-3 rounded-[2px] bg-emerald-500" />
              <span>More</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
