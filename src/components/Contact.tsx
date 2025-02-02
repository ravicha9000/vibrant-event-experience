import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Get in Touch
          </h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input className="bg-white/5" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input className="bg-white/5" type="email" placeholder="your@email.com" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea 
                className="bg-white/5" 
                placeholder="Tell us about your event..."
                rows={4}
              />
            </div>
            
            <Button className="w-full bg-neon-blue text-black hover:bg-neon-blue/80">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};