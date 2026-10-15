import { cacheLife } from "next/cache";
import { events, type EventItem } from "@/data/site";
import { Tilt } from "./Tilt";

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

function Ticket({ event, tilt }: { event: EventItem; tilt: string }) {
  const { day, month, year } = parts(event.date);
  return (
    <li className="reveal">
      <Tilt max={7}>
        <article
          className={`flex border-2 border-ink bg-cream shadow-[8px_8px_0_0_var(--ink)] ${tilt}`}
        >
          <time
            dateTime={event.date}
            className="flex w-28 shrink-0 flex-col items-center justify-center border-r-2 border-dashed border-ink bg-tangerine px-3 py-6 text-center md:w-32"
          >
            <span className="font-display text-5xl font-black leading-none">{day}</span>
            <span className="mt-1 text-sm font-extrabold uppercase">{month}</span>
            <span className="text-xs font-semibold">{year}</span>
          </time>
          <div className="flex min-w-0 flex-1 flex-col justify-between gap-5 p-5 md:p-6">
            <div>
              <h3 className="font-display text-xl font-black leading-tight tracking-tight">
                {event.title}
              </h3>
              <p className="mt-2 font-medium">{event.venue}</p>
              <p className="text-ink/70">{event.city}</p>
            </div>
            {event.ticketUrl && (
              <a
                href={event.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start rounded-full bg-ink px-5 py-2 text-sm font-bold text-cream transition-colors hover:bg-cobalt"
              >
                Ingressos
              </a>
            )}
          </div>
        </article>
      </Tilt>
    </li>
  );
}

export async function Events() {
  "use cache";
  cacheLife("hours");

  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const past = events.filter((e) => e.date < today).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section id="eventos" className="border-y-2 border-ink bg-sun">
      <div className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <h2 className="reveal max-w-3xl font-display text-5xl font-black leading-[1.05] tracking-tighter md:text-6xl">
          Shows e eventos
        </h2>

        {upcoming.length > 0 ? (
          <ul className="mt-14 grid gap-10 md:grid-cols-2">
            {upcoming.map((e, i) => (
              <Ticket key={e.title + e.date} event={e} tilt={i % 2 ? "rotate-1" : "-rotate-1"} />
            ))}
          </ul>
        ) : (
          <p className="mt-14 max-w-xl border-2 border-dashed border-ink p-6 text-lg font-medium">
            As próximas datas de stand-up e do espetáculo Rayssa conta história saem primeiro no Instagram do
            Igor. Quer um show na sua cidade ou no seu evento? É só chamar.
          </p>
        )}

        {past.length > 0 && (
          <div className="mt-20">
            <h3 className="font-display text-xl font-black">Já aconteceu</h3>
            <ul className="mt-5 border-t-2 border-ink">
              {past.map((e) => {
                const { day, month, year } = parts(e.date);
                return (
                  <li
                    key={e.title + e.date}
                    className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b-2 border-ink py-4"
                  >
                    <time dateTime={e.date} className="w-32 font-bold uppercase">
                      {day} {month} {year}
                    </time>
                    <span className="font-display font-black">{e.title}</span>
                    <span className="text-ink/70">
                      {e.venue}, {e.city}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
