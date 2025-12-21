
import React from 'react';
import { TranslationSet } from '../types';

const Location: React.FC<{ t: TranslationSet }> = ({ t }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3 pt-12">
          <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 block">{t.nav.location}</span>
          <h2 className="text-5xl font-black text-gray-900 leading-tight mb-8">
            {t.location.title}
          </h2>
          
          <div className="space-y-10">
            <div>
               <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Aadress</h4>
               <p className="text-2xl font-bold text-gray-900 mb-2">{t.location.address}</p>
               <p className="text-lg text-gray-500 font-medium">{t.location.district}</p>
            </div>
            
            <a 
              href="https://www.google.com/maps/search/Läänemere+tee+30+Tallinn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 group"
            >
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-xl font-black text-primary underline decoration-primary/20 decoration-2 underline-offset-4 group-hover:decoration-primary/100 transition-all">
                {t.location.getDirections}
              </span>
            </a>
          </div>
        </div>
        
        <div className="lg:w-2/3 w-full h-[600px] rounded-[3.5rem] overflow-hidden relative shadow-2xl border-4 border-white">
          {/* Enhanced Map Visual */}
          <div className="absolute inset-0 bg-[#f8f9ff]">
             {/* Abstract map pattern */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2521DB 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
             
             {/* Visual representation of Lasnamäe blocks */}
             <div className="absolute top-1/4 left-1/4 w-32 h-20 bg-primary/5 rounded-xl rotate-12"></div>
             <div className="absolute bottom-1/3 right-1/4 w-40 h-24 bg-primary/5 rounded-xl -rotate-6"></div>
             <div className="absolute top-1/2 left-1/3 w-24 h-40 bg-primary/5 rounded-xl 3"></div>
             
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative scale-150">
                   <div className="w-12 h-12 bg-primary rounded-full animate-ping opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                   <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-2xl relative z-10"></div>
                   
                   <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white px-5 py-3 rounded-2xl shadow-2xl border border-gray-100 whitespace-nowrap">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Meie asukoht</p>
                      <p className="text-sm font-black text-primary">ÜHIOSA / Läänemere 30</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-8 border-transparent border-t-white"></div>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="absolute bottom-10 right-10 flex space-x-2">
             <div className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase mb-1">Tallinn</p>
                <p className="text-xs font-bold text-gray-900">Lasnamäe Linnaosa</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
