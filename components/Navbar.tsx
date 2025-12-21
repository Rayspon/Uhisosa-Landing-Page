
import React, { useState, useEffect } from 'react';
import { Language, TranslationSet } from '../types';

interface NavbarProps {
  lang: Language;
  toggleLanguage: () => void;
  t: TranslationSet;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLanguage, t }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'glass-nav py-3 border-b border-gray-100 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer z-50" onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}); setIsMenuOpen(false); }}>
            <img 
              src="https://uhisosa.ee/wp-content/uploads/2023/05/uhisosa.svg" 
              alt="Ühiosa Logo" 
              className={`h-8 w-8 md:h-10 md:w-10 transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-110'}`}
            />
            <div className="flex flex-col -space-y-1">
              <span className="text-lg md:text-xl font-black text-primary tracking-tight">ÜHIOSA</span>
              <span className="text-[8px] md:text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Intersection</span>
            </div>
          </div>
          
          {/* Desktop Links */}
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

          {/* Mobile UI */}
          <div className="lg:hidden flex items-center space-x-3 z-50">
             <button onClick={toggleLanguage} className="text-[10px] font-black text-primary border border-primary/20 px-3 py-1.5 rounded-full uppercase bg-white/50 backdrop-blur-sm">
               {lang === 'et' ? 'RU' : 'ET'}
             </button>
             <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-primary"
                aria-label="Toggle Menu"
             >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 8h16M4 16h16" /></svg>
                )}
             </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 origin-top ${isMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
          <div className="p-6 flex flex-col space-y-4">
            {Object.entries(t.nav).filter(([k]) => k !== 'contact').map(([key, label]) => (
              <a 
                key={key}
                href={`#${key}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-black text-gray-900 hover:text-primary transition-colors py-2"
              >
                {label.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </nav>
      {/* Dimmed background for mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;
