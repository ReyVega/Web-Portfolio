import { RefObject } from "react";

interface IPortfolioNavItem {
  reference: RefObject<HTMLSpanElement>;
  filter: string;
  title: string;
  activePortfolio: Function;
  filterBy: Function;
  isActive?: boolean;
}

function PortfolioNavItem(props: IPortfolioNavItem) {
  return (
    <span
      ref={props.reference}
      className={
        props.isActive ? "portfolio__item active-portfolio" : "portfolio__item"
      }
      data-filter={props.filter}
      onClick={(event) => {
        props.activePortfolio(props.reference);
        props.filterBy(event);
      }}
    >
      {props.title}
    </span>
  );
}

export default PortfolioNavItem;
