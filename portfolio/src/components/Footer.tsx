import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="py-16 bg-white/30 backdrop-blur-sm border-t border-border/50 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-11 h-8 bg-data-blue rounded-md flex items-center justify-center overflow-hidden">
                <span className="text-white font-bold text-lg">P_A</span>
              </div>
                <span className="font-display font-bold text-xl">
                  <span className="text-data-blue">Pelz</span>
                  _the_
                  <span className="text-data-blue">Analyst</span>
                </span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              Transforming complex data into clear, actionable insights to drive
              smarter business decisions and strategic growth.
            </p>
            <div className="flex space-x-4">
              {[
                { 
                  name: "LinkedIn", 
                  url: "https://www.linkedin.com/in/pelumiadebisi", 
                  icon: <Linkedin className="w-4 h-4" /> 
                },
                { 
                  name: "GitHub", 
                  url: "https://github.com/pelztheanalyst", 
                  icon: <Github className="w-4 h-4" /> 
                }, 
                { 
                  name: "Twitter", 
                  url: "https://x.com/pelztheanalyst", 
                  icon: <Twitter className="w-4 h-4" /> 
                },
                { 
                  name: "Email", 
                  url: "mailto:adebisipelumi887@gmail.com", 
                  icon: <Mail className="w-4 h-4" /> 
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

          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h3 className="font-display font-semibold text-lg mb-4">Navigation</h3>
              <ul className="space-y-2">
                {["Home", "About", "Portfolio", "Skills", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-data-blue transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  "Data Analysis",
                  "Data Visualization",
                  "Dashboard Development",
                  "Statistical Modeling",
                  "Business Intelligence",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#contact"
                      className="text-muted-foreground hover:text-data-blue transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Pelumi Adebisi. All rights reserved.
          </p>

          <a
            href="#home"
            className="mt-4 md:mt-0 w-10 h-10 bg-data-blue/10 rounded-full flex items-center justify-center text-data-blue hover:bg-data-blue hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
