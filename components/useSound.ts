"use client";
import { useState, useEffect, useCallback } from "react";

// Web Audio API Synthesizer (No external MP3 files needed - 0 latency, 100% reliable)
class SoundSynthesizer {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Subtle UI click tone
  playClick() {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Ignore audio context error if browser blocks
    }
  }

  // Soft toggle/pop switch tone
  playToggle() {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch {
      // Ignore
    }
  }

  // Success chime
  playSuccess() {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);
        gain.gain.setValueAtTime(0.04, ctx.currentTime + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.07 + 0.15);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.07);
        osc.stop(ctx.currentTime + idx * 0.07 + 0.15);
      });
    } catch {
      // Ignore
    }
  }

  // Terminal Keypress subtle blip
  playKeypress() {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      const randomFreq = 800 + Math.random() * 200;
      osc.frequency.setValueAtTime(randomFreq, ctx.currentTime);
      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.02);
    } catch {
      // Ignore
    }
  }
}

const synth = new SoundSynthesizer();

export function useSound() {
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_sound_muted");
    // Default muted for user respect, easily unmuted
    if (saved !== null) {
      setIsMuted(saved === "true");
    } else {
      setIsMuted(false); // Default unmuted on modern interactive portfolios
    }
  }, []);

  const toggleSound = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      localStorage.setItem("portfolio_sound_muted", String(next));
      if (!next) {
        synth.playToggle();
      }
      return next;
    });
  }, []);

  const playClick = useCallback(() => {
    if (!isMuted) synth.playClick();
  }, [isMuted]);

  const playToggle = useCallback(() => {
    if (!isMuted) synth.playToggle();
  }, [isMuted]);

  const playSuccess = useCallback(() => {
    if (!isMuted) synth.playSuccess();
  }, [isMuted]);

  const playKeypress = useCallback(() => {
    if (!isMuted) synth.playKeypress();
  }, [isMuted]);

  return {
    isMuted,
    toggleSound,
    playClick,
    playToggle,
    playSuccess,
    playKeypress
  };
}
