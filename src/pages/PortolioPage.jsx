import React from 'react';
import Navigation from '../components/Navigation';
import AllProjects from '../components/AllProjects';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';


export default function PortfolioPage() {
    return (
        <>
        <Navigation />
        <AllProjects />
        <ContactSection />
        <Footer />
        </>
    )
}