import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const TermsOfService: React.FC = () => {
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
          Terms of Service
        </h1>
        <div className="space-y-8 text-sm sm:text-base text-[#A1A1A1] font-light leading-relaxed">
          <p>Welcome to Charter Premium. By accessing or using our proprietary platform and advisory services, you agree to comply with the following institutional standards.</p>
          
          <h2 className="font-display text-lg text-[#F5F5F0] tracking-[0.1em] mt-8 mb-4">1. Advisory Scope</h2>
          <p>Charter Premium acts exclusively as an independent real estate advisory firm. While we rigorously vet all properties, final transactional diligence remains the prerogative of the purchasing party's legal counsel.</p>
          
          <h2 className="font-display text-lg text-[#F5F5F0] tracking-[0.1em] mt-8 mb-4">2. Client Qualifications</h2>
          <p>We curate off-market and ultra-luxury assets. Access to specific sealed portfolios may require preliminary verification of financial standing or institutional alignment to maintain discretion.</p>
          
          <h2 className="font-display text-lg text-[#F5F5F0] tracking-[0.1em] mt-8 mb-4">3. Intellectual Property</h2>
          <p>All imagery, copy, architectural renderings, and branding displayed on this platform are the exclusive intellectual property of Charter Premium or our licensed partners. Unauthorized reproduction is prohibited.</p>
          
          <h2 className="font-display text-lg text-[#F5F5F0] tracking-[0.1em] mt-8 mb-4">4. Limitation of Liability</h2>
          <p>Charter Premium provides property information in good faith. We are not liable for incidental or consequential damages arising from market fluctuations, regulatory changes, or third-party actions during a transaction.</p>
        </div>
      </div>
    </div>
  );
};
export default TermsOfService;
