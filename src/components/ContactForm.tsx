"use client";

import { useState } from "react";

const types = [
  "Publi com humor",
  "Stand-up em evento",
  "Espetáculo Rayssa conta história",
  "Personagem Rayssa Rayanna",
  "Apresentação / mestre de cerimônias",
  "Outro",
];

export function ContactForm({ whatsapp }: { whatsapp: string }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text = [
      "Olá Igor! Gostaria de fazer uma proposta.",
      `Nome: ${f.get("name")}`,
      `Empresa: ${f.get("company") || "-"}`,
      `Tipo de trabalho: ${f.get("type")}`,
      `Mensagem: ${f.get("message")}`,
    ].join("\n");
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const field =
    "mt-1 w-full rounded-none border-0 border-b border-foreground/25 bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-foreground";

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="text-sm text-muted">
          Seu nome
          <input name="name" required autoComplete="name" className={field + " text-foreground"} />
        </label>
        <label className="text-sm text-muted">
          Empresa ou marca
          <input name="company" autoComplete="organization" className={field + " text-foreground"} />
        </label>
      </div>
      <label className="block text-sm text-muted">
        O que você precisa?
        <select name="type" className={field + " text-foreground"} defaultValue={types[0]}>
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm text-muted">
        Conte um pouco sobre o projeto
        <textarea name="message" required rows={4} className={field + " resize-none text-foreground"} />
      </label>
      <button
        type="submit"
        className="rounded-full bg-foreground px-8 py-3 text-background transition-opacity hover:opacity-80"
      >
        Enviar pelo WhatsApp
      </button>
      {sent && (
        <p role="status" className="text-sm text-muted">
          O WhatsApp abriu com a sua mensagem pronta. É só enviar.
        </p>
      )}
    </form>
  );
}
