import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12 md:py-28">
        <h2 className="reveal min-w-0 self-start font-display text-2xl font-medium leading-snug tracking-tight md:sticky md:top-28 md:col-span-4 md:text-3xl">
          {title}
        </h2>
        <div className="min-w-0 md:col-span-8">{children}</div>
      </div>
    </section>
  );
}
