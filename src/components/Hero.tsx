import React from 'react';
import { WHATSAPP_GENERAL_URL } from '../data';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[88vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image: full width, full height */}
      <img
        src="/images/portada.jpg"
        alt="Sala de práctica de yoga en Estudio Raíz con esterillas y luz natural"
        width={1376}
        height={768}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Capa oscura suave encima para legibilidad perfecta */}
      <div
        className="absolute inset-0 bg-black/45 bg-gradient-to-t from-black/60 via-black/40 to-black/35"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 pt-28 pb-16 sm:py-36 text-center flex flex-col items-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.12] drop-shadow-md max-w-3xl">
          Tu práctica empieza aquí
        </h1>
        <p className="mt-5 sm:mt-6 text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed font-normal max-w-xl drop-shadow-sm">
          Clases de yoga para todos los niveles, a cinco minutos de tu casa.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          <a
            href={WHATSAPP_GENERAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full bg-[#A8552F] hover:bg-[#924825] text-white text-base font-medium transition-all shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Reserva por WhatsApp
          </a>
          <a
            href="#horario"
            className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-4 rounded-lg text-base font-medium text-white hover:text-white/85 transition-colors underline underline-offset-4 decoration-white/60 hover:decoration-white drop-shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Ver horario
          </a>
        </div>
      </div>
    </section>
  );
};

