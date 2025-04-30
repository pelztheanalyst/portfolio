
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
  {/* Image Section */}
  <div className="animate-fade-in-left">
    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
      <div className="aspect-w-4 aspect-h-5 bg-data-blue/10">
        <img 
          src="https://i.pinimg.com/736x/4b/4c/57/4b4c57b437fa39aa334c43268f2cb02c.jpg" 
          alt="Data" 
          className="w-full max-h-105 object-cover rounded-2xl shadow-2xl"
        />
      </div>
      <div className="absolute inset-0 border border-white/20 rounded-2xl"></div>

      {/* Decorative elements */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-data-green/10 rounded-full blur-xl"></div>
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-data-blue/10 rounded-full blur-xl"></div>
    </div>
  </div>

  {/* Text Section */}
  <div className="animate-fade-in-right">
     <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-8 self-start">
        Hello, I'm <span className="text-data-blue">Pelumi Adebisi</span>
      </h3>
    <p className="text-muted-foreground mb-6">
      I'm a data analyst with a passion for transforming complex data into clear, actionable insights.
      With expertise in data visualization, statistical analysis, and business intelligence,
      I help organizations make data-driven decisions that drive growth and innovation.
    </p>
    <p className="text-muted-foreground mb-6">
      My journey in data analytics began with an analysis I did for a friend for his school project.
      Since then, I've worked with diverse datasets across multiple industries, developing
      a keen eye for patterns and anomalies that tell compelling stories.
    </p>
    <p className="text-muted-foreground mb-12">
      When I'm not diving into datasets, you might find me watching YouTube,building websites like this, playing the keyboard, 
      or exploring the latest advancements in data science and analytics.
    </p>

    <div className="flex flex-wrap gap-4 mb-8">
      <Button asChild variant="outline" className="border-data-blue/20 hover:border-data-blue/50 bg-transparent rounded-lg text-data-blue hover:bg-data-blue/5">
        <a href="https://www.linkedin.com/in/pelumiadebisi" target="_blank">
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </a>
      </Button>
      <Button asChild variant="outline" className="border-gray-800/20 hover:border-gray-800/50 bg-transparent rounded-lg text-gray-800 hover:bg-gray-800/5">
        <a href="https://github.com/pelztheanalyst" target="_blank">
          <Github className="w-5 h-5 mr-2" />
          GitHub
        </a>
      </Button>
      <Button asChild variant="outline" className="border-data-cyan/20 hover:border-data-cyan/50 bg-transparent rounded-lg text-data-cyan hover:bg-data-cyan/5">
        <a href="mailto:your-adebisipelumi887@gmail.com">
          <Mail className="w-5 h-5 mr-2" />
          Email
        </a>
      </Button>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
