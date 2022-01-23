import { createRef, RefObject, useLayoutEffect, useRef } from "react";
import PortfolioItem from "./components/PortfolioItem";
import PortfolioNavItem from "./components/PortfolioNavItem";
import Arch from "../../assets/arch.png";
import Invaders from "../../assets/invaders.png";
import PortfolioImg from "../../assets/portfolio.png";
import Competitive from "../../assets/competitive.png";
import Rythm from "../../assets/rythm.png";
import XVoid from "../../assets/xvoid.png";
import Backend from "../../assets/backend.png";
import Laika from "../../assets/laika.png";
import Minecraft from "../../assets/minecraft.png";

interface IPortfolio {
  reference: RefObject<HTMLElement>;
}

var mixitup = require("mixitup");

function Portfolio(props: IPortfolio) {
  const portfolio_nav = useRef<HTMLDivElement>(null);
  const portfolioNavRefs: RefObject<HTMLSpanElement>[] = Array.from(
    { length: 4 },
    () => createRef()
  );

  useLayoutEffect(() => {
    mixitup(portfolio_nav.current, {
      selectors: {
        target: ".portfolio__content",
      },
      animation: {
        duration: 400,
      },
    });
  }, []);

  const activePortfolio = (item: RefObject<HTMLSpanElement>) => {
    portfolioNavRefs.forEach((ref) => {
      ref.current?.classList.remove("active-portfolio");
    });
    item.current?.classList.add("active-portfolio");
  };

  return (
    <div>
      <section
        ref={props.reference}
        className="portfolio section bd-container"
        id="portfolio"
      >
        <span className="section-subtitle">My works</span>
        <h2 className="section-title">Portfolio</h2>

        <div className="portfolio__nav">
          <PortfolioNavItem
            reference={portfolioNavRefs[0]}
            data_filter="all"
            title="All"
            activePortfolio={activePortfolio}
            isActive={true}
          />

          <PortfolioNavItem
            reference={portfolioNavRefs[1]}
            data_filter=".web"
            title="Web"
            activePortfolio={activePortfolio}
          />

          <PortfolioNavItem
            reference={portfolioNavRefs[2]}
            data_filter=".app"
            title="App"
            activePortfolio={activePortfolio}
          />

          <PortfolioNavItem
            reference={portfolioNavRefs[3]}
            data_filter=".personal"
            title="Personal"
            activePortfolio={activePortfolio}
          />
        </div>

        <div ref={portfolio_nav} className="portfolio__container bd-grid">
          <PortfolioItem
            filter="personal"
            image={String(Arch)}
            subtitle="OS Development"
            title="My Arch Linux"
            href="https://github.com/ReyVega/dotfiles"
          />
          <PortfolioItem
            filter="web"
            image={String(PortfolioImg)}
            subtitle="Web Development"
            title="My Web portfolio"
            href="https://github.com/ReyVega/Web-Portfolio"
          />
          <PortfolioItem
            filter="app"
            image={String(Invaders)}
            subtitle="Videogame Development"
            title="Space Invaders GO"
            href="https://github.com/ReyVega/Space-Invaders-GO"
          />
          <PortfolioItem
            filter="personal"
            image={String(Competitive)}
            subtitle="Training problems"
            title="Competitive Programming"
            href="https://github.com/ReyVega/Competitive-Programming"
          />
          <PortfolioItem
            filter="app"
            image={String(XVoid)}
            subtitle="Videogame Development"
            title="X-VOID"
            href="https://github.com/ReyVega/X-VOID"
          />
          <PortfolioItem
            filter="app"
            image={String(Rythm)}
            subtitle="Mobile App Development"
            title="Rythm"
            href="https://github.com/ReyVega/Rythm"
          />
          <PortfolioItem
            filter="web"
            image={String(Backend)}
            subtitle="Web Development"
            title="Firebase Backend Testing"
            href="https://github.com/ReyVega/Firebase-Backend-Testing"
          />
          <PortfolioItem
            filter="web"
            image={String(Laika)}
            subtitle="Web Development"
            title="Laika Web App"
            href="https://github.com/FundacionLaika/Laika_WebPage"
          />
          <PortfolioItem
            filter="web"
            image={String(Minecraft)}
            subtitle="Web development"
            title="Minecraft World"
            href="https://github.com/ReyVega/minecraft-world"
          />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
