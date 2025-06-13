"use client";

import { Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="py-12 sm:py-16 lg:py-20 eco-gradient text-white overflow-hidden">
      <Wrapper>
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Text Content - 60% */}
          <div className="lg:col-span-3 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-unbounded font-bold leading-tight mb-4 sm:mb-6">
              Return Packaging at Your Doorstep.{" "}
              <span className="text-[#A8E6CF] block sm:inline">Earn Rewards.</span>{" "}
              <span className="text-[#A8E6CF] block sm:inline">Save the Planet.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              EcoLoop replaces single-use boxes with reusable packaging – hand empties to delivery drivers for instant discounts. No trips. No waste.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
              <Button 
                asChild
                size="lg"
                className="bg-white text-[#0F2E1B] hover:bg-gray-100 font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto border-0"
              >
                <Link href="#cta">Join Early Access →</Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F2E1B] font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto transition-all duration-300"
              >
                <Link href="#how-it-works">See How It Works ↓</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl">🌱</span>
                <span className="text-xs sm:text-sm font-semibold">500+ Early Adopters</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl">📦</span>
                <span className="text-xs sm:text-sm font-semibold">50k+ Boxes Returned</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl">💰</span>
                <span className="text-xs sm:text-sm font-semibold">₹2.5M Rewards Distributed</span>
              </div>
            </div>
          </div>

          {/* Video Mockup - 40% */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-64 h-[480px] sm:w-80 sm:h-[600px] bg-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                  {!isVideoPlaying ? (
                    // Video Placeholder
                    <div className="w-full h-full bg-gradient-to-br from-[#2ECC71] to-[#A8E6CF] flex flex-col items-center justify-center relative p-4">
                      {/* Play Button */}
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 hover:bg-white/30 transition-colors"
                      >
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                      </button>
                      
                      {/* Demo Content */}
                      <div className="text-center text-white px-4 sm:px-6">
                        <h3 className="font-unbounded font-bold text-base sm:text-lg mb-2">
                          See EcoLoop in Action
                        </h3>
                        <p className="text-xs sm:text-sm opacity-90">
                          Watch how easy it is to return packaging and earn rewards
                        </p>
                      </div>

                      {/* Animated Elements */}
                      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2">
                        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-lg animate-bounce">
                          <div className="flex items-center gap-2">
                            <span className="text-xl sm:text-2xl">📱</span>
                            <div>
                              <p className="text-xs sm:text-sm font-semibold text-gray-900">+50 GreenPoints!</p>
                              <p className="text-xs text-gray-600">Box returned successfully</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Simulated Video Content
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center p-4">
                      <div className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                          <span className="text-white text-xl sm:text-2xl">📦</span>
                        </div>
                        <p className="text-gray-600 font-semibold text-sm sm:text-base">Demo Video Playing...</p>
                        <button
                          onClick={() => setIsVideoPlaying(false)}
                          className="mt-4 text-[#2ECC71] text-xs sm:text-sm hover:underline"
                        >
                          Close Video
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-full p-2 sm:p-3 shadow-lg animate-float">
                <span className="text-lg sm:text-2xl">♻️</span>
              </div>
              
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-full p-2 sm:p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-lg sm:text-2xl">🌍</span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}