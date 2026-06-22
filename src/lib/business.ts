export const business = {
  name: "Hårjouren",
  tagline: "Color & cuts near the cathedral",
  description: "Personal full-service salon near the cathedral specializing in color, cuts, and balayage.",
  category: "Hair Salon",
  address: {
    street: "S:t Eriks torg 4",
    postalCode: "753 10",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "018-13 28 00",
  phoneLink: "tel:+4618132800",
  email: null as string | null,
  emailLink: null as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/harjouren-46034",
  bookingLabel: "Boka på Bokadirekt",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Hårjouren",
  rating: 4.9,
  reviewCount: 911,
  foundedYear: 2010,
  coordinates: { lat: 59.8588, lng: 17.6386 },
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
      title: "Erfarna stylister",
      description: "Professionell klippning och styling hos Hårjouren.",
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
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "nyansering",
      name: "Nyansering",
      icon: "🎯",
      description: "Professionell nyansering med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "l-sh-rskonsultation",
      name: "Löshårskonsultation",
      icon: "✨",
      description: "Professionell löshårskonsultation med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Styling", before: "from-[#4C1D95] to-[#7C3AED]", after: "from-[#EC4899]/40 to-[#7C3AED]" },
    { id: 2, label: "Behandling", before: "from-[#7C3AED] to-[#4C1D95]", after: "from-[#EC4899]/30 to-[#4C1D95]" },
    { id: 3, label: "Resultat", before: "from-[#4C1D95] to-[#7C3AED]/80", after: "from-[#EC4899] to-[#7C3AED]/50" },
    { id: 4, label: "Salong", before: "from-[#7C3AED]/90 to-[#4C1D95]", after: "from-[#EC4899]/50 to-[#EC4899]" },
    { id: 5, label: "Detalj", before: "from-[#4C1D95] to-[#EC4899]/20", after: "from-[#7C3AED] to-[#EC4899]/35" },
    { id: 6, label: "Atmosfär", before: "from-[#7C3AED] to-[#EC4899]/25", after: "from-[#EC4899]/60 to-[#4C1D95]" },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Hårjouren. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Hårjouren varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  about: {
    headline: "Om Hårjouren",
    paragraphs: [
      "Personal full-service salon near the cathedral specializing in color, cuts, and balayage.",
    ],
  },
  faq: [
    {
      question: "Var ligger Hårjouren?",
      answer: "Vi finns på S:t Eriks torg 4, 753 10 Uppsala.",
    },
    {
      question: "Hur bokar jag tid hos Hårjouren?",
      answer: "Boka via Bokadirekt eller ring 018-13 28 00.",
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
