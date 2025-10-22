import React from 'react';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const { language } = useLanguage();
  
  return (
    <section className="hero-clean">
      <div className="hero-clean-container">
        <h1 className="hero-clean-title">
          {getTranslation(language, 'hero.title')}
        </h1>
        
        <div className="hero-clean-illustration">
          <img src="/foto/Frame410127946.png" alt="Solar House Illustration" className="hero-illustration-img" />
        </div>
        
        <p className="hero-clean-subtitle">
          {getTranslation(language, 'hero.brightFuture')}
        </p>
        
        <button className="hero-clean-btn">
          {getTranslation(language, 'nav.getQuote')}
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
