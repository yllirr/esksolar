import React from 'react';
import { Link } from 'react-router-dom';
import './ThreePhaseInverters.css';

const THREE_PHASE_PRODUCTS = [
  {
    id: 1,
    name: "Three-phase Inverter",
    model: "3PH 3.3KTL-V3/3PH 12KTL-V3",
    image: "3PH 3.3KTL-V3:3PH 12KTL-V3.png",
    endOfLife: false
  },
  {
    id: 2,
    name: "Three-phase Inverter",
    model: "3PH 15000TL-V3/3PH 24000TL-V3",
    image: "3PH 15000TL-V3:3PH 24000TL-V3.png",
    endOfLife: false
  },
  {
    id: 3,
    name: "Three-phase Inverter",
    model: "3PH 25KTL-V3/3PH 50KTL-V3",
    image: "3PH 25KTL-V3:3PH 50KTL-V3.png",
    endOfLife: false
  },
  {
    id: 4,
    name: "Three-phase Inverter",
    model: "60KTL-V3/3PH 80KTL-V3",
    image: "60KTL-V3:3PH 80KTL-V3.png",
    endOfLife: false
  },
  {
    id: 5,
    name: "Three-phase Inverter",
    model: "100KTL-V4/110KTL-V4",
    image: "100KTL-V4:110KTL-V4.png",
    endOfLife: false
  },
  {
    id: 6,
    name: "Three-phase Inverter",
    model: "3PH 250KTL-HV Z0 / 330KTL-HV Z0 / 350KTL-HV Z0",
    image: "3PH 250KTL-HV Z0 : 330KTL-HV Z0 : 350KTL-HV Z0.png",
    endOfLife: false
  },
  {
    id: 7,
    name: "Three-phase Inverter",
    model: "3PH 250KTL-HV/255KTL-HV",
    image: "3PH 250KTL-HV:255KTL-HV.png",
    endOfLife: false
  },
  {
    id: 8,
    name: "Three-phase Inverter",
    model: "50000TL-V1/60000TL-V1",
    image: "50000TL-V1:60000TL-V1.png",
    endOfLife: true
  },
  {
    id: 9,
    name: "Three-phase Inverter",
    model: "100KTL-HV/136KTL-HV",
    image: "100KTL-HV:136KTL-HV.png",
    endOfLife: true
  },
  {
    id: 10,
    name: "Three-phase Inverter",
    model: "80KTL-LV/110KTL-LV",
    image: "80KTL-LV:110KTL-LV.png",
    endOfLife: true
  },
  {
    id: 11,
    name: "Three-phase Inverter",
    model: "20000TL-V2/33000TL-V2",
    image: "20000TL-V2:33000TL-V2.png",
    endOfLife: true
  }
];

const ThreePhaseInverters = () => {
  return (
    <>
      {/* Header Navigation */}
      <header className="header">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="logo">SunPulse</Link>
            <nav className="nav-menu">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <button className="btn-quote-header">Get a Quote</button>
          </div>
        </div>
      </header>

      <section className="three-phase-page">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="breadcrumb">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-separator">></span>
            <Link to="/products">INVERTERS</Link>
            <span className="breadcrumb-separator">></span>
            <span className="breadcrumb-current">THREE-PHASE INVERTER</span>
          </nav>

          {/* Page Header */}
          <div className="page-header">
            <div className="page-title-section">
              <h1 className="page-title">Three-phase Inverter</h1>
              <p className="page-description">
                The ZCS Azzurro three-phase inverters are the best solution for medium-size photovoltaic systems to be installed in commercial and industrial buildings.
              </p>
              <p className="page-description">
                The advanced technology developed by ZCS makes the Azzurro three-phase inverters efficient, versatile and highly functional.
              </p>
              <p className="page-description">
                Available in sizes from 3.3 to 136 Kw, they are easy to configure, safe and robust and able to adapt to every type of need, for both new installations and retrofitting of existing ones.
              </p>
            </div>
            <div className="page-image">
              <img src="/products/three-phase-inverter/thre-phase-main.png" alt="Three-phase Inverter" />
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {THREE_PHASE_PRODUCTS.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img 
                    src={`/products/three-phase-inverter/${product.image}`} 
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
    </>
  );
};

export default ThreePhaseInverters;
