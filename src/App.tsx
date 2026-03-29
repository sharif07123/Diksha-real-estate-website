import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer, WhatsAppButton } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Services from './pages/Services';
import Areas from './pages/Areas';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import ThankYou from './pages/ThankYou';
import SellProperty from './pages/SellProperty';
import RentProperty from './pages/RentProperty';
import NewLaunches from './pages/NewLaunches';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/sell" element={<SellProperty />} />
            <Route path="/rent" element={<RentProperty />} />
            <Route path="/new-launches" element={<NewLaunches />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy" element={<div className="pt-40 pb-20 px-6 text-center"><h1 className="text-4xl font-serif">Privacy Policy</h1><p className="mt-4 text-gray-500">Coming soon...</p></div>} />
            <Route path="/terms" element={<div className="pt-40 pb-20 px-6 text-center"><h1 className="text-4xl font-serif">Terms & Conditions</h1><p className="mt-4 text-gray-500">Coming soon...</p></div>} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
