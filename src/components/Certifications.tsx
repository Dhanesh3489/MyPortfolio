import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Code, Brain } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Palo Alto Cybersecurity Virtual Internship",
      issuer: "Palo Alto Networks",
      icon: Shield,
      color: "text-cyan-400",
    },
    {
      title: "Python Programming Certification",
      issuer: "Online Learning Platform",
      icon: Code,
      color: "text-purple-400",
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Tech Institute",
      icon: Brain,
      color: "text-pink-400",
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Coding Academy",
      icon: Award,
      color: "text-emerald-400",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 gradient-text">
          Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="glass p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-primary group"
            >
              <cert.icon className={`h-16 w-16 mx-auto mb-4 ${cert.color} group-hover:animate-pulse`} />
              <h3 className="font-display text-lg mb-2 text-foreground">{cert.title}</h3>
              <Badge variant="outline" className="border-primary/30 text-xs mt-2">
                {cert.issuer}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
