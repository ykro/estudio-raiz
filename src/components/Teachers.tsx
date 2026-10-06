import React from 'react';
import { TEACHERS } from '../data';

export const Teachers: React.FC = () => {
  return (
    <section id="quien-ensena" className="py-16 sm:py-24 border-t border-[#E7E2D8] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Left Column: Title */}
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#2B2A28]">
              Quién enseña
            </h2>
          </div>

          {/* Right Column: Space for team photo & three rows */}
          <div className="lg:col-span-8">
            {/* Foto del equipo */}
            <div className="w-full overflow-hidden rounded-2xl">
              <img
                src="/images/equipo.jpg"
                alt="Equipo de profesoras y profesores de Estudio Raíz, de izquierda a derecha: Sofía, Lucía y Diego"
                width={1200}
                height={896}
                loading="lazy"
                className="w-full h-auto object-cover rounded-2xl shadow-sm border border-[#E7E2D8]"
              />
            </div>

            {/* Three rows with name, specialty, and bio */}
            <div className="mt-8 border-t border-[#E7E2D8]">
              {TEACHERS.map((teacher) => (
                <div
                  key={teacher.name}
                  className="py-5 border-b border-[#E7E2D8] flex flex-col gap-1.5"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-base sm:text-lg font-medium text-[#2B2A28]">
                      {teacher.name}
                    </span>
                    <span className="text-sm font-semibold text-[#2E4D35]">
                      {teacher.specialty}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#383633] leading-relaxed">
                    {teacher.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
