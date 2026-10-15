"use client";

import { useRef, type ReactNode } from "react";

/** Inclina o conteúdo em 3D seguindo o mouse. Em telas de toque fica parado. */
export function Tilt({
  children,
  className = "",
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty("--ry", `${x * max * 2}deg`);
    ref.current.style.setProperty("--rx", `${-y * max * 2}deg`);
  }

  function onLeave() {
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  }

  return (
    <div className="scene" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div ref={ref} className={`tilt ${className}`}>
        {children}
      </div>
    </div>
  );
}
