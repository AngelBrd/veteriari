import './styles/App.css';
import Header from './components/header/Header';
import Welcome from './components/welcome/Welcome';
import FirstSection from './components/first-section/First-section';
import ServicesSection from './components/services-section/Services-section';
import PricesSection from './components/prices-section/Prices-section';
import Contact from './components/contact-section/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Welcome></Welcome>
      <FirstSection></FirstSection>
      <ServicesSection></ServicesSection>
      <PricesSection></PricesSection>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
