
import React from 'react';
import { Navbar } from '../shared/Navbar';
import { Footer } from '../shared/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">Last updated: April 05, 2025</p>
        
        <div className="prose max-w-none">
          <p>
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          
          <p>
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with this Privacy Policy in general or any part of it, you should not access the Websites, the App or use our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Interpretation and Definitions</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Interpretation</h3>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Definitions</h3>
          <p>For the purposes of this Privacy Policy:</p>
          
          <p><strong>Account</strong> means the account that each User must apply for to use the Femride App to access our Services.</p>
          
          <p><strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named Femride App</p>
          
          {/* More content would be added here - truncated for brevity */}
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          
          <p>Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to the Data Processing Officer on info@femride.de.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
