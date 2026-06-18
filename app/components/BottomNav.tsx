"use client";

import { useState } from "react";
import type { WeddingDetails } from "@/data/weddings";

interface BottomNavProps {
  details: WeddingDetails;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function BottomNav({ details }: BottomNavProps) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pointer-events-none"
        aria-label="Quick navigation"
      >
        <div className="pointer-events-auto w-full max-w-md bg-white/95 backdrop-blur-md border-t border-[#e8dfd5] shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-3 divide-x divide-[#e8dfd5]">
            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="flex flex-col items-center gap-1 py-3 text-[#4a453e] hover:bg-[#F8F4EF] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-[9px] font-bold tracking-widest uppercase">Hubungi</span>
            </button>

            <button
              type="button"
              onClick={() => scrollTo("location")}
              className="flex flex-col items-center gap-1 py-3 text-[#4a453e] hover:bg-[#F8F4EF] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-[9px] font-bold tracking-widest uppercase">Lokasi</span>
            </button>

            <button
              type="button"
              onClick={() => scrollTo("rsvp")}
              className="flex flex-col items-center gap-1 py-3 text-[#4a453e] hover:bg-[#F8F4EF] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span className="text-[9px] font-bold tracking-widest uppercase">RSVP</span>
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
            className="w-full max-w-md bg-[#FFFDFA] rounded-t-2xl sm:rounded-2xl p-6 shadow-xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-serif text-[#4a453e]">Hubungi</h2>
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

            <div className="space-y-4">
              {details.contacts.map((contact) => (
                <div key={contact.name} className="border border-[#e8dfd5] rounded-xl p-4">
                  <p className="text-lg font-serif text-[#4a453e]">{contact.name}</p>
                  <p className="text-[10px] tracking-widest uppercase text-[#8c7e6b] font-bold mt-0.5 mb-3">
                    {contact.role}
                  </p>
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#4a453e] font-medium hover:text-[#8c7e6b] transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.86L0 24l6.335-1.662A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
