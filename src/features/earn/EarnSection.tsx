
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * EarnSection component highlighting different ways to earn money with FemRide
 * Updated with translations and consistent styling
 */
const EarnSection = () => {
  const { t } = useLanguage();
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header with animation */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#e908b0] font-medium tracking-wide uppercase text-base relative inline-block mb-3">
            EARN WITH FEMRIDE
            <span className="absolute -bottom-1 left-0 w-10 h-1 bg-[#e908b0]"></span>
          </p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Earn money with FemRide</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            Join over 4.5 million partners worldwide that earn with FemRide. For drivers,
            couriers, merchants, and fleet owners looking for new ways to boost
            revenue.
          </p>
        </div>

        {/* Driver Opportunity with animation */}
        <div className={`flex flex-col md:flex-row gap-8 mb-20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Driver behind the wheel of a car" 
              className="rounded-xl w-full h-auto object-cover aspect-video"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-gray-600 mb-2">Earn money as a FemRide driver</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Drive and earn money</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our 200+ million riders will send you plenty of ride requests.
              When demand is high, you can earn even more.
            </p>
            <div>
              <Button className="bg-[#e908b0] hover:bg-[#d007a0] text-white rounded-md px-6 py-5">
                {t('driverRegisterButton')}
              </Button>
            </div>
          </div>
        </div>

        {/* Courier Opportunity with animation */}
        <div className={`flex flex-col md:flex-row-reverse gap-8 mb-20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Courier with FemRide Food delivery bag" 
              className="rounded-xl w-full h-auto object-cover aspect-video"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-gray-600 mb-2">Become a FemRide courier partner</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Earn with every delivery</h3>
            <p className="text-lg text-gray-700 mb-6">
              You decide when and how often you deliver — weekdays,
              evenings, weekends, or just the occasional hour — it's up to
              you.
            </p>
            <div>
              <Button className="bg-[#e908b0] hover:bg-[#d007a0] text-white rounded-md px-6 py-5">
                Register as a courier
              </Button>
            </div>
          </div>
        </div>

        {/* Merchant Opportunity with animation */}
        <div className={`flex flex-col md:flex-row gap-8 mb-20 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Merchant holding a phone with FemRide Food app" 
              className="rounded-xl w-full h-auto object-cover aspect-video"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-gray-600 mb-2">Increase earnings as merchant</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Increase your sales and reach new customers</h3>
            <p className="text-lg text-gray-700 mb-6">
              Millions of our users are ordering food or goods from
              restaurants and stores just like yours.
            </p>
            <div>
              <Button className="bg-[#e908b0] hover:bg-[#d007a0] text-white rounded-md px-6 py-5">
                Register with FemRide Food
              </Button>
            </div>
          </div>
        </div>

        {/* Fleet Owner Opportunity with animation */}
        <div className={`flex flex-col md:flex-row-reverse gap-8 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Woman driver in a FemRide vehicle" 
              className="rounded-xl w-full h-auto object-cover aspect-video"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-gray-600 mb-2">Join FemRide with your fleet and earn more</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Grow your transport business</h3>
            <p className="text-lg text-gray-700 mb-6">
              As a fleet owner and FemRide partner, you can manage your
              assets from one easy-to-use dashboard and grow your
              transport business.
            </p>
            <div>
              <Button className="bg-[#e908b0] hover:bg-[#d007a0] text-white rounded-md px-6 py-5">
                {t('fleetPartnerRegisterButton')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnSection;
