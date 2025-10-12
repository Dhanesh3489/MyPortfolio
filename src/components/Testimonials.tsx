import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Professor, Computer Science",
      content: "Dhanesh is a dedicated learner and an innovative problem solver. His passion for technology is evident in every project he undertakes.",
    },
    {
      name: "Rajesh Kumar",
      role: "Tech Lead, Software Company",
      content: "Working with Dhanesh was a pleasure. He brings fresh perspectives and demonstrates exceptional technical aptitude.",
    },
    {
      name: "Priya Sharma",
      role: "Project Mentor",
      content: "Dhanesh's ability to quickly grasp new concepts and implement them effectively sets him apart. A true tech enthusiast!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 gradient-text">
          Testimonials
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:glow-primary relative"
            >
              <Quote className="h-10 w-10 text-primary/30 mb-4" />
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t border-primary/20 pt-4">
                <h4 className="font-display text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-primary">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
