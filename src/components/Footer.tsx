import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/aamirali65', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/aamirali65', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/aamir_almani65', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contact.aamirali65@gmail.com', label: 'Email' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border">
      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <a href="#home" className="inline-block text-2xl font-bold">
                Aamir<span className="text-primary">Almani</span>
              </a>
              <p className="text-muted-foreground text-sm max-w-xs">
                Building modern, scalable web and mobile applications with passion and precision.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-secondary hover:bg-primary/20 border border-border hover:border-primary/50 rounded-lg transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-muted-foreground hover:text-primary" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:contact.aamirali65@gmail.com" className="hover:text-primary transition-colors">
                    contact.aamirali65@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+923272527496" className="hover:text-primary transition-colors">
                    +92-3272527496
                  </a>
                </li>
                <li>Karachi Sindh, PK</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aamir Almani. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
