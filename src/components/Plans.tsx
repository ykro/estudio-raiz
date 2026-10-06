import React from 'react';
import { PLANS, WHATSAPP_PLANS_URL } from '../data';

export const Plans: React.FC = () => {
  return (
    <section id="planes" className="py-16 sm:py-24 border-t border-[#E7E2D8] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Left Column: Title */}
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#2B2A28]">
              Planes
            </h2>
          </div>

          {/* Right Column: Three Rows & Button */}
          <div className="lg:col-span-8">
            <div className="border-t border-[#E7E2D8]">
              {PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className="py-5 border-b border-[#E7E2D8] flex items-center justify-between gap-4"
                >
                  <div className="flex-1 pr-3">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="text-base sm:text-lg font-medium text-[#2B2A28]">
                        {plan.name}
                      </span>
                      {plan.tag && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#4F6F55]/15 text-[#2B4630]">
                          {plan.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-[#383633]">
                      {plan.description}
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap pl-2">
                    <span className="font-serif text-2xl font-normal text-[#2B2A28]">
                      {plan.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Single button at the end of the list */}
            <div className="mt-8">
              <a
                href={WHATSAPP_PLANS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#A8552F] hover:bg-[#924825] text-white text-base font-medium transition-all shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8552F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2]"
              >
                Pregunta por los planes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
