"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
    targetDate: Date;
}

export default function Countdown({ targetDate }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const calculateTimeLeft = () => {
            const difference = +targetDate - +new Date();
            let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return timeLeft;
        };

        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // Calendar Data for December 2026
    const daysArr = ["S", "M", "T", "W", "T", "F", "S"];
    // Dec 1, 2026 falls on a Tuesday (index 2).
    const emptyDays = Array(2).fill(null);
    const dates = Array.from({ length: 31 }, (_, i) => i + 1);

    if (!isMounted) return null; // Avoid hydration mismatch on the countdown numbers

    return (
        <section className="relative min-h-dvh w-full max-w-md mx-auto flex flex-col items-center py-16 px-6 overflow-hidden bg-[#F8F4EF] sm:border-x sm:border-gray-200">
            {/* Subtle Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white/30 to-transparent pointer-events-none"></div>
            
            <h2 className="text-5xl font-script text-[#3D3A38] mb-4 z-10 text-center leading-tight">
                Save The Date
            </h2>
            <div className="w-16 h-px bg-[#d2c9bd] mb-12 z-10"></div>

            {/* Countdown Timer */}
            <div className="flex space-x-3 sm:space-x-4 mb-16 z-10">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="flex flex-col items-center">
                        <div className="w-16 h-16 sm:w-16 flex items-center justify-center bg-white border border-[#e8dfd5] rounded-xl shadow-sm mb-3 text-[#3D3A38]">
                            <span className="text-2xl sm:text-3xl font-serif font-light">{value}</span>
                        </div>
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-[#5a564e]">
                            {unit}
                        </span>
                    </div>
                ))}
            </div>

            {/* Calendar UI */}
            <div className="w-full max-w-[320px] bg-white border border-[#e8dfd5] rounded-2xl p-6 shadow-sm z-10 relative">
                {/* Decorative pin holes or elements could go here */}
                
                <h3 className="text-center font-serif text-base tracking-[0.2em] font-semibold uppercase mb-6 text-[#3D3A38]">
                    December <span className="font-sans font-light tracking-wide text-sm ml-1">2026</span>
                </h3>
                
                <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center text-[10px] sm:text-xs mb-2">
                    {daysArr.map((day, idx) => (
                        <div key={idx} className="font-bold text-[#b5a999]">{day}</div>
                    ))}
                    
                    {emptyDays.map((_, idx) => (
                        <div key={`empty-${idx}`} />
                    ))}
                    
                    {dates.map((date) => {
                        const isWeddingDay = date === 30;
                        return (
                            <div key={date} className="flex justify-center items-center h-8 relative">
                                <span 
                                    className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all ${
                                        isWeddingDay 
                                            ? 'bg-[#4a453e] text-white font-bold sm:scale-110 shadow-md ring-2 ring-[#F8F4EF] ring-offset-1' 
                                            : 'text-[#5a564e]'
                                    }`}
                                >
                                    {date}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            
        </section>
    );
}