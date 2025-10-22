import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './Products.css';

const PRODUCTS = [
  { key: 'single-phase', translationKey: 'singlePhase' },
  { key: 'three-phase', translationKey: 'threePhase' },
  { key: 'storage-inverter', translationKey: 'storageInverter' },
  { key: 'retrofit-storage', translationKey: 'retrofitStorage' },
  { key: 'lv-batteries', translationKey: 'lvBatteries' },
  { key: 'hv-batteries', translationKey: 'hvBatteries' },
  { key: 'e-mobility', translationKey: 'eMobility' },
  { key: 'monitoring', translationKey: 'monitoring' },
];

const Products = () => {
  const { language } = useLanguage();
  
  return (
    <>
      <Header />

      <section id="products" className="products">
      <div className="products-container">
        <header className="products-header">
          <h2 className="products-title">{getTranslation(language, 'products.title')}</h2>
          <p className="products-subtitle">{getTranslation(language, 'products.subtitle')}</p>
          
          {/* Category Tabs */}
          <div className="category-tabs">
            <Link to="/products/home" className="category-tab">{getTranslation(language, 'products.homeProducts')}</Link>
            <Link to="/products/business" className="category-tab">{getTranslation(language, 'products.businessProducts')}</Link>
          </div>
        </header>

        <div className="products-grid">
          {PRODUCTS.map((p) => (
            <article key={p.key} className="product-card">
              <div className={`product-thumb thumb-${p.key}`} aria-hidden>
                {p.key === 'single-phase' ? (
                  <img 
                    src="/products/single-phase-inverters/main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : p.key === 'three-phase' ? (
                  <img 
                    src="/products/three-phase-inverter/thre-phase-main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : p.key === 'storage-inverter' ? (
                  <img 
                    src="/products/storage-inverter/storage-main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : p.key === 'retrofit-storage' ? (
                  <img 
                    src="/products/outdoor/outdoor-main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : p.key === 'lv-batteries' ? (
                  <img 
                    src="/products/lv-batteries/lv-batteries-main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : p.key === 'hv-batteries' ? (
                  <img 
                    src="/products/hv-batteries/hv-batteries-main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : p.key === 'e-mobility' ? (
                  <img 
                    src="/products/electric/electric-main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : p.key === 'monitoring' ? (
                  <img 
                    src="/products/monitoring-systems/monitoring-system-main.png" 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                ) : (
                  <div className="thumb-fallback" />
                )}
              </div>
              <div className="product-info">
                <h3 className="product-name">{getTranslation(language, `products.productList.${p.translationKey}.title`)}</h3>
                <p className="product-desc">{getTranslation(language, `products.productList.${p.translationKey}.description`)}</p>
                <Link 
                  to={
                    p.key === 'single-phase' ? '/products/single-phase-inverters' :
                    p.key === 'three-phase' ? '/products/three-phase-inverters' :
                    p.key === 'storage-inverter' ? '/products/storage-inverters' :
                    p.key === 'retrofit-storage' ? '/products/outdoor-retrofit-storage' :
                    p.key === 'lv-batteries' ? '/products/lv-batteries' :
                    p.key === 'hv-batteries' ? '/products/hv-batteries' :
                    p.key === 'e-mobility' ? '/products/electric-mobility' :
                    p.key === 'monitoring' ? '/products/monitoring-systems' : '#'
                  } 
                  className="product-cta"
                >
                  {getTranslation(language, 'products.learnMore')} <span className="arrow">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Installer Section */}
    <section className="installer-section">
      <div className="installer-background">
        <div className="installer-pattern"></div>
      </div>
      <div className="container">
        <div className="installer-content">
          <div className="installer-header">
            <span className="installer-badge">{getTranslation(language, 'products.installerTitle')}</span>
            <h2 className="installer-question">{getTranslation(language, 'products.installerSubtitle')}</h2>
            <p className="installer-description">
              {language === 'sq' 
                ? 'Bashkohuni me mijëra profesionistë të certifikuar që besojnë zgjidhjet tona. Aksesoni burime ekskluzive, trajnime dhe mbështetje për të rritur biznesin tuaj.'
                : 'Join thousands of certified professionals who trust our solutions. Access exclusive resources, training, and support to grow your business.'
              }
            </p>
          </div>
          
          <div className="installer-grid">
            <div className="installer-card installer-card-primary">
              <div className="card-glow"></div>
              <div className="installer-icon">
                <div className="icon-wrapper">
                  <svg className="icon-svg" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="card-content">
                <h3 className="installer-title">{getTranslation(language, 'products.faq')}</h3>
                <h4 className="installer-subtitle">{getTranslation(language, 'faq.title')}</h4>
                <p className="card-description">
                  {language === 'sq' 
                    ? 'Merrni përgjigje të menjëhershme për pyetjet teknike dhe aksesoni bazën tonë të njohurive gjithëpërfshirëse.'
                    : 'Get instant answers to technical questions and access our comprehensive knowledge base.'
                  }
                </p>
                <button className="installer-btn installer-btn-primary">
                  <span>Explore Resources</span>
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="installer-card installer-card-secondary">
              <div className="installer-icon">
                <div className="icon-wrapper">
                  <svg className="icon-svg" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="card-content">
                <h3 className="installer-title">{getTranslation(language, 'products.training')}</h3>
                <p className="card-description">
                  {language === 'sq' 
                    ? 'Zotëroni teknologjitë më të fundit diellore me programet tona gjithëpërfshirëse të certifikimit.'
                    : 'Master the latest solar technologies with our comprehensive certification programs.'
                  }
                </p>
                <div className="course-stats">
                  <div className="stat">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">{language === 'sq' ? 'Kurse' : 'Courses'}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">2K+</span>
                    <span className="stat-label">{language === 'sq' ? 'Diplomuarë' : 'Graduates'}</span>
                  </div>
                </div>
                <button className="installer-btn installer-btn-secondary">
                  <span>{language === 'sq' ? 'Fillo Mësimin' : 'Start Learning'}</span>
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="installer-card installer-card-tertiary">
              <div className="installer-icon">
                <div className="icon-wrapper">
                  <svg className="icon-svg" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="play-overlay">
                    <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h3 className="installer-title">{getTranslation(language, 'products.documentation')}</h3>
                <p className="card-description">
                  {language === 'sq' 
                    ? 'Udhëzime hap pas hapi, specifikime teknike dhe video walkthrough për çdo produkt.'
                    : 'Step-by-step guides, technical specifications, and video walkthroughs for every product.'
                  }
                </p>
                <div className="resource-count">
                  <span className="count-item">📋 {language === 'sq' ? '200+ Udhëzime' : '200+ Guides'}</span>
                  <span className="count-item">🎥 {language === 'sq' ? '150+ Video' : '150+ Videos'}</span>
                </div>
                <button className="installer-btn installer-btn-tertiary">
                  <span>{language === 'sq' ? 'Shfletoni Bibliotekën' : 'Browse Library'}</span>
                  <svg className="btn-arrow" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Products;


