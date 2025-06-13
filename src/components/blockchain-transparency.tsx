"use client";

import { Search, Zap, Shield, Globe, Database } from "lucide-react";
import { useState, useEffect } from "react";
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

// Network nodes representing different parts of the blockchain
const networkNodes = [
  { id: 1, x: 15, y: 20, type: "validator", label: "Validator 1", status: "active" },
  { id: 2, x: 45, y: 15, type: "storage", label: "Storage Node", status: "active" },
  { id: 3, x: 75, y: 25, type: "validator", label: "Validator 2", status: "active" },
  { id: 4, x: 25, y: 50, type: "api", label: "API Gateway", status: "active" },
  { id: 5, x: 55, y: 45, type: "consensus", label: "Consensus", status: "processing" },
  { id: 6, x: 85, y: 55, type: "storage", label: "Backup Node", status: "active" },
  { id: 7, x: 35, y: 75, type: "validator", label: "Validator 3", status: "active" },
  { id: 8, x: 65, y: 80, type: "api", label: "Mobile API", status: "active" },
];

// Connections between nodes
const connections = [
  { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 1, to: 4 },
  { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 3, to: 6 },
  { from: 4, to: 7 }, { from: 7, to: 8 }, { from: 5, to: 8 },
  { from: 2, to: 5 }, { from: 6, to: 8 }, { from: 1, to: 7 }
];

export default function BlockchainTransparency() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBox, setSelectedBox] = useState(sampleBoxes[0]);
  const [activeConnections, setActiveConnections] = useState<number[]>([]);
  const [networkStats, setNetworkStats] = useState({
    tps: 23,
    nodes: 8,
    uptime: 99.9,
    blocks: 1247
  });

  const filteredBoxes = sampleBoxes.filter(box => 
    box.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Animate network activity
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly activate connections to show data flow
      const randomConnections = connections
        .map((_, index) => index)
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.floor(Math.random() * 4) + 2);
      
      setActiveConnections(randomConnections);
      
      // Update network stats
      setNetworkStats(prev => ({
        tps: prev.tps + Math.floor(Math.random() * 10) - 5,
        nodes: 8,
        uptime: 99.9,
        blocks: prev.blocks + Math.floor(Math.random() * 3)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getNodeColor = (type: string, status: string) => {
    if (status === "processing") return "#F59E0B"; // Yellow
    
    switch (type) {
      case "validator": return "#2ECC71"; // Green
      case "storage": return "#3B82F6"; // Blue
      case "api": return "#8B5CF6"; // Purple
      case "consensus": return "#EF4444"; // Red
      default: return "#6B7280"; // Gray
    }
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case "validator": return "✓";
      case "storage": return "💾";
      case "api": return "🔗";
      case "consensus": return "⚡";
      default: return "●";
    }
  };

  return (
    <section id="blockchain" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <Wrapper>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-unbounded font-bold text-gray-900 mb-4 sm:mb-6">
            Blockchain Transparency Network
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Every box is tracked on our decentralized blockchain network. Real-time verification with complete transparency and immutable records.
          </p>
        </div>

        <div className="grid lg:grid-cols-7 gap-6 lg:gap-8">
          {/* Enhanced Blockchain Visualization - 70% */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-unbounded font-bold text-gray-900">
                  Live Network Topology
                </h3>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#2ECC71] rounded-full animate-pulse"></div>
                    <span className="text-gray-600">Active: {networkStats.nodes} nodes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                    <span className="text-gray-600">{networkStats.tps} TPS</span>
                  </div>
                </div>
              </div>
              
              {/* Advanced Network Visualization */}
              <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-lg overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Network Connections */}
                <svg className="absolute inset-0 w-full h-full">
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2ECC71" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="activeConnection" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
                      <stop offset="50%" stopColor="#EF4444" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  
                  {connections.map((connection, index) => {
                    const fromNode = networkNodes.find(n => n.id === connection.from);
                    const toNode = networkNodes.find(n => n.id === connection.to);
                    const isActive = activeConnections.includes(index);
                    
                    if (!fromNode || !toNode) return null;
                    
                    return (
                      <g key={index}>
                        <line
                          x1={`${fromNode.x}%`}
                          y1={`${fromNode.y}%`}
                          x2={`${toNode.x}%`}
                          y2={`${toNode.y}%`}
                          stroke={isActive ? "url(#activeConnection)" : "url(#connectionGradient)"}
                          strokeWidth={isActive ? "3" : "2"}
                          className={isActive ? "animate-pulse" : ""}
                        />
                        
                        {/* Data Flow Animation */}
                        {isActive && (
                          <circle
                            r="3"
                            fill="#F59E0B"
                            className="animate-pulse"
                          >
                            <animateMotion
                              dur="2s"
                              repeatCount="indefinite"
                              path={`M ${fromNode.x * 4} ${fromNode.y * 3.84} L ${toNode.x * 4} ${toNode.y * 3.84}`}
                            />
                          </circle>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Network Nodes */}
                {networkNodes.map((node) => (
                  <div
                    key={node.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  >
                    {/* Node Circle */}
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg shadow-lg transition-all duration-300 group-hover:scale-110 ${
                        node.status === "processing" ? "animate-pulse" : ""
                      }`}
                      style={{ backgroundColor: getNodeColor(node.type, node.status) }}
                    >
                      {getNodeIcon(node.type)}
                    </div>
                    
                    {/* Node Label */}
                    <div className="absolute top-10 sm:top-12 lg:top-14 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {node.label}
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-white animate-ping"></div>
                  </div>
                ))}

                {/* Network Stats Overlay */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/60 backdrop-blur-sm text-white rounded-lg p-2 sm:p-3">
                  <div className="text-xs space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Network Status: Online</span>
                    </div>
                    <div>Blocks: {networkStats.blocks.toLocaleString()}</div>
                    <div>Uptime: {networkStats.uptime}%</div>
                  </div>
                </div>

                {/* Transaction Flow Indicator */}
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/60 backdrop-blur-sm text-white rounded-lg p-2 sm:p-3">
                  <div className="text-xs text-center">
                    <div className="text-base sm:text-lg font-bold text-green-400">{networkStats.tps}</div>
                    <div>Transactions/sec</div>
                  </div>
                </div>
              </div>

              {/* Network Legend */}
              <div className="mt-4 sm:mt-6 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#2ECC71] rounded-full"></div>
                  <span className="text-gray-600">Validators</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#3B82F6] rounded-full"></div>
                  <span className="text-gray-600">Storage Nodes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#8B5CF6] rounded-full"></div>
                  <span className="text-gray-600">API Gateways</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#EF4444] rounded-full"></div>
                  <span className="text-gray-600">Consensus</span>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="mt-4 sm:mt-6 bg-gray-50 rounded-lg p-3 sm:p-4">
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                  <Database className="w-3 h-3 sm:w-4 sm:h-4" />
                  Latest Blockchain Transactions
                </h4>
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex justify-between items-center text-xs sm:text-sm bg-white rounded p-2">
                    <span className="text-gray-600">Box #7K92 → Return Confirmed</span>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="text-[#2ECC71] font-mono text-xs">0x1a2b...7890</span>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm bg-white rounded p-2">
                    <span className="text-gray-600">Box #9M34 → Location Update</span>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="text-blue-500 font-mono text-xs">0x9876...cdef</span>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm bg-white rounded p-2">
                    <span className="text-gray-600">Box #5P78 → Reuse Cycle #4</span>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span className="text-purple-500 font-mono text-xs">0xabcd...4321</span>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Search Database - 30% */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl font-unbounded font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                Track Any Box
              </h3>
              
              {/* Search Input */}
              <div className="relative mb-4 sm:mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Enter Box ID (e.g., 7K92)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent transition-all text-sm sm:text-base"
                />
              </div>

              {/* Quick Search Suggestions */}
              <div className="mb-3 sm:mb-4">
                <div className="text-xs sm:text-sm text-gray-600 mb-2">Quick Search:</div>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {["7K92", "9M34", "5P78"].map((id) => (
                    <button
                      key={id}
                      onClick={() => setSearchTerm(id)}
                      className="px-2 sm:px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-xs sm:text-sm transition-colors"
                    >
                      #{id}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search Results */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {filteredBoxes.map((box) => (
                  <button
                    key={box.id}
                    onClick={() => setSelectedBox(box)}
                    className={`w-full text-left p-3 sm:p-4 rounded-lg border transition-all hover:shadow-md ${
                      selectedBox.id === box.id
                        ? 'border-[#2ECC71] bg-green-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <span className="font-semibold text-gray-900 text-sm sm:text-base">Box #{box.id}</span>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        box.status === 'Active' ? 'bg-green-100 text-green-700' :
                        box.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {box.status}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 flex justify-between">
                      <span>Reuse #{box.reuses}</span>
                      <span className="text-[#2ECC71] font-medium">{box.co2Saved} CO₂ saved</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Enhanced Box Details */}
              {selectedBox && (
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-3 sm:p-4 border">
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#2ECC71]" />
                    Box #{selectedBox.id} Blockchain Record
                  </h4>
                  
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                      <div>
                        <span className="text-gray-600">Delivered:</span>
                        <div className="font-medium">{selectedBox.delivered}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Returned:</span>
                        <div className="font-medium">{selectedBox.returned}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                      <div>
                        <span className="text-gray-600">Reuse Count:</span>
                        <div className="font-medium text-[#2ECC71]">#{selectedBox.reuses}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">CO₂ Impact:</span>
                        <div className="font-medium text-[#2ECC71]">{selectedBox.co2Saved}</div>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-gray-600">Current Location:</span>
                      <div className="font-medium flex items-center gap-1">
                        <Globe className="w-2 h-2 sm:w-3 sm:h-3" />
                        {selectedBox.currentLocation}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">Blockchain Hash:</div>
                    <div className="font-mono text-xs text-gray-700 break-all bg-white rounded p-2 border">
                      {selectedBox.hash}
                    </div>
                  </div>
                  
                  <div className="mt-2 sm:mt-3 flex items-center gap-2 text-xs text-green-700">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Verified on blockchain • Immutable record</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#2ECC71]" />
            </div>
            <div className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Immutable Records</div>
            <div className="text-xs sm:text-sm text-gray-600">Tamper-proof blockchain storage with cryptographic verification</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <div className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Real-time Updates</div>
            <div className="text-xs sm:text-sm text-gray-600">Instant verification with {networkStats.tps} transactions per second</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </div>
            <div className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Global Network</div>
            <div className="text-xs sm:text-sm text-gray-600">Decentralized tracking across {networkStats.nodes} validator nodes</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Database className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
            </div>
            <div className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Complete Transparency</div>
            <div className="text-xs sm:text-sm text-gray-600">Full audit trail with {networkStats.blocks.toLocaleString()}+ verified blocks</div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}