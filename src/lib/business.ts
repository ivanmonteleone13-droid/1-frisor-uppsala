export const business = {
  name: "#1 Frisör Uppsala",
  tagline: "Uppsalas mest hyllade herrfrisör på Drottninggatan",
  description:
    "Prisbelönt frisör och barber i hjärtat av Uppsala. Herrklippning, skäggtrim och barnklippning med 4,9 i betyg och över 411 recensioner på Bokadirekt — mitt på Drottninggatan 1.",
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
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "#1 Frisör Uppsala",
  rating: 4.9,
  reviewCount: 411,
  foundedYear: 2015,
  coordinates: { lat: 59.8588, lng: 17.6386 },
  hours: {
    note: "Öppet vardagar 10–17. Ring gärna vid sen ankomst.",
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
    { label: "4,9 på Bokadirekt", icon: "star" },
    { label: "411+ verifierade omdömen", icon: "reviews" },
    { label: "Centralt på Drottninggatan", icon: "location" },
    { label: "Studentrabatt tillgänglig", icon: "student" },
  ],
  usps: [
    {
      title: "Uppsalas högst rankade",
      description:
        "Med 4,9 i snittbetyg och hundratals femstjärniga omdömen är vi en av stadens mest rekommenderade frisörer.",
    },
    {
      title: "Barber med precision",
      description:
        "Klassisk herrklippning, fades och skäggtrim utförs med omsorg — varje gång du sätter dig i stolen.",
    },
    {
      title: "Perfekt cityläge",
      description:
        "Drottninggatan 1, ett stenkast från Stora torget. Enkelt att kombinera klippningen med shopping eller jobb.",
    },
    {
      title: "Rimliga priser",
      description:
        "Premiumkvalitet utan premiumpris. Studentklippning och paketpriser för hår & skägg gör det lätt att komma tillbaka.",
    },
    {
      title: "Snabb onlinebokning",
      description:
        "Välj tid direkt på Bokadirekt eller ring oss — vi svarar snabbt och hjälper dig hitta en passande tid.",
    },
    {
      title: "Familjevänligt",
      description:
        "Barnklippning i lugn miljö. Vi tar oss tid så att även de yngsta kunderna känner sig trygga.",
    },
  ],
  services: [
    {
      id: "herrklippning",
      name: "Herrklippning",
      icon: "✂️",
      description:
        "Klassisk eller modern herrklippning med tvätt, klippning och styling. Vi lyssnar på hur du vill ha det — och ger professionella råd.",
      duration: "30–45 min",
      priceFrom: 350,
      note: "Pris varierar efter hårlängd och styling.",
    },
    {
      id: "har-skagg",
      name: "Hår & skägg",
      icon: "🧔",
      description:
        "Komplett paket med klippning och skäggtrim. Perfekt när du vill se skarp och välputstad ut från topp till tå.",
      duration: "45–60 min",
      priceFrom: 450,
      note: "Vårt mest populära paket bland stamkunder.",
    },
    {
      id: "barnklippning",
      name: "Barnklippning",
      icon: "👦",
      description:
        "Skonsam klippning för barn i alla åldrar. Tålmodigt bemötande och en avslappnad stämning i stolen.",
      duration: "20–30 min",
      priceFrom: 250,
      note: "Från ca 3 år — ring vid frågor.",
    },
    {
      id: "skaggtrim",
      name: "Skäggtrim",
      icon: "🪒",
      description:
        "Formgivning, konturer och trim med rakkniv eller maskin. Vi skapar linjer som framhäver ditt ansikte.",
      duration: "15–25 min",
      priceFrom: 200,
      note: "Kan kombineras med herrklippning.",
    },
    {
      id: "studentklippning",
      name: "Studentklippning",
      icon: "🎓",
      description:
        "Rabatterad herrklippning för studenter med giltigt Mecenat- eller CSN-bevis. Samma kvalitet, lägre pris.",
      duration: "30 min",
      priceFrom: 299,
      note: "Visa studentlegitimation vid besök.",
    },
  ],
  gallery: [
    { id: 1, label: "Fade & skägg", before: "from-[#2d2d3a] to-[#1a1a2e]", after: "from-[#c9a227]/40 to-[#1a1a2e]" },
    { id: 2, label: "Klassisk herrklippning", before: "from-[#3d3d4a] to-[#252535]", after: "from-[#e8dcc8] to-[#c9a227]/30" },
    { id: 3, label: "Skäggformning", before: "from-[#1a1a2e] to-[#0f0f1a]", after: "from-[#c9a227] to-[#8b7019]" },
    { id: 4, label: "Modern fade", before: "from-[#4a4a5a] to-[#2a2a3a]", after: "from-[#f5f0e8] to-[#c9a227]/50" },
    { id: 5, label: "Barnklippning", before: "from-[#5c5c6c] to-[#3a3a4a]", after: "from-[#d4c4a8] to-[#c9a227]/35" },
    { id: 6, label: "Hår & skägg-paket", before: "from-[#2a2a3a] to-[#151520]", after: "from-[#c9a227]/60 to-[#1a1a2e]" },
  ],
  testimonials: [
    {
      text: "Bästa frisören i Uppsala, punkt slut. Alltid nöjd med klippningen och skägget ser proffsigt ut varje gång.",
      author: "Stamkund",
      source: "Bokadirekt, parafraserat",
      rating: 5,
    },
    {
      text: "Snabb service, trevlig personal och riktigt bra pris för kvaliteten. Lätt att boka online och alltid välkomnad.",
      author: "Återkommande kund",
      source: "Bokadirekt, parafraserat",
      rating: 5,
    },
    {
      text: "Tog med sonen på barnklippning — han var lugn hela tiden. Frisören var tålmodig och resultatet blev toppen.",
      author: "Förälder",
      source: "Bokadirekt, parafraserat",
      rating: 5,
    },
    {
      text: "Perfekt fade och skäggtrim. Centralt läge gör det enkelt att klippa sig på lunchen. Rekommenderar starkt!",
      author: "Kundrecension",
      source: "Bokadirekt, parafraserat",
      rating: 5,
    },
    {
      text: "Studentpriset är guld värt. Samma noggranna jobb som dyrare salonger men till en bråkdel av priset.",
      author: "Student",
      source: "Bokadirekt, parafraserat",
      rating: 5,
    },
    {
      text: "Har gått hit i flera år. Konsekvent hög kvalitet och de kommer ihåg hur jag vill ha det — det märks.",
      author: "Lojal kund",
      source: "Bokadirekt, parafraserat",
      rating: 5,
    },
  ],
  about: {
    headline: "En frisör som Uppsala litar på",
    paragraphs: [
      "På Drottninggatan 1 har #1 Frisör Uppsala blivit en självklar destination för män som vill ha en skarp look utan krångel. Vi kombinerar klassisk barberkonst med moderna trender — alltid med fokus på dig som kund.",
      "Det som gör oss unika är inte bara tekniken i stolen, utan helheten: korta väntetider, tydliga priser och ett team som bryr sig om varje detalj. Över 411 kunder har gett oss nästan full pott på Bokadirekt, och det är ett förtroende vi värnar om varje dag.",
      "Oavsett om du behöver en snabb studentklippning, en komplett hår- och skäggbehandling eller en trygg barnklippning — du är välkommen precis som du är. Boka online eller slå oss en signal.",
    ],
  },
  faq: [
    {
      question: "Var ligger #1 Frisör Uppsala?",
      answer:
        "Vi finns på Drottninggatan 1, 753 10 Uppsala — mitt i city, nära Stora torget och centralstationen. Perfekt om du vill klippa dig på väg till eller från jobbet.",
    },
    {
      question: "Hur bokar jag tid hos er?",
      answer:
        "Enklast bokar du via Bokadirekt på vår profilsida. Vill du prata med oss direkt? Ring 072-323 23 00 så hjälper vi dig hitta en ledig tid.",
    },
    {
      question: "Vad kostar en herrklippning i Uppsala?",
      answer:
        "Herrklippning startar från 350 kr. Hår & skägg-paket från 450 kr och studentklippning från 299 kr med giltigt studentbevis. Exakt pris beror på hårlängd och önskemål.",
    },
    {
      question: "Erbjuder ni studentrabatt?",
      answer:
        "Ja! Med giltigt Mecenat- eller CSN-bevis får du studentklippning från 299 kr. Visa legitimationen vid besök så drar vi rabatten.",
    },
    {
      question: "Kan jag ta med mitt barn på klippning?",
      answer:
        "Absolut. Vi erbjuder barnklippning från ca 3 år i en lugn och trygg miljö. Boka gärna en lugnare tid på förmiddagen om barnet är extra känsligt.",
    },
    {
      question: "Hur lång tid tar en klippning?",
      answer:
        "En vanlig herrklippning tar 30–45 minuter. Hår & skägg cirka 45–60 minuter. Skäggtrim enskilt går på 15–25 minuter.",
    },
    {
      question: "Vilka öppettider har ni?",
      answer:
        "Vi har öppet måndag till fredag 10:00–17:00. Lördag och söndag är vi stängda. Se alltid aktuella tider på Bokadirekt innan du kommer.",
    },
    {
      question: "Gör ni skäggtrim och fades?",
      answer:
        "Ja, skäggtrim och moderna fades är våra specialiteter. Berätta hur du vill ha det — vi guidar dig gärna utifrån ansiktsform och stil.",
    },
    {
      question: "Varför har ni så höga betyg på Bokadirekt?",
      answer:
        "Vi lyssnar på våra kunder, håller tider och levererar konsekvent kvalitet. Med 4,9 i snittbetyg och 411+ omdömen är vi stolta över att vara en av Uppsalas mest rekommenderade frisörer.",
    },
    {
      question: "Finns det parkering nära salongen?",
      answer:
        "Det finns flera parkeringsgarage och gatuparkering i centrala Uppsala. Drottninggatan är lätt att nå till fots, cykel eller kollektivtrafik från hela stan.",
    },
  ],
  seoKeywords: [
    "frisör Uppsala",
    "barberare Uppsala",
    "herrklippning Uppsala",
    "skäggtrim Uppsala",
    "frisör Drottninggatan",
    "barber Uppsala centrum",
    "studentklippning Uppsala",
    "barnklippning Uppsala",
    "bästa frisör Uppsala",
    "hår och skägg Uppsala",
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

export function formatPrice(amount: number) {
  return `från ${amount} kr`;
}
