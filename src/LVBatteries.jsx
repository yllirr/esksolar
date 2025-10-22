import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './LVBatteries.css';

const LVBatteries = () => {
  const { language } = useLanguage();
  const LV_PRODUCTS = [
    {
      id: 1,
      name: "LV Batteries",
      model: "LV Pylontec",
      image: "LV Pylontec.png"
    },
    {
      id: 2,
      name: "LV Batteries",
      model: "LV Weco",
      image: "LV Weco.png"
    },
    {
      id: 3,
      name: "LV Batteries",
      model: "LV ZSX Azzurro",
      image: "LV ZSX Azzurro.png"
    }
  ];

  return (
    <div className="lv-batteries-page">
      <Header />

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <Link to="/">{getTranslation(language, 'nav.home')}</Link>
          <span className="separator">></span>
          <Link to="/products">{getTranslation(language, 'nav.products')}</Link>
          <span className="separator">></span>
          <span className="current">{getTranslation(language, 'products.lvBatteriesPage.title')}</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="container">
        <div className="page-header">
          <div className="page-title-section">
            <h1 className="page-title">{getTranslation(language, 'products.lvBatteriesPage.title')}</h1>
            <p className="page-description">
              {getTranslation(language, 'products.lvBatteriesPage.description1')}
            </p>
            <p className="page-description">
              {getTranslation(language, 'products.lvBatteriesPage.description2')}
            </p>
          </div>
          <div className="page-image">
            <img src="/foto/lv-batteries-main.png" alt="LV Batteries" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {LV_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={`/products/lv-batteries/${product.image}`} 
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-model">{product.model}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LVBatteries;
