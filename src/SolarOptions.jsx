import React from 'react';
import './SolarOptions.css';

const SolarOptions = () => {
  return (
    <section className="solar-options">
      <div className="options-grid">
        <div className="option-card option-home">
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
        
        <div className="option-card option-business">
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
