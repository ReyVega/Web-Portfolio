import Arch from "../../../assets/arch.png";
import PortfolioImg from "../../../assets/portfolio.png";
import Invaders from "../../../assets/invaders.png";
import Competitive from "../../../assets/competitive.png";
import XVoid from "../../../assets/xvoid.png";
import Rythm from "../../../assets/rythm.png";
import Backend from "../../../assets/backend.png";
import Laika from "../../../assets/laika.png";
import Minecraft from "../../../assets/minecraft.png";
export interface ITable {
  filter: string;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  href: string;
}

export interface IButton {
  title: string;
  filter: string;
}

export const table: ITable[] = [
  {
    filter: "personal",
    image: String(Arch),
    subtitle: "OS Development",
    title: "My Arch Linux",
    description: 'My personal dotfiles to easily replicate my Linux setup and of course... "I use Arch btw!"',
    href: "https://github.com/ReyVega/dotfiles",
  },
  {
    filter: "web",
    image: String(PortfolioImg),
    subtitle: "Web Development",
    title: "My Web Portfolio",
    description: "My personal web portfolio built with React.js, TypeScript, Framer Motion and other libraries",
    href: "https://github.com/ReyVega/Web-Portfolio",
  },
  {
    filter: "app",
    image: String(Invaders),
    subtitle: "Videogame Development",
    title: "Space Invaders GO",
    description: 'An imitation of the famous videogame "Space Invaders" built with Go and Pixel',
    href: "https://github.com/ReyVega/Space-Invaders-GO",
  },
  {
    filter: "personal",
    image: String(Competitive),
    subtitle: "Training problems",
    title: "Competitive Programming",
    description: "My portfolio of solutions to competitve programming problems, trying to be better than yesterday",
    href: "https://github.com/ReyVega/Competitive-Programming",
  },
  {
    filter: "app",
    image: String(XVoid),
    subtitle: "Videogame Development",
    title: "X-VOID",
    description: "A videogame built with Java which I created to put into practice many programming concepts",
    href: "https://github.com/ReyVega/X-VOID",
  },
  {
    filter: "app",
    image: String(Rythm),
    subtitle: "Mobile App Development",
    title: "Rythm",
    description: "An imitation of Spotify, a mobile app where you can search, listen and manage your favorite music ",
    href: "https://github.com/ReyVega/Rythm",
  },
  {
    filter: "web",
    image: String(Backend),
    subtitle: "Web Development",
    title: "Firebase Backend Testing",
    description: "A backend project which helped me to understand how APIs, security and architectures work",
    href: "https://github.com/ReyVega/Firebase-Backend-Testing",
  },
  {
    filter: "web",
    image: String(Laika),
    subtitle: "Web Development",
    title: "Laika Web App",
    description: "A web app which has helped an association to managed their rescued animals expedients",
    href: "https://github.com/FundacionLaika/Laika_WebPage",
  },
  {
    filter: "web",
    image: String(Minecraft),
    subtitle: "Web development",
    title: "Minecraft World",
    description: "A web app which shows a minecraft world model built with React.js, TypeScript, Three.js and Blender",
    href: "https://github.com/ReyVega/minecraft-world",
  },
];

export const buttons: IButton[] = [
  {
    title: "All",
    filter: "all",
  },
  {
    title: "Web",
    filter: "web",
  },
  {
    title: "App",
    filter: "app",
  },
  {
    title: "Personal",
    filter: "personal",
  },
];

export const getTable = () => {
  return table;
};

export const filterTable = (filter: string | null) => {
  let filteredTable = getTable().filter((type) => type.filter === filter);
  return filteredTable;
};
