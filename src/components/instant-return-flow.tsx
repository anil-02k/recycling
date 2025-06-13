"use client";

import { CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Wrapper from "./wrapper";

const flowSteps = [
  {
    icon: "📦",
    title: "Receive & Register",
    description: "Scan QR on your EcoLoop box → activates tracking",
    visual: "Phone mockup scanning box QR"
  },
  {
    icon: "🔔",
    title: "Get Delivery Alert",
    description: "App notifies: 'Driver arriving! Return empties for 2x points'",
    visual: "Notification UI: 'Rahul's delivery in 20 min - 3 boxes = 90 pts!'"
  },
  {
    icon: "🤝",
    title: "Handoff at Doorstep",
    description: "Give boxes to driver → they scan all QRs in <10 secs",
    visual: "Driver scanning stack of collapsed boxes"
  },
  {
    icon: "🎁",
    title: "Instant Rewards",
    description: "GreenPoints hit your wallet → redeem at Starbucks, Amazon, or plant trees",
    visual: "App screen: '90 pts added! Balance: 620 pts'"
  }
];

function StepCard({ step, index, isActive }: { step: typeof flowSteps[0]; index: number; isActive: boolean }) {
  return (
    <div className={`relative transition-all duration-500 ${isActive ? 'scale-105' : 'scale-100'}`}>
      {/* Timeline Line - Hidden on mobile */}
      {index < flowSteps.length - 1 && (
        <div className="hidden lg:block absolute top-16 left-1/2 w-px h-32 bg-gradient-to-b from-[#2ECC71] to-[#A8E6CF] transform -translate-x-1/2"></div>
      )}
      
      <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg eco-card-hover ${isActive ? 'ring-4 ring-[#2ECC71] ring-opacity-50' : ''}`}>
        {/* Step Number */}
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#2ECC71] text-white rounded-full font-bold text-base sm:text-lg mb-4 sm:mb-6 mx-auto">
          {index + 1}
        </div>
        
        {/* Icon */}
        <div className="text-3xl sm:text-4xl lg:text-5xl text-center mb-3 sm:mb-4">{step.icon}</div>
        
        {/* Content */}
        <h3 className="text-lg sm:text-xl font-unbounded font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
          {step.title}
        </h3>
        
        <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed mb-4 sm:mb-6">
          {step.description}
        </p>
        
        {/* Visual Mockup */}
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 text-center">
          <div className="text-xs sm:text-sm text-gray-500 italic mb-2 sm:mb-4">
            {step.visual}
          </div>
          
          {/* Interactive Elements Based on Step */}
          {index === 0 && (
            <div className="bg-[#2ECC71] text-white rounded-lg p-2 sm:p-3">
              <div className="flex items-center justify-center gap-2">
                <span className="text-base sm:text-lg">📱</span>
                <span className="font-semibold text-sm sm:text-base">QR Scanned!</span>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          )}
          
          {index === 1 && (
            <div className="bg-blue-500 text-white rounded-lg p-2 sm:p-3">
              <div className="text-left">
                <p className="font-semibold text-sm sm:text-base">📱 EcoLoop</p>
                <p className="text-xs sm:text-sm">Rahul arriving in 20 min</p>
                <p className="text-xs sm:text-sm">3 boxes ready = 90 points! 🎁</p>
              </div>
            </div>
          )}
          
          {index === 2 && (
            <div className="space-y-1 sm:space-y-2">
              <div className="bg-[#A8E6CF] text-gray-800 rounded p-1 sm:p-2 text-xs sm:text-sm">
                Box 1: ✅ Scanned
              </div>
              <div className="bg-[#A8E6CF] text-gray-800 rounded p-1 sm:p-2 text-xs sm:text-sm">
                Box 2: ✅ Scanned
              </div>
              <div className="bg-[#A8E6CF] text-gray-800 rounded p-1 sm:p-2 text-xs sm:text-sm">
                Box 3: ✅ Scanned
              </div>
            </div>
          )}
          
          {index === 3 && (
            <div className="bg-[#2ECC71] text-white rounded-lg p-2 sm:p-3">
              <p className="font-bold text-base sm:text-lg">+90 GreenPoints!</p>
              <p className="text-xs sm:text-sm">New Balance: 620 pts</p>
              <div className="mt-1 sm:mt-2 text-xs">
                💰 ₹135 earned • 🌱 0.5kg CO₂ saved
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function InstantReturnFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % flowSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-white">
      <Wrapper>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-unbounded font-bold text-gray-900 mb-4 sm:mb-6">
            InstantReturn Flow
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Four simple steps to transform packaging waste into rewards. No extra trips, no hassle – just hand your empties to the next delivery driver.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {flowSteps.map((step, index) => (
            <StepCard 
              key={index} 
              step={step} 
              index={index} 
              isActive={activeStep === index}
            />
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 sm:mt-12">
          <div className="flex gap-2">
            {flowSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  activeStep === index ? 'bg-[#2ECC71] scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}