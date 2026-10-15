import { profile } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { Tilt } from "./Tilt";

export function Contact() {
  return (
    <section id="contratar" className="bg-tangerine">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <h2 className="reveal font-display text-5xl font-black leading-[1.05] tracking-tighter md:text-6xl">
            Bora trabalhar juntos?
          </h2>
          <p className="mt-6 max-w-sm text-xl leading-snug">
            Conta o que você tem em mente. A mensagem vai direto para o WhatsApp do Igor.
          </p>
          <ul className="mt-8 space-y-2 font-semibold">
            <li>
              <a href={`mailto:${profile.email}`} className="underline underline-offset-4">
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                {profile.handle}
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-7">
          <Tilt max={3}>
            <ContactForm whatsapp={profile.whatsapp} />
          </Tilt>
        </div>
      </div>
    </section>
  );
}
