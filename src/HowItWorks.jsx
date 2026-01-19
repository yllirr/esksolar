import React from 'react';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './HowItWorks.css';

const HowItWorks = () => {
  const { language } = useLanguage();

  return (
    <section className="how-it-works-section">
      <div className="container">
        <h2 className="how-it-works-title">
          {getTranslation(language, 'howItWorks.title')}
        </h2>
        <p className="how-it-works-subtitle">
          {getTranslation(language, 'howItWorks.subtitle')}
        </p>
        
        <div className="how-it-works-steps">
          <div className="step-item">
            <div className="step-number">1</div>
            <h3 className="step-title">
              {getTranslation(language, 'howItWorks.step1.title')}
            </h3>
            <p className="step-description">
              {getTranslation(language, 'howItWorks.step1.description')}
            </p>
          </div>
          
          <div className="step-item">
            <div className="step-number">2</div>
            <h3 className="step-title">
              {getTranslation(language, 'howItWorks.step2.title')}
            </h3>
            <p className="step-description">
              {getTranslation(language, 'howItWorks.step2.description')}
            </p>
          </div>
          
          <div className="step-item">
            <div className="step-number">3</div>
            <h3 className="step-title">
              {getTranslation(language, 'howItWorks.step3.title')}
            </h3>
            <p className="step-description">
              {getTranslation(language, 'howItWorks.step3.description')}
            </p>
          </div>
          
          <div className="step-item">
            <div className="step-number">4</div>
            <h3 className="step-title">
              {getTranslation(language, 'howItWorks.step4.title')}
            </h3>
            <p className="step-description">
              {getTranslation(language, 'howItWorks.step4.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
