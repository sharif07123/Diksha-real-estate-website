import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/src/components/UI';
import { Home, DollarSign, Key, Users, FileText, Search, Map, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    { title: 'Buy Property Assistance', desc: 'Find your dream home with our curated listings and expert guidance.', icon: <Home /> },
    { title: 'Sell Property Support', desc: 'Get the best market value for your property with our strategic marketing.', icon: <DollarSign /> },
    { title: 'Rent Property Support', desc: 'Quick and hassle-free rental solutions for both owners and tenants.', icon: <Key /> },
    { title: 'Property Consultation', desc: 'Expert advice on market trends, pricing, and investment potential.', icon: <Users /> },
    { title: 'New Project Advisory', desc: 'Early access and exclusive deals on upcoming projects in Navi Mumbai.', icon: <Map /> },
    { title: 'Documentation Support', desc: 'Complete assistance with legal paperwork and CIDCO transfers.', icon: <FileText /> },
    { title: 'Site Visits', desc: 'Personalized property tours scheduled at your convenience.', icon: <Search /> },
    { title: 'Negotiation Support', desc: 'We ensure you get the most favorable terms in every deal.', icon: <CheckCircle /> },
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        <SectionHeader
          title="Our Premium Services"
          subtitle="Comprehensive real estate solutions tailored to your unique needs."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 rounded-3xl luxury-shadow border border-gray-50 hover:-translate-y-2 transition-transform group"
            >
              <div className="w-14 h-14 bg-brand-sky rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-charcoal group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-brand-sand rounded-[3rem] p-12 md:p-24 text-center space-y-16">
          <SectionHeader
            title="Our Simple Process"
            subtitle="How we help you find the perfect property."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { step: '01', title: 'Requirement', desc: 'Share your needs and budget with us.' },
              { step: '02', title: 'Shortlisting', desc: 'We pick the best options for you.' },
              { step: '03', title: 'Site Visits', desc: 'Explore properties in person.' },
              { step: '04', title: 'Finalization', desc: 'Smooth closing with expert support.' },
            ].map((item, i) => (
              <div key={item.step} className="space-y-4 relative z-10">
                <span className="text-6xl font-serif text-brand-charcoal/5 block">{item.step}</span>
                <h4 className="text-xl font-serif">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-brand-charcoal/10 hidden md:block -z-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
