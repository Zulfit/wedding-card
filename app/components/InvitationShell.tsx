"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Wedding } from "@/data/weddings";
import Hero from "./Hero";
import Details from "./Details";
import Countdown from "./Countdown";
import ProgramTimeline from "./ProgramTimeline";
import Doa from "./Doa";
import Gallery from "./Gallery";
import RsvpForm from "./RsvpForm";
import InvitationGate from "./InvitationGate";
import BottomNav from "./BottomNav";

interface InvitationShellProps {
  wedding: Wedding;
  guestName?: string;
}

type GateState = "visible" | "closing" | "hidden";

export default function InvitationShell({ wedding, guestName }: InvitationShellProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [gateState, setGateState] = useState<GateState>("visible");
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const storageKey = `invitation-opened-${wedding.slug}`;
  const alreadyOpened = useSyncExternalStore(
    () => () => {},
    () => sessionStorage.getItem(storageKey) === "1",
    () => false
  );

  useEffect(() => {
    if (!alreadyOpened) return;
    const timer = setTimeout(() => {
      setGateState("hidden");
      setIsOpened(true);
    }, 0);
    return () => clearTimeout(timer);
  }, [alreadyOpened]);

  const startMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  const openInvitation = useCallback(() => {
    setGateState("closing");
    setTimeout(() => {
      setGateState("hidden");
      setIsOpened(true);
      sessionStorage.setItem(storageKey, "1");
      void startMusic();
    }, 500);
  }, [storageKey, startMusic]);

  const toggleMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      await startMusic();
    }
  }, [isPlaying, startMusic]);

  return (
    <>
      <audio ref={audioRef} src={wedding.music} loop preload="auto" aria-hidden="true" />

      {gateState !== "hidden" && (
        <InvitationGate
          bride={wedding.bride}
          groom={wedding.groom}
          heroImage={wedding.heroImage}
          onOpen={openInvitation}
          isClosing={gateState === "closing"}
        />
      )}

      <main className={`pb-24 ${gateState !== "hidden" ? "overflow-hidden h-dvh" : ""}`}>
        <Hero
          bride={wedding.bride}
          groom={wedding.groom}
          eventType={wedding.eventType}
          date={wedding.date}
          venue={wedding.venue}
          heroImage={wedding.heroImage}
        />
        <Details venue={wedding.venue} details={wedding.details} />
        <Countdown wedding={wedding} />
        <ProgramTimeline program={wedding.program} />
        <Doa doa={wedding.doa} />
        <Gallery items={wedding.gallery} />
        <RsvpForm slug={wedding.slug} defaultName={guestName} />
      </main>

      {isOpened && (
        <>
          <BottomNav details={wedding.details} />
          <button
            type="button"
            onClick={toggleMusic}
            className="fixed bottom-[4.5rem] right-4 z-50 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg shadow-black/10 text-[#4a453e] hover:bg-white transition-all"
            aria-label={isPlaying ? "Pause music" : "Play music"}
          >
            {isPlaying ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>
        </>
      )}
    </>
  );
}
