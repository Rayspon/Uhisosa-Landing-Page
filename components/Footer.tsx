
import React from 'react';
import { TranslationSet } from '../types';

const Footer: React.FC<{ t: TranslationSet }> = ({ t }) => {
  return (
    <footer className="bg-white pt-20 md:pt-24 pb-12 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start border-t border-gray-100 pt-10 md:pt-12 mb-12 md:mb-16">
          <div className="mb-10 md:mb-0">
             <div className="flex items-center space-x-3 mb-4 md:mb-6">
                <img 
                  src="https://uhisosa.ee/wp-content/uploads/2023/05/uhisosa.svg" 
                  alt="ÜHISOSA" 
                  className="h-8 w-8 md:h-10 md:w-10 grayscale brightness-0"
                />
                <span className="text-xl md:text-2xl font-black text-gray-900 tracking-tighter">ÜHISOSA</span>
             </div>
             <p className="max-w-xs text-gray-400 font-medium leading-relaxed text-sm md:text-base">
               {t.hero.subtitle}
             </p>
          </div>
          
          <div className="grid grid-cols-2 gap-10 md:gap-16 w-full md:w-auto">
            <div>
              <h4 className="text-[10px] md:text-xs font-black text-gray-900 uppercase tracking-[0.2em] mb-4 md:mb-6">{t.footer.links}</h4>
              <ul className="space-y-3 md:space-y-4">
                {Object.entries(t.nav).map(([key, label]) => (
                  <li key={key}>
                    <a href={`#${key}`} className="text-xs md:text-sm font-bold text-gray-400 hover:text-primary transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] md:text-xs font-black text-gray-900 uppercase tracking-[0.2em] mb-4 md:mb-6">{t.footer.social}</h4>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <a 
                    href="https://www.facebook.com/uhisosa/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs md:text-sm font-bold text-gray-400 hover:text-primary transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/uhisosa/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs md:text-sm font-bold text-gray-400 hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/@uhisosa" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs md:text-sm font-bold text-gray-400 hover:text-primary transition-colors"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center py-8 border-t border-gray-50 text-center lg:text-left">
          <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 lg:mb-0 leading-relaxed">
            &copy; {new Date().getFullYear()} ÜHISOSA. {t.footer.rights}.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 text-[8px] md:text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
            <span>{t.footer.partOf}</span>
            <span className="w-1 h-1 bg-gray-200 rounded-full hidden sm:block"></span>
            <span>{t.footer.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
