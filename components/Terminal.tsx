"use client";
import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from "lucide-react";
import { useSound } from "./useSound";

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

const INITIAL_WELCOME = (
  <div className="space-y-1 text-xs">
    <p className="text-emerald-400 font-bold">
      ✨ Welcome to Babul Hossan&apos;s Interactive Developer Terminal v2.4
    </p>
    <p className="text-slate-400">
      Type <span className="text-amber-400 font-mono font-bold">help</span> to view all available commands or <span className="text-cyan-400 font-mono font-bold">projects</span> to inspect recent builds.
    </p>
  </div>
);

export default function Terminal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { playKeypress, playSuccess, playClick } = useSound();
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<CommandOutput[]>([
    { command: "init", response: INITIAL_WELCOME }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    let response: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        response = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="text-emerald-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1">
              <div><span className="text-cyan-400 font-bold">about</span> : Learn more about Babul</div>
              <div><span className="text-cyan-400 font-bold">skills</span> : Full-stack technical toolkit</div>
              <div><span className="text-cyan-400 font-bold">projects</span> : View featured production builds</div>
              <div><span className="text-cyan-400 font-bold">experience</span> : Technical background summary</div>
              <div><span className="text-cyan-400 font-bold">contact</span> : Get in touch details</div>
              <div><span className="text-cyan-400 font-bold">hire</span> : Open meeting / hiring action</div>
              <div><span className="text-cyan-400 font-bold">quote</span> : Daily developer inspiration</div>
              <div><span className="text-cyan-400 font-bold">whoami</span> : Current session profile</div>
              <div><span className="text-cyan-400 font-bold">date</span> : Check Dhaka Bangladesh time</div>
              <div><span className="text-cyan-400 font-bold">clear</span> : Clear terminal screen</div>
              <div><span className="text-cyan-400 font-bold">exit</span> : Close terminal</div>
            </div>
          </div>
        );
        break;

      case "about":
        response = (
          <div className="text-xs text-slate-300 space-y-1 font-mono">
            <p className="text-emerald-400 font-bold">Babul Hossan — Full Stack Developer</p>
            <p>Passionate software engineer specializing in Next.js, React, Node.js, Express, MongoDB, and TypeScript. Driven by solving complex problems and engineering elegant, high-impact user experiences.</p>
            <p className="text-slate-400">Location: Dhaka, Bangladesh | Availability: Open for immediate join</p>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="text-xs text-slate-300 space-y-2 font-mono">
            <div>
              <span className="text-amber-400 font-bold">Frontend: </span>
              <span>React.js, Next.js 14 (App Router), TypeScript, Tailwind CSS, HTML5/CSS3</span>
            </div>
            <div>
              <span className="text-emerald-400 font-bold">Backend &amp; MERN: </span>
              <span>Node.js, Express.js, MongoDB, Mongoose, RESTful APIs, Next.js API Routes</span>
            </div>
            <div>
              <span className="text-cyan-400 font-bold">Relational DB &amp; ORM: </span>
              <span>PostgreSQL, Prisma ORM, SQL Relational Schemas &amp; Migrations</span>
            </div>
            <div>
              <span className="text-purple-400 font-bold">Tools &amp; DevOps: </span>
              <span>Git, GitHub, Vercel, VS Code, Postman, Sonner, JWT Auth, Sharp</span>
            </div>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="text-xs text-slate-300 space-y-1.5 font-mono">
            <p className="text-emerald-400 font-bold">Featured Production Projects:</p>
            <p>1. <span className="text-cyan-400 font-bold">PromptForge</span> - AI Prompt Marketplace (Next.js, Node, MongoDB, BetterAuth)</p>
            <p>2. <span className="text-amber-400 font-bold">Tiles Gallery</span> - Architectural Catalog Platform (Next.js, CSS Grid, Vercel)</p>
            <p>3. <span className="text-red-400 font-bold">BloodConnect</span> - TypeScript Blood Donation Platform (MERN, Express, TypeScript)</p>
            <p className="text-slate-400 text-[11px] pt-1">Tip: Scroll to #projects on the page to test live demos!</p>
          </div>
        );
        break;

      case "experience":
        response = (
          <div className="text-xs text-slate-300 space-y-1 font-mono">
            <p className="text-emerald-400 font-bold">Career &amp; Technical Path:</p>
            <p>• <span className="text-cyan-400 font-bold">Full Stack MERN Developer</span> (2024 — Present): Building scalable full-stack web applications.</p>
            <p>• <span className="text-amber-400 font-bold">Industrial Technical Operations</span> (2018 — Present): High-precision problem solving and operational quality delivery.</p>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="text-xs text-slate-300 space-y-1 font-mono">
            <p className="text-emerald-400 font-bold">Get In Touch:</p>
            <p>📧 Email: <a href="mailto:babulhossan.info@gmail.com" className="text-cyan-400 underline">babulhossan.info@gmail.com</a></p>
            <p>📞 Phone/WhatsApp: <a href="tel:+8801952860053" className="text-cyan-400 underline">+880 1952-860053</a></p>
            <p>🐙 GitHub: <a href="https://github.com/babul0000" target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com/babul0000</a></p>
            <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/babul-hossan-09932837a/" target="_blank" rel="noreferrer" className="text-cyan-400 underline">linkedin.com/in/babul-hossan</a></p>
          </div>
        );
        break;

      case "hire":
        playSuccess();
        window.location.hash = "contact";
        onClose();
        return;

      case "quote": {
        const quotes = [
          "“Simplicity is prerequisite for reliability.” — Edsger W. Dijkstra",
          "“First, solve the problem. Then, write the code.” — John Johnson",
          "“Make it work, make it right, make it fast.” — Kent Beck",
          "“Code is like humor. When you have to explain it, it’s bad.” — Cory House"
        ];
        response = (
          <p className="text-xs text-amber-300 italic font-mono">
            {quotes[Math.floor(Math.random() * quotes.length)]}
          </p>
        );
        break;
      }

      case "whoami":
        response = (
          <p className="text-xs text-slate-300 font-mono">
            visitor@babul-portfolio ~ Role: Guest Tech Enthusiast / Recruiter 🚀
          </p>
        );
        break;

      case "date":
        response = (
          <p className="text-xs text-slate-300 font-mono">
            {new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })} (Asia/Dhaka)
          </p>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      case "exit":
        onClose();
        return;

      default:
        response = (
          <p className="text-xs text-red-400 font-mono">
            zsh: command not found: {cmd}. Type <span className="text-amber-400 font-bold">help</span> to list available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, response }]);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    playKeypress();
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInput(commandHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(nextIdx);
          setInput(commandHistory[nextIdx]);
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div
        className={`w-full bg-[#0d1117] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
          isMaximized ? "max-w-5xl h-[85vh]" : "max-w-2xl h-[480px]"
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="bg-[#161b22] px-4 py-3 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-80 transition-opacity flex items-center justify-center"
              />
              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:opacity-80 transition-opacity flex items-center justify-center"
              />
              <button
                onClick={() => setHistory([])}
                className="w-3 h-3 rounded-full bg-[#27c93f] hover:opacity-80 transition-opacity flex items-center justify-center"
              />
            </div>
            <div className="flex items-center gap-1.5 ml-2 text-xs font-mono text-slate-400">
              <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>babul@portfolio:~ (zsh)</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 hover:text-white transition-colors"
              title={isMaximized ? "Restore size" : "Maximize"}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-red-400 transition-colors"
              title="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="p-4 flex-grow overflow-y-auto space-y-3 font-mono text-xs text-slate-200 cursor-text"
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.command !== "init" && (
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400 font-bold">babul@portfolio:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
              )}
              <div>{item.response}</div>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-slate-400 pt-1">
            <span className="text-emerald-400 font-bold shrink-0">babul@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-white font-mono text-xs outline-none border-none p-0 focus:ring-0"
              autoFocus
              spellCheck={false}
            />
          </div>
        </div>

        {/* Quick Command Suggestions Footer */}
        <div className="bg-[#161b22]/70 px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 select-none">
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
            <span className="text-slate-500 font-mono">Quick:</span>
            {["help", "skills", "projects", "hire", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => {
                  playClick();
                  handleCommand(cmd);
                }}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono transition-colors text-[10px]"
              >
                {cmd}
              </button>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-1 font-mono text-[10px] text-slate-500">
            <span>Press Enter</span>
            <CornerDownLeft className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
