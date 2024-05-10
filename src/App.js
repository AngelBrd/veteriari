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
      duration: 2000
    });
  }, []);

  useEffect(() => {
    if (showContactForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showContactForm]);

  return (
    <div>
      <Router>
        {showContactForm && (
          <div className="modal-background">
            <div className="modal" data-aos="fade-up">
              <ContactForm onClose={() => setShowContactForm(false)} />
            </div>
          </div>
        )}

        <div className={`content ${showContactForm ? 'blur' : ''}`}>
          <Header />
          <Welcome setShowContactForm={setShowContactForm} />
          <FirstSection />
          <ServicesSection />
          <PricesSection />
          <Contact setShowContactForm={setShowContactForm} />
          <Footer />
        </div>

        <Routes>
          <Route path='/contact-form' element={<ContactForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;