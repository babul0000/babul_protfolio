"use client";
import React, { useState, useMemo } from "react";
import { Calculator, CheckCircle2, Clock, DollarSign, Send, Sparkles, Layers } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";
import { useSound } from "./useSound";
import { toast } from "sonner";

interface ProjectType {
  id: string;
  name: string;
  baseCost: number;
  baseDays: number;
  description: string;
}

interface FeatureAddon {
  id: string;
  name: string;
  cost: number;
  days: number;
}

const PROJECT_TYPES: ProjectType[] = [
  {
    id: "landing",
    name: "Modern UI / Landing Page",
    baseCost: 150,
    baseDays: 4,
    description: "High-converting responsive landing page with Tailwind, modern animations, and SEO."
  },
  {
    id: "fullstack",
    name: "Full-Stack MERN / Next.js Web App",
    baseCost: 380,
    baseDays: 14,
    description: "Complete full-stack architecture with React/Next.js, Node.js, Express, and MongoDB."
  },
  {
    id: "ecommerce",
    name: "E-Commerce / Marketplace",
    baseCost: 550,
    baseDays: 21,
    description: "Multi-product catalog, cart checkout, payment flow, order manager, and user sessions."
  },
  {
    id: "dashboard",
    name: "Custom SaaS / Admin Portal",
    baseCost: 450,
    baseDays: 18,
    description: "Data visualization tables, charts, role-based security, and CRUD APIs."
  }
];

const ADDONS: FeatureAddon[] = [
  { id: "auth", name: "User Auth & Roles (JWT / OAuth)", cost: 60, days: 2 },
  { id: "payment", name: "Payment Gateway (Stripe / Local)", cost: 80, days: 3 },
  { id: "seo", name: "Speed & 100% SEO Optimization", cost: 50, days: 2 },
  { id: "admin", name: "Dedicated Admin Management Panel", cost: 100, days: 4 },
  { id: "ai", name: "AI / LLM API Integration", cost: 90, days: 3 }
];

export default function ProjectEstimator() {
  const ref = useScrollReveal<HTMLElement>();
  const { playClick, playSuccess } = useSound();

  const [selectedType, setSelectedType] = useState<string>("fullstack");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["auth", "seo"]);
  const [urgency, setUrgency] = useState<"standard" | "express" | "relaxed">("standard");

  const toggleAddon = (id: string) => {
    playClick();
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const { estimatedCost, estimatedDays } = useMemo(() => {
    const pType = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
    let cost = pType.baseCost;
    let days = pType.baseDays;

    selectedAddons.forEach((addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId);
      if (addon) {
        cost += addon.cost;
        days += addon.days;
      }
    });

    if (urgency === "express") {
      cost = Math.round(cost * 1.25);
      days = Math.max(3, Math.round(days * 0.65));
    } else if (urgency === "relaxed") {
      cost = Math.round(cost * 0.95);
      days = Math.round(days * 1.2);
    }

    return { estimatedCost: cost, estimatedDays: days };
  }, [selectedType, selectedAddons, urgency]);

  const handleForwardToContact = () => {
    playSuccess();
    const pType = PROJECT_TYPES.find((t) => t.id === selectedType)?.name || selectedType;
    const addonNames = selectedAddons
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text = `Hi Babul, I estimated a project:\n• Scope: ${pType}\n• Add-ons: ${addonNames || "None"}\n• Timeline: ~${estimatedDays} days\n• Estimated Budget: ~$${estimatedCost} USD.\nLet's discuss!`;

    // Copy to clipboard & smoothly jump to contact
    navigator.clipboard.writeText(text);
    toast.success("Project specifications copied! Jumped to contact form.");
    
    // Also dispatch event or navigate to contact
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      const messageInput = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement | null;
      if (messageInput) {
        messageInput.value = text;
        messageInput.focus();
      }
    }
  };

  return (
    <section id="estimator" className="section-padding bg-themeBg border-b border-themeBorder relative font-sans antialiased text-themeText" ref={ref}>
      {/* Background orb */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-themeAccent/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-1.5 h-4 rounded-full bg-themeAccent" />
            <span className="text-xs font-bold text-themeAccent uppercase tracking-widest">
              Planning &amp; Estimation
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-themeText mt-1 uppercase tracking-tight">
            Project Cost &amp; <span className="gradient-text">Timeline Calculator</span>
          </h2>
          <p className="text-themeTextMuted text-sm mt-3 max-w-lg mx-auto font-normal">
            Configure your technical requirements to receive an instant, transparent estimate for engineering your web solution.
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls: Left 7 cols */}
          <div className="lg:col-span-7 space-y-6 reveal">
            
            {/* Step 1: Project Type */}
            <div className="p-6 bg-themeCard rounded-3xl border border-themeBorder space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-themeTextMuted flex items-center gap-2">
                <Layers className="w-4 h-4 text-themeAccent" />
                1. Select Project Architecture
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => {
                        playClick();
                        setSelectedType(type.id);
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                        isSelected
                          ? "bg-themeAccent/10 border-themeAccent shadow-sm"
                          : "bg-themeBg/60 border-themeBorder hover:border-themeAccent/30"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-themeText">{type.name}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-themeAccent" />}
                        </div>
                        <p className="text-[11px] text-themeTextMuted leading-relaxed">{type.description}</p>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-themeAccent mt-3 block">
                        Base: ~${type.baseCost} USD ({type.baseDays} days)
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Addon Features */}
            <div className="p-6 bg-themeCard rounded-3xl border border-themeBorder space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-themeTextMuted flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                2. Key Features &amp; Add-ons
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between ${
                        isChecked
                          ? "bg-themeAccent/10 border-themeAccent font-bold text-themeText"
                          : "bg-themeBg/60 border-themeBorder text-themeTextSecondary hover:border-themeAccent/20"
                      }`}
                    >
                      <span>{addon.name}</span>
                      <span className="text-[10px] font-mono text-themeTextMuted ml-2 shrink-0 font-bold">
                        +${addon.cost}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Urgency & Speed */}
            <div className="p-6 bg-themeCard rounded-3xl border border-themeBorder space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-themeTextMuted flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                3. Delivery Timeline Priority
              </h3>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "standard", label: "Standard", desc: "Balanced pace" },
                  { id: "express", label: "⚡ Express", desc: "Priority delivery" },
                  { id: "relaxed", label: "Flexible", desc: "Cost optimized" }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => {
                      playClick();
                      setUrgency(tier.id as "standard" | "express" | "relaxed");
                    }}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      urgency === tier.id
                        ? "bg-themeAccent text-themeAccentText font-bold border-themeAccent"
                        : "bg-themeBg/60 border-themeBorder text-themeTextSecondary hover:border-themeAccent/30"
                    }`}
                  >
                    <span className="text-xs block font-bold">{tier.label}</span>
                    <span className="text-[9px] block opacity-80 mt-0.5">{tier.desc}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card: Right 5 cols */}
          <div className="lg:col-span-5 reveal sticky top-28">
            <div className="p-7 rounded-3xl border border-themeBorder bg-themeCard shadow-xl space-y-6 relative overflow-hidden">
              
              {/* Top ambient highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400" />

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-themeTextMuted flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-themeAccent" />
                  Estimated Scope
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-mono text-[10px] font-bold">
                  Transparent Pricing
                </span>
              </div>

              {/* Big Price Display */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black tracking-tight text-themeText">
                    ${estimatedCost}
                  </span>
                  <span className="text-xs text-themeTextMuted font-mono uppercase">USD (Approx.)</span>
                </div>
                <div className="text-xs text-themeTextSecondary flex items-center gap-2 pt-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-themeAccent" />
                  <span>Estimated Delivery: <strong className="text-themeText font-bold">~{estimatedDays} Working Days</strong></span>
                </div>
              </div>

              {/* Summary Items */}
              <div className="space-y-2.5 py-4 border-y border-themeBorder text-xs">
                <div className="flex justify-between text-themeTextSecondary">
                  <span>Architecture Model:</span>
                  <span className="font-bold text-themeText truncate max-w-[180px]">
                    {PROJECT_TYPES.find((t) => t.id === selectedType)?.name}
                  </span>
                </div>
                <div className="flex justify-between text-themeTextSecondary">
                  <span>Add-on Features:</span>
                  <span className="font-bold text-themeText">{selectedAddons.length} Selected</span>
                </div>
                <div className="flex justify-between text-themeTextSecondary">
                  <span>Code Quality:</span>
                  <span className="font-bold text-emerald-400">TypeScript + Clean MERN</span>
                </div>
              </div>

              {/* Call to Action button */}
              <button
                onClick={handleForwardToContact}
                className="w-full py-4 rounded-2xl bg-themeAccent hover:bg-themeAccentHover text-themeAccentText font-bold text-sm tracking-wide transition-all shadow-lg shadow-themeAccent/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Discuss This Specification</span>
                <Send className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-themeTextMuted text-center font-normal">
                * Estimates are guideline quotes. Every project includes clean git commits, deployment to Vercel/VPS, and post-launch support.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
