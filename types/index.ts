import { Timestamp } from "firebase/firestore";

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  price: number;
  duration: number;
  image: string;
  isActive: boolean;
  order: number;
  createdAt: Timestamp;
}

export type ServiceCategory =
  | "hair"
  | "skin"
  | "nails"
  | "makeup"
  | "bridal"
  | "spa";

export const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  hair: "Hair Care",
  skin: "Skin Care",
  nails: "Nail Art",
  makeup: "Makeup",
  bridal: "Bridal",
  spa: "Spa & Wellness",
};

export const CATEGORY_ICONS: Record<ServiceCategory, string> = {
  hair: "💇‍♀️",
  skin: "✨",
  nails: "💅",
  makeup: "💄",
  bridal: "👰",
  spa: "🧖‍♀️",
};

export interface Stylist {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: ServiceCategory[];
  rating: number;
  isActive: boolean;
  createdAt: Timestamp;
}

export type AppointmentStatus =
  | "pending"
  | "confirmed"
  | "completed"
  | "cancelled";

export interface Appointment {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  serviceId: string;
  serviceName: string;
  stylistId: string;
  stylistName: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  notes: string;
  totalPrice: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  image: string;
  service: string;
  isActive: boolean;
  createdAt: Timestamp;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: Timestamp;
}