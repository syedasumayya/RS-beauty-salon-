import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CTASection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight">
          Ready to Transform<br />Your Look?
        </h2>
        <p className="text-primary-100 text-lg mt-6 max-w-2xl mx-auto">
          Book your appointment today. New clients receive 20% off their first visit!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link href="/booking" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-50 transition-colors shadow-lg inline-flex items-center gap-2">
            Book Now <FiArrowRight />
          </Link>
          <Link href="/services" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}