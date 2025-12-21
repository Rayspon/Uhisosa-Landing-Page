
import React from 'react';
import { TranslationSet, Language } from '../types';

interface HeroProps {
  t: TranslationSet;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden bg-white">
      {/* Background visual elements */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-50/30 md:bg-blue-50/50 -z-10 skew-x-[-12deg] translate-x-1/2 md:translate-x-1/4"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>
      
      <div className="max-w-screen-xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 reveal-up text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 md:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>{t.hero.sundayTime}</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1] md:leading-[0.95] mb-6 md:mb-8 tracking-tighter">
            {lang === 'et' ? (
              <>ÜHIOSA.<br/><span className="text-primary">Sinu</span> kogukond.</>
            ) : (
              <>ТОЧКА<br/><span className="text-primary uppercase">ПЕРЕСЕЧЕНИЯ</span></>
            )}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium leading-relaxed max-w-xl mb-10 md:mb-12 mx-auto lg:ml-0">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-6">
            <a 
              href="#location" 
              className="px-8 md:px-10 py-4 md:py-5 bg-primary text-white font-black rounded-full hover:shadow-[0_20px_40px_rgba(37,33,219,0.3)] hover:-translate-y-1 transition-all duration-300 text-base md:text-lg flex items-center justify-center space-x-3"
            >
              <span>{t.hero.cta}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <a 
              href="#about" 
              className="px-8 md:px-10 py-4 md:py-5 border-2 border-gray-100 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-all duration-300 text-base md:text-lg text-center"
            >
              {t.nav.about}
            </a>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative hidden lg:block reveal-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative group">
            <div className="absolute -inset-4 border-2 border-primary/10 rounded-[4rem] group-hover:rotate-2 transition-transform duration-500"></div>
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl bg-gray-100 aspect-[4/5]">
               <img 
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop" 
                alt="Community Connection" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 p-6 intersection-blur rounded-3xl border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0">
                    <img 
                      src="https://uhisosa.ee/wp-content/uploads/2023/05/uhisosa.svg" 
                      alt="U" 
                      className="w-8 h-8 invert brightness-0"
                    />
                  </div>
                  <div>
                    <p className="text-gray-900 font-black text-lg leading-tight">Tallinn, Lasnamäe</p>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Läänemere tee 30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
