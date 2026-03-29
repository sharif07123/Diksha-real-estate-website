import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/src/components/UI';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Rahul Sharma', role: 'Home Buyer', text: 'DIKSHA REAL ESTATE helped me find the perfect 3BHK in Kharghar. Their local knowledge is unmatched and the process was extremely smooth.', rating: 5 },
    { name: 'Priya Patel', role: 'Investor', text: 'I have worked with many agencies, but the transparency and professionalism at Diksha are truly premium. Highly recommended for investors.', rating: 5 },
    { name: 'Amit Verma', role: 'Seller', text: 'Sold my apartment in Panvel through them. They got me a great deal and handled all the CIDCO paperwork without any hassle.', rating: 5 },
    { name: 'Sneha Kulkarni', role: 'Tenant', text: 'Found a great rental apartment in Sector 36. The team was very helpful with the agreement and move-in process.', rating: 4 },
    { name: 'Vikram Singh', role: 'Commercial Client', text: 'Excellent service for commercial office space. They understood my business requirements perfectly.', rating: 5 },
    { name: 'Anjali Deshmukh', role: 'First-time Buyer', text: 'As a first-time buyer, I had many doubts. The team at Diksha was patient and guided me through every step.', rating: 5 },
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto space-y-20">
        <SectionHeader
          title="Client Testimonials"
          subtitle="What our clients say about their experience with DIKSHA REAL ESTATE."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] luxury-shadow relative group"
            >
              <Quote className="absolute top-8 right-8 text-brand-sky opacity-50" size={40} />
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'} />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed mb-8">"{review.text}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-sky rounded-full flex items-center justify-center font-bold text-brand-charcoal">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif font-bold">{review.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
