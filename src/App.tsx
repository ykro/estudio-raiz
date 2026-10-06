import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Schedule } from './components/Schedule';
import { Plans } from './components/Plans';
import { Teachers } from './components/Teachers';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B2A28] font-sans antialiased overflow-x-hidden">
      {/* 1. Encabezado fijo */}
      <Header />

      <main>
        {/* 2. Portada */}
        <Hero />

        {/* 3. Horario */}
        <Schedule />

        {/* 4. Planes */}
        <Plans />

        {/* 5. Quién enseña */}
        <Teachers />

        {/* 6. Preguntas frecuentes */}
        <Faq />

        {/* 7. Contacto */}
        <Contact />
      </main>

      {/* 8. Pie de página */}
      <Footer />
    </div>
  );
}
