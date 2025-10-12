import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Driver Drowsiness Detection",
      description: "Uses computer vision to monitor driver alertness and prevent accidents in real time.",
      tags: ["Python", "Computer Vision", "AI", "Real-time Processing"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Traffic Volume Estimation",
      description: "ML-based system analyzing traffic density using CCTV or video feeds.",
      tags: ["Machine Learning", "Python", "Video Analysis", "Data Processing"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Online Placement Management System",
      description: "Web app to manage student placements and company drives efficiently.",
      tags: ["HTML", "CSS", "JavaScript", "Web Development"],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Student Info System",
      description: "Mini project for managing student details with a clean, intuitive interface.",
      tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 gradient-text">
          My Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-primary group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`} />
              
              <h3 className="font-display text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="border-primary/30 text-xs hover:border-primary hover:bg-primary/10 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
