import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, MessageCircle, Home } from 'lucide-react';

const ThankYou = () => {
  return (
    <div className="pt-40 pb-24 px-6 flex items-center justify-center min-h-screen bg-brand-ivory">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full bg-white p-12 md:p-20 rounded-[3rem] luxury-shadow text-center space-y-8"
      >
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle size={48} />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif">Enquiry Received</h1>
          <p className="text-gray-500 text-lg">
            Thank you for reaching out to DIKSHA REAL ESTATE. Our property advisor will review your requirements and get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
          <a
            href="tel:9987367777"
            className="flex items-center justify-center space-x-2 bg-brand-charcoal text-white py-4 rounded-xl font-bold transition-transform hover:scale-[1.02]"
          >
            <Phone size={20} />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/919987367777"
            className="flex items-center justify-center space-x-2 bg-green-600 text-white py-4 rounded-xl font-bold transition-transform hover:scale-[1.02]"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </a>
        </div>

        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-brand-charcoal font-bold border-b-2 border-brand-charcoal pb-1 hover:opacity-70 transition-opacity"
        >
          <Home size={18} />
          <span>Return to Homepage</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYou;
