import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Bed, Square, CheckCircle2, Phone, MessageCircle, Download, Share2, Heart, ArrowLeft } from 'lucide-react';
import { PROPERTIES } from '@/src/constants';
import { cn } from '@/src/lib/utils';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = PROPERTIES.find(p => p.id === id);

  if (!property) {
    return (
      <div className="pt-32 pb-24 px-6 text-center space-y-6">
        <h2 className="text-4xl font-serif">Property Not Found</h2>
        <Link to="/properties" className="text-brand-charcoal underline">Back to Listings</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Breadcrumbs & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <Link to="/properties" className="flex items-center space-x-2 text-sm text-gray-500 hover:text-brand-charcoal transition-colors">
            <ArrowLeft size={16} />
            <span>Back to Listings</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-white luxury-shadow hover:text-red-500 transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-2 rounded-full bg-white luxury-shadow hover:text-brand-charcoal transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px]">
          <div className="md:col-span-2 h-full rounded-3xl overflow-hidden">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-1 h-full rounded-3xl overflow-hidden">
            <img
              src={property.images[1] || property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-1 h-full rounded-3xl overflow-hidden relative">
            <img
              src={property.images[2] || property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <button className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-lg">
              + {property.images.length} Photos
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="bg-brand-charcoal text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {property.category}
                </span>
                <span className="bg-brand-sky text-brand-charcoal px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {property.type}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif">{property.title}</h1>
              <div className="flex items-center text-gray-500 space-x-2">
                <MapPin size={18} />
                <span className="text-lg">{property.location}</span>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white rounded-3xl luxury-shadow">
              <div className="space-y-1">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Price</p>
                <p className="text-xl font-bold">{property.price}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Configuration</p>
                <p className="text-xl font-bold">{property.configuration}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Area</p>
                <p className="text-xl font-bold">{property.size}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Status</p>
                <p className="text-xl font-bold">{property.status}</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif">About this Property</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center space-x-3 text-gray-600">
                    <CheckCircle2 size={18} className="text-green-500" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Details Table */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif">Property Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 border-t border-gray-100 pt-6">
                {[
                  { label: 'Property Type', value: property.type },
                  { label: 'Furnishing', value: property.furnishing || 'N/A' },
                  { label: 'Parking', value: property.parking || 'N/A' },
                  { label: 'Possession', value: property.possessionDate || property.status },
                  { label: 'RERA ID', value: property.reraId || 'Verified' },
                ].map(item => (
                  <div key={item.label} className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-400">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Inquiry Form */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl luxury-shadow sticky top-32 space-y-6">
              <div className="space-y-2">
                <h4 className="text-2xl font-serif">Interested?</h4>
                <p className="text-sm text-gray-500">Send an enquiry and our experts will call you back.</p>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-charcoal/20"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-charcoal/20"
                />
                <textarea
                  placeholder="I'm interested in this property..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-100 focus:outline-none focus:border-brand-charcoal/20 resize-none"
                ></textarea>
                <button className="w-full bg-brand-charcoal text-white py-4 rounded-xl font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  Send Enquiry
                </button>
              </form>

              <div className="pt-6 border-t border-gray-100 flex flex-col space-y-3">
                <a
                  href="tel:9987367777"
                  className="flex items-center justify-center space-x-2 border border-brand-charcoal text-brand-charcoal py-3 rounded-xl font-bold hover:bg-brand-charcoal hover:text-white transition-colors"
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/919987367777"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp Now</span>
                </a>
              </div>
            </div>

            <button className="w-full flex items-center justify-center space-x-2 text-gray-500 hover:text-brand-charcoal transition-colors">
              <Download size={18} />
              <span className="text-sm font-medium">Download Brochure</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
