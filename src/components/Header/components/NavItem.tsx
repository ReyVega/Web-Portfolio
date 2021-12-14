import { RefObject } from "react";

interface INavItem {
  reference: RefObject<HTMLAnchorElement>;
  href: string;
  hideMenu: Function;
  isActive?: boolean;
  title: string;
}

function NavItem(props: INavItem) {
  return (
    <li className="nav__item">
      <a
        ref={props.reference}
        href={props.href}
        className={props.isActive ? "nav__link active-link" : "nav__link"}
        onClick={() => props.hideMenu()}
      >
        {props.title}
      </a>
    </li>
  );
}

export default NavItem;
