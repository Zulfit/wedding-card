export interface WeddingProgramItem {
  time: string;
  title: string;
  desc: string;
}

export interface WeddingDate {
  iso: string;
  month: string;
  dayName: string;
  dayNumber: string;
  year: string;
  time: string;
  calendarMonth: string;
  calendarYear: number;
  calendarStartOffset: number;
  calendarDays: number;
  weddingDay: number;
  malayDayName?: string;
  malayMonth?: string;
}

export interface WeddingVenue {
  lines: string[];
  address: string;
  googleMapsUrl: string;
  wazeUrl: string;
  appleMapsUrl: string;
  embedUrl?: string;
}

export interface WeddingDressColor {
  name: string;
  hex: string;
}

export interface WeddingDressCode {
  description: string;
  colors: WeddingDressColor[];
  note?: string;
}

export interface WeddingContact {
  name: string;
  role: string;
  phone: string;
  whatsapp: string;
}

export interface WeddingDetails {
  dressCode: WeddingDressCode;
  contacts: WeddingContact[];
  giftNote: string;
}

export interface WeddingParentsInvitation {
  opening: string;
  fatherName: string;
  motherName: string;
  guestHonorifics: string;
  guestTitles: string;
  ceremonyText: string;
}

export interface WeddingDoa {
  arabic?: string;
  text: string;
  amen: string;
}

export interface WeddingGalleryItem {
  src: string;
  alt: string;
}

export interface Wedding {
  slug: string;
  bride: string;
  groom: string;
  eventType: string;
  date: WeddingDate;
  venue: WeddingVenue;
  details: WeddingDetails;
  parentsInvitation: WeddingParentsInvitation;
  program?: WeddingProgramItem[];
  music: string;
  gallery: WeddingGalleryItem[];
  heroImage: string;
  ogImage: string;
  doa: WeddingDoa;
}

export const defaultSlug = "halima-yunus";

const VENUE_QUERY = encodeURIComponent(
  "Dewan Anggerik Glenmarie, Jalan Kurator U1/61, Shah Alam"
);

export const weddings: Record<string, Wedding> = {
  "halima-yunus": {
    slug: "halima-yunus",
    bride: "Halima",
    groom: "Yunus",
    eventType: "Nikkah",
    date: {
      iso: "2026-12-30T16:30:00",
      month: "DECEMBER",
      dayName: "SUNDAY",
      dayNumber: "30",
      year: "2026",
      time: "11:00 AM - 4:30 PM",
      calendarMonth: "December",
      calendarYear: 2026,
      calendarStartOffset: 2,
      calendarDays: 31,
      weddingDay: 30,
      malayDayName: "AHAD",
      malayMonth: "DIS",
    },
    venue: {
      lines: ["Dewan Anggerik Glenmarie", "Jalan Kurator U1/61, Kawasan", "Perindustrian Temasya, 40150 Shah Alam"],
      address: "Dewan Anggerik Glenmarie, Jalan Kurator U1/61, Kawasan Perindustrian Temasya, 40150 Shah Alam",
      googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${VENUE_QUERY}`,
      wazeUrl: `https://waze.com/ul?q=${VENUE_QUERY}`,
      appleMapsUrl: `https://maps.apple.com/?q=${VENUE_QUERY}`,
    },
    parentsInvitation: {
      opening: "Dengan penuh kesyukuran,",
      fatherName: "ABDULLAH BIN AHMAD",
      motherName: "FATIMAH BINTI HASSAN",
      guestHonorifics: "menjemput Yang Berbahagia",
      guestTitles:
        "Tan Sri/ Puan Sri/ Dato' Seri/ Datin Seri/ Dato'/ Datin/ Tuan/ Puan/ Encik/ Cik",
      ceremonyText: "ke majlis perkahwinan puteri kami dengan pasangannya",
    },
    details: {
      dressCode: {
        description: "Pakaian formal dan sopan digalakkan.",
        colors: [
          { name: "Ivory", hex: "#FFFFF0" },
          { name: "Gold", hex: "#D4AF37" },
          { name: "Sage", hex: "#9CAF88" },
        ],
        note: "Sila elakkan warna putih dan hitam.",
      },
      contacts: [
        {
          name: "Abdullah bin Ahmad",
          role: "Father",
          phone: "tel:+60123456789",
          whatsapp: "https://wa.me/60123456789",
        },
        {
          name: "Ahmad bin Abdullah",
          role: "Brother",
          phone: "tel:+60198765432",
          whatsapp: "https://wa.me/60198765432",
        },
      ],
      giftNote:
        "Your presence and duas are the greatest gift. If you wish to give, a contribution to our new home would be warmly received.",
    },
    music: "/songs/wedding-song.mp3",
    gallery: [
      { src: "/gallery/photo-1.svg", alt: "Halima and Yunus" },
      { src: "/gallery/photo-2.svg", alt: "Engagement moment" },
      { src: "/gallery/photo-3.svg", alt: "Together" },
      { src: "/gallery/photo-4.svg", alt: "Celebration" },
    ],
    heroImage: "/images/bg-wedding-card-1.jpg",
    ogImage: "/images/og-card.svg",
    doa: {
      arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
      text:
        "Ya Allah, Ya Rahman, Ya Rahim — bless this union. Shower Your barakah and mercy upon the couple. Grant them righteous offspring and keep their bond strong until Jannah.",
      amen: "Amin Ya Rabbal Alamin",
    },
  },
};

export function getWedding(slug: string): Wedding | undefined {
  return weddings[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(weddings);
}
