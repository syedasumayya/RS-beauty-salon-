import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS, BUSINESS_HOURS } from "@/lib/constants";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-salon-dark text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">💄</span>
              <span className="font-heading text-xl font-bold">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Where beauty meets elegance. Experience premium beauty services
              in a relaxing and luxurious atmosphere.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FaFacebookF, href: SITE_CONFIG.socialLinks.facebook },
                { Icon: FaInstagram, href: SITE_CONFIG.socialLinks.instagram },
                { Icon: FaTwitter, href: SITE_CONFIG.socialLinks.twitter },
                { Icon: FaTiktok, href: SITE_CONFIG.socialLinks.tiktok },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-500 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
              <FiClock /> Business Hours
            </h4>
            <ul className="space-y-2">
              {BUSINESS_HOURS.map((h) => (
                <li key={h.day} className="flex justify-between text-sm text-gray-400">
                  <span>{h.day}</span>
                  <span>{h.isClosed ? "Closed" : `${h.open} - ${h.close}`}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FiMapPin className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                {SITE_CONFIG.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FiPhone className="w-4 h-4 text-primary-400 shrink-0" />
                {SITE_CONFIG.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <FiMail className="w-4 h-4 text-primary-400 shrink-0" />
                {SITE_CONFIG.email}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}