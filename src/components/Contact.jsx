import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaPen } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { offsetLeft, offsetTop } = e.currentTarget;
    setMousePos({ x: e.pageX - offsetLeft, y: e.pageY - offsetTop });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section 
      id="contact" 
      className="section-padding relative overflow-hidden bg-white dark:bg-slate-950"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Mesh Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-indigo-600 font-bold uppercase tracking-[0.4em] mb-4 text-xs">Available for hire</h2>
            <h3 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">Ready to start your <br /><span className="text-indigo-600">next big project?</span></h3>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed max-w-md">
              Whether you have a fully-baked idea or just a spark of inspiration, I'm here to help you build it.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 glass flex items-center justify-center rounded-3xl text-indigo-600 text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-xl"><FaEnvelope /></div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-xl font-bold font-mono">hello@nikita.dev</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-14 rounded-[3rem] shadow-2xl relative border border-white/20"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-transparent rounded-2xl py-4 px-6 outline-none focus:border-indigo-600 transition-all font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-transparent rounded-2xl py-4 px-6 outline-none focus:border-indigo-600 transition-all font-bold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-transparent rounded-2xl py-4 px-6 outline-none focus:border-indigo-600 transition-all font-bold resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-4 shadow-xl shadow-indigo-600/20"
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Send Proposal <FaPaperPlane /></>
                )}
              </button>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="p-4 bg-green-500/10 text-green-600 rounded-xl font-bold text-center border border-green-500/20"
                >
                  Success! I'll be in touch very soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
