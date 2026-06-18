import Image from "next/image";
import Section, { SectionHeader } from "./Section";
import FadeIn from "./FadeIn";
import type { WeddingGalleryItem } from "@/data/weddings";

interface GalleryProps {
  items: WeddingGalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  return (
    <Section id="gallery">
      <FadeIn className="w-full">
        <SectionHeader title="Our moments" subtitle="a little gallery" />

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2 w-full scrollbar-hide">
          {items.map((item) => (
            <figure
              key={item.src}
              className="snap-center shrink-0 w-[240px] sm:w-[260px] rounded-2xl overflow-hidden border border-[#e8dfd5] shadow-sm bg-white"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-[10px] tracking-widest uppercase font-bold text-[#8c7e6b] text-center">
                {item.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
