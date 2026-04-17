import Image from "next/image";

interface HeroProps {
    bride: string;
    groom: string;
    date: {
        month: string;
        dayName: string;
        dayNumber: string;
        year: string;
        time: string;
    };
    location: string[];
}

export default function Hero({ bride, groom, date, location }: HeroProps) {
    return (
        <section className="relative h-dvh w-full max-w-md mx-auto flex flex-col items-center justify-between overflow-hidden bg-[#FFFDFA]">
            {/* Background Image */}
            <Image
                src="/images/bg-wedding-card.jpg"
                alt="Hero Background"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover z-0"
                priority
            />

            {/* Top Content */}
            <div className="flex flex-col items-center mt-12 z-10 text-[#5a564e] tracking-[0.2em] text-[10px] sm:text-xs font-semibold text-center uppercase space-y-6">
                {/* <p className="text-xl font-normal lowercase tracking-normal font-sans" dir="rtl">
                  <span className="text-2xl sm:text-3xl text-[#4a453e]">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
                </p> */}
                <div className="space-y-1.5 pt-8">
                    <p>Together</p>
                    <p>With our families</p>
                </div>
            </div>

            {/* Middle Content - Names */}
            <div className="flex flex-col items-center justify-center z-10 mt-6 sm:mt-8">
                <h1 className="text-6xl sm:text-7xl font-script text-[#3D3A38] leading-none mb-1">
                    {bride}
                </h1>
                <span className="text-3xl sm:text-4xl font-serif text-[#3D3A38] font-light mb-1">&</span>
                <h1 className="text-6xl sm:text-7xl font-script text-[#3D3A38] leading-none">
                    {groom}
                </h1>
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col items-center z-10 text-[#5a564e] text-center mb-24 space-y-7 w-full p-8">
                <p className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] font-bold leading-loose max-w-[280px]">
                    REQUEST THE HONOR OF YOUR
                    <br />
                    PRESENCE AT THE NIKKAH ON
                </p>

                <div className="flex flex-col items-center mt-2">
                    <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] mb-4 uppercase">{date.month}</p>
                    <div className="flex items-center text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                        <span className="w-20 text-right pr-4">{date.dayName}</span>
                        <div className="w-px h-8 bg-[#5a564e]/50"></div>
                        <span className="text-4xl sm:text-5xl font-sans font-bold px-4 text-[#3D3A38]">{date.dayNumber}</span>
                        <div className="w-px h-8 bg-[#5a564e]/50"></div>
                        <span className="w-20 text-left pl-4">{date.time}</span>
                    </div>
                    <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] mt-4">{date.year}</p>
                </div>

                <div className="flex flex-col items-center space-y-1 text-[9px] sm:text-[10px] tracking-[0.15em] uppercase font-bold mt-2">
                    {location.map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
            </div>

            {/* Footer absolute actions */}
            {/* <div className="absolute bottom-6 w-full px-8 flex justify-between items-center z-20 text-[#3D3A38]">
                <button className="flex items-center space-x-2 font-medium text-sm sm:text-base hover:opacity-70 transition-opacity">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                    <span className="font-bold tracking-wide">Visit site</span>
                </button>
                <div className="flex items-center space-x-3">
                    <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                    </button>
                    <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                    </button>
                </div>
            </div> */}
        </section>
    );
}