import { motion } from "framer-motion";

interface IPortfolioItem {
  image: string;
  subtitle: string;
  title: string;
  href: string;
}

function PortfolioItem(props: IPortfolioItem) {
  return (
    <motion.div
      className={"portfolio__content"}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a href={props.href}>
        <img src={props.image} alt="" className="portfolio__img" />
      </a>
      <div className="portfolio__data">
        <span className="portfolio__subtitle">{props.subtitle}</span>
        <a href={props.href}>
          <h2 className="portfolio__title">{props.title}</h2>
        </a>
        <a href={props.href} className="button button-link">
          View details
        </a>
      </div>
    </motion.div>
  );
}

export default PortfolioItem;
