"use client";
import React, { useState } from "react";
import {
  Briefcase,
  CheckCircle2,
  Download,
  Calendar,
  Mail,
  Copy,
  Check,
  Sparkles,
  Database,
  Code2,
  X,
  ExternalLink
} from "lucide-react";
import { toast } from "sonner";
import { useSound } from "./useSound";

export default function RecruiterSnapshot({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { playClick, playSuccess } = useSound();
  const [copied, setCopied] = useState<boolean>(false);

  const email = "babulhossan.info@gmail.com";
  const phone = "+8801952860053";

  if (!isOpen) return null;

  const handleCopy = () => {
    playSuccess();
    navigator.clipboard.writeText(`Email: ${email} | Phone: ${phone} | GitHub: https://github.com/babul0000`);
    setCopied(true);
    toast.success("Candidate contact info copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBookCall = () => {
    onClose();
    window.dispatchEvent(new CustomEvent("open-booking-modal"));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-themeCard border border-themeBorder rounded-3xl shadow-2xl overflow-hidden flex flex-col relative font-sans antialiased text-themeText">
        
        {/* Top ambient highlight gradient */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400" />

        {/* Header */}
        <div className="p-6 pb-4 border-b border-themeBorder flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-themeText">
                  Recruiter &amp; Engineering Fast-Track
                </h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Ready to Hire
                </span>
              </div>
              <p className="text-xs text-themeTextMuted">
                Executive summary for technical recruiters and hiring managers.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="p-2 rounded-xl text-themeTextMuted hover:text-themeText hover:bg-themeBg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto max-h-[75vh] space-y-6">
          
          {/* Status & Target Roles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-themeBg border border-themeBorder space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-themeTextMuted font-bold block">
                Target Engineering Roles
              </span>
              <p className="text-xs font-bold text-themeText leading-snug">
                Full-Stack MERN Developer, Next.js / React Engineer, Backend API Developer
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-themeBg border border-themeBorder space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-themeTextMuted font-bold block">
                Availability &amp; Work Model
              </span>
              <p className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Immediate Join • Full-Time • Remote / Hybrid
              </p>
              <span className="text-[10px] text-themeTextMuted block">
                Dhaka, BD (Flexible for US / EU / APAC timezones)
              </span>
            </div>
          </div>

          {/* Core Technical Strengths */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-themeText uppercase tracking-wider flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-themeAccent" />
              Core Competencies &amp; Toolkit
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* Box 1: MERN Core */}
              <div className="p-3.5 rounded-2xl bg-themeBg border border-themeBorder space-y-2">
                <span className="font-bold text-themeText flex items-center gap-1.5 text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Primary MERN &amp; Next.js Stack
                </span>
                <p className="text-[11px] text-themeTextSecondary leading-relaxed">
                  React 18, Next.js 14 App Router, Node.js, Express.js, MongoDB, Mongoose, TypeScript, Tailwind CSS.
                </p>
              </div>

              {/* Box 2: Relational DB & ORM */}
              <div className="p-3.5 rounded-2xl bg-themeBg border border-themeBorder space-y-2">
                <span className="font-bold text-themeText flex items-center gap-1.5 text-xs">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  Relational DBs &amp; Modern ORM
                </span>
                <p className="text-[11px] text-themeTextSecondary leading-relaxed">
                  PostgreSQL, Prisma ORM, SQL schema modeling, relation mappings, REST API controller integration.
                </p>
              </div>
            </div>
          </div>

          {/* Why Hire Babul? (The Industrial Precision & Grit Advantage) */}
          <div className="p-4 rounded-2xl bg-themeAccent/5 border border-themeAccent/20 space-y-2">
            <h4 className="text-xs font-bold text-themeAccent uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-themeAccent" />
              Why Babul Stands Out (The Reliability Factor)
            </h4>
            <ul className="text-[11px] text-themeTextSecondary space-y-1.5 font-normal leading-relaxed">
              <li className="flex items-start gap-1.5">
                <span className="text-themeAccent font-bold">•</span>
                <span><strong>Proven Work Ethic &amp; Precision:</strong> Background in industrial operations brings rigorous root-cause analysis, adherence to strict deadlines, and a zero-defect mindset.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-themeAccent font-bold">•</span>
                <span><strong>End-to-End Type Safety:</strong> Full TypeScript coverage across APIs, data schemas, and client states.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-themeAccent font-bold">•</span>
                <span><strong>Lighthouse 100% Performance:</strong> Meticulous focus on Core Web Vitals, image optimization, and responsive design.</span>
              </li>
            </ul>
          </div>

          {/* Direct Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-themeAccent hover:bg-themeAccentHover text-themeAccentText font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get Resume (PDF)</span>
            </a>

            <button
              onClick={handleBookCall}
              className="py-3 px-4 rounded-xl border border-themeBorder bg-themeBg hover:border-themeAccent/40 text-themeText font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-themeAccent" />
              <span>Schedule Call</span>
            </button>

            <button
              onClick={handleCopy}
              className="py-3 px-4 rounded-xl border border-themeBorder bg-themeBg hover:border-themeAccent/40 text-themeText font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-themeTextMuted" />}
              <span>{copied ? "Copied!" : "Copy Contact"}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
