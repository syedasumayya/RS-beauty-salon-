"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from "react-icons/fi";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all fields");
      return;
    }
    // In the future, this will save to Firebase
    toast.success("Message sent! We will get back to you soon. 🌸");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-28 pb-20 bg-blush-50/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-widest text-blush-400 uppercase"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold mt-2"
          >
            Contact <span className="text-gradient-blush">Us</span>
          </motion.h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side: Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-md">
              <h2 className="font-heading text-2xl font-bold mb-6 text-[#2D2D2D]">Visit Our Salon</h2>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center shrink-0">
                    <FiMapPin className="text-blush-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D2D2D]">Address</h4>
                    <p className="text-[#6B6B6B] text-sm mt-1">123 Beauty Lane, New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center shrink-0">
                    <FiPhone className="text-blush-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D2D2D]">Phone</h4>
                    <p className="text-[#6B6B6B] text-sm mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center shrink-0">
                    <FiMail className="text-blush-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D2D2D]">Email</h4>
                    <p className="text-[#6B6B6B] text-sm mt-1">hello@rsbeauty.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center shrink-0">
                    <FiClock className="text-blush-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D2D2D]">Business Hours</h4>
                    <p className="text-[#6B6B6B] text-sm mt-1">Mon - Fri: 9:00 AM - 7:00 PM</p>
                    <p className="text-[#6B6B6B] text-sm">Sat: 9:00 AM - 5:00 PM</p>
                    <p className="text-[#6B6B6B] text-sm">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-white p-2 rounded-3xl shadow-md overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.98731168459253!3d40.74844097932789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959564452!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0, borderRadius: '1.25rem' }} allowFullScreen loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-md flex flex-col justify-center"
          >
            <h2 className="font-heading text-2xl font-bold mb-2 text-[#2D2D2D]">Send Us a Message</h2>
            <p className="text-[#6B6B6B] mb-8 text-sm">Have a question or special request? Let us know!</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[#6B6B6B] mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#6B6B6B] mb-2">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                  placeholder="jane@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#6B6B6B] mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="input-field resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}