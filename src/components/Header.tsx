import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS, WHATSAPP_GENERAL_URL } from '../data';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Monitor scroll to switch between transparent and cream background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key and manage focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Move focus to close button when drawer opens
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#E7E2D8] shadow-xs'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className={`flex items-center gap-2.5 min-h-[44px] rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F6F55] focus-visible:ring-offset-2 transition-opacity hover:opacity-85 ${
              isScrolled
                ? 'text-[#2B2A28] focus-visible:ring-offset-[#FAF7F2]'
                : 'text-white drop-shadow-sm focus-visible:ring-white focus-visible:ring-offset-transparent'
            }`}
            aria-label="Estudio Raíz - Inicio"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isScrolled ? 'text-[#4F6F55]' : 'text-white'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path d="M2 21c0-3 1.85-5.36 5.08-6" />
            </svg>
            <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight">
              Estudio Raíz
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Navegación principal"
            className={`hidden lg:flex items-center gap-6 text-[15px] font-normal ${
              isScrolled
                ? 'text-[#2B2A28]'
                : 'text-white drop-shadow-sm'
            }`}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F6F55] focus-visible:ring-offset-2 transition-colors ${
                  isScrolled
                    ? 'text-[#2B2A28] hover:text-[#4F6F55] focus-visible:ring-offset-[#FAF7F2]'
                    : 'text-white hover:text-white/85 focus-visible:ring-white focus-visible:ring-offset-transparent'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href={WHATSAPP_GENERAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#A8552F] hover:bg-[#924825] text-white text-sm font-medium transition-all shadow-sm active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8552F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2]"
            >
              Reserva por WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menú de navegación"
            className={`lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 ${
              isScrolled
                ? 'text-[#2B2A28] hover:text-[#4F6F55] focus-visible:ring-[#4F6F55]'
                : 'text-white drop-shadow-sm hover:text-white/80 focus-visible:ring-white'
            }`}
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity lg:hidden"
          onClick={() => {
            setMobileMenuOpen(false);
            menuButtonRef.current?.focus();
          }}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FAF7F2] z-50 p-6 flex flex-col justify-between shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú principal"
      >
        <div>
          {/* Top bar with close button */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E7E2D8]">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#4F6F55]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6" />
              </svg>
              <span className="font-serif text-lg font-normal text-[#2B2A28]">
                Estudio Raíz
              </span>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                menuButtonRef.current?.focus();
              }}
              aria-label="Cerrar menú de navegación"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 text-[#2B2A28] hover:text-[#4F6F55] rounded-full hover:bg-[#E7E2D8]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F6F55] transition-colors"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav aria-label="Enlaces del menú móvil" className="flex flex-col gap-2 mt-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="min-h-[44px] flex items-center text-lg font-normal text-[#2B2A28] hover:text-[#4F6F55] px-2 py-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F6F55] transition-colors border-b border-[#E7E2D8]/60"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom CTA in mobile drawer */}
        <div className="pt-6 border-t border-[#E7E2D8]">
          <a
            href={WHATSAPP_GENERAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="w-full min-h-[44px] flex items-center justify-center px-6 py-3.5 rounded-full bg-[#A8552F] hover:bg-[#924825] text-white text-base font-medium transition-colors text-center shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8552F] focus-visible:ring-offset-2"
          >
            Reserva por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

