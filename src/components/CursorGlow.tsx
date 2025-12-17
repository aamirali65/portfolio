import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="cursor-glow hidden lg:block"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 25,
        mass: 0.1,
      }}
    />
  );
};

export default CursorGlow;
