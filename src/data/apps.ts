export type AppMeta = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  subhead: string;
  features: string[];
  appStoreUrl: string;
  privacyUrl: string;
  termsUrl?: string;
  supportEmail?: string;
  accent?: string;
};

export const apps: AppMeta[] = [
  {
    slug: 'pronounce-english',
    name: 'Pronounce English',
    category: 'English learning',
    headline: 'Speak English clearly with instant AI feedback',
    subhead:
      'Practice useful phrases, compare against reference audio, and get immediate pronunciation feedback so every conversation feels more natural.',
    features: [
      '159 real-world phrases across 10 themed units',
      'AI-powered pronunciation scoring and instant feedback',
      'Reference audio and progress tracking for every phrase',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/pronounce-english-app/id6761025957',
    privacyUrl: '/legal/pronounce-english/pronounce-english-privacy.html',
    termsUrl: '/terms/',
  },
  {
    slug: 'learn-malayalam',
    name: 'Learn Malayalam',
    category: 'Language learning',
    headline: 'Start speaking Malayalam with confidence',
    subhead:
      'Build practical Malayalam skills through short lessons, native audio, real conversations, and interactive exercises designed for everyday life.',
    features: [
      '22 units with 110 bite-sized lessons',
      '430+ words with Malayalam script, romanization, and audio',
      'Seven exercise types plus smart review and cultural context',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/learn-malayalam-app/id6760923821',
    privacyUrl: '/legal/learn-malayalam/learn-malayalam-privacy.html',
    termsUrl: '/terms/',
  },
  {
    slug: 'learn-odia',
    name: 'Learn Odia',
    category: 'Language learning',
    headline: 'Learn to speak Odia, one short lesson at a time',
    subhead:
      'Move from essential greetings to fluent dialogues with a structured curriculum, native Odia audio, and practice built around real situations.',
    features: [
      '22 units with 110 bite-sized lessons',
      '395+ words with Odia script, transliteration, and audio',
      'Speaking practice, daily streaks, and seven exercise types',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/learn-odia-app/id6760923785',
    privacyUrl: '/legal/learn-odia/learn-odia-privacy.html',
    termsUrl: '/terms/',
  },
  {
    slug: 'learn-amharic',
    name: 'Learn Amharic',
    category: 'Language learning',
    headline: 'Go from first words to real Amharic conversations',
    subhead:
      'Learn naturally with focused lessons, native audio, cultural context, and varied exercises that help new vocabulary stick.',
    features: [
      '22 units with 110 bite-sized lessons',
      '402+ words with Amharic script, romanization, and audio',
      'Seven exercise types with targeted smart review',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/learn-amharic-app/id6760735777',
    privacyUrl: '/legal/learn-amharic/learn-amharic-privacy.html',
    termsUrl: '/terms/',
  },
  {
    slug: 'learn-marathi',
    name: 'Learn Marathi Fast',
    category: 'Language learning',
    headline: 'Make Marathi part of your everyday routine',
    subhead:
      'Practice useful words, sentences, and conversations in five-minute lessons that take you from the basics toward confident speaking.',
    features: [
      '22 units with 110 bite-sized lessons',
      '402+ words with Marathi script, romanization, and audio',
      'Real dialogues, cultural notes, and seven exercise types',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/learn-marathi-fast/id6760923583',
    privacyUrl: '/legal/learn-marathi/learn-marathi-privacy.html',
    termsUrl: '/terms/',
  },
  {
    slug: 'learn-punjabi',
    name: 'Learn Punjabi',
    category: 'Language learning',
    headline: 'Speak Punjabi with family, friends, and confidence',
    subhead:
      'Build conversational Punjabi through short lessons, native audio, practical dialogues, and exercises that reinforce every new word.',
    features: [
      '22 units with 110 bite-sized lessons',
      '390+ words with Punjabi script, romanization, and audio',
      'Seven exercise types with cultural context and smart review',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/learn-punjabi-app/id6760923795',
    privacyUrl: '/legal/learn-punjabi/learn-punjabi-privacy.html',
    termsUrl: '/terms/',
  },
  {
    slug: 'learn-kannada',
    name: 'Learn Kannada',
    category: 'Language learning',
    headline: 'Build conversational Kannada through daily practice',
    subhead:
      'Progress from greetings to everyday conversations with bite-sized lessons, native pronunciation, and interactive exercises.',
    features: [
      '22 units with 110 bite-sized lessons',
      '440+ words with Kannada script, romanization, and audio',
      'Seven exercise types with smart review and cultural context',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/learn-kannada-app/id6760599548',
    privacyUrl: '/legal/learn-kannada/learn-kannada-privacy.html',
    termsUrl: '/terms/',
  },
  {
    slug: 'learn-bengali',
    name: 'Learn Bengali',
    category: 'Language learning',
    headline: 'Turn five minutes a day into confident Bengali',
    subhead:
      'Learn Bengali for family, travel, and everyday conversation with short lessons, native audio, and meaningful cultural context.',
    features: [
      '22 units with 110 bite-sized lessons',
      '395+ words with Bengali script, romanization, and audio',
      'Seven exercise types with dialogues and targeted review',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/learn-bengali-app/id6760684086',
    privacyUrl: '/legal/learn-bengali/learn-bengali-privacy.html',
    termsUrl: '/terms/',
  },
  {
    slug: 'learn-gujarati',
    name: 'Learn Gujarati',
    category: 'Language learning',
    headline: 'A clear path from beginner to confident Gujarati',
    subhead:
      'Reconnect with family, prepare for travel, or explore Gujarati through structured lessons, native audio, and practical conversation practice.',
    features: [
      '20 structured units with 100+ interactive lessons',
      '460+ native audio clips with phonetic learning support',
      'Seven exercise types, smart review, and progress tracking',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/learn-gujarati-app/id6758917172',
    privacyUrl: '/legal/learn-gujarati/learn-gujarati-privacy.html',
    termsUrl: '/terms/',
  },
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
    slug: 'call-gpt',
    name: 'Call GPT',
    category: 'ChatGPT assistant',
    headline: 'Book appointments without leaving ChatGPT',
    subhead:
      'Initiate real calls to barbers, clinics, and local services so your chats turn into confirmed appointments.',
    features: [
      'Call initiation handled directly from chat',
      'Summaries with times, locations, and confirmations',
      'Built for businesses that still book by phone',
    ],
    appStoreUrl: 'https://chat.openai.com',
    privacyUrl: '/legal/call-gpt/call-gpt-privacy.html',
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
    appStoreUrl: 'https://apps.apple.com/us/app/capture-pickleball-highlights/id6742061673',
    privacyUrl: '/legal/clipit/clipit-privacy.html',
  },
  {
    slug: 'charadas',
    name: 'Charadas',
    category: 'Party games',
    headline: 'El clásico juego de mímica, 100% en español',
    subhead:
      'Levanta el teléfono, actúa las pistas y deja que tu equipo adivine antes de que se acabe el tiempo—ideal para fiestas y clases de español.',
    features: [
      'Categorías temáticas en español',
      'Temporizador integrado para rondas rápidas',
      'Modo equipos con puntos automáticos',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/charadas/id6756526814',
    privacyUrl: '/legal/charadas/privacy.html',
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
    appStoreUrl: 'https://apps.apple.com/us/app/server-tip-tracker/id6756147432',
    privacyUrl: '/legal/server-tip-tracker/server-tip-tracker-privacy.html',
    supportEmail: 'admin@brightwoodapps.com',
  },
  {
    slug: 'mealcal',
    name: 'MealCal',
    category: 'Meal planning',
    headline: 'Plan your whole week of meals, together',
    subhead:
      'Save recipes from any website, organize them into collections, and map out breakfast, lunch, and dinner—then share it all with the people you cook for.',
    features: [
      'Weekly calendar for breakfast, lunch, and dinner',
      'Save recipes from any website into shared collections',
      'Social feed to follow friends and discover new meals',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/mealcal-social-meal-planning/id1608650489',
    privacyUrl: '/legal/mealcal/mealcal-privacy.html',
    accent: '#7a1f3d',
  },
];

export const getAppBySlug = (slug: string) => apps.find((app) => app.slug === slug);
