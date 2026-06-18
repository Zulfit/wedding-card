import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSlugs, getWedding } from "@/data/weddings";
import { buildWeddingMetadata } from "@/lib/metadata";
import WeddingPage from "@/app/components/WeddingPage";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ guest?: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const wedding = getWedding(slug);
  if (!wedding) return { title: "Not Found" };
  return buildWeddingMetadata(wedding);
}

export default async function WeddingSlugPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { guest } = await searchParams;
  const wedding = getWedding(slug);

  if (!wedding) {
    notFound();
  }

  return <WeddingPage wedding={wedding} guestName={guest} />;
}
