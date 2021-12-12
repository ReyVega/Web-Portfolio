import { RefObject } from "react";
// import mixitup from 'mixitup';
import Profile from "../../assets/jojos.png";

interface IPortfolio {
  reference: RefObject<HTMLElement>;
}


// const mixer = mixitup('.portfolio__container', {
//     selector: {
//         target: '.portfolio__content',
//     },
//     animation: {
//         duration: 400
//     }
// })

function Portfolio(props: IPortfolio) {
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
            <span className="portfolio__item" data-filter="all">All</span>
            <span className="portfolio__item" data-filer=".web">Web</span>
            <span className="portfolio__item" data-filter=".app">App</span>
            <span className="portfolio__item" data-filter=".personal">Personal</span>
        </div>


        <div className="portfolio__container bd-grid">
            <div className="portfolio__content">
                <a href="/#"><img src={Profile} alt="" className="portfolio__img"/></a>
                <div className="portfolio__data">
                    <span className="portfolio__subtitle">Web Development</span>
                    <a href="/#"><h2 className="portfolio__title">New portfolio item</h2></a>
                    <a href="/#" className="button button-link">View details</a>
                </div>
            </div>

            <div className="portfolio__content">
                <a href="/#"><img src={Profile} alt="" className="portfolio__img"/></a>
                <div className="portfolio__data">
                    <span className="portfolio__subtitle">Web Development</span>
                    <a href="/#"><h2 className="portfolio__title">New portfolio item</h2></a>
                    <a href="/#" className="button button-link">View details</a>
                </div>
            </div>

            <div className="portfolio__content">
                <a href="/#"><img src={Profile} alt="" className="portfolio__img"/></a>
                <div className="portfolio__data">
                    <span className="portfolio__subtitle">Web Development</span>
                    <a href="/#"><h2 className="portfolio__title">New portfolio item</h2></a>
                    <a href="/#" className="button button-link">View details</a>
                </div>
            </div>

        </div>
      </section>
    </div>
  );
}

export default Portfolio;
