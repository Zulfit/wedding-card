import { promises as fs } from "fs";
import path from "path";

export interface RsvpSubmission {
  id: string;
  slug: string;
  name: string;
  attendance: "yes" | "no" | "maybe";
  guestCount: number;
  dietaryNotes: string;
  submittedAt: string;
}

const RSVP_DIR = path.join(process.cwd(), "data", "rsvp");

async function ensureDir() {
  await fs.mkdir(RSVP_DIR, { recursive: true });
}

function filePath(slug: string) {
  return path.join(RSVP_DIR, `${slug}.json`);
}

export async function saveRsvp(
  submission: Omit<RsvpSubmission, "id" | "submittedAt">
): Promise<RsvpSubmission> {
  await ensureDir();
  const record: RsvpSubmission = {
    ...submission,
    id: crypto.randomUUID(),
    submittedAt: new Date().toISOString(),
  };

  const fp = filePath(submission.slug);
  let existing: RsvpSubmission[] = [];
  try {
    const raw = await fs.readFile(fp, "utf-8");
    existing = JSON.parse(raw) as RsvpSubmission[];
  } catch {
    existing = [];
  }

  existing.push(record);
  await fs.writeFile(fp, JSON.stringify(existing, null, 2), "utf-8");
  return record;
}

export async function forwardToWebhook(
  webhookUrl: string,
  submission: RsvpSubmission
): Promise<void> {
  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  });
}
