import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './ElectricMobility.css';

const ElectricMobility = () => {
  const { language } = useLanguage();
  const ELECTRIC_PRODUCTS = [
    {
      id: 1,
      name: "Electric Mobility",
      model: "Wallbox CARO Serie Home",
      image: "Electric Vehicle Charging Stations.png"
    },
    {
      id: 2,
      name: "Electric Mobility",
      model: "Electric Vehicle Charging Stations",
      image: "Electric Vehicle Charging Stations 2.png"
    },
    {
      id: 3,
      name: "Electric Mobility",
      model: "Ev Charger 60kW",
      image: "Ev Charger 60kW.png"
    },
    {
      id: 4,
      name: "Electric Mobility",
      model: "Monitoraggio Stazioni di Ricarica",
      image: "Monitoraggio Stazioni di Ricarica.png"
    }
  ];

  return (
    <div className="electric-mobility-page">
      <Header />

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <Link to="/">{getTranslation(language, 'nav.home')}</Link>
          <span className="separator">></span>
          <Link to="/products">{getTranslation(language, 'nav.products')}</Link>
          <span className="separator">></span>
          <span className="current">{getTranslation(language, 'products.electricMobilityPage.title')}</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="container">
        <div className="page-header">
          <div className="page-title-section">
            <h1 className="page-title">{getTranslation(language, 'products.electricMobilityPage.title')}</h1>
            <p className="page-description">
              {getTranslation(language, 'products.electricMobilityPage.description1')}
            </p>
          </div>
          <div className="page-image">
            <img src="/foto/electric-main.png" alt="Electric Mobility" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {ELECTRIC_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={`/products/electric/${product.image}`} 
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

export default ElectricMobility;
