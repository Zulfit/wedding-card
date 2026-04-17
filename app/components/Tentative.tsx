const program = [
    {
        time: "16:00",
        title: "Guest Arrival",
        desc: "Welcome drinks and mingling"
    },
    {
        time: "16:30",
        title: "Wedding Ceremony",
        desc: "The main event of the day"
    },
    {
        time: "17:20",
        title: "Photoshoot",
        desc: "Photo session of the newlyweds with guests"
    },
    {
        time: "18:00",
        title: "Banquet",
        desc: "Time to enjoy the evening, relax and dance"
    }
];

export default function Tentative() {
    return (
        <section className="relative min-h-dvh w-full max-w-md mx-auto flex flex-col items-center py-16 px-6 overflow-hidden bg-[#F8F4EF] sm:border-x sm:border-gray-200">
            {/* Header */}
            <div className="w-full mb-20 relative">
                <h2 className="text-[34px] sm:text-4xl font-serif text-[#4a453e] mb-1 z-10 relative">Program of the day</h2>
                <h3 className="text-3xl sm:text-[34px] font-script text-[#b5a999] absolute -bottom-5 right-4 z-0">
                    wedding schedule
                </h3>
            </div>

            {/* Timeline Container */}
            <div className="relative w-full flex-1">
                {/* Vertical Line */}
                <div className="absolute sm:left-[80px] top-4 bottom-8 w-px bg-[#d2c9bd]"></div>

                <div className="flex flex-col space-y-12 relative z-10 w-full">
                    {program.map((item, idx) => (
                        <div key={idx} className="flex flex-row items-start relative w-full">
                            {/* Decorative ring on the line for second event like in design */}
                            {idx === 1 && (
                                <div className="absolute left-[45px] sm:left-[55px] top-1 opacity-20 pointer-events-none">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#8c7e6b" strokeWidth="0.5">
                                        <circle cx="9" cy="12" r="6" />
                                        <circle cx="15" cy="12" r="6" />
                                    </svg>
                                </div>
                            )}

                            {/* Time */}
                            <div className="w-[55px] sm:w-[65px] text-right shrink-0 z-10">
                                <span className="text-2xl sm:text-3xl font-script text-[#4a453e] pr-2">
                                    {item.time}
                                </span>
                            </div>

                            {/* Timeline Dot */}
                            <div className="w-[30px] flex justify-center shrink-0 mt-[14px]">
                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#8c7e6b] ring-4 ring-[#F8F4EF] z-10"></div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col mt-2 pl-2 sm:pl-3 flex-1 z-10">
                                <h4 className="text-2xl font-script text-[#4a453e] mb-1.5">{item.title}</h4>
                                <p className="text-[10px] sm:text-[11px] text-[#8c7e6b] font-sans leading-relaxed tracking-wide pr-4">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative glasses BG element at the bottom like the design */}
            <div className="absolute right-[-20px] bottom-6 opacity-20 pointer-events-none z-0">
                <svg width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="#8c7e6b" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 3h4l-2 10v7H6v-7L4 3h3z" />
                    <path d="M14 5h4l-2 10v6h-3v-6l-1-4" />
                    <line x1="5" y1="8" x2="9" y2="8" />
                    <line x1="13" y1="10" x2="17" y2="10" />
                </svg>
            </div>
        </section>
    );
}