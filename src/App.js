import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './styles/App.css';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';
import FirstSection from './components/first-section/First-section';
import ServicesSection from './components/services-section/Services-section';
import PricesSection from './components/prices-section/Prices-section';
import Contact from './components/contact-section/Contact';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from './components/contact-form/ContactForm';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 3000
    });
  }, []);

  return (
    <div>
      <Router>
        {!showContactForm && (
          <>
            <Header />
            <Welcome />
            <FirstSection />
            <ServicesSection />
            <PricesSection />
            <Contact setShowContactForm={setShowContactForm} />
            <Footer />
          </>
        )}

        <Routes>
          <Route path='/contact-form' element={<ContactForm />} />
        </Routes>

        {showContactForm && (
          <div>
            <ContactForm />
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;