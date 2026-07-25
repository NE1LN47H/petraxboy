"use client";

import React, { useEffect, useState } from "react";
import EvilEye from "./EvilEye";

export interface PreloaderProps {
  onComplete?: () => void;
  durationMs?: number;
}

export function Preloader({ onComplete, durationMs = 2500 }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / durationMs) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        setIsFadingOut(true);
        setTimeout(() => {
          setIsHidden(true);
          if (onComplete) onComplete();
        }, 700);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [durationMs, onComplete]);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-700 select-none ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Evil Eye Center Graphic - Wide Container to Prevent Side Clipping */}
      <div className="relative w-72 h-48 sm:w-[380px] sm:h-64 md:w-[460px] md:h-72 flex items-center justify-center">
        <EvilEye
          eyeColor="#6366F1"
          intensity={1.8}
          pupilSize={0.65}
          irisWidth={0.25}
          glowIntensity={0.5}
          scale={0.75}
          noiseScale={1.2}
          pupilFollow={1.2}
          flameSpeed={1.2}
          backgroundColor="#000000"
        />
      </div>

      {/* Progress & Hypnotist Text */}
      <div className="flex flex-col items-center gap-3 mt-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase text-white font-medieval drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
          Entering Trance State
        </h2>

        {/* Progress Bar */}
        <div className="w-48 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-indigo-600 via-indigo-400 to-indigo-300 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-xs text-white/50 font-mono tracking-wider">
          {progress}%
        </span>
      </div>
    </div>
  );
}

export default Preloader;
