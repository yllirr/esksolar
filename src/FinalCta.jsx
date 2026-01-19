import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './FinalCta.css';

const FinalCta = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="final-cta-section">
      <div className="final-cta-background">
        <img src="/foto/hero.jpg" alt="Solar Energy" />
      </div>
      <div className="container">
        <h2 className="final-cta-title">
          {getTranslation(language, 'finalCta.title')}
        </h2>
        <p className="final-cta-subtitle">
          {getTranslation(language, 'finalCta.subtitle')}
        </p>
        
        <div className="final-cta-buttons">
          <button 
            className="final-cta-btn"
            onClick={() => navigate('/products/home')}
          >
            {getTranslation(language, 'finalCta.buttonHome')}
          </button>
          <button 
            className="final-cta-btn"
            onClick={() => navigate('/products/business')}
          >
            {getTranslation(language, 'finalCta.buttonBusiness')}
          </button>
          <button 
            className="final-cta-btn"
            onClick={() => navigate('/contact')}
          >
            {getTranslation(language, 'finalCta.buttonInstallers')}
          </button>
        </div>

        <div className="final-cta-or">
          <span>{getTranslation(language, 'finalCta.orText')}</span>
        </div>

        <button 
          className="final-cta-contact"
          onClick={() => navigate('/contact')}
        >
          {getTranslation(language, 'finalCta.contactText')}
          <span className="btn-arrow">→</span>
        </button>

        <p className="final-cta-footer">
          {getTranslation(language, 'finalCta.footerText')}
        </p>
      </div>
    </section>
  );
};

export default FinalCta;
