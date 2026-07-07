"use client";

import { motion } from "framer-motion";
import { FiCheck, FiAward, FiHeart, FiSmile } from "react-icons/fi";
import Link from "next/link";

// Mock Team Data
const team = [
  { name: "Sarah Johnson", role: "Founder & Master Stylist", img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  { name: "Maria Garcia", role: "Lead Esthetician", img: "https://images.unsplash.com/photo-1614392597003-5dae40f774a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
  { name: "Amanda Taylor", role: "Bridal Makeup Artist", img: "https://images.unsplash.com/photo-1583241800698-9c2e5c4f2d23?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
];

const values = [
  { icon: FiAward, title: "Expertise", desc: "Our certified stylists bring years of experience and continuous training." },
  { icon: FiHeart, title: "Care", desc: "We listen to your needs and tailor every treatment to you." },
  { icon: FiSmile, title: "Experience", desc: "From the moment you enter, relax in our luxurious, soothing atmosphere." },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-cream">
      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-widest text-blush-400 uppercase"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold mt-2 max-w-3xl mx-auto leading-tight"
          >
            More Than Just a <span className="text-gradient-gold">Salon</span>
          </motion.h1>
          <p className="text-[#6B6B6B] mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Founded in 2009, RS Beauty Salon was born from a passion for artistry and a desire to create a sanctuary where beauty meets relaxation. We believe that everyone deserves to feel confident and radiant.
          </p>
        </div>

        {/* Image & Values Split */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="relative h-[450px] rounded-[4rem] overflow-hidden shadow-xl"
          >
            <img src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Salon Interior" className="w-full h-full object-cover" />
          </motion.div>

          <div className="space-y-6">
            {values.map((val, i) => (
              <motion.div 
                key={val.title} 
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-5 items-start bg-white p-6 rounded-2xl shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center shrink-0">
                  <val.icon className="text-blush-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#2D2D2D]">{val.title}</h3>
                  <p className="text-[#6B6B6B] mt-1">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Meet the Team */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-blush-400 uppercase">The Experts</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-2">Meet Our <span className="text-gradient-blush">Team</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="relative h-80 rounded-3xl overflow-hidden mb-4 shadow-md">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#2D2D2D]">{member.name}</h3>
              <p className="text-blush-500 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link href="/booking" className="btn-gold !px-10 !py-4 text-lg inline-flex items-center gap-2">
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}