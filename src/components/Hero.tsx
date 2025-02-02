import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00F0FF" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              out_mode: "out"
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#FF00E5",
              opacity: 0.4,
              width: 1
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              resize: true
            },
          },
          retina_detect: true
        }}
      />

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.gpteng.co/videos/dj-lights.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in">
          Premium DJ Equipment &<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink animate-glow-pulse">
            LED Lighting
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in">
          Transform your event with state-of-the-art DJ gear and stunning LED light shows
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" className="bg-neon-blue text-black hover:bg-neon-blue/80 hover:scale-105 transition-transform">
            Book Now
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 hover:border-neon-pink hover:text-neon-pink transition-colors">
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
};