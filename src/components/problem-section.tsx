"use client";

import { useEffect, useRef, useState } from "react";
import Wrapper from "./wrapper";

const problemStats = [
  {
    icon: "🗑️",
    title: "Landfill Overload",
    stat: "165B",
    unit: "packages → landfills yearly",
    description: "Cardboard recycling fails – 40% gets discarded due to contamination"
  },
  {
    icon: "😤",
    title: "Customer Pain",
    stat: "68%",
    unit: "discard packaging immediately",
    description: "Storing boxes is messy & returning them is inconvenient"
  },
  {
    icon: "💸",
    title: "Retailer Cost",
    stat: "$12B",
    unit: "wasted on single-use packaging",
    description: "Virgin materials + disposal fees eat profits"
  }
];

function AnimatedCounter({ target, unit }: { target: string; unit: string }) {
  const [count, setCount] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Extract numeric part for animation
    const numericPart = target.match(/\d+/)?.[0];
    if (!numericPart) {
      setCount(target);
      return;
    }

    const targetNum = parseInt(numericPart);
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNum / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNum) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(target.replace(numericPart, Math.floor(current).toString()));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-unbounded font-bold text-red-600 mb-2">
      {count}
      <span className="text-sm xs:text-base sm:text-lg md:text-xl font-open-sans font-normal text-gray-600 ml-1 sm:ml-2 block sm:inline">
        {unit}
      </span>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <Wrapper>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-unbounded font-bold text-gray-900 mb-4 sm:mb-6">
            The Packaging Waste Crisis
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Our throwaway culture is destroying the planet. Every day, billions of packages end up in landfills, creating an environmental disaster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problemStats.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg eco-card-hover text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-unbounded font-semibold text-gray-900 mb-3 sm:mb-4">
                {item.title}
              </h3>
              <AnimatedCounter target={item.stat} unit={item.unit} />
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition to Solution */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-[#2ECC71] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full">
            <span className="text-xl sm:text-2xl">💡</span>
            <span className="font-semibold text-base sm:text-lg">There's a better way...</span>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}