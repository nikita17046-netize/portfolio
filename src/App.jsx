import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './pages/AllProjects';
import { CustomCursor, ScrollProgress, BackToTop } from './components/UI';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="relative">
        <ScrollProgress />
        <CustomCursor />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Services />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Testimonials />
              <Blog />
              <Contact />
              <Footer />
            </main>
          } />
          
          <Route path="/projects" element={<AllProjects />} />
        </Routes>

        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
