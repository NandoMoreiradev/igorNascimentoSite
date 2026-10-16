import { videos } from "@/data/site";
import { youtubeId } from "@/lib/youtube";
import { VideoCard } from "./VideoCard";

export function Videos() {
  const items = videos.flatMap((v) => {
    const id = youtubeId(v.url);
    return id ? [{ id, title: v.title }] : [];
  });
  if (items.length === 0) return null;

  return (
    <section id="videos" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="reveal font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
          Vídeos
        </h2>
        <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2">
          {items.map((v, i) => (
            <li key={v.id} className={items.length % 2 === 1 && i === 0 ? "sm:col-span-2" : ""}>
              <VideoCard id={v.id} title={v.title} />
              <p className="mt-3 text-sm text-muted">{v.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
