
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/LanguageContext";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create a mailto link to send the subscription request
      const subject = encodeURIComponent(`${t('newsletterSubscriptionRequest')}`);
      const body = encodeURIComponent(`${t('newsletterEmailBody').replace('{email}', email)}`);
      const mailtoLink = `mailto:info@femride.de?subject=${subject}&body=${body}`;
      
      // Open the email client
      window.open(mailtoLink, '_blank');
      
      // Show success toast
      toast({
        title: t('newsletterSuccessTitle'),
        description: t('newsletterSuccessDesc'),
      });
      
      // Clear the form
      setEmail("");
    } catch (error) {
      console.error('Error submitting newsletter form:', error);
      toast({
        title: t('newsletterErrorTitle'),
        description: t('newsletterErrorDesc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-[#fa9de3]/10 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#fa9de3]/10 filter blur-[60px] animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#a3adf4]/10 filter blur-[70px] animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#fa9de3]/20 mb-6">
            <Mail className="w-8 h-8 text-[#fa9de3]" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#222]">
            {t('newsletterTitle')}
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            {t('newsletterDescription')}
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletterEmailPlaceholder')}
              required
              className="flex-grow h-12 rounded-3xl border-[#fa9de3]/30 focus:border-[#fa9de3] focus:ring-[#fa9de3]/20"
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="h-12 bg-[#fa9de3] hover:bg-[#e989cc] text-black font-medium rounded-3xl shadow-md transition-all duration-300 hover:shadow-lg relative overflow-hidden group"
            >
              <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-20"></span>
              <span className="relative flex items-center justify-center gap-2">
                {isSubmitting ? t('newsletterSubmitting') : t('newsletterSubmitButton')}
                <Send size={18} className={`transition-transform ${isSubmitting ? 'translate-x-2' : ''}`} />
              </span>
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 mt-6">
            {t('newsletterDisclaimer')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
