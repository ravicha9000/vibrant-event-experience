import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ImageUploadProps {
  category: "dj" | "led";
  title: string;
  description: string;
}

export const ImageUpload = ({ category, title, description }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("File selected:", file?.name);

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          variant: "destructive",
          title: "File too large",
          description: "Please select an image under 5MB",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        console.log("File loaded successfully");
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!preview) {
      toast({
        variant: "destructive",
        title: "No image selected",
        description: "Please select an image first",
      });
      return;
    }

    console.log("Saving image for category:", category);
    // Here you would implement the actual save functionality
    toast({
      title: "Image saved",
      description: "Your image has been uploaded successfully",
    });
  };

  return (
    <Card className="glass-card w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <p className="text-sm text-white/70">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center gap-4">
          {preview ? (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <Button
                variant="secondary"
                className="absolute bottom-2 right-2"
                onClick={() => setPreview(null)}
              >
                Change Image
              </Button>
            </div>
          ) : (
            <div className="w-full aspect-video border-2 border-dashed border-white/20 rounded-lg flex flex-col items-center justify-center p-4 hover:border-neon-blue/50 transition-colors">
              <ImageIcon className="w-12 h-12 text-white/50 mb-2" />
              <p className="text-sm text-white/50">Click to upload or drag and drop</p>
              <p className="text-xs text-white/30">PNG, JPG up to 5MB</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          )}
          
          <Button
            onClick={handleSave}
            className="w-full bg-neon-blue text-black hover:bg-neon-blue/80"
            disabled={!preview}
          >
            <Upload className="w-4 h-4 mr-2" />
            Save Image
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};