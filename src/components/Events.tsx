import { cacheLife } from "next/cache";
import { bookings, events, type EventItem } from "@/data/site";
import { AgendaCalendar } from "./AgendaCalendar";
import { Section } from "./Section";

const dayFmt = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", timeZone: "UTC" });
const monthFmt = new Intl.DateTimeFormat("pt-BR", { month: "short", timeZone: "UTC" });
const yearFmt = new Intl.DateTimeFormat("pt-BR", { year: "numeric", timeZone: "UTC" });

function parts(date: string) {
  const d = new Date(`${date}T00:00:00Z`);
  return {
    day: dayFmt.format(d),
    month: monthFmt.format(d).replace(".", ""),
    year: yearFmt.format(d),
  };
}

function Row({ event }: { event: EventItem }) {
  const { day, month, year } = parts(event.date);
  return (
    <li className="flex items-center gap-6 border-b border-line py-6">
      <time dateTime={event.date} className="w-16 shrink-0">
        <span className="block font-display text-3xl font-medium leading-none">{day}</span>
        <span className="mt-1 block text-xs uppercase tracking-wider text-muted">
          {month} {year}
        </span>
      </time>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-lg font-medium leading-snug tracking-tight">{event.title}</h3>
        <p className="mt-1 text-sm text-muted">
          {event.venue} · {event.city}
        </p>
      </div>
      {event.ticketUrl && (
        <a
          href={event.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full border border-foreground px-5 py-2 text-sm transition-colors hover:bg-foreground hover:text-background"
        >
          Ingressos
        </a>
      )}
    </li>
  );
}

export async function Events() {
  "use cache";
  cacheLife("hours");

  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const past = events.filter((e) => e.date < today).sort((a, b) => b.date.localeCompare(a.date));

  const days = new Map<string, "particular" | "publico">();
  for (const b of bookings) days.set(b.date, b.kind);
  for (const e of events) days.set(e.date, "publico");

  return (
    <Section id="eventos" title="Shows e eventos">
      <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted">
        Veja as datas que o Igor já tem fechadas. As que estão livres podem ser suas.{" "}
        <a href="#contratar" className="text-foreground underline decoration-line underline-offset-4 hover:decoration-foreground">
          Reservar uma data
        </a>
        .
      </p>

      <AgendaCalendar days={days} />

      {upcoming.length > 0 && (
        <div className="mt-16">
          <h3 className="text-sm uppercase tracking-[0.2em] text-muted">Abertos ao público</h3>
          <ul className="mt-4 border-t border-line">
            {upcoming.map((e) => (
              <Row key={e.title + e.date} event={e} />
            ))}
          </ul>
        </div>
      )}

      {past.length > 0 && (
        <div className="mt-16">
          <h3 className="text-sm uppercase tracking-[0.2em] text-muted">Já aconteceu</h3>
          <ul className="mt-4 border-t border-line">
            {past.map((e) => {
              const { day, month, year } = parts(e.date);
              return (
                <li
                  key={e.title + e.date}
                  className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-line py-4 text-muted"
                >
                  <time dateTime={e.date} className="w-32 text-sm uppercase">
                    {day} {month} {year}
                  </time>
                  <span className="font-display text-base font-medium text-foreground">{e.title}</span>
                  <span className="text-sm">
                    {e.venue}, {e.city}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Section>
  );
}
