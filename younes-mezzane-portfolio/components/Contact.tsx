import React, { useState } from 'react';
import Section from './Section';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct the mailto link with pre-filled data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open the user's email client
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Section id="contact" title={t.sectionTitles.contact} className="bg-slate-50 dark:bg-slate-900">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <div className="md:w-1/3 space-y-8">
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {t.contact.description}
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t.contact.phoneLabel}</p>
                <p className="font-medium" dir="ltr">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t.contact.emailInfoLabel}</p>
                <p className="font-medium">{CONTACT_INFO.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t.contact.locationLabel}</p>
                <p className="font-medium">{CONTACT_INFO.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-2/3 bg-white dark:bg-slate-950 p-8 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.contact.nameLabel}</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all"
                  placeholder={t.contact.placeholderName}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.contact.emailLabel}</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  required 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all"
                  placeholder={t.contact.placeholderEmail}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.contact.messageLabel}</label>
              <textarea 
                name="message" 
                id="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all resize-none"
                placeholder={t.contact.placeholderMessage}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={18} />
              {t.contact.sendBtn}
            </button>
            <p className="text-xs text-slate-400 text-center mt-2">
              {t.contact.disclaimer}
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;