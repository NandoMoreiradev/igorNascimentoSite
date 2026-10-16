import { profile } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contratar" title="Bora trabalhar juntos?">
      <p className="max-w-md text-xl leading-relaxed">
        Conta o que você tem em mente. A mensagem vai direto para o WhatsApp do Igor.
      </p>
      <ul className="mb-12 mt-6 space-y-1 text-muted">
        <li>
          <a href={`mailto:${profile.email}`} className="underline decoration-line underline-offset-4 hover:decoration-foreground">
            {profile.email}
          </a>
        </li>
        <li>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line underline-offset-4 hover:decoration-foreground"
          >
            {profile.handle}
          </a>
        </li>
      </ul>
      <ContactForm whatsapp={profile.whatsapp} />
    </Section>
  );
}
