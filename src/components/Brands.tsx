import { brands } from "@/data/site";

function Ribbon({ className, reverse }: { className: string; reverse?: boolean }) {
  return (
    <div aria-hidden className={`overflow-hidden border-y-2 border-ink py-4 ${className}`}>
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {brands.map((b) => (
              <span
                key={b}
                className="whitespace-nowrap px-6 font-display text-3xl font-black uppercase tracking-tight md:text-5xl"
              >
                {b} <span className="px-4 opacity-40">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Brands() {
  return (
    <section id="marcas" className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="reveal max-w-3xl font-display text-5xl font-black leading-[1.05] tracking-tighter md:text-6xl">
          Quem já trabalhou com o Igor
        </h2>
      </div>

      <ul className="sr-only">
        {brands.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="scene mt-20 md:mt-28">
        <div className="[transform-style:preserve-3d] [transform:rotateX(14deg)] py-10">
          <Ribbon className="-rotate-3 bg-tangerine" />
          <Ribbon className="-mt-5 rotate-2 bg-ink text-cream" reverse />
        </div>
      </div>
    </section>
  );
}
