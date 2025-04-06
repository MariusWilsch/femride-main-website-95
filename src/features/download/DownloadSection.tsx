
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { AppWindow, Smartphone, Download } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Enhanced DownloadSection component with modern design elements
 * and improved visual hierarchy based on Refactoring UI principles
 */
const DownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-black text-white relative overflow-hidden" 
      id="download"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-10 w-64 h-64 bg-[#fa9de3]/10 rounded-full filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#a3adf4]/10 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with animation */}
        <div className={`text-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
            Download our app
          </h2>
          
          {/* Logo image added here */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/51623d51-1411-41ab-b413-558c8987b550.png" 
              alt="FemRide Logo" 
              className="h-32 w-auto" 
            />
          </div>
          
          <p className="text-lg text-gray-300 inline-block relative">
            Coming soon to Google Play & App Store
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#fa9de3] to-[#a3adf4] rounded-full transform scale-x-0 transition-transform duration-700 ease-out" style={{
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)'
            }}></span>
          </p>
        </div>

        {/* Main content container */}
        <div className={`flex flex-col md:flex-row justify-between items-center gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* QR Code - Left side */}
          <div className="md:w-1/2 flex flex-col items-center justify-center">
            <div className="bg-[#121827] p-8 rounded-3xl backdrop-blur-sm shadow-xl border border-gray-800/50 relative mb-6 max-w-md w-full">
              <h3 className="text-center text-2xl font-bold mb-4">Download our app</h3>
              <p className="text-gray-300 text-sm mb-6 text-center">
                Scan the QR code with your phone camera to download the FemRide app.
              </p>
              
              {/* Updated QR code display with phone mockup - better matching the provided image */}
              <div className="flex justify-center">
                <div className="bg-white rounded-[2rem] p-6 shadow-lg border-[12px] border-white w-72">
                  {/* Phone screen with QR code */}
                  <div className="bg-black rounded-[1.2rem] overflow-hidden">
                    <div className="p-5 text-center text-white">
                      <h4 className="text-sm font-bold mb-2">Download our apps</h4>
                      <p className="text-xs mb-3 opacity-70">Scan the QR code with your phone camera to download the FemRide app</p>
                      
                      {/* Phone inside phone effect */}
                      <div className="flex justify-center mb-4">
                        <div className="bg-[#121827] p-2 rounded-xl w-full">
                          <div className="bg-black rounded-lg p-2">
                            <h5 className="text-[10px] font-bold mb-1">Download our apps</h5>
                            
                            {/* QR code */}
                            <div className="flex justify-center mb-2">
                              <img
                                src="/lovable-uploads/5f6db923-679e-46c0-ba63-d8212e3d656c.png"
                                alt="FemRide App QR Code"
                                className="w-24 h-24"
                              />
                            </div>
                            
                            <p className="text-[8px] opacity-70">The fast, affordable way to ride.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <p className="text-xs font-bold">The fast, affordable way to ride.</p>
                        <p className="text-[10px] opacity-70">Available for iOS and Android devices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FemRide logo below phone mockup */}
              <div className="flex justify-center mt-8">
                <img 
                  src="/lovable-uploads/8171abea-59ac-4806-9009-ab16d31c6467.png" 
                  alt="FemRide Logo" 
                  className="h-14 w-auto" 
                />
              </div>
              
              {/* Simple Ride label matching the image */}
              <div className="flex justify-center mt-6">
                <div className="bg-black/50 rounded-full px-5 py-2 text-xs">
                  <span className="px-4 py-1">Rides</span>
                </div>
              </div>
            </div>
          </div>

          {/* App info - Right side */}
          <div className="md:w-1/2">
            {/* Content without tabs */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                The fast, affordable way to ride.
              </h3>

              <p className="text-xl text-gray-300">
                Available for iOS and Android devices.
              </p>

              {/* App Store buttons with enhanced styling */}
              <div className="flex flex-wrap gap-6 mt-10">
                <div className="relative group">
                  <Button 
                    className="bg-gray-800 hover:bg-gray-700 text-white rounded-3xl font-medium px-8 py-7 text-base group-hover:shadow-[0_0_25px_rgba(250,157,227,0.3)] transition-all duration-300 flex items-center gap-4 border border-gray-700 opacity-90 pointer-events-none"
                  >
                    <AppWindow size={24} />
                    <span className="flex flex-col items-start">
                      <span className="text-xs opacity-80">Download on the</span>
                      <span className="font-bold">App Store</span>
                    </span>
                  </Button>
                  <div className="absolute -top-2 -right-2 bg-[#fa9de3] text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Soon
                  </div>
                </div>
                
                <div className="relative group">
                  <Button 
                    className="bg-gray-800 hover:bg-gray-700 text-white rounded-3xl font-medium px-8 py-7 text-base group-hover:shadow-[0_0_25px_rgba(163,173,244,0.3)] transition-all duration-300 flex items-center gap-4 border border-gray-700 opacity-90 pointer-events-none"
                  >
                    <Smartphone size={24} />
                    <span className="flex flex-col items-start">
                      <span className="text-xs opacity-80">GET IT ON</span>
                      <span className="font-bold">Google Play</span>
                    </span>
                  </Button>
                  <div className="absolute -top-2 -right-2 bg-[#a3adf4] text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Soon
                  </div>
                </div>
              </div>
              
              {/* Optional feature callout */}
              <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-3xl p-4 border border-gray-800 flex items-center gap-3 max-w-md">
                <Download size={20} className="text-[#fa9de3]" />
                <p className="text-sm text-gray-300">
                  Get notified when our app is available for download
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
