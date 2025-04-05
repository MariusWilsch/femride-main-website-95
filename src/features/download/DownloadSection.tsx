
import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * DownloadSection component for app download with QR code
 */
const DownloadSection = () => {
  const [activeTab, setActiveTab] = useState<'rides' | 'delivery'>('rides');

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Download our apps</h2>
          <p className="text-lg text-gray-300">
            Scan the QR code with your phone camera to download the FemRide app.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* QR Code */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/lovable-uploads/5f6db923-679e-46c0-ba63-d8212e3d656c.png"
              alt="FemRide App QR Code"
              className="w-64 h-64 md:w-80 md:h-80"
            />
          </div>

          {/* App info */}
          <div className="md:w-1/2">
            {/* Tabs */}
            <div className="flex border-b border-gray-700 mb-6">
              <button
                className={`py-2 px-6 font-medium ${activeTab === 'rides' ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}
                onClick={() => setActiveTab('rides')}
              >
                Rides
              </button>
              <button
                className={`py-2 px-6 font-medium ${activeTab === 'delivery' ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}
                onClick={() => setActiveTab('delivery')}
              >
                Delivery
              </button>
            </div>

            {/* Content */}
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {activeTab === 'rides' ? 'The fast, affordable way to ride.' : 'Quick delivery at your doorstep.'}
            </h3>

            <p className="text-lg text-gray-300 mb-8">
              Available for iOS and Android devices.
            </p>

            {/* App Store buttons */}
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white hover:bg-gray-100 text-black rounded-md font-medium px-6 py-5 text-base">
                App Store
              </Button>
              <Button className="bg-white hover:bg-gray-100 text-black rounded-md font-medium px-6 py-5 text-base">
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
