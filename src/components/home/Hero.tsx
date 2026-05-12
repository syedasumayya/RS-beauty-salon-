"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiPhone } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://picsum.photos/seed/salon-hero/1920/1080')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-salon-dark/90 via-salon-dark/70 to-transparent" />
      </div>

      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium mb-6">
              ✨ Welcome to Glamour Beauty Salon
            </span>
          </motion.div>

          <motion.h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where Beauty
            <br />
            <span className="text-gradient">Meets Elegance</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience premium beauty services in a relaxing and luxurious
            atmosphere. Our expert stylists make you look and feel your best.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/booking" className="btn-primary text-center flex items-center justify-center gap-2 text-lg">
              Book Appointment <FiArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="btn-outline border-white/30 text-white hover:bg-white hover:text-salon-dark text-center flex items-center justify-center gap-2 text-lg"
            >
              <FiPhone className="w-5 h-5" /> Contact Us
            </Link>
          </motion.div>

          <motion.div
            className="flex gap-10 mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: "15+", label: "Years Experience" },
              { number: "50K+", label: "Happy Clients" },
              { number: "25+", label: "Expert Stylists" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}