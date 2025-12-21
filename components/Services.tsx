
import React from 'react';
import { TranslationSet } from '../types';

const Services: React.FC<{ t: TranslationSet }> = ({ t }) => {
  return (
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="bg-gray-900 rounded-[5rem] p-12 lg:p-24 relative overflow-hidden">
          {/* Abstract pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #2521DB 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">02 / {t.nav.services}</span>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                Sinu koht <br/><span className="text-primary italic">iga pühapäev.</span>
              </h2>
              <p className="text-xl text-gray-400 font-medium leading-relaxed mb-12 max-w-lg">
                Meie uksed on avatud kõigile, kes otsivad osadust, rahu ja tähendusrikast kristlikku sõnumit.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-6 bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
                   <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <div>
                     <p className="text-white/50 text-xs font-black uppercase tracking-widest mb-1">{t.services.when}</p>
                     <p className="text-white text-2xl font-black uppercase">{t.services.time}</p>
                   </div>
                </div>
                
                <div className="flex items-center space-x-6 bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
                   <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                     </svg>
                   </div>
                   <div>
                     <p className="text-white/50 text-xs font-black uppercase tracking-widest mb-1">{t.services.where}</p>
                     <p className="text-white text-2xl font-black uppercase">Läänemere tee 30</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop" 
                  alt="Atmospheric church" 
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex flex-col justify-end p-12">
                   <p className="text-white text-3xl font-black mb-2">Oleme siin sinu jaoks.</p>
                   <p className="text-white/50 font-bold uppercase tracking-widest text-sm italic">Tere tulemast ühisosasse</p>
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
