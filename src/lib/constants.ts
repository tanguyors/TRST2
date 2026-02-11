export const SITE_CONFIG = {
  name: 'Rotary Club Pattaya Marina',
  shortName: 'RC Pattaya Marina',
  description: 'Rotary Club Pattaya Marina - Service Above Self',
  url: 'https://rotary-pattaya-marina.org',
  email: 'contact@rotary-pattaya-marina.org',
  phone: '+66 38 426 678',
  address: 'Siam Bayshore Resort, 559 Moo 10, Beach Road, Pattaya, Banglamung, Chonburi 20150, Thailand',
  rotaryDistrict: '3340',
  clubNumber: '67366',
  foundedYear: 2010,
  meetingDay: 'Vendredi (1er et 3ème du mois)',
  meetingTime: '19:00',
  meetingPlace: 'Siam Bayshore Resort, Pattaya',
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/rotarypattayamarina',
  line: '#',
  rotaryInternational: 'https://www.rotary.org',
  rotaryDistrict3340: 'https://www.rotary3340.org',
} as const;

export const NAV_ITEMS = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'actions', href: '/actions' },
  { key: 'sponsors', href: '/sponsors' },
  { key: 'contact', href: '/contact' },
] as const;

export const LOCALE_FLAGS: Record<string, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  th: '🇹🇭',
};

export const LOCALE_NAMES: Record<string, string> = {
  fr: 'Français',
  en: 'English',
  th: 'ไทย',
};
