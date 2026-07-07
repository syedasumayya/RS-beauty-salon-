"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

// Strict TypeScript interfaces
interface Service {
  id: string;
  name: string;
  desc: string;
  price: number;
  duration: string;
  category: string;
}

const allServices: Service[] = [
  { id: "1", name: "Haircut & Styling", desc: "Precision cut, wash, and blow-dry tailored to your face shape.", price: 45, duration: "1h", category: "Hair" },
  { id: "2", name: "Balayage & Highlights", desc: "Natural-looking, sun-kissed highlights using premium products.", price: 120, duration: "2h 30m", category: "Hair" },
  { id: "3", name: "Keratin Treatment", desc: "Smooth, frizz-free hair for up to 3 months.", price: 200, duration: "3h", category: "Hair" },
  { id: "4", name: "Luxury Facial", desc: "Rejuvenating facial with organic products for a radiant glow.", price: 65, duration: "1h 15m", category: "Skin" },
  { id: "5", name: "Chemical Peel", desc: "Advanced skin resurfacing to reduce fine lines and scars.", price: 95, duration: "1h", category: "Skin" },
  { id: "6", name: "Gel Manicure", desc: "Long-lasting gel polish with a wide selection of colors.", price: 35, duration: "45m", category: "Nails" },
  { id: "7", name: "Luxury Pedicure", desc: "Relaxing foot massage, exfoliation, and polish.", price: 50, duration: "1h", category: "Nails" },
  { id: "8", name: "Bridal Makeup", desc: "Picture-perfect, long-lasting makeup for your special day.", price: 150, duration: "2h", category: "Makeup" },
  { id: "9", name: "Aromatherapy Massage", desc: "Full-body massage using essential oils to melt away stress.", price: 90, duration: "1h 30m", category: "Spa" },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-widest text-blush-400 uppercase"
          >
            Our Menu
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold mt-2"
          >
            Explore Our <span className="text-gradient-blush">Services</span>
          </motion.h1>
          <p className="text-[#6B6B6B] mt-4 max-w-2xl mx-auto">
            Indulge in our comprehensive range of beauty services designed to pamper you from head to toe.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-heading text-xl font-bold text-[#2D2D2D]">{service.name}</h3>
                <span className="text-xs font-semibold bg-blush-50 text-blush-500 px-3 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              <p className="text-sm text-[#6B6B6B] mb-6 flex-grow">{service.desc}</p>
              
              <div className="flex justify-between items-center pt-6 border-t border-blush-100">
                <div>
                  <span className="text-2xl font-bold text-[#2D2D2D]">${service.price}</span>
                  <span className="text-sm text-[#6B6B6B] ml-2">/ {service.duration}</span>
                </div>
                <Link href="/booking" className="text-blush-500 group-hover:translate-x-1 transition-transform">
                  <FiArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/booking" className="btn-gold !px-10 !py-4 text-lg inline-flex items-center gap-2">
            Book Your Appointment <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}