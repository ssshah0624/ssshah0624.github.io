import appData from './apps.json';

export type AppMeta = {
  slug: string; name: string; storeName: string; category: string;
  headline: string; subhead: string; features: string[];
  workflow: { title: string; body: string }[];
  insightTitle: string; insightBody: string; note: string;
  appStoreUrl: string; privacyUrl: string; termsUrl: string; supportEmail: string;
  platform: string; minimumOs: string; purchase: string;
  icon: string; screenshots: string[]; faq: { question: string; answer: string }[];
  accent?: string;
};

export const apps: AppMeta[] = appData;

export const getAppBySlug = (slug: string) => apps.find((app) => app.slug === slug);
