import React from 'react';
import './PlanPricing.css';

const PlanPricing = () => {
  return (
    <section className="plan-pricing">
      <div className="plan-pricing-wrapper">
        {/* Left Side - Content */}
        <div className="plan-content-section">
          <div className="plan-content">
            <span className="plan-subtitle">PLAN & PRICING</span>
            <h2 className="plan-title">Smart Savings. Easy Living</h2>
            <p className="plan-description">
              From installation to maintenance, enjoy an effortless and affordable 
              solar experience with the SunPulse Plan solar lease.
            </p>
            
            <div className="plan-features">
              <div className="plan-feature">
                <div className="plan-feature-icon">
                  <img src="/foto/icons/Frame 35.png" alt="" className="feature-icon-img" />
                </div>
                <p className="plan-feature-text">Best-in-class solar panels and battery storage</p>
              </div>

              <div className="plan-feature">
                <div className="plan-feature-icon">
                  <img src="/foto/icons/Frame 36.png" alt="" className="feature-icon-img" />
                </div>
                <p className="plan-feature-text">25-year equipment guarantee</p>
              </div>

              <div className="plan-feature">
                <div className="plan-feature-icon">
                  <img src="/foto/icons/Frame 38.png" alt="" className="feature-icon-img" />
                </div>
                <p className="plan-feature-text">Predictable monthly payments with locked-in rates</p>
              </div>
            </div>

            <button className="plan-cta-btn">
              Get a Quote
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="plan-image-section">
          <div className="plan-image-container"></div>
        </div>
      </div>
    </section>
  );
};

export default PlanPricing;
