"use client";

import React from 'react';

export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  fontFamily?: "syne" | "outfit" | "medieval";
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "PETRAXBOY",
  subtitle = "Master Hypnotist & Consciousness Explorer. Journey into trance, subconscious re-patterning, and profound mind transformation.",
  fontFamily = "medieval",
}) => {
  const getFontClass = () => {
    switch (fontFamily) {
      case "medieval":
        return "font-medieval";
      case "outfit":
        return "font-outfit";
      case "syne":
      default:
        return "font-syne";
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full z-10 text-center px-4 py-12">
      <h1 className={`text-4xl sm:text-7xl md:text-9xl font-extrabold tracking-tight text-white mb-6 uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)] select-none break-words animate-seq ${getFontClass()}`}>
        {title}
      </h1>
      <p className="text-base sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md select-none animate-seq px-2">
        {subtitle}
      </p>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes slideInUp { 
          from { opacity: 0; transform: translateY(30px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-seq {
          animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
