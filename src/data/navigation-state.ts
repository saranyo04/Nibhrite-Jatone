export const ROUTES = {
  home: '/',
  gallery: '/gallery',
} as const;

export const SECTION_IDS = {
  home: 'home',
  about: 'about',
  gallery: 'gallery',
  experience: 'experience',
  contact: 'contact',
} as const;

export const SECTION_HASHES = {
  home: `#${SECTION_IDS.home}`,
  about: `#${SECTION_IDS.about}`,
  gallery: `#${SECTION_IDS.gallery}`,
  experience: `#${SECTION_IDS.experience}`,
  contact: `#${SECTION_IDS.contact}`,
} as const;

export const HOME_SCROLL_RESTORE_KEY = 'nibhrite-home-scroll-y';
export const HOME_SCROLL_RESTORE_PENDING_KEY = 'nibhrite-home-scroll-restore-pending';
