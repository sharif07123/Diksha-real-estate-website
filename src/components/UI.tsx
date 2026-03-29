import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight, Bed, Square, CheckCircle2 } from 'lucide-react';
import { Property } from '@/src/constants';
import { cn } from '@/src/lib/utils';

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl overflow-hidden luxury-shadow border border-gray-100"
    >
      <Link to={`/property/${property.id}`} className="block relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className="bg-white/90 backdrop-blur-sm text-brand-charcoal px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
            {property.category}
          </span>
          {property.featured && (
            <span className="bg-brand-charcoal text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Featured
            </span>
          )}
        </div>
      </Link>

      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <div className="flex items-center text-gray-400 text-xs space-x-1">
            <MapPin size={12} />
            <span>{property.location}</span>
          </div>
          <h3 className="font-serif text-xl group-hover:text-brand-charcoal/70 transition-colors">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center justify-between py-4 border-y border-gray-50">
          <div className="flex items-center space-x-1 text-gray-500 text-xs">
            <Bed size={14} />
            <span>{property.configuration}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500 text-xs">
            <Square size={14} />
            <span>{property.size}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500 text-xs">
            <CheckCircle2 size={14} className="text-green-500" />
            <span>{property.status}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-brand-charcoal">{property.price}</span>
          <Link
            to={`/property/${property.id}`}
            className="flex items-center space-x-1 text-sm font-medium hover:underline"
          >
            <span>View Details</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export const SectionHeader = ({
  title,
  subtitle,
  centered = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) => (
  <div className={cn('space-y-4 mb-12', centered && 'text-center')}>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-serif leading-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-500 max-w-2xl mx-auto text-lg"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
