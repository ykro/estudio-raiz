import React from 'react';
import { CONTACT_INFO, WHATSAPP_GENERAL_URL } from '../data';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-16 sm:py-24 border-t border-[#E7E2D8] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Left Column: Title */}
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#2B2A28]">
              Contacto
            </h2>
          </div>

          {/* Right Column: Two rows with icons & WhatsApp CTA */}
          <div className="lg:col-span-8">
            <div className="border-t border-[#E7E2D8]">
              {/* Row 1: Dirección */}
              <div className="py-5 border-b border-[#E7E2D8] flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#E7E2D8] flex items-center justify-center shrink-0 text-[#4F6F55]"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="text-base sm:text-lg text-[#2B2A28]">
                  {CONTACT_INFO.address}
                </div>
              </div>

              {/* Row 2: Horario */}
              <div className="py-5 border-b border-[#E7E2D8] flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full bg-[#FAF7F2] border border-[#E7E2D8] flex items-center justify-center shrink-0 text-[#4F6F55]"
                  aria-hidden="true"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="text-base sm:text-lg text-[#2B2A28]">
                  {CONTACT_INFO.hours}
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href={WHATSAPP_GENERAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#A8552F] hover:bg-[#924825] text-white text-base font-medium transition-all shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8552F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2]"
              >
                Reserva por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
