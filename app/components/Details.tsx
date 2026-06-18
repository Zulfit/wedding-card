import type { ReactNode } from "react";
import Section, { SectionHeader } from "./Section";
import FadeIn from "./FadeIn";
import type { WeddingDetails, WeddingVenue } from "@/data/weddings";

interface DetailsProps {
  venue: WeddingVenue;
  details: WeddingDetails;
}

function DetailBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="w-full">
      <h3 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#8c7e6b] mb-2">
        {label}
      </h3>
      <div className="text-sm text-[#4a453e] leading-relaxed">{children}</div>
    </div>
  );
}

export default function Details({ venue, details }: DetailsProps) {
  return (
    <Section id="details">
      <FadeIn className="w-full">
        <SectionHeader title="Event details" subtitle="everything you need" />

        <div className="w-full flex flex-col gap-8 z-10">
          <DetailBlock label="Venue">
            <p className="font-serif text-lg mb-3">{venue.address}</p>
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-[#8c7e6b] hover:text-[#4a453e] transition-colors"
            >
              Open in Maps
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </a>
          </DetailBlock>

          <div id="location" className="w-full rounded-xl overflow-hidden border border-[#e8dfd5] shadow-sm aspect-video">
            <iframe
              src={venue.embedUrl}
              title="Venue location map"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <DetailBlock label="Dress code">{details.dressCode}</DetailBlock>
          <DetailBlock label="Parking">{details.parking}</DetailBlock>
          <DetailBlock label="Contact">
            <div className="space-y-2">
              {details.contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block underline underline-offset-4 decoration-[#d2c9bd] hover:decoration-[#8c7e6b] transition-colors"
                >
                  {contact.name} — {contact.role}
                </a>
              ))}
            </div>
          </DetailBlock>
          <DetailBlock label="Gifts">{details.giftNote}</DetailBlock>
        </div>
      </FadeIn>
    </Section>
  );
}
