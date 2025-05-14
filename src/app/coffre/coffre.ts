export type Lot = {
  nom: string;
  image: string;
};

export const lots: Lot[] = [
  { nom: 'Jackpot', image: '/jackpot.png' },
  { nom: 'Stylo', image: '/pen.png' },
  { nom: 'Perdu', image: '/red_cross.png' },
];

export const tirerAuSort = (): Lot => {
  const index = Math.floor(Math.random() * lots.length);
  return lots[index];
};
