import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './HeroSection.css';

const HeroSection = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const brightRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const triggerPoint = 300;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only update if we cross the threshold
      if ((lastScrollY <= triggerPoint && currentScrollY > triggerPoint) ||
          (lastScrollY > triggerPoint && currentScrollY <= triggerPoint)) {
        setIsNightMode(currentScrollY > triggerPoint);
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-top">
            <div className="hero-left">
              <p className="joined-count">1,042,034 {getTranslation(language, 'hero.joined')}</p>
              <h1 className="hero-heading">
                {getTranslation(language, 'hero.title')}
              </h1>
              <button className="btn-get-quote">
                {getTranslation(language, 'nav.getQuote')}
                <span className="arrow">→</span>
              </button>
            </div>
            <div className="hero-right">
              <h2
                ref={brightRef}
                className="bright-future"
              >
                {getTranslation(language, 'hero.brightFuture')}
              </h2>
            </div>
          </div>
        </div>

        {/* Image Section with Cards */}
        <div className={`image-section ${isNightMode ? 'night-mode' : 'day-mode'}`}>
          <div className="container-wide">
            <div className="image-content-wrapper">
                       <div className="image-left">
                         <div className="image-container">
                           <div className="image-overlay">
                             <h3 className="overlay-text">
                               {getTranslation(language, 'hero.topPick')}
                             </h3>
                           </div>
                         </div>
                       </div>
              <div className="features-right">
                <div className="feature-card">
                  <div className="feature-icon sun-icon">☀</div>
                  <p className="feature-text">
                    Exceptional Solar<br />
                    and Battery<br />
                    Performance
                  </p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon card-icon">💳</div>
                  <p className="feature-text">
                    Customized<br />
                    Payment Solutions<br />
                    for Your Home
                  </p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon headset-icon">🎧</div>
                  <p className="feature-text">
                    The SunPulse<br />
                    Assurance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
