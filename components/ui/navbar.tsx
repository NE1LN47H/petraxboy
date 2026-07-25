"use client";

import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at top of page
      if (currentScrollY < 30) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
        // Scrolling DOWN -> slide up & hide
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 5) {
        // Scrolling UP -> slide down & show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-4 inset-x-0 mx-auto z-40 max-w-4xl w-[92vw] transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-full rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-xl px-5 sm:px-8 py-3 shadow-[0_20px_70px_rgba(0,0,0,0.8)] flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity">
          <Eye className="w-5 h-5 text-purple-400" />
          <span className="font-medieval text-base sm:text-xl font-bold tracking-wider uppercase">
            PETRAXBOY
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#trance" className="hover:text-white transition-colors">Trance</a>
          <a href="#sessions" className="hover:text-white transition-colors">Sessions</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Action Button */}
        <a
          href="#book"
          className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-white/90 transition-all hover:scale-105 shrink-0"
        >
          Book Trance
        </a>
      </div>
    </header>
  );
}

export default Navbar;
