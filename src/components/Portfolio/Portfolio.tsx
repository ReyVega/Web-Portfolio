import { createRef, RefObject, useLayoutEffect, useState } from "react";
import { buttons, getTable, filterTable, ITable } from "./data/data";
import PortfolioItem from "./components/PortfolioItem";
import PortfolioNavItem from "./components/PortfolioNavItem";
import { AnimatePresence } from "framer-motion";

interface IPortfolio {
  reference: RefObject<HTMLElement>;
}

function Portfolio(props: IPortfolio) {
  const portfolioNavRefs: RefObject<HTMLSpanElement>[] = Array.from(
    { length: 4 },
    () => createRef()
  );
  const [items, setItems] = useState<ITable[]>([]);

  useLayoutEffect(() => {
    setItems(getTable());
  }, []);

  const activePortfolio = (item: RefObject<HTMLSpanElement>) => {
    portfolioNavRefs.forEach((ref) => {
      ref.current?.classList.remove("active-portfolio");
    });
    item.current?.classList.add("active-portfolio");
  };

  const filterBy = (event: React.MouseEvent<HTMLSpanElement>) => {
    let filter = event.currentTarget.getAttribute("data-filter");

    filter === "all" ? setItems(getTable()) : setItems(filterTable(filter));
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
          {buttons &&
            buttons.map((button, index) => {
              return index === 0 ? (
                <PortfolioNavItem
                  key={index}
                  reference={portfolioNavRefs[index]}
                  filter={button.filter}
                  title={button.title}
                  activePortfolio={activePortfolio}
                  filterBy={filterBy}
                  isActive={true}
                />
              ) : (
                <PortfolioNavItem
                  key={index}
                  reference={portfolioNavRefs[index]}
                  filter={button.filter}
                  title={button.title}
                  filterBy={filterBy}
                  activePortfolio={activePortfolio}
                />
              );
            })}
        </div>

        <div className="portfolio__container bd-grid">
          <AnimatePresence>
            {items &&
              items.map((item, index) => {
                return (
                  <PortfolioItem
                    key={index}
                    image={item.image}
                    subtitle={item.subtitle}
                    title={item.title}
                    description={item.description}
                    href={item.href}
                  />
                );
              })}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
