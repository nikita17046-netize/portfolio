import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';
import data from '../utils/data.json';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-20 pb-10 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Bio */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              Nikita<span className="text-slate-900 dark:text-white">.dev</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm text-lg leading-relaxed">
              Designing and developing digital products that matter. Specializing in high-performance web applications.
            </p>
            <div className="flex space-x-5 text-xl">
              <a href={data.profile.socials.github} className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"><FaGithub /></a>
              <a href={data.profile.socials.linkedin} className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"><FaLinkedin /></a>
              <a href="#" className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Navigation</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Get in touch</h4>
            <div className="space-y-4">
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Mumbai, India<br />
                hello@nikita.dev
              </p>
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-indigo-600 font-bold group"
              >
                Back to top <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Nikita. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
