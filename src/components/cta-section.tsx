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
      <section id="cta" className="py-20 eco-gradient">
        <Wrapper>
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[#2ECC71]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-unbounded font-bold mb-4">
              Welcome to the Revolution! 🎉
            </h2>
            <p className="text-xl mb-6">
              You're now part of the EcoLoop community. We'll be in touch soon with early access details.
            </p>
            <div className="bg-white/20 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm">
                Check your email for next steps and exclusive updates.
              </p>
            </div>
          </div>
        </Wrapper>
      </section>
    );
  }

  return (
    <section id="cta" className="py-20 eco-gradient">
      <Wrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-unbounded font-bold text-white mb-6">
            Join the Packaging Revolution
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Be among the first to experience doorstep packaging returns. Transform waste into rewards while saving the planet.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Form Type Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 rounded-full p-1 flex">
              <button
                onClick={() => setActiveForm("consumer")}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeForm === "consumer"
                    ? "bg-white text-[#0F2E1B]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                I'm a Consumer
              </button>
              <button
                onClick={() => setActiveForm("retailer")}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeForm === "retailer"
                    ? "bg-white text-[#0F2E1B]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                I'm a Retailer
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {activeForm === "consumer" ? (
                <form onSubmit={handleConsumerSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-unbounded font-bold text-gray-900 mb-2">
                      Get Early Access
                    </h3>
                    <p className="text-gray-600">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="notifications"
                      checked={consumerForm.notifications}
                      onChange={(e) => setConsumerForm({...consumerForm, notifications: e.target.checked})}
                      className="w-4 h-4 text-[#2ECC71] border-gray-300 rounded focus:ring-[#2ECC71]"
                    />
                    <label htmlFor="notifications" className="ml-2 text-sm text-gray-600">
                      Notify me about local drop points and special offers
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-[#2ECC71] hover:bg-[#27AE60] text-white py-4 text-lg font-semibold">
                    Join Early Access →
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleRetailerSubmit} className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-unbounded font-bold text-gray-900 mb-2">
                      Request Demo
                    </h3>
                    <p className="text-gray-600">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
                    >
                      <option value="">Select volume</option>
                      <option value="<1000">Less than 1,000</option>
                      <option value="1000-5000">1,000 - 5,000</option>
                      <option value="5000-10000">5,000 - 10,000</option>
                      <option value="10000+">10,000+</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full bg-[#2ECC71] hover:bg-[#27AE60] text-white py-4 text-lg font-semibold">
                    Request Demo →
                  </Button>
                </form>
              )}
            </div>

            {/* Trust Elements */}
            <div className="text-white space-y-8">
              <div>
                <h3 className="text-2xl font-unbounded font-bold mb-6">
                  Why Join EcoLoop?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg">🚀</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Early Access Benefits</h4>
                      <p className="text-white/80">Be first to earn rewards and shape the platform</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg">💰</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Instant Rewards</h4>
                      <p className="text-white/80">Earn points redeemable at 500+ partner stores</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg">🌍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Environmental Impact</h4>
                      <p className="text-white/80">Track your personal contribution to sustainability</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Shield className="w-6 h-6" />
                  <span className="font-semibold">Secure & Trusted</span>
                </div>
                
                <div className="space-y-2 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>256-bit Encryption</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>No Spam Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">500+ early adopters already joined</span>
                </div>
                <p className="text-white/60 text-sm">
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