"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl font-bold mb-4 text-blush-400">RS Beauty</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Where elegance meets artistry. Premium beauty services in a relaxing environment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-blush-400 transition-colors cursor-pointer">Home</li>
              <li className="hover:text-blush-400 transition-colors cursor-pointer">Services</li>
              <li className="hover:text-blush-400 transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-blush-400 transition-colors cursor-pointer">Book Now</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2"><FiClock /> Business Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>9:00 - 19:00</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>9:00 - 17:00</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-blush-400 shrink-0" /> 
                123 Beauty Lane, New York, NY 10001
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-blush-400 shrink-0" /> 
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-blush-400 shrink-0" /> 
                hello@rsbeauty.com
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} RS Beauty Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}