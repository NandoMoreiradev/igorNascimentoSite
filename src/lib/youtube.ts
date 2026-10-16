const ID = /^[\w-]{11}$/;

/** Extrai o ID do vídeo de qualquer formato de link do YouTube (ou do próprio ID). */
export function youtubeId(input: string): string | null {
  const value = input.trim();
  if (ID.test(value)) return value;

  let url: URL;
  try {
    url = new URL(value.startsWith("http") ? value : `https://${value}`);
  } catch {
    return null;
  }

  const host = url.hostname.replace(/^(www|m)\./, "");
  let id: string | null = null;
  if (host === "youtu.be") {
    id = url.pathname.split("/")[1] ?? null;
  } else if (host === "youtube.com" || host === "youtube-nocookie.com") {
    const [, kind, rest] = url.pathname.split("/");
    id = kind === "watch" ? url.searchParams.get("v") : ["embed", "shorts", "live", "v"].includes(kind) ? rest : null;
  }
  return id && ID.test(id) ? id : null;
}
