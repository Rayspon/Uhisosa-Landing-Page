
import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('et');
  const t = translations[lang];

  // Logic to detect or remember language could be added here
  
  const toggleLanguage = () => {
    setLang(prev => (prev === 'et' ? 'ru' : 'et'));
  };

  return (
    <div className="min-h-screen flex flex-col font-['Jost'] font-normal">
      <Navbar lang={lang} toggleLanguage={toggleLanguage} t={t} />
      <main className="flex-grow">
        <section id="home">
          <Hero lang={lang} t={t} />
        </section>
        <section id="about" className="py-20 bg-gray-50">
          <About t={t} />
        </section>
        <section id="services" className="py-20">
          <Services t={t} />
        </section>
        <section id="location" className="py-20 bg-gray-50">
          <Location t={t} />
        </section>
      </main>
      <Footer t={t} />
    </div>
  );
};

export default App;
