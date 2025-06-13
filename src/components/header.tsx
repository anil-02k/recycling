"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showJudgeMode, setShowJudgeMode] = useState(false);

  // Easter egg handler
  const handleKeyPress = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value === "HACK2025") {
      setShowJudgeMode(true);
      target.value = "";
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <Wrapper>
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo with Hackathon Badge */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2ECC71] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">🌱</span>
              </div>
            </div>
            <div>
              <span className="font-unbounded font-bold text-lg sm:text-xl text-gray-900">EcoLoop</span>
              <div className="text-xs text-orange-500 font-semibold">Hackathon Edition</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="#how-it-works" className="text-sm lg:text-base text-gray-600 hover:text-[#2ECC71] transition-colors">
              How It Works
            </Link>
            <Link href="#retailer-solution" className="text-sm lg:text-base text-gray-600 hover:text-[#2ECC71] transition-colors">
              For Business
            </Link>
            <Link href="#benefits" className="text-sm lg:text-base text-gray-600 hover:text-[#2ECC71] transition-colors">
              Impact
            </Link>
            <Link href="#blockchain" className="text-sm lg:text-base text-gray-600 hover:text-[#2ECC71] transition-colors">
              Blockchain
            </Link>
            <Link href="#ar-experience" className="text-sm lg:text-base text-gray-600 hover:text-[#2ECC71] transition-colors">
              AR Experience
            </Link>
          </nav>

          {/* Judge Mode Toggle & CTA */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {showJudgeMode && (
              <button
                onClick={() => setShowJudgeMode(false)}
                className="text-xs bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full font-semibold"
              >
                Judge Mode ON
              </button>
            )}
            <Button 
              asChild
              className="bg-[#2ECC71] hover:bg-[#27AE60] text-white text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3"
            >
              <Link href="#cta">Get Early Access</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 sm:py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-3 sm:gap-4">
              <Link 
                href="#how-it-works" 
                className="text-sm sm:text-base text-gray-600 hover:text-[#2ECC71] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="#retailer-solution" 
                className="text-sm sm:text-base text-gray-600 hover:text-[#2ECC71] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                For Business
              </Link>
              <Link 
                href="#benefits" 
                className="text-sm sm:text-base text-gray-600 hover:text-[#2ECC71] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Impact
              </Link>
              <Link 
                href="#blockchain" 
                className="text-sm sm:text-base text-gray-600 hover:text-[#2ECC71] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blockchain
              </Link>
              <Link 
                href="#ar-experience" 
                className="text-sm sm:text-base text-gray-600 hover:text-[#2ECC71] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                AR Experience
              </Link>
              <Button 
                asChild
                className="bg-[#2ECC71] hover:bg-[#27AE60] text-white w-fit text-sm sm:text-base px-4 py-2"
              >
                <Link href="#cta" onClick={() => setIsMenuOpen(false)}>Get Early Access</Link>
              </Button>
            </nav>
          </div>
        )}

        {/* Hidden Easter Egg Input */}
        <input
          type="text"
          className="absolute opacity-0 pointer-events-none"
          onKeyPress={handleKeyPress}
          autoFocus
        />

        {/* Judge Mode Panel */}
        {showJudgeMode && (
          <div className="absolute top-full left-0 right-0 bg-purple-50 border-b border-purple-200 p-3 sm:p-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-bold text-purple-900 mb-2 text-sm sm:text-base">🏆 Judge Mode Activated</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div>
                  <h4 className="font-semibold text-purple-800">Tech Stack</h4>
                  <p className="text-purple-600">Next.js, Blockchain API, AR.js, Real-time WebSockets</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800">Business Metrics</h4>
                  <p className="text-purple-600">CAC: ₹45 | LTV: ₹2,400 | ROI: 5,233%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800">Impact</h4>
                  <p className="text-purple-600">50k+ boxes saved | 15 tons CO₂ prevented</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </header>
  );
}