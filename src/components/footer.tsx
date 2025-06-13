import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Wrapper from "./wrapper";

export default function Footer() {
  return (
    <footer className="bg-[#0F2E1B] text-white py-16">
      <Wrapper>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#2ECC71] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">🌱</span>
              </div>
              <div>
                <span className="font-unbounded font-bold text-xl">EcoLoop</span>
                <div className="text-xs text-orange-500 font-semibold">Hackathon Edition</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming packaging waste into rewards. Building a sustainable future, one delivery at a time.
            </p>
            
            {/* QR Code */}
            <div className="bg-white p-4 rounded-lg w-fit">
              <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-500">Demo Video QR</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-unbounded font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#how-it-works" className="text-gray-300 hover:text-[#2ECC71] transition-colors">How It Works</Link></li>
              <li><Link href="#benefits" className="text-gray-300 hover:text-[#2ECC71] transition-colors">Impact Calculator</Link></li>
              <li><Link href="#retailer-solution" className="text-gray-300 hover:text-[#2ECC71] transition-colors">For Business</Link></li>
              <li><Link href="#blockchain" className="text-gray-300 hover:text-[#2ECC71] transition-colors">Blockchain</Link></li>
              <li><Link href="#ar-experience" className="text-gray-300 hover:text-[#2ECC71] transition-colors">AR Experience</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-unbounded font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-[#2ECC71] transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-[#2ECC71] transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-[#2ECC71] transition-colors">Contact Support</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-[#2ECC71] transition-colors">Partner Program</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-unbounded font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2ECC71]" />
                <span className="text-gray-300">hello@ecoloop.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#2ECC71]" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#2ECC71]" />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2ECC71] transition-colors">
                  <span className="text-lg">📘</span>
                </Link>
                <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2ECC71] transition-colors">
                  <span className="text-lg">📷</span>
                </Link>
                <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2ECC71] transition-colors">
                  <span className="text-lg">🐦</span>
                </Link>
                <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2ECC71] transition-colors">
                  <span className="text-lg">💼</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 EcoLoop Hackathon Edition. Built for Sparkathon 2025. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-[#2ECC71] text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-400 hover:text-[#2ECC71] text-sm transition-colors">Terms of Service</Link>
            <Link href="#" className="text-gray-400 hover:text-[#2ECC71] text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>

        {/* Hackathon Credits */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm">
            <span className="text-lg">🏆</span>
            <span className="font-semibold">Sparkathon 2025 Submission</span>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}