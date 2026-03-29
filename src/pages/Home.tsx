import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle, Shield, Award, Clock, MapPin, Search, Building, Building2, Home as HomeIcon, Briefcase, Map, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PropertyCard, SectionHeader } from '@/src/components/UI';
import { PROPERTIES } from '@/src/constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920"
            alt="Luxury Home"
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/40 via-transparent to-brand-ivory" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-white/80 uppercase tracking-[0.4em] text-xs font-bold">
              Premium Real Estate Services
            </span>
            <h1 className="text-5xl md:text-8xl text-white font-serif leading-[1.1] text-balance">
              Find Your Next Home <br /> with Confidence
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              A refined real estate experience for buying, selling, and investing in Kharghar, Panvel, and surrounding locations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <Link
              to="/properties"
              className="bg-white text-brand-charcoal px-10 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 hover:bg-brand-sky flex items-center space-x-2"
            >
              <span>Explore Properties</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:bg-white/20"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>

        {/* Quick Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-12 left-6 right-6 max-w-5xl mx-auto hidden lg:block"
        >
          <div className="glass p-4 rounded-2xl flex items-center space-x-4 luxury-shadow">
            <div className="flex-1 flex items-center space-x-3 px-4 border-r border-gray-200">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search by location, project, or type..."
                className="bg-transparent w-full focus:outline-none text-sm"
              />
            </div>
            <div className="w-48 px-4 border-r border-gray-200">
              <select className="bg-transparent w-full focus:outline-none text-sm font-medium">
                <option>All Types</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Commercial</option>
              </select>
            </div>
            <div className="w-48 px-4">
              <select className="bg-transparent w-full focus:outline-none text-sm font-medium">
                <option>Price Range</option>
                <option>Under ₹50L</option>
                <option>₹50L - ₹1Cr</option>
                <option>₹1Cr - ₹2Cr</option>
                <option>₹2Cr+</option>
              </select>
            </div>
            <button className="bg-brand-charcoal text-white px-8 py-3 rounded-xl font-medium transition-transform hover:scale-105">
              Search
            </button>
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 bg-brand-sand">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Explore Property Categories"
            subtitle="Tailored options for every lifestyle and investment goal."
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Flats', icon: <Building size={32} /> },
              { name: 'Apartments', icon: <Building2 size={32} /> },
              { name: 'Villas', icon: <HomeIcon size={32} /> },
              { name: 'Commercial', icon: <Briefcase size={32} /> },
              { name: 'Plots', icon: <Map size={32} /> },
              { name: 'New Projects', icon: <Construction size={32} /> },
            ].map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl text-center space-y-4 luxury-shadow transition-transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className="flex justify-center text-brand-charcoal/40 group-hover:text-brand-charcoal group-hover:scale-110 transition-all">
                  {cat.icon}
                </div>
                <span className="font-medium text-sm tracking-wide block">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                alt="Office"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl hidden md:block max-w-xs luxury-shadow">
              <p className="font-serif text-2xl mb-2">15+ Years</p>
              <p className="text-gray-500 text-sm">Of excellence in Navi Mumbai real estate market.</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-brand-charcoal/50 uppercase tracking-widest text-xs font-bold">About Diksha Real Estate</span>
              <h2 className="text-5xl font-serif leading-tight">Your Trusted Partner in Property Guidance</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                At DIKSHA REAL ESTATE, we believe that finding a home is more than just a transaction—it's about finding your place in the world. With deep roots in Kharghar and Panvel, we provide personalized service backed by years of local expertise.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="font-serif text-xl">Verified Listings</h4>
                <p className="text-sm text-gray-400">Every property is manually checked for authenticity.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-xl">Expert Support</h4>
                <p className="text-sm text-gray-400">End-to-end assistance from site visits to documentation.</p>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-brand-charcoal font-bold border-b-2 border-brand-charcoal pb-1 hover:opacity-70 transition-opacity"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 px-6 bg-brand-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 space-y-4 md:space-y-0">
            <SectionHeader
              title="Featured Properties"
              subtitle="Handpicked premium listings in prime locations."
            />
            <Link
              to="/properties"
              className="bg-brand-charcoal text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-brand-charcoal/90 transition-colors"
            >
              View All Listings
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROPERTIES.filter(p => p.featured).slice(0, 3).map((property, i) => (
              <PropertyCard key={property.id} property={property} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-brand-charcoal text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Why Choose Diksha Real Estate?"
            subtitle="We redefine the property buying experience with transparency and dedication."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
            {[
              { title: 'Local Knowledge', desc: 'Deep understanding of Kharghar and Panvel sectors.', icon: <MapPin /> },
              { title: 'Verified Assets', desc: 'Strict verification process for all listed properties.', icon: <Shield /> },
              { title: 'Transparent Deals', desc: 'No hidden costs or complicated legal jargon.', icon: <Award /> },
              { title: 'Quick Response', desc: 'Our team is always available for your queries.', icon: <Clock /> },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4 group"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-brand-charcoal transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-xl font-serif">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <SectionHeader
            title="Areas We Serve"
            subtitle="Explore the most sought-after residential and commercial hubs."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Kharghar', image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800' },
              { name: 'Panvel', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
              { name: 'Navi Mumbai', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=800' },
            ].map((area, i) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group h-80 rounded-3xl overflow-hidden cursor-pointer"
              >
                <img
                  src={area.image}
                  alt={area.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-serif">{area.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-brand-sky rounded-[3rem] p-12 md:p-24 text-center space-y-10 luxury-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-charcoal/5 rounded-full -ml-32 -mb-32 blur-3xl" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif">Looking for the Right Property?</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Our experts are ready to help you find your dream home or investment. Connect with us today.
            </p>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="tel:9987367777"
              className="bg-brand-charcoal text-white px-10 py-4 rounded-full font-medium flex items-center space-x-2 transition-transform hover:scale-105"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919987367777"
              className="bg-green-600 text-white px-10 py-4 rounded-full font-medium flex items-center space-x-2 transition-transform hover:scale-105"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Now</span>
            </a>
            <Link
              to="/contact"
              className="bg-white text-brand-charcoal px-10 py-4 rounded-full font-medium transition-transform hover:scale-105"
            >
              Enquiry Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
