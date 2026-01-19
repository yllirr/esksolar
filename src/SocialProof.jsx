import React from 'react';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './SocialProof.css';

const SocialProof = () => {
  const { language } = useLanguage();

  return (
    <section className="social-proof-section">
      <div className="container">
        <h2 className="social-proof-title">
          {getTranslation(language, 'socialProof.title')}
        </h2>
        <p className="social-proof-subtitle">
          {getTranslation(language, 'socialProof.subtitle')}
        </p>
        
        <div className="social-proof-gallery">
          <div className="gallery-item">
            <img src="/foto/rreth-nesh/1.jpg" alt="Solar Installation" />
          </div>
          <div className="gallery-item">
            <img src="/foto/rreth-nesh/2.jpg" alt="Solar Installation" />
          </div>
          <div className="gallery-item">
            <img src="/foto/rreth-nesh/3.jpg" alt="Solar Installation" />
          </div>
          <div className="gallery-item">
            <img src="/foto/rreth-nesh/4.jpg" alt="Solar Installation" />
          </div>
        </div>
        
        <div className="social-proof-items">
          <div className="social-proof-item">
            <span className="proof-bullet">•</span>
            <span>{getTranslation(language, 'socialProof.item1')}</span>
          </div>
          <div className="social-proof-item">
            <span className="proof-bullet">•</span>
            <span>{getTranslation(language, 'socialProof.item2')}</span>
          </div>
          <div className="social-proof-item">
            <span className="proof-bullet">•</span>
            <span>{getTranslation(language, 'socialProof.item3')}</span>
          </div>
          <div className="social-proof-item">
            <span className="proof-bullet">•</span>
            <span>{getTranslation(language, 'socialProof.item4')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
