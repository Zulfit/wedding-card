import Section from "./Section";
import FadeIn from "./FadeIn";
import type { WeddingDoa } from "@/data/weddings";

interface DoaProps {
  doa: WeddingDoa;
}

export default function Doa({ doa }: DoaProps) {
  return (
    <Section id="doa">
      <FadeIn className="w-full flex flex-col items-center text-center">
        <div className="w-12 h-px bg-[#d2c9bd] mb-10" aria-hidden="true" />

        {doa.arabic && (
          <p
            className="text-2xl sm:text-3xl text-[#4a453e] leading-loose mb-8 font-sans"
            dir="rtl"
          >
            {doa.arabic}
          </p>
        )}

        <blockquote className="max-w-sm">
          <p className="text-sm sm:text-base text-[#5a564e] leading-relaxed italic font-serif">
            {doa.text}
          </p>
        </blockquote>

        <p className="mt-6 text-sm font-serif text-[#4a453e] font-semibold tracking-wide">
          {doa.amen}
        </p>

        <div className="w-12 h-px bg-[#d2c9bd] mt-10" aria-hidden="true" />
      </FadeIn>
    </Section>
  );
}
