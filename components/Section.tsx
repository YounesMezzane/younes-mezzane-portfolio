import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = "", dark = false }) => {
  const { isRTL } = useLanguage();

  return (
    <section 
      id={id} 
      className={`py-16 px-4 sm:px-8 md:px-12 lg:px-24 transition-colors duration-300 ${
        dark 
          ? 'bg-slate-900 text-white' 
          : 'bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100'
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className={`text-3xl font-bold mb-12 relative inline-block ${dark ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
            {title}
            <span className={`absolute bottom-[-10px] ${isRTL ? 'right-0' : 'left-0'} w-1/2 h-1 ${dark ? 'bg-blue-500' : 'bg-blue-600 dark:bg-blue-500'} rounded-full`}></span>
          </h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;