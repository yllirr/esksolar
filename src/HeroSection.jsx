import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './HeroSection.css';

const HeroSection = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src="/foto/hero.jpg" alt="Solar Energy" />
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-headline">
              {getTranslation(language, 'hero.headline')}
            </h1>
            <p className="hero-subheadline">
              {getTranslation(language, 'hero.subheadline')}
            </p>
            
            <div className="hero-buttons">
              <button 
                className="hero-btn hero-btn-home"
                onClick={() => navigate('/products/home')}
              >
                <span className="btn-main">{getTranslation(language, 'hero.buttonHome')}</span>
                <span className="btn-sub">{getTranslation(language, 'hero.buttonHomeSubtext')}</span>
              </button>
              <button 
                className="hero-btn hero-btn-business"
                onClick={() => navigate('/products/business')}
              >
                <span className="btn-main">{getTranslation(language, 'hero.buttonBusiness')}</span>
                <span className="btn-sub">{getTranslation(language, 'hero.buttonBusinessSubtext')}</span>
              </button>
              <button 
                className="hero-btn hero-btn-installers"
                onClick={() => navigate('/contact')}
              >
                <span className="btn-main">{getTranslation(language, 'hero.buttonInstallers')}</span>
                <span className="btn-sub">{getTranslation(language, 'hero.buttonInstallersSubtext')}</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Signals Banner */}
      <div className="trust-signals-banner">
        <div className="container">
          <div className="trust-signal-item">
            <div className="trust-icon">🛡</div>
            <span>{getTranslation(language, 'hero.trustSignal2')}</span>
          </div>
          <div className="trust-signal-item">
            <div className="trust-icon">📍</div>
            <span>{getTranslation(language, 'hero.trustSignal1')}</span>
          </div>
          <div className="trust-signal-item">
            <div className="trust-icon">🔧</div>
            <span>{getTranslation(language, 'hero.trustSignal3')}</span>
          </div>
          <div className="trust-signal-item">
            <div className="trust-icon">✓</div>
            <span>{getTranslation(language, 'hero.trustSignal4')}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
