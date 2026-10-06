import React, { useState } from 'react';
import { FAQS } from '../data';

export const Faq: React.FC = () => {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <section id="preguntas" className="py-16 sm:py-24 border-t border-[#E7E2D8] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Left Column: Title */}
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#2B2A28]">
              Preguntas frecuentes
            </h2>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-[#E7E2D8]">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-[#E7E2D8]">
                    <button
                      type="button"
                      id={`faq-question-${index}`}
                      aria-controls={`faq-answer-${index}`}
                      aria-expanded={isOpen}
                      onClick={() => toggleItem(index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className="w-full min-h-[44px] py-4.5 flex items-center justify-between text-left gap-4 hover:text-[#4F6F55] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F6F55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] rounded-md cursor-pointer group"
                    >
                      <span className="text-base sm:text-lg font-medium text-[#2B2A28] group-hover:text-[#4F6F55] transition-colors pr-2">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 shrink-0 text-[#383633] group-hover:text-[#4F6F55] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        className="pb-5 pt-0 pr-6 text-base text-[#383633] leading-relaxed"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
