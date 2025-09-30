import React from 'react';
import HeroSection from './HeroSection';
import SolarOptions from './SolarOptions';
import WhyChooseUs from './WhyChooseUs';
import PlanPricing from './PlanPricing';
import Testimonials from './Testimonials';
import FAQQuote from './FAQQuote';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <SolarOptions />
      <WhyChooseUs />
      <PlanPricing />
      <Testimonials />
      <FAQQuote />
      <Footer />
    </div>
  );
}

export default App;
