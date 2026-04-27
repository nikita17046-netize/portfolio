import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          Nikita<span className="text-slate-900 dark:text-white">.dev</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link text-[13px] uppercase tracking-widest font-bold ${activeSection === link.href.substring(1) ? 'active text-indigo-600 dark:text-indigo-400' : 'text-slate-500 hover:text-indigo-600'}`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-700" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-700" />}
          </button>
          <button onClick={toggleMenu} className="text-2xl outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-indigo-600"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
