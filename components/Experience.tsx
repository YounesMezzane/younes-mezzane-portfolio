import React from 'react';
import Section from './Section';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <Section id="experience" title={t.sectionTitles.experience}>
      <div className="space-y-12">
        {t.experiences.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 md:pl-0 pr-8 md:pr-0">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 -translate-x-1/2"></div>
            
            <div className={`md:flex items-start justify-between ${index % 2 === 0 ? (isRTL ? 'md:flex-row' : 'md:flex-row-reverse') : (isRTL ? 'md:flex-row-reverse' : '')} group`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-[50%] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-800 shadow-sm -translate-x-1/2 z-10 mt-1.5 hidden md:block"></div>
              
              {/* Mobile Timeline Dot replacement */}
               <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-800 shadow-sm z-10 mt-1.5 md:hidden`}></div>

              {/* Date Column */}
              <div className={`md:w-[45%] mb-2 md:mb-0 ${index % 2 === 0 ? (isRTL ? 'md:text-right' : 'md:text-left') : (isRTL ? 'md:text-left' : 'md:text-right')}`}>
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                    <Calendar size={14} />
                    {exp.period}
                 </div>
              </div>

              {/* Content Column */}
              <div className="md:w-[45%] bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all hover:border-blue-200 dark:hover:border-blue-800">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{exp.role}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-500 dark:text-slate-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Briefcase size={14} />
                    <span className="font-medium text-slate-700 dark:text-slate-300">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;