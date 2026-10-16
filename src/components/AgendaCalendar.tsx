// Calendário de disponibilidade: mostra todos os meses entre a primeira e a última data da agenda.
// Não usa a data atual, então pode ser gerado de forma estática.

type Kind = "particular" | "publico";

const WEEKDAYS = ["D", "S", "T", "Q", "Q", "S", "S"];

const monthFmt = new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric", timeZone: "UTC" });
const dayFmt = new Intl.DateTimeFormat("pt-BR", { day: "numeric", month: "long", timeZone: "UTC" });

function monthsBetween(first: string, last: string) {
  const [fy, fm] = first.split("-").map(Number);
  const [ly, lm] = last.split("-").map(Number);
  const out: { year: number; month: number }[] = [];
  let y = fy;
  let m = fm - 1;
  for (;;) {
    out.push({ year: y, month: m });
    if (y === ly && m === lm - 1) break;
    m++;
    if (m > 11) {
      m = 0;
      y++;
    }
  }
  return out;
}

function Month({ year, month, days }: { year: number; month: number; days: Map<string, Kind> }) {
  const offset = new Date(Date.UTC(year, month, 1)).getUTCDay();
  const total = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  const cells: (number | null)[] = [...Array(offset).fill(null), ...Array.from({ length: total }, (_, i) => i + 1)];
  while (cells.length % 7) cells.push(null);
  const weeks = Array.from({ length: cells.length / 7 }, (_, w) => cells.slice(w * 7, w * 7 + 7));

  return (
    <div>
      <h3 className="font-display text-lg font-medium tracking-tight first-letter:uppercase">
        {monthFmt.format(new Date(Date.UTC(year, month, 1)))}
      </h3>
      <table className="mt-4 w-full table-fixed border-separate border-spacing-y-1 text-center text-sm">
        <thead>
          <tr>
            {WEEKDAYS.map((d, i) => (
              <th key={i} scope="col" className="pb-2 text-xs font-normal text-muted">
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, w) => (
            <tr key={w}>
              {week.map((day, i) => {
                if (day === null) return <td key={i} />;
                const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                const kind = days.get(iso);
                const label = dayFmt.format(new Date(Date.UTC(year, month, day)));
                return (
                  <td key={i} className="p-0">
                    <span
                      aria-label={
                        kind === "particular"
                          ? `${label}: data fechada, show particular`
                          : kind === "publico"
                            ? `${label}: show aberto ao público`
                            : `${label}: data livre`
                      }
                      className={`mx-auto flex size-9 items-center justify-center rounded-full ${
                        kind === "particular"
                          ? "bg-foreground text-background"
                          : kind === "publico"
                            ? "border border-foreground"
                            : "text-muted"
                      }`}
                    >
                      {day}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AgendaCalendar({ days }: { days: Map<string, Kind> }) {
  const dates = [...days.keys()].sort();
  if (dates.length === 0) return null;
  const months = monthsBetween(dates[0].slice(0, 7), dates[dates.length - 1].slice(0, 7));

  return (
    <div>
      <div className="grid gap-12 sm:grid-cols-2">
        {months.map((m) => (
          <Month key={`${m.year}-${m.month}`} year={m.year} month={m.month} days={days} />
        ))}
      </div>

      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
        <li className="flex items-center gap-2">
          <span aria-hidden className="size-3 rounded-full bg-foreground" /> Data fechada (show particular)
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden className="size-3 rounded-full border border-foreground" /> Show aberto ao público
        </li>
        <li className="flex items-center gap-2">
          <span aria-hidden className="size-3 rounded-full bg-line" /> Data livre
        </li>
      </ul>
    </div>
  );
}
