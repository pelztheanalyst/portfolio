
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin, BookOpen, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mjkyjyzy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full data-grid-bg"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-data-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-data-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-data-green/10 text-data-green font-medium text-sm">
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-data-blue mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground">
            Have a data analysis project in mind or want to discuss how data insights can help your 
            business? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 animate-fade-in-left">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border/50 h-full">
              <h3 className="text-xl font-display font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-data-blue/10 flex items-center justify-center mr-4 shrink-0">
                    <Mail className="w-5 h-5 text-data-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium">adebisipelumi887@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-data-green/10 flex items-center justify-center mr-4 shrink-0">
                    <Phone className="w-5 h-5 text-data-green" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-medium">+2347089593977</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-data-cyan/10 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-5 h-5 text-data-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-medium mb-6">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-6">Connect with me</h4>
                <div className="flex gap-6">
                {[
                { 
                  name: "LinkedIn", 
                  url: "https://www.linkedin.com/in/pelumiadebisi", 
                  icon: <Linkedin className="w-6 h-6" /> 
                },
                { 
                  name: "GitHub", 
                  url: "https://github.com/pelztheanalyst", 
                  icon: <Github className="w-6 h-6" /> 
                }, 
                { 
                  name: "Twitter", 
                  url: "https://x.com/pelztheanalyst", 
                  icon: <Twitter className="w-6 h-6" /> 
                },
                { 
                  name: "Medium", 
                  url: "https://medium.com/@adebisipelumi887", 
                  icon: <BookOpen className="w-6 h-6" /> 
                },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center text-muted-foreground hover:bg-data-blue/10 hover:text-data-blue transition-colors"
                >
                  {platform.icon}
                </a>
              ))}
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-in-right">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border/50">
              <h3 className="text-xl font-display font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/50 border-input/50 focus:border-data-blue focus-visible:ring-data-blue/20"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white/50 border-input/50 focus:border-data-blue focus-visible:ring-data-blue/20"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    className="w-full bg-white/50 border-input/50 focus:border-data-blue focus-visible:ring-data-blue/20"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss a data analysis project..."
                    className="min-h-[150px] w-full bg-white/50 border-input/50 focus:border-data-blue focus-visible:ring-data-blue/20"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-data-blue hover:bg-data-blue-dark text-white py-6 rounded-lg font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
