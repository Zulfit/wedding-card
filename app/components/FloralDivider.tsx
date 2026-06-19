export default function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-xs mx-auto ${className}`} aria-hidden="true">
      <div className="flex-1 h-px bg-[#c4b8a8]" />
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none" className="text-[#8c7e6b] shrink-0">
        <path
          d="M14 2c-2 4-6 4-6 8s4 4 6 6 6-2 6-6-4-4-6-8z"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="currentColor"
          fillOpacity="0.15"
        />
        <path d="M4 10c2-1 4 0 5 2M24 10c-2-1-4 0-5 2" stroke="currentColor" strokeWidth="0.75" />
      </svg>
      <div className="flex-1 h-px bg-[#c4b8a8]" />
    </div>
  );
}
