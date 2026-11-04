import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ServicePrepModal } from './components/ServicePrepModal';
import { DoctorsSection } from './components/DoctorsSection';
import { AppointmentCtaBanner } from './components/AppointmentCtaBanner';
import { EnquiryFormSection } from './components/EnquiryFormSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ServicePrepGuide } from './utils/appointment';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('whole-body-ultrasound');
  const [activePrepGuide, setActivePrepGuide] = useState<ServicePrepGuide | null>(null);

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    scrollToAppointment();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] text-slate-800 pb-16 sm:pb-0">
      {/* Top Announcement Bar */}
      <TopBar />

      {/* Sticky Navigation Bar */}
      <Navbar onBookClick={scrollToAppointment} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={scrollToAppointment}
          onExploreServices={scrollToServices}
        />

        {/* 4 Trust Highlights Strip */}
        <TrustStrip />

        {/* About Diagnostic Centre Section */}
        <AboutSection />

        {/* Services Showcase Section */}
        <ServicesSection
          onOpenPrepModal={(guide) => setActivePrepGuide(guide)}
          onBookService={handleBookService}
        />

        {/* Doctors Section */}
        <DoctorsSection onBookClick={scrollToAppointment} />

        {/* Direct Call / Diagnostic Enquiry CTA Banner */}
        <AppointmentCtaBanner onBookClick={scrollToAppointment} />

        {/* Interactive Appointment Enquiry Form Section */}
        <EnquiryFormSection
          selectedServiceId={selectedServiceId}
          onSelectServiceId={(id) => setSelectedServiceId(id)}
        />

        {/* Contact & Location Section with Map */}
        <ContactSection onBookClick={scrollToAppointment} />
      </main>

      {/* Comprehensive Footer */}
      <Footer onSelectService={handleBookService} />

      {/* Floating Action Buttons (WhatsApp & Call) */}
      <FloatingActions />

      {/* Test Preparation Modal */}
      <ServicePrepModal
        guide={activePrepGuide}
        onClose={() => setActivePrepGuide(null)}
        onSelectForEnquiry={handleBookService}
      />
    </div>
  );
}
