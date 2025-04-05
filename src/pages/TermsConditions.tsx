
import React from 'react';
import Navbar from '../shared/Navbar';
import { Footer } from '../shared/Footer';

const TermsConditions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-gray-600 mb-4">Last updated: April 05, 2025</p>
        
        <div className="prose max-w-none">
          <p>
            Please read these terms and conditions carefully before using Our Service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Interpretation and Definitions</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. 
            The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Definitions</h3>
          <p>For the purposes of these Terms and Conditions:</p>
          
          <ul className="list-disc pl-6 mt-2 mb-4">
            <li><strong>Application</strong> means the software program provided by the Company.</li>
            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Bolt.</li>
            <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
            <li><strong>Service</strong> refers to the Application or the Website or both.</li>
            <li><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
            <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Acknowledgment</h2>
          
          <p>
            These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. 
            These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
          </p>
          
          <p>
            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. 
            These Terms and Conditions apply to all visitors, users and others who access or use the Service.
          </p>
          
          <p>
            By accessing or using the Service You agree to be bound by these Terms and Conditions. 
            If You disagree with any part of these Terms and Conditions then You may not access the Service.
          </p>
          
          {/* More content would be added here - truncated for brevity */}
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          
          <p>
            If you have any questions about these Terms and Conditions, You can contact us at:
          </p>
          
          <p>info@bolt.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
