import React from 'react';
import Section from './Section';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CheckCircle, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SkillsProps {
  isDarkMode?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const { t, isRTL } = useLanguage();

  // Determine chart text color based on theme
  const chartTextColor = isDarkMode ? '#cbd5e1' : '#475569';
  const tooltipBg = isDarkMode ? '#1e293b' : '#ffffff';
  const tooltipColor = isDarkMode ? '#fff' : '#1e293b';

  return (
    <Section id="skills" title={t.sectionTitles.skills} className="bg-white dark:bg-slate-950">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Technical Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Zap size={20} />
            {t.skills.technical}
          </h3>
          <div className="space-y-6">
            {t.skills.technicalList.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200" dir="ltr">{skill.name}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills & Interests */}
        <div className="space-y-12">
           <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle size={20} />
                {t.skills.soft}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.skills.softSkillsList.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2 bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full"></div>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{skill.name}</span>
                  </div>
                ))}
              </div>
           </div>

           <div>
             <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">{t.skills.interests}</h3>
             <div className="flex flex-wrap gap-2">
                {t.skills.interestsList.map(interest => (
                  <span key={interest} className="px-3 py-1 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-800">
                    {interest}
                  </span>
                ))}
             </div>
           </div>
        </div>
      </div>

      {/* Languages Chart */}
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
        <h3 className="text-xl font-semibold mb-8 text-center text-slate-800 dark:text-white">{t.skills.languages}</h3>
        <div className="h-64 w-full" dir="ltr">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={t.skills.languagesList}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <XAxis type="number" domain={[0, 5]} hide />
              <YAxis 
                type="category" 
                dataKey="name" 
                tick={{ fill: chartTextColor, fontSize: 14 }} 
                width={100} 
                orientation={isRTL ? "right" : "left"}
              />
              <Tooltip 
                cursor={{fill: isDarkMode ? '#334155' : '#e2e8f0', opacity: 0.4}}
                contentStyle={{ 
                  backgroundColor: tooltipBg, 
                  border: isDarkMode ? 'none' : '1px solid #e2e8f0', 
                  color: tooltipColor,
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={20}>
                {t.skills.languagesList.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index < 2 ? '#3b82f6' : '#94a3b8'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-8 mt-4 text-sm text-slate-500 dark:text-slate-400">
             <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-sm"></div> {t.skills.native}</div>
             <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-400 rounded-sm"></div> {t.skills.intermediate}</div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;