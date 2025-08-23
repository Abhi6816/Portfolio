import profileImage from "@/assets/profile.jpg";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
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
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-primary rounded-full animate-pulse opacity-20"></div>
                <div className="absolute inset-2 bg-gradient-primary rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <img 
                  src={profileImage} 
                  alt="Abhiram Malraju" 
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
            
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Crafting Digital Experiences
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionate about using technology to enhance user experiences in health and fashion through diverse projects and academic leadership. Skilled in web development and AI integration, with a focus on creating accessible, impactful solutions.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Eager to contribute to innovative, purpose-driven teams and transformative projects. Currently pursuing my Bachelor's in Computer Science while actively leading technical initiatives and developing cutting-edge applications.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex flex-wrap gap-4 mt-8"
              >
                {[
                  { icon: "🎯", title: "Focus Areas", desc: "Web Development & AI" },
                  { icon: "🚀", title: "Current Role", desc: "Team Coordinator" },
                  { icon: "🎓", title: "Education", desc: "BTech Computer Science" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 1.2 + (index * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-card px-4 py-2 rounded-lg shadow-md border hover:border-primary/20 transition-all duration-300"
                  >
                    <span className="text-sm font-medium text-primary">{item.icon} {item.title}</span>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;