import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-2xl font-display font-bold text-white">
          PULSE<span className="text-neon-blue">DJ</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-white/80 hover:text-white transition-colors">
            Services
          </a>
          <a href="#gallery" className="text-white/80 hover:text-white transition-colors">
            Gallery
          </a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">
            Contact
          </a>
          <Button className="bg-neon-blue text-black hover:bg-neon-blue/80">
            Book Now
          </Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};