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
    "mt-2 w-full border-2 border-ink bg-cream px-4 py-3 text-base outline-none focus:bg-white focus:shadow-[4px_4px_0_0_var(--cobalt)]";

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 border-2 border-ink bg-cream p-6 shadow-[10px_10px_0_0_var(--ink)] md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold">
          Seu nome
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="text-sm font-bold">
          Empresa ou marca
          <input name="company" autoComplete="organization" className={field} />
        </label>
      </div>
      <label className="block text-sm font-bold">
        O que você precisa?
        <select name="type" className={field} defaultValue={types[0]}>
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-bold">
        Conte um pouco sobre o projeto
        <textarea name="message" required rows={5} className={field} />
      </label>
      <button
        type="submit"
        className="w-full rounded-full border-2 border-ink bg-ink px-6 py-3.5 font-bold text-cream transition-colors hover:bg-cobalt"
      >
        Enviar pelo WhatsApp
      </button>
      {sent && (
        <p role="status" className="text-sm font-medium">
          O WhatsApp abriu com a sua mensagem pronta. É só enviar.
        </p>
      )}
    </form>
  );
}
