"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-blush-50">
      {/* Decorative Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-96 h-96 bg-blush-200 rounded-full blur-3xl z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-gold-400 rounded-full blur-3xl z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center pt-20">
        
        {/* Left Text Content */}
        <div>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 bg-white shadow-sm text-blush-500 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Premium Hair & Beauty Salon
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#2D2D2D]"
          >
            Unveil Your <br />
            <span className="text-gradient-blush">Natural Beauty</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-lg text-[#6B6B6B] max-w-md leading-relaxed"
          >
            Indulge in a luxurious experience designed to refresh your look and uplift your spirit. Expert stylists, premium products, pure elegance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Link href="/booking" className="btn-gold flex items-center justify-center gap-2">
              Book Appointment <FiArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="btn-outline flex items-center justify-center">
              Our Services
            </Link>
          </motion.div>
        </div>

        {/* Right Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full h-[500px] rounded-[4rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Salon Interior"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center text-2xl">⭐</div>
            <div>
              <p className="font-heading text-xl font-bold text-[#2D2D2D]">4.9/5 Rating</p>
              <p className="text-sm text-[#6B6B6B]">From 500+ Happy Clients</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}