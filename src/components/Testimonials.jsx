import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import data from '../utils/data.json';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest mb-2">Wall of Love</h2>
          <h3 className="text-4xl font-bold">What Clients Say</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {data.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass p-10 rounded-[3rem] relative overflow-hidden"
            >
              <FaQuoteLeft className="absolute -top-4 -left-4 text-indigo-600/10 text-9xl -z-10" />
              <div className="flex items-center gap-4 mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-indigo-600/20" />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-lg italic text-slate-600 dark:text-slate-400 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
