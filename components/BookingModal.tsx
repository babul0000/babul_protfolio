"use client";
import React, { useState, FormEvent } from "react";
import { X, Calendar, Clock, Video, CheckCircle2, Send, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { useSound } from "./useSound";

export default function BookingModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { playSuccess, playClick } = useSound();
  const [duration, setDuration] = useState<"15" | "30">("15");
  const [platform, setPlatform] = useState<"meet" | "zoom" | "whatsapp">("meet");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [preferredTime, setPreferredTime] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    playSuccess();
    setIsSubmitted(true);
    toast.success("Meeting request dispatched! I will confirm via email within 4 hours.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-themeCard border border-themeBorder rounded-3xl shadow-2xl overflow-hidden flex flex-col relative font-sans antialiased text-themeText">
        
        {/* Top ambient line */}
        <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400" />

        {/* Header */}
        <div className="p-6 pb-4 border-b border-themeBorder flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-themeAccent/10 border border-themeAccent/20 flex items-center justify-center text-themeAccent">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-themeText leading-tight">
                Schedule a 1-on-1 Call
              </h3>
              <p className="text-xs text-themeTextMuted">
                Discuss opportunities, project requirements, or technical consulting.
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

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto max-h-[75vh]">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-themeText">Request Received!</h4>
                <p className="text-xs text-themeTextMuted max-w-sm mx-auto">
                  Thank you, <strong className="text-themeText">{name}</strong>. A calendar invite &amp; meeting link will be sent to <strong className="text-themeText">{email}</strong>.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-themeAccent text-themeAccentText font-bold text-xs uppercase tracking-wider mt-4"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Call Length Selection */}
              <div>
                <label className="block text-[10px] font-bold text-themeTextMuted uppercase tracking-wider mb-1.5">
                  Call Duration
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDuration("15")}
                    className={`py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 font-bold transition-all ${
                      duration === "15"
                        ? "bg-themeAccent text-themeAccentText border-themeAccent"
                        : "bg-themeBg border-themeBorder text-themeTextSecondary"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>15 Min Discovery</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDuration("30")}
                    className={`py-2.5 px-3 rounded-xl border flex items-center justify-center gap-2 font-bold transition-all ${
                      duration === "30"
                        ? "bg-themeAccent text-themeAccentText border-themeAccent"
                        : "bg-themeBg border-themeBorder text-themeTextSecondary"
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>30 Min Deep Dive</span>
                  </button>
                </div>
              </div>

              {/* Preferred Platform */}
              <div>
                <label className="block text-[10px] font-bold text-themeTextMuted uppercase tracking-wider mb-1.5">
                  Meeting Platform
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "meet", label: "Google Meet", icon: Video },
                    { id: "zoom", label: "Zoom", icon: Video },
                    { id: "whatsapp", label: "WhatsApp", icon: MessageSquare }
                  ].map((p) => {
                    const Icon = p.icon;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPlatform(p.id as "meet" | "zoom" | "whatsapp")}
                        className={`py-2 px-2.5 rounded-xl border flex items-center justify-center gap-1.5 font-semibold text-[11px] transition-all ${
                          platform === p.id
                            ? "bg-themeAccent/15 text-themeAccent border-themeAccent"
                            : "bg-themeBg border-themeBorder text-themeTextMuted"
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                        <span>{p.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-themeTextMuted uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-themeBorder bg-themeBg text-themeText placeholder-themeTextMuted focus:border-themeAccent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-themeTextMuted uppercase tracking-wider mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-themeBorder bg-themeBg text-themeText placeholder-themeTextMuted focus:border-themeAccent outline-none"
                  />
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div>
                <label className="block text-[10px] font-bold text-themeTextMuted uppercase tracking-wider mb-1">
                  Preferred Date &amp; Time (or Timezone)
                </label>
                <input
                  type="text"
                  required
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  placeholder="e.g. Tomorrow 4:00 PM (GMT+6 / EST)"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-themeBorder bg-themeBg text-themeText placeholder-themeTextMuted focus:border-themeAccent outline-none"
                />
              </div>

              {/* Discussion Topic */}
              <div>
                <label className="block text-[10px] font-bold text-themeTextMuted uppercase tracking-wider mb-1">
                  Brief Agenda / Topic
                </label>
                <textarea
                  rows={2}
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. Full-stack development project, MERN role discussion..."
                  className="w-full px-3.5 py-2 rounded-xl border border-themeBorder bg-themeBg text-themeText placeholder-themeTextMuted focus:border-themeAccent outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-themeAccent hover:bg-themeAccentHover text-themeAccentText font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 mt-2"
              >
                <span>Confirm &amp; Dispatch Meeting Request</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
