"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Service, CATEGORY_ICONS, CATEGORY_LABELS } from "@/types";
import { formatPrice, formatDuration } from "@/lib/utils";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const FALLBACK_SERVICES: Service[] = [
  { id: "1", name: "Haircut & Styling", category: "hair", description: "Professional haircut tailored to your face shape and style, with wash, cut, and blow-dry.", price: 45, duration: 60, image: "", isActive: true, order: 1, createdAt: {} as any },
  { id: "2", name: "Hair Coloring", category: "hair", description: "Transform your look with premium hair coloring using top-quality products.", price: 85, duration: 120, image: "", isActive: true, order: 2, createdAt: {} as any },
  { id: "3", name: "Luxury Facial", category: "skin", description: "Rejuvenating facial treatment using organic products for a radiant glow.", price: 65, duration: 75, image: "", isActive: true, order: 3, createdAt: {} as any },
  { id: "4", name: "Gel Manicure", category: "nails", description: "Long-lasting gel manicure with trendy colors and nail art options.", price: 35, duration: 45, image: "", isActive: true, order: 4, createdAt: {} as any },
  { id: "5", name: "Bridal Package", category: "bridal", description: "Complete bridal beauty package including hair, makeup, and nails.", price: 250, duration: 240, image: "", isActive: true, order: 5, createdAt: {} as any },
  { id: "6", name: "Aromatherapy Massage", category: "spa", description: "Relaxing full-body massage using essential oils to melt away stress.", price: 90, duration: 90, image: "", isActive: true, order: 6, createdAt: {} as any },
];

export default function ServicesPreview() {
  const [services, setServices] = useState<Service[]>(FALLBACK_SERVICES);

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDocs(query(collection(db, "services"), where("isActive", "==", true), limit(6)));
        const data = snap.docs.map((d) => ({ id: d.id, ...d.data() } as Service));
        if (data.length > 0) setServices(data);
      } catch {}
    })();
  }, []);

  return (
    <section className="section-padding bg-gradient-salon">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="section-title mt-2">
            Premium Beauty <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From head to toe, we offer a complete range of beauty services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{CATEGORY_ICONS[service.category]}</span>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary-50 text-primary-600">
                  {CATEGORY_LABELS[service.category]}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-salon-dark group-hover:text-primary-500 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">{service.description}</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-2xl font-bold text-salon-dark">{formatPrice(service.price)}</span>
                <span className="text-sm text-gray-400">{formatDuration(service.duration)}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-outline inline-flex items-center gap-2">
            View All Services <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}