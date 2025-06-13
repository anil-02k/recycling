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
    <section id="benefits" className="py-20 bg-gradient-to-br from-[#A8E6CF] to-[#2ECC71]">
      <Wrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-unbounded font-bold text-white mb-6">
            Your Impact with EcoLoop
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            See the real-time environmental and financial impact of your packaging returns. Every box matters.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Interactive Calculator */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <label className="block text-2xl font-unbounded font-semibold text-gray-900 mb-6">
                Number of returns per month
              </label>
              
              {/* Slider */}
              <div className="relative mb-8">
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={returns}
                  onChange={(e) => setReturns(parseInt(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #2ECC71 0%, #2ECC71 ${(returns / 20) * 100}%, #e5e7eb ${(returns / 20) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>
              
              {/* Current Value Display */}
              <div className="bg-[#2ECC71] text-white rounded-2xl p-6 mb-8">
                <div className="text-4xl font-unbounded font-bold">{returns}</div>
                <div className="text-lg">returns per month</div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Waste Prevented */}
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <div className="text-4xl mb-4">♻️</div>
                <div className="text-3xl font-unbounded font-bold text-[#2ECC71] counter-animation">
                  {wasteSaved} kg
                </div>
                <div className="text-gray-600 font-semibold">Waste Prevented</div>
                <div className="text-sm text-gray-500 mt-2">
                  Equivalent to {Math.round(parseFloat(wasteSaved) * 2)} plastic bottles
                </div>
              </div>

              {/* CO₂ Saved */}
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <div className="text-4xl mb-4">🌍</div>
                <div className="text-3xl font-unbounded font-bold text-blue-600 counter-animation">
                  {co2Saved} tons
                </div>
                <div className="text-gray-600 font-semibold">CO₂ Saved</div>
                <div className="text-sm text-gray-500 mt-2">
                  Like planting {Math.round(parseFloat(co2Saved) * 45)} trees
                </div>
              </div>

              {/* Money Earned */}
              <div className="text-center p-6 bg-yellow-50 rounded-2xl">
                <div className="text-4xl mb-4">💰</div>
                <div className="text-3xl font-unbounded font-bold text-yellow-600 counter-animation">
                  ₹{moneyEarned}
                </div>
                <div className="text-gray-600 font-semibold">Money Earned</div>
                <div className="text-sm text-gray-500 mt-2">
                  {Math.round(moneyEarned / 50)} Starbucks coffees
                </div>
              </div>
            </div>

            {/* Visual Impact */}
            <div className="mt-12 text-center">
              <div className="flex justify-center items-end gap-4 mb-6">
                {/* Animated Tree Growth */}
                <div className="relative">
                  <div 
                    className="bg-[#2ECC71] rounded-t-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: '60px', 
                      height: `${Math.min(returns * 8, 120)}px`,
                      transformOrigin: 'bottom'
                    }}
                  ></div>
                  <div className="w-4 h-8 bg-amber-600 mx-auto"></div>
                  <div className="text-sm text-gray-600 mt-2">Trees Planted</div>
                </div>

                {/* Animated Coin Stack */}
                <div className="relative">
                  {Array.from({ length: Math.min(Math.floor(returns / 2), 8) }).map((_, i) => (
                    <div
                      key={i}
                      className="w-12 h-3 bg-yellow-400 rounded-full border-2 border-yellow-500 transition-all duration-500"
                      style={{ 
                        marginTop: i === 0 ? '0' : '-2px',
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                  <div className="text-sm text-gray-600 mt-2">Rewards Earned</div>
                </div>
              </div>
              
              <p className="text-gray-600 italic">
                "Small actions, big impact. Your choices matter."
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}