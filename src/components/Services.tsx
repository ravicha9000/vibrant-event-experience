import { Music, Lightbulb, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "./ImageUpload";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Music,
    title: "DJ Equipment",
    description: "Professional-grade mixers, controllers, and sound systems for any event size",
    category: "dj" as const,
  },
  {
    icon: Lightbulb,
    title: "LED Lighting",
    description: "Dynamic lighting solutions including moving heads, lasers, and LED walls",
    category: "led" as const,
  },
  {
    icon: Package,
    title: "Complete Packages",
    description: "All-in-one solutions combining premium DJ gear with stunning light shows",
    category: "package" as const,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="glass-card p-6 group hover:border-neon-blue/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-neon-blue/20"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <service.icon className="w-12 h-12 text-neon-blue mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">{service.title}</h3>
              <p className="text-white/70 mb-4">{service.description}</p>
              <Link to="/gallery">
                <Button 
                  variant="ghost" 
                  className="group-hover:text-neon-blue group-hover:translate-x-2 transition-all duration-300"
                >
                  Learn More →
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <ImageUpload
            category="dj"
            title="DJ Equipment Images"
            description="Upload high-quality images of your DJ equipment"
          />
          <ImageUpload
            category="led"
            title="LED Lighting Images"
            description="Share photos of your stunning LED light shows"
          />
        </div>
      </div>
    </section>
  );
};