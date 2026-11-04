import React from 'react';
import { MapPin, Phone, Clock, Navigation, Calendar, MessageCircle, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  onBookClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBookClick }) => {
  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=G-56%2C+Pocket+G%2C+Sarita+Vihar%2C+New+Delhi%2C+Delhi+110076';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1769D2]">
            Location &amp; Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Visit Our Diagnostic Centre
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Conveniently located in Sarita Vihar, New Delhi. Accessible from South Delhi,
            Mathura Road, and surrounding National Capital Region neighbourhoods.
          </p>
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Information Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1769D2]">
                <MapPin className="w-4 h-4 text-[#1769D2]" />
                <span>Centre Address</span>
              </div>
              <div className="text-slate-900 font-semibold text-base leading-snug">
                Dr. Solanki’s Diagnostic Centre
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                G-56, Pocket G, Sarita Vihar, <br />
                New Delhi, Delhi 110076, India
              </p>
              <div className="pt-2">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769D2] hover:text-[#0B2855] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1769D2]">
                <Phone className="w-4 h-4 text-[#1769D2]" />
                <span>Telephone &amp; Appointments</span>
              </div>
              <div>
                <a
                  href="tel:+919654002800"
                  className="text-xl font-bold text-[#0B2855] hover:text-[#1769D2] transition-colors block"
                >
                  +91 9654002800
                </a>
                <p className="text-xs text-slate-500 mt-1">
                  Clickable tap-to-call for test scheduling &amp; report inquiries.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://wa.me/919654002800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
                <button
                  onClick={onBookClick}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-800 hover:bg-slate-200 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#1769D2]" />
                  <span>Request Slot</span>
                </button>
              </div>
            </div>

            {/* Working Timings Notice Card (Verbatim Instruction: Do not invent hours) */}
            <div className="bg-[#0B2855] text-white p-6 rounded-2xl shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#65D5E8]">
                <Clock className="w-4 h-4 text-[#F4C542]" />
                <span>Operating Timings</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed font-medium">
                Please call us to confirm current timings and appointment availability.
              </p>
              <div className="pt-2 text-xs text-slate-300">
                Contact: <span className="text-[#65D5E8] font-semibold">+91 9654002800</span>
              </div>
            </div>
          </div>

          {/* Embedded Map & Directions Container (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-md p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  Interactive Map &amp; Directions
                </h3>
                <span className="text-xs text-slate-500">
                  Sarita Vihar, Pocket G · Landmark in South Delhi
                </span>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1769D2] hover:bg-[#1354a8] text-white rounded-xl text-xs font-semibold shadow transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Embedded Google Maps iframe */}
            <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <iframe
                title="Dr. Solanki's Diagnostic Centre Location Map"
                src="https://maps.google.com/maps?q=G-56,%20Pocket%20G,%20Sarita%20Vihar,%20New%20Delhi,%20Delhi%20110076&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
              <span>Patients arriving by metro: Sarita Vihar Metro Station (Violet Line) is in close vicinity.</span>
              <a
                href="tel:+919654002800"
                className="font-medium text-[#1769D2] hover:underline"
              >
                Call for Landmark Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
