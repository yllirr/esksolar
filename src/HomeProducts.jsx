import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './Products.css';

const HomeProducts = () => {
  const { language } = useLanguage();
  
  // 6 produkte për shtëpi (random nga lista)
  const HOME_PRODUCTS = [
    { 
      key: 'single-phase', 
      translationKey: 'singlePhase',
      image: '/products/single-phase-inverters/main.png',
      link: '/products/single-phase-inverters'
    },
    { 
      key: 'storage-inverter', 
      translationKey: 'storageInverter',
      image: '/products/storage-inverter/storage-main.png',
      link: '/products/storage-inverters'
    },
    { 
      key: 'lv-batteries', 
      translationKey: 'lvBatteries',
      image: '/products/lv-batteries/lv-batteries-main.png',
      link: '/products/lv-batteries'
    },
    { 
      key: 'hv-batteries', 
      translationKey: 'hvBatteries',
      image: '/products/hv-batteries/hv-batteries-main.png',
      link: '/products/hv-batteries'
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
            <h2 className='products-title'>{getTranslation(language, 'products.homeProducts')}</h2>
            <p className='products-subtitle'>{getTranslation(language, 'products.subtitle')}</p>
            
            {/* Category Tabs */}
            <div className="category-tabs">
              <Link to="/products/home" className="category-tab active">{getTranslation(language, 'products.homeProducts')}</Link>
              <Link to="/products/business" className="category-tab">{getTranslation(language, 'products.businessProducts')}</Link>
            </div>
          </header>

          <div className="products-grid">
            {HOME_PRODUCTS.map((p) => (
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

export default HomeProducts;
