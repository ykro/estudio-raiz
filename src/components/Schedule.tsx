import React, { useState, useRef } from 'react';
import { SCHEDULE_DAYS, getTodayDayId, getClassWhatsAppUrl, DAY_FULL_NAMES, DayId } from '../data';

export const Schedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<DayId>(() => getTodayDayId());
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const currentSchedule = SCHEDULE_DAYS.find((d) => d.id === selectedDay) || SCHEDULE_DAYS[0];

  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex = index;
    if (e.key === 'ArrowRight') {
      newIndex = (index + 1) % SCHEDULE_DAYS.length;
    } else if (e.key === 'ArrowLeft') {
      newIndex = (index - 1 + SCHEDULE_DAYS.length) % SCHEDULE_DAYS.length;
    } else if (e.key === 'Home') {
      newIndex = 0;
    } else if (e.key === 'End') {
      newIndex = SCHEDULE_DAYS.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextDay = SCHEDULE_DAYS[newIndex].id;
    setSelectedDay(nextDay);
    tabRefs.current[newIndex]?.focus();
  };

  return (
    <section id="horario" className="py-16 sm:py-24 border-t border-[#E7E2D8] scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Left Column: Title & Duration note */}
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#2B2A28]">
              Horario
            </h2>
            <p className="mt-3 text-base text-[#383633]">
              Todas las clases duran 60 minutos.
            </p>
          </div>

          {/* Right Column: Day Tabs & Schedule Rows */}
          <div className="lg:col-span-8">
            {/* Day Tabs with Arrow Key Navigation */}
            <div
              className="flex items-center gap-1.5 sm:gap-2 pb-4 border-b border-[#E7E2D8] overflow-x-auto no-scrollbar"
              role="tablist"
              aria-label="Días de la semana para el horario de clases"
            >
              {SCHEDULE_DAYS.map((day, idx) => {
                const isActive = day.id === selectedDay;
                return (
                  <button
                    key={day.id}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`tab-${day.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${day.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setSelectedDay(day.id)}
                    onKeyDown={(e) => handleTabKeyDown(e, idx)}
                    className={`min-h-[44px] min-w-[44px] px-4.5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F6F55] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] ${
                      isActive
                        ? 'bg-[#4F6F55] text-white shadow-xs'
                        : 'text-[#2B2A28] hover:bg-[#E7E2D8]/60'
                    }`}
                  >
                    {day.label}
                  </button>
                );
              })}
            </div>

            {/* Classes of the selected day */}
            <div
              id={`panel-${selectedDay}`}
              role="tabpanel"
              aria-labelledby={`tab-${selectedDay}`}
              className="mt-2 divide-y divide-[#E7E2D8]"
            >
              {currentSchedule.classes.map((c, index) => (
                <div
                  key={`${selectedDay}-${c.time}-${index}`}
                  className="py-4.5 flex items-center justify-between gap-3 transition-colors hover:bg-[#FAF7F2]/60"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 flex-1 min-w-0">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="w-14 sm:w-16 text-base font-semibold text-[#2B2A28] tabular-nums">
                        {c.time}
                      </span>
                      <span className="text-base text-[#2B2A28] font-medium">
                        {c.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#383633] pl-14 sm:pl-0 pt-0.5 sm:pt-0">
                      <span>{c.level}</span>
                      <span aria-hidden="true" className="text-[#383633]/60">·</span>
                      <span>{c.instructor}</span>
                    </div>
                  </div>

                  {/* Botón redondo con icono de mensaje para reservar esa clase (>= 44px) */}
                  <a
                    href={getClassWhatsAppUrl(selectedDay, c)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Reservar ${c.type} del ${DAY_FULL_NAMES[selectedDay]} a las ${c.time} por WhatsApp`}
                    title={`Reservar ${c.type} del ${DAY_FULL_NAMES[selectedDay]} a las ${c.time} por WhatsApp`}
                    className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#A8552F] hover:bg-[#924825] text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8552F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2]"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
