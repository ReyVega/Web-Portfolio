import { RefObject } from "react";

interface IPortfolioNavItem {
  reference: RefObject<HTMLSpanElement>;
  data_filter: string;
  title: string;
  activePortfolio: Function;
  isActive?: boolean;
}

function PortfolioNavItem(props: IPortfolioNavItem) {
  return (
    <span
      ref={props.reference}
      className={
        props.isActive ? "portfolio__item active-portfolio" : "portfolio__item"
      }
      data-filter={props.data_filter}
      onClick={() => props.activePortfolio(props.reference)}
    >
      {props.title}
    </span>
  );
}

export default PortfolioNavItem;
