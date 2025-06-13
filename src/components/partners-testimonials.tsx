"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import Wrapper from "./wrapper";

const partners = [
  { name: "IKEA", logo: "🏠" },
  { name: "Amazon", logo: "📦" },
  { name: "FedEx", logo: "🚚" },
  { name: "Patagonia", logo: "🏔️" },
  { name: "Unilever", logo: "🧴" },
  { name: "Zara", logo: "👕" }
];

const testimonials = [
  {
    id: 1,
    quote: "EcoLoop cut our packaging costs by 40% in 3 months. Our customers love the sustainability aspect, and we're seeing increased loyalty.",
    name: "Priya Sharma",
    title: "COO @GreenCart",
    avatar: "👩‍💼",
    rating: 5,
    metric: "40% cost reduction"
  },
  {
    id: 2,
    quote: "I earned ₹500 in Starbucks coupons just by returning boxes! It's so convenient - I just hand them to the next delivery driver.",
    name: "Rahul Mehta",
    title: "EcoLoop User",
    avatar: "👨‍💻",
    rating: 5,
    metric: "₹500 earned"
  },
  {
    id: 3,
    quote: "The analytics dashboard gives us incredible insights. We can track return rates by region and optimize our packaging strategy.",
    name: "Sarah Chen",
    title: "Sustainability Director @TechCorp",
    avatar: "👩‍🔬",
    rating: 5,
    metric: "78% return rate"
  },
  {
    id: 4,
    quote: "Our customers are 3x more likely to choose us over competitors because of our EcoLoop partnership. Sustainability sells.",
    name: "Michael Rodriguez",
    title: "CEO @EcoFashion",
    avatar: "👨‍💼",
    rating: 5,
    metric: "3x preference rate"
  }
];

export default function PartnersTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <Wrapper>
        {/* Partners Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-unbounded font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Join hundreds of forward-thinking companies already using EcoLoop to reduce costs and environmental impact.
          </p>
          
          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 hover:scale-110 transition-transform duration-300"
              >
                <div className="text-4xl mb-2">{partner.logo}</div>
                <span className="text-sm font-semibold text-gray-600">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-unbounded font-bold text-gray-900 mb-4">
              What Our Users Say
            </h3>
            <p className="text-gray-600">Real stories from real users making a real impact</p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="text-4xl">{testimonials[currentTestimonial].avatar}</div>
                <div className="text-center md:text-left">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].title}
                  </div>
                </div>
                <div className="bg-[#2ECC71] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {testimonials[currentTestimonial].metric}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-[#2ECC71] scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Social Proof Numbers */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-unbounded font-bold text-[#2ECC71]">500+</div>
            <div className="text-gray-600">Early Adopters</div>
          </div>
          <div>
            <div className="text-3xl font-unbounded font-bold text-[#2ECC71]">50k+</div>
            <div className="text-gray-600">Boxes Returned</div>
          </div>
          <div>
            <div className="text-3xl font-unbounded font-bold text-[#2ECC71]">₹2.5M</div>
            <div className="text-gray-600">Rewards Distributed</div>
          </div>
          <div>
            <div className="text-3xl font-unbounded font-bold text-[#2ECC71]">15 tons</div>
            <div className="text-gray-600">CO₂ Prevented</div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}