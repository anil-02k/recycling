import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Wrapper from "./wrapper";

export default function Footer() {
  return (
    <footer className="bg-[#0F2E1B] text-white py-12 sm:py-16">
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2ECC71] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">🌱</span>
              </div>
              <div>
                <span className="font-unbounded font-bold text-lg sm:text-xl">EcoLoop</span>
                <div className="text-xs text-orange-500 font-semibold">Hackathon Edition</div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-300">
              Transforming packaging waste into rewards. Building a sustainable future, one delivery at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-unbounded font-semibold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="#how-it-works" className="text-sm sm:text-base text-gray-300 hover:text-[#2ECC71] transition-colors">How It Works</Link></li>
              <li><Link href="#benefits" className="text-sm sm:text-base text-gray-300 hover:text-[#2ECC71] transition-colors">Impact Calculator</Link></li>
              <li><Link href="#retailer-solution" className="text-sm sm:text-base text-gray-300 hover:text-[#2ECC71] transition-colors">For Business</Link></li>
              <li><Link href="#blockchain" className="text-sm sm:text-base text-gray-300 hover:text-[#2ECC71] transition-colors">Blockchain</Link></li>
              <li><Link href="#ar-experience" className="text-sm sm:text-base text-gray-300 hover:text-[#2ECC71] transition-colors">AR Experience</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-unbounded font-semibold text-base sm:text-lg mb-3 sm:mb-4">Support</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="#" className="text-sm sm:text-base text-gray-300 hover:text-[#2ECC71] transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-sm sm:text-base text-gray-300 hover:text-[#2ECC71] transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-sm sm:text-base text-gray-300 hover:text-[#2ECC71] transition-colors">Contact Support</Link></li>
              <li><Link href="#" className="text-sm sm:text-base text-gray-300 hover:text-[#2ECC71] transition-colors">Partner Program</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-unbounded font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ECC71]" />
                <span className="text-sm sm:text-base text-gray-300">hello@ecoloop.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ECC71]" />
                <span className="text-sm sm:text-base text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ECC71]" />
                <span className="text-sm sm:text-base text-gray-300">Mumbai, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4 sm:mt-6">
              <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Follow Us</h4>
              <div className="flex gap-2 sm:gap-3">
                <Link 
                  href="https://facebook.com/ecoloop" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 group"
                >
                  <FaFacebookF className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform" />
                </Link>
                <Link 
                  href="https://twitter.com/ecoloop" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#1DA1F2] transition-all duration-300 group"
                >
                  <FaTwitter className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform" />
                </Link>
                <Link 
                  href="https://instagram.com/ecoloop" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#E4405F] hover:to-[#F56040] transition-all duration-300 group"
                >
                  <FaInstagram className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform" />
                </Link>
                <Link 
                  href="https://linkedin.com/company/ecoloop" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0A66C2] transition-all duration-300 group"
                >
                  <FaLinkedinIn className="w-3 h-3 sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © 2025 EcoLoop Hackathon Edition. Built for Hackathon 2025. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <Link href="#" className="text-gray-400 hover:text-[#2ECC71] text-xs sm:text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-[#2ECC71] text-xs sm:text-sm transition-colors">Terms of Service</Link>
            <Link href="#" className="text-gray-400 hover:text-[#2ECC71] text-xs sm:text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>

        {/* Hackathon Credits */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm">
            <span className="text-base sm:text-lg">🏆</span>
            <span className="font-semibold">Hackathon 2025 Submission</span>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}