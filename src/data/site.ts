// Todo o conteúdo do site fica aqui. Bio e serviços foram escritos a partir do perfil do Instagram;
// marcas, eventos, e-mail e WhatsApp ainda são PLACEHOLDERS (veja os TODO).

export const profile = {
  name: "Igor Nascimento",
  handle: "@igornascimento_a",
  tagline: "Ator, humorista e criador de conteúdo",
  photo: "/gallery/14.jpg", // foto do topo do site (arquivo em /public)
  instagram: "https://www.instagram.com/igornascimento_a/",
  email: "contato@igornascimento.com.br", // TODO: e-mail real
  whatsapp: "557988390389", // DDI 55 + DDD 79 + número, só dígitos
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

// Marcas com que o Igor já trabalhou. Os logos ficam em public/brands/ (PNG com fundo transparente).
// "onDark": true para logos brancos, que precisam de um fundo escuro para aparecer.
export type Brand = { name: string; logo: string; width: number; height: number; onDark?: boolean };

export const brands: Brand[] = [
  { name: "Maestro Centro de Beleza", logo: "/brands/maestro.png", width: 490, height: 220, onDark: true },
  { name: "Auto Center Presidente", logo: "/brands/auto-center-presidente.png", width: 520, height: 130 },
  { name: "Speed Telecom", logo: "/brands/speed-telecom.png", width: 520, height: 182, onDark: true },
  { name: "Rede Presidente", logo: "/brands/rede-presidente.png", width: 520, height: 147 },
  { name: "Kcell Celulares", logo: "/brands/kcell.png", width: 472, height: 220 },
  { name: "Maravilha Motos", logo: "/brands/maravilha-motos.png", width: 520, height: 190 },
  { name: "Futura Climatização e Energia Solar", logo: "/brands/futura.png", width: 520, height: 163 },
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

// Datas já fechadas na agenda do Igor, mostradas no calendário da seção "Shows e eventos".
// "particular" = show fechado com um cliente (o site não revela quem); aparece só como "data fechada".
// ATENÇÃO: as datas abaixo são SIMULADAS (novembro e dezembro de 2027) para demonstrar o calendário.
// Troque pelas datas reais antes de publicar. Data em AAAA-MM-DD. Os meses exibidos vão do primeiro
// ao último mês desta lista, e os eventos públicos de "events" também entram no calendário.
export type Booking = { date: string; kind: "particular" };

export const bookings: Booking[] = [
  { date: "2027-11-05", kind: "particular" },
  { date: "2027-11-13", kind: "particular" },
  { date: "2027-11-20", kind: "particular" },
  { date: "2027-11-26", kind: "particular" },
  { date: "2027-12-03", kind: "particular" },
  { date: "2027-12-10", kind: "particular" },
  { date: "2027-12-11", kind: "particular" },
  { date: "2027-12-17", kind: "particular" },
  { date: "2027-12-18", kind: "particular" },
];

export type VideoItem = { url: string; title: string };

// Vídeos de cenas dos shows. Cole o link do YouTube (qualquer formato: youtu.be, watch?v=, shorts...)
// e um título curto. Enquanto a lista estiver vazia, a seção "Vídeos" não aparece no site.
export const videos: VideoItem[] = [
  // { url: "https://www.youtube.com/watch?v=XXXXXXXXXXX", title: "Trecho do stand-up em Aracaju" },
];

export type GalleryPhoto = { src: string; width: number; height: number; alt: string };

// Fotos em public/gallery. Para acrescentar uma, copie o arquivo para lá e adicione uma linha aqui
// (o ideal é que a maior lateral tenha uns 2000px). A ordem desta lista é a ordem na página.
export const gallery: GalleryPhoto[] = [
  { src: "/gallery/14.jpg", width: 1125, height: 2000, alt: "Igor no palco, de microfone na mão, gesticulando durante o show" },
  { src: "/gallery/02.jpg", width: 2000, height: 1125, alt: "Palco do teatro visto de cima, com Igor em cena e a plateia sentada nas poltronas vermelhas" },
  { src: "/gallery/10.jpg", width: 2000, height: 1125, alt: "Casal na plateia rindo durante o show" },
  { src: "/gallery/04.jpg", width: 2000, height: 1125, alt: "Igor com o microfone, levando a mão à cabeça no palco" },
  { src: "/gallery/01.jpg", width: 2000, height: 1125, alt: "Mulher na plateia sorrindo com a mão no queixo" },
  { src: "/gallery/08.jpg", width: 2000, height: 1500, alt: "Igor falando ao microfone ao lado do suporte de tablet" },
  { src: "/gallery/05.jpg", width: 2000, height: 1125, alt: "Igor de costas para a plateia, com o texto do show no tablet ao lado" },
  { src: "/gallery/11.jpg", width: 2000, height: 1125, alt: "Plateia sorrindo e acompanhando o show" },
  { src: "/gallery/03.jpg", width: 2000, height: 1125, alt: "Outro ângulo do palco, com Igor em cena e a plateia em primeiro plano" },
  { src: "/gallery/06.jpg", width: 2000, height: 1125, alt: "Igor de óculos, de perfil, falando ao microfone" },
  { src: "/gallery/12.jpg", width: 2000, height: 1125, alt: "Fileira de espectadores rindo e prestando atenção no show" },
  { src: "/gallery/16.jpg", width: 2000, height: 1125, alt: "Igor no palco, de costas, com a mão na testa e o microfone na outra mão" },
  { src: "/gallery/07.jpg", width: 2000, height: 1500, alt: "Plateia sentada assistindo ao show de perto" },
  { src: "/gallery/15.jpg", width: 2000, height: 1125, alt: "Espectadores aplaudindo e rindo ao lado do palco" },
  { src: "/gallery/09.jpg", width: 2000, height: 1125, alt: "Espectadora de perfil assistindo ao show" },
  { src: "/gallery/13.jpg", width: 2000, height: 1125, alt: "Plateia lotada do teatro acompanhando a apresentação" },
];
