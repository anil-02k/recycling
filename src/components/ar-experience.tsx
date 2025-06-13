"use client";

import { Camera, Smartphone, QrCode, Play, Pause, RotateCcw } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Wrapper from "./wrapper";

export default function ARExperience() {
  const [isARActive, setIsARActive] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [wasteImpact, setWasteImpact] = useState({
    bottles: 0,
    co2: 0,
    trees: 0,
    boxes: 0
  });
  const [qrCodeData, setQrCodeData] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  // Generate QR code data URL
  useEffect(() => {
    const generateQRCode = async () => {
      try {
        // In a real implementation, you'd use a QR code library like 'qrcode'
        // For demo purposes, we'll create a simple data URL
        const qrData = `https://ecoloop.app/ar?user=${Math.random().toString(36).substr(2, 9)}`;
        
        // Create a simple QR code pattern (in production, use proper QR library)
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;
        
        if (ctx) {
          // Simple QR-like pattern
          ctx.fillStyle = '#000000';
          ctx.fillRect(0, 0, 200, 200);
          ctx.fillStyle = '#FFFFFF';
          
          // Create QR-like pattern
          for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
              if ((i + j) % 3 === 0 || (i * j) % 7 === 0) {
                ctx.fillRect(i * 10, j * 10, 10, 10);
              }
            }
          }
          
          // Add corner markers
          ctx.fillStyle = '#000000';
          ctx.fillRect(0, 0, 60, 60);
          ctx.fillRect(140, 0, 60, 60);
          ctx.fillRect(0, 140, 60, 60);
          
          ctx.fillStyle = '#FFFFFF';
          ctx.fillRect(10, 10, 40, 40);
          ctx.fillRect(150, 10, 40, 40);
          ctx.fillRect(10, 150, 40, 40);
          
          ctx.fillStyle = '#000000';
          ctx.fillRect(20, 20, 20, 20);
          ctx.fillRect(160, 20, 20, 20);
          ctx.fillRect(20, 160, 20, 20);
          
          setQrCodeData(canvas.toDataURL());
        }
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQRCode();
  }, []);

  // Start camera for AR scanning
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' } // Use back camera on mobile
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
      }
      
      setStream(mediaStream);
      setIsCameraActive(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
      // Fallback to simulation if camera access fails
      simulateARScan();
    }
  };

  // Stop camera
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    setIsCameraActive(false);
  };

  // Simulate AR scanning with realistic data
  const simulateARScan = () => {
    setIsARActive(true);
    setIsScanning(true);
    
    // Simulate scanning process
    setTimeout(() => {
      const userBoxes = Math.floor(Math.random() * 15) + 5; // 5-20 boxes
      setWasteImpact({
        boxes: userBoxes,
        bottles: userBoxes * 3 + Math.floor(Math.random() * 10), // ~3 bottles per box
        co2: ((userBoxes * 0.75) + Math.random()).toFixed(2),
        trees: Math.floor(userBoxes / 3) + 1
      });
      setIsScanning(false);
    }, 3000);
  };

  // Real AR scanning (simplified simulation)
  const performARScan = () => {
    if (!isCameraActive) {
      startCamera();
      return;
    }

    setIsScanning(true);
    
    // Simulate QR code detection and processing
    setTimeout(() => {
      const detectedBoxes = Math.floor(Math.random() * 20) + 10;
      setWasteImpact({
        boxes: detectedBoxes,
        bottles: detectedBoxes * 4 + Math.floor(Math.random() * 15),
        co2: ((detectedBoxes * 0.85) + Math.random() * 0.5).toFixed(2),
        trees: Math.floor(detectedBoxes / 2.5) + 2
      });
      setIsScanning(false);
      setIsARActive(true);
    }, 4000);
  };

  // Reset experience
  const resetExperience = () => {
    setIsARActive(false);
    setIsScanning(false);
    setWasteImpact({ bottles: 0, co2: 0, trees: 0, boxes: 0 });
    stopCamera();
  };

  return (
    <section id="ar-experience" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      <Wrapper>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-unbounded font-bold text-gray-900 mb-4 sm:mb-6">
            AR Waste Impact Visualizer
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Experience your environmental impact in augmented reality. Scan with your phone or use our interactive desktop experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* QR Code & Mobile Experience */}
          <div className="text-center order-2 lg:order-1">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl inline-block border border-gray-100">
              {/* Dynamic QR Code */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 bg-white rounded-lg flex flex-col items-center justify-center mb-4 sm:mb-6 border-2 border-gray-100 relative overflow-hidden mx-auto">
                {qrCodeData ? (
                  <img 
                    src={qrCodeData} 
                    alt="AR Experience QR Code" 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="animate-pulse">
                    <QrCode className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mb-4" />
                    <div className="text-gray-600 font-semibold text-sm sm:text-base">Generating QR...</div>
                  </div>
                )}
                
                {/* Scanning animation overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-[#2ECC71] font-semibold mb-3 sm:mb-4">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Scan with your phone camera</span>
              </div>
              
              <div className="text-xs sm:text-sm text-gray-500 max-w-xs mx-auto">
                Open your camera app and point at the QR code to launch the AR experience
              </div>
            </div>

            {/* Mobile AR Features */}
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-unbounded font-bold text-gray-900">
                Mobile AR Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-2xl sm:text-3xl mb-2">📱</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">3D Visualization</div>
                  <div className="text-gray-600">See waste reduction in 3D space around you</div>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-2xl sm:text-3xl mb-2">🌍</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Real-time Data</div>
                  <div className="text-gray-600">Live environmental impact metrics</div>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-2xl sm:text-3xl mb-2">📸</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Share Impact</div>
                  <div className="text-gray-600">Capture & share your sustainability story</div>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-2xl sm:text-3xl mb-2">🎯</div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Goal Tracking</div>
                  <div className="text-gray-600">Monitor progress and unlock achievements</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Desktop Experience */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 order-1 lg:order-2">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-unbounded font-bold text-gray-900">
                Desktop AR Experience
              </h3>
              {isCameraActive && (
                <button
                  onClick={stopCamera}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors text-sm sm:text-base"
                >
                  <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
                  Stop Camera
                </button>
              )}
            </div>
            
            {!isARActive && !isScanning ? (
              <div className="text-center">
                {/* Camera View or Placeholder */}
                <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-[#2ECC71] via-[#A8E6CF] to-[#3B82F6] rounded-lg flex items-center justify-center mb-4 sm:mb-6 relative overflow-hidden">
                  {isCameraActive ? (
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover rounded-lg"
                      autoPlay
                      playsInline
                      muted
                    />
                  ) : (
                    <div className="text-center text-white relative z-10 p-4">
                      <div className="text-4xl sm:text-5xl lg:text-6xl mb-4">🌍</div>
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Your Environmental Impact</h4>
                      <p className="text-sm sm:text-base lg:text-lg opacity-90 mb-4">Experience AR visualization</p>
                      <div className="flex gap-1 sm:gap-2 justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Floating AR Elements */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 animate-float">
                    <span className="text-lg sm:text-2xl">♻️</span>
                  </div>
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 animate-float" style={{ animationDelay: '1s' }}>
                    <span className="text-lg sm:text-2xl">🌱</span>
                  </div>
                  <div className="absolute top-1/2 right-4 sm:right-8 bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 animate-float" style={{ animationDelay: '2s' }}>
                    <span className="text-lg sm:text-2xl">💧</span>
                  </div>
                  
                  {/* AR Scanning Overlay */}
                  {isCameraActive && (
                    <div className="absolute inset-0 border-4 border-[#2ECC71] rounded-lg">
                      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-l-4 border-t-4 border-[#2ECC71]"></div>
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-r-4 border-t-4 border-[#2ECC71]"></div>
                      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-l-4 border-b-4 border-[#2ECC71]"></div>
                      <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-r-4 border-b-4 border-[#2ECC71]"></div>
                      
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white px-3 sm:px-4 py-2 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm font-semibold">Point camera at EcoLoop box</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <button
                    onClick={performARScan}
                    className="flex items-center gap-2 bg-[#2ECC71] hover:bg-[#27AE60] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-colors"
                  >
                    <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                    {isCameraActive ? 'Scan for Impact' : 'Start AR Camera'}
                  </button>
                  
                  <button
                    onClick={simulateARScan}
                    className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-colors"
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    Demo Mode
                  </button>
                </div>
              </div>
            ) : isScanning ? (
              <div className="text-center">
                <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-blue-100 via-purple-100 to-green-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-center relative z-10 p-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-[#2ECC71] border-t-transparent rounded-full animate-spin mx-auto mb-4 sm:mb-6"></div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Analyzing Your Impact...</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Processing environmental data</p>
                    
                    {/* Scanning Progress */}
                    <div className="w-48 sm:w-64 bg-gray-200 rounded-full h-1.5 sm:h-2 mx-auto">
                      <div className="bg-[#2ECC71] h-1.5 sm:h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  
                  {/* Scanning Animation */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2ECC71]/20 to-transparent transform -skew-x-12 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6">
                {/* Impact Results */}
                <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 rounded-lg p-4 sm:p-6 relative overflow-hidden">
                  <div className="grid grid-cols-2 gap-3 sm:gap-6 h-full">
                    {/* Left Column */}
                    <div className="space-y-2 sm:space-y-4">
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2">📦</div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#2ECC71]">{wasteImpact.boxes}</div>
                        <div className="text-xs sm:text-sm text-gray-600">Boxes Returned</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2">🍶</div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">{wasteImpact.bottles}</div>
                        <div className="text-xs sm:text-sm text-gray-600">Bottles Equivalent</div>
                      </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="space-y-2 sm:space-y-4">
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2">🌍</div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-600">{wasteImpact.co2}kg</div>
                        <div className="text-xs sm:text-sm text-gray-600">CO₂ Prevented</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 text-center">
                        <div className="text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2">🌳</div>
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600">{wasteImpact.trees}</div>
                        <div className="text-xs sm:text-sm text-gray-600">Trees Planted</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Celebration Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-[#2ECC71] rounded-full animate-ping"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${2 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Impact Summary */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 sm:p-6 border border-green-200">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#2ECC71] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm sm:text-base">🎉</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900">Outstanding Environmental Impact!</h4>
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                    Your {wasteImpact.boxes} returned EcoLoop boxes have prevented <strong>{wasteImpact.bottles} plastic bottles</strong> from reaching landfills and saved <strong>{wasteImpact.co2}kg of CO₂</strong> emissions!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button
                      onClick={resetExperience}
                      className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                    >
                      <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
                      Try Again
                    </button>
                    <button className="bg-[#2ECC71] hover:bg-[#27AE60] text-white px-4 sm:px-6 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                      Share Results
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Hidden canvas for QR processing */}
            <canvas ref={canvasRef} className="hidden" />
          </div>
        </div>

        {/* Enhanced AR Features Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <span className="text-xl sm:text-2xl">🥽</span>
            </div>
            <h3 className="text-lg sm:text-xl font-unbounded font-bold text-gray-900 mb-2">
              Immersive AR Visualization
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              See your environmental impact come to life in 3D augmented reality with real-time data overlays
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <span className="text-xl sm:text-2xl">📊</span>
            </div>
            <h3 className="text-lg sm:text-xl font-unbounded font-bold text-gray-900 mb-2">
              Live Impact Metrics
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Real-time calculations showing bottles saved, CO₂ reduced, and environmental benefits
            </p>
          </div>
          
          <div className="text-center group">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
              <span className="text-xl sm:text-2xl">🎯</span>
            </div>
            <h3 className="text-lg sm:text-xl font-unbounded font-bold text-gray-900 mb-2">
              Gamified Sustainability
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Unlock achievements, track milestones, and share your sustainability journey with friends
            </p>
          </div>
        </div>

        {/* Technical Implementation Note */}
        <div className="mt-8 sm:mt-12 bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm font-bold">ℹ️</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900">Technical Implementation</h4>
          </div>
          <p className="text-xs sm:text-sm text-gray-600">
            This AR experience uses WebRTC for camera access, Canvas API for QR code generation, and WebGL for 3D visualizations. 
            In production, it would integrate with AR.js, Three.js, and blockchain APIs for real-time impact tracking.
          </p>
        </div>
      </Wrapper>
    </section>
  );
}