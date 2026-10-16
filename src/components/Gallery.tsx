import { gallery } from "@/data/site";
import { GalleryGrid } from "./GalleryGrid";

export function Gallery() {
  return (
    <section id="galeria" className="overflow-x-clip border-t border-line py-20 md:py-28">
      <GalleryGrid photos={gallery} title="Galeria" />
    </section>
  );
}
