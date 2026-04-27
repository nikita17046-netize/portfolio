import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaTimes, FaArrowRight } from 'react-icons/fa';
import data from '../utils/data.json';

const BlogModal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-3xl p-8 md:p-12 relative"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"><FaTimes /></button>

        <div className="space-y-6">
          <div className="flex items-center gap-4 text-sm text-indigo-600 dark:text-indigo-400 font-bold uppercase">
            <span>{blog.category}</span>
            <span className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
            <span className="flex items-center gap-2 font-medium text-slate-500"><FaCalendarAlt /> {blog.date}</span>
          </div>
          <h2 className="text-4xl font-extrabold">{blog.title}</h2>
          <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
            <p className="text-xl font-medium">{blog.excerpt}</p>
            <p>{blog.content}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section id="blog" className="section-padding bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest mb-2">My Thoughts</h2>
          <h3 className="text-4xl font-bold">Latest Blog Posts</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2.5rem] card-hover group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-lg">{blog.category}</span>
                  <span className="text-sm text-slate-400 flex items-center gap-2"><FaCalendarAlt /> {blog.date}</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors uppercase">{blog.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 line-clamp-3 mb-6 flex-grow">{blog.excerpt}</p>
                <button 
                  onClick={() => setSelectedBlog(blog)}
                  className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:gap-4 transition-all"
                >
                  Read More <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedBlog && <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Blog;
