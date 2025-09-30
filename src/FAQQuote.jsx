import React, { useState } from 'react';
import './FAQQuote.css';

const FAQQuote = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqData = [
    "How long do solar panels really last?",
    "What happens if I decide to move?",
    "How much can I expect to save when I go solar?",
    "Does my state offer incentives to go solar?",
    "How many solar panels will my home need?",
    "Is my home good for solar?"
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section className="faq-quote">
      <div className="faq-quote-container">
        {/* FAQ Section */}
        <div className="faq-section">
          <div className="faq-content">
            <h2 className="faq-title">Your Questions, Answered</h2>
            <div className="faq-cta">
              <p className="faq-cta-text">Have a different question?</p>
              <button className="faq-cta-btn">
                Browse all questions
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
          
          <div className="faq-list">
            {faqData.map((question, index) => (
              <div 
                key={index} 
                className={`faq-item ${expandedFAQ === index ? 'expanded' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-question">{question}</span>
                <span className="faq-arrow">▼</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Form Section */}
        <div className="quote-section">
          <div className="quote-form">
            <h2 className="quote-title">Get a free personalized quote</h2>
            
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="First Name" className="form-input" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Last Name" className="form-input" />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Zip Code" className="form-input" />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" className="form-input" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Do you own your own home?</label>
              <div className="radio-group">
                <label className="radio-item">
                  <input type="radio" name="homeownership" value="yes" defaultChecked />
                  <span className="radio-text">Yes</span>
                </label>
                <label className="radio-item">
                  <input type="radio" name="homeownership" value="no" />
                  <span className="radio-text">No</span>
                </label>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#" className="terms-link">Terms of Service</a>
              </div>
            </div>

            <div className="consent-text">
              By clicking "Get a Quote", I consent to receive pre-recorded messages, text messages, and/or calls from SunPulse and its affiliates, including through the use of autodialers, artificial voice, and/or prerecorded calls or text messages, to the telephone number I provided above, even if my telephone number is on a "Do Not Call" list. I understand that message and data rates may apply and that I may opt out at any time by replying "STOP" to any text message I receive.
            </div>

            <button className="quote-submit-btn">
              Get a Quote
              <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQQuote;
