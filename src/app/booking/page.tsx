"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiArrowLeft, FiCheck, FiCalendar, FiClock, FiUser, FiPhone } from "react-icons/fi";
import toast from "react-hot-toast";

// Define strict TypeScript interfaces
interface Service {
  id: string;
  name: string;
  category: string;
  price: number;
  duration: string;
}

interface Stylist {
  id: string;
  name: string;
  title: string;
  rating: number;
}

interface UserInfo {
  name: string;
  phone: string;
}

// Mock Data
const services: Service[] = [
  { id: "s1", name: "Haircut & Styling", category: "Hair", price: 45, duration: "1h" },
  { id: "s2", name: "Hair Coloring", category: "Hair", price: 85, duration: "2h" },
  { id: "s3", name: "Luxury Facial", category: "Skin", price: 65, duration: "1h 15m" },
  { id: "s4", name: "Gel Manicure", category: "Nails", price: 35, duration: "45m" },
  { id: "s5", name: "Bridal Makeup", category: "Makeup", price: 150, duration: "2h" },
  { id: "s6", name: "Aromatherapy Massage", category: "Spa", price: 90, duration: "1h 30m" },
];

const stylists: Stylist[] = [
  { id: "t1", name: "Sarah Johnson", title: "Senior Stylist", rating: 4.9 },
  { id: "t2", name: "Maria Garcia", title: "Skincare Specialist", rating: 4.8 },
  { id: "t3", name: "Amanda Taylor", title: "Bridal Expert", rating: 5.0 },
];

const times: string[] = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30", "18:00"];

export default function BookingPage() {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", phone: "" });

  const handleNext = () => {
    if (step === 1 && !selectedService) {
      toast.error("Please select a service");
      return;
    }
    if (step === 2 && !selectedStylist) {
      toast.error("Please select a stylist");
      return;
    }
    if (step === 3 && (!selectedDate || !selectedTime)) {
      toast.error("Please pick date and time");
      return;
    }
    setStep(step + 1);
  };

  const handleConfirm = () => {
    if (!userInfo.name || !userInfo.phone) {
      toast.error("Please enter your details");
      return;
    }
    toast.success("Appointment requested! We will call to confirm shortly. 🎉");
    
    // Reset form
    setStep(1);
    setSelectedService(null);
    setSelectedStylist(null);
    setSelectedDate("");
    setSelectedTime("");
    setUserInfo({ name: "", phone: "" });
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-blush-50/50 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#2D2D2D]">
            Book Your <span className="text-gradient-blush">Appointment</span>
          </h1>
          <p className="text-[#6B6B6B] mt-3">Complete the steps below to schedule your visit.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3, 4].map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                step >= s ? "bg-blush-400 text-white shadow-md" : "bg-white text-[#6B6B6B] border border-blush-100"
              }`}>
                {step > s ? <FiCheck /> : s}
              </div>
              {i < 3 && <div className={`w-16 md:w-24 h-1 mx-1 rounded-full transition-all duration-300 ${step > s ? "bg-blush-400" : "bg-blush-100"}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: SERVICE */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                <h2 className="font-heading text-2xl font-bold mb-6">1. Select a Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <button key={s.id} onClick={() => setSelectedService(s)}
                      className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 ${
                        selectedService?.id === s.id ? "border-blush-400 bg-blush-50/50 shadow-md" : "border-gray-100 hover:border-blush-200"
                      }`}>
                      <div className="flex justify-between items-center">
                        <h3 className="font-heading font-bold text-lg text-[#2D2D2D]">{s.name}</h3>
                        <span className="text-blush-500 font-bold">${s.price}</span>
                      </div>
                      <p className="text-sm text-[#6B6B6B] mt-1">{s.category} • {s.duration}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 2: STYLIST */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                <h2 className="font-heading text-2xl font-bold mb-6">2. Choose Your Stylist</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {stylists.map((t) => (
                    <button key={t.id} onClick={() => setSelectedStylist(t)}
                      className={`p-6 rounded-2xl border-2 text-center transition-all duration-200 ${
                        selectedStylist?.id === t.id ? "border-blush-400 bg-blush-50/50 shadow-md" : "border-gray-100 hover:border-blush-200"
                      }`}>
                      <div className="w-16 h-16 mx-auto rounded-full bg-gold-400/30 flex items-center justify-center text-2xl font-bold text-gold-600 mb-3">
                        {t.name.charAt(0)}
                      </div>
                      <h3 className="font-heading font-bold text-[#2D2D2D]">{t.name}</h3>
                      <p className="text-sm text-[#6B6B6B]">{t.title}</p>
                      <p className="text-xs text-blush-500 mt-1">⭐ {t.rating}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: DATE & TIME */}
            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                <h2 className="font-heading text-2xl font-bold mb-6">3. Pick Date & Time</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-[#6B6B6B] mb-2 flex items-center gap-2"><FiCalendar /> Select Date</label>
                    <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} min={new Date().toISOString().split('T')[0]} className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#6B6B6B] mb-2 flex items-center gap-2"><FiClock /> Available Times</label>
                    <div className="grid grid-cols-3 gap-2">
                      {times.map((t) => (
                        <button key={t} onClick={() => setSelectedTime(t)}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            selectedTime === t ? "bg-blush-400 text-white shadow-md" : "bg-cream text-[#6B6B6B] hover:bg-blush-100"
                          }`}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: CONFIRM */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                <h2 className="font-heading text-2xl font-bold mb-6">4. Confirm Details</h2>
                
                <div className="bg-cream p-6 rounded-2xl mb-6 space-y-3">
                  <div className="flex justify-between border-b border-blush-100 pb-2">
                    <span className="text-[#6B6B6B]">Service:</span>
                    <span className="font-bold text-[#2D2D2D]">{selectedService?.name} (${selectedService?.price})</span>
                  </div>
                  <div className="flex justify-between border-b border-blush-100 pb-2">
                    <span className="text-[#6B6B6B]">Stylist:</span>
                    <span className="font-bold text-[#2D2D2D]">{selectedStylist?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6B6B6B]">Schedule:</span>
                    <span className="font-bold text-[#2D2D2D]">{selectedDate} at {selectedTime}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-[#6B6B6B] mb-2 flex items-center gap-2"><FiUser /> Full Name</label>
                    <input type="text" value={userInfo.name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} className="input-field" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#6B6B6B] mb-2 flex items-center gap-2"><FiPhone /> Phone Number</label>
                    <input type="tel" value={userInfo.phone} onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })} className="input-field" placeholder="+1 234 567 890" />
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10 pt-6 border-t border-blush-100">
            {step > 1 ? (
              <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-[#6B6B6B] hover:text-[#2D2D2D] font-medium px-6 py-3 rounded-full hover:bg-cream transition-all">
                <FiArrowLeft /> Back
              </button>
            ) : <div />}

            {step < 4 ? (
              <button onClick={handleNext} className="btn-primary flex items-center gap-2">
                Next Step <FiArrowRight />
              </button>
            ) : (
              <button onClick={handleConfirm} className="btn-gold flex items-center gap-2 !px-10">
                <FiCheck /> Confirm Booking
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}