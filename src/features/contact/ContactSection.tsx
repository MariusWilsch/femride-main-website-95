
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/**
 * Contact section with form
 */
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };

  return (
    <section className="py-20 bg-[#a3adf4] text-black" id="contact-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Interessiert an einer Zusammenarbeit mit FemRide?</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Sie sind Flottenunternehmer und möchten Ihre Fahrzeuge über FemRide einsetzen?<br />
            Sie sind Fahrerin und möchten Teil unserer Plattform werden?<br />
            Oder Sie möchten mit uns kooperieren, weil Sie unsere Vision teilen?<br />
            Dann kontaktieren Sie uns über das Formular – wir melden uns umgehend bei Ihnen!<br />
            Wir freuen uns darauf, gemeinsam Mobilität sicherer und fairer zu gestalten.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white/10 rounded-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <Label htmlFor="name" className="text-black mb-2 block">Name</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-black/20 text-black placeholder:text-black/50"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-black mb-2 block">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-black/20 text-black placeholder:text-black/50"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-black mb-2 block">Phone</Label>
                <Input 
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/5 border-black/20 text-black placeholder:text-black/50"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-black mb-2 block">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/5 border-black/20 text-black placeholder:text-black/50"
                />
              </div>

              <Button className="w-full bg-[#fa9de3] hover:bg-[#e989cc] text-black">
                Absenden
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
