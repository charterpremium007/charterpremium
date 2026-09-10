import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "Do you entertain mass-market residential requirements?",
    answer: "No. Charter Premium strictly curates high-value, ultra-luxury assets and acts as confidential counselors to high-net-worth families and institutional leaders."
  },
  {
    question: "How do you handle off-market properties?",
    answer: "We facilitate unlisted off-market transactions with sealed confidentiality agreements. Absolute privacy is maintained across every representation."
  },
  {
    question: "What makes your curation process different?",
    answer: "We decline approximately 80% of properties reviewed. Only residences possessing architectural eminence, clear title, and enduring capital value enter our curated portfolio."
  },
  {
    question: "Is there a consultation fee?",
    answer: "Initial private discussions are complimentary. Upon formalizing a mandate for acquisition or portfolio management, our advisory structure is transparently detailed in advance."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 sm:py-32 bg-[#050505] border-t border-white/10" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="block font-sans text-xs uppercase tracking-[0.35em] text-[#C5A059] mb-4">
            ADVISORY INSIGHTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F5F5F0] tracking-tight">
            Common Inquiries
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-[#080808] border border-white/10 overflow-hidden transition-colors hover:border-[#C5A059]/30">
              <button
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-serif text-lg sm:text-xl text-[#F5F5F0] pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 sm:px-8 pb-8">
                  <p className="font-sans text-sm sm:text-base text-[#888888] font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQSection;
