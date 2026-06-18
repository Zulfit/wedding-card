import { redirect } from "next/navigation";
import { defaultSlug } from "@/data/weddings";

export default function Home() {
  redirect(`/${defaultSlug}`);
}
