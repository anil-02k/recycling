"use client";

import { CheckCircle, Shield, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import Wrapper from "./wrapper";

export default function CTASection() {
  const [consumerForm, setConsumerForm] = useState({
    name: "",
    email: "",
    phone: "",
    notifications: false
  });

  const [retailerForm, setRetailerForm] = useState({
    company: "",
    contact: "",
    shipments: ""
  });

  const [activeForm, setActiveForm] = useState<"consumer" | "retailer">("consumer");
  const [submitted, setSubmitted] = useState(false);

  const handleConsumerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consumer signup:", consumerForm);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleRetailerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Retailer signup:", retailerForm);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (submitted) {
    return (
      <section id="cta" className="py-12 sm:py-16 lg:py-20 eco-gradient">
        <Wrapper>
          <div className="text-center text-white">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#2ECC71]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-unbounded font-bold mb-3 sm:mb-4">
              Welcome to the Revolution! 🎉
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
              You're now part of the EcoLoop community. We'll be in touch soon with early access details.
            </p>
            <div className="bg-white/20 rounded-lg p-3 sm:p-4 max-w-md mx-auto">
              <p className="text-xs sm:text-sm">
                Check your email for next steps and exclusive updates.
              </p>
            </div>
          </div>
        </Wrapper>
      </section>
    );
  }

  return (
    <section id="cta" className="py-12 sm:py-16 lg:py-20 eco-gradient">
      <Wrapper>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-unbounded font-bold text-white mb-4 sm:mb-6">
            Join the Packaging Revolution
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4 sm:px-0">
            Be among the first to experience doorstep packaging returns. Transform waste into rewards while saving the planet.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Form Type Toggle */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="bg-white/20 rounded-full p-1 flex">
              <button
                onClick={() => setActiveForm("consumer")}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all text-sm sm:text-base ${
                  activeForm === "consumer"
                    ? "bg-white text-[#0F2E1B]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                I'm a Consumer
              </button>
              <button
                onClick={() => setActiveForm("retailer")}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all text-sm sm:text-base ${
                  activeForm === "retailer"
                    ? "bg-white text-[#0F2E1B]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                I'm a Retailer
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Form */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl order-2 lg:order-1">
              {activeForm === "consumer" ? (
                <form onSubmit={handleConsumerSubmit} className="space-y-4 sm:space-y-6">
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-unbounded font-bold text-gray-900 mb-2">
                      Get Early Access
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Start earning rewards for returning packaging
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={consumerForm.name}
                      onChange={(e) => setConsumerForm({...consumerForm, name: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent text-sm sm:text-base"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={consumerForm.email}
                      onChange={(e) => setConsumerForm({...consumerForm, email: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={consumerForm.phone}
                      onChange={(e) => setConsumerForm({...consumerForm, phone: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent text-sm sm:text-base"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <input
                      type="checkbox"
                      id="notifications"
                      checked={consumerForm.notifications}
                      onChange={(e) => setConsumerForm({...consumerForm, notifications: e.target.checked})}
                      className="w-4 h-4 text-[#2ECC71] border-gray-300 rounded focus:ring-[#2ECC71] mt-0.5"
                    />
                    <label htmlFor="notifications" className="text-xs sm:text-sm text-gray-600">
                      Notify me about local drop points and special offers
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-[#2ECC71] hover:bg-[#27AE60] text-white py-3 sm:py-4 text-base sm:text-lg font-semibold">
                    Join Early Access →
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleRetailerSubmit} className="space-y-4 sm:space-y-6">
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-unbounded font-bold text-gray-900 mb-2">
                      Request Demo
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      See how EcoLoop can transform your packaging costs
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={retailerForm.company}
                      onChange={(e) => setRetailerForm({...retailerForm, company: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent text-sm sm:text-base"
                      placeholder="Your Company Ltd."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={retailerForm.contact}
                      onChange={(e) => setRetailerForm({...retailerForm, contact: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent text-sm sm:text-base"
                      placeholder="business@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Monthly Shipments *
                    </label>
                    <select
                      required
                      value={retailerForm.shipments}
                      onChange={(e) => setRetailerForm({...retailerForm, shipments: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent text-sm sm:text-base"
                    >
                      <option value="">Select volume</option>
                      <option value="<1000">Less than 1,000</option>
                      <option value="1000-5000">1,000 - 5,000</option>
                      <option value="5000-10000">5,000 - 10,000</option>
                      <option value="10000+">10,000+</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full bg-[#2ECC71] hover:bg-[#27AE60] text-white py-3 sm:py-4 text-base sm:text-lg font-semibold">
                    Request Demo →
                  </Button>
                </form>
              )}
            </div>

            {/* Trust Elements */}
            <div className="text-white space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-unbounded font-bold mb-4 sm:mb-6">
                  Why Join EcoLoop?
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-base sm:text-lg">🚀</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">Early Access Benefits</h4>
                      <p className="text-white/80 text-xs sm:text-sm">Be first to earn rewards and shape the platform</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-base sm:text-lg">💰</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">Instant Rewards</h4>
                      <p className="text-white/80 text-xs sm:text-sm">Earn points redeemable at 500+ partner stores</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-base sm:text-lg">🌍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-sm sm:text-base">Environmental Impact</h4>
                      <p className="text-white/80 text-xs sm:text-sm">Track your personal contribution to sustainability</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="font-semibold text-sm sm:text-base">Secure & Trusted</span>
                </div>
                
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>256-bit Encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>No Spam Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold text-sm sm:text-base">500+ early adopters already joined</span>
                </div>
                <p className="text-white/60 text-xs sm:text-sm">
                  Join the movement towards sustainable packaging
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}