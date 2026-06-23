export const business = {
  name: "#1 Frisör Uppsala",
  tagline: "Affordable cuts in central Uppsala",
  description: "Prisvärd barbershop på Drottninggatan 1 i Uppsala. Herrklippning, skägg och styling med 4.9 i betyg och 411+ omdömen på Bokadirekt.",
  category: "Hair Salon",
  address: {
    street: "Drottninggatan 1",
    postalCode: "753 10",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "072-323 23 00",
  phoneLink: "tel:+46723232300",
  email: null as string | null,
  emailLink: null as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/1-frisor-uppsala-50655",
  bookingLabel: "Boka på Bokadirekt",
  websiteUrl: "https://1frisoruppsala.se/" as string | null,
  logoImage: "/images/logo.jpg" as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-1.jpg",
  facebookUrl: "https://www.facebook.com/1-Fris%C3%B6r-Uppsala-100100118595309/" as string | null,
  instagramUrl: "https://instagram.com/stylebyomar" as string | null,
  owner: "#1 Frisör Uppsala",
  rating: 4.9,
  reviewCount: 411,
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
    { label: "411+ omdömen", icon: "reviews" },
    { label: "Uppsala centrum", icon: "location" },
    { label: "✂️ Barber Gold", icon: "student" },
  ],
  usps: [
    {
      title: "Erfarna stylister",
      description: "Professionell klippning och styling hos #1 Frisör Uppsala.",
    },
    {
      title: "Centralt läge",
      description: "Beläget på Drottninggatan 1 i Uppsala.",
    },
    {
      title: "Höga betyg",
      description: "411+ nöjda kunder enligt offentliga omdömen.",
    },
    {
      title: "Enkel bokning",
      description: "Boka tid online eller ring för snabb service.",
    },
  ],
  services: [
    {
      id: "herrklippning",
      name: "Herrklippning",
      icon: "✂️",
      description: "Professionell herrklippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: 350,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "h-r-sk-gg",
      name: "Hår & skägg",
      icon: "💇",
      description: "Professionell hår & skägg med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: 450,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "barnklippning",
      name: "Barnklippning",
      icon: "⭐",
      description: "Professionell barnklippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: 300,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "sk-ggtrim",
      name: "Skäggtrim",
      icon: "🎯",
      description: "Professionell skäggtrim med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: 150,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "studentklippning",
      name: "Studentklippning",
      icon: "✨",
      description: "Professionell studentklippning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Barber Omar", image: "/images/gallery-1.jpg" },
    { id: 2, label: "Klippresultat", image: "/images/gallery-2.jpg" },
    { id: 3, label: "Styling", image: "/images/gallery-3.jpg" },
    { id: 4, label: "Skäggtrim", image: "/images/gallery-4.jpg" },
    { id: 5, label: "Salongen", image: "/images/gallery-5.jpg" },
    { id: 6, label: "Herrklippning", image: "/images/gallery-6.jpg" },
  ],
  testimonials: [
    {
      text: "Lika fint klippt och vänligt och professionellt bemötande som alltid. Min son klipper sig alltid hos Omar och vi är alltid lika nöjda. Rekommenderas starkt:)",
      author: "Teresa S.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/1-frisor-uppsala-50655",
      rating: 5,
      date: "2026-03-28",
    },
    {
      text: "Frisören bar helt fantastiskt och super duktig// ",
      author: "Metin P.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/1-frisor-uppsala-50655",
      rating: 5,
      date: "2026-06-07",
    },
    {
      text: "Bästa Omar ❤️☝️",
      author: "Arafat A.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/1-frisor-uppsala-50655",
      rating: 5,
      date: "2026-05-04",
    },
    {
      text: "Jag var super nöjd med mitt första besök i den här salongen. Frisören var extremt professionell. Kommer garanterat igen!",
      author: "Isak Pettersson",
      source: "1frisoruppsala.se",
      sourceUrl: "https://1frisoruppsala.se/",
      rating: 5,
      date: "",
    },
  ],
  about: {
    headline: "Om #1 Frisör Uppsala",
    paragraphs: [
      "Vi är stolta att erbjuda prisvärda tjänster utan att kompromissa på kvaliteten. Vårt mål är att ge dig en personlig och behaglig upplevelse — så att du kan gå därifrån och känna dig samt se fantastisk ut.",
    ],
  },
  faq: [
    {
      question: "Var ligger #1 Frisör Uppsala?",
      answer: "Vi finns på Drottninggatan 1, 753 10 Uppsala.",
    },
    {
      question: "Hur bokar jag tid hos #1 Frisör Uppsala?",
      answer: "Boka via Bokadirekt eller ring 072-323 23 00.",
    },
    {
      question: "Vad säger kunder om #1 Frisör Uppsala?",
      answer: "Vi har 4.9 i snittbetyg baserat på 411+ recensioner.",
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
      answer: "Gatuparkering finns i närheten av Drottninggatan 1.",
    },
  ],
  seoKeywords: [
    "frisör Uppsala",
    "barberare Uppsala",
    "herrklippning centrum",
    "skäggtrim Uppsala",
    "#1 Frisör Uppsala",
    "Uppsala barber_gold",
  ],
  brandColors: {
    primary: "#1a1a2e",
    secondary: "#c9a227",
    accent: "#f5f0e8",
    dark: "#0f0f1a",
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
