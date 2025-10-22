import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './MonitoringSystems.css';

const MonitoringSystems = () => {
  const { language } = useLanguage();
  const MONITORING_PRODUCTS = [
    {
      id: 1,
      name: "Monitoring Systems",
      model: "Azzurro Hub",
      image: "Azzurro Hub.png"
    },
    {
      id: 2,
      name: "Monitoring Systems",
      model: "ZCS COMBOX",
      image: "zcs-combox.png"
    },
    {
      id: 3,
      name: "Monitoring Systems",
      model: "Plants monitoring systems",
      image: "Plants monitoring systems.png"
    },
    {
      id: 4,
      name: "Monitoring Systems",
      model: "ZCS Connext",
      image: "ZCS-connext.png"
    }
  ];

  return (
    <div className="monitoring-systems-page">
      <Header />

      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <Link to="/">{getTranslation(language, 'nav.home')}</Link>
          <span className="separator">></span>
          <Link to="/products">{getTranslation(language, 'nav.products')}</Link>
          <span className="separator">></span>
          <span className="current">{getTranslation(language, 'products.monitoringSystemsPage.title')}</span>
        </div>
      </div>

      {/* Page Header */}
      <div className="container">
        <div className="page-header">
          <div className="page-title-section">
            <h1 className="page-title">{getTranslation(language, 'products.monitoringSystemsPage.title')}</h1>
            <p className="page-description">
              {getTranslation(language, 'products.monitoringSystemsPage.description1')}
            </p>
          </div>
          <div className="page-image">
            <img src="/foto/monitoring-system-main.png" alt="Monitoring Systems" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {MONITORING_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={`/products/monitoring-systems/${product.image}`} 
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

export default MonitoringSystems;
