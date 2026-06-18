import type { Metadata } from "next";
import type { Wedding } from "@/data/weddings";

export function buildWeddingMetadata(wedding: Wedding): Metadata {
  const title = `${wedding.bride} & ${wedding.groom} — ${wedding.eventType}, ${wedding.date.dayNumber} ${wedding.date.month} ${wedding.date.year}`;
  const description = `You're invited to the ${wedding.eventType} celebration of ${wedding.bride} and ${wedding.groom} in Blackburn.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: wedding.ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [wedding.ogImage],
    },
  };
}
