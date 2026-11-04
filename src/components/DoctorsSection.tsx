import React from 'react';
import { Award, Stethoscope, FileCheck, Phone } from 'lucide-react';

interface DoctorsSectionProps {
  onBookClick: () => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onBookClick }) => {
  const doctors = [
    {
      name: 'Dr. Priyanka Rana',
      degrees: 'MBBS, MD (Radiodiagnosis)',
      title: 'Senior Consultant Radiologist',
      department: 'Radiology & Imaging Department',
      specializations: [
        'Whole Body Ultrasound & Organ Evaluation',
        'Obstetric & Gynaecological (OBGY) Ultrasound',
        'Volumetric 3D, 4D and 5D Fetal Scans',
        'Arterial & Venous Color Doppler Studies',
        'Digital Radiography & Skeletal Reporting'
      ],
      image: '/src/assets/images/doctor_radiologist_portrait_1793778326115.jpg',
      badgeColor: 'text-[#1769D2]'
    },
    {
      name: 'Dr. Vikrant Solanki',
      degrees: 'MBBS, MD (Pathology)',
      title: 'Senior Consultant Pathologist',
      department: 'Pathology & Laboratory Medicine',
      specializations: [
        'Hematology & Routine Blood Investigations',
        'Clinical Biochemistry & Metabolic Panels',
        'Cytopathology & Microscopic Evaluation',
        'Infectious Disease Serology & Antigen Testing',
        'Quality-Controlled Laboratory Analysis'
      ],
      image: '/src/assets/images/doctor_pathologist_portrait_1793778326632.jpg',
      badgeColor: 'text-[#0B2855]'
    }
  ];

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-[#F5F8FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1769D2]">
            Clinical Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Meet Our Expert Consultants
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every diagnostic scan and laboratory test at Dr. Solanki’s Diagnostic Centre is
            evaluated with meticulous clinical scrutiny by experienced, MD-qualified specialists.
          </p>
        </div>

        {/* Doctors Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Doctor Portrait Header */}
                <div className="relative h-72 sm:h-80 bg-slate-100 overflow-hidden">
                  <img
                    src={doc.image}
                    alt={`Portrait of ${doc.name}, ${doc.title}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Doctor Card Label in Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#65D5E8]">
                      {doc.department}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {doc.name}
                    </h3>
                    <p className="text-sm font-medium text-slate-200">
                      {doc.degrees}
                    </p>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#0B2855]">
                    <Stethoscope className="w-4 h-4 text-[#1769D2]" />
                    <span>{doc.title}</span>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#F4C542]" />
                      <span>Clinical Focus &amp; Investigations</span>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                      {doc.specializations.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1769D2] mt-2 shrink-0" />
                          <span className="leading-relaxed">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Consultation Assistance Bottom Action */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <FileCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Official Centre Credentials</span>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={onBookClick}
                    className="flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold text-white bg-[#0B2855] hover:bg-[#1769D2] rounded-lg transition-colors cursor-pointer"
                  >
                    Request Consultation
                  </button>
                  <a
                    href="tel:+919654002800"
                    className="p-2 text-slate-700 hover:text-[#1769D2] bg-white border border-slate-200 rounded-lg transition-colors"
                    aria-label={`Call for ${doc.name}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Representative Image Notice as requested by instructions */}
        <div className="mt-8 text-center text-xs text-slate-500 max-w-xl mx-auto">
          Note: Photographs are representative consultant portraits for visual orientation.
          All academic degrees and diagnostic specializations represent verified credentials of Dr. Solanki's Diagnostic Centre.
        </div>
      </div>
    </section>
  );
};
