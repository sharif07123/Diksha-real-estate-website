import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader, PropertyCard } from '@/src/components/UI';
import { PROPERTIES } from '@/src/constants';

const NewLaunches = () => {
  const launches = PROPERTIES.filter(p => p.type === 'Project' || p.status === 'Under Construction');

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeader
          title="New Launches & Projects"
          subtitle="Be the first to explore upcoming landmarks and exclusive pre-launch offers."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {launches.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>

        <div className="bg-brand-charcoal text-white p-12 md:p-20 rounded-[3rem] text-center space-y-8">
          <h3 className="text-3xl md:text-4xl font-serif">Get Exclusive Pre-launch Access</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Register your interest to receive early bird pricing and floor plans for upcoming projects in Kharghar and Panvel.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-white/10 border border-white/20 px-6 py-4 rounded-xl focus:outline-none focus:border-white/40 min-w-[300px]"
            />
            <button className="bg-white text-brand-charcoal px-10 py-4 rounded-xl font-bold">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLaunches;
