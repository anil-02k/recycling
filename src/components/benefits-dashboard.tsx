"use client";

import { useState } from "react";
import Wrapper from "./wrapper";

export default function BenefitsDashboard() {
  const [returns, setReturns] = useState(5);
  
  // Calculation logic
  const wasteSaved = (returns * 0.75).toFixed(1);
  const co2Saved = (returns * 0.003).toFixed(3);
  const moneyEarned = returns * 15;

  return (
    <section id="benefits" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#A8E6CF] to-[#2ECC71]">
      <Wrapper>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-unbounded font-bold text-white mb-4 sm:mb-6">
            Your Impact with EcoLoop
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4 sm:px-0">
            See the real-time environmental and financial impact of your packaging returns. Every box matters.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Interactive Calculator */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-6 sm:mb-8">
              <label className="block text-lg sm:text-xl lg:text-2xl font-unbounded font-semibold text-gray-900 mb-4 sm:mb-6">
                Number of returns per month
              </label>
              
              {/* Slider */}
              <div className="relative mb-6 sm:mb-8">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={returns}
                  onChange={(e) => setReturns(parseInt(e.target.value))}
                  className="w-full h-2 sm:h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #2ECC71 0%, #2ECC71 ${(returns / 20) * 100}%, #e5e7eb ${(returns / 20) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-2">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>
              
              {/* Current Value Display */}
              <div className="bg-[#2ECC71] text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-unbounded font-bold">{returns}</div>
                <div className="text-sm sm:text-base lg:text-lg">returns per month</div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Waste Prevented */}
              <div className="text-center p-4 sm:p-6 bg-green-50 rounded-xl sm:rounded-2xl">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">♻️</div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-unbounded font-bold text-[#2ECC71] counter-animation">
                  {wasteSaved} kg
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-semibold">Waste Prevented</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                  Equivalent to {Math.round(parseFloat(wasteSaved) * 2)} plastic bottles
                </div>
              </div>

              {/* CO₂ Saved */}
              <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl sm:rounded-2xl">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌍</div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-unbounded font-bold text-blue-600 counter-animation">
                  {co2Saved} tons
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-semibold">CO₂ Saved</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                  Like planting {Math.round(parseFloat(co2Saved) * 45)} trees
                </div>
              </div>

              {/* Money Earned */}
              <div className="text-center p-4 sm:p-6 bg-yellow-50 rounded-xl sm:rounded-2xl sm:col-span-2 lg:col-span-1">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💰</div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-unbounded font-bold text-yellow-600 counter-animation">
                  ₹{moneyEarned}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-semibold">Money Earned</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                  {Math.round(moneyEarned / 50)} Starbucks coffees
                </div>
              </div>
            </div>

            {/* Visual Impact */}
            <div className="mt-8 sm:mt-12 text-center">
              <div className="flex flex-col sm:flex-row justify-center items-end gap-6 sm:gap-8 mb-4 sm:mb-6">
                {/* Realistic Animated Tree */}
                <div className="relative flex flex-col items-center">
                  <div className="text-xs sm:text-sm text-gray-600 mb-2">Trees Planted</div>
                  
                  {/* Tree Structure */}
                  <div className="relative">
                    {/* Tree Crown/Leaves */}
                    <div 
                      className="relative transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${Math.min(returns * 3 + 30, 60)}px`,
                        height: `${Math.min(returns * 4 + 40, 80)}px`,
                        transformOrigin: 'bottom center'
                      }}
                    >
                      {/* Main foliage - layered circles for realistic tree shape */}
                      <div 
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#2ECC71] rounded-full transition-all duration-1000"
                        style={{
                          width: `${Math.min(returns * 3 + 30, 60)}px`,
                          height: `${Math.min(returns * 3 + 30, 60)}px`,
                        }}
                      />
                      
                      {/* Secondary foliage layers for depth */}
                      <div 
                        className="absolute bottom-1 left-1/4 transform -translate-x-1/2 bg-[#27AE60] rounded-full transition-all duration-1000"
                        style={{
                          width: `${Math.min(returns * 2 + 20, 40)}px`,
                          height: `${Math.min(returns * 2 + 20, 40)}px`,
                        }}
                      />
                      
                      <div 
                        className="absolute bottom-1 right-1/4 transform translate-x-1/2 bg-[#27AE60] rounded-full transition-all duration-1000"
                        style={{
                          width: `${Math.min(returns * 2 + 15, 35)}px`,
                          height: `${Math.min(returns * 2 + 15, 35)}px`,
                        }}
                      />
                      
                      {/* Top layer for tree crown */}
                      <div 
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#2ECC71] rounded-full transition-all duration-1000"
                        style={{
                          width: `${Math.min(returns * 2 + 20, 45)}px`,
                          height: `${Math.min(returns * 2 + 20, 45)}px`,
                        }}
                      />
                    </div>
                    
                    {/* Tree Trunk */}
                    <div 
                      className="bg-amber-700 mx-auto transition-all duration-1000"
                      style={{
                        width: `${Math.min(returns * 1 + 6, 12)}px`,
                        height: `${Math.min(returns * 1.5 + 15, 25)}px`,
                      }}
                    />
                    
                    {/* Tree Roots/Base */}
                    <div className="w-6 h-1 sm:w-8 sm:h-2 bg-amber-800 mx-auto rounded-b-full" />
                  </div>
                  
                  {/* Growth indicator */}
                  <div className="mt-1 sm:mt-2 text-xs text-gray-500">
                    Growth: {Math.min(returns * 10, 100)}%
                  </div>
                </div>

                {/* Animated Coin Stack */}
                <div className="relative flex flex-col items-center">
                  <div className="text-xs sm:text-sm text-gray-600 mb-2">Rewards Earned</div>
                  
                  <div className="relative">
                    {Array.from({ length: Math.min(Math.floor(returns / 2), 6) }).map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-2 sm:w-12 sm:h-3 bg-yellow-400 rounded-full border-2 border-yellow-500 transition-all duration-500"
                        style={{ 
                          marginTop: i === 0 ? '0' : '-1px',
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="mt-1 sm:mt-2 text-xs text-gray-500">
                    ₹{moneyEarned} earned
                  </div>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 italic">
                "Small actions, big impact. Your choices matter."
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}