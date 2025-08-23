
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:abhimalraju@gmail.com',
      icon: <Mail className="w-5 h-5" />
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/abhiram-malraju',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'GitHub',
      href: '#',
      icon: <Github className="w-5 h-5" />
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <motion.div 
                className="text-3xl font-bold gradient-text"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                AM
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">Abhiram Malraju</h3>
                <p className="text-muted-foreground">Web Developer & AI Enthusiast</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Creating innovative solutions that bridge technology and human needs. 
              Always exploring the intersection of web development and artificial intelligence.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="p-3 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-all duration-300 group"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    whileHover={{ x: 4 }}
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="text-muted-foreground">Email:</p>
                <a 
                  href="mailto:abhimalraju@gmail.com"
                  className="text-primary hover:underline"
                >
                  abhimalraju@gmail.com
                </a>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Location:</p>
                <p>Hyderabad, India</p>
              </div>
              <div className="text-sm">
                <p className="text-muted-foreground">Status:</p>
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-green-600 font-medium">Available for opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-border mt-12 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div 
              className="flex items-center gap-2 text-sm text-muted-foreground"
              whileHover={{ scale: 1.02 }}
            >
              <span>© {currentYear} Abhiram Malraju. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>and lots of coffee ☕</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
