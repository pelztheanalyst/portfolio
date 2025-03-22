
import { useState } from "react";
import { ArrowUpRight, Database, LineChart, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
}

const Portfolio = () => {
  // Sample project data - replace with your actual projects
  const projectsData: Project[] = [
    {
      id: 1,
      title: "Sales Performance Dashboard",
      description: "Created an interactive dashboard analyzing sales trends and performance metrics across regions, highlighting key insights that led to a 15% increase in quarterly revenue.",
      image: "sales-dashboard",
      technologies: ["Tableau", "SQL", "Excel"],
      category: "Data Visualization",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Customer Segmentation Analysis",
      description: "Developed a customer segmentation model using clustering algorithms to identify high-value customer groups, enabling targeted marketing campaigns with a 23% higher conversion rate.",
      image: "customer-segmentation",
      technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
      category: "Machine Learning",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Supply Chain Optimization",
      description: "Analyzed supply chain inefficiencies using time series forecasting and identified opportunities for inventory optimization, resulting in a 12% reduction in carrying costs.",
      image: "supply-chain",
      technologies: ["R", "Power BI", "Excel"],
      category: "Predictive Analytics",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "Financial Market Analysis",
      description: "Built a financial market analysis tool that tracks market trends and predicts potential investment opportunities using historical data and statistical models.",
      image: "financial-analysis",
      technologies: ["Python", "NumPy", "Plotly", "API Integration"],
      category: "Financial Analytics",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 5,
      title: "Healthcare Patient Flow Analysis",
      description: "Analyzed patient flow data to identify bottlenecks in hospital operations, recommending process improvements that reduced average wait times by 30%.",
      image: "healthcare-analytics",
      technologies: ["SQL", "Tableau", "Process Mining"],
      category: "Healthcare Analytics",
      githubUrl: "#",
    },
  ];

  const [filter, setFilter] = useState("All");
  const categories = ["All", "Data Visualization", "Machine Learning", "Predictive Analytics", "Financial Analytics", "Healthcare Analytics"];

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  // Function to generate placeholder gradient background for project cards
  const getProjectBackground = (id: number) => {
    const colors = [
      "from-data-blue/20 to-data-cyan/20",
      "from-data-cyan/20 to-data-green/20",
      "from-blue-100 to-purple-100",
      "from-green-100 to-cyan-100",
      "from-orange-100 to-rose-100",
    ];
    return colors[id % colors.length];
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full data-grid-bg"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-data-blue/10 text-data-blue font-medium text-sm">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Featured Data Analytics Projects
          </h2>
          <div className="w-20 h-1 bg-data-green mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground">
            Explore a selection of my data analytics projects showcasing skills in visualization, 
            predictive modeling, and actionable insights generation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? "default" : "outline"}
              className={`rounded-full px-4 py-2 text-sm ${
                filter === category 
                  ? "bg-data-blue text-white" 
                  : "bg-transparent border-data-blue/20 text-foreground hover:bg-data-blue/5"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border border-border/50 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-data-blue/5 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${project.id * 100}ms` }}
            >
              <div className={`aspect-w-16 aspect-h-9 bg-gradient-to-br ${getProjectBackground(project.id)} relative overflow-hidden`}>
                {/* Project Image Placeholder - replace with actual images */}
                <div className="w-full h-full flex items-center justify-center">
                  <LineChart className="w-12 h-12 text-data-blue/50" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/80 hover:bg-white text-data-blue border-none backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-display group-hover:text-data-blue transition-colors">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="bg-transparent text-xs border-data-blue/20 text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center">
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button size="sm" variant="ghost" className="p-0 h-auto">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-data-blue transition-colors">
                        <Github className="w-4 h-4 mr-1" />
                        <span className="text-xs">Code</span>
                      </a>
                    </Button>
                  )}
                  
                  {project.liveUrl && (
                    <Button size="sm" variant="ghost" className="p-0 h-auto">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-data-blue transition-colors">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        <span className="text-xs">Live Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
                
                <Button size="sm" variant="ghost" className="p-0 h-auto">
                  <a href={`#project-${project.id}`} className="flex items-center text-data-blue hover:text-data-blue-dark transition-colors">
                    <span className="text-xs font-medium">Details</span>
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <Button className="bg-transparent border border-data-blue/30 text-data-blue hover:bg-data-blue/5 hover:border-data-blue/50 rounded-lg px-6 py-2">
            View All Projects
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
