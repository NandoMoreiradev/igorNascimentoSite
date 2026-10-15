import { about } from "@/data/site";
import { Tilt } from "./Tilt";

const tones = ["bg-sun", "bg-tangerine", "bg-cobalt text-cream"];

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-5 py-24 md:py-32">
      <div className="grid gap-14 md:grid-cols-12">
        <h2 className="reveal font-display text-5xl font-black leading-[1.05] tracking-tighter md:col-span-5 md:text-6xl">
          {about.title}
        </h2>

        <div className="space-y-6 text-xl leading-relaxed md:col-span-7 md:text-2xl">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <ul className="flex flex-wrap gap-3 pt-4">
            {about.highlights.map((h, i) => (
              <li key={h}>
                <Tilt max={14}>
                  <span
                    className={`block border-2 border-ink px-5 py-2 text-base font-extrabold shadow-[4px_4px_0_0_var(--ink)] ${tones[i % tones.length]} ${
                      i % 2 ? "rotate-2" : "-rotate-2"
                    }`}
                  >
                    {h}
                  </span>
                </Tilt>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
