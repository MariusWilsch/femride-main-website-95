
import Navbar from "@/features/navigation/Navbar";
import HeroSection from "@/features/hero/HeroSection";

/**
 * Main landing page of the application
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Index;
