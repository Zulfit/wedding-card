import InvitationShell from "./InvitationShell";
import type { Wedding } from "@/data/weddings";

interface WeddingPageProps {
  wedding: Wedding;
  guestName?: string;
}

export default function WeddingPage({ wedding, guestName }: WeddingPageProps) {
  return <InvitationShell wedding={wedding} guestName={guestName} />;
}
