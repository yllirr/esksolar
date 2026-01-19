import React from 'react';
import Header from './Header';
import { useLanguage } from './LanguageContext';
import { getTranslation } from './translations';
import './RrethNesh.css';

const RrethNesh = () => {
  const { language } = useLanguage();
  
  // Lista e projekteve me fotot (vetëm 3 projekte)
  const projects = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/foto/projekt/projekt1.jpg`,
      title: language === 'sq' ? 'Projekt 1' : 'Project 1'
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/foto/projekt/projekt2.jpg`,
      title: language === 'sq' ? 'Projekt 2' : 'Project 2'
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/foto/projekt/projekt3.jpg`,
      title: language === 'sq' ? 'Projekt 3' : 'Project 3'
    }
  ];
  
  return (
    <>
      <Header />

      <section className="rreth-nesh">
        {/* Hero Section */}
        <div className="rreth-nesh-hero">
          <div className="container">
            <h1 className="rreth-nesh-title">{getTranslation(language, 'rrethNesh.title')}</h1>
            <p className="rreth-nesh-subtitle">
              {getTranslation(language, 'rrethNesh.subtitle')}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="rreth-nesh-content">
          <div className="container">
            {/* Historia e Kompanisë */}
            <div className="content-section">
              <h2 className="section-title">{getTranslation(language, 'rrethNesh.historia')}</h2>
              <div className="text-content">
                <p>{getTranslation(language, 'rrethNesh.historiaText1')}</p>
                <p>{getTranslation(language, 'rrethNesh.historiaText2')}</p>
                <p>{getTranslation(language, 'rrethNesh.historiaText3')}</p>
              </div>
            </div>

            {/* Misioni */}
            <div className="content-section mission-section">
              <h2 className="section-title">{getTranslation(language, 'rrethNesh.misioni')}</h2>
              <div className="text-content">
                <p>{getTranslation(language, 'rrethNesh.misioniText')}</p>
              </div>
            </div>

            {/* Vlerat */}
            <div className="content-section">
              <h2 className="section-title">{getTranslation(language, 'rrethNesh.vlerat')}</h2>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">🌱</div>
                  <h3 className="value-title">{getTranslation(language, 'rrethNesh.vlera1Title')}</h3>
                  <p className="value-text">{getTranslation(language, 'rrethNesh.vlera1Text')}</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🔬</div>
                  <h3 className="value-title">{getTranslation(language, 'rrethNesh.vlera2Title')}</h3>
                  <p className="value-text">{getTranslation(language, 'rrethNesh.vlera2Text')}</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🤝</div>
                  <h3 className="value-title">{getTranslation(language, 'rrethNesh.vlera3Title')}</h3>
                  <p className="value-text">{getTranslation(language, 'rrethNesh.vlera3Text')}</p>
                </div>
                <div className="value-item">
                  <div className="value-icon">📈</div>
                  <h3 className="value-title">{getTranslation(language, 'rrethNesh.vlera4Title')}</h3>
                  <p className="value-text">{getTranslation(language, 'rrethNesh.vlera4Text')}</p>
                </div>
              </div>
            </div>

            {/* Seksioni Projektet Tona */}
            <div className="projektet-tona-section">
              <h2 className="section-title">{getTranslation(language, 'rrethNesh.projektetTona')}</h2>
              <p className="section-description">
                {getTranslation(language, 'rrethNesh.projektetTonaDescription')}
              </p>
              
              <div className="projektet-grid">
                {projects.map((project) => (
                  <div key={project.id} className="projekt-card">
                    <div className="projekt-image-wrapper">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="projekt-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="projekt-info">
                      <h3 className="projekt-title">{project.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RrethNesh;
