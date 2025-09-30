import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="hero-clean">
      <div className="hero-clean-container">
        <h1 className="hero-clean-title">
          Shatter the Boundaries of<br />
          Traditional Energy
        </h1>
        
        <div className="hero-clean-illustration">
          <img src="/foto/Frame410127946.png" alt="Solar House Illustration" className="hero-illustration-img" />
        </div>
        
        <p className="hero-clean-subtitle">
          Upgrade to Affordable, Dependable<br />
          Solar and Battery Power
        </p>
        
        <button className="hero-clean-btn">
          Get a Quote
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
