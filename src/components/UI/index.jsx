import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, .cursor-pointer, input, textarea')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-indigo-600 rounded-full z-[10000] pointer-events-none hidden md:block shadow-lg"
      animate={{
        x: mousePosition.x - 6,
        y: mousePosition.y - 6,
        scale: isHovering ? 2.5 : 1,
        opacity: isHovering ? 0.6 : 1,
      }}
      transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
    />
  );
};

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-indigo-600 origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.pageYOffset > 500);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-10 right-10 p-4 bg-indigo-600 text-white rounded-full shadow-2xl z-[90] focus:outline-none"
    >
      <FaArrowUp />
    </motion.button>
  );
};
