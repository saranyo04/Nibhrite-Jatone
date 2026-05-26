export const siteConfig = {
  name: "Nibhṛite Jatone",
  bengaliName: "নিভৃতে যতনে",
  tagline: "A soulful homestay experience in the heart of Santiniketan",
  bengaliTagline: "শান্তির আশ্রয়, প্রকৃতির কোলে",
  heroQuote: "নিভৃতে যতনে, প্রকৃতির কোলে শান্তির আশ্রয়",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const homeCards = [
  {
    title: "Homely Food",
    bengaliTitle: "ঘরোয়া খাবার",
    description: "Savor authentic Bengali cuisine prepared with love, fresh ingredients, and traditional recipes passed down through generations.",
    icon: "utensils",
  },
  {
    title: "Peaceful Stay",
    bengaliTitle: "শান্ত বাস",
    description: "Drift into serenity in our cozy rooms, where the rustle of Sal trees and gentle breezes create nature's own lullaby.",
    icon: "bed",
  },
  {
    title: "Nature Experience",
    bengaliTitle: "প্রকৃতির অভিজ্ঞতা",
    description: "Immerse yourself in the breathtaking beauty of Santiniketan's red soil paths, golden Sonajhuri forests, and open skies.",
    icon: "trees",
  },
  {
    title: "Cultural Soul",
    bengaliTitle: "সাংস্কৃতিক আত্মা",
    description: "Feel the pulse of Rabindranath Tagore's legacy, Baul music echoing through fields, and Bengal's artistic heritage all around.",
    icon: "palette",
  },
];

export const reviews = [
  {
    name: "Ananya S.",
    location: "Kolkata",
    text: "A hidden gem in Santiniketan. The peace and warmth we felt here was unlike any other stay. The food reminded me of my grandmother's kitchen.",
    rating: 5,
  },
  {
    name: "Rajdeep M.",
    location: "Delhi",
    text: "Walking through the Sonajhuri forest in the morning, returning to hot chai and homemade luchis — this is what healing feels like. Truly নিভৃতে যতনে.",
    rating: 5,
  },
  {
    name: "Priyanka D.",
    location: "Bangalore",
    text: "The hosts made us feel like family. The rooms are spotless, the surroundings magical. I didn't want to leave. Santiniketan captured my heart here.",
    rating: 5,
  },
  {
    name: "Sourav B.",
    location: "Mumbai",
    text: "If you want to experience the real Santiniketan — the Baul music, the terracotta art, the red soil — stay here. It's not a hotel, it's a feeling.",
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

export const galleryCategories = ["Interior", "Exterior", "Rooms", "Food & Drinks"] as const;
export type GalleryCategory = typeof galleryCategories[number];

export const galleryImages = [
  // Interior
  { id: 1, src: "/images/gallery/interior/interior-1.jpg", alt: "Cozy living room with traditional Bengali decor", category: "Interior" as const },
  { id: 2, src: "/images/gallery/interior/interior-2.jpg", alt: "Artistic corner with terracotta pieces", category: "Interior" as const },
  { id: 3, src: "/images/gallery/interior/interior-3.jpg", alt: "Warm reading nook with handmade crafts", category: "Interior" as const },
  { id: 4, src: "/images/gallery/interior/interior-4.jpg", alt: "Traditional Bengali sitting area", category: "Interior" as const },
  // Exterior
  { id: 5, src: "/images/gallery/exterior/exterior-1.jpg", alt: "Homestay surrounded by greenery", category: "Exterior" as const },
  { id: 6, src: "/images/gallery/exterior/exterior-2.jpg", alt: "Garden path through Sal trees", category: "Exterior" as const },
  { id: 7, src: "/images/gallery/exterior/exterior-3.jpg", alt: "Terracotta courtyard at dusk", category: "Exterior" as const },
  { id: 8, src: "/images/gallery/exterior/exterior-4.jpg", alt: "Morning view from the veranda", category: "Exterior" as const },
  // Rooms
  { id: 9, src: "/images/gallery/rooms/rooms-1.jpg", alt: "Elegant bedroom with earthy tones", category: "Rooms" as const },
  { id: 10, src: "/images/gallery/rooms/rooms-2.jpg", alt: "Cozy room with window view", category: "Rooms" as const },
  { id: 11, src: "/images/gallery/rooms/rooms-3.jpg", alt: "Traditional Bengali-style room", category: "Rooms" as const },
  { id: 12, src: "/images/gallery/rooms/rooms-4.jpg", alt: "Peaceful room with natural light", category: "Rooms" as const },
  // Food & Drinks
  { id: 13, src: "/images/gallery/food/food-1.jpg", alt: "Traditional Bengali thali", category: "Food & Drinks" as const },
  { id: 14, src: "/images/gallery/food/food-2.jpg", alt: "Fresh morning chai and snacks", category: "Food & Drinks" as const },
  { id: 15, src: "/images/gallery/food/food-3.jpg", alt: "Authentic Bengali fish curry", category: "Food & Drinks" as const },
  { id: 16, src: "/images/gallery/food/food-4.jpg", alt: "Traditional Bengali sweets", category: "Food & Drinks" as const },
];

export const contactInfo = {
  address: "Nibhṛite Jatone, Near Sonajhuri Forest, Santiniketan, Bolpur, West Bengal 731235",
  phone: "+91 98765 43210",
  email: "stay@nibhritejatone.com",
  hours: "Check-in: 12:00 PM — Check-out: 11:00 AM",
};

export const footerQuote = "যেতে যেতে একলা পথে নিভৃতে যতনে, প্রকৃতির কোলে খুঁজে পাই শান্তির আশ্রয়";
