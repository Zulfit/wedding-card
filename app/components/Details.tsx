import type { ReactNode } from "react";
import Section, { SectionHeader } from "./Section";
import FadeIn from "./FadeIn";
import MapLinks from "./MapLinks";
import ContactActions from "./ContactActions";
import type { WeddingDetails, WeddingDressCode, WeddingVenue } from "@/data/weddings";

interface DetailsProps {
  venue: WeddingVenue;
  details: WeddingDetails;
}

function DetailCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="w-full bg-white rounded-2xl border border-[#e8dfd5] p-5 shadow-sm">
      <h3 className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#8c7e6b] mb-2">
        {label}
      </h3>
      <div className="text-sm text-[#4a453e] leading-relaxed">{children}</div>
    </div>
  );
}

function DressCodeCard({ dressCode }: { dressCode: WeddingDressCode }) {
  return (
    <DetailCard label="Dress code">
      <p className="mb-4">{dressCode.description}</p>
      {dressCode.colors.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-4">
          {dressCode.colors.map((color) => (
            <div key={color.name} className="flex items-center gap-2">
              <span
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm ring-1 ring-[#e8dfd5]"
                style={{ backgroundColor: color.hex }}
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-[#5a564e]">{color.name}</span>
            </div>
          ))}
        </div>
      )}
      {dressCode.note && (
        <p className="text-xs text-[#8c7e6b] italic border-t border-[#e8dfd5] pt-3">
          {dressCode.note}
        </p>
      )}
    </DetailCard>
  );
}

export default function Details({ venue, details }: DetailsProps) {
  return (
    <Section id="details" bg="white">
      <FadeIn className="w-full">
        <SectionHeader title="Event Details" />

        <div className="w-full flex flex-col gap-5 z-10">
          <DetailCard label="Venue">
            <p className="font-serif text-lg mb-4">{venue.address}</p>
            <MapLinks venue={venue} />
          </DetailCard>

          <DressCodeCard dressCode={details.dressCode} />

          <DetailCard label="Contact">
            <div className="space-y-3">
              {details.contacts.map((contact) => (
                <div
                  key={contact.name}
                  className="flex items-center justify-between gap-3 p-3 rounded-xl border border-[#e8dfd5]"
                >
                  <div>
                    <p className="font-serif text-[#4a453e]">{contact.name}</p>
                    <p className="text-[10px] tracking-widest uppercase text-[#8c7e6b] font-bold">
                      {contact.role}
                    </p>
                  </div>
                  <ContactActions phone={contact.phone} whatsapp={contact.whatsapp} />
                </div>
              ))}
            </div>
          </DetailCard>

          <DetailCard label="Gifts">{details.giftNote}</DetailCard>
        </div>
      </FadeIn>
    </Section>
  );
}
