import { ROUTES, SECTION_HASHES } from '@/data/navigation-state';

export const siteConfig = {
  name: "Nibhṛite Jatone",
  bengaliName: "নিভৃতে যতনে",
  tagline: "A soulful homestay experience in the heart of Santiniketan",
  bengaliTagline: "শান্তির আশ্রয়, প্রকৃতির কোলে",
  heroQuote: "নিভৃতে যতনে, প্রকৃতির কোলে শান্তির আশ্রয়",
};

export const navItems = [
  { label: "Home", href: SECTION_HASHES.home },
  { label: "About", href: SECTION_HASHES.about },
  { label: "Gallery", href: ROUTES.gallery },
  { label: "Experience", href: SECTION_HASHES.experience },
  { label: "Contact", href: SECTION_HASHES.contact },
];

export const reviews = [
  {
    name: "Ria Bhattacharjee",
    location: "Santiniketan",
    text: "It's really nice and cozy. I stayed there for 2days with my 1.5yrs old baby and family. Not for a single time I have to worry for my baby's food. They cooked for him as per my instruction. We also had great time there. Rooms are clean and spacious. I'll definitely choose নিভৃতে যতনে in future also.",
    rating: 5,
  },
  {
    name: "Sougata Mondal",
    location: "Santiniketan",
    text: "With the real touch of Bolpur Santiniketan, such a homestay in a peaceful and soothing environment amidst nature and their hospitality is truly unparalleled. Would like to give them 10 out of 5 stars.",
    rating: 5,
  },
  {
    name: "Shilpa Acharjee",
    location: "Santiniketan",
    text: "One of the best places in my life is Santiniketan. This time, I stayed at a homestay called Nivrito Jatone. We had a wonderful experience there. The owner was very humble, and every member of their staff was extremely courteous and helpful. The next time I visit Santiniketan, I would love to stay there again.",
    rating: 5,
  },
  {
    name: "Rajashree Sharma",
    location: "Santiniketan",
    text: "Just spent a wonderful time at this lovely homestay in Shantiniketan! The place is so beautiful and the homely atmosphere made me feel right at home. The food was great and the hosts were super caring. Feeling safe and relaxed throughout my stay. Highly recommend this place to anyone visiting Shantiniketan!",
    rating: 5,
  },
  {
    name: "Debdatta Mazumder",
    location: "Santiniketan",
    text: "We had a great experience here. The natural beauty around the homestay, the food, and the hospitality: everything is just outstanding. Also, I can't forget to mention that this homestay is highly baby-friendly!! 5 star is not enough to praise it. Will be looking forward to visit again.",
    rating: 5,
  },
];

export const experiences = [
  {
    title: "Morning Tea in Nature",
    bengaliTitle: "প্রকৃতির কোলে সকালের চা",
    description: "Begin your day with steaming chai amidst misty Sal groves, where dawn paints the sky in terracotta hues and birdsong fills the air.",
    icon: "coffee",
    image: "/images/experience/morning-tea.jpg",
  },
  {
    title: "Sonajhuri Forest Walks",
    bengaliTitle: "সোনাঝুড়ির হাঁটা",
    description: "Wander through golden Sonajhuri trees on red earth paths, where sunlight filters through leaves like liquid gold and time stands still.",
    icon: "footprints",
    image: "/images/experience/sonajhuri-walk.jpg",
  },
  {
    title: "Baul Culture",
    bengaliTitle: "বাউল সংস্কৃতি",
    description: "Lose yourself in the soul-stirring melodies of Baul fakirs, whose music carries the spiritual essence of rural Bengal across generations.",
    icon: "music",
    image: "/images/experience/baul-culture.jpg",
  },
  {
    title: "Homely Bengali Food",
    bengaliTitle: "ঘরোয়া বাঙালি খাবার",
    description: "Relish authentic Bengali meals — from steaming rice and dal to fish curry and mishti — each dish crafted with homegrown love.",
    icon: "utensils",
    image: "/images/experience/bengali-food.jpg",
  },
  {
    title: "Peaceful Evenings",
    bengaliTitle: "শান্ত সন্ধ্যা",
    description: "Watch the sky blush as the sun sets over open fields, fireflies dance in the warm dusk, and crickets compose nature's evening raga.",
    icon: "sunset",
    image: "/images/experience/peaceful-evening.jpg",
  },
  {
    title: "Rural Bengal Experience",
    bengaliTitle: "গ্রাম বাংলার অভিজ্ঞতা",
    description: "Embrace the simplicity of village life — pottery, terracotta art, harvest fields, and the unhurried rhythm of rural Bengal's timeless beauty.",
    icon: "wheat",
    image: "/images/experience/rural-bengal.jpg",
  },
];

export const galleryCategories = ["All", "Interior", "Exterior", "Rooms", "Food & Drinks"] as const;
export type GalleryCategory = typeof galleryCategories[number];

export const galleryPreviewLimits: Record<GalleryCategory, number> = {
  All: 4,
  Interior: 4,
  Exterior: 4,
  Rooms: 6,
  "Food & Drinks": 4,
};

export const galleryImages = [
  // Interior (ids 1-4)
  { id: 1, src: "/images/gallery/interior/interior-1.jpg", alt: "Cozy living room with traditional Bengali decor", category: "Interior" as const },
  { id: 2, src: "/images/gallery/interior/interior-2.jpg", alt: "Artistic corner with terracotta pieces", category: "Interior" as const },
  { id: 3, src: "/images/gallery/interior/interior-3.jpg", alt: "Warm reading nook with handmade crafts", category: "Interior" as const },
  { id: 4, src: "/images/gallery/interior/interior-4.jpg", alt: "Traditional Bengali sitting area", category: "Interior" as const },
  // Exterior (ids 9-12)
  { id: 9, src: "/images/gallery/exterior/exterior-1.jpg", alt: "Homestay surrounded by greenery", category: "Exterior" as const },
  { id: 10, src: "/images/gallery/exterior/exterior-2.jpg", alt: "Garden path through Sal trees", category: "Exterior" as const },
  { id: 11, src: "/images/gallery/exterior/exterior-3.jpg", alt: "Terracotta courtyard at dusk", category: "Exterior" as const },
  { id: 12, src: "/images/gallery/exterior/exterior-4.jpg", alt: "Morning view from the veranda", category: "Exterior" as const },
  // Rooms (ids 17-20)
  { id: 17, src: "/images/gallery/rooms/rooms-1.jpg", alt: "Elegant bedroom with earthy tones", category: "Rooms" as const },
  { id: 18, src: "/images/gallery/rooms/rooms-2.jpg", alt: "Cozy room with window view", category: "Rooms" as const },
  { id: 19, src: "/images/gallery/rooms/rooms-3.jpg", alt: "Traditional Bengali-style room", category: "Rooms" as const },
  { id: 20, src: "/images/gallery/rooms/rooms-4.jpg", alt: "Peaceful room with natural light", category: "Rooms" as const },
  // Food & Drinks (ids 25-28)
  { id: 25, src: "/images/gallery/food/food-1.jpg", alt: "Traditional Bengali thali", category: "Food & Drinks" as const },
  { id: 26, src: "/images/gallery/food/food-2.jpg", alt: "Fresh morning chai and snacks", category: "Food & Drinks" as const },
  { id: 27, src: "/images/gallery/food/food-3.jpg", alt: "Authentic Bengali fish curry", category: "Food & Drinks" as const },
  { id: 28, src: "/images/gallery/food/food-4.jpg", alt: "Traditional Bengali sweets", category: "Food & Drinks" as const },
];

export const contactLinks = {
  whatsappBaseUrl: "https://wa.me/919748318934",
  whatsappMessageUrlPrefix: "https://wa.me/919748318934?text=",
  emailHref: "mailto:nibhritejotone@gmail.com",
  mapUrl: "https://maps.app.goo.gl/es4hNxSJEQhJpXfw9",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500!2d87.6465327!3d23.6785441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9dd00342cd225%3A0xd422acc6dcc8d26b!2sNibh%E1%B9%9Bite%20Jatone!5e0!3m2!1sen!2sin",
  instagramUrl: "https://www.instagram.com/nibhritejatonehomestay/",
  facebookUrl: "https://www.facebook.com/nibhritejatonehomestay/",
};

export const contactInfo = {
  address: "Nibhṛite Jatone, Kheledanga, Ballavpur, West Bengal 731236",
  phone: "+91 97483 18934",
  email: "nibhritejotone@gmail.com",
  hours: "Check-in: 12:00 PM — Check-out: 11:00 AM",
};

export const footerQuote = "যেতে যেতে একলা পথে নিভৃতে যতনে, প্রকৃতির কোলে খুঁজে পাই শান্তির আশ্রয়";
