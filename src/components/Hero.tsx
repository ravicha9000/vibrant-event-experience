import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          Premium DJ Equipment &<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink">
            LED Lighting
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          Transform your event with state-of-the-art DJ gear and stunning LED light shows
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-neon-blue text-black hover:bg-neon-blue/80">
            Book Now
          </Button>
          <Button size="lg" variant="outline" className="border-white/20">
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
};