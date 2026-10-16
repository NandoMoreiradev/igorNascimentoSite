"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { GalleryPhoto } from "@/data/site";

// A faixa começa alinhada ao conteúdo da página (max-w-6xl) e vai até a borda da tela.
const edge = "max(1.5rem, calc((100% - 72rem) / 2 + 1.5rem))";
const stripPadding = { paddingInline: edge, scrollPaddingInline: edge };

export function GalleryGrid({ photos, title }: { photos: GalleryPhoto[]; title: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const strip = useRef<HTMLUListElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (open !== null && !el.open) el.showModal();
    if (open === null && el.open) el.close();
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  function scrollStrip(dir: 1 | -1) {
    const el = strip.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  }

  function step(delta: number) {
    setOpen((i) => (i === null ? i : (i + delta + photos.length) % photos.length));
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  }

  function close() {
    setOpen(null);
    opener.current?.focus();
  }

  const current = open !== null ? photos[open] : null;
  const btn =
    "absolute flex size-11 items-center justify-center rounded-full bg-background/90 text-foreground transition-opacity hover:opacity-80";

  return (
    <>
      <div className="mx-auto flex max-w-6xl items-end justify-between px-6 pb-10">
        <h2 className="reveal font-display text-2xl font-medium leading-snug tracking-tight md:text-3xl">
          {title}
        </h2>
        <div className="hidden gap-2 md:flex">
          <button
            type="button"
            onClick={() => scrollStrip(-1)}
            aria-label="Fotos anteriores"
            className="flex size-11 items-center justify-center rounded-full border border-line transition-colors hover:bg-foreground hover:text-background"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollStrip(1)}
            aria-label="Próximas fotos"
            className="flex size-11 items-center justify-center rounded-full border border-line transition-colors hover:bg-foreground hover:text-background"
          >
            →
          </button>
        </div>
      </div>

      <ul
        ref={strip}
        role="region"
        aria-label="Fotos do Igor, role para o lado para ver mais"
        tabIndex={0}
        style={stripPadding}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-6 [scrollbar-color:var(--line)_transparent] [scrollbar-width:thin]"
      >
        {photos.map((p, i) => (
          <li key={p.src} className="shrink-0 snap-start">
            <button
              type="button"
              onClick={(e) => {
                opener.current = e.currentTarget;
                setOpen(i);
              }}
              className="group block h-64 overflow-hidden rounded-sm bg-surface md:h-96"
              aria-label={`Ampliar foto: ${p.alt}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(min-width: 768px) 700px, 460px"
                className="h-full w-auto max-w-none transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onKeyDown={onKeyDown}
        onClick={(e) => e.target === e.currentTarget && close()}
        aria-label="Galeria de fotos"
        className="m-0 h-dvh max-h-none w-dvw max-w-none bg-transparent p-0 backdrop:bg-foreground/90"
      >
        {current && (
          <div
            className="relative flex h-full w-full items-center justify-center p-4 md:p-12"
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              className="max-h-full w-auto max-w-full object-contain"
            />
            <button type="button" onClick={close} aria-label="Fechar" className={`${btn} right-4 top-4`}>
              ✕
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Foto anterior"
              className={`${btn} left-4 top-1/2 -translate-y-1/2`}
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Próxima foto"
              className={`${btn} right-4 top-1/2 -translate-y-1/2`}
            >
              →
            </button>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/90 px-4 py-1 text-xs text-muted">
              {(open ?? 0) + 1} / {photos.length}
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
