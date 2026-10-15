import { cacheLife } from "next/cache";
import { profile } from "@/data/site";

export async function Footer() {
  "use cache";
  cacheLife("days");

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          href={profile.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline-offset-4 hover:underline"
        >
          {profile.handle}
        </a>
      </div>
    </footer>
  );
}
