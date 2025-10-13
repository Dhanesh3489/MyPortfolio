import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

export const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 gradient-text">
          Resume
        </h2>
        
        <Card className="glass p-12 text-center hover:border-primary/50 transition-all duration-300 hover:glow-primary">
          <FileText className="h-24 w-24 mx-auto mb-6 text-primary animate-float" />
          <h3 className="font-display text-2xl mb-4 text-foreground">Download My Resume</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Get a comprehensive overview of my skills, experience, and educational background.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="hero" 
              size="lg"
              className="group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
