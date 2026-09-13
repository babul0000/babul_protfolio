"use client";
import React from "react";
import { GitPullRequest, GitCommit, Star, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function GithubActivity() {
  const stats = [
    { label: "Public Repositories", value: "30+", icon: GitPullRequest },
    { label: "Active Commit Streak", value: "Consistent", icon: GitCommit },
    { label: "Primary Language", value: "TypeScript / JS", icon: Star },
    { label: "Core Focus", value: "Full Stack MERN", icon: GithubIcon },
  ];

  return (
    <section id="github" className="py-16 md:py-20 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/20 dark:bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        <div className="bento-crosshair p-6 sm:p-8">
          <span className="absolute -top-2 -left-2 text-zinc-400 dark:text-zinc-600 font-mono text-sm pointer-events-none">+</span>
          <span className="absolute -top-2 -right-2 text-zinc-400 dark:text-zinc-600 font-mono text-sm pointer-events-none">+</span>
          <span className="absolute -bottom-2 -left-2 text-zinc-400 dark:text-zinc-600 font-mono text-sm pointer-events-none">+</span>
          <span className="absolute -bottom-2 -right-2 text-zinc-400 dark:text-zinc-600 font-mono text-sm pointer-events-none">+</span>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold uppercase mb-1">
                OPEN SOURCE &amp; CODE ACTIVITY
              </div>
              <h3 className="text-2xl font-heading font-bold text-themeText">
                GitHub Development Cadence
              </h3>
            </div>

            <a
              href="https://github.com/babul0000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-medium hover:scale-[1.02] transition-all shadow-xs self-start md:self-auto"
            >
              <GithubIcon className="w-4 h-4" />
              <span>@babul0000 on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50"
                >
                  <Icon className="w-4 h-4 text-emerald-500 mb-2" />
                  <div className="text-xl font-bold font-mono text-themeText">{st.value}</div>
                  <div className="text-xs text-themeTextMuted mt-0.5">{st.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
