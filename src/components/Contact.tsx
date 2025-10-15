import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return <section id="contact" className="py-20 px-6 sm:px-8 md:px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl px-0">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 gradient-text">
          Get in Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="glass p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 hover:glow-primary">
              <div className="flex items-center gap-4">
                <Mail className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-display text-lg text-foreground">Email</h3>
                  <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors">dhaneshgangireddy@gmail.com</a>
                </div>
              </div>
            </Card>
            
            <Card className="glass p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 hover:glow-primary">
              <div className="flex items-center gap-4">
                <Phone className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-display text-lg text-foreground">Phone</h3>
                  <a href="tel:6305558446" className="text-muted-foreground hover:text-primary transition-colors">
                    6305558446
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="glass p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 hover:glow-primary">
              <div className="flex items-center gap-4">
                <Linkedin className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-display text-lg text-foreground">LinkedIn</h3>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    linkedin.com/in/dhanesh
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="glass p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 hover:glow-primary">
              <div className="flex items-center gap-4">
                <Github className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-display text-lg text-foreground">GitHub</h3>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    github.com/dhanesh
                  </a>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="glass p-4 sm:p-8 border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                <Input type="text" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} className="glass border-primary/30 focus:border-primary" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <Input type="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} className="glass border-primary/30 focus:border-primary" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <Textarea value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} className="glass border-primary/30 focus:border-primary min-h-[150px]" required />
              </div>
              
              <Button type="submit" variant="hero" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>;
};