import { cacheLife } from "next/cache";
import { profile } from "@/data/site";

const link = "underline decoration-line underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground";

export async function Footer() {
  "use cache";
  cacheLife("days");

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-8 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}
          <span aria-hidden> · </span>
          <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className={link}>
            {profile.handle}
          </a>
        </p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.instagram.com/eu_nando_moreira/"
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            Fernando Moreira
          </a>
        </p>
      </div>
    </footer>
  );
}
