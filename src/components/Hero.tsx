import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "@/assets/dhanesh.jpg";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in space-y-6">
          <Avatar className="h-32 w-32 md:h-40 md:w-40 mx-auto mb-6 ring-4 ring-primary/50 ring-offset-4 ring-offset-background">
            <AvatarImage src={profilePic} alt="Gangireddy Dhanesh" />
            <AvatarFallback className="text-4xl font-display">GD</AvatarFallback>
          </Avatar>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold gradient-text animate-float">
            Gangireddy Dhanesh
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-primary font-display tracking-wide text-glow">
            Aspiring Software Engineer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building intelligent and creative software solutions for the future.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('resume')}
              className="animate-glow"
            >
              View Resume
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('projects')}
            >
              Explore Projects
            </Button>
          </div>

          <div className="flex gap-4 justify-center mt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-transform">
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-transform">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="mailto:contact@example.com">
              <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};
