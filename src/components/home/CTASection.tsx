"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden bg-[#2D2D2D]">
      {/* Background Decorative Elements */}
      <motion.div 
        animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 border-[40px] border-blush-100/10 rounded-full translate-x-1/3 -translate-y-1/3"
      />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight"
        >
          Ready to Transform <br/> Your Look?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg mt-6 max-w-xl mx-auto"
        >
          Book your appointment today and let our expert stylists pamper you. New clients receive 15% off their first service!
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <Link href="/booking" className="btn-gold inline-flex items-center gap-2 text-lg !px-10 !py-4">
            Book Your Appointment <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}