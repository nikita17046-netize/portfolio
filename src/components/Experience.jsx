import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import data from '../utils/data.json';

const ExperienceCard = ({ item, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
    >
      {/* Icon Marker with Pulsating Effect */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 bg-indigo-600 text-white shadow-2xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-20 relative">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-indigo-600 rounded-full -z-10"
        />
        {item.title.toLowerCase().includes('degree') ? <FaGraduationCap className="text-xl" /> : <FaBriefcase className="text-xl" />}
      </div>
      
      {/* Card Content with Hover Tilt Effect */}
      <motion.div 
        whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -5 : 5 }}
        className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass p-8 rounded-[2rem] shadow-sm hover:shadow-indigo-500/10 transition-all border border-white/10"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <h4 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">{item.title}</h4>
          <time className="px-4 py-1 bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-xs font-black rounded-full whitespace-nowrap border border-indigo-600/20">
            {item.period}
          </time>
        </div>
        <div className="text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-4 flex items-center gap-2 italic">
          <span className="w-8 h-[1px] bg-indigo-600/30" /> {item.company}
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" ref={containerRef} className="section-padding bg-white dark:bg-slate-950 overflow-hidden pt-40">
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 rounded-full bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.5em] mb-8"
          >
            Evolution
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
          >
            My Professional <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Journey</span>
          </motion.h3>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full" />
        </div>

        <div className="relative">
          {/* Drawing Timeline Path */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 origin-top -translate-x-1/2 z-0 rounded-full"
          />

          <div className="space-y-12 md:space-y-16">
            {data.experience.map((item, index) => (
              <ExperienceCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
