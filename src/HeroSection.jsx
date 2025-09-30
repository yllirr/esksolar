import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 300; // Kur të scroll-ojmë 300px, ndryshon në natë
      
      if (scrollPosition > triggerPoint) {
        setIsNightMode(true);
      } else {
        setIsNightMode(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header Navigation */}
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">SunPulse</div>
            <nav className="nav-menu">
              <a href="#products">Products</a>
              <a href="#pricing">Plans & Pricing</a>
              <a href="#learn">Learn</a>
              <a href="#company">Company</a>
            </nav>
            <button className="btn-quote-header">Get a Quote</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-top">
            <div className="hero-left">
              <p className="joined-count">1,042,034 JOINED</p>
              <h1 className="hero-heading">
                Step into Tomorrow Like Never Before.<br />
                Experience Advanced Solar Power.
              </h1>
              <button className="btn-get-quote">
                Get a Quote
                <span className="arrow">→</span>
              </button>
            </div>
            <div className="hero-right">
              <h2 className="bright-future">
                BRIGHT<br />FUTURE ⚡
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
                               America's Top Pick<br />
                               for Home Solar and<br />
                               Energy Storage
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
