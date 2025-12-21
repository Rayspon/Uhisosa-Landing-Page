
import React, { useState, useEffect } from 'react';
import { Language, TranslationSet } from '../types';

interface NavbarProps {
  lang: Language;
  toggleLanguage: () => void;
  t: TranslationSet;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLanguage, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 border-b border-gray-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <img 
            src="https://content.instruct-ai.com/api/v1/content/media/9d63c5d6-d064-419b-90f7-04663da6f494.png" 
            alt="Ühiosa Logo" 
            className={`h-10 w-10 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-110'}`}
          />
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-black text-primary tracking-tight">ÜHIOSA</span>
            <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Intersection</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center space-x-10">
          {Object.entries(t.nav).filter(([k]) => k !== 'contact').map(([key, label]) => (
            <a 
              key={key}
              href={`#${key}`} 
              className="text-sm font-bold text-gray-600 hover:text-primary transition-colors tracking-wide"
            >
              {label.toUpperCase()}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="group relative px-5 py-2 overflow-hidden rounded-full border border-gray-200 bg-white"
          >
            <div className="relative z-10 flex items-center space-x-2 text-xs font-black tracking-widest text-primary">
              <span className={lang === 'et' ? 'opacity-100' : 'opacity-40'}>ET</span>
              <span className="w-px h-3 bg-gray-200"></span>
              <span className={lang === 'ru' ? 'opacity-100' : 'opacity-40'}>RU</span>
            </div>
          </button>
        </div>

        <div className="lg:hidden flex items-center space-x-4">
           <button onClick={toggleLanguage} className="text-xs font-black text-primary border border-primary/20 px-3 py-1 rounded-full uppercase">
             {lang === 'et' ? 'RU' : 'ET'}
           </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
