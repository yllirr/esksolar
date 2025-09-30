import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* SunPulse Column */}
          <div className="footer-column">
            <h3 className="footer-title">SunPulse</h3>
            <ul className="footer-links">
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/learn">Learn</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/company">Company</a></li>
              <li><a href="/investors">Investors</a></li>
            </ul>
            <div className="social-icons">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="social-icon">f</a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="social-icon">t</a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="social-icon">i</a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="social-icon">in</a>
            </div>
          </div>

          {/* Meet Sunrun Column */}
          <div className="footer-column">
            <h3 className="footer-title">Meet Sunrun</h3>
            <ul className="footer-links">
              <li><a href="/why-sunrun">Why Sunrun</a></li>
              <li><a href="/guarantee">Our Guarantee</a></li>
              <li><a href="/impact">Sunrun Impact</a></li>
              <li><a href="/stories">Customer Stories</a></li>
              <li><a href="/leadership">Leadership Team</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/partnerships">Partnerships</a></li>
              <li><a href="/solar-by-state">Solar by State</a></li>
            </ul>
          </div>

          {/* Customers Column */}
          <div className="footer-column">
            <h3 className="footer-title">Customers</h3>
            <ul className="footer-links">
              <li><a href="/home-builders">Home Builders</a></li>
              <li><a href="/refer">Refer a Friend</a></li>
              <li><a href="/login">Account Login</a></li>
            </ul>
          </div>

          {/* Need Help Column */}
          <div className="footer-column">
            <h3 className="footer-title">Need Help?</h3>
            <ul className="footer-links">
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="location-icon">📍</span>
            <span>State: California</span>
          </div>
          <div className="footer-bottom-center">
            <span>© 2024 Sunrun. All Rights Reserved</span>
          </div>
          <div className="footer-bottom-right">
            <a href="/license">State Contractor License</a>
            <a href="/privacy-choices">Your Privacy Choices</a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
