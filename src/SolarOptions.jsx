import React, { useState } from 'react';
import './SolarOptions.css';

const SolarOptions = () => {
  const [hovered, setHovered] = useState(null); // 'home' | 'business' | null

  const containerClass = `options-grid ${
    hovered === 'home' ? 'home-hover' : hovered === 'business' ? 'business-hover' : ''
  }`;

  return (
    <section className="solar-options">
      <div className={containerClass}
           onMouseLeave={() => setHovered(null)}>
        <div
          className="option-card option-home"
          onMouseEnter={() => setHovered('home')}
        >
          <div className="option-content">
            <h2 className="option-title">
              Solar for<br />
              your home
            </h2>
            <button className="option-btn">
              Residence
              <span className="option-arrow">→</span>
            </button>
          </div>
        </div>
        
        <div
          className="option-card option-business"
          onMouseEnter={() => setHovered('business')}
        >
          <div className="option-content">
            <h2 className="option-title">
              Solar for your<br />
              business
            </h2>
            <button className="option-btn">
              Commercial
              <span className="option-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarOptions;
