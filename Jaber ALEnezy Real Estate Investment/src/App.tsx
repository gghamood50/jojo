/* ================================================================
   APP — Root Application Component
   Assembles the LayoutWrapper, Navbar, and all sections
   ================================================================ */

import LayoutWrapper from './components/LayoutWrapper';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <LayoutWrapper>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </LayoutWrapper>
  );
}
