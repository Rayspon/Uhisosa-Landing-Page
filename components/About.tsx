
import React from 'react';
import { TranslationSet } from '../types';

const About: React.FC<{ t: TranslationSet }> = ({ t }) => {
  return (
    <section className="py-20 md:py-32 bg-gray-50/50">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 md:mb-6 block">{t.about.badge}</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8 md:mb-10 tracking-tighter">
              {t.about.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed mb-10 md:mb-12">
              {t.about.description}
            </p>
            
            <div className="space-y-8 md:space-y-10 text-left">
              <div className="group flex items-start space-x-5 md:space-x-6">
                <div className="w-px h-10 md:h-12 bg-primary/20 group-hover:bg-primary transition-colors duration-500 mt-2 shrink-0"></div>
                <div>
                  <h4 className="text-lg md:text-xl font-black text-gray-900 uppercase tracking-tight mb-1 md:mb-2">{t.about.missionTitle}</h4>
                  <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">{t.about.missionText}</p>
                </div>
              </div>
              <div className="group flex items-start space-x-5 md:space-x-6">
                <div className="w-px h-10 md:h-12 bg-primary/20 group-hover:bg-primary transition-colors duration-500 mt-2 shrink-0"></div>
                <div>
                  <h4 className="text-lg md:text-xl font-black text-gray-900 uppercase tracking-tight mb-1 md:mb-2">{t.about.collabTitle}</h4>
                  <p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">{t.about.collabText}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-3 md:gap-4 mt-8 lg:mt-0">
            <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] shadow-lg md:shadow-xl">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Connect" />
              </div>
              <div className="bg-primary p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] text-white">
                <p className="text-2xl md:text-4xl font-black mb-1 md:mb-2">{t.about.unionPart}</p>
                <p className="text-white/60 text-[10px] md:text-sm font-bold uppercase tracking-widest leading-tight">{t.about.unionName}</p>
              </div>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-gray-100 flex flex-col justify-end min-h-[180px] md:min-h-[240px]">
                <img src="https://uhisosa.ee/wp-content/uploads/2023/05/uhisosa.svg" className="w-10 md:w-16 mb-4 md:mb-6 opacity-20" alt="Logo" />
                <p className="text-gray-900 font-black text-lg md:text-2xl tracking-tight leading-tight">ÜHISOSA —<br/>Точка пересечения</p>
              </div>
              <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[4/5] shadow-lg md:shadow-xl">
                <img src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Gathering" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
