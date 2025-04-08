
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const scrollToContactForm = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#a3adf4] font-medium tracking-wide uppercase relative inline-block mb-3">
            {t('servicesSectionHeader')}
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#a3adf4]"></span>
          </p>
          <h2 className="text-5xl font-bold text-[#222] mb-8">{t('servicesSectionTitle')}</h2>
          <div className="w-24 h-1 bg-[#a3adf4] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('servicesSectionSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* For passengers - Service 1 */}
          <div className="rounded-3xl overflow-hidden shadow-lg bg-white transition-transform hover:scale-105 hover:shadow-xl overflow-hidden h-full flex flex-col">
            <div className="relative h-80">
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />
              <img 
                src="/lovable-uploads/3c627c80-9dc0-48f6-8f95-e730dcba1952.png" 
                alt="Women passengers in car" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 top-8 z-20 text-center">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide drop-shadow-lg">
                  {t('forPassengers')}
                </h3>
              </div>
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-20 text-center px-6">
                <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                  {t('bookYourRide')}
                </h3>
                <p className="text-white text-opacity-90 drop-shadow-md">
                  {t('forPassengersDesc')}
                </p>
              </div>
            </div>
            <div className="p-6 bg-white flex-grow flex flex-col justify-end">
              <Button
                className="w-full bg-[#fa9de3] hover:bg-[#e989cc] text-black font-medium text-lg py-6 rounded-full"
                onClick={scrollToContactForm}
              >
                {t('bookNowButton')}
              </Button>
            </div>
          </div>

          {/* For drivers - Service 2 */}
          <div className="rounded-3xl overflow-hidden shadow-lg bg-white transition-transform hover:scale-105 hover:shadow-xl overflow-hidden h-full flex flex-col">
            <div className="relative h-80">
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />
              <img 
                src="/lovable-uploads/bacae506-bc7c-4d1a-b902-ca7cbbab49fa.png" 
                alt="Woman driver" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 top-8 z-20 text-center">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide drop-shadow-lg">
                  {t('forFemaleDrivers')}
                </h3>
              </div>
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-20 text-center px-6">
                <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                  {t('becomeADriver')}
                </h3>
                <p className="text-white text-opacity-90 drop-shadow-md">
                  {t('forDriversDesc')}
                </p>
              </div>
            </div>
            <div className="p-6 bg-white flex-grow flex flex-col justify-end">
              <Button 
                className="w-full bg-[#fa9de3] hover:bg-[#e989cc] text-black font-medium text-lg py-6 rounded-full"
                onClick={scrollToContactForm}
              >
                {t('becomeDriverButton')}
              </Button>
            </div>
          </div>

          {/* For businesses - Service 3 */}
          <div className="rounded-3xl overflow-hidden shadow-lg bg-white transition-transform hover:scale-105 hover:shadow-xl overflow-hidden h-full flex flex-col">
            <div className="relative h-80">
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />
              <img 
                src="/lovable-uploads/eef63163-3e4d-4654-b851-413d3b3afaff.png" 
                alt="Business woman with tablet" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 top-8 z-20 text-center">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide drop-shadow-lg">
                  {t('forBusinesses')}
                </h3>
              </div>
              <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-20 text-center px-6">
                <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                  {t('becomeAFleetPartner')}
                </h3>
                <p className="text-white text-opacity-90 drop-shadow-md">
                  {t('forBusinessesDesc')}
                </p>
              </div>
            </div>
            <div className="p-6 bg-white flex-grow flex flex-col justify-end">
              <Button 
                className="w-full bg-[#fa9de3] hover:bg-[#e989cc] text-black font-medium text-lg py-6 rounded-full"
                onClick={scrollToContactForm}
              >
                {t('becomeFleetButton')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
