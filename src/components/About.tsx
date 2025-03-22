
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-30 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full data-grid-bg"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-data-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-data-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-data-cyan/10 text-data-cyan font-medium text-sm">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Passionate About Uncovering Hidden Patterns in Data
          </h2>
          <div className="w-20 h-1 bg-data-green mx-auto mb-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-w-4 aspect-h-5 bg-data-blue/10">
                {/* Replace with actual about image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-data-blue/20 to-data-cyan/20">
                  <span className="text-5xl font-bold text-white/50">DA</span>
                </div>
              </div>
              <div className="absolute inset-0 border border-white/20 rounded-2xl"></div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-data-green/10 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-data-blue/10 rounded-full blur-xl"></div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Hello, I'm <span className="text-data-blue">Your Name</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm a data analyst with a passion for transforming complex data into clear, actionable insights.
              With expertise in data visualization, statistical analysis, and business intelligence,
              I help organizations make data-driven decisions that drive growth and innovation.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in data analytics began with a background in [Your Background/Education].
              Since then, I've worked with diverse datasets across multiple industries, developing
              a keen eye for patterns and anomalies that tell compelling stories.
            </p>
            <p className="text-muted-foreground mb-8">
              When I'm not diving into datasets, you might find me [Your Hobbies/Interests] or
              exploring the latest advancements in data science and analytics.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="outline" className="border-data-blue/20 hover:border-data-blue/50 bg-transparent rounded-lg text-data-blue hover:bg-data-blue/5">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" className="border-gray-800/20 hover:border-gray-800/50 bg-transparent rounded-lg text-gray-800 hover:bg-gray-800/5">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" className="border-data-cyan/20 hover:border-data-cyan/50 bg-transparent rounded-lg text-data-cyan hover:bg-data-cyan/5">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <div>
                <div className="text-3xl font-bold text-data-blue mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-data-blue mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-data-blue mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-data-blue mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Industry Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
