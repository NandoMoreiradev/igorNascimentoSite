import Image from "next/image";
import { profile, stats } from "@/data/site";
import { Tilt } from "./Tilt";

export function Hero() {
  const [first, ...rest] = profile.name.toUpperCase().split(" ");

  return (
    <section id="top" className="bg-cobalt text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-12 md:grid-cols-12 md:pb-24 md:pt-16">
        <div className="md:col-span-8">
          <h1 className="font-display text-[clamp(2.4rem,10.4vw,8rem)] font-black leading-[0.92] tracking-tighter md:text-[clamp(3rem,6.2vw,5.9rem)]">
            <span className="block">{first}</span>
            <span className="block text-sun">{rest.join(" ")}</span>
          </h1>

          <p className="mt-8 max-w-lg text-xl font-medium leading-snug md:text-2xl">
            De Aracaju, criador da Rayssa Rayanna. Faço o público rir no palco, no teatro e na internet, e
            levo a sua marca junto.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contratar"
              className="rounded-full border-2 border-ink bg-sun px-7 py-3 font-bold text-ink shadow-[4px_4px_0_0_var(--ink)] transition-transform hover:-translate-x-px hover:-translate-y-px"
            >
              Quero contratar
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-cream px-7 py-3 font-bold transition-colors hover:bg-cream hover:text-ink"
            >
              {profile.handle}
            </a>
          </div>
        </div>

        <div className="md:col-span-4">
          <Tilt max={10}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs -rotate-2 overflow-hidden rounded-2xl border-2 border-ink bg-sun shadow-[10px_10px_0_0_var(--ink)] md:max-w-none">
              {profile.photo ? (
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  priority
                  sizes="(min-width: 768px) 24rem, 90vw"
                  className="object-cover"
                />
              ) : (
                <div
                  role="img"
                  aria-label="Espaço reservado para a foto do Igor"
                  className="flex h-full w-full items-center justify-center [background:repeating-linear-gradient(135deg,transparent_0_14px,rgb(20_18_15/0.08)_14px_28px)]"
                >
                  <span className="font-display text-8xl font-black text-cobalt">IN</span>
                </div>
              )}
            </div>

            <span
              style={{ "--r": "-10deg" } as React.CSSProperties}
              className="float absolute left-0 top-8 rounded-full border-2 border-ink bg-tangerine px-4 py-2 text-sm font-extrabold text-ink md:-left-6"
            >
              Aberto a propostas
            </span>
            <span
              style={{ "--r": "6deg" } as React.CSSProperties}
              className="float absolute -bottom-4 right-0 border-2 border-ink bg-cream px-4 py-2 text-sm font-extrabold text-ink [animation-delay:-2s] md:-right-3"
            >
              {profile.handle}
            </span>
          </Tilt>
        </div>
      </div>

      <dl className="border-t-2 border-ink bg-ink">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-cream/20 px-5 py-8 md:border-l md:first:border-l-0">
              <dd className="font-display text-2xl font-black text-sun sm:text-3xl md:text-4xl">{s.value}</dd>
              <dt className="mt-2 text-sm text-cream/80">{s.label}</dt>
            </div>
          ))}
        </div>
      </dl>
    </section>
  );
}
