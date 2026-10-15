import { profile } from "@/data/site";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#marcas", label: "Marcas" },
  { href: "#eventos", label: "Eventos" },
];

const button =
  "rounded-full border-2 border-ink bg-tangerine px-5 py-2 text-sm font-bold text-ink shadow-[3px_3px_0_0_var(--ink)] transition-transform hover:-translate-x-px hover:-translate-y-px";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#top" className="font-display text-sm font-black uppercase tracking-tight">
          {profile.name}
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="underline-offset-4 hover:underline">
              {l.label}
            </a>
          ))}
          <a href="#contratar" className={button}>
            Contratar
          </a>
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border-2 border-ink px-4 py-1.5 text-sm font-bold">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-56 border-2 border-ink bg-cream p-2 shadow-[5px_5px_0_0_var(--ink)]">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block px-3 py-2 font-semibold hover:bg-sun">
                {l.label}
              </a>
            ))}
            <a href="#contratar" className="mt-1 block bg-tangerine px-3 py-2 text-center font-bold">
              Contratar
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
