import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Our Doctors', href: '#doctors' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark & Diagnostic Symbol */}
          <a
            href="#home"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus:ring-2 focus:ring-[#1769D2] rounded-lg p-1"
            aria-label="Dr. Solanki's Diagnostic Centre Home"
          >
            {/* Custom Medical Cross & Diagnostic Precision Symbol */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0B2855] to-[#1769D2] flex items-center justify-center text-white shadow-md shadow-[#0B2855]/15 transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-current fill-none stroke-[2.2]"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Clean medical cross with diagnostic focus rings */}
                <path d="M12 4v16M4 12h16" />
                <circle cx="12" cy="12" r="3" className="stroke-[#65D5E8] stroke-[1.8]" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-950 text-lg sm:text-xl tracking-tight leading-tight">
                Dr. Solanki’s
              </span>
              <span className="text-xs font-semibold text-[#1769D2] tracking-wider uppercase">
                Diagnostic Centre
              </span>
            </div>
          </a>

          {/* Zone 2: Single-line Text Nav Links */}
          <nav
            className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-2 text-slate-700 hover:text-[#1769D2] transition-colors whitespace-nowrap shrink-0 group font-medium"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1769D2] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="tel:+919654002800"
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-[#1769D2] bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
              aria-label="Call Centre"
            >
              <Phone className="w-3.5 h-3.5 text-[#1769D2]" />
              <span>+91 9654002800</span>
            </a>

            <button
              onClick={onBookClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0B2855] hover:bg-[#1769D2] active:bg-[#071936] rounded-lg shadow-sm transition-all duration-200 hover:shadow-md whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#65D5E8]" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1769D2] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-base font-medium text-slate-700 hover:text-[#1769D2] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="tel:+919654002800"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-[#1769D2]" />
              <span>Call: +91 9654002800</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-white bg-[#0B2855] hover:bg-[#1769D2] rounded-lg transition-colors"
            >
              <Calendar className="w-4 h-4 text-[#65D5E8]" />
              <span>Book an Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
