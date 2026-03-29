import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/src/components/UI';
import { MapPin, TrendingUp, Building2, Users } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const Areas = () => {
  const areas = [
    {
      name: 'Kharghar',
      desc: 'Known as the educational hub of Navi Mumbai, Kharghar offers a mix of premium high-rises and CIDCO developed sectors. With lush greenery and excellent connectivity, it is a top choice for families.',
      highlights: ['Central Park', 'Golf Course', 'Educational Institutions', 'Upcoming Metro'],
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Panvel',
      desc: 'The gateway to Navi Mumbai, Panvel is witnessing massive infrastructure growth due to the upcoming International Airport. It offers great value for investors and homebuyers alike.',
      highlights: ['International Airport Proximity', 'Railway Junction', 'Industrial Hubs', 'Affordable Luxury'],
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Navi Mumbai',
      desc: 'A planned city with wide roads and organized sectors. Navi Mumbai is the perfect blend of modern urban living and peaceful residential zones.',
      highlights: ['Planned Infrastructure', 'IT Parks', 'Malls & Entertainment', 'Seawoods Grand Central'],
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto space-y-24">
        <SectionHeader
          title="Areas We Serve"
          subtitle="Deep expertise in the most promising locations of Navi Mumbai."
          centered
        />

        <div className="space-y-32">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:flex-row gap-16 items-center",
                i % 2 !== 0 && "lg:flex-row-reverse"
              )}
            >
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <h3 className="text-5xl font-serif">{area.name}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">{area.desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {area.highlights.map(h => (
                    <div key={h} className="flex items-center space-x-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 bg-brand-charcoal rounded-full" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-brand-charcoal text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-brand-charcoal/90 transition-colors">
                  View Properties in {area.name}
                </button>
              </div>
              <div className="flex-1 w-full aspect-video lg:aspect-square rounded-[3rem] overflow-hidden luxury-shadow">
                <img src={area.image} alt={area.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-20 border-y border-gray-100">
          {[
            { label: 'Avg. Price Growth', value: '12%', icon: <TrendingUp /> },
            { label: 'New Launches', value: '45+', icon: <Building2 /> },
            { label: 'Active Buyers', value: '2.5k', icon: <Users /> },
            { label: 'Sectors Covered', icon: <MapPin />, value: '100%' },
          ].map(stat => (
            <div key={stat.label} className="text-center space-y-2">
              <div className="flex justify-center text-brand-charcoal/30 mb-2">{stat.icon}</div>
              <p className="text-3xl font-serif font-bold">{stat.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Areas;
