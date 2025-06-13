"use client";

import { BarChart3, Heart, TrendingUp } from "lucide-react";
import { useState } from "react";
import Wrapper from "./wrapper";

const tabs = [
  {
    id: "cost-savings",
    title: "Cost Savings",
    icon: TrendingUp,
    content: {
      title: "70% lower packaging costs after 5 reuses",
      description: "Transform your packaging from expense to asset. EcoLoop boxes pay for themselves after just 3 uses.",
      metrics: [
        { label: "Cost per delivery", before: "₹45", after: "₹13" },
        { label: "Monthly savings", before: "₹0", after: "₹42,800" },
        { label: "ROI timeline", before: "Never", after: "3 months" }
      ]
    }
  },
  {
    id: "brand-loyalty",
    title: "Brand Loyalty",
    icon: Heart,
    content: {
      title: "89% of EcoLoop users prefer sustainable brands",
      description: "Build deeper customer relationships through shared environmental values. Sustainability drives loyalty.",
      metrics: [
        { label: "Customer retention", before: "67%", after: "89%" },
        { label: "Brand preference", before: "23%", after: "89%" },
        { label: "Word-of-mouth", before: "12%", after: "67%" }
      ]
    }
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: BarChart3,
    content: {
      title: "Track return rates by region/store",
      description: "Get detailed insights into packaging performance, customer behavior, and environmental impact.",
      metrics: [
        { label: "Return rate", before: "0%", after: "78%" },
        { label: "Data visibility", before: "None", after: "Real-time" },
        { label: "Optimization", before: "Manual", after: "AI-powered" }
      ]
    }
  }
];

export default function RetailerSolution() {
  const [activeTab, setActiveTab] = useState("cost-savings");
  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section id="retailer-solution" className="py-20 bg-gray-50">
      <Wrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-unbounded font-bold text-gray-900 mb-6">
            Retailer Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your packaging costs into competitive advantage. EcoLoop helps retailers reduce costs, increase loyalty, and meet sustainability goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Mockup */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-[#2ECC71] text-white p-6">
                <h3 className="text-2xl font-unbounded font-bold">EcoLoop Dashboard</h3>
                <p className="text-green-100">Real-time packaging analytics</p>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#2ECC71]">₹42,800</div>
                    <div className="text-sm text-gray-600">Monthly Savings</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">1,284</div>
                    <div className="text-sm text-gray-600">Returns Processed</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">5.2</div>
                    <div className="text-sm text-gray-600">CO₂ Reduced (tons)</div>
                  </div>
                </div>
                
                {/* Chart Placeholder */}
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold">Return Rate Trends</h4>
                    <span className="text-sm text-gray-500">Last 30 days</span>
                  </div>
                  <div className="h-32 bg-gradient-to-r from-[#2ECC71] to-[#A8E6CF] rounded opacity-20"></div>
                </div>
                
                {/* Recent Activity */}
                <div>
                  <h4 className="font-semibold mb-3">Recent Returns</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">Store #1247 - Mumbai</span>
                      <span className="text-sm text-[#2ECC71]">+23 boxes</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">Store #0892 - Delhi</span>
                      <span className="text-sm text-[#2ECC71]">+18 boxes</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">Store #1456 - Bangalore</span>
                      <span className="text-sm text-[#2ECC71]">+31 boxes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabbed Content */}
          <div className="order-1 lg:order-2">
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#2ECC71] text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTabData && (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-unbounded font-bold text-gray-900 mb-4">
                  {activeTabData.content.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {activeTabData.content.description}
                </p>
                
                {/* Metrics Comparison */}
                <div className="space-y-4">
                  {activeTabData.content.metrics.map((metric, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-semibold text-gray-700">{metric.label}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-red-500 line-through">{metric.before}</span>
                        <span className="text-[#2ECC71] font-bold">{metric.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-[#A8E6CF] rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Pro Tip:</strong> Retailers see average ROI within 3 months of implementing EcoLoop packaging solutions.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}