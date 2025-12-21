
import React from 'react';
import { TranslationSet } from '../types';

const About: React.FC<{ t: TranslationSet }> = ({ t }) => {
  return (
    <section className="py-32 bg-gray-50/50">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">{t.about.badge}</span>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-10 tracking-tighter">
              {t.about.title}
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed mb-12">
              {t.about.description}
            </p>
            
            <div className="space-y-10">
              <div className="group flex items-start space-x-6">
                <div className="w-px h-12 bg-primary/20 group-hover:bg-primary transition-colors duration-500 mt-2"></div>
                <div>
                  <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">{t.about.missionTitle}</h4>
                  <p className="text-gray-400 font-medium leading-relaxed">{t.about.missionText}</p>
                </div>
              </div>
              <div className="group flex items-start space-x-6">
                <div className="w-px h-12 bg-primary/20 group-hover:bg-primary transition-colors duration-500 mt-2"></div>
                <div>
                  <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">{t.about.collabTitle}</h4>
                  <p className="text-gray-400 font-medium leading-relaxed">{t.about.collabText}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-[3rem] overflow-hidden aspect-[4/5] shadow-xl">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Connect" />
              </div>
              <div className="bg-primary p-10 rounded-[3rem] text-white">
                <p className="text-4xl font-black mb-2">{t.about.unionPart}</p>
                <p className="text-white/60 text-sm font-bold uppercase tracking-widest">{t.about.unionName}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col justify-end min-h-[240px]">
                <img src="https://content.instruct-ai.com/api/v1/content/media/9d63c5d6-d064-419b-90f7-04663da6f494.png" className="w-16 mb-6 opacity-20" alt="Logo" />
                <p className="text-gray-900 font-black text-2xl tracking-tight">ÜHISOSA —<br/>Точка пересечения</p>
              </div>
              <div className="rounded-[3rem] overflow-hidden aspect-[4/5] shadow-xl">
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
