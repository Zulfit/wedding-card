"use client";

import { useCallback, useState } from "react";
import Toast from "./Toast";

interface ShareButtonProps {
  title: string;
  text: string;
}

export default function ShareButton({ title, text }: ShareButtonProps) {
  const [toast, setToast] = useState<string | null>(null);

  const handleShare = useCallback(async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        // User cancelled or share failed — fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setToast("Link copied!");
    } catch {
      prompt("Copy this link:", url);
    }
  }, [title, text]);

  return (
    <>
      <button
        type="button"
        onClick={handleShare}
        className="flex items-center gap-1.5 px-3 py-2 hover:bg-black/5 rounded-full transition-colors text-sm font-semibold"
        aria-label="Share invitation"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
        <span className="hidden sm:inline">Share</span>
      </button>
      {toast && <Toast message={toast} onDismiss={() => setToast(null)} />}
    </>
  );
}
