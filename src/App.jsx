import React from 'react';
import './index.css'
import Navigation from './components/Navigation';
import Header from './components/Header';
import FeaturedProjects from './components/FeaturedProjects';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <FeaturedProjects />
      <ContactSection />
      <Footer /> 
      </>
  );
} 

export default App;
