export type AppMeta = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  subhead: string;
  features: string[];
  appStoreUrl: string;
  privacyUrl: string;
  supportEmail?: string;
  accent?: string;
};

export const apps: AppMeta[] = [
  {
    slug: 'heardwell',
    name: 'Heardwell',
    category: 'Clinical documentation',
    headline: 'Hands-free visit summaries in seconds',
    subhead:
      'Capture encounters, keep clinicians focused on patients, and hand off SOAP-ready notes without extra paperwork.',
    features: [
      'Voice capture with on-device privacy',
      'Structured SOAP outputs and checklists',
      'Works across specialties and care settings',
    ],
    appStoreUrl: 'https://apps.apple.com',
    privacyUrl: '/legal/heardwell/heardwell-privacy.html',
  },
  {
    slug: 'text-back-ai',
    name: 'Text Back AI',
    category: 'AI messaging',
    headline: 'Natural replies from a single screenshot',
    subhead:
      'Upload a chat screenshot, pick a tone, and send thoughtful responses fast—without overthinking what to say.',
    features: [
      'Understands full chat context',
      'Tone-aware drafts: funny, kind, confident, professional',
      'Privacy-first processing with session-only data',
    ],
    appStoreUrl: 'https://apps.apple.com',
    privacyUrl: '/legal/text-back-ai/text-back-ai-privacy.html',
  },
  {
    slug: 'trip-planner',
    name: 'Trip Planner Plus',
    category: 'Travel planning',
    headline: 'Collaborative itineraries that stay in sync',
    subhead:
      'Share timelines, reservations, and packing lists so every traveler stays aligned from departure to return.',
    features: [
      'Shared timelines with role-based editing',
      'Location-aware reminders and reservations',
      'Maps, Wallet, and Calendar integrations',
    ],
    appStoreUrl: 'https://apps.apple.com',
    privacyUrl: '/legal/trip-planner/trip-planner-privacy.html',
  },
  {
    slug: 'decaf',
    name: 'Decaf Caffeine Tracker',
    category: 'Lifestyle & wellness',
    headline: 'Understand and taper caffeine on your terms',
    subhead:
      'Log beverages, track energy dips, and taper caffeine responsibly with personalized recommendations.',
    features: [
      'Barcode scanning for quick logging',
      'Daily insights with Health syncing',
      'Goal-based reminders tailored to your routine',
    ],
    appStoreUrl: 'https://apps.apple.com',
    privacyUrl: '/legal/decaf/decaf-privacy.html',
  },
  {
    slug: 'baby-feeding-tracker',
    name: 'Baby Feeding Tracker +',
    category: 'Family care',
    headline: 'The complete baby care companion',
    subhead:
      'Track feedings, sleep, diapers, and growth milestones—keep everyone on the same page for your little one.',
    features: [
      'Real-time sync for caregivers and partners',
      'Charts for pediatric appointments',
      'Smart reminders for next feeding or change',
    ],
    appStoreUrl: 'https://apps.apple.com',
    privacyUrl: '/legal/baby-feeding-tracker/baby-feeding-tracker-privacy.html',
  },
  {
    slug: 'recentcontacts',
    name: 'Recent Contacts',
    category: 'Productivity',
    headline: 'Your most important people, one tap away',
    subhead:
      'A dynamic widget that surfaces who you reach out to the most—right when you need them.',
    features: [
      'Smart rotation based on recency and frequency',
      'One-tap call, message, or FaceTime shortcuts',
      'Privacy-first: no contacts stored server-side',
    ],
    appStoreUrl: 'https://apps.apple.com',
    privacyUrl: '/legal/recentcontacts/recentcontacts-privacy.html',
  },
  {
    slug: 'clipit',
    name: 'Clip It',
    category: 'Sports & replay',
    headline: 'Save highlight reels instantly on the field',
    subhead:
      'Buffer gameplay, tap once, and capture every clutch play with pro-grade polish ready to share.',
    features: [
      'Apple Watch and iPhone capture controls',
      'Automatic editing with share-ready exports',
      'Cloud backups to keep memories safe',
    ],
    appStoreUrl: 'https://apps.apple.com',
    privacyUrl: '/legal/clipit/clipit-privacy.html',
  },
  {
    slug: 'server-tip-tracker',
    name: 'Server Tip Tracker',
    category: 'Tipped & hourly work',
    headline: 'Track tips, hours, and earnings with clarity',
    subhead:
      'See how income changes by day, company, and role so you can choose the shifts that pay best.',
    features: [
      'Log tips, hourly rate, and shift length in seconds',
      'Insights by employer, role, weekday, and pay period',
      'Totals and averages to plan confident schedules',
    ],
    appStoreUrl: 'https://apps.apple.com',
    privacyUrl: '/legal/server-tip-tracker/server-tip-tracker-privacy.html',
    supportEmail: 'admin@brightwoodapps.com',
  },
];

export const getAppBySlug = (slug: string) => apps.find((app) => app.slug === slug);
