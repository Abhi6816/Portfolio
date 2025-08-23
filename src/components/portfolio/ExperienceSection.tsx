import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
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
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Leading teams and driving innovation in academic settings
            </p>
          </motion.div>
          
          {/* Timeline */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-primary opacity-20"
            ></motion.div>
            
            {/* Experience Item */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative flex flex-col md:flex-row items-start md:items-center mb-12"
            >
              {/* Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"
              ></motion.div>
              
              {/* Content Card */}
              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-6 rounded-xl shadow-lg border hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-sm text-primary mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">Oct 2024 – Present</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">Team Coordinator</h3>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>VBIT CSE Department</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Leading cross-functional teams to coordinate technical initiatives and academic projects. 
                    Responsible for project management, team collaboration, and ensuring delivery of high-quality 
                    solutions in computer science education and research activities.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Leadership", "Project Management", "Team Coordination"].map((skill, index) => (
                      <motion.span 
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.2 + (index * 0.1) }}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;