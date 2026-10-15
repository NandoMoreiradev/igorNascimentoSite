import { services } from "@/data/site";
import { Tilt } from "./Tilt";

// Cor de fundo e largura (de 12 colunas) de cada cartão, na ordem da lista.
const layout = [
  { tone: "bg-sun text-ink", span: "lg:col-span-7" },
  { tone: "bg-cream text-ink", span: "lg:col-span-5" },
  { tone: "bg-tangerine text-ink", span: "lg:col-span-5" },
  { tone: "bg-cobalt text-cream", span: "lg:col-span-7" },
  { tone: "bg-cream text-ink", span: "lg:col-span-6" },
  { tone: "bg-sun text-ink", span: "lg:col-span-6" },
];

export function Services() {
  return (
    <section id="trabalhos" className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <h2 className="reveal max-w-3xl font-display text-5xl font-black leading-[1.05] tracking-tighter md:text-6xl">
          Como o Igor pode trabalhar com a sua marca
        </h2>

        <ul className="mt-14 grid gap-5 lg:grid-cols-12">
          {services.map((s, i) => {
            const l = layout[i % layout.length];
            return (
              <li key={s.title} className={`reveal ${l.span}`}>
                <Tilt className="h-full" max={6}>
                  <article className={`h-full rounded-2xl p-7 md:p-9 ${l.tone}`}>
                    <h3 className="pop-1 font-display text-2xl font-black leading-tight tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-4 max-w-md text-lg leading-snug opacity-90">{s.description}</p>
                  </article>
                </Tilt>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
