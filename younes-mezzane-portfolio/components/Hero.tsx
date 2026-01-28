import React from 'react';
import { CONTACT_INFO, CV_LINK } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Award, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
        
        {/* Text Content */}
        <motion.div 
          className={`flex-1 text-center ${isRTL ? 'md:text-right' : 'md:text-left'} space-y-8`}
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">
              {t.hero.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Younes <span className="text-blue-400">Mezzane</span>
            </h1>
          </div>

          <div className={`border-2 border-blue-400/50 p-6 rounded-lg bg-slate-800/30 backdrop-blur-sm max-w-2xl mx-auto ${isRTL ? 'md:mr-0 md:text-right' : 'md:ml-0 md:text-left'}`}>
            <h2 className="text-2xl md:text-3xl text-white font-extrabold tracking-wide mb-4">
              {t.hero.role}
            </h2>
            <p className="text-slate-100 text-lg leading-relaxed font-semibold">
              {t.hero.summary}
            </p>
          </div>

          <div className={`flex flex-wrap justify-center ${isRTL ? 'md:justify-start' : 'md:justify-start'} gap-4 pt-2`}>
            <a href={CV_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 hover:bg-blue-50 rounded-lg font-bold transition-all shadow-lg shadow-white/10">
              <FileText size={18} />
              {t.hero.cvBtn}
            </a>
            <a 
              href="#contact" 
              onClick={scrollToContact}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all shadow-lg shadow-blue-900/50"
            >
              <Mail size={18} />
              {t.hero.contactBtn}
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium transition-all">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a href={CONTACT_INFO.credly} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium transition-all border border-slate-600">
              <Award size={18} />
              Credly
            </a>
          </div>

          <div className={`flex flex-col md:flex-row gap-4 text-sm text-slate-400 pt-6 border-t border-slate-700/50 mt-6`}>
            <div className={`flex items-center justify-center ${isRTL ? 'md:justify-start' : 'md:justify-start'} gap-2`}>
              <Phone size={14} className="text-blue-400" />
              <span dir="ltr">{CONTACT_INFO.phone}</span>
            </div>
            <div className={`flex items-center justify-center ${isRTL ? 'md:justify-start' : 'md:justify-start'} gap-2`}>
              <MapPin size={14} className="text-blue-400" />
              {CONTACT_INFO.address}
            </div>
          </div>
        </motion.div>

        {/* Image/Visual */}
        <motion.div 
          className={`flex-1 flex justify-center ${isRTL ? 'md:justify-start' : 'md:justify-end'}`}
          initial={{ opacity: 0, scale: 0.8, x: isRTL ? -50 : 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-slate-800 bg-slate-800 overflow-hidden shadow-2xl">
               <img
                 src="https://raw.githubusercontent.com/YounesMezzane/my-website-assets/main/mypic.jpeg"
                 alt="Younes Mezzane"
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </motion.div>

      </div>
    </header>
  );
};

export default Hero;