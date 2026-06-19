"use client";

import { useEffect, useState } from "react";
import ContactActions from "./ContactActions";
import type { WeddingDetails } from "@/data/weddings";

interface BottomNavProps {
  details: WeddingDetails;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function BottomNav({ details }: BottomNavProps) {
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    if (!contactOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContactOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [contactOpen]);

  return (
    <>
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pointer-events-none"
        aria-label="Quick navigation"
      >
        <div className="pointer-events-auto w-full max-w-md bg-white/95 backdrop-blur-md border-t border-[#e8dfd5] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] safe-area-bottom">
          <div className="grid grid-cols-3 divide-x divide-[#e8dfd5]">
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="flex flex-col items-center gap-1 py-3.5 text-[#4a453e] hover:bg-[#F8F4EF] active:bg-[#F8F4EF] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-[10px] font-bold tracking-wide">Contact</span>
            </button>

            <button
              type="button"
              onClick={() => scrollTo("location")}
              className="flex flex-col items-center gap-1 py-3.5 text-[#4a453e] hover:bg-[#F8F4EF] active:bg-[#F8F4EF] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-[10px] font-bold tracking-wide">Location</span>
            </button>

            <button
              type="button"
              onClick={() => scrollTo("rsvp")}
              className="flex flex-col items-center gap-1 py-3.5 text-[#4a453e] hover:bg-[#F8F4EF] active:bg-[#F8F4EF] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="text-[10px] font-bold tracking-wide">RSVP</span>
            </button>
          </div>
        </div>
      </nav>

      {contactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40"
          role="dialog"
          aria-modal="true"
          aria-label="Contact"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#FFFDFA] rounded-t-2xl sm:rounded-2xl p-6 shadow-xl mx-auto animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-10 h-1 rounded-full bg-[#e8dfd5] mx-auto mb-5 sm:hidden" aria-hidden="true" />

            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-serif text-[#4a453e]">Contact</h2>
                <p className="text-[11px] text-[#8c7e6b] mt-0.5">Call or message us</p>
              </div>
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                className="p-2 hover:bg-black/5 rounded-full transition-colors"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-3">
              {details.contacts.map((contact) => (
                <div
                  key={contact.name}
                  className="flex items-center justify-between gap-3 border border-[#e8dfd5] rounded-xl p-4"
                >
                  <div>
                    <p className="text-lg font-serif text-[#4a453e]">{contact.name}</p>
                    <p className="text-[10px] tracking-widest uppercase text-[#8c7e6b] font-bold mt-0.5">
                      {contact.role}
                    </p>
                  </div>
                  <ContactActions phone={contact.phone} whatsapp={contact.whatsapp} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
