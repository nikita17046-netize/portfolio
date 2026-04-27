import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import data from '../utils/data.json';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-red-500 hover:text-white transition-all z-10"
        >
          <FaTimes />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden h-64 bg-slate-100 dark:bg-slate-800">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex">
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="w-full btn-primary py-4 text-center text-sm flex items-center justify-center gap-3">
                <FaGithub /> Explore Source Code
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-black rounded-full uppercase tracking-widest">
                {project.category}
              </span>
              <h2 className="text-4xl font-black mt-4 leading-tight">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tools?.map((tool, i) => (
                  <span key={i} className="text-xs font-bold px-3 py-1.5 bg-indigo-600/5 text-indigo-600 dark:text-indigo-400 rounded-lg border border-indigo-600/20">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-indigo-600 dark:text-indigo-400 uppercase text-xs tracking-wider">The Problem</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">{project.details.problem}</p>
              </div>
              <div>
                <h3 className="font-bold text-indigo-600 dark:text-indigo-400 uppercase text-xs tracking-wider">The Solution</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-1">{project.details.solution}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-indigo-600 dark:text-indigo-400 uppercase text-xs tracking-wider">Challenges</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">{project.details.challenges}</p>
                </div>
                <div>
                  <h3 className="font-bold text-indigo-600 dark:text-indigo-400 uppercase text-xs tracking-wider">Learnings</h3>
                  <p className="text-slate-600 dark:text-slate-400 mt-1 text-sm">{project.details.learnings}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

import { Link } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ['All', 'Frontend', 'Backend', 'Fullstack'];

  const filteredProjects = filter === 'All' 
    ? data.projects 
    : data.projects.filter(p => p.category === filter);

  const displayedProjects = filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-indigo-600 font-black uppercase tracking-widest mb-2 text-xs">Portfolio</h2>
            <h3 className="text-5xl font-black tracking-tighter">Selected <span className="text-indigo-600">Works</span></h3>
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

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group glass p-4 rounded-[2.5rem] card-hover cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-[2rem] aspect-video mb-6">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-indigo-600/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-white text-indigo-600 px-8 py-3 rounded-full font-black shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">View Case Study</span>
                  </div>
                </div>
                <div className="px-3 pb-4">
                  <span className="text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                  <h4 className="text-2xl font-black mt-2 group-hover:text-indigo-600 transition-colors uppercase tracking-tighter">{project.title}</h4>
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

        {/* View All Button redirects to new page */}
        <div className="mt-20 text-center">
          <Link 
            to="/projects"
            className="px-10 py-4 bg-white dark:bg-slate-900 border-2 border-indigo-600/20 text-indigo-600 rounded-full font-black uppercase tracking-widest text-sm hover:bg-indigo-600 hover:text-white transition-all shadow-xl active:scale-95 inline-block"
          >
            View Complete Archive
          </Link>
        </div>

        <AnimatePresence>
          {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
