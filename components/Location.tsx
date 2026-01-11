
import React from 'react';
import { TranslationSet } from '../types';

const Location: React.FC<{ t: TranslationSet }> = ({ t }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        <div className="lg:w-1/3 pt-0 md:pt-12 text-center lg:text-left w-full">
          <span className="text-primary font-black uppercase tracking-widest text-[10px] md:text-sm mb-4 block">{t.location.badge}</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
            {t.location.title}
          </h2>
          
          <div className="space-y-8 md:space-y-10 text-left">
            <div>
               <h4 className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2 md:mb-3">{t.location.addressLabel}</h4>
               <p className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{t.location.address}</p>
               <p className="text-base md:text-lg text-gray-500 font-medium">{t.location.district}</p>
            </div>

            <div>
               <h4 className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-2 md:mb-3">{t.location.emailLabel}</h4>
               <a href={`mailto:${t.location.email}`} className="text-xl md:text-2xl font-bold text-primary hover:underline transition-all">
                 {t.location.email}
               </a>
            </div>
            
            <a 
              href="https://www.google.com/maps/search/Läänemere+tee+30+Tallinn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 group bg-primary/5 p-4 rounded-2xl w-full sm:w-auto"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary text-white rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-lg md:text-xl font-black text-primary underline decoration-primary/20 decoration-2 underline-offset-4 group-hover:decoration-primary/100 transition-all">
                {t.location.getDirections}
              </span>
            </a>
          </div>
        </div>
        
        <div className="lg:w-2/3 w-full h-[350px] md:h-[600px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden relative shadow-2xl border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.167825316413!2d24.867205177439366!3d59.45115200139268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692eb4998797f7b%3A0xc3f7a810b146473b!2sL%C3%A4%C3%A4nemere%20tee%2030%2C%2013913%20Tallinn!5e0!3m2!1set!2see!4v1710325123456!5m2!1set!2see"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
            title={t.location.mapLabel}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
