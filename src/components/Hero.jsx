import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaChevronDown, FaReact, FaNodeJs, FaTimes, FaDownload, FaEnvelope } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';
import data from '../utils/data.json';

const ProfileModal = ({ onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-950/90 backdrop-blur-2xl"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, x: 20 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        exit={{ scale: 0.9, opacity: 0, x: 20 }}
        className="bg-white dark:bg-[#0f172a] w-full max-w-4xl rounded-[3rem] md:rounded-[4rem] shadow-[0_0_100px_-20px_rgba(79,70,229,0.4)] relative overflow-hidden flex flex-col lg:flex-row border border-white/10"
        onClick={e => e.stopPropagation()}
      >
        {/* Left Column: Visual Identity */}
        <div className="w-full lg:w-[40%] bg-indigo-600 p-10 md:p-14 text-white relative overflow-hidden flex flex-col items-center justify-center text-center">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
           
           <div className="relative z-10">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-[3.5rem] overflow-hidden border-8 border-white/20 shadow-2xl mb-8 -rotate-3 mx-auto">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop" alt="Identity" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-none mb-4">{data.profile.name}</h2>
              <p className="text-indigo-200 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Creative Solutions Architect</p>
              
              <div className="flex justify-center gap-4">
                 {[
                   { icon: <FaLinkedin />, link: data.profile.socials.linkedin },
                   { icon: <FaGithub />, link: data.profile.socials.github },
                   { icon: <FaEnvelope />, link: `mailto:${data.profile.name}@dev.com` }
                 ].map((social, i) => (
                    <a key={i} href={social.link} target="_blank" rel="noreferrer" className="p-4 bg-white/10 hover:bg-white hover:text-indigo-600 transition-all rounded-2xl text-xl backdrop-blur-lg">
                       {social.icon}
                    </a>
                 ))}
              </div>
           </div>
        </div>

        {/* Right Column: Detailed Info */}
        <div className="w-full lg:w-[60%] p-8 md:p-14 dark:bg-slate-900 relative">
           <button 
             onClick={onClose}
             className="absolute top-8 right-8 p-3 bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all rounded-full z-20 group"
           >
             <FaTimes className="group-hover:rotate-90 transition-transform" />
           </button>

           <div className="space-y-10 md:space-y-12">
              <div>
                 <h3 className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-6 border-b border-indigo-600/20 pb-2">Core Expertise</h3>
                 <div className="flex flex-wrap gap-2">
                    {data.profile.roles.map((role, i) => (
                       <span key={i} className="px-5 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-black uppercase tracking-widest text-[9px] rounded-xl border border-slate-200 dark:border-slate-700">
                          {role}
                       </span>
                    ))}
                 </div>
              </div>

              <div>
                 <h3 className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-4">Professional Story</h3>
                 <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-serif italic border-l-4 border-indigo-600/30 pl-8">
                    "{data.profile.about.fullBio}"
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                 {[
                   { label: "Years Experience", value: "05+", icon: "✨" },
                   { label: "Projects Delivered", value: "120+", icon: "🚀" }
                 ].map((stat, i) => (
                    <div key={i} className="p-6 md:p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 group hover:border-indigo-600 transition-all">
                       <span className="text-2xl mb-2 block">{stat.icon}</span>
                       <p className="text-3xl font-black dark:text-white mb-1 tracking-tighter">{stat.value}</p>
                       <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                    </div>
                 ))}
              </div>

              <div className="pt-4">
                 <button className="w-full py-6 bg-slate-900 dark:bg-indigo-600 text-white rounded-[2rem] font-black uppercase tracking-[0.4em] text-[10px] flex items-center justify-center gap-4 hover:bg-indigo-700 transition-all shadow-2xl active:scale-[0.98] group">
                    <FaDownload className="text-lg group-hover:translate-y-1 transition-transform" /> 
                    Download Official CV
                 </button>
              </div>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const roles = data.profile.roles;
  const typingSpeed = isDeleting ? 50 : 150;

  const techIcons = [
    { icon: <FaReact className="text-[#61DAFB]" />, label: "React" },
    { icon: <FaNodeJs className="text-[#339933]" />, label: "Node" },
    { icon: <SiJavascript className="text-[#F7DF1E]" />, label: "JS" },
    { icon: <SiTailwindcss className="text-[#06B6D4]" />, label: "Tailwind" }
  ];

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[roleIndex];
      setCurrentText(isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1));
      if (!isDeleting && currentText === fullText) setTimeout(() => setIsDeleting(true), 2000);
      else if (isDeleting && currentText === '') { setIsDeleting(false); setRoleIndex((prev) => (prev + 1) % roles.length); }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#0b0f1a] -z-20" />
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none -z-10" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      
      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 12, repeat: Infinity, delay: 2 }} className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left z-10 order-2 lg:order-1">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-indigo-600" />
              <span className="text-indigo-600 dark:text-indigo-400 font-black uppercase tracking-[0.3em] text-xs">Available for new projects</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Hello, <br /> I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600">Nikita</span>
            </h1>

            <div className="text-2xl md:text-4xl font-bold text-slate-700 dark:text-slate-300 h-12 mb-8 lowercase">
              I am a {currentText}<span className="inline-block w-2 h-8 bg-indigo-600 ml-1 align-middle animate-pulse"></span>
            </div>

            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
              Architecting modern web solutions with precision and passion. Specialized in full-stack ecosystem development.
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              <button 
                onClick={() => setShowProfile(true)}
                className="btn-primary flex items-center gap-3 group"
              >
                My Profile <FaLinkedin className="group-hover:scale-110 transition-transform" />
              </button>
              <a href="#contact" className="btn-outline">Get in Touch</a>
            </div>

            <div className="flex items-center gap-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Main Stack</p>
              <div className="flex gap-4">
                {techIcons.map((tech, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }} className="text-2xl cursor-help opacity-40 hover:opacity-100 transition-opacity">
                    {tech.icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-[4rem] rotate-6 opacity-10 blur-xl animate-pulse" />
            <div className="absolute inset-0 border-2 border-indigo-600/20 rounded-[4rem] -rotate-6" />
            
            <div className="relative h-full w-full overflow-hidden rounded-[4rem] shadow-2xl border-4 border-white dark:border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop" 
                alt="Nikita Profile" 
                className="w-full h-full object-cover" 
              />
            </div>

            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -left-6 glass p-4 rounded-3xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-xl"><FaGithub /></div>
              <div>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Code Base</p>
                <p className="text-xs font-black">50+ Repos</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -right-6 glass p-4 rounded-3xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-pink-500 text-white rounded-xl flex items-center justify-center text-xl">★</div>
              <div>
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Ranking</p>
                <p className="text-xs font-black">Top 1% Dev</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showProfile && <ProfileModal onClose={() => setShowProfile(false)} />}
      </AnimatePresence>

    </section>
  );
};

export default Hero;
