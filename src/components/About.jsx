import React from 'react';
import { motion } from 'framer-motion';
import data from '../utils/data.json';

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/10 overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/[0.02] -skew-x-12 -z-10 translate-x-1/2" />
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0] 
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-pink-500/5 blur-[100px] rounded-full -z-10"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Animated Image Stack */}
          <div className="flex justify-center lg:justify-start">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-[320px] md:max-w-md"
            >
              {/* Liquid Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-pink-600 rounded-[3rem] rotate-3 blur-sm opacity-20 -z-10" />
              
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl relative">
                <img 
                  src={data.profile.about.image} 
                  alt="About Nikita" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Floating Detail Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 text-green-600 rounded-lg flex items-center justify-center font-bold text-xs">✓</div>
                  <div>
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Status</p>
                    <p className="text-xs font-black text-slate-800 dark:text-white">Active</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-600/20 text-indigo-600 rounded-lg flex items-center justify-center font-bold text-xs">★</div>
                  <div>
                    <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Focus</p>
                    <p className="text-xs font-black text-slate-800 dark:text-white">UI Design</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Luxury Typography Content */}
          <div className="space-y-10">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-12 h-[1px] bg-indigo-600" />
                <span className="text-indigo-600 font-black uppercase tracking-[0.4em] text-xs">Architecting Digital Futures</span>
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]"
              >
                Beyond Just <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400">Lines of Code</span>
              </motion.h3>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium font-serif italic"
            >
              "{data.profile.about.fullBio}"
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.profile.about.interests.map((interest, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-4 h-4 rounded-full border-4 border-indigo-600/30 group-hover:border-indigo-600 transition-colors" />
                  <span className="font-bold text-slate-700 dark:text-slate-300 tracking-tight">{interest}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="pt-10 flex flex-col md:flex-row items-center gap-10"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-950 ring-2 ring-indigo-600/20" alt="collaborator" />
                ))}
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs border-4 border-white dark:border-slate-950 ring-2 ring-indigo-600/20">+12</div>
              </div>
              <p className="text-sm font-bold text-slate-400 max-w-[200px]">Trusted by global teams to deliver excellence.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
