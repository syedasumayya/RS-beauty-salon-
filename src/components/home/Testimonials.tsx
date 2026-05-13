"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import { Testimonial } from "@/types";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const FALLBACK: Testimonial[] = [
  { id: "1", name: "Emily Johnson", rating: 5, comment: "Absolutely love this salon! The stylists are so talented and the atmosphere is incredibly relaxing.", image: "", service: "Hair Coloring", isActive: true, createdAt: {} as any },
  { id: "2", name: "Sarah Williams", rating: 5, comment: "Best facial I've ever had! My skin feels amazing. Highly recommend!", image: "", service: "Facial Treatment", isActive: true, createdAt: {} as any },
  { id: "3", name: "Maria Garcia", rating: 5, comment: "They did my bridal makeup and I felt like a princess on my wedding day!", image: "", service: "Bridal Package", isActive: true, createdAt: {} as any },
];

export default function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>(FALLBACK);

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDocs(query(collection(db, "testimonials"), where("isActive", "==", true)));
        const data = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Testimonial));
        if (data.length > 0) setItems(data);
      } catch {}
    })();
  }, []);

  return (
    <section className="section-padding bg-primary-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="section-title mt-2">What Our Clients <span className="text-gradient">Say</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <FaQuoteLeft className="text-primary-200 text-3xl mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">{item.comment}</p>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, j) => (
                  <FaStar key={j} className={`w-4 h-4 ${j < item.rating ? "text-yellow-400" : "text-gray-200"}`} />
                ))}
              </div>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 font-semibold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-sm text-salon-dark">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.service}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}