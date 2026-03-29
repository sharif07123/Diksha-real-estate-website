import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/src/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Properties', path: '/properties' },
    { name: 'Services', path: '/services' },
    { name: 'Areas', path: '/areas' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-lg luxury-shadow py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-charcoal">
            DIKSHA
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium -mt-1 opacity-70">
            Real Estate
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-brand-charcoal/60',
                location.pathname === link.path ? 'text-brand-charcoal' : 'text-brand-charcoal/70'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:9987367777"
            className="flex items-center space-x-2 bg-brand-charcoal text-white px-5 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95"
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col space-y-4 md:hidden luxury-shadow"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="tel:9987367777"
                className="flex items-center justify-center space-x-2 bg-brand-charcoal text-white py-3 rounded-xl"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919987367777"
                className="flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-xl"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-3xl font-bold tracking-tight">DIKSHA</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium -mt-1 opacity-50">
              Real Estate
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            A premium real estate experience for buying, selling, and investing in Kharghar, Panvel, and surrounding locations.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/properties" className="hover:text-white transition-colors">Browse Properties</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Our Agency</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/areas" className="hover:text-white transition-colors">Areas We Serve</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Contact Us</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Bldg L-3, Shop No-8, Swapnapoorti Housing Scheme CIDCO, Sector 36, Kharghar, Panvel, Maharashtra 410210</li>
            <li><a href="tel:9987367777" className="hover:text-white transition-colors">+91 99873 67777</a></li>
            <li><a href="mailto:info@diksharealestate.com" className="hover:text-white transition-colors">info@diksharealestate.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Stay updated with the latest property trends.</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-white/40"
            />
            <button className="bg-white text-brand-charcoal px-4 py-2 rounded-lg text-sm font-medium">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs space-y-4 md:space-y-0">
        <p>© 2026 DIKSHA REAL ESTATE. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export const WhatsAppButton = () => (
  <a
    href="https://wa.me/919987367777"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 flex items-center justify-center animate-float"
  >
    <MessageCircle size={28} />
  </a>
);
