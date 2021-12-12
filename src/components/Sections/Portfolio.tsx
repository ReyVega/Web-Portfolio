import { createRef, RefObject, useLayoutEffect, useRef } from "react";
import Profile from "../../assets/jojos.png";

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
          <span
            ref={portfolioNavRefs[0]}
            className="portfolio__item active-portfolio"
            data-filter="all"
            onClick={() => activePortfolio(portfolioNavRefs[0])}
          >
            All
          </span>
          <span
            ref={portfolioNavRefs[1]}
            className="portfolio__item"
            data-filter=".web"
            onClick={() => activePortfolio(portfolioNavRefs[1])}
          >
            Web
          </span>
          <span
            ref={portfolioNavRefs[2]}
            className="portfolio__item"
            data-filter=".app"
            onClick={() => activePortfolio(portfolioNavRefs[2])}
          >
            App
          </span>
          <span
            ref={portfolioNavRefs[3]}
            className="portfolio__item"
            data-filter=".personal"
            onClick={() => activePortfolio(portfolioNavRefs[3])}
          >
            Personal
          </span>
        </div>

        <div ref={portfolio_nav} className="portfolio__container bd-grid">
          <div className="portfolio__content mix web">
            <a href="/#">
              <img src={Profile} alt="" className="portfolio__img" />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Web Development</span>
              <a href="/#">
                <h2 className="portfolio__title">New portfolio item</h2>
              </a>
              <a href="/#" className="button button-link">
                View details
              </a>
            </div>
          </div>

          <div className="portfolio__content mix app">
            <a href="/#">
              <img src={Profile} alt="" className="portfolio__img" />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Web Development</span>
              <a href="/#">
                <h2 className="portfolio__title">New portfolio item</h2>
              </a>
              <a href="/#" className="button button-link">
                View details
              </a>
            </div>
          </div>

          <div className="portfolio__content mix personal">
            <a href="/#">
              <img src={Profile} alt="" className="portfolio__img" />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Web Development</span>
              <a href="/#">
                <h2 className="portfolio__title">New portfolio item</h2>
              </a>
              <a href="/#" className="button button-link">
                View details
              </a>
            </div>
          </div>

          <div className="portfolio__content mix personal">
            <a href="/#">
              <img src={Profile} alt="" className="portfolio__img" />
            </a>
            <div className="portfolio__data">
              <span className="portfolio__subtitle">Web Development</span>
              <a href="/#">
                <h2 className="portfolio__title">New portfolio item</h2>
              </a>
              <a href="/#" className="button button-link">
                View details
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
