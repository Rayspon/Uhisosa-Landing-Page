
import React from 'react';
import { TranslationSet } from '../types';

const Services: React.FC<{ t: TranslationSet }> = ({ t }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-6">
      <div className="relative intersection-gradient rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-[0_40px_100px_rgba(37,33,219,0.25)]">
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/10 rounded-full -ml-16 -mb-16 blur-2xl"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-px bg-white/30 mb-8"></div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              {t.services.title}
            </h2>
            <p className="text-xl text-white/70 font-medium leading-relaxed mb-12 max-w-lg">
              {t.services.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="glass-nav !bg-white/10 p-8 rounded-[2.5rem] border border-white/20 flex-1 backdrop-blur-md">
                <span className="block text-white/50 text-xs font-black uppercase tracking-[0.2em] mb-4">{t.services.when}</span>
                <p className="text-white text-2xl font-black leading-tight">{t.services.time}</p>
              </div>
              <div className="glass-nav !bg-white/10 p-8 rounded-[2.5rem] border border-white/20 flex-1 backdrop-blur-md">
                <span className="block text-white/50 text-xs font-black uppercase tracking-[0.2em] mb-4">{t.services.where}</span>
                <p className="text-white text-2xl font-black leading-tight">Läänemere tee 30,<br/>Tallinn</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square bg-white rounded-[3rem] p-4 shadow-2xl rotate-2">
              <div className="h-full w-full rounded-[2.5rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1543191878-f7cb8d3a286a?q=80&w=2070&auto=format&fit=crop" 
                  alt="Light in church" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10">
                  <div className="bg-white/90 backdrop-blur inline-block px-5 py-3 rounded-2xl mb-4">
                    <p className="text-primary font-black text-sm uppercase tracking-widest">Igale vanusele</p>
                  </div>
                  <h4 className="text-white text-3xl font-black">Oled alati oodatud.</h4>
                </div>
              </div>
            </div>
            
            {/* Small floating card */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white p-6 rounded-3xl shadow-xl hidden md:block border border-gray-100 -rotate-6">
              <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                 </div>
                 <p className="text-gray-900 font-bold text-sm">Üritus kestab u. 1.5h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
