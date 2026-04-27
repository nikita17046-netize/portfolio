import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb } from 'react-icons/si';
import data from '../utils/data.json';

const iconMap = {
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaPython: <FaPython />,
  SiJavascript: <SiJavascript />,
  SiTailwindcss: <SiTailwindcss />,
  SiMongodb: <SiMongodb />
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest mb-2">Technical Skills</h2>
          <h3 className="text-4xl font-bold">What I Work With</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(99, 102, 241, 0.2)" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-[2rem] transition-all border border-transparent hover:border-indigo-600/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 text-2xl rounded-2xl">
                  {iconMap[skill.icon]}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{skill.name}</h4>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">{skill.category}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>Proficiency</span>
                  <span className="text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
