import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const roles = ['Full Stack Developer', 'Flutter Developer', 'Android Developer', 'MERN Stack Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 lg:w-80 lg:h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">
              Available for Freelance Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="text-gradient">Aamir Almani</span>
            <br />
            <span className="text-muted-foreground">Flutter Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Crafting exceptional web experiences and mobile applications with React, Next.js, 
            Flutter, and modern technologies. Let's build something amazing together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="glow" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { icon: Github, href: 'https://github.com/aamirali65', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/aamirali65', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com/aamir_almani65', label: 'Twitter' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-secondary/50 hover:bg-primary/20 border border-border hover:border-primary/50 rounded-full transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} className="text-muted-foreground hover:text-primary" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
       <div className="flex justify-center items-center py-10">
       <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bottom-8"
        >
          <motion.a
            href="#skills"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
       </div>
      </div>
    </section>
  );
};

export default HeroSection;
