import Image from "next/image";
import { brands } from "@/data/site";
import { Section } from "./Section";

export function Brands() {
  return (
    <Section id="marcas" title="Quem já trabalhou com o Igor">
      <ul className="sr-only">
        {brands.map((b) => (
          <li key={b.name}>{b.name}</li>
        ))}
      </ul>

      <div
        aria-hidden
        className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
      >
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {brands.map((b) => (
                <div
                  key={b.name}
                  className={`mr-3 flex h-24 w-48 shrink-0 items-center justify-center rounded-sm p-5 md:h-28 md:w-56 ${
                    b.onDark ? "bg-foreground" : "bg-surface"
                  }`}
                >
                  <Image
                    src={b.logo}
                    alt=""
                    width={b.width}
                    height={b.height}
                    className="h-auto max-h-full w-auto max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
