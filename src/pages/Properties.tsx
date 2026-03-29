import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, Grid, List } from 'lucide-react';
import { PropertyCard, SectionHeader } from '@/src/components/UI';
import { PROPERTIES } from '@/src/constants';

const Properties = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filteredProperties = PROPERTIES.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'All' || p.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-brand-ivory">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between space-y-6 md:space-y-0">
          <SectionHeader
            title="Explore Our Listings"
            subtitle="Discover premium residential and commercial properties in Navi Mumbai."
          />

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-brand-charcoal text-white' : 'bg-white text-gray-400'}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-brand-charcoal text-white' : 'bg-white text-gray-400'}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="glass p-6 rounded-3xl luxury-shadow flex flex-col lg:flex-row gap-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by location, project, or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/50 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-charcoal/20"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-6 py-3 bg-white/50 rounded-xl border border-gray-100 focus:outline-none text-sm font-medium min-w-[160px]"
            >
              <option value="All">All Property Types</option>
              <option value="Apartment">Apartments</option>
              <option value="Villa">Villas</option>
              <option value="Commercial">Commercial</option>
              <option value="Plot">Plots</option>
            </select>

            <select className="px-6 py-3 bg-white/50 rounded-xl border border-gray-100 focus:outline-none text-sm font-medium min-w-[160px]">
              <option>Price Range</option>
              <option>Under ₹50L</option>
              <option>₹50L - ₹1Cr</option>
              <option>₹1Cr - ₹2Cr</option>
              <option>₹2Cr+</option>
            </select>

            <button className="flex items-center space-x-2 px-6 py-3 bg-brand-charcoal text-white rounded-xl font-medium transition-transform hover:scale-105">
              <SlidersHorizontal size={18} />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Results */}
        {filteredProperties.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex flex-col gap-6'}>
            {filteredProperties.map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-4">
            <p className="text-2xl font-serif text-gray-400">No properties found matching your criteria.</p>
            <button
              onClick={() => { setSearchQuery(''); setFilterType('All'); }}
              className="text-brand-charcoal font-bold underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
