import Image from "next/image";
import ShareButton from "./ShareButton";
import type { WeddingDate, WeddingVenue } from "@/data/weddings";

interface HeroProps {
  bride: string;
  groom: string;
  eventType: string;
  date: WeddingDate;
  venue: WeddingVenue;
  heroImage: string;
  guestName?: string;
}

export default function Hero({
  bride,
  groom,
  eventType,
  date,
  venue,
  heroImage,
  guestName,
}: HeroProps) {
  const shareTitle = `${bride} & ${groom} — ${eventType}`;
  const shareText = `You're invited to our ${eventType} on ${date.dayName}, ${date.dayNumber} ${date.month} ${date.year}.`;

  return (
    <section
      id="hero"
      aria-label="Invitation"
      className="relative h-dvh w-full max-w-md mx-auto flex flex-col items-center justify-between overflow-hidden bg-[#FFFDFA]"
    >
      <Image
        src={heroImage}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 448px"
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-white/30 z-[1]" aria-hidden="true" />

      <div className="flex flex-col items-center mt-10 z-10 text-[#5a564e] tracking-[0.2em] text-xs font-semibold text-center uppercase space-y-5">
        {guestName && (
          <p className="px-5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm text-[11px] tracking-[0.15em] normal-case font-serif text-[#4a453e]">
            Dear <span className="font-semibold">{guestName}</span>
          </p>
        )}
        <p className="text-xl font-normal lowercase tracking-normal font-sans" dir="rtl">
          <span className="text-2xl sm:text-3xl text-[#4a453e]">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </span>
        </p>
        <div className="space-y-1">
          <p>Together</p>
          <p>With our families</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center z-10 mt-4 sm:mt-6">
        <h1 className="text-6xl sm:text-7xl font-script text-[#3D3A38] leading-none mb-1">
          {bride}
        </h1>
        <span className="text-3xl sm:text-4xl font-serif text-[#3D3A38] font-light mb-1">
          &
        </span>
        <h1 className="text-6xl sm:text-7xl font-script text-[#3D3A38] leading-none">
          {groom}
        </h1>
      </div>

      <div className="flex flex-col items-center z-10 text-[#5a564e] text-center mb-24 space-y-6 w-full p-8">
        <p className="text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] font-bold leading-loose max-w-[280px]">
          REQUEST THE HONOR OF YOUR
          <br />
          PRESENCE AT THE {eventType.toUpperCase()} ON
        </p>

        <div className="flex flex-col items-center">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] mb-3 uppercase">
            {date.month}
          </p>
          <div className="flex items-center text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            <span className="w-20 text-right pr-4">{date.dayName}</span>
            <div className="w-px h-8 bg-[#5a564e]/50" aria-hidden="true" />
            <span className="text-4xl sm:text-5xl font-sans font-bold px-4 text-[#3D3A38]">
              {date.dayNumber}
            </span>
            <div className="w-px h-8 bg-[#5a564e]/50" aria-hidden="true" />
            <span className="w-20 text-left pl-4 text-[9px] sm:text-[10px] leading-tight">
              {date.time}
            </span>
          </div>
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] mt-3">
            {date.year}
          </p>
        </div>

        <div className="flex flex-col items-center space-y-1 text-[10px] tracking-[0.15em] uppercase font-bold">
          {venue.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      {/* <div className="absolute bottom-6 w-full px-6 flex justify-between items-center z-20 text-[#3D3A38]">
        <a
          href="#details"
          className="flex flex-col items-center gap-0.5 font-medium text-[#4a453e] hover:opacity-70 transition-opacity animate-bounce-subtle"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
        </a>
        <ShareButton title={shareTitle} text={shareText} />
      </div> */}
    </section>
  );
}
