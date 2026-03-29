import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/src/components/UI';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    { q: 'How do I book a property visit?', a: 'You can book a site visit by calling us directly at +91 99873 67777 or by filling out the enquiry form on the property detail page.' },
    { q: 'Do you help with buying and renting?', a: 'Yes, we provide comprehensive support for both buying and renting residential and commercial properties in Navi Mumbai.' },
    { q: 'Are the listings verified?', a: 'Absolutely. Every property listed with DIKSHA REAL ESTATE undergoes a strict verification process to ensure authenticity and clear titles.' },
    { q: 'Do you assist with property documentation?', a: 'Yes, we provide end-to-end documentation support, including CIDCO transfers, agreement registrations, and legal verification.' },
    { q: 'Can I get property recommendations based on budget?', a: 'Of course. Our experts can curate a personalized shortlist of properties that match your specific budget and location preferences.' },
    { q: 'How quickly can I get a callback?', a: 'We pride ourselves on our quick response time. You can expect a callback from our property advisor within 24 hours of your enquiry.' },
    { q: 'Do you cover only Kharghar or nearby areas too?', a: 'While we are specialists in Kharghar and Panvel, we also cover the broader Navi Mumbai region and upcoming growth corridors.' },
    { q: 'Can I list my property through DIKSHA REAL ESTATE?', a: 'Yes, if you are looking to sell or rent out your property, you can contact us to list it with our agency for maximum visibility.' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-ivory min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our property services."
          centered
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white rounded-2xl luxury-shadow overflow-hidden border border-gray-50">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="text-lg font-serif font-medium pr-8">{faq.q}</h3>
                <ChevronDown className="text-gray-400 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 text-gray-500 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="bg-brand-sky p-10 rounded-[2rem] text-center space-y-6">
          <h3 className="text-2xl font-serif">Still have questions?</h3>
          <p className="text-gray-600">Our team is ready to assist you with any specific queries you might have.</p>
          <div className="flex justify-center space-x-4">
            <a href="tel:9987367777" className="bg-brand-charcoal text-white px-8 py-3 rounded-full font-medium">Call Us</a>
            <a href="https://wa.me/919987367777" className="bg-white text-brand-charcoal px-8 py-3 rounded-full font-medium">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
