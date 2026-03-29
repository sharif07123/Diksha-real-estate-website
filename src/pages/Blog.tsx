import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/src/components/UI';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    { id: 1, title: 'Why Kharghar is the Best Place to Invest in 2026', category: 'Investment', date: 'March 15, 2026', image: 'https://picsum.photos/seed/blog1/800/600', excerpt: 'Explore the upcoming infrastructure projects and price trends that make Kharghar a goldmine for real estate investors.' },
    { id: 2, title: 'First-Time Home Buyer Checklist for Navi Mumbai', category: 'Guides', date: 'March 10, 2026', image: 'https://picsum.photos/seed/blog2/800/600', excerpt: 'Everything you need to know before signing the dotted line, from RERA checks to CIDCO transfer processes.' },
    { id: 3, title: 'Panvel: The Gateway to Future Growth', category: 'Market Updates', date: 'March 05, 2026', image: 'https://picsum.photos/seed/blog3/800/600', excerpt: 'How the new International Airport is transforming Panvel into a global residential and commercial hub.' },
    { id: 4, title: 'Top 5 Luxury Amenities Modern Buyers Crave', category: 'Lifestyle', date: 'February 28, 2026', image: 'https://picsum.photos/seed/blog4/800/600', excerpt: 'From sky lounges to smart home automation, see what defines luxury living in today\'s real estate market.' },
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        <SectionHeader
          title="Real Estate Insights"
          subtitle="Expert advice, market trends, and property guides for Navi Mumbai."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-[2rem] overflow-hidden mb-8 luxury-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-gray-400">
                  <span className="text-brand-charcoal">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-3xl font-serif group-hover:text-brand-charcoal/70 transition-colors">{post.title}</h3>
                <p className="text-gray-500 leading-relaxed">{post.excerpt}</p>
                <button className="text-brand-charcoal font-bold border-b-2 border-brand-charcoal pb-1 hover:opacity-70 transition-opacity">
                  Read Full Article
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
