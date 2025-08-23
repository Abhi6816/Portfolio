import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  GitBranch, 
  Cloud,
  Terminal,
  Layers,
  Zap,
  Brain
} from "lucide-react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Java", level: 90, icon: "☕" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "JavaScript", level: 88, icon: "🟨" },
        { name: "C", level: 80, icon: "⚡" },
        { name: "SQL", level: 85, icon: "🗄️" }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Bootstrap", level: 80, icon: "🅱️" },
        { name: "Express.js", level: 85, icon: "🚀" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 85, icon: "📋" },
        { name: "VSCode", level: 95, icon: "💻" },
        { name: "IntelliJ", level: 80, icon: "🧠" },
        { name: "Eclipse", level: 75, icon: "🌒" },
        { name: "GitHub Actions", level: 70, icon: "⚙️" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Firebase", level: 80, icon: "🔥" },
        { name: "Supabase", level: 75, icon: "⚡" },
        { name: "Git", level: 90, icon: "🌳" },
        { name: "CI/CD", level: 70, icon: "🔄" }
      ]
    },
    {
      title: "Core Competencies",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Data Structures", level: 85, icon: "🗂️" },
        { name: "Algorithms", level: 80, icon: "🧮" },
        { name: "DBMS", level: 85, icon: "💾" },
        { name: "Operating Systems", level: 75, icon: "🖥️" },
        { name: "Software Engineering", level: 88, icon: "🏗️" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Expertise across full-stack development and emerging technologies
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-card rounded-xl shadow-lg border group hover:border-primary/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-2 bg-primary/10 rounded-lg text-primary transition-colors duration-300"
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                          duration: 0.3 
                        }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <motion.span 
                              whileHover={{ scale: 1.2 }}
                              className="text-lg"
                            >
                              {skill.icon}
                            </motion.span>
                            <span className="font-medium text-sm">{skill.name}</span>
                          </div>
                          <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xs text-primary font-bold bg-primary/10 px-2 py-1 rounded-full"
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        
                        {/* Enhanced Progress Bar */}
                        <div className="relative">
                          <Progress 
                            value={skill.level} 
                            className="h-3 bg-secondary"
                          />
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3,
                              duration: 1
                            }}
                            className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full shadow-lg"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Additional Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-card rounded-xl shadow-lg border p-8">
              <h3 className="text-xl font-semibold mb-6">Additional Expertise</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Machine Learning", "AI Integration", "API Development", "Database Design",
                  "Responsive Design", "Version Control", "Agile Methodology", "Problem Solving",
                  "Team Leadership", "Project Management"
                ].map((skill, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.7 + (index * 0.05),
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;