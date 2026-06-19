"use client";

import { useState, type FormEvent } from "react";
import Section, { SectionHeader } from "./Section";
import FadeIn from "./FadeIn";

interface RsvpFormProps {
  slug: string;
  defaultName?: string;
}

type Attendance = "yes" | "no" | "maybe";

const ATTENDANCE_OPTIONS: { value: Attendance; label: string }[] = [
  { value: "yes", label: "I'll be there" },
  { value: "no", label: "Can't make it" },
  { value: "maybe", label: "Not sure yet" },
];

const SUCCESS_MESSAGES: Record<Attendance, string> = {
  yes: "We can't wait to celebrate with you!",
  no: "We're sorry you can't make it. You'll be in our prayers.",
  maybe: "No worries — let us know when you've decided.",
};

export default function RsvpForm({ slug, defaultName = "" }: RsvpFormProps) {
  const [name, setName] = useState(defaultName);
  const [attendance, setAttendance] = useState<Attendance>("yes");
  const [guestCount, setGuestCount] = useState(1);
  const [dietaryNotes, setDietaryNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedAttendance, setSubmittedAttendance] = useState<Attendance>("yes");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, name, attendance, guestCount, dietaryNotes }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong");
      }

      setSubmittedAttendance(attendance);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to submit RSVP");
    }
  };

  if (status === "success") {
    return (
      <Section id="rsvp" bg="white">
        <FadeIn className="w-full text-center py-8">
          <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#4a453e]/10 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a453e" strokeWidth="2.5" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <SectionHeader title="Thank you"/>
          <p className="text-[#4a453e] text-sm leading-relaxed max-w-xs mx-auto">
            {SUCCESS_MESSAGES[submittedAttendance]}
          </p>
          <p className="mt-4 text-[11px] text-[#8c7e6b]">
            Your RSVP has been received.
          </p>
        </FadeIn>
      </Section>
    );
  }

  return (
    <Section id="rsvp" bg="white">
      <FadeIn className="w-full">
        <SectionHeader title="RSVP"/>
        <p className="text-sm text-[#8c7e6b] -mt-8 mb-8 text-center">
          Please let us know if you can join us.
        </p>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 z-10">
          <div>
            <label htmlFor="rsvp-name" className="block text-[11px] font-bold tracking-widest uppercase text-[#8c7e6b] mb-2">
              Full name
            </label>
            <input
              id="rsvp-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-[#e8dfd5] bg-white text-[#4a453e] text-sm focus:outline-none focus:ring-2 focus:ring-[#d2c9bd] focus:border-transparent"
              placeholder="Your name"
              autoComplete="name"
            />
          </div>

          <fieldset>
            <legend className="block text-[11px] font-bold tracking-widest uppercase text-[#8c7e6b] mb-2">
              Will you attend?
            </legend>
            <div className="flex flex-col gap-2">
              {ATTENDANCE_OPTIONS.map(({ value, label }) => (
                <label
                  key={value}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium cursor-pointer border transition-colors ${
                    attendance === value
                      ? "bg-[#4a453e] text-white border-[#4a453e]"
                      : "bg-white text-[#4a453e] border-[#e8dfd5] hover:border-[#d2c9bd]"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={value}
                    checked={attendance === value}
                    onChange={() => setAttendance(value)}
                    className="sr-only"
                  />
                  <span
                    className={`w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${
                      attendance === value ? "border-white" : "border-[#d2c9bd]"
                    }`}
                    aria-hidden="true"
                  >
                    {attendance === value && (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </span>
                  {label}
                </label>
              ))}
            </div>
          </fieldset>

          {attendance === "yes" && (
            <div>
              <label htmlFor="rsvp-guests" className="block text-[11px] font-bold tracking-widest uppercase text-[#8c7e6b] mb-2">
                Number of guests (including you)
              </label>
              <input
                id="rsvp-guests"
                type="number"
                min={1}
                max={10}
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full px-4 py-3.5 rounded-xl border border-[#e8dfd5] bg-white text-[#4a453e] text-sm focus:outline-none focus:ring-2 focus:ring-[#d2c9bd] focus:border-transparent"
              />
            </div>
          )}

          <div>
            <label htmlFor="rsvp-dietary" className="block text-[11px] font-bold tracking-widest uppercase text-[#8c7e6b] mb-2">
              Dietary notes <span className="normal-case tracking-normal font-normal">(optional)</span>
            </label>
            <textarea
              id="rsvp-dietary"
              rows={3}
              value={dietaryNotes}
              onChange={(e) => setDietaryNotes(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-[#e8dfd5] bg-white text-[#4a453e] text-sm focus:outline-none focus:ring-2 focus:ring-[#d2c9bd] focus:border-transparent resize-none"
              placeholder="Allergies or dietary requirements"
            />
          </div>

          {status === "error" && (
            <p className="text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3" role="alert">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 bg-[#4a453e] text-white text-[11px] font-bold tracking-widest uppercase rounded-full hover:bg-[#3D3A38] transition-colors disabled:opacity-60 shadow-md shadow-black/10"
          >
            {status === "loading" ? "Sending…" : "Send RSVP"}
          </button>
        </form>
      </FadeIn>
    </Section>
  );
}
