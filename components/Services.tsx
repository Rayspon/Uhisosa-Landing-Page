
import React from 'react';
import { TranslationSet } from '../types';

const Services: React.FC<{ t: TranslationSet }> = ({ t }) => {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="bg-gray-900 rounded-[3rem] md:rounded-[5rem] p-8 md:p-16 lg:p-24 relative overflow-hidden">
          {/* Abstract pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #2521DB 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-center lg:text-left">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6 block">{t.services.badge}</span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 md:mb-8 tracking-tighter">
                {t.services.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-10 md:mb-12 max-w-lg mx-auto lg:ml-0">
                {t.services.description}
              </p>
              
              <div className="space-y-4 md:space-y-6 text-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 bg-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 backdrop-blur-md text-center sm:text-left">
                   <div className="w-12 h-12 md:w-14 md:h-14 bg-primary text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-4 sm:mb-0 shrink-0">
                     <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <div>
                     <p className="text-white/50 text-[10px] md:text-xs font-black uppercase tracking-widest mb-1">{t.services.when}</p>
                     <p className="text-white text-xl md:text-2xl font-black uppercase leading-tight">{t.services.time}</p>
                   </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 bg-white/5 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 backdrop-blur-md text-center sm:text-left">
                   <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-4 sm:mb-0 shrink-0">
                     <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                     </svg>
                   </div>
                   <div>
                     <p className="text-white/50 text-[10px] md:text-xs font-black uppercase tracking-widest mb-1">{t.services.where}</p>
                     <p className="text-white text-xl md:text-2xl font-black uppercase leading-tight">Läänemere tee 30</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl lg:rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop" 
                  alt="Atmospheric church" 
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-end p-8 md:p-12">
                   <p className="text-white text-2xl md:text-3xl font-black mb-1 md:mb-2">{t.services.hereForYou}</p>
                   <p className="text-white/50 font-bold uppercase tracking-widest text-[10px] md:text-sm italic">{t.services.welcomeMsg}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
