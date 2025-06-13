"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <Wrapper>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#2ECC71] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🌱</span>
            </div>
            <span className="font-unbounded font-bold text-xl text-gray-900">EcoLoop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-gray-600 hover:text-[#2ECC71] transition-colors">
              How It Works
            </Link>
            <Link href="#retailer-solution" className="text-gray-600 hover:text-[#2ECC71] transition-colors">
              For Business
            </Link>
            <Link href="#benefits" className="text-gray-600 hover:text-[#2ECC71] transition-colors">
              Impact
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-[#2ECC71] transition-colors">
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <Button 
            asChild
            className="hidden md:inline-flex bg-[#2ECC71] hover:bg-[#27AE60] text-white"
          >
            <Link href="#cta">Get Early Access</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link 
                href="#how-it-works" 
                className="text-gray-600 hover:text-[#2ECC71] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="#retailer-solution" 
                className="text-gray-600 hover:text-[#2ECC71] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                For Business
              </Link>
              <Link 
                href="#benefits" 
                className="text-gray-600 hover:text-[#2ECC71] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Impact
              </Link>
              <Link 
                href="#faq" 
                className="text-gray-600 hover:text-[#2ECC71] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button 
                asChild
                className="bg-[#2ECC71] hover:bg-[#27AE60] text-white w-fit"
              >
                <Link href="#cta" onClick={() => setIsMenuOpen(false)}>Get Early Access</Link>
              </Button>
            </nav>
          </div>
        )}
      </Wrapper>
    </header>
  );
}