import React from 'react';
import Section from './Section';
import { GraduationCap, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Education: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <Section id="education" title={t.sectionTitles.education} className="bg-slate-50 dark:bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.education.map((edu) => (
          <div key={edu.id} className={`bg-white dark:bg-slate-950 p-6 rounded-xl shadow-sm ${isRTL ? 'border-r-4' : 'border-l-4'} border-blue-500 hover:shadow-md transition-shadow`}>
            <div className="flex justify-between items-start mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400">
                <GraduationCap size={24} />
              </div>
              <div className="flex items-center gap-1 text-slate-400 text-sm">
                <Clock size={14} />
                {edu.period}
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">{edu.degree}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{edu.school}</p>
            <ul className="space-y-1">
              {edu.details.map((detail, idx) => (
                <li key={idx} className="text-slate-600 dark:text-slate-300 text-sm border-t border-slate-100 dark:border-slate-800 py-2 first:border-0">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;