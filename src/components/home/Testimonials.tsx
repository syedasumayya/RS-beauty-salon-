"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  { name: "Emily R.", role: "Hair Coloring", text: "Absolutely the best salon experience! Sarah fixed my brassy blonde and gave me the perfect icy blonde. The atmosphere is so relaxing.", rating: 5 },
  { name: "Jessica M.", role: "Bridal Makeup", text: "They did my makeup for my wedding. I felt like a princess. It lasted all day and night without a single touch-up needed!", rating: 5 },
  { name: "Amanda L.", role: "Luxury Facial", text: "My skin has never looked better. The aesthetician was so knowledgeable and the products smelled amazing. Highly recommend!", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-blush-400 uppercase"
          >
            Client Love
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold mt-2"
          >
            What Our Clients <span className="text-gradient-blush">Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative"
            >
              <FaQuoteLeft className="text-blush-200 text-3xl mb-4 absolute top-6 right-6 opacity-50" />
              <div className="flex gap-1 mb-4 text-gold-500">
                {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-[#4A4A4A] mb-6 leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center gap-4 pt-4 border-t border-blush-100">
                <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center text-blush-500 font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-[#2D2D2D]">{review.name}</p>
                  <p className="text-sm text-[#6B6B6B]">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}