"use client";

import { Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export default function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="py-20 eco-gradient text-white overflow-hidden">
      <Wrapper>
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text Content - 60% */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-unbounded font-bold leading-tight mb-6">
              Return Packaging at Your Doorstep.{" "}
              <span className="text-[#A8E6CF]">Earn Rewards.</span>{" "}
              <span className="text-[#A8E6CF]">Save the Planet.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              EcoLoop replaces single-use boxes with reusable packaging – hand empties to delivery drivers for instant discounts. No trips. No waste.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg"
                className="bg-white text-[#0F2E1B] hover:bg-gray-100 font-semibold text-lg px-8 py-6"
              >
                <Link href="#cta">Join Early Access →</Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
              >
                <Link href="#how-it-works">See How It Works ↓</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌱</span>
                <span className="text-sm font-semibold">500+ Early Adopters</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📦</span>
                <span className="text-sm font-semibold">50k+ Boxes Returned</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span className="text-sm font-semibold">₹2.5M Rewards Distributed</span>
              </div>
            </div>
          </div>

          {/* Video Mockup - 40% */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {!isVideoPlaying ? (
                    // Video Placeholder
                    <div className="w-full h-full bg-gradient-to-br from-[#2ECC71] to-[#A8E6CF] flex flex-col items-center justify-center relative">
                      {/* Play Button */}
                      <button
                        onClick={() => setIsVideoPlaying(true)}
                        className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 hover:bg-white/30 transition-colors"
                      >
                        <Play className="w-8 h-8 text-white ml-1" />
                      </button>
                      
                      {/* Demo Content */}
                      <div className="text-center text-white px-6">
                        <h3 className="font-unbounded font-bold text-lg mb-2">
                          See EcoLoop in Action
                        </h3>
                        <p className="text-sm opacity-90">
                          Watch how easy it is to return packaging and earn rewards
                        </p>
                      </div>

                      {/* Animated Elements */}
                      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                        <div className="bg-white rounded-lg p-4 shadow-lg animate-bounce">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">📱</span>
                            <div>
                              <p className="text-sm font-semibold text-gray-900">+50 GreenPoints!</p>
                              <p className="text-xs text-gray-600">Box returned successfully</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Simulated Video Content
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                          <span className="text-white text-2xl">📦</span>
                        </div>
                        <p className="text-gray-600 font-semibold">Demo Video Playing...</p>
                        <button
                          onClick={() => setIsVideoPlaying(false)}
                          className="mt-4 text-[#2ECC71] text-sm hover:underline"
                        >
                          Close Video
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-float">
                <span className="text-2xl">♻️</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">🌍</span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}