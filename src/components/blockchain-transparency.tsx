"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import Wrapper from "./wrapper";

const sampleBoxes = [
  {
    id: "7K92",
    status: "Active",
    delivered: "12 Jun 2025",
    returned: "14 Jun 2025",
    reuses: 6,
    currentLocation: "Mumbai Warehouse",
    co2Saved: "0.45kg",
    hash: "0x1a2b3c4d5e6f7890abcdef1234567890"
  },
  {
    id: "9M34",
    status: "In Transit",
    delivered: "15 Jun 2025",
    returned: "Pending",
    reuses: 12,
    currentLocation: "Delhi Hub",
    co2Saved: "0.89kg",
    hash: "0x9876543210fedcba0987654321abcdef"
  },
  {
    id: "5P78",
    status: "Returned",
    delivered: "10 Jun 2025",
    returned: "13 Jun 2025",
    reuses: 3,
    currentLocation: "Bangalore Center",
    co2Saved: "0.23kg",
    hash: "0xabcdef1234567890fedcba0987654321"
  }
];

export default function BlockchainTransparency() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBox, setSelectedBox] = useState(sampleBoxes[0]);

  const filteredBoxes = sampleBoxes.filter(box => 
    box.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="blockchain" className="py-20 bg-gray-50">
      <Wrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-unbounded font-bold text-gray-900 mb-6">
            Blockchain Transparency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every box is tracked on an immutable blockchain. Verify the complete lifecycle of any EcoLoop package in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-7 gap-8">
          {/* Blockchain Visualization - 70% */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-unbounded font-bold text-gray-900 mb-6">
                Live Blockchain Network
              </h3>
              
              {/* Animated Blockchain Visualization */}
              <div className="relative h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 overflow-hidden">
                {/* Blockchain Nodes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-8">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-all duration-1000 ${
                          i % 3 === 0 ? 'bg-[#2ECC71] animate-pulse' : 
                          i % 3 === 1 ? 'bg-blue-500' : 'bg-purple-500'
                        }`}
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2ECC71" />
                      <stop offset="100%" stopColor="#3498DB" />
                    </linearGradient>
                  </defs>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={i}
                      x1={`${20 + (i * 15)}%`}
                      y1="30%"
                      x2={`${35 + (i * 15)}%`}
                      y2="70%"
                      stroke="url(#lineGradient)"
                      strokeWidth="2"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
                </svg>

                {/* Floating Transaction Indicators */}
                <div className="absolute top-4 right-4 bg-[#2ECC71] text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                  Live: 23 TPS
                </div>
                
                <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Network: 99.9% Uptime
                </div>
              </div>

              {/* Transaction Details */}
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Latest Transactions</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Box #7K92 → Returned</span>
                    <span className="text-[#2ECC71] font-mono">0x1a2b...7890</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Box #9M34 → In Transit</span>
                    <span className="text-blue-500 font-mono">0x9876...cdef</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Box #5P78 → Delivered</span>
                    <span className="text-purple-500 font-mono">0xabcd...4321</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Database - 30% */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-unbounded font-bold text-gray-900 mb-4">
                Track a Box
              </h3>
              
              {/* Search Input */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter Box ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent"
                />
              </div>

              {/* Search Results */}
              <div className="space-y-3">
                {filteredBoxes.map((box) => (
                  <button
                    key={box.id}
                    onClick={() => setSelectedBox(box)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      selectedBox.id === box.id
                        ? 'border-[#2ECC71] bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-900">Box #{box.id}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        box.status === 'Active' ? 'bg-green-100 text-green-700' :
                        box.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {box.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Reuse #{box.reuses} • {box.co2Saved} CO₂ saved
                    </div>
                  </button>
                ))}
              </div>

              {/* Selected Box Details */}
              {selectedBox && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Box #{selectedBox.id} Details</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivered:</span>
                      <span className="font-medium">{selectedBox.delivered}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Returned:</span>
                      <span className="font-medium">{selectedBox.returned}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Use:</span>
                      <span className="font-medium">#{selectedBox.reuses}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{selectedBox.currentLocation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">CO₂ Saved:</span>
                      <span className="font-medium text-[#2ECC71]">{selectedBox.co2Saved}</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="text-xs text-gray-500">Blockchain Hash:</div>
                    <div className="font-mono text-xs text-gray-700 break-all">
                      {selectedBox.hash}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl mb-2">🔒</div>
            <div className="font-semibold text-gray-900">Immutable Records</div>
            <div className="text-sm text-gray-600">Tamper-proof tracking</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl mb-2">⚡</div>
            <div className="font-semibold text-gray-900">Real-time Updates</div>
            <div className="text-sm text-gray-600">Instant verification</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl mb-2">🌐</div>
            <div className="font-semibold text-gray-900">Global Network</div>
            <div className="text-sm text-gray-600">Decentralized tracking</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl mb-2">📊</div>
            <div className="font-semibold text-gray-900">Full Transparency</div>
            <div className="text-sm text-gray-600">Complete audit trail</div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}