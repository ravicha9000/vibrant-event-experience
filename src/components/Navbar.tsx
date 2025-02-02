import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold text-white">
          PULSE<span className="text-neon-blue">DJ</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link to="/gallery" className="text-white/80 hover:text-white transition-colors">
            Gallery
          </Link>
          <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
          <Link to="/book-now">
            <Button className="bg-neon-blue text-black hover:bg-neon-blue/80">
              Book Now
            </Button>
          </Link>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </nav>
  );
};