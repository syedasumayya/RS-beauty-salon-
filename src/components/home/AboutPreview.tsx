import Link from "next/link";
import { FiCheck } from "react-icons/fi";

export default function AboutPreview() {
  const features = [
    "Premium & Organic Products",
    "Certified Expert Stylists",
    "Relaxing Luxury Environment",
    "Personalized Consultations",
    "Satisfaction Guaranteed",
    "Latest Techniques & Trends",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/salon-interior/600/700"
                alt="Salon Interior"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <span className="text-4xl font-bold text-primary-500">15+</span>
              <p className="text-sm text-gray-500 mt-1">Years of</p>
              <p className="text-sm font-medium text-salon-dark">Excellence</p>
            </div>
          </div>

          <div>
            <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="section-title mt-2">
              Your Beauty Is Our <span className="text-gradient">Passion</span>
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed">
              At Glamour Beauty Salon, we believe everyone deserves to feel beautiful.
              Founded in 2009, we combine artistry with the latest techniques.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                    <FiCheck className="w-3 h-3 text-primary-500" />
                  </div>
                  {f}
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-primary inline-block mt-8">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}