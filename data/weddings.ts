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
}

export interface WeddingVenue {
  lines: string[];
  address: string;
  mapsUrl: string;
  embedUrl: string;
}

export interface WeddingDetails {
  dressCode: string;
  parking: string;
  contact: { label: string; href: string };
  contacts: { name: string; role: string; href: string }[];
  giftNote: string;
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
  program: WeddingProgramItem[];
  music: string;
  gallery: WeddingGalleryItem[];
  heroImage: string;
  ogImage: string;
  doa: WeddingDoa;
}

export const defaultSlug = "halima-yunus";

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
    },
    venue: {
      lines: ["Dewan Anggerik Glenmarie", "Jalan Kurator U1/61, Kawasan", "Perindustrian Temasya, 40150 Shah Alam"],
      address: "Dewan Anggerik Glenmarie, Jalan Kurator U1/61, Kawasan Perindustrian Temasya, 40150 Shah Alam",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=43+Meam+Street+Blackburn+BB1+9TQ",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.0!2d-2.48!3d53.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDMgTWVhbSBTdHJlZXQsIEJsYWNrYnVybiBCQjEgOVRR!5e0!3m2!1sen!2suk!4v1",
    },
    details: {
      dressCode: "Formal attire. Modest dress appreciated.",
      parking: "Parking available at the venue and nearby areas.",
      contact: {
        label: "Message us on WhatsApp",
        href: "https://wa.me/447000000000",
      },
      contacts: [
        {
          name: "Halima",
          role: "Bride",
          href: "https://wa.me/447000000001",
        },
        {
          name: "Yunus",
          role: "Groom",
          href: "https://wa.me/447000000002",
        },
      ],
      giftNote:
        "Your presence and duas are the greatest gift. If you wish to give, a contribution to our new home would be warmly received.",
    },
    program: [
      {
        time: "16:00",
        title: "Guest Arrival",
        desc: "Welcome drinks and mingling",
      },
      {
        time: "16:30",
        title: "Wedding Ceremony",
        desc: "The main event of the day",
      },
      {
        time: "17:20",
        title: "Photoshoot",
        desc: "Photo session of the newlyweds with guests",
      },
      {
        time: "18:00",
        title: "Banquet",
        desc: "Time to enjoy the evening, relax and dance",
      },
    ],
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
