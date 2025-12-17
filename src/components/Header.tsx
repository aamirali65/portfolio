import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : ''
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.a
            href="#home"
            className="text-xl lg:text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Aamir<span className="text-primary">Almani</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 lg:px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button variant="glow" size="sm" asChild>
                <a href="https://www.upwork.com/freelancers/~0144fd7272952bf183" target="_blank" rel="noopener noreferrer">Hire Me</a>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <Button variant="glow" className="mt-2" asChild>
                    <a href="https://www.upwork.com/freelancers/~0144fd7272952bf183" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                  Hire Me
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
