import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const PrivacyPolicy: React.FC = () => {
  const sections = [
    { id: 'data-collected', title: '1. What Personal Data We Collect' },
    { id: 'data-usage', title: '2. How Your Data is Used' },
    { id: 'data-sharing', title: '3. Data Sharing & Third Parties' },
    { id: 'cookies', title: '4. Cookies & Analytics' },
    { id: 'retention', title: '5. Data Retention & Security' },
    { id: 'user-rights', title: '6. Your Data Rights' },
    { id: 'no-sale', title: '7. No Sale of Data & Anti-Spam' },
    { id: 'children', title: '8. Children\'s Data' },
    { id: 'changes', title: '9. Changes to this Policy' },
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
                Privacy Policy
              </h1>
              <p className="text-xs font-sans tracking-[0.1em] text-[#888888] uppercase">
                Last updated: September 2026
              </p>
            </header>

            <div className="space-y-16 text-sm sm:text-base text-[#A1A1A1] font-light leading-[1.8]">
              <p className="text-lg text-[#F5F5F0] leading-relaxed">
                Charter Premium Pvt Ltd ("Charter Premium", "we", "our", or "us") is a specialized luxury real estate advisory and channel partner firm based in Mumbai, India. We do not sell properties directly; rather, we facilitate connections between discerning clients and premier developers of RERA-registered projects. This policy details our meticulous approach to safeguarding your personal information.
              </p>

              <section id="data-collected" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  1. What Personal Data We Collect
                </h2>
                <p className="mb-4">We collect information essential to delivering our curated advisory services, primarily when you interact with the charterpremium.in platform. This includes:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-[#C5A059]">
                  <li><strong>Identity & Contact Data:</strong> Name, phone number, and email address submitted via the Enquiry form, "Enquire" buttons, or direct WhatsApp/call interactions.</li>
                  <li><strong>Requirement Data:</strong> Details regarding your property preferences, investment budgets, desired corridors (e.g., Bandra, Juhu), and specific configurations (e.g., 3BHK, Penthouse).</li>
                  <li><strong>Communication Data:</strong> Records of inquiries, preferences expressed during consultations, and any newsletter subscriptions.</li>
                </ul>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="data-usage" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  2. How Your Data is Used
                </h2>
                <p className="mb-4">We utilize your information strictly to provide a seamless advisory experience. Specifically, your data is used for:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-[#C5A059]">
                  <li>Responding to your inquiries and scheduling private consultations.</li>
                  <li>Curating and matching your profile with relevant high-value property listings.</li>
                  <li>Facilitating introductions and sharing relevant leads with partner developers/builders for projects you have expressed interest in.</li>
                  <li>Follow-up communications via phone calls, WhatsApp, or email to assist with your property discovery journey.</li>
                  <li>Maintaining secure internal CRM records to ensure consistent and personalized service.</li>
                </ul>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="data-sharing" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  3. Data Sharing & Third Parties
                </h2>
                <p className="mb-4">To effectively execute our role as a channel partner, we may share your information under strict professional protocols:</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-[#C5A059]">
                  <li><strong>Partner Developers & Builders:</strong> When you express interest in a specific development, we share your details with the respective RERA-registered developer to facilitate site visits, pricing discussions, and transactions.</li>
                  <li><strong>Service Providers:</strong> We may share data with vetted third-party vendors who provide crucial infrastructure for our business, such as secure CRM platforms, hosting services, analytics tools, and email/SMS delivery systems.</li>
                </ul>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="cookies" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  4. Cookies & Analytics
                </h2>
                <p>
                  Our website utilizes cookies and analytics tools (such as Google Analytics) to monitor site performance and understand user behavior. These tools collect anonymized data such as your IP address, browser type, and interaction metrics. This helps us refine our digital experience. You retain the ability to disable non-essential cookies through your browser settings.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="retention" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  5. Data Retention & Security
                </h2>
                <p>
                  We implement robust, industry-standard security measures to protect your personal and financial information against unauthorized access, alteration, or disclosure. Data is retained only for as long as necessary to fulfill the advisory services requested, comply with legal obligations, and resolve any disputes.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="user-rights" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  6. Your Data Rights
                </h2>
                <p>
                  You possess full authority over your personal information. You have the right to request access to the data we hold, ask for corrections to inaccuracies, or request complete deletion of your records from our active systems. To exercise these rights or to opt-out of marketing communications, please contact us at <strong>info@charterpremium.in</strong>.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="no-sale" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  7. No Sale of Data & Anti-Spam
                </h2>
                <p>
                  Charter Premium operates strictly under non-disclosure protocols. We unequivocally guarantee that we do not sell, rent, or trade your personal information to unrelated third parties or mass-market networks. We maintain a strict anti-spam policy and ensure our communications are purposeful and relevant.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="children" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  8. Children's Data
                </h2>
                <p>
                  Our services cater exclusively to individuals capable of entering into legally binding real estate transactions. We do not knowingly collect or solicit personal information from anyone under the age of 18.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="changes" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  9. Changes to this Policy
                </h2>
                <p>
                  We may periodically update this Privacy Policy to reflect changes in our practices or regulatory requirements. Any modifications will be effective immediately upon posting to this page, as indicated by the "Last updated" date at the top of the document.
                </p>
              </section>

              <div className="h-[1px] w-16 bg-[#C5A059]/30" />

              <section id="contact" className="scroll-mt-32">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light tracking-wide mb-6">
                  10. Contact Us
                </h2>
                <p className="mb-4">For any inquiries regarding this Privacy Policy or our data practices, please reach out to us at:</p>
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

export default PrivacyPolicy;
