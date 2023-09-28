import Hero from './Hero';

const minXp = 15;
const maxXp = 50;

export default function gainXp(hero : Hero) {
  const xp = Math.floor(Math.random() * (maxXp - minXp + 1) + minXp);
  hero.addXp(xp);
}
