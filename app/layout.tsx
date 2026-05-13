import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "RS Beauty Salon | Where Beauty Meets Elegance",
  description:
    "Premium beauty salon offering hair care, skin treatments, nail art, makeup, and bridal packages.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: { background: "#1a1a2e", color: "#fff" },
          }}
        />
      </body>
    </html>
  );
}