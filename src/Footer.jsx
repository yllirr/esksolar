import React from 'react';
import './Footer.css';
import { useLanguage } from './LanguageContext';
import { translations } from './translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* SunPulse Column */}
          <div className="footer-column">
            <h3 className="footer-title">{t.footer.sunpulse}</h3>
            <ul className="footer-links">
              <li><a href="/products">{t.footer.products}</a></li>
              <li><a href="/about">{t.footer.aboutUs}</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h3 className="footer-title">{t.footer.company}</h3>
            <ul className="footer-links">
              <li><a href="/blog">{t.footer.blog}</a></li>
              <li><a href="/contact">{t.footer.contactUs}</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h3 className="footer-title">{t.footer.contact}</h3>
            <ul className="footer-links">
              <li>{t.footer.suhareke}</li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100063480521889" target="_blank" rel="noopener noreferrer" className="facebook-link">
                  {t.footer.followFacebook}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="footer-column">
            <h3 className="footer-title">{t.footer.connect}</h3>
            <div className="social-icons">
              <a 
                href="https://www.facebook.com/profile.php?id=100063480521889" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                title="Facebook"
              >
                f
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="location-icon">📍</span>
            <span>{t.footer.suhareke}</span>
          </div>
          <div className="footer-bottom-center">
            <span>{t.footer.eskSolar}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
