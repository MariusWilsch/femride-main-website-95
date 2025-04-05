
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/**
 * Testimonial section with the CEO's statement
 */
const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* CEO Image */}
          <div className="md:w-1/3 flex flex-col items-center">
            <Avatar className="h-48 w-48 mb-4">
              <AvatarImage src="/lovable-uploads/8e5d08d8-b576-4634-8488-9612bbf71c3a.png" alt="Aykut Atli" />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <p className="text-xl font-bold">Founder & CEO</p>
            <p className="text-lg">Aykut Atli</p>
          </div>
          
          {/* CEO Testimonial */}
          <div className="md:w-2/3">
            <p className="text-lg mb-6">
              Sicherheit und Chancengleichheit stehen für uns an erster Stelle. Mit FemRide haben wir es uns zur Aufgabe gemacht, 
              die Straßen sicherer und freier für alle Frauen zu gestalten. Dafür setzen wir auf starke Partnerschaften mit Unternehmen, 
              NGOs und Behörden, die unsere Vision teilen. Denn echte Veränderung entsteht nur gemeinsam – für eine Zukunft, 
              in der Frauen sich überall frei und unbesorgt bewegen können.
            </p>
            <p className="text-lg">
              Als Mann setze ich mich bewusst für diese Mission ein, denn jeder von uns hat eine Frau in seinem Leben – sei es 
              eine Mutter, Schwester, Tochter, Partnerin oder Freundin – für die es sich lohnt, eine sicherere und gerechtere 
              Welt zu schaffen. Doch darüber hinaus geht es nicht nur um Einzelpersonen, sondern um die gesellschaftliche 
              Verantwortung, die wir alle tragen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
