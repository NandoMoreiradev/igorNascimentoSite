import { about } from "@/data/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="sobre" title={about.title}>
      <div className="space-y-6 text-xl leading-relaxed md:text-2xl">
        {about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <ul className="mt-10 flex flex-wrap gap-3">
        {about.highlights.map((h) => (
          <li key={h} className="rounded-full border border-line px-5 py-2 text-sm text-muted">
            {h}
          </li>
        ))}
      </ul>
    </Section>
  );
}
