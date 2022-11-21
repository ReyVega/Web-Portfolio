import { motion } from "framer-motion";

interface IPortfolioItem {
  image: string;
  subtitle: string;
  title: string;
  description: string;
  href: string;
}

function PortfolioItem(props: IPortfolioItem) {
  return (
    <div>
      <motion.div
        className={"portfolio__content"}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a href={"#open-modal-" + props.title}>
          <img src={props.image} alt="" className="portfolio__img" />
          <div className="portfolio__data">
            <span className="portfolio__subtitle">{props.subtitle}</span>
            <h2 className="portfolio__title">{props.title}</h2>
            <span className="button button-link">View details</span>
          </div>
        </a>
      </motion.div>

      <div id={"open-modal-" + props.title} className="modal__mask">
        <a href="#close" title="Close" className="body__close"></a>
        <div className="modal__box">
          <img src={props.image} alt="" className="modal__img" />
          <div className="modal__data">
            <h2 className="modal__title">{props.title}</h2>
            <span className="modal__subtitle">{props.subtitle}</span>

            <p className="modal__description">
             {props.description}
            </p>
            <a href={props.href} target="_blank">
              <span className="button button-link">View repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
