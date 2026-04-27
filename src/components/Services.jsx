import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaCloud, FaRocket } from 'react-icons/fa';
import data from '../utils/data.json';

const iconMap = {
  FaCode: <FaCode />,
  FaPalette: <FaPalette />,
  FaCloud: <FaCloud />,
  FaRocket: <FaRocket />
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-slate-50 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {data.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[3rem] relative overflow-hidden group cursor-default"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 rounded-full -mr-16 -mt-16 transition-all group-hover:scale-150" />
              
              <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-xl shadow-indigo-600/20">
                {iconMap[service.icon]}
              </div>
              
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">{service.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {service.description}
              </p>
              
              <a 
                href="#contact" 
                className="mt-8 flex items-center gap-2 text-indigo-600 font-black text-sm uppercase tracking-widest hover:gap-3 transition-all cursor-pointer inline-flex"
              >
                Get Started <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
