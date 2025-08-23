import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpeg";
import { ArrowRight, Download, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/80 to-primary/90" />
      </div>
      
      {/* Animated Floating Elements */}
      <div className="particles absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] left-[10%] w-3 h-3 bg-white/30 rounded-full"
        />
        <motion.div 
          animate={{
            y: [-8, 12, -8],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-[60%] right-[15%] w-2 h-2 bg-white/40 rounded-full"
        />
        <motion.div 
          animate={{
            y: [-12, 8, -12],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-[30%] left-[20%] w-4 h-4 bg-white/20 rounded-full"
        />
        
        {/* Floating Icons */}
        <motion.div
          animate={{
            y: [-5, 15, -5],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[25%] right-[20%] text-white/20"
        >
          <Code2 className="w-8 h-8" />
        </motion.div>
        <motion.div
          animate={{
            y: [-8, 8, -8],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-[40%] right-[10%] text-white/20"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            staggerChildren: 0.3
          }}
          className="space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block"
              >
                Abhiram
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block gradient-text bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
              >
                Malraju
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4"
          >
            <motion.p 
              className="text-2xl md:text-3xl text-white/90 font-medium"
              whileHover={{ scale: 1.02 }}
            >
              Web Developer & AI Enthusiast
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '200px' }}
              transition={{ duration: 1, delay: 1 }}
              className="h-1 bg-gradient-to-r from-white/60 to-transparent mx-auto rounded-full"
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about using technology to enhance user experiences in health and fashion through diverse projects and academic leadership.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={scrollToProjects}
                variant="hero" 
                size="lg" 
                className="min-w-[180px] text-lg font-semibold shadow-2xl hover:shadow-white/20"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={scrollToContact}
                variant="glass" 
                size="lg" 
                className="min-w-[180px] text-lg font-semibold text-white border-white/30 hover:bg-white/20 backdrop-blur-md"
              >
                Contact Me
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center relative">
            <motion.div 
              animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;