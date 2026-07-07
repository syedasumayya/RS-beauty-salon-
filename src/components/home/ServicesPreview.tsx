"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const services = [
  { icon: "💇‍♀️", title: "Hair Styling & Cuts", desc: "From precision cuts to balayage, our stylists create looks tailored to you.", price: "From $45" },
  { icon: "✨", title: "Luxury Facials", desc: "Rejuvenate your skin with our premium organic facial treatments.", price: "From $65" },
  { icon: "💅", title: "Nail Artistry", desc: "Beautiful gel manicures and intricate nail art that lasts.", price: "From $35" },
  { icon: "👰", title: "Bridal Packages", desc: "Complete bridal beauty packages for your perfect wedding day.", price: "From $250" },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-blush-400 uppercase"
          >
            What We Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold mt-2"
          >
            Our Premium <span className="text-gradient-blush">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-heading text-xl font-bold mb-2 text-[#2D2D2D]">{service.title}</h3>
              <p className="text-sm text-[#6B6B6B] mb-4">{service.desc}</p>
              <p className="text-blush-500 font-semibold mb-4">{service.price}</p>
              <Link href="/booking" className="text-sm font-medium flex items-center gap-2 text-[#2D2D2D] group-hover:text-blush-400 transition-colors">
                Book Now <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}