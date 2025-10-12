import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-primary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © 2025 Gangireddy Dhanesh. All Rights Reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:glow-primary transition-all">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:glow-primary transition-all">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:contact@example.com">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:glow-primary transition-all">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
