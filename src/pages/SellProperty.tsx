import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/src/components/UI';
import { Home, DollarSign, FileText, CheckCircle } from 'lucide-react';

const SellProperty = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <SectionHeader
              title="Sell Your Property with Confidence"
              subtitle="Get the best market value for your property in Kharghar and Panvel with our expert marketing and negotiation."
            />
            <div className="space-y-6">
              {[
                { title: 'Free Valuation', desc: 'Get an accurate estimate of your property\'s current market worth.' },
                { title: 'Premium Marketing', desc: 'We showcase your property to thousands of verified buyers.' },
                { title: 'Hassle-free Process', desc: 'We handle all documentation and CIDCO transfer formalities.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-brand-sky rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} className="text-brand-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] luxury-shadow border border-gray-50">
            <form className="space-y-6">
              <h3 className="text-2xl font-serif">List Your Property</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-charcoal/20" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-charcoal/20" />
                <input type="text" placeholder="Property Location" className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-charcoal/20" />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-charcoal/20">
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                  <option>Plot</option>
                </select>
                <textarea placeholder="Tell us more about your property..." rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-charcoal/20 resize-none"></textarea>
                <button className="w-full bg-brand-charcoal text-white py-4 rounded-xl font-bold">Submit Details</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellProperty;
