
import React from 'react';
import { TranslationSet } from '../types';

const About: React.FC<{ t: TranslationSet }> = ({ t }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          {/* Overlapping images representing "Ühiosa" (Common Part) */}
          <div className="relative z-10 w-4/5 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
              alt="People connecting" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-1/4 -right-4 w-3/4 aspect-square rounded-[3rem] overflow-hidden shadow-xl -z-10 opacity-80 border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop" 
              alt="Community gathering" 
              className="w-full h-full object-cover grayscale brightness-75"
            />
          </div>
          
          <div className="absolute -bottom-10 right-1/4 bg-primary text-white p-10 rounded-[2.5rem] shadow-2xl max-w-xs transform rotate-3">
             <span className="block text-4xl font-black mb-2 leading-none">50+</span>
             <span className="text-sm font-bold uppercase tracking-[0.2em] opacity-80">Aktiivset liiget Lasnamäel</span>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 block">{t.nav.about}</span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
              Meie lugu on <span className="text-primary underline decoration-4 underline-offset-8 decoration-primary/20">ühine</span> lugu.
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">
              {t.about.description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="group">
              <div className="w-14 h-14 bg-primary-soft text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-black mb-3 text-gray-900 uppercase tracking-tight">{t.about.missionTitle}</h4>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {t.about.missionText}
              </p>
            </div>

            <div className="group">
              <div className="w-14 h-14 bg-primary-soft text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-black mb-3 text-gray-900 uppercase tracking-tight">{t.about.collabTitle}</h4>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {t.about.collabText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
