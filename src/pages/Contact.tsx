import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/src/components/UI';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-24 px-6 flex items-center justify-center min-h-screen bg-brand-ivory">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[3rem] luxury-shadow text-center space-y-6"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-serif">Thank You!</h2>
          <p className="text-gray-500">Your enquiry has been received. Our property expert will call you back within 24 hours.</p>
          <div className="pt-6 space-y-3">
            <button
              onClick={() => setSubmitted(false)}
              className="w-full bg-brand-charcoal text-white py-4 rounded-xl font-bold"
            >
              Back to Contact
            </button>
            <Link to="/" className="block text-sm text-gray-400 hover:text-brand-charcoal transition-colors">
              Return to Homepage
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        <SectionHeader
          title="Get in Touch"
          subtitle="Have questions? Our experts are here to help you find the perfect property."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-brand-sky rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-charcoal" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-serif">Office Address</h4>
                  <p className="text-gray-500 leading-relaxed">
                    Bldg L-3, Shop No-8, Swapnapoorti Housing Scheme CIDCO, <br />
                    Sector 36, Kharghar, Panvel, Maharashtra 410210
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-brand-sky rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand-charcoal" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-serif">Phone Number</h4>
                  <a href="tel:9987367777" className="text-gray-500 text-lg hover:text-brand-charcoal transition-colors">
                    +91 99873 67777
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-brand-sky rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-brand-charcoal" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-serif">Working Hours</h4>
                  <p className="text-gray-500">Mon - Sun: 10:00 AM - 08:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video rounded-[2rem] overflow-hidden luxury-shadow border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.311745234567!2d73.06!3d19.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAxJzQ4LjAiTiA3M8KwMDMnMzYuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-12 rounded-[3rem] luxury-shadow border border-gray-50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-serif">Send a Message</h3>
                <p className="text-gray-400 text-sm">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-charcoal/20 bg-brand-ivory/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-charcoal/20 bg-brand-ivory/50"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-charcoal/20 bg-brand-ivory/50"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Interested In</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-charcoal/20 bg-brand-ivory/50">
                  <option>Buying Property</option>
                  <option>Selling Property</option>
                  <option>Renting Property</option>
                  <option>Investment Advice</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-charcoal/20 bg-brand-ivory/50 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-charcoal text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Send Enquiry</span>
                <Send size={18} />
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-center space-x-6">
              <a href="https://wa.me/919987367777" className="text-green-600 flex items-center space-x-2 font-bold">
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
              <div className="w-[1px] h-4 bg-gray-200" />
              <a href="tel:9987367777" className="text-brand-charcoal flex items-center space-x-2 font-bold">
                <Phone size={20} />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Link } from 'react-router-dom';
export default Contact;
