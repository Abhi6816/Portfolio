import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Stethoscope, Sparkles, Video } from "lucide-react";
import { motion } from "framer-motion";
import { li } from "framer-motion/client";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Hospital Test Result Management System",
      description: "A comprehensive web application for managing hospital test results with secure patient data handling, automated report generation, and real-time notifications for healthcare professionals.",
      icon: <Stethoscope className="w-8 h-8" />,
      tech: ["Java", "SQL", "HTML", "CSS", "JavaScript","Node.js","Express.js","AI LLM"],
      category: "Healthcare Technology",
      features: ["Patient Management", "Secure Data Handling", "AI report Analysis", "Real-time Updates"],
      liveDemoLink: "https://healthstop.vercel.app/",
      githubLink: "https://github.com/Abhi6816/Hospital-Test-Management"
    },
    {
      title: "CoutureAI – AI Fashion Design Generator",
      description: "An innovative AI-powered platform that generates unique fashion designs based on user preferences, trends, and style inputs. Features machine learning algorithms for personalized recommendations.",
      icon: <Sparkles className="w-8 h-8" />,
      tech: ["Javascript", "AI LLM", "Node.js", "Express.js","HTML","CSS"],
      category: "Artificial Intelligence",
      features: ["AI Design Generation", "Style Recommendations", "Trend Analysis", "User Personalization"],
      liveDemoLink: "#",
      githubLink: "https://github.com/Abhi6816/Couture-Ai"
    },
    {
      title: "VCConnect – AI-Driven Video Calling App",
      description: "Next-generation video calling application with AI-enhanced features including background noise reduction, automatic transcription, and smart meeting insights for better communication.",
      icon: <Video className="w-8 h-8" />,
      tech: ["JavaScript", "React.js", "Node.js", "AI Integration", "WebRTC"],
      category: "Communication Technology",
      features: ["AI Noise Reduction", "Auto Transcription", "Smart Insights", "Real-time Communication"],
      liveDemoLink: "https://test-gamma-one-37.vercel.app/",
      githubLink: "https://github.com/Abhi6816/test"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions combining web development and AI to solve real-world problems
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card rounded-xl shadow-lg border group hover:border-primary/20 overflow-hidden transition-all duration-300"
              >
                {/* Project Header */}
                <div className="p-6 bg-gradient-subtle">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 bg-primary/10 rounded-lg text-primary transition-transform duration-300"
                    >
                      {project.icon}
                    </motion.div>
                    <div>
                      <span className="text-xs uppercase tracking-wide text-primary font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Features */}
                <div className="p-6 pt-0">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-primary">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 group/btn" onClick={() => window.open(project.liveDemoLink, "_blank")}>
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 group/btn" onClick={() => window.open(project.githubLink, "_blank")}>
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View More Projects */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" className="group">
              <Code className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View More Projects on GitHub
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;