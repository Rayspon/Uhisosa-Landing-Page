
import React from 'react';
import { TranslationSet, Language } from '../types';

interface HeroProps {
  t: TranslationSet;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background visual elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-soft -z-10 skew-x-[-12deg] translate-x-1/4"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-screen-xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-reveal">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>{t.hero.sundayTime}</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] mb-8 tracking-tighter">
            {lang === 'et' ? (
              <>ÜHIOSA.<br/><span className="text-primary italic">Sinu</span> kogukond.</>
            ) : (
              <>ТОЧКА.<br/><span className="text-primary italic">Твоя</span> община.</>
            )}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-xl mb-12">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a 
              href="#location" 
              className="px-10 py-5 bg-primary text-white font-black rounded-full hover:shadow-[0_20px_40px_rgba(37,33,219,0.3)] hover:-translate-y-1 transition-all duration-300 text-lg flex items-center space-x-3"
            >
              <span>{t.hero.cta}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a 
              href="#about" 
              className="px-10 py-5 border-2 border-gray-100 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-all duration-300 text-lg"
            >
              {t.nav.about}
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative animate-reveal delay-2 hidden lg:block">
          <div className="relative group">
            {/* Visual Frame */}
            <div className="absolute -inset-4 border-2 border-primary/20 rounded-[4rem] group-hover:rotate-3 transition-transform duration-500"></div>
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl bg-gray-100 aspect-[4/5]">
               <img 
                src="https://images.unsplash.com/photo-1544427928-c49cdfebf494?q=80&w=2000&auto=format&fit=crop" 
                alt="Community and connection" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10 p-8 glass-nav rounded-3xl border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/></svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-black text-lg">Tallinn, Lasnamäe</p>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Läänemere tee 30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
