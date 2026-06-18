import Section, { SectionHeader } from "./Section";
import FadeIn from "./FadeIn";
import type { WeddingProgramItem } from "@/data/weddings";

interface ProgramTimelineProps {
  program: WeddingProgramItem[];
}

export default function ProgramTimeline({ program }: ProgramTimelineProps) {
  return (
    <Section id="program">
      <FadeIn className="w-full flex flex-col items-center flex-1">
        <SectionHeader title="Program of the day" subtitle="wedding schedule" />

        <div className="relative w-full flex-1">
          <div
            className="absolute sm:left-[80px] top-4 bottom-8 w-px bg-[#d2c9bd]"
            aria-hidden="true"
          />

          <ol className="flex flex-col space-y-12 relative z-10 w-full list-none">
            {program.map((item, idx) => (
              <li key={item.time + item.title} className="flex flex-row items-start relative w-full">
                {idx === 1 && (
                  <div
                    className="absolute left-[45px] sm:left-[55px] top-1 opacity-20 pointer-events-none"
                    aria-hidden="true"
                  >
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#8c7e6b" strokeWidth="0.5">
                      <circle cx="9" cy="12" r="6" />
                      <circle cx="15" cy="12" r="6" />
                    </svg>
                  </div>
                )}

                <div className="w-[55px] sm:w-[65px] text-right shrink-0 z-10">
                  <time
                    dateTime={item.time}
                    className="text-2xl sm:text-3xl font-script text-[#4a453e] pr-2"
                  >
                    {item.time}
                  </time>
                </div>

                <div className="w-[30px] flex justify-center shrink-0 mt-[14px]">
                  <div
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#8c7e6b] ring-4 ring-[#F8F4EF] z-10"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-col mt-2 pl-2 sm:pl-3 flex-1 z-10">
                  <h3 className="text-2xl font-script text-[#4a453e] mb-1.5">{item.title}</h3>
                  <p className="text-[10px] sm:text-[11px] text-[#8c7e6b] font-sans leading-relaxed tracking-wide pr-4">
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="absolute right-[-20px] bottom-6 opacity-20 pointer-events-none z-0" aria-hidden="true">
          <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="#8c7e6b" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 3h4l-2 10v7H6v-7L4 3h3z" />
            <path d="M14 5h4l-2 10v6h-3v-6l-1-4" />
            <line x1="5" y1="8" x2="9" y2="8" />
            <line x1="13" y1="10" x2="17" y2="10" />
          </svg>
        </div>
      </FadeIn>
    </Section>
  );
}
