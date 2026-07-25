import InteractiveNeuralVortex from "@/components/ui/interactive-neural-vortex-background";
import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import Preloader from "@/components/ui/preloader";
import Navbar from "@/components/ui/navbar";

const DemoOne = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden bg-black text-white">
      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      {/* Fullscreen EvilEye Preloader */}
      <Preloader />

      {/* Interactive WebGL Shader Canvas Background */}
      <InteractiveNeuralVortex />

      {/* Section 1: Hero Section */}
      <HeroSection />

      {/* Section 2: About Section */}
      <AboutSection />
    </div>
  );
};

export { DemoOne };
