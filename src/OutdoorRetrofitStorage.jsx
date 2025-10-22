import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './OutdoorRetrofitStorage.css';

const OutdoorRetrofitStorage = () => {
  const { language } = useLanguage();
  const OUTDOOR_PRODUCTS = [
    {
      id: 1,
      name: "Outdoor retrofit storage system",
      model: "POWER MAGIC",
      image: "POWER MAGIC.png"
    }
  ];

  return (
    <div className="outdoor-retrofit-page">
      <Header />

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <Link to="/">{getTranslation(language, 'nav.home')}</Link>
          <span className="separator">></span>
          <Link to="/products">{getTranslation(language, 'nav.products')}</Link>
          <span className="separator">></span>
          <span className="current">{getTranslation(language, 'products.outdoorRetrofitPage.title')}</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="container">
        <div className="page-header">
          <div className="page-title-section">
            <h1 className="page-title">{getTranslation(language, 'products.outdoorRetrofitPage.title')}</h1>
            <p className="page-description">
              {getTranslation(language, 'products.outdoorRetrofitPage.description1')}
            </p>
            <p className="page-description">
              {getTranslation(language, 'products.outdoorRetrofitPage.description2')}
            </p>
          </div>
          <div className="page-image">
            <img src="/foto/outdoor-main.png" alt="Outdoor Retrofit Storage System" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {OUTDOOR_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={`/products/outdoor/${product.image}`} 
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

export default OutdoorRetrofitStorage;
