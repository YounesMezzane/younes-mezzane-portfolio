import React from 'react';
import Section from './Section';
import { Award, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Certifications: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="certifications" title={t.sectionTitles.certifications}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.certifications.list.map((cert, index) => (
          <div key={index} className="group bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
              {cert.issuer.toLowerCase().includes('cisco') ? (
                <ShieldCheck className="text-blue-600 dark:text-blue-400" size={24} />
              ) : (
                <Award className="text-blue-600 dark:text-blue-400" size={24} />
              )}
            </div>
            <h4 className="font-bold text-slate-800 dark:text-white mb-1 leading-tight">{cert.name}</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
         <a 
           href="https://www.credly.com/users/mezzane-younes" 
           target="_blank" 
           rel="noreferrer"
           className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
         >
           {t.certifications.viewAll} <Award size={16}/>
         </a>
      </div>
    </Section>
  );
};

export default Certifications;