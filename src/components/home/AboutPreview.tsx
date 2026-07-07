"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function AboutPreview() {
  const features = [
    "Premium Organic Products",
    "Master Certified Stylists",
    "Relaxing Luxury Atmosphere",
    "Personalized Consultations",
  ];

  return (
    <section className="section-padding bg-blush-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-[4rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Stylist working" 
              className="w-full h-[550px] object-cover"
            />
          </div>
          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block"
          >
            <p className="font-heading text-4xl font-bold text-gradient-gold">15+</p>
            <p className="text-sm text-[#6B6B6B]">Years of<br/>Excellence</p>
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold tracking-widest text-blush-400 uppercase">About RS Beauty</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-6 leading-tight">
            Where Artistry Meets <span className="text-gradient-gold">Elegance</span>
          </h2>
          <p className="text-[#6B6B6B] leading-relaxed mb-8">
            At RS Beauty Salon, we believe that true beauty is an art form. Founded in 2009, our salon has been the premier destination for those who seek exceptional service and a transformative experience. Our team of master stylists is dedicated to bringing out your natural radiance.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-sm text-[#2D2D2D]">
                <div className="w-6 h-6 rounded-full bg-gold-400 flex items-center justify-center shrink-0">
                  <FiCheck className="text-white text-xs" />
                </div>
                {feature}
              </div>
            ))}
          </div>

          <Link href="/about" className="btn-outline">
            Discover Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}