import type { WeddingVenue } from "@/data/weddings";

interface MapLinksProps {
  venue: WeddingVenue;
}

const MAP_OPTIONS = [
  {
    key: "google" as const,
    label: "Google",
    href: (v: WeddingVenue) => v.googleMapsUrl,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
        <circle cx="12" cy="9" r="2.5" fill="white" />
      </svg>
    ),
  },
  {
    key: "waze" as const,
    label: "Waze",
    href: (v: WeddingVenue) => v.wazeUrl,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#33CCFF" />
        <path
          d="M7 14c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5c0 1.2-1 2-2.2 2H9.2C7.9 16 7 15.2 7 14z"
          fill="white"
        />
        <circle cx="10" cy="12.5" r="0.8" fill="#33CCFF" />
        <circle cx="14" cy="12.5" r="0.8" fill="#33CCFF" />
      </svg>
    ),
  },
  {
    key: "apple" as const,
    label: "Maps",
    href: (v: WeddingVenue) => v.appleMapsUrl,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2c-3 0-5.5 2.5-5.5 5.5 0 4 5.5 10.5 5.5 10.5S17.5 11.5 17.5 7.5C17.5 4.5 15 2 12 2z"
          fill="#007AFF"
        />
        <circle cx="12" cy="7.5" r="1.8" fill="white" />
      </svg>
    ),
  },
];

export default function MapLinks({ venue }: MapLinksProps) {
  return (
    <div id="location" className="flex gap-2 flex-wrap">
      {MAP_OPTIONS.map(({ key, label, href, icon }) => (
        <a
          key={key}
          href={href(venue)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#e8dfd5] text-[#4a453e] text-[10px] font-bold tracking-wider uppercase rounded-full hover:border-[#d2c9bd] hover:bg-[#F8F4EF] transition-colors"
        >
          {icon}
          {label}
        </a>
      ))}
    </div>
  );
}
