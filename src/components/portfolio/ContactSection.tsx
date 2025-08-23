import { Mail, Linkedin, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's collaborate on innovative projects and create something amazing together
            </p>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                I'm always excited to discuss new opportunities, innovative projects, and ways to contribute to meaningful technological solutions. Whether you're looking for a collaborator, have a project in mind, or just want to connect, I'd love to hear from you!
              </p>
            </motion.div>
            
            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: "Email",
                  value: "abhimalraju@gmail.com",
                  href: "mailto:abhimalraju@gmail.com",
                  delay: 0.4
                },
                {
                  icon: <Linkedin className="w-6 h-6" />,
                  title: "LinkedIn",
                  value: "linkedin.com/in/abhiram-malraju",
                  href: "https://linkedin.com/in/abhiram-malraju",
                  delay: 0.6
                }
              ].map((contact, index) => (
                <motion.a 
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: contact.delay }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-4 p-6 bg-card rounded-lg shadow-lg border group hover:border-primary/20 transition-all duration-300"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 bg-primary/10 rounded-lg text-primary transition-transform duration-300"
                  >
                    {contact.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">{contact.title}</h4>
                    <p className="text-muted-foreground text-sm">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-4 p-6 bg-card rounded-lg shadow-lg border">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="p-3 bg-primary/10 rounded-lg text-primary"
                >
                  <MapPin className="w-6 h-6" />
                </motion.div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </motion.div>
            
            {/* Quick Response Promise */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-primary/10 rounded-lg p-6 border border-primary/20 max-w-2xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-primary">Quick Response</span>
              </div>
              <p className="text-sm text-muted-foreground">
                I typically respond to emails within 24 hours and am always eager to discuss new opportunities!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;