import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const TermsOfService: React.FC = () => {
  const sections = [
    { id: 'nature-of-service', title: '1. Nature of the Service' },
    { id: 'no-guarantee', title: '2. No Guarantees' },
    { id: 'accuracy', title: '3. Accuracy of Listings' },
    { id: 'user-responsibilities', title: '4. User Responsibilities' },
    { id: 'intellectual-property', title: '5. Intellectual Property' },
    { id: 'limitation-of-liability', title: '6. Limitation of Liability' },
    { id: 'brokerage', title: '7. Brokerage & Commission' },
    { id: 'governing-law', title: '8. Governing Law' },
    { id: 'changes', title: '9. Changes to Terms' },
    { id: 'contact', title: '10. Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F0] flex flex-col font-sans selection:bg-[#C5A059] selection:text-[#050505]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6 sm:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Desktop Table of Contents Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 relative">
            <div className="sticky top-32">
              <span className="block font-sans text-[10px] uppercase tracking-[0.25em] text-[#C5A059] mb-6">
                Table of Contents
              </span>
              <ul className="space-y-4 border-l border-white/10 pl-5">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-xs font-sans tracking-wide text-[#888888] hover:text-[#C5A059] transition-colors"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <article className="max-w-3xl w-full">
            <header className="mb-16 border-b border-white/10 pb-10">
              <span className="block font-sans text-[10px] uppercase tracking-[0.35em] text-[#C5A059] mb-4">
                Legal
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5F5F0] tracking-tight leading-tight mb-6">
                Terms of Service
              </h1>
              <p className="text-xs font-sans tracking-[0.1em] text-[#888888] uppercase">
                Last updated: September 2026
              </p>
            </header>

            <div className="space-y-16 text-sm sm:text-base text-[#A1A1A1] font-light leading-[1.8]">
              <p className="text-lg text-[#F5F5F0] leading-relaxed">
                By accessing and using charterpremium.in, you agree to be bound by the following terms and conditions. Please read them carefully before utilizing our real estate advisory services.
              </p>

              <section id="nature-of-service" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  1. Nature of the Service
                </h2>
                <p>
                  Charter Premium Pvt Ltd operates as a real estate advisory and channel partner firm in Mumbai, India. We do not own, develop, or directly sell any of the properties listed or showcased on our platform. Our primary service is to facilitate introductions, offer bespoke property discovery, and connect prospective clients with premier developers and builders.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="no-guarantee" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  2. No Guarantees
                </h2>
                <p>
                  While we strive to curate only the finest developments, Charter Premium provides no guarantees regarding property pricing, unit availability, possession timelines, or final outcomes of any transaction. All property acquisitions are strictly subject to the terms and conditions set forth by the respective developer/builder and the governing RERA registration.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="accuracy" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  3. Accuracy of Listings
                </h2>
                <p>
                  Information, renderings, and specifications showcased on charterpremium.in are sourced directly from developers and third parties. This information is illustrative and subject to change without prior notice. Users must independently verify all details, RERA registrations, legal approvals, and documentation with the developer before entering into any financial or legal commitment.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="user-responsibilities" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  4. User Responsibilities
                </h2>
                <p>
                  When submitting an enquiry, you agree to provide accurate and current contact information. You agree not to misuse the site, submit fraudulent requests, or attempt to compromise the security and functionality of the platform. Charter Premium reserves the right to refuse service or consultations at our discretion.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="intellectual-property" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  5. Intellectual Property
                </h2>
                <p>
                  All content on this website, including but not limited to the Charter Premium wordmark, logos, text, bespoke graphics, and structural layout, is the exclusive intellectual property of Charter Premium Pvt Ltd. Any unauthorized reproduction, distribution, or commercial use is strictly prohibited.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="limitation-of-liability" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  6. Limitation of Liability
                </h2>
                <p>
                  Charter Premium Pvt Ltd, its directors, and advisors shall not be held liable for any direct, indirect, incidental, or consequential damages, losses, or disputes arising from transactions, delays, or negotiations between the client and the developer/builder. Our role is strictly advisory and introductory.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="brokerage" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  7. Brokerage & Commission
                </h2>
                <p>
                  As an official channel partner for RERA-registered primary market projects, we typically do not charge brokerage or commission to the buyer. Any alternative arrangements or fees for secondary market transactions or exclusive bespoke mandates will be explicitly agreed upon in writing prior to proceeding.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="governing-law" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  8. Governing Law
                </h2>
                <p>
                  These Terms of Service, and any disputes arising out of or related to the use of our platform and services, shall be governed by and construed in accordance with the laws of India. Any legal proceedings shall fall under the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="changes" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  9. Changes to these Terms
                </h2>
                <p>
                  We reserve the right to update or modify these Terms of Service at any time. Continued use of the website following any changes indicates your acceptance of the new terms. The date of the most recent revision will be noted at the top of this page.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="contact" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  10. Contact Us
                </h2>
                <p className="mb-4">If you have any questions or require further clarification regarding these Terms of Service, please contact our team:</p>
                <div className="bg-[#080808] border border-white/10 p-6 rounded-sm">
                  <p className="font-serif text-lg text-[#F5F5F0] mb-2">Charter Premium Pvt Ltd</p>
                  <p className="text-sm font-sans tracking-wide">
                    <span className="text-[#888888]">Phone:</span> <a href="tel:+919136132563" className="text-[#C5A059] hover:text-[#F5F5F0] transition-colors">+91 9136132563</a><br />
                    <span className="text-[#888888]">Email:</span> <a href="mailto:info@charterpremium.in" className="text-[#C5A059] hover:text-[#F5F5F0] transition-colors">info@charterpremium.in</a>
                  </p>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
