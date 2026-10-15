// Todo o conteúdo do site fica aqui. Bio e serviços foram escritos a partir do perfil do Instagram;
// marcas, eventos, e-mail e WhatsApp ainda são PLACEHOLDERS (veja os TODO).

export const profile = {
  name: "Igor Nascimento",
  handle: "@igornascimento_a",
  tagline: "Ator, humorista e criador de conteúdo",
  photo: "", // TODO: caminho da foto em /public, ex.: "/igor.jpg"
  instagram: "https://www.instagram.com/igornascimento_a/",
  email: "contato@igornascimento.com.br", // TODO: e-mail real
  whatsapp: "5500000000000", // TODO: DDI + DDD + número, só dígitos
};

// Número de seguidores conforme o perfil do Instagram em 15/10/2026. Atualize de tempos em tempos.
export const stats = [
  { value: "269K", label: "Seguidores no Instagram" },
  { value: "Stand-up", label: "No palco e em eventos" },
  { value: "Teatro", label: "Espetáculo Rayssa conta história" },
  { value: "Aracaju", label: "Base em Sergipe" },
];

export const about = {
  title: "Quem é o Igor",
  paragraphs: [
    "Igor Nascimento é ator e humorista de Aracaju. Faz stand-up, sobe no teatro e transforma o dia a dia em vídeo para mais de 269 mil pessoas que o acompanham no Instagram.",
    "É o criador da Rayssa Rayanna, personagem que ganhou o público e hoje tem espetáculo próprio nos palcos: Rayssa conta história. Quem trabalha com o Igor leva junto esse humor, que prende a atenção do começo ao fim.",
  ],
  highlights: ["Humor de personagem", "Palco e internet", "Direto de Aracaju"],
};

export const services = [
  {
    title: "Publis com humor",
    description:
      "Reels e Stories no tom do Igor, com roteiro pensado para o público dele e para a sua marca.",
  },
  {
    title: "Rayssa Rayanna na sua campanha",
    description:
      "A personagem mais conhecida do Igor em vídeos e ações feitos sob medida para a sua marca.",
  },
  {
    title: "Stand-up em eventos",
    description:
      "Show de humor para convenções, confraternizações, festas e eventos de empresa.",
  },
  {
    title: "Rayssa conta história",
    description:
      "O espetáculo de teatro do Igor. Ingressos no Sympla, ou converse para levar a peça ao seu evento.",
  },
  {
    title: "Apresentação e mestre de cerimônias",
    description: "Condução de eventos com humor, do primeiro ao último minuto.",
  },
  {
    title: "Presença e ativações",
    description:
      "O Igor na sua inauguração, lançamento ou evento, com conteúdo ao vivo para as redes.",
  },
];

// TODO: trocar pelas marcas reais. Se tiver logo, dá para exibir a imagem no lugar do nome.
export const brands = [
  "Marca 01",
  "Marca 02",
  "Marca 03",
  "Marca 04",
  "Marca 05",
  "Marca 06",
  "Marca 07",
  "Marca 08",
];

export type EventItem = {
  title: string;
  date: string; // ISO: AAAA-MM-DD
  city: string;
  venue: string;
  ticketUrl?: string;
};

// TODO: preencher com as datas reais (data em AAAA-MM-DD). Eventos com data passada vão para
// "Já aconteceu" automaticamente. Enquanto a lista estiver vazia, o site mostra um aviso apontando
// para o Instagram.
export const events: EventItem[] = [
  // {
  //   title: "Rayssa conta história",
  //   date: "2026-12-12",
  //   city: "Aracaju - SE",
  //   venue: "Nome do teatro",
  //   ticketUrl: "https://www.sympla.com.br/...",
  // },
];
