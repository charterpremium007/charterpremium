import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F0] font-sans pt-20 pb-20 px-6 sm:px-12 selection:bg-[#C5A059] selection:text-[#050505]">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#C5A059] hover:text-[#d6b26d] transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </a>
        <span className="block font-sans text-xs uppercase tracking-[0.35em] text-[#C5A059] mb-4">
          LEGAL
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F5F0] tracking-tight leading-tight mb-12">
          Privacy Policy
        </h1>
        <div className="space-y-8 text-sm sm:text-base text-[#A1A1A1] font-light leading-relaxed">
          <p>At Charter Premium, absolute discretion is our fundamental principle. This Privacy Policy details the meticulous care we apply to your personal and financial information.</p>
          
          <h2 className="font-display text-lg text-[#F5F5F0] tracking-[0.1em] mt-8 mb-4">1. Information Collection</h2>
          <p>We collect only the essential details required to provide high-end real estate advisory services, including contact information and specific property preferences securely submitted through our encrypted channels.</p>
          
          <h2 className="font-display text-lg text-[#F5F5F0] tracking-[0.1em] mt-8 mb-4">2. Non-Disclosure Commitment</h2>
          <p>Charter Premium operates strictly under non-disclosure protocols. We do not sell, distribute, or share our client lists, inquiry details, or transactional records with unauthorized third parties or mass-market networks.</p>
          
          <h2 className="font-display text-lg text-[#F5F5F0] tracking-[0.1em] mt-8 mb-4">3. Data Security</h2>
          <p>All client communications and data are protected using state-of-the-art security measures. Only senior advisors handling your specific portfolio mandate have access to your personal details.</p>
          
          <h2 className="font-display text-lg text-[#F5F5F0] tracking-[0.1em] mt-8 mb-4">4. Cookie Policy</h2>
          <p>Our website utilizes minimal functional cookies to enhance browsing experience and maintain security. You have full control to manage these preferences.</p>
        </div>
      </div>
    </div>
  );
};
export default PrivacyPolicy;
