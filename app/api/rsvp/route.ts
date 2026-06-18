import { NextResponse } from "next/server";
import { getWedding } from "@/data/weddings";
import { saveRsvp, forwardToWebhook } from "@/lib/rsvp-store";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { slug, name, attendance, guestCount, dietaryNotes } = body;

    if (!slug || typeof slug !== "string") {
      return NextResponse.json({ error: "Missing wedding slug" }, { status: 400 });
    }

    const wedding = getWedding(slug);
    if (!wedding) {
      return NextResponse.json({ error: "Wedding not found" }, { status: 404 });
    }

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please enter your name" }, { status: 400 });
    }

    if (!["yes", "no", "maybe"].includes(attendance)) {
      return NextResponse.json({ error: "Invalid attendance option" }, { status: 400 });
    }

    const count = attendance === "yes" ? Number(guestCount) : 0;
    if (attendance === "yes" && (!Number.isInteger(count) || count < 1 || count > 10)) {
      return NextResponse.json({ error: "Guest count must be between 1 and 10" }, { status: 400 });
    }

    const record = await saveRsvp({
      slug,
      name: name.trim(),
      attendance,
      guestCount: count,
      dietaryNotes: typeof dietaryNotes === "string" ? dietaryNotes.trim() : "",
    });

    const webhookUrl = process.env.RSVP_WEBHOOK_URL;
    if (webhookUrl) {
      await forwardToWebhook(webhookUrl, record).catch(() => {});
    }

    return NextResponse.json({ success: true, id: record.id });
  } catch {
    return NextResponse.json({ error: "Failed to save RSVP" }, { status: 500 });
  }
}
