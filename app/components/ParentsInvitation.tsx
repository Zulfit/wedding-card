import Section from "./Section";
import FadeIn from "./FadeIn";
import FloralDivider from "./FloralDivider";
import type { WeddingDate, WeddingParentsInvitation } from "@/data/weddings";

interface ParentsInvitationProps {
  bride: string;
  groom: string;
  date: WeddingDate;
  invitation: WeddingParentsInvitation;
}

export default function ParentsInvitation({
  bride,
  groom,
  date,
  invitation,
}: ParentsInvitationProps) {
  const dateLabel = `${date.malayDayName ?? date.dayName} | ${date.dayNumber} ${date.malayMonth ?? date.month.slice(0, 3)} ${date.year}`;

  return (
    <Section id="parents-invitation" className="!min-h-0" bg="cream">
      <FadeIn className="w-full flex flex-col items-center text-center">
        <p className="text-xl sm:text-2xl text-[#3D3A38] mb-6" dir="rtl">
          <span className="font-sans">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
        </p>

        <FloralDivider className="mb-8" />

        <p className="text-sm text-[#4a453e] mb-6">{invitation.opening}</p>

        <div className="space-y-1 mb-6">
          <p className="text-sm sm:text-base font-serif font-bold text-[#3D3A38] tracking-wide uppercase leading-relaxed">
            {invitation.fatherName}
          </p>
          <p className="text-sm font-serif text-[#3D3A38]">&</p>
          <p className="text-sm sm:text-base font-serif font-bold text-[#3D3A38] tracking-wide uppercase leading-relaxed">
            {invitation.motherName}
          </p>
        </div>

        <div className="text-xs sm:text-sm text-[#4a453e] leading-relaxed space-y-2 max-w-xs mb-8">
          <p>{invitation.guestHonorifics}</p>
          <p className="text-[11px] sm:text-xs leading-loose">{invitation.guestTitles}</p>
          <p>{invitation.ceremonyText}</p>
        </div>

        <p className="text-3xl sm:text-4xl font-script text-[#8B2942] leading-snug mb-8">
          {groom} &amp; {bride}
        </p>

        <FloralDivider className="mb-8" />

        <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#3D3A38]">
          {dateLabel}
        </p>
      </FadeIn>
    </Section>
  );
}
