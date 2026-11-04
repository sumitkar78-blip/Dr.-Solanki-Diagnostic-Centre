/**
 * Core appointment enquiry, phone validation, and patient preparation utilities.
 * Pure logic decoupled from React rendering for fast unit testing.
 */

export interface AppointmentEnquiry {
  patientName: string;
  phoneNumber: string;
  serviceId: string;
  preferredDate?: string;
  notes?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'radiology' | 'cardiac' | 'pathology';
  description: string;
  clinicalNote: string;
  iconName: string;
  preparationTip: string;
}

export interface ServicePrepGuide {
  serviceId: string;
  title: string;
  fastingRequired: boolean;
  waterRequirement: string;
  prescriptionRequired: boolean;
  guidelines: string[];
}

export const CLINICAL_SERVICES: ServiceItem[] = [
  {
    id: 'whole-body-ultrasound',
    title: 'Whole Body Ultrasound',
    category: 'radiology',
    description: 'Ultrasound imaging for assessment of organs and structures as advised by your doctor.',
    clinicalNote: 'High-frequency acoustic waves producing non-invasive, radiation-free cross-sectional anatomical images.',
    iconName: 'ScanLine',
    preparationTip: 'Abdominal ultrasound requires 6-8 hours fasting. Full bladder needed for pelvic evaluation.'
  },
  {
    id: 'obgy-ultrasound',
    title: 'OBGY Ultrasound',
    category: 'radiology',
    description: 'Obstetric and gynaecological ultrasound examinations for women’s health.',
    clinicalNote: 'Specialized maternal-fetal assessments, follicular studies, and uterine-ovarian structural evaluation.',
    iconName: 'HeartPulse',
    preparationTip: 'Drink 4-5 glasses of water 1 hour prior to scan for adequate bladder acoustic window.'
  },
  {
    id: '3d-4d-5d-scans',
    title: '3D, 4D and 5D Scans',
    category: 'radiology',
    description: 'Advanced volumetric ultrasound imaging, subject to clinical indication.',
    clinicalNote: 'High-definition real-time surface rendering and multiplanar anatomical depth assessment.',
    iconName: 'Box',
    preparationTip: 'Conducted strictly in accordance with statutory medical guidelines and clinical indications.'
  },
  {
    id: 'color-doppler',
    title: 'Color Doppler',
    category: 'radiology',
    description: 'Diagnostic imaging to evaluate blood flow in vessels and selected organs.',
    clinicalNote: 'Quantitative hemodynamic velocity mapping for arterial and venous peripheral vasculature.',
    iconName: 'Activity',
    preparationTip: 'Wear loose comfortable clothing. No specific fasting required unless abdominal vessel study.'
  },
  {
    id: 'digital-x-ray',
    title: 'Digital X-Ray',
    category: 'radiology',
    description: 'Digital radiography for diagnostic evaluation.',
    clinicalNote: 'Low-dose digital sensor imaging with sharp spatial resolution for skeletal and thoracic assessment.',
    iconName: 'FileText',
    preparationTip: 'Remove metallic items, jewellery, and watches prior to exposure. Carry doctor prescription.'
  },
  {
    id: 'ecg',
    title: 'ECG',
    category: 'cardiac',
    description: 'Electrocardiogram recording to assess the electrical activity of the heart.',
    clinicalNote: '12-lead precision electrical conduction tracing to evaluate cardiac rhythm and ischemia.',
    iconName: 'Zap',
    preparationTip: 'Avoid heavy caffeine or intense physical exertion 30 minutes before recording.'
  },
  {
    id: '2d-echo',
    title: '2D Echo',
    category: 'cardiac',
    description: 'Echocardiography to evaluate heart structure and function.',
    clinicalNote: 'Transthoracic echocardiographic visualization of myocardial chambers, valves, and ejection fraction.',
    iconName: 'Heart',
    preparationTip: 'No fasting necessary. Bring previous medical records and current cardiac medication details.'
  },
  {
    id: 'pathology-services',
    title: 'All Pathology Services',
    category: 'pathology',
    description: 'Laboratory testing and pathology investigations as prescribed by your clinician.',
    clinicalNote: 'Supervised clinical pathology, hematology, biochemistry, and serology by Senior Consultant Pathologist.',
    iconName: 'FlaskConical',
    preparationTip: 'Fasting lipid and glucose panels require 10-12 hours overnight fasting (water permitted).'
  }
];

export const PREPARATION_GUIDES: Record<string, ServicePrepGuide> = {
  'whole-body-ultrasound': {
    serviceId: 'whole-body-ultrasound',
    title: 'Whole Body / Abdominal Ultrasound Preparation',
    fastingRequired: true,
    waterRequirement: 'Drink 3-4 glasses of water 1 hour before if lower abdomen is involved.',
    prescriptionRequired: true,
    guidelines: [
      'Maintain 6 to 8 hours of overnight or morning fasting for upper abdomen scans (liver, gallbladder, pancreas).',
      'Plain water may be consumed in moderation.',
      'Take regular essential medications as directed by your physician with small sips of water.',
      'Wear comfortable two-piece clothing for ease of examination.'
    ]
  },
  'obgy-ultrasound': {
    serviceId: 'obgy-ultrasound',
    title: 'OBGY & Pelvic Ultrasound Preparation',
    fastingRequired: false,
    waterRequirement: 'Drink 4 to 5 glasses of water 1 hour prior to appointment without emptying bladder.',
    prescriptionRequired: true,
    guidelines: [
      'A full urinary bladder is essential for optimal acoustic transmission to view pelvic organs.',
      'Do not void or urinate until the examination is concluded.',
      'Please bring previous scan reports and clinical prescription for reference.'
    ]
  },
  '3d-4d-5d-scans': {
    serviceId: '3d-4d-5d-scans',
    title: '3D, 4D & 5D Volumetric Ultrasound Preparation',
    fastingRequired: false,
    waterRequirement: 'Standard hydration as instructed by your doctor.',
    prescriptionRequired: true,
    guidelines: [
      'Advanced scans are performed subject to clinical indication and valid doctor prescription.',
      'Compliance with the PC-PNDT Act is strictly observed.',
      'Carry government-issued ID proof and doctor referral documentation.'
    ]
  },
  'color-doppler': {
    serviceId: 'color-doppler',
    title: 'Color Doppler Hemodynamic Study Preparation',
    fastingRequired: false,
    waterRequirement: 'Standard hydration.',
    prescriptionRequired: true,
    guidelines: [
      'For carotid or peripheral extremity Doppler, no fasting is necessary.',
      'For renal artery or portal Doppler, 6 hours fasting is recommended.',
      'Wear loose clothing to allow easy access to limb or neck vessels.'
    ]
  },
  'digital-x-ray': {
    serviceId: 'digital-x-ray',
    title: 'Digital X-Ray Radiography Preparation',
    fastingRequired: false,
    waterRequirement: 'No restriction.',
    prescriptionRequired: true,
    guidelines: [
      'Remove all metal objects including necklaces, earrings, safety pins, and zips from the area to be imaged.',
      'Inform the technician immediately if you are pregnant or suspect pregnancy.',
      'Digital acquisition is completed within minutes with minimal radiation.'
    ]
  },
  'ecg': {
    serviceId: 'ecg',
    title: '12-Lead Electrocardiogram (ECG) Preparation',
    fastingRequired: false,
    waterRequirement: 'Standard hydration.',
    prescriptionRequired: false,
    guidelines: [
      'Avoid oily body lotions or moisturizers on the chest area prior to testing.',
      'Wear loose, easily accessible upper attire.',
      'Rest comfortably in the reception area for 5-10 minutes prior to recording.'
    ]
  },
  '2d-echo': {
    serviceId: '2d-echo',
    title: '2D Echocardiography Preparation',
    fastingRequired: false,
    waterRequirement: 'Standard hydration.',
    prescriptionRequired: true,
    guidelines: [
      'No fasting or fluid restriction is needed.',
      'Bring previous ECG reports or cardiac discharge summaries if available.',
      'The test is painless, safe, and takes approximately 15-20 minutes.'
    ]
  },
  'pathology-services': {
    serviceId: 'pathology-services',
    title: 'Pathology & Laboratory Tests Preparation',
    fastingRequired: true,
    waterRequirement: 'Water is encouraged to keep veins adequately hydrated.',
    prescriptionRequired: true,
    guidelines: [
      'Fasting Blood Sugar (FBS) & Lipid Profile require 10-12 hours overnight fasting.',
      'HbA1c, CBC, and thyroid function tests generally do not require strict fasting unless combined with lipid panel.',
      'Inform the phlebotomist if you take anticoagulant (blood thinner) medications.'
    ]
  }
};

/**
 * Validates an Indian phone number.
 * Accepts formats: +919654002800, 9654002800, 09654002800, 96540-02800, etc.
 * An Indian mobile number has 10 digits starting with 6, 7, 8, or 9.
 */
export function validateIndianPhone(input: string): {
  isValid: boolean;
  normalized: string;
  error?: string;
} {
  if (!input || input.trim() === '') {
    return { isValid: false, normalized: '', error: 'Phone number is required.' };
  }

  // Strip spaces, dashes, parentheses
  let cleaned = input.replace(/[\s\-()]/g, '');

  // Handle +91 or 91 prefix
  if (cleaned.startsWith('+91')) {
    cleaned = cleaned.substring(3);
  } else if (cleaned.startsWith('91') && cleaned.length === 12) {
    cleaned = cleaned.substring(2);
  } else if (cleaned.startsWith('0') && cleaned.length === 11) {
    cleaned = cleaned.substring(1);
  }

  // Check if exactly 10 digits and starts with valid Indian telecom digit [6-9]
  const isValid = /^[6-9]\d{9}$/.test(cleaned);

  if (!isValid) {
    return {
      isValid: false,
      normalized: cleaned,
      error: 'Please enter a valid 10-digit mobile number (e.g. 9654002800).'
    };
  }

  return {
    isValid: true,
    normalized: cleaned
  };
}

/**
 * Builds prefilled WhatsApp enquiry URL
 */
export function buildWhatsAppEnquiryUrl(enquiry: AppointmentEnquiry): string {
  const service = CLINICAL_SERVICES.find((s) => s.id === enquiry.serviceId);
  const serviceName = service ? service.title : enquiry.serviceId || 'Diagnostic Investigation';

  const lines = [
    `*Appointment Enquiry - Dr. Solanki's Diagnostic Centre*`,
    `Patient Name: ${enquiry.patientName.trim()}`,
    `Contact: +91 ${enquiry.phoneNumber.trim()}`,
    `Requested Service: ${serviceName}`
  ];

  if (enquiry.preferredDate) {
    lines.push(`Preferred Date: ${enquiry.preferredDate}`);
  }

  if (enquiry.notes && enquiry.notes.trim()) {
    lines.push(`Note: ${enquiry.notes.trim()}`);
  }

  lines.push(`\nPlease let me know appointment availability and test preparation requirements.`);

  const encoded = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/919654002800?text=${encoded}`;
}

/**
 * Filter services by category
 */
export function filterServicesByCategory(
  services: ServiceItem[],
  category: 'all' | 'radiology' | 'cardiac' | 'pathology'
): ServiceItem[] {
  if (category === 'all') return services;
  return services.filter((s) => s.category === category);
}

/**
 * Get test prep details by service ID
 */
export function getServicePrepInstructions(serviceId: string): ServicePrepGuide {
  return (
    PREPARATION_GUIDES[serviceId] || {
      serviceId,
      title: 'General Diagnostic Investigation Guidelines',
      fastingRequired: false,
      waterRequirement: 'Standard hydration.',
      prescriptionRequired: true,
      guidelines: [
        'Please bring your clinician’s prescription and past test reports.',
        'Reach the centre 10-15 minutes prior to your preferred schedule.',
        'Call +91 9654002800 to confirm exact appointment timing and specific fasting instructions.'
      ]
    }
  );
}
