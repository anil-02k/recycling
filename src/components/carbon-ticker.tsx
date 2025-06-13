"use client";

import { useEffect, useState } from "react";

export default function CarbonTicker() {
  const [stats, setStats] = useState({
    boxesSaved: 12847,
    savings: 420000,
    treesEquivalent: 41
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        boxesSaved: prev.boxesSaved + Math.floor(Math.random() * 25) + 18,
        savings: prev.savings + Math.floor(Math.random() * 1500) + 500,
        treesEquivalent: prev.treesEquivalent + Math.floor(Math.random() * 3)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0F2E1B] text-white py-1 sm:py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 sm:gap-12">
        <div className="flex items-center gap-1 sm:gap-2 mx-4 sm:mx-8">
          <span className="text-base sm:text-lg">🌎</span>
          <span className="font-semibold text-xs sm:text-sm lg:text-base">
            {stats.boxesSaved.toLocaleString()} Boxes Returned
          </span>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2 mx-4 sm:mx-8">
          <span className="text-base sm:text-lg">💸</span>
          <span className="font-semibold text-xs sm:text-sm lg:text-base">
            ₹{stats.savings.toLocaleString()} Saved
          </span>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2 mx-4 sm:mx-8">
          <span className="text-base sm:text-lg">🌳</span>
          <span className="font-semibold text-xs sm:text-sm lg:text-base">
            {stats.treesEquivalent} Tons CO₂ Avoided
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 mx-4 sm:mx-8">
          <span className="text-base sm:text-lg">⚡</span>
          <span className="font-semibold text-xs sm:text-sm lg:text-base">
            Live Impact Tracking
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 mx-4 sm:mx-8">
          <span className="text-base sm:text-lg">🏆</span>
          <span className="font-semibold text-xs sm:text-sm lg:text-base">
            Hackathon 2025 Entry
          </span>
        </div>

        {/* Duplicate for seamless loop */}
        <div className="flex items-center gap-1 sm:gap-2 mx-4 sm:mx-8">
          <span className="text-base sm:text-lg">🌎</span>
          <span className="font-semibold text-xs sm:text-sm lg:text-base">
            {stats.boxesSaved.toLocaleString()} Boxes Returned
          </span>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2 mx-4 sm:mx-8">
          <span className="text-base sm:text-lg">💸</span>
          <span className="font-semibold text-xs sm:text-sm lg:text-base">
            ₹{stats.savings.toLocaleString()} Saved
          </span>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2 mx-4 sm:mx-8">
          <span className="text-base sm:text-lg">🌳</span>
          <span className="font-semibold text-xs sm:text-sm lg:text-base">
            {stats.treesEquivalent} Tons CO₂ Avoided
          </span>
        </div>
      </div>
    </div>
  );
}