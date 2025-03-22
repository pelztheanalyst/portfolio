
import { Badge } from "@/components/ui/badge";
import {
  Database,
  LineChart,
  BarChart3,
  PieChart,
  FileSpreadsheet,
  Code,
  Languages,
  Terminal,
  BrainCircuit,
  Network,
  Presentation,
  Users,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Data Analysis & Visualization",
      skills: [
        { name: "Python", level: 85, color: "bg-blue-500", icon: <Code className="w-4 h-4" /> },
        { name: "R", level: 80, color: "bg-sky-500", icon: <Code className="w-4 h-4" /> },
        { name: "SQL", level: 90, color: "bg-indigo-500", icon: <Database className="w-4 h-4" /> },
        { name: "Tableau", level: 95, color: "bg-data-blue", icon: <BarChart3 className="w-4 h-4" /> },
        { name: "Power BI", level: 85, color: "bg-yellow-500", icon: <PieChart className="w-4 h-4" /> },
        { name: "Excel", level: 95, color: "bg-green-500", icon: <FileSpreadsheet className="w-4 h-4" /> },
      ],
    },
    {
      title: "Programming & Tools",
      skills: [
        { name: "Pandas", level: 80, color: "bg-blue-500", icon: <BrainCircuit className="w-4 h-4" /> },
        { name: "NumPy", level: 75, color: "bg-cyan-500", icon: <Terminal className="w-4 h-4" /> },
        { name: "scikit-learn", level: 70, color: "bg-orange-500", icon: <BrainCircuit className="w-4 h-4" /> },
        { name: "Git", level: 65, color: "bg-red-500", icon: <Code className="w-4 h-4" /> },
        { name: "Jupyter", level: 90, color: "bg-orange-500", icon: <Terminal className="w-4 h-4" /> },
        { name: "MATLAB", level: 60, color: "bg-purple-500", icon: <Terminal className="w-4 h-4" /> },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Data Storytelling", level: 90, color: "bg-data-green", icon: <Presentation className="w-4 h-4" /> },
        { name: "Problem Solving", level: 85, color: "bg-data-blue", icon: <Network className="w-4 h-4" /> },
        { name: "Communication", level: 95, color: "bg-data-cyan", icon: <Users className="w-4 h-4" /> },
        { name: "Project Management", level: 80, color: "bg-indigo-500", icon: <Network className="w-4 h-4" /> },
        { name: "Critical Thinking", level: 90, color: "bg-purple-500", icon: <BrainCircuit className="w-4 h-4" /> },
        { name: "Business Acumen", level: 75, color: "bg-amber-500", icon: <LineChart className="w-4 h-4" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-data-green/10 text-data-green font-medium text-sm">
            Skills
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            My Data Analysis Expertise
          </h2>
          <div className="w-20 h-1 bg-data-blue mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground">
            A comprehensive collection of technical and soft skills that I leverage to extract meaningful insights 
            and drive data-informed decision making.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border/50 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-display font-semibold mb-6 text-center">{category.title}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Badge className={`mr-2 ${skill.color} text-white`}>
                          {skill.icon}
                        </Badge>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${skill.color}`} 
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 6 + skillIndex) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-xl font-display font-semibold mb-6 text-center animate-fade-in">Other Skills & Tools</h3>
          
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
            {[
              "Data Cleaning", "Statistical Analysis", "A/B Testing", "Data Modeling", 
              "Data Mining", "ETL Processes", "Data Quality", "API Integration",
              "Google Analytics", "Regression Analysis", "Forecasting", "Data Warehousing",
              "Looker", "MongoDB", "PostgreSQL", "Hadoop", "D3.js", "Data Ethics"
            ].map((skill, index) => (
              <Badge 
                key={skill} 
                variant="outline"
                className="bg-white/50 backdrop-blur-sm border-data-blue/20 hover:border-data-blue/50 text-muted-foreground px-3 py-1 transition-all animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
