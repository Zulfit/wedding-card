import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: "cream" | "white";
}

export default function Section({
  id,
  children,
  className = "",
  bg = "cream",
}: SectionProps) {
  const bgClass = bg === "cream" ? "bg-[#F8F4EF]" : "bg-[#FFFDFA]";

  return (
    <section
      id={id}
      className={`relative min-h-dvh w-full max-w-md mx-auto flex flex-col items-center py-16 px-6 overflow-hidden ${bgClass} sm:border-x sm:border-gray-200 ${className}`}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="w-full mb-12 relative">
      <h2 className="text-[34px] sm:text-4xl font-serif text-[#4a453e] mb-1 z-10 relative">
        {title}
      </h2>
      <p className="text-3xl sm:text-[34px] font-script text-[#b5a999] absolute -bottom-5 right-4 z-0">
        {subtitle}
      </p>
    </div>
  );
}
