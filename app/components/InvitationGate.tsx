"use client";

import Image from "next/image";

interface InvitationGateProps {
  bride: string;
  groom: string;
  heroImage: string;
  onOpen: () => void;
  isClosing?: boolean;
}

export default function InvitationGate({
  bride,
  groom,
  heroImage,
  onOpen,
  isClosing = false,
}: InvitationGateProps) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#F8F4EF] ${isClosing ? "animate-gate-out" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Open wedding invitation"
    >
      <div className="relative w-full max-w-md h-full mx-auto flex flex-col items-center justify-center overflow-hidden">
        <Image
          src={heroImage}
          alt=""
          fill
          sizes="448px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#FFFDFA]/85 backdrop-blur-[2px]" />

        <div className="relative z-10 flex flex-col items-center text-center px-8 animate-fade-in">
          <p className="text-xl mb-6" dir="rtl">
            <span className="text-2xl sm:text-3xl font-sans text-[#4a453e]">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </span>
          </p>

          <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#8c7e6b] mb-4">
            Wedding Invitation
          </p>

          <h1 className="text-5xl sm:text-6xl font-script text-[#3D3A38] leading-none mb-1">
            {bride}
          </h1>
          <span className="text-2xl font-serif text-[#3D3A38] font-light my-1">&</span>
          <h1 className="text-5xl sm:text-6xl font-script text-[#3D3A38] leading-none mb-10">
            {groom}
          </h1>

          <button
            type="button"
            onClick={onOpen}
            className="group px-10 py-3.5 bg-[#4a453e] text-white text-[11px] font-bold tracking-[0.2em] uppercase rounded-full shadow-lg shadow-black/15 hover:bg-[#3D3A38] transition-all hover:scale-105 active:scale-95"
          >
            Open Invitation
          </button>

          <p className="mt-4 text-[10px] tracking-widest uppercase text-[#8c7e6b] font-semibold">
            Buka
          </p>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center z-10 text-[#8c7e6b] animate-bounce-subtle">
          <span className="text-[9px] tracking-[0.2em] uppercase font-bold mb-1">Tap to begin</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
