import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import data from '../utils/data.json';

const AllProjects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Fullstack'];

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = filter === 'All' 
    ? data.projects 
    : data.projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f1a] pb-20">
      {/* Sticky Header */}
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center gap-3 px-6 py-2.5 bg-indigo-600 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-indigo-700 transition-all shadow-lg active:scale-95 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="hidden md:flex items-center gap-4">
             <span className="w-8 h-[1px] bg-slate-300 dark:bg-slate-700" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Project Archive</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto pt-32 px-6">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">Complete <span className="text-indigo-600">Archive</span></h1>
            <p className="text-slate-500 font-medium">A collection of all my technical explorations and professional works.</p>
          </div>

          <div className="flex bg-white dark:bg-slate-800 p-1.5 rounded-[1.5rem] shadow-sm border border-slate-200 dark:border-slate-700">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all ${filter === cat ? 'bg-indigo-600 text-white shadow-lg' : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group glass p-4 rounded-[2.5rem] card-hover"
              >
                <div className="relative overflow-hidden rounded-[2rem] aspect-video mb-6">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-indigo-600/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-5 bg-white text-slate-900 rounded-full hover:scale-125 transition-all shadow-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest">
                       <FaGithub className="text-xl" /> Source Code
                    </a>
                  </div>
                </div>
                <div className="px-3 pb-4">
                  <span className="text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                  <h4 className="text-2xl font-black mt-2 tracking-tighter group-hover:text-indigo-600 transition-colors uppercase">{project.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm line-clamp-2 leading-relaxed font-medium">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tools?.map((tool, i) => (
                      <span key={i} className="text-[9px] font-black px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500 rounded-lg border border-slate-200 dark:border-slate-700">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-40">
            <p className="text-2xl font-black text-slate-300 uppercase tracking-widest">No projects found in this category</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AllProjects;
