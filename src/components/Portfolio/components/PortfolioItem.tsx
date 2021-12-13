interface IPortfolioItem {
  filter: string;
  image: string;
  subtitle: string;
  title: string;
  href: string;
}

function PortfolioItem(props: IPortfolioItem) {
  return (
    <div className={"portfolio__content mix " + props.filter}>
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
    </div>
  );
}

export default PortfolioItem;
