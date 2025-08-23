import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology (BTech)",
      field: "Computer Science",
      institution: "Vignana Bharathi Institute of Technology",
      period: "2023 – 2027",
      status: "Currently Pursuing",
      icon: "🎓",
      description: "Focusing on software engineering, data structures, algorithms, and modern web technologies."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="gradient-text">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Building a strong foundation in computer science and technology
            </p>
          </motion.div>
          
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-card p-6 rounded-xl shadow-lg border group hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-4xl transition-transform duration-300"
                  >
                    {edu.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-primary mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{edu.period}</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {edu.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <p className="text-lg text-primary font-medium mb-2">{edu.field}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 text-primary">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-sm font-medium">Academic Excellence</span>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;