export const business = {
  name: "Hårjouren",
  tagline: "Color & cuts near the cathedral",
  description:
    "Varmt välkomna till Hårjouren — personlig fullservice-salong vid domkyrkan med fokus på färg, klippning, slingor och balayage på S:t Eriks torg 4.",
  category: "Hair Salon",
  address: {
    street: "S:t Eriks torg 4",
    postalCode: "753 10",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-13 28 94",
  phoneLink: "tel:+4618132894",
  email: null as string | null,
  emailLink: null as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/harjouren-46034",
  bookingLabel: "Boka på Bokadirekt",
  websiteUrl: "https://www.harjouren.se/" as string | null,
  logoImage: "/images/logo.jpg" as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-2.jpg",
  facebookUrl: "https://www.facebook.com/harjouren" as string | null,
  instagramUrl: "https://instagram.com/harjouren" as string | null,
  owner: "Hårjouren",
  rating: 4.9,
  reviewCount: 911,
  foundedYear: 2010,
  coordinates: { lat: 59.8585, lng: 17.6351 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  trustBadges: [
    { label: "4.9 på Bokadirekt", icon: "star" },
    { label: "911+ omdömen", icon: "reviews" },
    { label: "Uppsala centrum", icon: "location" },
    { label: "🎨 Color Salon", icon: "student" },
  ],
  usps: [
    {
      title: "Färg & balayage",
      description: "Specialister på slingor, helfärg, balayage och nyansering vid domkyrkan.",
    },
    {
      title: "Centralt läge",
      description: "Beläget på S:t Eriks torg 4 i Uppsala.",
    },
    {
      title: "Höga betyg",
      description: "911+ nöjda kunder enligt offentliga omdömen.",
    },
    {
      title: "Enkel bokning",
      description: "Boka tid online eller ring för snabb service.",
    },
  ],
  services: [
    {
      id: "klippning",
      name: "Klippning",
      icon: "✂️",
      description: "Professionell klippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "slingor-och-f-rg",
      name: "Slingor och färg",
      icon: "💇",
      description: "Professionell slingor och färg med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "balayage",
      name: "Balayage",
      icon: "⭐",
      description: "Professionell balayage med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: 2725,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "nyansering",
      name: "Nyansering",
      icon: "🎯",
      description: "Professionell nyansering med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: 1895,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "l-sh-rskonsultation",
      name: "Löshårskonsultation",
      icon: "✨",
      description: "Professionell löshårskonsultation med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: 290,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Salongen", image: "/images/gallery-1.jpg" },
    { id: 2, label: "Styling", image: "/images/gallery-2.jpg" },
    { id: 3, label: "Färg & slingor", image: "/images/gallery-3.jpg" },
    { id: 4, label: "Balayage", image: "/images/gallery-4.jpg" },
    { id: 5, label: "Resultat", image: "/images/gallery-5.jpg" },
    { id: 6, label: "Atmosfär", image: "/images/gallery-6.jpg" },
  ],
  testimonials: [
    {
      text: "Alltid lika proffsig, fint hårresultat och trevligt bemötande ❤️",
      author: "Emilia F.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/harjouren-46034",
      rating: 5,
      date: "2026-06-12",
    },
    {
      text: "Snabb och elegant behandling och gott kaffe med exklusiv choklad.",
      author: "Roger G.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/harjouren-46034",
      rating: 5,
      date: "2026-06-06",
    },
    {
      text: "Alltid såå nöjd hos Fia",
      author: "Carina A.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/harjouren-46034",
      rating: 5,
      date: "2026-06-05",
    },
    {
      text: "Alltid lyhörd, snabb,alltid nöjd.",
      author: "Agneta S.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/harjouren-46034",
      rating: 5,
      date: "2026-06-05",
    },
  ],
  about: {
    headline: "Om Hårjouren",
    paragraphs: [
      "Här står du som kund i fokus — vi vill att du ska få en så bra upplevelse som möjligt. Läs gärna under \"mer info\" på våra behandlingar så du bokar rätt tjänst med rätt tidsåtgång.",
      "Vi erbjuder klippning, färg, slingor, balayage och nyansering i en personlig salongsmiljö vid domkyrkan. Ibland är yorkshireterriern Mollie på plats i salongen.",
    ],
  },
  faq: [
    {
      question: "Var ligger Hårjouren?",
      answer: "Vi finns på S:t Eriks torg 4, 753 10 Uppsala.",
    },
    {
      question: "Hur bokar jag tid hos Hårjouren?",
      answer: "Boka via Bokadirekt eller ring 018-13 28 94.",
    },
    {
      question: "Vad säger kunder om Hårjouren?",
      answer: "Vi har 4.9 i snittbetyg baserat på 911+ recensioner.",
    },
    {
      question: "Vilka öppettider har ni?",
      answer: "Ring gärna innan besök.",
    },
    {
      question: "Kan jag avboka min tid?",
      answer: "Ja, via Bokadirekt kan du hantera din bokning.",
    },
    {
      question: "Erbjuder ni presentkort?",
      answer: "Kontakta oss för information om presentkort.",
    },
    {
      question: "Finns parkering nära?",
      answer: "Gatuparkering finns i närheten av S:t Eriks torg 4.",
    },
  ],
  seoKeywords: [
    "frisör S:t Eriks torg",
    "balayage Uppsala",
    "slingor Uppsala",
    "hårfärg centrum",
    "Hårjouren",
    "Uppsala color_salon",
  ],
  brandColors: {
    primary: "#7C3AED",
    secondary: "#EC4899",
    accent: "#FAF5FF",
    dark: "#4C1D95",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function formatPrice(amount: number | null) {
  if (amount === null) return "Pris på förfrågan";
  return `från ${amount} kr`;
}
