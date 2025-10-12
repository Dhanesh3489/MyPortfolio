import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skills = [
    { name: "C", category: "Programming", level: "Advanced" },
    { name: "Python", category: "Programming", level: "Advanced" },
    { name: "Java", category: "Programming", level: "Intermediate" },
    { name: "HTML", category: "Web", level: "Advanced" },
    { name: "CSS", category: "Web", level: "Advanced" },
    { name: "JavaScript", category: "Web", level: "Intermediate" },
  ];

  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 gradient-text">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="glass p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-primary group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <Badge variant="outline" className="border-primary/50 text-xs">
                    {skill.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary transition-all duration-500 group-hover:animate-pulse"
                      style={{ 
                        width: skill.level === "Advanced" ? "90%" : skill.level === "Intermediate" ? "70%" : "50%" 
                      }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{skill.level}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
