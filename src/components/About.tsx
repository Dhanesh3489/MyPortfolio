import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Rocket } from "lucide-react";

export const About = () => {
  const highlights = [
    { icon: Code2, title: "Problem Solver", description: "Analytical approach to complex challenges" },
    { icon: Lightbulb, title: "Quick Learner", description: "Adapting to new technologies rapidly" },
    { icon: Rocket, title: "Tech Enthusiast", description: "Passionate about innovation" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 gradient-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="glass p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-primary group"
            >
              <item.icon className="h-12 w-12 mx-auto mb-4 text-primary group-hover:text-secondary transition-colors" />
              <h3 className="font-display text-xl mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
        
        <Card className="glass p-8 md:p-12 border-primary/20">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-foreground">
              I am <span className="text-primary font-semibold">Gangireddy Dhanesh</span>, an aspiring software engineer passionate about creating impactful digital solutions. I enjoy learning new technologies, solving real-world problems, and developing efficient and creative software systems.
            </p>
            <p className="text-lg leading-relaxed text-foreground mt-4">
              My interests lie in <span className="text-secondary font-semibold">AI</span>, <span className="text-secondary font-semibold">Web Development</span>, and <span className="text-secondary font-semibold">Cybersecurity</span>. I believe in continuous learning and pushing the boundaries of what's possible with technology.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
