import type { Wedding } from "@/data/weddings";

function formatIcsDate(iso: string): string {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    d.getFullYear() +
    pad(d.getMonth() + 1) +
    pad(d.getDate()) +
    "T" +
    pad(d.getHours()) +
    pad(d.getMinutes()) +
    pad(d.getSeconds())
  );
}

export function buildIcsContent(wedding: Wedding): string {
  const start = formatIcsDate(wedding.date.iso);
  const endDate = new Date(wedding.date.iso);
  endDate.setHours(endDate.getHours() + 4);
  const end = formatIcsDate(endDate.toISOString());
  const title = `${wedding.bride} & ${wedding.groom} — ${wedding.eventType}`;
  const uid = `${wedding.slug}@wedding-card`;

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Card//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${formatIcsDate(new Date().toISOString())}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${title}`,
    `LOCATION:${wedding.venue.address}`,
    `DESCRIPTION:You're invited to the ${wedding.eventType} of ${wedding.bride} and ${wedding.groom}.`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function getGoogleCalendarUrl(wedding: Wedding): string {
  const start = new Date(wedding.date.iso);
  const end = new Date(wedding.date.iso);
  end.setHours(end.getHours() + 4);

  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  const title = encodeURIComponent(
    `${wedding.bride} & ${wedding.groom} — ${wedding.eventType}`
  );
  const location = encodeURIComponent(wedding.venue.address);
  const details = encodeURIComponent(
    `You're invited to the ${wedding.eventType} of ${wedding.bride} and ${wedding.groom}.`
  );

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${fmt(start)}/${fmt(end)}&location=${location}&details=${details}`;
}
