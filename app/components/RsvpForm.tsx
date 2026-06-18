"use client";

import { useState, type FormEvent } from "react";
import Section, { SectionHeader } from "./Section";
import FadeIn from "./FadeIn";

interface RsvpFormProps {
  slug: string;
  defaultName?: string;
}

type Attendance = "yes" | "no" | "maybe";

export default function RsvpForm({ slug, defaultName = "" }: RsvpFormProps) {
  const [name, setName] = useState(defaultName);
  const [attendance, setAttendance] = useState<Attendance>("yes");
  const [guestCount, setGuestCount] = useState(1);
  const [dietaryNotes, setDietaryNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to submit RSVP");
    }
  };

  if (status === "success") {
    return (
      <Section id="rsvp">
        <FadeIn className="w-full text-center py-12">
          <SectionHeader title="Thank you" subtitle="see you soon" />
          <p className="text-[#4a453e] text-sm leading-relaxed max-w-xs mx-auto">
            Your RSVP has been received. We look forward to celebrating with you.
          </p>
        </FadeIn>
      </Section>
    );
  }

  return (
    <Section id="rsvp">
      <FadeIn className="w-full">
        <SectionHeader title="RSVP" subtitle="kindly respond" />

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 z-10">
          <div>
            <label htmlFor="rsvp-name" className="block text-[10px] font-bold tracking-widest uppercase text-[#8c7e6b] mb-2">
              Full name
            </label>
            <input
              id="rsvp-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#e8dfd5] bg-white text-[#4a453e] text-sm focus:outline-none focus:ring-2 focus:ring-[#d2c9bd]"
              placeholder="Your name"
            />
          </div>

          <fieldset>
            <legend className="block text-[10px] font-bold tracking-widest uppercase text-[#8c7e6b] mb-2">
              Will you attend?
            </legend>
            <div className="flex flex-wrap gap-2">
              {(["yes", "no", "maybe"] as Attendance[]).map((option) => (
                <label
                  key={option}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase cursor-pointer border transition-colors ${
                    attendance === option
                      ? "bg-[#4a453e] text-white border-[#4a453e]"
                      : "bg-white text-[#4a453e] border-[#e8dfd5] hover:border-[#d2c9bd]"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value={option}
                    checked={attendance === option}
                    onChange={() => setAttendance(option)}
                    className="sr-only"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          {attendance === "yes" && (
            <div>
              <label htmlFor="rsvp-guests" className="block text-[10px] font-bold tracking-widest uppercase text-[#8c7e6b] mb-2">
                Number of guests (including you)
              </label>
              <input
                id="rsvp-guests"
                type="number"
                min={1}
                max={10}
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-[#e8dfd5] bg-white text-[#4a453e] text-sm focus:outline-none focus:ring-2 focus:ring-[#d2c9bd]"
              />
            </div>
          )}

          <div>
            <label htmlFor="rsvp-dietary" className="block text-[10px] font-bold tracking-widest uppercase text-[#8c7e6b] mb-2">
              Dietary notes (optional)
            </label>
            <textarea
              id="rsvp-dietary"
              rows={3}
              value={dietaryNotes}
              onChange={(e) => setDietaryNotes(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#e8dfd5] bg-white text-[#4a453e] text-sm focus:outline-none focus:ring-2 focus:ring-[#d2c9bd] resize-none"
              placeholder="Allergies or dietary requirements"
            />
          </div>

          {status === "error" && (
            <p className="text-red-600 text-sm" role="alert">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 bg-[#4a453e] text-white text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-[#3D3A38] transition-colors disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Send RSVP"}
          </button>
        </form>
      </FadeIn>
    </Section>
  );
}
