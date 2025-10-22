import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './StorageInverters.css';

const StorageInverters = () => {
  const { language } = useLanguage();
  const STORAGE_PRODUCTS = [
    {
      id: 1,
      name: "Storage Inverter",
      model: "3PH HYD 5000 ZP3/ 3PH HYD 12000 ZP3",
      image: "3PH HYD 5000 ZP3: 3PH HYD 12000 ZP3.png"
    },
    {
      id: 2,
      name: "Storage Inverter",
      model: "1PH BZT5000",
      image: "1PH BZT5000.png"
    },
    {
      id: 3,
      name: "Storage Inverter",
      model: "EASY POWER - One And All",
      image: "EASY POWER – One And All.png"
    },
    {
      id: 4,
      name: "Storage Inverter",
      model: "HYD 10000 ZSS/HYD 20000 ZSS - Three-Phase Hybrid",
      image: "HYD 3000-ZSS HP:HYD 6000-ZSS HP - Single-Phase Hybrid.png"
    },
    {
      id: 5,
      name: "Storage Inverter",
      model: "HYD 5000 ZSS/HYD 8000 ZSS - Three-Phase Hybrid",
      image: "HYD 3000-ZSS:HYD 6000-ZSS - Single-Phase Hybrid.png"
    },
    {
      id: 6,
      name: "Storage Inverter",
      model: "HYD 3000-ZSS HP/HYD 6000-ZSS HP - Single-Phase Hybrid",
      image: "HYD 3000-ZSS HP:HYD 6000-ZSS HP - Single-Phase Hybrid.png"
    },
    {
      id: 7,
      name: "Storage Inverter",
      model: "HYD 3000-ZSS/HYD 6000-ZSS - Single-Phase Hybrid",
      image: "HYD 3000-ZSS:HYD 6000-ZSS - Single-Phase Hybrid.png"
    },
    {
      id: 8,
      name: "Storage Inverter",
      model: "3000SP - Retrofit",
      image: "3000SP - Retrofit.png"
    }
  ];

  return (
    <div className="storage-inverters-page">
      <Header />

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <Link to="/">{getTranslation(language, 'nav.home')}</Link>
          <span className="separator">></span>
          <Link to="/products">{getTranslation(language, 'nav.products')}</Link>
          <span className="separator">></span>
          <span className="current">{getTranslation(language, 'products.storageInvertersPage.title')}</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="container">
        <div className="page-header">
          <div className="page-title-section">
            <h1 className="page-title">{getTranslation(language, 'products.storageInvertersPage.title')}</h1>
            <p className="page-description">
              {getTranslation(language, 'products.storageInvertersPage.description1')}
            </p>
            <p className="page-description">
              {getTranslation(language, 'products.storageInvertersPage.description2')}
            </p>
          </div>
          <div className="page-image">
            <img src="/foto/storage-main.png" alt="Storage Inverter" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {STORAGE_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={`/products/storage-inverter/${product.image}`} 
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

export default StorageInverters;
