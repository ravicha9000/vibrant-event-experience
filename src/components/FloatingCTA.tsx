import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FloatingCTA = () => {
  const navigate = useNavigate();

  return (
    <Button
      size="lg"
      className="fixed bottom-8 right-8 z-50 bg-neon-pink hover:bg-neon-pink/80 text-black shadow-lg shadow-neon-pink/20 animate-bounce hover:animate-none"
      onClick={() => navigate('/book-now')}
    >
      <Calendar className="mr-2" />
      Book Now
    </Button>
  );
};