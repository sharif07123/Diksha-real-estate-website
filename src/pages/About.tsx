import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/src/components/UI';
import { Shield, Target, Eye, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader
              title="Redefining the Real Estate Experience"
              subtitle="DIKSHA REAL ESTATE is a premier agency dedicated to providing exceptional property solutions in Kharghar and Panvel."
            />
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded on the principles of integrity, transparency, and local expertise, we have grown to become one of the most trusted names in Navi Mumbai real estate. Our team of seasoned advisors brings deep market knowledge and a personalized approach to every client interaction.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-4xl font-serif font-bold">500+</p>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Properties Sold</p>
              </div>
              <div className="space-y-1">
                <p className="text-4xl font-serif font-bold">1k+</p>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
              alt="Our Team"
              className="rounded-3xl luxury-shadow"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Our Mission', desc: 'To empower our clients with transparent, expert property guidance that builds long-term value and trust.', icon: <Target className="text-brand-charcoal" /> },
            { title: 'Our Vision', desc: 'To be the most respected real estate studio in Navi Mumbai, known for architectural appreciation and client success.', icon: <Eye className="text-brand-charcoal" /> },
            { title: 'Our Values', desc: 'Integrity, Excellence, and a Human-centric approach define everything we do at Diksha.', icon: <Shield className="text-brand-charcoal" /> },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl luxury-shadow space-y-6"
            >
              <div className="w-12 h-12 bg-brand-sky rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Us */}
        <div className="bg-brand-charcoal text-white rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif">What Makes Us Different?</h2>
              <p className="text-gray-400 text-lg">
                We don't just list properties; we curate experiences. Our deep understanding of local CIDCO schemes and upcoming infrastructure projects in Panvel gives our clients a competitive edge.
              </p>
              <ul className="space-y-4">
                {[
                  'Personalized property shortlisting',
                  'Verified CIDCO & Private listings',
                  'Expert negotiation and legal support',
                  'Post-purchase documentation assistance'
                ].map(text => (
                  <li key={text} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-brand-sky rounded-full" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/about1/400/400" className="rounded-2xl" alt="Architecture" />
              <img src="https://picsum.photos/seed/about2/400/400" className="rounded-2xl mt-8" alt="Interior" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
