"use client";

import { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import Section from "./Section";
import FadeIn from "./FadeIn";
import type { Wedding } from "@/data/weddings";
import { buildIcsContent, getGoogleCalendarUrl } from "@/lib/calendar";

interface CountdownProps {
  wedding: Wedding;
}

const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function Countdown({ wedding }: CountdownProps) {
  const isClient = useIsClient();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(wedding.date.iso);
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const tick = () => setTimeLeft(calculateTimeLeft());
    const timer = setInterval(tick, 1000);
    const immediate = setTimeout(tick, 0);
    return () => {
      clearInterval(timer);
      clearTimeout(immediate);
    };
  }, [wedding.date.iso]);

  const downloadIcs = useCallback(() => {
    const content = buildIcsContent(wedding);
    const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${wedding.slug}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  }, [wedding]);

  const emptyDays = Array(wedding.date.calendarStartOffset).fill(null);
  const dates = Array.from({ length: wedding.date.calendarDays }, (_, i) => i + 1);

  if (!isClient) return null;

  return (
    <Section id="countdown">
      <FadeIn className="w-full flex flex-col items-center">
        <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-white/30 to-transparent pointer-events-none" />

        <h2 className="text-5xl font-script text-[#3D3A38] mb-4 z-10 text-center leading-tight">
          Save The Date
        </h2>
        <div className="w-16 h-px bg-[#d2c9bd] mb-12 z-10" aria-hidden="true" />

        <div
          className="flex space-x-3 sm:space-x-4 mb-10 z-10"
          role="timer"
          aria-live="polite"
          aria-label="Countdown to wedding day"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white border border-[#e8dfd5] rounded-xl shadow-sm mb-3 text-[#3D3A38]">
                <span className="text-2xl sm:text-3xl font-serif font-light">{value}</span>
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-[#5a564e]">
                {unit}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 z-10">
          <a
            href={getGoogleCalendarUrl(wedding)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#4a453e] text-white text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-[#3D3A38] transition-colors"
          >
            Google Calendar
          </a>
          <button
            type="button"
            onClick={downloadIcs}
            className="px-5 py-2.5 bg-white border border-[#e8dfd5] text-[#4a453e] text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-[#FFFDFA] transition-colors"
          >
            Download .ics
          </button>
        </div>

        <div className="w-full max-w-[320px] bg-white border border-[#e8dfd5] rounded-2xl p-6 shadow-sm z-10">
          <h3 className="text-center font-serif text-base tracking-[0.2em] font-semibold uppercase mb-6 text-[#3D3A38]">
            {wedding.date.calendarMonth}{" "}
            <span className="font-sans font-light tracking-wide text-sm ml-1">
              {wedding.date.calendarYear}
            </span>
          </h3>

          <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center text-[10px] sm:text-xs mb-2">
            {DAY_LABELS.map((day) => (
              <div key={day} className="font-bold text-[#b5a999]">
                {day}
              </div>
            ))}

            {emptyDays.map((_, idx) => (
              <div key={`empty-${idx}`} />
            ))}

            {dates.map((date) => {
              const isWeddingDay = date === wedding.date.weddingDay;
              return (
                <div key={date} className="flex justify-center items-center h-8">
                  <span
                    className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all ${
                      isWeddingDay
                        ? "bg-[#4a453e] text-white font-bold sm:scale-110 shadow-md ring-2 ring-[#F8F4EF] ring-offset-1"
                        : "text-[#5a564e]"
                    }`}
                    aria-label={isWeddingDay ? `Wedding day, ${date}` : undefined}
                  >
                    {date}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
