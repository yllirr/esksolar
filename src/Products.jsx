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
    </>
  );
};

export default Products;


