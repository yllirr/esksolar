import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './HeroSection';
import SolarOptions from './SolarOptions';
import WhyChooseUs from './WhyChooseUs';
import PlanPricing from './PlanPricing';
import Testimonials from './Testimonials';
import FAQQuote from './FAQQuote';
import Footer from './Footer';
import Products from './Products';
import AboutUs from './AboutUs';
import BlogPage from './BlogPage';
import SinglePhaseInverters from './SinglePhaseInverters';
import ThreePhaseInverters from './ThreePhaseInverters';
import StorageInverters from './StorageInverters';
import OutdoorRetrofitStorage from './OutdoorRetrofitStorage';
import LVBatteries from './LVBatteries';
import HVBatteries from './HVBatteries';
import ElectricMobility from './ElectricMobility';
import MonitoringSystems from './MonitoringSystems';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <SolarOptions />
              <WhyChooseUs />
              <PlanPricing />
              <Testimonials />
              <FAQQuote />
              <Footer />
            </>
          } />
          <Route path="/products" element={
            <>
              <Products />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <AboutUs />
              <Footer />
            </>
          } />
          <Route path="/blog" element={
            <>
              <BlogPage />
              <Footer />
            </>
          } />
          <Route path="/products/single-phase-inverters" element={
            <>
              <SinglePhaseInverters />
              <Footer />
            </>
          } />
          <Route path="/products/three-phase-inverters" element={
            <>
              <ThreePhaseInverters />
              <Footer />
            </>
          } />
          <Route path="/products/storage-inverters" element={
            <>
              <StorageInverters />
              <Footer />
            </>
          } />
          <Route path="/products/outdoor-retrofit-storage" element={
            <>
              <OutdoorRetrofitStorage />
              <Footer />
            </>
          } />
          <Route path="/products/lv-batteries" element={
            <>
              <LVBatteries />
              <Footer />
            </>
          } />
          <Route path="/products/hv-batteries" element={
            <>
              <HVBatteries />
              <Footer />
            </>
          } />
          <Route path="/products/electric-mobility" element={
            <>
              <ElectricMobility />
              <Footer />
            </>
          } />
          <Route path="/products/monitoring-systems" element={
            <>
              <MonitoringSystems />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
