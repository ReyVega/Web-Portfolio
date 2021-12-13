import { createRef, RefObject, useLayoutEffect, useRef } from "react";
import PortfolioItem from "./components/PortfolioItem";
import PortfolioNavItem from "./components/PortfolioNavItem";

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
            image={""}
            subtitle="Web Development"
            title="manos"
            href="/#"
          />
          <PortfolioItem
            filter="personal"
            image={""}
            subtitle="Web Development"
            title="manos"
            href="/#"
          />
          <PortfolioItem
            filter="personal"
            image={""}
            subtitle="Web Development"
            title="manos"
            href="/#"
          />
          <PortfolioItem
            filter="personal"
            image={""}
            subtitle="Web Development"
            title="manos"
            href="/#"
          />
          <PortfolioItem
            filter="personal"
            image={""}
            subtitle="Web Development"
            title="manos"
            href="/#"
          />
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
