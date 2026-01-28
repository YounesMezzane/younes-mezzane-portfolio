import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Menu, X, FileText, Sun, Moon, Globe } from 'lucide-react';
import { CV_LINK, CONTACT_INFO } from './constants';
import { LanguageProvider, useLanguage, Language } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t, language, setLanguage, isRTL } = useLanguage();

  // Clean phone number for WhatsApp link
  const waNumber = CONTACT_INFO.phone.replace(/[^0-9]/g, '');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial theme check
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  const navLinks = [
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.certifications, href: '#certifications' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors duration-300 font-sans`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <a href="#" className={`text-xl font-bold tracking-tighter ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            YM<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                  isScrolled ? 'text-slate-700 dark:text-slate-300' : 'text-slate-200'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2">
               <button 
                  onClick={() => setLanguage('fr')} 
                  className={`text-xs font-bold px-2 py-1 rounded ${language === 'fr' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-blue-500'}`}
               >
                 FR
               </button>
               <button 
                  onClick={() => setLanguage('en')} 
                  className={`text-xs font-bold px-2 py-1 rounded ${language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-blue-500'}`}
               >
                 EN
               </button>
               <button 
                  onClick={() => setLanguage('ar')} 
                  className={`text-xs font-bold px-2 py-1 rounded ${language === 'ar' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-blue-500'}`}
               >
                 AR
               </button>
            </div>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isScrolled 
                  ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800' 
                  : 'text-white/80 hover:bg-white/10'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a 
              href={CV_LINK} 
              target="_blank" 
              rel="noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileText size={16} />
              {t.nav.cv}
            </a>
          </div>

          {/* Mobile Menu Button & Controls */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Simple Mobile Lang Switcher */}
            <div className="flex items-center gap-1">
               <button onClick={() => setLanguage('fr')} className={`text-[10px] font-bold ${language === 'fr' ? 'text-blue-500' : 'text-slate-400'}`}>FR</button>
               <span className="text-slate-500">|</span>
               <button onClick={() => setLanguage('en')} className={`text-[10px] font-bold ${language === 'en' ? 'text-blue-500' : 'text-slate-400'}`}>EN</button>
               <span className="text-slate-500">|</span>
               <button onClick={() => setLanguage('ar')} className={`text-[10px] font-bold ${language === 'ar' ? 'text-blue-500' : 'text-slate-400'}`}>AR</button>
            </div>

            <button 
              onClick={toggleTheme}
              className={`p-1 rounded-full ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="text-slate-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen 
                ? <X className={isScrolled ? "text-slate-900 dark:text-white" : "text-white"} /> 
                : <Menu className={isScrolled ? "text-slate-900 dark:text-white" : "text-white"} />
              }
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg border-t border-slate-100 dark:border-slate-800 lg:hidden flex flex-col p-4">
             {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="py-3 text-slate-700 dark:text-slate-200 font-medium border-b border-slate-50 dark:border-slate-800 last:border-0"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={CV_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="py-3 text-blue-600 dark:text-blue-400 font-bold flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText size={18} />
              {t.nav.cv}
            </a>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Hero />
        <Experience />
        <Education />
        <Skills isDarkMode={isDarkMode} />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      
      {/* WhatsApp Floating Bubble */}
      <a
        href={`https://wa.me/${waNumber}`}
        target="_blank"
        rel="noreferrer"
        className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center group`}
        aria-label="Contact on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className={`absolute ${isRTL ? 'left-full ml-3' : 'right-full mr-3'} bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none`}>
          WhatsApp
        </span>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;