import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0B0B0B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#FF2E2E] rounded-md flex items-center justify-center">
                <span className="font-bold">CR</span>
              </div>
              <span className="font-bold text-xl">CarRental</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for premium car rentals. Experience luxury
              and comfort on every journey.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF2E2E] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF size={18}/>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF2E2E] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <LuInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#FF2E2E] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn size={18}/>
                
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Services", "About Us", "Cars", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FF2E2E] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Wedding Car Rental",
                "Airport Transfer",
                "Corporate Rental",
                "Long Term Rental",
                "Chauffeur Service",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FF2E2E] transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 text-[#FF2E2E] mt-1" />
                <span>153-H, Commercial Zone, Phase 1, DHA Lahore Cantt, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="flex-shrink-0 text-[#FF2E2E]" />
                <span>+92 335 4611570</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="flex-shrink-0 text-[#FF2E2E]" />
                <span>soukatali5@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 CarRental. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF2E2E] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF2E2E] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
