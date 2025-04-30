
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
      id: "https://medium.com/@adebisipelumi887/exploring-crypto-market-dynamics-price-trends-supply-and-blockchain-insights-995d456d4e19",
      title: "Cryptocurrency Market Analysis",
      description: "Analyzed cryptocurrency market trends, price movements, and trading dynamics using data from CoinMarketCap, applying data preprocessing, visualization, and comparative analysis.",
      image: "https://i.pinimg.com/736x/11/4b/cb/114bcbfbdff959312c8ea4c3588dd45a.jpg",
      technologies: ["Python", "NumPy", "Plotly", "API Integration"], 
      category: "Financial Analytics",
      githubUrl: "https://colab.research.google.com/drive/1-nCK4SYxTNJ8uJjvIpjOAxSzl1612BZM?usp=sharing",
    },
    {
      id: "https://github.com/pelztheanalyst/python-projects/blob/main/Automobile%20Data%20Analysis%20and%20Model%20Development/README.md",
      title: "Automobile Data Analysis and Model Development",
      description: "Explored an automobile dataset, applying data cleaning, exploratory data analysis, and machine learning techniques to uncover insights and improve predictive performance.",
      image: "https://i.pinimg.com/736x/49/7e/db/497edbc0fd737778f6e6a43160e68a25.jpg",
      technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
      category: "Predictive Analytics",
      githubUrl: "https://github.com/pelztheanalyst/python-projects/tree/main/Automobile%20Data%20Analysis%20and%20Model%20Development",
    },
    { 
      id: "https://github.com/pelztheanalyst/Dashboards/blob/main/British%20Airways%20Review/Readme.md",
      title: "British Airways Review",
      description: "Analyzed British Airways customer reviews to identify trends in ratings, service quality, and passenger experience, visualizing key insights in an interactive Tableau dashboard.",
      image: "https://i.pinimg.com/736x/7b/e6/a4/7be6a4d029963aba59da55d90b2c443b.jpg", 
      technologies: ["Tableau", "Excel"],
      category: "Data Visualization",
      liveUrl: "https://public.tableau.com/app/profile/pelumi.adebisi/viz/BritishAirwaysReview-PortfolioProject/Dashboard1?publish=yes", 
    },
    {
      id: "https://github.com/pelztheanalyst/sql-projects/blob/main/Workforce%20Layoffs%3A%20Data%20Cleaning%20%26%20Insights/Readme.md",
      title: "Workforce Layoffs Trend Analysis",
      description: "Analyzed workforce layoff data by leveraging SQL for data cleaning and exploratory data analysis, uncovering key trends and insights on company layoffs.",
      image: "https://i.pinimg.com/736x/5d/e3/4a/5de34ac6f463b2252888cba43eb7adb8.jpg", 
      technologies: ["SQL"],  
      category: "Data Cleaning & EDA",
      githubUrl: "http://github.com/pelztheanalyst/sql-projects/tree/main/Workforce%20Layoffs%3A%20Data%20Cleaning%20%26%20Insights",
    },
    {
      id: "https://github.com/pelztheanalyst/Dashboards/blob/main/Data%20Professionals%20Survey/Readme.md",
      title: "Data Professionals Survey",
      description: "Summarized survey insights from 630 data professionals, helping clients understand industry trends in salary, job satisfaction, and career entry challenges to make informed HR andhiring decisions.",
      image: "https://i.pinimg.com/736x/32/9c/6a/329c6a1821e7ca201f437317295cfece.jpg",
      technologies: ["Power Bi", "Dax Measures"],
      category: "Data Visualization",
      githubUrl: "https://github.com/pelztheanalyst/Dashboards/tree/main/Data%20Professionals%20Survey",
    },
    {
      id: "https://github.com/pelztheanalyst/Dashboards/blob/main/Coffee%20Sales%20Insight/readme.md",
      title: "Coffee Sales Insight",
      description: "Designed for business owners, to dashboard deliver clear insights into coffee sales, customer trends, and product performance to support smarter, data-driven decisions.",
      image: "https://i.pinimg.com/736x/f2/e0/a7/f2e0a71b4f2f3d3ffbcd90225a6d6d48.jpg",
      technologies: ["Excel", "Pivot Tables"],
      category: "Data Visualization",
      liveUrl: "https://github.com/pelztheanalyst/Dashboards/tree/main/Coffee%20Sales%20Insight",
    },
  ];

  const [filter, setFilter] = useState("All");
  const categories = ["All", "Data Visualization", "Predictive Analytics", "Financial Analytics",];

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
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                />

                
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
                  <a href={`${project.id}`} target='_blank' className="flex items-center text-data-blue hover:text-data-blue-dark transition-colors">
                    <span className="text-xs font-medium">Details</span>
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* New Button (resets filter) */}
        <div className="flex justify-center mt-12">
          <Button 
           type="button" // ← Ensures it's not a submit button
           onClick={() => {
             setFilter("All");
             // Scroll to portfolio section
             document.getElementById('portfolio')?.scrollIntoView({ 
               behavior: 'smooth' 
             });
           }}
            className="bg-transparent border border-data-blue/30 text-data-blue hover:bg-data-blue/5 hover:border-data-blue/50 rounded-lg px-6 py-2"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
