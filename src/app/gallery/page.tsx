"use client";

import { motion } from "framer-motion";
import { FiEye } from "react-icons/fi";

// 1. Define the TypeScript interface
interface GalleryItem {
  id: number;
  title: string;
  category: string;
  img: string;
}

// 2. Apply the type to our array
const galleryItems: GalleryItem[] = [
  { id: 1, title: "Bridal Glow", category: "Makeup", img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "Balayage", category: "Hair", img: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 3, title: "Luxury Facial", category: "Skin", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 4, title: "Nail Art", category: "Nails", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 5, title: "Precision Cut", category: "Hair", img: "https://images.unsplash.com/photo-1599387737838-626a7cf8b1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 6, title: "Evening Glam", category: "Makeup", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
];

export default function GalleryPage() {
  return (
    // ... keep the rest of the return statement exactly the same!
    <div className="pt-28 pb-20 bg-blush-50/30 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-widest text-blush-400 uppercase"
          >
            Our Work
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl font-bold mt-2"
          >
            Beauty <span className="text-gradient-gold">Gallery</span>
          </motion.h1>
          <p className="text-[#6B6B6B] mt-4 max-w-2xl mx-auto">
  A showcase of our stylists&apos; finest work. Get inspired for your next transformation!
</p>
        </div>

        {/* Masonry-style Grid (using CSS columns) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.05 }}
              className="relative rounded-2xl overflow-hidden shadow-md break-inside-avoid group cursor-pointer"
            >
              <img src={item.img} alt={item.title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex items-center justify-between w-full text-white">
                  <div>
                    <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                    <p className="text-blush-300 text-sm">{item.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <FiEye />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}