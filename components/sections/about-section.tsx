"use client";

import React from 'react';
import Image from 'next/image';
import { Eye, ArrowUpRight, Globe, Mail, Brain, Sparkles } from 'lucide-react';

export interface AboutSectionProps {
  imageSrc?: string;
  name?: string;
  badge?: string;
  description?: string;
  skills?: string[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  imageSrc = "/profile.png",
  name = "PETRAXBOY",
  badge = "Master Hypnotist & Mind Guide",
  description = "Specializing in deep trance induction, subconscious re-patterning, performance hypnotherapy, and consciousness expansion. Facilitating powerful breakthroughs through guided trance states.",
  skills = ["Hypnotic Induction", "Trance States", "Subconscious Re-patterning", "Mind Expansion", "NLP & Suggestion"],
}) => {
  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center z-10 bg-black/60 backdrop-blur-md border-t border-white/10 px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <div className="max-w-4xl w-full rounded-2xl sm:rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-xl p-5 sm:p-8 md:p-12 shadow-[0_20px_70px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 transition-all duration-300 hover:border-white/25">
        {/* Image Column */}
        <div className="relative w-full max-w-[260px] sm:max-w-xs md:max-w-sm aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 group">
          <Image
            src={imageSrc}
            alt={`${name} Profile`}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Content Column */}
        <div className="flex flex-col text-left flex-1 space-y-4 sm:space-y-5 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-[11px] sm:text-xs tracking-wider uppercase text-purple-200 font-medium w-fit">
            <Eye className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>{badge}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-syne leading-tight">
            Unlock the Subconscious
          </h2>

          <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            {description}
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
            {skills.map((tag, idx) => (
              <span key={idx} className="px-2.5 py-1 text-[11px] sm:text-xs rounded-lg border border-white/10 bg-white/[0.02] text-purple-200/70">
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between sm:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10 w-full">
            <a href="#book" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-white/90 transition-all hover:scale-105 w-full sm:w-auto">
              <span>Book a Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-2">
              {[
                { icon: Brain, href: "#session-info" },
                { icon: Sparkles, href: "#experience" },
                { icon: Globe, href: "#website" },
                { icon: Mail, href: "#contact" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="p-2.5 sm:p-3 rounded-xl border border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all hover:scale-105"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
