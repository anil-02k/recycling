"use client";

import { Camera, Smartphone } from "lucide-react";
import { useState } from "react";
import Wrapper from "./wrapper";

export default function ARExperience() {
  const [isARActive, setIsARActive] = useState(false);
  const [wasteImpact, setWasteImpact] = useState({
    bottles: 0,
    co2: 0,
    trees: 0
  });

  const simulateARScan = () => {
    setIsARActive(true);
    
    // Simulate AR scanning and impact calculation
    setTimeout(() => {
      setWasteImpact({
        bottles: Math.floor(Math.random() * 50) + 25,
        co2: (Math.random() * 2 + 1).toFixed(2),
        trees: Math.floor(Math.random() * 5) + 2
      });
    }, 2000);
  };

  return (
    <section id="ar-experience" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <Wrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-unbounded font-bold text-gray-900 mb-6">
            AR Waste Impact Visualizer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scan the QR code with your phone to see your personal waste impact in augmented reality, or experience the 3D visualization below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* QR Code & Mobile Experience */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
              {/* QR Code Placeholder */}
              <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex flex-col items-center justify-center mb-6">
                <Camera className="w-16 h-16 text-gray-400 mb-4" />
                <div className="text-gray-600 font-semibold">AR QR Code</div>
                <div className="text-sm text-gray-500 mt-2">Scan to see your impact</div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-[#2ECC71] font-semibold">
                <Smartphone className="w-5 h-5" />
                <span>Point camera here</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-unbounded font-bold text-gray-900">
                Mobile AR Features
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl mb-2">📱</div>
                  <div className="font-semibold">3D Visualization</div>
                  <div className="text-gray-600">See waste reduction in 3D space</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl mb-2">🌍</div>
                  <div className="font-semibold">Real-time Data</div>
                  <div className="text-gray-600">Live environmental metrics</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl mb-2">📸</div>
                  <div className="font-semibold">Share Impact</div>
                  <div className="text-gray-600">Capture & share your results</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-semibold">Goal Tracking</div>
                  <div className="text-gray-600">Monitor progress over time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop 3D Fallback */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-unbounded font-bold text-gray-900 mb-6">
              Desktop Experience
            </h3>
            
            {!isARActive ? (
              <div className="text-center">
                <div className="w-full h-80 bg-gradient-to-br from-[#2ECC71] to-[#A8E6CF] rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
                  {/* 3D Scene Placeholder */}
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🌍</div>
                    <h4 className="text-2xl font-bold mb-2">Your Waste Impact</h4>
                    <p className="text-lg opacity-90">Click to simulate AR experience</p>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4 bg-white/20 rounded-full p-3 animate-float">
                    <span className="text-2xl">♻️</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/20 rounded-full p-3 animate-float" style={{ animationDelay: '1s' }}>
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div className="absolute top-1/2 right-8 bg-white/20 rounded-full p-3 animate-float" style={{ animationDelay: '2s' }}>
                    <span className="text-2xl">💧</span>
                  </div>
                </div>
                
                <button
                  onClick={simulateARScan}
                  className="bg-[#2ECC71] hover:bg-[#27AE60] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Simulate AR Scan
                </button>
              </div>
            ) : (
              <div className="text-center">
                {wasteImpact.bottles === 0 ? (
                  <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-[#2ECC71] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-600 font-semibold">Scanning your impact...</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="w-full h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-6 relative overflow-hidden">
                      {/* Impact Visualization */}
                      <div className="grid grid-cols-3 gap-4 h-full">
                        <div className="flex flex-col items-center justify-center">
                          <div className="text-4xl mb-2">🍶</div>
                          <div className="text-2xl font-bold text-[#2ECC71]">{wasteImpact.bottles}</div>
                          <div className="text-sm text-gray-600">Bottles Saved</div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="text-4xl mb-2">🌍</div>
                          <div className="text-2xl font-bold text-blue-600">{wasteImpact.co2}kg</div>
                          <div className="text-sm text-gray-600">CO₂ Reduced</div>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="text-4xl mb-2">🌳</div>
                          <div className="text-2xl font-bold text-green-600">{wasteImpact.trees}</div>
                          <div className="text-sm text-gray-600">Trees Planted</div>
                        </div>
                      </div>
                      
                      {/* Animated Particles */}
                      <div className="absolute inset-0 pointer-events-none">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 bg-[#2ECC71] rounded-full animate-ping"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              animationDelay: `${Math.random() * 2}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-green-800 font-semibold">
                        🎉 Amazing! Your EcoLoop usage has prevented {wasteImpact.bottles} plastic bottles from reaching landfills!
                      </p>
                    </div>
                    
                    <button
                      onClick={() => {
                        setIsARActive(false);
                        setWasteImpact({ bottles: 0, co2: 0, trees: 0 });
                      }}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Reset Experience
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* AR Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🥽</span>
            </div>
            <h3 className="text-xl font-unbounded font-bold text-gray-900 mb-2">
              Immersive Visualization
            </h3>
            <p className="text-gray-600">
              See your environmental impact come to life in 3D augmented reality
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-unbounded font-bold text-gray-900 mb-2">
              Real-time Metrics
            </h3>
            <p className="text-gray-600">
              Live data showing bottles saved, CO₂ reduced, and trees planted
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-unbounded font-bold text-gray-900 mb-2">
              Gamified Experience
            </h3>
            <p className="text-gray-600">
              Unlock achievements and share your sustainability milestones
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}