import React, { useState } from 'react';
import './FAQQuote.css';

const FAQQuote = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqData = [
    {
      question: "I am interested in installing a photovoltaic system without connecting it to the grid. I heard that setting the inverter to zero feed-in allows for this possibility. Can ZCS inverters do this?",
      answer: "According to regulations, connecting an inverter to the grid is mandatory, regardless of whether it feeds power into the grid or not. That said, all ZCS inverters can be set to zero feed-in upon request, using specific accessories like a CT or meter."
    },
    {
      question: "I would like to estimate how much power I can produce from a photovoltaic system installed on the roof of my house. Can you assist me with this?",
      answer: "ZCS provides an online configurator for free. By registering with a valid email address, you can customise your system by choosing the type of panels, orientation, inverter and batteries. This tool provides an estimate of how much energy your system will produce."
    },
    {
      question: "Is it possible to use optimisers with panels connected to ZCS inverters?",
      answer: "Yes, you can use any optimiser model that is not specifically dedicated to a particular inverter."
    },
    {
      question: "I recently installed a system and received my first energy bill. I would like to make improvements using your products. What modifications can I make without losing my incentives?",
      answer: "ZCS offers technical support but does not provide legal advice on incentive-related matters."
    },
    {
      question: "I work as a system engineer and need to determine the necessary protection devices for a project involving the installation of ZCS products. Can I send you an installation diagram for verification?",
      answer: "ZCS is committed to offering clarification and advice about its products. However, the responsibility for sizing the system lies with the system engineer, who, based on training, experience and calculations, determines the appropriate devices to be used. For these reasons, ZCS does not provide verifications for designs created by others."
    },
    {
      question: "A customer with a utility that lacks a neutral connection and operates with a phase-to-phase voltage is interested in installing an inverter. Can I use a ZCS inverter?",
      answer: "ZCS inverters are designed to work with standard electrical configurations. For installations with non-standard voltage configurations, please contact our technical support team for specific guidance and compatibility verification."
    }
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
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${expandedFAQ === index ? 'expanded' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question-wrapper">
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-arrow">{expandedFAQ === index ? '−' : '+'}</span>
                </div>
                {expandedFAQ === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
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
