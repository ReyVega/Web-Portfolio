export interface ITable {
  filter: string;
  image: string;
  subtitle: string;
  title: string;
  href: string;
}

export interface IButton {
  title: string;
  filter: string;
}

export const table: ITable[] = [
  {
    filter: "personal",
    image: "./src/assets/arch.png",
    subtitle: "OS Development",
    title: "My Arch Linux",
    href: "https://github.com/ReyVega/dotfiles",
  },
  {
    filter: "web",
    image: "./src/assets/portfolio.png",
    subtitle: "Web Development",
    title: "My Web Portfolio",
    href: "https://github.com/ReyVega/Web-Portfolio",
  },
  {
    filter: "app",
    image: "./src/assets/invaders.png",
    subtitle: "Videogame Development",
    title: "Space Invaders GO",
    href: "https://github.com/ReyVega/Space-Invaders-GO",
  },
  {
    filter: "personal",
    image: "./src/assets/competitive.png",
    subtitle: "Training problems",
    title: "Competitive Programming",
    href: "https://github.com/ReyVega/Competitive-Programming",
  },
  {
    filter: "app",
    image: "./src/assets/xvoid.png",
    subtitle: "Videogame Development",
    title: "X-VOID",
    href: "https://github.com/ReyVega/X-VOID",
  },
  {
    filter: "app",
    image: "./src/assets/rythm.png",
    subtitle: "Mobile App Development",
    title: "Rythm",
    href: "https://github.com/ReyVega/Rythm",
  },
  {
    filter: "web",
    image: "./src/assets/backend.png",
    subtitle: "Web Development",
    title: "Firebase Backend Testing",
    href: "https://github.com/ReyVega/Firebase-Backend-Testing",
  },
  {
    filter: "web",
    image: "./src/assets/laika.png",
    subtitle: "Web Development",
    title: "Laika Web App",
    href: "https://github.com/FundacionLaika/Laika_WebPage",
  },
  {
    filter: "web",
    image: "./src/assets/minecraft.png",
    subtitle: "Web development",
    title: "Minecraft World",
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
