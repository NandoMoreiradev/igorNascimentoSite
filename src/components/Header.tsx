import { profile, videos } from "@/data/site";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#marcas", label: "Marcas" },
  { href: "#eventos", label: "Eventos" },
  ...(videos.length > 0 ? [{ href: "#videos", label: "Vídeos" }] : []),
  { href: "#galeria", label: "Galeria" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-sm font-semibold uppercase tracking-tight">
          {profile.name}
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <a
            href="#contratar"
            className="rounded-full bg-foreground px-5 py-2 text-background transition-opacity hover:opacity-80"
          >
            Contratar
          </a>
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-line px-4 py-1.5 text-sm">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-52 rounded-xl border border-line bg-background p-2 shadow-lg">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-surface">
                {l.label}
              </a>
            ))}
            <a
              href="#contratar"
              className="mt-1 block rounded-lg bg-foreground px-3 py-2 text-center text-sm text-background"
            >
              Contratar
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
