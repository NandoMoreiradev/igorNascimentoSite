import Image from "next/image";
import { profile, stats } from "@/data/site";
import { Tilt } from "./Tilt";

export function Hero() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section id="top">
      <div className="mx-auto grid max-w-6xl items-end gap-14 px-6 pb-20 pt-14 md:grid-cols-12 md:pb-28 md:pt-24">
        <div className="md:col-span-7">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">{profile.tagline}</p>
          <h1 className="mt-6 font-display text-[clamp(2.2rem,10vw,4rem)] font-semibold leading-[1.05] tracking-tighter md:text-[clamp(2.6rem,5.2vw,4.6rem)]">
            {first}
            <br />
            <span className="text-muted">{rest.join(" ")}</span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
            De Aracaju, criador da Rayssa Rayanna. Faço o público rir no palco, no teatro e na
            internet, e levo a sua marca junto.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contratar"
              className="rounded-full bg-foreground px-7 py-3 text-background transition-opacity hover:opacity-80"
            >
              Quero contratar
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line underline-offset-8 transition-colors hover:decoration-foreground"
            >
              {profile.handle}
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <Tilt max={5}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm bg-surface shadow-[0_40px_70px_-30px_rgba(18,18,18,0.35)] md:max-w-none">
              {profile.photo ? (
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(min-width: 768px) 28rem, 90vw"
                  className="object-cover object-top"
                />
              ) : (
                <div
                  role="img"
                  aria-label="Espaço reservado para a foto do Igor"
                  className="flex h-full w-full items-center justify-center"
                >
                  <span className="font-display text-7xl font-semibold text-line">IN</span>
                </div>
              )}
            </div>
          </Tilt>
        </div>
      </div>

      <dl className="border-t border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-line py-8 pr-4 md:border-l md:pl-6 md:first:border-l-0 md:first:pl-0">
              <dd className="font-display text-2xl font-medium tracking-tight md:text-3xl">{s.value}</dd>
              <dt className="mt-2 text-sm text-muted">{s.label}</dt>
            </div>
          ))}
        </div>
      </dl>
    </section>
  );
}
