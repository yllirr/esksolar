import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './Products.css';

const BusinessProducts = () => {
  const { language } = useLanguage();
  
  // 5 produkte për biznes (random nga lista)
  const BUSINESS_PRODUCTS = [
    { 
      key: 'three-phase', 
      translationKey: 'threePhase',
      image: '/products/three-phase-inverter/thre-phase-main.png',
      link: '/products/three-phase-inverters'
    },
    { 
      key: 'retrofit-storage', 
      translationKey: 'retrofitStorage',
      image: '/products/outdoor/outdoor-main.png',
      link: '/products/outdoor-retrofit-storage'
    },
    { 
      key: 'storage-inverter', 
      translationKey: 'storageInverter',
      image: '/products/storage-inverter/storage-main.png',
      link: '/products/storage-inverters'
    },
    { 
      key: 'e-mobility', 
      translationKey: 'eMobility',
      image: '/products/electric/electric-main.png',
      link: '/products/electric-mobility'
    },
    { 
      key: 'monitoring', 
      translationKey: 'monitoring',
      image: '/products/monitoring-systems/monitoring-system-main.png',
      link: '/products/monitoring-systems'
    }
  ];

  return (
    <>
      <Header />

      <section id="products" className="products">
        <div className="products-container">
          <header className="products-header">
            <h2 className='products-title'>{getTranslation(language, 'products.businessProducts')}</h2>
            <p className='products-subtitle'>{getTranslation(language, 'products.subtitle')}</p>
            
            {/* Category Tabs */}
            <div className="category-tabs">
              <Link to="/products/home" className="category-tab">{getTranslation(language, 'products.homeProducts')}</Link>
              <Link to="/products/business" className="category-tab active">{getTranslation(language, 'products.businessProducts')}</Link>
            </div>
          </header>

          <div className="products-grid">
            {BUSINESS_PRODUCTS.map((p) => (
              <article key={p.key} className="product-card">
                <div className={`product-thumb thumb-${p.key}`} aria-hidden>
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="product-thumb-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{getTranslation(language, `products.productList.${p.translationKey}.title`)}</h3>
                  <p className="product-desc">{getTranslation(language, `products.productList.${p.translationKey}.description`)}</p>
                  <Link to={p.link} className="product-cta">
                    {getTranslation(language, 'products.learnMore')} <span className="arrow">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessProducts;
