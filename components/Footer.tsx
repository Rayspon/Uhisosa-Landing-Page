
import React from 'react';
import { TranslationSet } from '../types';

const Footer: React.FC<{ t: TranslationSet }> = ({ t }) => {
  return (
    <footer className="bg-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start border-t border-gray-100 pt-12 mb-16">
          <div className="mb-12 md:mb-0">
             <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://uhisosa.ee/wp-content/uploads/2023/05/uhisosa.svg" 
                  alt="Ühiosa" 
                  className="h-10 w-10 grayscale brightness-0"
                />
                <span className="text-2xl font-black text-gray-900 tracking-tighter">ÜHIOSA</span>
             </div>
             <p className="max-w-xs text-gray-400 font-medium leading-relaxed">
               {t.hero.subtitle}
             </p>
          </div>
          
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h4 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em] mb-6">{t.footer.links}</h4>
              <ul className="space-y-4">
                {Object.entries(t.nav).map(([key, label]) => (
                  <li key={key}>
                    <a href={`#${key}`} className="text-sm font-bold text-gray-400 hover:text-primary transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em] mb-6">{t.footer.social}</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm font-bold text-gray-400 hover:text-primary transition-colors">Facebook</a></li>
                <li><a href="#" className="text-sm font-bold text-gray-400 hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm font-bold text-gray-400 hover:text-primary transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-gray-50">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ühiosa. {t.footer.rights}.
          </p>
          <div className="flex items-center space-x-3 text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">
            <span>{t.footer.partOf}</span>
            <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
            <span>{t.footer.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
