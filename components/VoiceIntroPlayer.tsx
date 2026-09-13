"use client";
import React, { useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useSound } from "./useSound";

export default function VoiceIntroPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const { playClick, playToggle } = useSound();

  const greetingScript =
    "Hello and welcome! I am Babul Hossan, a Full Stack MERN and Next.js developer. I build clean, high-performance web applications and scalable APIs. Feel free to explore my featured projects or book a call!";

  const toggleSpeech = () => {
    playToggle();
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      toast.error("Audio speech synthesis is not supported on this browser.");
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      window.speechSynthesis.cancel(); // Stop any pending
      const utterance = new SpeechSynthesisUtterance(greetingScript);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      
      // Select best english voice if available
      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(
        (v) => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google") || v.name.includes("Samantha"))
      );
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onend = () => {
        setIsPlaying(false);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
      toast.info("Playing audio introduction 🎙️");
    }
  };

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="inline-flex items-center gap-2 p-1.5 px-3 rounded-full bg-themeCard/90 border border-themeBorder hover:border-themeAccent/40 shadow-sm backdrop-blur-md transition-all duration-300">
      <button
        onClick={toggleSpeech}
        className="w-7 h-7 rounded-full bg-themeAccent hover:bg-themeAccentHover text-themeAccentText flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-sm"
        title={isPlaying ? "Pause voice intro" : "Listen to audio introduction"}
      >
        {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
      </button>

      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-themeText flex items-center gap-1.5">
          <span>Voice Intro</span>
          {isPlaying && (
            <span className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 h-full bg-themeAccent animate-pulse" />
              <span className="w-0.5 h-2 bg-themeAccent animate-bounce" />
              <span className="w-0.5 h-3 bg-themeAccent animate-pulse" />
            </span>
          )}
        </span>
        <span className="text-[10px] font-mono text-themeTextMuted border-l border-themeBorder pl-2">
          {isPlaying ? "Playing..." : "15s"}
        </span>
      </div>
    </div>
  );
}
