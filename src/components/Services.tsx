import { services } from "@/data/site";
import { Section } from "./Section";

export function Services() {
  return (
    <Section id="trabalhos" title="Como o Igor pode trabalhar com a sua marca">
      <ul className="border-t border-line">
        {services.map((s) => (
          <li
            key={s.title}
            className="grid gap-2 border-b border-line py-7 md:grid-cols-2 md:gap-8"
          >
            <h3 className="font-display text-lg font-medium leading-snug tracking-tight md:text-xl">{s.title}</h3>
            <p className="text-muted">{s.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
