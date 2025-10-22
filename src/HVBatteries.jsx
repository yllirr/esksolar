import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './HVBatteries.css';

const HVBatteries = () => {
  const { language } = useLanguage();
  const HV_PRODUCTS = [
    {
      id: 1,
      name: "HV Batteries",
      model: "HV Pylontec",
      image: "HV Pylontec.png"
    },
    {
      id: 2,
      name: "HV Batteries",
      model: "HV ZBT 5K",
      image: "HV ZBT 5K.png"
    },
    {
      id: 3,
      name: "HV Batteries",
      model: "ZCS AZZURRO HV SMART 5K",
      image: "ZCS AZZURRO HV SMART 5K.png"
    }
  ];

  return (
    <div className="hv-batteries-page">
      <Header />

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <Link to="/">{getTranslation(language, 'nav.home')}</Link>
          <span className="separator">></span>
          <Link to="/products">{getTranslation(language, 'nav.products')}</Link>
          <span className="separator">></span>
          <span className="current">{getTranslation(language, 'products.hvBatteriesPage.title')}</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="container">
        <div className="page-header">
          <div className="page-title-section">
            <h1 className="page-title">{getTranslation(language, 'products.hvBatteriesPage.title')}</h1>
            <p className="page-description">
              {getTranslation(language, 'products.hvBatteriesPage.description1')}
            </p>
            <p className="page-description">
              {getTranslation(language, 'products.hvBatteriesPage.description2')}
            </p>
            <p className="page-description">
              The Lithium Ion or Lithium-Iron-Phosphate technology allows efficient use even at high depths of discharge by optimising energy storage and reuse. Easy installation and long service life make these batteries highly efficient and practical.
            </p>
          </div>
          <div className="page-image">
            <img src="/foto/hv-batteries-main.png" alt="HV Batteries" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {HV_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={`/products/hv-batteries/${product.image}`} 
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

export default HVBatteries;
