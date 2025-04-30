
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  // Data visualization SVG graphic elements for background
  const DataGraphics = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 right-[5%] w-32 h-32 rounded-full bg-data-blue/5 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 left-[10%] w-24 h-24 rounded-full bg-data-cyan/5 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-[15%] w-40 h-40 rounded-full bg-data-green/5 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <svg className="absolute -top-20 -right-20 w-64 h-64 text-data-blue/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M47.5,-52.5C59.1,-42.5,64.5,-24.2,66.3,-5.8C68.1,12.7,66.3,31.2,56.6,43.9C46.9,56.6,29.3,63.5,12.6,64.4C-4,65.2,-20.7,60,-35.3,50.6C-49.9,41.3,-62.3,27.9,-66.7,11.8C-71.1,-4.4,-67.4,-23.2,-56.9,-35.8C-46.4,-48.5,-29.1,-55,-10.9,-57.6C7.2,-60.2,35.9,-62.5,47.5,-52.5Z" transform="translate(100 100)" />
      </svg>
      
      <svg className="absolute -bottom-10 -left-10 w-48 h-48 text-data-cyan/10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M47.7,-57.2C59.9,-47.3,67,-30.9,71.5,-13.2C76,4.5,77.9,23.6,70.8,38.7C63.7,53.8,47.6,65,30.2,70.8C12.9,76.5,-5.7,76.9,-21.9,71.1C-38.1,65.2,-51.8,53.2,-60.6,38.3C-69.4,23.4,-73.2,5.7,-70.2,-10.5C-67.1,-26.7,-57.2,-41.4,-44.2,-51.3C-31.2,-61.2,-15.6,-66.3,0.9,-67.3C17.4,-68.4,35.5,-67.1,47.7,-57.2Z" transform="translate(100 100)" />
      </svg>
    </div>
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <DataGraphics />
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-data-blue/10 text-data-blue font-medium text-sm">
              Pelumi's Portfolio
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
              Transforming 
              <span className="relative mx-2">
                data
                <span className="absolute bottom-1 left-0 w-full h-2 bg-data-green/30"></span>
              </span>
              into actionable 
              <span className="text-data-blue"> insights</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              I help businesses make data-driven decisions through expert analytics, 
              visualization, and insights that drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-data-blue hover:bg-data-blue-dark text-white px-6 py-6 rounded-lg font-medium text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-data-blue/20">
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button variant="outline" className="border-data-blue text-data-blue hover:bg-data-blue/5 px-6 py-6 rounded-lg font-medium text-lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
         
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-60 h-60 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-data-blue/20 to-data-cyan/20 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white opacity-70">DA</div>
                <img 
                  src="https://i.imgur.com/Usf2eru.png" 
                  alt="Data Analyst Profile"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              <div className="absolute inset-0 bg-data-blue/10 mix-blend-overlay"></div>
            </div>
          </div> 

        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-data-blue transition-colors"
      >
        <span className="text-sm mb-2">Discover More</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
